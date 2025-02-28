import type { HeroId } from '@/data/heroes';

export type PerkType = 'minor' | 'major';
export type PerkIndex = 0 | 1;

export type Perk = {
	id: number;
	heroId: HeroId;
	name: string;
	description: string;
	perkType: PerkType;
	perkIndex: PerkIndex;
};

export type EvaluatedPerk = Perk & { isCorrect?: boolean };

export const PERKS: Perk[] = [
	/**
	 *
	 *
	 *
	 * Tank
	 *
	 *
	 *
	 */
	{ id: 0, heroId: 'dva', name: 'Bunny Stomp', description: "Call Mech's radius damage increased by 50%", perkType: 'minor', perkIndex: 0 },
	{ id: 1, heroId: 'dva', name: 'Ejection Suit', description: 'Eject grants 75 temporary overhealth', perkType: 'minor', perkIndex: 1 },
	{
		id: 2,
		heroId: 'dva',
		name: 'Shield System',
		description: 'Convert 150 health to shields. Defense Matrix restores shields based on 25% of its damage absorbed.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 3,
		heroId: 'dva',
		name: 'Heavy Rockets',
		description: 'Micro Missiles are swapped for Heavy Rockets which fire fewer projectiles with increased damage and explosion size.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 4,
		heroId: 'doomfist',
		name: 'One-Two',
		description: 'Hitting an enemy with Rocket Punch reloads all Hand Cannon ammo.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 5,
		heroId: 'doomfist',
		name: 'Survival of the Fittest',
		description: 'The Best Defense grants 25 overhealth from eliminations and its max overhealth is increased by 50.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 6,
		heroId: 'doomfist',
		name: 'Seismic Empowerment',
		description: 'Hitting 3 or more enemies with Seismic Slam empowers Rocket Punch.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 7,
		heroId: 'doomfist',
		name: 'Power Matrix',
		description: 'Power Block absorbs projectiles for the first second of its duration.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 8,
		heroId: 'hazard',
		name: 'Off The Top',
		description: "Violent Leap's Slash deals 30% more damage to enemies above 250 health.",
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 9,
		heroId: 'hazard',
		name: 'Reconstruction',
		description: 'Jagged Wall hits charge Spike Guard with 25 energy, up to 50 extra.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{ id: 10, heroId: 'hazard', name: 'Anarchic Zeal', description: "Spike Guard's spikes gain 25% Lifesteal.", perkType: 'major', perkIndex: 0 },
	{ id: 11, heroId: 'hazard', name: 'Deep Leap', description: "Violent Leap's range is increased by 20%.", perkType: 'major', perkIndex: 1 },
	{
		id: 12,
		heroId: 'junker-queen',
		name: 'Rending Recall',
		description: 'Recalling Jagged Blade from a stuck target refreshes its wound.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 13,
		heroId: 'junker-queen',
		name: 'Battle Shout',
		description: 'Commanding Shout fully reloads Scatter Gun and increases allied reload speed by 50%.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 14,
		heroId: 'junker-queen',
		name: 'Deep Wounds',
		description: 'Scattergun hits extend your wound durations on those enemies by .25 seconds.',
		perkType: 'major',
		perkIndex: 0,
	},
	{ id: 15, heroId: 'junker-queen', name: 'Savage Satiation', description: "Carnage's impact damage gains 100% lifesteal.", perkType: 'major', perkIndex: 1 },
	{ id: 16, heroId: 'mauga', name: 'Kinetic Bandolier', description: 'Overrun reloads up to 150 ammo while charging.', perkType: 'minor', perkIndex: 0 },
	{
		id: 17,
		heroId: 'mauga',
		name: 'Two Hearts',
		description: 'While on an objective, Mauga counts as 2 heroes and regenerates 20 health per second.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{ id: 18, heroId: 'mauga', name: 'Firewalker', description: 'Overrun ignites enemies hit.', perkType: 'major', perkIndex: 0 },
	{
		id: 19,
		heroId: 'mauga',
		name: 'Combat Fuel',
		description: 'Critical hits grant Mauga 2 temporary overhealth on Cardiac Overdrive’s next use, up to 100 overhealth.',
		perkType: 'major',
		perkIndex: 1,
	},
	{ id: 20, heroId: 'orisa', name: 'Heat Dissipator', description: 'Primary fire critical hits refund heat.', perkType: 'minor', perkIndex: 0 },
	{
		id: 21,
		heroId: 'orisa',
		name: 'Fleeting Bulwark',
		description: 'Fortify briefly grants an additional 100 overhealth when activated.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 22,
		heroId: 'orisa',
		name: 'Charged Javelin',
		description: 'Hold (RMB) to charge Energy Javelin, increasing its speed and knockback pierces enemies at full power.',
		perkType: 'major',
		perkIndex: 0,
	},
	{ id: 23, heroId: 'orisa', name: 'Protective Barrier', description: 'Convert Javelin Spin to instead launch a barrier.', perkType: 'major', perkIndex: 1 },
	{
		id: 24,
		heroId: 'ramattra',
		name: 'Void Surge',
		description: 'Void Accelerator periodically releases a burst of six additional projectiles during continuous fire',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 25,
		heroId: 'ramattra',
		name: 'Prolonged Barrier',
		description: "Void Barrier's duration is increased by 25%.",
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 26,
		heroId: 'ramattra',
		name: 'Nanite Repair',
		description: 'Ramattra is healed for 50 health per second while within Ravenous Vortex.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 27,
		heroId: 'ramattra',
		name: 'Vengeful Vortex',
		description: 'While Ravenous Vortex is airborne, use E again to detonate it, dealing 50 damage and pulling enemies downward.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 28,
		heroId: 'reinhardt',
		name: "Crusader's Resolve",
		description: 'While using Barrier Field, your passive health regeneration triggers 50% sooner.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 29,
		heroId: 'reinhardt',
		name: 'Fiery Uptake',
		description: "Barrier Field is healed for 100% of Fire Strike's damage dealt.",
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 30,
		heroId: 'reinhardt',
		name: 'Shield Slam',
		description: 'While Barrier Field is active, use (LMB) to damage and knockback enemies.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 31,
		heroId: 'reinhardt',
		name: 'Crushing Victory',
		description: 'Charge damage grants temporary overhealth for 50% of the damage dealt.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 32,
		heroId: 'roadhog',
		name: 'Scrap Hook',
		description: 'Chain hook hits reload 2 ammo.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{ id: 33, heroId: 'roadhog', name: 'Hog Toss', description: "Pig Pen's throw range is increased by 50%.", perkType: 'minor', perkIndex: 1 },
	{
		id: 34,
		heroId: 'roadhog',
		name: 'Invigorate',
		description: "Take A Breather rapidly increases Roadhog's movement speed by 30%.",
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 35,
		heroId: 'roadhog',
		name: 'Hogdrogen Exposure',
		description: 'Take A Breather also heals nearby allies for 50% of healing.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 36,
		heroId: 'sigma',
		name: 'Kinetic Cycle',
		description: "Absorbing projectiles with Kinetic Grasp also reduces Accretion's cooldown.",
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 37,
		heroId: 'sigma',
		name: 'Massive Impact',
		description: "Accretion's knockdown duration increases up to three seconds based on travel distance.",
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 38,
		heroId: 'sigma',
		name: 'Hyper Strike',
		description: 'Every five direct hits with Hyperspheres, your next successful Quick Melee levitates and knocks away enemies.',
		perkType: 'major',
		perkIndex: 0,
	},
	{ id: 39, heroId: 'sigma', name: 'Levitation', description: 'Activate and hold Double Jump briefly to levitate upward.', perkType: 'major', perkIndex: 1 },
	{
		id: 40,
		heroId: 'winston',
		name: 'Short Circuit',
		description: 'Tesla Cannon deals 30% more damage to deployable objects.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 41,
		heroId: 'winston',
		name: 'Heavy Landing',
		description: "During Primal Rage, Jump Pack's damage and area increase by up to 75% while airborne.",
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 42,
		heroId: 'winston',
		name: 'Chain Lightning',
		description: 'Fully charged Secondary Fire hits bounce up to two additional targets.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 43,
		heroId: 'winston',
		name: 'Revitalizing Barrier',
		description: 'Barrier Projector heals allies within it for 30 health per second.',
		perkType: 'major',
		perkIndex: 1,
	},
	{ id: 44, heroId: 'wrecking-ball', name: 'Steamroller', description: 'Roll impacts deal 100% more damage to tanks.', perkType: 'minor', perkIndex: 0 },
	{ id: 45, heroId: 'wrecking-ball', name: 'Pack Rat', description: 'Health Packs heal an additional 100 health.', perkType: 'minor', perkIndex: 1 },
	{
		id: 46,
		heroId: 'wrecking-ball',
		name: 'Hang Time',
		description: 'Piledriver winds up longer, gaining air control and dealing up to 50% more damage.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 47,
		heroId: 'wrecking-ball',
		name: 'Transfer Efficiency',
		description: 'Reactivating Adaptive Shield reduces its cooldown by 1.5 seconds per ally affected and ally health gained is increased by 33%.',
		perkType: 'major',
		perkIndex: 1,
	},
	{ id: 48, heroId: 'zarya', name: 'Jump Ups', description: "Secondary Fire's self-knockback is increased by 75%.", perkType: 'minor', perkIndex: 0 },
	{
		id: 49,
		heroId: 'zarya',
		name: 'Gravitation Crush',
		description: 'Graviton Surge deals up to 30% of enemy max health as damage over time.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 50,
		heroId: 'zarya',
		name: 'Energy Lance',
		description: "Particle Cannon's beam pierces enemies while over 50 energy.",
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 51,
		heroId: 'zarya',
		name: 'Spotter',
		description: 'Projected Barrier activates ally health regeneration and increases their movement speed by 15%.',
		perkType: 'major',
		perkIndex: 1,
	},

	/**
	 *
	 *
	 *
	 * Damage
	 *
	 *
	 *
	 */
	{
		id: 52,
		heroId: 'ashe',
		name: 'Rapid Fire',
		description: 'Unscoped shots gain 30% increased attack speed, but deal 15% less damage.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 53,
		heroId: 'ashe',
		name: 'Sidewinder',
		description: 'Coach Gun pushes Ashe and enemies 20% farther',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 54,
		heroId: 'ashe',
		name: "Viper's Sting",
		description: 'Hitting two consecutive scoped shots on a target deals 25 extra damage and reloads two ammo.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 55,
		heroId: 'ashe',
		name: 'Airburst',
		description: 'Dynamite has a 40% increased detonation radius while airborne and refunds three ammo when thrown.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 56,
		heroId: 'bastion',
		name: 'Smart Bomb',
		description: "A-36 Tactical Grenade's self-knockback is increased by 25% and no longer damages you.",
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 57,
		heroId: 'bastion',
		name: 'Armored Artillery',
		description: 'Configuration: Artillery grants 300 temporary overhealth.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 58,
		heroId: 'bastion',
		name: 'Lindholm Explosives',
		description: "Configuration: Assault's Weapon slowly fires explosive shells instead of a rotary cannon.",
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 59,
		heroId: 'bastion',
		name: 'Self-Repair',
		description: 'Press E to rapidly heal yourself.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 60,
		heroId: 'cassidy',
		name: 'Quick Draw',
		description: 'Fan the Hammer shots are individually controlled and can crit for 50% more damage.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 61,
		heroId: 'cassidy',
		name: 'Past Noon',
		description: 'Deadeye refunds 30% Ultimate charge if it fully expires.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 62,
		heroId: 'cassidy',
		name: "Gun Slingin'",
		description: 'Critical Hits with primary fire reduce the cooldown of Combat Roll by three seconds.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 63,
		heroId: 'cassidy',
		name: 'Bang Bang',
		description: 'Cassidy throws a second Flashbang that travels farther, but both Flashbangs deal 30% reduced damage.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 64,
		heroId: 'echo',
		name: 'Friendly Imaging',
		description: 'Duplicate can also target allies.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 65,
		heroId: 'echo',
		name: 'Enhanced Duplication',
		description: "During Duplicate, your clone's first ultimate extends Duplicate's duration by three seconds.",
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 66,
		heroId: 'echo',
		name: 'Full Salvo',
		description: 'Sticky Bombs fires 50% more projectiles, but all Sticky Bombs deal 15% less damage.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 67,
		heroId: 'echo',
		name: 'High Beams',
		description: "Focusing Beam eliminations reset Flight's cooldown.",
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 68,
		heroId: 'genji',
		name: 'Acrobatics',
		description: 'Swift Strike resets double jump.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 69,
		heroId: 'genji',
		name: "Dragon's Thirst",
		description: 'Dragonblade swings gain 30% lifesteal.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 70,
		heroId: 'genji',
		name: 'Blade Twisting',
		description: 'Swift Strike deals 25 additional damage over time when used shortly after an elimination.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 71,
		heroId: 'genji',
		name: 'Meditation',
		description: 'Regenerate 25 health per second while Deflect is active',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 72,
		heroId: 'hanzo',
		name: 'Sonic Disruption',
		description: 'Sonic Arrow hacks nearby Health Packs for 12 seconds.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 73,
		heroId: 'hanzo',
		name: 'Scatter Arrows',
		description: 'Storm Arrows split into three new projectiles on their first ricochet and bounce two extra times.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 74,
		heroId: 'hanzo',
		name: 'Dragon Fury',
		description: 'After hitting an enemy with primary fire, gain 25% attack speed for one second.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 75,
		heroId: 'hanzo',
		name: 'Yamagami Technique',
		description: 'Wall Climb accelerates your Lunge cooldown by 250%.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 76,
		heroId: 'junkrat',
		name: 'Aluminium Frame',
		description: "Steel Trap's throw range is increased by 50%.",
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 77,
		heroId: 'junkrat',
		name: 'Nitro Boost',
		description: "During RIP-Tire, use (LSHIFT) to gain a quick boost of speed. Doing so reduces RIP-Tire's damage by 50%.",
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 78,
		heroId: 'junkrat',
		name: 'Frag Cannon',
		description: "Frag Launcher's projectile speed is increased by 40%, but its max ammo is reduced by one.",
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 79,
		heroId: 'junkrat',
		name: 'Tick Tock',
		description: 'Concussive Mine arms 0.5 second after landing, increasing damage by 50%, explosion radius by 50%, and health by 200%.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 80,
		heroId: 'mei',
		name: 'Chilling Reach',
		description: "Primary fire's range is increased by 30%.",
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 81,
		heroId: 'mei',
		name: 'Permafrost',
		description: "Ice Wall's duration and cooldown are increased by two seconds.",
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 82,
		heroId: 'mei',
		name: 'Biting Cold',
		description: 'Secondary fire hits slow enemies by 15% for 1.5 seconds, stacking up to 30%.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 83,
		heroId: 'mei',
		name: 'Cryo-Storm',
		description: 'Cryo-Freeze slows and deals 70 damage per second to nearby enemies.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 84,
		heroId: 'pharah',
		name: 'Drift Thrusters',
		description: 'Pharah can move while Barrage is active.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 85,
		heroId: 'pharah',
		name: 'Helix Shields',
		description: 'Convert 75 health to shields.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 86,
		heroId: 'pharah',
		name: 'Concussive Implosion',
		description: "Concussive Blast's knockback is inverted to a pull in.",
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 87,
		heroId: 'pharah',
		name: 'Fuel Stores',
		description: 'Jet Dash grants 50% fuel. Maximum overfuel is increased by 100%.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 88,
		heroId: 'reaper',
		name: "Death's Shadow",
		description: 'Shadow Step reloads hellfire shotguns and has 25% increased range.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 89,
		heroId: 'reaper',
		name: 'Soul Reaving',
		description: 'Collect Soul Globes from dead enemies to restore 50 health.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 90,
		heroId: 'reaper',
		name: 'Dire Triggers',
		description: 'Use (RMB) to fire a volley with long range accuracy from both Hellfire shotguns.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 91,
		heroId: 'reaper',
		name: 'Ravenous Wraith',
		description: 'Leaving Wraith form grants 40% additional lifesteal for three seconds',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 92,
		heroId: 'sojourn',
		name: 'Extended Mag',
		description: 'Maximum ammo increased by 15.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 93,
		heroId: 'sojourn',
		name: 'Overcharged',
		description: "Railgun's maximum energy is increased by 50 while Overclock is active.",
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 94,
		heroId: 'sojourn',
		name: 'Dual Thrusters',
		description: 'Power Slide gains an additional charge and its jump height shifts to lateral movement.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 95,
		heroId: 'sojourn',
		name: 'Adhesive Siphon',
		description: 'Disruptor Shot can stick to enemies and generates Railgun energy when dealing damage.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 96,
		heroId: 'soldier-76',
		name: 'Recycled Pulse Munitions',
		description: 'Helix Rockets reload 15 ammo if they damage an enemy.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 97,
		heroId: 'soldier-76',
		name: 'Field Emergency',
		description: "Biotic Field's healing is increased by 100% on critical health allies.",
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 98,
		heroId: 'soldier-76',
		name: 'Agility Training',
		description: "Sprint's speed is increased by 20% and reload can be performed while sprint is active.",
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 99,
		heroId: 'soldier-76',
		name: 'Stim Pack',
		description: 'Biotic Field can be used as a Stim Pack, increasing attack speed and reload speed by 30% while being unhealable for four seconds.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 100,
		heroId: 'sombra',
		name: 'Viral Efficacy',
		description: "Virus' cooldown is reduced by three seconds when an enemy affected by Virus is eliminated",
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 101,
		heroId: 'sombra',
		name: 'CTRL ALT ESC',
		description: 'Teleporting with Translocator while at critical health initiates passive health regeneration.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 102,
		heroId: 'sombra',
		name: 'White Hat',
		description: 'Hack can be used on allies to restore 100 health over two seconds.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 103,
		heroId: 'sombra',
		name: 'Stack Overflow',
		description: "Hack's silence duration is increased by 100%, but its range is decreased by 30%.",
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 104,
		heroId: 'symmetra',
		name: 'Sentry Capacity',
		description: 'Sentry Turret gains an additional charge',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 105,
		heroId: 'symmetra',
		name: 'Advanced Teleportation',
		description: "Teleporter's range is increased by 50%.",
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 106,
		heroId: 'symmetra',
		name: 'Perfect Alignment',
		description: "Primary fire's range increases by 15% with each additional charge level.",
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 107,
		heroId: 'symmetra',
		name: 'Shield Battery',
		description: 'Symmetra regenerates 20 shields per second while within 10 meters of her teleporter.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 108,
		heroId: 'torbjorn',
		name: 'Craftsman',
		description: "Forge Hammer can restore armor health to allies. Turret repair's heal is increased by 25%.",
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 109,
		heroId: 'torbjorn',
		name: 'Fully Loaded',
		description: "Activating Overload fully refills Rivet Gun's ammo.",
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 110,
		heroId: 'torbjorn',
		name: 'Anchor Bolts',
		description: "Deploy Turret's throw range is increased by 50% and it can now attach to walls and ceilings.",
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 111,
		heroId: 'torbjorn',
		name: 'Overloaded Turret',
		description: 'Overload upgrades your Turret for five seconds, increasing its health and damage.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 112,
		heroId: 'tracer',
		name: 'Blink Packs',
		description: 'Health Packs restore one Blink charge.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 113,
		heroId: 'tracer',
		name: 'Blast from the Past',
		description: "Pulse Bomb's radius is increased by 50%.",
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 114,
		heroId: 'tracer',
		name: 'Flashback',
		description: 'Recall restores all Blink charges.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 115,
		heroId: 'tracer',
		name: 'Quantum Entanglement',
		description: 'Recall grant 50 overhealth that decays over time.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 116,
		heroId: 'venture',
		name: 'Seismic Sense',
		description: 'While underground, Venture can sense enemies within 25 meters.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 117,
		heroId: 'venture',
		name: 'Excavation Exhilaration',
		description: 'While Tectonic Shock is active, cooldowns refresh 300% faster.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 118,
		heroId: 'venture',
		name: 'SMART-R Excavator',
		description: "SMART Excavator's range is increased by 25%.",
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 119,
		heroId: 'venture',
		name: 'Covered in Dirt',
		description: "Dealing damage with Clobber grants up to 30 Explorer's Resolve shields.",
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 120,
		heroId: 'widowmaker',
		name: 'Scoped Efficiency',
		description: 'Scoped shots cost three ammo instead of five.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 121,
		heroId: 'widowmaker',
		name: 'Focused Aim',
		description: 'Scoped shots charge 50% faster during Infra-Sight.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 122,
		heroId: 'widowmaker',
		name: 'Escape Plan',
		description: "Scoped shot hits reduce Grappling Hook's cooldown by up to four seconds.",
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 123,
		heroId: 'widowmaker',
		name: 'Deadly Deux',
		description: 'Venom Mine gains 50% increased damage and a second charge, enabling two active mines at a time.',
		perkType: 'major',
		perkIndex: 1,
	},
	/**
	 *
	 *
	 *
	 * Support
	 *
	 *
	 *
	 */
	{
		id: 124,
		heroId: 'ana',
		name: 'Groggy',
		description: 'Enemies waking up from Sleep Dart are slowed for two seconds',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 125,
		heroId: 'ana',
		name: 'Biotic Bounce',
		description: 'After exploding, Biotic Grenade bounces and explodes again for 50 damage and healing',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 126,
		heroId: 'ana',
		name: 'Headhunter',
		description: 'Biotic Rifle can crit enemies.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 127,
		heroId: 'ana',
		name: 'Shrike',
		description: 'Using Nano Boost also casts it on Ana.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 128,
		heroId: 'baptiste',
		name: 'Field Medicine',
		description: 'Immortality Field restores 80 health to nearby allies and 40 health to Baptiste when destroyed.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 129,
		heroId: 'baptiste',
		name: 'Automated Healing',
		description: 'After placing Amplification Matrix, your Shoulder Turret periodically fires up to 12 shots at allies, each restoring 25 health.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 130,
		heroId: 'baptiste',
		name: 'Assault Burst',
		description: 'Regenerative Burst grants Baptiste 20% attack speed for four seconds, but no longer instantly heals',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 131,
		heroId: 'baptiste',
		name: 'Rocket Boots',
		description: 'While airborne from Exo Boots, use (SPACE) to dash horizontally.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 132,
		heroId: 'brigitte',
		name: 'Barrier Restoration',
		description: 'Shield Bash restores 100 health to Barrier Shield when it hits an enemy.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 133,
		heroId: 'brigitte',
		name: 'Morale Boost',
		description: 'Inspire lasts three seconds longer when activated by Whip Shot.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 134,
		heroId: 'brigitte',
		name: 'Quick Fix',
		description: 'Repair Packs instantly heal an additional health to critical health allies.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 135,
		heroId: 'brigitte',
		name: 'Whip Lash',
		description: "Whip Shot's knockback can slam enemies into walls, dealing 50 extra damage.",
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 136,
		heroId: 'illari',
		name: 'Rapid Construction',
		description: 'Healing Pylon builds 300% faster and its cooldown is reduced by 1.5 seconds.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 137,
		heroId: 'illari',
		name: 'Summer Solstice',
		description: "Illari's flight time during Captive Sun is increased by three seconds and her flight speed is increased by 20%.",
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 138,
		heroId: 'illari',
		name: 'Solar Power',
		description: 'Fully charged Solar Rifle hits grant 12.5% of your maximum solar energy, overfilling up to 50%.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 139,
		heroId: 'illari',
		name: 'Sunburn',
		description: 'Outburst ignites enemies, dealing an additional 70 damage over three seconds.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 140,
		heroId: 'juno',
		name: 'Familiar Vitals',
		description: 'Pulsar Torpedoes lock onto allies 35% faster.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 141,
		heroId: 'juno',
		name: 'Hyper Boost',
		description: 'While using Glide Boost, passing through Hyper Ring pushes you forward.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 142,
		heroId: 'juno',
		name: 'Master Blaster',
		description: 'Mediblaster can crit enemies.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 143,
		heroId: 'juno',
		name: 'Re-Boots',
		description: 'Activating Glide Boost resets Double Jump.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 144,
		heroId: 'kiriko',
		name: 'Urgent Care',
		description: 'Healing Ofuda projectile speed is increased by 50% when seeking critical health allies.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 145,
		heroId: 'kiriko',
		name: 'Fortune Teller',
		description: 'Kunai hits launch two Healing Ofuda to an ally in front of you.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 146,
		heroId: 'kiriko',
		name: 'Shuffling',
		description: 'Swift Step can be used again within four seconds of its initial cast.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 147,
		heroId: 'kiriko',
		name: 'Foxtrot',
		description: 'Protection Suzu grants 40% movement speed to allies for two seconds.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 148,
		heroId: 'lifeweaver',
		name: 'Cleansing Grasp',
		description: 'Life Grip cleanses negative effects.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 149,
		heroId: 'lifeweaver',
		name: 'Life Cycle',
		description: 'While alive, regenerate 10 health per second. Upon death, drop a healing seed that heals allies for 250 health.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 150,
		heroId: 'lifeweaver',
		name: 'Lifeweaving',
		description: 'Rejuvenating Dash adds 20 healing to your next Healing Blossom within three seconds.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 151,
		heroId: 'lifeweaver',
		name: 'Superbloom',
		description: 'Thorns detonate for 30 extra damage when enough stick within 1.5 seconds.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 152,
		heroId: 'lucio',
		name: 'Bass Blowout',
		description: "Soundwave's knockback is increased by 15%.",
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 153,
		heroId: 'lucio',
		name: "Groovin'",
		description: 'Regenerate four ammo per second while wall riding.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 154,
		heroId: 'lucio',
		name: 'Noise Violation',
		description: "Crossfade's range is increased by 150% while Amp It Up is active.",
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 155,
		heroId: 'lucio',
		name: 'Accelerando',
		description: "Lúcio's attack speed is increased by 50% while Amp It Up is active.",
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 156,
		heroId: 'mercy',
		name: 'Angelic Recovery',
		description: 'Mercy receives 15 health per second while Caduceus Staff is attached to a full health ally.',
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 157,
		heroId: 'mercy',
		name: 'Winged Reach',
		description: "Guardian Angel's range is increased by 30%.",
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 158,
		heroId: 'mercy',
		name: 'Chain Boost',
		description: 'Secondary fire links to a second nearby ally.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 159,
		heroId: 'mercy',
		name: 'Flash Heal',
		description: "Resurrect can be used on Caduceus Staff's active target to restore 150 health. Doing so incurs a 15 second cooldown.",
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 160,
		heroId: 'moira',
		name: 'Vanish',
		description: "Fade's duration is increased by 0.5 seconds.",
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 161,
		heroId: 'moira',
		name: 'Uprush',
		description: "Fade's jump height is increased by 50%.",
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 162,
		heroId: 'moira',
		name: 'Ethical Nourishment',
		description: "Biotic Orb's first 50 healing is instant on each ally it encounters.",
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 163,
		heroId: 'moira',
		name: 'Contamination',
		description: 'Enemies being damaged by Biotic Orb receive 25% reduced healing.',
		perkType: 'major',
		perkIndex: 1,
	},
	{
		id: 164,
		heroId: 'zenyatta',
		name: 'Zenith Kick',
		description: "Snap Kick's knockback distance is increased by 30%.",
		perkType: 'minor',
		perkIndex: 0,
	},
	{
		id: 165,
		heroId: 'zenyatta',
		name: 'Ascendance',
		description: 'Activate and hold Double Jump to hover for up to three seconds.',
		perkType: 'minor',
		perkIndex: 1,
	},
	{
		id: 166,
		heroId: 'zenyatta',
		name: 'Focused Destruction',
		description: 'Secondary fire charges 20% faster and can store one extra Orb of Destruction.',
		perkType: 'major',
		perkIndex: 0,
	},
	{
		id: 167,
		heroId: 'zenyatta',
		name: 'Duality',
		description: 'Zenyatta heals Orb of Harmony targets for 20% of his damage dealt to Orb of Discord targets.',
		perkType: 'major',
		perkIndex: 1,
	},
];

export const PERK_IDS = PERKS.map((p) => p.id);

const mappedPerksRaw = PERKS.reduce<Record<string, { heroId: string; ids: number[] }>>((acc, { heroId, id }) => {
	if (!acc[heroId]) {
		acc[heroId] = { heroId, ids: [] };
	}
	acc[heroId].ids.push(id);
	return acc;
}, {});

export const PERK_IDS_BY_HERO = Object.values(mappedPerksRaw);
/**
 * Gets all perk ids associated with a hero id (e.g. [123,124,125,126]). Will return empty array if heroId is not valid
 */
export function getHeroPerkIds(heroId: HeroId) {
	return PERK_IDS_BY_HERO.find((h) => h.heroId === heroId)?.ids ?? [];
}

/**
 * Gets all perks associated with a hero
 */
export function getHeroPerks(heroId: HeroId) {
	return PERKS.find((h) => h.heroId === heroId);
}

export function getRandomPerk() {
	return PERKS[Math.floor(Math.random() * PERKS.length)];
}
