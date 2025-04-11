import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* LOGO */}
        <div className="text-2xl font-bold text-[#28903b]">
          Rosiello<span className="text-[#8cc73f]">Arreda</span>
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-6 text-[#28903b] font-medium">
          <li><Link to="/" className="hover:text-[#8cc73f]">Home</Link></li>
          <li><Link to="/chisiamo" className="hover:text-[#8cc73f]">Chi siamo</Link></li>
          <li><Link to="/contatti" className="hover:text-[#8cc73f]">Contatti</Link></li>
          <li><Link to="/login" className="hover:text-[#8cc73f]">Login</Link></li>
          <li><Link to="/area-cliente" className="hover:text-[#8cc73f]">Area Cliente</Link></li>
        </ul>

        {/* Icona mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-[#28903b]">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-3 text-[#28903b] font-medium">
            <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link to="/chisiamo" onClick={() => setOpen(false)}>Chi siamo</Link></li>
            <li><Link to="/contatti" onClick={() => setOpen(false)}>Contatti</Link></li>
            <li><Link to="/login" onClick={() => setOpen(false)}>Login</Link></li>
            <li><Link to="/area-cliente" onClick={() => setOpen(false)}>Area Cliente</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
