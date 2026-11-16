import http from 'node:http';
import {stat,readFile} from 'node:fs/promises';
import {resolve,extname,join} from 'node:path';
const root=resolve('dist');
http.createServer(async(req,res)=>{try{let file=resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(root+'/')&&file!==root){res.writeHead(403).end();return;}if((await stat(file)).isDirectory())file=join(file,'index.html');res.setHeader('Content-Type',({'.html':'text/html','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.ttf':'font/ttf','.svg':'image/svg+xml'})[extname(file)]||'application/octet-stream');res.end(await readFile(file));}catch{res.writeHead(404).end('Not found');}}).listen(5173,'0.0.0.0',()=>console.log('Presentation: http://localhost:5173'));
