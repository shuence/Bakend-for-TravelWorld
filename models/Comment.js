import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    blog: {
      type: mongoose.Types.ObjectId,
      ref: "Blog",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    username: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
