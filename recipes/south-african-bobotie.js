export default {
  "repoId": "master_south_african_south_african_bobotie_001",
  "parentRepoId": null,
  "slug": "south-african-bobotie",
  "author": "ForkRecipe Kitchen",
  "title": "Bobotie",
  "description": "Un plat cuit au four Cape Malay où l'agneau ou le bœuf haché séché — sucré avec de la confiture d'abricot, aiguisé avec du citron et parfumé avec du curcuma et de la cannelle — est couronné d'une crème brûlée d'oeufs dorés et mous.",
  "cuisine": "Afrique du Sud",
  "culture": "Cap Malay",
  "category": "proteins",
  "tags": [
    "Afrique du Sud",
    "agneau",
    "curry",
    "haut de coutard",
    "cuits"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr 15 min",
  "ratioSystem": "parts",
  "stars": 1650,
  "forks": 155,
  "contributors": 19,
  "license": "CC-BY-SA",
  "createdAt": "2024-08-08",
  "updatedAt": "2025-07-22",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "agneau ou bœuf haché",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "dinde hachée (moins riche)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon, haché finement",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Poudre de curry, curcuma, cannelle, espice",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Confiture d'abricot",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Mango chutney",
        "confiture de pêche"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Vin blanc ou jus de citron",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Binder",
      "name": "tranches de pain blanc, trempées dans le lait et pressées",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "lait de coco"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Binder",
      "name": "Oeufs",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel, poivre, feuilles de laurier",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Cuisson de viande épicée",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_09"
      ],
      "outputState": "spiced_meat_filling",
      "instructions": "Faire revenir l'oignon dans une éclaboussure d'huile à feu moyen jusqu'à ce qu'il soit doux et doré, environ 8 minutes. Ajouter les épices et faire frire 1 minute jusqu'à parfumer. Ajouter la menthe et faire cuire, en la brisant, pendant 8-10 minutes jusqu'à ce qu'elle soit dorée et cuite sans qu'il reste de rose. Incorporer la confiture d'abricot et le vinaigre. Bouche: le remplissage doit être doux, salé et chaud épicé avec une netteté de fond. Assaisonner de sel et de poivre. La douceur et l'acidité sont ce qui font ce cap malais distinctement plutôt qu'un curry standard.",
      "visualCue": {
        "primaryTarget": "La viande est entièrement dorée sans taches roses. Le remplissage semble brillant de la confiture et est parfumé d'épices chaudes. La couleur est un brun doré chaud avec jaune orange du curcuma.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La menthe rose est toujours visible. L'épice sent cru. Les oignons restent translucides plutôt que dorés.",
            "action": "Continuer la cuisson, rompre les amas. La viande doit être entièrement cuite avant de cuire car le plateau de crème se sert rapidement et ne pénètre pas dans le remplissage."
          },
          {
            "state": "Perfect",
            "description": "Un brun uniforme, brillant et parfumé. Un arôme sucré et épicé remplit la cuisine. Pas de mise en commun de liquide dans la casserole.",
            "action": "Plier dans le pain trempé et transférer dans un plat de cuisson."
          },
          {
            "state": "Overdone",
            "description": "La viande est très sèche et commence à coller. Jam a caramélisé en taches foncées collantes. Les oignons deviennent sombres.",
            "action": "Ajouter un jet d'eau pour se détendre. Retirer immédiatement du feu et plier dans le pain — la chaleur résiduelle continuera à cuire."
          }
        ]
      },
      "feelCue": "Le remplissage doit se déplacer comme une masse cohésive lorsque la poêle est secouée — humide et brillante, non sèche et friable. Si on dirait qu'il fait frire plutôt que de la vapeur, il est prêt."
    },
    {
      "nodeId": "step_2",
      "action": "Plier dans le pain et cuire la base",
      "inputs": [
        "spiced_meat_filling",
        "ing_06"
      ],
      "outputState": "filled_baking_dish",
      "instructions": "Pressez fermement le pain mouillé au lait pour éliminer l'excès de liquide, puis écrasez-le dans le remplissage de la viande et mélangez bien. Le pain agit comme un liant et un réservoir d'humidité — il empêche le remplissage de sécher pendant la cuisson et lui donne une texture légèrement douce, donnant sous la crème. Transférer le remplissage dans un plat beurré (environ 30 x 20 cm), le presser dans une couche uniforme. Des feuilles de laurier sur le dessus. Préchauffer le four à 180 °C.",
      "visualCue": {
        "primaryTarget": "Le remplissage est pressé dans une couche uniforme et compacte d'environ 4 à 5 cm de profondeur dans le plat. La surface est de niveau. La baie laisse visible sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le remplissage est bombé inégalement avec des taches élevées et des taches basses. La custarde se baignera dans les vallées et sera trop mince sur les sommets.",
            "action": "Utilisez le dos d'une cuillère pour presser et aplatir la surface avant d'ajouter la crème."
          },
          {
            "state": "Perfect",
            "description": "Même couche compacte avec surface lisse et plane. Le remplissage est légèrement comprimé, mais il a encore un certain rendement lorsqu'il est pressé. La baie reste plate sur le dessus.",
            "action": "Verser la crème immédiatement et placer dans le four préchauffé."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage a été si serré qu'il est devenu dense et comprimé, plus comme un pain de viande qu'un bobotie.",
            "action": "Utilisez une fourchette pour détacher légèrement la couche supérieure avant d'ajouter de la crème, qui doit s'infiltrer dans la surface."
          }
        ]
      },
      "feelCue": "Appuyez sur la surface du remplissage avec votre paume — il doit se sentir fermement rembourré, comme un matelas, donnant 1–2 cm mais ressortant en arrière plutôt que de compresser en permanence."
    },
    {
      "nodeId": "step_3",
      "action": "Verser et cuire la crème",
      "inputs": [
        "filled_baking_dish",
        "ing_07",
        "ing_08"
      ],
      "outputState": "baked_bobotie",
      "instructions": "fouetter les œufs et le lait avec une pincée de sel et de curcuma jusqu'à ce qu'ils soient lisses et uniformément jaunes. Verser le mélange de crème lentement et uniformément sur la couche de viande. La crème doit couvrir complètement la surface et être visible autour des bords — environ 1 cm de profondeur. Cuire au four à 180 °C pendant 35 à 40 minutes jusqu'à ce que la crème soit mise tout au long et dorée sur le dessus. Le centre devrait à peine trembler quand le plat est secoué.",
      "visualCue": {
        "primaryTarget": "Le dessus est jaune doré avec des taches brun clair où il a caramélisé. La surface entière est réglée — aucun mouvement liquide lorsque le plat est légèrement secoué.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre de la crème est encore liquide, en mouvement visiblement lorsqu'il est secoué. La surface est jaune pâle et fixée uniquement aux bords.",
            "action": "Retourner au four pour 8-10 minutes de plus et vérifier à nouveau. La température du four peut être trop basse."
          },
          {
            "state": "Perfect",
            "description": "Surface dorée, uniformément posée avec un dôme doux. Le centre tremble à peine avec un mouvement lent et cohésif lorsque le plat est déplacé, comme le panna cotta. Pas de liquide visible.",
            "action": "Retirer du four et reposer 5 minutes avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Le custard est complètement rigide, sans bulle. La surface est d'or foncé avec des bords secs et cassés. La crème peut commencer à s'éloigner des côtés.",
            "action": "Supprimer immédiatement. La crème est surcuite mais encore comestible — servir rapidement avant qu'elle ne continue à se resserrer à cause de la chaleur résiduelle."
          }
        ]
      },
      "feelCue": "Agiter doucement le plat — une crème bobotie parfaite se déplace comme une lampe à lave très lente: cohésive, pas slouse, avec le centre en retard d'une demi-seconde derrière les bords. Ce décalage est là où vit la texture parfaite."
    },
    {
      "nodeId": "step_4",
      "action": "Repos et service",
      "inputs": [
        "baked_bobotie"
      ],
      "outputState": "finished_bobotie",
      "instructions": "Reposez le bobotie pendant 5 minutes à l'extérieur du four, ce qui permet à la crème de se mettre en place et au remplissage de se raffermir afin qu'il coupe proprement. Servir dans des carrés directement du plat, accompagné de riz jaune (cuit avec du curcuma et des raisins secs), chutney, et la banane tranchée. Retirer et jeter les feuilles de laurier avant de servir. Une bonne assiette de bobotie doit avoir la douceur (banane, chutney), la chaleur (le remplissage épicé), et la crème soyeuse agissant comme une couronne douce et liante.",
      "visualCue": {
        "primaryTarget": "Lors de la coupe, le bobotie a deux couches distinctes: un dessus de crème dorée et un remplissage humide et épicé ci-dessous. Les bords de coupe sont propres et ne s'effondrent pas.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le haut de custard glisse lorsqu'il est coupé — il n'est pas lié au remplissage. Le remplissage est lâche et débranché.",
            "action": "Retourner au four 5 à 8 minutes de plus. Alternativement, reposez-vous plus longtemps à température ambiante, ce qui permettra à la chaleur de report de finir la crème."
          },
          {
            "state": "Perfect",
            "description": "Nettoyer les carrés avec une couche d'or distincte sur le dessus et la viande humide et épicée ci-dessous. La crème est assez douce pour vibrer légèrement lorsque l'assiette est déplacée. Arôme doux et épicé.",
            "action": "Servir immédiatement avec du riz jaune et du chutney."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage est sec et s'écroule lorsqu'il est coupé. Custard est caoutchouteux et séparé du remplissage. Le plat sent légèrement brûlé.",
            "action": "Servir avec un chutney supplémentaire et une cuillère généreuse de yaourt ou de crème pour restaurer l'humidité."
          }
        ]
      },
      "feelCue": "Couper à travers la crème avec le côté d'une cuillère — elle devrait donner avec douceur, même la résistance, comme couper à travers une terrine douce, avant de céder proprement au remplissage humide en dessous."
    }
  ]
};
