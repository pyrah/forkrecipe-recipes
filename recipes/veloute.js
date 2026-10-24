export default {
  "repoId": "master_french_veloute_001",
  "parentRepoId": null,
  "slug": "veloute",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce Velouté",
  "description": "Une des sauces mères françaises — un roux blond humidifié de blanc clair, puis patiemment mijoté et écrémé dans une sauce ivoire lisse, légère. Nommée pour sa texture velours : elle doit enrober une cuillère sans jamais se sentir lourde.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "sauces",
  "tags": [
    "sauce",
    "français",
    "mère-sauce",
    "rouge",
    "stock"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2025-06-09",
  "updatedAt": "2025-06-09",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Stock blanc (poulets ou veau)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "stocks de poissons",
        "stock de légumes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poivre blanc",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "blond_roux",
      "instructions": "Faire fondre le beurre dans une casserole lourde à feu moyen-doux jusqu'à ce qu'il mousse mais ne brunisse pas. Frottez la farine en même temps. Cuire, en remuant constamment, une touche plus longue que vous ne le feriez pour un roux blanc — environ 4 à 6 minutes — jusqu'à ce que l'odeur de la farine brute laisse place à un léger parfum de noisettes grillées et que la pâte prenne une couleur paille pâle.",
      "visualCue": {
        "primaryTarget": "Une pâte souple et brillante de la couleur de la paille fraîche — juste après pâle, pas encore bronzée. Il se déplace comme du sable humide et des odeurs de noix grillées chaudes, pas de farine crue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Roux est blanc vif et pâteux, sent toujours la farine crue et la craie.",
            "action": "Continuez à remuer sur le feu encore une minute ou deux jusqu'à ce que l'odeur devienne noisette et que la couleur se déplace vers la paille évanouie."
          },
          {
            "state": "Perfect",
            "description": "Même couleur paille pâle, lisse et fluide, odeurs de noisettes grillées. Bubbles paresseux aux bords.",
            "action": "Tirez de la chaleur un moment et préparez le stock chaud."
          },
          {
            "state": "Overdone",
            "description": "Roux est devenu brun doré et sent nettement grillé, presque comme une cacahuète blonde.",
            "action": "Il s'est incliné vers un brun roux — il teintera la sauce et épaissira moins. Soit procéder pour une velouté ivoire-tan plus profonde, soit recommencer pour une vraie blonde."
          }
        ]
      },
      "feelCue": "Le fouet devrait glisser à travers une pâte douce et fluide sans résistance — s'il se raidit dans une boule sèche, il y a trop de farine ou pas assez de graisse."
    },
    {
      "nodeId": "step_2",
      "action": "Whisk",
      "inputs": [
        "blond_roux",
        "ing_01"
      ],
      "outputState": "loose_veloute",
      "instructions": "Hors de la chaleur, verser dans le stock blanc chaud dans un ruisseau constant, fouettant constamment. Ajoutez-le en trois ou quatre ajouts, laissant chacun disparaître avant le suivant. Retourner à feu moyen et porter à ébullition douce, fouetter, jusqu'à ce que la sauce épaississe et devienne brillante. Lumps signifie que le stock est allé trop vite — fouetter dur ou la souche.",
      "visualCue": {
        "primaryTarget": "Un liquide d'ivoire lisse et pâle, sans grumeaux, brillant et juste assez épais pour laisser une trace fugace derrière le fouet quand il vient à ébullition.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse, glisse du fouet comme du bouillon sans corps.",
            "action": "Gardez-le à ébullition douce, fouettant, quelques minutes de plus — l'amidon a besoin de chaleur pour s'épaissir complètement."
          },
          {
            "state": "Perfect",
            "description": "Doux, sans bosse, ivoire pâle. Enduit légèrement le fouet et coule dans un ruban brillant.",
            "action": "Descendre à une mijoter nue et commencer à écrémer."
          },
          {
            "state": "Overdone",
            "description": "La sauce est collante et collante, avec une surface mate terne.",
            "action": "Whirk dans un peu plus chaud stock pour le desserrer à une consistance versable, brillant."
          }
        ]
      },
      "feelCue": "Au fur et à mesure que le stock entre en jeu, le fouet rencontre de moins en moins de traînées, puis, au fur et à mesure qu'il se bouillit, on sent soudain un léger épaississement saisir le fouet. Cette prise est le réglage de l'amidon."
    },
    {
      "nodeId": "step_3",
      "action": "Abat-jour",
      "inputs": [
        "loose_veloute"
      ],
      "outputState": "skimmed_veloute",
      "instructions": "Faites glisser la poêle à moitié du brûleur pour que la sauce mijote d'un seul côté, ce qui pousse une peau de graisse, de mousse et d'impuretés sur le côté plus frais (dépouillage). Laisser mijoter doucement pendant 20 à 30 minutes, en écumant la surface avec une louche toutes les quelques minutes, jusqu'à ce que la sauce soit claire en verre et réduite à une véritable nappe.",
      "visualCue": {
        "primaryTarget": "Une sauce ivoire propre et satinée avec une surface brillante et non perturbée: pas de racaille, pas de taches, pas de graisse. Il enveloppe l'arrière d'une cuillère et tient une ligne propre quand vous tirez un doigt à travers elle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface jette encore de la mousse grise et un éclat huileux; la sauce a un goût peu d'amidon brut.",
            "action": "Continuez à écrémer et à mijoter: la mousse arrête de surfacer et le bord féculent se fane seulement avec le temps."
          },
          {
            "state": "Perfect",
            "description": "Surface d'ivoire brillante et propre qui reste dégagée entre les écumes. Coats une cuillère dans une nappe; un doigt tiré à travers laisse un canyon propre.",
            "action": "Plongez dans un bon chinois si vous voulez, puis assaisonner."
          },
          {
            "state": "Overdone",
            "description": "La sauce a diminué trop loin — épaisse, collante, et commence à prendre sur le fond de la poêle.",
            "action": "fouetter dans un jet de bouillon chaud pour le ramener à une nappe et baisser la chaleur."
          }
        ]
      },
      "feelCue": "La mijoter doit être un blip paresseux d'un côté de la poêle, jamais un ébullition. La sauce sent propre et savoureuse — comme un bon stock fait de soie, sans bord de fleur brute gauche."
    },
    {
      "nodeId": "step_4",
      "action": "Saison",
      "inputs": [
        "skimmed_veloute",
        "ing_04",
        "ing_05"
      ],
      "outputState": "finished_veloute",
      "instructions": "Assaisonner avec du sel de mer fin et une petite pincée de poivre blanc — blanc, donc pas de taches foncées marment la sauce pâle. Goûtez et ajustez. Le velouté doit avoir un goût propre, concentré, arrondi et légèrement salé, jamais farineux ou plat.",
      "visualCue": {
        "primaryTarget": "Une sauce ivoire impeccable, assaisonnée uniformément sans tache visible, brillante et lisse. Il coule dans un ruban épais et s'installe lentement à une surface de niveau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Goûte plat et un peu farineux — la saveur du stock est muette derrière l'amidon.",
            "action": "Ajouter le sel une pincée à la fois jusqu'à ce que la profondeur savoureuse du stock se met au point."
          },
          {
            "state": "Perfect",
            "description": "L'ivoire propre, brillant, assaisonné uniformément. Goûts de bouillon arrondi et velouté avec un murmure de poivre.",
            "action": "Utilisez immédiatement ou pressez le plastique sur la surface pour le maintenir sans former de peau."
          },
          {
            "state": "Overdone",
            "description": "La saveur délicate du stock est enterrée.",
            "action": "Whisk dans un peu plus de stock non-saisonné pour diluer l'assaisonnement de nouveau en équilibre."
          }
        ]
      },
      "feelCue": "Sur la cuillère, il se sent comme du velours chaud — il devrait enrober la langue en douceur et finir propre, sans grain, sans craie et sans film gras."
    }
  ]
};
