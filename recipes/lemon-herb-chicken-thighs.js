export default {
  "repoId": "master_american_lemon_herb_chicken_thighs_001",
  "parentRepoId": null,
  "slug": "lemon-herb-chicken-thighs",
  "author": "ForkRecipe Kitchen",
  "title": "Poulet rôti citron-herbe Cuisses",
  "description": "Des cuisses de poulet désossées, sur la peau, rôties à feu vif jusqu'à ce que la peau se brise comme du verre laqué et que la graisse en dessous se transforme complètement en viande. Le zeste de citron et la pâte d'herbe frotté sous la peau fleurit et parfume la graisse comme elle rend, de sorte que chaque bouchée goût de thym et d'agrumes de l'intérieur dehors.",
  "cuisine": "Américain",
  "culture": "Américain moderne",
  "category": "proteins",
  "tags": [
    "poulet",
    "cuisses",
    "grillés",
    "citron",
    "herbe",
    "facile"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 3,
    "bitter": 1,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Cuisses de poulet désossées, avec peau",
      "ratioValue": 4,
      "defaultUnit": "pieces",
      "substitutions": [
        "pilons de poulet en os",
        "quartiers de cuisses de poulet sur la peau"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "beurre fondu"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Citrus",
      "name": "Zeste de citron (à partir de 1 citron) + jus (la moitié du citron)",
      "ratioValue": 1,
      "defaultUnit": "lemon",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Feuilles de thym fraîches",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "romarin frais, haché",
        "Origan frais"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Romarin frais, haché",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "romarin séché"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Giroves d'ail hachées à la pâte",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 1.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "sel de mer fin"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Poivre noir fraichement craqué",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Coins de citron (pour servir)",
      "ratioValue": 2,
      "defaultUnit": "wedges",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Assaisonner",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "seasoned_thighs",
      "instructions": "Mélanger l'huile d'olive, le zeste de citron, le thym, le romarin, la pâte d'ail, le sel et le poivre dans une pâte. Les cuisses de poulet sont complètement sèches avec des serviettes en papier — c'est l'étape la plus importante pour la peau croustillante. Desserrer doucement la peau de chaque cuisse et pousser une partie de la pâte d'herbe directement sous la peau, la répandre sur la viande. Frotter le reste de la pâte sur le dessus et le dessous de chaque cuisse. Placer sur un support de fil sur une plaque de cuisson bordée. Laisser reposer à température ambiante pendant 30 minutes (ou réfrigérer la nuit à découvert pour une peau encore plus croquante).",
      "visualCue": {
        "primaryTarget": "cuisses de poulet enrobées d'une pâte d'herbe jaune vert pâle avec zeste de citron visible. La peau est complètement sèche, pas de perles d'humidité à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est encore humide ou mouillée par rinçage. Pâte d'herbe appliquée uniquement à l'extérieur, pas sous la peau.",
            "action": "Pat sécher à nouveau agressivement avec des serviettes en papier frais. Réappliquer la pâte sous la peau — l'application sous la peau est ce qui empêche les herbes de brûler."
          },
          {
            "state": "Perfect",
            "description": "Peau complètement sèche avec un revêtement en pâte d'herbe uniforme. La peau semble mate, pas brillante ou humide. Les zestes de citrons sont visibles dans la pâte.",
            "action": "Laisser reposer à température ambiante 30 minutes, puis rôtir."
          },
          {
            "state": "Overdone",
            "description": "S/O — l'étape de préparation ne peut pas être trop appliquée. Plus de pâte d'herbe n'est pas un problème.",
            "action": "Passez à la cuisson."
          }
        ]
      },
      "feelCue": "Exécutez votre doigt sur la peau — il doit se sentir complètement sec et légèrement collant à partir de l'huile d'olive, comme la surface de toile non préprimée. Toute glissière signifie que l'humidité reste."
    },
    {
      "nodeId": "step_2",
      "action": "Rôtir",
      "inputs": [
        "seasoned_thighs"
      ],
      "outputState": "roasted_thighs",
      "instructions": "Préchauffer le four à 425 F (220 C). Placez la grille de fils avec les cuisses sur la grille du milieu — ne foulez pas. Faire cuire 35 à 40 minutes sans ouvrir le four ni retourner. La peau se rend lentement et croquante pendant que les cuisses font cuire. Dans les 5 dernières minutes, pressez le jus de citron directement sur les cuisses et augmentez à griller pendant 2-3 minutes pour finir la peau. Température interne cible : 165 F à la partie la plus épaisse, loin de l'os.",
      "visualCue": {
        "primaryTarget": "Peau fortement dorée, blister avec des taches foncées croustillantes aux points élevés. La peau est visiblement rétrécie et retirée des bords. La pâte d'herbe sous la peau a été cuite dans la viande.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est d'or pâle et a encore une texture caoutchouteuse. La graisse fondue est mise en commun sur la plaque de cuisson mais n'a pas ré-cristé sur la peau. Température intérieure inférieure à 155 F.",
            "action": "Retourner au four 5-10 minutes de plus. Si la peau est pâle malgré une température interne correcte, passer au grille-pain pendant 3 minutes."
          },
          {
            "state": "Perfect",
            "description": "Peau d'or-mahogany qui craque quand pressé. La surface de la peau est cloquée et rigide. Température interne 165-170 F. Les jus sont dégagés. L'odeur de l'herbe et du citron est intense.",
            "action": "Reposez-vous 5 minutes sur la grille avant de servir."
          },
          {
            "state": "Overdone",
            "description": "La peau est très brun foncé à noir. Une odeur amère et acride au lieu d'herbes parfumées. Les bouts fins de la peau ont brûlé.",
            "action": "Retirer immédiatement du four. Coupez les bords les plus sombres avec des ciseaux. La viande elle-même est probablement encore excellente."
          }
        ]
      },
      "feelCue": "Appuyez sur la partie la plus épaisse d'une cuisse avec votre bout de doigt — il devrait se sentir ferme et rebondi, comme une balle de tennis, pas doux et gélatineux. Les cuisses de poulet sont indulgentes, mais cette fermeté indique que le collagène s'est fixé."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser reposer",
      "inputs": [
        "roasted_thighs"
      ],
      "outputState": "rested_thighs",
      "instructions": "Transférer les cuisses de la grille directement dans une assiette de service — ne jamais revenir dans une poêle où la vapeur pouvait ré-souvent la peau. Reposez-vous 5 minutes à découvert. Ce court repos permet aux jus de se redistribuer à partir de l'os vers l'extérieur et de la peau pour raffermir de la chaleur résiduelle. Servir avec des quartiers de citron sur le côté.",
      "visualCue": {
        "primaryTarget": "Cuisses de couleur profonde avec peau qui a maintenu sa texture rigide et craquelée après le repos. Pas de mise en commun de jus sous — les jus ont redistribué.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Reposé moins de 2 minutes. Lorsqu'il est coupé, le jus rose pâle provient de la zone osseuse.",
            "action": "Attendez 5 minutes. Le report amènera la zone osseuse à la température."
          },
          {
            "state": "Perfect",
            "description": "Au bout de 5 minutes, la peau est toujours crépitante et rigide. Lorsqu'ils sont tranchés près de l'os, les jus sont dégagés. La viande tire facilement de l'os.",
            "action": "Servir immédiatement avec des quartiers de citron."
          },
          {
            "state": "Overdone",
            "description": "Reposé trop longtemps sous le papier d'aluminium, la vapeur piégée a ramolli la peau croustillante en caoutchouc.",
            "action": "Ne tentez jamais les cuisses de poulet grillées avec du papier. Si la peau s'est adoucie, retourner au four 450 F pendant 3 minutes."
          }
        ]
      },
      "feelCue": "Tapotez la peau d'un noeud — il devrait faire un son creux et fragile, comme tapoter un mince craquelin. Tout bruit doux signifie que la peau a perdu sa croustillante à la vapeur."
    }
  ]
};
