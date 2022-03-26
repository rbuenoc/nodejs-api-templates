import { initializeServer, runServer } from "./services/server";


const app = initializeServer();
runServer(app);
