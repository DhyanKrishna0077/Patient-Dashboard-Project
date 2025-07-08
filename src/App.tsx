import React, { useState } from 'react';
import { PatientDropdown } from './components/PatientDropdown';
import { Navigation } from './components/Navigation';
import { OverviewPage } from './pages/OverviewPage';
import { DetailPage } from './pages/DetailPage';
import {
  mockPatients,
  mockVitalsData,
  mockDiagnosesData,
  mockAlertsData,
  mockAllergiesData,
  mockMedicationsData
} from './data/mockData';

// ✅ Type Definitions
type Alert = {
  id: string;
  message?: string;
  dismissed: boolean;
  // Add any other fields used in your alerts
};

type AlertsMap = Record<string, Alert[]>;

enum Page {
  Overview = 'overview',
  Detail = 'detail'
}

function App() {
  const [selectedPatientId, setSelectedPatientId] = useState<string>('PAT-001');
  const [currentPage, setCurrentPage] = useState<Page>(Page.Overview);
  const [alerts, setAlerts] = useState<AlertsMap>(mockAlertsData);

  const selectedPatient = mockPatients.find(p => p.id === selectedPatientId);
  const selectedVitals = mockVitalsData[selectedPatientId] || [];
  const selectedDiagnoses = mockDiagnosesData[selectedPatientId] || [];
  const selectedAlerts = alerts[selectedPatientId] || [];
  const selectedAllergies = mockAllergiesData[selectedPatientId] || [];
  const selectedMedications = mockMedicationsData[selectedPatientId] || [];

  const handleDismissAlert = (alertId: string): void => {
    setAlerts(prev => ({
      ...prev,
      [selectedPatientId]: prev[selectedPatientId]?.map(alert =>
        alert.id === alertId ? { ...alert, dismissed: true } : alert
      ) || []
    }));
  };

  const handleSelectPatient = (patientId: string): void => {
    setSelectedPatientId(patientId);
  };

  const handlePageChange = (page: Page): void => {
    setCurrentPage(page);
  };

  const totalActiveAlerts = Object.values(alerts).reduce((total, patientAlerts) => {
    return total + patientAlerts.filter(alert => !alert.dismissed).length;
  }, 0);

  const today = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header role="banner" className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 sm:py-4 space-y-3 sm:space-y-0">
            {/* Title Section */}
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Patient Dashboard</h1>
              <p className="text-sm sm:text-base text-gray-600 hidden sm:block">
                Comprehensive patient overview and monitoring
              </p>
            </div>

            {/* Stats and Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              {/* Stats */}
              <div className="hidden md:flex items-center space-x-3 lg:space-x-4 text-xs lg:text-sm">
                <div className="flex items-center space-x-1 lg:space-x-2">
                  <span className="text-gray-500">Patients:</span>
                  <span className="font-semibold text-blue-600">{mockPatients.length}</span>
                </div>
                <div className="flex items-center space-x-1 lg:space-x-2">
                  <span className="text-gray-500">Alerts:</span>
                  <span className={`font-semibold ${totalActiveAlerts > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {totalActiveAlerts}
                  </span>
                </div>
                <span className="text-gray-500 hidden lg:block">Updated: {today}</span>
              </div>

              {/* Patient Dropdown */}
              <div className="w-full sm:w-auto">
                <PatientDropdown
                  patients={mockPatients}
                  selectedPatientId={selectedPatientId}
                  onSelectPatient={handleSelectPatient}
                  aria-label="Select patient"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main role="main" className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {selectedPatient ? (
          <div className="space-y-4 sm:space-y-6">
            <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
            {currentPage === Page.Overview ? (
              <OverviewPage
                patient={selectedPatient}
                vitals={selectedVitals}
                alerts={selectedAlerts}
                onDismissAlert={handleDismissAlert}
              />
            ) : (
              <DetailPage
                medications={selectedMedications}
                allergies={selectedAllergies}
                diagnoses={selectedDiagnoses}
              />
            )}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-center">
            <p className="text-gray-500">Select a patient to view their details</p>
          </div>
        )}

        {/* Footer */}
        <footer role="contentinfo" className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="text-center text-xs sm:text-sm text-gray-500">
            <p>EMR Dashboard v2.1 • Secure Patient Data Management</p>
            <p className="mt-1 sm:mt-2">Last accessed: {today}</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
