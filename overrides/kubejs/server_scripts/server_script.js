// priority: 0

// Foods that should return an item when eaten

ItemEvents.foodEaten([
  	'kubejs:beer',
	'kubejs:wine',
	'kubejs:cider',
	'kubejs:mead'
	], event => {
	event.server.schedule(1, callback => {
		event.player.giveInHand('kubejs:chalice')
	})
})

// Sets default gamerules on the first time a world is loaded
ServerEvents.loaded(event => {
	// only run on first load
	const {server} = event;
	//if (event.server.persistentData.gameRules) return
	
	// some of these may be unneccessary but it doesnt hurt to be thorough
	server.gameRules.set("doTraderSpawning", false)
	server.gameRules.set("doWeatherCycle", false)
	server.gameRules.set("maxEntityCramming", '0')
	server.gameRules.set("doPatrolSpawning", false)
	server.gameRules.set("reducedDebugInfo", true)
	server.gameRules.set("doInsomnia", false)
	server.gameRules.set("mobExplosionDropDecay", false)
	server.gameRules.set("blockExplosionDropDecay", false)
	
	// death counter in tab list
    server.runCommandSilent('/scoreboard objectives add deathCount deathCount')
	server.runCommandSilent('/scoreboard objectives setdisplay list deathCount')

	//event.server.persistentData.gameRules = true
})

// Disables some commands
ServerEvents.command((event) => {
    const command = event.input
    const arguments = command.split(" ")
    if (arguments[0] === "emi") {
        event.cancel()
    }
})

