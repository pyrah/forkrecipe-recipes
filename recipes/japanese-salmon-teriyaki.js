export default {
  "repoId": "master_japanese_japanesesalmonteriyaki_001",
  "parentRepoId": null,
  "slug": "japanese-salmon-teriyaki",
  "author": "ForkRecipe Kitchen",
  "title": "Saumon japonais Teriyaki",
  "description": "Des filets de saumon épais laqués dans une glaçure teriyaki à quatre ingrédients jusqu'à ce que la peau craque et la glaçure se transforme en vernis acajou et doux amer qui se brise à la fourchette.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "seafood",
  "tags": [
    "Produits de la mer",
    "Sans gluten",
    "saumon",
    "Japonais",
    "Teriyaki",
    "glaçure"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "35 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filets de saumon, avec peau (200g chacun)",
      "ratioValue": 2,
      "defaultUnit": "fillets",
      "substitutions": [
        "à queue jaune",
        "morue noire"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "sauce soja (tamari sans gluten)",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Mirin",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": [
        "2 c. à soupe de vin de riz + 1 c. à thé de sucre"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Mâcher",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": [
        "sherry sec"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre (sunflower ou son de riz)",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Oignon vert tranché finement",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Graines de sésame grillées",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "teriyaki_glaze",
      "instructions": "Mélanger la sauce de soja, le mirin, le saké et le sucre dans une petite casserole. Porter à ébullition à feu moyen et remuer pour dissoudre le sucre. Laisser mijoter de 3 à 4 minutes jusqu'à ce qu'il soit réduit d'un tiers et que la glaçure recouvre le dos d'une cuillère d'un mince éclat. Retirer du feu. La glaçure s'épaissit davantage pendant qu'elle refroidit.",
      "visualCue": {
        "primaryTarget": "La glace est ambre foncée et enrobe la cuillère dans un film mince, même qui court lentement hors du bord.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La glace est mince et aqueuse; elle s'écoule immédiatement sans enrobage.",
            "action": "Continuer à mijoter pendant 2 minutes."
          },
          {
            "state": "Perfect",
            "description": "Laisse une couche propre et lente sur la cuillère. Deep ambre-brun. Des odeurs de soja caramélisé et de vin de riz sucré.",
            "action": "Retirer du feu. Il s'épaissira encore plus en refroidissant."
          },
          {
            "state": "Overdone",
            "description": "La glace est devenue très épaisse et collante, alors qu'elle est chaude, et elle va rendre la roche dure à mesure qu'elle refroidit.",
            "action": "Ajouter 1 c. à soupe d'eau et remuer à feu doux pour se détendre."
          }
        ]
      },
      "feelCue": "Plongez une cuillère et faites glisser votre doigt à travers le revêtement — un teriyaki correctement réduit devrait tenir une ligne propre pendant 3-4 secondes avant qu'il se retourne ensemble."
    },
    {
      "nodeId": "step_2",
      "action": "Sear",
      "inputs": [
        "ing_01",
        "ing_06"
      ],
      "outputState": "seared_salmon",
      "instructions": "Les filets de saumon sont complètement secs avec du papier de cuisine. Noter la peau 3 fois en diagonale pour éviter le curling. Chauffer l'huile dans une poêle antiadhésive ou en fonte à feu moyen-élevé jusqu'à ce qu'elle mijote. Placer la peau du saumon vers le bas et appuyer fermement avec une spatule pendant 10 secondes pour éviter le curling. Cuire la peau vers le bas pendant 4 minutes jusqu'à ce que la peau soit profondément dorée et croustillante et que la chair soit devenue opaque 2/3 du chemin vers le haut des côtés. Flip une fois.",
      "visualCue": {
        "primaryTarget": "La peau est un brun doré profond aux bords croustillants et rendus; la chair est devenue opaque du bas vers le haut, laissant une bande orange translucide en haut.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est pâle et collée à la poêle; la chair est encore entièrement translucide. Le saumon déchirera si vous essayez de le retourner.",
            "action": "Attendez — le saumon se libère naturellement lorsque la peau est bien séchée. Ne la forcez pas."
          },
          {
            "state": "Perfect",
            "description": "La peau est brun-or profond et se libère proprement. La chair est opaque 60 à 70 % du passage. Les bords commencent à peine à devenir blancs.",
            "action": "Fliper et réduire le feu à moyen."
          },
          {
            "state": "Overdone",
            "description": "La chair est devenue complètement opaque et blanche jusqu'au sommet avant de retourner. La peau peut être trop sombre.",
            "action": "Flipez immédiatement et appliquez de la glaçure. Le centre sera cuit mais pas encore sec."
          }
        ]
      },
      "feelCue": "Appuyez sur la partie la plus épaisse du saumon avec votre bout de doigt — peau vers le bas, il doit se sentir ferme à la base mais ressort comme un muscle au repos dans la moitié supérieure."
    },
    {
      "nodeId": "step_3",
      "action": "Glace",
      "inputs": [
        "seared_salmon",
        "teriyaki_glaze",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_salmon_teriyaki",
      "instructions": "Après avoir retourné, cuire le côté chair pendant 1 minute. Réduire la chaleur à faible. Verser le teriyaki glaçure sur et autour du saumon. Pendant qu'elle bulle, la cuillère sur le dessus des filets à plusieurs reprises pendant 1-2 minutes. La glaçure réduira et laquera le saumon dans un revêtement acajou brillant. Retirer du feu et cuillerer toute glaçure restante sur le dessus. Éparpiller l'oignon vert et les graines de sésame. Reposez-vous 1 minute avant de servir.",
      "visualCue": {
        "primaryTarget": "Le saumon est recouvert d'une glaçure acajou profondément brillante aux bords caramélisés et la peau est visiblement croquante en dessous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La glace est encore mince et s'écoule; le saumon semble pâle et sous-laqué.",
            "action": "Bastir plus agressivement à feu doux pendant 1 à 2 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "Le saumon brille d'une épaisse glaçure foncée qui se déplace à peine lorsque la poêle bascule. Des odeurs de soja caramélisé et de saké. La chair est juste mise et donne à la pression douce.",
            "action": "Reposez-vous 1 minute et servez immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La glace a noirci et est devenue amère; l'intérieur du saumon est crayeux et sec.",
            "action": "Retirer immédiatement du feu. Servir avec du riz extra uni pour équilibrer l'extérieur intense et légèrement amer."
          }
        ]
      },
      "feelCue": "Le filet fini devrait offrir une expérience distincte à deux textures: une presse à peine filante sur la surface suivie d'une fourche propre et beurreuse qui pénètre dans la chair."
    }
  ]
};
