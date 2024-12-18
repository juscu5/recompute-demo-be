const DataTypes = require("sequelize");
module.exports = function (sequelize) {
  const physicalcountfile3 = sequelize.define(
    "physicalcountfile3",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        comment: "MODIFIED BY LstvPoco ON 22.08.01 17:31",
      },
      docnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      itmcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      itmdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      itmqty: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      trncde: {
        type: DataTypes.STRING(3),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      untmea: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      wardsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      wardsc2: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      factor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      warcde: {
        type: DataTypes.STRING(10),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      warcde2: {
        type: DataTypes.STRING(10),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      linenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      tagnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      groprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      untprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      extprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      logtim: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      usrnam: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      varqty: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      varamt: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      cuscde: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      cusdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      trntypcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      sernum: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      stritmqty: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      pstritmqty: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      modified: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      puntprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      itmtyp: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      itmrem1: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      itmrem2: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      itmrem3: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      trndte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      logdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:59",
      },
      batchnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      expdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      mfgdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      refnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "MODIFIED BY LstvPoco ON 19.04.01 10:26",
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
      validate: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      uncounted: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      conflictto: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      manualadd: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: "physicalcountfile3",
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
          using: "BTREE",
          fields: [
            { name: "docnum" },
            { name: "itmcde" },
            { name: "itmdsc" },
            { name: "trncde" },
            { name: "untmea" },
            { name: "trndte" },
          ],
        },
        {
          name: "unique_idx",
          using: "BTREE",
          fields: [
            { name: "docnum" },
            { name: "warcde" },
            { name: "binnum" },
            { name: "itmcde" },
            { name: "batchnum" },
            { name: "mfgdte" },
            { name: "untmea" },
          ],
        },
        {
          name: "idx_pcountDashboard",
          using: "BTREE",
          fields: [
            { name: "docnum" },
            { name: "warcde" },
            { name: "binnum" },
            { name: "warcdenum" },
            { name: "warloccde" },
            { name: "itmcde" },
            { name: "batchnum" },
            { name: "mfgdte" },
            { name: "expdte" },
          ],
        },
      ],
    }
  );
  return physicalcountfile3;
};
