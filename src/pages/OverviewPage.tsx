import React from 'react';
import { PatientHeader } from '../components/PatientHeader';
import { VitalSigns } from '../components/VitalSigns';
import { CriticalAlerts } from '../components/CriticalAlerts';

interface Patient {
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
}

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

interface Alert {
  id: string;
  title: string;
  message: string;
  severity: 'high' | 'medium' | 'low';
  timestamp: string;
  dismissed?: boolean;
}

interface OverviewPageProps {
  patient: Patient;
  vitals: VitalSign[];
  alerts: Alert[];
  onDismissAlert: (alertId: string) => void;
}

export const OverviewPage: React.FC<OverviewPageProps> = ({
  patient,
  vitals,
  alerts,
  onDismissAlert
}) => {
  return (
    <div className="space-y-6">
      {/* Patient Information */}
      <PatientHeader patient={patient} />

      {/* Critical Alerts */}
      <CriticalAlerts 
        alerts={alerts} 
        onDismiss={onDismissAlert}
      />

      {/* Vital Signs */}
      <VitalSigns vitals={vitals} />
    </div>
  );
};