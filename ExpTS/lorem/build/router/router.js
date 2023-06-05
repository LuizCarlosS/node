"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const publicPath = `${process.cwd()}/public`;
router.get('/lorem', (req, res) => {
    res.sendFile(`${publicPath}/html/index.html`);
});
exports.default = router;
