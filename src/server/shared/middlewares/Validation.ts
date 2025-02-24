import { StatusCodes } from "http-status-codes";
import { RequestHandler } from "express";
import { ObjectSchema, ValidationError } from "yup";

type TProperty = "body" | "header" | "params" | "query";

type TAllSchemas = Record<TProperty, ObjectSchema<any>>;

type TValidation = (schemas: Partial<TAllSchemas>) => RequestHandler;

// função que retorna um middleware
export const validation: TValidation =
    (schemas) =>
    async (req, res, next): Promise<any> => {
        console.log(schemas);

        const ErrosResult: Record<string, Record<string, string>> = {};

        Object.entries(schemas).forEach(([key, scheme]) => {
            try {
                scheme.validateSync(req[key as TProperty], {
                    abortEarly: false,
                });
            } catch (error) {
                const errors = error as ValidationError;
                const ErrorsValidates: Record<string, string> = {};

                errors.inner.forEach((err) => {
                    if (!err.path) return;
                    ErrorsValidates[err.path] = err.message;
                });

                ErrosResult[key] = ErrorsValidates;
            }
        });

        if (Object.entries(ErrosResult).length === 0) {
            return next();
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                errors: ErrosResult,
            })
        }
    };
