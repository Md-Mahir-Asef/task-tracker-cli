const fs = require("fs");
var data = fs.readFileSync("./data.json");
var data = JSON.parse(data);

const add = (args) =>{
    if (args[2] == "add") {
        const title = args[3] ? args[3] : "";
        const desc = args[4] ? args[4] : "";
        const status = args[5] ? args[5] : "N/A";
      
        if (!(status == "todo" || status == "in-progress" || status == "done")) {
          console.log(
            "You haven't given any valid status so your task's status is saved as \"N/A\". "
          );
        }
      
        const id = data.tasks[data.tasks.length - 1].id + 1;
        data.tasks[data.tasks.length] = {
          id: id,
          title: title,
          description: desc,
          status: status,
          createdAt: new Date(),
        };
      
        fs.writeFileSync("./data.json", JSON.stringify(data));
      
        console.log("Your task is added successfully!");
      
      } 
}

module.exports = add;