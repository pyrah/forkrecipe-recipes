export default {
  "repoId": "master_turkish_pilaf_001",
  "parentRepoId": null,
  "slug": "pilaf",
  "author": "ForkRecipe Kitchen",
  "title": "Beurre Pilaf",
  "description": "Le pilier de la cuisine d'Asie centrale et turque — riz à grains longs grillé dans le beurre jusqu'à translucide et noix, puis cuit à la vapeur en stock avec l'oignon et la carotte jusqu'à ce que chaque grain soit ferme, séparé et parfumé doré.",
  "cuisine": "Turquie",
  "culture": "Turquie/Ouzbékistan",
  "category": "grains",
  "tags": [
    "Sans gluten",
    "riz",
    "turc",
    "Asie centrale",
    "side-dish"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Riz blanc Basmati ou à grains longs",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "riz jasmin à grains extra longs"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "beurre clarifié (ghee)",
        "Graisse d'agneau pour la peau ouzbèke"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc (en dés)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Carotte (coupée en julienne fine)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Poulet ou agneau (chaud)",
      "ratioValue": 450,
      "defaultUnit": "ml",
      "substitutions": [
        "stock de légumes",
        "eau + 1 c. à thé sel fin"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Graines de cumin",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "cumin de fond (la moitié de la quantité)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Poivre noir (fraîchir)",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Tête entière d'ail (non pelée, facultative)",
      "ratioValue": 1,
      "defaultUnit": "head",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrater",
      "inputs": [
        "ing_01"
      ],
      "outputState": "soaked_rice",
      "instructions": "Rincez le riz sous l'eau froide courante, en tourbillonnant avec votre main, jusqu'à ce que l'eau coule presque clair - ce qui élimine l'excès d'amidon de surface qui causerait les grains à s'écraser. Transférer dans un bol et couvrir d'eau froide. Faire tremper 30 minutes. Cela hydrate les couches extérieures du grain afin qu'elles puissent s'étendre uniformément sous la vapeur sans que le centre reste crayeux. Égoutter soigneusement avant la cuisson.",
      "visualCue": {
        "primaryTarget": "L'eau de rince est passée de blanc nuageux à presque translucide. Les grains trempés sont légèrement gonflés et uniformément opaques.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Rincer l'eau est encore blanc laiteux et les grains restent vitreux et translucides au centre.",
            "action": "Continuez à rincer. L'eau laiteuse est de l'amidon de surface — il doit aller ou le pilaf sera collant."
          },
          {
            "state": "Perfect",
            "description": "L'eau est presque dégagée après 4-5 rinçages. Les grains sont uniformément blancs craies et légèrement gonflés par trempage.",
            "action": "Égoutter complètement dans un tamis à mailles fines et laisser reposer 2 minutes afin que l'excès d'eau coule."
          },
          {
            "state": "Overdone",
            "description": "Le riz a trempé plus d'une heure et les grains commencent à se briser lorsqu'ils sont pincées.",
            "action": "Égoutter et poursuivre — cuire légèrement plus doucement et réduire le stock de 30 ml."
          }
        ]
      },
      "feelCue": "Après avoir trempé, un grain pincé entre les doigts doit se sentir légèrement printanier et humide, se pliant plutôt que de se casser — il a absorbé assez d'eau pour cuisiner uniformément."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_07"
      ],
      "outputState": "softened_aromatics",
      "instructions": "Faire fondre le beurre dans une grande casserole à fond lourd avec un couvercle serré à feu moyen jusqu'à ce qu'il mousse puis s'installe. Ajouter l'oignon en dés et cuire, en remuant souvent, pendant 5-6 minutes jusqu'à ce qu'il soit complètement doux et qu'il commence juste à devenir doré aux bords. Ajouter la carotte julienne et les graines de cumin et cuire encore 3 minutes jusqu'à ce que la carotte s'adoucisse légèrement. Le pot doit sentir le beurre chaud, l'oignon doux et le cumin terreux.",
      "visualCue": {
        "primaryTarget": "L'oignon est complètement translucide et doux, doré teinté aux bords. La carotte s'est adoucie et les graines de cumin ont obscurci et sont devenues parfumées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore blanc et ferme au centre, sans couleur dorée. La carotte est brute et dure.",
            "action": "Continuer la cuisson — les alliums sous-cuits laisseront une note forte et dure dans le pilaf fini."
          },
          {
            "state": "Perfect",
            "description": "L'oignon est doux, translucide, avec de l'or. La carotte est flexible et légèrement réduite. Les graines de cumin sont parfumées et une ombre plus foncée.",
            "action": "Ajouter immédiatement le riz égoutté et commencer à griller."
          },
          {
            "state": "Overdone",
            "description": "Les bords de l'oignon sont brun foncé et commencent à croquer. Les graines de cumin sont très foncées et sentent aiguisées.",
            "action": "Réduire immédiatement la chaleur et ajouter le riz pour arrêter la cuisson — la légère amertume sera absorbée par le grain."
          }
        ]
      },
      "feelCue": "Le beurre doit encore sentir propre et noisette — s'il sent aiguisé ou brûlé, la chaleur est trop élevée; baisser avant d'ajouter le riz."
    },
    {
      "nodeId": "step_3",
      "action": "Faire griller",
      "inputs": [
        "soaked_rice",
        "softened_aromatics"
      ],
      "outputState": "toasted_rice",
      "instructions": "Ajouter le riz égoutté dans la casserole avec les arômes et mélanger pour enrober chaque grain dans le beurre. Répartir le riz dans une couche uniforme et cuire à feu moyen, en remuant fréquemment pendant 2-3 minutes. Les grains passeront d'un blanc opaque à un aspect légèrement translucide, vitreux, et le pot sentira des grains chauds grillés, comme le pop-corn mais délicat. Cette étape de toast enrobe chaque grain de graisse, qui les garde séparés pendant la vapeur.",
      "visualCue": {
        "primaryTarget": "Les grains de riz apparaissent vitreux et légèrement translucides, scintillent avec du beurre. La masse ressemble à des perles de verre polies mélangées à travers les aromatiques.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore blancs crayeux sans translucidité. Pas d'arôme grillé.",
            "action": "Continuer à remuer à feu moyen — la translucidité est le signe visuel que l'amidon a été recouvert de graisse."
          },
          {
            "state": "Perfect",
            "description": "Les grains sont uniformément translucides avec un éclat de beurre. Le pot sent le grain chaud, comme du popcorn. Rien n'a bruni.",
            "action": "Ajouter le stock chaud et procéder immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Certains grains commencent à devenir dorés-bruns et le pot sent des grains grillés verglant sur les noix.",
            "action": "Ajoutez le bouillon à la fois — un peu de toast supplémentaire est très bien et ajoute de la noix, mais arrêtez avant que rien ne brunisse plus loin."
          }
        ]
      },
      "feelCue": "Mélangez le riz translucide avec une cuillère et écoutez - il fait un bruit sec, vitreux, comme un murmure que les grains enduits de graisse glissent l'un contre l'autre plutôt que d'empiler mouillément."
    },
    {
      "nodeId": "step_4",
      "action": "Mijoter",
      "inputs": [
        "toasted_rice",
        "ing_05",
        "ing_06",
        "ing_08",
        "ing_09"
      ],
      "outputState": "cooked_pilaf",
      "instructions": "Versez le bouillon chaud sur le riz grillé — il siffle et va vapeur immédiatement. Ajouter le sel et le poivre noir. En cas d'utilisation, nichez toute la tête d'ail non pelée dans le centre du riz, coupez le côté vers le bas (il parfume la vapeur sans faire le pilaf ailky). Remuer une fois pour tout distribuer. Portez à ébullition complète à feu vif, puis réduisez immédiatement au réglage le plus bas. Couvrir soigneusement le couvercle et cuire 15 minutes sans le soulever une fois.",
      "visualCue": {
        "primaryTarget": "L'ébullition commence dans les 2-3 minutes, puis tombe à un mijot calme caché sous le couvercle. Aucune vapeur ne doit s'échapper: un couvercle serré est essentiel.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 15 minutes, le couvercle se lève pour révéler le liquide debout encore mis en commun sur la surface.",
            "action": "Remplacer le couvercle et continuer sur la chaleur la plus basse pendant 3-5 minutes de plus, puis vérifier à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Après 15 minutes, tout le liquide a été absorbé. La surface du riz est fauchée avec de petits cratères à vapeur. Les grains aux bords sont moelleux et séparés.",
            "action": "Retirer du feu sans lever le couvercle et laisser reposer pendant 10 minutes."
          },
          {
            "state": "Overdone",
            "description": "Une odeur brûlante s'élève du pot avant que les 15 minutes ne se lèvent.",
            "action": "Retirer immédiatement du feu. Le fond peut avoir formé une légère croûte — laisser le couvercle allumé et reposer la chaleur, ce qui permettra à la vapeur de se détendre."
          }
        ]
      },
      "feelCue": "Après 10 minutes de cuisson, pressez votre paume à plat contre le couvercle — vous devriez sentir la chaleur rythmique de la hausse de la vapeur mais pas de condensation liquide qui s'écoule; cela signifie que le riz est bien cuit à la vapeur plutôt que bouillir."
    },
    {
      "nodeId": "step_5",
      "action": "Laisser reposer",
      "inputs": [
        "cooked_pilaf"
      ],
      "outputState": "finished_pilaf",
      "instructions": "Retirer le pot du feu et laisser reposer, complètement non perturbé avec le couvercle allumé, pendant 10 minutes. Ce n'est pas facultatif, c'est le moment où la vapeur se redistribue à travers les grains, égalisant l'humidité et assurant une texture uniforme. Après 10 minutes, retirer le couvercle et la tête d'ail (le cas échéant). À l'aide d'une fourchette ou de la poignée d'une cuillère en bois, arrosez doucement le riz du fond avec de la lumière, levant des mouvements — ne pressez ni ne remuez agressivement, ce qui écraserait les grains.",
      "visualCue": {
        "primaryTarget": "Chaque grain est distinct, allongé, moelleux et complètement séparé. Le riz déverse la fourche dans une douce cascade de grains individuels, et non pas des griffes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Certains grains au centre sont encore légèrement fermes et pas très moelleux. Le riz semble un peu dense.",
            "action": "Récupérer et reposer encore 5 minutes – la chaleur résiduelle finira les grains centraux en douceur."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain est tendre, moelleux et complètement séparé. La carotte et l'oignon sont distribués partout. Le fond a une croûte très fine, légèrement dorée qui libère proprement.",
            "action": "Servir immédiatement ou garder couvert d'un chiffon propre sous le couvercle pour maintenir la chaleur jusqu'à 20 minutes."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont mous et commencent à s'écraser. La croûte inférieure est brun foncé.",
            "action": "Fluff immédiatement et servir à la fois — la texture ne s'aggravera pas, mais elle ne s'améliorera pas avec plus de temps."
          }
        ]
      },
      "feelCue": "Un grain de pilaf parfaitement reposé, pressé entre le pouce et l'index, devrait donner avec un doux soupir d'amidon qui donne — entièrement cuit, jamais musqué, comme pressant un petit oreiller."
    }
  ]
};
