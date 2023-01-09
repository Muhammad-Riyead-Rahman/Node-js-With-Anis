const express = require("express");
const multer = require("multer");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connecting to DB

const connectDB = async () => {
  try {
    await mongoose.connect("mogodb://127.0.0.1:27017/usersTestDB");
    console.log("DB is connected");
  } catch (error) {
    console.log("DB is not connected");
    console.log(error);
    process.exit(1);
  }
};


//Schema, Model & validation
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "user name is required"]
  },
  image: {
    type: String,
    required: [true, "user image is required"]
  }
})


const User = mongoose.model("Users, userSchema");

//file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    // cb(null, file.fieldname + '-' + uniqueSuffix)

    const name = Date.now() + "_" + file.originalname;
    cb(null, name);
  }
})

const upload = multer({ storage: storage })




app.get("/register", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});


app.post("/register", upload.single("image"), async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      image: req.file.filename,
    });

    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/test", (req, res) => {
  res.status(200).send("testing api");
});


app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  await connectDB();
});