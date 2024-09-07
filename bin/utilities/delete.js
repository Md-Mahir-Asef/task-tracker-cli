const fs = require("fs");

var data = fs.readFileSync("./data.json");
var data = JSON.parse(data);

const deleteTask = (args) => {
  if (args[2] == "delete") {
    const task = parseInt(args[3]);

    if (!task) {
      console.log(
        "Please write the valid task's id which you are trying to update in the second argument."
      );
      process.exit(1);
    } else {
      if (typeof task == "number") {
        id = task;
      } else {
        console.log(
          "Please write the valid task's id which you are trying to update in the second argument."
        );
        process.exit(1);
      }
    }
    
    for (let i = 0; i < data.tasks.length; i++) {
      if (data.tasks[i].id == id) {
        for(let j = i; j < data.tasks.length; j++){
            data.tasks[j] = data.tasks[j + 1];
        }
        data.tasks.length = data.tasks.length - 1;
        data.id[data.id.length] = id;
        fs.writeFileSync("./data.json", JSON.stringify(data));
        console.log("Your task is deleted successfully!");
        process.exit(0);
      }
    }
    console.log(
      "Please write the valid task's id which you are trying to update in the second argument."
    );
    process.exit(1);
  }
};

module.exports = deleteTask;
