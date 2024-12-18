const { gblItemConvert } = require("./globalfunc");
const { valFloat } = require("../utilities/valfloat");
const { models } = require("../../_shared/config/config-db");

const GenPackage = async (tblName, trncde, filters) => {
  console.log("Generating Package for: ", tblName);

  //definition
  const stockFileRecords = [];
  const batchSize = 1000;
  let itmConvert = 0;
  let itmConvertPck = 0;
  let itmQty = 0;
  let untMea = "";

  //attributes or where items
  const list = [
    "itmcde",
    "untmea",
    "itmqty",
    "docnum",
    "trndte",
    "trncde",
    "warcde",
    "factor",
    "cusdsc",
  ];

  try {
    //fetch and list the item from the table source
    const listTbl = await models[tblName].findAll({
      attributes: list,
      where: { trncde: trncde, itmtyp: "NON-INVENTORY", ...filters },
      raw: true,
    });

    //loop of listTbl
    for (let listRecord of listTbl) {
      const inList = await models.itemfile.findOne({
        where: { itmcde: listRecord["itmcde"] },
        raw: true,
        logging: console.log, //for debugging purpose only
      });

      //combine statement (refractored)
      if (inList && inList.package === 1) {
        itmConvert = await gblItemConvert(
          listRecord.itmcde,
          listRecord.untmea,
          parseFloat(listRecord.itmqty)
        );

        //fetch and list itempackagefile
        const itemPackageFiles = await models.itempackagefile.findAll({
          where: { pckitmcde: inList.itmcde },
          order: [["linenum", "ASC"]],
          raw: true,
        });

        //loop of itempackagefile
        for (const itemPackageFile of itemPackageFiles) {
          itmConvertPck = await gblItemConvert(
            itemPackageFile.itmcde,
            itemPackageFile.untmea,
            parseFloat(itemPackageFile.itmqty)
          );

          //computation for itemqty and untmea declaration
          itmQty = parseFloat(itmConvert) * parseFloat(itmConvertPck);
          untMea = "";

          //fetch of itemunitfile
          const inItemUnitFile = await models.itemunitfile.findOne({
            where: { itmcde: itemPackageFile.itmcde, conver: 1 },
            raw: true,
          });

          if (inItemUnitFile) {
            untMea = inItemUnitFile.untmea;
          }

          //gather of the record, will push on array
          stockFileRecords.push({
            docnum: listRecord.docnum,
            trndte: listRecord.trndte,
            itmcde: itemPackageFile.itmcde,
            itmdsc: itemPackageFile.itmdsc,
            untmea: untMea,
            itmqty: itmQty,
            warcde: listRecord.warcde,
            trncde: listRecord.trncde,
            factor: valFloat(listRecord.factor),
            remarks: listRecord.cusdsc,
            priority: 11,
            linenum: itemPackageFile.linenum,
          });
        }
      }
    }

    //batch bulkcreation to optimize speed and performance
    for (let i = 0; i < stockFileRecords.length; i += batchSize) {
      const batch = stockFileRecords.slice(i, i + batchSize);
      await models.stockfile.bulkCreate(batch, {
        logging: console.log, // for debugging purposes only
      });
    }
  } catch (e) {
    console.error("GenPackage Error: ", e);
  }
};

module.exports = {
  GenPackage,
};
