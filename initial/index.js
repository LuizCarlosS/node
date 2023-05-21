import { config } from 'dotenv';
import fs from 'fs';
import { readdir } from 'fs/promises';
import http from 'http';
import path from 'path';
import { URL, fileURLToPath } from 'url';
import { createLink } from './utils.js';

config()
const port = process.env.PORT || 3333;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  const directory = 'files';
  const directoryPath = path.join(__dirname, directory);

  const requestUrl = new URL(req.url, `http://${req.headers.host}`);

  if (requestUrl.pathname === '/') {
    try {
      const files = await readdir(directoryPath);
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

      files.forEach((file) => {
        res.write(createLink(file));
      });

      res.end();
    } catch (err) {
        console.log(err)
      res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
      res.write('Erro ao ler o diretório');
      res.end();
    }
  } else {
    const filePath = path.join(directoryPath, requestUrl.pathname); // Constrói o caminho completo do arquivo

    // Verifica se o arquivo existe
    fs.stat(filePath, function(err, stats) {
      if (err || !stats.isFile()) {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.write("Arquivo não encontrado");
        res.end();
      } else {
        // Lê e exibe o conteúdo do arquivo
        fs.readFile(filePath, 'utf8', function(err, data) {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
            res.write("Erro ao ler o arquivo");
            res.end();
          } else {
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.write(`<a href="/">Voltar</a><br><br>`);
            res.write(`<pre>${data}</pre>`);
            res.end();
          }
        });
      }
    });
  }
});

server.listen(port);