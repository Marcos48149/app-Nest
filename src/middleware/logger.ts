import { Injectable, NestMiddleware } from "@nestjs/common";
import exp from "constants";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class Logger implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`estamos en el metodo ${req.method} en la ruta ${req.url}`)
        next();
    }

}

export function LoggerGlobal(req: Request, res: Response, next: NextFunction) {

    console.log(`estamos en el metodo ${req.method} en la ruta ${req.url}`)
    next();


}