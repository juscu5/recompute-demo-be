const DataTypes = require("sequelize");
module.exports = function (sequelize) {
  const physicalcountfile2 = sequelize.define(
    "physicalcountfile2",
    {
      recid: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        comment: "MODIFIED BY LstvPoco ON 22.08.01 17:31",
      },
      docnum: {
        type: DataTypes.STRING(25),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:57",
      },
      itmcde: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:57",
      },
      itmdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:57",
      },
      itmqty: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:57",
      },
      trncde: {
        type: DataTypes.STRING(3),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:57",
      },
      untmea: {
        type: DataTypes.STRING(5),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:57",
      },
      wardsc: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:57",
      },
      wardsc2: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:57",
      },
      factor: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:57",
      },
      warcde: {
        type: DataTypes.STRING(10),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:57",
      },
      warcde2: {
        type: DataTypes.STRING(10),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:57",
      },
      linenum: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:57",
      },
      tagnum: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:57",
      },
      groprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:57",
      },
      untprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:57",
      },
      extprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:57",
      },
      logtim: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:57",
      },
      usrnam: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:57",
      },
      varqty: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:57",
      },
      varamt: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      cuscde: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      cusdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      trntypcde: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      sernum: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      stritmqty: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      pstritmqty: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      modified: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      puntprc: {
        type: DataTypes.DECIMAL(18, 5),
        allowNull: true,
        defaultValue: 0.0,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      itmtyp: {
        type: DataTypes.STRING(15),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      itmrem1: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      itmrem2: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      itmrem3: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      trndte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      logdte: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "ADDED BY LstvPoco ON 16.09.30 18:58",
      },
      batchnum: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      refnum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "MODIFIED BY LstvPoco ON 19.04.01 10:26",
      },
      binnum: {
        type: DataTypes.STRING(15),
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
      tableName: "physicalcountfile2",
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
          using: "BTREE",
          fields: [{ name: "docnum" }],
        },
        {
          name: "itmcde",
          using: "BTREE",
          fields: [{ name: "itmcde" }],
        },
        {
          name: "inv_idx",
          using: "BTREE",
          fields: [
            { name: "docnum" },
            { name: "trncde" },
            { name: "stritmqty" },
            { name: "itmtyp" },
          ],
        },
      ],
    }
  );

  physicalcountfile2.associate = (models) => {
    physicalcountfile2.belongsTo(models.physicalcountfile1, {
      foreignKey: "docnum",
      targetKey: "docnum",
    });
  };
  return physicalcountfile2;
};
