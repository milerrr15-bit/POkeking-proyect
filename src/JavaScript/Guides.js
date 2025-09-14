// src/JavaScript/Guides.js
// Estructura de ejemplo: puedes añadir más entrenadores/pokémon
const TRAINER_GUIDES = {
  "Alder": {
    "Lucario": {
      title: "Swords Dance Sweep",
      meta: "Alder · Lucario",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock Conkeldurr",
          arrowTo: true,
          highlight: "Lucario 2+2",
          tags: ["justified ability boost"],
          checkTeam: "check team",
          teamNums: [3, 7]
        },
        {
          leftMain: "lock Gengar",
          arrowTo: true,
          highlight: "Lucario 3+1",
          tags: ["bullet punch priority"],
          checkTeam: "check team",
          teamNums: [5, 9]
        },
        {
          leftMain: "lock Hippowdon",
          arrowTo: true,
          highlight: "Lucario 2+1+1",
          tags: ["close combat nuke"],
          checkTeam: "check team",
          teamNums: [8, 12]
        }
      ]
    },
    "Volcarona": {
      title: "Quiver Dance Setup",
      meta: "Alder · Volcarona",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock Tyranitar",
          arrowTo: true,
          highlight: "Volcarona 3+1",
          tags: ["sunny day required"],
          checkTeam: "check team",
          teamNums: [2, 6]
        },
        {
          leftMain: "lock Rotom-Wash",
          arrowTo: true,
          highlight: "Volcarona 2+2+1",
          tags: ["focus sash safety"],
          checkTeam: "check team",
          teamNums: [4, 11]
        },
        {
          leftMain: "lock Heatran",
          arrowTo: true,
          highlight: "Volcarona 2+1",
          tags: ["hidden power ground"],
          checkTeam: "check team",
          teamNums: [10, 14]
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
          leftMain: "lock Togekiss",
          arrowTo: true,
          highlight: "Garchomp 3+1",
          tags: ["outrage locked"],
          checkTeam: "check team",
          teamNums: [1, 5]
        },
        {
          leftMain: "lock Milotic",
          arrowTo: true,
          highlight: "Garchomp 2+2",
          tags: ["ice beam warning"],
          checkTeam: "check team",
          teamNums: [4, 8]
        },
        {
          leftMain: "lock Bronzong",
          arrowTo: true,
          highlight: "Garchomp 2+1+1",
          tags: ["fire fang coverage"],
          checkTeam: "check team",
          teamNums: [7, 13]
        }
      ]
    },
    "Spiritomb": {
      title: "Pressure Stall",
      meta: "Cynthia · Spiritomb",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock Lucario",
          arrowTo: true,
          highlight: "Spiritomb 1+1+1",
          tags: ["will-o-wisp first"],
          checkTeam: "check team",
          teamNums: [3, 9]
        },
        {
          leftMain: "lock Roserade",
          arrowTo: true,
          highlight: "Spiritomb 2+1",
          tags: ["dark pulse critical"],
          checkTeam: "check team",
          teamNums: [6, 12]
        },
        {
          leftMain: "lock Blissey",
          arrowTo: true,
          highlight: "Spiritomb 3+2",
          tags: ["calm mind setup"],
          checkTeam: "check team",
          teamNums: [11, 15]
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
          leftMain: "lock Lapras",
          arrowTo: true,
          highlight: "Haxorus 2+2",
          tags: ["mold breaker active"],
          checkTeam: "check team",
          teamNums: [2, 7]
        },
        {
          leftMain: "lock Weavile",
          arrowTo: true,
          highlight: "Haxorus 3+1",
          tags: ["focus sash guaranteed"],
          checkTeam: "check team",
          teamNums: [5, 10]
        },
        {
          leftMain: "lock Skarmory",
          arrowTo: true,
          highlight: "Haxorus 2+1+1",
          tags: ["brick break coverage"],
          checkTeam: "check team",
          teamNums: [8, 14]
        }
      ]
    },
    "Hydreigon": {
      title: "Special Attacker",
      meta: "Iris · Hydreigon",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock Sylveon",
          arrowTo: true,
          highlight: "Hydreigon 2+1+1",
          tags: ["flash cannon ready"],
          checkTeam: "check team",
          teamNums: [3, 9]
        },
        {
          leftMain: "lock Machamp",
          arrowTo: true,
          highlight: "Hydreigon 3+2",
          tags: ["draco meteor nuke"],
          checkTeam: "check team",
          teamNums: [6, 12]
        },
        {
          leftMain: "lock Gardevoir",
          arrowTo: true,
          highlight: "Hydreigon 2+2",
          tags: ["dark pulse spam"],
          checkTeam: "check team",
          teamNums: [11, 16]
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
          leftMain: "lock Tyranitar",
          arrowTo: true,
          highlight: "Charizard 3+1",
          tags: ["solar power active"],
          checkTeam: "check team",
          teamNums: [1, 6]
        },
        {
          leftMain: "lock Rhyperior",
          arrowTo: true,
          highlight: "Charizard 2+2",
          tags: ["max overgrowth counter"],
          checkTeam: "check team",
          teamNums: [4, 10]
        },
        {
          leftMain: "lock Dragonite",
          arrowTo: true,
          highlight: "Charizard 2+1+1",
          tags: ["air slash flinch"],
          checkTeam: "check team",
          teamNums: [8, 13]
        }
      ]
    },
    "Dragapult": {
      title: "Dragon Darts Sweep",
      meta: "Leon · Dragapult",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock Grimmsnarl",
          arrowTo: true,
          highlight: "Dragapult 2+1+1",
          tags: ["phantom force setup"],
          checkTeam: "check team",
          teamNums: [2, 7]
        },
        {
          leftMain: "lock Mimikyu",
          arrowTo: true,
          highlight: "Dragapult 3+2",
          tags: ["disguise broken"],
          checkTeam: "check team",
          teamNums: [5, 11]
        },
        {
          leftMain: "lock Aegislash",
          arrowTo: true,
          highlight: "Dragapult 2+2",
          tags: ["u-turn momentum"],
          checkTeam: "check team",
          teamNums: [9, 15]
        }
      ]
    }
  }
};

export default TRAINER_GUIDES;
