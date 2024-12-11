import React from 'react';
import { Battery, Zap, TrendingUp, Settings } from 'lucide-react';

const MyDevice = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">My Devices</h2>
          <p className="text-gray-600 mt-2">Monitor and manage your connected energy devices</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DeviceCard
            icon={<Battery className="h-6 w-6 text-green-600" />}
            name="Smart Battery"
            status="Active"
            energy="85%"
            lastUpdated="2 mins ago"
          />
          <DeviceCard
            icon={<Zap className="h-6 w-6 text-green-600" />}
            name="Solar Inverter"
            status="Active"
            energy="4.2 kW"
            lastUpdated="1 min ago"
          />
          <DeviceCard
            icon={<TrendingUp className="h-6 w-6 text-green-600" />}
            name="Energy Monitor"
            status="Active"
            energy="2.8 kW"
            lastUpdated="Just now"
          />
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Energy Usage Overview</h3>
            <button className="flex items-center space-x-2 text-green-600 hover:text-green-700">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard title="Daily Usage" value="12.4 kWh" change="+2.3%" />
            <StatCard title="Monthly Usage" value="342 kWh" change="-5.1%" />
            <StatCard title="Cost Savings" value="$45.20" change="+12.5%" />
          </div>
        </div>
      </div>
    </div>
  );
};

const DeviceCard = ({ icon, name, status, energy, lastUpdated }: {
  icon: React.ReactNode;
  name: string;
  status: string;
  energy: string;
  lastUpdated: string;
}) => (
  <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center space-x-3">
        {icon}
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <span className="text-sm text-green-600">{status}</span>
        </div>
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        <Settings className="h-5 w-5" />
      </button>
    </div>
    
    <div className="mt-4">
      <div className="text-2xl font-bold text-gray-900">{energy}</div>
      <div className="text-sm text-gray-500">Last updated: {lastUpdated}</div>
    </div>
  </div>
);

const StatCard = ({ title, value, change }: { title: string; value: string; change: string }) => (
  <div className="bg-gray-50 rounded-lg p-4">
    <h4 className="text-sm text-gray-600 mb-2">{title}</h4>
    <div className="text-xl font-bold text-gray-900">{value}</div>
    <div className={`text-sm ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
      {change}
    </div>
  </div>
);

export default MyDevice;