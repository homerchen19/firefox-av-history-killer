const getDomainFromUrl = url => {
	let domain = '';
  const regex = /^(?:http:\/\/|www\.|https:\/\/)([^\\/]+)/;
  const match = url.match(regex);

  if(typeof match !== undefined && null !== match) {
		domain = match[1];
	}

	return domain;
}

const checkForValidUrl = historyItem => {
	let domain = '';
	let currentTab = {};

	if(typeof historyItem.url !== undefined && null !== historyItem.url) {
		domain = getDomainFromUrl(historyItem.url).toLowerCase();

		chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
			currentTab = tabs[0];
			chrome.pageAction.show(currentTab.id);
		});

	}
  console.log(domain);
};

chrome.history.onVisited.addListener(checkForValidUrl);
