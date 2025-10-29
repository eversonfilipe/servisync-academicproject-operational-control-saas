import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { Client, InventoryItem, ServiceOrder, AppData } from '../types';
import * as api from '../services/api';

/**
 * @interface AppContextState
 * @description Defines the shape of the application's global state and actions.
 */
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
    replaceAllData: (data: AppData) => Promise<void>;
  };
}

/**
 * React context for providing global state to the application.
 */
const AppContext = createContext<AppContextState | undefined>(undefined);

/**
 * Provides the application's global state to its children components.
 * It handles data fetching, state management, and exposes actions to modify the state.
 * @param {object} props - The component props.
 * @param {ReactNode} props.children - The child components to render.
 * @returns {JSX.Element} The provider component.
 */
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [orders, setOrders] = useState<ServiceOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetches all initial data from the API and populates the state.
   */
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
    // Initial data fetch when the component mounts.
    fetchData();
  }, []);

  /**
   * A memoized object containing all the actions that can modify the application state.
   */
  const actions = useMemo(() => ({
    addClient: async (client: Omit<Client, 'id' | 'createdAt'>) => {
      const newClient = await api.createClient(client);
      setClients(prev => [newClient, ...prev].sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime()));
    },
    updateClient: async (client: Client) => {
      const updatedClient = await api.updateClient(client);
      setClients(prev => prev.map(c => c.id === updatedClient.id ? updatedClient : c));
    },
    addItem: async (item: Omit<InventoryItem, 'id'>) => {
        const newItem = await api.createItem(item);
        setInventory(prev => [...prev, newItem]);
    },
    updateItem: async (item: InventoryItem) => {
        const updatedItem = await api.updateItem(item);
        setInventory(prev => prev.map(i => i.id === updatedItem.id ? updatedItem : i));
    },
    addOrder: async (order: Omit<ServiceOrder, 'id' | 'createdAt' | 'updatedAt'>) => {
        // After creating an order, inventory may change, so we refetch all data for consistency.
        await api.createOrder(order);
        fetchData();
    },
    updateOrder: async (order: ServiceOrder) => {
        // After updating an order, inventory may change, so we refetch all data for consistency.
        await api.updateOrder(order);
        fetchData();
    },
    replaceAllData: async (data: AppData) => {
        // This action is used for importing data from a backup file.
        setIsLoading(true);
        // Convert date strings from JSON back to Date objects
        const restoredClients = data.clients.map(c => ({ ...c, createdAt: new Date(c.createdAt) }));
        const restoredOrders = data.orders.map(o => ({
            ...o,
            createdAt: new Date(o.createdAt),
            updatedAt: new Date(o.updatedAt),
        }));
        const restoredData = {
            clients: restoredClients,
            inventory: data.inventory,
            orders: restoredOrders,
        }
        await api.replaceAllData(restoredData);
        // Set the state directly with the new data
        setClients(restoredData.clients);
        setInventory(restoredData.inventory);
        setOrders(restoredData.orders);
        setIsLoading(false);
    }
  }), []);


  const value = { clients, inventory, orders, isLoading, error, actions };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

/**
 * A custom hook to easily access the AppContext.
 * @returns {AppContextState} The global application state and actions.
 * @throws {Error} If used outside of an AppProvider.
 */
export const useAppContext = (): AppContextState => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
