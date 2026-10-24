export default {
  "repoId": "master_indian_chana-masala_001",
  "parentRepoId": null,
  "slug": "chana-masala",
  "author": "ForkRecipe Kitchen",
  "title": "Chana Masala",
  "description": "Les pois chiches braisés dans un masala profond, rouge rouille-oignon-tomate construit sur une technique d'épices en couches - des épices entières fleuries dans l'huile chaude, des épices broyées grillées dans la sauce, et un dernier ascenseur de tart amchoor qui fait l'anneau entier de pot.",
  "cuisine": "Indiens",
  "culture": "Punjabi",
  "category": "proteins",
  "tags": [
    "Pois chiches",
    "indienne",
    "punjabi",
    "végétarien",
    "curry",
    "épice"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "1 hour 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 3,
    "bitter": 1,
    "umami": 4,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Pois chiches (séchés, trempés pendant la nuit ou cuits)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "pois chiches en conserve, égouttés"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile neutre ou ghee",
      "ratioValue": 18,
      "defaultUnit": "parts",
      "substitutions": [
        "Huile de moutarde"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Epices entières (2 cardamome noir, 1 cannelle dure, 2 girofles, 1 cumin à cumin, 2 feuilles de laurier)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon jaune, finement haché",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Pâte gingembre-ail",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "gingembre haché + ail"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Heat",
      "name": "Chiles verts, fentes",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Serrano",
        "Chile d'oiseau thaïlandais"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "Tomates de ripe, purées",
      "ratioValue": 70,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates concassées en conserve"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Mélange d'épices broyées (1 coriandre à soupe, 1 cumin à soupe, 1 chile à thé cachemiri, 1/2 c. à thé curcuma, 1 c. à thé garam masala)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Amchoor (poudre de mangue séchée)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "d'anardana",
        "jus de citron à finir"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Cilantro et gingembre",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Température",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "tempered_oil",
      "instructions": "Chauffer l'huile ou le ghee dans un pot lourd sur une hauteur moyenne jusqu'à ce qu'il mijote et qu'une graine de cumin tombe immédiatement dans les étourdissements. Ajouter toutes les épices à la fois: cardamome noir, cannelle, girofle, cumin, feuilles de laurier. Laissez-les fleurir pendant 20-40 secondes jusqu'à ce que le cumin efface l'ombre et que la cuisine se remplisse d'un arôme doux et boisé.",
      "visualCue": {
        "primaryTarget": "Les graines de cumin passent d'un brun pâle à un brun plus profond et s'élèvent à la surface dans une fine mousse de petites bulles. L'huile est parfumée et les feuilles de laurier ont légèrement foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épices sont inertes dans l'huile. Pas de bouillon, pas d'arôme. Cumin est encore pâle.",
            "action": "Élevez la chaleur — l'huile n'est pas assez chaude pour extraire les aromatiques solubles dans le gras. Attendez le coup."
          },
          {
            "state": "Perfect",
            "description": "La cumine étourne et brunit une ombre, les gousses de cardamome bouffent, l'huile sent la forêt chaude et le toast.",
            "action": "Ajouter l'oignon immédiatement pour arrêter les épices avant qu'elles ne scortent."
          },
          {
            "state": "Overdone",
            "description": "La cumin est noire, l'huile sent l'acride et la fumée, un bord brûlé vif dans l'arôme.",
            "action": "Jeter et recommencer à zéro — une épice entière brûlée rendra le pot entier amer."
          }
        ]
      },
      "feelCue": "Écoutez un étourdissement vif et crépitant à l'instant où les graines frappent l'huile. L'arôme devrait vous faire pencher, pas vous retirer."
    },
    {
      "nodeId": "step_2",
      "action": "Oignons bruns",
      "inputs": [
        "tempered_oil",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "browned_masala_base",
      "instructions": "Ajouter l'oignon haché et une pincée de sel à l'huile trempée. Cuire à feu moyen, en remuant souvent, pendant 12-15 minutes jusqu'à ce que le brun doré soit profond. Ajouter la pâte gingembre-ail et les chiles verts fendus et faire frire encore 2 minutes jusqu'à ce que l'odeur d'ail cru soit disparue. Ce brunissement patient est l'épine dorsale du plat — ne le précipitez pas.",
      "visualCue": {
        "primaryTarget": "Les oignons se sont effondrés dans une masse douce, jammy, même brun-or qui s'éloigne des côtés du pot. Huile commençant à se séparer aux bords. Pas de netteté d'ail cru dans l'odeur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont translucides ou pâles, encore humides et lâches. L'ail gingembre sent cru et piquant.",
            "action": "Continuez à cuisiner et à remuer — la couleur et la douceur ne se développent qu'avec le temps. Moins de chaleur s'ils s'attrapent inégalement."
          },
          {
            "state": "Perfect",
            "description": "Même les oignons d'or profond, jammy; l'huile se détache aux bords; un doux et moelleux arôme d'allium sans morsure crue.",
            "action": "Ajouter la purée de tomate maintenant."
          },
          {
            "state": "Overdone",
            "description": "Des taches brunes foncées à noires, une odeur amère brûlée, des morceaux secs et miettes collés au pot.",
            "action": "Baisser la chaleur et déglacer avec un jet d'eau pour soulever le fond avant qu'il ne devienne amer; si noirci, recommencer."
          }
        ]
      },
      "feelCue": "La masse devrait devenir plus lourde et plus collante sur la cuillère pendant que l'eau cuit, puis desserrer légèrement pendant que l'huile pleure, cette libération est votre signal est prêt."
    },
    {
      "nodeId": "step_3",
      "action": "Bhuno",
      "inputs": [
        "browned_masala_base",
        "ing_07",
        "ing_08"
      ],
      "outputState": "cooked_masala",
      "instructions": "Incorporer la purée de tomate et le mélange d'épices. Abaissez légèrement le feu et le bhuno (frit-stir) pendant 8-12 minutes, raclant le pot, jusqu'à ce que la tomate se décompose et les piscines d'huile et se sépare du masala. C'est l'étape la plus importante : cuisiner les épices moulues dans la graisse élimine leur goût cru et poussiéreux et construit la couleur et la profondeur du plat.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse, brillante et rouge brique qui tire proprement du fond du pot, avec des gouttelettes visibles d'huile tachetée rouge au bord et à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Loose et aqueux, rouge-tomate vif, épices odeur poussiéreuse et nette. Pas de séparation d'huile.",
            "action": "Continuez à frire à feu moyen — le masala n'est pas fait avant que l'huile se sépare. Ajouter un jet d'eau s'il colle avant qu'il soit prêt."
          },
          {
            "state": "Perfect",
            "description": "Briques rouges profondes, épaisses et brillantes, perles d'huile aux bords; les épices sentent grillées et arrondies, non crues.",
            "action": "Ajouter les pois chiches et leur eau."
          },
          {
            "state": "Overdone",
            "description": "Masala se dessèche dans un gâteau raide et sombre et commence à attraper et à brûler sur le fond.",
            "action": "Ajouter immédiatement une éclaboussure d'eau et racler le fond; continuer à ajouter des pois chiches avant qu'il ne brûle."
          }
        ]
      },
      "feelCue": "Le masala s'arrête d'éclaboussure et commence à faire un glouton bas et épais en se repliant sur lui - même — et la cuillère laisse un sentier propre à travers le fond du pot."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "cooked_masala",
        "ing_01",
        "ing_10"
      ],
      "outputState": "braised_chickpeas",
      "instructions": "Ajouter les pois chiches cuits avec suffisamment de leur liquide de cuisson (ou de l'eau) pour faire une sauce lâche — à peu près le même volume au masala. Ajouter le sel. Porter à mijoter, couvrir partiellement, et cuire 20-25 minutes, en massant une cuillère de pois chiches contre le côté pour épaissir la sauce. Les pois chiches doivent boire dans la couleur et passer de pâle à un rouge-brun chaud.",
      "visualCue": {
        "primaryTarget": "Les pois chiches ont taché un rouge-tan uniforme, suspendu dans une sauce de taille moyenne qui enrobe une cuillère. Une nappe d'huile épicée flotte sur le dessus, signe classique d'une chana bien cuite.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Gravy est mince et aqueux, pois chiches encore pâle et les saveurs ont le goût séparé, pas marié.",
            "action": "Laisser mijoter plus longtemps et écraser plus de pois chiches dans le liquide pour épaissir et lier la sauce."
          },
          {
            "state": "Perfect",
            "description": "Les pois chiches sont crémeux à l'intérieur et tachés à travers; la sauce s'accroche à la cuillère; l'huile brille à la surface et les saveurs ont un goût unifié.",
            "action": "Incorporer l'amchoor pour finir."
          },
          {
            "state": "Overdone",
            "description": "Gravy a réduit à une pâte sèche et les pois chiches se décomposent en mousse.",
            "action": "Loosen à l'eau chaude pour restaurer une consistance saucissante ; goût et rééquilibrer le sel."
          }
        ]
      },
      "feelCue": "Un pois chiche pressé contre le pot devrait donner à un centre crémeux et beurreux sans craie. La sauce devrait être accrochée à l'arrière d'une cuillère, et non pas s'enfuir tout droit."
    },
    {
      "nodeId": "step_5",
      "action": "Finition",
      "inputs": [
        "braised_chickpeas",
        "ing_09",
        "ing_11"
      ],
      "outputState": "finished_dish",
      "instructions": "Incorporer l'amchoor et laisser cuire 1-2 minutes — goût et ajustez, vous voulez un lifting tangent clair, pas une ameresse plate. Tuer la chaleur, disperser la coriandre et lécher le gingembre cru sur le dessus, et reposer 5 minutes couvert avant de servir afin que les saveurs s'installent. Servir avec du bhatura, du naan ou du riz à la vapeur.",
      "visualCue": {
        "primaryTarget": "Une chana foncée, brillante, rouge brique avec une note supérieure lumineuse d'herbe verte et des éclats de gingembre pâle. Le premier goût frappe savoureuse et chaude, puis se termine par un éclat de tarte propre de l'amchoor.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Goûte riche mais plat et unidimensionnel; la sauce est lourde en bouche sans éclat.",
            "action": "Ajouter plus d'amchoor une pincée à la fois, ou une pression de citron, jusqu'à ce que le plat goûte levé et vivant."
          },
          {
            "state": "Perfect",
            "description": "Deep, couched, et savory avec une finition amère-tangeuse distincte qui vous fait vouloir la prochaine bouchée; sel et tang en équilibre.",
            "action": "Garnir et servir chaud."
          },
          {
            "state": "Overdone",
            "description": "Agressivement, avec de l'aigrement, le tang a enterré les épices.",
            "action": "Équilibre avec une pincée de sucre et un petit bouton de ghee, et un peu plus d'eau pour le mouiller."
          }
        ]
      },
      "feelCue": "Goûtez les yeux fermés : l'arc doit passer d'épices chaudes, à la profondeur savoureuse de l'oignon tomate, à une finale de tarte qui nettoie le palais. Si elle finit lourde et terne, elle a besoin de plus d'amchoor."
    }
  ]
};
