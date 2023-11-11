const path = require("path");
//const helmet = require("helmet");
const express = require("express");
//const morgan = require("morgan");
//const rateLimit = require('express-rate-limit');
const noteRouter = require("./routes/noteRoutes.js");
const userRouter = require("./routes/userRoutes.js");
var cors = require('cors')
//const userRouter = require("./routes/userRoutes");
// const reviewRouter = require('./routes/reviewRoutes');
// const bookingRouter = require('./routes/bookingRoutes');
// const viewRouter = require('./routes/viewRoutes');
//const cookieParser = require("cookie-parser");
//const cors = require("cors");
const globalErrorHandler = require("./controllers/errorController.js");
const AppError = require("./controllers/utils/appError.js");

//const express = require("express");
const fs = require("fs");

//importing the dotenv file
const dotenv = require("dotenv");
//indicate the path for the dotenv file
dotenv.config({ path: "./config.env" });
console.log(process.env);
const app = express();
//implement cors
app.use(cors())
// const options = {
//   origin: 'https://note-app-client-a1pt.onrender.com',
//   }
//   app.use(cors(options))
//Middleware to enable us put the data on the request object
app.use(express.json());
const notes = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/notes.json`));
//ROUTES
//
app.use("/api/v1/notes", noteRouter);
app.use("/api/v1/users", userRouter);

//Routing - how the app responds to request or url
// app.get("/api/v1/notes", (req, res) => {
//   res.status(200).json({
//     status: "success",
//     results: notes.length,
//     data: {
//       notes,
//     },
//   });
// });

// app.post("/api/v1/notes", (req, res) => {
//   console.log(req.body);
//   res.send("Done");
// });

//starting the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });
//Create the error

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this Server`), 404);
});
//use the error handler Middleware
app.use(globalErrorHandler);
module.exports = app;
