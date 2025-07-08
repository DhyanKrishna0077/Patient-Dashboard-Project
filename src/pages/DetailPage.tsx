import React from 'react';
import { CurrentMedications } from '../components/CurrentMedications';
import { Allergies } from '../components/Allergies';
import { DiagnosisHistory } from '../components/DiagnosisHistory';

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

interface Allergy {
  id: string;
  allergen: string;
  severity: 'mild' | 'moderate' | 'severe';
  reaction: string;
  dateIdentified: string;
  notes?: string;
}

interface Diagnosis {
  id: string;
  condition: string;
  date: string;
  severity: 'mild' | 'moderate' | 'severe';
  status: 'active' | 'resolved' | 'chronic';
  physician: string;
  notes?: string;
}

interface DetailPageProps {
  medications: Medication[];
  allergies: Allergy[];
  diagnoses: Diagnosis[];
}

export const DetailPage: React.FC<DetailPageProps> = ({
  medications,
  allergies,
  diagnoses
}) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Responsive Layout - Single column on mobile, two columns on larger screens */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        {/* Left Column - Full width on mobile */}
        <div className="space-y-4 sm:space-y-6">
          {/* Current Medications */}
          <CurrentMedications medications={medications} />
        </div>

        {/* Right Column - Full width on mobile */}
        <div className="space-y-4 sm:space-y-6">
          {/* Allergies */}
          <Allergies allergies={allergies} />

          {/* Diagnosis History */}
          <DiagnosisHistory diagnoses={diagnoses} />
        </div>
      </div>
    </div>
  );
};