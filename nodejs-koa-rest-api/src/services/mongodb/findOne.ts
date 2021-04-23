import { getConnection } from './getConnection';
import { CONFIG } from '../../common/config';


export async function findOne(query) {
    const MONGODB_COLLECTION = CONFIG.MONGODB_COLLECTION;
    const findFnc = db => db.collection(MONGODB_COLLECTION).findOne(query)
        .then(documents => { return documents; });
    return getConnection()
        .then(findFnc);
}
