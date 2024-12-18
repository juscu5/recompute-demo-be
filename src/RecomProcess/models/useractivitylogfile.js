const DataTypes = require("sequelize");
module.exports = function (sequelize) {
  const useractivitylogfile = sequelize.define(
    "useractivitylogfile",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        comment: "MODIFIED BY LstvPoco ON 22.08.01 11:57",
      },
      usrname: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:03",
      },
      usrdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:03",
      },
      usrtim: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:03",
      },
      trndte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:03",
      },
      module: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:03",
      },
      empcode: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:03",
      },
      fullname: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:03",
      },
      parameter: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:03",
      },
      webpage: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:03",
      },
      usrnam: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:03",
      },
      ipaddress: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:03",
      },
      pcdomainname: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:03",
      },
      pcusername: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:03",
      },
      osversion: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:04",
      },
      pagename: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:04",
      },
      method: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:04",
      },
      activity: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:04",
      },
      status: {
        type: DataTypes.STRING(7),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:04",
      },
      log_dbname: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:04",
      },
      log_tablename: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:04",
      },
      log_recid: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:04",
      },
      usrcde: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:04",
      },
      system_version: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:04",
      },
      remarks: {
        type: DataTypes.STRING(300),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:04",
      },
      logdte_client: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:04",
      },
      logdte_server: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:04",
      },
      linenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 21:04",
      },
      logatt: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "MODIFIED BY LstvPoco ON 17.09.08 17:19",
      },
      docnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      noitm: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
      },
      logduration: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      trancode: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "useractivitylogfile",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "recid" }],
        },
      ],
    }
  );
  return useractivitylogfile;
};
