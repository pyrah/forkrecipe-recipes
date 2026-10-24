export default {
  "repoId": "master_chinese_char_siu_001",
  "parentRepoId": null,
  "slug": "char-siu",
  "author": "ForkRecipe Kitchen",
  "title": "Char Siu (porc barbecue canadien)",
  "description": "Des bandes d'épaules de porc disparaissent dans un bain de nuit de miel, de hoisine et de haricots rouges fermentés, avant de sortir d'un four chaud avec une glaçure de laque crépitante qui se brise faiblement sous le couteau, révélant un intérieur blush-pink qui est simultanément doux, funky, et fumé. L'omble aux bords — où le miel s'attrape et s'assombrit — est la saveur que tout le plat est construit autour.",
  "cuisine": "Chinois",
  "culture": "Cantonais",
  "category": "proteins",
  "tags": [
    "cantonais",
    "bbq",
    "porc",
    "rôti",
    "hoisine",
    "Chérie",
    "dim-sum"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 5,
    "salty": 3,
    "sour": 1,
    "bitter": 2,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Épaule de porc ou cou de porc (avec un peu de graisse marbrée)",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "fesses de porc",
        "filet de porc (moins juteux)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Chérie",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "sirop de maltose",
        "sirop d'or"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "Sauce à l'huile",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce à la prune"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "sauce de soja légère",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Haricot rouge fermenté (nan ru), décortiqué lisse",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "haricot blanc avec 1 c. à thé rouge colorant alimentaire"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Solvent",
      "name": "Vin de riz shaoxant",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "sherry sec"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Sucre brun",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": [
        "sucre de palme"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Cinq épices en poudre",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Allium",
      "name": "Ail, haché à la pâte",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Sweetener",
      "name": "Miel (pour vitrage, réservé)",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "maltose"
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
      "outputState": "marinated_pork",
      "instructions": "Couper l'épaule de porc en bandes d'environ 4 cm de largeur, 4 cm d'épaisseur et 15 à 20 cm de longueur, en suivant le grain de la viande. Mélanger tous les ingrédients de la marinade — miel, hoisine, sauce soja, purée de haricots rouges, vin Shaoxing, sucre brun, cinq épices et ail — dans un bol et fouetter jusqu'à ce qu'ils soient doux. Le haricot rouge fermenté (nan ru) devrait se dissoudre complètement dans le mélange, en le transformant en un brun rougeâtre distinctif qui s'approfondira à l'omble rouge caractéristique pendant la torréfaction. Ajouter les lanières de porc à la marinade et tourner pour enrober soigneusement chaque surface. Appuyez sur la marinade dans n'importe quelle crevasse avec vos doigts. Transférer dans un sac à fermeture éclair ou un contenant couvert et réfrigérer pendant au moins 4 heures — la nuit est fortement préférée et produira un résultat nettement plus complexe. Plus le temps de marinade permet au sel de pénétrer profondément dans la viande et aux sucres de commencer leur interaction chimique avec les protéines, ce qui accélère le brunissement Maillard pendant la torréfaction.",
      "visualCue": {
        "primaryTarget": "Les bandes de porc sont uniformément recouvertes d'une marinade épaisse, brun rougeâtre, sans taches sèches visibles. La marinade doit être brillante et légèrement sirupeuse à la surface de la viande.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La marinade est assise dans des piscines au fond du sac sans adhérer — la surface du porc est encore pâle et sous-enrobée.",
            "action": "Masser vigoureusement le sac pendant 2 minutes pour travailler la marinade dans la surface. Laisser reposer au moins 30 minutes avant la prochaine vérification."
          },
          {
            "state": "Perfect",
            "description": "Chaque surface est recouverte d'une couche uniforme, épaisse et brun rougeâtre. La marinade a été absorbée aux bords, ce qui a obscurci le millimètre externe du porc. Quand vous ouvrez le sac, l'odeur est douce, funky et légèrement épicée.",
            "action": "Réfrigérer pendant au moins 4 heures, idéalement pendant la nuit."
          },
          {
            "state": "Overdone",
            "description": "Le porc marine depuis plus de 36 heures — la surface semble légèrement guérie et sèche, et la texture peut être musquée par un contact prolongé avec le sel.",
            "action": "Procéder immédiatement à la cuisson. La saveur sera intense, mais la texture peut être légèrement douce."
          }
        ]
      },
      "feelCue": "Lorsque vous pressez une bande marinée, elle doit se sentir collante et légèrement dense à l'extérieur — les sucres de surface et le soja commencent à dénaturer les protéines ultrapériphériques. L'intérieur devrait encore se sentir comme du porc cru — rendement et froid."
    },
    {
      "nodeId": "step_2",
      "action": "Rôtis",
      "inputs": [
        "marinated_pork"
      ],
      "outputState": "roasted_char_siu",
      "instructions": "Préchauffer votre four à 220°C (425°F). Placez un support de fil sur un plateau de cuisson doublé de feuilles — le support élève le porc ainsi la chaleur circule en dessous, et le film capture les inévitables gouttes sucrées qui autrement se carboniser directement sur votre plateau. Retirer le porc de la marinade, réserver toute la marinade et déposer les bandes sur la grille avec au moins 2 cm d'espace entre chacune. Ils ne devraient pas toucher. Faire cuire 15 minutes. Pendant ce temps, verser la marinade réservée dans une petite casserole et porter à ébullition pendant 2 minutes, ce qui permet d'utiliser sans danger comme glaçure sur la viande cuite. Après les 15 premières minutes, retourner chaque bande à l'aide de pinces et brosser généreusement le dessus avec la marinade cuite. Retourner au four encore 10 minutes. L'alternance de la chaleur élevée et de l'application de glaçure est ce qui construit la laque crépitante en couches qui définit le siu char.",
      "visualCue": {
        "primaryTarget": "Les bandes sont profondément caramélisées sur toutes les surfaces — les bords les plus proches des bords du rack seront plus sombres, s'approchant de l'omble. La couleur devrait aller de l'ambre profond sur les côtés à rougeâtre-mahogany au centre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est encore rougeâtre-tan pâle sans caramélisation significative. La glaçure est toujours collante et humide plutôt que laquée.",
            "action": "Retourner au four 5 minutes de plus et appliquer une autre couche de glaçure."
          },
          {
            "state": "Perfect",
            "description": "Profondément rouge acajou, presque laqué, avec des bords carbonisés où le miel a pris. La surface est réglée et n'est plus collante à un doigt légèrement touché; elle a séché dans une glaçure. Un thermomètre à lecture instantanée lit de 68 à 72°C à l'intérieur.",
            "action": "Appliquer la glaçure finale au miel et passer à l'étape finale glaçure."
          },
          {
            "state": "Overdone",
            "description": "Noir aux bords, odeur acride de sucre brûlé. La glaçure a carbonisé en une croûte dure et amère.",
            "action": "Coupez les bords les plus noirs. L'intérieur reste excellent — l'omble d'omble peut supporter des ombrages importants avant que la saveur ne traverse l'amertume désagréable."
          }
        ]
      },
      "feelCue": "Après avoir retourné, appuyez sur la surface supérieure d'une bande avec un doigt — il devrait se sentir bien et ferme comme la surface d'une tête de tambour, pas doux et donnant. La surface doit être sèche et légèrement collante, non humide. Vous devriez sentir le miel grillé et cinq épices dans l'air de la cuisine."
    },
    {
      "nodeId": "step_3",
      "action": "Glace",
      "inputs": [
        "roasted_char_siu",
        "ing_10"
      ],
      "outputState": "glazed_char_siu",
      "instructions": "Badigeonner généreusement le miel réservé (la deuxième partie réservée au vitrage, pas la marinade utilisée) sur toutes les surfaces des bandes de porc encore chaudes. Retourner au four sous la grille — avec la grille du four dans le tiers supérieur — pendant 3-4 minutes, en regardant constamment. Le miel va buller et caraméliser à la surface en temps réel, produisant la laque finale à haute fin glaçure pour laquelle char siu est célèbre. Tirez les bandes lorsque la glaçure est en train de bouillonner vigoureusement et la surface semble humide et brillante, mais les bords les plus proches de la chaleur commencent juste à tourner très sombre. La glaçure se fixera et durcira légèrement en refroidissant. Ne sautez pas cette étape — la torréfaction préglaciaire développe la croûte; cette dernière application de miel fournit la brillance et la dernière couche de douceur.",
      "visualCue": {
        "primaryTarget": "Les bandes sont brillantes et laquées, presque réfléchissantes, avec un éclat visible. La surface est fixée dur, comme le bois verni. Les bords sont sombres avec l'omble. La couleur est rougeâtre-mahogany profonde à presque-noire aux extrémités.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La glaçure au miel est encore pâle et transparente — le grilleur ne l'a pas caramélisée. La surface semble humide plutôt que laquée.",
            "action": "Revenez sous le gril pendant 2 minutes, en regardant toutes les 30 secondes."
          },
          {
            "state": "Perfect",
            "description": "Laque foncée, brillante et légèrement cassée, tapée d'un ongle. Les bords sont carbonisés de manière contrôlée. Le porc ressemble à quelque chose accroché dans une fenêtre de rôti cantonais.",
            "action": "Retirez et reposez-vous 5 minutes avant de couper le grain."
          },
          {
            "state": "Overdone",
            "description": "La glace a traversé le carbone — noir plutôt que sombre acajou, avec une forte odeur brûlante.",
            "action": "Trim les pièces les plus noires. L'omble à des niveaux raisonnables est souhaitable; la véritable amertume au carbone ne l'est pas. Tranchez immédiatement."
          }
        ]
      },
      "feelCue": "Tapotez la surface vitrée avec un ongle — il devrait avoir une faible résistance et produire un son subtil, comme tapoter sur des bonbons durs. C'est le set de laque. Laisser refroidir 5 minutes avant de trancher ou la glaçure va frotter."
    },
    {
      "nodeId": "step_4",
      "action": "Tranche",
      "inputs": [
        "glazed_char_siu"
      ],
      "outputState": "plated_char_siu",
      "instructions": "Transférer les bandes reposées sur une planche à découper. Couper chaque bande à travers le grain en morceaux de 8 à 10 mm d'épaisseur; couper avec le grain produit des morceaux durs et stringy; couper à travers il produit la morsure propre, qui est le point entier. Chaque tranche doit révéler une coupe transversale de rose pâle, juteuse intérieure annelée par une bande de glaçage acajou profond. Éventer les tranches légèrement chevauchant sur une assiette. Éjaculez les gouttes de la casserole sur le dessus. Servir avec du riz blanc cuit à la vapeur, ou l'utiliser comme remplissage pour les pains de bao cuits à la vapeur, sur les nouilles lo mein, ou à côté des congese.",
      "visualCue": {
        "primaryTarget": "Les tranches présentent une coupe transversale propre: intérieur rose-brillant à rose-rouge, sonné par une couche de glaçure acajou foncée de 2 à 3 mm d'épaisseur. Le grain est clairement visible en courant perpendiculaire à la coupe. Chaque tranche brille de la graisse et de la glaçure.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'intérieur est pâle et brut, sans rose blush — il a l'air beige ou gris, et les jus sont clairs, mais il y a une légère résistance lorsque vous coupez.",
            "action": "Retourner les bandes entières au four à 200°C pendant 8-10 minutes de plus et vérifier la température interne."
          },
          {
            "state": "Perfect",
            "description": "Intérieur rose-rose avec des jus légèrement orangetés de la marinade. L'anneau extérieur de glaçure est distinct et sombre. Chaque tranche est humide à la surface coupée.",
            "action": "Éventail sur une assiette, bruine avec des gouttes de poêle, et servir."
          },
          {
            "state": "Overdone",
            "description": "L'intérieur est gris-blanc et sec à la surface coupée. Pas de jus visible. La viande est dense et se détache en brins secs.",
            "action": "Couper finement et servir avec de la sauce ou du bruine avec une petite quantité d'huile de sésame pour compenser la perte d'humidité."
          }
        ]
      },
      "feelCue": "Couper à travers une bande et écouter — un bon siu d'omble fait un léger bruit de craquelage pendant que le couteau brise à travers la croûte laquée avant de glisser à travers l'intérieur tendre. La résistance change en deux étapes distinctes : croûte, puis viande."
    }
  ]
};
