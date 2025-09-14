// src/JavaScript/Guides.js
// Estructura de ejemplo: puedes añadir más entrenadores/pokémon
const TRAINER_GUIDES = {
  "Alder": {
    "Lucario": {
      title: "Switch Chandelure",
      meta: "Alder · Lucario",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock rhypherior",
          arrowTo: true,
          highlight: "hydreigon 2+2",
          tags: ["hp cannot low75%"],
          checkTeam: "check team",
          teamNums: [9]
        },
        {
          leftMain: "lock magnezone",
          arrowTo: true,
          highlight: "garchomp 2+1+2",
          tags: ["earthquake poliwrath sandslash SASH"],
          checkTeam: "check team",
          teamNums: [10,12]
        },
        {
          leftMain: "lock sandslash",
          arrowTo: true,
          highlight: "garchomp 2+1+2",
          tags: ["dual chop +earthquake magnezone"],
          checkTeam: "check team",
          teamNums: [10]
        }
      ]
    },
    "Volcarona": {
      title: "Quiver Dance Setup",
      meta: "Alder · Volcarona",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock tyranitar",
          arrowTo: true,
          highlight: "volcarona 3+1",
          tags: ["sunny day required"],
          checkTeam: "check team",
          teamNums: [5,7]
        },
        {
          leftMain: "lock rotom-wash",
          arrowTo: true,
          highlight: "volcarona 2+2+1",
          tags: ["focus sash safety"],
          checkTeam: "check team",
          teamNums: [8,11]
        }
      ]
    }
  },
  "Cynthia": {
    "Garchomp": {
      title: "Swords Dance Sweep",
      meta: "Cynthia · Garchomp",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock togekiss",
          arrowTo: true,
          highlight: "garchomp 3+1",
          tags: ["outrage locked"],
          checkTeam: "check team",
          teamNums: [3,6]
        },
        {
          leftMain: "lock milotic",
          arrowTo: true,
          highlight: "garchomp 2+2",
          tags: ["ice beam warning"],
          checkTeam: "check team",
          teamNums: [4,9]
        }
      ]
    },
    "Spiritomb": {
      title: "Pressure Stall",
      meta: "Cynthia · Spiritomb",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock lucario",
          arrowTo: true,
          highlight: "spiritomb 1+1+1",
          tags: ["will-o-wisp first"],
          checkTeam: "check team",
          teamNums: [2,5]
        },
        {
          leftMain: "lock roserade",
          arrowTo: true,
          highlight: "spiritomb 2+1",
          tags: ["dark pulse critical"],
          checkTeam: "check team",
          teamNums: [7,10]
        }
      ]
    }
  },
  "Iris": {
    "Haxorus": {
      title: "Dragon Dance Boost",
      meta: "Iris · Haxorus",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock lapras",
          arrowTo: true,
          highlight: "haxorus 2+2",
          tags: ["mold breaker active"],
          checkTeam: "check team",
          teamNums: [6,8]
        },
        {
          leftMain: "lock weavile",
          arrowTo: true,
          highlight: "haxorus 3+1",
          tags: ["focus sash guaranteed"],
          checkTeam: "check team",
          teamNums: [11,13]
        }
      ]
    },
    "Hydreigon": {
      title: "Special Attacker",
      meta: "Iris · Hydreigon",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock sylveon",
          arrowTo: true,
          highlight: "hydreigon 2+1+1",
          tags: ["flash cannon ready"],
          checkTeam: "check team",
          teamNums: [4,7]
        },
        {
          leftMain: "lock machamp",
          arrowTo: true,
          highlight: "hydreigon 3+2",
          tags: ["draco meteor nuke"],
          checkTeam: "check team",
          teamNums: [9,12]
        }
      ]
    }
  },
  "Leon": {
    "Charizard": {
      title: "G-Max Wildfire",
      meta: "Leon · Charizard",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock tyranitar",
          arrowTo: true,
          highlight: "charizard 3+1",
          tags: ["solar power active"],
          checkTeam: "check team",
          teamNums: [5,8]
        },
        {
          leftMain: "lock rhyperior",
          arrowTo: true,
          highlight: "charizard 2+2",
          tags: ["max overgrowth counter"],
          checkTeam: "check team",
          teamNums: [10,14]
        }
      ]
    },
    "Dragapult": {
      title: "Dragon Darts Sweep",
      meta: "Leon · Dragapult",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock grimmsnarl",
          arrowTo: true,
          highlight: "dragapult 2+1+1",
          tags: ["phantom force setup"],
          checkTeam: "check team",
          teamNums: [3,7]
        },
        {
          leftMain: "lock mimikyu",
          arrowTo: true,
          highlight: "dragapult 3+2",
          tags: ["disguise broken"],
          checkTeam: "check team",
          teamNums: [9,11]
        }
      ]
    }
  }
};

export default TRAINER_GUIDES;
