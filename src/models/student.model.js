const { Schema, model } = require("mongoose");

const reqString = { type: String, required: false, unique: false };

const studentSchema = new Schema(
  {
    name: reqString,
    age: reqString,
    aadhaarCard: reqString,
    state: reqString,
    district: reqString,
    whyInterested: reqString,
    gender: reqString,
    academicLimitations: reqString,
    personalityLimitations: reqString,
    address: reqString,
    qualification: reqString,
    academicStrengths: reqString,
    personalityStrengths: reqString,
    majorAccomplishments: reqString,
    bestThingThatHappened: reqString,
    fiveYearsFromNow: reqString,
    uuid: reqString,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("student", studentSchema);
