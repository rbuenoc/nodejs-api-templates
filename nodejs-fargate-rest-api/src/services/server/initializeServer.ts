import Koa from "koa";
import { configureRoutes } from "./routes";
import { configureErrorHandler } from "./errors";
import { configureLogging } from "../../common/logging"


export default function initializeServer(): Koa {
    const app = new Koa();
    configureLogging();
    configureErrorHandler(app);
    configureRoutes(app);
    return app;
}
