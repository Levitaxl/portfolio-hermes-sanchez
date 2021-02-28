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
         <TitleMessage/>
         <MyCarousel />
         <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div className='hs-bg-blue'>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Skills />
          </Slide>
        </Container>
        <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
      <hr />
      <FooterPanel />

      </div>
      
      </div>);
}

export default App;
