const BASE_URL = 'https://restcountries.com/v3.1/';

export const ALL_COUNTRIES = `${BASE_URL}all?fields=name,region,flags`;

export const searchByCountry = (name) => `${BASE_URL}name/${name}`;

export const filterByRegion = (region) => `${BASE_URL}region/${region}`;