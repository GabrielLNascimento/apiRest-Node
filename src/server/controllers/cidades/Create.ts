import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

import { validation } from "../../shared/middlewares/Validation";

interface Cidade {
    nome: string;
}

export const createValidation = validation({
    body: yup.object().shape({
        nome: yup.string().required().min(3),
    }),
}) 

export const create = async (
    req: Request<{}, {}, Cidade>,
    res: Response
): Promise<any> => {
    console.log(req.body)
    return res.send("criado!");
};
