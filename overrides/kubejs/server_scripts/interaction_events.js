// sliming
BlockEvents.rightClicked(event=> {
	const {block, level, item, player} = event;
	if(item.id != "minecraft:slime_ball") return
	if(block.id == "minecraft:sand") {
		block.set('kubejs:slimed_sand')
		player.swing(event.hand, true)
		level.playSound(null, block.x, block.y, block.z, 'minecraft:entity.slime.squish', 'blocks', 1, 1)
		event.server.runCommandSilent(`particle minecraft:item minecraft:slime_ball ${block.x} ${block.y+0.5} ${block.z} 0.75 0.75 0.75 0 10 normal`)
		if (!event.player.isCreative()) {
			event.item.count--
		}
	}
	if(block.id == "minecraft:gravel") {
		block.set('kubejs:slimed_gravel')
		player.swing(event.hand, true)
		level.playSound(null, block.x, block.y, block.z, 'minecraft:entity.slime.squish', 'blocks', 1, 1)
		event.server.runCommandSilent(`particle minecraft:item minecraft:slime_ball ${block.x} ${block.y+0.5} ${block.z} 0.75 0.75 0.75 0 10 normal`)
		if (!event.player.isCreative()) {
			event.item.count--
		}
	}
})