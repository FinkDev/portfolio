// English copy. Asset paths, links and technical data are shared with content.js.
(() => {
  const pt = window.PORTFOLIO;
  const projects = {
    'projeto-01': {
      chapter: 'SHOWCASE', name: 'Ateliê Buguela Online Showcase',
      summary: 'An online showcase introducing the products and services of Ateliê Buguela.',
      description: 'The web development part of our first-semester interdisciplinary project: an online showcase for Ateliê Buguela. We focused on the user experience and web development practices to create an intuitive, responsive interface.',
      learning: 'I learned about teamwork, time management and development practices. The challenges included integrating technologies and building an interface that worked well and looked good.',
      shots: [['Ateliê Buguela showcase home page', 'The main landing page of the online showcase.'], ['Ateliê Buguela products and services', 'Products and services, with an interactive carousel.']]
    },
    'projeto-02': {
      chapter: 'REPOSITORY', name: 'Interdisciplinary Project Repository',
      summary: 'A system for registering, categorizing and displaying projects in a responsive web interface.',
      description: 'A system for registering interdisciplinary projects at Fatec, designed with an MVC architecture and RESTful approach. Projects can be registered, categorized and displayed through a responsive web interface focused on the user experience.',
      learning: 'The main challenge was creating a responsive, dynamic interface across devices and screen sizes. I learned to use responsive design techniques, media queries and CSS frameworks to provide a consistent experience.',
      shots: [['Project listing', 'Overview of registered projects.'], ['Project registration', 'Form for registering new projects.']]
    },
    'projeto-03': {
      chapter: 'PILATES', name: 'Pilates Studio Management System',
      summary: 'A Pilates studio management system for scheduling classes and managing clients and staff.',
      description: 'A management system for a Pilates studio, focused on the user experience and efficient internal operations. Staff can manage classes and client and employee information.',
      learning: 'The main challenge was implementing a scheduling system that made booking classes simple and quick. I learned to apply interface and user experience design techniques to make the system intuitive.',
      shots: [['Pilates studio landing page', 'The studio landing page, with services and contact information.'], ['Project login screen', 'The login feature in use.']]
    },
    'projeto-04': {
      chapter: 'DENTAL CARE', name: 'Dental Clinic Management System',
      summary: 'A website and management system for a dental clinic, bringing together services, appointments and patient and staff information.',
      description: 'A dental clinic management system focused on the user experience and efficient internal operations. Staff can manage appointments and patient and employee information. A landing page presents the services and contact details.',
      learning: 'The main challenge was integrating the management system with the landing page while communicating information clearly and preserving the brand identity. I learned to implement scheduling and data management features.',
      shots: [['Dental clinic landing page', 'The clinic landing page, with services and contact information.'], ['Patient registration', 'The patient registration feature in use.']]
    },
    'projeto-05': {
      chapter: 'PET SHOP', name: 'Pet Shop Management App',
      summary: 'An app for scheduling pet shop services and managing clients and staff.',
      description: 'A pet shop management app focused on the user experience and efficient internal operations. Staff can manage service appointments and client and employee information through an intuitive interface for everyday use.',
      learning: 'The main challenge was creating a responsive, dynamic interface, particularly on mobile devices. I learned to use responsive design techniques, media queries and CSS frameworks for a consistent experience across screens.',
      shots: [['Pet shop app main screens', 'The main app screen, with appointments, clients and staff.'], ['Team management and notifications', 'Team management and real-time notifications in the pet shop app.']]
    },
    'projeto-06': {
      chapter: 'CHATBOT', name: 'Fatec AI Support Model',
      summary: 'An artificial intelligence model for automated support and common questions at Fatec.',
      description: 'An artificial intelligence model for automated support and common questions at Fatec. It was trained on publicly available institutional data so users can get quick, accurate answers to their questions.',
      learning: 'The main challenge was training the AI model to provide accurate, relevant answers across a variety of questions and situations. I learned to use natural language processing techniques and integrate the model into a responsive web interface.',
      shots: [['Chatbot main screen', 'The main chatbot screen for automated support at Fatec.'], ['Management screen', 'The system for managing chatbot data.']]
    }

  };
  window.PORTFOLIO_EN = {
    ...pt,
    role: 'Front-end developer | Systems analyst',
    introduction: 'I like understanding how things work — and paying attention to how they look. These are the interfaces and systems I have been building during college.',
    about: 'Hi! I’m Pedro Fink Silva. I enjoy exploring what technology and design can do together. I care about visual identity, the details, clarity and interactions that make sense for the person using them.',
    aboutNote: 'Away from the screen, I’m into games, music, design and drawing. I like learning new things and finding ways to bring those interests into what I build.',
    photoAlt: 'Portrait of Pedro Fink Silva',
    course: { ...pt.course, name: 'Multiplatform Software Development', start: 'January 2024', end: 'July 2027', period: 'Semesters 1–6' },
    experiences: pt.experiences.map(item => ({ ...item, role: 'Systems Analyst and Web Developer', start: 'June 2024', end: 'Present', description: 'Developing and improving web solutions on a low-code platform for business process automation and management. My work includes requirements and business rule analysis, JavaScript development, API integration and data processing, SQL queries, dashboards and indicators, workflows, SLA controls, validations and automation.\n\nTaking part in weekly client meetings to understand requirements, follow up on requests, align solutions and support users, helping communication between technical and operational teams.\n\nWorking with the team on reusable libraries and components, custom solutions, technical support and problem solving. I also maintain interfaces, fix behavior, optimize performance and improve the user experience.' })),
    previousEducation: pt.previousEducation.map(item => ({ ...item, name: 'Technical Diploma in Systems Analysis and Development', location: 'In person', hours: '1,200 hours' })),
    courses: pt.courses.map((item, i) => ({ ...item, name: ['Build web apps with ASP.NET Core for beginners', 'Endpoint Security'][i] ?? item.name, location: 'Online', hours: item.hours.replace('horas', 'hours') })),
    languages: [{ name: 'Portuguese', level: 'Native' }, { name: 'English', level: 'Advanced (C1)' }],
    projects: pt.projects.map(project => {
      // Content can grow before its translation: keep original copy instead of failing the whole locale.
      const { shots = [], ...copy } = projects[project.id] ?? {};
      const draftCopy = project.name?.startsWith('[') ? {
        chapter: 'NEXT UP', name: '[Project name]', summary: '[A brief description of the problem and solution.]',
        role: '[Role to be defined]', period: '[Development period]', description: '[Project overview to be added.]',
        participation: '[Individual contribution to be added.]', learning: '[Challenges and lessons to be added.]'
      } : {};
      const sharedCopy = projects[project.id] ? { role: 'Front-end Developer', participation: 'I helped build the system interfaces, from layout prototyping and page consistency to UX/UI implementation, interactions and responsiveness. I also worked with the team on the system architecture and technology choices.' } : {};
      return { ...project, semester: project.semester.replace(/^(\d+)º semestre$/, 'Semester $1'), category: 'Interdisciplinary project', ...sharedCopy, ...draftCopy, ...copy,
        screenshots: project.screenshots.map((shot, index) => ({ ...shot,
          alt: shots[index]?.[0] ?? shot.alt,
          caption: shots[index]?.[1] ?? shot.caption
        })) };
    })
  };
})();
