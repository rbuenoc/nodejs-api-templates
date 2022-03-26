import { getConnection } from './getConnection';
import { CONFIG } from '../../common/config';


export async function find(query) {
    const MONGODB_COLLECTION = CONFIG.MONGODB_COLLECTION;
    const findFnc = db => db.collection(MONGODB_COLLECTION).find(query).toArray()
        .then(documents => { return documents; });
    return getConnection()
        .then(findFnc);
}
