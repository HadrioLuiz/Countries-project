import React,{useState} from "react";
import Card from "./Components/Card";
import Countries from "./Components/Countries";
import GlobalStyle from "./Style/GlobalStyle";


const App =() => {
  const [selecteCountry,setSelectedCountry] = useState(null);

  const onCountryPickHandler = (country) => {
        setSelectedCountry(country);
  }

  const clearSelectedCountryHandler = () => {
        setSelectedCountry(null);
  }

  const onCountryPickRandomName = (country) => {
        selecteCountry(`/name/${country}`)
        console.log(selecteCountry)
  }
  return (
    <div className="App">
      <GlobalStyle/>
      {selecteCountry ? <Countries 
        clearSelectedCountryHandler={clearSelectedCountryHandler}
        selecteCountry={selecteCountry}
      /> : 
      <Card onCountryPickHandler = {onCountryPickHandler}
            onCountryPickRandomName = {onCountryPickRandomName}
      />}
    </div>
  );
}

export default App;

