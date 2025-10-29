import React, { useState, useRef, useEffect } from 'react';
import Icon from './common/Icon';
import { View } from '../App';

/**
 * @interface HeaderProps
 * @description Defines the props for the Header component.
 * @property {View} currentView - The currently active view in the application.
 * @property {(view: View) => void} setCurrentView - Function to set the active view.
 * @property {() => void} onExport - Callback function to trigger the data export process.
 * @property {() => void} onImport - Callback function to trigger the data import process.
 */
interface HeaderProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  onExport: () => void;
  onImport: () => void;
}

/**
 * Renders the main application header, including navigation and data management controls.
 * @param {HeaderProps} props - The props for the component.
 * @returns {JSX.Element} The rendered Header component.
 */
const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView, onExport, onImport }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDataMenuOpen, setDataMenuOpen] = useState(false);
  const dataMenuRef = useRef<HTMLDivElement>(null);

  const navItems: { id: View; name: string; icon: string }[] = [
    { id: 'dashboard', name: 'Painel', icon: 'dashboard' },
    { id: 'orders', name: 'Ordens de Serviço', icon: 'orders' },
    { id: 'clients', name: 'Clientes', icon: 'clients' },
    { id: 'inventory', name: 'Estoque', icon: 'inventory' },
  ];
  
  // Close data menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dataMenuRef.current && !dataMenuRef.current.contains(event.target as Node)) {
        setDataMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


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

          <div className="flex items-center gap-4">
            {/* Data Management Menu */}
            <div className="relative hidden md:block" ref={dataMenuRef}>
              <button
                onClick={() => setDataMenuOpen(!isDataMenuOpen)}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-haspopup="true"
                aria-expanded={isDataMenuOpen}
              >
                <span className="sr-only">Gerenciar dados</span>
                <Icon name="database" className="h-6 w-6" />
              </button>
              {isDataMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <button onClick={() => { onImport(); setDataMenuOpen(false); }} className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      <Icon name="upload" className="w-5 h-5 mr-3" />
                      Importar Dados...
                    </button>
                    <button onClick={() => { onExport(); setDataMenuOpen(false); }} className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      <Icon name="download" className="w-5 h-5 mr-3" />
                      Exportar Backup
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                 aria-controls="mobile-menu" 
                 aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Abrir menu</span>
                <Icon name={isMobileMenuOpen ? 'x' : 'dashboard'} className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => <NavLink key={item.id} item={item} isMobile />)}
            <div className="border-t border-gray-200 my-2"></div>
             <button onClick={() => { onImport(); setMobileMenuOpen(false); }} className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600">
                <Icon name="upload" className="w-5 h-5 mr-3" />
                Importar Dados
            </button>
            <button onClick={() => { onExport(); setMobileMenuOpen(false); }} className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600">
                <Icon name="download" className="w-5 h-5 mr-3" />
                Exportar Backup
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
