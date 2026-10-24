export default {
  "repoId": "master_polish_pierogi_001",
  "parentRepoId": null,
  "slug": "pierogi",
  "author": "ForkRecipe Kitchen",
  "title": "Pierogi",
  "description": "La réponse de la Pologne au dumping : une fine poche de pâte qui donne scellée autour d'un remplissage de fromage et de pomme de terre des agriculteurs si crémeux qu'elle s'effondre sur la langue, finie au beurre brun avec des oignons qui ont cuit dans la douceur.",
  "cuisine": "Polonais",
  "culture": "Polonais",
  "category": "breads",
  "tags": [
    "poli",
    "les boulettes",
    "pommes de terre",
    "fromage",
    "bouillie"
  ],
  "difficulty": 3,
  "activeTime": "1 hr",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 1560,
  "forks": 198,
  "contributors": 31,
  "license": "CC-BY-SA",
  "createdAt": "2024-08-05",
  "updatedAt": "2025-05-22",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 2,
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
        "00 farine"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude",
      "ratioValue": 45,
      "defaultUnit": "parts",
      "substitutions": [
        "crème aigre + mélange d'eau"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Fromage d'agriculteur (twaróg) ou ricotta",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "fromage cottage séché"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Starch",
      "name": "Pommes de terre russes, bouillies et rizées",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "Yukon Pommes de terre d'or"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon jaune, en dés",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "Échalotes"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "crème aigre pour servir"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel et poivre blanc",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Agenouillement",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_07"
      ],
      "outputState": "pierogi_dough",
      "instructions": "Mélanger la farine et une pincée de sel dans un bol. Ajouter l'eau tiède progressivement, mélanger avec une fourchette jusqu'à ce qu'elle s'éteigne. Éteindre et pétrir à la main pendant 8-10 minutes jusqu'à ce que la pâte soit complètement lisse, souple et légèrement collante mais non collante. La pâte doit avoir l'élasticité d'un lobe d'oreille. Enroulez fermement dans le film de collage et reposez-vous 30 minutes à température ambiante — le repos n'est pas négociable, car il détend le gluten afin que la pâte puisse être roulée en papier-mince.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte lisse, pâle et élastique sans taches de farine visibles ou de taches rugueuses. La surface brille légèrement de la graisse dans la pâte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est rugueuse et déchire facilement lorsqu'elle est étirée. Les poches de farine sèche sont encore visibles. Les brins de gluten ne sont pas développés.",
            "action": "Agenouillez encore 3 à 5 minutes. Saupoudrer quelques gouttes d'eau si la pâte s'effondre, ou une pincée de farine si elle colle."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, élastique, pâte légèrement collante qui ressort quand elle est cuite. Une petite pièce étirée mince entre les doigts doit s'étirer sans déchirer avant d'aller translucide.",
            "action": "Envelopper et reposer pendant 30 minutes minimum."
          },
          {
            "state": "Overdone",
            "description": "Dough a été sur-collé et se sent serré et caoutchouteux, se cassant en arrière agressivement quand étiré. Très difficile à rouler mince.",
            "action": "Reposez-vous pendant 20 minutes supplémentaires. Le gluten se détendrea légèrement, bien que la pâte surcollée ne récupère jamais complètement."
          }
        ]
      },
      "feelCue": "La pâte pierogi bien développée doit se sentir comme la joue d'un bébé sous votre paume – lisse, chaude, légèrement fléchissante mais avec une douce résistance en dessous. Il ne devrait pas coller à des mains sèches, mais s'accrochera faiblement à un bout humide."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_07"
      ],
      "outputState": "potato_cheese_filling",
      "instructions": "Faire revenir la moitié de l'oignon en dés dans le beurre jusqu'à ce qu'il soit doré, puis réserver pour refroidir. Dans un bol, mélanger les pommes de terre rizisées, le fromage d'agriculteur et l'oignon sauté. Assaisonner avec agressivité avec du sel et du poivre blanc — le remplissage sera enveloppé dans la pâte non assaisonnée, donc il doit porter toute la saveur. Mélanger jusqu'à ce qu'il soit simplement combiné; ne pas surmener ou la pomme de terre devient collante. Goûtez et ajustez le sel jusqu'à ce que la garniture ait un goût agréablement salé.",
      "visualCue": {
        "primaryTarget": "Un remplissage cohésif qui tient sa forme lorsqu'il est pressé dans une boule mais s'écroule légèrement aux bords — pas une pâte, pas un mélange lâche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le remplissage est sous saison et fade. Le fromage et la pomme de terre goûtent plat et féculent sans sel pour activer leurs saveurs.",
            "action": "Ajouter plus de sel dans les petites pincées, goûter après chaque addition. La garniture doit goûter assez assaisonné pour manger seule."
          },
          {
            "state": "Perfect",
            "description": "Le remplissage tient une forme de boule lorsqu'il est roulé entre vos paumes. Il a un goût savoureux, cheesy et nettement en avant de la pomme de terre. Un doux parfum d'herbe de l'oignon cuit. La couleur est jaune pâle uniforme.",
            "action": "Utiliser immédiatement, ou couvrir et réfrigérer jusqu'à 4 heures."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage a été trop mélangé et est collant — il s'étend comme de la pâte de pommes de terre purée au lieu de s'effondrer. Les versions sursaltées ont un goût vif et une note.",
            "action": "Ajouter une cuillère à soupe de fromage frais pour la détendre. En cas de sursel, ajouter une autre pomme de terre rizisée (sans saison) pour diluer."
          }
        ]
      },
      "feelCue": "Rouler une petite boule de remplissage entre vos paumes — il devrait tenir sa forme mais se sentir légèrement émietté, comme un mélange de thon bien assaisonné. S'il se sent mouillé et collant sur vos mains, le remplissage a trop d'humidité et fera la pâte soggy."
    },
    {
      "nodeId": "step_3",
      "action": "Forme",
      "inputs": [
        "pierogi_dough",
        "potato_cheese_filling"
      ],
      "outputState": "raw_pierogi",
      "instructions": "Sur une surface légèrement farinée, rouler la pâte reposée à une épaisseur de 2 à 3 mm, assez mince pour voir l'ombre de votre main à travers elle. Couper les cercles à l'aide d'une coupe ou d'un verre de 8 à 9 cm. Placez une généreuse cuillère à café de remplissage au centre de chaque cercle. Pliez la pâte sur le remplissage et pressez fermement les bords ensemble, en paralysant avec une fourchette ou un doigt serré. Les bords scellés doivent être complètement étanches à l'air — toute ouverture éclatera pendant l'ébullition.",
      "visualCue": {
        "primaryTarget": "Des cercles de pâte uniformément minces avec un bord ferme et bien cramponné. Le remplissage crée une douce forme de dôme au centre. Aucune poche d'air visible à l'intérieur de la décharge scellée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les bords ne sont pas complètement pressés ensemble. Petites fentes ou petites taches dans le joint où la pâte n'est pas collée.",
            "action": "Appuyez fermement sur les bords entre le pouce et l'index, en travaillant sur tout le périmètre. Mouiller légèrement votre bout de doigt pour aider à sceller les trous tenaces."
          },
          {
            "state": "Perfect",
            "description": "Un bord propre, plat, solidement serti, sans trous. Les bouffées soufflent légèrement au centre du remplissage. Tenu à la lumière, aucun remplissage n'est visible à travers la pâte aux bords.",
            "action": "Placer sur un plateau légèrement fariné et couvrir d'une serviette humide. Faire bouillir dans les 30 minutes ou congeler immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Trop de remplissage a causé l'étirement de la pâte mince et presque déchirer en haut. Le remplissage presse contre une paroi en pâte surminée.",
            "action": "Ces pierogi sont délicats et peuvent éclater. Cuire immédiatement et manipuler avec plus de soin pendant l'ébullition."
          }
        ]
      },
      "feelCue": "Tenez un pierogi scellé entre deux doigts et pressez doucement le long du bord scellé — il devrait se sentir ferme et résistant sans donner. Tout point mou indique un joint faible qui s'ouvre dans l'eau bouillante."
    },
    {
      "nodeId": "step_4",
      "action": "Bouillir",
      "inputs": [
        "raw_pierogi",
        "ing_06",
        "ing_05"
      ],
      "outputState": "finished_pierogi",
      "instructions": "Porter un grand pot d'eau fortement salée à ébullition. Ajouter le pierogi en lots — ne pas fouler. Ils couleront, puis flotteront à la surface après 2 minutes. Après avoir flotter, cuire 2 minutes de plus pour un total de 4 à 5 minutes. Retirer avec une cuillère à fentes. Pour la finale classique, faire fondre le beurre dans une grande casserole à feu moyen, ajouter le reste de l'oignon en dés et cuire jusqu'à ce qu'il soit doré. Verser le pierogi bouilli dans le beurre brun pendant 2 minutes jusqu'à ce qu'il soit légèrement croustillé d'un côté.",
      "visualCue": {
        "primaryTarget": "Pierogi sont gonflés, légèrement translucides, et scintillent avec du beurre. Un côté plat montre un brun doré clair de la poêle, tandis que l'autre côté reste lisse et pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pierogi est encore légèrement ferme et mâcheux. Les bords de la pâte n'ont pas complètement ramolli et le remplissage n'est pas chaud partout.",
            "action": "Continuer à bouillir 1 à 2 minutes de plus. La pâte va de dure à rapide — vérifiez fréquemment."
          },
          {
            "state": "Perfect",
            "description": "La toux est soyeuse, tendre et productive; elle se coupe facilement avec le côté d'une fourchette. Le remplissage est chaud et crémeux. Le côté beurré a une croûte dorée claire avec le parfum d'oignon tout au long.",
            "action": "Servir immédiatement avec de la crème aigre, de l'oignon caramélisé et de la ciboulette fraîche."
          },
          {
            "state": "Overdone",
            "description": "Pierogi s'est ouvert. Le remplissage s'échappe dans l'eau bouillante, en l'assombrissant. La toux est musquée et déchire facilement.",
            "action": "Sauve ce que tu peux. Pierogi sont délicats — utilisez un grand pot avec beaucoup d'eau et ne surpeuplez pas. Un pierogi éclaté est habituellement une défaillance ou une surpopulation de phoques."
          }
        ]
      },
      "feelCue": "Piercez un pierogi fini avec une fourchette et il devrait donner immédiatement sans résistance — comme en appuyant dans du pain très doux. La vapeur qui s'échappe doit sentir intensément le beurre, la pomme de terre et l'oignon."
    }
  ]
};
