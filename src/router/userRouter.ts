import {Router, Request, Response} from "express";
import * as path from "path";
import * as jwt from "jsonwebtoken";
import * as userService from "../service/userService";

const router = Router();

// read ------------------------------------------------------------------------------------------->
router.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "client/public/index.html"));
});

// login ------------------------------------------------------------------------------------------>
router.post("/login", async (req: Request, res: Response) => {
  try {
    const user = await userService.loginUser(req.body);
    if (user) {
      res.send("success");
    }
    else {
      res.send("fail");
    }
  }
  catch (err) {
    res.status(500).send(err);
  }
});

// secretKey -------------------------------------------------------------------------------------->
router.post("/secretKey", async (req: Request, res: Response) => {
  try {
    const user = await userService.secretKey(req.body);
    if (user) {
      res.send("success");
    }
    else {
      res.send("fail");
    }
  }
  catch (err) {
    res.status(500).send(err);
  }
});

// signup ----------------------------------------------------------------------------------------->
router.post("/signup", async (req: Request, res: Response) => {
  try {
    const userIdCheck = await userService.checkId(req.body);

    if (userIdCheck) {
      res.send("duplicate");
    }
    else {
      const user = await userService.signupUser(req.body);
      if (user) {
        res.send("success");
      }
      else {
        res.send("fail");
      }
    }
  }
  catch (err) {
    res.status(500).send(err);
  }
});

export default router;