const fs = require("fs");

var data = fs.readFileSync("./data.json");
var data = JSON.parse(data);

const deleteTask = (args) => {
    if(args[2] == "delete"){
        
    }
}

module.exports = deleteTask;