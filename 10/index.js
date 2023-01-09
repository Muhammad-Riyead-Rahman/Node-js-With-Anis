// //Without MVC framwork

// const express = require("express");
// const bodyParser = require('body-parser')
// const app = express();
// const PORT = 3000;


// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json());



// const htmlForm = `
// <form method="POST" action="/users">
// <input type="text" name="name" placeholder="Enter Name" >
// <input type="number" name="age" placeholder="Enter Age" >
// <button type="submit">Save User</button>
// </form>
// `;


// const users = [
//   {
//     name: "Riyead Rahman",
//     age: 30
//   },
//   {
//     name: "Misti Rahman",
//     age: 16
//   }
// ];




// app.get("/users", (req, res) => {
//   res.send(htmlForm)
// });


// app.post("/users", (req, res) => {
//   const name = req.body.name;
//   const age = Number(req.body.age);

//   const user = {
//     name,
//     age
//   };

//   users.push(user);

//   res.status(201).json({
//     success: true,
//     users
//   });

// });






// app.use((req, res, next) => {
//   res.status(404).json({
//     message: "resource not found"
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// })











//With MVC framwork

const express = require("express");
const bodyParser = require('body-parser');
const userRouter = require("./routes/users.route");
const productRouter = require("./routes/products.route");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(userRouter);
app.use(productRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "resource not found"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})