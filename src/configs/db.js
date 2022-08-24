const mongoose = require("mongoose");
require("dotenv").config();

const connectMongoDB = () => {
  return mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@backend.svdlc.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`
  );
};
module.exports = connectMongoDB;




// mongodb+srv://murali:1234@backend.svdlc.mongodb.net/mediayaan_backend?retryWrites=true&w=majority