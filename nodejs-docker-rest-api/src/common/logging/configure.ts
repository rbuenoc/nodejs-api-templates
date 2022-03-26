import { configure } from "log4js";


const LOGGING_CONFIG_FILEPATH = 'common/logging/config.json';

export function configureLogging() {
    configure(LOGGING_CONFIG_FILEPATH);
}
