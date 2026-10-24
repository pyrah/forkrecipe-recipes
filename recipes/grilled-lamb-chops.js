export default {
  "repoId": "master_mediterranean_grilled_lamb_chops_001",
  "parentRepoId": null,
  "slug": "grilled-lamb-chops",
  "author": "ForkRecipe Kitchen",
  "title": "Chopes d'agneau grillées",
  "description": "Des côtelettes de longe d'agneau marinées au romarin marinées à feu vif au centre du rosé et au périmètre carbonisé, sculptées et servies dans une piscine de leurs propres jus de repos.",
  "cuisine": "Méditerranée",
  "culture": "Méditerranée",
  "category": "proteins",
  "tags": [
    "agneau",
    "grillé",
    "méditerranéen",
    "herbe",
    "Sans gluten",
    "Vite"
  ],
  "difficulty": 3,
  "activeTime": "20 min",
  "totalTime": "2 hr 30 min",
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
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Côtelettes de longe d'agneau (2–3 cm d'épaisseur, à la française)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "côtelettes d'agneau",
        "côtelettes d'agneau"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "huile d'avocat"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles d'ail, cassées et pelées",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Graines de romarin fraîches",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Thym frais",
        "Origan frais"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Marjoram frais"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Citrus",
      "name": "Zeste de citron",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "zeste d'orange"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin rouge"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "fleur de sel"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Poivre noir fraichement craqué",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Feuilles fraîches de menthe, déchirées",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "marinated_lamb",
      "instructions": "Mélanger l'huile d'olive, l'ail cassé, le romarin, le thym, le zeste de citron et le jus de citron dans un plat peu profond ou un sac à fermeture éclair. Ajouter les côtelettes d'agneau et tourner pour enrober chaque surface. L'huile d'olive transporte les composés aromatiques du romarin et de l'ail dans la viande; le jus de citron tendre les protéines de surface et illumine le goût fini. Faire mariner à température ambiante pendant 1 à 2 heures ou réfrigéré pendant 8 heures. Si elle est réfrigérée, porter à température ambiante pendant 30 minutes avant le grillage.",
      "visualCue": {
        "primaryTarget": "Chaque côte est bien recouverte d'huile d'olive et éparpillée de paillettes d'herbes et de zeste de citron. L'huile a pris une faible teinte verte du romarin. La viande a l'air brillante, pas mise en marinade.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les copeaux sont à peine enduits — l'huile glisse, les herbes n'ont pas adhéré, et la viande semble sèche dans les taches.",
            "action": "Jeter plus soigneusement et presser les herbes contre la surface. Un sac zippé assure un contact complet avec la marinade minimale."
          },
          {
            "state": "Perfect",
            "description": "Chaque surface brille avec de l'huile d'herbe; l'ail et le romarin sont visiblement encastrés. L'huile sent l'odeur parfumée des aromatiques qui libèrent leurs huiles.",
            "action": "Laisser mariner à temps plein et retirer de la marinade avant de griller, essuyant les herbes excédentaires pour éviter la combustion."
          },
          {
            "state": "Overdone",
            "description": "Les chopes ont mariné plus de 12 heures; les surfaces ont l'air pâle et légèrement musclées où l'acide citron a commencé à dénaturé les protéines.",
            "action": "Faites-les cuire comme si — la saveur est encore bonne, mais ils peuvent ne pas se développer comme une croûte forte. Pat sécher agressivement avant de griller."
          }
        ]
      },
      "feelCue": "Appuyez sur la côte brute dans le sac : la viande doit se sentir dense et revenir fermement. Après avoir mariné, il se sentira légèrement plus doux à la surface même — un signe que la marinade a pénétré."
    },
    {
      "nodeId": "step_2",
      "action": "Grille",
      "inputs": [
        "marinated_lamb"
      ],
      "outputState": "grilled_lamb_chops",
      "instructions": "Préparez un grill à charbon ou à gaz très chaud — vous voulez une chaleur directe élevée qui s'accumule immédiatement au contact, pas une chaleur moyenne qui sèche. Essuyer l'excès de marinade et les herbes des côtelettes avec des serviettes en papier (herbes humides et huile causent des éruptions et de l'omble amer). Assaisonner généreusement avec du sel casher des deux côtés immédiatement avant de griller. Faire griller les côtes de 2 à 3 minutes de chaque côté pour obtenir des rares moyens — ne pas les déplacer de chaque côté. Utilisez des pinces pour saisir le bouchon de graisse le long du bord pendant 1 minute. Pour les côtelettes de 2 cm, le temps total de grillage est de 5 à 7 minutes; pour 3 cm, 7 à 9 minutes. La température interne doit être de 57 à 60 °C / 135 à 140 °F pour les rares moyens.",
      "visualCue": {
        "primaryTarget": "Marques d'omble de crosshatch gras sur les deux visages, le bouchon gras croustillé et ambre. Les côtés montrent une bande cuite de 60 à 70 % à travers l'épaisseur. La couleur interne est un rose vif tout au long de la coupe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les marques du gril sont pâles, l'extérieur est doux et collant. L'intérieur coupé est rouge et frais au centre.",
            "action": "Retourner à la grille pendant 60 à 90 secondes de chaque côté. L'agneau est sans danger à manger à de rares endroits, mais la texture s'améliore à moyenne-rare."
          },
          {
            "state": "Perfect",
            "description": "Des marques de char gras avec une faible lueur orange entre eux. L'intérieur lit 57-60°C. Le bouchon est ambré et partiellement rendu. La viande ressort fermement lorsqu'elle est pressée.",
            "action": "Retirez sur un support sur une plaque et tentez en toute liberté avec du papier. Reposez-vous pendant 5 minutes minimum."
          },
          {
            "state": "Overdone",
            "description": "L'intérieur est uniformément gris-brun lorsqu'il est coupé, se lit au-dessus de 68°C. La viande a resserré et exsudé les jus visiblement pendant la cuisson. Le gras peut être brûlé.",
            "action": "Couper immédiatement et servir avec de la sauce supplémentaire — l'agneau sec bénéficie d'une bonne quantité d'acide et de graisse à côté."
          }
        ]
      },
      "feelCue": "Appuyez sur le centre d'une côte avec votre bout de doigt: l'agneau moyen-rare devrait repousser avec une résistance modérée, comme appuyer sur la base de votre pouce lorsque votre main est détendue. La surface doit étourdir, pas la vapeur."
    },
    {
      "nodeId": "step_3",
      "action": "Repos",
      "inputs": [
        "grilled_lamb_chops"
      ],
      "outputState": "rested_lamb_chops",
      "instructions": "Transférer les côtelettes sur un rack placé sur une plaque et la tente lâchement avec de la feuille — non étanche, qui piège la vapeur et adoucit la croûte. Reposez-vous 5 minutes par 2 cm d'épaisseur. Pendant le repos, les fibres musculaires se détendent et les jus se redistribuent du centre vers l'extérieur ; la coupe trop tôt les envoie inonder sur la planche. La température interne augmentera de 2 à 3 °C pendant le repos après la cuisson.",
      "visualCue": {
        "primaryTarget": "La tente en feuilles semble humide à l'intérieur d'échapper à la vapeur. La plaque ci-dessous recueille 1 à 2 cuillères à soupe de jus de repos rose-ambre. La viande semble légèrement plus uniforme lorsqu'elle est coupée après le repos contre immédiatement après le grillage.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Temps de repos sous 3 minutes — la viande libère une ruée de jus rouges quand coupé et l'intérieur est encore très chaud au centre.",
            "action": "Laissez le reste entier. La patience est la différence entre le bon agneau et le grand agneau."
          },
          {
            "state": "Perfect",
            "description": "Les jus de repos recueillis sur l'assiette sont de couleur rose-ambre claire, pas rouge sanglant. La coupe révèle maintenant un intérieur uniforme rose-rose sans point chaud au centre.",
            "action": "Recueillir les jus de repos à la cuillère sur les côtelettes plaquées."
          },
          {
            "state": "Overdone",
            "description": "Le repos est trop long — plus de 15 minutes — et les côtelettes se sont refroidies de façon significative. La croûte s'est ramollie.",
            "action": "Faites clignoter les côtelettes sur la grille pendant 30 secondes par côté pour réchauffer la croûte. Servir immédiatement."
          }
        ]
      },
      "feelCue": "Ramassez une côte après le repos : elle doit se sentir lourde et dense, pas serrée. Pressez - le — il donne plus que sur la grille et les jus ne ressortent pas à la surface."
    },
    {
      "nodeId": "step_4",
      "action": "Plaque",
      "inputs": [
        "rested_lamb_chops",
        "ing_10"
      ],
      "outputState": "finished_lamb_chops",
      "instructions": "Disposer les côtelettes sur des plaques chaudes, s'appuyer l'une contre l'autre ou verticalement pour que les faces carbonisées et la couleur intérieure soient visibles. Couchez les jus de repos sur eux — ne gaspillez pas une goutte. Éparpiller les feuilles de menthe fraîche déchirées. Servir avec du pain plat grillé, du tzatziki ou une simple salade de tomates et d'herbes.",
      "visualCue": {
        "primaryTarget": "Marques d'omble gras, jus de repos brillants, intérieur rose vif visible à l'os. Feuilles de menthe vert vif et frais contre la croûte brune.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'assiette est froide et les jus de repos ont congelé.",
            "action": "Chauffer les assiettes dans un four à 80°C / 175°F pendant 5 minutes avant de les déposer. Toujours déposer sur les surfaces chaudes."
          },
          {
            "state": "Perfect",
            "description": "Plaque chaude, côtelettes scintillantes, garniture lumineuse. L'arôme d'omble, de romarin et de graisse d'agneau remplit les environs immédiats.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les croûtes ont été laissées trop longtemps plaquées, les jus sont épuisés et la croûte est molle.",
            "action": "Acceptez la perte et servez de toute façon. La prochaine fois : déposer et servir dans les 2 minutes suivant le repos."
          }
        ]
      },
      "feelCue": "L'os doit se sentir chaud dans les doigts mais ne pas les brûler. Soulevez une côte par l'os — il doit se sentir substantiel et lourd, pas léger et creux."
    }
  ]
};
