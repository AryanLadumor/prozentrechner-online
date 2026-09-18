/**
 * URL Query State Sync Helper
 * Allows sharing and bookmarking calculations by serializing and deserializing query params.
 */

export function syncUrlParams(params: Record<string, string | number | null | undefined>): void {
  if (typeof window === 'undefined') return;

  const url = new URL(window.location.href);
  Object.entries(params).forEach(([key, value]) => {
    if (value === null || value === undefined || value === '') {
      url.searchParams.delete(key);
    } else {
      url.searchParams.set(key, String(value));
    }
  });

  window.history.replaceState({}, '', url.toString());
}

export function getUrlParam(key: string): string | null {
  if (typeof window === 'undefined') return null;
  const url = new URL(window.location.href);
  return url.searchParams.get(key);
}

export async function copyShareLink(): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  // Use the global robust copy utility if available, otherwise try Clipboard API with fallback
  if ((window as any).copyToClipboard) {
    return (window as any).copyToClipboard(window.location.href);
  }
  // Fallback: dynamic import
  const { copyToClipboard } = await import('./clipboard');
  return copyToClipboard(window.location.href);
}
