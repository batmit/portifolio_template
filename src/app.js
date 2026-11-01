'use strict';
const projects = __PROJECTS__;
const grid = document.querySelector('#project-grid');
const search = document.querySelector('#search');
const featured = document.querySelector('#featured');
let active = 'Todos';
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const categories = ['Todos', ...new Set(projects.map(project => project.category))];
const marks = {Cronometro_Cultos_ICM:'19:30',NewEnglishWords:'hello.',Cronometro_Formatura:'2026',publish_articles:'Aa',pecas_brasil:'MP', 'batmit.github.io': 'R$',Logaritmo:'log',letmeask:'ask.'};
function el(tag, text, className) { const node=document.createElement(tag); if(text) node.textContent=text; if(className) node.className=className; return node; }
function link(text, href) {const a=el('a',text);a.href=href;return a;}
function render(){
 const term=normalize(search.value.trim());
 const shown=projects.filter(p=>(active==='Todos'||p.category===active)&&(!featured.checked||p.featured)&&normalize([p.title,p.description,p.repo,...p.tech].join(' ')).includes(term));
 grid.replaceChildren();
 shown.forEach(p=>{
  const index=projects.indexOf(p);
  const card=el('article',null,'card');
  const art=el('div',null,'project-art tone-'+index%6); art.setAttribute('aria-hidden','true');
  art.append(el('span',String(index+1).padStart(2,'0'),'project-index'),el('span',marks[p.repo]||'</>','project-mark'),el('span',p.category,'project-kind'));
  const meta=el('div',null,'card-meta');meta.append(el('span',p.category));if(p.featured)meta.append(el('span','Em destaque','badge'));
  const tags=el('div',null,'tags');p.tech.forEach(t=>tags.append(el('span',t)));
  const links=el('div',null,'card-links');const code=link('Código-fonte ↗','https://github.com/batmit/'+p.repo);code.setAttribute('aria-label','Código-fonte de '+p.title);links.append(code);
  if(p.demo){const demo=link('Visitar ↗',p.demo);demo.setAttribute('aria-label','Visitar '+p.title);links.append(demo);}
  const title=el('h3');const primary=link(p.title,p.demo||'https://github.com/batmit/'+p.repo);primary.className='project-primary';primary.setAttribute('aria-label',(p.demo?'Visitar ':'Ver repositório de ')+p.title);title.append(primary);
  card.append(art,meta,title,el('p',p.description),tags,links);grid.append(card);
 });
 document.querySelector('#count').textContent=shown.length+' de '+projects.length+' projetos';
 document.querySelector('#empty').hidden=shown.length!==0;
}
categories.forEach(category=>{
 const button=el('button',category);button.type='button';button.setAttribute('aria-pressed',String(category===active));
 button.addEventListener('click',()=>{active=category;document.querySelectorAll('#filters button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));render();});
 document.querySelector('#filters').append(button);
});
search.addEventListener('input',render);featured.addEventListener('change',render);render();
