const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");
const authController = require("../controllers/authController");

//authController.protect will ensure that only logged in users can access all the notes
router
  .route("/")
  .get(authController.protect, noteController.getAllNotes)
  .post(noteController.createNotes);

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
//This route enables us to get the parameter (ie. id)
router
  .route("/:id")
  .patch(noteController.updateNotes)
  .delete(noteController.deleteNote);
module.exports = router;
