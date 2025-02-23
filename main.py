def on_forever():
    player.say("Enter chaos services ")
    player.execute("/summon Minecraft:tnt")
    player.execute("/summon arrow ")
    player.execute("/summon lightning_bolt")
    gameplay.set_weather(THUNDER)
    gameplay.time_set(gameplay.time(MIDNIGHT))
    gameplay.set_game_mode(SURVIVAL, mobs.target(ALL_PLAYERS))
    gameplay.xp(9999999, mobs.target(ALL_PLAYERS))
    gameplay.set_difficulty(HARD)
    gameplay.title(mobs.target(ALL_PLAYERS), "Enter chaos services ", "Monkey ")
    gameplay.set_game_rule(WEATHER_CYCLE, False)
    gameplay.set_game_rule(KEEP_INVENTORY, False)
    mobs.apply_effect(BLINDNESS, mobs.target(ALL_ENTITIES), 600, 255)
    mobs.execute(mobs.target(ALL_ENTITIES),
        pos(0, 0, 0),
        "say praise chaos services ")
    mobs.spawn_particle(EXPLOSION_HUGE, pos(0, 0, 0))
    mobs.execute(mobs.target(ALL_ENTITIES),
        pos(0, 0, 0),
        "/summon lightning_bolt")
    mobs.teleport_to_position(mobs.target(ALL_ENTITIES), pos(0, 0, 0))
    mobs.give(mobs.target(ALL_PLAYERS), PURPLE_WOOL, 2555)
    mobs.execute(mobs.target(ALL_PLAYERS),
        pos(0, 0, 0),
        "/summon lightning_bolt")
    blocks.print("Fvcked by chaos services ",
        GRASS,
        pos(randint(0, 50), randint(10, 50), randint(0, 50)),
        NORTH)
    mobs.execute(mobs.target(ALL_PLAYERS),
        pos(0, 0, 0),
        "/summon Minecraft:tnt")
loops.forever(on_forever)
