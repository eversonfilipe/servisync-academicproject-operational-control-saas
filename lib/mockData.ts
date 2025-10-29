
import { Client, InventoryItem, ServiceOrder, OrderStatus } from '../types';

const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);
const twoDaysAgo = new Date(today);
twoDaysAgo.setDate(today.getDate() - 2);

export const MOCK_CLIENTS: Client[] = [
  { id: 'cli-1', name: 'Carlos Eduardo Silva', phone: '(18) 99123-4567', email: 'carlos.e.silva@email.com', createdAt: twoDaysAgo },
  { id: 'cli-2', name: 'Ana Pereira Lima', phone: '(18) 99876-5432', email: 'ana.lima@email.com', createdAt: yesterday },
  { id: 'cli-3', name: 'João Santos', phone: '(18) 99765-1234', email: 'joao.santos@email.com', createdAt: today },
];

export const MOCK_INVENTORY: InventoryItem[] = [
  { id: 'inv-1', name: 'SSD 240GB Kingston', quantity: 8, lowStockThreshold: 5 },
  { id: 'inv-2', name: 'Memória RAM 8GB DDR4', quantity: 12, lowStockThreshold: 10 },
  { id: 'inv-3', name: 'Fonte ATX 500W', quantity: 4, lowStockThreshold: 5 },
  { id: 'inv-4', name: 'Tela Notebook 15.6" LED', quantity: 2, lowStockThreshold: 3 },
  { id: 'inv-5', name: 'Teclado USB Básico', quantity: 15, lowStockThreshold: 10 },
];

export const MOCK_ORDERS: ServiceOrder[] = [
  {
    id: 'os-001',
    client: MOCK_CLIENTS[0],
    equipment: 'Notebook Dell Inspiron 15',
    issueDescription: 'Não liga, sem sinal de energia.',
    status: OrderStatus.InProgress,
    // FIX: Corrected type to match PartUsage. Assumed quantityUsed is 1.
    partsUsed: [{ itemId: MOCK_INVENTORY[2].id, name: MOCK_INVENTORY[2].name, quantityUsed: 1 }],
    createdAt: twoDaysAgo,
    updatedAt: yesterday,
  },
  {
    id: 'os-002',
    client: MOCK_CLIENTS[1],
    equipment: 'PC Desktop Gamer',
    issueDescription: 'Lentidão extrema, possível vírus.',
    status: OrderStatus.Open,
    partsUsed: [],
    createdAt: yesterday,
    updatedAt: yesterday,
  },
  {
    id: 'os-003',
    client: MOCK_CLIENTS[0],
    equipment: 'Notebook Acer Aspire 5',
    issueDescription: 'Upgrade de SSD e memória RAM.',
    status: OrderStatus.Completed,
    // FIX: Corrected type to match PartUsage. Assumed quantityUsed is 1 for each part.
    partsUsed: [
      { itemId: MOCK_INVENTORY[0].id, name: MOCK_INVENTORY[0].name, quantityUsed: 1 },
      { itemId: MOCK_INVENTORY[1].id, name: MOCK_INVENTORY[1].name, quantityUsed: 1 }
    ],
    createdAt: twoDaysAgo,
    updatedAt: twoDaysAgo,
  },
   {
    id: 'os-004',
    client: MOCK_CLIENTS[2],
    equipment: 'Impressora HP DeskJet',
    issueDescription: 'Não está puxando o papel.',
    status: OrderStatus.Open,
    partsUsed: [],
    createdAt: today,
    updatedAt: today,
  },
];
