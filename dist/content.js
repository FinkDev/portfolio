/* EDITE SEU PORTFÓLIO AQUI.
 * Campos entre colchetes são placeholders. Use null para links ainda não disponíveis.
 * Imagens: coloque os arquivos em dist/assets/ e informe './assets/nome-do-arquivo.webp'.
 * Você pode duplicar itens de experiências, cursos, idiomas e projetos.
 */
window.PORTFOLIO = {
  name: 'Pedro Fink Silva',
  shortName: 'Pedro Fink',
  role: 'Estudante de tecnologia',
  introduction: 'Entre a lógica e o visual, encontro meu jeito de criar. Este é um registro de ideias, experiências e aprendizados em construção.',
  about: 'Sou Pedro Fink Silva. Gosto de explorar o encontro entre tecnologia, design e experiências digitais. Valorizo os detalhes, a clareza e as interações que fazem sentido.',
  aboutNote: '[Acrescente aqui sua apresentação pessoal, seus interesses profissionais e o que você está buscando.]',
  photo: null,
  photoAlt: 'Retrato de Pedro Fink Silva',
  github: null, // Exemplo: 'https://github.com/seu-usuario'
  email: null,
  course: {
    institution: 'Fatec — [Unidade]',
    name: '[Nome do curso]',
    start: '[Ano / semestre de início]',
    end: '[Previsão de conclusão]',
    period: '1º ao 5º semestre',
  },
  experiences: [
    { company: '[Empresa atual ou mais recente]', role: '[Cargo / função]', start: '[Mês / ano]', end: '[Atual ou mês / ano]', description: '[Descreva suas atividades, responsabilidades e contribuições. Se ainda não tiver experiência profissional, substitua este texto por uma breve apresentação do seu momento atual.]' },
    { company: '[Empresa anterior]', role: '[Cargo / função]', start: '[Mês / ano]', end: '[Mês / ano]', description: '[Conte sobre as atividades realizadas e os principais aprendizados dessa experiência.]' },
  ],
  courses: [
    { name: '[Nome do curso de extensão]', institution: '[Instituição]', location: '[Local ou on-line]', hours: '[00 horas]', start: '[Data de início]', end: '[Data de término]' },
    { name: '[Nome do curso de extensão]', institution: '[Instituição]', location: '[Local ou on-line]', hours: '[00 horas]', start: '[Data de início]', end: '[Data de término]' },
  ],
  languages: [
    { name: 'Português', level: '[Informe seu nível]' },
    { name: '[Outro idioma]', level: '[Informe seu nível]' },
  ],
  projects: [
    { id: 'projeto-01', number: '01', semester: '1º semestre', chapter: 'O começo.', name: '[Nome do projeto 01]', category: '[Área do projeto]', summary: '[Uma breve descrição do problema e da solução desenvolvida.]', color: 'purple' },
    { id: 'projeto-02', number: '02', semester: '2º semestre', chapter: 'Novas conexões.', name: '[Nome do projeto 02]', category: '[Área do projeto]', summary: '[Uma breve descrição do problema e da solução desenvolvida.]', color: 'wine' },
    { id: 'projeto-03', number: '03', semester: '3º semestre', chapter: 'Além do básico.', name: '[Nome do projeto 03]', category: '[Área do projeto]', summary: '[Uma breve descrição do problema e da solução desenvolvida.]', color: 'silver' },
    { id: 'projeto-04', number: '04', semester: '4º semestre', chapter: 'Outras perspectivas.', name: '[Nome do projeto 04]', category: '[Área do projeto]', summary: '[Uma breve descrição do problema e da solução desenvolvida.]', color: 'dark' },
    { id: 'projeto-05', number: '05', semester: '5º semestre', chapter: 'Ideias em prática.', name: '[Nome do projeto 05]', category: '[Área do projeto]', summary: '[Uma breve descrição do problema e da solução desenvolvida.]', color: 'wine' },
    { id: 'projeto-06', number: '06', semester: '[Semestre do projeto]', chapter: 'O próximo passo.', name: '[Nome do projeto 06]', category: '[Área do projeto]', summary: '[Uma breve descrição do problema e da solução desenvolvida.]', color: 'purple' },
  ].map(project => ({
    draft: true,
    period: '[Período de desenvolvimento]',
    description: '[Apresente o contexto do projeto: qual problema motivou a criação, quem são os usuários e como a solução funciona. Explique o que foi desenvolvido durante o semestre.]',
    technologies: ['[Tecnologia 01]', '[Tecnologia 02]', '[Tecnologia 03]'],
    repository: null,
    role: '[Sua função no projeto]',
    participation: '[Descreva sua contribuição individual. Conte quais funcionalidades você implementou, quais decisões tomou e como colaborou com a equipe.]',
    personalTechnologies: ['[Tecnologia que você utilizou]', '[Outra tecnologia]'],
    learning: '[Conte o principal desafio que enfrentou e o que aprendeu ao resolvê-lo.]',
    screenshots: [
      { src: null, alt: 'Tela principal do projeto', caption: '[Tela principal — descreva o que esta imagem apresenta.]' },
      { src: null, alt: 'Funcionalidade do projeto em uso', caption: '[Funcionalidade em uso — descreva a interação apresentada.]' },
    ],
    ...project, // Campos definidos no projeto acima substituem estes valores padrão.
  })),
};
