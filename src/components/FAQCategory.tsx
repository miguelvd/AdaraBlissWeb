import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string | string[];
}

interface FAQCategoryProps {
  title: string;
  description: string;
  items: FAQItem[];
  isOpen: boolean;
  onToggle: () => void;
  id?: string;
}

const FAQCategory: React.FC<FAQCategoryProps> = ({
  title,
  description,
  items,
  isOpen,
  onToggle,
  id
}) => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-6 flex items-start justify-between bg-[#F25AA3] hover:bg-pink-500 transition-colors duration-200 text-white"
      >
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-left mb-1">{title}</h3>
          <p className="text-sm md:text-base text-pink-100 text-left">{description}</p>
        </div>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 ml-4 flex-shrink-0">
          {isOpen ? (
            <Minus className="w-5 h-5 text-white" />
          ) : (
            <Plus className="w-5 h-5 text-white" />
          )}
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="p-4 space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-pink-100 hover:border-pink-200 transition-colors"
            >
              <button
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-gray-800 font-medium flex-1 faq-question">
                  {item.question}
                </span>
                <div className={`w-6 h-6 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                  openQuestionIndex === index ? 'transform rotate-180' : ''
                }`}>
                  {openQuestionIndex === index ? (
                    <Minus className="w-5 h-5 text-[#F25AA3]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#F25AA3]" />
                  )}
                </div>
              </button>
              <div
                className={`transition-all duration-200 ease-in-out faq-answer-container ${
                  openQuestionIndex === index ? 'block' : 'hidden'
                }`}
              >
                <div className="px-5 pb-4 text-gray-600 faq-answer">
                  {Array.isArray(item.answer) ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {item.answer.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    item.answer.split('\n').map((line, i) => (
                      <p key={i} className="mb-2">
                        {line}
                      </p>
                    ))
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQCategory;
