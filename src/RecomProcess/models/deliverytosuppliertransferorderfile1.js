const DataTypes = require("sequelize");
module.exports = function (sequelize) {
  const deliverytosuppliertransferorderfile1 = sequelize.define(
    "deliverytosuppliertransferorderfile1",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        comment: "MODIFIED BY LstvPoco ON 22.08.01 17:16",
      },
      cancelrem: {
        type: DataTypes.STRING(200),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:33",
      },
      supcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:33",
      },
      supdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:33",
      },
      delsta: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:33",
      },
      delrem: {
        type: DataTypes.STRING(200),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:33",
      },
      docnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:33",
        unique: "docnum",
      },
      remarks: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:33",
      },
      trncde: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      trntot: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:33",
      },
      usrnam: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:33",
      },
      curcde: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:33",
      },
      currte: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:33",
      },
      trntyp: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:33",
      },
      factor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:33",
      },
      logtim: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:34",
      },
      trntypcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:34",
      },
      cancelled: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:34",
      },
      warcde: {
        type: DataTypes.STRING(10),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:34",
      },
      warcde2: {
        type: DataTypes.STRING(10),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:34",
      },
      cuscde: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:34",
      },
      cusdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:34",
      },
      manualgl: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:34",
      },
      memtypcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:34",
      },
      preby: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:34",
      },
      chkby: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:34",
      },
      apvby: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:34",
      },
      canceldoc: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:35",
      },
      doclock: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "N",
        comment: "ADDED BY LstvPoco ON 16.09.30 18:35",
      },
      trndte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:35",
      },
      logdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:35",
      },
      canceldte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:35",
      },
      smncde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:35",
      },
      docstatus: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      gldepcde: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "MODIFIED BY LstvPoco ON 17.12.12 11:12",
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
        comment: "MODIFIED BY LstvPoco ON 19.04.01 10:25",
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
      category: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      savingstat: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "Y",
      },
      trncreator: {
        type: DataTypes.STRING(30),
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
      binnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: "",
      },
      posted: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      btbnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      createdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      neededdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      invtrnstyp: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      STATUS: {
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
      dtsreqnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      apvdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      routecde: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "deliverytosuppliertransferorderfile1",
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

  deliverytosuppliertransferorderfile1.associate = (models) => {
    deliverytosuppliertransferorderfile1.hasMany(
      models.deliverytosuppliertransferorderfile2,
      {
        foreignKey: "docnum",
        sourceKey: "docnum",
      }
    );
  };

  return deliverytosuppliertransferorderfile1;
};
