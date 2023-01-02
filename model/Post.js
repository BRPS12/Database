import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  desc: String,

  bgimage: {
    type: String,
    required: [true, "Zurag hii!"],
  },

  likes: {
    type: String,
    required: [true, "Like husehgu bgamu"],
  },
});

const Post = mongoose.model("Post", PostSchema);
export default Post;
