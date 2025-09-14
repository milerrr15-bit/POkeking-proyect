// src/JavaScript/Guides.js
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
    // NUEVO POKÉMON AÑADIDO A ALDER
    "Dragonite": {
      title: "u-turn jellicent trick garchomp 4+1+2",
      meta: "Alder · Dragonite",
      checkAllLabel: "check all teams",
      steps: [
        {
          leftMain: "lock jellicent",
          arrowTo: true,
          highlight: "dragonite 4+1+2",
          tags: ["lucario SASH"],
          checkTeam: "check team",
          teamNums: [11, 15]
        },
        {
          leftMain: "lock garchomp",
          arrowTo: true,
          highlight: "dragonite 3+2",
          tags: ["multiscale active"],
          checkTeam: "check team",
          teamNums: [8, 13]
        },
        {
          leftMain: "lock tyranitar",
          arrowTo: true,
          highlight: "dragonite 2+1+1",
          tags: ["hurricane confusion"],
          checkTeam: "check team",
          teamNums: [7, 12]
        }
      ]
    }
  }
};
