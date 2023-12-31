import express from "express";
import {
  authUser,
  updateUserProfile,
  getUserProfile,
  registerUser,
  logoutUser,
  deleteAllUsers,
} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(protect,getUserProfile)
router.route("/updateprofile").put(protect,updateUserProfile);
router.delete("/deleteAll", deleteAllUsers);

export default router;
