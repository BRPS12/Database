import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  age: Number,
  hobbies: Array,
  image: String,
});

const User = mongoose.model("User", UserSchema);
export default User;
