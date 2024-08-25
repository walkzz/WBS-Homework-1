const fs = require("fs").promises;
async function readData() {
    const data = await fs.readFile("data.json", "utf8");
    return JSON.parse(data);
}
async function writeData(data) {
    await fs.writeFile("data.json", JSON.stringify(data, null, 2));
}
module.exports = { readData, writeData };