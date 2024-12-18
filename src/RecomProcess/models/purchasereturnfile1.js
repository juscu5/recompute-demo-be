const DataTypes = require("sequelize");
module.exports = function (sequelize) {
  const purchasereturnfile1 = sequelize.define(
    "purchasereturnfile1",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
      cancelrem: {
        type: DataTypes.STRING(200),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      warcde: {
        type: DataTypes.STRING(10),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      supprccde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      docnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
        unique: "docnum",
      },
      supdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      trmdsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      shipto: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      trncde: {
        type: DataTypes.STRING(3),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      trntot: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      trmcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      curcde: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      comcde: {
        type: DataTypes.STRING(10),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      usrnam: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      currte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      supcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      cmnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      supadd1: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      logtim: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      textprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      textprcfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      trntotfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      remarks: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:19",
      },
      taxcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      ewtamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      pretaxamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      pretaxrte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      netvatamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      ewtcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      ewtrte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      vatamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      vatrte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      vatableamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      vatexemptamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      vatzeroratedamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      nonvat: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      chknonvat: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      manualvat: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      canceldoc: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      netvatamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      vatableamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      vatexemptamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      vatzeroratedamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      nonvatfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      vatamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      chkewt: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      totamtdis: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      totgroext: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      totamtdisfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      totgroextfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      netamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      netamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      preby: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      chkby: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      apvby: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      field01: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      field02: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      field03: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:20",
      },
      field04: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      field05: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      field06: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      field07: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      field08: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      field09: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      field10: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      field11: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      field12: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      field13: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      field14: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      field15: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      field16: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      field17: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      field18: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      field19: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      field20: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      doclock: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "N",
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      trndte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      duedate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      logdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      canceldte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      supgrpcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      bilnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      chkevat: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      evatcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      evatrte: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      evatamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      manualevat: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 19:21",
      },
      advdoc: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      gldepcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "MODIFIED BY LstvPoco ON 17.12.12 11:14",
      },
      refnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "MODIFIED BY LstvPoco ON 19.04.01 10:26",
      },
      deldte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      recdocnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
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
      createdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      posted: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      status: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      binnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      prdnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      savingstat: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "N",
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
    },
    {
      sequelize,
      tableName: "purchasereturnfile1",
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
        {
          name: "trncde",
          using: "BTREE",
          fields: [{ name: "trncde" }],
        },
      ],
    }
  );

  purchasereturnfile1.associate = (models) => {
    purchasereturnfile1.hasMany(models.purchasereturnfile2, {
      foreignKey: "docnum",
      sourceKey: "docnum",
    });
  };

  return purchasereturnfile1;
};
