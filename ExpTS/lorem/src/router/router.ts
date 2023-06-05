import { Router } from 'express';

const router = Router();
const publicPath = `${process.cwd()}/public`;

router.get('/lorem', (req, res)=>{
    res.sendFile(`${publicPath}/html/index.html`);
})

export default router;