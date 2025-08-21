import { render, screen } from '@testing-library/react';
import App from '../../src/App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('affiche le composant principal', () => {
    render(<App />);
    expect(screen.getByText(/rencontres pongistes/i)).toBeInTheDocument();
  });
});
