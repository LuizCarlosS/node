import {Request, Response} from 'express'

const bemvindo = (req: Request, res: Response)=>{
    res.send(req.params.nome)
}

const index = (req: Request, res: Response) => {
    res.end('web academy');
  }

const page = (req: Request, res: Response)=>{
    const publicPath = `${process.cwd()}/public`;
    res.sendFile(`${publicPath}/html/index.html`);
  }

const hb1 = (req: Request, res: Response) => {
    res.render('main/hb1', {
      uf: "Universidade federal do amazonas",
    });
  }

  const hb2 = (req: Request, res: Response) =>{
    const profs = [
      {nome: "Tayana conte", sala:123},
      {nome: "Horacio fernandes", sala:1234},
      {nome: "Edleno Moura", sala: 12345},
      {nome: "Elaine Harada", sala:123456}
    ];
    res.render('main/hb2', {
      profs,
    });
  }

const hb3 = (req: Request, res: Response) =>{
    res.render('main/hb3', {
      nome: 'Express',
      tipo: 'Framework',
      poweredByNode: true,
    })
  }

const hb4 = (req: Request, res: Response) =>{
    const profes = [
      { nome: 'David Fernandes', sala: 1238 },
      { nome: 'Horácio Fernandes', sala: 1233 },
      { nome: 'Edleno Moura', sala: 1236 },
      { nome: 'Elaine Harada', sala: 1231 },
      ];
      res.render('main/hb4', { profes });
  }

  export default {index, bemvindo, page, hb1, hb2, hb3, hb4}