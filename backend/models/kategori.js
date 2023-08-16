const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Kategori = sequelize.define("Kategori", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    kategori: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  });

  return Kategori;
};
