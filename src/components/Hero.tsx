import React from 'react';
import { Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Hero: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="bg-gradient-to-br from-green-50 to-white min-h-[calc(100vh-64px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-12 w-12 text-green-600" />
              <h1 className="text-4xl font-bold text-green-600">EcoEnergy</h1>
            </div>
            <p className="text-5xl font-bold text-gray-800 mb-6 text-center md:text-left">
              Changing Your Energy,<br />
              <span className="text-green-600">Changing The World</span>
            </p>
            <p className="text-xl text-gray-600 mb-8 text-center md:text-left">
              Transform your energy consumption with smart, sustainable solutions.
            </p>
            <Link
              to={isAuthenticated ? "/my-device" : "/register"}
              className="flex items-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-lg"
            >
              <span>{isAuthenticated ? 'View Dashboard' : 'Get Started'}</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
              alt="Sustainable Energy"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 font-semibold">Active Energy Savings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;