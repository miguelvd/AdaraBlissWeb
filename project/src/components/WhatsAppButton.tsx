import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber,
  message = "¡Hola! Me gustaría agendar una cita para un alisado."
}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5C] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center gap-2 group"
      aria-label="Chatear por WhatsApp"
    >
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 175.216 175.552"
      >
        <defs>
          <linearGradient id="a" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#57d163"/>
            <stop offset="1" stopColor="#23b33a"/>
          </linearGradient>
        </defs>
        <path fill="#fff" d="M87.608 175.552c48.384 0 87.608-39.224 87.608-87.608C175.216 39.568 135.984.336 87.608.336 39.224.336 0 39.568 0 87.944c0 48.384 39.224 87.608 87.608 87.608"/>
        <path fill="#fff" d="M87.608 175.552c48.384 0 87.608-39.224 87.608-87.608C175.216 39.568 135.984.336 87.608.336 39.224.336 0 39.568 0 87.944c0 48.384 39.224 87.608 87.608 87.608Z"/>
        <path fill="url(#a)" d="M87.608 163.96c42 0 76.016-34.016 76.016-76.016S129.608 11.928 87.608 11.928 11.592 45.944 11.592 87.944s34.016 76.016 76.016 76.016"/>
        <path fill="#fff" d="M87.608 39.568C61.48 39.568 40.12 60.928 40.12 87.056c0 9.024 2.576 17.384 6.832 24.552L40.12 138.24l27.72-6.832c7.168 4.256 15.528 6.832 24.552 6.832 26.128 0 47.488-21.36 47.488-47.488 0-26.128-21.36-47.488-47.488-47.488zm0 86.824c-8.168 0-15.752-2.4-22.168-6.656l-15.528 3.856 3.856-15.528c-4.256-6.416-6.656-14-6.656-22.168 0-21.784 17.808-39.592 39.592-39.592s39.592 17.808 39.592 39.592-17.808 39.592-39.592 39.592z"/>
      </svg>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
        Chatea con nosotros
      </span>
    </button>
  );
};