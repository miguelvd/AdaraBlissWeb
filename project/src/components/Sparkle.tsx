import React from 'react';

interface SparkleProps {
  color?: string;
  size?: number;
  style?: React.CSSProperties;
}

export const Sparkle: React.FC<SparkleProps> = ({ 
  color = '#FFF', 
  size = 20,
  style 
}) => {
  return (
    <div 
      className="absolute animate-sparkle pointer-events-none"
      style={{
        width: size,
        height: size,
        ...style
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
          fill={color}
        />
      </svg>
    </div>
  );
};