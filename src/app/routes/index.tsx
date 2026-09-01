import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';
import { Dashboard } from '@/pages/Dashboard';
import { Assessment } from '@/pages/Assessment';
import { Skills } from '@/pages/Skills';
import { Card } from '@/components/ui/Card';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'assessment',
        element: <Assessment />,
      },
      {
        path: 'skills',
        element: <Skills />,
      },
      {
        path: 'learning',
        element: (
          <Card variant="glass" padding="large">
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '8px' }}>
              My Learning Catalog
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              Tiered PQC curriculum. Implementation scheduled for subsequent phase.
            </p>
          </Card>
        ),
      },
      {
        path: 'challenges',
        element: (
          <Card variant="glass" padding="large">
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '8px' }}>
              Practical Simulation Labs
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              Interactive endpoint inspection terminal. Implementation scheduled for subsequent phase.
            </p>
          </Card>
        ),
      },
      {
        path: 'reassessment',
        element: (
          <Card variant="glass" padding="large">
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '8px' }}>
              Progress & Reassessment Delta
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              Before-and-after empirical delta benchmarking. Implementation scheduled for subsequent phase.
            </p>
          </Card>
        ),
      },
      {
        path: 'organization',
        element: (
          <Card variant="glass" padding="large">
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '8px' }}>
              Organization Workforce Capability
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              Enterprise capability matrix. Implementation scheduled for subsequent phase.
            </p>
          </Card>
        ),
      },
    ],
  },
]);
