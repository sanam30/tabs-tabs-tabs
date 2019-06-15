function updateCount(tabId, isOnRemoved) {
  browser.tabs.query({})
  .then((tabs) => {
    let length = tabs.length;

    // onRemoved fires too early and the count is one too many.
    // see https://bugzilla.mozilla.org/show_bug.cgi?id=1396758
    if (isOnRemoved && tabId && tabs.map((t) => { return t.id; }).includes(tabId)) {
      length--;
    }

    browser.browserAction.setBadgeText({text: length.toString()});
    if (length > 2) {
      browser.browserAction.setBadgeBackgroundColor({'color': 'green'});
    } else {
      browser.browserAction.setBadgeBackgroundColor({'color': 'red'});
    }
  });
}
/**
 *QR
 */

(function(browser) {
  function openMainPageWithString(str) {
      var qrURL = "data/index.html#" + encodeURIComponent(str);
      browser.tabs.create({url: qrURL});
  }

  browser.browserAction.onClicked.addListener(function (tab) {
      openMainPageWithString(tab.url);
  });

// Context menu for qr code.
  browser.contextMenus.create({
      "title": "Convert URL to QR Code",
      "contexts": ["page"],
      "onclick": function onGetPage(info, tab) {
          openMainPageWithString(tab.url);
      }
  });

  // decode QR code in image
  browser.contextMenus.create({
      "title": "Decode this QR Code",
      "contexts": ["image"],
      "onclick": function decodeQR(info, tab) {
          var urlDecode = "https://zxing.org/w/decode?u=" + encodeURIComponent(info.srcUrl);
          browser.tabs.create({url: urlDecode});
      }
  });

})(browser);

browser.tabs.onRemoved.addListener(
  (tabId) => { updateCount(tabId, true);
});
browser.tabs.onCreated.addListener(
  (tabId) => { updateCount(tabId, false);
});
updateCount();

/**
 * dark mode
 */
browser.contextMenus.create({
  id: "dark-mode",
  title: "Dark mode"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "dark-mode") {
      browser.tabs.executeScript({
      file: "darkmode.js"
      });
  }
});

