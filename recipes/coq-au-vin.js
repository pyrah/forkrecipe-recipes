export default {
  "repoId": "master_french_coq_au_vin_001",
  "parentRepoId": null,
  "slug": "coq-au-vin",
  "author": "ForkRecipe Kitchen",
  "title": "Coq au Vin",
  "description": "La ferme classique de la vieille France — le poulet braisé lentement dans une bouteille entière de vin rouge jusqu'à ce que la viande tombe de l'os, soulevé par des lardons fumés, des oignons de perles glacés et des champignons terreux, tous liés dans une sauce profonde et foncée qui sent la cave et la forêt à la fois.",
  "cuisine": "Français",
  "culture": "Burgundian",
  "category": "proteins",
  "tags": [
    "braise",
    "français",
    "poulet",
    "Vin rouge",
    "Coq-au-vin",
    "bistrot"
  ],
  "difficulty": 3,
  "activeTime": "55 min",
  "totalTime": "2 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Poulet, désossé (jambes et cuisses, galettes sèches)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "poulet entier, jointure",
        "coqs (traditionnels)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Lardons fumés (ou bacon épais coupé en dés)",
      "ratioValue": 14,
      "defaultUnit": "parts",
      "substitutions": [
        "Pancetta"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Vin rouge sec (Pinot Noir, bouteille pleine)",
      "ratioValue": 95,
      "defaultUnit": "parts",
      "substitutions": [
        "Beaujolais",
        "tout rouge sec"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Poulet (chaud)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "Viande bovine"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Carotte, oignon et céleri (mirepoix, en dés)",
      "ratioValue": 22,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Ail (crus)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Binder",
      "name": "Farine pure",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre manié à l'arrivée"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Bouquet garni (thyme, baie, tiges de persil)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Oignons perlés et champignons boutons (émaillés dans du beurre)",
      "ratioValue": 32,
      "defaultUnit": "parts",
      "substitutions": [
        "Échalotes",
        "crémini"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel de mer & poivre noir",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rendu",
      "inputs": [
        "ing_02"
      ],
      "outputState": "rendered_lardons",
      "instructions": "Dans un four hollandais lourd à feu moyen, faire cuire les lardons dans une casserole sèche jusqu'à ce que la graisse se rende et que les dés deviennent dorés et croustillants, 6-8 minutes. Soulevez-les avec une cuillère à fente et réservez, laissant la graisse fumée rendue derrière pour faire brunir le poulet. Ne laisse pas la fumée et la brûlure.",
      "visualCue": {
        "primaryTarget": "Crisp lardons dorés assis dans une piscine peu profonde de graisse claire et légèrement ambre qui sent la fumée et le bacon.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les lardons sont pâles et moelleux, une grande partie de la graisse encore blanche et non livrée, le pot presque sec.",
            "action": "Continuez à cuisiner doucement — la graisse dont vous avez besoin pour brunir le poulet n'est pas encore sorti."
          },
          {
            "state": "Perfect",
            "description": "Crisp dés d'or, une généreuse lécherette de gras rendu, un arôme fumé propre et sans acridité.",
            "action": "Retirer les lardons et faire revenir le poulet dans la graisse."
          },
          {
            "state": "Overdone",
            "description": "Les lardons sont brun foncé et cassants; la graisse est brune et commence à fumer avec une odeur vive et brûlée.",
            "action": "Tirez le pot du feu pour refroidir un moment; si la graisse sent brûlé, essuyez-le et ajoutez un peu d'huile."
          }
        ]
      },
      "feelCue": "Écoutez un étourdissement doux et régulier — pas une crache violente. La cuisine se remplit de l'odeur de bacon, chaud et doux, jamais pointu."
    },
    {
      "nodeId": "step_2",
      "action": "Saisir",
      "inputs": [
        "rendered_lardons",
        "ing_01",
        "ing_11"
      ],
      "outputState": "browned_chicken",
      "instructions": "Augmenter le feu à moyen-élevé. Assaisonner généreusement le poulet désossé avec du sel et du poivre. Faire revenir les morceaux de la peau dans la graisse chaude sans encombrer, jusqu'à ce que la peau soit en or profond et libère proprement, environ 5 minutes, puis tourner et colorer l'autre côté. Travaillez en lots si nécessaire; encombrer la peau est pâle. Retirer le poulet et réserver avec les lardons.",
      "visualCue": {
        "primaryTarget": "La peau est brulée d'or profond et croquante, le sol en pot peint avec un fond brun collant, la viande encore crue au centre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est pâle et flasque et colle au pot; le poulet est assis dans une flaque mijotante au lieu de grincer.",
            "action": "La casserole est trop fraîche ou trop bondée. Levez la chaleur, donnez de la place aux pièces et attendez qu'elles s'étournent et relâchent avant de tourner."
          },
          {
            "state": "Perfect",
            "description": "D'or profond, la peau croustillante qui se lève proprement du pot; le fond est foncé ambre et parfumé, pas noir.",
            "action": "Réserver le poulet et adoucir les arômes dans le fond."
          },
          {
            "state": "Overdone",
            "description": "La peau est noircie et le fond du pot devient amer et noir de carbone.",
            "action": "Baissez immédiatement la chaleur. Si le fond est vraiment brûlé, déglacer avec un jet de vin et l'essuyer avant de continuer."
          }
        ]
      },
      "feelCue": "La peau doit siffler au moment où elle frappe la graisse et s'accroche au pot — cette prise est la croûte qui se forme. Quand il laisse aller tout seul, il est prêt à tourner."
    },
    {
      "nodeId": "step_3",
      "action": "Sueur",
      "inputs": [
        "browned_chicken",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "softened_base",
      "instructions": "Baisser le feu à moyen. Ajouter le mirepix dans la casserole et cuire dans la graisse de poulet jusqu'à ce qu'elle soit adoucie et légèrement caramélisée, de 8 à 10 minutes, en grattant le fond en vrac lorsque les légumes libèrent l'humidité. Incorporer l'ail et la pâte de tomate et cuire jusqu'à ce que la pâte s'assombrisse du rouge vif à la brique et sente grillé, environ 2 minutes.",
      "visualCue": {
        "primaryTarget": "Légumes doux et brillants, oignon translucide, et la pâte de tomate frit à une couleur brique rouillée qui enveloppe tout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Légumes encore fermes et pâles; la pâte de tomate est rouge vif et sent cru et vif.",
            "action": "Continuez à cuisiner et à remuer — la pâte a besoin d'agglomérer jusqu'à ce qu'elle perde son bord brut et teinté."
          },
          {
            "state": "Perfect",
            "description": "Mirepoix est doux et doré aux bords, parfumé d'ail, pâte foncée à la brique avec un arôme doux et rôti.",
            "action": "Poussière dans la farine pour construire l'épaississant."
          },
          {
            "state": "Overdone",
            "description": "Les légumes brûlent et la pâte devient noire et acride, collant dur à la casserole.",
            "action": "Tirez le feu et déglacez à la fois avec un peu de vin pour soulever le fond avant qu'il brûle amer."
          }
        ]
      },
      "feelCue": "Mélanger souvent et sentir le fond de la casserole — la cuillère doit glisser à travers les légumes adoucissants, pas patiner sur une croûte sèche et collante. L'odeur passe de l'oignon cru à l'oignon sucré et rôti."
    },
    {
      "nodeId": "step_4",
      "action": "Déglacer",
      "inputs": [
        "softened_base",
        "ing_08",
        "ing_03"
      ],
      "outputState": "wine_base",
      "instructions": "Saupoudrer la farine sur les légumes et remuer 1 à 2 minutes pour faire cuire le goût cru. Verser toute la bouteille de vin rouge, racler le plancher de pot pour dissoudre tout le fond. Portez à frémir et laissez-le réduire d'environ un tiers, 8-10 minutes — ce qui brûle l'alcool dur et concentre le vin dans une vraie base de sauce.",
      "visualCue": {
        "primaryTarget": "Le vin s'est obscurci du pourpre au grenat profond, légèrement épaissi par la farine, avec un arôme vineux propre et sans piqûre d'alcool cru.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est mince, violet pâle, et la vapeur pique votre nez avec de l'alcool cru.",
            "action": "Conservez-le à une fraiche mijotée — réduisez encore jusqu'à ce que les fumées dures s'adoucissent dans une odeur moelleuse et fruitée."
          },
          {
            "state": "Perfect",
            "description": "Diminution d'environ un tiers, grenat brillant et profond, légèrement croustillant la cuillère, sentant des fruits chauds plutôt que de l'esprit.",
            "action": "Retournez le poulet et les lardons et ajoutez le bouillon et le bouquet garni."
          },
          {
            "state": "Overdone",
            "description": "Le liquide est réduit à un sirop épais et foncé et a un goût fortement concentré, presque amer.",
            "action": "Déposez-le avec un éclaboussure du stock avant qu'il ne se resserre davantage et goûtez à la surconcentration."
          }
        ]
      },
      "feelCue": "Penchez-vous sur le pot et respirez — lorsque l'alcool piquant du nez laisse place à une chaleur douce et fruitée, le vin est prêt à porter le braise."
    },
    {
      "nodeId": "step_5",
      "action": "Braiser",
      "inputs": [
        "wine_base",
        "ing_04",
        "ing_09"
      ],
      "outputState": "braised_chicken",
      "instructions": "Retournez le poulet et les lardons dans la casserole avec tous les jus, en réglant les morceaux côté peau. Verser suffisamment de bouillon chaud pour monter le poulet et le mettre dans le bouquet garni. Porter à une mijoter nue, puis couvrir et transférer à un four à 160°C / 325°F (ou tenir la mijoteuse la plus douce de la cuisinière). Cuire 1 à 1,25 heures jusqu'à ce que la viande soit tendre à fourche et tirer de l'os.",
      "visualCue": {
        "primaryTarget": "La viande produit facilement et glisse de l'os, la sauce est riche et légèrement épaissie, et la surface tremble à peine avec la bulle paresseuse occasionnelle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande est encore ferme et s'accroche à l'os; la sauce est fine et le vin a un goût plat et non marié.",
            "action": "Couvrir et continuer à faire du braisage — encore 20-30 minutes fond le tissu conjonctif et épouse les saveurs."
          },
          {
            "state": "Perfect",
            "description": "La viande tire de l'os au bout d'une fourchette mais tient toujours ensemble; la sauce enrobe une cuillère et goûte profond et unifié.",
            "action": "Soulevez le poulet, jetez le bouquet garni et terminez la garniture et la sauce."
          },
          {
            "state": "Overdone",
            "description": "La viande est déchiquetée en fils secs et s'effondre; la sauce a cuit trop loin et est devenue salée.",
            "action": "Arrêter immédiatement la cuisson; desserrer la sauce avec un peu de bouillon et manipuler le poulet fragile en douceur."
          }
        ]
      },
      "feelCue": "Faites glisser une fourchette dans la cuisse — au point droit, la viande s'écroule comme du beurre doux, mais la pièce conserve sa forme. Gardez la mijoter à peine en mouvement; une ébullition dure sèche la viande."
    },
    {
      "nodeId": "step_6",
      "action": "Glace et finition",
      "inputs": [
        "braised_chicken",
        "ing_10",
        "ing_11"
      ],
      "outputState": "finished_coq_au_vin",
      "instructions": "Pendant que le poulet repose, faire sauter les oignons perlés et les champignons dans un peu de beurre jusqu'à ce qu'ils soient dorés et glacés. Si la sauce de cuisson est mince, lever le poulet et laisser mijoter la sauce à découvert pour réduire, en écrèment toute graisse de la surface. Repliez le poulet, les lardons, les oignons et les champignons dans la sauce, chauffez doucement et corrigez l'assaisonnement. Reposez-vous 10 minutes avant de servir.",
      "visualCue": {
        "primaryTarget": "Une sauce brillante et foncée since le poulet et les légumes, juste assez épais pour envelopper l'arrière d'une cuillère et tenir une ligne propre quand vous tirez un doigt à travers elle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est aqueuse et glisse directement de la viande; les oignons et les champignons sont pâles et fade.",
            "action": "Soulevez les solides et réduisez la sauce plus loin; colorez la garniture plus profondément avant de la replier."
          },
          {
            "state": "Perfect",
            "description": "La sauce est lustrée et légèrement sirupeuse, attachée à chaque morceau; oignons glacés et tendres, champignons dorés et salés, assaisonnement équilibrés.",
            "action": "Reposez-vous brièvement et servez-vous sur la purée de pommes de terre, les nouilles beurrées ou le pain croustillant."
          },
          {
            "state": "Overdone",
            "description": "La sauce est réduite à une glaçure collante et sursautée qui gomme la cuillère et émousse la luminosité du vin.",
            "action": "Allongez-vous avec un jet de bouillon chaud et égayer avec quelques gouttes de vin de cuisson; goûtez et rééquilibrez le sel."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère à travers la sauce — elle devrait laisser un sentier qui se ferme lentement, et non un canal sec permanent. Le plat fini sent le vin, la fumée et les champignons de la forêt tout à la fois, sans aucune note criant sur les autres."
    }
  ]
};
