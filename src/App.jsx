
import './App.css'
import { FaHome, FaUser, FaCode, FaGithub, FaUserGraduate, FaPhone } from "react-icons/fa"

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
                <a href="#about"><FaUser /> About</a>
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
      <section id="about">
        <h1>About Section</h1>
      </section>
      <section id="projects">
        <h1>Projects Section</h1>
      </section>
      <section id="contribution">
        <h1>Contribution Section</h1>
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
