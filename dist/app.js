(() => {
  'use strict';
  const data = window.PORTFOLIO;
  const main = document.querySelector('main');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let revealObserver;
  let sectionObserver;
  let renderedView = '';
  const escape = value => String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  const safeUrl = value => {
    if (!value) return null;
    try { const url = new URL(value, location.href); return ['http:', 'https:'].includes(url.protocol) ? escape(url.href) : null; } catch { return null; }
  };
  const externalLink = (url, label, fallback, className = 'text-link') => safeUrl(url)
    ? `<a class="${className}" href="${safeUrl(url)}" target="_blank" rel="noopener noreferrer">${escape(label)} <span aria-hidden="true">↗</span><span class="sr-only"> (abre em nova aba)</span></a>`
    : `<span class="unavailable">${escape(fallback)} <span aria-hidden="true">↗</span></span>`;
  const tags = list => Array.isArray(list) && list.length
    ? `<div class="tags">${list.map(item => `<span>${escape(item)}</span>`).join('')}</div>`
    : '<p class="placeholder-note">Tecnologias a informar.</p>';
  const paragraphs = value => String(value || '').split(/\n\s*\n/).filter(Boolean).map(text => `<p>${escape(text)}</p>`).join('');
  const projectName = project => !project.name || project.name.startsWith('[') ? 'Projeto em preparação' : project.name;
  const projectSummary = project => !project.summary || project.summary.startsWith('[') ? 'Um novo capítulo da minha trajetória. Os detalhes serão apresentados em breve.' : project.summary;
  const cover = (project, detail = false) => `<div class="project-cover cover-${['purple','wine','silver','dark'].includes(project.color) ? project.color : 'purple'} ${detail ? 'detail-cover' : ''}" aria-hidden="true">
    <div class="cover-top"><span class="mono">PFS / ${escape(project.number)}</span><span class="mono">${escape(project.semester)}</span></div>
    <span class="cover-number">${escape(project.number)}</span><div class="cover-title">${escape(project.chapter)}</div>${detail ? '' : '<span class="cover-arrow">↗</span>'}
  </div>`;
  const footer = () => `<footer class="section contact" id="contato">
    <p class="section-kicker"><span>04 /</span> Contato</p>
    <h2 class="contact-heading">Boas ideias começam<br>com uma <span>conversa.</span></h2>
    <div class="contact-links">${data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ? `<a class="text-link" href="mailto:${escape(data.email)}">${escape(data.email)} <span aria-hidden="true">↗</span></a>` : '<span class="unavailable">[E-mail a adicionar] <span aria-hidden="true">↗</span></span>'}${externalLink(data.github, 'Meu GitHub', '[GitHub a adicionar]')}</div>
    <div class="footer-line"><span>© ${new Date().getFullYear()} ${escape(data.name)}</span><span>Portfólio acadêmico · Fatec</span><a href="#inicio">De volta ao início ↑</a></div>
  </footer>`;

  function home() {
    main.innerHTML = `<section class="hero" id="inicio" aria-labelledby="hero-title">
      <div class="hero-topline mono"><span>Portfólio acadêmico & pessoal</span><span>Ideias em constante evolução</span></div>
      <div class="hero-body"><h1 class="hero-name" id="hero-title" aria-label="${escape(data.name)}"><span>PEDRO</span><span class="surname">FINK<span class="period">.</span></span></h1>
        <div class="hero-aside"><p class="eyebrow">${escape(data.role)}</p><p>${escape(data.introduction)}</p><a class="button" href="#projetos">Explore os projetos <span aria-hidden="true">↘</span></a></div>
      </div>
      <div class="hero-bottom"><div class="stat"><strong>${String(data.projects.length).padStart(2,'0')}</strong><span>Projetos<br>& experiências</span></div><div class="stat"><strong>06</strong><span>Semestres<br>de aprendizado</span></div><a class="scroll-hint" href="#projetos">Continue explorando <b aria-hidden="true">↓</b></a></div>
    </section>
    <section class="section projects" id="projetos" aria-labelledby="projects-title">
      <p class="section-kicker"><span>01 /</span> Projetos selecionados</p>
      <div class="section-heading"><h2 class="section-title" id="projects-title">Do pensamento<br><em>à prática.</em></h2><p>Interfaces, sistemas e os aprendizados de cada etapa da minha formação.</p></div>
      <div class="project-grid">${data.projects.map(project => `<a class="project-card reveal" id="card-${escape(project.id)}" href="#projeto/${encodeURIComponent(project.id)}" aria-label="Abrir ${escape(projectName(project))} — ${escape(project.semester)}">${cover(project)}<div class="project-info"><div class="project-meta"><span>${escape(project.category)}</span><span>${escape(project.semester)}</span></div><h3>${escape(projectName(project))}</h3><p>${escape(projectSummary(project))}</p><span class="project-cta">Conhecer o projeto <span aria-hidden="true">↗</span></span></div></a>`).join('')}</div>
    </section>
    <section class="section about" id="sobre" aria-labelledby="about-title"><p class="section-kicker"><span>02 /</span> Quem está por trás</p>
      <div class="about-layout"><div class="portrait reveal">${safeUrl(data.photo) ? `<img src="${safeUrl(data.photo)}" alt="${escape(data.photoAlt)}" loading="lazy" />` : '<span class="portrait-initials" aria-hidden="true">pf.</span><div class="portrait-caption"><span>Seu retrato entra aqui</span><span>FOTO / 01</span></div>'}</div>
      <div class="about-copy reveal"><h2 class="section-title" id="about-title">Curiosidade move.<br>Intenção <span>guia.</span></h2><p>${escape(data.about)}</p><p class="placeholder-note">${escape(data.aboutNote)}</p><div class="about-tags"><span>Tecnologia</span><span>Design</span><span>UX/UI</span><span>Desenvolvimento</span></div>${externalLink(data.github,'Encontre meu código','[Perfil do GitHub a adicionar]')}</div></div>
    </section>
    <section class="section trajectory" id="trajetoria" aria-labelledby="trajectory-title"><p class="section-kicker"><span>03 /</span> Trajetória</p><div class="section-heading"><h2 class="section-title" id="trajectory-title">Aprender. Fazer.<br><em>Continuar.</em></h2><p>Formação, experiências e os conhecimentos que fazem parte do caminho.</p></div>
      <div class="resume-row reveal"><h3 class="resume-label"><span>01</span> Formação</h3><div class="resume-content"><div class="education-head"><div><h3>${escape(data.course.name)}</h3><p>${escape(data.course.institution)}</p></div><span class="chip">${escape(data.course.period)}</span></div><div class="dates"><div><small>Início do curso</small>${escape(data.course.start)}</div><div><small>Conclusão prevista</small>${escape(data.course.end)}</div></div>${(data.previousEducation || []).map(item => `<article class="previous-education"><p class="meta">${escape(item.start)} — ${escape(item.end)} · ${escape(item.hours)}</p><h3>${escape(item.name)}</h3><p>${escape(item.institution)} · ${escape(item.location)}</p></article>`).join('')}</div></div>
      <div class="resume-row reveal"><h3 class="resume-label"><span>02</span> Experiência</h3><div class="resume-content">${data.experiences.length ? data.experiences.map(item => `<article class="experience"><p class="meta">${escape(item.start)} — ${escape(item.end)}</p><h3>${escape(item.role)}</h3><h4>${escape(item.company)}</h4><div class="experience-description">${paragraphs(item.description)}</div></article>`).join('') : '<p>Minha trajetória profissional está começando. Os projetos acadêmicos registram minhas experiências até aqui.</p>'}</div></div>
      <div class="resume-row reveal"><h3 class="resume-label"><span>03</span> Cursos de extensão</h3><div class="resume-content">${data.courses.length ? data.courses.map(item => `<details class="course-item"><summary><div><h3>${escape(item.name)}</h3><p>${escape(item.institution)} · ${escape(item.hours)}</p></div><span class="plus" aria-hidden="true">+</span></summary><div class="course-details"><div><span>Local / modalidade</span>${escape(item.location)}</div><div><span>Carga horária</span>${escape(item.hours)}</div><div><span>Início</span>${escape(item.start)}</div><div><span>Término</span>${escape(item.end)}</div></div></details>`).join('') : '<p>Cursos de extensão a adicionar.</p>'}</div></div>
      <div class="resume-row reveal"><h3 class="resume-label"><span>04</span> Idiomas</h3><div class="resume-content language-list">${data.languages.map(item => `<div><h3>${escape(item.name)}</h3><p>${escape(item.level)}</p></div>`).join('')}</div></div>
    </section>${footer()}`;
    document.title = `${data.name} — Portfólio`;
  }

  function detail(project) {
    const next = data.projects[(data.projects.indexOf(project) + 1) % data.projects.length];
    const screenshots = Array.isArray(project.screenshots) ? project.screenshots : [];
    main.innerHTML = `<article class="section detail"><a href="#card-${escape(project.id)}" class="detail-back"><span aria-hidden="true">←</span> Voltar aos projetos</a>
      <p class="section-kicker"><span>PROJETO ${escape(project.number)} /</span> ${escape(project.semester)}</p><h1 class="detail-heading" tabindex="-1">${escape(projectName(project))}</h1><p class="detail-summary">${escape(projectSummary(project))}</p>
      <div class="detail-facts"><div><p class="meta">Período</p><p>${escape(project.period)}</p></div><div><p class="meta">Minha função</p><p>${escape(project.role)}</p></div><div><p class="meta">Código-fonte</p>${externalLink(project.repository,'Ver repositório','[Repositório a adicionar]')}</div></div>${cover(project, true)}
      <section class="detail-row"><h2>Sobre o projeto</h2><div><p>${escape(project.description)}</p><h3>Tecnologias do projeto</h3>${tags(project.technologies)}</div></section>
      <section class="detail-row"><h2>Minha participação</h2><div><p>${escape(project.participation)}</p><h3>O que eu utilizei</h3>${tags(project.personalTechnologies)}<h3>Desafios & aprendizados</h3><p>${escape(project.learning)}</p></div></section>
      <section class="screenshots"><h2>O projeto em funcionamento.</h2><p>Registro das telas e das principais funcionalidades.${screenshots.some(shot => safeUrl(shot.src)) ? ' Selecione uma imagem para ampliar.' : ''}</p><div class="screenshot-grid">${screenshots.map((shot,index) => `<figure class="screenshot-figure">${safeUrl(shot.src) ? `<button class="screenshot-button" data-shot="${index}" aria-label="Ampliar: ${escape(shot.alt)}"><img src="${safeUrl(shot.src)}" alt="${escape(shot.alt)}" loading="lazy" /><span class="image-zoom" aria-hidden="true">Ampliar ↗</span></button>` : `<div class="image-placeholder"><span class="placeholder-icon" aria-hidden="true">[ ${String(index+1).padStart(2,'0')} ]</span><p>Screenshot a adicionar</p><small>${escape(shot.alt)}</small></div>`}<figcaption>${escape(shot.caption)}</figcaption></figure>`).join('')}</div></section>
      <nav class="project-pagination" aria-label="Navegação entre projetos"><a href="#projetos">← Todos os projetos</a><a class="next-project" href="#projeto/${encodeURIComponent(next.id)}"><small>Próximo projeto / ${escape(next.number)}</small>${escape(projectName(next))} ↗</a></nav>
    </article>${footer()}`;
    document.title = `${projectName(project)} — ${data.shortName}`;
    main.querySelectorAll('[data-shot]').forEach(button => button.addEventListener('click', () => {
      const shot = screenshots[Number(button.dataset.shot)];
      const dialog = document.querySelector('#image-dialog');
      const image = dialog.querySelector('img');
      image.src = new URL(shot.src,location.href).href; image.alt = shot.alt;
      dialog.querySelector('p').textContent = shot.caption;
      dialog.showModal();
      document.body.classList.add('dialog-open');
    }));
  }

  function setupObservers() {
    revealObserver?.disconnect(); sectionObserver?.disconnect();
    if (!reducedMotion.matches && 'IntersectionObserver' in window) {
      document.body.classList.add('motion-enabled');
      revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.remove('pending'); revealObserver.unobserve(entry.target); }
      }), { threshold: .08 });
      main.querySelectorAll('.reveal').forEach(element => { element.classList.add('pending'); revealObserver.observe(element); });
    }
    document.querySelectorAll('[data-nav]').forEach(link => link.removeAttribute('aria-current'));
    if (renderedView.startsWith('project:')) {
      document.querySelector('[data-nav="projetos"]').setAttribute('aria-current', 'page');
    } else if ('IntersectionObserver' in window) {
      sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) document.querySelectorAll('[data-nav]').forEach(link => link.dataset.nav === entry.target.id ? link.setAttribute('aria-current','location') : link.removeAttribute('aria-current'));
      }), { rootMargin: '-15% 0px -60% 0px' });
      main.querySelectorAll('section[id],footer[id]').forEach(element => sectionObserver.observe(element));
    }
    // Images fail gracefully if a local asset is renamed or removed later.
    main.querySelectorAll('img').forEach(img => img.addEventListener('error', () => {
      const replacement = document.createElement('div'); replacement.className = 'image-placeholder';
      replacement.textContent = `Imagem indisponível: ${img.alt}`;
      (img.closest('.screenshot-button') || img).replaceWith(replacement);
    }));
  }

  function route(initial = false) {
    const hash = location.hash.slice(1) || 'inicio';
    const projectRoute = hash.startsWith('projeto/');
    let id = '';
    try { id = decodeURIComponent(hash.slice(8)); } catch { /* invalid routes show the fallback */ }
    const view = projectRoute ? `project:${id}` : 'home';
    const changed = view !== renderedView;
    if (changed) {
      if (projectRoute) {
        const project = data.projects.find(item => item.id === id);
        if (project) detail(project);
        else { main.innerHTML = '<section class="section not-found"><p class="section-kicker">Projeto não encontrado</p><h1>Vamos voltar?</h1><p>Este projeto não está no portfólio.</p><a class="button" href="#projetos">Explorar os projetos <span aria-hidden="true">↗</span></a></section>'; document.title = 'Projeto não encontrado — Pedro Fink'; }
      } else home();
      renderedView = view; setupObservers();
    }
    requestAnimationFrame(() => {
      if (projectRoute) {
        window.scrollTo({ top:0, behavior:'instant' });
        if (!initial) (main.querySelector('h1') || main).focus({preventScroll:true});
      } else {
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior:changed || initial || reducedMotion.matches ? 'instant' : 'smooth' });
          if (changed && !initial) { if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex','-1'); target.focus({preventScroll:true}); }
        } else if (changed) window.scrollTo({top:0,behavior:'instant'});
      }
      updateProgress();
    });
  }
  const progressBar = document.querySelector('.reading-progress span');
  const backTop = document.querySelector('.back-top');
  let scrollTicking = false;
  function updateProgress() {
    const max = document.documentElement.scrollHeight - innerHeight;
    progressBar.style.transform = `scaleX(${max > 0 ? Math.min(1,Math.max(0,scrollY/max)) : 0})`;
    backTop.hidden = scrollY < 450; scrollTicking = false;
  }
  addEventListener('scroll', () => { if (!scrollTicking) { scrollTicking = true; requestAnimationFrame(updateProgress); } }, { passive:true });
  addEventListener('resize',updateProgress);
  document.querySelector('.skip-link').addEventListener('click', event => {
    event.preventDefault();
    main.focus({preventScroll:true});
    main.scrollIntoView({behavior:reducedMotion.matches ? 'instant' : 'smooth'});
  });
  backTop.addEventListener('click', () => {
    window.scrollTo({ top:0, behavior:reducedMotion.matches ? 'instant' : 'smooth' });
    document.querySelector('.wordmark').focus({preventScroll:true});
  });
  function setAccent(accent) {
    document.body.dataset.accent = accent === 'wine' ? 'wine' : 'purple';
    document.querySelectorAll('[data-accent]').forEach(button => { if (button.matches('button')) button.setAttribute('aria-pressed',String(button.dataset.accent === document.body.dataset.accent)); });
    try { localStorage.setItem('pfs-accent',document.body.dataset.accent); } catch { /* optional preference */ }
  }
  try { setAccent(localStorage.getItem('pfs-accent') || 'purple'); } catch { setAccent('purple'); }
  document.querySelectorAll('.swatch').forEach(button => button.addEventListener('click',() => setAccent(button.dataset.accent)));
  const dialog = document.querySelector('#image-dialog');
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
  dialog.querySelector('.dialog-close').addEventListener('click',() => dialog.close());
  dialog.addEventListener('click',event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
  reducedMotion.addEventListener('change', () => { document.body.classList.remove('motion-enabled'); setupObservers(); });
  addEventListener('hashchange', () => route());
  document.querySelector('[data-nav="projetos"] span').textContent = String(data.projects.length).padStart(2,'0');
  route(true);
})();
