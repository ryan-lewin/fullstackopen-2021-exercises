import axios from "axios";
import {useState, useEffect} from "react";
import Country from "./components/Country";
import Results from "./components/Results";
import Search from "./components/Search";

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCountry, setSelectedCountry] = useState({})
  
  const updateSearchTerm = receivedTerm => setSearchTerm(receivedTerm)

  const spliceCountries = countries => {
    return countries.length <= 10
      ? countries.slice(0, 10)
      : [{cca2:'error', name: {common:'Too many matches, specify another filter'}}]
  }

  const updateSelectedCountry = countryCode => {
    const newSelectedCountry = countries.filter(country => country.cca2 === countryCode)
    setSelectedCountry(newSelectedCountry)
  }

  useEffect(() => {
    if(searchTerm !== '') {
      axios.get(`https://restcountries.com/v3.1/name/${searchTerm}`, {validateStatus: false})
      .then((res) => {
        setCountries(spliceCountries(res.data))
      })
    }
  }, [searchTerm])



  return (
    <div className="App">
      <h1>Countries</h1>
      <Search searchTerm={searchTerm} sendSearchTerm={updateSearchTerm}/>
      <Results countries={countries} sendSelectedCountry={updateSelectedCountry}/>
      <Country country={selectedCountry}/>
    </div>
  );
}

export default App;
