import express from "express";
import { parseEmailForm } from "../controllers/mailerController.js";

const router = express.Router()

router.post("/send", parseEmailForm);

export default router;
