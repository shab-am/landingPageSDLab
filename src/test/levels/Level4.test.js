import { describe, it, expect, beforeEach, vi } from 'vitest';
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

describe('Level 4 Integration Tests', () => {
    let dom;
    let document;
    let window;

    beforeEach(() => {
        const html = fs.readFileSync(path.resolve(__dirname, '../../../public/level4.html'), 'utf8');
        dom = new JSDOM(html, {
            runScripts: 'dangerously',
            resources: 'usable',
            pretendToBeVisual: true
        });
        document = dom.window.document;
        window = dom.window;

        // Mock window.alert
        window.alert = vi.fn();

        // Mock localStorage
        const mockLocalStorage = {};
        Object.defineProperty(window, 'localStorage', {
            value: {
                getItem: key => mockLocalStorage[key],
                setItem: (key, value) => { mockLocalStorage[key] = value }
            },
            writable: true
        });
    });

    it('initializes the game interface', () => {
        const container = document.querySelector('.container');
        expect(container).not.toBeNull();
    });
});