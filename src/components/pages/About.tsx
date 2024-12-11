import React from 'react';
import { Leaf, Battery, Sun, Wind } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About EcoEnergy</h2>
          <p className="text-xl text-gray-600">Empowering sustainable energy solutions for a better tomorrow</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Leaf className="h-8 w-8 text-green-600" />}
            title="Eco-Friendly"
            description="Committed to reducing carbon footprint through sustainable energy solutions"
          />
          <FeatureCard
            icon={<Battery className="h-8 w-8 text-green-600" />}
            title="Smart Storage"
            description="Advanced energy storage systems for optimal power management"
          />
          <FeatureCard
            icon={<Sun className="h-8 w-8 text-green-600" />}
            title="Solar Power"
            description="Harnessing solar energy for sustainable power generation"
          />
          <FeatureCard
            icon={<Wind className="h-8 w-8 text-green-600" />}
            title="Wind Energy"
            description="Utilizing wind power for clean and renewable energy"
          />
        </div>

        <div className="mt-16 bg-green-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            At EcoEnergy, we're dedicated to revolutionizing how people interact with and consume energy. 
            Our mission is to make sustainable energy solutions accessible to everyone while promoting 
            environmental consciousness and reducing global carbon emissions.
          </p>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;