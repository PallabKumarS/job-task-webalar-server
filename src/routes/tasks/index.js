var express = require("express");
const createTask = require("../../api/tasks/createTask");
const getAllTasks = require("../../api/tasks/getAllTasks");
const deleteTask = require("../../api/tasks/deleteTask");
const updateTask = require("../../api/tasks/updateTask");
var router = express.Router();

router.get("/tasks", getAllTasks);
router.post("/tasks", createTask);
router.delete("/tasks/:id", deleteTask);
router.put("/tasks/:id", updateTask);
module.exports = router;
