import React from 'react';
import { AlertTriangle, Shield, Clock } from 'lucide-react';

interface Allergy {
  id: string;
  allergen: string;
  severity: 'mild' | 'moderate' | 'severe';
  reaction: string;
  dateIdentified: string;
  notes?: string;
}

interface AllergiesProps {
  allergies: Allergy[];
}

export const Allergies: React.FC<AllergiesProps> = ({ allergies }) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'mild':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'moderate':
        return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'severe':
        return 'bg-red-50 border-red-200 text-red-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'severe':
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case 'moderate':
        return <Shield className="w-5 h-5 text-orange-600" />;
      case 'mild':
        return <Shield className="w-5 h-5 text-yellow-600" />;
      default:
        return <Shield className="w-5 h-5 text-gray-600" />;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'mild':
        return 'bg-yellow-100 text-yellow-800';
      case 'moderate':
        return 'bg-orange-100 text-orange-800';
      case 'severe':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (allergies.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Allergies</h2>
        <div className="text-center py-8">
          <Shield className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500">No known allergies on record</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Allergies</h2>
        <span className="text-sm text-gray-500">{allergies.length} known allergies</span>
      </div>
      
      <div className="space-y-4">
        {allergies.map((allergy) => (
          <div
            key={allergy.id}
            className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${getSeverityColor(allergy.severity)}`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                {getSeverityIcon(allergy.severity)}
                <div>
                  <h3 className="font-semibold text-lg">{allergy.allergen}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityBadge(allergy.severity)}`}>
                      {allergy.severity.toUpperCase()}
                    </span>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Clock className="w-3 h-3" />
                      <span>Identified: {allergy.dateIdentified}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-3">
              <h4 className="font-medium text-sm text-gray-700 mb-1">Reaction:</h4>
              <p className="text-sm">{allergy.reaction}</p>
            </div>
            
            {allergy.notes && (
              <div className="bg-white bg-opacity-50 p-3 rounded border">
                <h4 className="font-medium text-sm text-gray-700 mb-1">Notes:</h4>
                <p className="text-sm">{allergy.notes}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};