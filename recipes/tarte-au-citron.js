export default {
  "repoId": "master_french_tarte_au_citron_001",
  "parentRepoId": null,
  "slug": "tarte-au-citron",
  "author": "ForkRecipe Kitchen",
  "title": "Tarte au Citron",
  "description": "Une pâte sablée au beurre remplie d'un caillé de citron soyeux et intensement aigre suffit à trancher proprement, la tarte qui sépare les desserts de citron timide de la vraie chose.",
  "cuisine": "Français",
  "culture": "Pâtisserie française",
  "category": "desserts",
  "tags": [
    "tarte au citron",
    "français",
    "pâtisserie",
    "agrumes",
    "dessert"
  ],
  "difficulty": 4,
  "activeTime": "45 min",
  "totalTime": "3 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 5,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "farine de gâteau (résultat plus friable)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre froid non salé (cube)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre glacé",
      "ratioValue": 35,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Grand jaune d'œuf",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Jus de citron frais (environ 4 grands citrons)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Citrus",
      "name": "Zeste de citron (finement râpé, même citron)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Protein",
      "name": "Gros œufs (ensemble)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 70,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Beurre non salé (froid, cube, pour caillé)",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Refroidissement",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "pate_sablee_shell",
      "instructions": "Dans un robot culinaire ou à la main, mélanger la farine, le sucre glaçant et le sel. Ajouter le beurre glacé et le pouls jusqu'à ce que le mélange ressemble à du sable fin — pas de morceaux de beurre visible. Ajouter le jaune d'œuf et 1 à 2 cuillères à café d'eau froide et donner du pouls jusqu'à ce que la pâte se combine. Ne pas surmener. Appuyez sur un disque plat, enveloppez et réfrigérez pendant 30 minutes. Rouler à 3 mm d'épaisseur et allonger une boîte cannelée de 22 à 24 cm avec une base amovible. Appuyez doucement sur les flûtes, coupez bien le haut et réfrigérez encore 20 minutes. Cuire à 180°C (355°F) avec du parchemin et des poids pendant 15 minutes, puis enlever les poids et cuire encore 10 à 12 minutes jusqu'à ce que la base soit uniformément dorée.",
      "visualCue": {
        "primaryTarget": "Une coquille entièrement dorée, sèche, avec une définition de flûte croustillante et sans rétrécissement – la base devrait avoir l'air biscuit-pale, pas blanche ou pâteuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La base est encore pâle et se sent douce lorsqu'elle est pressée.",
            "action": "Retourner au four encore 5 minutes sans poids jusqu'à ce que visiblement doré et sec."
          },
          {
            "state": "Perfect",
            "description": "Un or pâle uniforme, entièrement serti. Les crêtes de flûte Crisp. Des odeurs de pain court. La base fait un bruit de rides sur papier lorsqu'elle est légèrement tapée.",
            "action": "Laisser refroidir complètement dans l'étain avant de verser dans le caillé."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brun foncé et légèrement amer. La base a quelques taches plus foncées.",
            "action": "Coupez soigneusement les bords très sombres. Remplir et servir — le caillé va contrebalancer tout léger excès de cuisson."
          }
        ]
      },
      "feelCue": "Touchez la base refroidie — elle devrait être sèche et papier-crisp sous votre bout de doigt, comme si vous touchiez un petit biscuit à travers l'étain."
    },
    {
      "nodeId": "step_2",
      "action": "Whisk",
      "inputs": [
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "raw_lemon_curd",
      "instructions": "Dans un bol moyen, fouetter ensemble les œufs, le sucre de ricin, le jus de citron et le zeste de citron jusqu'à ce que le sucre soit complètement dissous et que le mélange soit lisse et uniformément jaune pâle. Ne pas battre en mousse — cela devrait être fouetté juste assez pour se combiner. Mettre le bol sur une casserole d'eau à peine mijotante (bain-marie), en veillant à ce que la base du bol ne touche pas l'eau.",
      "visualCue": {
        "primaryTarget": "Un liquide jaune citron clair et lisse qui est complètement homogène, sans grains de sucre ni stries non dissoutes visibles lorsqu'il est tenu à la lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les granules de sucre sont encore visibles et le mélange se sent légèrement gras sur la langue.",
            "action": "fouetter encore une minute — le sucre doit être complètement dissous avant l'application de la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Uniformement pâle, soyeuse et entièrement lisse. L'arôme de citron est vif et vif, presque agressif.",
            "action": "Placer sur le bain-marie et commencer à fouetter continuellement."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a été battu à une mousse. Trop d'air fera que le caillé fini aura une texture spongieuse plutôt que soyeuse.",
            "action": "Laisser reposer la mousse au repos pendant 2 minutes, puis arroser toute mousse de la surface avant la cuisson."
          }
        ]
      },
      "feelCue": "Frottez le mélange entre vos doigts — il doit se sentir complètement lisse, sans friction granulaire du sucre non dissous."
    },
    {
      "nodeId": "step_3",
      "action": "Température",
      "inputs": [
        "raw_lemon_curd",
        "ing_10"
      ],
      "outputState": "lemon_curd",
      "instructions": "Cuire le mélange de citron sur le bain-marie, en fouettant constamment avec une spatule souple ou un fouet, en grattant fréquemment les côtés du bol. Le mélange s'épaissit lentement. Continuer la cuisson jusqu'à ce qu'elle atteigne 82°C (180°F) sur un thermomètre, ou au stade de la nappe : lorsque vous tirez un doigt sur l'arrière d'une cuillère recouverte de caillé, il faut laisser une ligne propre. Cela prend 8-12 minutes. Retirer immédiatement du feu et fouetter dans les cubes de beurre froid en deux ajouts, en attendant que chacun s'intègre avant d'en ajouter davantage. Le beurre est ce qui rend le caillé soyeux plutôt qu'épais.",
      "visualCue": {
        "primaryTarget": "Un caillé jaune citron brillant qui enveloppe l'arrière d'une cuillère épaissement et laisse une trace de doigt propre et définie qui ne se remplit pas.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Cord est encore très liquide et coule librement de la cuillère. Une trace de doigt se remplit immédiatement. Sous 78°C.",
            "action": "Continuer la cuisson sur le bain-marie, en fouettant constamment. Patience — l'épaississement se produit progressivement, puis rapidement."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, versable, brillant. La ligne de doigt propre sur la cuillère reste définie. La température est de 82°C. Une fois le beurre ajouté, il est encore plus soyeux et léger.",
            "action": "Plongez dans un tamis fin dans la coquille refroidie immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Cord a dépassé 85°C — les fils d'oeuf brouillés peuvent être visibles. La texture sera granuleuse plutôt que soyeuse.",
            "action": "Soucher d'urgence à travers un tamis fin; une pression agressive peut sauver un caillé légèrement surcuit."
          }
        ]
      },
      "feelCue": "Plongez un doigt propre dans le caillé chaud — il devrait enrober votre doigt dans une couche lisse et brillante qui s'accroche sans goutter, et le goût de citron vif devrait frapper immédiatement."
    },
    {
      "nodeId": "step_4",
      "action": "Jeu",
      "inputs": [
        "pate_sablee_shell",
        "lemon_curd"
      ],
      "outputState": "finished_tarte_au_citron",
      "instructions": "Placer le caillé chaud fini à travers un tamis fin directement dans la coque de tarte refroidie. Tapotez doucement l'étain sur le comptoir deux fois pour mettre la surface à niveau et relâchez toutes les bulles d'air. Transférer au réfrigérateur et refroidir à découvert pendant au moins 2 heures, ou jusqu'à ce que le caillé ait atteint une consistance trancheuse. Servir à température ambiante – retirer du réfrigérateur 20-30 minutes avant de servir afin que le caillé s'adoucisse légèrement à sa texture soyeuse idéale.",
      "visualCue": {
        "primaryTarget": "Une surface plane, parfaitement niveau, brillante de la couleur des citrons mûrs, reflétant la lumière comme un miroir sans fissures, fosses, ou des taches inégales.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Cord est encore liquide au centre — il coule lorsque l'étain est incliné. La surface n'a pas d'aspect fixe.",
            "action": "Retournez au frigo pendant une heure. Le caillé a besoin de temps pour se fixer via les protéines d'oeuf et la cristallisation de graisse de beurre."
          },
          {
            "state": "Perfect",
            "description": "La surface est complètement plate, lisse et brillante. En appuyant très doucement au centre, il donne légèrement et ressort. Un couteau se coupe sans liquide.",
            "action": "Retirer soigneusement de l'étain et servir à la température ambiante."
          },
          {
            "state": "Overdone",
            "description": "La surface a craqué ou le caillé s'est légèrement rétréci des bords de la coque. Il a peut-être été refroidi trop agressivement.",
            "action": "La saveur n'est pas affectée — servir ainsi. Une fine poussière de sucre glace peut masquer les fissures de surface esthétiquement."
          }
        ]
      },
      "feelCue": "Lorsqu'une tranche est coupée et levée, le caillé doit tenir son angle proprement — s'il glisse, il a besoin de plus de temps de refroidissement; s'il se brise, il a été surchargé et légèrement surcuit."
    }
  ]
};
