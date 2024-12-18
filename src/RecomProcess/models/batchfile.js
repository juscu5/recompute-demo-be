const DataTypes = require("sequelize");
module.exports = function (sequelize) {
  const batchfile = sequelize.define(
    "batchfile",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        comment: "MODIFIED BY LstvPoco ON 23.09.15 11:49",
      },
      batchnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      supcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      supdsc: {
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
      itmcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      itmdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "batchfile",
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
            { name: "itmcde" },
            { name: "batchnum" },
            { name: "mfgdte" },
            { name: "expdte" },
          ],
        },
        {
          name: "batchfile_batchnum_index",
          using: "BTREE",
          fields: [{ name: "batchnum" }],
        },
        {
          name: "batchfile_expdte_index",
          using: "BTREE",
          fields: [{ name: "expdte" }],
        },
        {
          name: "batchfile_itmcde_index",
          using: "BTREE",
          fields: [{ name: "itmcde" }],
        },
        {
          name: "batchfile_mfgdte_index",
          using: "BTREE",
          fields: [{ name: "mfgdte" }],
        },
      ],
    }
  );

  return batchfile;
};
