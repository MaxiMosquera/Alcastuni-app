
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/laboratorio">Insumos de Laboratorio</Link></li>
        <li><Link to="/frigorificos">Ropa para Frigoríficos</Link></li>
        <li><Link to="/medicina">Insumos Médicos</Link></li>
        <li><Link to="/herreria">Herrería de Acero Inoxidable</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
