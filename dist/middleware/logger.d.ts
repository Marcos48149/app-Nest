import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
export declare class Logger implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void;
}
export declare function LoggerGlobal(req: Request, res: Response, next: NextFunction): void;
