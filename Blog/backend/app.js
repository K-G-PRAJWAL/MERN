const express = require("express");
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");
const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect(MONGOURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected!");
});

mongoose.connection.on("error", () => {
  console.log("Error Connecting to MongoDB => " + error);
});

// Models
require("./models/post");
require("./models/category");
require("./models/comment");

app.use(express.json());

// Routes
app.use(require("./routes/post"));
app.use(require("./routes/category"));
app.use(require("./routes/comment"));

app.listen(PORT, () => {
  console.log("Server started at port " + PORT);
});
