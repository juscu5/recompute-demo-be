const DataTypes = require("sequelize");
module.exports = function (sequelize) {
  const transferpostingfile1 = sequelize.define(
    "transferpostingfile1",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
      cancelrem: {
        type: DataTypes.STRING(600),
        allowNull: true,
      },
      supcde: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      supdsc: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      delsta: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      delrem: {
        type: DataTypes.STRING(600),
        allowNull: true,
      },
      docnum: {
        type: DataTypes.STRING(75),
        allowNull: true,
      },
      trncde: {
        type: DataTypes.STRING(9),
        allowNull: true,
      },
      remarks: {
        type: DataTypes.STRING(450),
        allowNull: true,
      },
      usrnam: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      curcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      trntyp: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      logtim: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      trntypcde: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      transtype: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      cancelled: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      warcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      warcde2: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      cuscde: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      cusdsc: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      manualgl: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      memtypcde: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      preby: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      chkby: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      apvby: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      canceldoc: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      doclock: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      trndte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      logdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      canceldte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      smncde: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      docstatus: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      gldepcde: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      cusadd1: {
        type: DataTypes.STRING(450),
        allowNull: true,
      },
      cusadd2: {
        type: DataTypes.STRING(450),
        allowNull: true,
      },
      savingstat: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      warcdenum: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      warloccde: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      binnum: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      trntot: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
      currte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
      factor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
    },
    {
      sequelize,
      tableName: "transferpostingfile1",
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
          using: "BTREE",
          fields: [{ name: "recid" }],
        },
      ],
    }
  );

  transferpostingfile1.associate = (models) => {
    transferpostingfile1.hasMany(models.transferpostingfile2, {
      foreignKey: "docnum",
      sourceKey: "docnum",
    });
  };

  return transferpostingfile1;
};
