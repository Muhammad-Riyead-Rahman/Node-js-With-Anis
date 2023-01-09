const { v4: uuidv4 } = require("uuid");

//creating users
const users = [
  {
    id: uuidv4(),
    username: "anisul islam",
    email: "anis@gmail.com"
  },
  {
    id: uuidv4(),
    username: "riyead rahman",
    email: "helloworld.asset@gmail.com"
  }
]

module.exports = users;