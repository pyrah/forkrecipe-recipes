export default {
  "repoId": "master_greek_moussaka_001",
  "parentRepoId": null,
  "slug": "moussaka",
  "author": "ForkRecipe Kitchen",
  "title": "Mousseka",
  "description": "Couches d'aubergine frite, d'agneau épicé et de sauce tomate couronnées d'un béchamel épais et cuites au four jusqu'à ce que le dessus se mette à la crème dorée tremblante — le grand plat de la Grèce, parfumé de cannelle et d'Allspice sucré, construit pour l'après-midi et mieux le lendemain matin.",
  "cuisine": "Grec",
  "culture": "Grec",
  "category": "vegetables",
  "tags": [
    "grec",
    "aubergines",
    "agneau",
    "cuits",
    "casserole"
  ],
  "difficulty": 3,
  "activeTime": "1 hr",
  "totalTime": "2 hr",
  "ratioSystem": "weight",
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
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Grandes aubergines, tranches 1cm d'épaisseur",
      "ratioValue": 700,
      "defaultUnit": "g",
      "substitutions": [
        "courgettes (utiliser en plus ou à la place)",
        "couche de base de pomme de terre"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Mine d'agneau",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "viande bovine",
        "un mélange d'agneau et de porc"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon brun, finement coupé en dés",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "oignon blanc"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "poudre d'ail"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Tomates entières pelées en conserve, concassées",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "Passata",
        "tomates fraîches mûres, râpées"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Vin rouge sec",
      "ratioValue": 100,
      "defaultUnit": "ml",
      "substitutions": [
        "stock de viande bovine supplémentaire",
        "jus de grenade"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "écorce de cassie, râpée"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Vers le sol",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "épices mélangées"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 2,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Huile d'olive (pour la friture des aubergines)",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": [
        "huile de tournesol"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Beurre non salé (pour béchamel)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "Margarine de bonne qualité"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Structure",
      "name": "Farine plate (pour béchamel)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "Wondera pour une sauce plus lisse"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Dairy",
      "name": "Lait plein de gras, chaud (pour béchamel)",
      "ratioValue": 600,
      "defaultUnit": "ml",
      "substitutions": [
        "moitié et moitié pour une crème plus riche"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Binder",
      "name": "Œufs battus (pour béchamel)",
      "ratioValue": 2,
      "defaultUnit": "eggs",
      "substitutions": []
    },
    {
      "ingId": "ing_15",
      "role": "Spice",
      "name": "Noix de muscade fraîchement râpée",
      "ratioValue": 1,
      "defaultUnit": "pinch",
      "substitutions": []
    },
    {
      "ingId": "ing_16",
      "role": "Dairy",
      "name": "Kefalotyri ou Parmigiano Reggiano, râpé",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "Pecorino Romano",
        "ans Graviera"
      ]
    },
    {
      "ingId": "ing_17",
      "role": "Seasoning",
      "name": "Sel de mer fin et poivre noir",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Aubergines frites",
      "inputs": [
        "ing_01",
        "ing_10",
        "ing_17"
      ],
      "outputState": "fried_eggplant",
      "instructions": "Saler les tranches d'aubergine de façon libérale des deux côtés et les laisser s'asseoir dans une calandre pendant 20 minutes pour extraire l'humidité — le liquide recueilli sera visiblement brillant. Faire sécher toutes les tranches avec des serviettes en papier. Chauffer une généreuse goutte d'huile d'olive dans une grande poêle à feu moyen-vif jusqu'à ce qu'elle mijote. Faire frire l'aubergine en lots sans encombrer, de 2 à 3 minutes de chaque côté, jusqu'à ce que les deux visages soient profondément dorés. L'huile sera absorbée rapidement au début, puis relâchée à mesure que la chair s'effondre. Égoutter sur un plateau en papier-serviettes. Les tranches doivent être bien dorées, pas pâles: leur surface caramélisée est ce qui retient les couches de la moussaka ensemble.",
      "visualCue": {
        "primaryTarget": "Chaque tranche est profonde, même dorée-brun des deux côtés — la couleur d'un béquille bien cuit — avec un intérieur doux et effondré qui saigne lorsqu'il est pressé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tranches sont en or pâle ou blanc sur une face, tout en conservant leur forme brute et spongieuse lorsqu'elles sont pressées — elles n'ont pas coloré.",
            "action": "Augmenter la chaleur et continuer à frire. L'aubergine pâle de la moussaka est musquée et sans goût, le brunissement n'est pas négociable."
          },
          {
            "state": "Perfect",
            "description": "De couleur dorée profonde et scintillante des deux côtés, les tranches sont douces et florissantes mais toujours intactes, allongées à plat sans curling.",
            "action": "Égoutter sur des serviettes en papier et assaisonner avec une légère pincée de sel tout en étant chaud. Passez au prochain lot."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brun foncé jusqu'au noir, les tranches sont fendues et s'effondrent, ou elles sont amères.",
            "action": "Réduire la chaleur pour les lots suivants. Coupez les bords très sombres et utilisez les tranches — elles continueront à travailler dans le plat."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur une tranche frite — il devrait compresser jusqu'à la moitié de son épaisseur et se sentir soyeux, donnant et un peu gras de la meilleure façon, libérant une bouffée de vapeur. Si elle rebondit ferme, elle a besoin de plus de chaleur."
    },
    {
      "nodeId": "step_2",
      "action": "Faire de la sauce à la viande",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_17"
      ],
      "outputState": "lamb_tomato_sauce",
      "instructions": "Dans la même casserole avec un mince film d'huile fraîche, faire cuire l'oignon à feu moyen jusqu'à ce qu'il soit adouci et translucide, 8 minutes. Ajouter l'ail et cuire encore une minute. Ajouter la menthe d'agneau et faire cuire, en la brisant avec une cuillère en bois, jusqu'à ce qu'il ne reste pas de rose et que la viande ait pris une croûte brun clair dans les endroits. Verser dans le vin et racler les morceaux coincés — il sifflera et réduira à presque rien en 2 minutes. Ajouter les tomates concassées, la cannelle, l'aspice et les feuilles de laurier. Assaisonner généreusement de sel et de poivre. Laisser mijoter à découvert sur moyenne-doux de 25 à 30 minutes jusqu'à ce que la sauce soit épaisse, brillante et presque sèche. L'humidité est l'ennemi d'une moussaka propre. Enlever les feuilles de laurier.",
      "visualCue": {
        "primaryTarget": "Une sauce profondément parfumée, rouille-rouge s'accrochant à la viande dans un revêtement épais et presque sec — quand vous faites glisser une cuillère à travers la poêle, un canal clair tient ouvert pendant 2-3 secondes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore liquide et s'accumule librement autour de la viande, l'arôme d'épices n'est pas encore complètement développé, et la netteté du vin persiste.",
            "action": "Laisser mijoter plus longtemps. Une sauce à la viande humide arrosera les couches d'aubergine et effondrera la moussaka lorsqu'elle sera coupée."
          },
          {
            "state": "Perfect",
            "description": "La sauce est confitureuse et épaisse, brillante avec de la graisse d'agneau rendu, sentant la cannelle et la tomate chaudes. Une cuillère traînée à travers laisse un canal propre et à fermeture lente.",
            "action": "Goûtez et assaisonnez - il doit goûter avec assurance épicé et salé. Retirer les feuilles de la baie et procéder à l'assemblage."
          },
          {
            "state": "Overdone",
            "description": "La sauce a pris et brûlé sur le fond, sentant acride plutôt que sucré-épicé, la viande séchée et granulaire.",
            "action": "Grattez immédiatement dans une poêle propre, laissant la couche brûlée derrière. Ajouter un jet de stock et remuer pour relancer."
          }
        ]
      },
      "feelCue": "La sauce devrait avoir l'air d'une confiture de viande cuite lentement, la cannelle et l'aspice créant une chaleur douce qui fait que toute la cuisine se sente comme un dimanche à Athènes. La graisse d'agneau doit briller à la surface."
    },
    {
      "nodeId": "step_3",
      "action": "Faire du béchamel",
      "inputs": [
        "ing_11",
        "ing_12",
        "ing_13",
        "ing_14",
        "ing_15",
        "ing_16"
      ],
      "outputState": "enriched_bechamel",
      "instructions": "Faire fondre le beurre dans une casserole lourde à feu moyen-doux. fouetter dans la farine et cuire en remuant constamment pendant 2 minutes jusqu'à ce que le ros sente le biscuit chaud. Verser le lait chaud dans un cours d'eau mince, fouetter dur, l'ajouter graduellement pour éviter les grumeaux. Porter à mijoter doucement et cuire de 8 à 10 minutes en fouettant souvent, jusqu'à ce qu'il soit assez épais pour enrober l'arrière d'une cuillère. Retirer du feu et laisser refroidir pendant 5 minutes — il faut le refroidir légèrement ou les œufs brouillés. fouetter vigoureusement les œufs battus, la muscade et la moitié du fromage râpé. Assaisonner de sel et de poivre. Le résultat est plus riche, plus egger et plus custard qu'un béchamel uni, il sera mis au four comme un flan salé.",
      "visualCue": {
        "primaryTarget": "Une sauce crème épaisse, jaune ivoire, brillante et lisse, avec le fromage juste visible comme des stries fondues. Une cuillère traînée à travers les feuilles d'un canal durable.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore mince et laiteuse, en fuyant la cuillère dans une cascade plutôt que de la enrober — l'amidon n'a pas eu le temps de gélatiniser.",
            "action": "Laisser mijoter plus longtemps avant d'ajouter les œufs. Un béchamel mince fera un plateau humide et runny qui ne sera pas mis au four."
          },
          {
            "state": "Perfect",
            "description": "Épais, crémeux et doux, la sauce riche en œufs est un or pâle, tombant du fouet dans un ruban lent. Il sent richement la laiterie chaude et la muscade.",
            "action": "Travaillez rapidement — versez-le sur la moussaka assemblée immédiatement avant qu'elle ne s'installe."
          },
          {
            "state": "Overdone",
            "description": "La sauce est rigide et collante, ou montre des fils d'oeuf cuit d'être ajouté trop chaud, lui donnant un aspect brouillé.",
            "action": "fouetter dans un jet de lait chaud pour se détendre. Si des fils d'œufs sont visibles, passer à travers un tamis fin avant d'utiliser."
          }
        ]
      },
      "feelCue": "Le béchamel fini doit verser comme une crème très épaisse — répugnante, brillante et auto-lissée. Il doit sentir comme du lait cuit sucré avec le fantôme de muscade et la profondeur salée du fromage fondu en dessous."
    },
    {
      "nodeId": "step_4",
      "action": "Assembler et cuire",
      "inputs": [
        "fried_eggplant",
        "lamb_tomato_sauce",
        "enriched_bechamel",
        "ing_16",
        "ing_17"
      ],
      "outputState": "finished_moussaka",
      "instructions": "Préchauffer le four à 180°C / 350°F. Huilez légèrement un plat de cuisson profond de 30×22cm. Coucher la moitié de l'aubergine frite à travers la base en recoupant les bardeaux. Étendre la sauce d'agneau entière uniformément sur l'aubergine, la presser à plat. Coucher le reste de l'aubergine sur la sauce de viande dans le même motif de chevauchement. Verser le béchamel sur le dessus, le répartir sur les bords avec une spatule — il devrait former une couche uniforme d'au moins 1,5cm d'épaisseur, assez pour être bien réglé. Déposer le reste du fromage râpé sur la surface. Cuire au four pendant 45 à 50 minutes jusqu'à ce que le sommet soit profond, même doré et que les bords bouillonnent. Reposez-vous au moins 20 minutes avant de couper — la structure interne a besoin de temps.",
      "visualCue": {
        "primaryTarget": "La surface est uniforme, doré-brun brûlé, bombé très légèrement au centre, avec des bords de fromage brun lacé et une bulle audible et lente aux côtés du plat.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La partie supérieure du béchamel est d'ivoire pâle ou très légèrement dorée, et elle se fige encore de façon significative lorsque le plat est agité.",
            "action": "Retournez au four. Un haut sous-cuisiné s'effondrera lorsque la plaque de service sera coupée et inondée. Vérifiez en incréments de 10 minutes."
          },
          {
            "state": "Perfect",
            "description": "Un brun doré profond et constant sur toute la surface, les bords du fromage croustillés, le centre tremblant à peine lorsqu'il est trempé et ferme après le repos. L'arôme est la cannelle, la viande et la laiterie brune.",
            "action": "Repose à découvert pendant 20 à 30 minutes avant la coupe — c'est obligatoire, pas facultatif. La moussaka ne tiendra pas ses couches quand elle sera chaude."
          },
          {
            "state": "Overdone",
            "description": "Le dessus est passé de l'or à un brun foncé, fêlé et les bords du béchamel sèchent et s'éloignent du plat.",
            "action": "Tente lâchement avec du papier pour le temps restant de cuisson. Couper les bords trop foncés avant de servir."
          }
        ]
      },
      "feelCue": "Un couteau pressé dans la moussaka reposée devrait rencontrer des couches distinctes et trancher proprement, en soulevant une tranche qui tient sa forme sur la spatule — pas s'effondrer, pas nager. Le haut devrait sembler légèrement solide quand vous tapez avec un joint."
    }
  ]
};
