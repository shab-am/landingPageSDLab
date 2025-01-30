import { describe, it, expect, beforeEach, vi } from 'vitest';
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

describe('Level 2 Integration Tests', () => {
    let dom;
    let document;
    let window;

    beforeEach(() => {
        const html = fs.readFileSync(path.resolve(__dirname, '../../../public/level2.html'), 'utf8');
        dom = new JSDOM(html, {
            runScripts: 'dangerously',
            resources: 'usable',
            pretendToBeVisual: true,
        });
        document = dom.window.document;
        window = dom.window;

        window.alert = vi.fn();

        const mockLocalStorage = {};
        Object.defineProperty(window, 'localStorage', {
            value: {
                getItem: key => mockLocalStorage[key],
                setItem: (key, value) => {
                    mockLocalStorage[key] = value;
                },
            },
            writable: true,
        });
    });

    it('should render the header', () => {
        const header = document.querySelector('[data-testid="header"]');
        expect(header).not.toBeNull();
        expect(header.textContent).toBe('Tree Traversal Mastery');
    });

    it('should display instructions', () => {
        const instructions = document.querySelector('[data-testid="instructions-list"]');
        expect(instructions).not.toBeNull();
    });

    it('should have a level display', () => {
        const levelDisplay = document.querySelector('[data-testid="level-display"]');
        expect(levelDisplay).not.toBeNull();
        expect(levelDisplay.textContent).toContain('Level:');
    });

    it('should have a score display', () => {
        const scoreDisplay = document.querySelector('[data-testid="score-display"]');
        expect(scoreDisplay).not.toBeNull();
        expect(scoreDisplay.textContent).toContain('Score:');
    });

    it('should have a timer display', () => {
        const timerDisplay = document.querySelector('[data-testid="timer-display"]');
        expect(timerDisplay).not.toBeNull();
        expect(timerDisplay.textContent).toContain('Time Left:');
    });

    it('should render tree visualization', () => {
        const treeVisualization = document.querySelector('[data-testid="tree-visualization"]');
        expect(treeVisualization).not.toBeNull();
    });

    it('should have traversal buttons', () => {
        const preorderButton = document.querySelector('[data-testid="preorder-btn"]');
        const inorderButton = document.querySelector('[data-testid="inorder-btn"]');
        const postorderButton = document.querySelector('[data-testid="postorder-btn"]');
        expect(preorderButton).not.toBeNull();
        expect(inorderButton).not.toBeNull();
        expect(postorderButton).not.toBeNull();
    });

    it('should have a hint button', () => {
        const hintButton = document.querySelector('[data-testid="hint-btn"]');
        expect(hintButton).not.toBeNull();
    });
});