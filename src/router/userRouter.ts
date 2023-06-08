import {Router, Request, Response} from "express";
import * as path from "path";
import * as userService from "../service/userService";

const router = Router();

// read ---------------------------------------------------------------------------------------->
router.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "client/public/index.html"));
});

// login ---------------------------------------------------------------------------------------->
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

// signup ---------------------------------------------------------------------------------------->
router.post("/signup", async (req: Request, res: Response) => {
  try {
    const user = await userService.registerUser(req.body);
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

export default router;
