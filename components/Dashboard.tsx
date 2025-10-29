import React from 'react';
import Card from './common/Card';
import Icon from './common/Icon';
import { OrderStatus } from '../types';
import type { View } from '../App';
import { useAppContext } from '../context/AppContext';

interface DashboardProps {
  setView: (view: View) => void;
}

const StatCard: React.FC<{ title: string; value: string | number; icon: string; iconBgColor: string; onClick?: () => void }> = ({ title, value, icon, iconBgColor, onClick }) => (
  <Card className={`hover:shadow-lg transition-shadow ${onClick ? 'cursor-pointer' : ''}`} onClick={onClick}>
    <div className="flex items-center">
      <div className={`p-3 rounded-full ${iconBgColor}`}>
        <Icon name={icon} className="w-6 h-6 text-white" />
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-500 truncate">{title}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  </Card>
);

const LoadingSkeleton: React.FC = () => (
    <div className="space-y-6 animate-pulse">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="h-24 bg-gray-200 rounded-lg"></div>
            <div className="h-24 bg-gray-200 rounded-lg"></div>
            <div className="h-24 bg-gray-200 rounded-lg"></div>
            <div className="h-24 bg-gray-200 rounded-lg"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 h-80 bg-gray-200 rounded-lg"></div>
            <div className="h-80 bg-gray-200 rounded-lg"></div>
        </div>
    </div>
);


const Dashboard: React.FC<DashboardProps> = ({ setView }) => {
  const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = (window as any).Recharts || {};
  
  const { orders, clients, inventory, isLoading } = useAppContext();

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  const openOrders = orders.filter(o => o.status === OrderStatus.Open).length;
  const inProgressOrders = orders.filter(o => o.status === OrderStatus.InProgress).length;
  const lowStockItems = inventory.filter(i => i.quantity <= i.lowStockThreshold).length;

  const chartData = [
    { name: 'Abertas', value: openOrders, fill: '#f59e0b' },
    { name: 'Em Andamento', value: inProgressOrders, fill: '#3b82f6' },
    { name: 'Concluídas', value: orders.filter(o => o.status === OrderStatus.Completed).length, fill: '#10b981' },
  ];
  
  const recentOrders = [...orders].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Ordens Abertas" value={openOrders} icon="orders" iconBgColor="bg-amber-500" onClick={() => setView('orders')} />
        <StatCard title="Total de Clientes" value={clients.length} icon="clients" iconBgColor="bg-sky-500" onClick={() => setView('clients')} />
        <StatCard title="Itens com Estoque Baixo" value={lowStockItems} icon="alert" iconBgColor="bg-red-500" onClick={() => setView('inventory')} />
        <StatCard title="Ordens em Andamento" value={inProgressOrders} icon="clock" iconBgColor="bg-blue-500" onClick={() => setView('orders')} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2" title="Visão Geral das Ordens de Serviço">
            {BarChart ? (
              <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
                      <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis allowDecimals={false} />
                          <Tooltip wrapperClassName="!bg-white !border !border-gray-200 !rounded-md !shadow-lg" />
                          <Legend />
                          <Bar dataKey="value" name="Ordens" />
                      </BarChart>
                  </ResponsiveContainer>
              </div>
            ) : (
              <div style={{ width: '100%', height: 300 }} className="flex items-center justify-center text-gray-500">
                Carregando gráfico...
              </div>
            )}
        </Card>
        
        <Card title="Atividade Recente">
            {recentOrders.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                    {recentOrders.map(order => (
                    <li key={order.id} className="py-3">
                        <div className="flex items-center space-x-3">
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                            OS #{order.id.split('-')[1]}: {order.equipment}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                            {order.client.name}
                            </p>
                        </div>
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            order.status === OrderStatus.Open ? 'bg-amber-100 text-amber-800' :
                            order.status === OrderStatus.InProgress ? 'bg-blue-100 text-blue-800' :
                            'bg-green-100 text-green-800'
                        }`}>
                            {order.status}
                        </span>
                        </div>
                    </li>
                    ))}
                </ul>
            ) : (
                <div className="text-center py-10 text-gray-500">
                    <p>Nenhuma atividade recente.</p>
                    <p className="text-sm">Crie uma nova Ordem de Serviço para começar.</p>
                </div>
            )}
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
