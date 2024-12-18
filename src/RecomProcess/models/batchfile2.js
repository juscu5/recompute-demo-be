const DataTypes = require("sequelize");
module.exports = function (sequelize) {
  const batchfile2 = sequelize.define(
    "batchfile2",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        comment: "MODIFIED BY LstvPoco ON 22.08.01 11:56",
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
      itmcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      itmdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      warcde: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      wardsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      batchbal: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      binnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "batchfile2",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "recid" }],
        },
        {
          name: "warcde_itmcde_batchnum_mfgdte_expdte",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "warcde" },
            { name: "itmcde" },
            { name: "batchnum" },
            { name: "mfgdte" },
            { name: "expdte" },
          ],
        },
        {
          name: "warcde",
          using: "BTREE",
          fields: [{ name: "warcde" }],
        },
        {
          name: "bacthnum",
          using: "BTREE",
          fields: [{ name: "batchnum" }],
        },
        {
          name: "itmcde",
          using: "BTREE",
          fields: [{ name: "itmcde" }],
        },
        {
          name: "mfgdte",
          using: "BTREE",
          fields: [{ name: "mfgdte" }],
        },
      ],
    }
  );
  return batchfile2;
};
