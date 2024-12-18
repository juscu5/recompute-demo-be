const { models } = require("../../_shared/config/config-db");
const { Op, literal } = require("sequelize");
const moment = require("moment");
const {
  SalesFileJoin,
  DeliveryReceiptFileJoin,
  SalesReturnFileJoin,
  SalesReturnToFileJoin,
  ReceivingFileJoin,
  PurchaseReturnJoin,
  InventoryTranJoin,
  InventoryTranStt2Join,
  InOutTableJoin,
  sttTableJoin,
  phyisicalCountJoin,
} = require("./joinservices");
const { GenPackage } = require("./genpackage");
const {
  RecomStkBal2,
  RecomMulti2,
  SaveBatchFile2,
  SaveBinFile2,
} = require("./recomfunc");
const { UserActivityLog } = require("../../_shared/services/activitylog");

const RecomItemBalance = async (req, res, data) => {
  //#region Declaration and Variable Initialization
  //state response loading
  let totalData = 0;
  let totalProgress = 0;
  let currentProgress = 0;

  //State initialize variable needed Status
  const batchSize = 1000;

  //System Parameters 1. This is only a mock base from DB. You can add connection.
  const multiwar = 1;
  const crilvltyp = "MULTI";

  //System Parameters 2. This is only a mock base from DB. You can add connection.
  const sallinkinv = "N";
  const cslinkinv = "Y";
  const drslinkinv = "N";
  const drlinkinv = "Y";
  const dr2linkinv = "Y";
  const phcprio = 20; //SECOND or FIRST (if First = 1 and if Second = 20)

  //State initialize of the Checbox from FrontEnd. Can be Parameter
  const chkAdv = data.chkAdv; //check state of Advance
  const chkSal = data.chkSal; //check state of Sales
  const chkSrt = data.chkSrt; //check state of Sales Return
  const chkRec = data.chkRec; //check state of Receiving
  const chkPrt = data.chkPrt; //check state of Purchase Return
  const chkInv = data.chkInv; //check state of Inventory Transaction
  const chkPhc = data.chkPhc; //check state of Physical Count

  //State initialize of the Text/Date from FrontEnd. Can be Parameter
  const dateFrom = data.dateFrom
    ? moment(data.dateFrom).format("MM/DD/YYYY")
    : moment("01/01/1800").format("MM/DD/YYYY");
  const dateTo = data.dateTo
    ? moment(data.dateTo).format("MM/DD/YYYY")
    : moment("01/01/2999").format("MM/DD/YYYY");
  const itemFrom = data.itemFrom ? data.itemFrom : "";
  const itemTo = data.itemTo ? data.itemTo : "";
  //#endregion

  //#region Item Filter (prevent repeating statement)
  let filterDate = { trndte: { [Op.gte]: dateFrom, [Op.lte]: dateTo } };
  let filterRecid = { recid: { [Op.gt]: 0 } };

  // Conditional logic for itemFrom
  if (itemFrom) {
    filterDate = {
      ...filterDate,
      itmcde: { [Op.gte]: itemFrom }, // Add to filter1
    };
    filterRecid = {
      ...filterRecid,
      itmcde: { [Op.gte]: itemFrom }, // Add to filter2
    };
  }

  // Conditional logic for itemTo
  if (itemTo) {
    filterDate = {
      ...filterDate,
      itmcde: { ...filterDate.itmcde, [Op.lte]: itemTo },
    };
    filterRecid = {
      ...filterRecid,
      itmcde: { ...filterRecid.itmcde, [Op.lte]: itemTo },
    };
  }

  // Combine all filters into a single where clause
  const filters = {
    ...filterDate,
    ...filterRecid,
  };
  //#endregion

  //#region Item Process
  console.log("Initializing Recomputing Inventory Balance");
  res.write(
    `data: ${JSON.stringify({
      totalProgress,
      msg: `Initializing Recomputing Inventory Balance`,
    })}\n\n`
  );

  try {
    // #region Conditional Statement
    // Advance;
    if (chkAdv) {
      res.write(
        `data: ${JSON.stringify({
          totalProgress,
          msg: `Rebuilding Stock Card`,
        })}\n\n`
      );
      console.log("Advance Starting");
      await models.stockfile.destroy({ where: filters });
      await models.itemwarehouse.destroy({
        where: { ...filterRecid, crilvl: 0 },
      });
      await models.itemwarehouse.update(
        { itmbal: 0, stritmval: "" },
        { where: filterRecid }
      );
    } else {
      res.write(
        `data: ${JSON.stringify({
          totalProgress,
          msg: `Rebuilding Stock Card`,
        })}\n\n`
      );
      console.log("Not advance Starting");
      await models.stockfile.destroy({ truncate: true });
      if (multiwar !== 1 && crilvltyp === "MULTI") {
        await models.itemwarehouse.destroy({
          where: filterRecid,
          crilvl: 0,
        });
        await models.itemwarehouse.update({ itmbal: 0, stritmbal: "" });
      } else {
        await models.itemwarehouse.destroy({ truncate: true });
      }
    } //done

    //Sales
    if (chkSal) {
      res.write(
        `data: ${JSON.stringify({
          totalProgress,
          msg: `Rebuilding Sales`,
        })}\n\n`
      );
      console.log("Rebuilding Sales");
      let salFilter = {};
      let drFilter = {};
      await models.stockfile.destroy({
        where: { trncde: "SAL", ...filters },
      });

      //reusable sales inner join and insert (Refractored)
      const sfProcess = async (salFilter) => {
        const sfij = await SalesFileJoin(salFilter, filterDate);
        for (let i = 0; i < sfij.length; i += batchSize) {
          const batch = sfij.slice(i, i + batchSize);
          await models.stockfile.bulkCreate(batch);
        }
      };

      //reusable delivery receipt file inner join and insert (Refractored)
      const drProcess = async (drFilter) => {
        const opt = dr2linkinv;
        const drij = await DeliveryReceiptFileJoin(drFilter, filterDate, opt);
        for (let i = 0; i < drij.length; i += batchSize) {
          const batch = drij.slice(i, i + batchSize);
          await models.stockfile.bulkCreate(batch);
        }
      };

      //sallinkinv
      if (sallinkinv === "Y") {
        salFilter = { chkasy: 0, trncde: "SAL", itmtyp: "INVENTORY" };
        await sfProcess(salFilter);
        await GenPackage("salesfile2", "SAL", filters);
      }

      salFilter = { chkasy: 1, trncde: "SAL", itmtyp: "INVENTORY" };
      await sfProcess(salFilter);
      await models.stockfile.destroy({
        where: { trncde: "CS", ...filters },
      });

      //cslinkinv
      if (cslinkinv === "Y") {
        salFilter = { trncde: "CS", itmtyp: "INVENTORY" };
        await sfProcess(salFilter);
        await GenPackage("salesfile2", "CS", filters);
      }

      await models.stockfile.destroy({
        where: { trncde: "DRS", ...filters },
      });

      //drslinkinv
      if (drslinkinv === "Y") {
        salFilter = { trncde: "DRS", itmtyp: "INVENTORY" };
        await sfProcess(salFilter);
        await GenPackage("salesfile2", "DRS", filters);
      }

      await models.stockfile.destroy({
        where: { trncde: "DR", ...filters },
      });

      //drlinkinv
      if (drlinkinv === "Y") {
        drFilter = { trncde: "DR", itmtyp: "INVENTORY" };
        await drProcess(drFilter);
        await GenPackage("deliveryreceiptfile2", "DR", filters);
      }

      await models.stockfile.destroy({
        where: { trncde: "DR2", ...filters },
      });

      //dr2linkinv
      if (dr2linkinv === "Y") {
        drFilter = { trncde: "DR2", itmtyp: "INVENTORY" };
        await drProcess(drFilter);
        await GenPackage("deliveryreceiptfile2", "DR2", filters);
      }

      await models.stockfile.update(
        { factor: -1 },
        {
          where: { trncde: { [Op.in]: ["SAL", "CS", "DRS", "DR", "DR2"] } },
        }
      );
    } //done

    //Sales Return
    if (chkSrt) {
      res.write(
        `data: ${JSON.stringify({
          totalProgress,
          msg: `Rebuilding Sales Return`,
        })}\n\n`
      );
      console.log("Rebuilding Sales Return");
      await models.stockfile.destroy({
        where: { trncde: "SRT", ...filters },
      });

      //salesreturnfile2 injoin salesreturnfile1 and insert
      const salRetFilter = { trncde: "SRT", itmtyp: "INVENTORY" };
      const srij = await SalesReturnFileJoin(salRetFilter, filterDate);
      for (let i = 0; i < srij.length; i += batchSize) {
        const batch = srij.slice(i, i + batchSize);
        await models.stockfile.bulkCreate(batch);
      }

      //salesreturntofile2 injoin salesreturntofile1 and insert
      const salRetToFilter = { trncde: "SRT", itmtyp: "INVENTORY" };
      const srtij = await SalesReturnToFileJoin(salRetToFilter, filterDate);
      for (let i = 0; i < srtij.length; i += batchSize) {
        const batch = srtij.slice(i, i + batchSize);
        await models.stockfile.bulkCreate(batch);
      }

      await models.stockfile.update(
        { factor: 1 },
        { where: { trncde: "SRT" } }
      );
    } //done

    //Receiving
    if (chkRec) {
      res.write(
        `data: ${JSON.stringify({
          totalProgress,
          msg: `Rebuilding Receiving Transaction`,
        })}\n\n`
      );
      console.log("Rebuilding Receiving File");
      //receivingFileJoin
      const rfFilter = { trncde: "REC", itmtyp: "INVENTORY" };
      const rfij = await ReceivingFileJoin(rfFilter, filterDate);
      for (let i = 0; i < rfij.length; i += batchSize) {
        const batch = rfij.slice(i, i + batchSize);
        await models.stockfile.bulkCreate(batch);
      }

      await models.stockfile.update(
        { factor: 1 },
        { where: { trncde: "REC" } }
      );
    } //done

    //Purchase Return
    if (chkPrt) {
      res.write(
        `data: ${JSON.stringify({
          totalProgress,
          msg: `Rebuilding Purchase Return`,
        })}\n\n`
      );
      console.log("Rebuilding Purchase Return");

      //purchaseReturnJoin
      const prFilter = { trncde: "PRT", itmtyp: "INVENTORY" };
      const prij = await PurchaseReturnJoin(prFilter, filterDate);
      for (let i = 0; i < prij.length; i += batchSize) {
        const batch = prij.slice(i, i + batchSize);
        await models.stockfile.bulkCreate(batch);
      }

      await models.stockfile.update(
        { factor: 1 },
        { where: { trncde: "PRT" } }
      );
    } //done

    //Inventory Transaction
    if (chkInv) {
      res.write(
        `data: ${JSON.stringify({
          totalProgress,
          msg: `Rebuilding Transaction`,
        })}\n\n`
      );
      console.log("Rebuilding Transaction");
      await models.stockfile.destroy({
        where: {
          trncde: { [Op.or]: ["ADJ", "IN", "OUT", "STT"] },
          ...filters,
        },
      });

      //Dynamic Inventory Transaction inner join and insert
      const itProcess = async (itFilter, priority) => {
        const itij = await InventoryTranJoin(itFilter, priority, filterDate);
        for (let i = 0; i < itij.length; i += batchSize) {
          const batch = itij.slice(i, i + batchSize);
          await models.stockfile.bulkCreate(batch);
        }
      };

      const itFilterConfig = [
        { trncde: "IN", itmtyp: "INVENTORY", priority: 7 },
        { trncde: "ADJ", itmtyp: "INVENTORY", priority: 8 },
        { trncde: "OUT", itmtyp: "INVENTORY", priority: 12 },
        { trncde: "STT", itmtyp: "INVENTORY", priority: 9 },
      ];

      //Dynamic Insert Diff Filter and Priority (iterate on itFilterConfig)
      for (const config of itFilterConfig) {
        const { trncde, itmtyp, priority } = config;
        const itFilter = { trncde, itmtyp };
        await itProcess(itFilter, priority);
      }

      //STT2 Insert
      const itSTT2Filter = { trncde: "STT", itmtyp: "INVENTORY" };
      const itijSTT2 = await InventoryTranStt2Join(itSTT2Filter, filterDate);
      for (let i = 0; i < itijSTT2.length; i += batchSize) {
        const batch = itijSTT2.slice(i, i + batchSize);
        await models.stockfile.bulkCreate(batch);
      }

      //In and Out Insert
      const inOutTblName = ["productionfile", "transferpostingfile"];
      for (const inOut of inOutTblName) {
        const fOut = { trncde: "OUT", itmtyp: "INVENTORY" };
        const fIn = { trncde: "IN", itmtyp: "INVENTORY" };

        //process
        const inOutProcess = async (inOut, fil, prio) => {
          const insert = await InOutTableJoin(inOut, fil, prio, filterDate);
          for (let i = 0; i < insert.length; i += batchSize) {
            const batch = insert.slice(i, i + batchSize);
            await models.stockfile.bulkCreate(batch);
          }
        };
        //out insert
        await inOutProcess(inOut, fOut, 12);
        //in insert
        await inOutProcess(inOut, fIn, 7);
      }

      //STT Insert
      const sttTblName = [
        "deliverytosuppliertransferorderfile",
        "purchasetofile",
        "warehousetransferorderfile",
        "storagelocationtransferfile",
        "stockreplenishmenttofile",
        "wavepicklistfile",
      ];

      for (const stt of sttTblName) {
        const fStt = { trncde: "STT", itmtyp: "INVENTORY" };
        const sttProcess = async (stt, sttNum) => {
          const sttPrc = await sttTableJoin(stt, fStt, sttNum, filterDate);
          for (let i = 0; i < sttPrc.length; i += batchSize) {
            const batch = sttPrc.slice(i, i + batchSize);
            await models.stockfile.bulkCreate(batch);
          }
        };
        //stt1 insert
        await sttProcess(stt, 1);
        //stt2 insert
        await sttProcess(stt, 2);
      }
    } //done

    //Physical Count
    if (chkPhc) {
      res.write(
        `data: ${JSON.stringify({
          totalProgress,
          msg: `Rebuilding Physical Count`,
        })}\n\n`
      );
      console.log("Rebuilding Physical Count");
      await models.stockfile.destroy({
        where: { trncde: "PHC", ...filters },
      });
      let key;

      //physical count process
      const physProcess = async (ftr, phcprio, key) => {
        const pro = await phyisicalCountJoin(ftr, phcprio, filterDate, key);
        for (let i = 0; i < pro.length; i += batchSize) {
          const batch = pro.slice(i, i + batchSize);
          await models.stockfile.bulkCreate(batch);
        }
      };

      //PHC
      console.log("Rebuilding PHC");
      key = "PHC";
      const phFtr = {
        trncde: key,
        itmtyp: "INVENTORY",
        stritmqty: { [Op.ne]: "", [Op.not]: null },
      };
      await physProcess(phFtr, phcprio, key);
      //PCC
      console.log("Rebuilding PCC");
      await models.stockfile.destroy({
        where: { trncde: "PCC", ...filterDate },
      });
      key = "PCC";
      const pcFtr = {
        trncde: key,
        itmtyp: "INVENTORY",
        stritmqty: { [Op.ne]: "", [Op.not]: null },
      };
      await physProcess(pcFtr, phcprio, key);
    } //done
    //#endregion

    //update stockfile
    console.log("Updating and rebuilding Stock File");
    await models.stockfile.update(
      { netvatamt: literal("extprc") },
      {
        where: {
          [Op.or]: [{ netvatamt: 0 }, { netvatamt: { [Op.is]: null } }],
        },
      }
    );

    const stockListAttributes = [
      "itmcde",
      "itmdsc",
      "warcde",
      "warcdenum",
      "warloccde",
    ];

    const stockFileList = await models.stockfile.findAll({
      where: filters,
      attributes: stockListAttributes,
      group: stockListAttributes,
      raw: true,
    });
    totalData = stockFileList.length;
    for (const sflist of stockFileList) {
      currentProgress++;
      totalProgress = Math.round((currentProgress / totalData) * 100);
      res.write(
        `data: ${JSON.stringify({
          totalProgress,
          msg: `Recomputing ${currentProgress}/${stockFileList.length} item no:  ${sflist.itmcde} - ${sflist.itmdsc}`,
        })}\n\n`
      );

      console.log("Recomputing Item Balance and Multi-Warehouse");
      await RecomStkBal2(
        dateFrom,
        sflist.itmcde,
        sflist.itmdsc,
        sflist.warcde,
        "",
        false,
        false
      );
      await RecomMulti2(sflist.itmcde, dateFrom, "", false);
      await UserActivityLog("Recompute Inventory", "Recomputing");
    }

    res.write(
      `data: ${JSON.stringify({
        totalProgress: 100,
        msg: `Done Recomputing Item Balance`,
      })}\n\n`
    );
    res.write(
      `data: ${JSON.stringify({
        totalProgress: 100,
        msg: `Done`,
      })}\n\n`
    );
    return console.log("Done Recompute Balance");
  } catch (e) {
    console.log("There's a problem while running RecomItemBalance: ", e);
  }
  //#endregion
};

const RecomBinBalance = async (req, res, data) => {
  //#region Declaration and Variable Initialization
  //state response loading
  let totalData = 0;
  let totalProgress = 0;
  let currentProgress = 0;

  //System Parameters 2. This is only a mock base from DB. You can add connection.
  const phcprio = 20; //SECOND or FIRST (if First = 1 and if Second = 20)

  //State initialize of the Checbox from FrontEnd. Can be Parameter
  const chkExCldPlcHlder = false;

  //State initialize for the Batch Recompute. Can be a parameter
  const binNumFrom = data.binNumFrom ? data.binNumFrom : "";
  const binNumTo = data.binNumTo ? data.binNumTo : "";
  //#endregion

  //#region Bin Process
  console.log("Starting RecomBINBalance Services");
  try {
    //#region Filter (This can be change, add validation if both are empty)
    let filterBin = { recid: { [Op.ne]: 0 } };
    if (binNumFrom !== "") {
      filterBin.binnum = { [Op.gte]: binNumFrom };
    }
    if (binNumTo !== "") {
      filterBin.binnum = { ...filterBin.binnum, [Op.lte]: binNumTo };
    }
    if (chkExCldPlcHlder) {
      filterBin.binnum = { ...filterBin.binnum, [Op.ne]: "PLACE HOLDER" };
    }
    //#endregion

    //#region Processing
    res.write(
      `data: ${JSON.stringify({
        totalProgress,
        msg: `Processing Bin File`,
      })}\n\n`
    );
    console.log("Processing Bin File");
    if (binNumFrom === "" && binNumTo === "" && !chkExCldPlcHlder) {
      await models.binfile2.destroy({ truncate: true });
    } else {
      await models.binfile2.destroy({ where: filterBin });
    }
    let binNumSelect = await models.binfile2.findAll({
      attributes: ["binnum"],
      raw: true,
    });
    let batchBinnumArr = binNumSelect.map((bin) => bin.binnum);
    let listBinFile1 = await models.binfile1.findAll({
      where: { binnum: { [Op.notIn]: batchBinnumArr }, ...filterBin },
      attributes: ["binnum", "warcde", "warcdenum", "warloccde"],
      order: [["binnum"]],
      raw: true,
    });

    //running fixes got from the php
    res.write(
      `data: ${JSON.stringify({
        totalProgress,
        msg: `Running Fixes`,
      })}\n\n`
    );
    if (!listBinFile1) {
      listBinFile1 = await models.binfile1.findAll({
        where: { binnum: binNumFrom },
        attributes: ["binnum", "warcde", "warcdenum", "warloccde"],
        raw: true,
      });
    }
    //#endregion

    //#region Initializing
    totalData = totalData + listBinFile1.length;
    let ctr = 0;
    for (const insBinFile1 of listBinFile1) {
      ctr++;
      currentProgress++;
      totalProgress = Math.round((currentProgress / totalData) * 100);

      console.log(
        `Bin Number Count: ${ctr}/${listBinFile1.length} Bin No.: ${insBinFile1.binnum}`
      );

      //#region List all binfile on the stockfile and save the binfile
      binNumSelect = await models.binfile1.findAll({
        attributes: ["binnum"],
        where: filterBin,
        raw: true,
      });
      batchBinnumArr = binNumSelect.map((bin) => bin.binnum);
      const listStockFile = await models.stockfile.findAll({
        where: {
          [Op.and]: {
            binnum: { [Op.in]: batchBinnumArr },
            binnum: insBinFile1.binnum,
            warcde: insBinFile1.warcde,
            warcdenum: insBinFile1.warcdenum,
            warloccde: insBinFile1.warloccde,
            ...filterBin,
          },
        },
        group: [
          "itmcde",
          "warcde",
          "binnum",
          "batchnum",
          "mfgdte",
          "expdte",
          "untmea",
        ],
        raw: true,
      });

      for (const insStockFile of listStockFile) {
        await SaveBinFile2(
          insStockFile.itmcde,
          insStockFile.batchnum,
          insStockFile.mfgdte,
          insStockFile.warcde,
          insStockFile.expdte,
          insStockFile.binnum,
          insStockFile.untmea,
          insStockFile.warcdenum,
          insStockFile.warloccde,
          phcprio
        );
        await UserActivityLog(`${insStockFile.binnum}`, "BIN Balance");
        res.write(
          `data: ${JSON.stringify({
            totalProgress,
            msg: `Bin Number Count: ${ctr}/${listBinFile1.length} Bin No: ${insBinFile1.binnum} - Processing Item No: ${insStockFile.itmcde}`,
          })}\n\n`
        );
      }
      //#endregion

      //#region List all the binfile on the pcount and save the binfile
      const docnumSelect = await models.physicalcountfile1.findAll({
        attributes: ["docnum"],
        where: {
          status: "POSTED",
        },
      });
      const batchDocnumArr = docnumSelect.map((sel) => sel.docnum);
      const listPcountFile3 = await models.physicalcountfile3.findAll({
        where: {
          [Op.and]: {
            binnum: { [Op.in]: batchBinnumArr },
            binnum: insBinFile1.binnum,
            warcde: insBinFile1.warcde,
            warcdenum: insBinFile1.warcdenum,
            warloccde: insBinFile1.warloccde,
            docnum: { [Op.in]: batchDocnumArr },
          },
        },
        group: [
          "itmcde",
          "warcde",
          "binnum",
          "batchnum",
          "mfgdte",
          "expdte",
          "untmea",
        ],
        raw: true,
      });

      for (const insPcountFile3 of listPcountFile3) {
        await SaveBinFile2(
          insPcountFile3.itmcde,
          insPcountFile3.batchnum,
          insPcountFile3.mfgdte,
          insPcountFile3.warcde,
          insPcountFile3.expdte,
          insPcountFile3.binnum,
          insPcountFile3.untmea,
          insPcountFile3.warcdenum,
          insPcountFile3.warloccde,
          phcprio
        );
        await UserActivityLog(`${insPcountFile3.binnum}`, "BIN Balance");
        res.write(
          `data: ${JSON.stringify({
            totalProgress,
            msg: `Bin Number Count: ${ctr}/${listBinFile1.length} Bin No: ${insBinFile1.binnum} - Processing Item No: ${insPcountFile3.itmcde}`,
          })}\n\n`
        );
      }
      //#endregion
    }
    //#endregion

    res.write(
      `data: ${JSON.stringify({
        totalProgress: 100,
        msg: `Done Recomputing BIN Balance`,
      })}\n\n`
    );
    res.write(
      `data: ${JSON.stringify({
        totalProgress: 100,
        msg: `Done`,
      })}\n\n`
    );
    return console.log("Done Recompute Bin Item");
  } catch (e) {
    console.log("Error while running RecomBINBalance: ", e);
  }
  //#endregion
};

const RecomBatchBalance = async (req, res, data) => {
  //#region Declaration and Variable Initialization
  //state response loading
  let totalData = 0;
  let totalProgress = 0;
  let currentProgress = 0;

  //System Parameters 2. This is only a mock base from DB. You can add connection.
  const phcprio = 20; //SECOND or FIRST (if First = 1 and if Second = 20)

  //State initialize of the Checbox from FrontEnd. Can be Parameter
  const chkExCldPlcHlder = false;

  //State initialize for the Batch Recompute. Can be a parameter
  const batchNumFrom = data.batchNumFrom ? data.batchNumFrom : "";
  const batchNumTo = data.batchNumTo ? data.batchNumTo : "";
  //#endregion

  //#region Batch Process
  console.log("Starting RecomBatchBalance Services");
  try {
    //#region Filter (This can be change, add validation if both are empty)
    let filterBatch = { recid: { [Op.ne]: 0 } };
    if (batchNumFrom !== "") {
      filterBatch.batchnum = { [Op.gte]: batchNumFrom };
    }
    if (batchNumTo !== "") {
      filterBatch.batchnum = {
        ...filterBatch.batchnum,
        [Op.lte]: batchNumTo,
      };
    }
    //#endregion

    //#region Processing
    console.log("Processing Batch File");
    if (batchNumFrom === "" && batchNumTo === "" && !chkExCldPlcHlder) {
      await models.batchfile2.destroy({ truncate: true });
    } else {
      await models.batchfile2.destroy({ where: filterBatch });
    }

    const batchNums = await models.batchfile2.findAll({
      attributes: ["batchnum"],
      where: { batchnum: { [Op.ne]: null } },
      raw: true,
    });
    const batchNumArray = batchNums.map((btch) => btch.batchnum);
    const listBatchFile = await models.batchfile.findAll({
      where: {
        batchnum: {
          [Op.notIn]: batchNumArray,
        },
        ...filterBatch,
      },
      raw: true,
    });

    const listBatchFilter = listBatchFile.map((file) => file.batchnum);
    const batchFilters = listBatchFilter.join("','");
    //#endregion

    //#region Initializing
    console.log("Initializing");
    totalData = totalData + listBatchFile.length;
    let ctr = 0;
    for (const insBatchFile of listBatchFile) {
      ctr++;
      currentProgress++;
      totalProgress = Math.round((currentProgress / totalData) * 100);
      console.log(
        `Batch Number Count: ${ctr}/${listBatchFile.length} Batch No.: ${insBatchFile.batchnum}`
      );

      //#region List all the warcde from stockfile and physicalcountfile3
      //refractored for reusable listing warcde
      const listingProcess = async (tblName) => {
        const list = await models[`${tblName}`].findAll({
          where: {
            [Op.and]: [
              { batchnum: { [Op.in]: [batchFilters] } },
              { batchnum: { [Op.eq]: insBatchFile.batchnum } },
            ],
          },
          attributes: ["batchnum", "warcde"],
          group: ["warcde"],
          order: [["warcde"]],
          raw: true,
        });

        return list;
      };
      const setListTmpReportFile1 = new Set(); //Optimize than declared array
      const listStockFile = await listingProcess("stockfile");
      for (const insStockFile of listStockFile) {
        setListTmpReportFile1.add(insStockFile.warcde);
      }
      const listPcountFile3 = await listingProcess("physicalcountfile3");
      for (const insPysicalCountFile of listPcountFile3) {
        setListTmpReportFile1.add(insPysicalCountFile.warcde);
      }
      const listTmpReportFile1 = Array.from(setListTmpReportFile1); //same output, an array of unique warcde
      //#endregion
      //iterate on the warcde that listed from stockfile and physicalcountfile3
      for (const insTmpReportFile1 of listTmpReportFile1) {
        //#region listing stockFileTmp and listPcountFile3Tmp base on the list all of warcde
        const listStockFileTmp = await models.stockfile.findAll({
          where: {
            [Op.and]: [
              { batchnum: { [Op.eq]: insBatchFile.batchnum } },
              { itmcde: { [Op.eq]: insBatchFile.itmcde } },
              { mfgdte: { [Op.eq]: insBatchFile.mfgdte } },
              { expdte: { [Op.eq]: insBatchFile.expdte } },
              { warcde: { [Op.eq]: insTmpReportFile1 } },
              { trncde: { [Op.ne]: "PHC" } },
            ],
          },
          group: ["warcde", "binnum", "itmcde", "batchnum", "mfgdte"],
          raw: true,
        });

        const listDocnumPcount1 = await models.physicalcountfile1.findAll({
          attributes: ["docnum"],
          where: { status: "POSTED" },
          raw: true,
        });
        // const batchDocnumArray = listDocnumPcount1.map((dcm) => dcm.docnum);
        const listPcountFile3Tmp = await models.physicalcountfile3.findAll({
          where: {
            [Op.and]: [
              { batchnum: { [Op.eq]: insBatchFile.batchnum } },
              { itmcde: { [Op.eq]: insBatchFile.itmcde } },
              { mfgdte: { [Op.eq]: insBatchFile.mfgdte } },
              { expdte: { [Op.eq]: insBatchFile.expdte } },
              { warcde: { [Op.eq]: insTmpReportFile1 } },
              { docnum: { [Op.in]: listDocnumPcount1 } },
            ],
          },
          group: ["warcde", "binnum", "itmcde", "batchnum", "mfgdte"],
          raw: true,
        });
        //#endregion

        //#region final Process for listing array for recomputation
        const setRecompute = new Set(); //better than array
        for (const insAdd of listStockFileTmp) {
          const key = `${insAdd.warcde}|${insAdd.binnum}|${insAdd.itmcde}|${insAdd.batchnum}|${insAdd.mfgdte}|${insAdd.expdte}`;
          setRecompute.add(key);
        }
        for (const insAdd of listPcountFile3Tmp) {
          const key = `${insAdd.warcde}|${insAdd.binnum}|${insAdd.itmcde}|${insAdd.batchnum}|${insAdd.mfgdte}|${insAdd.expdte}`;
          setRecompute.add(key);
        }
        //Get back as an array
        const listRecompute = Array.from(setRecompute).map((item) => {
          const [warcde, binnum, itmcde, batchnum, mfgdte, expdte] =
            item.split("|");
          return { warcde, binnum, itmcde, batchnum, mfgdte, expdte };
        });
        //#endregion

        for (const insRecompute of listRecompute) {
          await SaveBatchFile2(
            insRecompute.itmcde,
            insRecompute.batchnum,
            insRecompute.mfgdte,
            insRecompute.warcde,
            insRecompute.expdte,
            insRecompute.binnum,
            phcprio
          );
          await UserActivityLog(
            "Recompute Batch Balance",
            "Recomputing Batch Balance"
          );
        }
      }
      res.write(
        `data: ${JSON.stringify({
          totalProgress,
          msg: `Batch Number Count: ${ctr}/${listBatchFile.length} Batch No.: ${insBatchFile.batchnum}`,
        })}\n\n`
      );
    }
    //#endregion
    res.write(
      `data: ${JSON.stringify({
        totalProgress: 100,
        msg: `Done Recomputing Batch Balance`,
      })}\n\n`
    );
    res.write(
      `data: ${JSON.stringify({
        totalProgress: 100,
        msg: `Done`,
      })}\n\n`
    );
    return console.log("Done Recompute Batch Item");
  } catch (e) {
    console.log("Error while running RecomBatchBalance: ", e);
  }
  //#endregion
};

module.exports = {
  RecomItemBalance,
  RecomBinBalance,
  RecomBatchBalance,
};
