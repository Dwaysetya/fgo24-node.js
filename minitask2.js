const fs = require("fs").promises; // membuat promise
const path = require("path");
const url =
  "https://gist.githubusercontent.com/fulsep/58daee79a699d0fe143da36bbc47e3d6/raw/dcc2e9c970af553011ba6d2d13331e68f5cf42ff/lagu.json";

async function createFile(fileName) {
  try {
    const content = "";
    await fs.writeFile(fileName, content);
    console.log("write file success");
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
const myMusic = async () => {
  try {
    const fetchData = await fetch(url);
    const data = await fetchData.json();
    const result = data.map((item) => item.split("-").reverse().join("-"));

    result.forEach((music) => {
      createFile(path.join("music", `${music}.mp3`));
    });
  } catch (error) {
    console.log(err);
  }
};

myMusic();
