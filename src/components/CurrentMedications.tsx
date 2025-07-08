import React from 'react';
import { Pill, Clock, User, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  route: string;
  prescribedBy: string;
  startDate: string;
  endDate?: string | null;
  status: 'active' | 'discontinued' | 'completed';
  indication: string;
  instructions?: string;
  refillsRemaining: number;
}

interface CurrentMedicationsProps {
  medications: Medication[];
}

export const CurrentMedications: React.FC<CurrentMedicationsProps> = ({ medications }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'discontinued':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'completed':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'discontinued':
        return <XCircle className="w-4 h-4 text-red-600" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-blue-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'discontinued':
        return 'bg-red-100 text-red-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getRefillWarning = (refills: number) => {
    if (refills === 0) return 'text-red-600';
    if (refills <= 2) return 'text-amber-600';
    return 'text-green-600';
  };

  const activeMedications = medications.filter(med => med.status === 'active');
  const inactiveMedications = medications.filter(med => med.status !== 'active');

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Current Medications</h2>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span>Active: {activeMedications.length}</span>
          <span>Total: {medications.length}</span>
        </div>
      </div>

      {activeMedications.length === 0 && inactiveMedications.length === 0 ? (
        <div className="text-center py-8">
          <Pill className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500">No medications on record</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Active Medications */}
          {activeMedications.length > 0 && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                Active Medications ({activeMedications.length})
              </h3>
              <div className="space-y-4">
                {activeMedications.map((medication) => (
                  <div
                    key={medication.id}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${getStatusColor(medication.status)}`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Pill className="w-5 h-5 text-blue-600" />
                          <h4 className="font-semibold text-lg">{medication.name}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(medication.status)}`}>
                            {medication.status.toUpperCase()}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">Dosage:</span>
                            <span className="ml-2">{medication.dosage}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Frequency:</span>
                            <span className="ml-2">{medication.frequency}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Route:</span>
                            <span className="ml-2">{medication.route}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Started:</span>
                            <span className="ml-2">{medication.startDate}</span>
                          </div>
                        </div>

                        <div className="mb-3 text-sm">
                          <span className="font-medium text-gray-700">Indication:</span>
                          <span className="ml-2">{medication.indication}</span>
                        </div>

                        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                          <User className="w-4 h-4" />
                          <span>Prescribed by: {medication.prescribedBy}</span>
                        </div>

                        {medication.instructions && (
                          <div className="bg-white bg-opacity-50 p-3 rounded border mb-3">
                            <span className="font-medium text-sm text-gray-700">Instructions:</span>
                            <p className="text-sm mt-1">{medication.instructions}</p>
                          </div>
                        )}
                      </div>

                      <div className="lg:ml-4 mt-3 lg:mt-0">
                        <div className={`flex items-center space-x-1 text-sm font-medium ${getRefillWarning(medication.refillsRemaining)}`}>
                          {medication.refillsRemaining === 0 ? (
                            <AlertCircle className="w-4 h-4" />
                          ) : (
                            <Clock className="w-4 h-4" />
                          )}
                          <span>
                            {medication.refillsRemaining} refill{medication.refillsRemaining !== 1 ? 's' : ''} remaining
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Inactive Medications */}
          {inactiveMedications.length > 0 && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <XCircle className="w-5 h-5 text-gray-600 mr-2" />
                Previous Medications ({inactiveMedications.length})
              </h3>
              <div className="space-y-3">
                {inactiveMedications.map((medication) => (
                  <div
                    key={medication.id}
                    className={`p-3 rounded-lg border transition-all duration-200 ${getStatusColor(medication.status)}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(medication.status)}
                        <div>
                          <h4 className="font-medium">{medication.name}</h4>
                          <p className="text-sm text-gray-600">
                            {medication.dosage} • {medication.frequency} • {medication.indication}
                          </p>
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        <p>{medication.startDate} - {medication.endDate || 'Ongoing'}</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(medication.status)}`}>
                          {medication.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};