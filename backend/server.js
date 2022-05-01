require('dotenv').config(); 
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


const db = require("./models")
db.sequelize.sync()

// const hello = require('./routes/user.routes')
// app.use('/service2', hello)

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my test application." });
});

require("./routes/user.routes")(app);


// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});