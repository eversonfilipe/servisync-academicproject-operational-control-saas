import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Clients from './components/Clients';
import ServiceOrders from './components/ServiceOrders';
import Inventory from './components/Inventory';
import OnboardingGuide from './components/OnboardingGuide';
import { AppProvider, useAppContext } from './context/AppContext';
import Modal from './components/common/Modal';
import { AppData } from './types';

export type View = 'dashboard' | 'orders' | 'clients' | 'inventory';

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [showGuide, setShowGuide] = useState(false);
  
  const { clients, inventory, orders, actions } = useAppContext();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    confirmText: string;
  } | null>(null);

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

  const handleExportData = () => {
    setModalState({
      isOpen: true,
      title: 'Exportar Dados',
      message: 'Deseja salvar um backup de todos os dados da aplicação? Um arquivo JSON será baixado.',
      confirmText: 'Sim, Exportar',
      onConfirm: () => {
        const appData: AppData = { clients, inventory, orders };
        const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(appData, null, 2)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = `servisync_backup_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        setModalState(null);
      },
    });
  };

  const handleImportData = () => {
    setModalState({
      isOpen: true,
      title: 'Importar Dados',
      message: 'Atenção: Esta ação substituirá todos os dados existentes. Continue apenas se você tiver um arquivo de backup válido.',
      confirmText: 'Sim, Importar',
      onConfirm: () => {
        fileInputRef.current?.click();
        setModalState(null);
      }
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const text = e.target?.result;
        if (typeof text !== 'string') {
          throw new Error("File format is not valid.");
        }
        const data = JSON.parse(text) as AppData;
        // Basic validation
        if (!data.clients || !data.inventory || !data.orders) {
          throw new Error("JSON format is incorrect for ServiSync.");
        }
        await actions.replaceAllData(data);
        alert("Dados importados com sucesso!");
      } catch (error) {
        console.error("Failed to import data:", error);
        alert(`Erro ao importar dados: ${error instanceof Error ? error.message : 'Unknown error'}`);
      } finally {
        // Reset file input
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    };
    reader.readAsText(file);
  };
  
  const closeModal = () => {
      setModalState(null);
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
      <Header 
        currentView={currentView} 
        setCurrentView={setCurrentView}
        onExport={handleExportData}
        onImport={handleImportData}
      />
      <main className="p-4 sm:p-6 lg:p-8">
        {renderView()}
      </main>
      <OnboardingGuide isOpen={showGuide} onClose={handleCloseGuide} />
      <input
        type="file"
        accept=".json"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
       {modalState?.isOpen && (
        <Modal
          isOpen={modalState.isOpen}
          onClose={closeModal}
          title={modalState.title}
          footer={
            <div className="flex items-center justify-end space-x-2">
              <button onClick={closeModal} className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
                  Cancelar
              </button>
              <button onClick={modalState.onConfirm} className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  {modalState.confirmText}
              </button>
            </div>
          }
        >
          <p className="text-base leading-relaxed text-gray-600">{modalState.message}</p>
        </Modal>
      )}
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
