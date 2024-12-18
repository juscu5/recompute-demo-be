const {
  gblItemConvert,
  gblGenDocLog,
  gblConvertQty,
  gblInsertRecord,
} = require("./globalfunc");
const { models } = require("../../_shared/config/config-db");
const { Op, and } = require("sequelize");
const moment = require("moment");

const RecomStkBal2 = async (
  dateFrom,
  itmcde,
  itmdsc,
  warcde,
  tblMsg,
  genDocLog = false,
  recomMulti = true
) => {
  console.log("Recompute STK Balance ", itmcde);
  try {
    //definition
    let stkunt = "";
    let stdcst = 0;
    let avecst = 0;
    let lstcst = 0;
    let itmbegbal = 0;
    let itmendbal = 0;
    let stkqty = 0;
    let stkcst = 0;

    const rsItmUnt = await models.itemunitfile.findOne({
      where: { itmcde: itmcde, conver: 1 },
      raw: true,
    });

    if (rsItmUnt) {
      if (rsItmUnt.untcst !== null) {
        stdcst = rsItmUnt.untcst;
      }
      stkunt = rsItmUnt.untmea.trim();
    }

    const rsBeg = await models.stockfile.findOne({
      attributes: ["itmendbal", "avecst", "lstcst", "totalvalue"],
      where: {
        itmcde: itmcde,
        warcde: warcde,
        trndte: { [Op.lt]: dateFrom },
      },
      order: [
        ["trndte", "DESC"],
        ["priority", "DESC"],
        ["trncde", "DESC"],
        ["logtim", "DESC"],
        ["docnum", "DESC"],
        ["linenum", "DESC"],
        ["factor", "DESC"],
      ],
      limit: 1,
      raw: true,
    });

    let pBegBal = 0;

    if (rsBeg && rsBeg.itmendbal !== null) {
      pBegBal = rsBeg.itmendbal;
      avecst = rsBeg.avecst;
      lstcst = rsBeg.lstcst;
    }

    const rsStkFile = await models.stockfile.findAll({
      where: { itmcde: itmcde, warcde: warcde, trndte: { [Op.gte]: dateFrom } },
      order: [
        ["itmcde"],
        ["warcde"],
        ["trndte"],
        ["priority"],
        ["trncde"],
        ["logtim"],
        ["docnum"],
        ["linenum"],
        ["factor"],
      ],
      raw: true,
    });

    for (const rsStkfle of rsStkFile) {
      stkcst = rsStkfle.stkcst !== null ? rsStkfle.stkcst : 0;

      itmbegbal = pBegBal;
      if (rsStkfle.trncde === "PHC" || rsStkfle.trncde === "PCC") {
        itmendbal = gblItemConvert(
          rsStkfle.itmcde,
          rsStkfle.untmea,
          rsStkfle.itmqty
        );
        stkqty = parseFloat(itmendbal) - parseFloat(itmbegbal);
      } else {
        if (rsStkfle.untmea === stkunt) {
          stkqty = parseFloat(rsStkfle.factor) * parseFloat(rsStkfle.itmqty);
        } else {
          const cnvrt = await gblItemConvert(
            rsStkfle.itmcde,
            rsStkfle.untmea,
            rsStkfle.itmqty
          );
          stkqty = parseFloat(rsStkfle.factor) * parseFloat(cnvrt);
        }
        itmendbal = parseFloat(pBegBal) + parseFloat(stkqty);
        if (stkqty === 0) {
          stkcst = 0;
        } else {
          stkcst = parseFloat(rsStkfle.netvatamt) / parseFloat(stkqty);
        }
      }

      itmbegbal = parseFloat(parseFloat(itmbegbal).toFixed(2));
      itmendbal = parseFloat(parseFloat(itmendbal).toFixed(2));
      pBegBal = parseFloat(itmendbal);

      await models.stockfile.update(
        {
          stkunt: stkunt,
          itmbegbal: itmbegbal,
          itmendbal: itmendbal,
          stkqty: stkqty,
          stkcst: stkcst,
          avecst: avecst,
          lstcst: lstcst,
          stdcst: stdcst,
        },
        {
          where: { recid: rsStkfle.recid },
        }
      );

      rsStkfle.stkunt = stkunt;
      rsStkfle.itmbegbal = parseFloat(itmbegbal);
      rsStkfle.itmendbal = parseFloat(itmendbal);

      rsStkfle.stkqty = parseFloat(parseFloat(stkqty).toFixed(5));
      rsStkfle.stkcst = parseFloat(parseFloat(stkcst).toFixed(5));
      rsStkfle.avecst = parseFloat(parseFloat(avecst).toFixed(5));
      rsStkfle.lstcst = parseFloat(parseFloat(lstcst).toFixed(5));
      rsStkfle.stdcst = parseFloat(parseFloat(stdcst).toFixed(5));

      if (genDocLog === true) {
        await gblGenDocLog(rsStkfle.docnum, rsStkfle.trncde, rsStkfle.trndte);
      }
    }
    await UpdItmWar2(itmcde, itmdsc, warcde, tblMsg, pBegBal);

    if (recomMulti) {
      await RecomMulti2(itmcde, dateFrom, tblMsg, genDocLog);
    }
  } catch (e) {
    console.log("RecomStkBal2 failed while running ", e);
  }
};

const RecomMulti2 = async (itmcde, trndte, tblMsg, genDocLog = false) => {
  console.log("Recompute Multi 2: ", itmcde);

  try {
    let aveCost = 0;
    let lastCost = 0;
    let fifoCost = 0;
    let begBal = 0;
    let cgsCost = 0;
    let gainLoss = 0;
    let begTotalValue = 0;
    let totBegBal = 0;
    let totEndBal = 0;
    let aveCostFinal = 0;
    let cgsCostFinal = 0;
    let gainLossFinal = 0;
    let totalValue = 0;

    const rs3 = await models.syspar2.findOne({ raw: true });

    const itemAverages = await models.stockfile.findOne({
      where: {
        itmcde: itmcde,
        trndte: {
          [Op.lt]: trndte,
        },
        trncde: {
          [Op.ne]: "STT",
        },
      },
      order: [
        ["trndte", "DESC"],
        ["priority", "DESC"],
        ["trncde", "DESC"],
        ["docnum", "DESC"],
        ["linenum", "DESC"],
        ["factor", "DESC"],
      ],
      raw: true,
    });

    if (itemAverages) {
      aveCost = itemAverages.avecst;
      lastCost = itemAverages.lstcst;
      fifoCost = itemAverages.fifcst;
      begBal = itemAverages.totendbal;
      begTotalValue = itemAverages.totalvalue;
    }

    const stockEntries = await models.stockfile.findAll({
      where: {
        itmcde: itmcde,
        trndte: {
          [Op.gte]: trndte,
        },
        trncde: {
          [Op.ne]: "STT",
        },
      },
      order: [
        ["itmcde"],
        ["trndte"],
        ["priority"],
        ["trncde"],
        ["docnum"],
        ["linenum"],
        ["factor"],
      ],
      raw: true,
    });

    for (const entry of stockEntries) {
      aveCost = 0;
      cgsCost = 0;
      gainLoss = 0;
      totBegBal = parseFloat(begBal);
      totEndBal = parseFloat(begBal) + parseFloat(entry.stkqty);

      if (
        entry.trncde === "REC" ||
        entry.trncde === "ADJ" ||
        entry.trncde === "IN"
      ) {
        if (
          (rs3.prcinvin === 0 && entry.trncde === "ADJ") ||
          entry.trncde === "IN"
        ) {
          totalValue =
            parseFloat(begTotalValue) +
            parseFloat(
              parseFloat(
                parseFloat(entry.stkqty) * parseFloat(aveCost)
              ).toFixed(2)
            );
        } else {
          totalValue = parseFloat(begTotalValue) + parseFloat(entry.netvatamt);
        }
        cgsCost = 0;
      } else if (entry.trncde === "PCC") {
        totalValue = parseFloat(
          parseFloat(parseFloat(entry.stkcst) * parseFloat(totEndBal)).toFixed(
            6
          )
        );
        gainLoss = 0;

        const phcRecord = await models.physicalcountfile1.findOne({
          where: {
            docnum: entry.docnum,
          },
        });

        if (!phcRecord) {
          gainLoss = parseFloat(
            parseFloat(
              parseFloat(entry.stkcst) * parseFloat(entry.stkqty)
            ).toFixed(2)
          );
        }
      } else if (entry.trncde === "PHC") {
        gainLoss = parseFloat(
          parseFloat(parseFloat(aveCost) * parseFloat(entry.stkqty)).toFixed(2)
        );
        totalValue = parseFloat(begTotalValue) + parseFloat(gainLoss);
      } else if (entry.trncde === "PRT") {
        totalValue = parseFloat(begTotalValue) - parseFloat(entry.netvatamt);
      } else if (
        entry.trncde === "SAL" ||
        entry.trncde === "CSL" ||
        entry.trncde === "CS" ||
        entry.trncde === "DRS" ||
        entry.trncde === "DR" ||
        entry.trncde === "DR2"
      ) {
        const comp = parseFloat(aveCost) * parseFloat(entry.stkqty);
        cgsCost = parseFloat(parseFloat(parseFloat(comp) * -1).toFixed(2));
        totalValue = parseFloat(begTotalValue) - parseFloat(cgsCost);
      } else if (entry.trncde === "OUT") {
        if (rs3.prcinvout === 0 || entry.trntypcde === "CSA") {
          cgsCost = parseFloat(
            parseFloat(parseFloat(entry.stkqty) * parseFloat(aveCost)).toFixed(
              2
            )
          );
        } else {
          const compf = parseFloat(entry.stkcst) * -1;
          cgsCost = parseFloat(
            parseFloat(parseFloat(entry.stkqty) * parseFloat(compf)).toFixed(2)
          );
        }
        totalValue = parseFloat(begTotalValue) + parseFloat(cgsCost);
      } else if (entry.trncde === "SRT") {
        aveCostFinal = parseFloat(aveCost);
        cgsCost = parseFloat(
          parseFloat(parseFloat(aveCost) * parseFloat(entry.stkqty)).toFixed(2)
        );
        totalValue = parseFloat(begTotalValue) + parseFloat(cgsCost);
        gainLoss = 0;
      } else if (entry.trncde === "STT") {
        // No operation
      } else {
        aveCostFinal = parseFloat(aveCost);
        cgsCost = 0;
      }

      cgsCostFinal = parseFloat(cgsCost);
      gainLossFinal = parseFloat(gainLoss);
      totBegBal = parseFloat(parseFloat(totBegBal).toFixed(2));
      totEndBal = parseFloat(parseFloat(totEndBal).toFixed(2));
      totalValue = parseFloat(parseFloat(totalValue).toFixed(2));
      aveCostFinal =
        parseFloat(totEndBal) === 0
          ? 0
          : parseFloat(totalValue) / parseFloat(totEndBal);
      aveCost = parseFloat(aveCostFinal) < 0 ? 0 : parseFloat(aveCostFinal);
      begBal = parseFloat(totEndBal);
      begTotalValue = parseFloat(totalValue);

      if (entry.trncde === "SRT") {
        cgsCostFinal = parseFloat(cgsCostFinal) * -1;
      }
      cgsCostFinal = parseFloat(parseFloat(cgsCostFinal).toFixed(2));

      await models.stockfile.update(
        {
          totbegbal: totBegBal,
          totendbal: totEndBal,
          avecst: aveCostFinal,
          cgscst: cgsCostFinal,
          gainloss: gainLossFinal,
          totalvalue: totalValue,
          lstcst: lastCost,
        },
        {
          where: { recid: entry.recid },
        }
      );

      if (genDocLog) {
        await gblGenDocLog(entry.docnum, entry.trncde, entry.trndte);
      }
    }
  } catch (e) {
    console.log("RecomMulti2 failed while running ", e);
  }
};

const UpdItmWar2 = async (itmcde, itmdsc, warcde, tblMsg, itmbal) => {
  console.log("Update Item Warehous: ", itmcde);
  try {
    let strqty = null;
    const rsItm = await models.itemfile.findOne({
      attributes: ["invum", "itmbal", "strqty"],
      where: { itmcde: itmcde },
      raw: true,
    });

    if (rsItm && rsItm.invum !== null) {
      strqty = await gblConvertQty(itmcde, rsItm.invum, itmbal);
      await models.itemfile.update(
        { itmbal: itmbal, strqty: strqty },
        {
          where: { itmcde: itmcde },
        }
      );
    }

    const rsItmWar = await models.itemwarehouse.findOne({
      where: { itmcde: itmcde, warcde: warcde },
    });

    const arrRecord = {
      itmcde: itmcde,
      warcde: warcde,
      itmdsc: itmdsc,
      itmbal: itmbal,
      stritmbal: strqty || "",
    };

    if (!rsItmWar) {
      await gblInsertRecord("itemwarehouse", arrRecord, false);
    } else {
      await models.itemwarehouse.update(arrRecord, {
        where: { itmcde: itmcde, warcde: warcde },
      });
    }
  } catch (e) {
    console.log("UpdItmWar2 failed while running ", e);
  }
};

const SaveBinFile2 = async (
  itmcde,
  batchnum,
  mfgdte,
  warcde,
  expdte,
  binnum,
  xuntmea,
  warcdenum,
  warloccde,
  phcPrio
) => {
  console.log("Starting SaveBinFile2 Services");
  try {
    let begDte = moment("01-01-1990", "DD-MM-YYYY").format("YYYY-MM-DD");
    let begBal = 0;
    let stkqty = 0;
    let endBal = 0;
    let sitmqty = 0;

    const filter = {
      warcde: warcde,
      itmcde: itmcde,
      warcdenum: warcdenum,
      warloccde: warloccde,
      ...(batchnum !== ""
        ? { batchnum: batchnum, mfgdte: mfgdte, expdte: expdte }
        : {
            [Op.or]: { batchnum: null, batchnum: "" },
          }),
    };

    const selectDocnum = await models.physicalcountfile1.findAll({
      attributes: ["docnum"],
      where: { status: "POSTED" },
      order: [["trndte", "DESC"]],
      raw: true,
    });
    const batchDocnumArr = selectDocnum.map((sel) => sel.docnum);

    const selPcountFile3 = await models.physicalcountfile3.findOne({
      where: {
        binnum: binnum,
        docnum: { [Op.in]: batchDocnumArr },
        ...filter,
      },
      order: [["trndte", "DESC"]],
      limit: 1,
      raw: true,
    });

    //physical count file 3
    if (selPcountFile3) {
      const rsPcount3 = await models.physicalcountfile3.findAll({
        attributes: [
          "trncde",
          "itmcde",
          "trndte",
          "itmdsc",
          "docnum",
          "untmea",
          "itmqty",
        ],
        where: {
          binnum: binnum,
          docnum: selPcountFile3.docnum,
          ...filter,
        },
        raw: true,
      });

      for (const insPcount3 of rsPcount3) {
        const itmConvert = await gblItemConvert(
          insPcount3.itmcde,
          insPcount3.untmea,
          insPcount3.itmqty
        );
        sitmqty = parseFloat(sitmqty) + parseFloat(insPcount3.itmqty);
        begDte = insPcount3.trndte;
        begBal = parseFloat(begBal) + parseFloat(itmConvert);
      }
    }
    if (begDte === null) {
      begDte = moment("01-01-1990", "DD-MM-YYYY").format("YYYY-MM-DD");
    }

    //stk
    if (phcPrio === "FIRST") {
      const rsStk = await models.stockfile.sum("stkqty", {
        where: {
          trndte: { [Op.gte]: begDte },
          binnum: binnum,
          ...filter,
        },
      });
      stkqty = rsStk !== null ? parseFloat(rsStk) : 0;
    } else {
      const rsStk = await models.stockfile.sum("stkqty", {
        where: {
          trndte: { [Op.gt]: begDte },
          binnum: binnum,
          ...filter,
        },
      });

      stkqty = rsStk !== null ? parseFloat(rsStk) : 0;
    }

    endBal = parseFloat(begBal) + parseFloat(stkqty);

    //get item desc
    const rsItem = await models.itemfile.findOne({
      attributes: ["itmdsc"],
      where: { itmcde: itmcde },
      raw: true,
    });
    const itmdsc = rsItem.itmdsc;

    //binfile1
    const rsBin1 = await models.binfile1.findOne({
      where: { binnum: binnum, warcde: warcde },
      raw: true,
    });
    if (!rsBin1) {
      await models.binfile1.create({
        binnum: binnum,
        warcde: warcde,
        createddte: moment().format("YYYY-MM-DD"),
      });
    }

    //binfile2
    const rsBin2 = await models.binfile2.findOne({
      where: { binnum: binnum, ...filter },
      raw: true,
    });
    const existingRecord = await models.binfile2.findOne({
      where: {
        itmcde: itmcde,
      },
    });
    if (!rsBin2 && !existingRecord) {
      const insData = {
        warcde: warcde,
        binnum: binnum,
        itmcde: itmcde,
        itmdsc: itmdsc,
        binbal: endBal,
        warcdenum: warcdenum,
        warloccde: warloccde,
      };
      await models.binfile2.create(
        batchnum === ""
          ? insData
          : {
              ...insData,
              batchnum: batchnum,
              mfgdte: mfgdte,
              expdte: expdte,
            }
      );
    } else {
      await models.binfile2.update(
        { binbal: endBal },
        { where: { binnum: binnum, itmcde: itmcde } }
      );
    }
  } catch (e) {
    console.log("There's a problem while running SaveBinFile Services");
  }
};

const SaveBatchFile2 = async (
  itmcde,
  batchnum,
  mfgdte,
  warcde,
  expdte,
  binnum,
  phcPrio
) => {
  console.log("Starting SaveBatchFile: ", itmcde);
  try {
    let begDte = moment("01-01-1990", "DD-MM-YYYY").format("YYYY-MM-DD");
    let begBal = 0;
    let stkqty = 0;
    let endBal = 0;
    let sitmqty = 0;

    const listDocnumPcountFile1 = await models.physicalcountfile1.findAll({
      where: { status: "POSTED" },
      order: [["trndte", "DESC"]],
      limit: 1,
      raw: true,
    });
    const batchDocnumArray = listDocnumPcountFile1.map((dcm) => dcm.docnum);
    const selPcountFile3 = await models.physicalcountfile3.findOne({
      where: {
        [Op.and]: {
          batchnum: batchnum,
          mfgdte: mfgdte,
          itmcde: itmcde,
          warcde: warcde,
          docnum: { [Op.in]: batchDocnumArray },
        },
      },
      raw: true,
    });

    //physical count file 3
    if (selPcountFile3) {
      const rsPcount3 = await models.physicalcountfile3.findAll({
        attributes: [
          "trncde",
          "itmcde",
          "trndte",
          "itmdsc",
          "docnum",
          "untmea",
          "itmqty",
        ],
        where: {
          [Op.and]: {
            batchnum: batchnum,
            mfgdte: mfgdte,
            itmcde: itmcde,
            warcde: warcde,
            docnum: selPcountFile3.docnum,
          },
        },
        raw: true,
      });

      for (const insPcount3 of rsPcount3) {
        const begBalConvrt = gblItemConvert(
          insPcount3.itmcde,
          insPcount3.untmea,
          insPcount3.itmqty
        );

        sitmqty = insPcount3.itmqty;
        begDte = insPcount3.trndte;
        begBal = parseFloat(begBal) + parseFloat(begBalConvrt);
      }
    }

    if (begDte === null) {
      begDte = moment("01-01-1990", "DD-MM-YYYY").format("YYYY-MM-DD");
    }

    // stk
    if (phcPrio === "FIRST") {
      const rsStk = await models.stockfile.sum("stkqty", {
        where: {
          warcde: warcde,
          itmcde: itmcde,
          batchnum: batchnum,
          mfgdte: mfgdte,
          expdte: expdte,
          trndte: { [Op.gte]: begDte },
        },
      });
      stkqty = rsStk !== null ? parseFloat(rsStk) : 0;
    } else {
      const rsStk = await models.stockfile.sum("stkqty", {
        where: {
          warcde: warcde,
          itmcde: itmcde,
          batchnum: batchnum,
          mfgdte: mfgdte,
          expdte: expdte,
          trndte: { [Op.gt]: begDte },
        },
      });
      stkqty = rsStk !== null ? parseFloat(rsStk) : 0;
    }
    endBal = parseFloat(begBal) + parseFloat(stkqty);

    //batchfile2
    const rsBatch2 = await models.batchfile2.findOne({
      where: {
        [Op.and]: {
          warcde: warcde,
          itmcde: itmcde,
          batchnum: batchnum,
          mfgdte: mfgdte,
          expdte: expdte,
        },
      },
      raw: true,
    });
    const existingRecord = await models.batchfile2.findOne({
      where: {
        itmcde: itmcde,
      },
    });

    if (!rsBatch2 && !existingRecord) {
      await models.batchfile2.create({
        warcde: warcde,
        itmcde: itmcde,
        batchnum: batchnum,
        mfgdte: mfgdte,
        expdte: expdte,
        batchbal: endBal,
      });

      console.log("Batch insert success");
    } else {
      await models.batchfile2.update(
        { batchbal: endBal },
        {
          where: {
            warcde: warcde,
            itmcde: itmcde,
            batchnum: batchnum,
            mfgdte: mfgdte,
            expdte: expdte,
          },
        }
      );

      console.log("Batch update success");
    }
  } catch (e) {
    console.log("Error while running SaveBatchFile2: ", e);
  }
};

module.exports = {
  RecomStkBal2,
  RecomMulti2,
  UpdItmWar2,
  SaveBatchFile2,
  SaveBinFile2,
};
