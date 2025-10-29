import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { Client, InventoryItem, ServiceOrder } from '../types';
import * as api from '../services/api';

interface AppContextState {
  clients: Client[];
  inventory: InventoryItem[];
  orders: ServiceOrder[];
  isLoading: boolean;
  error: string | null;
  actions: {
    addClient: (client: Omit<Client, 'id' | 'createdAt'>) => Promise<void>;
    updateClient: (client: Client) => Promise<void>;
    addOrder: (order: Omit<ServiceOrder, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
    updateOrder: (order: ServiceOrder) => Promise<void>;
    addItem: (item: Omit<InventoryItem, 'id'>) => Promise<void>;
    updateItem: (item: InventoryItem) => Promise<void>;
  };
}

const AppContext = createContext<AppContextState | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [orders, setOrders] = useState<ServiceOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const [clientsData, inventoryData, ordersData] = await Promise.all([
        api.fetchClients(),
        api.fetchInventory(),
        api.fetchOrders(),
      ]);
      setClients(clientsData);
      setInventory(inventoryData);
      setOrders(ordersData);
    } catch (err) {
      setError('Falha ao carregar os dados. Tente recarregar a página.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const actions = useMemo(() => ({
    addClient: async (client: Omit<Client, 'id' | 'createdAt'>) => {
      const newClient = await api.createClient(client);
      setClients(prev => [newClient, ...prev]);
    },
    updateClient: async (client: Client) => {
      const updatedClient = await api.updateClient(client);
      setClients(prev => prev.map(c => c.id === updatedClient.id ? updatedClient : c));
    },
    addItem: async (item: Omit<InventoryItem, 'id'>) => {
        const newItem = await api.createItem(item);
        setInventory(prev => [newItem, ...prev]);
    },
    updateItem: async (item: InventoryItem) => {
        const updatedItem = await api.updateItem(item);
        setInventory(prev => prev.map(i => i.id === updatedItem.id ? updatedItem : i));
    },
    addOrder: async (order: Omit<ServiceOrder, 'id' | 'createdAt' | 'updatedAt'>) => {
        // After creating an order, inventory changes, so we refetch both.
        await api.createOrder(order);
        fetchData();
    },
    updateOrder: async (order: ServiceOrder) => {
        // After updating an order, inventory changes, so we refetch both.
        await api.updateOrder(order);
        fetchData();
    }
  }), []);


  const value = { clients, inventory, orders, isLoading, error, actions };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextState => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
