export default {
  "repoId": "master_scottish_scottishkedgeree_001",
  "parentRepoId": null,
  "slug": "scottish-kedgeree",
  "author": "ForkRecipe Kitchen",
  "title": "Kedgeree écossaise",
  "description": "Un plat de l'époque coloniale né de l'aiglefin fumé indien kichdi et écossais — riz basmati parfumé de curry et de beurre, plié de flocons d'aiglefin doré et d'œufs légèrement durs, éparpillé de persil croustillant et d'une pression de citron.",
  "cuisine": "Écossais",
  "culture": "Anglo-Indien",
  "category": "eggs",
  "tags": [
    "œufs",
    "poisson fumé",
    "écossais",
    "riz",
    "curry",
    "l'aiglefin",
    "kedgeree"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "45 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filet d'aiglefin fumé non teint",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "morue fumée",
        "Saumon fumé à chaud (flocon après cuisson)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Lait entier (pour poissons braconniers)",
      "ratioValue": 400,
      "defaultUnit": "ml",
      "substitutions": [
        "moitié lait moitié eau"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Starch",
      "name": "Riz Basmati, rincé jusqu'à l'éclair",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "riz blanc à grains longs"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "pour plus de profondeur"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon jaune, en dés",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Échalotes"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poudre de curry légère (style Madras)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "1 csp chacune: curcuma, cumin, coriandre"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Protein",
      "name": "Oeufs grands",
      "ratioValue": 4,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Persil à feuilles plates, approximativement haché",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "coriandre pour une note plus indienne"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Citrus",
      "name": "Citron",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "Chaux"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Dairy",
      "name": "Crème lourde (facultatif, pour la richesse)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pochette",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "poached_haddock",
      "instructions": "Placez le côté peau d'aiglefin dans une grande casserole. Verser le lait — il devrait couvrir le poisson. Porter à la plus petite mijoter à feu moyen-doux. Dès que le lait commence à trembler et que de petites bulles apparaissent autour des bords (pas un ébullition complet), éteignez la chaleur, couvrez la poêle et laissez le poisson pocher dans la chaleur résiduelle pendant 8-10 minutes. Soulevez le poisson et réservez le lait de braconnage. Lorsqu'elle est assez fraîche pour être manipulée, éplucher et jeter la peau, puis la flanquer dans de gros morceaux, en vérifiant les os des épingles.",
      "visualCue": {
        "primaryTarget": "Larges flocons blancs à or pâle, humides et opaques, sans translucidité restante, peau enlevée proprement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La chair est encore translucide dans les parties plus épaisses et résiste à l'éclaboussure — elle tire en cordes plutôt que de se séparer en morceaux propres.",
            "action": "Retournez dans la casserole couverte pendant 3 minutes. La chaleur résiduelle du lait sera suffisante."
          },
          {
            "state": "Perfect",
            "description": "Le poisson s'éclabousse dans de grandes pièces d'or humides au toucher d'une fourchette. Pas de translucidité brute. Le lait est opaque et blanc avec des huiles de poisson fondues.",
            "action": "Retirer le poisson et réserver le lait de braconnage pour le riz."
          },
          {
            "state": "Overdone",
            "description": "Le poisson s'est cassé en petits morceaux et la chair est sèche et à cordes. Le lait est bouillant et caillé.",
            "action": "La saveur est intacte — procéder avec des flocons plus petits. Le plat sera plus homogène mais toujours délicieux."
          }
        ]
      },
      "feelCue": "La partie la plus épaisse de l'aiglefin ne devrait offrir aucune résistance lorsqu'elle est pressée d'un doigt, ce qui donne complètement, comme le tofu fermement fixé."
    },
    {
      "nodeId": "step_2",
      "action": "Bouillir",
      "inputs": [
        "ing_08"
      ],
      "outputState": "soft_boiled_eggs",
      "instructions": "Portez un pot d'eau à ébullition complète. Abaissez les oeufs en douceur et faites cuire exactement 8 minutes pour les jaunes qui sont fixés mais ont toujours un centre légèrement crémeux — un vrai doux-set plutôt que crayeux dur-huile. Transférer immédiatement dans un bol d'eau glacée pendant 2 minutes pour arrêter la cuisson et les rendre plus faciles à peler. Peler et couper en quartiers sur la longueur.",
      "visualCue": {
        "primaryTarget": "Oeufs pelés avec des blancs et des jaunes entièrement opaques, de couleur jaune pâle et de couleur gris crayeux aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Yolk est runny et liquide au centre, rendant le quartier en désordre — le jaune s'épuise.",
            "action": "Ajoutez encore 1 à 2 minutes. Un jaune entièrement mou est la cible du kedgeree."
          },
          {
            "state": "Perfect",
            "description": "Yolk est sertie et jaune tout au long avec un soupçon de centre légèrement plus crémeux. Le blanc est ferme et pele proprement.",
            "action": "Quarter et réserver jusqu'à l'assemblée."
          },
          {
            "state": "Overdone",
            "description": "Un anneau gris-vert se forme autour du jaune — la réaction de soufre due à la surcuisson. Yolk est crayeuse et sèche.",
            "action": "Toujours utilisable. La prochaine fois, réduisez le temps de 1 minute et utilisez immédiatement un bain de glace."
          }
        ]
      },
      "feelCue": "Un œuf parfaitement cuit à 8 minutes se sent complètement ferme lorsqu'il est pressé doucement dans la coquille — pas de tache molle à l'extrémité jaune — mais donne un jaune juste et légèrement à rendement lorsqu'il est coupé."
    },
    {
      "nodeId": "step_3",
      "action": "Saucisse",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "curried_rice_base",
      "instructions": "Dans une grande casserole, faire fondre le beurre à feu moyen. Ajouter l'oignon en dés avec une pincée de sel et cuire en remuant pendant 8 à 10 minutes jusqu'à ce qu'il soit doux, translucide et commence à devenir or pâle aux bords. Ajouter la poudre de curry et remuer pendant 60 à 90 secondes jusqu'à ce que les épices fleurissent et deviennent parfumées et sombres. Ajouter le riz rincé et mélanger pour enrober chaque grain dans le beurre épicé — environ 1 minute. Mesurer 450 ml du lait de braconnage d'aiglefin réservé (s'il y a lieu de le verser avec de l'eau) et le verser sur le riz. Assaisonner légèrement avec du sel, se souvenir que le poisson et le lait sont déjà salés. Porter à ébullition, laisser mijoter au minimum, couvrir soigneusement et cuire 12 minutes. Retirer du feu et de la vapeur, couvrir pendant 5 minutes.",
      "visualCue": {
        "primaryTarget": "Les grains de riz sont séparés, dorés-jaunes du curcuma dans la poudre de curry, sans eau de pooling ou collant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz a un centre dur et crayeux quand il est mordu. Les grains sont légèrement opaques et mettent un peu de liquide au fond de la poêle.",
            "action": "Ajouter 30 ml de plus de liquide, recouvrir et cuire encore 5 minutes sur la chaleur la plus basse possible."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain est séparé et entièrement cuit avec un léger al dente donner. Le riz sent le beurre, le curry et le lait de poisson fumé. Aucun liquide ne reste.",
            "action": "Pliez dans le poisson, les œufs, la crème et le persil."
          },
          {
            "state": "Overdone",
            "description": "Le riz est entaillé, musqué, et les grains se sont brisés. La poêle sent l'amidon brûlé sur le fond.",
            "action": "Plier doucement dans les autres ingrédients afin de réduire au minimum la dégradation. Fond brûlé: cuillère du haut seulement."
          }
        ]
      },
      "feelCue": "Les basmati cuits correctement doivent avoir le ressort le plus faible lorsqu'ils sont pressés entre le pouce et l'index — doux tout au long de la pâte, mais pas écraser."
    },
    {
      "nodeId": "step_4",
      "action": "Plier",
      "inputs": [
        "curried_rice_base",
        "poached_haddock",
        "soft_boiled_eggs",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "finished_kedgeree",
      "instructions": "Si vous utilisez de la crème, versez-la sur le riz et pliez doucement avec une large spatule. Ajoutez l'aiglefin feuilleté en gros morceaux et pliez deux ou trois fois — vous voulez des morceaux, pas de la pâte. Ajouter la moitié du persil. Repliez-vous. Goûtez et ajustez le sel et le jus de citron. Disposer les quartiers d'oeufs sur le dessus, disperser le persil restant, et amener la casserole à la table avec les moitiés de citron à côté. Kedgeree est traditionnellement servi au petit déjeuner ou au brunch, chaud mais pas hurlant chaud.",
      "visualCue": {
        "primaryTarget": "Le riz doré est recouvert de gros morceaux d'aiglefin blanc et ambré, de persil vert vif dispersé dans l'ensemble et de quartiers d'oeufs pâles disposés sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz a l'air pâle et le poisson a disparu en fines lambeaux de surpliage. Le plat est gris et homogène.",
            "action": "Arrêtez de plier immédiatement. Ajouter plus de persil pour la couleur et arranger les quartiers d'oeufs bien en vue pour le contraste visuel."
          },
          {
            "state": "Perfect",
            "description": "Des textures distinctes visibles : grains de riz séparés, flocons de poissons reconnaissables, herbes vertes, quartiers jaunes dorés. La couleur est chaude ambre-or. L'odeur est riche, fumée et épicée.",
            "action": "Servir immédiatement ou maintenir couvert à feu très doux pendant 10 minutes."
          },
          {
            "state": "Overdone",
            "description": "Le riz est en train de s'écraser. Le poisson a été déchiqueté pour coller et les œufs ont cassé.",
            "action": "Appuyez dans un plat de service et garnissez généreusement pour restaurer l'attrait visuel."
          }
        ]
      },
      "feelCue": "Chaque portion doit avoir des textures contrastées en une seule cuillère: la légère résistance des grains de riz, le rendement tendre des flocons d'aiglefin et le faible apport de jaune d'œuf."
    }
  ]
};
