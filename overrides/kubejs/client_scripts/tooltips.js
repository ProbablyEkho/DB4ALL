// priority: 0

// NOTE: this script is mostly pointless but is here just in case tooltips are enabled on client or otherwise made visible
// also doesnt even work so..
ItemEvents.modifyTooltips(event => {
  // Hard removes item names, for EMI
	event.modifyAll({advanced: true}, tooltip => {
		tooltip.removeLine(0)
		tooltip.removeLine(0)
		tooltip.removeLine(0)
	})
	event.add('#db3k:disabled_items', '§4Disabled item')
})
