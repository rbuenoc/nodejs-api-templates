import { MongoClient, MongoClientOptions } from 'mongodb';
import { CONFIG } from '../../common/config';
import { readFileStringSync } from '../../common/tools/file';


export async function getClient(): Promise<MongoClient> {
    const uri = _assembleUri();
    const options = _assembleOptions();

    return MongoClient.connect(uri, options);
}


function _assembleUri(): string {
    const connectionString = _getConnectionString();
    const connectionPrefix = _getConnectionPrefix();

    return `${connectionPrefix}${connectionString}`;
}


function _assembleOptions(): MongoClientOptions {
    const useSsl = CONFIG.MONGODB_USE_SSL;
    let options: MongoClientOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: useSsl,
    };

    const caCertificatePath = CONFIG.MONGODB_CA_CERT;
    if (caCertificatePath) {
        const caCertificate = readFileStringSync(caCertificatePath);
        options.sslCA = [caCertificate];
    }

    return options;
}

function _getConnectionString() {
    const host = CONFIG.MONGODB_HOST;
    const username = CONFIG.MONGODB_USERNAME;
    const password = CONFIG.MONGODB_PASSWORD;
    let connectionString;
    if (username && password) {
        const encodedPassword = encodeURIComponent(password);
        connectionString = `${username}:${encodedPassword}@${host}`;
    } else {
        connectionString = host;
    }
    return connectionString;
}

function _getConnectionPrefix() {
    const isSharded = CONFIG.MONGODB_IS_SHARDED;
    return isSharded ? 'mongodb+srv://' : 'mongodb://';
}
