
import './App.css';
import Iframe from 'react-iframe';


function App() {
  return (
    <div className="App-header">

      <h1>Google Map React</h1>

      <div>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.124407715442!2d10.59232124626053!3d35.84595288575212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8ba13697c05f%3A0x9060f83387a6cdb!2sP%C3%A2tisserie%20H%20by%20Omar%20-%20Sousse!5e0!3m2!1sfr!2stn!4v1675007940430!5m2!1sfr!2stn"
          width="600"
          height="450"

          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></Iframe>
      </div>
    </div>
  );
}

export default App;
