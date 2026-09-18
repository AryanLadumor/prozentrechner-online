/**
 * Robust Clipboard Utility
 * Works on all mobile browsers (iOS Safari, Android Chrome/WebView, Samsung Internet, etc.)
 * by providing a fallback when the Clipboard API is unavailable or fails.
 */

/**
 * Copy text to the clipboard, with automatic fallback for mobile browsers.
 *
 * Strategy:
 *  1. Try the modern `navigator.clipboard.writeText()` API first.
 *  2. If it's unavailable or rejects (common on mobile HTTP, older iOS/Android),
 *     fall back to the classic `document.execCommand('copy')` via a temporary textarea.
 *
 * @returns `true` if copy succeeded, `false` otherwise.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  // Strategy 1: Modern Clipboard API
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Clipboard API rejected — fall through to legacy fallback
    }
  }

  // Strategy 2: Legacy execCommand fallback (supports virtually all mobile browsers)
  return copyViaExecCommand(text);
}

/**
 * Fallback copy using a temporary textarea + execCommand('copy').
 * This works in older mobile browsers and non-HTTPS contexts where the
 * Clipboard API is blocked.
 */
function copyViaExecCommand(text: string): boolean {
  const textarea = document.createElement('textarea');

  // Prevent visual disruption — position off-screen and make invisible
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.cssText = 'position:fixed;left:-9999px;top:-9999px;opacity:0;';

  document.body.appendChild(textarea);

  // iOS Safari requires special handling: use setSelectionRange instead of select()
  const isIOS = /ipad|iphone|ipod/i.test(navigator.userAgent);
  if (isIOS) {
    const range = document.createRange();
    range.selectNodeContents(textarea);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
    textarea.setSelectionRange(0, text.length);
  } else {
    textarea.select();
  }

  let success = false;
  try {
    success = document.execCommand('copy');
  } catch {
    success = false;
  }

  document.body.removeChild(textarea);
  return success;
}
