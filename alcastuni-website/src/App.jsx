
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/landingPage.jsx";
import LabSupplies from "./pages/laboratorio.jsx";
import RefrigerationClothing from './pages/frigorificos.jsx';
import MedicalSupplies from './pages/medicina.jsx';
import StainlessSteelTools from './pages/herreria.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/laboratorio" element={<LabSupplies />} />
          <Route path="/frigorificos" element={<RefrigerationClothing />} />
          <Route path="/medicina" element={<MedicalSupplies />} />
          <Route path="/herreria" element={<StainlessSteelTools />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

