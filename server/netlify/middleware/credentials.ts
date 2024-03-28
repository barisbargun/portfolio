import { Request, Response, NextFunction } from "express";
import {allowedOrigins} from "@/config";

const credentials = (req:Request, res:Response, next:NextFunction) => {
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Credentials', true as any);
  }
  next();
}

export default credentials;