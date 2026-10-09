# Pedro Fink Silva — Portfólio

Portfólio pessoal e acadêmico em português e inglês, com página de apresentação e seis páginas de projetos. Desenvolvido com HTML, CSS e JavaScript, sem dependências de instalação ou etapa de compilação.

## Executar

Com Node.js instalado:

```sh
npm run dev
```

Abra **http://127.0.0.1:4173**. Para conferir sintaxe, dados dos projetos e caminhos das imagens:

```sh
npm run check
```

A verificação diferencia letras maiúsculas e minúsculas nos nomes dos arquivos, inclusive no Windows, para evitar imagens quebradas na hospedagem.

## Estrutura

```text
dist/
  index.html       Metadados e estrutura global
  content.js       Dados pessoais e dos projetos
  content.en.js    Tradução dos dados para inglês (compartilha imagens e links)
  i18n.js          Traduções dos textos da interface
  preferences.js   Preferências aplicadas antes da primeira pintura
  app.js           Telas, navegação e interações
  styles.css       Identidade visual e responsividade
  assets/          Retrato e screenshots
scripts/
  serve.mjs        Servidor de desenvolvimento
  check.mjs        Verificação dos dados e arquivos
.github/workflows/
  pages.yml        Publicação no GitHub Pages
```

A pasta `dist` contém o próprio código do site; seus arquivos são editáveis e devem ser incluídos no Git. Não há arquivos gerados por build.

## Atualizar informações

Edite `dist/content.js`. O objeto principal contém apresentação, contato, formação, experiências, cursos e idiomas. `previousEducation` reúne a formação anterior; `courses` contém os cursos de extensão. Para dividir uma descrição longa em parágrafos, use `\n\n` dentro do texto.

Ao alterar textos, atualize também `dist/content.en.js`. Os projetos traduzidos são associados pelo `id`, e links, tecnologias e caminhos das imagens são compartilhados com o conteúdo original. Legendas e descrições alternativas das imagens têm tradução própria. `dist/i18n.js` contém os pares de textos da interface; ao editar uma frase em `app.js`, atualize o par correspondente.

Cada item de `projects` define um projeto. Os valores padrão no final da lista mantêm uma página navegável mesmo enquanto o preenchimento está incompleto. Campos definidos no projeto têm prioridade sobre os padrões.

| Campo | Uso |
| --- | --- |
| `id` | Identificador do endereço; mantenha-o estável para preservar links |
| `number`, `semester` | Número e semestre do projeto |
| `chapter` | Texto curto da capa |
| `name`, `summary` | Nome e resumo apresentados no card |
| `color` | Cor da capa: `purple`, `wine`, `silver` ou `dark` |
| `period`, `description` | Período de desenvolvimento e contexto do projeto |
| `technologies` | Tecnologias usadas pela equipe |
| `repository` | URL do código-fonte, ou `null` enquanto estiver pendente |
| `role`, `participation` | Função e contribuição individual |
| `personalTechnologies` | Tecnologias que você utilizou pessoalmente |
| `learning` | Desafios e aprendizados |
| `screenshots` | Imagens, textos alternativos e legendas |

Use listas vazias (`[]`) para tecnologias ainda não informadas e `null` para imagens ou links pendentes. Não coloque nomes de arquivos que ainda não existem.

### Imagens

Coloque os arquivos em `dist/assets/` e use o nome exato, incluindo maiúsculas/minúsculas:

```js
screenshots: [
  {
    src: './assets/BuguelaMain.png',
    alt: 'Página inicial da vitrine virtual do Ateliê Buguela',
    caption: 'Tela principal — landing page da vitrine virtual.',
  },
],
```

As imagens podem ser ampliadas e fechadas pelo botão, pela tecla Escape ou pelo fundo. O retrato é configurado nos campos `photo` e `photoAlt`.

## Identidade e interação

Preto fosco, branco frio, roxo e vinho, com tipografia editorial, capas numeradas e uma grade alternada no desktop. No celular, os projetos passam a uma coluna e os textos se ajustam à largura disponível.

O seletor compacto abre ao passar o mouse, focar pelo teclado ou tocar. Reúne português/inglês, ícones de claro/escuro e bolinhas de roxo/vinho. Fica na lateral no desktop e no cabeçalho no celular. As escolhas ficam apenas no navegador; as animações respeitam a redução de movimento do sistema. A troca de idioma preserva a página de projeto e os cursos abertos. O site inclui indicação de seção atual, progresso de leitura, retorno ao topo, cursos em gaveta e navegação por teclado. Space Grotesk e DM Sans são carregadas pelo Google Fonts, com fontes locais de reserva.

As duas estrelas da abertura flutuam na vertical. Cada uma responde individualmente com um pequeno salto ao passar o mouse, focar pelo teclado ou tocar. Tema e cor mudam gradualmente; a troca de idioma tem uma breve transição de opacidade. No celular, a dupla permanece dentro da composição, sem gestos que bloqueiem a rolagem. As páginas dos projetos não usam os brilhos animados da landing.

A publicação no GitHub Pages versiona os arquivos CSS e JavaScript, incluindo traduções e preferências, para reduzir o uso de versões antigas em cache. Se a porta de prévia estiver ocupada, configure a variável `PORT` antes de executar `npm run dev`.
