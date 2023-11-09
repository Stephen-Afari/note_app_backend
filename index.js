const mongoose = require("mongoose");
//importing the dotenv file
const dotenv = require("dotenv");
//subscribe to uncaught exception event and log it (ie. errors in a synchronous code not handled anywhere eg. if you accidentally type an x in server.js for eg.)
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! Shutting down ...");
  console.log(err.name, err.message);
  process.exit(1);
});

//indicate the path for the dotenv file
dotenv.config({ path: "./config.env" });
//replace the password
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
//make the connection
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB connection Successful");
    // .catch((err) => console.log('ERROR'))
    //console.log(con.connections);
  });

// 4) START SERVER
const app = require("./app");

// console.log(app.get('env'));
//console.log(process.env)
//Testing Mongoose
//const port = process.env.PORT || 5000;
const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
//subscribe to the unhandled rejection event (ie. errors outside express eg. is mongodb database connection) and log the message
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  //console.log(err);
  // server.close(() => {
  //   process.exit(1);
  // });

  console.log("UNHANDLED REJECTION!  ...");
});
