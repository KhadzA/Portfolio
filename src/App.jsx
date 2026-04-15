
import './App.css'
import { FaHome, FaUser, FaCode, FaGithub, FaUserGraduate, FaPhone, FaHtml5, FaCss3Alt, FaReact, FaPhp, FaNode, FaGitAlt, FaQuestion, FaRegEye } from "react-icons/fa"
import { BsJavascript } from "react-icons/bs";
import { SiMysql, SiVite } from "react-icons/si";
import { RiSupabaseFill, RiSupabaseLine, RiFirebaseFill, RiFirebaseLine } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { FaHandshake } from "react-icons/fa6";



function App() {

  return (
    <div className="content">

      <header className="header">
        <div className="primary-HeadTitle">
          <img src="../react-logo.svg" alt="primary-logo" />
          Alimun
        </div>

        <div className="navigationHeader">
          <nav>
            <ul>
              <li>
                <a href="#home"><FaHome /> Home</a>
              </li>
              <li>
                <a href="#skills"><FaUser /> Skills</a>
              </li>
              <li>
                <a href="#projects"><FaCode /> Projects</a>
              </li>
              <li>
                <a href="#contribution"><FaGithub /> Contribution</a>
              </li>
              <li>
                <a href="#education"><FaUserGraduate /> Education</a>
              </li>
              <li>
                <a href="#contact"><FaPhone /> Contact</a>
              </li>
            </ul>
          </nav>
        </div>

      </header>

      <section id="home">
        <p>Welcome to my portfolio</p>
        <h1>Al-khazri Alim</h1>
        <h3>Frontend, React, PHP, Node.js</h3>
        <div className="quote">
          Why is 6 afraid of 7? Because 7 8 9! I'm a developer passionate about building engaging and user-friendly experiences.
        </div>
      </section>
      <section id="skills">
        <h1>Skills</h1>
        <div className="skillCard">

          <h3>Frontend</h3>
          <div className="">
            <span><FaHtml5 />HTML</span>
            <span><FaCss3Alt />CSS</span>
            <span><BsJavascript />JavaScript</span>
            <span><FaReact />React</span>
            <div className="proficiency">
              <p>Proficiency: <span>Intermediate</span></p>
            </div>
          </div>
        </div>
        <div className="skillCard">
          <h3>Backend</h3>
          <div>
            <span><FaPhp />PHP</span>
            <span><FaNode />Node.js</span>
            <div className="proficiency">
              <p>Proficiency: <span>Intermediate</span></p>
            </div>
          </div>
        </div>
        <div className="skillCard">
          <h3>Database</h3>
          <div>
            <span><SiMysql />MySQL</span>
            <span><RiSupabaseFill />Supabase</span>
            <span><RiFirebaseFill />Firebase</span>
            <div className="proficiency">
              <p>Proficiency: <span>Intermediate</span></p>
            </div>
          </div>
        </div>
        <div className="skillCard">
          <h3>Tools & Technologies</h3>
          <div>
            <span><FaGitAlt />Git</span>
            <span><FaGithub />Github</span>
            <span><VscVscode />VSCode</span>
            <span><SiVite />Vite</span>

            <div className="proficiency">
              <p>Proficiency: <span>Intermediate</span></p>
            </div>
          </div>
        </div>
        <div className="skillCard">
          <h3>Others</h3>
          <div>
            <span><FaHandshake />Collaborative Development</span>
            <span><FaRegEye />Learner</span>
            <span><FaQuestion />Curiosity-driven Learning</span>

          </div>
        </div>
      </section>
      <section id="projects">
        <h1>Projects Section</h1>
        <div className="projectCard">
          <img src="" alt="portfolioImage" />
          <h3>Personal Portfolio Website</h3>
          <p>A responsive portfolio website built with React Vite.</p>
          <button className="showSourceCode">View Project</button>
          <button className="noDemo">Live Demo</button>
        </div>
        <div className="projectCard">
          <img src="" alt="alimbraryImage" />
          <h3>Library Management System (Alimbrary)</h3>
          <p>Library system for managing books, users, and reading feature with admin dashboard.</p>
          <button className="showSourceCode">View Project</button>
          <button className="demoShow">Live Demo</button>
        </div>
        <div className="projectCard">
          <img src="" alt="recruitmentImage" />
          <h3>Recruitment System Form</h3>
          <p>Collects applicant data into Google Sheets and provides an HR dashboard to manage applications, update statuses, and create job listings dynamically, Alternative for once was google forms.</p>
          <button className="privateSourceCode">View Project</button>
          <button className="demoShow">Live Demo</button>
        </div>
        <div className="projectCard">
          <img src="" alt="assessmentImage" />
          <h3>Assessment System</h3>
          <p>System that assesses applicant from recruitment system through various tests stored in the same sheets as the recruitment system.</p>
          <button className="privateSourceCode">View Project</button>
          <button className="demoShow">Live Demo</button>
        </div>
        <div className="projectCard">
          <img src="" alt="cafeImage" />
          <h3>Cafe Management Web app</h3>
          <p>Point-of-sale and management system, Software engineering project 3rd year.</p>
          <button className="privateSourceCode">View Project</button>
          <button className="noDemo">Live Demo</button>
        </div>
        <div className="projectCard">
          <img src="" alt="restoImage" />
          <h3>ESP Resto</h3>
          <p>A table reservation using IOT devices, a 2nd year project for IOT.</p>
          <button className="privateSourceCode">View Project</button>
          <button className="noDemo">Live Demo</button>
        </div>
      </section>
      <section id="contribution">
        <h1>Contribution Section</h1>
        {/* This is supposed to be a section for highlighting contributions on my github profile and any contributions made but I don't know how */}
      </section>
      <section id="education">
        <h1>Education Section</h1>
      </section>
      <section id="contact">
        <h1>Contact Section</h1>
      </section>


    </div>
  )
}

export default App
