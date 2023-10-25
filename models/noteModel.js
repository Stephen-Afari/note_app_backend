const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: mongoose.Mixed,
      default: "Hello",
    },
    content: {
      type: mongoose.Mixed,
      required: [true, "A note must have content"],
    },
    dateStamp: Date,
  },
  //Setting versionkey to false removes the __V
  { versionKey: false }
);

const Note = mongoose.model("Note", noteSchema);

// const testNote = new Note({
//   title: "Hello",
//   content: "How are you?",
//   dateStamp: new Date("2023-08-30"),
// });
// testNote
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });

module.exports = Note;
