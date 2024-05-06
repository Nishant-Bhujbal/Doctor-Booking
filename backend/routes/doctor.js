import express from "express";
import { getAllDoctor, getSingleDoctor, updateDoctor, deleteDoctor } from "../controllers/doctorController.js";

const router = express.Router();

router.get('/:id',getSingleDoctor)
router.put('/:id',updateDoctor)
router.delete('/:id',deleteDoctor)
router.get('/',getAllDoctor)


export default router