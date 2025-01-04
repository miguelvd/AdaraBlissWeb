import React from 'react';
import { Sparkle } from './Sparkle';

interface SparkleGroupProps {
  className?: string;
}

export const SparkleGroup: React.FC<SparkleGroupProps> = ({ className }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <Sparkle 
        color="#FFF"
        size={25}
        style={{ top: '10%', right: '25%', animationDelay: '0.3s' }} 
      />
      <Sparkle 
        color="#F25AA3"
        size={40}
        style={{ top: '85%', left: '15%', animationDelay: '0.7s' }} 
      />
      <Sparkle 
        color="#FFF"
        size={35}
        style={{ top: '75%', right: '20%', animationDelay: '1.1s' }} 
      />
      <Sparkle 
        color="#FFF"
        size={38}
        style={{ top: '5%', left: '20%', animationDelay: '1.8s' }} 
      />
    </div>
  );
};