const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const comment = mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      ref: "Post",
    },
  },
  { timestamps: true }
);

mongoose.model("Comment", comment);
