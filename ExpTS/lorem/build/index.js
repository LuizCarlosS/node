"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router/router"));
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3333;
const publicPath = `${process.cwd()}/public`;
const app = (0, express_1.default)();
app.use(router_1.default);
app.use('/css', express_1.default.static(`${publicPath}/css`));
app.use('/js', express_1.default.static(`${publicPath}/js`));
app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});
