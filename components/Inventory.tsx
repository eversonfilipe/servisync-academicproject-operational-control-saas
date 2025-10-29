
import React, { useState } from 'react';
import Card from './common/Card';
import Icon from './common/Icon';
import Modal from './common/Modal';
import { InventoryItem } from '../types';
import { AppData } from '../hooks/useMockData';

const InventoryForm: React.FC<{ item?: InventoryItem | null; onSave: (item: any) => void; onCancel: () => void }> = ({ item, onSave, onCancel }) => {
  const [name, setName] = useState(item?.name || '');
  const [quantity, setQuantity] = useState(item?.quantity || 0);
  const [lowStockThreshold, setLowStockThreshold] = useState(item?.lowStockThreshold || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...item, name, quantity: Number(quantity), lowStockThreshold: Number(lowStockThreshold) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome do Item</label>
          <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantidade</label>
                <input type="number" id="quantity" value={quantity} onChange={e => setQuantity(Number(e.target.value))} required min="0" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div>
                <label htmlFor="lowStock" className="block text-sm font-medium text-gray-700">Alerta de Estoque Baixo</label>
                <input type="number" id="lowStock" value={lowStockThreshold} onChange={e => setLowStockThreshold(Number(e.target.value))} required min="0" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
        </div>
      </div>
       <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 mt-6 -mx-6 -mb-6">
          <button type="button" onClick={onCancel} className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
              Cancelar
          </button>
          <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Salvar Item
          </button>
      </div>
    </form>
  );
};


const Inventory: React.FC<{ data: AppData }> = ({ data }) => {
  const { inventory, actions } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);

  const handleOpenModal = (item: InventoryItem | null = null) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleSave = (itemData: InventoryItem) => {
    if (itemData.id) {
      actions.updateItem(itemData);
    } else {
      actions.addItem(itemData);
    }
    handleCloseModal();
  };

  return (
    <Card>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Controle de Estoque</h2>
        <button
          onClick={() => handleOpenModal()}
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Icon name="plus" className="w-5 h-5 mr-2" />
          Adicionar Item
        </button>
      </div>

       <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantidade</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Editar</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inventory.length > 0 ? inventory.map((item) => {
              const isLowStock = item.quantity <= item.lowStockThreshold;
              return (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{item.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.quantity}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                   {isLowStock ? (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Estoque Baixo
                    </span>
                   ) : (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Em Estoque
                    </span>
                   )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => handleOpenModal(item)} className="text-blue-600 hover:text-blue-900">
                    <Icon name="edit" className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            )}) : (
                <tr>
                    <td colSpan={4} className="text-center py-10 text-gray-500">
                        <p>Nenhum item no estoque.</p>
                        <p className="text-sm">Clique em "Adicionar Item" para começar a controlar seu estoque.</p>
                    </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={editingItem ? 'Editar Item' : 'Adicionar Item ao Estoque'}>
        <InventoryForm item={editingItem} onSave={handleSave} onCancel={handleCloseModal} />
      </Modal>
    </Card>
  );
};

export default Inventory;