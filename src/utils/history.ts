/**
 * Calculation History Manager for Percentage Calculator
 * Persists user calculation history in localStorage with tagging,
 * restoring to input fields, and export utilities.
 */

export interface HistoryItem {
  id: string;
  timestamp: number;
  toolType: 'percentage-of' | 'percentage-rate' | 'base-value' | 'percentage-change' | 'add-subtract' | 'discount' | 'vat' | 'rule-of-three' | 'difference' | 'salary';
  toolName: string;
  inputs: Record<string, string | number>;
  result: string;
  summary: string;
}

const STORAGE_KEY = 'pct_calc_history_v1';
const MAX_HISTORY = 50;

export function getHistory(): HistoryItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error('Failed to load history:', e);
    return [];
  }
}

export function saveHistoryItem(item: Omit<HistoryItem, 'id' | 'timestamp'>): HistoryItem {
  const newItem: HistoryItem = {
    ...item,
    id: 'hist_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    timestamp: Date.now()
  };

  if (typeof window === 'undefined') return newItem;

  try {
    const history = getHistory();
    // Avoid duplicate immediate entries
    if (history.length > 0 && history[0].summary === newItem.summary) {
      return history[0];
    }
    const updated = [newItem, ...history].slice(0, MAX_HISTORY);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('historyUpdated', { detail: updated }));
  } catch (e) {
    console.error('Failed to save history item:', e);
  }

  return newItem;
}

export function deleteHistoryItem(id: string): void {
  if (typeof window === 'undefined') return;
  try {
    const history = getHistory().filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    window.dispatchEvent(new CustomEvent('historyUpdated', { detail: history }));
  } catch (e) {
    console.error('Failed to delete history item:', e);
  }
}

export function clearHistory(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('historyUpdated', { detail: [] }));
  } catch (e) {
    console.error('Failed to clear history:', e);
  }
}
