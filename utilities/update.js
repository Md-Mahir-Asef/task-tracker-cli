const fs = require("fs");

var data = fs.readFileSync("./data.json");
var data = JSON.parse(data);

const update = (args) => {
  if (args[2] == "update") {
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
        var item = args[4];
        if (!(item == "title" || item == "description")) {
          item = "status";
        }
        const value = args[5];
        data.tasks[i][item] = value;
        fs.writeFileSync("./data.json", JSON.stringify(data));
        console.log("Your task is updated successfully!");
        process.exit(0);
      }
    }
    console.log(
      "Please write the valid task's id which you are trying to update in the second argument."
    );
    process.exit(1);
  }
};

module.exports = update;
