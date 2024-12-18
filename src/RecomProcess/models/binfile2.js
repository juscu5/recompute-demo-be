const DataTypes = require("sequelize");
module.exports = function (sequelize) {
  const binfile2 = sequelize.define(
    "binfile2",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        comment: "MODIFIED BY LstvPoco ON 22.08.01 11:56",
      },
      binnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      batchnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      itmcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      untmea: {
        type: DataTypes.STRING(100),
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
      warcde: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      batchbal: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      binbal: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      itmdsc: {
        type: DataTypes.STRING(100),
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
    },
    {
      sequelize,
      tableName: "binfile2",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "recid" }],
        },
        {
          name: "unique_idx",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "warcde" },
            { name: "binnum" },
            { name: "itmcde" },
            { name: "batchnum" },
            { name: "mfgdte" },
            { name: "warcdenum" },
            { name: "warloccde" },
            { name: "expdte" },
          ],
        },
        {
          name: "warcde_indx",
          using: "BTREE",
          fields: [{ name: "warcde" }],
        },
        {
          name: "idx_pcountDashboard",
          using: "BTREE",
          fields: [
            { name: "warcde" },
            { name: "warcdenum" },
            { name: "warloccde" },
            { name: "binnum" },
            { name: "itmcde" },
            { name: "batchnum" },
            { name: "mfgdte" },
            { name: "expdte" },
          ],
        },
      ],
    }
  );
  return binfile2;
};
