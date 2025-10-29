import { Client, ServiceOrder, InventoryItem, OrderStatus, PartUsage } from '../types';

// ================================================================================================
// MOCK BACKEND - This section simulates a database.
// When you connect to Supabase, you will replace the logic in the functions below
// with actual Supabase queries, but the function signatures will remain the same.
// ================================================================================================

let clientsDB: Client[] = [];
let inventoryDB: InventoryItem[] = [];
let ordersDB: ServiceOrder[] = [];

// Simulate network latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// ================================================================================================
// API Service Functions
// These are the functions your application will call.
// ================================================================================================

// -- Clients --
export const fetchClients = async (): Promise<Client[]> => {
  await delay(300);
  console.log("API: Fetching clients");
  return [...clientsDB].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};

export const createClient = async (clientData: Omit<Client, 'id' | 'createdAt'>): Promise<Client> => {
  await delay(300);
  console.log("API: Creating client");
  const newClient: Client = {
    ...clientData,
    id: `cli-${Date.now()}`,
    createdAt: new Date(),
  };
  clientsDB.push(newClient);
  return newClient;
};

export const updateClient = async (updatedClient: Client): Promise<Client> => {
    await delay(300);
    console.log("API: Updating client");
    clientsDB = clientsDB.map(c => c.id === updatedClient.id ? updatedClient : c);
    return updatedClient;
};


// -- Inventory --
export const fetchInventory = async (): Promise<InventoryItem[]> => {
  await delay(300);
  console.log("API: Fetching inventory");
  return [...inventoryDB];
};

export const createItem = async (itemData: Omit<InventoryItem, 'id'>): Promise<InventoryItem> => {
    await delay(300);
    console.log("API: Creating inventory item");
    const newItem: InventoryItem = {
        ...itemData,
        id: `inv-${Date.now()}`,
    };
    inventoryDB.push(newItem);
    return newItem;
};

export const updateItem = async (updatedItem: InventoryItem): Promise<InventoryItem> => {
    await delay(300);
    console.log("API: Updating inventory item");
    inventoryDB = inventoryDB.map(i => i.id === updatedItem.id ? updatedItem : i);
    return updatedItem;
};


// -- Service Orders --
export const fetchOrders = async (): Promise<ServiceOrder[]> => {
  await delay(400); // Slightly longer delay for more complex data
  console.log("API: Fetching service orders");
  // In a real DB, you'd join tables. Here we simulate it.
  const ordersWithClients = ordersDB.map(order => ({
      ...order,
      client: clientsDB.find(c => c.id === (order.client as any).id) || order.client,
  }));
  return [...ordersWithClients].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};

export const createOrder = async (orderData: Omit<ServiceOrder, 'id' | 'createdAt' | 'updatedAt'>): Promise<ServiceOrder> => {
    await delay(500);
    console.log("API: Creating service order");
    const newOrder: ServiceOrder = {
        ...orderData,
        id: `os-${String(ordersDB.length + 1).padStart(3, '0')}`,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    // Simulate transaction: update inventory based on parts used
    if (newOrder.partsUsed.length > 0) {
        newOrder.partsUsed.forEach(part => {
            const itemIndex = inventoryDB.findIndex(i => i.id === part.itemId);
            if (itemIndex > -1) {
                inventoryDB[itemIndex].quantity -= part.quantityUsed;
            }
        });
    }
    ordersDB.push(newOrder);
    return newOrder;
};

export const updateOrder = async (updatedOrder: ServiceOrder): Promise<ServiceOrder> => {
    await delay(500);
    console.log("API: Updating service order");
    const originalOrder = ordersDB.find(o => o.id === updatedOrder.id);
    if (!originalOrder) throw new Error("Order not found");

    // Simulate transaction: calculate inventory changes and apply them
    const inventoryChanges = new Map<string, number>();
    originalOrder.partsUsed.forEach(p => {
        inventoryChanges.set(p.itemId, (inventoryChanges.get(p.itemId) || 0) + p.quantityUsed);
    });
    updatedOrder.partsUsed.forEach(p => {
        inventoryChanges.set(p.itemId, (inventoryChanges.get(p.itemId) || 0) - p.quantityUsed);
    });
    inventoryChanges.forEach((change, itemId) => {
        const itemIndex = inventoryDB.findIndex(i => i.id === itemId);
        if (itemIndex > -1) {
            inventoryDB[itemIndex].quantity += change;
        }
    });

    const finalOrder = { ...updatedOrder, updatedAt: new Date() };
    ordersDB = ordersDB.map(o => o.id === updatedOrder.id ? finalOrder : o);
    return finalOrder;
};
