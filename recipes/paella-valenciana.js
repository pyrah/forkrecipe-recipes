export default {
  "repoId": "master_spanish_paella_valenciana_001",
  "parentRepoId": null,
  "slug": "paella-valenciana",
  "author": "ForkRecipe Kitchen",
  "title": "Paella Valenciana",
  "description": "La paella originale — poulet, lapin, haricots verts et haricots blancs cuits dans du riz doré safran au-dessus d'un feu ouvert ou d'un brûleur à gaz dans une large poêle en acier au carbone, jusqu'à ce que la croûte de socarrat craque et parfume toute la cuisine avec du riz grillé.",
  "cuisine": "Espagnol",
  "culture": "Valence",
  "category": "grains",
  "tags": [
    "paella",
    "Espagnol",
    "valencien",
    "riz",
    "poulet",
    "lapin",
    "safran",
    "socarrat"
  ],
  "difficulty": 4,
  "activeTime": "1 hr",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz de Bomba ou de Calasparra",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Arborio (moins idéal, absorbe moins de liquide)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Morceaux de poulet, désossés (vif/tambour)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Morceaux de lapin, désossés",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "poulet supplémentaire"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Haricots verts plats (bajoqueta), parés",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Graines de courge"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Protein",
      "name": "Gros haricots au beurre blanc, cuits",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "haricots"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Base",
      "name": "Tomates râpées, râpées sur une boîte",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates passata"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Pigment doux de la Vera (paprika)",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika fumé doux"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Fils de safran",
      "ratioValue": 0.005,
      "defaultUnit": "parts",
      "substitutions": [
        "double la quantité de carthame — couleur seulement, pas de saveur"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Liquid",
      "name": "Poulet chaud",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "eau (moins parfumée mais traditionnelle à Valence)"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 0.06,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saisir",
      "inputs": [
        "ing_10",
        "ing_02",
        "ing_03",
        "ing_12"
      ],
      "outputState": "seared_meat",
      "instructions": "Placer la paella (40-50 cm pour 4 personnes) à feu moyen-vif. Ajouter l'huile d'olive et chauffer jusqu'à ce qu'elle mijote mais ne fume pas. Assaisonner généreusement le poulet et le lapin avec du sel. Ajoutez-les au fond de la peau de la poêle sans bouger de 5 à 7 minutes de chaque côté jusqu'à ce qu'ils soient profondément dorés. La viande n'a pas besoin de cuire, elle finira dans le riz. Travaillez en lots si la casserole est bondée. Le fond doré de la poêle est une saveur. Laisse tomber.",
      "visualCue": {
        "primaryTarget": "Croûte dorée profonde sur toutes les surfaces de la viande. L'affection sur le fond de la poêle est sombre, parfumée et uniformément répartie — non brûlée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande est encore gris pâle. Il colle à la poêle lorsque vous essayez de la déplacer, ce qui signifie que la croûte n'a pas encore été formée.",
            "action": "Ne la forcez pas. La viande se libérera lorsqu'elle aura bien coulé. Attendez encore 2 minutes et essayez encore."
          },
          {
            "state": "Perfect",
            "description": "Croûte acajou profonde sur toutes les surfaces de mer. La viande se libère proprement de la poêle. Le fond est une couche sombre et parfumée de protéines caramélisées.",
            "action": "Poussez la viande jusqu'au périmètre de la poêle. Continuez à construire le sofrito au centre."
          },
          {
            "state": "Overdone",
            "description": "Le fond est très brun foncé ou noir en patchs. Une fumée amère et acride.",
            "action": "Réduire la chaleur. Déglacer avec une petite éclaboussure d'eau et de raclure. Choisissez et jetez tout fond vraiment brûlé — le reste est encore précieux."
          }
        ]
      },
      "feelCue": "Un morceau de poulet bien ciré devrait ressembler à du papier rinçant lorsque vous tapez sur la peau — croquant, sec et résonant. Si ça sonne doux et terne, il lui faut plus de temps."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "seared_meat",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "sofrito_base",
      "instructions": "Avec la viande poussée sur les côtés, ajouter l'ail au centre de la poêle et faire frire 30 secondes jusqu'à ce qu'il soit doré. Ajouter la tomate râpée — elle va étourdir farouchement. Mélanger et cuire la tomate au centre de la casserole pendant 8-10 minutes, la répandre à travers la casserole, jusqu'à ce qu'elle ait perdu toute son odeur brute, obscurcie du rouge à une brique concentrée, et l'huile s'est séparée des solides de la tomate. Ajouter le paprika doux et remuer pendant 30 secondes seulement — le paprika brûle très rapidement. Ce sofrito est la colonne vertébrale du plat entier.",
      "visualCue": {
        "primaryTarget": "La tomate a été réduite à une pâte foncée, sèche, concentrée et l'huile a visiblement séparée. Le paprika a transformé l'huile en rouge orangé profond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La tomate est encore rouge vif, humide et acide. L'huile n'est pas séparée.",
            "action": "Continuez à cuisiner et à remuer. Le sofrito doit être complètement caramélisé, un sofrito mal cuit fait une paella plate et acide."
          },
          {
            "state": "Perfect",
            "description": "La pâte de tomate est rouge brique foncée, concentrée et presque sèche. L'huile est rouge orangé profond du paprika. L'odeur est douce, fumée et complexe.",
            "action": "Ajouter les haricots verts plats et les haricots blancs et mélanger dans la sofrito."
          },
          {
            "state": "Overdone",
            "description": "Le sofrito est devenu très sombre et commence à être char. Le paprika sent l'amertume.",
            "action": "Ajouter immédiatement un jet d'eau dans la poêle et remuer. Utilisez le grésillement pour déglacer la couche brûlée dans la sauce."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère en bois à travers le sofrito — le sentier devrait rester ouvert pendant plusieurs secondes, montrant un fond de poêle sec, avant que la tomate ne retombe lentement. Cette sécheresse est le signe que l'eau a tout cuit."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "sofrito_base",
        "ing_01",
        "ing_04",
        "ing_05",
        "ing_09",
        "ing_11"
      ],
      "outputState": "cooking_paella",
      "instructions": "Bloomez le safran dans une poche de bouillon chaud pendant 2 minutes. Ajouter les haricots verts et les haricots blancs au sofrito; remuer 1 minute. Éparpiller le riz uniformément sur toute la casserole et remuer pour enrober chaque grain de la sofrito. Verser tout le stock de safran chaud à la fois. Remuer une fois pour distribuer le riz uniformément — c'est la dernière fois que vous remuez. À partir de ce moment, ne touchez pas le riz. Goûtez le stock et ajustez le sel maintenant, avant que le riz n'absorbe tout. Cuire à feu moyen-vif de 8 à 10 minutes jusqu'à ce que le stock ait diminué jusqu'au niveau du riz. Réduire à moyen-doux et cuire encore 8 minutes. Dans les 2 dernières minutes, porter le feu à moyen-élevé pour former le socarrat.",
      "visualCue": {
        "primaryTarget": "Les grains de riz enflés et juste visibles au-dessus du niveau du stock. Le stock aux bords diminue rapidement. La surface commence à paraître sèche alors que le centre brille encore.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz nage toujours en stock sans réduction visible. Les grains sont encore très fermes au goût.",
            "action": "Augmenter légèrement la chaleur et ne pas remuer. Continuez à cuisiner. Écoutez: un son bouillant et bouillonnant doit être constant."
          },
          {
            "state": "Perfect",
            "description": "Le stock a absorbé jusqu'au niveau du riz. Un bruit crépitant commence au fond de la poêle, le socarrat se formant. Les grains de riz sont plumés, séparés et cuits.",
            "action": "Retirez immédiatement du feu, couvrez-le de papier et reposez-vous 5 minutes."
          },
          {
            "state": "Overdone",
            "description": "Le socarrat est passé d'or à brûlé. Une fumée amère et acride vient de la casserole. Le riz sur le fond est noir carbonisé.",
            "action": "Retirer immédiatement du feu. La couche brûlée peut être jetée; tout au-dessus est généralement encore excellent."
          }
        ]
      },
      "feelCue": "Près de la fin de la cuisson, abaissez l'oreille jusqu'à la poêle — la formation du socarrat ressemble à un craquement faible et persistant, presque statique. Ce son est le prix de Valence. Le silence signifie pas de socarrat; une odeur acride aiguë signifie que vous êtes allé trop loin."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser reposer",
      "inputs": [
        "cooking_paella"
      ],
      "outputState": "finished_paella_valenciana",
      "instructions": "Retirez la poêle du feu et drapez-la avec une feuille d'aluminium ou une serviette de cuisine propre. Reposez-vous pendant 5 minutes, ou le socarrat va s'évaporer. Ce reste permet au riz de finir d'absorber tout liquide restant et la vapeur de redistribuer l'humidité uniformément. Retirez la feuille et servez directement de la casserole à la table. Grattez le socarrat du bas avec une cuillère et offrez une pièce à chaque dîner — c'est la partie la plus convoitée.",
      "visualCue": {
        "primaryTarget": "La surface du riz est sèche et mate. Les bords de la casserole tirent légèrement de l'huile. Le socarrat, gratté d'une cuillère, apparaît dans des draps dorés et crépitants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface du riz est encore brillante et humide. Aucun socarrat ne s'est formé — la cuillère ne trouve aucune résistance au fond.",
            "action": "Revenez à feu vif pendant 2 à 3 minutes à découvert, à l'écoute du craquelin. Ne pas ajouter plus de liquide."
          },
          {
            "state": "Perfect",
            "description": "La surface est sèche et mate. Le socarrat racle dans des feuilles d'or-ambre croustillantes qui sentent le riz grillé caramélisé. Chaque grain est séparé et entièrement cuit.",
            "action": "Servir immédiatement, en grattant le socarrat sur le dessus."
          },
          {
            "state": "Overdone",
            "description": "La paella reposait trop longtemps et le socarrat s'est adouci dans le riz. La surface est uniformément douce et légèrement gommée.",
            "action": "C'est toujours délicieux. Servir directement — il suffit de noter que la prochaine fois que le papier s'est éteint après 5 minutes, pas 10."
          }
        ]
      },
      "feelCue": "Un socarrat bien formé fait un crack audible lorsque vous pressez l'arrière d'une cuillère contre le fond de la poêle — comme appuyer sur le caramel mince. Il devrait se libérer dans des feuilles distinctes, dorées et cassantes, sentant le riz caramélisé et le safran."
    }
  ]
};
