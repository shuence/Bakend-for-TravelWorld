import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber:{
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    role: {
      type: String,
      default: 'user',
    },
    BookingHistory:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
