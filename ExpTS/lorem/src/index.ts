import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './router/router'

const PORT = process.env.PORT ?? 3333;
const publicPath = `${process.cwd()}/public`;

const app = express()

app.use(router);
app.use('/css', express.static(`${publicPath}/css`));
app.use('/js', express.static(`${publicPath}/js`));

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});
  