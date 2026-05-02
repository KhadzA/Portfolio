import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'
import {
  FaHome, FaUser, FaCode, FaGithub, FaUserGraduate, FaPhone,
  FaHtml5, FaCss3Alt, FaReact, FaPhp, FaNode, FaGitAlt,
  FaQuestion, FaRegEye, FaRegSun, FaRegMoon,
  FaChevronLeft, FaChevronRight
} from "react-icons/fa"
import { BsJavascript } from "react-icons/bs";
import { SiMysql, SiVite, SiXampp } from "react-icons/si";
import { RiSupabaseFill, RiFirebaseFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { FaHandshake } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const NAV_LINKS = [
  ['#home', FaHome, 'Home'],
  ['#skills', FaUser, 'Skills'],
  ['#projects', FaCode, 'Projects'],
  ['#contribution', FaGithub, 'Github'],
  ['#education', FaUserGraduate, 'Education'],
  ['#contact', FaPhone, 'Contact'],
];

const SKILLS = [
  {
    title: 'Frontend', color: '#00f5ff',
    items: [
      { icon: <FaHtml5 />, name: 'HTML' },
      { icon: <FaCss3Alt />, name: 'CSS' },
      { icon: <BsJavascript />, name: 'JavaScript' },
      { icon: <FaReact />, name: 'React' },
    ],
    level: 65,
  },
  {
    title: 'Backend', color: '#ff006e',
    items: [{ icon: <FaPhp />, name: 'PHP' }, { icon: <FaNode />, name: 'Node.js' }],
    level: 60,
  },
  {
    title: 'Database', color: '#8338ec',
    items: [
      { icon: <SiMysql />, name: 'MySQL' },
      { icon: <RiSupabaseFill />, name: 'Supabase' },
      { icon: <RiFirebaseFill />, name: 'Firebase' },
    ],
    level: 60,
  },
  {
    title: 'Tools & Technologies', color: '#06ffa5',
    items: [
      { icon: <FaGitAlt />, name: 'Git' },
      { icon: <FaGithub />, name: 'Github' },
      { icon: <VscVscode />, name: 'VSCode' },
      { icon: <SiVite />, name: 'Vite' },
      { icon: <SiXampp />, name: 'XAMPP' },
    ],
    level: 65,
  },
  {
    title: 'Others', color: '#ffbe0b',
    items: [
      { icon: <FaHandshake />, name: 'Collaboration' },
      { icon: <FaRegEye />, name: 'Learner' },
      { icon: <FaQuestion />, name: 'Curiosity' },
    ],
  },
];

const PROJECTS = [
  {
    title: 'Personal Portfolio Website',
    desc: 'A responsive portfolio website built with React Vite.',
    tech: ['React', 'Vite', 'CSS'],
    viewClass: 'btn-view', viewUrl: 'https://github.com/KhadzA/Portfolio',
    demoClass: 'btn-demo', demoUrl: 'https://alimun.vercel.app',
    preview: '/previews/portfolio.png',
    num: '01',
  },
  {
    title: 'Library Management System',
    desc: 'Library system for managing books, users, and reading features with admin dashboard.',
    tech: ['React', 'Vite', 'JavaScript', 'Node.js'],
    viewClass: 'btn-view', viewUrl: 'https://github.com/KhadzA/Library',
    demoClass: 'btn-demo', demoUrl: 'https://alimbrary.vercel.app',
    preview: '/previews/library.png',
    num: '02',
  },
  {
    title: 'Recruitment System Form',
    desc: 'Collects applicant data into Google Sheets. HR dashboard for managing applications, statuses, and job listings.',
    tech: ['React', 'TypeScript', 'Appscript', 'Supabase', 'Google Sheets'],
    viewClass: 'btn-private', viewUrl: 'https://github.com/KhadzA',
    demoClass: 'btn-demo', demoUrl: 'https://applyupstaffzambo.vercel.app/',
    preview: '/previews/recruitment.png',
    num: '03',
  },
  {
    title: 'Assessment System',
    desc: 'Assesses applicants from the recruitment system through various tests stored in the same sheets.',
    tech: ['React', 'Tailwind', 'TypeScript', 'Appscript', 'Supabase'],
    viewClass: 'btn-private', viewUrl: 'https://github.com/KhadzA',
    demoClass: 'btn-demo', demoUrl: 'https://assessmentupstaffzambo.vercel.app/login',
    preview: '/previews/assessment.png',
    num: '04',
  },
  {
    title: 'Cafe Management Web App',
    desc: 'Point-of-sale and management system. Software engineering project, 3rd year.',
    tech: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'XAMPP'],
    viewClass: 'btn-private', viewUrl: 'https://github.com/KhadzA/',
    demoClass: 'btn-disabled', demoUrl: null,
    preview: '/previews/cafe.png',
    num: '05',
  },
  {
    title: 'ESP Resto',
    desc: 'Table reservation using IoT devices. 2nd year IoT project with ESP32.',
    tech: ['Arduino', 'IoT', 'Firebase', 'ESP32', 'C++'],
    viewClass: 'btn-private', viewUrl: 'https://github.com/KhadzA/',
    demoClass: 'btn-disabled', demoUrl: null,
    preview: '/previews/esp-resto.png',
    num: '06',
  },
];

const EDUCATION = [
  { year: '2010 – 2016', degree: 'Mampang Elementary School', school: '' },
  { year: '2016 – 2019', degree: 'Junior High School', school: 'Southern City Colleges' },
  { year: '2020 – 2022', degree: 'Science, Technology, Engineering, and Mathematics (STEM)', school: 'Southern City Colleges' },
  { year: '2022 – 2026', degree: 'Bachelor of Science in Information Technology', school: 'Zamboanga Peninsula Polytechnic State University' },
];

const CERTS = [
  {
    title: 'Introduction to Cybersecurity',
    year: '2024',
    org: 'CISCO Networking Academy',
    desc: 'Achieved student level credential for completing the Introduction to Cybersecurity course.',
  },
  {
    title: 'OJT 1 – Admission Office',
    year: '2023',
    org: 'ZPPSU Admission',
    desc: 'Assisted Zamboanga Peninsula Polytechnic State University Admission office for 248 hours.',
  },
  {
    title: 'OJT 2 – Computer Services Division',
    year: '2024',
    org: 'CHRMO Zamboanga',
    desc: 'Assisted Office of the City Mayor—Computer Services Division (CSD) for 248 hours.',
  },
];

const GH_QUERY = `
  query {
    user(login: "KhadzA") {
      contributionsCollection {
        contributionCalendar {
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
        commitContributionsByRepository(maxRepositories: 10) {
          repository {
            nameWithOwner
            url
          }
          contributions {
            totalCount
          }
        }
      }
    }
  }
`;

/* ═══════════════════════════════════════
   CAROUSEL COMPONENT
═══════════════════════════════════════ */
function Carousel({ children, className = '' }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const scrollTimeout = useRef(null);

  // Count visible "pages" based on scroll width vs client width
  const recalc = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slides = track.children;
    if (!slides.length) return;
    setTotalSlides(slides.length);
  }, []);

  useEffect(() => {
    recalc();
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, [recalc, children]);

  // Track scroll position to update active dot
  const handleScroll = useCallback(() => {
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      const track = trackRef.current;
      if (!track || !track.children.length) return;
      const slideWidth = track.children[0].offsetWidth;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const index = Math.round(track.scrollLeft / (slideWidth + gap));
      setActiveIndex(Math.min(index, track.children.length - 1));
    }, 50);
  }, []);

  const scrollTo = useCallback((index) => {
    const track = trackRef.current;
    if (!track || !track.children[index]) return;
    track.children[index].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
    setActiveIndex(index);
  }, []);

  const prev = () => scrollTo(Math.max(0, activeIndex - 1));
  const next = () => scrollTo(Math.min(totalSlides - 1, activeIndex + 1));

  return (
    <div className={`carousel ${className}`}>
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          ref={trackRef}
          onScroll={handleScroll}
        >
          {children}
        </div>
      </div>

      {/* Nav: arrows + dots in one row */}
      <div className="carousel-nav">
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={prev}
          disabled={activeIndex === 0}
          aria-label="Previous"
        >
          <FaChevronLeft />
        </button>
        <div className="carousel-dots">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={next}
          disabled={activeIndex >= totalSlides - 1}
          aria-label="Next"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   MAIN APP
═══════════════════════════════════════ */
function App() {
  const [isDark, setIsDark] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [cursorBig, setCursorBig] = useState({ x: -100, y: -100 });
  const [activeSection, setActiveSection] = useState('home');
  const [contribData, setContribData] = useState([]);
  const [hasPrivate, setHasPrivate] = useState(false);
  const [activityData, setActivityData] = useState({ commits: [] });
  const cursorBigRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);
  const cursorHideRef = useRef(null);
  const [cursorVisible, setCursorVisible] = useState(false);

  const [ghStats, setGhStats] = useState({
    total: 0, currentStreak: 0, longestStreak: 0, bestDay: 0,
  });

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('dark', 'light');
    html.classList.add(isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    if (token) {
      fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: GH_QUERY }),
      })
        .then(r => r.json())
        .then(json => {
          const col = json.data.user.contributionsCollection;
          const contributions = col.contributionCalendar.weeks.flatMap(week =>
            week.contributionDays.map(day => ({ date: day.date, count: day.contributionCount }))
          );
          setContribData(contributions);
          setGhStats(calcStats(contributions));
          setHasPrivate(true);
          setActivityData({ commits: col.commitContributionsByRepository });
        })
        .catch(err => {
          console.warn('GitHub GraphQL failed, using public fallback:', err);
          fetchPublicFallback();
        });
    } else {
      fetchPublicFallback();
    }
    function fetchPublicFallback() {
      fetch('https://github-contributions-api.jogruber.de/v4/KhadzA?y=last')
        .then(r => r.json())
        .then(data => {
          setContribData(data.contributions);
          setGhStats(calcStats(data.contributions));
          setHasPrivate(false);
          setActivityData({ commits: [] });
        })
        .catch(console.error);
    }
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
      cursorBigRef.current = { x: e.clientX, y: e.clientY };
      setCursorVisible(true);
      clearTimeout(cursorHideRef.current);
      cursorHideRef.current = setTimeout(() => setCursorVisible(false), 3000);
    };
    const onTouch = () => {
      setCursorVisible(false);
      clearTimeout(cursorHideRef.current);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchstart', onTouch, { passive: true });
    const lerp = (a, b, t) => a + (b - a) * t;
    let curX = -100, curY = -100;
    const tick = () => {
      curX = lerp(curX, cursorBigRef.current.x, 0.1);
      curY = lerp(curY, cursorBigRef.current.y, 0.1);
      setCursorBig({ x: curX, y: curY });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchstart', onTouch);
      cancelAnimationFrame(rafRef.current);
      clearTimeout(cursorHideRef.current);
    };
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    const sectionIo = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setActiveSection(e.target.id)),
      { threshold: 0.4 }
    );
    document.querySelectorAll('section[id]').forEach(el => sectionIo.observe(el));
    return () => { io.disconnect(); sectionIo.disconnect(); };
  }, []);

  const tilt = (e, el) => {
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 20;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -20;
    el.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg) translateZ(6px)`;
  };
  const resetTilt = (el) => {
    el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
  };

  function calcStats(contributions) {
    const total = contributions.reduce((s, d) => s + d.count, 0);
    const bestDay = Math.max(...contributions.map(d => d.count));
    let currentStreak = 0;
    for (let i = contributions.length - 1; i >= 0; i--) {
      if (contributions[i].count > 0) currentStreak++;
      else break;
    }
    let longestStreak = 0, running = 0;
    for (const day of contributions) {
      running = day.count > 0 ? running + 1 : 0;
      if (running > longestStreak) longestStreak = running;
    }
    return { total, currentStreak, longestStreak, bestDay };
  }

  const totalCommits = activityData.commits.reduce((s, r) => s + r.contributions.totalCount, 0);
  const maxCommits = activityData.commits[0]?.contributions.totalCount || 1;
  const isCollab = (nameWithOwner) => nameWithOwner.split('/')[0] !== 'KhadzA';

  return (
    <div className="content">
      <div className="cursor-dot" style={{ left: cursor.x, top: cursor.y, opacity: cursorVisible ? 1 : 0 }} />
      <div className="cursor-ring" style={{ left: cursorBig.x, top: cursorBig.y, opacity: cursorVisible ? 1 : 0 }} />
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-noise" aria-hidden="true" />
      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" />
      </div>

      <header className="header">
        <a href="#home" className="logo">
          <FaReact className="logo-icon" />
          <span>Alimun</span>
        </a>
        <nav className="nav-links">
          <ul>
            {NAV_LINKS.map(([href, Icon, label]) => (
              <li key={href} className={activeSection === href.slice(1) ? 'active' : ''}>
                <a href={href}>
                  <Icon className="nav-icon" /><span>{label}</span><span className="nav-underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="theme-toggle" onClick={() => setIsDark(d => !d)} aria-label="Toggle theme">
          <div className="toggle-track">
            <FaRegSun className="sun" /><FaRegMoon className="moon" /><div className="toggle-thumb" />
          </div>
        </button>
      </header>

      {/* ══ HERO ══ */}
      <section id="home" className="hero">
        <div className="parallax-layer layer-back" style={{ transform: `translateY(${scrollY * -0.55}px)` }} aria-hidden="true">
          <div className="geo ring ring-1" /><div className="geo ring ring-2" /><div className="geo dot-cluster" />
        </div>
        <div className="parallax-layer layer-mid" style={{ transform: `translateY(${scrollY * -0.30}px)` }} aria-hidden="true">
          <div className="geo tri tri-1" /><div className="geo tri tri-2" />
          <div className="geo line-v line-1" /><div className="geo line-v line-2" /><div className="geo line-h" />
        </div>
        <div className="parallax-layer layer-front" style={{ transform: `translateY(${scrollY * -0.10}px)` }} aria-hidden="true">
          <div className="geo corner corner-tl" /><div className="geo corner corner-br" />
          <div className="geo floating-badge">// DEV</div>
          <div className="geo grid-dots">{[...Array(25)].map((_, i) => <span key={i} />)}</div>
        </div>
        <div className="hero-content" style={{ transform: `translateY(${scrollY * 0.25}px)`, opacity: Math.max(0, 1 - scrollY / 600) }}>
          <div className="hero-eyebrow reveal">
            <span className="eyebrow-line" />&nbsp; Welcome to my portfolio &nbsp;<span className="eyebrow-line" />
          </div>
          <h1 className="hero-name reveal">
            <span className="glitch" data-text="Al-khazri">Al-khazri</span><br />
            <span className="glitch name-second" data-text="Alim">Alim</span>
          </h1>
          <div className="hero-roles reveal">
            {['Frontend', 'React', 'PHP', 'Node.js'].map((r, i) => (
              <span key={r} className="role-pill" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>{r}</span>
            ))}
          </div>
          <p className="hero-quote reveal">
            Why is 6 afraid of 7? Because 7 8 9!<br />
            I'm a developer passionate about building engaging experiences.
          </p>
          <div className="hero-cta reveal">
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <div className="scroll-mouse"><div className="scroll-wheel" /></div>
          <span>scroll</span>
        </div>
      </section>

      {/* ══ SKILLS ══ */}
      <section id="skills" className="section">
        <div className="section-head reveal">
          <span className="section-num">// 01</span><h2>Skills</h2><div className="section-line" />
        </div>
        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <div key={skill.title} className="skill-card reveal"
              style={{ '--accent': skill.color, '--delay': `${i * 0.1}s` }}
              onMouseMove={e => tilt(e, e.currentTarget)} onMouseLeave={e => resetTilt(e.currentTarget)}>
              <div className="skill-card-glow" /><div className="skill-card-border" />
              <h3 className="skill-title">{skill.title}</h3>
              <div className="skill-icons">
                {skill.items.map(item => (
                  <div key={item.name} className="skill-chip">
                    <span className="chip-icon">{item.icon}</span>
                    <span className="chip-name">{item.name}</span>
                  </div>
                ))}
              </div>
              {skill.level && (
                <div className="skill-bar-wrap">
                  <div className="skill-bar"><div className="skill-fill" style={{ '--level': `${skill.level}%` }} /></div>
                  <span className="skill-label">Intermediate</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ══ PROJECTS (CAROUSEL) ══ */}
      <section id="projects" className="section">
        <div className="section-head reveal">
          <span className="section-num">// 02</span><h2>Projects</h2><div className="section-line" />
        </div>
        <Carousel className="reveal">
          {PROJECTS.map((p) => (
            <div key={p.title} className="carousel-slide">
              <div className="project-card"
                onMouseMove={e => tilt(e, e.currentTarget)} onMouseLeave={e => resetTilt(e.currentTarget)}>
                <div className="project-num">{p.num}</div>
                <div className="project-img-area">
                  <div className="img-placeholder">
                    {p.preview ? (
                      <img src={p.preview} alt={p.title} className="project-preview-img" loading="lazy"
                        onError={e => { e.currentTarget.style.display = 'none' }} />
                    ) : (
                      <>
                        <div className="placeholder-grid">
                          {[...Array(16)].map((_, j) => <div key={j} className="placeholder-cell" />)}
                        </div>
                        <span className="placeholder-label">{p.tech[0]}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="project-body">
                  <h3>{p.title}</h3><p>{p.desc}</p>
                  <div className="tech-row">{p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}</div>
                  <div className="project-actions">
                    {p.viewClass === 'btn-private' ? (
                      <div className="btn-tooltip-wrap">
                        <button className={p.viewClass} disabled>View Project</button>
                        <span className="btn-tooltip">Source code is private</span>
                      </div>
                    ) : p.viewUrl ? (
                      <a href={p.viewUrl} target="_blank" rel="noopener noreferrer" className={p.viewClass}>View Project</a>
                    ) : (
                      <button className={p.viewClass} disabled>View Project</button>
                    )}
                    {p.demoUrl ? (
                      <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className={p.demoClass}>Live Demo</a>
                    ) : (
                      <button className={p.demoClass} disabled>Live Demo</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* ══ CONTRIBUTION ══ */}
      <section id="contribution" className="section">
        <div className="section-head reveal">
          <span className="section-num">// 03</span><h2>Contribution</h2><div className="section-line" />
        </div>

        <div className="contrib-wrap reveal">

          {/* Header row */}
          <div className="contrib-header-row">
            <div className="contrib-title-group">
              <FaGithub className="contrib-gh-icon" />
              <span className="contrib-label">GitHub Contribution Graph</span>
            </div>
          </div>

          {/* Heatmap */}
          <div className="contrib-heatmap-wrap">
            <div className="contrib-grid">
              {Array.from({ length: 52 }, (_, w) =>
                contribData.slice(w * 7, w * 7 + 7)
              ).map((week, w) => (
                <div key={w} className="contrib-week">
                  {week.map((day, d) => {
                    const level = Math.min(day.count > 0 ? Math.ceil(day.count / 3) : 0, 4);
                    return (
                      <div key={d} className={`contrib-cell level-${level}`}
                        title={`${day.date}: ${day.count} contributions`} />
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="contrib-legend">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map(l => (
                <div key={l} className={`contrib-cell level-${l}`} style={{ animationDelay: '0s' }} />
              ))}
              <span>More</span>
            </div>
          </div>

          {/* Stats + Repo list */}
          <div className="contrib-bottom">

            {/* 2×2 stat cards */}
            <div className="gh-stats-grid">
              {[
                { label: 'Total', value: ghStats.total, icon: '⬡', color: 'var(--cyan)' },
                { label: 'Best Day', value: ghStats.bestDay, icon: '★', color: 'var(--gold)' },
                { label: 'Cur. Streak', value: `${ghStats.currentStreak}d`, icon: '🔥', color: 'var(--magenta)' },
                { label: 'Longest', value: `${ghStats.longestStreak}d`, icon: '⚡', color: 'var(--green)' },
              ].map(stat => (
                <div key={stat.label} className="gh-stat-card" style={{ '--stat-color': stat.color }}>
                  <span className="gh-stat-icon">{stat.icon}</span>
                  <span className="gh-stat-value">{stat.value}</span>
                  <span className="gh-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Repo activity panel */}
            {activityData.commits.length > 0 && (
              <div className="activity-panel">
                <div className="activity-panel-header">
                  <div className="activity-panel-title-row">
                    <span className="activity-dot commit-dot" />
                    <span className="activity-panel-title">
                      <strong>{totalCommits}</strong> commits &middot; <strong>{activityData.commits.length}</strong> repos
                    </span>
                  </div>
                  <div className="activity-legend">
                    <span className="repo-badge badge-personal">personal</span>
                    <span className="repo-badge badge-collab">collab</span>
                  </div>
                </div>

                <div className="activity-repos-list">
                  {activityData.commits.map(r => {
                    const collab = isCollab(r.repository.nameWithOwner);
                    const pct = (r.contributions.totalCount / maxCommits) * 100;
                    const repoName = r.repository.nameWithOwner.split('/')[1];
                    const repoOwner = r.repository.nameWithOwner.split('/')[0];
                    return (
                      <div key={r.repository.nameWithOwner} className="activity-repo-row">
                        <div className="repo-row-top">
                          <div className="repo-name-group">
                            {collab && <span className="repo-owner-prefix">{repoOwner}/</span>}
                            <span className="repo-name">{repoName}</span>
                            <span className={`repo-badge ${collab ? 'badge-collab' : 'badge-personal'}`}>
                              {collab ? 'collab' : 'personal'}
                            </span>
                          </div>
                          <span className="repo-commit-count">{r.contributions.totalCount}</span>
                        </div>
                        <div className="repo-bar-track">
                          <div className="repo-bar-fill"
                            style={{ width: `${pct}%`, '--bar-color': collab ? '#a371f7' : 'var(--cyan)' }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ══ EDUCATION ══ */}
      <section id="education" className="section">
        <div className="section-head reveal">
          <span className="section-num">// 04</span><h2>Education &amp; Certifications</h2><div className="section-line" />
        </div>
        <div className="edu-timeline reveal">
          {EDUCATION.map((e, i) => (
            <div key={i} className="edu-timeline-item">
              <div className="edu-timeline-left"><span className="edu-year">{e.year}</span></div>
              <div className="edu-timeline-spine">
                <div className="edu-dot" />
                {i < EDUCATION.length - 1 && <div className="edu-line" />}
              </div>
              <div className="edu-card">
                <h3>{e.degree}</h3>{e.school && <p>{e.school}</p>}
              </div>
            </div>
          ))}
        </div>
        <h3 className="certs-heading reveal">Certifications</h3>
        <Carousel className="reveal">
          {CERTS.map((c) => (
            <div key={c.title} className="carousel-slide">
              <div className="cert-card"
                onMouseMove={e => tilt(e, e.currentTarget)} onMouseLeave={e => resetTilt(e.currentTarget)}>
                <span className="cert-year">{c.year}</span>
                <h4>{c.title}</h4>
                <p className="cert-org">{c.org}</p>
                <p className="cert-desc">{c.desc}</p>
                <button className="cert-btn">View Certificate</button>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" className="section section-contact">
        <div className="section-head reveal">
          <span className="section-num">// 05</span><h2>Contact</h2><div className="section-line" />
        </div>
        <div className="contact-wrap">
          <p className="contact-tagline reveal">Let's build something together.</p>
          <div className="contact-cards reveal">
            <a href="mailto:alimkhadz111@gmail.com" className="contact-card">
              <MdEmail className="contact-icon" />
              <span className="contact-label">Email</span>
              <span className="contact-value">alimkhadz111@gmail.com</span>
              <div className="contact-card-glow" />
            </a>
            <a href="tel:+639127259560" className="contact-card">
              <FaPhone className="contact-icon" />
              <span className="contact-label">Phone</span>
              <span className="contact-value">(+63) 912 7259 560</span>
              <div className="contact-card-glow" />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-line" />
        <p>&copy; 2026 Al-khazri Alim. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;