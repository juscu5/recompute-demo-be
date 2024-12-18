const { models } = require("../../_shared/config/config-db");
const { literal, col } = require("sequelize");

const SalesFileJoin = async (salFilter, filterDate) => {
  console.log("Sales Rebuilding More: ", salFilter);
  try {
    const sfij = await models.salesfile2.findAll({
      attributes: [
        "docnum",
        "logdte",
        "logtim",
        "trndte",
        "itmcde",
        "itmdsc",
        "untmea",
        "itmqty",
        "warcde",
        "trncde",
        "factor",
        literal("salesfile2.cusdsc as remarks"),
        "untprc",
        "extprc",
        literal("11 as priority"),
        "linenum",
        "netvatamt",
        "mfgdte",
        "expdte",
        "batchnum",
        "binnum",
      ],
      include: [
        {
          model: models.salesfile1,
          required: true,
          attributes: [],
        },
      ],
      where: {
        ...salFilter,
        ...filterDate,
      },
      raw: true,
    });
    return sfij;
  } catch (e) {
    console.log("Theres a problem while running SalesFileJoin: ", e);
  }
};

const DeliveryReceiptFileJoin = async (drFilter, filterDate, dr2linkinv) => {
  console.log("Rebuilding Delivery Receipt: ", drFilter);
  try {
    const attributes = [
      "docnum",
      "logdte",
      "logtim",
      "trndte",
      "itmcde",
      "itmdsc",
      "untmea",
      "itmqty",
      "warcde",
      "warcdenum",
      "warloccde",
      "trncde",
      literal("deliveryreceiptfile2.cusdsc as remarks"),
      literal("11 as priority"),
      "linenum",
      "mfgdte",
      "expdte",
      "batchnum",
      "binnum",
    ];

    if (dr2linkinv === "Y") {
      attributes.push("untprc", "extprc", "netvatamt");
    }

    const drij = await models.deliveryreceiptfile2.findAll({
      attributes: attributes,
      include: [
        {
          model: models.deliveryreceiptfile1,
          required: true,
          attributes: [],
        },
      ],
      where: {
        ...drFilter,
        ...filterDate,
      },
      raw: true,
    });
    return drij;
  } catch (e) {
    console.log("There's a problem while running DeliveryReceiptJoin: ", e);
  }
};

const SalesReturnFileJoin = async (sriFilter, filterDate) => {
  console.log("Rebuilding Sales Return more: ", sriFilter);
  try {
    const srij = await models.salesreturnfile2.findAll({
      attributes: [
        "docnum",
        "logdte",
        "logtim",
        "trndte",
        "itmcde",
        "itmdsc",
        "untmea",
        "itmqty",
        "warcde",
        "warcdenum",
        "warloccde",
        "trncde",
        "factor",
        literal("salesreturnfile2.cusdsc as remarks"),
        "untprc",
        "extprc",
        literal("6 as priority"),
        "linenum",
        "netvatamt",
        "mfgdte",
        "expdte",
        "batchnum",
        "binnum",
      ],
      include: [
        {
          model: models.salesreturnfile1,
          required: true,
          attributes: [],
        },
      ],
      where: {
        ...sriFilter,
        ...filterDate,
      },
      raw: true,
    });
    return srij;
  } catch (e) {
    console.log("There's a problem while running SalesReturnJoin: ", e);
  }
};

const SalesReturnToFileJoin = async (srtijFilter, filterDate) => {
  console.log("Rebuilding Sales Return to File: ", srtijFilter);
  try {
    const srtij = await models.salesreturntofile2.findAll({
      attributes: [
        "docnum",
        "logdte",
        "logtim",
        "trndte",
        "itmcde",
        "itmdsc",
        "untmea",
        "itmqty",
        "warcde",
        "warcdenum",
        "warloccde",
        "trncde",
        "factor",
        literal("salesreturntofile2.cusdsc as remarks"),
        "untprc",
        "extprc",
        literal("6 as priority"),
        "linenum",
        "netvatamt",
        "mfgdte",
        "expdte",
        "batchnum",
        "binnum",
      ],
      include: [
        {
          model: models.salesreturntofile1,
          required: true,
          attributes: [],
        },
      ],
      where: {
        ...srtijFilter,
        ...filterDate,
      },
      raw: true,
    });
    return srtij;
  } catch (e) {
    console.log("There's a problem while running SalesReturnToFileJoin: ", e);
  }
};

const ReceivingFileJoin = async (rfijFilter, filterDate) => {
  console.log("Rebuilding Receiving File: ", rfijFilter);
  try {
    const rfij = await models.receivingfile2.findAll({
      attributes: [
        "docnum",
        "logdte",
        "logtim",
        "trndte",
        "itmcde",
        "itmdsc",
        "untmea",
        "itmqty",
        "warcde",
        "warcdenum",
        "warloccde",
        "trncde",
        "factor",
        literal("receivingfile2.supdsc as remarks"),
        "untprc",
        "extprc",
        literal("5 as priority"),
        "linenum",
        "netvatamt",
        "mfgdte",
        "expdte",
        "batchnum",
        "binnum",
      ],
      include: [
        {
          model: models.receivingfile1,
          required: true,
          attributes: [],
        },
      ],
      where: {
        ...rfijFilter,
        ...filterDate,
      },
      raw: true,
    });
    return rfij;
  } catch (e) {
    console.log("There's a problem while running ReceivingFileJoin: ", e);
  }
};

const PurchaseReturnJoin = async (prijFilter, filterDate) => {
  console.log("Rebuilding Purchase Return: ", prijFilter);
  try {
    const prij = await models.purchasereturnfile2.findAll({
      attributes: [
        "docnum",
        "logdte",
        "logtim",
        "trndte",
        "itmcde",
        "itmdsc",
        "untmea",
        "itmqty",
        "warcde",
        "warcdenum",
        "warloccde",
        "trncde",
        "factor",
        literal("purchasereturnfile2.supdsc as remarks"),
        "untprc",
        "extprc",
        literal("10 as priority"),
        "linenum",
        "netvatamt",
        "mfgdte",
        "expdte",
        "batchnum",
        "binnum",
      ],
      include: [
        {
          model: models.purchasereturnfile1,
          required: true,
          attributes: [],
        },
      ],
      where: {
        ...prijFilter,
        ...filterDate,
      },
      raw: true,
    });
    return prij;
  } catch (e) {
    console.log(
      "There's a problem while running PurchaseReturnJoin: ",
      prijFilter
    );
  }
};

const InventoryTranJoin = async (itijFilter, priority, filterDate) => {
  console.log("Rebuilding Inventory Transaction: ", itijFilter);
  try {
    const itij = await models.inventorytranfile2.findAll({
      attributes: [
        "docnum",
        "logdte",
        "logtim",
        "trndte",
        "itmcde",
        "itmdsc",
        "untmea",
        "itmqty",
        "warcde",
        "warcdenum",
        "warloccde",
        "trncde",
        "factor",
        "untprc",
        "extprc",
        literal(`${priority} as priority`),
        "linenum",
        literal("inventorytranfile2.extprc as netvatamt"),
        "mfgdte",
        "expdte",
        "batchnum",
        "trntypcde",
        "binnum",
      ],
      include: [
        {
          model: models.inventorytranfile1,
          required: true,
          attributes: [],
        },
      ],
      where: {
        ...itijFilter,
        ...filterDate,
      },
      raw: true,
    });
    return itij;
  } catch (e) {
    console.log("There's a problem while running InventoryTranJoin: ", e);
  }
};

const InventoryTranStt2Join = async (itijFilter, filterDate) => {
  console.log("Rebuilding Inventory Transaction STT 2: ", itijFilter);
  try {
    const itij = await models.inventorytranfile2.findAll({
      attributes: [
        "docnum",
        "logdte",
        "logtim",
        "trndte",
        "itmcde",
        "itmdsc",
        "untmea",
        "itmqty",
        literal("inventorytranfile2.warcde2 as warcde"),
        literal("inventorytranfile2.warcdenum2 as warcdenum"),
        literal("inventorytranfile2.warloccde2 as warloccde"),
        "trncde",
        literal("1 as factor"),
        "untprc",
        literal("inventorytranfile2.extprc as netvatamt"),
        literal("9 as priority"),
        "linenum",
        literal("inventorytranfile2.extprc as netvatamt"),
        "mfgdte",
        "expdte",
        "batchnum",
        "trntypcde",
        literal("inventorytranfile2.binnum2 as binnum"),
      ],
      include: [
        {
          model: models.inventorytranfile1,
          required: true,
          attributes: [],
        },
      ],
      where: {
        ...itijFilter,
        ...filterDate,
      },
      raw: true,
    });
    return itij;
  } catch (e) {
    console.log("There's a problem while running ITStt2Join: ", e);
  }
};

const InOutTableJoin = async (tblName, ioijFilter, priority, filterDate) => {
  console.log("Running InOut Join Services: ", tblName);
  try {
    const ioij = await models[`${tblName}2`].findAll({
      attributes: [
        "docnum",
        "logdte",
        "logtim",
        "trndte",
        "itmcde",
        "itmdsc",
        "untmea",
        "itmqty",
        "warcde",
        "warcdenum",
        "warloccde",
        "trncde",
        "factor",
        "untprc",
        "extprc",
        literal(`${priority} as priority`),
        "linenum",
        literal(`${tblName}2.extprc as netvatamt`),
        "mfgdte",
        "expdte",
        "batchnum",
        "trntypcde",
        "binnum",
      ],
      include: [
        {
          model: models[`${tblName}1`],
          required: true,
          attributes: [],
        },
      ],
      where: {
        ...ioijFilter,
        ...filterDate,
      },
      raw: true,
    });
    return ioij;
  } catch (e) {
    console.log("There's a problem while running InOut Services: ", e);
  }
};

const sttTableJoin = async (tblName, sttijFilter, sttNum, filterDate) => {
  console.log("Running STT Table Join Services: ", tblName);
  try {
    const attributes = [
      "docnum",
      "logdte",
      "logtim",
      "trndte",
      "itmcde",
      "itmdsc",
      "untmea",
      "itmqty",
      "trncde",
      "untprc",
      "extprc",
      literal("9 as priority"),
      "linenum",
      literal(`${tblName}2.extprc as netvatamt`),
      "mfgdte",
      "expdte",
      "batchnum",
      "trntypcde",
    ];

    if (sttNum === 1) {
      attributes.push("warcde", "warcdenum", "warloccde", "factor", "binnum");
    } else if (sttNum === 2) {
      attributes.push(
        literal(`${tblName}2.warcde2 as warcde`),
        literal(`${tblName}2.warcdenum2 as warcdenum`),
        literal(`${tblName}2.warloccde2 as warloccde`),
        literal("1 as factor"),
        literal(`${tblName}2.binnum2 as binnum`)
      );
    }

    const sttij = await models[`${tblName}2`].findAll({
      attributes: attributes,
      include: [
        {
          model: models[`${tblName}1`],
          required: true,
          attributes: [],
        },
      ],
      where: {
        ...sttijFilter,
        ...filterDate,
      },
      raw: true,
    });
    return sttij;
  } catch (e) {
    console.log(
      "There's a problem while running this services STTtableJoin: ",
      e
    );
  }
};

const phyisicalCountJoin = async (pcijFilter, phcprio, filterDate, key) => {
  console.log("Rebuilding Physical Count more ", pcijFilter);
  try {
    const attributes = [
      "docnum",
      "logdte",
      "logtim",
      "trndte",
      "itmcde",
      "itmdsc",
      "untmea",
      "itmqty",
      "warcde",
      "warcdenum",
      "warloccde",
      "trncde",
      "factor",
      "untprc",
      "extprc",
      literal(`${phcprio} as priority`),
      "linenum",
      literal("physicalcountfile2.extprc as netvatamt"),
      "binnum",
    ];

    if (key === "PCC") {
      attributes.push(literal("untprc as stkcst"), literal("untprc as cgscst"));
    }

    const pcij = await models.physicalcountfile2.findAll({
      attributes: attributes,
      include: [
        {
          model: models.physicalcountfile1,
          required: true,
          attributes: [],
        },
      ],
      where: {
        ...pcijFilter,
        ...filterDate,
      },
      raw: true,
    });
    return pcij;
  } catch (e) {
    console.log("There's a problem while running Physical Count Services: ", e);
  }
};

module.exports = {
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
};
