// buat folder berdasarkan nama artis

const fs = require("fs").promises;
const path = require("path");
const fss = require("fs");

const readFolder = async () => {
  try {
    const iSee = await fs.readdir(`music`);
    await Promise.all(
      iSee.map(async (item) => {
        const artist = item.split(" - ")[0].trim();

        const oldFile = path.join("music", item);
        const newFolder = path.join("music", artist);
        const newFile = path.join(newFolder, item);
        console.log(item);
        await fs.mkdir(newFolder, { recursive: true });
        console.log(`Folder "${artist}" dibuat atau sudah ada.`);
        await fs.rename(oldFile, newFile);
      })
    );
  } catch (error) {
    console.log(error);
  }
};

readFolder();
