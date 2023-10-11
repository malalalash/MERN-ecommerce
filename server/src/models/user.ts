import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/dmzqeouuh/image/upload/v1697039472/avatar_yhidq2_-_Profile_Picture_vfjeoy.png",
  },
});

export default mongoose.model("User", UserSchema);
