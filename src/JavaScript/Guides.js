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
    }
  },
  "Lorelei": {
    "Lapras": {
      title: "Ice Beam Freeze",
      meta: "Lorelei · Lapras",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock charizard",
          arrowTo: true,
          highlight: "lapras 3+1",
          tags: ["ice beam freeze chance"],
          checkTeam: "check team",
          teamNums: [5,8]
        },
        {
          leftMain: "lock venusaur",
          arrowTo: true,
          highlight: "lapras 2+2",
          tags: ["blizzard accuracy"],
          checkTeam: "check team",
          teamNums: [7,11]
        }
      ]
    },
    "Jynx": {
      title: "Lovely Kiss Setup",
      meta: "Lorelei · Jynx",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock machamp",
          arrowTo: true,
          highlight: "jynx 2+1+1",
          tags: ["psychic OHKO"],
          checkTeam: "check team",
          teamNums: [6,9]
        }
      ]
    }
  },
  "Bruno": {
    "Machamp": {
      title: "Dynamic Punch",
      meta: "Bruno · Machamp",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock gengar",
          arrowTo: true,
          highlight: "machamp 3+1",
          tags: ["no guard guaranteed"],
          checkTeam: "check team",
          teamNums: [4,10]
        },
        {
          leftMain: "lock alakazam",
          arrowTo: true,
          highlight: "machamp 2+2",
          tags: ["bullet punch priority"],
          checkTeam: "check team",
          teamNums: [8,12]
        }
      ]
    },
    "Onix": {
      title: "Rock Slide Flinch",
      meta: "Bruno · Onix",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock pidgeot",
          arrowTo: true,
          highlight: "onix 2+1+1",
          tags: ["sturdy ability"],
          checkTeam: "check team",
          teamNums: [3,7]
        }
      ]
    }
  },
  "Agatha": {
    "Gengar": {
      title: "Shadow Ball Spam",
      meta: "Agatha · Gengar",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock alakazam",
          arrowTo: true,
          highlight: "gengar 3+1",
          tags: ["destiny bond trap"],
          checkTeam: "check team",
          teamNums: [5,9]
        },
        {
          leftMain: "lock jynx",
          arrowTo: true,
          highlight: "gengar 2+2",
          tags: ["hypnosis accuracy"],
          checkTeam: "check team",
          teamNums: [7,11]
        }
      ]
    },
    "Arbok": {
      title: "Poison Sting",
      meta: "Agatha · Arbok",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock clefable",
          arrowTo: true,
          highlight: "arbok 2+1+1",
          tags: ["intimidate ability"],
          checkTeam: "check team",
          teamNums: [4,8]
        }
      ]
    }
  },
  "Lance": {
    "Dragonite": {
      title: "Dragon Dance Sweep",
      meta: "Lance · Dragonite",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock cloyster",
          arrowTo: true,
          highlight: "dragonite 3+1",
          tags: ["multiscale ability"],
          checkTeam: "check team",
          teamNums: [6,10]
        },
        {
          leftMain: "lock lapras",
          arrowTo: true,
          highlight: "dragonite 2+2",
          tags: ["hurricane confusion"],
          checkTeam: "check team",
          teamNums: [8,12]
        }
      ]
    },
    "Gyarados": {
      title: "Waterfall Flinch",
      meta: "Lance · Gyarados",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock rhydon",
          arrowTo: true,
          highlight: "gyarados 2+1+1",
          tags: ["moxie ability boost"],
          checkTeam: "check team",
          teamNums: [5,9]
        }
      ]
    }
  },
  "Shauntal": {
    "Chandelure": {
      title: "Flash Fire Boost",
      meta: "Shauntal · Chandelure",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock scizor",
          arrowTo: true,
          highlight: "chandelure 3+1",
          tags: ["shadow ball spam"],
          checkTeam: "check team",
          teamNums: [7,11]
        }
      ]
    },
    "Golurk": {
      title: "Iron Fist Punch",
      meta: "Shauntal · Golurk",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock jellicent",
          arrowTo: true,
          highlight: "golurk 2+2",
          tags: ["earthquake power"],
          checkTeam: "check team",
          teamNums: [6,10]
        }
      ]
    }
  },
  "Grimsley": {
    "Krookodile": {
      title: "Moxie Sweep",
      meta: "Grimsley · Krookodile",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock reuniclus",
          arrowTo: true,
          highlight: "krookodile 3+1",
          tags: ["earthquake coverage"],
          checkTeam: "check team",
          teamNums: [8,12]
        }
      ]
    },
    "Bisharp": {
      title: "Swords Dance",
      meta: "Grimsley · Bisharp",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock conkeldurr",
          arrowTo: true,
          highlight: "bisharp 2+1+1",
          tags: ["defiant ability boost"],
          checkTeam: "check team",
          teamNums: [7,11]
        }
      ]
    }
  },
  "Caitlin": {
    "Reuniclus": {
      title: "Calm Mind Setup",
      meta: "Caitlin · Reuniclus",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock hydreigon",
          arrowTo: true,
          highlight: "reuniclus 3+1",
          tags: ["magic guard ability"],
          checkTeam: "check team",
          teamNums: [9,13]
        }
      ]
    },
    "Musharna": {
      title: "Psychic Terrain",
      meta: "Caitlin · Musharna",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock krookodile",
          arrowTo: true,
          highlight: "musharna 2+2",
          tags: ["moonlight recovery"],
          checkTeam: "check team",
          teamNums: [8,12]
        }
      ]
    }
  },
  "Marshall": {
    "Conkeldurr": {
      title: "Bulk Up Setup",
      meta: "Marshall · Conkeldurr",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock sigilyph",
          arrowTo: true,
          highlight: "conkeldurr 3+1",
          tags: ["guts ability"],
          checkTeam: "check team",
          teamNums: [10,14]
        }
      ]
    },
    "Mienshao": {
      title: "Regenerator Core",
      meta: "Marshall · Mienshao",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock golurk",
          arrowTo: true,
          highlight: "mienshao 2+1+1",
          tags: ["u-turn momentum"],
          checkTeam: "check team",
          teamNums: [9,13]
        }
      ]
    }
  }
};

export default TRAINER_GUIDES;
