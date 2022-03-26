import { getLogger } from "log4js";


export function logInfo(message: any, name?: string) {
    const logger = getLogger(name);
    const msg = _formatMessage(message);
    logger.info(msg);
}


export function logError(message: any, name?: string) {
    const logger = getLogger(name);
    const msg = _formatMessage(message);
    logger.error(msg);
}


export function logFatal(message: any, name?: string) {
    const logger = getLogger(name);
    const msg = _formatMessage(message);
    logger.fatal(msg);
}


export function logWarn(message: any, name?: string) {
    const logger = getLogger(name);
    const msg = _formatMessage(message);
    logger.warn(msg);
}


export function logDebug(message: any, name?: string) {
    const logger = getLogger(name);
    const msg = _formatMessage(message);
    logger.debug(msg);
}


function _formatMessage(message) {
    let msg: any;
    if (message instanceof Error) {
        msg = message;
    } else if (typeof message === 'object' && message !== null) {
        msg = JSON.stringify(message);
    } else {
        msg = message;
    }
    return msg;
}
