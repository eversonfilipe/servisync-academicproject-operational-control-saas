
import { useState } from 'react';
import { Client, InventoryItem, ServiceOrder, PartUsage } from '../types';

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

  const addOrder = (order: Omit<ServiceOrder, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newOrder: ServiceOrder = {
      ...order,
      id: `os-${String(orders.length + 1).padStart(3, '0')}`,
      createdAt: new Date(),
      // FIX: Corrected typo from `date` to `Date`.
      updatedAt: new Date(),
    };
    
    // Deduct inventory for the new order
    if (newOrder.partsUsed.length > 0) {
      setInventory(prevInventory => {
        const inventoryMap = new Map(prevInventory.map(i => [i.id, i.quantity]));
        newOrder.partsUsed.forEach(part => {
            const currentQuantity = inventoryMap.get(part.itemId) || 0;
            inventoryMap.set(part.itemId, currentQuantity - part.quantityUsed);
        });
        return prevInventory.map(item => ({ ...item, quantity: inventoryMap.get(item.id) || item.quantity }));
      });
    }

    setOrders(prev => [newOrder, ...prev]);
  };
  
  const updateOrder = (updatedOrder: ServiceOrder) => {
    const originalOrder = orders.find(o => o.id === updatedOrder.id);
    if (!originalOrder) return;

    const inventoryChanges = new Map<string, number>();

    // Add back original quantities to calculate net change
    originalOrder.partsUsed.forEach(part => {
        inventoryChanges.set(part.itemId, (inventoryChanges.get(part.itemId) || 0) + part.quantityUsed);
    });

    // Subtract new quantities to get the final change
    updatedOrder.partsUsed.forEach(part => {
        inventoryChanges.set(part.itemId, (inventoryChanges.get(part.itemId) || 0) - part.quantityUsed);
    });
    
    // Apply the net changes to inventory
    if (inventoryChanges.size > 0) {
        setInventory(prevInventory => 
            prevInventory.map(item => {
                if (inventoryChanges.has(item.id)) {
                    return { ...item, quantity: item.quantity + (inventoryChanges.get(item.id) || 0) };
                }
                return item;
            })
        );
    }

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
