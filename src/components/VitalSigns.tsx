import React from 'react';
import { Heart, Thermometer, Activity, Droplets } from 'lucide-react';

interface VitalSign {
  id: string;
  name: string;
  value: string;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  normalRange: string;
  timestamp: string;
  icon: React.ReactNode;
}

interface VitalSignsProps {
  vitals: VitalSign[];
}

export const VitalSigns: React.FC<VitalSignsProps> = ({ vitals }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'warning':
        return 'bg-amber-50 border-amber-200 text-amber-800';
      case 'critical':
        return 'bg-red-50 border-red-200 text-red-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'normal':
        return 'bg-green-100 text-green-800';
      case 'warning':
        return 'bg-amber-100 text-amber-800';
      case 'critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Vital Signs</h2>
        <span className="text-xs sm:text-sm text-gray-500">Last updated: {vitals[0]?.timestamp}</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {vitals.map((vital) => (
          <div
            key={vital.id}
            className={`p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${getStatusColor(vital.status)}`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0">
                  {vital.icon}
                </div>
                <span className="font-medium text-xs sm:text-sm truncate">{vital.name}</span>
              </div>
              <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium ${getStatusBadge(vital.status)}`}>
                <span className="hidden sm:inline">{vital.status.toUpperCase()}</span>
                <span className="sm:hidden">
                  {vital.status === 'normal' ? '✓' : vital.status === 'warning' ? '⚠' : '⚠'}
                </span>
              </span>
            </div>
            
            <div className="mb-2">
              <span className="text-xl sm:text-2xl font-bold">{vital.value}</span>
              <span className="text-xs sm:text-sm text-gray-600 ml-1">{vital.unit}</span>
            </div>
            
            <div className="text-xs text-gray-500">
              Normal: {vital.normalRange}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};