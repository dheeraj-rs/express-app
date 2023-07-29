import { Request, Response, Router } from "express";
const app = Router();

app.get("/", (req: Request, res: Response) => {
  res.json({
    Name: "V2 !",
    Message: "Hello",
  });
});

export const Rv2 = app;
