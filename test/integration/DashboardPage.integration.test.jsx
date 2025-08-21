import { render, screen } from '@testing-library/react';
import DashboardPage from '../../src/pages/DashboardPage';
import { describe, it, expect } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('DashboardPage', () => {
  it('affiche le titre', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <DashboardPage />
      </QueryClientProvider>
    );
    // Il peut y avoir plusieurs éléments contenant 'annonces' (titre + loading)
    const matches = screen.getAllByText(/annonces/i);
    expect(matches.length).toBeGreaterThan(0);

  });
});
