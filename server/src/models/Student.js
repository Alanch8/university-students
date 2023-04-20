const { Schema, model } = require("mongoose");

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: String, required: false },
    gender: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Student", studentSchema);