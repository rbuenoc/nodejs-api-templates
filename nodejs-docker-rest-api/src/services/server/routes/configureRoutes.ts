import healthRouter from "./health.routes";
import entityRoutes from "./entity.routes";

const routes = [
    healthRouter,
    entityRoutes,
];

export default function run(server: any) {
    routes.forEach((r) => {
        server.use(r.routes())
        server.use(r.allowedMethods())
    });
}
