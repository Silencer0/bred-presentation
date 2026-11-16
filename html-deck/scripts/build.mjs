import {createRequire} from 'node:module';
import {readdirSync,readFileSync,writeFileSync,mkdirSync,cpSync,rmSync} from 'node:fs';
import {join} from 'node:path';
const require=createRequire(import.meta.url);const Babel=require('../public/vendor/babel.cjs');
mkdirSync('dist',{recursive:true});cpSync('public','dist',{recursive:true});rmSync('dist/vendor/babel.cjs');
function build(dir){for(const item of readdirSync(dir,{withFileTypes:true})){const path=join(dir,item.name);if(item.isDirectory())build(path);else{const out=join('dist',path);mkdirSync(join(out,'..'),{recursive:true});if(/\.jsx?$/.test(path)){const code=Babel.transform(readFileSync(path,'utf8'),{presets:[['react',{runtime:'automatic'}]],filename:path}).code;writeFileSync(out.replace(/\.jsx$/,'.js'),code.replaceAll('.jsx\'','.js\'').replaceAll('.jsx"','.js"'));}else cpSync(path,out);}}}
build('src');cpSync('index.html','dist/index.html');console.log('Built offline-ready presentation in dist/');
