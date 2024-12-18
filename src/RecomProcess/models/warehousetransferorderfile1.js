const DataTypes = require("sequelize");
module.exports = function (sequelize) {
  const warehousetransferorderfile1 = sequelize.define(
    "warehousetransferorderfile1",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        comment: "MODIFIED BY LstvPoco ON 22.08.01 17:32",
      },
      cancelrem: {
        type: DataTypes.STRING(200),
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
      delsta: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      delrem: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      docnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
        unique: "docnum",
      },
      trncde: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      remarks: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      trntot: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      usrnam: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      curcde: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      currte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      trntyp: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      factor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      logtim: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      trntypcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      cancelled: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      warcde: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      warcde2: {
        type: DataTypes.STRING(10),
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
      manualgl: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      memtypcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      preby: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      chkby: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      apvby: {
        type: DataTypes.STRING(50),
        allowNull: true,
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
      canceldoc: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      doclock: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "N",
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
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      docstatus: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      gldepcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      cusadd1: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      cusadd2: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      shipto: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      shipto2: {
        type: DataTypes.STRING(150),
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
      refnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      prccde: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      incprint: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      pcklstselect: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      sonum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      sttapvr: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      sttapvstat: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      deldte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      rcvdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      docdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      stodocnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING(20),
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
      savingstat: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "Y",
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
      intnum: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      createdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      posted: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      stowarcdenum: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      stowarloccde: {
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
      putstat: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      strnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      stonum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      binnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      postdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      reqapvr: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      reqexpdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      reqremarks: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      warcdenum2: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      warloccde2: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      rcvby: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      requestby: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      routecde: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "warehousetransferorderfile1",
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
          unique: true,
          using: "BTREE",
          fields: [{ name: "docnum" }],
        },
      ],
    }
  );

  warehousetransferorderfile1.associate = (models) => {
    warehousetransferorderfile1.hasMany(models.warehousetransferorderfile2, {
      foreignKey: "docnum",
      sourceKey: "docnum",
    });
  };

  return warehousetransferorderfile1;
};
