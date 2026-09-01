import React from 'react';
import { KpiSection } from '@/features/dashboard/components/KpiSection';
import { BentoSection } from '@/features/dashboard/components/BentoSection';
import { LowerSection } from '@/features/dashboard/components/LowerSection';
import { mockDashboardData } from '@/data/dashboardData';

export const Dashboard: React.FC = () => {
  const { currentUser } = mockDashboardData;

  return (
    <>
      {/* Page Header */}
      <section className="dashboard-header">
        <h1 className="dashboard-title">
          Welcome back, {currentUser.name}.
        </h1>
        <p className="dashboard-subtitle">
          Continue building the skills needed for a quantum-safe future.
        </p>
      </section>

      {/* KPI Row (4 Cards) */}
      <KpiSection />

      {/* Bento Section (8 cols + 4 cols) */}
      <BentoSection />

      {/* Lower 3-column Section */}
      <LowerSection />
    </>
  );
};

export default Dashboard;
