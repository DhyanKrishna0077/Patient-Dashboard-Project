import React from 'react';
import { User, Clock, AlertTriangle, CheckCircle, Activity } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  age: number;
  mrn: string;
  status: 'active' | 'critical' | 'stable' | 'monitoring' | 'discharged';
  lastVisit: string;
}

interface PatientListProps {
  patients: Patient[];
  selectedPatientId: string;
  onSelectPatient: (patientId: string) => void;
}

export const PatientList: React.FC<PatientListProps> = ({ 
  patients, 
  selectedPatientId, 
  onSelectPatient 
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'active':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'monitoring':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'stable':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'discharged':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'critical':
        return <AlertTriangle className="w-4 h-4" />;
      case 'active':
        return <Activity className="w-4 h-4" />;
      case 'monitoring':
        return <Clock className="w-4 h-4" />;
      case 'stable':
        return <CheckCircle className="w-4 h-4" />;
      case 'discharged':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <User className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Patient List</h2>
      
      <div className="space-y-3">
        {patients.map((patient) => (
          <div
            key={patient.id}
            onClick={() => onSelectPatient(patient.id)}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
              selectedPatientId === patient.id 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{patient.name}</h3>
                  <p className="text-sm text-gray-600">MRN: {patient.mrn}</p>
                  <p className="text-xs text-gray-500">Age: {patient.age} • Last visit: {patient.lastVisit}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center space-x-1 ${getStatusColor(patient.status)}`}>
                  {getStatusIcon(patient.status)}
                  <span className="capitalize">{patient.status}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};