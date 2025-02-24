import { Router } from "express";
import { CidadeController } from "../controllers";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.post(
    "/cidade",
    CidadeController.createValidation,
    CidadeController.create
);

export { router };
