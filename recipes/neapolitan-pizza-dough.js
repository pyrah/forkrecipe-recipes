export default {
  "repoId": "master_neapolitan_pizzadough_001",
  "parentRepoId": null,
  "slug": "neapolitan-pizza-dough",
  "tool": {
    "kind": "dough",
    "doughId": "pizza"
  },
  "author": "ForkRecipe Kitchen",
  "title": "Pâte à pizza napolitaine",
  "description": "Une pâte maigre à hydratation de 60 % leissait lentement avec de la levure commerciale. La structure repose sur l'autolyse longue et le développement du gluten à travers les plis, pas le pétrissage.",
  "cuisine": "Italien",
  "culture": "Napolitaine",
  "category": "breads",
  "tags": [
    "pâte",
    "fermenté",
    "levure",
    "Italien",
    "pizza"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "24 hours",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2024-01-15",
  "updatedAt": "2024-11-02",
  "flavorRadar": {
    "sweet": 2,
    "salty": 5,
    "sour": 3,
    "bitter": 1,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "00 farine",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": [
        "farine de pain",
        "tipo 0"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau (froid)",
      "ratioValue": 0.6,
      "defaultUnit": "g",
      "substitutions": [
        "eau filtrée"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.028,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "levure sèche active",
      "ratioValue": 0.002,
      "defaultUnit": "g",
      "substitutions": [
        "levure instantanée",
        "démarreur aurifère (5 %)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Dissoudre",
      "inputs": [
        "ing_02",
        "ing_04"
      ],
      "outputState": "yeast_slurry",
      "instructions": "Incorporer la levure dans l'eau fraîche (18–20 °C / 65–68 °F) jusqu'à ce qu'aucun granule ne flotte sur la surface.",
      "visualCue": {
        "primaryTarget": "Une eau peu nuageuse sans tache de levure visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les granules flottent toujours en surface.",
            "action": "Whisk doucement et attendre."
          },
          {
            "state": "Perfect",
            "description": "Une brume pâle uniforme, pas encore de mousse.",
            "action": "Ajouter la farine."
          },
          {
            "state": "Overdone",
            "description": "L'eau était trop chaude.",
            "action": "Recommencer avec de l'eau plus fraîche."
          }
        ]
      },
      "feelCue": "L'eau doit se sentir fraîche contre le poignet — comme un ruisseau de source, jamais chaude."
    },
    {
      "nodeId": "step_2",
      "action": "Hydrate",
      "inputs": [
        "ing_01",
        "yeast_slurry"
      ],
      "outputState": "shaggy_mass",
      "instructions": "Ajouter la farine au lisier. Incorporer avec une cuillère en bois jusqu'à ce qu'aucune farine sèche ne reste.",
      "visualCue": {
        "primaryTarget": "Une boule rugueuse et bosselée avec des taches humides sur les parois du bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches sèches de farine au fond.",
            "action": "Plier avec les mains mouillées jusqu'à uniforme."
          },
          {
            "state": "Perfect",
            "description": "Shaggy, inégale, se colle plus que le bol.",
            "action": "Couvrir et se reposer."
          },
          {
            "state": "Overdone",
            "description": "Doux et brillant déjà.",
            "action": "Vous avez travaillé trop dur — reposez 30 minutes de plus."
          }
        ]
      },
      "feelCue": "Tactky et têtu. Il devrait serrer vos doigts mais relâcher avec un fil."
    },
    {
      "nodeId": "step_3",
      "action": "Autolyse",
      "inputs": [
        "shaggy_mass"
      ],
      "outputState": "rested_dough",
      "instructions": "Couvrir et laisser reposer la pâte de 20 à 30 minutes à température ambiante. La farine s'hydratera entièrement et le gluten commencera à s'organiser seul.",
      "visualCue": {
        "primaryTarget": "Dough s'est détendu, a perdu ses bords rugueux, sent peu le pain.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours rugueux, les bords tranchants.",
            "action": "Attendez plus longtemps dans un endroit chaud."
          },
          {
            "state": "Perfect",
            "description": "Domed, doux, tient une empreinte digitale brièvement.",
            "action": "Ajouter le sel et commencer les plis."
          },
          {
            "state": "Overdone",
            "description": "Visuellement bourdon et lâche.",
            "action": "Sautez la longue montée — elle a déjà commencé à fermenter."
          }
        ]
      },
      "feelCue": "Un oreiller doux. Un doigt poché laisse une fossette lente."
    },
    {
      "nodeId": "step_4",
      "action": "Sel",
      "inputs": [
        "rested_dough",
        "ing_03"
      ],
      "outputState": "seasoned_dough",
      "instructions": "Saupoudrer de sel à la surface. Pincer et plier jusqu'à ce qu'il disparaisse dans la pâte.",
      "visualCue": {
        "primaryTarget": "Pas de cristaux de sel visibles; la surface semble marbrée brièvement, puis uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Vous pouvez voir des traces de sel blanc.",
            "action": "Continuez à plier."
          },
          {
            "state": "Perfect",
            "description": "Surface lisse avec faible reflet.",
            "action": "Commencez à s'étirer et à plier."
          },
          {
            "state": "Overdone",
            "description": "La toux s'est resserrée et déchirée.",
            "action": "Reposez-vous 20 min avant de continuer."
          }
        ]
      },
      "feelCue": "La pâte vous résiste soudainement — c'est le sel qui réveille le gluten."
    },
    {
      "nodeId": "step_5",
      "action": "Plier",
      "inputs": [
        "seasoned_dough"
      ],
      "outputState": "developed_dough",
      "instructions": "Effectuez des étirements à intervalles de 30 minutes : soulevez un côté, étirez-vous, pliez-vous. Rotation. Répéter sur quatre rondes (environ 2 heures au total), puis laisser la pâte se détendre 15 à 20 minutes avant la montée en masse.",
      "visualCue": {
        "primaryTarget": "Dough tient sa forme lorsqu'elle est levée et montre un haut lisse et tendu.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les larmes, lorsqu'elles sont levées, sont plates dans le bol.",
            "action": "Ajouter un autre cycle de plis."
          },
          {
            "state": "Perfect",
            "description": "S'étirent sans déchirer, ressort lentement.",
            "action": "Ferment en vrac."
          },
          {
            "state": "Overdone",
            "description": "C'est dur, c'est dur.",
            "action": "Reposez 30 min pour détendre le gluten."
          }
        ]
      },
      "feelCue": "Comme tirer cool taffiy. Résistant, mais donnant — jamais cassant."
    },
    {
      "nodeId": "step_6",
      "action": "Ferment",
      "inputs": [
        "developed_dough"
      ],
      "outputState": "bulk_dough",
      "instructions": "Couvre-toi. Laisser monter à température ambiante froide (18–20 °C / 65–68 °F) pendant 8–12 heures — ou de 4–6 heures à une température chaude de 24–26 °C / 75–79 °F — jusqu'à ce que la pâte ait à peu près doublé et soit jiggly lorsqu'elle est bouchée.",
      "visualCue": {
        "primaryTarget": "Double en volume, bombé, avec quelques bulles visibles le long du bord du bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "A peine cultivé, dense.",
            "action": "Attendez — la levure fonctionne toujours."
          },
          {
            "state": "Perfect",
            "description": "Doubled, jiggly, bulles sillonnent le mur du bol.",
            "action": "Diviser et jouer."
          },
          {
            "state": "Overdone",
            "description": "Dôme écroulé, odeur aigre, collant.",
            "action": "Remodeler doucement et utiliser immédiatement — la saveur sera plus nette."
          }
        ]
      },
      "feelCue": "Ça sent la bière et le pain chaud. Un poke laisse une fossette qui revient lentement à mi-chemin."
    },
    {
      "nodeId": "step_7",
      "action": "Forme",
      "inputs": [
        "bulk_dough"
      ],
      "outputState": "balled_doughs",
      "instructions": "Divisez en portions égales (environ 250 à 280 g chacune pour une pizza de 30 cm). Tuez-les dans une boule serrée sous les mains, en scellant la couture en dessous, puis couvrez et étalez de 4 à 6 heures à la température ambiante (ou à l'épreuve du froid au réfrigérateur 24 à 48 heures, en retournant les boules à la température ambiante environ 2 heures avant l'étirement) jusqu'à ce qu'elles soient gonflées et détendues.",
      "visualCue": {
        "primaryTarget": "Des sphères lisses, tendues, brillantes sans coutures visibles d'en haut.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des rides et des coutures au-dessus.",
            "action": "Re-tuck et tourner sur le banc."
          },
          {
            "state": "Perfect",
            "description": "Surface étanche au tambour qui capte la lumière.",
            "action": "Couverture et preuve."
          },
          {
            "state": "Overdone",
            "description": "Larmes de surface, ventre blanc visible.",
            "action": "Reposez 15 min et reformez doucement."
          }
        ]
      },
      "feelCue": "Doux comme un lobe d'oreille. Cool, sec, avec un rebond calme."
    }
  ]
};
