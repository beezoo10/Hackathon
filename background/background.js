chrome.runtime.onInstalled.addListener(() => {
  // default state goes here
  // this runs ONE TIME ONLY (unless the user reinstalls your extension)
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.method === "set_work") {
    chrome.storage.local
      .set({ work: request.num, state: request.state })
      .then(() => {
        console.log("Value is set to " + request.num);
      });
  } else if (request.method === "set_break") {
    chrome.storage.local
      .set({ break: request.num, state: request.state })
      .then(() => {
        console.log("Break is set to " + request.num);
      });
  }
});
