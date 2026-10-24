export default {
  "repoId": "master_levantine_kofta_001",
  "parentRepoId": null,
  "slug": "kofta",
  "author": "ForkRecipe Kitchen",
  "title": "Kofta",
  "description": "Bouteilles d'agneau et d'oignon formés à la main filetées sur des brochettes plates, lourdes avec du persil tout-puce et brut — grillées sur du charbon de bois jusqu'à ce que l'extérieur soit sombre et crépitant, tandis que l'intérieur reste rosé et incroyablement juteux.",
  "cuisine": "Levantine",
  "culture": "Pan-Levantine",
  "category": "proteins",
  "tags": [
    "kofta",
    "agneau",
    "grillage",
    "lévantine",
    "meze",
    "Kebab",
    "épicé"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "45 min",
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
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "agneau moulu (20 à 25 % de matières grasses)",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "80/20 boeuf haché",
        "50/50 mélange agneau-bœuf"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon brun, râpé sur de grands trous",
      "ratioValue": 1,
      "defaultUnit": "medium",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Persil à feuilles plates, très finement haché",
      "ratioValue": 0.5,
      "defaultUnit": "cup",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Baharat (mélange de sept épices)",
      "ratioValue": 2,
      "defaultUnit": "tsp",
      "substitutions": [
        "Allspice + cannelle + poivre noir"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Alep flocons de poivre ou piments rouges",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "kofta_mixture",
      "instructions": "Râper l'oignon sur le grand côté de la boîte grater directement dans un bol, puis presser le plus de liquide possible — l'oignon mouillé fera tomber le kofta de la brochette. Combiner avec l'agneau, le persil, le bahrat, le cumin, le sel et le poivre d'Alep. Mélangez avec vos mains pendant 3 minutes, en travaillant et en pliant le mélange comme si vous pétriez du pain. Le mélange doit devenir collant et cohésif, presque élastique, comme les protéines de myosine se lient. Réfrigérer 30 minutes à ferme.",
      "visualCue": {
        "primaryTarget": "Un mélange foncé et tacheté avec des taches de persil vert visible qui tient une forme propre lorsqu'il est pressé dans le poing et ne ressort pas ou ne tombe pas à l'écart.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange s'effondre lorsqu'il est pressé. Doucement, pas de liaison. L'oignon trop mouillé.",
            "action": "Retirez plus d'oignon liquide et continuez à mélanger pendant 2 minutes de plus — le réseau protéique a besoin de temps pour se former."
          },
          {
            "state": "Perfect",
            "description": "Le mélange est collant, cohésif et s'accroche. Une balle formée dans la paume tient sa forme et ne craque pas.",
            "action": "Réfrigérer 30 minutes avant de façonner — le mélange froid se forme beaucoup plus facilement."
          },
          {
            "state": "Overdone",
            "description": "Trop mélangé au point d'être collant et collant. La texture sera dense et caoutchouteuse lorsqu'elle sera cuite.",
            "action": "Former et cuire immédiatement — ne pas mélanger davantage."
          }
        ]
      },
      "feelCue": "Un mélange de kofta bien travaillé doit se sentir ferme et légèrement collant: froid, dense et malléable. Il devrait laisser une impression nette lorsqu'il est pressé et ne pas s'effondrer aux bords."
    },
    {
      "nodeId": "step_2",
      "action": "Façonner",
      "inputs": [
        "kofta_mixture"
      ],
      "outputState": "shaped_kofta",
      "instructions": "Avec les mains mouillées, prendre environ 90g de mélange (environ la taille d'une balle de golf) et serrer fermement autour d'une brochette en métal plat, le mouler dans un cylindre d'environ 12 cm de long et 3 cm de large. Appuyez assez fort pour éliminer les poches d'air — pressez du centre vers l'extérieur. Appuyez fermement sur les extrémités fermées. Le kofta doit se sentir solide et dense, pas creux. Si vous utilisez des brochettes de bambou, trempez dans l'eau 30 minutes d'abord. Alternativement, façonner en galettes pour le frittage.",
      "visualCue": {
        "primaryTarget": "Des cylindres lisses et fermes accrochent fermement la brochette sans fissures, bulles d'air ou taches fines.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des fissures visibles le long de la longueur. Kofta se sent lâche autour de la brochette. C'est fini.",
            "action": "Appuyez plus fermement et remodeler, lisser avec les mains mouillées."
          },
          {
            "state": "Perfect",
            "description": "Cylindre uniforme, surface lisse, accroche fermement la brochette. Même épaisseur. Pas de fissures.",
            "action": "Reposez-vous sur un plateau au réfrigérateur jusqu'à ce que le grill soit prêt."
          },
          {
            "state": "Overdone",
            "description": "Surcompressé et très mince – se dessécher rapidement sur la grille.",
            "action": "Les rendre plus épais et plus courts pour la prochaine fois; 3 cm de diamètre est le minimum."
          }
        ]
      },
      "feelCue": "Pressez doucement le kofta en forme autour de la brochette – il doit se sentir solide tout au long, sans taches creuses ou molles au centre."
    },
    {
      "nodeId": "step_3",
      "action": "Griller",
      "inputs": [
        "shaped_kofta"
      ],
      "outputState": "finished_kofta",
      "instructions": "Griller sur une chaleur très élevée, directe au charbon ou au gaz. Ne touchez pas pendant les 3-4 premières minutes — laissez le kofta semer et relâchez-vous naturellement du grill. Tourner une fois, cuire encore 3-4 minutes. La durée totale de cuisson est de 7 à 9 minutes pour le milieu (toujours rose à l'intérieur), qui est la cible traditionnelle. Une température interne de 63 C est moyenne. Reposez-vous sur un rack pendant 3 minutes avant de servir avec du pita chaud, du tahini et du gras.",
      "visualCue": {
        "primaryTarget": "Extérieur acajou foncé avec bords carbonisés et marques de grill. Des gouttelettes de graisse étourdissantes tombent dans les charbons.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Extérieur pâle et doux. N'a pas libéré de la grille proprement.",
            "action": "Ne le forcez pas — attendez encore 2 minutes. Il se libérera quand une croûte se sera formée."
          },
          {
            "state": "Perfect",
            "description": "Croûte caramélisée profonde, bords carbonisés, jus limpides à rose pâle. L'intérieur est humide et à peine rose à 63°C.",
            "action": "Retirez et reposez-vous 3 minutes — le repos est ce qui garde les jus à l'intérieur."
          },
          {
            "state": "Overdone",
            "description": "Noir, sec et réduit. La graisse a rendu complètement, laissant le kofta serré et crayeux.",
            "action": "Servir en pita avec de la sauce supplémentaire pour compenser la perte d'humidité."
          }
        ]
      },
      "feelCue": "Pressez le kofta légèrement — le kofta parfaitement cuit donne légèrement sous pression et ressort à mi-chemin. S'il se sent dur ou caoutchouteux, il a trop cuit. S'il donne complètement sans ressort, il est sous-fait."
    }
  ]
};
