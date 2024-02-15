import JWT from "jsonwebtoken";
import userModel from "../models/user.model.js";

// Protected Routes token base
export const requireSignIn = async (req, res, next) => {
    try {
      const token = req.headers;
      console.log(token);
      const decode = JWT.verify(
        req.headers.authorization,
        process.env.JWT_SECRET
      );
      req.user = decode;
      next();
    } catch (error) {
      console.log(error);
    }
  };
 