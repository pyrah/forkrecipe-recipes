export default {
  "repoId": "master_japanese_dashistock_001",
  "parentRepoId": null,
  "slug": "dashi-stock",
  "author": "ForkRecipe Kitchen",
  "title": "Stock de Dashi",
  "description": "Le bouillon umami fondamental de la cuisine japonaise — kombu trempé d'eau froide et apporté au bord d'un mijot, puis fini avec katsuobushi qui fleurit et coule dans des nuages dorés, donnant un stock clair et délicat en moins de vingt minutes qui goûte de l'océan et de la fumée.",
  "cuisine": "Japonais",
  "culture": "Washoku",
  "category": "stocks",
  "tags": [
    "stock",
    "Sans gluten",
    "umami",
    "Japonais",
    "Dashi",
    "kombu"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "50 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Kombu (poule séchée), propre",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "kombu dashi poudre (1 c. à thé par litre)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Inosinate",
      "name": "Katsuobushi (flacons debonito)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "flocons de maquereau (sababushi) pour une saveur plus forte"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau filtrée à froid",
      "ratioValue": 1000,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_03"
      ],
      "outputState": "kombu_infusion",
      "instructions": "Essuyer le kombu avec un chiffon humide pour enlever tout grain de surface — ne pas le laver, car le revêtement blanc poudreux (mannitol) fait partie de son umami. Placer le kombu dans de l'eau filtrée froide dans une grande casserole. Laisser tremper pendant 30 minutes minimum (1 heure est mieux) – l'eau deviendra graduellement vert doré pâle et peu océanique. Portez ensuite le pot lentement à 60-65 C à feu moyen-doux, ce qui prend environ 10 minutes. Tenir à 60-65 C pendant 10 minutes. Le kombu libère son glutamate le plus complètement sous l'ébullition; la chaleur au-dessus de 80 C extrait des composés amers de l'algue. Retirer le kombu juste avant que l'eau mijote.",
      "visualCue": {
        "primaryTarget": "L'eau est devenue pâle ambre-or avec un faible arôme océanique. Le kombu s'est adouci et s'est élargi, tournant un vert olive plus foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est encore claire, le kombu est encore raide. Changement de couleur minimal.",
            "action": "Continuez à tremper — l'extraction de l'eau froide prend du temps. Le kombu doit s'hydrater complètement."
          },
          {
            "state": "Perfect",
            "description": "Eau dorée-ambrée avec une odeur océanique propre et sans amertume. Kombu est doux, vert foncé, et commence à avoir l'air gélatineux.",
            "action": "Retirez le kombu avant qu'il atteigne un ébullition. Passez immédiatement à l'ajout de katsuobushi."
          },
          {
            "state": "Overdone",
            "description": "Eau bouillante avec kombu toujours dedans. Elle est devenue plus foncée, légèrement trouble, avec une note légèrement amère et visqueuse.",
            "action": "Enlever immédiatement kombu. Le dashi sera légèrement plus amer mais toujours utilisable. Bien planter avant d'utiliser."
          }
        ]
      },
      "feelCue": "Le kombu adouci se sent comme une épaisse feuille de caoutchouc glissant entre les doigts — gélatineux et élastique, sentant intensément l'océan propre avec une douceur minérale."
    },
    {
      "nodeId": "step_2",
      "action": "Infuser",
      "inputs": [
        "kombu_infusion",
        "ing_02"
      ],
      "outputState": "finished_dashi",
      "instructions": "Portez l'eau à ébullition complète après avoir enlevé le kombu. Éteignez complètement la chaleur. Ajoutez tout le katsuobushi à la fois — dispersez - le sur la surface. Laissez-le abrupte pendant exactement 3-5 minutes. Ne remuez pas. Les flocons fleuriront à la surface, absorberont le liquide, puis s'enfonceront lentement. Une fois qu'ils ont la plupart du temps coulé et que le liquide sent profondément le poisson fumé, filtrez à travers une passoire fine doublée de papier ou d'un chiffon mince. Ne pressez pas les flocons — pressez les extraits de composés amers et dures.",
      "visualCue": {
        "primaryTarget": "Un bouillon d'ambre pâle et limpide, sans nuage, sans particules, sentant la fumée propre et l'océan.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les mouches n'ont pas coulé. Le bouillon sent toujours principalement le kombu, pas le katsuobushi. Le goût est mince.",
            "action": "Attendez 5 minutes. L'inosinate du bonito a besoin de temps pour se répandre dans l'eau."
          },
          {
            "state": "Perfect",
            "description": "Les mouches ont coulé. Broth est clair, ambre pâle. Sensations simultanées de poisson fumé et d'océan propre. L'effet combiné est une troisième saveur — l'umami pur — qu'aucun des ingrédients n'a seul.",
            "action": "Peau immédiatement sans presser les flocons. Utiliser dans les 3 jours ou congeler."
          },
          {
            "state": "Overdone",
            "description": "Flacons trop longs (10+ minutes). Le papillon est plus foncé, légèrement trouble, avec une note poissonneuse plutôt que fumée.",
            "action": "Sourire immédiatement. Le dashi est encore utilisable mais mieux adapté pour la soupe miso que les plats de bouillons clairs."
          }
        ]
      },
      "feelCue": "Une goutte de dashi parfait sur la langue a un impact immédiat et propre — aucune saveur unique ne domine, mais le dos de la gorge se remplit d'une sensation chaude, arrondie, savoureuse qui s'attarde pendant 20 à 30 secondes."
    }
  ]
};
