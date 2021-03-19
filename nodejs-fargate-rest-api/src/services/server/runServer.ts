import Koa from "koa";
import { CONFIG } from '../../common/config';


const PORT = CONFIG.APP_PORT;

export default function runServer(app: Koa) {
    app.listen(PORT, () => {
        console.log(`Server listening on PORT: ${PORT}`);
    });
}
