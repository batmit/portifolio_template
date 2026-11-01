import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';import vm from 'node:vm';
const read=p=>readFile(new URL('../'+p,import.meta.url),'utf8');
const projects=JSON.parse(await read('src/data/projects.json'));
assert.equal(new Set(projects.map(p=>p.repo)).size,projects.length,'Duplicate repositories');
for(const p of projects){assert(p.title&&p.description&&p.category);assert(Array.isArray(p.tech));assert(/^[A-Za-z0-9_.-]+$/.test(p.repo));if(p.demo)assert.equal(new URL(p.demo).protocol,'https:');}
const app=await read('dist/app.js');assert(!app.includes('__PROJECTS__'));new vm.Script(app);
const html=await read('dist/index.html');for(const id of ['conteudo','projetos','sobre','contato','project-grid','search','filters'])assert(html.includes('id="'+id+'"'));
for(const asset of ['styles.css','app.js','assets/favicon.svg'])await read('dist/'+asset);
console.log('Validated catalog, unique repositories, URLs, compiled JavaScript and page assets.');
