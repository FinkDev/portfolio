import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { resolve, relative, sep } from 'node:path';
import { Script, runInNewContext } from 'node:vm';

const root = resolve('dist');
const context = { window: {} };
runInNewContext(await readFile(resolve(root, 'content.js'), 'utf8'), context, { timeout: 1000 });
const portfolio = context.window.PORTFOLIO;
const ids = new Set();
let imageCount = 0;

// Windows ignores case in filenames; GitHub Pages does not.
async function checkLocalAsset(url) {
  if (!url || /^https?:\/\//i.test(url)) return;
  const filename = resolve(root, url);
  const localPath = relative(root, filename);
  assert(localPath && !localPath.startsWith('..') && !localPath.startsWith(sep), `Caminho inválido: ${url}`);
  let directory = root;
  for (const part of localPath.split(sep)) {
    const entries = await readdir(directory);
    assert(entries.includes(part), `Arquivo ausente ou letras maiúsculas/minúsculas diferentes: ${url}`);
    directory = resolve(directory, part);
  }
}

for (const file of ['app.js', 'content.js']) {
  new Script(await readFile(resolve(root, file), 'utf8'), { filename: file });
}
for (const project of portfolio.projects) {
  assert(/^[a-z0-9-]+$/.test(project.id), `Identificador inválido: ${project.id}`);
  assert(!ids.has(project.id), `Identificador duplicado: ${project.id}`);
  ids.add(project.id);
  for (const field of ['technologies', 'personalTechnologies', 'screenshots']) {
    assert(Array.isArray(project[field]), `${project.id}: ${field} deve ser uma lista, mesmo se estiver vazia.`);
  }
  for (const shot of project.screenshots) {
    if (!shot.src) continue;
    assert(shot.alt?.trim(), `${project.id}: screenshot sem descrição alternativa.`);
    await checkLocalAsset(shot.src);
    imageCount++;
  }
}
await checkLocalAsset(portfolio.photo);
const html = await readFile(resolve(root, 'index.html'), 'utf8');
for (const [,url] of html.matchAll(/(?:src|href)="(\.\/[^"#]+)"/g)) await checkLocalAsset(url);
console.log(`OK: ${ids.size} projetos, ${imageCount} screenshot(s), retrato e arquivos locais verificados.`);
