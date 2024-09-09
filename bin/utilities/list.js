const fs = require("fs");

var data = fs.readFileSync("./data.json");
var data = JSON.parse(data);

const list = (args) => {
  if (args[2] == "list") {
    console.log("\n-------------------------------------------------");
    const status = args[3];
    if (
      !(
        status ||
        status == "todo" ||
        status == "in-progress" ||
        status == "done" ||
        status == "N/A"
      )
    ) {
      for (let i = 0; i < data.tasks.length; i++) {
        console.log(`ID: ${data.tasks[i].id}`);
        console.log(`Title: ${data.tasks[i].title}`);
        console.log(`Description: ${data.tasks[i].description}`);
        console.log(`Status: ${data.tasks[i].status}`);
        console.log(`Date of Creation: ${data.tasks[i].createdAt}`);
        console.log("-------------------------------------------------");
      }
    } else {
      for (let i = 0; i < data.tasks.length; i++) {
        if (data.tasks[i].status == status) {
          console.log(`ID: ${data.tasks[i].id}`);
          console.log(`Title: ${data.tasks[i].title}`);
          console.log(`Description: ${data.tasks[i].description}`);
          console.log(`Status: ${data.tasks[i].status}`);
          console.log(`Date of Creation: ${data.tasks[i].createdAt}`);
          console.log("-------------------------------------------------");
        }
      }
    }
  }
};

module.exports = list;
