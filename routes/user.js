import { Router } from "express";
import {addUser,getAllUsers,getUserById,updateUserById,updateUserPassword,loginUser}from "../controllers/user.js"

const router=Router();

router.get("/",getAllUsers);
router.get("/:id",getUserById);
router.post("/",addUser);
router.put("/:id",updateUserById);
router.put("/password/:id",updateUserPassword);
router.post("/login",loginUser);
export default router;