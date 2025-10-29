
import React, { useState } from 'react';
import Icon from './common/Icon';
import { View } from '../App';

interface HeaderProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems: { id: View; name: string; icon: string }[] = [
    { id: 'dashboard', name: 'Painel', icon: 'dashboard' },
    { id: 'orders', name: 'Ordens de Serviço', icon: 'orders' },
    { id: 'clients', name: 'Clientes', icon: 'clients' },
    { id: 'inventory', name: 'Estoque', icon: 'inventory' },
  ];

  const NavLink: React.FC<{ item: typeof navItems[0]; isMobile?: boolean; }> = ({ item, isMobile = false }) => (
    <button
      onClick={() => {
        setCurrentView(item.id);
        if (isMobile) setMobileMenuOpen(false);
      }}
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        currentView === item.id
          ? 'bg-blue-600 text-white'
          : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
      } ${isMobile ? 'w-full text-base' : ''}`}
    >
      <Icon name={item.icon} className="w-5 h-5 mr-3" />
      {item.name}
    </button>
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">ServiSync</span>
            </div>
            <nav className="hidden md:ml-10 md:flex md:items-baseline md:space-x-4">
              {navItems.map((item) => <NavLink key={item.id} item={item} />)}
            </nav>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Abrir menu</span>
              <Icon name={isMobileMenuOpen ? 'x' : 'dashboard'} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => <NavLink key={item.id} item={item} isMobile />)}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
