import React from 'react';
import PrivateRoute from '../components/PrivateRoute';
import DashboardContent from '../components/Dashboard';

export default function Dashboard() {
  return (
    <PrivateRoute>
      <DashboardContent />
    </PrivateRoute>
  );
}
