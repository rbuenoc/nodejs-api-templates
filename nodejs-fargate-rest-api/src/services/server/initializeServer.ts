import Koa from "koa";
import { configureRoutes } from "./routes";
import { configureErrorHandler } from "./errors";


export default function initializeServer(): Koa {
    const app = new Koa();
    configureErrorHandler(app);
    configureRoutes(app);
    return app;
}
