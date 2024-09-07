const fs = require("fs");

var data = fs.readFileSync("./data.json");
var data = JSON.parse(data);

const list = (args) => {
    if(args[2] == "list"){
        console.log(data.tasks);
    }
}

module.exports = list;