import { Controls } from './components/Controls';
import { Header } from './components/Header';
import { Main } from './components/Main';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { ALL_COUNTRIES } from './config';
import { CountriesList } from './components/CountriesList';
import { CountryCard } from './components/CountryCard';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  console.log(countries);
  return (
    <>
      <Header />
      <Main>
        <Controls />
        <CountriesList>
          {countries.map((country) => {
            const countryInfo = {
              img: country.flags.png,
              name: country.name.common,
            };

            return <CountryCard key={country.name.common} {...countryInfo} />;
          })}
        </CountriesList>
      </Main>
    </>
  );
}

export default App;
