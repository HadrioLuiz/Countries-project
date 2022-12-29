import React, { useState } from 'react';
import GlobalStyle from './Style/GlobalStyle';
import Countries from './components/Countries';
import Card from './components/Card';



const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const onCountryPickHandler = (country) => {
    setSelectedCountry(country)
  }

  const clearSelectedCountryHandler = () => {
    setSelectedCountry(null);
  }

  const onCountryPickRandomName = (country) => {
    selectedCountry(`/name/${country}`);
    console.log(selectedCountry)
  }
  return (
    <div className="App">
      <GlobalStyle />
      {
        selectedCountry ? <Countries
           clearSelectedCountryHandler={ clearSelectedCountryHandler}
           selectedCountry={selectedCountry}
        /> : <Card onCountryPickHandler={onCountryPickHandler}
                   onCountryPickRandomName={onCountryPickRandomName} 
        />
      }
    </div>
  );
}

export default App;
