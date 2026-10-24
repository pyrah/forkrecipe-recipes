export default {
  "repoId": "master_french_clafouti_001",
  "parentRepoId": null,
  "slug": "clafouti",
  "author": "ForkRecipe Kitchen",
  "title": "Cerise Clafoutis",
  "description": "Une pâte molle et oeuvrée a versé sur des cerises noires entières et cuite jusqu'à ce qu'elle souffle comme un soufflé et s'installe à quelque chose entre une crêpe épaisse et un pudding doux. Les cerises pleurent leur jus dans la crème ci-dessous, la tachent d'un bourgogne profond tandis que le dessus devient doré et la cuisine se remplit de l'odeur de fruits chauds et de vanille.",
  "cuisine": "Français",
  "culture": "Limousin",
  "category": "desserts",
  "tags": [
    "clafouti",
    "français",
    "Cerise",
    "pâte",
    "limousine",
    "rustique"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "55 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 2,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Oeufs entiers",
      "ratioValue": 3,
      "defaultUnit": "large",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 1,
      "defaultUnit": "cup",
      "substitutions": [
        "moitié et moitié pour une texture plus riche"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 0.5,
      "defaultUnit": "cup",
      "substitutions": [
        "sucre vanille"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 0.5,
      "defaultUnit": "cup",
      "substitutions": [
        "farine d'amande sans gluten (ajouter 1 c. à soupe de fécule de maïs)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Extrait de vanille pure",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "Haricot à la vanille gratté",
        "liqueur kirsch"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé fondu",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Protein",
      "name": "Cerises noires fraîches, non ramifiées",
      "ratioValue": 2.5,
      "defaultUnit": "cups",
      "substitutions": [
        "Cerises acides piquées",
        "Cerises congelées (dégelées et drainées)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Sucre en poudre, pour la fabrication de la poussière",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
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
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "clafouti_batter",
      "instructions": "Dans un grand bol, fouetter les œufs et le sucre jusqu'à ce qu'ils soient pâles et légèrement épais. Faire tremper la farine et fouetter jusqu'à ce qu'elle soit lisse sans grumeaux. Ajouter le lait, la vanille, le sel et le beurre fondu et fouetter jusqu'à ce que la pâte soit complètement uniforme. Pour un résultat extra-silky, filtrez à travers un tamis fin et laissez reposer la pâte pendant 15 minutes.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, fluide et dorée avec de minuscules bulles à la surface et sans stries de farine visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lumps de farine visibles, œuf non entièrement incorporé, pâte semble séparée.",
            "action": "fouetter plus vigoureusement; ajouter le lait dans un cours d'eau lent en fouettant si les grumeaux persistent. Dentelle si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Ambre pâle uniforme, verse comme une crème lourde, enrobe le fouet dans une fine couche. Pas de bosses.",
            "action": "Beurrer le plat de cuisson et préparer des cerises."
          },
          {
            "state": "Overdone",
            "description": "Les battements sont mousseux et sur-aérés à cause d'un fouet excessif.",
            "action": "Laisser reposer 15 minutes pour laisser les bulles se déposer avant de cuire."
          }
        ]
      },
      "feelCue": "Inclinez le bol — la pâte doit couler dans une feuille lente, uniforme, assez mince pour voir à travers les bords."
    },
    {
      "nodeId": "step_2",
      "action": "Assemblage",
      "inputs": [
        "clafouti_batter",
        "ing_06",
        "ing_08"
      ],
      "outputState": "unbaked_clafouti",
      "instructions": "Préchauffer le four à 180 C (350 F). Beurrer généreusement un plat de cuisson en céramique de 10 pouces. Verser une fine couche de pâte (environ 1/3 du total) dans le plat et cuire au four pendant 5 minutes jusqu'à ce qu'il soit simplement réglé. Retirer du four, placer les cerises en une seule couche sur la surface, puis verser le reste de la pâte sur le dessus.",
      "visualCue": {
        "primaryTarget": "Cerises disposées en une seule couche, juste recouvertes de la pâte, pour que leur dessus passe à travers la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La couche de base initiale est encore liquide — les cerises s'enfonceront toutes au fond et s'effondreront.",
            "action": "Retourner la couche de base au four 3 minutes avant d'ajouter des cerises."
          },
          {
            "state": "Perfect",
            "description": "La couche de base est à peine réglée et mate. Les cerises sont fières et uniformément espacées. La batterie versée sur le dessus les recouvre d'une surface brillante.",
            "action": "Retournez immédiatement au four pour la cuisson principale."
          },
          {
            "state": "Overdone",
            "description": "La couche de base a déjà gonflé et doré — trop cuit avant l'ajout des cerises.",
            "action": "Ajouter les cerises et la pâte de toute façon; le clafoutis fini peut avoir une couche inférieure plus dense mais sera encore bon."
          }
        ]
      },
      "feelCue": "La couche de base doit être ferme à une touche légère, comme une gelée, et non une omelette caoutchouteuse."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "unbaked_clafouti"
      ],
      "outputState": "baked_clafouti",
      "instructions": "Cuire à 180 °C (350 °F) pendant 35 à 40 minutes, jusqu'à ce que le clafoutis ait soufflé de façon spectaculaire autour des bords, mis au centre avec seulement le plus faible wobble, et doré sur le dessus. Il se dégonflera légèrement sur le refroidissement — c'est normal et correct.",
      "visualCue": {
        "primaryTarget": "Des bords très dorés qui se sont levés au-dessus du bord, un centre fixe avec un léger dôme, cerises visibles sous la surface. La cuisine sent la vanille chaude et les fruits confitureux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre se fige de façon significative lorsque le plat est secoué. La surface est pâle et mate. Une brochette insérée au centre sort humide.",
            "action": "Retourner au four 5 à 8 minutes de plus; vérifier toutes les 3 minutes à partir de ce point."
          },
          {
            "state": "Perfect",
            "description": "Un doux tremblement ne montre qu'un tremblement à peine perceptible au centre même. La surface est dorée-brun avec des taches plus foncées sur les cerises. La brochette est propre.",
            "action": "Retirer du four et la poussière avec du sucre en poudre. Servir chaud ou à température ambiante."
          },
          {
            "state": "Overdone",
            "description": "La surface est brun foncé, les bords sont secs et s'éloignent fortement du plat. Il a complètement perdu sa chatte.",
            "action": "Servir immédiatement avec la crème fraîche froide pour contraster avec la sécheresse; ne pas réchauffer."
          }
        ]
      },
      "feelCue": "Appuyez très légèrement sur le centre avec un doigt — il devrait se sentir réglé mais donner légèrement, comme une gelée ferme. Le printemps est surdosé; le liquide est sous-dosé."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir",
      "inputs": [
        "baked_clafouti",
        "ing_09"
      ],
      "outputState": "finished_clafouti",
      "instructions": "Laisser refroidir le clafoutis dans le plat pendant au moins 10 minutes pour qu'il s'installe et que la crème ferme légèrement. Poussez généreusement avec du sucre en poudre dans un tamis fin juste avant de servir. Servir directement du plat, au chaud ou à température ambiante. Dans la tradition limousine, les cerises sont laissées pendant la cuisson pour libérer une légère amertume aux amandes.",
      "visualCue": {
        "primaryTarget": "Un disque doré en poudre de neige aux formes cerises foncées visibles sous la surface et une légère déflation de son pic cuit.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sucre a été appliqué trop chaud et s'est dissous dans la surface, laissant un frottis humide et brillant.",
            "action": "Attendez encore 5 minutes et repoudre."
          },
          {
            "state": "Perfect",
            "description": "Le sucre blanc fin est assis à la surface comme un gel propre, non dissous, non empilé. Contraste magnifiquement avec la pâte dorée.",
            "action": "Servir à table."
          },
          {
            "state": "Overdone",
            "description": "Clafoutis a été laissé trop longtemps et est complètement froid et ferme — a perdu sa qualité de crème.",
            "action": "Chauffer brièvement dans un four bas (150 C) pendant 10 minutes pour restaurer un peu de douceur."
          }
        ]
      },
      "feelCue": "Lorsque vous le portez à la table, le plat doit encore être chaud — et non chaud. C'est alors que la texture est à son meilleur."
    }
  ]
};
