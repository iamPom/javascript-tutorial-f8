// 193. Modules
// export const TYPE_LOG = 'log'
// export const TYPE_WARN = 'warn'
// export const TYPE_ERROR = 'error'

import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from '../constants.js';
function logger(log, type=TYPE_LOG) {
    console[type](log);
}
export default logger;