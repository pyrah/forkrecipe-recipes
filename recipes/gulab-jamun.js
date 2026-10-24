export default {
  "repoId": "master_indian_gulab_jamun_001",
  "parentRepoId": null,
  "slug": "gulab-jamun",
  "author": "ForkRecipe Kitchen",
  "title": "Gulab Jamun",
  "description": "Des boulettes solides en lait frites à l'acajou, puis trempées dans du sirop de cardamome-rosewater jusqu'à ce qu'elles soient gonflées, collantes et profondément parfumées — le plus aimé des Indiens doux, à la fois croustillants et productifs, le sirop forçant son chemin au centre même pendant la longue période d'immersion.",
  "cuisine": "Indiens",
  "culture": "Asie du Sud",
  "category": "desserts",
  "tags": [
    "Gulab-Jamun",
    "indienne",
    "Asie du Sud",
    "Mithai",
    "eau de rose",
    "Cardamome",
    "frits",
    "sirop"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "2 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 5,
    "salty": 0,
    "sour": 0,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Lait entier en poudre",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "khoya (lait entier séché, mawa) pour le résultat le plus authentique"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Farine à usage général (maïda)",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": [
        "semoule fine pour une texture un peu plus grainée et traditionnelle"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "Soda au four",
      "ratioValue": 0.005,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Ghee (beurre communiqué)",
      "ratioValue": 0.08,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre non salé adouci"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Lait entier chaud (pour fixation)",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": [
        "eau chaude si nécessaire, bien que le lait donne une couleur plus riche"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre granulé (pour le sirop)",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "jaggery pour une douceur plus complexe, à bord de caramel"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Hydration",
      "name": "Eau (pour sirop)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Gousses de cardamome vert, légèrement broyées",
      "ratioValue": 0.01,
      "defaultUnit": "parts",
      "substitutions": [
        "cardamome au sol (la moitié de la quantité)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Eau de rose",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "eau de kewra"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Fils de safran",
      "ratioValue": 0.001,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Huile neutre ou ghee pour friture profonde",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "huile de coco raffinée"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "warm_syrup",
      "instructions": "Mélanger le sucre et l'eau dans une grande casserole à feu moyen. Mélanger jusqu'à ce que le sucre se dissout, puis arrêter de remuer. Ajouter les gousses de cardamome écrasées. Porter à ébullition et laisser mijoter pendant 5 à 7 minutes jusqu'à ce que le sirop soit légèrement épais mais encore versable. Ajouter l'eau de rose et le safran et remuer une fois. Le sirop doit rester chaud (pas chaud, pas froid) lorsque les boulettes frites sont ajoutées — le sirop chaud pénètre plus rapidement. Gardez-le sur la chaleur la plus basse possible ou sur un brûleur chaud.",
      "visualCue": {
        "primaryTarget": "Un sirop d'or clair et pâle avec des gousses de cardamome écrasées qui flottent dedans. Des brins de safran ont libéré un blush doré. Sensation intense d'eau de rose et d'épices.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sirop est encore aqueux et mince. Il s'écoule d'une cuillère dans des gouttes plutôt qu'un fil mince. Pas de revêtement sur une plaque froide.",
            "action": "Laisser mijoter quelques minutes de plus. Le sirop sous-réduit ne pénétrera pas suffisamment dans les boulettes — ils ont besoin du sucre pour les arracher osmotiquement."
          },
          {
            "state": "Perfect",
            "description": "Légèrement épais, collant sur une plaque froide, mais sans réglage. Un fil se forme brièvement entre deux doigts froids quand une goutte est étirée. Chaleureux et parfumé.",
            "action": "Garder au chaud à feu très doux. Les boulettes devraient être plongées immédiatement après la friture — le moment de la rencontre des boulettes chaudes au sirop chaud est crucial."
          },
          {
            "state": "Overdone",
            "description": "Le sirop s'est trop épaissi et se met à un bonbon dur sur une assiette froide. Il cristallisera sur les boulettes et les enrobera dans une coquille fragile plutôt que de s'imprégner.",
            "action": "Ajouter 50 ml d'eau tiède, remuer et revenir à la chaleur brièvement pour ré-dissoudre. Toujours errer du côté plus léger — vous pouvez réduire davantage si nécessaire."
          }
        ]
      },
      "feelCue": "Plongez une cuillère dans le sirop chaud et soulevez - le; le sirop devrait enrober la cuillère dans un mince film qui coule lentement dans un fil plutôt que de tomber dans des gouttes. L'odeur chaude et douce de la cardamome d'eau de rose devrait remplir la cuisine."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "dumpling_dough",
      "instructions": "Sirotez le lait en poudre, la farine et le bicarbonate de soude ensemble dans un bol. Frottez le ghee dans les ingrédients secs avec le bout des doigts jusqu'à ce que le mélange ressemble à de très fines chapelures sans poches de graisse visibles. Ajouter le lait chaud un peu à la fois, en mélangeant doucement avec une spatule, jusqu'à ce que la pâte se combine dans une masse souple et souple qui ne colle pas au bol. Ne pas trop moudre — ne le travailler que jusqu'à ce qu'il soit lisse. La pâte doit se sentir ferme : assez douce pour rouler sans craquelure, assez raide pour tenir une boule parfaitement lisse. Reposez-vous pendant 5 minutes.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, douce, légèrement collante qui tient sa forme lorsqu'elle est roulée dans une boule. Aucune fissure à la surface. Pas de farine sèche visible. Crème d'ivoire pâle de couleur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est émiettée et sèche — elle se fissure lorsque vous essayez de rouler une boule et la surface est rugueuse et fissurée. Il va craquer dans l'huile et exploser.",
            "action": "Ajouter le lait chaud une cuillère à café à la fois, en mélangeant doucement après chaque ajout. La pâte devrait juste tenir ensemble sans avoir besoin de pression."
          },
          {
            "state": "Perfect",
            "description": "Doux, doux, non collant. Une pièce pincée roule dans une boule parfaitement lisse et sans fissure entre les paumes avec une pression douce. Pas de brillance, pas de collants.",
            "action": "Rouler toutes les boules maintenant avant que la pâte sèche — couvrir la pâte d'attente avec un chiffon humide."
          },
          {
            "state": "Overdone",
            "description": "La toux est très collante et douce, elle se propage et se déforme sous son propre poids. Tu as ajouté trop de lait.",
            "action": "Agenouillez un peu de lait en poudre pour raidir la pâte. Si les boules ne peuvent pas tenir une forme ronde, elles s'aplatiront dans l'huile."
          }
        ]
      },
      "feelCue": "Rouler une petite boule entre les paumes sèches — elle devrait glisser sans problème sans fissure ni collage. La chaleur de vos paumes le rendra juste légèrement collant, comme le massepain chaud. Toute fissure signifie qu'elle est trop sèche; toute colle signifie qu'elle est trop humide."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "dumpling_dough",
        "ing_11"
      ],
      "outputState": "fried_dumplings",
      "instructions": "Divisez la pâte en boules égales – roulez chacune entre vos paumes avec une pression uniforme et lisse jusqu'à ce que la surface soit parfaitement sans fissure et ronde. Chauffer l'huile de friture dans une poêle profonde à 130°C à 140°C (265–285°F) — c'est la variable critique. La basse température permet aux boulettes de cuire lentement avant les brûlures extérieures. Ajouter les boules en lots et faire frire, en remuant et en tournant doucement et en continu avec une cuillère à fente, pendant 12 à 15 minutes jusqu'à ce que uniformément profonde acajou brun partout. Ils devraient augmenter sensiblement en taille pendant la friture à mesure que le bicarbonate de soude se développe. Transférer directement dans le sirop chaud immédiatement.",
      "visualCue": {
        "primaryTarget": "Des boules d'acajou-brun uniformément profondes — la couleur du caramel foncé, lisse à la surface sans taches pâles et sans taches brûlées. Visiblement plus grand que quand ils sont entrés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "D'or à l'extérieur, mais la couleur est inégale — plus foncée où ils se sont assis l'un contre l'autre, plus légère où ils n'ont pas touché l'huile. La taille a à peine augmenté. L'intérieur, s'il est mordu, est cru et pâteux.",
            "action": "Continuer à frire à la même basse température. La sous-fraction est l'erreur la plus courante — l'intérieur doit cuire à travers, et seulement le lent, faible frite atteint cela."
          },
          {
            "state": "Perfect",
            "description": "Deep, même, riche acajou-brun sur chaque surface. Remarquablement gonflé et plus gros que cru. La surface est lisse et légèrement croquante. Quand on est cassé ouvert, il doit être cuit tout le chemin à travers avec un intérieur léger et aéré.",
            "action": "Transférer immédiatement dans le sirop chaud. La transition de l'huile chaude au sirop chaud doit se faire sans délai."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé approchant noir. La surface est très dure et les boulettes sentent le sucre brûlé et la graisse de lait brûlé. Faire frire à une température trop élevée a causé cela.",
            "action": "Tremper dans le sirop comme d'habitude — l'extérieur durcit moins que prévu. Mais l'intérieur peut être mal cuit (brut) si la chaleur était élevée: la chaleur élevée cuit l'extérieur rapidement et isole l'intérieur. Baisse significativement la température la prochaine fois."
          }
        ]
      },
      "feelCue": "Appuyez légèrement sur une boule frite à l'aide d'une cuillère — elle devrait se sentir ferme avec un léger gain, comme une boule en caoutchouc ferme. Trop doux, c'est trop cuit, trop dur, la température était trop élevée et seule la surface cuite. Le jamun de gulab parfait donne doucement sous pression."
    },
    {
      "nodeId": "step_4",
      "action": "Jeu",
      "inputs": [
        "fried_dumplings",
        "warm_syrup"
      ],
      "outputState": "finished_gulab_jamun",
      "instructions": "Faites glisser les boulettes chaudes dans le sirop chaud tout en étourdissant. Ils devraient être complètement submergés — basculer la poêle pour la redistribuer si nécessaire. Éteignez complètement la chaleur et couvrez la poêle. Laissez-les tremper pendant au moins 2 heures à température ambiante. Pendant ce temps, les boulettes s'étendent davantage, le sirop est attiré au centre par l'osmose, et l'extérieur s'adoucit de crépitement à rendement et au sirop saturé. Servir chaud ou à température ambiante. Ils restent dans le sirop pendant 3 jours et s'améliorent le deuxième jour.",
      "visualCue": {
        "primaryTarget": "Après trempage : plombée, sphères gonflées, visiblement plus grandes que lorsqu'elles sont frites, entièrement glossées dans le sirop, douces à légèrement pressées. Le sirop est devenu légèrement plus mince car les boulettes en ont absorbé une partie.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les boulettes sont dans le sirop depuis seulement 30 à 60 minutes. Ils sont encore fermes et le sirop n'a pénétré que dans la couche de surface. Biting révèle un intérieur dense, à peine sucré.",
            "action": "Continuez à tremper. Deux heures au minimum, pas une suggestion. La transformation du dumpling frit au gulab jamun demande du temps — le processus osmotique ne peut être accéléré."
          },
          {
            "state": "Perfect",
            "description": "Enflé, très doux, uniformément doux jusqu'au centre. Le sirop a pris une légère note laiteuse des boulettes. Ils donnent au toucher le plus léger d'une cuillère.",
            "action": "Servir au chaud avec une cuillère de sirop. Préchauffé dans un micro-ondes pendant 20 secondes juste avant de servir les ouvre magnifiquement."
          },
          {
            "state": "Overdone",
            "description": "Les boulettes ont trempé pendant plus de 24 heures dans un environnement chaud et sont devenues si saturées qu'elles commencent à s'effondrer au toucher.",
            "action": "Servir soigneusement et doucement. Ils sont encore délicieux — seulement manier le moins possible. La prochaine fois, réfrigérer après la température ambiante de 2 heures si ne pas manger jusqu'à plus tard."
          }
        ]
      },
      "feelCue": "Soulevez un jamun de gulabs trempé sur une cuillère et inclinez - le; il devrait trembler comme un flan ferme ou une figues mûres, ne pas tenir rigide comme une boule. Pressez-le très doucement et le sirop devrait s'échapper légèrement aux bords. C'est le signe d'un jamun de gulab complètement saturé, parfaitement trempé."
    }
  ]
};
