const fs = require("fs").promises; // membuat promise
const path = require("path");

const listMusic = [
  "Payung Teduh - Akad",
  "Payung Teduh  - Kucari Kamu",
  "Payung Teduh  - Tidurlah",
  "Payung Teduh  - Resah",
  "Parade Hujan  - Rahasia",
  "Payung Teduh  - Biarkan",
  "Payung Teduh  - Rahasia",
  "Payung Teduh  - Masa Kecilku",
  "Parade Hujan  - Menuju Senja",
  "Payung Teduh  - Muram",
  "Pusakata  - Masa Kecilku",
];
async function createFile(fileName) {
  try {
    const content = "hello! \n"; // membuat baris kebawah
    await fs.writeFile(fileName, content);
    console.log("write file success");
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
listMusic.forEach((music) => {
  createFile(path.join("music", `${music}.mp3`));
});
