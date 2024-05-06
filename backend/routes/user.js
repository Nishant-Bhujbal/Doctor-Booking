import express from "express";
import { getAllUser,getSingleUser,updateUser,deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.get('/:id',getSingleUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)
router.get('/',getAllUser)

export default router