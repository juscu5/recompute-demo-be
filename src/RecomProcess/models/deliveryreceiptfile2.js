const DataTypes = require("sequelize");
module.exports = function (sequelize) {
  const deliveryreceiptfile2 = sequelize.define(
    "deliveryreceiptfile2",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        comment: "MODIFIED BY LstvPoco ON 23.04.05 13:45",
      },
      field01: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      field02: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      field03: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      field04: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      field05: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      field06: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      field07: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      field08: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      field09: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      field10: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      field11: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      field12: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      field13: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      field14: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      field15: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      field16: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      field17: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      field18: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      field19: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      field20: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      copyline: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      delsta: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      scpwddis: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      scpwdamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      scpwdamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      docnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      avecst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      conver1: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      copyqty: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      curcde: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:10",
      },
      currte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      cuscde: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      cusdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      disamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      disamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      disper: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      drnum: {
        type: DataTypes.STRING(10),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      evatamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      evatcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      evatrte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      ewtamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      ewtcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      ewtrte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      extave: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      extcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      extfif: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      extlst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      extprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      extprcfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      factor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      fifcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      groprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      groprcfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      itmcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      itmdel: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      itmdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      itmqty: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      itmtyp: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      linenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      logtim: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      lstcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      netvatamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      prccde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:11",
      },
      prcdst1: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      prcdst2: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      prcdst3: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      sernum: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      smncde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      smndsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      sonum: {
        type: DataTypes.STRING(25),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      taxcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      trmtypcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      trmtypdsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      trncde: {
        type: DataTypes.STRING(3),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      untcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      untmea: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      untprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      untprcfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      usrnam: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      vatamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      vatrte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      warcde: {
        type: DataTypes.STRING(10),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      wardsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      netvatamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      vatamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      itmrem1: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      itmrem2: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      itmrem3: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      amtdis: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      groext: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      amtdisfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      groextfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      CusItmCde: {
        type: DataTypes.STRING(200),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      dettyp: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "i",
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      logdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      trndte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      drdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:12",
      },
      batchnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      mfgdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      expdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      ponum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      binnum: {
        type: DataTypes.STRING(15),
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
      postdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      savingstat: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "N",
      },
    },
    {
      sequelize,
      tableName: "deliveryreceiptfile2",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "recid" }],
        },
        {
          name: "sonum",
          using: "BTREE",
          fields: [{ name: "sonum" }],
        },
        {
          name: "enhcsodr",
          using: "BTREE",
          fields: [
            { name: "sonum" },
            { name: "itmcde" },
            { name: "untmea" },
            { name: "copyline" },
          ],
        },
        {
          name: "spdupcrtstklvl4",
          using: "BTREE",
          fields: [{ name: "itmcde" }, { name: "dettyp" }],
        },
        {
          name: "spdupdrfl2",
          using: "BTREE",
          fields: [{ name: "docnum" }],
        },
        {
          name: "dettyp",
          using: "BTREE",
          fields: [{ name: "dettyp" }],
        },
        {
          name: "itmcde",
          using: "BTREE",
          fields: [{ name: "itmcde" }],
        },
        {
          name: "unq_idx",
          using: "BTREE",
          fields: [{ name: "docnum" }, { name: "linenum" }],
        },
      ],
    }
  );

  deliveryreceiptfile2.associate = (models) => {
    deliveryreceiptfile2.belongsTo(models.deliveryreceiptfile1, {
      foreignKey: "docnum",
      targetKey: "docnum",
    });
  };

  return deliveryreceiptfile2;
};
