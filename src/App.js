
import './App.css';
import MyNav from './MyNav/MyNav'
import MenuBa from './MenuBa/MenuBa.js';
import Img from'./imageb/imageb.js';
import Agrid from './Agrid/Agrid.js'
import Footer from './Footer/Footer.js'
import Moto from './Moto/Moto.js';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <MenuBa/>
      <Moto/>
      <Img/>
      <Agrid/>
      <Footer/>
    </div>
  );
}

export default App;
