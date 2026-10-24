export default {
  "repoId": "master_mexican_huevos_rancheros_001",
  "parentRepoId": null,
  "slug": "huevos-rancheros",
  "author": "ForkRecipe Kitchen",
  "title": "Huevos Rancheros",
  "description": "Les oeufs frits se sont installés sur une tortilla de maïs chaude et étouffés dans une salsa roya torréfié — un petit déjeuner mexicain de ranch aux contrastes purs: tortilla croquante, jaune runny, chaleur fumée.",
  "cuisine": "Mexicain",
  "culture": "Mexicain",
  "category": "eggs",
  "tags": [
    "œufs",
    "Mexique",
    "brunch",
    "salsa",
    "tortilla",
    "végétarien",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "30 min",
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
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Gros œufs",
      "ratioValue": 2,
      "defaultUnit": "eggs",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Tortilles de maïs (15 cm)",
      "ratioValue": 2,
      "defaultUnit": "pieces",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Base",
      "name": "Tomates roms",
      "ratioValue": 4,
      "defaultUnit": "pieces",
      "substitutions": [
        "tomates entières en conserve"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Heat",
      "name": "Guajillo ou chili ancho séchés (épicés, ensemencés)",
      "ratioValue": 2,
      "defaultUnit": "pieces",
      "substitutions": [
        "1 chipotle en boîte en adobo"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon blanc (chute)",
      "ratioValue": 0.5,
      "defaultUnit": "medium",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail (non pelées)",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile ou saindoux neutres",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": [
        "schmaltz"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Feuilles de coriandre fraîches",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Dairy",
      "name": "Fromage Cotija ou fresque queso (brûlé)",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "Féta",
        "ricotta salata"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Citrus",
      "name": "Lime (coupée en quartiers)",
      "ratioValue": 1,
      "defaultUnit": "lime",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtis",
      "inputs": [
        "ing_03",
        "ing_05",
        "ing_06",
        "ing_04"
      ],
      "outputState": "roasted_salsa_base",
      "instructions": "Chauffer une poêle en comal sec, en fonte ou à grille plate à feu vif jusqu'à très chaud. Placer les tomates, l'oignon coupé en deux et l'ail non pelé directement sur la surface sèche. Faites - les tourner de temps en temps, jusqu'à ce que les peaux de tomates soient blister et noircies en patchs, que les surfaces de l'oignon soient brun foncé, et que l'ail soit doux et parfumé — environ 10 minutes au total. Pendant ce temps, faire griller les chilis séchés dans la même casserole sèche pendant 30 secondes de chaque côté jusqu'à ce qu'ils bouffent légèrement et sentent grillés mais non brûlés, puis les tremper dans suffisamment d'eau bouillante pour couvrir pendant 10 minutes jusqu'à ce qu'ils soient pliables.",
      "visualCue": {
        "primaryTarget": "Tomates à peau noircie, fendue et effondrée, chair légèrement caramélisée. Coupe d'oignon visage profondément doré. Papier à l'ail et doré. Les piments sont gonflés et flexibles après trempe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tomates sont simplement chaudes sans omble — des peaux pâles, sans effondrement. Les piments sont trempés moins de 5 minutes et encore raides et cuireux.",
            "action": "Retour à la chaleur sèche; le vrai char sur les tomates est l'âme d'une salsa roja et pas seulement décoratif."
          },
          {
            "state": "Perfect",
            "description": "Des taches distinctes d'omble noir sur les peaux de tomate à côté de la chair rouge vif — le genre de noircissement que vous voyez sur la salsa de rue-vendor. Chilies entièrement adoucies, bouillon tournant brique rouge. La chair d'ail est crémeuse lorsqu'elle est pressée de la peau.",
            "action": "Peler l'ail, égoutter les piments et mélanger."
          },
          {
            "state": "Overdone",
            "description": "Les tomates sont entièrement carbonisées et acrides — plus de 40% de leur surface sont uniformément noires plutôt que tachetées. Les chilies grillées trop longtemps sont devenues amères et crayeuses plutôt que grillées.",
            "action": "N'utilisez que les morceaux de tomates les moins brûlés en cas de surdosage partiel. Les chilis vraiment noirs doivent être jetés et les chilis frais commencés."
          }
        ]
      },
      "feelCue": "Appuyez sur une tomate rôtie à travers une serviette de cuisine — elle devrait céder et s'effondrer instantanément, liquéfiant presque sous la légère pression. La chair intérieure doit se sentir douce et cuite, non ferme et crue au cœur."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "roasted_salsa_base"
      ],
      "outputState": "salsa_roja",
      "instructions": "Peler l'ail. Ajouter les tomates carbonisées (avec leurs jus), l'ail pelé, les morceaux d'oignon brunis et les piments adoucis égouttés dans un mélangeur. Mélanger jusqu'à lisse — ou laisser légèrement rugueux si vous préférez une texture rustique. Assaisonner de sel. Dans une casserole, faire chauffer une cuillère à soupe d'huile jusqu'à ce qu'elle mijote, puis verser la salsa mélangée en une seule fois. Faire frire la salsa, en remuant, pendant 3-4 minutes jusqu'à ce qu'elle s'assombrisse par une nuance et que le bord cru de l'oignon-ail cuise. La frite courte transforme les ingrédients mélangés en une sauce cohésive.",
      "visualCue": {
        "primaryTarget": "Salsa rouge brique profonde, plus épaisse que la sauce tomate mais versable, avec un arôme fumé et légèrement fruité. La surface doit avoir l'air rouge mat, pas rouge orange vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La salsa est rouge-orange vif et sent la tomate crue et l'oignon.",
            "action": "Cuire dans l'huile pendant 3-4 minutes, en remuant constamment, jusqu'à ce que la note brute disparaisse et que la couleur s'approfondisse."
          },
          {
            "state": "Perfect",
            "description": "Rouge acajou profond, légèrement épaississant, avec une profondeur de fumée arrondie. Goûte complexe et en couches: l'omble, le chili séché et une légère douceur de la tomate rôtie. Consistance de la serviette : enrobe une cuillère.",
            "action": "Conserver au chaud dans la poêle et faire frire les tortillas et les œufs."
          },
          {
            "state": "Overdone",
            "description": "La salsa est réduite à une pâte épaisse et colle à la poêle; la couleur est très foncée et le goût est amer et surconcentré.",
            "action": "Ajouter quelques cuillères à soupe d'eau pour se détendre et remuer pour se réinsérer."
          }
        ]
      },
      "feelCue": "Goûtez la salsa — vous devriez sentir une chaleur de bâtiment à l'arrière de votre palais du chili, pas une brûlure immédiate. La douceur du mirin doit suivre. Si elle a un goût plat, une pincée plus de sel la résout en quelques secondes."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "ing_02",
        "ing_07"
      ],
      "outputState": "warmed_tortillas",
      "instructions": "Dans une poêle séparée, chauffer le reste de l'huile à feu moyen-élevé. Passer chaque tortilla dans l'huile pendant 20 à 30 secondes de chaque côté — juste assez longtemps pour se réchauffer et ramasser quelques taches dorées, mais pas assez pour les rendre complètement rigides. Ils doivent être suffisamment souples pour se plier mais avoir une légère croûte au bord. Égoutter brièvement sur des serviettes en papier. Transférer dans une assiette chauffée.",
      "visualCue": {
        "primaryTarget": "Tortillas avec de petites taches dorées sur chaque surface, toujours flexibles et pliables au centre, avec un bord légèrement croquant. La surface devrait briller faiblement de l'huile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tortilles pâles, douces et complètement molles — chaudes mais sans aucune intégrité structurelle ni saveur de l'huile. Ils sèmeront le sang dès que la salsa les frappera.",
            "action": "Donnez-leur 10-15 secondes de plus par côté dans l'huile à feu plus élevé."
          },
          {
            "state": "Perfect",
            "description": "Léger, flexible, légèrement croquant aux bords avec des patchs dorés – assez robuste pour porter un œuf et une salsa, assez doux pour plier. L'arôme de maïs est vif et grillé.",
            "action": "Déplacez-vous dans une assiette chaude et faites frire les œufs immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Entièrement rigide et fragile — un tostada. La tortilla craquera et se brisera sous le poids de l'œuf et de la salsa.",
            "action": "Utilisez plutôt comme base tostada, et commencez les tortillas fraîches dans moins d'huile pour moins de temps."
          }
        ]
      },
      "feelCue": "Ramassez la tortilla — elle devrait draper légèrement vos doigts au centre, mais pas floper entièrement. Ce flex avec un bord ferme est l'objectif textural."
    },
    {
      "nodeId": "step_4",
      "action": "Fry",
      "inputs": [
        "ing_01",
        "ing_07"
      ],
      "outputState": "fried_eggs",
      "instructions": "Dans la même poêle (ou une autre), chauffer un film d'huile à feu moyen. Casser soigneusement les œufs, en maintenant les jaunes intacts. Faites frire le côté ensoleillé : cuillerez de l'huile chaude sur les blancs pour fixer le bord supérieur, ou couvrez avec un couvercle pendant 1 minute pour mettre les blancs à vapeur sans retourner. Les blancs devraient être entièrement fixés et opaques, le jaune restant complètement liquide et l'or orange vif. Assaisonner avec une pincée de sel.",
      "visualCue": {
        "primaryTarget": "Entièrement serti, blanc légèrement croustillant avec un jaune liquide encore orange vif et bombé — pas un jaune plat pâle, pas un jaune filmé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le blanc est toujours translucide et se gèle autour du jaune, surtout l'albumen épais directement sous le jaune n'a pas encore été mis.",
            "action": "Couvrir la poêle d'un couvercle pendant 60 secondes supplémentaires pour utiliser la chaleur de vapeur pour régler le dessus du blanc sans perturber le jaune."
          },
          {
            "state": "Perfect",
            "description": "Lacy-edged, blanc entièrement opaque avec un jaune qui est encore complètement liquide — brillant, haut, bombé. Le blanc a un léger croustillant doré au bord extérieur de l'huile.",
            "action": "Glissez immédiatement sur la tortilla préparée et la cuillère sur la salsa."
          },
          {
            "state": "Overdone",
            "description": "La surface du jaune s'est filmée avec une peau pâle et mate — le jaune n'est plus entièrement liquide à la surface. Les blancs commencent peut-être à brunir au-delà du labyrinthe jusqu'au bord foncé.",
            "action": "Servir à la fois; un jaune filmé est cosmétiquement moins idéal, mais toujours en courant au centre si pris assez tôt. Réduire la chaleur pour le prochain lot."
          }
        ]
      },
      "feelCue": "Secouez doucement la casserole — le jaune devrait trembler et trembler librement, un dôme liquide qui n'a pas été réglé du tout. Si elle roule comme une masse solide, elle est allée trop loin."
    },
    {
      "nodeId": "step_5",
      "action": "Assemblage",
      "inputs": [
        "warmed_tortillas",
        "fried_eggs",
        "salsa_roja",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "finished_huevos_rancheros",
      "instructions": "Placer les tortillas chaudes sur une assiette. Faites glisser l'œuf frit sur le dessus. Déposer généreusement la salsa chaude sur le blanc d'œuf, laissant le jaune découvert ou à peine brossé pour qu'il reste visible et lumineux. Scatter émietté cotija et coriandre fraîche sur le dessus. Servir avec des coins de chaux sur le côté. Tout devrait arriver à la table chaude — c'est un travail d'assemblage qui prend 30 secondes.",
      "visualCue": {
        "primaryTarget": "Une assiette vive : la salsa rouge foncé qui s'étend autour et au-dessus du blanc, le dôme jaune orange s'élevant au-dessus, la coriandre verte et le fromage blanc contrastant contre le rouge.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La salsa est froide ou à peine chaude — elle ne se mélange pas avec l'œuf et le plat se sent assemblé, pas cohésif. Les composants semblent disjoints sur la plaque.",
            "action": "S'assurer que la salsa est maintenue à un mijot doux jusqu'au moment du placage."
          },
          {
            "state": "Perfect",
            "description": "Chaque composant est chaud. La salsa s'écoule dans les bords de la tortilla et se mêle au blanc d'œuf. Le jaune est l'œil du taureau vif du plat. Ça sent le matin mexicain: char, chili, œuf, maïs.",
            "action": "Servir immédiatement avec des tortillas chaudes ou des haricots refried à côté."
          },
          {
            "state": "Overdone",
            "description": "L'oeuf a été plaqué trop tôt et est devenu froid; le jaune a mis à un solide à partir de la chaleur résiduelle de la salsa versé sur le dessus.",
            "action": "La vitesse est importante ici — jamais de plaque jusqu'à ce que tout soit prêt et que le dîner soit à table."
          }
        ]
      },
      "feelCue": "Poussez le bord d'une tortilla chaude à travers la salsa et ressentez la légère résistance où la tortilla a gardé sa structure sous la sauce — ce contraste de maïs adouci mais pas soggy et salsa vive et chaude est le plat."
    }
  ]
};
