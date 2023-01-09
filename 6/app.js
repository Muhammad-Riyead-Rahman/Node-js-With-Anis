// const express = require("express");
// const app = express();


// app.get("/", (req, res) => {
//   res.send("I am a get request at home route");
// });


// app.post("/", (req, res) => {
//   res.send("I am a post request at home route");
// });


// app.put("/", (req, res) => {
//   res.send("I am a put request at home route");
// });


// app.delete("/", (req, res) => {
//   res.send("I am a delete request at home route");
// });


// module.exports = app;




const express = require("express");
const app = express();
const userRouter = require("./routes/user.route");


app.use("/api/user", userRouter);


app.get("/", (req, res) => {
  // res.send("I am a get request at home route");

  res.statusCode = 200;
  res.sendFile(__dirname+"/views/index.html");
});


app.get("/about", (req, res) => {
  // res.status(200).json({
  //   message: "I am register page",
  //   statusCode: 200
  // });


  res.statusCode = 200;
  res.sendFile(__dirname + "/views/about.html");
  
})


app.get("/register", (req, res) => {
  res.redirect("/login");
})


app.get("/login", (req, res) => {
  // res.cookie("name", "riyead");
  // res.cookie("age", "30");
  res.clearCookie("name");
  res.append("id", "130000"); //sent value at header
  res.send("I am a get request at login route");
});

app.use((req, res) => {
  res.send("<h1>404 ! Not a valid url</h1>")
})


module.exports = app;