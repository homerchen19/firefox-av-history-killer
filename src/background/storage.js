const setNewIcon = storageChanges => {
  const { settings } = storageChanges;
  if (settings.newValue.active) {
    browser.browserAction.setIcon({
      path: {
        16: './assets/img/icon-16.png',
        48: './assets/img/icon-48.png',
        128: './assets/img/icon-128.png',
      },
    });
  } else {
    browser.browserAction.setIcon({
      path: {
        16: './assets/img/icon-16-inactive.png',
        48: './assets/img/icon-48-inactive.png',
        128: './assets/img/icon-128-inactive.png',
      },
    });
  }
};

browser.storage.onChanged.addListener(setNewIcon);
