import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import LevelPage from '../components/LevelPage';

describe('LevelPage Integration Tests', () => {
  it('loads iframe with correct level', () => {
    render(
      <BrowserRouter>
        <LevelPage levelNumber={1} />
      </BrowserRouter>
    );
    
    const iframe = screen.getByTitle('Level 1');
    expect(iframe).toBeInTheDocument();
    expect(iframe.src).toContain('/level1.html');
  });

  it('sends initial state to parent on mount', async () => {
    // Mock localStorage
    const mockGetItem = vi.spyOn(Storage.prototype, 'getItem');
    mockGetItem.mockReturnValue('50');

    // Mock postMessage
    const postMessageSpy = vi.spyOn(window.parent, 'postMessage');
    
    render(
      <BrowserRouter>
        <LevelPage levelNumber={1} />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(postMessageSpy).toHaveBeenCalledWith({
        type: 'LEVEL_UPDATE',
        level: 1,
        score: 50,
        completed: false
      }, '*');
    });
  });
}); 