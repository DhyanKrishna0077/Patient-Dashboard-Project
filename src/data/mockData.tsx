import { Heart, Thermometer, Activity, Droplets } from 'lucide-react';

export const mockPatients = [
  {
    id: 'PAT-001',
    name: 'Sarah Johnson',
    dateOfBirth: 'March 15, 1985',
    gender: 'Female',
    age: 39,
    mrn: 'MRN-789456123',
    address: 'Kasargod District,Bekal fort',
    phone: '7676845841',
    email: 'sarah.johnson@email.com',
    emergencyContact: 'Michael Johnson (Spouse)',
    emergencyPhone: '7392927333',
    status: 'active',
    lastVisit: '2024-01-15'
  },
  {
    id: 'PAT-002',
    name: 'Vikrant',
    dateOfBirth: 'July 22, 1978',
    gender: 'Male',
    age: 46,
    mrn: 'MRN-456789012',
    address: 'Kannur District, Thalassery',
    phone: '6775575784',
    email: 'vikrant777@email.com',
    emergencyContact: 'Lisa (Wife)',
    emergencyPhone: '8729383832',
    status: 'critical',
    lastVisit: '2024-01-14'
  },
  {
    id: 'PAT-003',
    name: 'Dhyan Krishna',
    dateOfBirth: 'June 1, 2003',
    gender: 'Male',
    age: 22,
    mrn: 'MRN-123456789',
    address: 'Kozhikode District,Kunnamangalam',
    phone: '+916238413124',
    email: 'dhyankrishna0077@gmail.com',
    emergencyContact: 'Sreejitha K (Mother)',
    emergencyPhone: '+916238413124',
    status: 'stable',
    lastVisit: '2024-01-13'
  },
  {
    id: 'PAT-004',
    name: 'James Wilson',
    dateOfBirth: 'February 3, 1965',
    gender: 'Male',
    age: 59,
    mrn: 'MRN-987654321',
    address: 'Wayanad district,Kalpetta',
    phone: '8594744744',
    email: 'james.wilson@email.com',
    emergencyContact: 'Patricia Wilson (Wife)',
    emergencyPhone: '7283837383',
    status: 'monitoring',
    lastVisit: '2024-01-12'
  },
  {
    id: 'PAT-005',
    name: 'Saba',
    dateOfBirth: 'September 17, 1988',
    gender: 'male',
    age: 36,
    mrn: 'MRN-555666777',
    address: 'Malappuram district,Manjeri',
    phone: '6493928844',
    email: 'saba343@email.com',
    emergencyContact: 'Fasiya (wife)',
    emergencyPhone: '6282827393',
    status: 'discharged',
    lastVisit: '2024-01-11'
  }
];

export const mockVitalsData = {
  'PAT-001': [
    {
      id: 'bp',
      name: 'Blood Pressure',
      value: '135/85',
      unit: 'mmHg',
      status: 'warning' as const,
      normalRange: '120/80',
      timestamp: '2024-01-15 09:30 AM',
      icon: <Heart className="w-5 h-5" />
    },
    {
      id: 'hr',
      name: 'Heart Rate',
      value: '78',
      unit: 'bpm',
      status: 'normal' as const,
      normalRange: '60-100',
      timestamp: '2024-01-15 09:30 AM',
      icon: <Activity className="w-5 h-5" />
    },
    {
      id: 'temp',
      name: 'Temperature',
      value: '99.1',
      unit: '°F',
      status: 'normal' as const,
      normalRange: '98.6',
      timestamp: '2024-01-15 09:30 AM',
      icon: <Thermometer className="w-5 h-5" />
    },
    {
      id: 'o2sat',
      name: 'O2 Saturation',
      value: '98',
      unit: '%',
      status: 'normal' as const,
      normalRange: '95-100',
      timestamp: '2024-01-15 09:30 AM',
      icon: <Droplets className="w-5 h-5" />
    }
  ],
  'PAT-002': [
    {
      id: 'bp',
      name: 'Blood Pressure',
      value: '180/110',
      unit: 'mmHg',
      status: 'critical' as const,
      normalRange: '120/80',
      timestamp: '2024-01-14 02:15 PM',
      icon: <Heart className="w-5 h-5" />
    },
    {
      id: 'hr',
      name: 'Heart Rate',
      value: '105',
      unit: 'bpm',
      status: 'warning' as const,
      normalRange: '60-100',
      timestamp: '2024-01-14 02:15 PM',
      icon: <Activity className="w-5 h-5" />
    },
    {
      id: 'temp',
      name: 'Temperature',
      value: '101.3',
      unit: '°F',
      status: 'warning' as const,
      normalRange: '98.6',
      timestamp: '2024-01-14 02:15 PM',
      icon: <Thermometer className="w-5 h-5" />
    },
    {
      id: 'o2sat',
      name: 'O2 Saturation',
      value: '94',
      unit: '%',
      status: 'warning' as const,
      normalRange: '95-100',
      timestamp: '2024-01-14 02:15 PM',
      icon: <Droplets className="w-5 h-5" />
    }
  ],
  'PAT-003': [
    {
      id: 'bp',
      name: 'Blood Pressure',
      value: '118/75',
      unit: 'mmHg',
      status: 'normal' as const,
      normalRange: '120/80',
      timestamp: '2024-01-13 11:45 AM',
      icon: <Heart className="w-5 h-5" />
    },
    {
      id: 'hr',
      name: 'Heart Rate',
      value: '72',
      unit: 'bpm',
      status: 'normal' as const,
      normalRange: '60-100',
      timestamp: '2024-01-13 11:45 AM',
      icon: <Activity className="w-5 h-5" />
    },
    {
      id: 'temp',
      name: 'Temperature',
      value: '98.6',
      unit: '°F',
      status: 'normal' as const,
      normalRange: '98.6',
      timestamp: '2024-01-13 11:45 AM',
      icon: <Thermometer className="w-5 h-5" />
    },
    {
      id: 'o2sat',
      name: 'O2 Saturation',
      value: '99',
      unit: '%',
      status: 'normal' as const,
      normalRange: '95-100',
      timestamp: '2024-01-13 11:45 AM',
      icon: <Droplets className="w-5 h-5" />
    }
  ],
  'PAT-004': [
    {
      id: 'bp',
      name: 'Blood Pressure',
      value: '145/92',
      unit: 'mmHg',
      status: 'warning' as const,
      normalRange: '120/80',
      timestamp: '2024-01-12 03:20 PM',
      icon: <Heart className="w-5 h-5" />
    },
    {
      id: 'hr',
      name: 'Heart Rate',
      value: '85',
      unit: 'bpm',
      status: 'normal' as const,
      normalRange: '60-100',
      timestamp: '2024-01-12 03:20 PM',
      icon: <Activity className="w-5 h-5" />
    },
    {
      id: 'temp',
      name: 'Temperature',
      value: '98.9',
      unit: '°F',
      status: 'normal' as const,
      normalRange: '98.6',
      timestamp: '2024-01-12 03:20 PM',
      icon: <Thermometer className="w-5 h-5" />
    },
    {
      id: 'o2sat',
      name: 'O2 Saturation',
      value: '96',
      unit: '%',
      status: 'normal' as const,
      normalRange: '95-100',
      timestamp: '2024-01-12 03:20 PM',
      icon: <Droplets className="w-5 h-5" />
    }
  ],
  'PAT-005': [
    {
      id: 'bp',
      name: 'Blood Pressure',
      value: '122/78',
      unit: 'mmHg',
      status: 'normal' as const,
      normalRange: '120/80',
      timestamp: '2024-01-11 10:00 AM',
      icon: <Heart className="w-5 h-5" />
    },
    {
      id: 'hr',
      name: 'Heart Rate',
      value: '68',
      unit: 'bpm',
      status: 'normal' as const,
      normalRange: '60-100',
      timestamp: '2024-01-11 10:00 AM',
      icon: <Activity className="w-5 h-5" />
    },
    {
      id: 'temp',
      name: 'Temperature',
      value: '98.4',
      unit: '°F',
      status: 'normal' as const,
      normalRange: '98.6',
      timestamp: '2024-01-11 10:00 AM',
      icon: <Thermometer className="w-5 h-5" />
    },
    {
      id: 'o2sat',
      name: 'O2 Saturation',
      value: '98',
      unit: '%',
      status: 'normal' as const,
      normalRange: '95-100',
      timestamp: '2024-01-11 10:00 AM',
      icon: <Droplets className="w-5 h-5" />
    }
  ]
};

export const mockDiagnosesData = {
  'PAT-001': [
    {
      id: 'diag-001',
      condition: 'Hypertension Stage 1',
      date: '2024-01-15',
      severity: 'moderate' as const,
      status: 'active' as const,
      physician: 'Dr. Emily Chen, MD',
      notes: 'Patient presents with elevated blood pressure readings. Recommend lifestyle modifications and consider medication if readings persist.'
    },
    {
      id: 'diag-002',
      condition: 'Type 2 Diabetes Mellitus',
      date: '2023-11-20',
      severity: 'moderate' as const,
      status: 'chronic' as const,
      physician: 'Dr. Michael Rodriguez, MD',
      notes: 'Well-controlled diabetes with HbA1c of 6.8%. Continue current medication regimen and dietary management.'
    }
  ],
  'PAT-002': [
    {
      id: 'diag-005',
      condition: 'Acute Myocardial Infarction',
      date: '2024-01-14',
      severity: 'severe' as const,
      status: 'active' as const,
      physician: 'Dr. Sarah Kim, MD',
      notes: 'Patient admitted with chest pain and elevated cardiac enzymes. Immediate intervention required.'
    },
    {
      id: 'diag-006',
      condition: 'Coronary Artery Disease',
      date: '2023-10-15',
      severity: 'severe' as const,
      status: 'chronic' as const,
      physician: 'Dr. Sarah Kim, MD',
      notes: 'Significant coronary blockage identified. Patient on dual antiplatelet therapy.'
    }
  ],
  'PAT-003': [
    {
      id: 'diag-007',
      condition: 'High-pitched wheezing sound that occurs during breathing, And difficulty in breathing',
      date: '2015-01-13',
      severity: 'severe' as const,
      status: 'resolved' as const,
      physician: 'Dr. Vijayan, MD',
      notes: 'high breathing issue during the night time, breating issue when doing running,lifting weight etc'
    }
  ],
  'PAT-004': [
    {
      id: 'diag-008',
      condition: 'Chronic Obstructive Pulmonary Disease',
      date: '2023-08-20',
      severity: 'moderate' as const,
      status: 'chronic' as const,
      physician: 'Dr. Robert Taylor, MD',
      notes: 'COPD well-managed with bronchodilators. Patient advised to continue smoking cessation program.'
    },
    {
      id: 'diag-009',
      condition: 'Osteoarthritis - Bilateral Knees',
      date: '2023-06-10',
      severity: 'moderate' as const,
      status: 'chronic' as const,
      physician: 'Dr. Amanda Foster, MD',
      notes: 'Joint pain managed with NSAIDs and physical therapy. Consider joint replacement consultation.'
    }
  ],
  'PAT-005': [
    {
      id: 'diag-010',
      condition: 'Postpartum Depression',
      date: '2024-01-11',
      severity: 'moderate' as const,
      status: 'resolved' as const,
      physician: 'Dr. Lisa Martinez, MD',
      notes: 'Patient responded well to therapy and medication. Discharged with follow-up care plan.'
    }
  ]
};

export const mockAllergiesData = {
  'PAT-001': [
    {
      id: 'allergy-001',
      allergen: 'Penicillin',
      severity: 'severe' as const,
      reaction: 'Anaphylaxis, hives, difficulty breathing',
      dateIdentified: '2018-03-15',
      notes: 'Patient experienced severe allergic reaction during antibiotic treatment. Carries EpiPen.'
    },
    {
      id: 'allergy-002',
      allergen: 'Shellfish',
      severity: 'moderate' as const,
      reaction: 'Hives, swelling, nausea',
      dateIdentified: '2015-07-22',
      notes: 'Reaction occurs within 30 minutes of consumption. Avoids all shellfish.'
    },
    {
      id: 'allergy-003',
      allergen: 'Latex',
      severity: 'mild' as const,
      reaction: 'Contact dermatitis, itching',
      dateIdentified: '2020-01-10',
      notes: 'Skin irritation when exposed to latex gloves. Uses nitrile alternatives.'
    }
  ],
  'PAT-002': [
    {
      id: 'allergy-004',
      allergen: 'Aspirin',
      severity: 'moderate' as const,
      reaction: 'Gastrointestinal bleeding, stomach pain',
      dateIdentified: '2019-05-08',
      notes: 'History of GI bleeding with aspirin use. Uses alternative anticoagulants.'
    },
    {
      id: 'allergy-005',
      allergen: 'Iodine Contrast',
      severity: 'severe' as const,
      reaction: 'Severe hypotension, bronchospasm',
      dateIdentified: '2021-11-12',
      notes: 'Reaction during CT scan with contrast. Requires premedication for future procedures.'
    }
  ],
  'PAT-003': [
    {
      id: 'allergy-006',
      allergen: 'Dust',
      severity: 'severe' as const,
      reaction: 'Itchy nose, itchy throat,Wheezing,Sneezing,runny nose,coughing,shortness of breath',
      dateIdentified: '2015-01-13',
      notes: 'Severe Dust allergy since childhood. Carries Cetirizine at all times.'
    }
  ],
  'PAT-004': [
    {
      id: 'allergy-007',
      allergen: 'Sulfa Drugs',
      severity: 'moderate' as const,
      reaction: 'Skin rash, fever',
      dateIdentified: '2017-09-25',
      notes: 'Developed rash and fever with sulfamethoxazole. Avoids all sulfa-containing medications.'
    },
    {
      id: 'allergy-008',
      allergen: 'Dust Mites',
      severity: 'mild' as const,
      reaction: 'Respiratory symptoms, sneezing',
      dateIdentified: '2016-02-14',
      notes: 'Environmental allergy causing seasonal respiratory symptoms. Managed with antihistamines.'
    }
  ],
  'PAT-005': [
    {
      id: 'allergy-009',
      allergen: 'Codeine',
      severity: 'moderate' as const,
      reaction: 'Nausea, vomiting, dizziness',
      dateIdentified: '2022-08-30',
      notes: 'Adverse reaction to codeine-based pain medications. Uses alternative pain management.'
    }
  ]
};

export const mockMedicationsData = {
  'PAT-001': [
    {
      id: 'med-001',
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      route: 'Oral',
      prescribedBy: 'Dr. Michael Rodriguez, MD',
      startDate: '2023-11-20',
      endDate: null,
      status: 'active' as const,
      indication: 'Type 2 Diabetes Mellitus',
      instructions: 'Take with meals to reduce gastrointestinal side effects',
      refillsRemaining: 3
    },
    {
      id: 'med-002',
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      route: 'Oral',
      prescribedBy: 'Dr. Emily Chen, MD',
      startDate: '2024-01-15',
      endDate: null,
      status: 'active' as const,
      indication: 'Hypertension',
      instructions: 'Take in the morning, monitor blood pressure regularly',
      refillsRemaining: 5
    },
    {
      id: 'med-003',
      name: 'Atorvastatin',
      dosage: '20mg',
      frequency: 'Once daily at bedtime',
      route: 'Oral',
      prescribedBy: 'Dr. Emily Chen, MD',
      startDate: '2023-12-01',
      endDate: null,
      status: 'active' as const,
      indication: 'Hyperlipidemia',
      instructions: 'Take at bedtime, avoid grapefruit juice',
      refillsRemaining: 2
    }
  ],
  'PAT-002': [
    {
      id: 'med-004',
      name: 'Clopidogrel',
      dosage: '75mg',
      frequency: 'Once daily',
      route: 'Oral',
      prescribedBy: 'Dr. Sarah Kim, MD',
      startDate: '2023-10-15',
      endDate: null,
      status: 'active' as const,
      indication: 'Coronary Artery Disease',
      instructions: 'Take with food, do not stop without consulting physician',
      refillsRemaining: 4
    },
    {
      id: 'med-005',
      name: 'Metoprolol',
      dosage: '50mg',
      frequency: 'Twice daily',
      route: 'Oral',
      prescribedBy: 'Dr. Sarah Kim, MD',
      startDate: '2024-01-14',
      endDate: null,
      status: 'active' as const,
      indication: 'Post-MI, Hypertension',
      instructions: 'Monitor heart rate and blood pressure, do not stop abruptly',
      refillsRemaining: 6
    },
    {
      id: 'med-006',
      name: 'Heparin',
      dosage: '5000 units',
      frequency: 'Every 8 hours',
      route: 'Subcutaneous',
      prescribedBy: 'Dr. Sarah Kim, MD',
      startDate: '2024-01-14',
      endDate: '2024-01-21',
      status: 'active' as const,
      indication: 'Anticoagulation post-MI',
      instructions: 'Hospital administration only, monitor PTT levels',
      refillsRemaining: 0
    }
  ],
  'PAT-003': [
    {
      id: 'med-007',
      name: 'inhaler with foracort 400 ',
      dosage: '1 tablet',
      frequency: '3 time a day',
      route: 'Oral',
      prescribedBy: 'Dr. Vijayan, MD',
      startDate: '2015-01-13',
      endDate: '2018-04-27',
      status: 'discontinued' as const,
      indication: 'After 6 months when wheezing Starts',
      instructions: 'Take 3 times a day then later do only when the wheezing start otherwise dont use it',
      refillsRemaining: 1
    },
    {
      id: 'med-008',
      name: 'Cetirizine Tablets',
      dosage: '400mcg',
      frequency: 'Once daily',
      route: 'Oral',
      prescribedBy: 'Dr. Vijayan, MD',
      startDate: '2024-01-13',
      endDate: null,
      status: 'active' as const,
      indication: 'when the wheezing starts',
      instructions: 'Stop if the wheezing stops',
      refillsRemaining: 6
    }
  ],
  'PAT-004': [
    {
      id: 'med-009',
      name: 'Albuterol Inhaler',
      dosage: '90mcg',
      frequency: 'As needed',
      route: 'Inhalation',
      prescribedBy: 'Dr. Robert Taylor, MD',
      startDate: '2023-08-20',
      endDate: null,
      status: 'active' as const,
      indication: 'COPD - bronchodilator',
      instructions: 'Use as rescue inhaler for shortness of breath, max 8 puffs per day',
      refillsRemaining: 3
    },
    {
      id: 'med-010',
      name: 'Tiotropium',
      dosage: '18mcg',
      frequency: 'Once daily',
      route: 'Inhalation',
      prescribedBy: 'Dr. Robert Taylor, MD',
      startDate: '2023-08-20',
      endDate: null,
      status: 'active' as const,
      indication: 'COPD - maintenance therapy',
      instructions: 'Use daily at same time, rinse mouth after use',
      refillsRemaining: 2
    },
    {
      id: 'med-011',
      name: 'Ibuprofen',
      dosage: '400mg',
      frequency: 'Three times daily with meals',
      route: 'Oral',
      prescribedBy: 'Dr. Amanda Foster, MD',
      startDate: '2023-06-10',
      endDate: null,
      status: 'active' as const,
      indication: 'Osteoarthritis pain management',
      instructions: 'Take with food, monitor for GI side effects',
      refillsRemaining: 4
    }
  ],
  'PAT-005': [
    {
      id: 'med-012',
      name: 'Sertraline',
      dosage: '50mg',
      frequency: 'Once daily',
      route: 'Oral',
      prescribedBy: 'Dr. Lisa Martinez, MD',
      startDate: '2023-12-15',
      endDate: '2024-02-15',
      status: 'discontinued' as const,
      indication: 'Postpartum Depression',
      instructions: 'Gradually tapered and discontinued as symptoms resolved',
      refillsRemaining: 0
    }
  ]
};

export const mockAlertsData = {
  'PAT-001': [
    {
      id: 'alert-001',
      title: 'Blood Pressure Warning',
      message: 'Patient\'s blood pressure reading of 135/85 mmHg is elevated. Consider reviewing medication or lifestyle interventions.',
      severity: 'medium' as const,
      timestamp: '2024-01-15 09:35 AM',
      dismissed: false
    },
    {
      id: 'alert-002',
      title: 'Medication Reminder',
      message: 'Patient is due for diabetes medication refill. Last refill was 25 days ago.',
      severity: 'low' as const,
      timestamp: '2024-01-15 08:00 AM',
      dismissed: false
    }
  ],
  'PAT-002': [
    {
      id: 'alert-004',
      title: 'CRITICAL: Cardiac Event',
      message: 'Patient experiencing acute myocardial infarction. Immediate medical attention required.',
      severity: 'high' as const,
      timestamp: '2024-01-14 02:00 PM',
      dismissed: false
    },
    {
      id: 'alert-005',
      title: 'Vital Signs Critical',
      message: 'Blood pressure 180/110 mmHg and heart rate 105 bpm. Monitor closely.',
      severity: 'high' as const,
      timestamp: '2024-01-14 02:15 PM',
      dismissed: false
    }
  ],
  'PAT-003': [
    {
      id: 'alert-006',
      title: 'if the shortness of the breathing become severe ',
      message: 'Next checkup will be schedule only if the patient had a severe breathing promblem. Ensure the medications are taken correctly.',
      severity: 'low' as const,
      timestamp: '2024-01-13 12:00 PM',
      dismissed: false
    }
  ],
  'PAT-004': [
    {
      id: 'alert-007',
      title: 'COPD Monitoring',
      message: 'Patient\'s respiratory function requires regular monitoring. Schedule pulmonary function test.',
      severity: 'medium' as const,
      timestamp: '2024-01-12 03:30 PM',
      dismissed: false
    }
  ],
  'PAT-005': [
    {
      id: 'alert-008',
      title: 'Follow-up Required',
      message: 'Patient discharged but requires mental health follow-up within 2 weeks.',
      severity: 'medium' as const,
      timestamp: '2024-01-11 11:00 AM',
      dismissed: false
    }
  ]
};

// Legacy exports for backward compatibility
export const mockPatient = mockPatients[0];
export const mockVitals = mockVitalsData['PAT-001'];
export const mockDiagnoses = mockDiagnosesData['PAT-001'];
export const mockAlerts = mockAlertsData['PAT-001'];
