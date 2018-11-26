const Database = require('../shared/database.js');
const cardsDb = new Database();

const enums = {"CounterType":{"1":"+1\/+1","2":"-1\/-1","3":"Poison","4":"Wind","5":"Time","6":"Fade","7":"Loyalty","8":"Wish","9":"Age","10":"Aim","11":"Arrow","12":"Arrowhead","13":"Awakening","14":"Blaze","15":"Blood","16":"Bounty","17":"Bribery","18":"Carrion","19":"Charge","20":"Control","21":"Corpse","22":"Credit","23":"Cube","24":"Currency","25":"Death","26":"Delay","27":"Depletion","28":"Despair","29":"Devotion","30":"Divinity","31":"Doom","32":"Dream","33":"Echo","34":"Elixir","35":"Energy","36":"Eon","37":"Eyeball","38":"Fate","39":"Feather","40":"Filibuster","41":"Flame","42":"Flood","43":"Fungus","44":"Fuse","45":"Glyph","46":"Gold","47":"Growth","48":"Hatchling","49":"Healing","50":"Hoofprint","51":"Hourglass","52":"Hunger","53":"Ice","54":"Infection","55":"Intervention","56":"Javelin","57":"Ki","58":"Level","59":"Luck","60":"Magnet","61":"Mannequin","62":"Matrix","63":"May","64":"Mine","65":"Mining","66":"Mire","67":"Muster","68":"Net","69":"Omen","70":"Ore","71":"Page","72":"Pain","73":"Paralyzation","74":"Petal","75":"Petrification","76":"Phylactery","77":"Pin","78":"Plague","79":"Polyp","80":"Pressure","81":"Pupa","82":"Quest","83":"Scream","84":"Scroll","85":"Shell","86":"Shield","87":"Shred","88":"Sleep","89":"Sleight","90":"Slime","91":"Soot","92":"Spell","93":"Spore","94":"Storage","95":"Strife","96":"Study","97":"Theft","98":"Tide","100":"Tower","101":"Training","102":"Trap","103":"Treasure","104":"Verse","105":"Vitality","106":"Wage","107":"Winch","108":"Lore","109":"+1\/+2","110":"+0\/+1","111":"+0\/+2","112":"+1\/+0","113":"+2\/+2","114":"-0\/-1","115":"-0\/-2","116":"-1\/-0","117":"-2\/-1","118":"-2\/-2","119":"Manifestation","120":"Gem","121":"Crystal","122":"Isolation","123":"Hour","124":"Unity","125":"Velocity","126":"Brick","127":"Landmark","128":"Prey","129":"Silver","130":"Egg","131":"Hit","132":"PlaceholderCounterType1","133":"PlaceholderCounterType2","134":"PlaceholderCounterType3","135":"PlaceholderCounterType4","136":"PlaceholderCounterType5"},"SuperType":{"1":"Basic","2":"Legendary","3":"Ongoing","4":"Snow","5":"World"},"ResultCode":{"0":"","1":"Success","2":"Failure","3":"Creature cannot attack","4":"Attacking costs not paid","5":"Creature cannot block","6":"Blocker cannot block attacker","7":"Damage ordering contains omissions or additions","8":"Damage sources contain omissions","9":"Damage sources contain additions","10":"Attempt to assign damage such that non-lethal damage is assigned to anything other than the last recipient in the order","12":"Too many targets selected","13":"Not enough targets selected","14":"Selected target is not valid"},"SubType":{"1":"Angel","2":"Archer","3":"Archon","4":"Artificer","5":"Assassin","6":"Aura","7":"Basilisk","8":"Bat","9":"Bear","10":"Beast","11":"Berserker","12":"Bird","13":"Boar","14":"Cat","15":"Chandra","16":"Cleric","17":"Construct","18":"Crocodile","19":"Demon","20":"Djinn","21":"Dragon","22":"Drake","23":"Druid","24":"Fish","25":"Elemental","26":"Elephant","27":"Elf","28":"Equipment","29":"Forest","30":"Garruk","31":"Gate","32":"Giant","33":"Gideon","34":"Goblin","35":"Golem","36":"Griffin","37":"Horse","38":"Hound","39":"Human","40":"Hydra","41":"Illusion","42":"Insect","43":"Island","44":"Jace","45":"Knight","46":"Merfolk","47":"Minotaur","48":"Monk","49":"Mountain","50":"Ogre","51":"Ooze","52":"Pegasus","53":"Phoenix","54":"Plains","55":"Rhino","56":"Rogue","57":"Salamander","58":"Scout","59":"Serpent","60":"Shade","61":"Shaman","62":"Siren","63":"Skeleton","64":"Soldier","65":"Sorin","66":"Sphinx","67":"Spider","68":"Spirit","69":"Swamp","70":"Tower","71":"Treefolk","72":"Troll","73":"Urza's","74":"Vampire","75":"Vedalken","76":"Wall","77":"Warrior","78":"Wizard","79":"Wolf","80":"Wurm","81":"Zombie","82":"Mine","83":"Power-Plant","84":"Saproling","85":"Avatar","86":"Sliver","87":"Samurai","88":"Pest","89":"Thalakos","90":"Dauthi","91":"Minion","92":"Advisor","93":"Ajani","94":"Alara","95":"Ally","97":"Antelope","98":"Ape","99":"Arcane","100":"Arkhos","101":"Ashiok","102":"Assembly-Worker","103":"Atog","104":"Aurochs","105":"Azgol","106":"Badger","107":"Barbarian","108":"Beeble","109":"Belenon","110":"Bolas","111":"Bolass","112":"Bringer","113":"Brushwagg","114":"Camel","115":"Carrier","116":"Centaur","117":"Cephalid","118":"Chimera","119":"Cockatrice","120":"Crab","121":"Curse","122":"Cyclops","123":"Desert","124":"Devil","125":"Dominaria","126":"Domri","127":"Dreadnought","128":"Drone","129":"Dryad","130":"Dwarf","131":"Efreet","132":"Elder","133":"Eldrazi","134":"Elk","135":"Elspeth","136":"Equilor","137":"Ergamon","138":"Eye","139":"Fabacin","140":"Faerie","141":"Ferret","142":"Flagbearer","143":"Fortification","144":"Fox","145":"Frog","146":"Fungus","147":"Gargoyle","148":"Gnome","149":"Goat","150":"God","151":"Gorgon","152":"Gremlin","153":"Hag","154":"Harpy","155":"Hellion","156":"Hippo","157":"Hippogriff","158":"Homarid","159":"Homunculus","160":"Horror","161":"Hyena","162":"Imp","163":"Incarnation","164":"Innistrad","165":"Iquatana","166":"Ir","167":"Jellyfish","168":"Juggernaut","169":"Kaldheim","170":"Kamigawa","171":"Karn","172":"Karsus","173":"Kavu","174":"Kephalai","175":"Kirin","176":"Kithkin","177":"Kobold","178":"Kolbahan","179":"Kor","180":"Koth","181":"Kraken","182":"Kyneth","183":"Lair","184":"Lammasu","185":"Leech","186":"Leviathan","187":"Lhurgoyf","188":"Licid","189":"Liliana","190":"Lizard","191":"Locus","192":"Lorwyn","193":"Luvion","194":"Manticore","195":"Masticore","196":"Meditation","197":"Mercadia","198":"Mercenary","199":"Metathran","200":"Mirrodin","201":"Moag","202":"Monger","203":"Mongoose","204":"Mongseng","205":"Moonfolk","206":"Muraganda","207":"Mutant","208":"Myr","209":"Mystic","210":"Nautilus","211":"Nephilim","212":"New","213":"Nightmare","214":"Nightstalker","215":"Ninja","216":"Nissa","217":"Noggle","218":"Nomad","219":"Nymph","220":"Octopus","221":"Orc","222":"Orgg","223":"Ouphe","224":"Ox","225":"Oyster","226":"Phelddagrif","227":"Phyrexia","228":"Pirate","229":"Plant","230":"Praetor","231":"Pyrulea","232":"Rabbit","233":"Rabiah","234":"Ral","235":"Rat","236":"Rath","237":"Ravnica","238":"Realm","239":"Rebel","240":"Regatha","241":"Rigger","242":"Sable","243":"Sarkhan","244":"Satyr","245":"Scarecrow","246":"Scorpion","247":"Segovia","248":"Serras","249":"Shadowmoor","250":"Shandalar","251":"Shapeshifter","252":"Sheep","253":"Shrine","254":"Slith","255":"Slug","256":"Snake","257":"Soltari","258":"Spawn","259":"Specter","260":"Spellshaper","261":"Spike","262":"Sponge","263":"Squid","264":"Squirrel","265":"Starfish","266":"Surrakar","267":"Tamiyo","268":"Tezzeret","269":"Thopter","270":"Thrull","271":"Tibalt","272":"Trap","273":"Turtle","274":"Ulgrotha","275":"Unicorn","276":"Valla","277":"Venser","278":"Viashino","279":"Volver","280":"Vraska","281":"Vryn","282":"Weird","283":"Werewolf","284":"Whale","285":"Wildfire","286":"Wolverine","287":"Wombat","288":"Worm","289":"Wraith","290":"Xenagos","291":"Xerex","292":"Yeti","293":"Zendikar","294":"Zubera","295":"Germ","296":"Contraption","297":"Citizen","298":"Coward","299":"Deserter","300":"Prism","301":"Reflection","302":"Sand","303":"Serf","304":"Dack","305":"Kiora","306":"AllCreatureTypes","307":"Blinkmoth","308":"Camarid","309":"Caribou","310":"Graveborn","311":"Lamia","312":"Orb","313":"Pentavite","314":"Pincher","315":"Splinter","316":"Survivor","317":"Tetravite","318":"Triskelavite","319":"Scion","320":"Processor","321":"Arlinn","322":"Mole","323":"Nahiri","324":"Clue","325":"Teferi","326":"Daretti","327":"Freyalise","328":"Nixilis","329":"Narset","330":"Ugin","331":"Vehicle","332":"Servo","333":"Dovin","334":"Saheeli","335":"Monkey","336":"Aetherborn","337":"Pilot","338":"Jackal","339":"Naga","340":"Cartouche","341":"Samut","342":"Dinosaur","343":"Treasure","344":"Huatli","345":"Angrath","346":"Trilobite","347":"Saga","348":"Jaya","349":"Vivien","350":"Egg","351":"PlaceholderSubType1","352":"PlaceholderSubType2","353":"PlaceholderSubType3","354":"PlaceholderSubType4","355":"PlaceholderSubType5"},"FailureReason":{"0":"","1":"Request made with out of date game state.","2":"Player has acted out of turn.","3":"Response does not match the pending request.","4":"Attempted to batch actions that must be performed one at at time.","5":"Attempted to perform an action not currently on the list of legal actions.","6":"An optional field in the message should have been supplied based on the contents of the required fields, but was not.","7":"Selected an option that is not on the list of legal options.","8":"Message contains a bad enum.","9":"Targeted spell or ability does not have sufficient valid targets.","10":"Target specified for out-of-range target index.","11":"Specified target is not on the legal targets list.","12":"Specified mana does not exist.","13":"Specified option selection is not valid.","14":"The message received was not expected by the GRE.","15":"Player input is below a specified minimum or above a specified maximum."},"Phase":{"0":"","1":"Beginning","2":"1st Main","3":"Combat","4":"2nd Main","5":"Ending"},"MatchState":{"0":"","1":"Game In Progress","2":"Game Complete, Match In Progress","3":"Match Complete","4":"Sideboarding"},"Step":{"0":"","1":"Untap","2":"Upkeep","3":"Draw","4":"Begin Combat","5":"Declare Attackers","6":"Declare Blockers","7":"Combat Damage","8":"End Combat","9":"End","10":"Cleanup","11":"First Strike Damage"},"CardType":{"1":"Artifact","2":"Creature","3":"Enchantment","4":"Instant","5":"Land","6":"Phenomenon","7":"Plane","8":"Planeswalker","9":"Scheme","10":"Sorcery","11":"Tribal","12":"Vanguard"},"Color":{"1":"White","2":"Blue","3":"Black","4":"Red","5":"Green"}};

//
var setsList = cardsDb.get("sets");
var eventsList = cardsDb.get("events");
var renderer = 0;

var draftRanks = [];
draftRanks[12] = "A+";
draftRanks[11] = "A";
draftRanks[10] = "A-";
draftRanks[9] = "B+";
draftRanks[8] = "B";
draftRanks[7] = "B-";
draftRanks[6] = "C+";
draftRanks[5] = "C";
draftRanks[4] = "C-";
draftRanks[3] = "D+";
draftRanks[2] = "D";
draftRanks[1] = "D-";
draftRanks[0] = "F";

//
function addCardTile(grpId, indent, quantity, element) {
	if (quantity !== 0) {
		var cont = $('<div class="card_tile_container click-on"></div>');
		var ww, ll;
		if (!isNumber(quantity)) {
			ww = 64;
			ll = 48;
			cont.append('<div class="card_tile_odds"><span>'+quantity+'</span></div>');
		}
		else if (quantity == 9999) {
			quantity = 1;
			ww = 32;
			ll = 17;
			cont.append('<div style="color: rgba(255, 255, 255, 0); min-width: 0px; width: 0px;" class="card_tile_quantity"><span>'+quantity+'</span></div>');
		}
		else {
			ww = 56;
			ll = 40;
			cont.append('<div class="card_tile_quantity"><span>'+quantity+'</span></div>');
		}
		element.append(cont);
		var card = cardsDb.get(grpId);
		var div = $('<div id="t'+grpId+indent+'" style="min-width: calc(100% - '+ww+'px) !important;" class="card_tile '+get_frame_class(card.frame)+'"></div>');
		cont.append(div);

		// Glow hover
		var glow = $('<div id="t'+grpId+indent+'" style="min-width: calc(100% - '+ww+'px) !important; left: calc(0px - 100% + '+ll+'px) !important" class="card_tile_glow"></div>');
		cont.append(glow);

		addCardHover(glow, card);
		glow.on('mouseenter', function(e) {
			var domid = $(this).attr('id');
			$('#'+domid).css('margin-top', '0px');
		});

		glow.on('click', function(e) {
			if (card.dfc == 'SplitHalf')	{
				card = cardsDb.get(card.dfcId);
			}
			//let newname = card.name.split(' ').join('-');
			shell.openExternal('https://scryfall.com/card/'+get_set_scryfall(card.set)+'/'+card.cid+'/'+card.name);
		});

		glow.on('mouseleave', function(e) {
			var domid = $(this).attr('id');
			//$('.main_hover').css("opacity", 0);
			$('#'+domid).css('margin-top', '3px');
			//$('.loader').css("opacity", 0);
		});

		//
		var fl = $('<div class="flex_item"></div>');
		fl.append('<div class="card_tile_name">'+card.name+'</div>');
		div.append(fl);

		fl = $('<div class="flex_item" style="line-height: 26px;"></div>"');
		div.append(fl);

		var prevc = true;
		card.cost.forEach(function(cost) {
			if (/^(x|\d)+$/.test(cost) && prevc == false) {
				fl.append('//');
			}
			fl.append('<div class="mana_s16 flex_end mana_'+cost+'"></div>');

			prevc = /^\d+$/.test(cost);
		});

		if (renderer == 0) {
			if (card.type.indexOf("Basic Land") == -1) {
				if (grpId == 67306 && quantity > 4) {
					quantity = 4;
				}

				if (cards[grpId] == undefined) {
					cont.append('<div style="left: calc(0px - 100% + '+(ww-14)+'px);" class="card_tile_not_owned" title="'+quantity+' missing"></div>');
				}
				else if (quantity > cards[grpId]) {
					cont.append('<div style="left: calc(0px - 100% + '+(ww-14)+'px);" class="card_tile_not_owned" title="'+(quantity-cards[grpId])+' missing"></div>');
				}
			}
		}
	}
}

//
function selectAdd(div, callback) {
	div.each(function(){
		var $this = $(this), numberOfOptions = $(this).children('option').length;

		$this.addClass('select-hidden'); 
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('option').eq(0).text());

		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}

		var $listItems = $list.children('li');

		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.select-styled.active').not(this).each(function(){
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});

		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
			callback($this.val());
		});

		$(document).click(function() {
			$styledSelect.removeClass('active');
			$list.hide();
		});
	});
}

//
function addCardHover(div, _card) {
	div.on('mouseenter', function(e) {
		$('.main_hover').css("opacity", 1);
		let dfc = '';
		if (_card.dfc == 'DFC_Back')  dfc = 'a';
		if (_card.dfc == 'DFC_Front') dfc = 'b';
		if (_card.dfc == 'SplitHalf') dfc = 'a';

		// Split cards are readable both halves, no problem
		if (dfc != '' && _card.dfc != 'SplitHalf' && renderer == 0) {
			$('.main_hover_dfc').show();
			$('.loader_dfc').show();
			$('.main_hover_dfc').css("opacity", 1);
			$('.loader_dfc').css("opacity", 1);
			var dfcCard = cardsDb.get(_card.dfcId);

			$('.main_hover_dfc').attr("src", "https://img.scryfall.com/cards"+dfcCard.images["normal"]);
			$('.main_hover_dfc').on('load', function(){
				$('.loader_dfc').css("opacity", 0);
			});
		}
		else {
			$('.main_hover_dfc').hide();
			$('.loader_dfc').hide();
		}

		$('.main_hover').attr("src", "https://img.scryfall.com/cards"+_card.images["normal"]);

		$('.main_hover').on('load', function(){
			$('.loader').css("opacity", 0);
		});
	});

	div.on('mouseleave', function() {
		$('.main_hover').css("opacity", 0);
		$('.main_hover_dfc').css("opacity", 0);
		$('.loader').css("opacity", 0);
		$('.loader_dfc').css("opacity", 0);
	});
}

//
function get_rank_index(_rank, _tier) {
	var ii = 0;
	if (_rank == "Beginner")	ii = 0;
	if (_rank == "Bronze")	  ii = 1  + _tier;
	if (_rank == "Silver")   	ii = 6  + _tier;
	if (_rank == "Gold")		ii = 11 + _tier;
	if (_rank == "Diamond")		ii = 16 + _tier;
	if (_rank == "Master")		ii = 21;
	return ii;
}

//
function get_rank_index_16(_rank) {
	var ii = 0;
	if (_rank == "Beginner")	ii = 0;
	if (_rank == "Bronze")	  ii = 1;
	if (_rank == "Silver")   	ii = 2;
	if (_rank == "Gold")		ii = 3;
	if (_rank == "Diamond")		ii = 4;
	if (_rank == "Master")		ii = 5;
	return ii;
}

//
function addCardSeparator(i, element) {
	var str = "";
	switch (i) {
		case 1: str = "Creature"; break;
		case 2: str = "Planeswalker"; break;
		case 3: str = "Instant"; break;
		case 4: str = "Sorcery"; break;
		case 5: str = "Artifact"; break;
		case 6: str = "Enchantment"; break;
		case 7: str = "Land"; break;
		case 98: str = "Mainboard"; break;
		case 99: str = "Sideboard"; break;
		default: str = ""; break;
	}

	var cont = $('<div class="card_tile_separator">'+str+'</div>');
	element.append(cont);
}

//
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

//
function getReadableEvent(arg) {
	if (eventsList[arg] != undefined) {
		return eventsList[arg];
	}

	return arg;
}

//
function getEventId(arg) {
	var ret = arg;
	Object.keys(eventsList).forEach(function (key) {
		if (eventsList[key] == arg) {
			ret = key;
		}
	});

	return ret;
}

//
function removeDuplicates(decklist) {
	var newList = [];
	try {
		decklist.forEach(function(card) {
			var cname = cardsDb.get(card.id).name;
			var added = false;
			newList.forEach(function(c) {
				var cn = cardsDb.get(c.id).name;
				if (cn == cname) {
					c.quantity += card.quantity;
					if (c.chance != undefined) {
						c.chance += card.chance;
					}
					added = true;
				}
			});

			if (!added) {
				newList.push(card);
			}
		});
		return newList;
	}
	catch (e) {
		return [];
	}
}

//
function get_card_type_sort(a) {
	if (a == undefined)	return 0;
	if (a.includes("Creature", 0)) 		return 1;
	if (a.includes("Planeswalker", 0)) 	return 2;
	if (a.includes("Instant", 0)) 		return 3;
	if (a.includes("Sorcery", 0)) 		return 4;
	if (a.includes("Artifact", 0)) 		return 5;
	if (a.includes("Enchantment", 0)) 	return 6;
	if (a.includes("Land", 0))			return 7;
	return 0;
}

//
function compare_cards(a, b) {
	// Yeah this is lazy.. I know
	a = cardsDb.get(a.id);
	b = cardsDb.get(b.id);
	var as = get_card_type_sort(a.type);
	var bs = get_card_type_sort(b.type);

	// Order by type?
	if (as < bs) {
		return -1;
	}
	if (as > bs) {
		return 1;
	}

	// by cmc
	if (a.cmc < b.cmc) {
		return -1;
	}
	if (a.cmc > b.cmc) {
		return 1;
	}

	// then by name
	if (a.name < b.name) {
		return -1;
	}
	if (a.name > b.name) {
		return 1;
	}

	return 0;
}

//
function compare_chances(a, b) {
	// Yeah this is lazy.. I know
	a = a.chance;
	b = b.chance;

	if (a > b) {
		return -1;
	}
	if (a < b) {
		return 1;
	}

	return 0;
}


//
function compare_draft_cards(a, b) {
	// Yeah this is lazy.. I know
	a = cardsDb.get(a);
	b = cardsDb.get(b);
	var as = get_card_type_sort(a.type);
	var bs = get_card_type_sort(b.type);

	// Order by type?
	if (as < bs) {
		return -1;
	}
	if (as > bs) {
		return 1;
	}

	// by cmc
	if (a.cmc < b.cmc) {
		return -1;
	}
	if (a.cmc > b.cmc) {
		return 1;
	}

	// then by name
	if (a.name < b.name) {
		return -1;
	}
	if (a.name > b.name) {
		return 1;
	}

	return 0;
}


//
function get_set_scryfall(set) {
	if (set == undefined) return "";
	let s = setsList[set].scryfall;
	if (s == undefined)	s = set;
	return s;
}

//
function get_colation_set(collationid) {
	var ret = "";
	Object.keys(setsList).forEach(function(setName) {
		if (setsList[setName].collation == collationid) {
			ret = setName;
		}
	});

	return ret;
}

//
function get_set_code(set) {
	if (set == undefined) return "";
	let s = setsList[set].code;
	if (s == undefined)	s = set;
	return s;
}

//
class CountStats {
	constructor(owned = 0, total = 0) {
		this.owned = owned;
		this.total = total;
	}

	get percentage() {
		if (this.total) {
			return this.owned / this.total * 100;
		} else {
			return 100;
		}
	}
}

//
class SetStats {
	constructor(set) {
		this.set = set;
		this.common = new CountStats();
		this.uncommon = new CountStats();
		this.rare = new CountStats();
		this.mythic = new CountStats();
	}

	get all() {
		return [new CountStats(), this.common, this.uncommon, this.rare, this.mythic].reduce((acc, c) => {
			acc.owned += c.owned;
			acc.total += c.total;
			return acc;
		});
	}
}

//
function get_collection_stats() {
	const stats = {
		complete: new SetStats("complete"),
		singles: new SetStats("singles")
	};

	for (var set in setsList) {
		stats[set] = new SetStats(set);
	}

	Object.keys(cardsDb.cards).forEach(function (grpId) {
		if (grpId != "ok" && grpId != "abilities" && grpId != "events" && grpId != "sets") {
			const card = cardsDb.get(grpId);
			var split = card.dfc == "SplitCard" && card.dfcId != 0;
			if (card.rarity !== "token" && card.rarity !== "land" && card.set !== "Oath of the Gatewatch" && card.dfc != "DFC_Front" && !split) {
				// add to totals
				stats[card.set][card.rarity].total += 4;
				stats.complete[card.rarity].total += 4;
				stats.singles[card.rarity].total += 1;

				// add cards we own
				if (cards[grpId] !== undefined) {
					var owned = cards[grpId];
					stats[card.set][card.rarity].owned += owned;
					stats.complete[card.rarity].owned += owned;
					stats.singles[card.rarity].owned += 1;
				}
			}
		}
	});

	return stats;
}

//
function collectionSortName(a, b) {
	a = cardsDb.get(a);
	b = cardsDb.get(b);
	if (a.name < b.name)	return -1;
	if (a.name > b.name)	return 1;
	return 0;
}

//
function collectionSortSet(a, b) {
	a = cardsDb.get(a);
	b = cardsDb.get(b);
	if (a.set < b.set)	return -1;
	if (a.set > b.set)	return 1;

	if (parseInt(a.cid) < parseInt(b.cid))	return -1;
	if (parseInt(a.cid) > parseInt(b.cid))	return 1;
	return 0;
}

function getRaritySortValue(rarity) {
	rarity = rarity.toLowerCase();
	switch (rarity) {
		case 'land':		return 5; break;
		case 'common':		return 4; break;
		case 'uncommon':	return 3; break;
		case 'rare':		return 2; break;
		case 'mythic':		return 1; break;
		default: 			return 0; break;
	}

}
//
function collectionSortRarity(a, b) {
	a = cardsDb.get(a);
	b = cardsDb.get(b);
	if (getRaritySortValue(a.rarity) < getRaritySortValue(b.rarity))	return -1;
	if (getRaritySortValue(a.rarity) > getRaritySortValue(b.rarity))	return 1;

	if (a.set < b.set)	return -1;
	if (a.set > b.set)	return 1;

	if (parseInt(a.cid) < parseInt(b.cid))	return -1;
	if (parseInt(a.cid) > parseInt(b.cid))	return 1;
	return 0;
}

//
function collectionSortCmc(a, b) {
	a = cardsDb.get(a);
	b = cardsDb.get(b);
	if (parseInt(a.cmc) < parseInt(b.cmc))	return -1;
	if (parseInt(a.cmc) > parseInt(b.cmc))	return 1;

	if (a.set < b.set)	return -1;
	if (a.set > b.set)	return 1;

	if (parseInt(a.cid) < parseInt(b.cid))	return -1;
	if (parseInt(a.cid) > parseInt(b.cid))	return 1;
	return 0;
}


//
function get_collection_export() {
	var list = "";
	Object.keys(cards).forEach(function(key) {
		var add = settings.export_format+"";
		var card = cardsDb.get(key);
		if (card) {
			let name = card.name;
			name = replaceAll(name, '///', '//');
			add = add.replace('$Name', name);

			add = add.replace('$Count', cards[key]);

			add = add.replace('$SetName', card.set);
			add = add.replace('$SetCode', setsList[card.set].code);
			add = add.replace('$Collector', card.cid);
			add = add.replace('$Rarity', card.rarity);
			add = add.replace('$Type', card.type);
			add = add.replace('$Cmc', card.cmc);
			list += add+"\r\n";
		}
	});

	return list;
}



//
function get_deck_colors(deck) {
	deck.colors = [];
	try {
		deck.mainDeck.forEach(function(card) {
			var grpid = card.id;
			if (card.quantity > 0) {
				var cdb = cardsDb.get(grpid);
				if (cdb) {
					//var card_name = cdb.name;
					var card_cost = cdb.cost;
					if (cdb.type.indexOf("Land") !== -1 && cdb.frame.length < 3) {
						if (cdb.frame.includes(1) && !deck.colors.includes(1))	deck.colors.push(1);
						if (cdb.frame.includes(2) && !deck.colors.includes(2))	deck.colors.push(2);
						if (cdb.frame.includes(3) && !deck.colors.includes(3))	deck.colors.push(3);
						if (cdb.frame.includes(4) && !deck.colors.includes(4))	deck.colors.push(4);
						if (cdb.frame.includes(5) && !deck.colors.includes(5))	deck.colors.push(5);
					}
					card_cost.forEach(function(c) {
						if (c.indexOf('w') !== -1 && !deck.colors.includes(1))	deck.colors.push(1);
						if (c.indexOf('u') !== -1 && !deck.colors.includes(2))	deck.colors.push(2);
						if (c.indexOf('b') !== -1 && !deck.colors.includes(3))	deck.colors.push(3);
						if (c.indexOf('r') !== -1 && !deck.colors.includes(4))	deck.colors.push(4);
						if (c.indexOf('g') !== -1 && !deck.colors.includes(5))	deck.colors.push(5);
					});
				}
			}
		});
		deck.colors.sort(function(a, b){return a - b});
		return deck.colors;
	}
	catch (e) {
		return [];
	}
}

//
function get_ids_colors(list) {
	var colors = [];
	list.forEach(function(grpid) {
		var cdb = cardsDb.get(grpid);
		if (cdb) {
			//var card_name = cdb.name;
			var card_cost = cdb.cost;
			card_cost.forEach(function(c) {
				if (c.indexOf('w') !== -1 && !colors.includes(1))	colors.push(1);
				if (c.indexOf('u') !== -1 && !colors.includes(2))	colors.push(2);
				if (c.indexOf('b') !== -1 && !colors.includes(3))	colors.push(3);
				if (c.indexOf('r') !== -1 && !colors.includes(4))	colors.push(4);
				if (c.indexOf('g') !== -1 && !colors.includes(5))	colors.push(5);
			});
		}
	});

	return colors;
}

//
function add_deck_colors(colors, deck) {
	var cols = [0,0,0,0,0,0];
	deck.forEach(function(card) {
		var grpid = card.id;
		card = cardsDb.get(grpid);
		if (card) {
			//var card_name = card.name;
			var card_cost = card.cost;

			card_cost.forEach(function(c) {
				if (c.indexOf('w') !== -1)	cols[1] += 1;
				if (c.indexOf('u') !== -1)	cols[2] += 1;
				if (c.indexOf('b') !== -1)	cols[3] += 1;
				if (c.indexOf('r') !== -1)	cols[4] += 1;
				if (c.indexOf('g') !== -1)	cols[5] += 1;
			});
		}
	});

	colors.w += cols[1];
	colors.u += cols[2];
	colors.b += cols[3];
	colors.r += cols[4];
	colors.g += cols[5];

	return colors;
}

//
function compare_colors(color_a, color_b) {
	if (color_a.length != color_b.length)
		return false;

	for (var i = color_a.length; i--;) {
		if (color_a[i] !== color_b[i]) {
			return false;
		}
	}

	return true;
}

//
function get_deck_missing(deck) {
	var missing = {rare: 0, common: 0, uncommon: 0, mythic: 0};

	deck.mainDeck.forEach(function(card) {
		var grpid = card.id;
		var quantity = card.quantity;
		var add = 0;
		var rarity = cardsDb.get(grpid).rarity;

		if (grpid == 67306 && quantity > 4) {
			quantity = 4;
		}

		if (cards[grpid] == undefined) {
			add = quantity;
		}
		else if (quantity > cards[grpid]) {
			add = quantity - cards[grpid];
		}

		if (rarity == 'common')		{missing.common += add;}
		if (rarity == 'uncommon')	{missing.uncommon += add;}
		if (rarity == 'rare')		{missing.rare += add;}
		if (rarity == 'mythic')		{missing.mythic += add;}
	});

	deck.sideboard.forEach(function(card) {
		var grpid = card.id;
		var quantity = card.quantity;
		var add = 0;
		var rarity = cardsDb.get(grpid).rarity;

		if (grpid == 67306 && quantity > 4) {
			quantity = 4;
		}

		if (cards[grpid] == undefined) {
			add = quantity;
		}
		else if (quantity > cards[grpid]) {
			add = quantity - cards[grpid];
		}

		if (rarity == 'common')		{missing.common += add;}
		if (rarity == 'uncommon')	{missing.uncommon += add;}
		if (rarity == 'rare')		{missing.rare += add;}
		if (rarity == 'mythic')		{missing.mythic += add;}
	});
	
	return missing;
}

//
function get_deck_sideboarded(deck_a, deck_b) {
	let _in = [];
	let _out = [];


	deck_b.mainDeck.forEach(function(card_b) {
		let found = false;
		deck_a.mainDeck.forEach(function(card_a) {
			if (card_a.id == card_b.id) {
				found = true;
			}
		});
		if (!found) {
			let c = {
				id: card_b.id,
				quantity: card_b.quantity
			}
			_in.push(c);
		}
	});

	deck_b.sideboard.forEach(function(card_b) {
		let found = false;
		deck_a.sideboard.forEach(function(card_a) {
			if (card_a.id == card_b.id) {
				found = true;
			}
		});
		if (!found) {
			let c = {
				id: card_b.id,
				quantity: card_b.quantity
			}
			_out.push(c);
		}
	});
	
	return {in: _in, out: _out};
}

//
function get_deck_cost(deck) {
	var cost = {rare: 0, common: 0, uncommon: 0, mythic: 0};

	deck.mainDeck.forEach(function(card) {
		var grpid = card.id;
		var rarity = cardsDb.get(grpid).rarity;

		if (rarity == 'common')		{cost.common += card.quantity;}
		if (rarity == 'uncommon')	{cost.uncommon += card.quantity;}
		if (rarity == 'rare')		{cost.rare += card.quantity;}
		if (rarity == 'mythic')		{cost.mythic += card.quantity;}
	});

	deck.sideboard.forEach(function(card) {
		var grpid = card.id;
		var rarity = cardsDb.get(grpid).rarity;

		if (rarity == 'common')		{cost.common += card.quantity;}
		if (rarity == 'uncommon')	{cost.uncommon += card.quantity;}
		if (rarity == 'rare')		{cost.rare += card.quantity;}
		if (rarity == 'mythic')		{cost.mythic += card.quantity;}
	});
	
	return cost;
}

//
function get_deck_curve(deck) {
	var curve = [];

	deck.mainDeck.forEach(function(card) {
		var grpid = card.id;
		var cmc = cardsDb.get(grpid).cmc;
		if (curve[cmc] == undefined)	curve[cmc] = 0;

		if (cardsDb.get(grpid).type.indexOf("Land") == -1) {
			curve[cmc] += card.quantity
		}
	});
	/*
	// Do not account sideboard?
	deck.sideboard.forEach(function(card) {
		var grpid = card.id;
		var cmc = cardsDb.get(grpid).cmc;
		if (curve[cmc] == undefined)	curve[cmc] = 0;
		curve[cmc] += card.quantity

		if (cardsDb.get(grpid).rarity !== 'land') {
			curve[cmc] += card.quantity
		}
	});
	*/
	//console.log(curve);
	return curve;
}

//
function get_deck_types_ammount(deck) {
	var types = {art:0, cre: 0, enc: 0, ins: 0, lan: 0, pla: 0, sor: 0};

	deck.mainDeck.forEach(function(card) {
		var c = cardsDb.get(card.id);
		if (c) {
			if (c.type.includes("Land", 0))				 types.lan += card.quantity;
			else if (c.type.includes("Creature", 0))		types.cre += card.quantity;
			else if (c.type.includes("Artifact", 0))		types.art += card.quantity;
			else if (c.type.includes("Enchantment", 0))	 types.enc += card.quantity;
			else if (c.type.includes("Instant", 0))		 types.ins += card.quantity;
			else if (c.type.includes("Sorcery", 0))		 types.sor += card.quantity;
			else if (c.type.includes("Planeswalker", 0))	types.pla += card.quantity;
		}
	});

	return types;
}

//
function get_deck_colors_ammount(deck) {
	var colors = {total:0, w: 0, u: 0, b: 0, r: 0, g: 0, c: 0};

	//var mana = {0: "", 1: "white", 2: "blue", 3: "black", 4: "red", 5: "green", 6: "colorless", 7: "", 8: "x"}
	deck.mainDeck.forEach(function(card) {
		if (card.quantity > 0) {
			cardsDb.get(card.id).cost.forEach(function(c) {
				if (c.indexOf('w') !== -1) { colors.w += 1; colors.total+=1 }
				if (c.indexOf('u') !== -1) { colors.u += 1; colors.total+=1 }
				if (c.indexOf('b') !== -1) { colors.b += 1; colors.total+=1 }
				if (c.indexOf('r') !== -1) { colors.r += 1; colors.total+=1 }
				if (c.indexOf('g') !== -1) { colors.g += 1; colors.total+=1 }
				if (c.indexOf('c') !== -1) { colors.c += 1; colors.total+=1 }
			});
		}
	});

	return colors;
}

//
function get_deck_lands_ammount(deck) {
	var colors = {total:0, w: 0, u: 0, b: 0, r: 0, g: 0, c: 0};

	//var mana = {0: "", 1: "white", 2: "blue", 3: "black", 4: "red", 5: "green", 6: "colorless", 7: "", 8: "x"}
	deck.mainDeck.forEach(function(card) {
		var quantity = card.quantity;
		card = cardsDb.get(card.id); 
		if (quantity > 0) {
			if (card.type.indexOf("Land") != -1 || card.type.indexOf("land") != -1) {
				if (card.frame.length < 5) {
					card.frame.forEach(function(c) {
						if (c == 1) {
							colors.w += quantity; colors.total += quantity;
						}
						if (c == 2) {
							colors.u += quantity; colors.total += quantity;
						}
						if (c == 3) {
							colors.b += quantity; colors.total += quantity;
						}
						if (c == 4) {
							colors.r += quantity; colors.total += quantity;
						}
						if (c == 5) {
							colors.g += quantity; colors.total += quantity;
						}
						if (c == 6) {
							colors.c += quantity; colors.total += quantity;
						}
					});
				}
			}
		}
	});

	return colors;
}

//
function get_deck_export(deck) {
	var str = "";
	deck.mainDeck.forEach(function(card) {
		var grpid = card.id;
		var card_name = cardsDb.get(grpid).name;
		var card_set = cardsDb.get(grpid).set;
		var card_cn = cardsDb.get(grpid).cid;
		
		try {
			card_set = setsList[card_set].arenacode;
			str += card.quantity+" "+card_name+" ("+card_set+") "+card_cn+"\r\n";
		}
		catch (e) {
			str += card.quantity+" "+card_name+" ("+get_set_code(card_set)+") "+card_cn+"\r\n";
		}
	});

	str += "\r\n";

	deck.sideboard.forEach(function(card) {
		var grpid = card.id;
		var card_name = cardsDb.get(grpid).name;
		var card_set = cardsDb.get(grpid).set;
		var card_cn = cardsDb.get(grpid).cid;
		
		try {
			card_set = setsList[card_set].arenacode;
			str += card.quantity+" "+card_name+" ("+card_set+") "+card_cn+"\r\n";
		}
		catch (e) {
			str += card.quantity+" "+card_name+" ("+get_set_code(card_set)+") "+card_cn+"\r\n";
		}
	});

	return str;
}


//
function get_deck_export_txt(deck) {
	var str = "";
	deck.mainDeck.forEach(function(card) {
		var grpid = card.id;
		var card_name = cardsDb.get(grpid).name;
		//var card_set = cardsDb.get(grpid).set;
		//var card_cn = cardsDb.get(grpid).cid;
		
		str += card.quantity+" "+card_name+"\r\n";
	});

	str += "\r\n";

	deck.sideboard.forEach(function(card) {
		var grpid = card.id;
		var card_name = cardsDb.get(grpid).name;
		//var card_set = cardsDb.get(grpid).set;
		//var card_cn = cardsDb.get(grpid).cid;
		
		str += card.quantity+" "+card_name+"\r\n";
	});

	return str;
}

//
function get_frame_class(frame) {
	if (frame.length == 0) {
		return "tile_c";
	}
	if (frame.length == 1) {
		if (frame.includes(1)) {	return "tile_w"; }
		if (frame.includes(2)) {	return "tile_u"; }
		if (frame.includes(3)) {	return "tile_b"; }
		if (frame.includes(4)) {	return "tile_r"; }
		if (frame.includes(5)) {	return "tile_g"; }
	}
	if (frame.length == 2) {
		if (frame.includes(4) && frame.includes(1)) {	return "tile_wr"; }
		if (frame.includes(1) && frame.includes(3)) {	return "tile_wb"; }
		if (frame.includes(1) && frame.includes(2)) {	return "tile_uw"; }
		if (frame.includes(2) && frame.includes(4)) {	return "tile_ur"; }
		if (frame.includes(2) && frame.includes(5)) {	return "tile_ug"; }
		if (frame.includes(2) && frame.includes(3)) {	return "tile_ub"; }
		if (frame.includes(4) && frame.includes(5)) {	return "tile_rg"; }
		if (frame.includes(5) && frame.includes(1)) {	return "tile_gw"; }
		if (frame.includes(3) && frame.includes(4)) {	return "tile_br"; }
		if (frame.includes(3) && frame.includes(5)) {	return "tile_bg"; }
	}
	if (frame.length > 2) {
		return "tile_multi";
	}
}

//
function timeSince(_date) {
  var seconds = Math.floor((new Date() - _date) / 1000);

  var interval = Math.floor(seconds / 31536000);
  if (interval == 1)
	return interval + " year";
  if (interval > 0)
	return interval + " years";
  interval = Math.floor(seconds / 2592000);
  if (interval == 1)
	return interval + " month";
  if (interval > 0)
	return interval + " months";
  interval = Math.floor(seconds / 86400);
  if (interval == 1)
	return interval + " day";
  if (interval > 0)
	return interval + " days";
  interval = Math.floor(seconds / 3600);
  if (interval == 1)
	return interval + " hour";
  if (interval > 0)
	return interval + " hours";
  interval = Math.floor(seconds / 60);
  if (interval == 1)
	return interval + " minute";
  if (interval > 0)
	return interval + " minutes";
  return Math.floor(seconds) + " seconds";
}

//
function daysPast(_date) {
	var firstDate = new Date();
	var secondDate = new Date(_date);
	return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(24*60*60*1000)));
}

//
function replaceAll(str, find, replace) {
	return str.replace(new RegExp(find, 'g'), replace);
}

//
function stripTags(html) {
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

//
function makeId(length) {
	var ret = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < length; i++)
	ret += possible.charAt(Math.floor(Math.random() * possible.length));

	return ret;
}

//
function debugDeck(deck) {
	deck.forEach( function (card) {
		var c = cardsDb.get(card.id);
		ipc_send("ipc_log", card.quantity+"x "+c.name +" ("+card.id+")");
	});
}

//
function toMMSS(sec_num) {
	var hours   = Math.floor(sec_num / 3600);
	var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
	var seconds = sec_num - (hours * 3600) - (minutes * 60);

	if (minutes < 10) {minutes = "0"+minutes;}
	if (seconds < 10) {seconds = "0"+seconds;}
	return minutes+':'+seconds;
}