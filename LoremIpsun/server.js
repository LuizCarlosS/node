import { config } from 'dotenv';
import { promises as fs } from 'fs';
import http from 'http';
config()

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === '/') {
      const htmlContent = await fs.readFile('./index.html', 'utf-8');
      res.setHeader('Content-Type', 'text/html');
      res.end(htmlContent);
    } else if (req.url === '/styles.css') {
      const cssContent = await fs.readFile('./styles.css', 'utf-8');
      res.setHeader('Content-Type', 'text/css');
      res.end(cssContent);
    } else if (req.url === '/script.js') {
      const jsContent = await fs.readFile('./script.js', 'utf-8');
      res.setHeader('Content-Type', 'text/javascript');
      res.end(jsContent);
    } else {
      res.statusCode = 404;
      res.end('404 Not Found');
    }
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

const port = process.env.PORT || 3333;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
