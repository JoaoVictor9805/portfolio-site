/* ===== Internationalization ===== */
const translations = {
  'pt-BR': {
    nav_home: 'Home',
    nav_skills: 'Habilidades',
    nav_experience: 'Experiência Profissional',
    nav_projects: 'Projetos',
    nav_ai: 'IA e Skills',
    nav_contact: 'Contato',

    hero_tag: 'Estudante de Engenharia de Software',
    hero_title: 'João Victor Czech Oliveira',
    hero_bio: 'Sou estudante do quarto período de Engenharia de Software na Pontifícia Universidade Católica do Paraná (PUC-PR), buscando definir uma área de especialização para minha carreira e, ao mesmo tempo, ampliar meus conhecimentos técnicos e desenvolver minhas soft skills, como comunicação, trabalho em equipe e resolução de problemas. Para isso, venho desenvolvendo projetos pessoais e participando de iniciativas acadêmicas e extracurriculares, como o PIBEP, programa de empreendedorismo da PUC-PR, além de buscar oportunidades como o Apple Developer Academy. Atualmente, sou estagiário na Falavinha Next, empresa de contabilidade e soluções empresariais, onde iniciei minhas atividades em 24 de agosto de 2026 e estou desenvolvendo sistemas de automação com o objetivo de facilitar e auxiliar processos internos da empresa.',
    hero_img_alt: 'Foto do autor',

    skills_title: 'Habilidades e Estudos',
    sk_lang: 'Linguagens de Programação e marcação:',
    sk_lang_desc: 'Python, JavaScript, Java, PHP, arduino, SQL, HTML, CSS',
    sk_sec: 'Modelagem e Gestão de Projetos:',
    sk_sec_desc: 'Diagramas UML, Diagramas BPMN, Trello, Kanban, Ciclo PDCA, Arquitetura de Software, Versionamento (Git / GitHub)',
    sk_db: 'APIs, MCP e Integração de Sistemas:',
    sk_db_desc: 'APIs REST, Model Context Protocol (MCP), Integração de sistemas, Automação de Processos com Python e Make',
    sk_emb: 'Habilidades não técnicas:',
    sk_emb_desc: 'Resolução de problemas, Comunicação em público, Trabalho em equipe, Pensamento crítico.',

    exp_title: 'Experiência Profissional',
    exp_role: 'Estagiário no departamento de desenvolvimento: HubNext',
    exp_desc: 'Como estagiário na Falavinha Next, unidade Alphaville, venho atuando no desenvolvimento de projetos internos voltados à automação e otimização de processos. Atualmente, estou desenvolvendo uma solução para o setor comercial que realiza a recepção, transcrição e registro de ligações realizadas pelos colaboradores, seguida da interpretação e correção de possíveis inconsistências nas transcrições. A partir desses dados, o projeto utilizará inteligência artificial para analisar individualmente cada ligação e atribuir uma avaliação com base no PEAH, metodologia adotada pela empresa para aprimorar o atendimento e proporcionar uma melhor experiência aos clientes. Como etapa posterior, a proposta é consolidar os resultados em períodos definidos e disponibilizá-los por meio de um sistema gamificado, permitindo que cada colaborador acompanhe seu desempenho, identifique pontos de melhoria e realize uma autoavaliação contínua.',

    projects_title: 'Projetos',
    proj_link: 'Mais informações',
    proj1_title: 'Uniride',
    proj1_desc: 'Plataforma web de caronas universitárias desenvolvida com PHP, MySQL e JavaScript. Permite que estudantes ofereçam e encontrem caronas, criem grupos de viagem, gerenciem veículos e solicitações, além de contar com chat, avaliações e painel administrativo.',
    proj2_title: 'Analista de Ameaças',
    proj2_desc: 'Aplicação web de Threat Intelligence desenvolvida com FastAPI, Python e MySQL, integrada à API AlienVault OTX para análise de IPs, URLs e hashes. Possui dashboard interativo, histórico de consultas e geração de briefings automáticos com IA utilizando Google Gemini.',
    proj3_title: 'Buscador e Baixador de vídeos do YouTube',
    proj3_desc: 'Aplicação web desenvolvida com FastAPI que permite pesquisar vídeos no YouTube e realizar downloads de vídeo ou áudio em diferentes formatos e qualidades. Utiliza a YouTube Data API v3, yt-dlp e FFmpeg, integrando frontend e backend em uma interface simples e intuitiva.',
    proj4_title: 'Uniride simplificado com Orientação a Objetos',
    proj4_desc: 'Aplicação desktop desenvolvida em Java e JavaFX para gerenciamento de caronas universitárias, permitindo cadastrar passageiros, motoristas, veículos, ofertas e solicitações de carona. O projeto aplica conceitos de POO, organização em camadas Model-View-Controller (MVC) e persistência de dados em arquivos de texto.',
    proj5_title: 'Analista de fluxo: Entrada e Saída de pessoas',
    proj5_desc: 'Sistema embarcado desenvolvido com ESP32 para monitoramento em tempo real da entrada, saída e lotação de pessoas. O projeto integra sensores infravermelhos, encoder, display OLED e dashboard web, aplicando conceitos de FreeRTOS, multitarefa, sincronização entre núcleos, persistência em LittleFS e análise de desempenho.',
    proj6_title: 'Interface de transcrição de áudio em texto',
    proj6_desc: 'Aplicação desktop desenvolvida em Python e CustomTkinter para automatizar a transcrição e organização de chamadas de um call center. O projeto utiliza Whisper para transcrição local, PostgreSQL para armazenamento dos registros e integra threading, processamento de arquivos, resolução temporal de atendentes e uma arquitetura organizada em camadas.',
    proj7_title: 'Kit Plug-And-Play VOLK',
    proj7_desc: 'Projeto desenvolvido durante o PIBEP, programa de empreendedorismo da PUC-PR. Consiste em um kit capaz de transformar bicicletas convencionais em bicicletas elétricas, utilizando um motor acoplado ao sistema para fornecer impulso durante a pedalada. O projeto envolveu pesquisa de mercado, desenvolvimento de protótipo e validação da ideia por meio de apresentações para bancas avaliadoras.',
    proj8_title: 'Peças de Teatro',
    proj8_desc: '"É pique, é pique, é pique" - comédia teatral sobre adolescentes, aniversário e clássicos de Shakespeare. "O pequenino Grão de Areia" - teatro infantil sobre sonhos, descobertas e a busca por uma estrela. "A Divina Comédia" - drama teatral inspirado na obra de Dante, explorando vingança, relacionamentos e redenção. Veja mais informações na sessão correspondente na coletânea de criações.',
    proj9_title: 'Trailers de Cinema',
    proj9_desc: '"Sombras da Lei" - trailer de suspense/drama, desenvolvido a partir da integração entre Som, Direção e Roteiro. "LES" - trailer de suspense, centrado no confronto entre duas garotas após um assassinato. "Chinelos Virados" - curta-metragem de comédia, sobre o conflito entre mãe e filho após ele decidir sair escondido para uma festa.',
    proj10_title: 'Vídeo de apresentação - Apple Academy',
    proj10_desc: 'Vídeo de até 1 minuto desenvolvido a partir do tema "O que te torna único", apresentando minha trajetória, experiências e características que contribuíram para minha formação pessoal e profissional. Esse vídeo foi pensado para a inscrição no Apple Developer Academy.',
    proj11_title: 'Coletânea de criações',
    proj11_desc: 'Aqui é está a coletânea de criações que eu desenvolvi para o Apple Academy. Esta seção reúne criações que representam meus interesses para além dos projetos acadêmicos e profissionais. Aqui estão trabalhos desenvolvidos em diferentes áreas, como teatro, cinema, software projetos pessoais e outras experiências que fizeram parte da minha trajetória. Se quiser saber mais sobre mim, recomendo visitar a coletânea abaixo.',

    carousel_prev: 'Anterior',
    carousel_next: 'Próximo',

    ai_title: 'Modelos de IA e Skills Utilizados no desenvolvimento desse portifólio:',
    ai_model: 'Modelos de IA:',
    ai_model_desc1_a: 'Modelos gratuitos dos fornecedores:',
    ai_model_desc1_b: 'para criar base da plataforma conforme minha orientação, através da plataforma',
    ai_model_desc2_a: 'Modelo Desktop:',
    ai_model_desc2_b: 'para corrigir erros específicos e realizar algumas melhorias na interface.',
    ai_note: 'Obs: Este portfólio foi gerado com linguagem de design inspirada na Apple (seções zebradas, cards arredondados, tipografia limpa), sem reprodução de logotipos, ícones ou textos da Apple.',
    skills_used: 'Skills Ensinadas ao modelo e Aplicadas no projeto:',
    skill1_desc: 'direção visual, paleta, tipografia, evitar clichês de IA',
    skill2_desc: 'temas de cor e fonte consistentes',
    skill3_desc: 'design de peças visuais estáticas',
    skill4_desc: 'montagem do HTML portátil',
    skill5_desc: 'testes com Playwright, screenshots, verificação',

    contact_title: 'Contato',
    contact_email_label: 'E-mail',
    contact_linkedin_btn: 'Ver perfil',
    contact_github_btn: 'Ver repositórios',
    contact_cv_label: 'Currículo',
    contact_cv_pt: 'Português',
    contact_cv_en: 'English',
    contact_location: 'Curitiba, PR',

    toggle_aria: 'Trocar idioma',
    toggle_title: 'Trocar para inglês',
  },
  'en': {
    nav_home: 'Home',
    nav_skills: 'Skills',
    nav_experience: 'Professional Experience',
    nav_projects: 'Projects',
    nav_ai: 'AI & Skills',
    nav_contact: 'Contact',

    hero_tag: 'Software Engineering Student',
    hero_title: 'João Victor Czech Oliveira',
    hero_bio: 'I am a fourth-semester Software Engineering student at the Pontifical Catholic University of Paraná (PUC-PR), currently working to define a specialization area for my career while also expanding my technical knowledge and developing soft skills such as communication, teamwork, and problem-solving. To that end, I have been building personal projects and taking part in academic and extracurricular initiatives, such as PIBEP, PUC-PR\'s entrepreneurship program, as well as pursuing opportunities like the Apple Developer Academy. I am currently an intern at Falavinha Next, an accounting and business solutions company, where I started on August 24, 2026, and where I am developing automation systems aimed at facilitating and supporting the company\'s internal processes.',
    hero_img_alt: 'Photo of the author',

    skills_title: 'Skills & Studies',
    sk_lang: 'Programming & Markup Languages:',
    sk_lang_desc: 'Python, JavaScript, Java, PHP, Arduino, SQL, HTML, CSS',
    sk_sec: 'Modeling & Project Management:',
    sk_sec_desc: 'UML Diagrams, BPMN Diagrams, Trello, Kanban, PDCA Cycle, Software Architecture, Version Control (Git / GitHub)',
    sk_db: 'APIs, MCP & Systems Integration:',
    sk_db_desc: 'REST APIs, Model Context Protocol (MCP), Systems integration, Process automation with Python and Make',
    sk_emb: 'Soft Skills:',
    sk_emb_desc: 'Problem-solving, Public speaking, Teamwork, Critical thinking.',

    exp_title: 'Professional Experience',
    exp_role: 'Development Department Intern: HubNext',
    exp_desc: 'As an intern at Falavinha Next, Alphaville unit, I have been working on internal projects focused on automation and process optimization. I am currently developing a solution for the sales department that receives, transcribes, and logs calls made by employees, followed by the interpretation and correction of any inconsistencies in the transcriptions. Based on this data, the project will use artificial intelligence to individually analyze each call and assign a score based on PEAH, the methodology adopted by the company to improve customer service and the overall customer experience. As a later stage, the plan is to consolidate the results over defined periods and make them available through a gamified system, allowing each employee to track their performance, identify areas for improvement, and continuously self-assess.',

    projects_title: 'Projects',
    proj_link: 'More information',
    proj1_title: 'Uniride',
    proj1_desc: 'Web platform for university carpooling built with PHP, MySQL, and JavaScript. Lets students offer and find rides, create travel groups, manage vehicles and requests, and includes chat, ratings, and an admin panel.',
    proj2_title: 'Threat Analyst',
    proj2_desc: 'Threat Intelligence web application built with FastAPI, Python, and MySQL, integrated with the AlienVault OTX API for analyzing IPs, URLs, and hashes. Features an interactive dashboard, query history, and automatic AI-generated briefings using Google Gemini.',
    proj3_title: 'YouTube Video Search & Downloader',
    proj3_desc: 'Web application built with FastAPI that lets users search for YouTube videos and download video or audio in different formats and qualities. Uses the YouTube Data API v3, yt-dlp, and FFmpeg, integrating frontend and backend in a simple, intuitive interface.',
    proj4_title: 'Simplified Uniride with Object-Oriented Design',
    proj4_desc: 'Desktop application built in Java and JavaFX for managing university carpooling, allowing registration of passengers, drivers, vehicles, ride offers, and requests. The project applies OOP concepts, a layered Model-View-Controller (MVC) structure, and data persistence in text files.',
    proj5_title: 'Flow Analyzer: People Entry and Exit',
    proj5_desc: 'Embedded system built with ESP32 for real-time monitoring of people entering, exiting, and current occupancy. The project integrates infrared sensors, an encoder, an OLED display, and a web dashboard, applying FreeRTOS concepts, multitasking, core synchronization, LittleFS persistence, and performance analysis.',
    proj6_title: 'Audio-to-Text Transcription Interface',
    proj6_desc: 'Desktop application built in Python and CustomTkinter to automate the transcription and organization of call center calls. The project uses Whisper for local transcription, PostgreSQL for record storage, and integrates threading, file processing, agent time resolution, and a layered architecture.',
    proj7_title: 'VOLK Plug-And-Play Kit',
    proj7_desc: 'Project developed during PIBEP, PUC-PR\'s entrepreneurship program. It consists of a kit capable of turning conventional bicycles into electric bicycles, using a motor attached to the system to provide power assistance while pedaling. The project involved market research, prototype development, and idea validation through presentations to evaluation panels.',
    proj8_title: 'Theater Plays',
    proj8_desc: '"É pique, é pique, é pique" - a theatrical comedy about teenagers, birthdays, and Shakespearean classics. "O pequenino Grão de Areia" - a children\'s play about dreams, discoveries, and the search for a star. "A Divina Comédia" - a theatrical drama inspired by Dante\'s work, exploring revenge, relationships, and redemption. See more details in the corresponding section of the creations collection.',
    proj9_title: 'Movie Trailers',
    proj9_desc: '"Sombras da Lei" - a suspense/drama trailer developed through the integration of Sound, Direction, and Screenwriting. "LES" - a suspense trailer centered on the confrontation between two girls after a murder. "Chinelos Virados" - a comedy short film about the conflict between a mother and son after he sneaks out to a party.',
    proj10_title: 'Presentation Video - Apple Academy',
    proj10_desc: 'A video of up to 1 minute built around the theme "What makes you unique," showcasing my journey, experiences, and traits that shaped my personal and professional growth. This video was created for the Apple Developer Academy application.',
    proj11_title: 'Creations Collection',
    proj11_desc: 'Here is the collection of creations I developed for Apple Academy. This section brings together works that represent my interests beyond academic and professional projects. It includes work developed in different areas, such as theater, film, personal software projects, and other experiences that were part of my journey. If you\'d like to know more about me, I recommend visiting the collection below.',

    carousel_prev: 'Previous',
    carousel_next: 'Next',

    ai_title: 'AI Models & Skills Used in Building This Portfolio:',
    ai_model: 'AI Models:',
    ai_model_desc1_a: 'Free models from the providers:',
    ai_model_desc1_b: 'to build the platform\'s base under my direction, via the',
    ai_model_desc2_a: 'Desktop Model:',
    ai_model_desc2_b: 'to fix specific errors and make some interface improvements.',
    ai_note: 'Note: This portfolio was generated with Apple-inspired design language (zebra-striped sections, rounded cards, clean typography), without reproducing any Apple logos, icons, or text.',
    skills_used: 'Skills Taught to the Model and Applied in the Project:',
    skill1_desc: 'visual direction, palette, typography, avoiding AI clichés',
    skill2_desc: 'consistent color and font themes',
    skill3_desc: 'design of static visual assets',
    skill4_desc: 'building the portable HTML',
    skill5_desc: 'testing with Playwright, screenshots, verification',

    contact_title: 'Contact',
    contact_email_label: 'Email',
    contact_linkedin_btn: 'View profile',
    contact_github_btn: 'View repositories',
    contact_cv_label: 'Resume',
    contact_cv_pt: 'Portuguese',
    contact_cv_en: 'English',
    contact_location: 'Curitiba, Brazil',

    toggle_aria: 'Switch language',
    toggle_title: 'Switch to Portuguese',
  }
};

function setLang(lang) {
  lang = translations[lang] ? lang : 'pt-BR';
  const dict = translations[lang];

  document.documentElement.lang = lang === 'pt-BR' ? 'pt-BR' : 'en';

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) toggleBtn.textContent = lang === 'pt-BR' ? 'EN' : 'PT';

  // Translate plain text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Translate attributes (e.g. data-i18n-attr="aria-label:key,title:key2")
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const pairs = el.getAttribute('data-i18n-attr').split(',');
    pairs.forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s.trim());
      if (attr && key && dict[key] !== undefined) {
        el.setAttribute(attr, dict[key]);
      }
    });
  });

  localStorage.setItem('portfolio-lang', lang);
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  const current = document.documentElement.lang === 'pt-BR' ? 'pt-BR' : 'en';
  const next = current === 'pt-BR' ? 'en' : 'pt-BR';
  setLang(next);
});

// Restore saved language preference (defaults to the pt-BR content already in the HTML)
const savedLang = localStorage.getItem('portfolio-lang');
if (savedLang && translations[savedLang]) {
  setLang(savedLang);
}

/* ===== JavaScript Interactivity ===== */
document.addEventListener('DOMContentLoaded', () => {
  // Scroll reveal animations
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(element => {
    observer.observe(element);
  });

  // Carousel functionality
  const carousel = document.querySelector('.carousel');
  const track = carousel?.querySelector('.carousel__track');
  const cards = track?.querySelectorAll('.card');
  const nav = document.querySelector('.carousel__nav');
  const prevBtn = nav?.querySelector('.carousel__btn:first-child');
  const nextBtn = nav?.querySelector('.carousel__btn:last-child');

  if (track && cards.length > 1) {
    let currentIndex = 0;
    const totalCards = cards.length;

    const getGap = () => parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;

    const updateCarousel = () => {
      const cardWidth = cards[0].getBoundingClientRect().width;
      const gap = getGap();
      track.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
    };

    const goToCard = (index) => {
      currentIndex = (index + totalCards) % totalCards;
      updateCarousel();
    };

    prevBtn?.addEventListener('click', () => goToCard(currentIndex - 1));
    nextBtn?.addEventListener('click', () => goToCard(currentIndex + 1));
    window.addEventListener('resize', updateCarousel);

    // Add swipe support
    let dragStartX = 0;
    let isSwiping = false;

    const handleTouchStart = (e) => {
      dragStartX = e.touches[0].clientX;
      isSwiping = true;
    };

    const handleTouchMove = (e) => {
      if (!isSwiping) return;
      const currentX = e.touches[0].clientX;
      const diff = dragStartX - currentX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          prevBtn?.click();
        } else {
          nextBtn?.click();
        }
        isSwiping = false;
      }
    };

    const handleTouchEnd = () => {
      isSwiping = false;
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Mouse drag support
    let isDragging = false;
    // scrollLeft not used

    carousel?.addEventListener('mousedown', (e) => {
      isDragging = true;
      carousel.style.cursor = 'grabbing';
      dragStartX = e.pageX - carousel.offsetLeft;
      // scrollLeft
    });
    carousel?.addEventListener('mouseleave', () => { isDragging = false; carousel.style.cursor = 'grab'; });
    carousel?.addEventListener('mouseup', () => { isDragging = false; carousel.style.cursor = 'grab'; });
    carousel?.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - dragStartX) * 1.5;
      // Move via transform for consistency
      const cardW = cards[0].getBoundingClientRect().width + getGap();
      const deltaCards = Math.round(walk / cardW);
      if (deltaCards !== 0) {
        currentIndex = (currentIndex - deltaCards + totalCards) % totalCards;
        updateCarousel();
        isDragging = false; // reset after one slide
      }
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        prevBtn?.click();
      } else if (e.key === 'ArrowRight') {
        nextBtn?.click();
      }
    });
  }
});