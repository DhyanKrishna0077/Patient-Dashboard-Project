import React from 'react';
import { User, Calendar, MapPin, Phone, Mail } from 'lucide-react';

interface PatientHeaderProps {
  patient: {
    id: string;
    name: string;
    dateOfBirth: string;
    gender: string;
    age: number;
    mrn: string;
    address: string;
    phone: string;
    email: string;
    emergencyContact: string;
    emergencyPhone: string;
  };
}

export const PatientHeader: React.FC<PatientHeaderProps> = ({ patient }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between">
        {/* Patient Info */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
            <User className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{patient.name}</h1>
            <p className="text-sm sm:text-base text-gray-600">MRN: {patient.mrn}</p>
          </div>
        </div>
        
        {/* Basic Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-sm">
          <div className="flex items-center space-x-2 justify-center sm:justify-start">
            <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-gray-600">DOB</p>
              <p className="font-medium truncate">{patient.dateOfBirth}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 justify-center sm:justify-start">
            <User className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-gray-600">Gender</p>
              <p className="font-medium">{patient.gender}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 justify-center sm:justify-start">
            <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {patient.age}
            </span>
            <div className="min-w-0">
              <p className="text-gray-600">Age</p>
              <p className="font-medium">{patient.age} years</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Information */}
      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-sm">
          <div className="flex items-start space-x-2">
            <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-gray-600">Address</p>
              <p className="font-medium break-words">{patient.address}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-gray-600">Phone</p>
              <p className="font-medium">{patient.phone}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-gray-600">Email</p>
              <p className="font-medium truncate">{patient.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};