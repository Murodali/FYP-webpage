import Navbar from './components/Navigationbar';
import Carousel from './components/CarouselComponent';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Instructions from './components/Instructions';
import FooterPage from './components/Footer';

function App() {
  return (
    <Router>
<Navbar></Navbar>
<Carousel></Carousel>
<Instructions></Instructions>
<FooterPage></FooterPage>

<Switch>
  <Route path ='/'></Route>
</Switch>
    </Router>
  );
}

export default App;
