import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ALL_COUNTRIES } from '../config';

import { CountriesList } from '../components/CountriesList';
import { CountryCard } from '../components/CountryCard';
import { Controls } from '../components/Controls';
export const HomePage = ({ countries, setCountries }) => {
  const navigate = useNavigate();

  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((country) => country.region.includes(region));
    }

    if (search) {
      data = data.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredCountries(data);
  };

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => {
        setCountries(data);
        setFilteredCountries(data);
      });
    }
  }, []);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <CountriesList>
        {filteredCountries.map((country) => {
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
