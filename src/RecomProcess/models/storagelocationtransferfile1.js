const DataTypes = require("sequelize");
module.exports = function (sequelize) {
  const storagelocationtransferfile1 = sequelize.define(
    "storagelocationtransferfile1",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        comment: "MODIFIED BY LstvPoco ON 22.08.01 17:32",
      },
      cancelrem: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      delsta: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      ponum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      warcde: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      delrem: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      cusadd1: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      cusadd2: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      totscpwdamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      totscpwdamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      docnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
        unique: "docnum",
      },
      cusdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      trmdsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      smndsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      shipto: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      trncde: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      trntot: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      smncde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      trmcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      cuscde: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      cusgrp: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      curcde: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      comcde: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      usrnam: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      currte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      prccde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      sonum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      shipto2: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      vatamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      vatrte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      othchatot: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      textprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      logtim: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      trmtypcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      trmtypdsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      othchatotfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      trntotfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      textprcfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      vat: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      ewtrte: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      taxcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      docapp: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      docbal: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      setdocbal: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      totpdc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      settotpdc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      amtapp: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      memtypcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      manualgl: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      canceldoc: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      vatamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      netvatamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      vatableamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      vatexemptamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      vatzeroratedamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      nonvatfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      vatableamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      vatexemptamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      vatzeroratedamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      netvatamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      ewtcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      ewtamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      nonvat: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      chknonvat: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      manualvat: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      busstyle: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      tinnum: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      totamtdis: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      totgroext: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      totamtdisfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      totgroextfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      orderby: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      projname: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      projsite: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ra: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      sibill: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      billtype: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      siremarks: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      salesengr: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      preby: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      chkby: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      apvby: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      delconfnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      ffrom: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      field01: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field02: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field03: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field04: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field05: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field06: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field07: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field08: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field09: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field10: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field11: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field12: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field13: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field14: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field15: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field16: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field17: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field18: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field19: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field20: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      doclock: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "N",
      },
      trndte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      duedate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      logdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      lastpaydte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      canceldte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      radte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      aprdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      warcde2: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      refnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      remarks: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      remarks1: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      approved: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      incprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      deldte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      expdeldte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      cuspodte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      chksearchitemprclist: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      cbm: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      chk_autopricelist: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      warcdenum: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: "",
      },
      warloccde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: "",
      },
      warcdenum2: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: "",
      },
      warloccde2: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: "",
      },
      binnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: "",
      },
      status: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: "",
      },
      createdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      trntypcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      posted: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: "storagelocationtransferfile1",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "recid" }],
        },
        {
          name: "docnum",
          unique: true,
          using: "BTREE",
          fields: [{ name: "docnum" }],
        },
      ],
    }
  );

  storagelocationtransferfile1.associate = (models) => {
    storagelocationtransferfile1.hasMany(models.storagelocationtransferfile2, {
      foreignKey: "docnum",
      sourceKey: "docnum",
    });
  };

  return storagelocationtransferfile1;
};
