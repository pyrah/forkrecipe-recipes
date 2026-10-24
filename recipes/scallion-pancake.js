export default {
  "repoId": "master_chinese_scallion_pancake_001",
  "parentRepoId": null,
  "slug": "scallion-pancake",
  "author": "ForkRecipe Kitchen",
  "title": "Pancake à l'échouement",
  "description": "Pain plat de la rue bien-aimé de Shanghai — une spirale de pâte à eau chaude stratifiée avec de l'huile de sésame et un blizzard de pétoncle vert foncé, frit jusqu'à ce que l'extérieur se brise en mille couches d'or pendant que l'intérieur reste productif et parfumé.",
  "cuisine": "Chinois",
  "culture": "Shanghainese",
  "category": "breads",
  "tags": [
    "Pain plat",
    "Chinois",
    "scalpel",
    "frites",
    "en couches"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 2,
      "defaultUnit": "cups",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau bouillante (juste à ébullition)",
      "ratioValue": 0.5,
      "defaultUnit": "cups",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau froide",
      "ratioValue": 0.25,
      "defaultUnit": "cups",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "pâte de sésame éclaircie à l'huile neutre"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile neutre (pour friture)",
      "ratioValue": 4,
      "defaultUnit": "tbsp",
      "substitutions": [
        "Saindoux pour la richesse traditionnelle"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Échalons, tranchés finement",
      "ratioValue": 1,
      "defaultUnit": "cup",
      "substitutions": [
        "Ciboulette chinoise"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Poudre de cinqpices (facultatif)",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": [
        "poivre blanc seul"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrate",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "mixed_dough",
      "instructions": "Placer la farine dans un grand bol et faire un puits au centre. Verser l'eau bouillante directement dans le puits et remuer immédiatement avec des baguettes ou une fourchette dans un mouvement circulaire du centre vers l'extérieur — l'eau bouillante fait cuire partiellement (gélatiniser) l'amidon, produisant une pâte tendre et légèrement translucide. Après avoir remué pendant 1 minute, ajouter l'eau froide et continuer à mélanger jusqu'à ce qu'une boule rugueuse se forme. La combinaison de l'eau chaude et froide produit une pâte qui est simultanément douce (de la gélatinisation de l'eau chaude) et élastique (de l'eau froide activant le gluten restant). La pâte aura d'abord l'air louche — c'est exact.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte rugueuse qui tient ensemble. Pas de patchs de farine sèche. La vapeur monte du mélange.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches sèches de farine à la base du bol. La pâte est émiettée et ne tient pas ensemble.",
            "action": "Ajouter l'eau froide une cuillère à soupe à la fois, en mélangeant après chaque addition."
          },
          {
            "state": "Perfect",
            "description": "Une balle rude mais cohésive. Légèrement collant mais qui tient sa forme. La vapeur monte: l'eau chaude fonctionne encore.",
            "action": "Il s'avère et pétrir jusqu'à ce que lisse."
          },
          {
            "state": "Overdone",
            "description": "Humide et collante. La pâte coule plutôt qu'elle ne tient. Trop d'eau.",
            "action": "Agenouillez la farine une cuillère à soupe à la fois — les pâtes d'eau chaude absorbent rapidement la farine."
          }
        ]
      },
      "feelCue": "La pâte à eau chaude est plus chaude et plus douce que la pâte ordinaire immédiatement après le mélange, presque soyeuse à partir de l'amidon gélatinisé. Il n'est pas collant malgré la douceur."
    },
    {
      "nodeId": "step_2",
      "action": "Agenouillement",
      "inputs": [
        "mixed_dough"
      ],
      "outputState": "smooth_dough",
      "instructions": "Tourner la pâte sur une surface légèrement farinée et pétrir pendant 5-7 minutes jusqu'à ce que la surface devienne très lisse. Les pâtes d'eau chaude pétrissent plus vite que les pâtes d'eau froide parce que la chaleur a déjà fait des travaux structuraux — ne pas trop pétrir ou la pâte devient dure. La pâte finie doit être lisse comme une perle, non collante et extrêmement souple — plus que la pâte à pain, plus près des pâtes fraîches. Diviser en 4 portions égales, couvrir avec un chiffon humide, et reposer pendant 20-30 minutes.",
      "visualCue": {
        "primaryTarget": "Une pâte très lisse, légèrement translucide qui peut être étirée finement sans déchirer. Plus souple que la pâte à pain.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De petites taches rugueuses encore visibles. Larmes à moins de 5 cm lorsqu'elles sont étirées.",
            "action": "Agenouillez encore 2-3 minutes. La pâte est plus indulgente que le pain de levure — elle se lissera rapidement."
          },
          {
            "state": "Perfect",
            "description": "Parfaitement lisse, non collante. Lorsqu'une pièce est tirée, elle s'étire sans déchirer sur une mince feuille légèrement translucide.",
            "action": "Couvrir et se reposer avant de rouler."
          },
          {
            "state": "Overdone",
            "description": "La pâte est chaude et légèrement dure — a été pétrie trop longtemps et le gluten a serré.",
            "action": "Reposez-vous 20 minutes avant de continuer — la chaleur aidera à détendre le gluten."
          }
        ]
      },
      "feelCue": "La pâte à eau chaude est remarquablement douce — elle devrait se produire sous la pression la plus légère de la main, sentant presque comme pétrir un oreiller chaud et dense."
    },
    {
      "nodeId": "step_3",
      "action": "Forme",
      "inputs": [
        "smooth_dough",
        "ing_04",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "coiled_pancakes",
      "instructions": "Travailler une portion à la fois sur une surface légèrement farinée, rouler chaque pièce dans un mince rectangle d'environ 30 x 20 cm (12 x 8 pouces). Badigeonner généreusement d'huile de sésame, laissant une bordure de 1 cm. Dispersez un quart des pétoncles uniformément sur la surface et assaisonnez avec du sel et cinq-pice si vous utilisez. À partir du long bord le plus proche de vous, roulez le rectangle étroitement dans un log — exactement comme vous enroulez un rouleau de gelée. Puis enroulez le log sur lui-même dans une spirale serrée, en tupant l'extrémité de la queue en dessous, et appuyez doucement pour sceller la bobine. Laisser reposer les disques enroulés 10 minutes avant d'aplatir. Utilisez un laminoir pour aplatir chaque bobine à environ 6 mm d'épaisseur — la spirale en couches compresse sans perdre sa structure stratifiée.",
      "visualCue": {
        "primaryTarget": "Un disque plat circulaire montrant un motif en spirale de couches vu de dessus ou en coupe transversale. Des taches vertes de pétoncle visibles partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La bobine a été roulée trop lâchement — des écarts entre les couches, et le pétoncle est tombé pendant le laminage. Huile de sésame mise en réserve aux bords.",
            "action": "Reroulez le log plus étroitement. Scellez les bords avant de les enrouler — l'huile doit rester à l'intérieur des couches et ne pas s'échapper."
          },
          {
            "state": "Perfect",
            "description": "Serre, même spirale visible d'en haut. Échalote uniformément répartie. Le disque est uniforme en épaisseur sans masse centrale épaisse.",
            "action": "Faire frire immédiatement ou réfrigérer jusqu'à 30 minutes."
          },
          {
            "state": "Overdone",
            "description": "Le laminoir a déchiré la couche externe, exposant l'huile de pétoncle et de sésame à la surface.",
            "action": "Patch taches exposées avec une pincée de pâte plate. Les couches se forment encore pendant la friture."
          }
        ]
      },
      "feelCue": "Lorsque vous pressez la bobine à plat avec une goupille de laminage, vous ressentez des couches distinctes qui résistent et compressent sous la goupille — une légère spirale qui absorbe la pression."
    },
    {
      "nodeId": "step_4",
      "action": "Fry",
      "inputs": [
        "coiled_pancakes",
        "ing_05"
      ],
      "outputState": "finished_pancakes",
      "instructions": "Chauffer une poêle large et lourde (fer moulé ou acier au carbone de préférence) à feu moyen-élevé jusqu'à ce qu'elle fume. Ajouter 1 cuillerée à soupe d'huile neutre et tourner pour enrober. Placer un crêpe dans la poêle et cuire 2-3 minutes jusqu'à ce que le fond soit bien doré avec quelques taches plus foncées. Flip, ajouter une autre petite éclaboussure d'huile dans la poêle, et presser le crêpe doucement mais fermement avec une large spatule pendant 5 secondes pour assurer un contact uniforme. Cuire encore 2-3 minutes. Flipez encore, pressez encore une fois et faites cuire une dernière minute si nécessaire. Le temps total de cuisson est de 5 à 7 minutes — assez pour faire cuire les couches intérieures tout en construisant une croûte éclatante. Égoutter brièvement sur un support (pas des serviettes en papier, qui vapeur et adoucir la croûte).",
      "visualCue": {
        "primaryTarget": "De couleur dorée avec des taches plus foncées. Calque visible au bord de coupe. La surface a une texture inégale et pliée plutôt qu'une texture plate et lisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle, encore doux au toucher. L'intérieur peut se sentir pâteux en appuyant. L'échon n'a pas caramélisé.",
            "action": "Continuer à frire à feu moyen — ne pas augmenter la chaleur, qui brûlera l'extérieur avant que l'intérieur cuisine."
          },
          {
            "state": "Perfect",
            "description": "D'or foncé à ambre. La pression de la surface produit une croûte audible. Les calques sont visibles au bord. Parfumé de sésame et de pétoncle. La coupe révèle un intérieur fragile et tendre.",
            "action": "Reposez-vous sur une grille 1 minute, puis coupez en coin."
          },
          {
            "state": "Overdone",
            "description": "Marron foncé à noir dans les taches. Le pétoncle a brûlé plutôt que caramélisé et sent amer.",
            "action": "Couper les parties les plus sombres. Abaissez la chaleur pour les crêpes futures et appuyez moins fermement pendant la cuisson."
          }
        ]
      },
      "feelCue": "Appuyez sur la surface d'un crêpe fini avec un joint — il devrait donner un craquage satisfaisant, croustillant et ressort légèrement en arrière, comme pressant à travers une coquille mince dans un noyau plus doux en dessous."
    }
  ]
};
