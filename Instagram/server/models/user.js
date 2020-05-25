const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetToken: {
    type: String,
    expireToken: Date,
  },
  pic: {
    type: String,
    default:
      "https://res.cloudinary.com/kgprajwal/image/upload/v1590300530/noEmployeeImage_md-eaa7c21cc21b1943d77e51ab00a5ebe9_cyr7ag.png",
  },
  followers: [{ type: ObjectId, ref: "User" }],
  following: [{ type: ObjectId, ref: "User" }],
});

mongoose.model("User", userSchema);
