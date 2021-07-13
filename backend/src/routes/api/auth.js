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

// Get cube auth status
authRouter.get(
  "/cube-status",
  asyncHandler(async (req, res) => {
    const code = await authService.getCubeAuthStatus();
    res.send(code);
  })
);

// Set cube auth status
authRouter.post(
  "/cube-status",
  asyncHandler(async (req, res) => {
    const code = await authService.setCubeAuthStatus(req.body.status);
    res.send(code);
  })
);
