const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParse = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const Router = require('./src/routes/index');


dotenv.config()
const app = express();

// // MONGO db connection
const db = process.env.db;
mongoose.connect(db ,{ useNewUrlParser: true });
const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => {
  console.log("err", err);
});
dbConnection.once("open", () => {
  console.log("database is running.");
});
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('tiny'));

app.use('/api', Router);

app.get("/", (req, res) => {
  res.send("welcome to Users API");
});

app.use((req, res) => res.status(404).send({
  status: 404,
  error: 'route Not Found!',
}));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`"Listening on  port ${port} ...."`));