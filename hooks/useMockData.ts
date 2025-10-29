
import { useState } from 'react';
import { Client, InventoryItem, ServiceOrder } from '../types';

export const useAppData = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [orders, setOrders] = useState<ServiceOrder[]>([]);

  const addClient = (client: Omit<Client, 'id' | 'createdAt'>) => {
    const newClient: Client = {
      ...client,
      id: `cli-${Date.now()}`,
      createdAt: new Date(),
    };
    setClients(prev => [newClient, ...prev]);
  };

  const updateClient = (updatedClient: Client) => {
    setClients(prev => prev.map(c => c.id === updatedClient.id ? updatedClient : c));
  };

  const addOrder = (order: Omit<ServiceOrder, 'id' | 'createdAt' | 'updatedAt' | 'partsUsed'>) => {
    const newOrder: ServiceOrder = {
      ...order,
      id: `os-${String(orders.length + 1).padStart(3, '0')}`,
      createdAt: new Date(),
      updatedAt: new Date(),
      partsUsed: [],
    };
    setOrders(prev => [newOrder, ...prev]);
  };
  
  const updateOrder = (updatedOrder: ServiceOrder) => {
    setOrders(prev => prev.map(o => o.id === updatedOrder.id ? {...updatedOrder, updatedAt: new Date()} : o));
  };
  
  const addItem = (item: Omit<InventoryItem, 'id'>) => {
      const newItem: InventoryItem = {
          ...item,
          id: `inv-${Date.now()}`,
      };
      setInventory(prev => [newItem, ...prev]);
  };
  
  const updateItem = (updatedItem: InventoryItem) => {
      setInventory(prev => prev.map(i => i.id === updatedItem.id ? updatedItem : i));
  };

  return {
    clients,
    inventory,
    orders,
    actions: {
      addClient,
      updateClient,
      addOrder,
      updateOrder,
      addItem,
      updateItem,
    }
  };
};

export type AppData = ReturnType<typeof useAppData>;
