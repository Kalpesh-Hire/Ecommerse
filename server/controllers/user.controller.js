import UserModel from "../modals/user.model";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function registerUserController(request, response) {
  try {
    const { name, email, password } = request.body;
    if (!name || !email || !password) {
      return response.status(400).json({
        message: "provide email, name, password",
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({ email: email });
    if (user) {
      return response.json({
        message: "Already register email user with this email",
        error: true,
        success: false,
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const newUser = new UserModel({
      email: email,
      name: name,
      password: hashPassword,
    });

    const save = await newUser.save();
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}
