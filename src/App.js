import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Contatti from './pages/Contatti';
import Login from './pages/Login';
import AreaCliente from './pages/AreaCliente';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/login" element={<Login />} />
          <Route path="/area-cliente" element={<AreaCliente />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
