export default {
  "repoId": "master_italian_schiacciata_001",
  "parentRepoId": null,
  "slug": "schiacciata",
  "author": "ForkRecipe Kitchen",
  "title": "Schiacciata",
  "description": "La réponse de la Toscane à la focaccia — plus mince, plus croquante aux bords, et tellement saturée d'huile d'olive bonne que la première morsure libère une crue chaude et herbacée — le mot 'schiacciata' signifie écrasé, et la pâte plate et fendu délivre exactement cela: délibérément pressée, maximalement croquante.",
  "cuisine": "Italien",
  "culture": "Toscane",
  "category": "breads",
  "tags": [
    "Pain plat",
    "Huile d'olive",
    "Tuscan",
    "végétalien",
    "levure"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "2 hours 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 5,
    "sour": 2,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Type 0 ou farine de pain",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Farine polyvalente"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude (32-35 C)",
      "ratioValue": 70,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile d'olive extra vierge, plus une quantité généreuse pour la poêle et le plateau",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 0.8,
      "defaultUnit": "parts",
      "substitutions": [
        "levure sèche active, éprouvée en premier"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Garnish",
      "name": "Sel de mer (Maldon ou Fiore di Sale)",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Feuilles de romarin fraîches (facultatif)",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "Feuilles de sauge",
        "thym"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "shaggy_dough",
      "instructions": "Mélanger la farine, la levure instantanée et le sel fin dans un grand bol, en maintenant le sel et la levure sur les côtés opposés du bol initialement. Verser dans l'eau chaude et l'huile d'olive. Mélanger avec un gratteur de pâte ou votre main jusqu'à ce qu'il ne reste plus de farine sèche – la pâte sera modérément collante, plus douce qu'une pâte à pain mais pas aussi humide que la focaccia. Il devrait s'éloigner des côtés du bol. Ne pas ajouter plus de farine. Couvrir et se reposer pendant 15 minutes.",
      "visualCue": {
        "primaryTarget": "Une pâte rugueuse et cohésive sans poches de farine sèche. Se colle légèrement au bol mais tient ensemble comme une masse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches sèches de farine restant à la base du bol. Dough ne va pas se réunir.",
            "action": "Ajouter une cuillère à café à la fois et continuer à mélanger jusqu'à ce qu'aucune farine sèche ne reste."
          },
          {
            "state": "Perfect",
            "description": "Pâte dure, légèrement collante qui tient ensemble. Pas de taches sèches. Retire-toi des côtés lorsqu'il est pressé.",
            "action": "Couvrir et reposer 15 minutes pour l'autolyse."
          },
          {
            "state": "Overdone",
            "description": "Dough a été surmené et devient déjà lisse et élastique.",
            "action": "Ce n'est pas un problème à ce stade. Passez au pliage."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir comme un lobe d'oreille doux, légèrement collant, souple et vivant, collé légèrement aux doigts, mais libérant sans déchirer."
    },
    {
      "nodeId": "step_2",
      "action": "Incorporer délicatement",
      "inputs": [
        "shaggy_dough"
      ],
      "outputState": "developed_dough",
      "instructions": "Effectuez trois séries de stretch-and-pli sur 60 minutes, une série toutes les 20 minutes. Pour chaque set : mouiller la main, saisir la pâte d'un côté du bol, l'étirer fermement vers le haut jusqu'à ce qu'elle atteigne sans déchirer, puis la plier au centre. Faites tourner le bol à 90 degrés et répétez jusqu'à ce que vous ayez terminé quatre plis. Après trois séries, la pâte devrait être nettement plus lisse, plus cohésive et commencer à montrer des bulles sous la surface. Couvrir et laisser le ferment en vrac à température ambiante pendant 30 minutes jusqu'à ce qu'il soit gonflé.",
      "visualCue": {
        "primaryTarget": "Après le troisième pliage, une pâte lisse et bondissante avec des bulles visibles sous la surface. Quand le bol est tapoté, la pâte grouille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux se déchire encore facilement pendant le pliage. Pas de bulles visibles. Plat et dense dans le bol.",
            "action": "Continuez à plier. Laisser reposer la pâte plus longtemps entre les plis si la déchirure persiste."
          },
          {
            "state": "Perfect",
            "description": "Doux, légèrement bombé, nettement plus léger qu'au début du mélange. Des bulles visibles. Des étirements extensibles sans déchirement.",
            "action": "Huiler la poêle et transférer."
          },
          {
            "state": "Overdone",
            "description": "Surfermenté — très gazéifié, sent fortement acide et dégonfle lorsqu'il est touché.",
            "action": "Travaillez rapidement — passez immédiatement à la poêle et faites cuire dès qu'elle se propage."
          }
        ]
      },
      "feelCue": "Par le troisième set, le pliage de la pâte devrait se sentir comme travailler avec de la soie — il s'étire généreusement et résiste élastiquement, et le bol donne un doux bruit lorsqu'il est posé sur le comptoir, plus lourd qu'auparavant."
    },
    {
      "nodeId": "step_3",
      "action": "Faire lever",
      "inputs": [
        "developed_dough",
        "ing_03"
      ],
      "outputState": "proofed_schiacciata",
      "instructions": "Versez une quantité très généreuse d'huile d'olive sur une demi-plaque ou un plateau de cuisson bordé, soit au moins 4 à 5 cuillères à soupe. Schiacciata est un pain à l'huile d'olive et devrait pratiquement flotter dedans. Transférer la pâte dans la casserole et utiliser le bout des doigts pour commencer à la presser et l'étirer vers les bords. Si la pâte ressort fermement, couvrez et attendez 10-15 minutes, puis essayez à nouveau. La pâte devrait éventuellement être pressée assez à plat — environ 1,5 cm d'épaisseur. Couvrir d'une enveloppe en plastique et l'épreuve à la température ambiante pendant 30-45 minutes jusqu'à ce qu'elle soit nettement gonflée et légèrement bombée.",
      "visualCue": {
        "primaryTarget": "Toux étirée pour remplir la poêle d'une couche mince, uniforme, visiblement relevée et gonflée, mise dans l'huile d'olive.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La touffe s'est à peine propagée, encore un gros monticule au centre. Pas encore gonflé.",
            "action": "Couvrir et reposer 15 minutes de plus. La preuve à 75 F / 24 C accélère les choses."
          },
          {
            "state": "Perfect",
            "description": "Couche mince, même remplir la plupart des casseroles. Visiblement gonflé et vivant. L'huile s'est accumulée autour et sous la pâte.",
            "action": "Appuyez sur le bout des doigts pour aplatir et fossette, puis cuire immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Surprotégée — la pâte s'est étendue très mince et la surface semble bouchée et effondrée.",
            "action": "Faites cuire immédiatement. Les schiacciata surprotégées sont toujours délicieuses — juste une miettes légèrement plus denses."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur la surface d'un doigt — il devrait s'enfoncer lentement et revenir environ à la mi - moitié sur 3-4 secondes. Ressort-back instantané signifie sous-protégée; aucun ressort-back ne signifie surprotégée."
    },
    {
      "nodeId": "step_4",
      "action": "Fosse",
      "inputs": [
        "proofed_schiacciata",
        "ing_03",
        "ing_06",
        "ing_07"
      ],
      "outputState": "dimpled_schiacciata",
      "instructions": "À l'aide des dix doigts retenus à plat, appuyez fermement sur la pâte et maintes fois sur toute sa surface, en poussant jusqu'à la casserole. La pâte doit être pressée assez à plat — plus flattée que la focaccia. C'est la 'schiacciata', l'écrasement. Arrosez une autre goutte généreuse d'huile d'olive sur toute la surface, la laissant s'accumuler dans les fossettes. Dispersez le sel et les feuilles de romarin si vous utilisez. Le sel continue maintenant, pas après la cuisson.",
      "visualCue": {
        "primaryTarget": "Un paysage plat, fendu de pâte à l'huile d'olive pooling dans chaque doigt-cratère. Salade molle et romarin uniformément distribués.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est encore trop épaisse et arrondie. Les fossettes sont peu profondes et se remplissent immédiatement.",
            "action": "Appuyez plus fermement et de façon répétée. Schiacciata doit être nettement plus flatteur que la focaccia."
          },
          {
            "state": "Perfect",
            "description": "Plat, profondément fendu sur toute la surface. L'huile est mise en réserve dans chaque dépression. Des reflets de sel sur le dessus. 1-1,5 cm d'épaisseur au point le plus épais.",
            "action": "Dans un four de 230 C (450 F) immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Pressé si plat qu'il a déchiré par endroits. Des taches très fines et translucides.",
            "action": "Appuyez doucement sur les taches déchirées. Ils guériront dans le four."
          }
        ]
      },
      "feelCue": "Vos doigts devraient sentir la résistance de la pâte bouffie et ensuite se briser pour rencontrer la poêle lissée — appuyez avec la confiance de quelqu'un qui sait que la pâte peut la prendre."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire au four",
      "inputs": [
        "dimpled_schiacciata"
      ],
      "outputState": "finished_schiacciata",
      "instructions": "Cuire à 230 C (450 F) sur le support le plus bas pendant 15-20 minutes. Schiacciata fait plus chaud et plus rapide que la focaccia car elle est plus mince. Regardez attentivement après 12 minutes. Les bords doivent être brun foncé et très croustillants; le centre doit être doré. Retirez immédiatement de la poêle sur un support en fil — ne la laissez pas refroidir dans la poêle ou le fond va vapeur et adoucir. Laisser refroidir 5 minutes avant de couper. Schiacciata est mieux mangé dans 1 heure de cuisson, tandis que le contraste entre l'extérieur croustillant et la miette humide et huileuse est encore à son sommet.",
      "visualCue": {
        "primaryTarget": "Des bords très profonds, presque carbonisés, un centre d'or et un fond uniformément sombres et libérant de la poêle avec un craquelin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle, croûte douce qui plie au lieu de craquer. Le fond est blond.",
            "action": "Retourner au four et augmenter jusqu'au support supérieur si le centre est pâle. Vérifiez toutes les 2 minutes."
          },
          {
            "state": "Perfect",
            "description": "Des bords sombres et croustillants presque carbonisés. Centre d'or. Le fond est brun-ambre profond, croquant, et audiblement craque lorsqu'il est levé.",
            "action": "Retirer immédiatement de la casserole et refroidir sur une grille."
          },
          {
            "state": "Overdone",
            "description": "Des bords vraiment brûlés — une odeur amère et amère. Les bords sont noirs plutôt que brun foncé.",
            "action": "Coupez les bords brûlés avec des cisailles de cuisine. Le centre est probablement encore parfait."
          }
        ]
      },
      "feelCue": "Prenez une pièce finie et pressez - la délicatement entre deux doigts — vous devriez entendre et sentir un craquelin croustillant suivi d'un intérieur huileux et productif. L'huile d'olive devrait briller au bout des doigts."
    }
  ]
};
