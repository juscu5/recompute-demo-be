const DataTypes = require("sequelize");
module.exports = function (sequelize) {
  const itemfile = sequelize.define(
    "itemfile",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
      ptycde: {
        type: DataTypes.STRING(10),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:39",
      },
      olditmcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:39",
      },
      saldisact: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:39",
      },
      purdisact: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:39",
      },
      field01: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      field02: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      field03: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      field04: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      field05: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      field06: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      field07: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      field08: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      field09: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      field10: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      field11: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      field12: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      field13: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      field14: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      field15: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      field16: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      field17: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      field18: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      field19: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      field20: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      scpwddis: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      supdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      itmcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
        unique: "itmcde",
      },
      itmdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      untmea: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      untmea2: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      conver: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      untcst1: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      untcst2: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      crilvl: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      remarks: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      wardsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      avecst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      maxlvl: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      status: {
        type: DataTypes.STRING(1),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      lstcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      untcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      untprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:40",
      },
      brndsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      itmcladsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      itmmdl: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      supcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      warcde: {
        type: DataTypes.STRING(10),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      brncde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      itmclacde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      salum: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      srtum: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      recum: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      prtum: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      invum: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      barcde: {
        type: DataTypes.STRING(35),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      cstdebcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      cstcrecde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      inactive: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      itmtyp: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      cgsactcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      salactcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      invactcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      srtactcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      multium: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      reqsernum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      taxcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      prtactcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      puractcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      purtaxcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      salewtcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      purewtcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      salevatcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      purevatcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:41",
      },
      salcur: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:42",
      },
      purcur: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:42",
      },
      itmrem1: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:42",
      },
      itmrem2: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:42",
      },
      itmrem3: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:42",
      },
      itmbal: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:42",
      },
      strqty: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:42",
      },
      chknontrd: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:42",
      },
      package: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:42",
      },
      rebdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:42",
      },
      itmprt: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "MODIFIED BY LstvPoco ON 16.10.03 14:14",
      },
      gldepcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "MODIFIED BY LstvPoco ON 17.12.12 11:12",
      },
      reqbatchnum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      logdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      itmsubclacde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      linenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      saltarget01: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      saltarget02: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      saltarget03: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      saltarget04: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      saltarget05: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      saltarget06: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      saltarget07: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      saltarget08: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      saltarget09: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      saltarget10: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      saltarget11: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      saltarget12: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      recumcon: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      itmdeptcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      itmmerchcatcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      itmhierarchy: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      itmclass: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      itmtag: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      itmsrc: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      itminvmvmnttyp: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      tariffcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      bomactcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      itmpalletcap: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
      splblum: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      chkmultibarcde: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      multibarcde: {
        type: DataTypes.STRING(35),
        allowNull: true,
      },
      purseractcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      minOQ: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'minOQ'
      },
      chkreorder: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      maxOQ: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'maxOQ'
      },
    },
    {
      sequelize,
      tableName: "itemfile",
      timestamps: false,
      underscored: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "recid" }],
        },
        {
          name: "itmcde",
          unique: true,
          using: "BTREE",
          fields: [{ name: "itmcde" }],
        },
        {
          name: "crilvl",
          using: "BTREE",
          fields: [{ name: "crilvl" }],
        },
        {
          name: "itmsrc",
          using: "BTREE",
          fields: [{ name: "itmsrc" }, { name: "brncde" }],
        },
        {
          name: "itmsrc_3",
          using: "BTREE",
          fields: [{ name: "itmsrc" }, { name: "brncde" }],
        },
        {
          name: "itmsrc_2",
          using: "BTREE",
          fields: [{ name: "itmsrc" }, { name: "brncde" }],
        },
      ],
    }
  );
  return itemfile;
};
