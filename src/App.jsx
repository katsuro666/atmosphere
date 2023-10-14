import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { HomePage } from './pages/HomePage';
import { Country } from './pages/Country';
import { NotFound } from './pages/NotFound';

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<HomePage countries={countries} setCountries={setCountries} />} />
          <Route path='/country/:name' element={<Country />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
