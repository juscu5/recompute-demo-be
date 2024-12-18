const DataTypes = require("sequelize");
module.exports = function (sequelize) {
  const purchasetofile1 = sequelize.define(
    "purchasetofile1",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        comment: "MODIFIED BY LstvPoco ON 22.08.01 17:31",
      },
      cancelrem: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      warcde: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      supprccde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      bilnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      docnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
        unique: "purchasetofile1_docnum_unique",
      },
      supdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      trmdsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      shipto: {
        type: DataTypes.STRING(50),
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
      trmcde: {
        type: DataTypes.STRING(20),
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
      supcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      supadd1: {
        type: DataTypes.STRING(50),
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
      textprcfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      trntotfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      shipto2: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      othchatotfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      remarks: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      docapp: {
        type: DataTypes.STRING(50),
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
      vat: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      taxcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      ewtamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      pretaxamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      pretaxrte: {
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
      ewtrte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      ewtpaid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      ewt: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      boramt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      borcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      bordsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      docbalfor: {
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
      manualvat: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
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
      gainloss: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      setdocbalfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      settotpdcfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
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
      chkewt: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
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
      netamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      netamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
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
      chknum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      bnkcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      voudocnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      doclock: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "N",
      },
      remarks1: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      supgrpcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
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
      chkevat: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      evatcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      evatrte: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      evatamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      manualevat: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      advdoc: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      gldepcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      refnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      logtim: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      rcvdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      savingstat: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "Y",
      },
      intnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      posteddte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      rcvby: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      deldte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      rcvfrm: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: "",
      },
      pdtopen: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "N",
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
      ptostat: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: "",
      },
      postdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      trntypcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      warcde2: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      ptotyp: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "purchasetofile1",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "recid" }],
        },
        {
          name: "recid",
          unique: true,
          using: "BTREE",
          fields: [{ name: "recid" }],
        },
        {
          name: "purchasetofile1_docnum_unique",
          unique: true,
          using: "BTREE",
          fields: [{ name: "docnum" }],
        },
        {
          name: "lastpaydte",
          using: "BTREE",
          fields: [{ name: "lastpaydte" }],
        },
        {
          name: "settotpdc",
          using: "BTREE",
          fields: [{ name: "settotpdc" }],
        },
        {
          name: "setdocbalfor",
          using: "BTREE",
          fields: [{ name: "setdocbalfor" }],
        },
        {
          name: "trndte",
          using: "BTREE",
          fields: [{ name: "trndte" }],
        },
        {
          name: "setdocbal",
          using: "BTREE",
          fields: [{ name: "setdocbal" }],
        },
        {
          name: "trmcde",
          using: "BTREE",
          fields: [{ name: "trmcde" }],
        },
        {
          name: "refnum",
          using: "BTREE",
          fields: [{ name: "refnum" }],
        },
        {
          name: "trncde",
          using: "BTREE",
          fields: [{ name: "trncde" }],
        },
        {
          name: "trntot",
          using: "BTREE",
          fields: [{ name: "trntot" }],
        },
      ],
    }
  );

  purchasetofile1.associate = (models) => {
    purchasetofile1.hasMany(models.purchasetofile2, {
      foreignKey: "docnum",
      sourceKey: "docnum",
    });
  };

  return purchasetofile1;
};
