const express = require("express");
const upload = require("../middlewares/uploads");
const router = express.Router();
const Student = require("../models/student.model");

const { v4: uuidv4 } = require("uuid");
router.post(
  "/post",

  upload.fields([
    { name: "aadhaarCard", maxCount: 1 },
    { name: "whyInterested", maxCount: 1 },
    { name: "bestThingThatHappened", maxCount: 1 },
    { name: "fiveYearsFromNow", maxCount: 1 },
  ]),

  async (req, res) => {
    try {
      const convertURL = (url) => {
        let temp = url.split("\\");
        temp = `${process.env.HOST}${temp[temp.length - 2]}/${
          temp[temp.length - 1]
        }`;

        return temp;
      };

      // console.log(req.body);

      let student = {
        ...req.body,
        uuid: uuidv4(),
        aadhaarCard: convertURL(req.files.aadhaarCard[0].path),
        whyInterested: convertURL(req.files.whyInterested[0].path),
        bestThingThatHappened: convertURL(
          req.files.bestThingThatHappened[0].path
        ),
        fiveYearsFromNow: convertURL(req.files.fiveYearsFromNow[0].path),
      };

      student = await Student.create(student);
      return res.status(201).send("successfully submited");
    } catch (error) {
      console.log("error:", error);
      return res.status(500).send(error);
    }
  }
);
router.get("/getstudents", async (req, res) => {
  try {
    let student = await Student.find({ district: req.query.district })
      .lean()
      .exec();
    return res.status(200).send(student);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
