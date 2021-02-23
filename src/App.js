import './App.css';
import {MyNavbar}  from './components/mynavbar/mynavbar.component';
import {MyCarousel} from './components/mycarousel/mycarousel.component';
import {TitleMessage} from './components/title-message/title-message.component'
//Components



const  App =  () => {
   return (
      <div className='App'>
         <MyNavbar />
         <MyCarousel />
      </div>);
}

export default App;
