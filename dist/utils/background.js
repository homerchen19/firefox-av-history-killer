const getDomainFromUrl = url => {
	let host = null;
  const regex = /^(?:http:\/\/|www\.|https:\/\/)([^\\/]+)/;
  const match = url.match(regex);

	if(typeof url === undefined || null === url)
		url = window.location.href;

  if(typeof match !== undefined && null !== match)
		host = match[1];

	return host;
}

const checkForValidUrl = (tabId, changeInfo, tab) => {
  const domainName = getDomainFromUrl(tab.url).toLowerCase();

	console.log(domainName);
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);
