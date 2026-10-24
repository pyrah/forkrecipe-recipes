export default {
  "repoId": "master_french_frenchratatouille_001",
  "parentRepoId": null,
  "slug": "french-ratatouille",
  "author": "ForkRecipe Kitchen",
  "title": "Ratatouille provençale",
  "description": "L'été, l'aubergine, la courgette, la tomate et le poivre sont abondants; l'huile d'olive et le thym sont grillés lentement jusqu'à ce que chaque légume se concentre dans un confit brillant et soyeux qui n'a plus le goût des parties individuelles.",
  "cuisine": "Français",
  "culture": "Provençal",
  "category": "vegetables",
  "tags": [
    "légumes",
    "végétalien",
    "Sans gluten",
    "français",
    "d ' origine",
    "été"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "2 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Aubergine, coupée en cubes de 2 cm",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Zucchini, coupé en demi-lunes de 2 cm",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "courge jaune"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "poivron rouge, coupé en morceaux de 2cm",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "poivre jaune"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Tomates de prunes, hachées approximativement",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "tomates en conserve de bonne qualité"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon jaune en dés",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": [
        "1 c. à thé de thym séché"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Basilic frais, déchiré",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel et poivre noir",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Assaisonner",
      "inputs": [
        "ing_01",
        "ing_10"
      ],
      "outputState": "salted_eggplant",
      "instructions": "Jeter les cubes d'aubergine avec 1 cuillère à café de sel dans une colander. Placer sur un bol et laisser reposer 30 minutes. Le sel tirera l'excès d'humidité de l'aubergine — vous verrez de petites perles de forme liquide sur la surface. Après 30 minutes, tapotez soigneusement avec des serviettes en papier. Torréfits d'aubergines secs; vapeurs d'aubergines humides. Cette étape est la différence entre les aubergines soyeuses, caramélisées et les cubes pallidés spongieux.",
      "visualCue": {
        "primaryTarget": "Perles d'humidité à la surface des cubes d'aubergine. Les cubes peuvent avoir légèrement ramolli et pris un léger éclat.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après seulement 10 minutes, peu ou pas d'humidité est apparue.",
            "action": "Continuez à saler. Donnez-lui 30 minutes. L'aubergine libère l'humidité lentement."
          },
          {
            "state": "Perfect",
            "description": "Perles d'humidité visibles sur toute la surface. Lorsqu'elle est pressée avec une serviette en papier, la serviette est amortie. Les cubes se sentent légèrement plus souples.",
            "action": "Sécher abondamment et procéder à la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Après plus d'une heure, l'aubergine est devenue très molle et s'est effondrée.",
            "action": "Pat sèche et continue. L'aubergine sera plus tendre mais toujours bonne dans le plat final."
          }
        ]
      },
      "feelCue": "Ramassez un cube d'aubergine salé — il devrait se sentir légèrement plus dense qu'un cube cru, et la surface devrait se sentir palpitante plutôt que sèche. Après avoir patté, il devrait se sentir sec et ferme."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_03",
        "ing_07",
        "ing_08"
      ],
      "outputState": "aromatic_base",
      "instructions": "Dans un grand four ou un four hollandais, chauffer 40 ml d'huile d'olive à feu moyen. Ajouter l'oignon et cuire pendant 8 minutes jusqu'à ce qu'il soit doux et translucide. Ajouter l'ail et le thym et cuire 1 minute. Ajouter le poivron rouge et cuire encore 5 minutes jusqu'à ce qu'il commence à ramollir. Cette base aromatique va assaisonner toute la ratatouille de l'intérieur.",
      "visualCue": {
        "primaryTarget": "Les oignons sont doux et translucides. Les poivrons sont légèrement ramollis mais conservent leur forme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont encore opaques et croquants. L'ail sent cru.",
            "action": "Continuez à cuisiner. L'oignon cru donnera à la ratatouille une qualité dure."
          },
          {
            "state": "Perfect",
            "description": "Les oignons sont translucides et sucrés. L'ail est parfumé et doré aux bords. Les poivrons commencent à ramollir.",
            "action": "Ajouter les tomates et poursuivre."
          },
          {
            "state": "Overdone",
            "description": "Les oignons brunissent. L'ail est très sombre.",
            "action": "Réduire le feu et ajouter les tomates immédiatement pour arrêter le brunissement."
          }
        ]
      },
      "feelCue": "Écraser un morceau d'oignon cuit entre deux doigts — il devrait donner complètement sans croûte, comme de la cire ramollie."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "aromatic_base",
        "ing_04",
        "salted_eggplant",
        "ing_02",
        "ing_07",
        "ing_10"
      ],
      "outputState": "assembled_ratatouille",
      "instructions": "Ajouter les tomates hachées dans la casserole et cuire 5 minutes pour les décomposer. Ajouter les cubes d'aubergine et les courgettes séchées. Arroser les 40 ml restants d'huile d'olive, saler et poivrer. Mélanger doucement. Les légumes devraient être encombrés mais juste adaptés. Porter à mijoter, puis transférer à un four à 160°C (32°F) à découvert. Faire cuire pendant 60 à 75 minutes, en remuant doucement une ou deux fois, jusqu'à ce que tous les légumes soient très doux, que leurs bords commencent à caraméliser et que le liquide soit réduit à une sauce concentrée et huileuse.",
      "visualCue": {
        "primaryTarget": "Après 75 minutes, les légumes ont considérablement ramolli. Les tomates se décomposent en une sauce épaisse et riche enrobant les autres légumes. Les bords sont légèrement caramélisés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 45 minutes, les courgettes sont encore vert vif et l'aubergine résiste à une cuillère. Le liquide est encore aqueux.",
            "action": "Continuez à rôtir. Tous les légumes doivent atteindre une douceur complète."
          },
          {
            "state": "Perfect",
            "description": "Tous les légumes sont très doux et soyeux. Les tomates ont complètement cassé. Les bords de l'aubergine et des courgettes montrent une légère caramélisation. L'huile d'olive s'est séparée des légumes en flaques dorées.",
            "action": "Retirer du four, déchirer le basilic et ajuster l'assaisonnement."
          },
          {
            "state": "Overdone",
            "description": "Les légumes ont commencé à se désintégrer et le fond du pot commence à brûler.",
            "action": "Retirer immédiatement du four. Mélanger doucement du bas. La ratatouille peut être plus d'une purée, qui est encore excellente."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau d'aubergine avec l'arrière d'une cuillère — il devrait s'effondrer immédiatement sans résistance, comme presser dans l'argile humide."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer",
      "inputs": [
        "assembled_ratatouille",
        "ing_09"
      ],
      "outputState": "finished_ratatouille",
      "instructions": "Retirer du four et laisser reposer la ratatouille pendant 10 minutes – elle s'améliore significativement à mesure que les saveurs se mélangent. Ajouter le basilic frais et remuer doucement. Goût pour l'assaisonnement. Ratatouille est excellent chaud, à température ambiante, ou froid du réfrigérateur. Il améliore le lendemain comme les saveurs continuent à intégrer.",
      "visualCue": {
        "primaryTarget": "Un medley de bijoux de couleur rouge foncé, vert foncé et violet doux, unifié par une sauce tomate épaisse et grasse. Basilic vert vif tout le long.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont encore à l'aspect séparé et la sauce est fine.",
            "action": "Retourner au four pendant 15 minutes."
          },
          {
            "state": "Perfect",
            "description": "Un medley cohésif et soyeux où les légumes sont distincts mais unifiés par la sauce. Le basilic est vert vif et parfumé. L'huile d'olive est visible sous forme de piscines dorées.",
            "action": "Servir ou refroidir et réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "La ratatouille est réduite à une pâte sèche avec peu de sauce restante.",
            "action": "Ajouter une bruine d'huile d'olive et un jet d'eau. Mélangez doucement. La saveur est en fait excellente — concentrée et riche."
          }
        ]
      },
      "feelCue": "La ratatouille doit se sentir riche et enrobée sur la langue, l'huile d'olive portant la douceur végétale concentrée. Il ne doit pas se sentir aqueux ou mince."
    }
  ]
};
