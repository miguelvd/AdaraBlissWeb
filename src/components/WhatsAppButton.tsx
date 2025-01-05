import React from 'react';
import { useLocation } from 'react-router-dom';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  hideInServices?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber,
  message = "¡Hola! Me gustaría agendar una cita para un alisado.",
  hideInServices = false,
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  // No mostrar el botón si estamos en la página de servicios, hideInServices es true y estamos en móvil
  if (isMobile && hideInServices && (currentPath.includes('/servicios') || currentPath === '/servicios')) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 hover:scale-105 transition-all duration-300 animate-float"
      aria-label="Chatear por WhatsApp"
    >
      <svg 
        className="w-16 h-16"
        viewBox="0 0 512 512" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <linearGradient id="shape_3_1_" gradientUnits="userSpaceOnUse" x1="255.998" x2="255.998" y1="503.141" y2="8.866">
          <stop offset="0" stopColor="#20b038"/>
          <stop offset="1" stopColor="#60d66a"/>
        </linearGradient>
        <g id="whatsapp">
          <path fill="url(#shape_3_1_)" d="M408.028 253.821c0 85.027-69.368 153.941-154.912 153.941-27.165 0-52.713-6.969-74.912-19.211l-85.759 27.211 27.759-82.393c-13.355-23.295-21.001-50.324-21.001-79.548 0-85.027 69.368-153.941 154.912-153.941 85.545.001 154.913 68.914 154.913 153.941"/>
          <path fill="#fff" d="M309.712 278.547c-3.679-1.859-21.725-10.711-25.099-11.937-3.373-1.227-5.832-1.843-8.289 1.843-2.459 3.686-9.522 11.937-11.677 14.403-2.154 2.443-4.306 2.76-7.985.9-3.679-1.859-15.53-5.729-29.577-18.266-10.931-9.756-18.311-21.801-20.465-25.487-2.154-3.686-.23-5.679 1.62-7.512 1.662-1.661 3.679-4.315 5.523-6.473 1.843-2.158 2.459-3.686 3.686-6.145 1.227-2.459.614-4.602-.307-6.461-.92-1.859-8.289-19.958-11.37-27.335-2.995-7.174-6.034-6.211-8.289-6.327-2.154-.115-4.613-.139-7.072-.139s-6.458.92-9.831 4.606c-3.373 3.686-12.895 12.583-12.895 30.682s13.202 35.599 15.046 38.058c1.843 2.459 25.986 39.669 62.944 55.625 8.79 3.792 15.657 6.062 21.01 7.754 8.831 2.805 16.871 2.411 23.219 1.46 7.085-1.058 21.725-8.885 24.791-17.48 3.066-8.595 3.066-15.969 2.154-17.511-.92-1.542-3.373-2.459-7.052-4.318z"/>
        </g>
      </svg>
    </button>
  );
};