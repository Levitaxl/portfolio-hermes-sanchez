import './App.css';

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";

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
      </div>);
}

export default App;
