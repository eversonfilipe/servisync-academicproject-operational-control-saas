import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Clients from './components/Clients';
import ServiceOrders from './components/ServiceOrders';
import Inventory from './components/Inventory';
import OnboardingGuide from './components/OnboardingGuide';
import { AppProvider } from './context/AppContext';

export type View = 'dashboard' | 'orders' | 'clients' | 'inventory';

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [showGuide, setShowGuide] = useState(false);

  React.useEffect(() => {
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
        return <Dashboard setView={setCurrentView} />;
      case 'orders':
        return <ServiceOrders />;
      case 'clients':
        return <Clients />;
      case 'inventory':
        return <Inventory />;
      default:
        return <Dashboard setView={setCurrentView} />;
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
}


const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
