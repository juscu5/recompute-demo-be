const DataTypes = require("sequelize");
module.exports = function (sequelize) {
  const salesfile2 = sequelize.define(
    "salesfile2",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        comment: "MODIFIED BY LstvPoco ON 22.08.01 17:31",
      },
      linegrp: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      chkasy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      field01: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      field02: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      field03: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      field04: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      field05: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      field06: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      field07: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      field08: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      field09: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      field10: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      field11: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      field12: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      field13: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      field14: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      field15: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      field16: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      field17: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      field18: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      field19: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      field20: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      PckItmCde: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      copyline: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      scpwddis: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      scpwdamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      scpwdamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      docnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      cusdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      itmcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      itmdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      itmqty: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      untprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:06",
      },
      extprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      trncde: {
        type: DataTypes.STRING(3),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      untmea: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      prcdst1: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      prcdst2: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      prcdst3: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      wardsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      factor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      linenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      cuscde: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      warcde: {
        type: DataTypes.STRING(10),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      groprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      prccde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      sonum: {
        type: DataTypes.STRING(25),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      disamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      conver1: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      smncde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      smndsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      usrnam: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      logtim: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      trmtypcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      trmtypdsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      curcde: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      currte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      disamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      untprcfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      groprcfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      extprcfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      untcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      extcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      sernum: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      drnum: {
        type: DataTypes.STRING(10),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      disper: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      lstcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      extlst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      avecst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:07",
      },
      extave: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      fifcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      extfif: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      itmtyp: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      netvatamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      taxcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      vatamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      vatrte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      ewtamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      evatamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      ewtcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      ewtrte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      evatcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      evatrte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      itmrem1: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      itmrem2: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      itmrem3: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      netvatamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      vatamtfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      chkewt: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      amtdis: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      groext: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      amtdisfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      groextfor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      refnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      increp: {
        type: DataTypes.STRING(1),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      cusgrpcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      cusitmcde: {
        type: DataTypes.STRING(200),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      dettyp: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "i",
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      trndte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      logdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      drdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 20:08",
      },
      copyqty: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
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
      binnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      drfile2copyline: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      cdrnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "salesfile2",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "recid" }],
        },
        {
          name: "trndte",
          using: "BTREE",
          fields: [
            { name: "trndte" },
            { name: "trncde" },
            { name: "itmcde" },
            { name: "curcde" },
          ],
        },
        {
          name: "enhcsosi",
          using: "BTREE",
          fields: [
            { name: "sonum" },
            { name: "itmcde" },
            { name: "untmea" },
            { name: "copyline" },
          ],
        },
        {
          name: "sonum",
          using: "BTREE",
          fields: [{ name: "sonum" }],
        },
        {
          name: "docnum",
          using: "BTREE",
          fields: [{ name: "docnum" }],
        },
        {
          name: "rep_idx",
          using: "BTREE",
          fields: [
            { name: "docnum" },
            { name: "itmcde" },
            { name: "itmdsc" },
            { name: "trndte" },
          ],
        },
      ],
    }
  );

  salesfile2.associate = (models) => {
    salesfile2.belongsTo(models.salesfile1, {
      foreignKey: "docnum",
      targetKey: "docnum",
    });
  };

  return salesfile2;
};
