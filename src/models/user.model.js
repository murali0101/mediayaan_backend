const { Schema, model } = require("mongoose");

const bcrypt = require("bcrypt");

const reqString = { type: String, required: true, unique: false };

const userSchema = new Schema(
  {
    userName: { type: String, required: true, unique: true },
    uuid: reqString,
    password: reqString,
    state: reqString,
    district: reqString,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 8, (err, hash) => {
    this.password = hash;
    return next();
  });
});

userSchema.methods.checkPassword = async function (password) {
  return bcrypt.compare(password, this.password).then((res) => res);
};

module.exports = model("user", userSchema);
