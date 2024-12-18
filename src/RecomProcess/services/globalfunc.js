const { models } = require("../../_shared/config/config-db");
const { valFloat } = require("../utilities/valfloat");

const gblItemConvert = async (itmcde, untmea, itmqty) => {
  console.log("Item Converting ", itmcde);
  try {
    let returnVal;
    const rsItem = await models.itemunitfile.findOne({
      where: { itmcde: itmcde, untmea: untmea },
      raw: true,
    });

    if (rsItem) {
      if (!rsItem.conver) {
        await models.itemunitfile.update(
          { conver: 1 },
          { where: { itmcde: itmcde, untmea: untmea } }
        );
        returnVal = itmqty;
      } else {
        returnVal = valFloat(itmqty) * valFloat(rsItem.conver);
      }
    } else {
      returnVal = itmqty;
    }

    return returnVal;
  } catch (e) {
    console.log("gblItemConvert error while running: ", itmcde);
  }
};

const gblInsertRecord = async (tableName, recordParameters, debug = false) => {
  console.log("Inserting Record: ", tableName);
  if (
    !recordParameters ||
    typeof recordParameters !== "object" ||
    Array.isArray(recordParameters)
  ) {
    if (debug) {
      console.log("No supplied parameters.");
    }
    return false;
  }

  try {
    // Insert the record using Sequelize
    await models[tableName].create(recordParameters);
    return true;
  } catch (error) {
    if (debug) {
      console.error("Insertion Error:", error);
    }
    return false;
  }
};

const gblGenDocLog = async (docnum, trncde, trndte) => {
  console.log("Generating Document Log: ", docnum);
  try {
    const usrcde = "admin"; //for the meantime since there's no interaction on the ui
    const rs = await models.tmpreportfile1.findOne({
      where: { docnum: docnum, trncde: trncde, usrcde: usrcde },
      raw: true,
    });

    const record = {
      usrcde: usrcde,
      docnum: docnum,
      trncde: trncde,
      trndte: trndte,
    };

    if (!rs) {
      await gblInsertRecord("tmpreportfile1", record, false);
    }
  } catch (e) {
    console.log("gblGenDocLog error while running: ", e);
  }
};

const gblConvertQty = async (itmcde, untmea, xqty) => {
  console.log("Converting: ", itmcde + " " + untmea + " " + xqty);

  try {
    //declaration | initialization
    let convertQty = "";
    let neg = xqty < 0 ? "-" : "";
    let qty = Math.abs(xqty);
    let stkunt = "NA";
    let conver = 1;

    // Fetch all records for the item
    const rsMas = await models.itemunitfile.findAll({
      where: { itmcde: itmcde },
      raw: true,
    });

    let qty1 = 0;
    let qty2 = 0;
    let cqty1 = "";
    let cqty2 = "";
    let unt1 = "";
    let unt2 = "";

    // Iterate through fetched records
    rsMas.forEach((xrsmas) => {
      if (xrsmas.untmea !== null) {
        if (xrsmas.untmea === untmea && xrsmas.conver !== null) {
          conver = xrsmas.conver;
        }
      }
      if (xrsmas !== null && xrsmas.conver === 1) {
        stkunt = xrsmas.untmea; // Set stock unit
      }
    });

    if (conver === 1) {
      cqty2 = String(qty);
      qty2 = qty;
      unt2 = untmea;

      cqty1 = "";
      qty1 = 0;
      unt1 = "";
    } else {
      // Handle conversions
      if (conver === 0) {
        conver = 1;
      }
      qty1 = Math.floor(parseFloat(qty) / parseFloat(conver));

      if (qty1 != 0) {
        cqty1 = String(qty1);
        qty1 = qty1;
        unt1 = untmea;
      } else {
        cqty1 = "";
        qty1 = 0;
        unt1 = "";
      }

      qty2 = Math.floor(
        parseFloat(qty) - parseFloat(qty1) * parseFloat(conver)
      );

      if (qty2 !== 0) {
        cqty2 = qty2;
        qty2 = qty2;
        unt2 = stkunt;
      } else {
        cqty2 = "";
        qty2 = 0;
        unt2 = "";
      }
    }

    // Handle empty quantities
    if (qty1 === 0) {
      cqty1 = "";
      unt1 = "";
    }

    if (qty2 === 0) {
      cqty2 = "";
      unt2 = "";
    }

    // Build the final string representation
    let strqty = `${cqty1} ${unt1}`;
    let len = `${cqty2} ${unt2}`.trim();
    let leng = len.length;
    if (leng > 0) {
      if (strqty.length > 0) {
        strqty = `${strqty}, ${cqty2} ${unt2}`;
      } else {
        strqty = `${cqty2} ${unt2}`;
      }
    }

    strqty = `${neg}${strqty}`;
    convertQty = strqty;
    return convertQty;
  } catch (e) {
    console.log("gblConvertQty error while running: ", e);
  }
};

module.exports = {
  gblItemConvert,
  gblInsertRecord,
  gblGenDocLog,
  gblConvertQty,
};
