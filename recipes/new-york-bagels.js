export default {
  "repoId": "master_american_newyorkbagels_001",
  "parentRepoId": null,
  "slug": "new-york-bagels",
  "author": "ForkRecipe Kitchen",
  "title": "New York Bagels",
  "description": "La texture singulière du bagel de NY provient d'une pâte à haute teneur en gluten, d'un retard de la nuit au froid et d'un ébullition au malt-épicé avant la cuisson, produisant une croûte qui se brise sous le couteau et une miette qui résiste à tous les imposteurs.",
  "cuisine": "Américain",
  "culture": "Juif de New York",
  "category": "breads",
  "tags": [
    "pain",
    "végétalien",
    "bouillie",
    "Mâche",
    "nouveau-né"
  ],
  "difficulty": 4,
  "activeTime": "60 min",
  "totalTime": "18 hours",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 2,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de pain à haute teneur en gluten (14 % de protéines)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "farine de pain (13 % de protéines — un peu moins de mâcher)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau froide",
      "ratioValue": 55,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sirop de malt d'orge (dough)",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": [
        "sucre brun",
        "Chérie"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 0.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sirop de malt d'orge (eau bouillante)",
      "ratioValue": 30,
      "defaultUnit": "g per liter",
      "substitutions": [
        "sucre brun",
        "bicarbonate de soude (1 c. à soupe par litre)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Tout assaisonnement bagel ou graines de sésame/poppy",
      "ratioValue": 20,
      "defaultUnit": "g",
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
        "ing_05"
      ],
      "outputState": "bagel_dough",
      "instructions": "Mélanger la farine, le sel, la levure et le sirop de malt. Ajouter de l'eau froide (l'eau froide ralentit la fermentation et améliore la texture). Mélanger jusqu'à ce qu'une pâte très rigide et à l'aspect sec se forme — la pâte bagel est nettement plus rigide que toute autre pâte à pain, avec seulement 55 % d'hydratation. Agenouillez vigoureusement de 12 à 15 minutes à la main (ou 10 minutes à la moyenne dans un mélangeur) jusqu'à ce que la pâte soit satinée lisse et extrêmement serrée. Divisez en 8 portions (environ 110 g chacune).",
      "visualCue": {
        "primaryTarget": "Une pâte très raide et lisse qui colle à peine à n'importe quoi. Plus difficile que la pâte à pain standard.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Surface dure, larmes plutôt qu'étirées, encore légèrement collante.",
            "action": "Continuez à pétrir. La farine à haute teneur en gluten prend plus de temps à se développer complètement — le gain est la mâche."
          },
          {
            "state": "Perfect",
            "description": "Satiné doux, très ferme. Une petite pièce s'étire dans une mince feuille avant de déchirer. La pâte est presque caoutchouteuse du réseau de gluten.",
            "action": "Formez immédiatement pendant que le gluten est chaud et souple."
          },
          {
            "state": "Overdone",
            "description": "La toux se déchire lorsqu'elle est repliée sur elle-même. Très chaud (au-dessus de 28°C).",
            "action": "Reposer 15 minutes couvert — la pâte à haute teneur en gluten surcollée peut devenir vitreuse et sujette aux déchirures."
          }
        ]
      },
      "feelCue": "La pâte de bagel doit se sentir comme une boule de stress — ferme et dense, pas oreiller. Lorsque vous appuyez sur votre pouce, il ressort immédiatement avec presque aucun rendement."
    },
    {
      "nodeId": "step_2",
      "action": "Forme",
      "inputs": [
        "bagel_dough"
      ],
      "outputState": "shaped_bagels",
      "instructions": "Formez chaque portion en une boule serrée, puis utilisez la méthode à travers le pouce : pressez les deux pouces à travers le centre de la boule et étirez l'anneau de 8 à 9 cm de diamètre avec un trou de 3 cm (le trou se rétrécit lors de l'épreuve et de la cuisson). Alternativement, rouler chaque boule dans une corde de 25 cm et joindre les extrémités avec un chevauchement de 3 cm, appuyer fermement et rouler la couture contre la surface de travail pour sceller. Placer sur des plateaux parcheminés avec de la farine de maïs ou de la semoule. Réfrigérer à découvert toute la nuit (12-16 heures).",
      "visualCue": {
        "primaryTarget": "Même des anneaux avec un trou de 3 cm et un diamètre uniforme de corde. La couture, si elle est roulée, doit être invisible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le trou est trop petit (moins de 2 cm) ou irrégulier. Toux encore rude à la couture.",
            "action": "Étendez doucement l'anneau entre deux doigts. Roulez la jonction de couture plus fermement sur le comptoir."
          },
          {
            "state": "Perfect",
            "description": "Même des anneaux symétriques avec un trou visible de 3 cm. Surface lisse et serrée. Seam complètement invisible.",
            "action": "Réfrigérer à découvert sur un plateau à poudre de semoule pendant 12-16 heures."
          },
          {
            "state": "Overdone",
            "description": "L'anneau est mishapen, épais d'un côté et le papier-fin de l'autre. Le trou est énorme.",
            "action": "Roulez l'anneau dans une boule et remodelez - la pâte tolère bien le remodelage à ce stade."
          }
        ]
      },
      "feelCue": "L'anneau en forme doit se sentir comme une petite bande de caoutchouc — tension uniforme tout autour, ferme et printanière, non floppée ou asymétrique."
    },
    {
      "nodeId": "step_3",
      "action": "Bouillir",
      "inputs": [
        "shaped_bagels",
        "ing_06"
      ],
      "outputState": "boiled_bagels",
      "instructions": "Retirer les bagels du réfrigérateur. Test de flottaison: déposer un bagel dans l'eau froide — il doit flotter dans les 10 secondes. Si elle coule, laissez la preuve du lot à température ambiante pendant 30 minutes de plus. Portez une grande casserole d'eau à ébullition. Ajouter le sirop de malt d'orge. Faire bouillir les bagels 2–3 à la fois pendant 60 secondes de chaque côté (plus doux) ou 90 secondes de chaque côté (plus authentique). Retirer avec une araignée ou une cuillère à fente, égoutter, puis presser immédiatement le dessus humide dans les graines ou l'assaisonnement.",
      "visualCue": {
        "primaryTarget": "Bagels qui ont enflé de façon notable pendant l'ébullition, avec une surface légèrement translucide et brillante lorsqu'ils sont enlevés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Bagels a coulé et n'a pas flotté. La surface est la même après avoir bouilli.",
            "action": "Ils étaient sous-protégés. Preuve à la température ambiante 30 minutes de plus. Faites bouillir à nouveau — cette étape est pardonnante."
          },
          {
            "state": "Perfect",
            "description": "Bagels légèrement gonflés pendant l'ébullition. La surface est devenue semi-translucide et légèrement brillante. Ils se sentent légèrement plus fermes au toucher.",
            "action": "Égoutter, semer immédiatement et cuire en 5 minutes."
          },
          {
            "state": "Overdone",
            "description": "Ridé, arrosé. La surface a l'air puant et pâle. Surchauffé.",
            "action": "Faire cuire de toute façon — ils seront encore comestibles. Réduire le temps d'ébullition à 45 secondes de chaque côté la prochaine fois."
          }
        ]
      },
      "feelCue": "Le bagel bouilli se sent plus dense et légèrement visqueux — la couche externe gélatinisée est ce qui crée la croûte à croûte classique après cuisson. Il devrait se sentir plus lourd qu'avant de bouillir."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "boiled_bagels",
        "ing_07"
      ],
      "outputState": "finished_bagels",
      "instructions": "Cuire sur un plateau parcheminé (ou en pierre préchauffée) à 230 °C (450 °F) pendant 18 à 22 minutes jusqu'à ce qu'il soit profondément doré, sans taches pâles. Faites tourner le plateau à 10 minutes. Les bagels s'assombriront significativement dans les 3 dernières minutes. Laisser refroidir sur une grille pendant au moins 15 minutes avant de couper — la miette est encore en place.",
      "visualCue": {
        "primaryTarget": "De couleur dorée foncée avec des graines légèrement plus foncées. La surface brillante de l'ébullition est devenue une croûte mate et crépitante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle, croûte douce. Les graines ont l'air crues. La croûte donne quand elle est pressée.",
            "action": "Retourner au four — les bagels pâles manquent de la touche et de la mâche qui définissent le style."
          },
          {
            "state": "Perfect",
            "description": "Riche ambre-brun, graines grillées. La croûte craque lorsqu'elle est tapée d'un ongle. Le fond est uniformément bruni et sec.",
            "action": "Du calme sur une grille. Les bagels sont les mieux le même jour, mais congelent magnifiquement s'ils sont tranchés en premier."
          },
          {
            "state": "Overdone",
            "description": "Très sombre, les graines commencent à brûler. Une légère amertume du malt.",
            "action": "Supprimer immédiatement. Trim zones les plus sombres si désiré. La miette intérieure est très pardonnante de surprendre."
          }
        ]
      },
      "feelCue": "Un bagel bien cuit se sent lourd pour sa taille — frapper sur le comptoir et il fait un bruit satisfaisant, pas l'écho creux du pain. Cette densité est tout le point."
    }
  ]
};
