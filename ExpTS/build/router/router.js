"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const publicPath = `${process.cwd()}/public`;
router.get('/bemvindo/:nome', (req, res) => {
    res.send(req.params.nome);
});
router.get('/page', (req, res) => {
    res.sendFile(`${publicPath}/html/index.html`);
});
router.get('/', (req, res) => {
    res.end('web academy');
});
router.get('/hb1', (req, res) => {
    res.render('hb1', {
        uf: "Universidade federal do amazonas",
        layout: false,
    });
});
router.get("/hb2", (req, res) => {
    const profs = [
        { nome: "Tayana conte", sala: 123 },
        { nome: "Horacio fernandes", sala: 1234 },
        { nome: "Edleno Moura", sala: 12345 },
        { nome: "Elaine Harada", sala: 123456 }
    ];
    res.render('hb2', {
        profs,
        layout: false,
    });
});
router.get("/hb3", (req, res) => {
    res.render('hb3', {
        nome: 'Express',
        tipo: 'Framework',
        poweredByNode: true,
        layout: false,
    });
});
router.get("hb4", (req, res) => {
    const profes = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 },
    ];
    res.render('hb4', { profes, layout: false });
});
exports.default = router;
