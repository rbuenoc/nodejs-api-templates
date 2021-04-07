import { logError } from "../../common/logging";


export function configureErrorHandler(server: any) {
    server.use(async (ctx, next) => {
        try {
            await next();
        } catch (err) {
            const statusCode = err.statusCode || err.status || 500;
            ctx.body = {
                error: {
                    detail: err.message,
                    status: statusCode,
                },
            };
            ctx.set('Content-Type', 'application/problem+json');
            ctx.status = statusCode;
            logError(err);
        }
    });
}
