import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  desc: String,

  date: String,

  bgimage: {
    type: String,
    required: [true, "Zurag hii!"],
  },

  likes: {
    type: String,
    required: [true, "Like husehgu bgamu"],
  },
  image: String,
  firstname: {
    type: String,
    required: [true, "Ner hel"],
    minlength: [1, "Baga bn"],
  },
  lastname: String,
});
PostSchema.path("firstname").validate((firstname) => {
  return !/[0-9]/.test(firstname);
});

// PostSchema.path("date").validate((date) => {
//   return 
// })
const Post = mongoose.model("Post", PostSchema);
export default Post;
