const DataTypes = require("sequelize");
module.exports = function (sequelize) {
  const binfile1 = sequelize.define(
    "binfile1",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
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
      warcde: {
        type: DataTypes.STRING(10),
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
      createddte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      inactivedte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      inactive: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "N",
      },
      hldtypcde: {
        type: DataTypes.STRING(15),
        allowNull: false,
        defaultValue: "",
      },
      hldtypdsc: {
        type: DataTypes.STRING(25),
        allowNull: false,
        defaultValue: "",
      },
      warnum: {
        type: DataTypes.STRING(15),
        allowNull: false,
        defaultValue: "",
      },
      waruntnum: {
        type: DataTypes.STRING(15),
        allowNull: false,
        defaultValue: "",
      },
      warloc: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: "",
      },
      wardc: {
        type: DataTypes.STRING(15),
        allowNull: false,
        defaultValue: "",
      },
      binseries: {
        type: DataTypes.STRING(15),
        allowNull: false,
        defaultValue: "",
      },
      binrcklvl: {
        type: DataTypes.STRING(15),
        allowNull: false,
        defaultValue: "",
      },
      binrckzone: {
        type: DataTypes.STRING(15),
        allowNull: false,
        defaultValue: "",
      },
      strgcde: {
        type: DataTypes.STRING(15),
        allowNull: false,
        defaultValue: "",
      },
      strgdsc: {
        type: DataTypes.STRING(25),
        allowNull: false,
        defaultValue: "",
      },
      strgzonecde: {
        type: DataTypes.STRING(15),
        allowNull: false,
        defaultValue: "",
      },
      strgzonedsc: {
        type: DataTypes.STRING(25),
        allowNull: false,
        defaultValue: "",
      },
      strgseccde: {
        type: DataTypes.STRING(15),
        allowNull: false,
        defaultValue: "",
      },
      strgsecdsc: {
        type: DataTypes.STRING(25),
        allowNull: false,
        defaultValue: "",
      },
      warcdenum: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: "",
      },
      warloccde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: "",
      },
      strglvlcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: "",
      },
      strglvldsc: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: "",
      },
      brncde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: "",
      },
      brndsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: "",
      },
      itmclacde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: "",
      },
      itmcladsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: "",
      },
      rackzonecde: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: "",
      },
      rackzonedsc: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "",
      },
      hldoutgoing: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
      hldtypcde2: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: "",
      },
      hldtypdsc2: {
        type: DataTypes.STRING(25),
        allowNull: true,
        defaultValue: "",
      },
      hldincomming: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: "binfile1",
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
            { name: "warcdenum" },
            { name: "warloccde" },
          ],
        },
        {
          name: "idx_pcountDashboard",
          using: "BTREE",
          fields: [
            { name: "warcde" },
            { name: "warcdenum" },
            { name: "warloccde" },
            { name: "binnum" },
            { name: "inactivedte" },
          ],
        },
      ],
    }
  );
  return binfile1;
};
