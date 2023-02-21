import './App.css';
import Header from './Components/Header.js';
import MainSec from './Components/MainSec';
import SideNav from './Components/SideNav.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <SideNav/>
      <MainSec/>
    </div>
  );
}

export default App;
