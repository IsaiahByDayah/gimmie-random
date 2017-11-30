let tabs = {};

function GetTab(site) {
	let tab = tabs[site] || safari.application.activeBrowserWindow.openTab();
	tabs[site] = tab;
	tab.activate();
	return tab
}

function Reddit() {
	let redditTab = GetTab("reddit");
	redditTab.url = "http://www.reddit.com/r/random";
}

function Wikipedia() {
	let wikipediaTab = GetTab("wikipedia");
	wikipediaTab.url = "https://en.wikipedia.org/wiki/Special:Random";
}