export default {
  "repoId": "master_italian_squid_ink_pasta_001",
  "parentRepoId": null,
  "slug": "squid-ink-pasta",
  "author": "ForkRecipe Kitchen",
  "title": "Pâtes à l'encre de calmars avec clams",
  "description": "Pâtes glissées à jet noir teintées d'encre de seiche, jetées avec des palourdes dans une sauce de vin blanc — dramatiques, briosses et incomparables du lagon vénitien.",
  "cuisine": "Italien",
  "culture": "Vénitien",
  "category": "seafood",
  "tags": [
    "pâtes",
    "encre de calmars",
    "Palourdes",
    "Vénétie",
    "Italien",
    "Produits de la mer",
    "Pâtes à la main"
  ],
  "difficulty": 4,
  "activeTime": "45 min",
  "totalTime": "1 hr 15 min",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 1,
    "bitter": 0,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Tipo 00 farine",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "semola rimacinata (pour une texture plus ferme)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Jaunes d'œuf",
      "ratioValue": 40,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Oeufs entiers",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Encre de calmars ou de seiches (à l'état frais)",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Protein",
      "name": "Palourdes fraîches (vongole veraci ou petit col), épurées",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "Moules",
        "coqs"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Solvent",
      "name": "Vin blanc sec (Soave ou Pinot Grigio)",
      "ratioValue": 150,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Flacons de poivre rouge",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "piment frais, tranché"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Herb",
      "name": "Persil à feuilles plates, haché finement",
      "ratioValue": 1,
      "defaultUnit": "small bunch",
      "substitutions": []
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
        "ing_05",
        "ing_06"
      ],
      "outputState": "squid_ink_dough",
      "instructions": "Fixez la farine sur une surface de travail propre et faites un grand puits au centre. Ajouter les jaunes d'œufs, les œufs entiers, l'encre de calmars, l'huile d'olive et le sel au puits. À l'aide d'une fourchette, battre délicatement les œufs à l'intérieur du puits, puiser graduellement la farine des parois intérieures. Une fois que le mélange devient trop épais pour la fourchette, utilisez un racleur de banc pour hacher et plier la pâte ensemble jusqu'à ce que toute la farine soit incorporée dans une masse noire rugueuse et chaotique. La pâte aura l'air alarmante, profondément, uniformément noire. Commencez à pétrir fermement avec le talon de votre main, pliant et appuyant pendant 8 minutes complètes jusqu'à ce que la pâte soit lisse et printanière. Enveloppez bien le film de collage.",
      "visualCue": {
        "primaryTarget": "Une sphère de pâte lisse et noir mat qui semble presque laquée: pas de stries de jaune d'œuf jaune visibles, pas de taches grises, pas de farine sèche à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Dough est toujours louche, collant et enragé. Des stries de jaunes d'œufs jaunes sont visibles à travers le noir. Larmes facilement quand étiré.",
            "action": "Continuer le pétrissage — les stries indiquent un oeuf non mélangé qui créera des taches faibles dans la feuille de pâtes. Il faut du temps; résistez à ajouter de la farine."
          },
          {
            "state": "Perfect",
            "description": "Uniformement noir-jet partout. Surface complètement lisse. Dough ressort lentement lorsqu'il est poché avec un doigt et s'éloigne proprement de la surface de travail.",
            "action": "Enroulez et reposez-vous au moins 30 minutes à température ambiante – le repos n'est pas facultatif."
          },
          {
            "state": "Overdone",
            "description": "La toux est devenue très raide et serrée, se cassant de manière agressive lorsqu'elle est étirée et craquelante aux bords.",
            "action": "Enveloppez immédiatement et reposez-vous pendant 45 minutes. Le surcollage resserre les brins de gluten — le reste est la seule solution."
          }
        ]
      },
      "feelCue": "La pâte d'encre de calmars bien kneaded ressemble à une boule de caoutchouc ferme, fraîche, lisse et élastique, avec une faible odeur minérale de la mer."
    },
    {
      "nodeId": "step_2",
      "action": "Repos",
      "inputs": [
        "squid_ink_dough"
      ],
      "outputState": "rested_pasta_dough",
      "instructions": "Laisser reposer la pâte emballée à température ambiante de 30 à 45 minutes. Pendant ce temps, installez votre machine à pâtes. Après le repos, divisez la pâte en 4 portions — gardez les autres enveloppés pendant que vous travaillez chacune. Aplatissez chaque portion dans un ovale rugueux et passez à travers la machine à pâtes dans son cadre le plus large. Plier en troisièmes comme une lettre, faire pivoter 90 degrés et passer à nouveau. Répéter 3 fois, puis travailler progressivement à travers les réglages pour régler 5 ou 6 (1–2 mm d'épaisseur). Couper en tagliolini (2 mm) ou spaghetti (3 mm) de largeur. Feuilles de poussière généreusement avec de la semoule pour empêcher le collage.",
      "visualCue": {
        "primaryTarget": "Des feuilles de pâtes brillantes, noires et semi-translucides qui captent la lumière, flexibles sans déchirer, d'une épaisseur parfaitement uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Larmes dues au passage de la machine à des réglages plus fins. Les bords sont rasés et inégaux. La feuille semble mate et épaisse.",
            "action": "La pâte a besoin de plus de temps de repos ou de passes de stratification dans les cadres plus larges. Ne le forcez pas à des réglages fins avant qu'il soit prêt."
          },
          {
            "state": "Perfect",
            "description": "Les feuilles sont uniformément noires, semi-transparentes lorsqu'elles sont maintenues à la lumière et s'étirent sans déchirer. Les brins coupés tiennent leur forme et se séparent les uns des autres.",
            "action": "Pousser généreusement avec de la semoule et réserver dans des nids lâches sur un plateau fariné. Cuire dans les 2 heures."
          },
          {
            "state": "Overdone",
            "description": "La feuille de pâtes s'est asséchée et a commencé à craquer ou à s'effondrer aux bords — elle a été exposée à l'air trop longtemps sans couvrir.",
            "action": "Cuire immédiatement les feuilles séchées plutôt que de les entreposer. Les pâtes fraîches à l'encre de calmars sèchent rapidement — garder couvertes d'un chiffon."
          }
        ]
      },
      "feelCue": "Une feuille bien reposée ressemble à du cuir chamois doux – souple, lisse, donnant dans vos mains sans résistance au ressort."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "clam_broth",
      "instructions": "Réglez une grande casserole large à feu vif. Ajouter l'huile d'olive et l'ail et laisser revenir 20 secondes jusqu'à parfumer. Ajouter les flocons de poivre. Astuce dans toutes les palourdes épurées, verser dans le vin et serrer le couvercle immédiatement. Cuire à feu maximum pendant 3-4 minutes, en agitant occasionnellement la poêle, jusqu'à ce que toutes les palourdes aient ouvert. Jetez tout ce qui reste fermé. À l'aide d'une cuillère à fente, lever les palourdes et réserver, en conservant la poêle et tout son liquide parfumé. Si le bouillon semble gritty, versez-le à travers un tamis fin doublé d'un chiffon humide dans une poêle propre.",
      "visualCue": {
        "primaryTarget": "Un pot ouvert de palourdes dans un bouillon doré et parfumé. Le bouillon doit être abondant, brillant et clair à jaune, non laiteux ni gris.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Plusieurs palourdes se ferment encore fermement après 4 minutes. Le bouillon est à peine mijotant et surtout du vin immobile — pas encore combiné dans une bonne liqueur de palourde.",
            "action": "Continuez à cuisiner. Toute palourde fermée après 6 minutes de chaleur vigoureuse doit être jetée — elle était morte avant la cuisson."
          },
          {
            "state": "Perfect",
            "description": "Toutes les palourdes s'ouvrent, la chair grince et le blanc beige. Le bouillon est abondant, doré, bri, et sent intensément la mer et l'ail.",
            "action": "Retirer les palourdes d'abord pour les empêcher de trop cuire pendant que vous finissez la sauce."
          },
          {
            "state": "Overdone",
            "description": "La chair du clam s'est rétrécie et resserrée, en s'éloignant des coquilles. Le bouillon est concentré et très salé par réduction.",
            "action": "Retirer immédiatement toutes les palourdes et ajouter une éclaboussure d'eau ou de pâtes dans le bouillon pour la diluer avant de terminer."
          }
        ]
      },
      "feelCue": "Plongez une cuillère dans le bouillon et goûtez - la — elle devrait vous frapper latéralement avec saumure et douceur dans une mesure égale, comme boire de l'air marin distillé."
    },
    {
      "nodeId": "step_4",
      "action": "Bouillir",
      "inputs": [
        "rested_pasta_dough"
      ],
      "outputState": "cooked_ink_pasta",
      "instructions": "Portez un grand pot d'eau généreusement salée à ébullition. Cuire les pâtes fraîches à l'encre pendant 60 à 90 secondes seulement — les pâtes fraîches font cuire dans une fraction du temps de séchage. Goûtez un brin à 60 secondes; il devrait être tendre mais avec une colonne vertébrale faible. Les pâtes continueront à cuire dans la sauce, alors tirez-la 10 secondes avant de penser qu'elle est prête. Réserver une louche de l'eau de cuisson amylacée noire avant l'égouttage.",
      "visualCue": {
        "primaryTarget": "Les brins Jet-Noir bobant à la surface de l'eau, cuits à travers mais avec un fil de résistance quand mordu.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pâtes sont encore denses et mâcheuses, avec une ligne blanche crayeuse visible en coupe transversale lorsqu'elles sont mordues. Pas encore flexible.",
            "action": "Donnez-lui encore 20 secondes et goûtez encore. Les pâtes fraîches sous-cuites sont désagréablement gommées."
          },
          {
            "state": "Perfect",
            "description": "Les brins sont flexibles, noirs brillants, tendres tout au long, mais avec un léger ressort quand mordu — 10 secondes après al dente. Le goût est propre oeuf et mer.",
            "action": "Égoutter immédiatement, réserver une tasse d'eau de cuisson encreuse et ajouter directement au bouillon de palourdes."
          },
          {
            "state": "Overdone",
            "description": "Les strands sont devenus boiteux et commencent à s'écraser. La surface est légèrement terne et collante. Pas de résistance quand mordu.",
            "action": "Mettez-le dans la sauce immédiatement et sautez toute autre mijotation. Les pâtes fraîches trop cuites s'effondrent si elles sont jetées agressivement."
          }
        ]
      },
      "feelCue": "Poissonr un brin et le tenir vers le haut — il devrait draper dans une courbe lisse sans casser, comme un morceau humide de ruban de soie noire."
    },
    {
      "nodeId": "step_5",
      "action": "Découpe",
      "inputs": [
        "cooked_ink_pasta",
        "clam_broth",
        "ing_11"
      ],
      "outputState": "squid_ink_pasta_dish",
      "instructions": "Ajouter les pâtes égouttées directement dans la casserole du bouillon de palourdes à feu vif. Mélanger vigoureusement pendant 60 à 90 secondes, en ajoutant de petites éclaboussures de l'eau de pâtes enky réservée si nécessaire pour garder la sauce fluide et brillante. Retournez les palourdes dans la poêle en 15 secondes. Retirer du feu et disperser le persil. Le plat fini doit être noir-jet avec des palourdes nichées tout au long du plat — servir immédiatement dans des bols chauds. Ne jamais ajouter de fromage aux pâtes de fruits de mer dans la tradition vénitienne.",
      "visualCue": {
        "primaryTarget": "Des brins de pâtes noires brillantes avec un revêtement uniforme de sauce foncée à l'encre, des palourdes éparpillées, du persil vif sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pâtes ne sont pas encore enrobées — la sauce est mise en commun au fond de la poêle, sans s'accrocher aux brins. Les clams ne sont pas encore revenus.",
            "action": "Mélanger plus vigoureusement à feu vif et ajouter une éclaboussure d'eau pour émulsionner la sauce sur les pâtes."
          },
          {
            "state": "Perfect",
            "description": "Chaque brin recouvert d'une fine sauce à l'encre foncée. Clams dans leurs coquilles nichées dans les pâtes. Le persil vert vif contre le noir. La sauce s'accroche plutôt que les piscines.",
            "action": "Servir le plat instantané est fait — les pâtes d'encre n'attendent rien."
          },
          {
            "state": "Overdone",
            "description": "Les pâtes ont sur-absorbé la sauce et semblent sèches et mates. Les clams sont retournés à la chaleur trop longtemps et se resserrent.",
            "action": "Ajouter une généreuse éclaboussure d'huile d'olive sur le feu pour restaurer le brillant, et déposer immédiatement."
          }
        ]
      },
      "feelCue": "Soulevez une pince pleine et laissez tomber — les brins doivent se séparer proprement et la sauce de sentier dans des rubans noirs lents plutôt que d'empiler dans une masse lourde."
    }
  ]
};
