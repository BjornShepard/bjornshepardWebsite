import heroImg from './assets/cv-bild-korrekt.jpg'
import './App.css'

function App() {
  return (
    <>
      <head>
        <title>Björn Shepard</title>
      </head>

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" />
        </div>
        <div>
          <ul>
            <li>
              <h1>Björn Shepard</h1>
            </li>
             <li>
              <h2>M.Sc. Student in Computer Science & Engineering at LTH</h2>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>About me</h2>
          <h2>Professional experience</h2>
          <h2>Education</h2>
        </div>


        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with me</h2>
          <ul>
            <li>
              <a href="https://github.com/BjornShepard" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:contact@bjornshepard.com" target="_blank">
                <img 
                  src="/email-icon.svg" 
                  className="button-icon" 
                  alt="" 
                  aria-hidden="true" 
                />
                Email
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/björn-shepard-073021227" target="_blank">
                <img 
                  src="/LinkedIn_logo_initials.png" 
                  className="button-icon" 
                  alt="" 
                  aria-hidden="true" 
                />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
