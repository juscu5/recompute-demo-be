const DataTypes = require("sequelize");
module.exports = function (sequelize) {
  const transferpostingfile2 = sequelize.define(
    "transferpostingfile2",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
      dettyp: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      docnum: {
        type: DataTypes.STRING(75),
        allowNull: true,
      },
      itmcde: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      itmdsc: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      itmcde2: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      itmdsc2: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      trncde: {
        type: DataTypes.STRING(9),
        allowNull: true,
      },
      untmea: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      wardsc: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      wardsc2: {
        type: DataTypes.STRING(90),
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
      linenum: {
        type: DataTypes.INTEGER,
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
      usrnam: {
        type: DataTypes.STRING(60),
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
      cuscde: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      cusdsc: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      sernum: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      itmtyp: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      pckitmcde: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      itmpackage: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      itmpackagedet: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      itmrem1: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      itmrem2: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      itmrem3: {
        type: DataTypes.STRING(300),
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
      smncde: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      sonum: {
        type: DataTypes.STRING(75),
        allowNull: true,
      },
      copyline: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      delsta: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      batchnum: {
        type: DataTypes.STRING(45),
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
      batchnum2: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      expdte2: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      mfgdte2: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      prccde: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      binnum: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      binnum2: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      foritmcde: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      remarks: {
        type: DataTypes.STRING(450),
        allowNull: true,
      },
      remarks2: {
        type: DataTypes.STRING(450),
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
      untmea2: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      itmqty: {
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
      untprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
      extprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
      lstcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
      extlst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
      avecst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
      extave: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
      fifcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
      extfif: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
      pckitmqty: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
      copyqty: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
      itmdel: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
      itmqty2: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "MODIFIED BY LstvPoco ON 23.06.05 14:45",
      },
    },
    {
      sequelize,
      tableName: "transferpostingfile2",
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

  transferpostingfile2.associate = (models) => {
    transferpostingfile2.belongsTo(models.transferpostingfile1, {
      foreignKey: "docnum",
      targetKey: "docnum",
    });
  };

  return transferpostingfile2;
};
