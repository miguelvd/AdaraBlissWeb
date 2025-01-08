import { Sparkles } from 'lucide-react';
import { WhatsAppButton } from '../../components/WhatsAppButton';

export const KeratinaJaponesa = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Keratina Japonesa
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforma tu cabello con nuestro tratamiento premium de keratina
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="/images/services/japonesa.png"
              alt="Keratina Japonesa"
              className="rounded-lg shadow-xl w-full h-auto mb-8"
            />
            <h2 className="text-2xl font-semibold mb-4">¿Qué es la Keratina Japonesa?</h2>
            <p className="text-gray-600 mb-4">
              La Keratina Japonesa es un tratamiento profesional que transforma tu cabello,
              eliminando el frizz y proporcionando un liso perfecto que puede durar hasta 6 meses.
              Este innovador tratamiento utiliza una fórmula avanzada que no solo alisa, sino que
              también fortalece y protege tu cabello.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Beneficios</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-pink-500" />
                <span className="text-gray-700">Elimina el frizz por completo</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-pink-500" />
                <span className="text-gray-700">Alisa el cabello de forma natural</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-pink-500" />
                <span className="text-gray-700">Dura hasta 6 meses</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-pink-500" />
                <span className="text-gray-700">Fortalece y repara el cabello</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-pink-500" />
                <span className="text-gray-700">Reduce el tiempo de secado</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-pink-500" />
                <span className="text-gray-700">Protege contra la humedad</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <WhatsAppButton phoneNumber="5215532118512" />
        </div>
      </div>
    </div>
  );
};

export default KeratinaJaponesa;
