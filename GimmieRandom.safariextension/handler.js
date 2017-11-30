safari.application.addEventListener("command", HandleCommand, false);
safari.application.addEventListener("message", HandleMessage, false);

function HandleMessage(msg) {
	if(msg.name == 'GimmieRandom') {
        HandleCommand({command: msg.message});
    }
}

function HandleCommand(event) {
	switch (event.command) {
		case "reddit":
			Reddit();
			break;
		case "wikipedia":
			Wikipedia();
			break;
		default:
			console.log("Unknown Random Site");
			break;
	}
}