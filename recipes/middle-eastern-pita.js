export default {
  "repoId": "master_middleeastern_middleeasternpita_001",
  "parentRepoId": null,
  "slug": "middle-eastern-pita",
  "author": "ForkRecipe Kitchen",
  "title": "Pain de pita de poche",
  "description": "Un pita d'oreiller et de vapeur avec une poche parfaitement formée — le résultat d'un disque mince frappant une pierre ou une poêle, où la surface se pose devant l'intérieur peut, piégeant la vapeur qui gonfle le pain dans une sphère creuse.",
  "cuisine": "Moyen-Orient",
  "culture": "Levantine",
  "category": "breads",
  "tags": [
    "pain",
    "végétalien",
    "Pain plat",
    "poche",
    "lévantine"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hour 45 min",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de pain",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "Farine universelle (moins de bouffées)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude (38 C)",
      "ratioValue": 63,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.8,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 0.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": [
        "huile neutre"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "pita_dough",
      "instructions": "Mélanger la farine, le sel, la levure et le sucre. Ajouter l'eau tiède et l'huile d'olive. Mélanger jusqu'à ce qu'une pâte rugueuse se forme, puis pétrir à la main pendant 8 minutes (ou 6 minutes dans un mélangeur sur support) jusqu'à ce que lisse et élastique. La pâte doit être molle, mais pas collante; elle doit nettoyer les côtés du bol. Divisez en 8 boules (environ 90 g chacune). Couvrir avec une serviette humide et reposer 10 minutes, puis placer sur un plateau légèrement huilé, couvrir, et la preuve pendant 1 heure à la température ambiante jusqu'à ce que gonflé.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte lisse et souple qui tient sa forme ronde et ressort lentement lorsqu'elle est cuite.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Surface encore rugueuse, légèrement collante. Des larmes tendues.",
            "action": "3 minutes de plus. Le réseau de gluten doit se développer complètement pour que la poche se forme en cuisson."
          },
          {
            "state": "Perfect",
            "description": "Doux, légèrement collant mais pas collant. Passe l'essai d'étirement — une petite pièce s'étire mince sans déchirer. Remonte dans les 3 secondes quand on pique.",
            "action": "Divisez, billez, reposez, et la preuve comme indiqué."
          },
          {
            "state": "Overdone",
            "description": "Serré, sec, ressort immédiatement lorsqu'il est poché.",
            "action": "Repos couvert 15 minutes et poursuivre. La pâte surcollée se détendrea pendant la preuve."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir comme de l'argile douce — lisse, fraîche et réactive, donnant doucement sous la paume sans coller."
    },
    {
      "nodeId": "step_2",
      "action": "Façonner",
      "inputs": [
        "pita_dough"
      ],
      "outputState": "rolled_pitas",
      "instructions": "Placer une plaque de cuisson ou une plaque de cuisson inversée lourde dans le four et préchauffer à la température maximale (250-260 C / 480-500 F) pendant au moins 45 minutes. Sur une surface légèrement farineuse, rouler chaque boule de pâte dans un mince tour de 20 à 22 cm de diamètre et d'environ 3 à 4 mm d'épaisseur. Même l'épaisseur est critique — les taches épaisses ne souffleront pas. Transférer sur une pelure de semoule ou de farine de maïs, ou sur un morceau de parchemin. Laisser reposer les pitas roulés 5 minutes avant de cuire.",
      "visualCue": {
        "primaryTarget": "Mince, même des rondelles sans taches épaisses ni larmes. La surface est légèrement pulvérisée et conserve sa forme ronde sans retomber.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Disque épais (6+ mm) qui ressort au centre après laminage. Épaisseur inégale.",
            "action": "Laissez reposer encore 5 minutes et roulez encore. La tension de gluten doit se détendre."
          },
          {
            "state": "Perfect",
            "description": "Disque uniforme de 4 mm qui tient sa forme lorsqu'il est soulevé. Pas de larmes, pas de taches épaisses. Translucide dans les taches les plus minces.",
            "action": "Reposez-vous 5 minutes et glissez sur la pierre chaude."
          },
          {
            "state": "Overdone",
            "description": "Trous de torsion ou patchs de papier-fin de moins de 2 mm. La vapeur s'échappera par les larmes et la poche ne se formera pas.",
            "action": "Pliez et re-ballez le pita déchiré. Reposez-vous 10 minutes et reroulez."
          }
        ]
      },
      "feelCue": "Le pita roulé devrait se sentir comme un doux tissu chamois — souple, à peine raide, drapé facilement sur votre paume sans retomber."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "rolled_pitas"
      ],
      "outputState": "finished_pita",
      "instructions": "Faites glisser les pitas directement sur la pierre ou la tôle préchauffée. Cuire 3-4 minutes — ne pas ouvrir le four. Regardez à travers le verre du four : dans les 60 à 90 secondes, le pita devrait commencer à gonfler dans un ballon. Une fois complètement gonflé et légèrement tacheté avec doré brun, retirer avec des pinces. Empilez immédiatement les pitas chauds sous une serviette propre — la vapeur intérieure adoucit la croûte à mesure qu'elle refroidit, créant ainsi une texture douce et souple.",
      "visualCue": {
        "primaryTarget": "Chaque pita se gonfle dans une sphère à taches dorées tendues dans les 90 secondes qui suivent la frappe de la pierre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pita a à peine gonflé. On dirait un pain plat irrégulier avec quelques bulles mais pas de poche pleine.",
            "action": "La pierre n'était pas assez chaude ou la pâte était trop épaisse. Faites cuire 1-2 minutes de plus. Les pitas entièrement gonflés ont les poches les plus propres."
          },
          {
            "state": "Perfect",
            "description": "Pita se gonfle complètement en forme de ballon, or-tan avec des taches brunes dispersées. Après 3 minutes, la bouffée commence à diminuer légèrement.",
            "action": "Retirer immédiatement avec des pinces. Empiler sous une serviette — les poches restent pendant que la pita se dégonfle et se refroidit."
          },
          {
            "state": "Overdone",
            "description": "Pita a bruni trop foncéement. La croûte est rigide et craquelée plutôt que douce et souple.",
            "action": "Réduire le temps de cuisson à 2,5 minutes la prochaine fois. Envelopper les pitas surcuites dans une serviette humide pendant 5 minutes pour adoucir."
          }
        ]
      },
      "feelCue": "Un pita bien cuit est chaud et doux d'oreiller après s'être reposé sous la serviette — le serrer doucement entre deux doigts révèle l'intérieur creux, un mur de papier-mince fléchissant sous la pression."
    }
  ]
};
