import React, { useState, useMemo } from 'react';
import Card from './common/Card';
import Icon from './common/Icon';
import Modal from './common/Modal';
import { ServiceOrder, OrderStatus, Client, InventoryItem, PartUsage } from '../types';
import { useAppContext } from '../context/AppContext';

/**
 * @interface ServiceOrderFormProps
 * @description Defines props for the ServiceOrderForm component.
 */
interface ServiceOrderFormProps {
  order?: ServiceOrder | null;
  clients: Client[];
  inventory: InventoryItem[];
  onSave: (order: any) => void;
  onCancel: () => void;
}

/**
 * Renders a form for creating or editing a service order.
 * @param {ServiceOrderFormProps} props - The props for the component.
 * @returns {JSX.Element} The rendered form.
 */
const ServiceOrderForm: React.FC<ServiceOrderFormProps> = ({ order, clients, inventory, onSave, onCancel }) => {
  const [clientId, setClientId] = useState(order?.client.id || '');
  const [equipment, setEquipment] = useState(order?.equipment || '');
  const [issueDescription, setIssueDescription] = useState(order?.issueDescription || '');
  const [status, setStatus] = useState(order?.status || OrderStatus.Open);
  const [partsUsed, setPartsUsed] = useState<PartUsage[]>(order?.partsUsed || []);
  
  // State for adding a new part
  const [selectedPartId, setSelectedPartId] = useState<string>('');
  const [partQuantity, setPartQuantity] = useState<number>(1);
  const [error, setError] = useState<string>('');

  const availableInventory = useMemo(() => {
    const usedIds = new Set(partsUsed.map(p => p.itemId));
    return inventory.filter(i => !usedIds.has(i.id));
  }, [inventory, partsUsed]);

  /** Handles adding a selected part to the service order. */
  const handleAddPart = () => {
    const partToAdd = inventory.find(i => i.id === selectedPartId);
    if (!partToAdd || partQuantity <= 0) {
        setError("Selecione uma peça válida e quantidade maior que zero.");
        return;
    }
    
    // Check against available stock
    const originalStock = inventory.find(i => i.id === partToAdd.id)?.quantity || 0;
    if (originalStock < partQuantity) {
        setError(`Estoque insuficiente. Disponível: ${originalStock}`);
        return;
    }

    setPartsUsed([...partsUsed, { itemId: partToAdd.id, name: partToAdd.name, quantityUsed: partQuantity }]);
    setSelectedPartId('');
    setPartQuantity(1);
    setError('');
  };

  /**
   * Handles removing a part from the service order.
   * @param {string} itemId - The ID of the item to remove.
   */
  const handleRemovePart = (itemId: string) => {
    setPartsUsed(partsUsed.filter(p => p.itemId !== itemId));
  };

  /** Handles the form submission. */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const client = clients.find(c => c.id === clientId);
    if (client) {
      onSave({ ...order, client, equipment, issueDescription, status, partsUsed });
    }
  };

  return (
     <form onSubmit={handleSubmit}>
      <div className="space-y-4">
         <div>
            <label htmlFor="client" className="block text-sm font-medium text-gray-700">Cliente</label>
            <select id="client" value={clientId} onChange={e => setClientId(e.target.value)} required className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                <option value="" disabled>Selecione um cliente</option>
                {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
        </div>
         <div>
            <label htmlFor="equipment" className="block text-sm font-medium text-gray-700">Equipamento</label>
            <input type="text" id="equipment" value={equipment} onChange={e => setEquipment(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <div>
            <label htmlFor="issue" className="block text-sm font-medium text-gray-700">Descrição do Problema</label>
            <textarea id="issue" value={issueDescription} onChange={e => setIssueDescription(e.target.value)} required rows={3} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
        </div>
        
        {/* Parts Section */}
        <div className="space-y-2 pt-4 border-t">
            <h4 className="text-sm font-medium text-gray-700">Peças Utilizadas</h4>
            {partsUsed.map(part => (
                <div key={part.itemId} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                    <div>
                        <p className="text-sm font-medium">{part.name}</p>
                        <p className="text-xs text-gray-500">Quantidade: {part.quantityUsed}</p>
                    </div>
                    <button type="button" onClick={() => handleRemovePart(part.itemId)} className="text-red-500 hover:text-red-700" aria-label={`Remove ${part.name}`}>
                        <Icon name="x" className="w-4 h-4" />
                    </button>
                </div>
            ))}
             <div className="flex items-end gap-2 pt-2">
                <div className="flex-grow">
                     <label htmlFor="part-select" className="block text-xs font-medium text-gray-600">Adicionar Peça</label>
                    <select id="part-select" value={selectedPartId} onChange={e => setSelectedPartId(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                        <option value="" disabled>Selecione...</option>
                        {availableInventory.map(i => <option key={i.id} value={i.id}>{i.name} (Estoque: {i.quantity})</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="part-quantity" className="block text-xs font-medium text-gray-600">Qtd.</label>
                    <input type="number" id="part-quantity" value={partQuantity} onChange={e => setPartQuantity(Number(e.target.value))} min="1" className="mt-1 block w-20 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <button type="button" onClick={handleAddPart} className="px-4 py-2 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-md text-sm font-medium">Adicionar</button>
            </div>
            {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
        </div>

        <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
            <select id="status" value={status} onChange={e => setStatus(e.target.value as OrderStatus)} required className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                {Object.values(OrderStatus).map(s => <option key={s} value={s}>{s}</option>)}
            </select>
        </div>
      </div>
      <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 mt-6 -mx-6 -mb-6">
          <button type="button" onClick={onCancel} className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
              Cancelar
          </button>
          <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Salvar Ordem
          </button>
      </div>
    </form>
  );
};

/**
 * Renders a compact card for a single service order.
 * @param {object} props - Component props.
 * @param {ServiceOrder} props.order - The service order to display.
 * @param {(order: ServiceOrder) => void} props.onEdit - Callback to edit the order.
 * @returns {JSX.Element} The rendered OrderCard.
 */
const OrderCard: React.FC<{ order: ServiceOrder; onEdit: (order: ServiceOrder) => void }> = ({ order, onEdit }) => (
    <Card className="mb-4">
        <div className="flex justify-between items-start">
            <div>
                <p className="font-bold text-gray-800">{order.equipment}</p>
                <p className="text-sm text-gray-600">{order.client.name}</p>
                <p className="text-xs text-gray-400 mt-1">OS #{order.id.split('-')[1]}</p>
            </div>
            <button onClick={() => onEdit(order)} className="text-gray-400 hover:text-blue-600" aria-label={`Edit order ${order.id}`}>
                <Icon name="edit" className="w-4 h-4" />
            </button>
        </div>
        <p className="text-sm text-gray-700 mt-2">{order.issueDescription}</p>
        {order.partsUsed.length > 0 && (
            <div className="mt-3 pt-2 border-t border-gray-200">
                <h5 className="text-xs font-semibold text-gray-500">Peças:</h5>
                <ul className="text-xs text-gray-600 list-disc list-inside">
                    {order.partsUsed.map(p => <li key={p.itemId}>{p.quantityUsed}x {p.name}</li>)}
                </ul>
            </div>
        )}
        <div className="text-xs text-gray-500 mt-3 text-right">
            Atualizado em: {new Date(order.updatedAt).toLocaleDateString('pt-BR')}
        </div>
    </Card>
);

/**
 * Renders the service order management page, displaying orders in a Kanban-style board.
 * @returns {JSX.Element} The rendered ServiceOrders page component.
 */
const ServiceOrders: React.FC = () => {
  const { orders, clients, inventory, actions, isLoading } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingOrder, setEditingOrder] = useState<ServiceOrder | null>(null);

  /**
   * Opens the modal to add or edit a service order.
   * @param {ServiceOrder | null} [order=null] - The order to edit, or null to add a new one.
   */
  const handleOpenModal = (order: ServiceOrder | null = null) => {
    setEditingOrder(order);
    setIsModalOpen(true);
  };
  
  /** Closes the service order form modal. */
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingOrder(null);
  };

  /**
   * Saves service order data from the form.
   * @param {ServiceOrder} orderData - The order data from the form.
   */
  const handleSave = (orderData: ServiceOrder) => {
    if (orderData.id) {
      actions.updateOrder(orderData);
    } else {
      actions.addOrder(orderData);
    }
    handleCloseModal();
  };

  // Group orders by status for Kanban columns
  const columns: { title: OrderStatus; orders: ServiceOrder[]; color: string }[] = [
    { title: OrderStatus.Open, orders: orders.filter(o => o.status === OrderStatus.Open), color: 'amber' },
    { title: OrderStatus.InProgress, orders: orders.filter(o => o.status === OrderStatus.InProgress), color: 'blue' },
    { title: OrderStatus.Completed, orders: orders.filter(o => o.status === OrderStatus.Completed), color: 'green' },
  ];
  
  return (
    <div>
       <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Ordens de Serviço</h2>
        <button
          onClick={() => handleOpenModal()}
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Icon name="plus" className="w-5 h-5 mr-2" />
          Nova Ordem
        </button>
      </div>

      {isLoading ? (
        <div className="text-center py-10">Carregando ordens...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map(col => (
            <div key={col.title} className="bg-gray-100 rounded-lg p-4">
              <h3 className={`font-semibold text-lg mb-4 text-${col.color}-600 border-b-2 border-${col.color}-500 pb-2`}>
                {col.title} ({col.orders.length})
              </h3>
              <div className="min-h-[200px]">
                {col.orders.length > 0 ? 
                  col.orders.sort((a,b) => b.updatedAt.getTime() - a.updatedAt.getTime()).map(order => <OrderCard key={order.id} order={order} onEdit={handleOpenModal} />)
                  : <p className="text-center text-sm text-gray-500 pt-10">Nenhuma ordem aqui.</p>
                }
              </div>
            </div>
          ))}
        </div>
      )}
      
       <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={editingOrder ? 'Editar Ordem de Serviço' : 'Nova Ordem de Serviço'}>
        <ServiceOrderForm order={editingOrder} clients={clients} inventory={inventory} onSave={handleSave} onCancel={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default ServiceOrders;
