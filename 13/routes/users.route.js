const app = require("../../13/app");
const { getAllUsers, createUsers, updateUser, deleteUser } = require("../controllers/users.controller");

const router = require("express").Router();

//get users route
router.get("/", getAllUsers);
router.post("/", createUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);


module.exports = router;