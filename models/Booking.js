import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    userEmail: {
      type: String
    },
    recycleItem: {
        type: String,
        required:true,
    },
    fullName: {
      type: String,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    bookAt: {
      type: Date,
      required: true,
    },
    bookStatus: {
      type: String,
      default: "pending",
    },
    bookStatusAt: {
      type: Date,
    },
    bookStatusBy: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
