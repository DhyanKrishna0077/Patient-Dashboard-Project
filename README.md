# Patient Overview Dashboard

A modern, responsive healthcare dashboard for managing patient information, vital signs, medications, and medical records. Built with React, TypeScript, and Tailwind CSS.

## Features

    **Overview Page**
- **Patient Information** - Complete demographic and contact details
- **Critical Alerts** - Real-time notifications for urgent medical conditions
- **Vital Signs Monitoring** - Blood pressure, heart rate, temperature, and oxygen saturation
- **Status Indicators** - Visual health status with color-coded alerts

     **Detail Page**
- **Current Medications** - Active prescriptions with dosage, frequency, and refill tracking
- **Allergy Management** - Comprehensive allergy records with severity levels
- **Diagnosis History** - Medical conditions with status tracking and physician notes

   **Core Functionality**
- **Multi-Patient Support** - Switch between patients using the dropdown selector
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Real-time Updates** - Live vital signs and alert monitoring
- **Alert Management** - Dismiss and track critical notifications
- **Status Tracking** - Monitor patient conditions and medication compliance

   ## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd patient-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the dashboard

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Allergies.tsx    # Allergy management component
│   ├── CriticalAlerts.tsx # Alert notification system
│   ├── CurrentMedications.tsx # Medication tracking
│   ├── DiagnosisHistory.tsx # Medical history display
│   ├── Navigation.tsx   # Page navigation tabs
│   ├── PatientDropdown.tsx # Patient selection dropdown
│   ├── PatientHeader.tsx # Patient information header
│   └── VitalSigns.tsx   # Vital signs monitoring
├── data/
│   └── mockData.tsx     # Sample patient data and medical records
├── pages/
│   ├── DetailPage.tsx   # Medications, allergies, and diagnoses
│   └── OverviewPage.tsx # Patient info, alerts, and vitals
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

##  Design System

### Color Coding
- **Green** - Normal/Healthy status
- **Yellow** - Warning/Attention needed
- **Red** - Critical/Urgent action required
- **Blue** - Active/In progress
- **Gray** - Inactive/Completed

### Status Indicators
- **Active** - Currently receiving care
- **Critical** - Requires immediate attention
- **Stable** - Condition is stable
- **Monitoring** - Under observation
- **Discharged** - Released from care

## Responsive Breakpoints

- **Mobile** - `< 640px` - Single column layout, compact navigation
- **Tablet** - `640px - 1024px` - Optimized spacing and typography
- **Desktop** - `> 1024px` - Full multi-column layout
- **Large Desktop** - `> 1280px` - Maximum content width with side margins

## Technology Stack

- **Frontend Framework** - React 18 with TypeScript
- **Styling** - Tailwind CSS for utility-first styling
- **Icons** - Lucide React for consistent iconography
- **Build Tool** - Vite for fast development and building
- **Code Quality** - ESLint for code linting and standards

##  Sample Data

The application includes comprehensive mock data for demonstration:

- **5 Sample Patients** with varying medical conditions
- **Vital Signs** with normal, warning, and critical values
- **Medications** including active and discontinued prescriptions
- **Allergies** with severity levels and reaction details
- **Medical History** with diagnoses and physician notes
- **Critical Alerts** for urgent medical situations

## Key Components

## PatientDropdown
- Multi-patient selection with search capability
- Status indicators and last visit information
- Responsive design for all screen sizes

## VitalSigns
- Real-time monitoring display
- Color-coded status indicators
- Normal range comparisons

## CriticalAlerts
- Dismissible alert system
- Severity-based prioritization
- Timestamp tracking

## CurrentMedications
- Active and historical medication tracking
- Refill monitoring and warnings
- Detailed prescription information

## Security Considerations

- Patient data is currently mock data for demonstration
- In production, implement proper authentication
- Ensure HIPAA compliance for real patient data
- Use secure API endpoints for data transmission

## Future Enhancements

- **Real-time Data Integration** - Connect to hospital management systems
- **Advanced Analytics** - Trend analysis and predictive insights
- **Mobile App** - Native iOS/Android applications
- **Print Reports** - Generate patient summary reports
- **Multi-language Support** - Internationalization capabilities
- **Dark Mode** - Alternative color scheme option

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation for common solutions

---

**Built with Love for healthcare professionals**

*Empowering medical teams with intuitive patient management tools*