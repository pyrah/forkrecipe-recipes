export default {
  "repoId": "master_french_searedscallops_001",
  "parentRepoId": null,
  "slug": "seared-scallops",
  "author": "ForkRecipe Kitchen",
  "title": "Balcons pan-sacrés avec Beurre Noisette",
  "description": "Les pétoncles de mer sablés à sec s'insèrent dans une poêle chaude jusqu'à ce que la face inférieure soit acajoue et caramélisée, puis baignées de beurre brun noisette avec des câpres jusqu'à ce qu'elles soient parfumées et juste mises translucides au centre.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "seafood",
  "tags": [
    "pétoncles",
    "en mer",
    "bruit de beurre",
    "français",
    "Produits de la mer",
    "sauce à la casserole"
  ],
  "difficulty": 3,
  "activeTime": "20 min",
  "totalTime": "35 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Boutons de mer emballés à sec (U10, muscle adducteur enlevé)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "pétoncles plongeurs"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile neutre à haut point de fumée (grape graine, avocat)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé, froid, cubes",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Câpres salines, rincées et séchées",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "baies de câpres, coupées en deux"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Citrus",
      "name": "Jus de citron frais",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Persil à feuilles plates, haché finement",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "ciboulette, tranchée finement"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel de mer (pour finissage)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Maldon"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Cure",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "dry_brined_scallops",
      "instructions": "Cette étape est le fondement non négociable d'un pétoncle bien taillé. Placez les pétoncles sur une grille en fil sur un plateau de cuisson. Assaisonner chacun légèrement sur les deux faces plates avec du sel de mer fin. Réfrigérer à découvert pendant au moins 20 minutes, jusqu'à 1 heure. Le sel attire l'humidité à la surface par osmose, qui s'évapore ensuite dans le froid, l'air circulant du réfrigérateur, laissant la surface du pétoncle parfaitement sèche. Une surface de pétoncle humide va s'évaporer dans la casserole plutôt que de semer; l'eau doit clignoter à la vapeur avant que tout brunissement puisse commencer, abaissant ainsi la température effective de la surface sous le seuil de Maillard. Les pétoncles « emballés à sec » (jamais traités au tripolyphosphate de sodium) sont essentiels — les pétoncles emballés à l'état humide ont déjà été trempés dans une solution de phosphate qui empêche tout brunissement.",
      "visualCue": {
        "primaryTarget": "La surface de chaque pétoncle a l'air mate et légèrement collante, non brillante ni humide, non pulvérisée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pétoncles sont encore visiblement humides et brillants après le salage — pas assez de temps ou pas assez froid.",
            "action": "Sèchez-la avec des serviettes en papier et retournez au réfrigérateur pendant 15 minutes."
          },
          {
            "state": "Perfect",
            "description": "La surface a l'air légèrement gelée, mate et tachée lorsqu'elle est touchée.",
            "action": "Retirer du réfrigérateur 5 minutes avant la mise en mer pour enlever le refroidissement de la surface."
          },
          {
            "state": "Overdone",
            "description": "Plus d'une heure au réfrigérateur — les pétoncles ont légèrement raidi et perdu une partie de leur délicate qualité translucide.",
            "action": "Continuez immédiatement. Ils vont encore semer magnifiquement; le remède est très pardonnant jusqu'à 1,5 heure."
          }
        ]
      },
      "feelCue": "Un pétoncle bien satiné se sent téméraire lorsqu'il est pressé légèrement — comme la surface d'une note Post-it — pas lissé, pas poudreux. Cette collance est la matrice protéique qui se liera à la casserole et se libérera proprement une fois la croûte formée."
    },
    {
      "nodeId": "step_2",
      "action": "Sear",
      "inputs": [
        "dry_brined_scallops",
        "ing_03"
      ],
      "outputState": "seared_scallops",
      "instructions": "Chauffer une poêle lourde en fonte ou en acier inoxydable sur la chaleur la plus élevée pendant au moins 3 minutes — la poêle doit être soigneusement préchauffée, pas seulement chaude. Ajouter l'huile neutre; elle devrait commencer immédiatement à briller et à murmurer. Déposer les pétoncles à plat, les espacer d'au moins 3 cm. Vous devez entendre un étourdissement fort et agressif au moment où ils entrent en contact avec la casserole — si vous ne le faites pas, la poêle n'est pas assez chaude. Ne pas toucher, agiter ou déplacer les pétoncles pendant 90 secondes. Résistez à chaque envie de regarder en dessous. Après 90 secondes, essayez doucement de glisser une spatule mince sous un pétoncle : si elle libère proprement, la croûte s'est formée. Si elle résiste, attendez encore 15 secondes. Flip chaque pétoncle. La couture doit révéler une croûte uniforme, brun acajou, sur toute la face plane — pas épilée, pas pâle au centre.",
      "visualCue": {
        "primaryTarget": "Une croûte acajou-brun profonde et uniforme sur toute la face plane. Les côtés du pétoncle auraient dû passer de translucide à blanc opaque à mi-haut.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le visage plat est d'or pâle ou blond, avec des taches de translucide rose où le pétoncle était courbé. La croûte Maillard est incomplète.",
            "action": "Ne retournez pas. Donnez-lui 30 secondes de plus de contact non perturbé avec la poêle chaude."
          },
          {
            "state": "Perfect",
            "description": "Uniforme acajou profond sur le visage plat entier, croustillant au toucher. Les côtés montrent une bande opaque blanche atteignant la moitié vers le haut. Arôme sucré caramel.",
            "action": "Dépliez et procédez immédiatement à la bourde sonore — le deuxième côté n'a besoin que de 30 à 45 secondes."
          },
          {
            "state": "Overdone",
            "description": "Vergure brun foncé sur noir. Le scallop s'est considérablement rétréci et se sent ferme même au sommet.",
            "action": "Retirer immédiatement de la casserole. La croûte sera amère; l'intérieur peut encore être cuit correctement. Trim et servir."
          }
        ]
      },
      "feelCue": "Appuyez légèrement sur le dessus d'un pétoncle (côté non ciré) avec le doigt pendant qu'il cuit sur le premier côté — il devrait se sentir complètement doux et cru, comme presser une crevette crue. Cette douceur est votre contrôle : une fois les meilleures entreprises légèrement, l'intérieur est presque à la température."
    },
    {
      "nodeId": "step_3",
      "action": "Monter",
      "inputs": [
        "seared_scallops",
        "ing_04",
        "ing_05"
      ],
      "outputState": "basted_scallops",
      "instructions": "Après avoir retourné les pétoncles, ajouter immédiatement le beurre glacé dans la poêle. Le beurre froid qui frappe la poêle chaude va éclater avec de la mousse étourdissante. Dès que la mousse s'abaisse et que le beurre commence à devenir doré (cela prend environ 45-60 secondes), vous verrez qu'il passe à une couleur ambre et sent un arôme de noisette distinct — c'est le bruit de beurre (beurre brun): les protéines du lait dans le beurre sont caramélisantes. Ajouter les câpres rincées. À l'aide d'une grande cuillère, commencez immédiatement à baser les pétoncles en inclinant légèrement la poêle vers vous et en cuillant le beurre brun chaud parfumé à la noisette sur chaque pétoncle en continu. Baste pendant 30 à 45 secondes. Temps total de contact de seconde face (y compris le basting): 60-75 secondes. Les pétoncles se font lorsqu'ils se sentent encore légèrement doux et qu'ils donnent au centre même lorsqu'ils sont pressés.",
      "visualCue": {
        "primaryTarget": "Beurre mousseux d'or ambré avec de petits flocons de lait brun, câpres grimpant et sautant dans la graisse, pétoncles scintillants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est encore pâle et mousseux, pas encore bruyant. Les pétoncles ne sont pas encore basculés.",
            "action": "Attendez que le beurre se déplace vers l'ambre avant de commencer à se baste."
          },
          {
            "state": "Perfect",
            "description": "Le beurre est une ambre claire avec des taches foncées de protéines de lait grillées, sentant intensément les noisettes. Les câpres sont dorées et commencent à s'ouvrir. Les pétoncles brillent.",
            "action": "Retirer la poêle du feu et presser immédiatement le citron pour arrêter le brunissement du beurre."
          },
          {
            "state": "Overdone",
            "description": "Le beurre est passé de la noisette au brun foncé et sent le pop-corn ou légèrement brûlé: le beurre noir. Amère.",
            "action": "Verser le beurre immédiatement et ajouter le beurre frais dans la poêle. La chaleur résiduelle de la poêle va la brûler en quelques secondes."
          }
        ]
      },
      "feelCue": "Appuyez sur le centre même du sommet d'un pétoncle pendant le basting — il devrait sentir comme appuyer sur une guimauve ferme: donner mais avec une résistance à la lumière. Une fois qu'il a l'impression d'appuyer sur une gomme ferme, il est trop cuit."
    },
    {
      "nodeId": "step_4",
      "action": "Finition",
      "inputs": [
        "basted_scallops",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_scallops",
      "instructions": "Retirez les pétoncles de la poêle et arrangez-les sur des assiettes chaudes, côté croûte-mer. Presser le jus de citron dans le reste du beurre brun dans la poêle, en tourbillonnant pour le combiner — l'acide empêchera le beurre de brunir davantage et soulèvera la poêle dans une sauce à casserole rapide. Déposer généreusement sur chaque pétoncle cette sauce au beurre et au citron-caper brun. Épargnez le persil à feuilles plates finement haché et terminez par une pincée de sel de mer sur le visage marin de chaque pétoncle. Servir en 60 secondes — les pétoncles refroidissent rapidement et la fenêtre de texture parfaitement cuite et centrée sur le translucide est brève.",
      "visualCue": {
        "primaryTarget": "Des pétoncles sur une piscine de beurre ambre, des câpres dorés et du persil vert vif. La face de mer doit être visible et dégagée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre du pétoncle est encore froid et cru lorsqu'il est mordu — l'intérieur pâle est vitreux et raide, pas seulement légèrement translucide.",
            "action": "Retournez dans la poêle chaude pendant 15 secondes de chaque côté. C'est rare: un seau bien exécuté suffit presque toujours."
          },
          {
            "state": "Perfect",
            "description": "Faces de mer acajou-brun, l'intérieur quand la coupe révèle un centre qui est à peine translucide et blanc perle, productif et savoureux. La sauce au beurre brun est ambre, noisette et brillante avec du citron.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "L'intérieur est entièrement blanc et opaque. La texture est ferme, légèrement caoutchouteuse. Le pétoncle a perdu sa douceur inhérente.",
            "action": "Servir immédiatement — le beurre brun et les câpres compenseront avec richesse et acidité. Coupez le temps sur la prochaine ronde."
          }
        ]
      },
      "feelCue": "Le pétoncle marin idéal résiste comme un raisin ferme à la croûte d'acajou, puis se déplace en un millimètre lent vers l'intérieur lustré et à peine fixé – vous sentez les deux textures en une seule bouchée."
    }
  ]
};
