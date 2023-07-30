import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    comments: [
      {
        username: {
          type: String,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    featured: {
        type: Boolean,
        default: false,
},
  },
  { timestamps: { createdAt: 'createdAt' } }
);

export default mongoose.model('Blog', blogSchema);
