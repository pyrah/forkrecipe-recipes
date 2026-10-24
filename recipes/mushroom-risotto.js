export default {
  "repoId": "master_italian_mushroom_risotto_001",
  "parentRepoId": null,
  "slug": "mushroom-risotto",
  "author": "ForkRecipe Kitchen",
  "title": "Risotto ai Funghi",
  "description": "Riz carnaroli grillé au beurre et au vin blanc, intégré dans un risotto crémeux avec du stock de porcini et des champignons frais, fini avec du beurre froid et Parmigiano dans un plat coulant et mouvant.",
  "cuisine": "Italien",
  "culture": "Nord italien",
  "category": "grains",
  "tags": [
    "Risotto",
    "Italien",
    "champignon",
    "végétarien",
    "riz",
    "parmesan"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "55 min",
  "ratioSystem": "parts",
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
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz de Carnaroli",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "Violone Nano",
        "Arborio (moins de préférence)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Champignons de porcins séchés (poêlés dans 500 ml d'eau chaude)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "shiitake séché"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Champignons frais mélangés (porcini, crémini, chanterelle — tranchés)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "crémini seulement",
        "Champignons d'huître"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Matériel de trempage de champignons et de porcins chauds (d'en haut + eau)",
      "ratioValue": 90,
      "defaultUnit": "parts",
      "substitutions": [
        "Poulet léger"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Vin blanc sec",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "vermouth blanc sec",
        "stock supplémentaire"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Échalotes (finement hachées)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon blanc"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gousse d'ail (mincée)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Beurre non salé (divisé: moitié pour soffritto, moitié pour mantecatura)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Dairy",
      "name": "Parmigiano Reggiano (finement râpé)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "Grana Padano"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 3,
      "defaultUnit": "sprigs",
      "substitutions": [
        "persil frais à feuilles plates"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin et poivre blanc",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire revenir",
      "inputs": [
        "ing_08",
        "ing_12",
        "ing_03",
        "ing_07",
        "ing_10",
        "ing_11"
      ],
      "outputState": "sauteed_mushrooms",
      "instructions": "Faire fondre la moitié du beurre avec l'huile d'olive dans une grande poêle à fond lourd à feu vif. Lorsque l'écume s'abaisse, ajoutez les champignons frais dans une seule couche — ne les foulez pas ou ils vont vapeur et gris plutôt que rôtir. Cuire sans remuer pendant 2 à 3 minutes jusqu'à ce que le fond soit bien doré, puis mélanger et cuire encore 2 minutes. Ajouter l'ail et le thym, mélanger 30 secondes, assaisonner de sel et de poivre. Retirer de la poêle dans un bol et réserver. Les champignons reviendront à la fin.",
      "visualCue": {
        "primaryTarget": "Les champignons sont brun-or profond sur au moins un côté avec un léger omble aux bords. Ils ont diminué de moitié en volume. Pas de taches grises et humides.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les champignons sont gris pâle, humides, et libèrent du liquide — la chaleur est tombée ou la poêle était bondée.",
            "action": "Éteignez-les en une seule couche et augmentez la chaleur; ne remuez pas jusqu'à ce qu'une croûte dorée se forme sur le dessous."
          },
          {
            "state": "Perfect",
            "description": "Profondément doré, légèrement rétréci, parfumé de thym. Les bords ont de l'omble léger. Ils ont l'air secs et concentrés.",
            "action": "Retirer dans un bol et commencer le risotto dans la même casserole - le fond de champignons sur la base de la poêle est saveur."
          },
          {
            "state": "Overdone",
            "description": "Les champignons sont très foncés et durs, les bords brûlés; l'ail est brun amer.",
            "action": "Utilisez quand même, mais choisissez des morceaux complètement noirs. Déglacer la poêle brièvement avant le risotto pour soulever le fond sans amertume."
          }
        ]
      },
      "feelCue": "Ramassez un champignon et pressez - le légèrement — il devrait se compresser légèrement et rebondir avec une fermeté satisfaisante, comme une éponge sèche. Une pièce humide et molle n'a pas perdu assez d'humidité."
    },
    {
      "nodeId": "step_2",
      "action": "Faire griller",
      "inputs": [
        "ing_08",
        "ing_06",
        "ing_01"
      ],
      "outputState": "toasted_rice",
      "instructions": "Dans la même casserole, faire fondre le reste du beurre à feu moyen. Ajouter les échalotes et transpirer doucement pendant 4 à 5 minutes jusqu'à ce qu'elles soient douces et translucides — sans brunir. Ajouter le riz Carnaroli sec et remuer continuellement pendant 1 à 2 minutes jusqu'à ce que chaque grain devienne translucide et prenne une faible odeur de noix. Cette tostatura scelle l'extérieur du grain, ralentissant la libération d'amidon pour un fini crémeux-yet-al-dente. Ajouter le vin blanc tout à la fois et remuer jusqu'à absorption complète.",
      "visualCue": {
        "primaryTarget": "Les grains de riz sont entièrement translucides — il ne reste pas de craie blanche. Lorsque le vin frappe la casserole, il doit s'étourdir furieusement et commencer à absorber dans les 30 secondes. Les échalotes sont douces et vitreuses.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains présentent toujours des centres blancs; le vin n'est pas encore complètement absorbé. Les échalotes gardent un peu de croquant.",
            "action": "Continuer à remuer à feu moyen; laisser le vin s'évaporer complètement avant d'ajouter du stock."
          },
          {
            "state": "Perfect",
            "description": "Grains entièrement translucides, vin absorbé, la poêle sent le grain grillé et le vin blanc. Prêt pour le stock.",
            "action": "Commencez par ajouter une louche à la fois."
          },
          {
            "state": "Overdone",
            "description": "Les grains commencent à brunir ou à coller; le beurre commence à brunir sous le riz.",
            "action": "Ajouter immédiatement la première louche de bouillon pour arrêter la cuisson."
          }
        ]
      },
      "feelCue": "Incorporer le riz grillé — les grains doivent sonner légèrement sablonneux contre la poêle et se déplacer librement. Lorsque le vin absorbe, le mélange se resserre et la traînée de la cuillère augmente sensiblement."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "toasted_rice",
        "ing_04",
        "ing_02"
      ],
      "outputState": "built_risotto",
      "instructions": "Commencer à ajouter le stock de champignons chauds, y compris le liquide de trempage de porcins, une louche à la fois. Après chaque ajout, remuer constamment jusqu'à ce que le stock soit presque complètement absorbé avant d'ajouter la prochaine louche. Les amidons libérés des grains de Carnaroli ont besoin de cette agitation constante pour construire la matrice crémeuse environnante. Ce processus prend de 16 à 18 minutes à feu moyen. Goûtez après 14 minutes — le riz devrait approcher de l'al dente. Assaisonner de sel. Gardez le stock au chaud dans une casserole séparée; le stock froid choque le riz et brise le rythme.",
      "visualCue": {
        "primaryTarget": "Un risotto coulant, crémeux et lâche — les grains de riz sont suspendus dans une sauce épaisse, blanc ivoire qui verse et s'installe lentement. Chaque grain est gonflé mais conserve sa forme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore très fermes au centre (amidon blanc dur quand mordu); la sauce environnante est fine et aqueuse.",
            "action": "Continuer d'ajouter du stock et de remuer. Le risotto n'est pas prêt jusqu'à ce que le grain donne pleinement sauf pour la plus petite résistance al dente."
          },
          {
            "state": "Perfect",
            "description": "Consistance fluide, crémeuse, all'onda (réglage d'onde). Chaque grain est cuit avec la moindre fermeté au centre. La sauce coule autour des grains et se pose lentement sur une assiette.",
            "action": "Retirer immédiatement du feu pour l'étape mantecatura — le risotto est à son plus réceptif à l'absorption des graisses en ce moment."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont entièrement mous et commencent à se décomposer; le risotto est épais et collant plutôt que de couler.",
            "action": "Retirer du feu et passer à la mantecatura rapidement — vous ne pouvez pas faire cuire les grains, mais ajouter du beurre froid et du fromage ralentira la cuisson."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère à travers le centre du risotto — l'écart devrait se fermer lentement, comme se séparer le porridge épais qui se guérit ensuite. Si l'écart reste ouvert, il est trop sec et nécessite plus de bouillon; si l'écart se ferme instantanément comme de l'eau, la sauce est trop fine."
    },
    {
      "nodeId": "step_4",
      "action": "Monter au beurre",
      "inputs": [
        "built_risotto",
        "ing_09",
        "ing_08",
        "sauteed_mushrooms",
        "ing_11"
      ],
      "outputState": "finished_risotto",
      "instructions": "Retirez complètement la poêle du feu. Ajouter les champignons sautés réservés et les plier. Ajouter ensuite le beurre froid (cubed) et le Parmigiano tout à la fois. Incorporer vigoureusement dans un mouvement circulaire — c'est le mantecatura, le moment où la graisse du beurre froid émulsifie avec le liquide de cuisson féculent pour créer la sauce brillante et crémeuse. Assaisonner au goût. Le risotto doit couler sur l'assiette comme une vague — pas se tenir dans une pile, pas verser comme de la soupe. C'est tout 'onda et il faut que le risotto soit un peu plus lâche que vous le pensez, parce qu'il se met sur la plaque.",
      "visualCue": {
        "primaryTarget": "Le risotto à la crème d'ivoire qui coule avec une vague lente lorsque la poêle est secouée — tout 'onda. Lorsque cuillé sur une assiette chaude, il s'étend lentement à un monticule bas, même. Champignons répartis dans l'ensemble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Risotto est trop épais et rigide — se tient dans un monticule sur l'assiette sans s'étendre. La mantecatura n'était pas assez vigoureuse, ni trop peu de restes liquides.",
            "action": "Revenez brièvement à feu doux et ajoutez un jet de bouillon chaud; remuez vigoureusement pour se détendre. L'ondulation devrait revenir."
          },
          {
            "state": "Perfect",
            "description": "Il s'écoule lentement vers l'extérieur sur une plaque inclinée, trouvant son propre niveau. Surface brillante avec un éclat blanc crème et des morceaux de champignons visibles. Sensation intense de porcini et de Parmigiano.",
            "action": "Assiette immédiatement sur les assiettes chaudes. Terminer avec une torsion de poivre noir et quelques derniers rasages de Parmigiano."
          },
          {
            "state": "Overdone",
            "description": "Le Risotto est soupeux et mince, l'assiette inonde quand la sauce se sépare des grains.",
            "action": "Vous avez ajouté trop de stock ou la mantecatura a cassé l'émulsion. Servir immédiatement; il s'épaissira légèrement comme il repose sur une assiette chaude."
          }
        ]
      },
      "feelCue": "Après la mantecatura, inclinez la poêle : le risotto devrait glisser vers le bas dans une vague lente et unifiée — pas éclaboussure comme de l'eau, pas tenir comme de la pâte. Cette seule vague vivante est toute 'onda et la seule cible qui compte."
    }
  ]
};
