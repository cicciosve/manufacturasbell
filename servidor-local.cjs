const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const root = path.join(__dirname, 'dist');
const port = Number(process.env.PORT || 8000);
const host = process.env.BELL_HOST || '0.0.0.0';
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.jpeg':'image/jpeg','.jpg':'image/jpeg','.svg':'image/svg+xml','.webp':'image/webp','.mp4':'video/mp4'};
const server = http.createServer((req,res)=>{
 if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);res.end();return;}
 let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);res.end();return;}
 const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
 if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
 fs.stat(file,(err,stat)=>{
  if(err||!stat.isFile()){res.writeHead(404);res.end('Archivo no encontrado');return;}
  const headers={'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Accept-Ranges':'bytes'};
  let start=0,end=stat.size-1,status=200;
  if(req.headers.range){
   const match=/^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
   if(!match||(!match[1]&&!match[2])){res.writeHead(416,{'Content-Range':`bytes */${stat.size}`});res.end();return;}
   if(!match[1])start=Math.max(0,stat.size-Number(match[2]));
   else {start=Number(match[1]);if(match[2])end=Math.min(end,Number(match[2]));}
   if(start>end||start>=stat.size){res.writeHead(416,{'Content-Range':`bytes */${stat.size}`});res.end();return;}
   status=206;headers['Content-Range']=`bytes ${start}-${end}/${stat.size}`;
  }
  headers['Content-Length']=Math.max(0,end-start+1);res.writeHead(status,headers);
  if(req.method==='HEAD'||stat.size===0){res.end();return;}
  fs.createReadStream(file,{start,end}).on('error',()=>res.destroy()).pipe(res);
 });
});
server.on('error',err=>{console.error(err.code==='EADDRINUSE'?`El puerto ${port} ya esta ocupado. Cierra la otra ventana del servidor y vuelve a intentar.`:err.message);process.exitCode=1;});
server.listen(port,host,()=>{
 console.log('\nMANUFACTURAS BELL | Vista local\n');
 console.log(`En esta PC: http://localhost:${port}`);
 for(const entries of Object.values(os.networkInterfaces()))for(const a of entries||[])if(a.family==='IPv4'&&!a.internal)console.log(`En el celular (misma red Wi-Fi): http://${a.address}:${port}`);
 console.log('\nMantén esta ventana abierta. Para detener: Ctrl+C.\n');
});
