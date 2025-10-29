import { Client, ServiceOrder, InventoryItem, AppData } from '../types';

/**
 * @file This file contains the mock API service for the application.
 * @description It simulates a backend by storing data in memory and using delays to mimic network latency.
 * The functions here are designed to be replaced with actual Supabase calls in a production environment.
 * @author Éverson Filipe
 */

// ================================================================================================
// MOCK DATABASE - This section simulates a database using in-memory arrays.
// ================================================================================================

let clientsDB: Client[] = [];
let inventoryDB: InventoryItem[] = [];
let ordersDB: ServiceOrder[] = [];

/**
 * Simulates network latency.
 * @param {number} ms - The duration of the delay in milliseconds.
 * @returns {Promise<void>} A promise that resolves after the specified delay.
 */
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// ================================================================================================
// API Service Functions
// ================================================================================================

// -- Clients --
/**
 * Fetches all clients from the database.
 * @returns {Promise<Client[]>} A promise that resolves to an array of clients, sorted by creation date.
 */
export const fetchClients = async (): Promise<Client[]> => {
  await delay(300);
  console.log("API: Fetching clients");
  return [...clientsDB].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};

/**
 * Creates a new client in the database.
 * @param {Omit<Client, 'id' | 'createdAt'>} clientData - The data for the new client.
 * @returns {Promise<Client>} A promise that resolves to the newly created client.
 */
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

/**
 * Updates an existing client in the database.
 * @param {Client} updatedClient - The client data to update.
 * @returns {Promise<Client>} A promise that resolves to the updated client.
 */
export const updateClient = async (updatedClient: Client): Promise<Client> => {
    await delay(300);
    console.log("API: Updating client");
    clientsDB = clientsDB.map(c => c.id === updatedClient.id ? updatedClient : c);
    return updatedClient;
};


// -- Inventory --
/**
 * Fetches all inventory items from the database.
 * @returns {Promise<InventoryItem[]>} A promise that resolves to an array of inventory items.
 */
export const fetchInventory = async (): Promise<InventoryItem[]> => {
  await delay(300);
  console.log("API: Fetching inventory");
  return [...inventoryDB];
};

/**
 * Creates a new inventory item in the database.
 * @param {Omit<InventoryItem, 'id'>} itemData - The data for the new item.
 * @returns {Promise<InventoryItem>} A promise that resolves to the newly created item.
 */
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

/**
 * Updates an existing inventory item in the database.
 * @param {InventoryItem} updatedItem - The item data to update.
 * @returns {Promise<InventoryItem>} A promise that resolves to the updated item.
 */
export const updateItem = async (updatedItem: InventoryItem): Promise<InventoryItem> => {
    await delay(300);
    console.log("API: Updating inventory item");
    inventoryDB = inventoryDB.map(i => i.id === updatedItem.id ? updatedItem : i);
    return updatedItem;
};


// -- Service Orders --
/**
 * Fetches all service orders from the database.
 * @returns {Promise<ServiceOrder[]>} A promise that resolves to an array of service orders.
 */
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

/**
 * Creates a new service order in the database.
 * This also updates inventory levels for any parts used.
 * @param {Omit<ServiceOrder, 'id' | 'createdAt' | 'updatedAt'>} orderData - The data for the new order.
 * @returns {Promise<ServiceOrder>} A promise that resolves to the newly created order.
 */
export const createOrder = async (orderData: Omit<ServiceOrder, 'id' | 'createdAt' | 'updatedAt'>): Promise<ServiceOrder> => {
    await delay(500);
    console.log("API: Creating service order");
    const newOrder: ServiceOrder = {
        ...orderData,
        id: `os-${Date.now()}`,
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

/**
 * Updates an existing service order in the database.
 * This also adjusts inventory levels based on changes to parts used.
 * @param {ServiceOrder} updatedOrder - The service order data to update.
 * @returns {Promise<ServiceOrder>} A promise that resolves to the updated order.
 */
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

/**
 * Replaces all data in the mock database. Used for the data import feature.
 * @param {AppData} data - The complete application data to load.
 * @returns {Promise<void>} A promise that resolves when the data has been replaced.
 */
export const replaceAllData = async (data: AppData): Promise<void> => {
    await delay(100);
    console.log("API: Replacing all data from import");
    clientsDB = data.clients;
    inventoryDB = data.inventory;
    ordersDB = data.orders;
};
