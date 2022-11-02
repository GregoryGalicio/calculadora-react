import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'

function App() {
  return (
    <div className='App'>
      <div className='logo-container'>
        <img
        src={freeCodeCampLogo}/*La variable se creo importando imagenes */
        className='logo'
        alt='Logo freeCodeCamp'
        />
      </div>
      <div className='calculator-container'>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
