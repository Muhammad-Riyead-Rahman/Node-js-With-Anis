// //Query Parameter
// //write addressbar -- ?id=1000&name=riyead


// const express = require("express");
// const app = express();
// const PORT = 3001;


// app.get("/", (req, res) => {
//   // const id = req.query.id;
//   // const name = req.query.name;

//   const { id, name } = req.query;
//   res.send(`<h1>Student name is: ${name} and id is: ${id}</h1>`);
// });


// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });





// //Route Parameter
// //write addressbar -- /id/1000/name/riyead


// const express = require("express");
// const app = express();
// const PORT = 3001;


// app.get("/userId/:id/userName/:name", (req, res) => {
//   // const id = req.params.userId;
//   // const name = req.params.userName;

//   const { id, name } = req.params;
//   res.send(`<h1>Student name is: ${name} and id is: ${userId}</h1>`);
// });


// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });








// // Header Parameter
// //write headers -- /id/1000/name/riyead


// const express = require("express");
// const app = express();
// const PORT = 3001;


// app.get("/", (req, res) => {
//   const id = req.header("id");
//   const name = req.header("name");

//   res.send(`<h1>Student name is: ${name} and id is: ${id}</h1>`);
// });


// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });







// // Json Data
// //write to html form -- {"name" : "riyead","id" : 25}
// //Link with index.html file

// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const PORT = 3001;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());



// app.get("/register", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// })

// app.post("/register", (req, res) => {
//   const name = req.body.name;
//   const id = req.body.id;

//   res.send(`<h1>Student name is: ${name} and id is: ${id}</h1>`);
// });


// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });








// Regular expresson & wild Card


const express = require("express");
const app = express();
const PORT = 3001;



app.get("/products/:id([0-9]{3})", (req, res) => {
  res.send(`<h2>Id: ${req.params.id}</h2>`);
});


app.get("/products/:title([a-zA-Z0-9]+)", (req, res) => {
  res.send(`<h2>Title: ${req.params.title}</h2>`);
});


//wild card
app.use("*", (req, res) => {
  res.status(404).send({
    message: "not a valid route",
  });
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});