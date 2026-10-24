export default {
  "repoId": "master_mexican_salsa_roja_tatemada_001",
  "parentRepoId": null,
  "slug": "salsa-roja-tatemada",
  "author": "ForkRecipe Kitchen",
  "title": "Salsa Roja Tatemada",
  "description": "Tomates, piments de serrano, ail et oignon carbonisés directement sur un comal sec jusqu'à ce qu'ils soient noircis en place, puis pulsés dans une salsa smoky et épaisse.",
  "cuisine": "Mexicain",
  "culture": "Mexicain",
  "category": "sauces",
  "tags": [
    "salsa",
    "Mexique",
    "carbonisé",
    "tomates",
    "Chili"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Base",
      "name": "Tomates roms (ensemble)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates de vigne",
        "tomates entières en conserve (broil à la place)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Serrano chilies (entièrement, avec des graines pour la chaleur)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "jalapeño (meilleur)",
        "le chile de agua"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc (coupé en 4 coins épais)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "Échalotes"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Gousses d'ail (non pelées)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Coriandre fraîche (facultative, grossièrement hachée)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "omit pour une saveur plus propre"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Objet",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "charred_vegetables",
      "instructions": "Chauffer à feu vif une poêle en comal sec, en fonte ou en grillage jusqu'à ce qu'il soit très chaud — une goutte d'eau devrait s'évaporer instantanément. Placer les tomates entières, les piments de serrano, les coins d'oignon et l'ail non pelé directement sur la surface sèche. Ne pas ajouter d'huile. Laisser intact pendant 3-4 minutes de chaque côté jusqu'à ce qu'il soit profondément noirci. Les tomates s'effondreront et le jus de pleurer; les peaux d'oignon et d'ail s'assombriront et noirciront. Tourner chaque pièce une fois, et char le second côté également. Ce n'est pas brûler — c'est tatemado, la technique de l'ombrage des aromatiques pour construire la profondeur.",
      "visualCue": {
        "primaryTarget": "Les tomates sont effondrées et noircies sur au moins deux côtés, le jus pleurant dans la poêle. Les coins d'oignon ont des marques d'omble et l'intérieur adouci. Les peaux d'ail sont noires.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tomates sont douces mais uniformément rouges; pas d'omble. L'oignon est chaud mais pas sombre. Cette salsa aura le goût de sauce tomate cuite, pas de tatemada.",
            "action": "Augmenter la chaleur à son maximum. Le comal doit être très chaud avant le début de l'abattage."
          },
          {
            "state": "Perfect",
            "description": "Tous les légumes montrent des taches carbonées noires spectaculaires à côté de la chair rouge-orange effondrée. Les tomates ont éclaté et libéré du jus qui s'est carbonisé sur le comal lui-même. La cuisine sent la fumée, la tomate sucrée et l'ail rôti.",
            "action": "Peler l'ail et transférer tous les légumes dans un mélangeur ou un molcajete."
          },
          {
            "state": "Overdone",
            "description": "Les légumes sont uniformément noirs et complètement carbonisés — il ne reste rien de rouge ou d'orange. L'odeur est purement acride.",
            "action": "Sauver en enlevant les couches extérieures les plus noires; la chair intérieure sous l'omble est encore utilisable."
          }
        ]
      },
      "feelCue": "Une tomate parfaitement carbonisée se sent complètement douce lorsqu'elle est pressée à l'aide d'une cuillère — elle s'effondre immédiatement comme un ballon d'eau, la peau noire et le papier-fin sur la chair de gelée."
    },
    {
      "nodeId": "step_2",
      "action": "Mixer",
      "inputs": [
        "charred_vegetables",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_salsa_roja_tatemada",
      "instructions": "Peler les gousses d'ail carbonisées. Transférer tous les légumes carbonisés et tous les jus sur le comal (les gratter dans — que l'omble est saveur) dans un mélangeur ou un robot culinaire. Ajouter le sel. Pulse en courts éclats — ne purifiez pas — jusqu'à ce que vous atteignez une texture épaisse et grossière avec des morceaux distincts de tomates et de chili encore visibles. Ajouter la coriandre et le pouls une fois de plus. Goûtez et ajustez le sel. La salsa doit être audacieuse, fumée et sournoise.",
      "visualCue": {
        "primaryTarget": "Salsa épaisse, texturée et rouge foncé avec des taches de charbon noir visibles, non pas une purée lisse mais une sauce rugueuse de style champêtre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Un seul pouls: les gros morceaux sont encore présents, l'oignon est en gros morceaux, la peau de tomate est en bandes distinctes. Une texture incohérente.",
            "action": "Pulse 3-4 fois de plus en petits éclats; vous voulez des morceaux en morceaux, pas entiers."
          },
          {
            "state": "Perfect",
            "description": "Salsa grossière, épaisse, bien rouge-orange, avec de petits morceaux de légumes distincts et des taches de char noir dispersées. Sens de fumée, de tomate et d'ail. La chaleur des serranos est présente mais pas engourdie.",
            "action": "Goûtez et servez immédiatement à température ambiante, ou réfrigérez jusqu'à 3 jours."
          },
          {
            "state": "Overdone",
            "description": "La salsa a été pulsée à une purée lisse et fine — toute la texture a disparu. On dirait du ketchup.",
            "action": "Incorporer une tomate fraîche finement coupée en dés pour restaurer une texture."
          }
        ]
      },
      "feelCue": "La salsa tatemada finie devrait se sentir épaisse et légèrement chunky sur une cuillère — elle tombe dans un seul blob plutôt que de s'enfuir, et vous pouvez voir les taches de char sans regarder dur."
    }
  ]
};
