const add = require("./utilities/add");
const update = require("./utilities/update");
const deleteTask = require("./utilities/delete");
const mark = require("./utilities/mark");
const args = process.argv;

add(args);
update(args);
deleteTask(args);
mark(args);
