
const fs = require("fs");
const stock = fs.readFileSync("./bicicletas.json","utf-8");
const bicicletas = JSON.parse(stock);





module.exports = bicicletas;

