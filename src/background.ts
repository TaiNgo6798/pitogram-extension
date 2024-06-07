let count = 0;

setInterval(() => {
  count++;
  chrome.storage.local.set({ count });
}, 1000);
