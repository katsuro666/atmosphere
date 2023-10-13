import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ALL_COUNTRIES } from '../config';

import { CountriesList } from '../components/CountriesList';
import { CountryCard } from '../components/CountryCard';
import { Controls } from '../components/Controls';
export const HomePage = ({ countries, setCountries }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
  }, []);

  return (
    <>
      <Controls />
      <CountriesList>
        {countries.map((country) => {
          const countryInfo = {
            img: country.flags.png,
            name: country.name.common,
          };

          return (
            <CountryCard
              key={country.name.common}
              {...countryInfo}
              onClick={() => navigate(`/country/${country.name.common}`)}
            />
          );
        })}
      </CountriesList>
    </>
  );
};
