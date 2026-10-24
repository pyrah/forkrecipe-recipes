export default {
  "repoId": "master_italian_butternutsagepasta_001",
  "parentRepoId": null,
  "slug": "butternut-squash-sage-pasta",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Pâtes de courge à beurre avec beurre brun et sauge",
  "description": "Rigatoni enrobé d'une sauce soyeuse de courges grillées au beurre mélangées à de l'eau de pâtes, jetées avec du beurre brun noisette, une sauge frite croustillante et des cubes de courges caramélisées. Doux, salé et chaud à l'automne, avec des noix grillées pour croquer.",
  "cuisine": "Italien",
  "culture": "Cuisine maison italo-américaine",
  "category": "grains",
  "tags": [
    "cuisine maison",
    "végétarien",
    "pâtes",
    "beurre de courges",
    "Sauge",
    "Beurre brun",
    "automne"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "55 min",
  "ratioSystem": "weight",
  "servings": 4,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Courge de beurre, pelée, ensemencée, coupée en cubes de 2 cm",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "Kabocha",
        "citrouille de sucre"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Rigatoni ou autres pâtes courtes à crêtes",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "orecchiette",
        "Penne"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Sauge fraîche",
      "ratioValue": 16,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Ail, tranché finement",
      "ratioValue": 2,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Eau de cuisson de pâtes Starchy",
      "ratioValue": 300,
      "defaultUnit": "ml",
      "substitutions": [
        "stock de légumes chauds"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Dairy",
      "name": "Fromage dur de type parmesan (rennet végétarien), râpé",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Nutemeg, fraîchement râpé",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Heat",
      "name": "Flacons de poivre rouge",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Citrus",
      "name": "Jus de citron",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Garnish",
      "name": "Noix, grillées et hachées",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "noisettes grillées",
        "pepitas"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Seasoning",
      "name": "Sel casher et poivre noir",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_13"
      ],
      "outputState": "roasted_squash",
      "instructions": "Chauffer le four à 425°F (220°C). Verser la courge avec l'huile d'olive, 1 cuillère à café de sel et poivrer, et la répartir sur une grande casserole en une seule couche. Faire rôtir 25 à 30 minutes, retourner une fois à mi-chemin, jusqu'à ce qu'il soit complètement tendre et caramélisé aux bords.",
      "visualCue": {
        "primaryTarget": "cubes oranges profonds aux coins brunis, caramélisés et bords légèrement éparpillés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lumineux, d'aspect brut orange sans brunissement; une fourchette rencontre une résistance ferme.",
            "action": "Encore 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "Les bords brunis, s'effondrent légèrement, et le parfum sucré.",
            "action": "Retirer et réserver un tiers des cubes pour la garniture."
          },
          {
            "state": "Overdone",
            "description": "Des coins noircis et collants, des sucres brûlés sur la poêle.",
            "action": "Utilisez les morceaux non brûlés pour la sauce; les morceaux noircis la rendent amère."
          }
        ]
      },
      "feelCue": "Une fourchette doit glisser dans un cube aussi facilement que dans le beurre ramolli."
    },
    {
      "nodeId": "step_2",
      "action": "Faire bouillir",
      "inputs": [
        "ing_03",
        "ing_13"
      ],
      "outputState": "al_dente_pasta",
      "instructions": "Pendant que la courge se termine, porter un grand pot d'eau bien salée à ébullition (212°F / 100°C). Cuire les pâtes 1 à 2 minutes avant l'emballage. Découpez 300 ml de l'eau de cuisson féculente avant de l'égoutter.",
      "visualCue": {
        "primaryTarget": "Pasta qui est souple mais avec un anneau mince et pâle au cœur quand mordu.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Large noyau blanc; les pâtes sont raides.",
            "action": "Faites bouillir encore une minute."
          },
          {
            "state": "Perfect",
            "description": "Il reste un petit noyau d'épingle – il finira dans la sauce.",
            "action": "Réserver de l'eau, puis égoutter."
          },
          {
            "state": "Overdone",
            "description": "Les pâtes sont douces et glissantes.",
            "action": "Ajouter la sauce immédiatement et ne pas mijoter plus loin."
          }
        ]
      },
      "feelCue": "Bite un rigatoni: il devrait résister brièvement au centre avant de céder."
    },
    {
      "nodeId": "step_3",
      "action": "Beurre brun et sauge croustillante",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_10"
      ],
      "outputState": "sage_brown_butter",
      "instructions": "Faire fondre le beurre dans une grande poêle de couleur claire à feu moyen. Lorsqu'il mousse, ajouter les feuilles de sauge et faire frire 1 à 2 minutes jusqu'à ce qu'elles soient croustillantes; les soulever sur une serviette en papier. Continuer à tourner le beurre pendant encore 1 à 2 minutes jusqu'à ce que les solides de lait brunissent la noisette, puis ajouter l'ail et les flocons de poivre pendant 30 secondes et retirer la poêle du feu.",
      "visualCue": {
        "primaryTarget": "Beurre ambré avec taches brunes grillées au fond, et feuilles sauges translucides vert foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est jaune et mousse encore fort; les feuilles de sauge sont boiteuses.",
            "action": "Continuer à tourner à feu moyen et surveiller de près."
          },
          {
            "state": "Perfect",
            "description": "La mousse s'abaisse, le beurre devient ambre, les taches sont marron-brun et sent la noix.",
            "action": "Ajouter l'ail et enlever le feu."
          },
          {
            "state": "Overdone",
            "description": "Les mouches sont noires et le beurre sent acride.",
            "action": "Jeter et recommencer — le beurre brûlé ne peut pas être sauvé."
          }
        ]
      },
      "feelCue": "Écoutez: le fort craquement du beurre mousseux se calme au fur et à mesure que l'eau se prépare — cela signifie que le brunissement est sur le point de se produire rapidement."
    },
    {
      "nodeId": "step_4",
      "action": "Mixer",
      "inputs": [
        "roasted_squash",
        "ing_07",
        "ing_09"
      ],
      "outputState": "squash_sauce",
      "instructions": "Mettre les deux tiers de la courge rôtie dans un mélangeur avec 200 ml d'eau de pâtes et la muscade. Mélanger jusqu'à ce qu'il soit complètement lisse, en ajoutant plus d'eau de pâtes si nécessaire pour atteindre une consistance épaisse et versable. Éventer le couvercle du mélangeur — le liquide chaud se développe.",
      "visualCue": {
        "primaryTarget": "Une purée d'orange douce et vive qui tombe d'une cuillère dans un ruban épais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Grainé avec des fibres visibles ou collé et trop épais pour se déplacer.",
            "action": "Ajouter une autre éclaboussure d'eau de pâtes et mélanger plus longtemps."
          },
          {
            "state": "Perfect",
            "description": "Velours et versables, comme une soupe épaisse.",
            "action": "Verser dans la poêle avec le beurre brun."
          },
          {
            "state": "Overdone",
            "description": "Mince et aqueuse.",
            "action": "Laisser mijoter dans la poêle quelques minutes pour serrer."
          }
        ]
      },
      "feelCue": "Frottez un peu entre vos doigts — il devrait se sentir complètement lisse, sans fil fibreux."
    },
    {
      "nodeId": "step_5",
      "action": "Mélanger",
      "inputs": [
        "sage_brown_butter",
        "squash_sauce",
        "al_dente_pasta",
        "roasted_squash",
        "ing_07",
        "ing_08",
        "ing_11",
        "ing_12"
      ],
      "outputState": "finished_squash_pasta",
      "instructions": "Retourner la poêle à feu moyen, ajouter la sauce courge au beurre brun et mélanger. Ajouter les pâtes et mélanger pendant 1 à 2 minutes, ajouter l'eau de pâtes au besoin, jusqu'à ce qu'elle soit brillante. Hors du feu, mélanger le fromage et le jus de citron et assaisonner. Servir avec les cubes de courges réservés, sauge croustillante émiettée et noix.",
      "visualCue": {
        "primaryTarget": "Pâtes enrobées d'une sauce dorée-orange brillante qui s'accroche dans les crêtes et remplit les tubes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est épaisse et pâteuse, entassant les pâtes.",
            "action": "Allongez-vous avec les pâtes à la fois."
          },
          {
            "state": "Perfect",
            "description": "Revêtement soyeux et brillant; la sauce se déplace avec les pâtes en jetant.",
            "action": "Assiette et garniture."
          },
          {
            "state": "Overdone",
            "description": "La sauce s'est serrée dans une pâte sèche après s'être assise.",
            "action": "Incorporer de l'eau de pâtes plus chaude juste avant de servir."
          }
        ]
      },
      "feelCue": "La sauce doit être crémeuse sur la langue, le beurre brun lisant comme noisettes grillées derrière la douceur de la courge."
    }
  ]
};
