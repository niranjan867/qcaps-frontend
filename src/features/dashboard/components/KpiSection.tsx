import React from 'react';
import { StatCard } from '@/components/ui/StatCard';
import { Flame, Star } from 'lucide-react';
import { mockDashboardData } from '@/data/dashboardData';

export const KpiSection: React.FC = () => {
  const { kpiMetrics } = mockDashboardData;

  const renderIcon = (iconName?: string) => {
    switch (iconName) {
      case 'flame':
        return <Flame size={20} />;
      case 'star':
        return <Star size={20} />;
      default:
        return null;
    }
  };

  return (
    <section className="kpi-grid">
      {kpiMetrics.map((metric) => (
        <StatCard
          key={metric.id}
          title={metric.title}
          value={metric.value}
          badge={metric.badge}
          supportingText={metric.supportingText}
          linkText={metric.linkText}
          linkTo={metric.linkTo}
          visualType={metric.visualType}
          ringProgress={metric.ringProgress}
          barProgress={metric.barProgress}
          icon={renderIcon(metric.iconName)}
          iconBgColor={metric.iconBgColor}
          iconColor={metric.iconColor}
        />
      ))}
    </section>
  );
};
