// MV3 service worker. Owns the right-click "Save to TapStash" context
// menu and any save logic that needs to run outside the popup.

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'save-to-tapstash',
    title: 'Save to TapStash',
    contexts: ['page', 'link'],
  });
});
