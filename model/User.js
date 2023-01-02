import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Firstname bich!"],
    minlenght: [1, "Zuv2"],
    maxlenght: [44, "Arail urt"],
  },
  lastname: {
    type: String,
    required: true,
  },
  age: Number,
  hobbies: Array,
  image: String,
  gender: {
    type: String,
    enum: {
      values: ["Male", "Female", "Undefined"],
      message: "Not supported",
    },
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
