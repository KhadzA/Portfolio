
import './App.css'
import { FaHome, FaUser, FaCode, FaGithub, FaUserGraduate, FaPhone } from "react-icons/fa"

function App() {

  return (
    <div className="content">

      <header className="header">
        Alimun

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

      </header>

      <section id="home">
        <h1>Home Section</h1>
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
