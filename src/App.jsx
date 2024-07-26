import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import GameList from './components/GameList';
import Contact from './pages/Contact';
import Container from './common/Container';

const App = () => {
  const [filters, setFilters] = useState({
    name: '',
    minScore: '',
    orderBy: 'releaseDate',
  });

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <Router>
      <div className="bg-gradient-to-b from-[#081221] to-[#03080f] min-h-screen h-full  text-white">
        <Container>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <div className="lg:flex py-4">
                  <Filter filters={filters} updateFilters={updateFilters} />
                  <GameList filters={filters} />
                </div>
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
