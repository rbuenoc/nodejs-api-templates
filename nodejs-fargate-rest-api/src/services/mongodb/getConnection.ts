import { Db } from "mongodb";
import getNewClient from './getClient';
import { CONFIG } from '../../common/config';

let cachedConnection: any = null;

export default async function run() {
    const cachedConnectionIsActive: boolean = cachedConnection && cachedConnection.serverConfig.isConnected();
    if (cachedConnectionIsActive) console.log('Using cache conection');
    return cachedConnectionIsActive ? Promise.resolve(cachedConnection) : _getNewConnection();
}


async function _getNewConnection(): Promise<Db> {
    const database = CONFIG.MONGODB_DATABASE;
    return getNewClient()
        .then(client => {
            cachedConnection = client.db(database);
            return cachedConnection;
        });
}
