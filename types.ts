/**
 * @file This file contains all the core type definitions for the ServiSync application.
 * @description It defines the structure for clients, inventory items, service orders, and the overall application data schema.
 * @author Éverson Filipe
 */

/**
 * @enum {string} OrderStatus
 * @description Represents the possible statuses of a service order.
 */
export enum OrderStatus {
  Open = 'Aberta',
  InProgress = 'Em Andamento',
  Completed = 'Concluída',
}

/**
 * @interface Client
 * @description Defines the structure for a client record.
 * @property {string} id - The unique identifier for the client.
 * @property {string} name - The client's full name.
 * @property {string} phone - The client's contact phone number.
 * @property {string} email - The client's email address.
 * @property {Date} createdAt - The timestamp when the client was added.
 */
export interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  createdAt: Date;
}

/**
 * @interface InventoryItem
 * @description Defines the structure for an item in the inventory.
 * @property {string} id - The unique identifier for the inventory item.
 * @property {string} name - The name of the item.
 * @property {number} quantity - The current quantity in stock.
 * @property {number} lowStockThreshold - The quantity threshold for a low stock warning.
 */
export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  lowStockThreshold: number;
}

/**
 * @interface PartUsage
 * @description Defines the structure for a part used in a service order.
 * @property {string} itemId - The ID of the inventory item used.
 * @property {string} name - The name of the part used.
 * @property {number} quantityUsed - The quantity of the part used in the service order.
 */
export interface PartUsage {
  itemId: string;
  name: string;
  quantityUsed: number;
}

/**
 * @interface ServiceOrder
 * @description Defines the structure for a service order.
 * @property {string} id - The unique identifier for the service order.
 * @property {Client} client - The client associated with the order.
 * @property {string} equipment - A description of the equipment being serviced.
 * @property {string} issueDescription - A description of the reported issue.
 * @property {OrderStatus} status - The current status of the order.
 * @property {PartUsage[]} partsUsed - A list of inventory parts used for the service.
 * @property {Date} createdAt - The timestamp when the order was created.
 * @property {Date} updatedAt - The timestamp when the order was last updated.
 */
export interface ServiceOrder {
  id: string;
  client: Client;
  equipment: string;
  issueDescription: string;
  status: OrderStatus;
  partsUsed: PartUsage[];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * @interface AppData
 * @description Defines the root structure for the entire application's data, used for export and import functionality.
 * @property {Client[]} clients - A list of all clients.
 * @property {InventoryItem[]} inventory - A list of all inventory items.
 * @property {ServiceOrder[]} orders - A list of all service orders.
 */
export interface AppData {
  clients: Client[];
  inventory: InventoryItem[];
  orders: ServiceOrder[];
}
