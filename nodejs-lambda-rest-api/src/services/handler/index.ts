import { getQueryStringParams } from './request';
import { run as runFunction } from './function';
import { processResult, processError } from './response';


export default async function run(event) {
    let response;
    try {
        const params = getQueryStringParams(event);
        const id = params.id;
        const data = await runFunction(id);
        response = processResult(data);
    } catch(err) {
        response = processError(err);
    }
    return response
}
