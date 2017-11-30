
let sitesConfig = [
	{
		site: "reddit",
		keyCode: 82 // R
	},
	{
		site: "wikipedia",
		keyCode: 87 // W
	}
];

window.addEventListener('keydown', function handleKeydown(e) {
	let site;

	sitesConfig.forEach(function(config){
		if (config.keyCode == e.keyCode) {
			site = config.site;
		}
	});

	if (site && e.shiftKey && e.ctrlKey) {
			GimmieRandom(site);
	}
}, false);

function GimmieRandom(site) {
	safari.self.tab.dispatchMessage('GimmieRandom', site);
}
