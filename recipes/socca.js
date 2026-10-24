export default {
  "repoId": "master_french_socca_001",
  "parentRepoId": null,
  "slug": "socca",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Socca Niçoise",
  "description": "La crêpe de rue bien-aimée de Nice : un mince disque de farine de pois chiches à taches de caramel cuit dans une poêle en fer jusqu'à ce que les bords se brisent et que le centre continue à céder, puis déchiré à la table et mangé avec des doigts époussetés de poivre noir.",
  "cuisine": "Français",
  "culture": "Niçois",
  "category": "grains",
  "tags": [
    "végétalien",
    "Sans gluten",
    "pois chiches",
    "Produits de la rue",
    "français",
    "Joli",
    "Pain plat"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "1 hour 10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Farine de pois chiches",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "farine de gramme (san)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile d'olive extra vierge (plus plus pour la poêle)",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poivre noir grossièrement craqué",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whisk",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "socca_batter",
      "instructions": "Mettre la farine de pois chiches dans un bol. Versez lentement l'eau froide sur elle en fouettant — ajoutez toujours de l'eau à la farine, et non de la farine à l'eau, pour éviter les grumeaux. Ajouter l'huile d'olive et le sel. Encore du fouet. La pâte doit être plus mince que la pâte à crêpes — presque aussi fine que le lait entier. Éliminez toute mousse. Repos à la température ambiante pendant 1 heure minimum. Le reste permet à la farine d'hydrater complètement et à la pâte de développer un caractère crémeux et noisette.",
      "visualCue": {
        "primaryTarget": "Un or pâle, une pâte légèrement translucide sans grumeaux et une huile brillante à la surface de l'huile d'olive.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des lumps de farine flottent dans la pâte. La surface est blanche et mousseuse.",
            "action": "Gâcher plus longtemps, puis filtrer à travers un tamis fin. Essuyez la mousse avec une cuillère."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, mince et doré-translucide. Quand vous penchez le bol, il court comme de la crème. Après le repos, la surface est calme et légèrement huileuse, avec un aspect stabilisé.",
            "action": "Incorporer et poursuivre."
          },
          {
            "state": "Overdone",
            "description": "La pâte s'est épaissie de trop de repos dans une pièce chaude et est maintenant la consistance de la pâte à crêpes.",
            "action": "Finir avec une cuillère à soupe d'eau froide et fouetter. Goûte — si elle s'est amère (long repos d'été), recommencez."
          }
        ]
      },
      "feelCue": "Plongez votre bout de doigt — la pâte devrait s'écouler dans une mince, même feuille comme la crème fraîche. Tout ce qui est plus épais fait une socca caoutchouteuse, comme du pain, plutôt que l'original croustillant et papier."
    },
    {
      "nodeId": "step_2",
      "action": "Cuire",
      "inputs": [
        "socca_batter",
        "ing_05"
      ],
      "outputState": "finished_socca",
      "instructions": "Placer une poêle en fonte de 30 à 32 cm ou une poêle ronde en acier au carbone sous le grille-eau au maximum. Après 10 minutes, utilisez des gants de four épais pour enlever la poêle chaude. Verser 2 c. à soupe d'huile d'olive, tourner pour enrober, puis verser rapidement suffisamment de pâte pour couvrir la surface à une profondeur de 4 à 5 mm. Retournez immédiatement à la grille. Faire griller de 6 à 8 minutes jusqu'à ce que le dessus soit blister et doré en patchs et que les bords soient foncés et croquants. Au cours des 2 dernières minutes, éparpiller le poivre sur le dessus. Le centre restera légèrement doux — c'est exact.",
      "visualCue": {
        "primaryTarget": "Un disque mince, irrégulier avec un paysage de blisters dorées et ambres à travers le haut, très sombre au bord, or pâle au centre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est pâle et mate sans cloques. La socca est entièrement douce, presque crue au centre.",
            "action": "Retourner à la grille pour 3 minutes de plus. Si votre grilleur est faible, déplacez la grille plus près de l'élément."
          },
          {
            "state": "Perfect",
            "description": "Le dessus est rouillé de taches brun caramel foncé. Les bords se sont levés de la poêle et crépitent lorsqu'ils sont tapés avec un couteau. Le centre s'est fixé, mais il donne un peu sous la pression des doigts — encore un petit peu crépuscule. La socca sent le pois chiche grillé, l'huile d'olive et l'omble.",
            "action": "Transférer sur une planche à découper, déchirer ou couper grossièrement, et servir immédiatement avec du poivre fissuré supplémentaire."
          },
          {
            "state": "Overdone",
            "description": "Toute la surface est uniformément brun foncé à noir. Il ne reste pas de centre mou — c'est un croustillant dur et amer.",
            "action": "Coupez les bords les plus noirs. Les parties intérieures peuvent encore être comestibles. Commencez le prochain lot avec moins de temps de grille."
          }
        ]
      },
      "feelCue": "Tapez le bord de la socca avec une poignée de couteau — il devrait faire un son comme tapoter une mince plaque de céramique: léger, résonant, et tranchant. Un bruit signifie que le bord a besoin de plus de temps."
    }
  ]
};
