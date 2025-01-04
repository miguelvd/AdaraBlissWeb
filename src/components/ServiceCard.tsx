import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  path: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, path }) => {
  return (
    <Link to={path} className="block group">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-[#F25AA3] transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-3">
            {description}
          </p>
          <div className="mt-4 flex items-center text-[#F25AA3] font-medium">
            <span>Ver más</span>
            <svg
              className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};
