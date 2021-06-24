import express from "express";
import asyncHandler from "express-async-handler";
import { authService } from "../../services";

export const authRouter = express.Router();

// Get google auth code
authRouter.get(
  "/google-code",
  asyncHandler(async (req, res) => {
    const code = await authService.getGoogleAuthCode();
    res.send(code);
  })
);
