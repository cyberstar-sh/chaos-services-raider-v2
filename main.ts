loops.forever(function () {
    mobs.execute(
    mobs.target(ALL_ENTITIES),
    pos(0, 0, 0),
    "/effect @e health_boost 999999 255"
    )
    mobs.execute(
    mobs.target(ALL_ENTITIES),
    pos(0, 0, 0),
    "/effect @e instant_health 9999999 255"
    )
    mobs.spawn(SNIFFER, pos(randint(-10, 10), randint(-10, 10), randint(-10, 10)))
    mobs.spawn(CHICKEN, pos(randint(-10, 10), randint(-10, 10), randint(-10, 10)))
    mobs.execute(
    mobs.target(ALL_ENTITIES),
    pos(0, 0, 0),
    "/effect @e poison 999999 10"
    )
    player.say("Enter chaos services ")
    player.execute(
    "/summon Minecraft:tnt"
    )
    player.execute(
    "/summon arrow "
    )
    player.execute(
    "/summon lightning_bolt"
    )
    gameplay.setWeather(THUNDER)
    gameplay.timeSet(gameplay.time(MIDNIGHT))
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(ALL_PLAYERS)
    )
    gameplay.xp(9999999, mobs.target(ALL_PLAYERS))
    gameplay.setDifficulty(HARD)
    gameplay.title(mobs.target(ALL_PLAYERS), "§5Enter chaos services ", "§5Monkey ")
    gameplay.setGameRule(WEATHER_CYCLE, false)
    gameplay.setGameRule(KEEP_INVENTORY, false)
    mobs.applyEffect(SPEED, mobs.target(NEAREST_PLAYER), 10, 1)
    mobs.applyEffect(SLOWNESS, mobs.target(ALL_ENTITIES), 600, 255)
    mobs.applyEffect(HASTE, mobs.target(NEAREST_PLAYER), 600, 255)
    mobs.applyEffect(MINING_FATIGUE, mobs.target(NEAREST_PLAYER), 10, 1)
    mobs.applyEffect(STRENGTH, mobs.target(NEAREST_PLAYER), 600, 255)
    mobs.applyEffect(JUMP_BOOST, mobs.target(NEAREST_PLAYER), 10, 1)
    mobs.applyEffect(NAUSEA, mobs.target(NEAREST_PLAYER), 600, 255)
    mobs.applyEffect(REGENERATION, mobs.target(NEAREST_PLAYER), 10, 1)
    mobs.applyEffect(INVISIBILITY, mobs.target(NEAREST_PLAYER), 10, 1)
    mobs.applyEffect(BLINDNESS, mobs.target(NEAREST_PLAYER), 10, 1)
    mobs.execute(
    mobs.target(ALL_ENTITIES),
    pos(0, 0, 0),
    "say §5praise chaos services "
    )
    mobs.spawnParticle(MOBFLAME, pos(0, 0, 0))
    mobs.execute(
    mobs.target(ALL_ENTITIES),
    pos(0, 0, 0),
    "/summon lightning_bolt"
    )
    mobs.teleportToPosition(
    mobs.target(ALL_ENTITIES),
    pos(0, 0, 0)
    )
    mobs.give(
    mobs.target(ALL_PLAYERS),
    PURPLE_WOOL,
    2555
    )
    mobs.execute(
    mobs.target(ALL_PLAYERS),
    pos(0, 0, 0),
    "/summon lightning_bolt"
    )
    mobs.execute(
    mobs.target(ALL_PLAYERS),
    pos(0, 0, 0),
    "/summon Minecraft:tnt"
    )
})
