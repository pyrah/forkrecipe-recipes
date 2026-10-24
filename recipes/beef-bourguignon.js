export default {
  "repoId": "master_french_beef_bourguignon_001",
  "parentRepoId": null,
  "slug": "beef-bourguignon",
  "author": "ForkRecipe Kitchen",
  "title": "Boeuf Bourguignon",
  "description": "Le braise du grand dimanche de Bourgogne — le bœuf ragoûté lentement dans une bouteille entière de rouge jusqu'à ce que la viande se rende à la fourchette et au vin, approfondi par des lardons et une forêt de champignons, réduit à une sauce acajou brillante qui s'accroche à chaque cuillère.",
  "cuisine": "Français",
  "culture": "Burgundian",
  "category": "proteins",
  "tags": [
    "braise",
    "français",
    "boeuf",
    "Vin rouge",
    "bourgignon",
    "ragoût"
  ],
  "difficulty": 3,
  "activeTime": "1 hr",
  "totalTime": "3 hr 30 min",
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
    "sour": 2,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Bouchée de boeuf (découpée en cubes de 5 cm, désossée)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Shin de bœuf",
        "steak à lame"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Lardons fumés (ou bacon épais coupé en dés)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "Pancetta"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Jeune Bourgogne rouge (Pinot Noir, bouteille pleine)",
      "ratioValue": 90,
      "defaultUnit": "parts",
      "substitutions": [
        "Côtes du Rhône",
        "tout rouge sec"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Viande bovine (chaud)",
      "ratioValue": 35,
      "defaultUnit": "parts",
      "substitutions": [
        "bouillon de poulet"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Carotte, oignon et céleri (mirepoix, en dés)",
      "ratioValue": 25,
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
      "role": "Starch",
      "name": "Pâte de tomates",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Binder",
      "name": "Farine pure",
      "ratioValue": 4,
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
      "name": "Oignons perlés et champignons à boutons (émaillés)",
      "ratioValue": 30,
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
      "instructions": "Dans un four hollandais lourd à feu moyen, cuire les lardons dans une casserole sèche jusqu'à ce que la graisse rende et que les dés deviennent dorés et croustillants, 6-8 minutes. Soulevez-les avec une cuillère à fente et réservez, laissant la graisse rendue derrière pour saisir le boeuf. Ne laissez pas la fumée grasse et la brûlure.",
      "visualCue": {
        "primaryTarget": "Les lardons sont d'or profond et croustillants aux bords, assis dans une piscine peu profonde de graisse claire et légèrement ambre qui sent la fumée et le bacon.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les lardons sont pâles et molles, une grande partie de la graisse encore blanche et non livrée. La casserole est presque sèche.",
            "action": "Continuez à cuisiner doucement — la graisse dont vous avez besoin pour le merling n'est pas encore sortie."
          },
          {
            "state": "Perfect",
            "description": "Crisp dés d'or, une généreuse lécherette de gras rendu, un arôme fumé propre et sans acridité.",
            "action": "Enlevez les lardons et entrez le bœuf dans la graisse."
          },
          {
            "state": "Overdone",
            "description": "Les lardons sont brun foncé et cassants; la graisse est brune et commence à fumer avec une odeur vive et brûlée.",
            "action": "Tirez le pot du feu et laissez refroidir un moment; si la graisse sent brûlée, essuyez-le et ajoutez un peu d'huile."
          }
        ]
      },
      "feelCue": "Écoutez un étourdissement doux et régulier — pas une crache violente. La cuisine doit remplir de l'odeur de bacon, chaud et doux, jamais pointu ou brûlé."
    },
    {
      "nodeId": "step_2",
      "action": "Sear",
      "inputs": [
        "rendered_lardons",
        "ing_01",
        "ing_11"
      ],
      "outputState": "seared_beef",
      "instructions": "Augmenter le feu à moyen-élevé. Assaisonner généreusement les cubes de boeuf désossé avec du sel et du poivre. Placez-les en petits lots dans la graisse chaude, laissant de l'espace entre les morceaux, jusqu'à ce que chaque visage soit une croûte brune profonde — environ 2 minutes par côté. Crowding vaporise le gris de la viande; la patience construit l'affection. Retirer le boeuf et le réserver avec les lardons.",
      "visualCue": {
        "primaryTarget": "Chaque cube porte une croûte acajou foncée sur au moins trois visages, et le fond du pot est peint avec un fond brun collant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande est grise et liquide qui pleure; elle est assise dans une flaque mijotante au lieu de grincer. Pas de croûte.",
            "action": "La poêle est trop fraîche ou trop bondée. Enlevez quelques morceaux, levez le feu et attendez qu'ils grésillent fort avant de retourner."
          },
          {
            "state": "Perfect",
            "description": "Croûte brun foncé, presque brûlée; la viande libère proprement du pot lorsqu'elle est bouchée. Le Fonds est ambre foncé, pas noir.",
            "action": "Réserver le bœuf et adoucir les arômes dans le fond."
          },
          {
            "state": "Overdone",
            "description": "La croûte est noircie et le fond du pot devient amer et noir de carbone.",
            "action": "Baissez immédiatement la chaleur. Si le fond est vraiment brûlé, déglacer avec un jet de vin et l'essuyer avant de continuer."
          }
        ]
      },
      "feelCue": "La viande doit siffler agressivement au moment où elle frappe la graisse et résiste quand vous essayez de la soulever — cette résistance est la croûte qui se forme. Quand il laisse aller seul, il est prêt à tourner."
    },
    {
      "nodeId": "step_3",
      "action": "Sueur",
      "inputs": [
        "seared_beef",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "softened_base",
      "instructions": "Baisser le feu à moyen. Ajouter le mirepoïx dans la casserole et cuire dans la graisse de boeuf jusqu'à ce qu'elle soit adoucie et légèrement caramélisée, 8-10 minutes, en grattant le fond lâche alors que les légumes libèrent l'humidité. Incorporer l'ail et la pâte de tomate et cuire jusqu'à ce que la pâte s'assombrisse du rouge vif à la brique et sente grillé, environ 2 minutes.",
      "visualCue": {
        "primaryTarget": "Les légumes sont doux et brillants, l'oignon translucide, et la pâte de tomate a frit à une couleur de brique rouillée qui enveloppe tout.",
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
      "feelCue": "Mélanger souvent et sentir le fond de la casserole — la cuillère doit glisser à travers les légumes adoucissants, pas patiner sur une croûte sèche et collante. L'arôme passe de l'oignon cru à l'oignon sucré et rôti."
    },
    {
      "nodeId": "step_4",
      "action": "Déglacement",
      "inputs": [
        "softened_base",
        "ing_08",
        "ing_03"
      ],
      "outputState": "wine_base",
      "instructions": "Saupoudrer la farine sur les légumes et remuer 1 à 2 minutes pour faire cuire le goût cru. Verser toute la bouteille de vin rouge, racler le plancher de pot pour dissoudre tout le fond. Portez à frémir et laissez-le réduire d'environ un tiers, 8-10 minutes — ce qui brûle l'alcool dur et concentre le vin dans une vraie base de sauce.",
      "visualCue": {
        "primaryTarget": "Le vin s'est foncé du pourpre au grenat profond, réduit et légèrement épaissi par la farine, avec un arôme vineux propre et pas de piqûre d'alcool cru.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est mince, violet pâle, et la vapeur pique votre nez avec de l'alcool cru.",
            "action": "Conservez-le à une fraiche mijotée — réduisez encore jusqu'à ce que les fumées dures s'adoucissent dans une odeur moelleuse et fruitée."
          },
          {
            "state": "Perfect",
            "description": "Diminution d'environ un tiers, grenat brillant et profond, légèrement croustillant la cuillère, sentant des fruits chauds plutôt que de l'esprit.",
            "action": "Retournez le boeuf et les lardons et ajoutez le stock et le bouquet garni."
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
      "action": "Brise",
      "inputs": [
        "wine_base",
        "ing_04",
        "ing_09"
      ],
      "outputState": "braised_stew",
      "instructions": "Retournez le boeuf et les lardons dans la casserole avec les jus. Verser suffisamment de bouillon chaud pour presque recouvrir la viande et mettre dans le bouquet garni. Porter à une mijotée nue, puis couvrir et transférer à un four 150°C / 300°F (ou tenir la mijotée la plus douce de la cuisinière). Cuire de 2,5 à 3 heures jusqu'à ce que le boeuf soit tendre à la fourchette, en retournant la viande à mi-chemin.",
      "visualCue": {
        "primaryTarget": "Le boeuf produit une pression de fourche tout à fait douce, la sauce est riche et légèrement épaissie, et la surface tremble à peine avec la bulle paresseuse occasionnelle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande est encore ferme et ressort contre la fourchette; la sauce est fine et le goût du vin est plat et non marié.",
            "action": "Couvrir et continuer à braiser — le collagène fond lentement, et un autre 30-45 minutes transforme la texture."
          },
          {
            "state": "Perfect",
            "description": "Le boeuf se sépare au bout d'une fourchette mais conserve sa forme ; la sauce enrobe une cuillère et goûte profondément et unie.",
            "action": "Soulevez la viande, jetez la garniture de bouquet et terminez la garniture et la sauce."
          },
          {
            "state": "Overdone",
            "description": "La viande est déchiquetée en fils secs et cordes et la sauce a cuit trop loin et est devenue salée.",
            "action": "Arrêter immédiatement la cuisson; desserrer la sauce avec un peu de bouillon ou d'eau et manipuler délicatement le bœuf fragile."
          }
        ]
      },
      "feelCue": "Glissez une fourchette dans un cube — au bon endroit, elle va comme du beurre doux et la viande s'effondre, mais la pièce tient toujours ensemble. Gardez la mijoter à peine en mouvement ; un ébullition dur durcit le boeuf."
    },
    {
      "nodeId": "step_6",
      "action": "Glace et finition",
      "inputs": [
        "braised_stew",
        "ing_10",
        "ing_11"
      ],
      "outputState": "finished_bourguignon",
      "instructions": "Pendant que le bœuf repose, faire sauter les oignons perlés et les champignons dans un peu de beurre jusqu'à ce qu'ils soient dorés et glacés. Si la sauce de cuisson est mince, laisser mijoter à découvert pour réduire, en écrémant toute graisse de la surface. Repliez le boeuf, les lardons, les oignons et les champignons dans la sauce, réchauffez doucement et corrigez l'assaisonnement. Reposez-vous 10 minutes avant de servir.",
      "visualCue": {
        "primaryTarget": "Une sauce acajou brillante since la viande et les légumes, juste assez épais pour enrober l'arrière d'une cuillère et tenir une ligne propre lorsque vous tirez un doigt à travers elle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est aqueuse et glisse directement de la viande; les oignons et les champignons sont pâles et fade.",
            "action": "Soulevez les solides et réduisez la sauce plus loin; colorez la garniture plus profondément avant de la replier."
          },
          {
            "state": "Perfect",
            "description": "La sauce est lustrée et légèrement sirupeuse, attachée à chaque morceau; les oignons sont glacés et tendres, les champignons dorés et salés, assaisonnement équilibrés.",
            "action": "Reposez-vous brièvement et servez-vous sur la purée de pommes de terre, les nouilles beurrées ou le pain croustillant."
          },
          {
            "state": "Overdone",
            "description": "La sauce est réduite à une glaçure collante et sursautée qui gomme la cuillère et émousse la luminosité du vin.",
            "action": "Allongez-vous avec un bouillon chaud ou de l'eau et illuminez avec quelques gouttes du vin de cuisson; goûtez et rééquilibrez le sel."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère à travers la sauce — elle devrait laisser un sentier qui se ferme lentement, et non un canal sec permanent. Le plat fini sent le vin, la fumée et la viande rôtie tout à la fois, sans aucune note criant sur les autres."
    }
  ]
};
