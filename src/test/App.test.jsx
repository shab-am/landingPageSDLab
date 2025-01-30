import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from '../App';

describe('App Integration Tests', () => {
  it('renders the main page with level cards', () => {
    render(<App />);
    expect(screen.getByText('Welcome to Tree Data Structures')).toBeInTheDocument();
    expect(screen.getByText('Level 1')).toBeInTheDocument();
  });

  it('updates progress when receiving level completion message', async () => {
    render(<App />);
    
    // Simulate message from iframe
    const message = {
      data: {
        type: 'LEVEL_UPDATE',
        level: 1,
        score: 100,
        completed: true
      }
    };
    
    window.dispatchEvent(new MessageEvent('message', message));
    
    await waitFor(() => {
      expect(screen.getByText('100')).toBeInTheDocument(); // Total points
      expect(screen.getByText('1/4')).toBeInTheDocument(); // Completed levels
    });
  });

  it('unlocks next level when current level is completed', async () => {
    render(<App />);
    
    const message = {
      data: {
        type: 'LEVEL_UPDATE',
        level: 1,
        score: 100,
        completed: true
      }
    };
    
    window.dispatchEvent(new MessageEvent('message', message));
    
    await waitFor(() => {
      const level2Button = screen.getByText('Start Level').closest('button');
      expect(level2Button).not.toBeDisabled();
    });
  });
}); 