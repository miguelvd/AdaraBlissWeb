import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, setRating }) => {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => setRating(star)}
          className="transition-transform hover:scale-110 focus:outline-none"
        >
          <Star
            className={`w-8 h-8 ${
              star <= rating
                ? 'fill-[#F25AA3] text-[#F25AA3]'
                : 'text-gray-300'
            } transition-colors`}
          />
        </button>
      ))}
    </div>
  );
};