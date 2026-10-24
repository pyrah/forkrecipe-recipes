export default {
  "repoId": "master_japanese_gyoza_001",
  "parentRepoId": null,
  "slug": "gyoza",
  "author": "ForkRecipe Kitchen",
  "title": "Gyoza — Porque frite et doublons",
  "description": "Des croissants de porc et de chou à la peau fine qui sont cuits à la vapeur et ensuite coulés dans une seule manœuvre ininterrompue, produisant un fond caramélisé croustillant et un haut transparent. Ils sortent de la poêle dans une feuille dramatique.",
  "cuisine": "Japonais",
  "culture": "Ousaka / Produits alimentaires de la rue à Tokyo",
  "category": "proteins",
  "tags": [
    "Japonais",
    "boulettes",
    "porc",
    "frites",
    "gyoza",
    "Produits de la rue"
  ],
  "difficulty": 3,
  "activeTime": "1 hr",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
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
      "name": "Porc haché (20 à 25 % de matières grasses)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "cuisse de poulet hachée",
        "tofu ferme (brûlé, pour végétalien)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Choux de napa, hachés finement",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Choux savoy",
        "choux pointus"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Emballages Gyoza (en rond, en magasin ou maison)",
      "ratioValue": 30,
      "defaultUnit": "pc",
      "substitutions": [
        "Enveloppes de wonton (carré, garniture à rond)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Ail, haché à la pâte",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gingembre, fraîchement râpé",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Ciboulette à l'ail (nira), tranchée finement",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "dessus d'oignon vert"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari (sans gluten)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Poivre blanc, moulu",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Huile neutre pour la friture (bron de riz)",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": [
        "huile de tournesol"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Liquid",
      "name": "Eau (pour le frittage de la vapeur)",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saison",
      "inputs": [
        "ing_02",
        "ing_09"
      ],
      "outputState": "salted_cabbage",
      "instructions": "Miser le chou de napa très finement — chaque morceau ne dépasse pas une graine de sésame. Mélanger avec la pleine mesure du sel dans un grand bol et le masser brièvement. Laissez reposer 10 minutes. Le sel tirera un volume étonnant d'eau du chou — vous voulez l'enlever, pas cuire avec. Après 10 minutes, ramassez le chou dans un chiffon propre ou votre poing et pressez avec une force réelle, en tordant jusqu'à ce qu'il n'y ait presque pas de gouttes liquides. Ne sautez pas cette étape. Le chou humide vaporisera les boulettes de l'intérieur pendant la friture, empêchant ainsi le fond de se croquer et faisant en sorte que le remplissage devienne aqueux et lâche. Le chou pressé doit se sentir presque sec, réduit à environ un tiers de son volume d'origine.",
      "visualCue": {
        "primaryTarget": "Une boule de chou comprimé pâle et dense dans votre poing. Le liquide pressé dans le bol doit être clair et légèrement verdâtre, jusqu'à 50 ml pour 150 g de chou.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le chou est encore humide et printanier. Moins de 30 ml de liquide ont été expulsés.",
            "action": "Pressez plus fort et maintenez 30 secondes. Tordre le chiffon pour augmenter la pression."
          },
          {
            "state": "Perfect",
            "description": "Un paquet serré et presque sec. Le liquide pressé est clair et substantiel. Le chou est un peu mou.",
            "action": "Transférer dans le bol et mélanger avec les autres ingrédients de remplissage."
          },
          {
            "state": "Overdone",
            "description": "Le chou a été réduit à bouillir — les parois cellulaires ont été écrasées. Liquide très foncé, brun verdâtre.",
            "action": "Procéder, mais réduire de moitié la sauce de soja ajoutée puisque les cellules brisées seront plus salées."
          }
        ]
      },
      "feelCue": "La boule pressée de chou devrait se sentir comme un tissu chamois enroulé — dense, sec et ne donnant pas d'humidité quand vous appuyez sur votre pouce. Votre main devrait sentir du chou frais et du sel."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "salted_cabbage",
        "ing_01",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_10"
      ],
      "outputState": "gyoza_filling",
      "instructions": "Mélanger le chou pressé avec le porc moulu, la pâte d'ail, le gingembre râpé, la ciboulette d'ail, la sauce soja, l'huile de sésame et le poivre blanc dans un grand bol. Mélanger en utilisant votre main (pas une cuillère) dans un seul sens — toujours dans le sens des aiguilles d'une montre ou toujours dans le sens des aiguilles d'une montre. Ce mélange directionnel aligne les protéines et construit une structure de liaison lumineuse qui aide le remplissage à rester cohérent quand mordu. Mélanger pendant 90 secondes jusqu'à ce que le remplissage soit légèrement collant et conserve sa forme lorsqu'il est pincée. Ne pas surmener ou la graisse de porc se brisera et le remplissage sera gras. Goûtez le remplissage brut — les cuisiniers japonais le goûtent cru pour étalonner l'assaisonnement. Il doit goûter assaisonné avec assurance, parce que l'emballage va diluer les saveurs. Régler la sauce de soja si nécessaire.",
      "visualCue": {
        "primaryTarget": "Une masse cohésive, rose pâle et verte. Lorsque vous prenez une pincée et appuyez entre deux doigts, il devrait tenir une crête sans s'effondrer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le remplissage est lâche et s'effondre dans la cuillère. Le porc et le chou ne sont pas intégrés.",
            "action": "Continuez à mélanger dans une direction pendant 60 secondes."
          },
          {
            "state": "Perfect",
            "description": "Sticky, cohésif, légèrement élastique. Il tient une forme de quenelle quand il scoop. Des odeurs de gingembre et de sésame.",
            "action": "Couvrir et réfrigérer 20 minutes — le refroidissement facilite l'emballage."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage est devenu pâle et pâteux. La graisse semble se séparer, laissant un éclat gras.",
            "action": "Refroidir immédiatement pendant 30 minutes. La graisse se solidifiera et le remplissage se raffermira."
          }
        ]
      },
      "feelCue": "Le remplissage fini devrait se sentir collant dans votre paume — comme de l'argile douce qui tient une forme. Pincez une petite balle et jetez-la entre vos mains : elle ne doit pas tomber en morceaux. L'huile de sésame et le gingembre doivent être clairement présents dans l'arôme."
    },
    {
      "nodeId": "step_3",
      "action": "Assemblage",
      "inputs": [
        "gyoza_filling",
        "ing_03"
      ],
      "outputState": "raw_gyoza",
      "instructions": "Travailler avec une enveloppe à la fois, en gardant les autres sous un chiffon humide. Placez un emballage sur votre palmier non dominant. Spoon 10-12 g de remplissage (à peu près une cuillère à café nivelée) dans le centre — ne pas trop remplir. Plongez votre doigt dans l'eau et mouillez toute la jante de l'emballage. Plier l'emballage en deux pour former une demi-lune, pincer le point central fermé avec le pouce et l'index. Maintenant pliez seulement le côté avant: à partir du centre, poussez la peau avant dans trois ou quatre petits plis vers la droite, puis répétez à gauche. La peau du dos doit rester lisse — cette asymétrie est ce qui crée le croissant caractéristique et assure le gyoza debout. Appuyez fermement sur chaque plis contre le dos lisse pour sceller. Placez le côté fermé vers le bas sur un plateau parcheminé. La base doit être assez plate pour s'asseoir sans trembler.",
      "visualCue": {
        "primaryTarget": "Une décharge en forme de croissant avec 6-8 plis soignés sur la face avant, un dos lisse et une base plate. Pas de poches d'air visibles. La jante est scellée sans ouverture.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des coutures ouvertes visibles aux bords ou des trous dans les plis. La boulette ne tiendra pas sa forme lorsqu'elle sera pressée.",
            "action": "Pincez l'écart fermé et pressez fermement tous les plis. Un doigt mouillé le long de la couture aide."
          },
          {
            "state": "Perfect",
            "description": "Serré, même plis. Le remplissage est visible à travers la peau translucide, mais sans pression contre elle. La base est plate et stable.",
            "action": "Placer sur le plateau et continuer avec les emballages restants."
          },
          {
            "state": "Overdone",
            "description": "L'enrouleur est étiré mince et presque transparent par surremplissement. Risque d'éclatement dans la casserole.",
            "action": "Pressez fermement les extrémités. Si une couture s'ouvre, patchez-la avec un petit morceau d'enveloppe humide."
          }
        ]
      },
      "feelCue": "Un gyoza bien scellé se sent ferme dans les doigts — aucun air ne se déplace à l'intérieur lorsque vous pressez doucement. Les plis doivent être fortement stratifiés, non gonflés ni spongieux. Les gyoza fraîchement fabriqués ont une faible odeur de farine crue et de sésame."
    },
    {
      "nodeId": "step_4",
      "action": "Sear",
      "inputs": [
        "raw_gyoza",
        "ing_11",
        "ing_12"
      ],
      "outputState": "finished_gyoza",
      "instructions": "Chauffer une poêle antiadhésive à fond plat ou en acier au carbone sur une hauteur moyenne jusqu'à ce qu'une goutte d'eau saute et s'évapore instantanément. Ajouter l'huile neutre et le tourbillon pour enrober. Travaillez rapidement, arrangez le gyoza côté plat en rangs concentriques serrés ou en une seule couche — ils peuvent toucher. Faire frire pendant 90 secondes jusqu'à ce que les fonds soient dorés. Maintenant versez dans l'eau tout d'un coup: il criera et va vapeur violemment. Couvrir immédiatement avec un couvercle serré. La vapeur fera cuire le dessus et remplira l'intérieur. Faire frire la vapeur de 5 à 6 minutes jusqu'à ce que l'eau s'évapore complètement — vous entendrez passer d'un sifflement humide à un craquage sec. Retirer le couvercle et faire frire 1 à 2 minutes de plus jusqu'à ce que les fonds soient en ambre profond et que la peau s'éloigne légèrement de la poêle. Arroser quelques gouttes d'huile de sésame sur le bord si désiré. Inverser sur une plaque en un seul mouvement de sorte que les bases dorées se font face.",
      "visualCue": {
        "primaryTarget": "Bases ambrées profondes avec une surface laquée et croquante. Les dessus sont semi-translucides, lisses et tendres. Les peaux auraient dû s'éloigner des côtés de la poêle, ce qui indique leur libération.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Bases en or pâle ou blonde. L'eau peut encore être présente dans la casserole. Les peaux sont opaques plutôt que translucides.",
            "action": "Remplacer le couvercle et continuer à vapeur jusqu'à ce que toute l'eau s'évapore, puis faire frire une autre minute avec le couvercle."
          },
          {
            "state": "Perfect",
            "description": "Les bases sont caramel-ambre profond avec une surface vitreuse et crépitante. Les hauts sont brillants et translucides. La poêle siffle quand le couvercle s'éteint.",
            "action": "Inverser immédiatement sur une assiette. Servir avec la sauce à tremper dans les 2 minutes."
          },
          {
            "state": "Overdone",
            "description": "Les bases sont brun foncé bordant le noir. Une odeur amère d'amidon brûlé. Les peaux sont cireuses sur le dessus.",
            "action": "Servir immédiatement — le remplissage peut encore être bon. Prochain lot : réduire la friture post-steam à 45 secondes."
          }
        ]
      },
      "feelCue": "Lorsque vous tentez de glisser une spatule sous le gyoza à la marque de 2 minutes après l'évaporation de l'eau, ils doivent se libérer proprement avec la résistance la plus faible — comme si vous laissiez partir. S'ils s'accrochent et se déchirent, la croûte n'est pas encore formée. Attendez encore 30 secondes. La cuisine sent l'amidon caramélisé et le sésame."
    }
  ]
};
