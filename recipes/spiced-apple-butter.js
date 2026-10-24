export default {
  "repoId": "master_american_spicedapplebutter_001",
  "parentRepoId": null,
  "slug": "spiced-apple-butter",
  "author": "ForkRecipe Kitchen",
  "title": "Beurre de pomme épicé",
  "description": "Les pommes de Granny Smith ont cuit lentement pendant des heures avec de la cassonade, de la cannelle, de la girofle et de la muscade dans le cidre de pomme jusqu'à ce qu'elles s'effondrent et caramélisent en un concentré brun acajou profond, velouté, intensément épicé et presque odorant.",
  "cuisine": "Américain",
  "culture": "Appalaches",
  "category": "condiments",
  "tags": [
    "beurre de pomme",
    "américains",
    "épicé",
    "Étendue",
    "condiment",
    "automne",
    "Mise en conserve"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "4 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 5,
    "salty": 1,
    "sour": 2,
    "bitter": 1,
    "umami": 0,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Pommes de Granny Smith, pelées, cardées et hachées à peu près",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Braeburn",
        "Dame rose",
        "Délicieux doré",
        "variétés mixtes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Cidre de pomme frais (non filtré, pas jus de pomme)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "eau + une cuillère à soupe de vinaigre de cidre de pomme"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre brun foncé",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun léger",
        "Sucre de coco"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "bâton de cannelle (supprimer avant mélange)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Gousses de terre",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Noix de muscade hachée, fraîchement râpée",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Vers le sol",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "softened_apples",
      "instructions": "Placer les pommes et le cidre de pomme hachés à peu près dans un grand pot à fond lourd (un four hollandais ou un brassoir en fonte émaillé est idéal — la grande surface accélère l'évaporation). Faire mijoter à feu moyen, en remuant occasionnellement, jusqu'à ce que les pommes soient complètement molles et commencent à s'effondrer — environ 25 à 30 minutes. Vous n'êtes pas à la recherche de textures ici ; les pommes doivent devenir complètement céder, car elles seront mélangées à une purée lisse. Le cidre fournit à la fois du liquide pour la cuisson initiale et une saveur de pomme concentrée que l'eau pure ne peut pas reproduire. Au fur et à mesure que les pommes ramollissent, elles libèrent leur propre jus et le mélange devient plus liquide avant qu'il commence à diminuer.",
      "visualCue": {
        "primaryTarget": "Complètement effondré, les morceaux de pomme mous dans un liquide pâle, mousseux, parfumé de pomme — les morceaux individuels donnent instantanément lorsqu'ils sont pressés avec une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les morceaux de pomme tiennent toujours leur forme, résistent à la cuillère et ont un centre crayeux ou amidon.",
            "action": "Continuer à mijoter avec le couvercle pour créer de la vapeur et adoucir les morceaux plus rapidement."
          },
          {
            "state": "Perfect",
            "description": "Les morceaux de pomme s'effondrent complètement lorsqu'ils sont pressés à l'arrière d'une cuillère. La cuisine sent la pomme chaude et cuite. Le liquide est mousseux et pâle.",
            "action": "Ajouter le sucre et les épices et commencer la longue réduction."
          },
          {
            "state": "Overdone",
            "description": "Les morceaux de pomme tombent, mais le liquide a déjà été réduit trop loin et commence à coller au fond du pot.",
            "action": "Ajouter 50 ml de cidre ou d'eau supplémentaire et réduire immédiatement la chaleur."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau de pomme contre le côté pot avec une cuillère en bois — il devrait frotter complètement avec une résistance nulle, comme presser le beurre ramolli. Tout ressort signifie plus de temps de cuisson."
    },
    {
      "nodeId": "step_2",
      "action": "Mixer",
      "inputs": [
        "softened_apples",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "spiced_applesauce",
      "instructions": "Ajouter la cassonade, la cannelle, les girofles, la muscade, l'Allspice, le vinaigre de cidre de pomme et le sel aux pommes ramollies. Mélanger. À l'aide d'un mélangeur d'immersion directement dans la casserole, mélanger jusqu'à ce qu'il soit complètement lisse, sans peau de pomme ou sans morceaux. Alternativement, laisser refroidir légèrement et mélanger en lots dans un mélangeur de comptoir (remplir seulement à mi - liquide chaud peut éclater). Si vous préférez un beurre très doux et brillant, passez le mélange mélangé dans un tamis à mailles fines, appuyez fermement. Goûtez à la base de pommes sucrées à ce stade: il goûtera plat et trop sucré parce que le sucre n'a pas encore caramélisé et concentré — c'est attendu et correct. La transformation se produit pendant la longue, lente réduction qui suit.",
      "visualCue": {
        "primaryTarget": "Une sauce lisse, uniforme, de couleur caramel pâle — pas de grumeaux, pas de morceaux de peau, sentant la cannelle et la pomme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a encore des fragments visibles de peau de pomme ou des morceaux — le mélange était insuffisant.",
            "action": "Mélanger plus longtemps et, si nécessaire, passer à travers un tamis pour une douceur absolue."
          },
          {
            "state": "Perfect",
            "description": "Entièrement lisse, fluide, bronzage pâle à couleur caramel. Parfum d'épices uniforme partout. Des chutes de la cuillère dans un flux lisse et uniforme.",
            "action": "Commencez la réduction lente à feu doux avec le couvercle éteint."
          },
          {
            "state": "Overdone",
            "description": "Surmené et très mousseux ou aéré du mélangeur — surface recouverte de mousse.",
            "action": "Laisser reposer pendant 10 minutes avant de commencer la réduction."
          }
        ]
      },
      "feelCue": "Frottez une goutte entre vos doigts – complètement lisse, sans grain, le parfum d'épice devrait s'accrocher fortement à votre peau. Si vous sentez n'importe quelle texture, mélangez plus longtemps."
    },
    {
      "nodeId": "step_3",
      "action": "Faire réduire",
      "inputs": [
        "spiced_applesauce"
      ],
      "outputState": "finished_spiced_apple_butter",
      "instructions": "Avec la casserole à découvert, réduire la pulpe sur la chaleur la plus basse possible pendant 2 à 3 heures, en remuant toutes les 10 à 15 minutes — particulièrement important dans la dernière heure lorsque la concentration est élevée et que la brûlure peut survenir. Au fur et à mesure que le beurre diminue, il passe par plusieurs étapes distinctes : caramel pâle (1 heure), ambre doré (1,5 heure), acajou-brun profond (2 heures), et enfin la consistance épaisse, brillante, tartinable du beurre de pomme (2,5-3 heures). Vous saurez que c'est fait quand: une cuillère lâchée sur une plaque froide tient sa forme de monticule et ne coule pas; la surface a un éclat brillant, laqué; et la couleur est une acajou-brun profonde. Le volume aura diminué d'environ la moitié. Transférer dans des pots propres immédiatement pendant qu'ils sont encore chauds.",
      "visualCue": {
        "primaryTarget": "Deep acajou brun, brillant, assez épais pour tenir une crête lorsqu'une cuillère est traînée à la surface, sentant intensément la pomme caramélisée et les épices chaudes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre de pomme est encore jaune-ambre pâle ou caramel, coule librement de la cuillère et goûte de la compote douce plutôt que de la pomme caramélisée concentrée.",
            "action": "Continuez à réduire. Le vrai beurre de pomme prend patience. Mélanger plus fréquemment pour éviter les brûlures."
          },
          {
            "state": "Perfect",
            "description": "Deep acajou, surface brillante, tient sa forme sur une plaque froide, ne fonctionne pas. La fragrance est intensément de cannelle, de girofle et de pomme caramélisée. Goûte complexe, profondément sucré avec un fini acide vif du vinaigre.",
            "action": "Transférer dans les pots immédiatement. Sceller et réfrigérer jusqu'à 1 mois, ou le traiter dans un bain d'eau bouillante pour l'entreposage."
          },
          {
            "state": "Overdone",
            "description": "Le beurre de pomme a brûlé sur le fond du pot — odeur amère de caramel foncé, taches très foncées visibles en remuant.",
            "action": "Transférer immédiatement dans un pot propre sans racler la couche brûlée. Bouche : si l'amertume n'est pas dominante, procéder."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère à travers le beurre de pomme à la marque de 2,5 heures — le canal qu'il laisse devrait tenir parfaitement pendant 10 secondes avant de commencer lentement à fermer. Si elle se ferme immédiatement, continuer à réduire."
    }
  ]
};
