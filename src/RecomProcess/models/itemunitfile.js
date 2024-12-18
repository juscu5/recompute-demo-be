const DataTypes = require("sequelize");
module.exports = function (sequelize) {
  const itemunitfile = sequelize.define(
    "itemunitfile",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        comment: "MODIFIED BY LstvPoco ON 22.08.01 17:16",
      },
      minselprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:43",
      },
      itmcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:43",
      },
      conver: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:43",
      },
      untmea: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:43",
      },
      untcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:43",
      },
      markup: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:44",
      },
      groprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:44",
      },
      prcdst1: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:44",
      },
      prcdst2: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:44",
      },
      prcdst3: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:44",
      },
      untprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:44",
      },
      curcde: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:44",
      },
      disamt: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:44",
      },
      avecst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:44",
      },
      salcur: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:44",
      },
      purcur: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:44",
      },
      salquota: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:44",
      },
      length: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      weight: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      height: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      witdh: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      cbm: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      barcde: {
        type: DataTypes.STRING(35),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "itemunitfile",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "recid" }],
        },
        {
          name: "untmea",
          using: "BTREE",
          fields: [{ name: "untmea" }],
        },
        {
          name: "itmcde",
          using: "BTREE",
          fields: [{ name: "itmcde" }],
        },
        {
          name: "itemfile_idx1",
          using: "BTREE",
          fields: [{ name: "itmcde" }, { name: "untmea" }],
        },
      ],
    }
  );
  return itemunitfile;
};
