import './App.css';

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import {Skills} from "./pages/skills/skills.component";
import {Experience} from './pages/experience/experience.component'
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import ContactForm from "./pages/contact-form/contact-form.component";
import FooterPanel from "./components/footer/footer.component";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";
//Components

import {MyNavbar}  from './components/mynavbar/mynavbar.component';
import {MyCarousel} from './components/mycarousel/mycarousel.component';
import {TitleMessage} from './components/title-message/title-message.component'
import {About} from './pages/about/about.component';

//Components



const  App =  () => {
   return (
      <div className='App'>
         <MyNavbar />
         {<Particles
        className="particles particles-box"
        params={particlesOptions}
      /> }
         <TitleMessage/>
         <MyCarousel />
         <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
     

            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
              </Container>
      
        </Parallax>
      </div>
      <hr class="white-line"></hr>
      <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Skills />
          </Slide>
        </Container>
      <hr class="white-line"></hr>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <Experience />
        </Fade>
      </Container>
      <hr class="white-line"></hr>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
      <hr class="white-line"></hr>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
      <hr />
      <FooterPanel />

      
      
      </div>);
}

export default App;
