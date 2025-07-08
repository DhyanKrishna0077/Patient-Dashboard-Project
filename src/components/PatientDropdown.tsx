import React, { useState, useRef, useEffect } from 'react';
import { User, ChevronDown, Activity, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  age: number;
  mrn: string;
  status: 'active' | 'critical' | 'stable' | 'monitoring' | 'discharged';
  lastVisit: string;
}

interface PatientDropdownProps {
  patients: Patient[];
  selectedPatientId: string;
  onSelectPatient: (patientId: string) => void;
}

export const PatientDropdown: React.FC<PatientDropdownProps> = ({ 
  patients, 
  selectedPatientId, 
  onSelectPatient 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedPatient = patients.find(p => p.id === selectedPatientId);

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
        return <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'active':
        return <Activity className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'monitoring':
        return <Clock className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'stable':
        return <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />;
      case 'discharged':
        return <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />;
      default:
        return <User className="w-3 h-3 sm:w-4 sm:h-4" />;
    }
  };

  const handleSelectPatient = (patientId: string) => {
    onSelectPatient(patientId);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full sm:w-auto" ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center space-x-2 sm:space-x-3 bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:min-w-[280px]"
      >
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <User className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
        </div>
        <div className="flex-1 text-left min-w-0">
          <div className="font-medium text-gray-900 text-sm sm:text-base truncate">{selectedPatient?.name}</div>
          <div className="text-xs sm:text-sm text-gray-500 truncate">MRN: {selectedPatient?.mrn}</div>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
          {selectedPatient && (
            <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium border flex items-center space-x-1 ${getStatusColor(selectedPatient.status)}`}>
              {getStatusIcon(selectedPatient.status)}
              <span className="capitalize hidden sm:inline">{selectedPatient.status}</span>
            </span>
          )}
          <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-full sm:w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 sm:max-h-96 overflow-y-auto">
          <div className="p-3 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Select Patient</h3>
            <p className="text-xs sm:text-sm text-gray-500">{patients.length} patients available</p>
          </div>
          
          <div className="py-2">
            {patients.map((patient) => (
              <button
                key={patient.id}
                onClick={() => handleSelectPatient(patient.id)}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-left hover:bg-gray-50 transition-colors border-l-4 ${
                  selectedPatientId === patient.id 
                    ? 'border-l-blue-500 bg-blue-50' 
                    : 'border-l-transparent'
                }`}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate text-sm sm:text-base">{patient.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 truncate">MRN: {patient.mrn}</p>
                    <p className="text-xs text-gray-500 truncate">Age: {patient.age} • Last visit: {patient.lastVisit}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium border flex items-center space-x-1 ${getStatusColor(patient.status)}`}>
                      {getStatusIcon(patient.status)}
                      <span className="capitalize hidden sm:inline">{patient.status}</span>
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};