import { readFileString, readFileStringSync } from './file';
import { join } from 'path';

const RESOURCE_PATH = 'resources';

function _getResourcePath(path: string) {
    return join(RESOURCE_PATH, path);
}


export function getStringResource(path: string) {
    const resourcePath = _getResourcePath(path);
    return readFileString(resourcePath);
}


export function getStringResourceSync(path: string) {
    const resourcePath = _getResourcePath(path);
    return readFileStringSync(resourcePath);
}
