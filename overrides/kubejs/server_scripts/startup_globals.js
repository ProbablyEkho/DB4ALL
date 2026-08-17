
///// called by effect_registration
// multiplies incoming damage by 2x when entity has Fragile effect
global.onEntityHurt = event => {
    const {amount, entity} = event
    if(entity.hasEffect('kubejs:fragile')) {
        event.setAmount(amount * 2)
    }
}

// if undead monsters are shot by silver arrow then double any incoming damage while under glowing (consecration) effect
global.onEntityHurt = event =>{
    const {amount, entity} = event
    if(entity.isUndead() && entity.hasEffect('glowing')) {
        event.setAmount(amount * 2)
    }
}