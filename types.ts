
export enum OrderStatus {
  Open = 'Aberta',
  InProgress = 'Em Andamento',
  Completed = 'Concluída',
}

export interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  createdAt: Date;
}

export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  lowStockThreshold: number;
}

export interface ServiceOrder {
  id: string;
  client: Client;
  equipment: string;
  issueDescription: string;
  status: OrderStatus;
  partsUsed: InventoryItem[];
  createdAt: Date;
  updatedAt: Date;
}
