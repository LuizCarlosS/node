"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
dotenv_1.default.config();
function logger(tipo) {
    return (req, res, next) => {
        var _a;
        console.log();
        const PATH = (_a = process.env.LOG_PATH) !== null && _a !== void 0 ? _a : "./logs";
        let message = '';
        if (tipo === 'completo') {
            message = `${new Date().toISOString()} ${req.url} ${req.method}`;
        }
        else {
            message = `${new Date().toISOString()} ${req.url} ${req.method} ${req.httpVersion} ${req.get('User-Agent')}`;
        }
        console.log(message);
        fs_1.default.appendFile(PATH, `${message}\n`, (error) => {
            if (error) {
                console.error('Error writing to log file:', error);
            }
            else {
                console.log('Log message written to file:', message);
            }
        });
        next();
    };
}
exports.default = logger;
