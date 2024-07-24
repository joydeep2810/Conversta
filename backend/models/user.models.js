import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"], //enum is used when u want to click certain values
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
)

const User = mongoose.model("User", userSchema)

export default User
