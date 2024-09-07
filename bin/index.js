const add = require("./utilities/add");
const update = require("./utilities/update");
const deleteTask = require("./utilities/delete");
const args = process.argv;

add(args);
update(args);
deleteTask(args);
