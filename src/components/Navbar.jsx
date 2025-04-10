import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
        <li><Link to="/chisiamo" className="text-blue-600 hover:underline">Chi siamo</Link></li>
        <li><Link to="/contatti" className="text-blue-600 hover:underline">Contatti</Link></li>
        <li><Link to="/login" className="text-blue-600 hover:underline">Login</Link></li>
        <li><Link to="/area-cliente" className="text-blue-600 hover:underline">Area Cliente</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
