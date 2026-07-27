import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-brand-offwhite overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacidade" element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
