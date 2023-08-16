const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// Impor model Artikel dan Kategori
const Artikel = require("./artikel")(sequelize);
const Kategori = require("./kategori")(sequelize);

// Definisikan hubungan antara model Artikel dan Kategori
Artikel.associate({ Kategori });

// Tambahkan model ke objek db
db.Artikel = Artikel;
db.Kategori = Kategori;

// Jika ada model lain, tambahkan di sini seperti contoh di atas

// Export objek db dan sequelize
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
