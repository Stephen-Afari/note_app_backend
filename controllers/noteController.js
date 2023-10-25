// const { requestToBodyStream } = require("next/dist/server/body-streams");
const Note = require("../models/noteModel");
const catchAsync = require("./utils/catchAsync");

exports.getAllNotes = catchAsync(async (req, res) => {
  const notes = await Note.find();
  console.log(notes);
  res.status(200).json({
    status: "success",
    results: notes.length,
    data: {
      notes,
    },
  });
});

exports.createNotes = catchAsync(async (req, res) => {
  const newNote = await Note.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      notes: newNote,
    },
  });
});

exports.updateNotes = catchAsync(async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      note,
    },
  });
});

exports.deleteNote = catchAsync(async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});
