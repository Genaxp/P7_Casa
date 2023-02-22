import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Accueil from "./Accueil";
import Detail from "./Detail";
import Apropos from "./Apropos";
import Erreur404 from "./Erreur404";

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App;
