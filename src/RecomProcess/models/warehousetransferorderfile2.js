const DataTypes = require("sequelize");
module.exports = function (sequelize) {
  const warehousetransferorderfile2 = sequelize.define(
    "warehousetransferorderfile2",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        comment: "MODIFIED BY LstvPoco ON 22.08.01 17:32",
      },
      dettyp: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "i",
      },
      field01: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field02: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field03: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field04: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field05: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field06: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field07: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field08: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field09: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field10: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field11: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field12: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field13: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field14: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field15: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field16: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field17: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field18: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field19: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      field20: {
        type: DataTypes.STRING(150),
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
      docnum: {
        type: DataTypes.STRING(25),
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
      itmqty: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      trncde: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      untmea: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      wardsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      wardsc2: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      factor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      warcde: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      warcde2: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      linenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      untprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      extprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      trntyp: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      logtim: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      usrnam: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      trntypcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      cuscde: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      cusdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      sernum: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      lstcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      extlst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      avecst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      extave: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      fifcst: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      extfif: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      itmtyp: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      pckitmcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      pckitmqty: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      itmpackage: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      itmpackagedet: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      itmrem1: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      itmrem2: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      itmrem3: {
        type: DataTypes.STRING(100),
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
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      sonum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      copyline: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      copyqty: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      itmdel: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      delsta: {
        type: DataTypes.STRING(20),
        allowNull: true,
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
      prccde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      binnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      binnum2: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      foritmcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      batchbal: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      srtdraftnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      stodocnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      cdrdocnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      stowarcdeto: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      stiwarcdefrom: {
        type: DataTypes.STRING(10),
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
      intqty: {
        type: DataTypes.DECIMAL(18, 0),
        allowNull: true,
        defaultValue: 0,
      },
      lpnnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: "",
        unique: "unq_lpnnum",
      },
      posted: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      postdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      intdocnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      putawayvalidby: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      ptaval: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      stowarloccde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      stowarcdenum: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      stiwarcdenum: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      stiwarloccde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      validate: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      file3linenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      warcdenum2: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      warloccde2: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      scanqty: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      savingstat: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "N",
      },
    },
    {
      sequelize,
      tableName: "warehousetransferorderfile2",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "recid" }],
        },
        {
          name: "unq_lpnnum",
          unique: true,
          using: "BTREE",
          fields: [{ name: "lpnnum" }],
        },
        {
          name: "sonum",
          using: "BTREE",
          fields: [{ name: "sonum" }],
        },
        {
          name: "dettyp",
          using: "BTREE",
          fields: [{ name: "dettyp" }],
        },
        {
          name: "trndte",
          using: "BTREE",
          fields: [{ name: "trndte" }],
        },
        {
          name: "itmcde",
          using: "BTREE",
          fields: [{ name: "itmcde" }],
        },
        {
          name: "docnum",
          using: "BTREE",
          fields: [{ name: "docnum" }],
        },
      ],
    }
  );

  warehousetransferorderfile2.associate = (models) => {
    warehousetransferorderfile2.belongsTo(models.warehousetransferorderfile1, {
      foreignKey: "docnum",
      targetKey: "docnum",
    });
  };

  return warehousetransferorderfile2;
};
