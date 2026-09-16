# Pedro Fink Silva — Portfólio

Portfólio estático em português, com página mestra e **seis projetos independentes**. Os cinco semestres representam o período solicitado pela Fatec; o sexto projeto tem semestre livre para preencher. Os dados profissionais e acadêmicos ainda são placeholders, não realizações comprovadas.

## Abrir localmente

Com Node.js instalado:

```sh
npm run dev
```

Abra http://127.0.0.1:4173. Não é necessário instalar dependências. `npm run check` verifica a sintaxe do JavaScript. O site usa HTML, CSS e JavaScript, sem etapa de compilação. A pasta `dist` contém os arquivos de produção editáveis.

## Onde editar

| Arquivo | Conteúdo |
| --- | --- |
| `dist/content.js` | Dados pessoais, foto, links, formação, experiências, cursos, idiomas e os seis projetos |
| `dist/styles.css` | Cores, tipografia, espaçamento, responsividade e animações |
| `dist/app.js` | Componentes, telas dos projetos, navegação e interações |
| `dist/index.html` | Metadados, estrutura global e favicon |
| `dist/assets/` | Sua foto e as screenshots reais |

Tudo entre colchetes é conteúdo a substituir. Links com valor `null` aparecem como informações pendentes, sem enviar o visitante a endereços fictícios. A foto e as screenshots ficam em espaços reservados até seus arquivos serem informados.

### Seus dados

Em `content.js`, altere `github`, `email`, `photo`, `course`, `experiences`, `courses` e `languages`. Exemplo para a foto:

```js
photo: './assets/pedro.webp',
photoAlt: 'Retrato de Pedro Fink Silva',
```

Coloque a imagem em `dist/assets/pedro.webp`. A apresentação pessoal inicial foi redigida a partir dos seus interesses: revise também `introduction`, `about` e `aboutNote`.

Se não houver experiência profissional, use `experiences: []`: a página exibe um texto apropriado para quem está começando. Para excluir um curso ou idioma, remova o objeto correspondente da lista.

### Preencher um projeto

Os seis objetos da lista `projects` definem os dados individuais. O `.map()` no fim acrescenta placeholders padrão às informações que ainda não foram definidas. Você pode adicionar qualquer campo diretamente ao objeto do projeto: ele tem prioridade sobre o padrão. Exemplo:

```js
{
  id: 'projeto-01', // mantenha este identificador para preservar os links
  number: '01',
  semester: '1º semestre',
  chapter: 'O começo.', // título editorial da capa
  name: 'Nome real do projeto',
  category: 'Desenvolvimento web',
  summary: 'Resumo curto e objetivo.',
  color: 'purple', // purple, wine, silver ou dark
  draft: false, // remove o aviso "A preencher"
  period: 'Período real de desenvolvimento',
  description: 'Contexto, problema, público e solução.',
  technologies: ['Tecnologia da equipe', 'Outra tecnologia'],
  repository: 'https://github.com/SEU-USUARIO/SEU-REPOSITORIO',
  role: 'Sua função',
  participation: 'O que você efetivamente fez no projeto.',
  personalTechnologies: ['Tecnologia que você utilizou'],
  learning: 'Desafio enfrentado e aprendizado.',
  screenshots: [
    {
      src: './assets/projeto-01-inicio.webp',
      alt: 'Descrição objetiva da tela para leitores de tela',
      caption: 'Explicação da funcionalidade apresentada.',
    },
  ],
},
```

As screenshots reais podem ser ampliadas com um clique. O modal fecha pelo botão, pela tecla Escape ou pelo fundo. Use imagens legíveis, preferencialmente WebP; a área de apresentação é 16:10, sem cortar a imagem.

## Direção visual

- Brutalismo editorial: tipografia expressiva, alinhamento rigoroso, bordas finas e cards alternados verticalmente no desktop.
- Preto fosco `#111112` e branco `#F2F1F4` como base; roxo frio `#9685FF` no destaque e vinho `#80233E` nas capas.
- Space Grotesk para títulos e DM Sans para leitura, carregadas pelo Google Fonts, com fontes locais de reserva se o serviço estiver indisponível.
- A seção clara de apresentação cria uma pausa visual entre o trabalho e a trajetória.
- Movimento com função: revelar conteúdo, indicar interação, acompanhar rolagem e preservar a continuidade entre as telas.
- Preferência de acento salva apenas neste navegador; nenhum dado é enviado por formulários.

Referências consultadas: [seleção de portfolios e tipografia do Awwwards](https://www.awwwards.com/websites/single-page-1/) e [movimento reduzido na documentação MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion). A composição foi criada para este portfólio.

## Navegação e acessibilidade

Links como `#projeto/projeto-01` abrem diretamente o projeto, inclusive em hospedagem estática e em subpastas do GitHub Pages. Há navegação por teclado, foco visível, atalho para o conteúdo, indicação de seção atual, botão de topo, progresso de leitura, suporte a movimento reduzido e retorno ao card de origem. No celular, os cards passam a uma coluna. Os cursos expandem para revelar local, carga horária e datas.

## Publicar no GitHub Pages

O arquivo `.github/workflows/pages.yml` publica apenas `dist`, usando o fluxo de [GitHub Actions documentado pelo GitHub](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

1. Envie este projeto para um repositório seu, na branch `main`.
2. No GitHub, abra **Settings → Pages → Source → GitHub Actions**.
3. Execute **Actions → Publicar portfólio no GitHub Pages → Run workflow**, ou envie uma nova alteração para `main`.
4. Depois que a execução terminar, copie o endereço indicado no ambiente `github-pages`.

A configuração está pronta, mas a publicação na sua conta do GitHub depende do repositório que você escolher. A prévia do Sites é separada e começa privada; ela não substitui o endereço público de entrega ao professor.

## Antes da entrega

- Substituir o retrato e conferir o nome completo.
- Preencher GitHub, unidade da Fatec, nome do curso, início e previsão de conclusão.
- Revisar experiências, cursos de extensão com carga horária/local/datas e idiomas com níveis reais.
- Preencher os seis projetos: descrição, tecnologias, repositório, screenshots e participação individual.
- Definir `draft: false` nos projetos preenchidos e remover os textos entre colchetes.
- Conferir o endereço público e os links externos em uma janela sem login.

Nenhum conteúdo profissional fictício, nível de idioma presumido ou screenshot de projeto inexistente foi usado.
