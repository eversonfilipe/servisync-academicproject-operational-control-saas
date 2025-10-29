
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Clients from './components/Clients';
import ServiceOrders from './components/ServiceOrders';
import Inventory from './components/Inventory';
import { useAppData } from './hooks/useMockData';
import OnboardingGuide from './components/OnboardingGuide';

export type View = 'dashboard' | 'orders' | 'clients' | 'inventory';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const data = useAppData();
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    const guideShown = localStorage.getItem('servisync-guide-shown');
    if (!guideShown) {
      setShowGuide(true);
    }
  }, []);

  const handleCloseGuide = () => {
    localStorage.setItem('servisync-guide-shown', 'true');
    setShowGuide(false);
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard data={data} setView={setCurrentView} />;
      case 'orders':
        return <ServiceOrders data={data} />;
      case 'clients':
        return <Clients data={data} />;
      case 'inventory':
        return <Inventory data={data} />;
      default:
        return <Dashboard data={data} setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <main className="p-4 sm:p-6 lg:p-8">
        {renderView()}
      </main>
      <OnboardingGuide isOpen={showGuide} onClose={handleCloseGuide} />
    </div>
  );
};

export default App;