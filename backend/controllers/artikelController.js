const { Artikel, Kategori } = require("../models");

// Melihat/Mengambil data artikel dari database
exports.getAllArtikel = async (req, res) => {
  try {
    const artikels = await Artikel.findAll({
      include: [Kategori],
    });
    res.json(artikels);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan saat mengambil data artikel." });
  }
};

// Mengedit data artikel berdasarkan ID
exports.editArtikel = async (req, res) => {
  const { id } = req.params;
  const { judul, deskripsi, isi, media, tanggal, kategoriId } = req.body;

  try {
    const artikel = await Artikel.findByPk(id);
    if (!artikel) {
      return res.status(404).json({ message: "Artikel tidak ditemukan." });
    }

    // Update data artikel
    await artikel.update({
      judul,
      deskripsi,
      isi,
      media,
      tanggal,
      kategoriId,
    });

    res.json(artikel);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan saat mengedit data artikel." });
  }
};

// Menghapus data artikel berdasarkan ID
exports.deleteArtikel = async (req, res) => {
  const { id } = req.params;

  try {
    const artikel = await Artikel.findByPk(id);
    if (!artikel) {
      return res.status(404).json({ message: "Artikel tidak ditemukan." });
    }

    // Hapus data artikel
    await artikel.destroy();

    res.json({ message: "Artikel berhasil dihapus." });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan saat menghapus data artikel." });
  }
};

// Menambahkan artikel baru
exports.addArtikel = async (req, res) => {
  const { judul, deskripsi, isi, media, tanggal, kategoriId } = req.body;

  try {
    const artikel = await Artikel.create({
      judul,
      deskripsi,
      isi,
      media,
      tanggal,
      kategoriId,
    });

    res.json(artikel);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan saat menambahkan artikel baru." });
  }
};
