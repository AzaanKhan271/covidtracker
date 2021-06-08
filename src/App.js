import "./App.css";
import Logo from './assets/greencorona.png'
import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/countryPicker/CountryPicker";

const App = () => {
  return (
    <>
    <div >
      <div className='mainHeadDiv'>
        <div className='imgDiv'>
<img src={Logo} className='imgLogo' />

        </div>
        <p><b>Global and Country Wise Cases of Corona Virus</b></p>
        <p><i>(For a Particlar select a Country from below)</i></p>
      </div>
      </div>
      <Cards />
      {/* <CountryPicker /> */}
    </>
  );
};

export default App;
