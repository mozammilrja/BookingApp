import express from "express";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/VerifyToken.js";
import {
  updatedUser,
  deletedUser,
  getUser,
  getAllUser,
} from "./../controller/User.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user, you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user, you are logged in and you can delete your account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin, you are logged in and you can delete all accounts");
// });

// update
router.put("/:id", verifyToken, updatedUser);
// delete
router.delete("/:id", verifyToken, deletedUser);
// GET
router.get("/:id", verifyToken, getUser);
// GET All
router.get("/",verifyAdmin, getAllUser);

export default router;
