import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, Info, HelpCircle, LogIn, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Zap className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-semibold text-green-600">EcoEnergy</span>
          </Link>
          
          <div className="flex space-x-8">
            <NavLink to="/my-device" icon={<Zap size={18} />} text="My Device" />
            <NavLink to="/about" icon={<Info size={18} />} text="About" />
            <NavLink to="/faq" icon={<HelpCircle size={18} />} text="FAQ" />
            
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <LogIn size={18} />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link to={to} className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors">
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;