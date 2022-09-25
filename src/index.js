import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const getObject = () => {
  return {
          ime: "Armin",
          prezime: "Petrovic",
          ovako: "ma ja",
          detaljno: {
            adresa: "Svetozara markovića trideset devet",
            telefon: "062 066 506"
          }
        };
}

root.render(
  <React.StrictMode>
    <App 
        message={"Ovo je neka bezveze promjena!"}
        bezveze={"Ovo je drugi tekst!"}
        objekat={getObject()}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
