import React from 'react';
import { Activity, FileText } from 'lucide-react';

interface NavigationProps {
  currentPage: 'overview' | 'detail';
  onPageChange: (page: 'overview' | 'detail') => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  return (
    <div className="bg-white border-b border-gray-200 mb-4 sm:mb-6 rounded-t-lg shadow-sm">
      <div className="flex">
        <button
          onClick={() => onPageChange('overview')}
          className={`flex-1 sm:flex-none flex items-center justify-center sm:justify-start space-x-2 px-4 sm:px-6 py-3 sm:py-4 border-b-2 font-medium text-sm sm:text-base transition-all duration-200 ${
            currentPage === 'overview'
              ? 'border-blue-500 text-blue-600 bg-blue-50'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
          }`}
        >
          <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Overview</span>
        </button>
        
        <button
          onClick={() => onPageChange('detail')}
          className={`flex-1 sm:flex-none flex items-center justify-center sm:justify-start space-x-2 px-4 sm:px-6 py-3 sm:py-4 border-b-2 font-medium text-sm sm:text-base transition-all duration-200 ${
            currentPage === 'detail'
              ? 'border-blue-500 text-blue-600 bg-blue-50'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
          }`}
        >
          <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Detail</span>
        </button>
      </div>
    </div>
  );
};