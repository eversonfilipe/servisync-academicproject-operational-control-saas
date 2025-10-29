
import React, { useState } from 'react';
import Modal from './common/Modal';
import Icon from './common/Icon';

interface OnboardingGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

const guideSteps = [
  {
    icon: 'dashboard',
    title: 'Bem-vindo ao ServiSync!',
    content: 'Este é o seu Painel de Controle. Aqui você terá uma visão geral e rápida do seu negócio: ordens de serviço, clientes e estoque.'
  },
  {
    icon: 'clients',
    title: 'Cadastro de Clientes',
    content: 'Mantenha todos os dados dos seus clientes organizados em um só lugar. Adicione, edite e consulte informações facilmente.'
  },
  {
    icon: 'orders',
    title: 'Ordens de Serviço (OS)',
    content: 'Acompanhe todas as suas OS de forma visual e intuitiva. Saiba o que está aberto, em andamento e o que já foi concluído.'
  },
  {
    icon: 'inventory',
    title: 'Controle de Estoque',
    content: 'Gerencie as peças e produtos mais importantes do seu negócio. Saiba quando é hora de comprar mais e evite surpresas.'
  },
  {
    icon: 'checkCircle',
    title: 'Tudo pronto!',
    content: 'Você está pronto para começar a organizar sua operação. Clique em "Concluir" e explore o ServiSync.'
  }
];

const OnboardingGuide: React.FC<OnboardingGuideProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) {
    return null;
  }

  const step = guideSteps[currentStep];
  const isLastStep = currentStep === guideSteps.length - 1;

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentStep(prev => prev + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 sm:p-8 text-center">
        
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
          <Icon name={step.icon} className="h-8 w-8" />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h2>
        <p className="text-gray-600 mb-6">{step.content}</p>

        <div className="flex justify-center items-center space-x-2 mb-6">
          {guideSteps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentStep ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            {currentStep > 0 && !isLastStep ? (
                 <button 
                    onClick={handlePrev} 
                    className="w-full sm:w-auto text-gray-600 font-medium py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                >
                    Anterior
                </button>
            ) : <div className="hidden sm:block sm:w-auto" /> /* Placeholder */}
           
            <button 
                onClick={handleNext}
                className="w-full sm:w-auto text-white bg-blue-600 hover:bg-blue-700 font-medium py-2 px-6 rounded-md transition-colors shadow-sm"
            >
                {isLastStep ? 'Concluir' : 'Próximo'}
            </button>
        </div>
        
      </div>
    </div>
  );
};

export default OnboardingGuide;
