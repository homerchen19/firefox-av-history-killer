import AV from '../utils/AV.json';

const settings = {
  active: true,
};

const getDomainFromUrl = url => {
	let domain = '';
  const regex = /^(?:http:\/\/|www\.|https:\/\/)([^\\/]+)/;
  const match = url.match(regex);

  if(typeof match !== undefined && null !== match) {
		domain = match[1];
	}

	return domain;
}

const checkValidUrl = historyItem => {
	let domain = '';
  const url = historyItem.url;

	if(typeof url !== undefined && null !== historyItem.url) {
		domain = getDomainFromUrl(url).toLowerCase();

    const isAV = (AV.indexOf(domain) !== -1) ? true : false;

    if(isAV) {
      browser.history.deleteUrl({
        url: url,
      });
    }
	}
};

const checkStoredSettings = async historyItem => {
  const storedSettings = await browser.storage.local.get();
  if(!storedSettings.settings) {
    browser.storage.local.set({settings});
  }
  else if(storedSettings.settings.active) {
    checkValidUrl(historyItem);
  }
}

browser.history.onVisited.addListener(checkStoredSettings);
