export default {
  "repoId": "master_french_saucetomate_001",
  "parentRepoId": null,
  "slug": "sauce-tomate",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce Tomate",
  "description": "La sauce mère Escoffier — pas une marinara rapide. Les tomates fondues en graisse de porc et en mirpoix, humidifiées de blanc, parfumées d'un bouquet garni, mijotées lentement jusqu'au confiture, passent ensuite à une sauce rouge lisse, veloutée et arrondie.",
  "cuisine": "Français",
  "culture": "Classique",
  "category": "sauces",
  "tags": [
    "sauce",
    "français",
    "mère-sauce",
    "tomates",
    "prix",
    "classique"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "2 hours 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2025-06-09",
  "updatedAt": "2025-06-09",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 3,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Tomates de ripe (ou en conserve San Marzano)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates entières pelées de bonne qualité"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Sel de porc ou de beurre",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": [
        "beurre non salé",
        "Pancetta",
        "bacon rendu"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Mirepoix (oignon, carotte, céleri)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Aile",
      "ratioValue": 0.2,
      "defaultUnit": "part",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Stock blanc",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Poulet léger",
        "Viande bovine"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Pince de sucre",
      "ratioValue": 0.1,
      "defaultUnit": "part",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 0.2,
      "defaultUnit": "part",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Bouquet garni",
      "ratioValue": 1,
      "defaultUnit": "bundle",
      "substitutions": [
        "thym, laurier, persil tiges liées en vert poireau"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rendu",
      "inputs": [
        "ing_02"
      ],
      "outputState": "rendered_fat",
      "instructions": "Couper le petit porc salé et le mettre dans un pot à fond lourd à feu doux (ou simplement faire fondre le beurre). Qu'il se rende lentement sans brunir, en tirant le gras clair et les débris à un or pâle. Vous voulez un film de graisse propre enrobant le pot, pas une frite.",
      "visualCue": {
        "primaryTarget": "Un bassin peu profond de graisse claire et dorée sur le fond du pot. Les morceaux de porc ont rétréci et tourné l'or le plus pâle; la graisse mijote mais ne fume pas.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le porc est encore rose et caoutchouteux, peu de graisse dans le pot, la surface semble sèche.",
            "action": "Baissez la chaleur et continuez — rendre le travail patient. Remuer pour que rien ne colle."
          },
          {
            "state": "Perfect",
            "description": "Les graisses sont limpides et dorées, les morceaux sont pâles et croustillants aux bords, la casserole sent doucement le porc, pas la friture.",
            "action": "Continuez à transpirer le mirpoix dans cette graisse."
          },
          {
            "state": "Overdone",
            "description": "Les éclats sont brun foncé, la graisse est brune, une odeur de friture acride s'élève.",
            "action": "Tirez immédiatement de la chaleur et soulevez les débris les plus sombres. Les graisses brunes assombriront la sauce."
          }
        ]
      },
      "feelCue": "La graisse doit se déplacer comme de l'huile fine quand vous boutez le pot, et l'odeur est chaude et porcine — jamais pointue ou grillée. Si vous utilisez du beurre, écoutez un silence, même des étourdissements, pas un furieux."
    },
    {
      "nodeId": "step_2",
      "action": "Sueur",
      "inputs": [
        "rendered_fat",
        "ing_03",
        "ing_04"
      ],
      "outputState": "sweated_aromatics",
      "instructions": "Ajouter le mirépoix finement coupé et l'ail à la graisse. Sweat à feu doux-moyen, en remuant souvent, jusqu'à ce que l'oignon devienne translucide et que le pot entier s'adoucisse et reste silencieux de sa bouchée crue. Ne le laissez pas colorer — c'est une fondation, pas un amour.",
      "visualCue": {
        "primaryTarget": "Mirepoix est devenu doux et vitreux, les oignons translucides, les carottes illuminés et donnant, tout est léché de graisse. Pas de brunissement nulle part.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon encore blanc et opaque, les légumes raides et croquants, le pot sent cru et l'oignon.",
            "action": "Continuer à transpirer avec un couvercle ajar pour piéger la vapeur douce. Incorporer pour que la couche inférieure ne capture pas."
          },
          {
            "state": "Perfect",
            "description": "Les oignons sont translucides et limoneux, l'ail est parfumé et doux, le mirépoïx glisse et l'odeur crue a cédé la place à un arôme doux et doux.",
            "action": "Ajouter les tomates et la pincée de sucre."
          },
          {
            "state": "Overdone",
            "description": "Les bords d'oignon et d'ail ont bruni et l'ail sent aiguisé et grillé.",
            "action": "Abaissez immédiatement la chaleur et ajoutez les tomates maintenant — leur liquide arrêtera le brunissement. L'ail bruni devient amer, alors bougez vite."
          }
        ]
      },
      "feelCue": "Faites glisser la cuillère sur le fond — les légumes doivent se séparer doucement sans résistance et sans craquelure. La cuisine doit sentir douce et ronde, pas piquante."
    },
    {
      "nodeId": "step_3",
      "action": "Faire réduire",
      "inputs": [
        "sweated_aromatics",
        "ing_01",
        "ing_06"
      ],
      "outputState": "tomato_base",
      "instructions": "Ajouter les tomates hachées (en conserve) et la pincée de sucre pour corriger leur acidité. Augmentez le feu jusqu'à ce qu'il mijote et faites cuire, en remuant à mesure qu'il s'épaississe, jusqu'à ce que la tomate aqueuse s'effondre dans une base épaisse et jammy et que l'odeur vive et crue devienne profonde et douce.",
      "visualCue": {
        "primaryTarget": "Une masse épaisse et rouge brique qui monte sur la cuillère et s'éloigne des côtés du pot. La fine eau de tomate a cuit; l'huile commence à être perlée aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tomates sont molles et soupeuses, rouge-orange pâle, encore vertes et fortement acides. Une cuillère traînée à travers se remplit instantanément.",
            "action": "Continuer à réduire au-dessus d'une mijot régulière. La saveur ne peut s'achever jusqu'à ce que l'excès d'eau soit parti."
          },
          {
            "state": "Perfect",
            "description": "Deep brique-rouge et jammy, bourdonnant sur la cuillère, laissant un sentier propre quand gratté à travers le pot. L'odeur est devenue sucrée, concentrée et salée.",
            "action": "Mouiller avec le bouillon blanc et ajouter le bouquet garni."
          },
          {
            "state": "Overdone",
            "description": "La base est assombrie, collante et brûlante sur le fond, avec un bord pris, grillé à l'odeur.",
            "action": "Arrêtez de remuer la couche brûlée — ne la grattez pas. Verser le stock maintenant et transférer dans un pot propre si le fond a vraiment pris."
          }
        ]
      },
      "feelCue": "La base résiste à la cuillère et s'accroche à elle dans une fourche brillante. Lorsque vous sentez au-dessus du pot, la note brute-tomate est partie, remplacée par quelque chose de doux, profond, et presque comme de la confiture."
    },
    {
      "nodeId": "step_4",
      "action": "Mijoter",
      "inputs": [
        "tomato_base",
        "ing_05",
        "ing_08",
        "ing_07"
      ],
      "outputState": "simmered_tomate",
      "instructions": "Verser dans le bouillon blanc, mettre dans le bouquet garni, et assaisonner légèrement avec du sel (aller facile si vous avez utilisé le porc salé). Portez à la frémissante et maintenez-la là, partiellement couverte, pendant une heure et demie ou plus, en écumant la graisse et la souillure qui se rassemblent à la surface. La sauce doit s'arroser, ne jamais bouillir.",
      "visualCue": {
        "primaryTarget": "Une sauce rouge approfondissement, lisse de mousse et de graisse de surface d'un écrèmege régulier, assez épaisse pour enrober légèrement une cuillère. Le bouquet garni a imprégné son parfum.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mince et aqueuse, dégustation de pièces séparées — le stock ici, la tomate là — avec un film gras et de lard gris sur le dessus.",
            "action": "Gardez-le à mijoter lentement et patinez patiemment. Temps marié avec écrèmege est ce qui fusionne et clarifie la sauce."
          },
          {
            "state": "Perfect",
            "description": "Gloire, rouge profond unifié, lécher légèrement l'arrière d'une cuillère. La surface est propre et le goût est entier — arrondi, salé, doux, avec le parfum d'herbe tissé.",
            "action": "Retirer le bouquet garni et passer la sauce."
          },
          {
            "state": "Overdone",
            "description": "Réduit trop loin et lourd, bords de la croûte de pot sombre, la dégustation de sauce concentrée et terne avec une note plate surcuite.",
            "action": "Déplacez-vous avec un bouillon plus chaud et tirez-le de la chaleur. Passez-le rapidement avant qu'il ne se resserre davantage."
          }
        ]
      },
      "feelCue": "Seule la bulle lente occasionnelle devrait briser la surface — un vrai mijoter, jamais un ébullition. Chaque passe de la louche d'écumage devrait se présenter avec moins de graisse et de mousse que le dernier, la surface de croissance plus propre et brillant."
    },
    {
      "nodeId": "step_5",
      "action": "Passer",
      "inputs": [
        "simmered_tomate"
      ],
      "outputState": "finished_tomate",
      "instructions": "Jeter le bouquet garni et les morceaux de porc. Passer la sauce à travers un moulin à nourriture ou la pousser à travers un tamis fin avec une louche, travailler les solides jusqu'à ce que seules les peaux sèches et les fibres restent derrière. Retournez-le à la chaleur, goûtez et ajustez le sel et la pincée de sucre pour équilibrer l'acidité dans une sauce douce et veloutée.",
      "visualCue": {
        "primaryTarget": "Une sauce lisse, brillante et laquée, sans fibre visible, sans peau ni pulpe, suffisamment veloutée pour enrober l'arrière d'une cuillère et tenir une ligne propre tirée à travers elle avec un doigt.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce passe est encore flanquée de peau et de fibres à cordes, ou elle est mince et aqueuse à travers le moulin.",
            "action": "Passez-le à nouveau à travers un écran plus fin, ou réduisez brièvement pour le ramener à un corps de nichons. Appuyez plus fort sur les solides pour réclamer la pulpe qui s'accroche encore aux peaux."
          },
          {
            "state": "Perfect",
            "description": "Parfaitement lisse et velouté, rouge brillant profond, enrobant la cuillère et tenant une ligne dessinée. Équilibré: doux, salé et légèrement acide.",
            "action": "Tenez au chaud au-dessus d'un bain d'eau, ou refroidissez et entreposez. C'est fini."
          },
          {
            "state": "Overdone",
            "description": "Surmené dans le moulin, il est devenu pâteux et terne, ou surréduit après le passage, il est devenu épais et collant.",
            "action": "Whisk dans un peu de stock chaud pour ramener un corps versable et brillant, puis revérifier l'assaisonnement."
          }
        ]
      },
      "feelCue": "Tiré sur une assiette, la sauce devrait laisser un ruban propre et brillant qui tient sa forme. Sur la langue il est soyeux et rond, sans grain — l'acidité présente mais apprivoisée, toute la chose riche et complète."
    }
  ]
};
