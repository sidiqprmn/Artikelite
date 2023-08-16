const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Artikel = sequelize.define("Artikel", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    judul: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isi: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    media: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    kategoriId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Artikel.associate = (models) => {
    Artikel.belongsTo(models.Kategori, {
      foreignKey: "kategoriId",
      as: "kategori",
    });
  };

  return Artikel;
};
