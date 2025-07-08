import React from 'react';
import { Clock, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface Diagnosis {
  id: string;
  condition: string;
  date: string;
  severity: 'mild' | 'moderate' | 'severe';
  status: 'active' | 'resolved' | 'chronic';
  physician: string;
  notes?: string;
}

interface DiagnosisHistoryProps {
  diagnoses: Diagnosis[];
}

export const DiagnosisHistory: React.FC<DiagnosisHistoryProps> = ({ diagnoses }) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'mild':
        return 'bg-green-100 text-green-800';
      case 'moderate':
        return 'bg-amber-100 text-amber-800';
      case 'severe':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <AlertTriangle className="w-4 h-4 text-amber-600" />;
      case 'resolved':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'chronic':
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'border-l-amber-500';
      case 'resolved':
        return 'border-l-green-500';
      case 'chronic':
        return 'border-l-red-500';
      default:
        return 'border-l-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Diagnosis History</h2>
      
      <div className="space-y-4">
        {diagnoses.map((diagnosis, index) => (
          <div
            key={diagnosis.id}
            className={`p-4 border-l-4 bg-gray-50 rounded-r-lg transition-all duration-200 hover:shadow-md ${getStatusColor(diagnosis.status)}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                {getStatusIcon(diagnosis.status)}
                <h3 className="font-semibold text-gray-900">{diagnosis.condition}</h3>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(diagnosis.severity)}`}>
                  {diagnosis.severity.toUpperCase()}
                </span>
                <span className="text-sm text-gray-500">{diagnosis.date}</span>
              </div>
            </div>
            
            <div className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Physician:</span> {diagnosis.physician}
            </div>
            
            {diagnosis.notes && (
              <div className="text-sm text-gray-700 bg-white p-3 rounded border">
                <span className="font-medium">Notes:</span> {diagnosis.notes}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};