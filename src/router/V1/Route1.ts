import { Request, Response, Router } from "express";
const app = Router();

app.get("/", (req: Request, res: Response) => {
  res.json({
    Name: "V1 !",
    Message: "Hai",
  });
});

export const Rv1 = app;
