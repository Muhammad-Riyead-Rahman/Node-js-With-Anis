// Middleware function


const express = require("express");
const app = express();
const PORT = 3001;



const myMiddleWare = (req, res, next) => {
  console.log("Middleware function");

  req.currentTime = new Date(Date.now());
  next();
}


app.use(myMiddleWare);




app.get("/", myMiddleWare, (req, res) => {
  console.log("I'm home " + req.currentTime);
  res.send(`<h2>I'm home route</h2>`);
});


app.get("/about", (req, res) => {
  console.log("I'm home " + req.currentTime);
  res.send(`<h2>I'm about route</h2>`);
});



//error handling middleware
app.use((req, res, next) => {
  res.send("404! bad url request");
});

app.use((err, req, res, next) => {
  res.status(500).send("Something broke!");
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});