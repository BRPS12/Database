import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  bgimage: {
    type: String,
    required: true,
  },
  likes: String,
});

const Post = mongoose.model("Post", PostSchema);
export default Post;
