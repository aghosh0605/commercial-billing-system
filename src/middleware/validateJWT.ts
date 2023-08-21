import { Request, Response, NextFunction } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import "dotenv/config";
import { JwtHeader } from "../validators/jwt.validator";
import { ServiceAPIResponse } from "../../types/service-response";

export const validateJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers as JwtHeader;
    //console.log(req.headers);
    const authToken = authorization.split(" ")[1];
    const decoded = verify(authToken, process.env.JWT_SECRET!);
    // console.log(decoded);
    req.user = <JwtPayload>decoded;
    next();
  } catch (err: Error | any) {
    next({
      statusCode: 403,
      body: { success: false, message: `${err.name}: ${err.message}` },
    } as ServiceAPIResponse<undefined>);
  }
};
