import express from "express";
const router = express.Router();
import userController from "./../controller/userController";
import {
  authentification,
  superAdminAuth,
} from "./../middleware/authController";

router.post("/register", userController.memberRegister);
router.post("/admin/register", superAdminAuth, userController.adminRegister);
router.post("/login", userController.login);
router.get("/current-user", authentification, userController.currentUser);

export default router;
