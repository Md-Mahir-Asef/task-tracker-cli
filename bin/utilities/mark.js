const fs = require("fs");

var data = fs.readFileSync("./data.json");
var data = JSON.parse(data);

const mark = (args) => {
  if (args[2] == "mark") {
    var status = args[3] ? args[3] : "N/A";
    if (!(status == "todo" || status == "in-progress" || status == "done")) {
      console.log("Please, enter any valid task status.", status);
    }
    const task = parseInt(args[4]);
    if (!task) {
      console.log(
        "Please write the valid task's id which you are trying to update in the third argument."
      );
      process.exit(1);
    } else {
      if (typeof task == "number") {
        id = task;
      } else {
        console.log(
          "Please write the valid task's id which you are trying to update in the third argument."
        );
        process.exit(1);
      }
    }

    for (let i = 0; i < data.tasks.length; i++) {
      if (data.tasks[i].id == id) {
        data.tasks[i]["status"] = status;
        fs.writeFileSync("./data.json", JSON.stringify(data));
        console.log("Your task is updated successfully!");
        process.exit(0);
      }
    }
    console.log(
      "Please write the valid task's id which you are trying to update in the third argument."
    );
    process.exit(1);
  }
};

module.exports = mark;
