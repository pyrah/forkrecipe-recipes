export default {
  "repoId": "master_japanese_miso_glazed_eggplant_001",
  "parentRepoId": null,
  "slug": "miso-glazed-eggplant",
  "author": "ForkRecipe Kitchen",
  "title": "Nasu Dengaku",
  "description": "Aubergine japonaise cassée laquée dans un miso blanc doux-savori, grillée jusqu'à ce que la surface caramélise à l'ambre profond et la chair sous s'effondre pour donner de la soie. Un plat d'opposés: l'omble amer sur l'umami miellé, la peau ferme sur l'intérieur tremblant.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "vegetables",
  "tags": [
    "végétalien",
    "Japonais",
    "Sans gluten",
    "umami",
    "grillés"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Aubergines japonaises (nasu)",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "Aubergines chinoises",
        "Aubergine italienne (causée dans le sens de la longueur, marquée plus profondément)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Miso blanc (shiro miso)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "miso jaune doux",
        "mugi miso (utiliser moins — il est plus salé)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Mirin",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "1 c. à thé sucre dissous dans 2 c. à thé saké"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Solvent",
      "name": "Mâcher",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "sherry sec",
        "Vermouth sec"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "Chérie",
        "sucre brun léger"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile de sésame",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "huile neutre avec quelques gouttes d'huile de sésame grillée"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Graines de sésame grillées",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Échalote, mincement tranchée sur le biais",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "shiso chiffonade",
        "micro shiso"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Score",
      "inputs": [
        "ing_01"
      ],
      "outputState": "scored_eggplant",
      "instructions": "Coupez les aubergines dans le sens long. À l'aide d'un couteau à parure tranchante, marquer la face coupée dans un motif de coupe croisée profonde — couper environ les deux tiers dans la chair à des intervalles de 1 cm dans les deux sens sans percer la peau. Ce score est critique : il permet à la chaleur de pénétrer et à l'huile de sésame de s'infiltrer dans la chair, empêchant la vapeur de diviser la peau et raccourcissant considérablement le temps de torréfaction. Appuyez légèrement sur le visage coupé pour ouvrir légèrement la grille.",
      "visualCue": {
        "primaryTarget": "Une grille en diamant de coupes visibles à travers la chair d'ivoire pâle, à environ 1 cm d'écart, assez profonde pour voir la profondeur de la coupe mais ne pas briser la peau violette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les découpes sont peu profondes, seulement en grattant la surface. La grille est à peine visible et la chair est encore bien fermée.",
            "action": "Le couteau devrait pénétrer au moins la moitié de l'épaisseur de l'aubergine."
          },
          {
            "state": "Perfect",
            "description": "Une grille en diamant claire et sûre de soi coupe la peau mais intacte. La chair s'ouvre légèrement comme un motif de gaufres lorsque les moitiés sont pressées.",
            "action": "Badigeonner d'huile de sésame et procéder à la torréfaction."
          },
          {
            "state": "Overdone",
            "description": "Les découpes ont percé la peau par endroits, créant des trous dans l'extérieur violet.",
            "action": "Procéder — l'aubergine aura encore un excellent goût, la peau sera juste moins intacte quand elle sera servie."
          }
        ]
      },
      "feelCue": "La lame doit glisser à travers la chair spongieuse, chargée de graines, avec presque aucune résistance, comme couper à travers la mousse dense."
    },
    {
      "nodeId": "step_2",
      "action": "Brosse",
      "inputs": [
        "scored_eggplant",
        "ing_06"
      ],
      "outputState": "oiled_eggplant",
      "instructions": "Badigeonner généreusement le visage coupé avec de l'huile de sésame, en travaillant l'huile dans les coupes croisées avec le pinceau. Flip et brosser une fine couche sur le côté de la peau. L'huile de sésame sert un double devoir : elle empêche le collage et donne un profond parfum de noix qui étouffe la chair pendant le rôti. Étaler un plateau de cuisson avec du papier et déposer les moitiés d'aubergines coupées vers le bas.",
      "visualCue": {
        "primaryTarget": "Les faces coupées scintillent avec une fine couche d'huile uniforme, les coupes de diamant légèrement poolées d'huile. La chair ne présente pas de taches blanches sèches.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "chair pâle et sèche avec l'huile seulement à la surface. Les coupes semblent sèches et serrées.",
            "action": "Appliquer une autre passe d'huile, presser le pinceau dans les coupes marquées."
          },
          {
            "state": "Perfect",
            "description": "Chaque coupe contient une petite réserve d'huile. La surface brille uniformément sans égoutter l'excès sur le plateau.",
            "action": "Placer le côté coupé sur le plateau doublé de feuilles."
          },
          {
            "state": "Overdone",
            "description": "L'huile s'accumule fortement sur le plateau sous l'aubergine, sans rester dans la chair.",
            "action": "Conseil légèrement pour laisser l'excès d'huile s'écouler — procéder, l'aubergine ne souffrira pas."
          }
        ]
      },
      "feelCue": "Le pinceau doit glisser sur une surface légèrement résistante et spongieuse. La chair sécable boit dans l'huile — si elle s'accumule et s'écoule immédiatement, les coupes sont trop peu profondes."
    },
    {
      "nodeId": "step_3",
      "action": "Rôtis",
      "inputs": [
        "oiled_eggplant"
      ],
      "outputState": "softened_eggplant",
      "instructions": "Faire rôtir le côté coupé dans un four de 220°C (425°F) pendant 12 à 15 minutes, jusqu'à ce que la chair soit complètement tendre lorsqu'elle est percée d'une baguette ou d'une brochette et que les faces coupées prennent une couleur or clair au contact du plateau. Cette torréfaction initiale effondre les poches d'air dans la chair d'aubergine spongieuse et chasse l'humidité, qui concentre la saveur et crée la bonne base pour la glaçure à adhérer. Ne précipitez pas cette étape — l'aubergine sous -done aura une morsure amère et spongieuse.",
      "visualCue": {
        "primaryTarget": "L'aubergine a nettement rétréci et les visages coupés montrent une couleur dorée-brun clair où ils ont contacté le plateau. Une baguette ne rencontre aucune résistance lorsqu'elle est poussée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'aubergine conserve toujours sa forme originale, se sent ferme lorsqu'elle est pressée. Les visages coupés sont pâles et à la vapeur plutôt que colorés.",
            "action": "Retourner au four 3-4 minutes de plus. L'aubergine doit être entièrement livrée avant le vitrage."
          },
          {
            "state": "Perfect",
            "description": "L'aubergine s'est effondrée et ramollie, les peaux sont légèrement ridées, les visages coupés montrent un fond en or clair. Une brochette passe avec une résistance nulle.",
            "action": "Flip, appliquer la glaçure dengaku, et passer à la grille."
          },
          {
            "state": "Overdone",
            "description": "L'aubergine est très sombre en dessous, les peaux se décomposent et commencent à se raccommoder agressivement. La chair est musquée.",
            "action": "Tirez immédiatement et éblouissez — l'étape du poulet de chair sera courte. La douceur supplémentaire est pardonnante dans le plat final."
          }
        ]
      },
      "feelCue": "Appuyez sur le côté de la peau avec un doigt — l'aubergine devrait donner complètement, s'effondrer comme un oreiller doux sans résistance ferme au cœur."
    },
    {
      "nodeId": "step_4",
      "action": "Whisk",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "dengaku_glaze",
      "instructions": "Alors que les aubergines rôtissent, mélanger miso blanc, mirin, saké et sucre dans une petite casserole à feu très doux. Whisk constamment pendant que le mélange se réchauffe — l'objectif est juste de dissoudre le sucre et de tout apporter dans une pâte lisse et homogène, de ne pas le cuire. La glaçure doit être chaude, fluide et extensible, la consistance du yogourt épais. Retirer du feu dès qu'il est lisse. Bouche : il doit être profondément salé, doux et équilibré et intensément parfumé.",
      "visualCue": {
        "primaryTarget": "Une pâte d'ambre lisse et brillante qui tombe du fouet dans un ruban épais et lent. Pas de morceaux de miso visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La glaçure est grumelée et le sucre n'a pas disparu. Le miso n'est pas entièrement incorporé.",
            "action": "Continuer à fouetter à feu doux jusqu'à ce qu'il soit complètement lisse."
          },
          {
            "state": "Perfect",
            "description": "Gloire, fluide, pâte ambre uniforme. Des gouttes du fouet dans un ruban lent et épais qui se dissout en lui-même.",
            "action": "Retirer du feu et réserver pour le vitrage."
          },
          {
            "state": "Overdone",
            "description": "La glaçure a commencé à buller, à s'assombrir aux bords et à s'épaissir trop. Ça sent le toast plutôt que l'arôme.",
            "action": "Retirer immédiatement du feu. Il se détendrea à mesure qu'il refroidira — mince avec une touche de saké si trop raide."
          }
        ]
      },
      "feelCue": "Le fouet doit répondre à une résistance douce qui disparaît — vous cherchez le moment où la pâte devient uniformément lisse et fluide plutôt que granuleuse ou séparée."
    },
    {
      "nodeId": "step_5",
      "action": "Glace",
      "inputs": [
        "softened_eggplant",
        "dengaku_glaze"
      ],
      "outputState": "glazed_eggplant",
      "instructions": "Dépliez les moitiés d'aubergines grillées afin que le visage coupé soit maintenant relevé. Spoon le dengaku glaçure généreusement sur chaque moitié, l'étendre aux bords avec le dos de la cuillère. La couche doit être assez épaisse pour être opaque — environ 3-4mm — de sorte qu'elle caramélise et chars légèrement au lieu de brûler fin. Ne soyez pas timide: une glaçure épaisse et généreuse est ce qui fait ce plat.",
      "visualCue": {
        "primaryTarget": "Chaque moitié d'aubergine est recouverte d'une épaisse glaçure, même ambre, qui atteint les bords de la chair. Pas de taches nues visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Petit, frottis inégal de glaçure, chair visible à travers elle en patchs.",
            "action": "Spoon plus glaçure et se propager à nouveau. Err du côté de la générosité."
          },
          {
            "state": "Perfect",
            "description": "Opaque, même couverture ambre. La glaçure est épaisse et légèrement bombée au centre, s'éclaircissant vers les bords.",
            "action": "Placez immédiatement sous la grille."
          },
          {
            "state": "Overdone",
            "description": "Tant d'éblouissement qu'il se met sur le plateau et glisse. L'aubergine se noie dans la pâte.",
            "action": "Utilisez une cuillère pour enlever un peu du plateau — mais honnêtement, un peu de glaçage caramélisé supplémentaire sur le plateau est délicieux raclé dos."
          }
        ]
      },
      "feelCue": "La cuillère doit glisser doucement sur la surface de l'aubergine molle, la glaçure se répandant comme du miel frais — épais et donnant, pas aqueux."
    },
    {
      "nodeId": "step_6",
      "action": "Finition",
      "inputs": [
        "glazed_eggplant",
        "ing_07",
        "ing_08"
      ],
      "outputState": "nasu_dengaku",
      "instructions": "Faire griller l'aubergine glacée moitié sous une grille chaude (ou salamandre) pendant 3 à 5 minutes, en regardant constamment. La glaçure devrait buller, puis caraméliser à l'ambre-brun profond avec des bords et des taches légèrement carbonisés — cette caramélisation maillard brunissante et douce est le caractère déterminant de dengaku. Retirer de la grille et laisser reposer 1 minute sur le plateau. Transférer dans les assiettes de service, disperser généreusement les graines de sésame grillées, et finir avec de l'échalon tranché. Servir immédiatement pendant que l'aubergine est encore molle et chaude.",
      "visualCue": {
        "primaryTarget": "Deep ambre à brun foncé glaçure aux bords carbonisés et taches foncées. La surface doit être mate et caramélisée, non brillante et humide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La glace est chaude mais encore pâle et brillante, sans brunissement ni carbonisation. C'est identique à avant de griller.",
            "action": "Revenez sous le grille-pain pendant 1 à 2 minutes de plus. Regardez attentivement: la ligne entre parfait et brûlé est étroite."
          },
          {
            "state": "Perfect",
            "description": "Deep ambre-brun, blister dans les taches, mat et légèrement collant. Les bords sont plus sombres. La cuisine sent intensément le miso caramélisé.",
            "action": "Supprimer immédiatement. Reposez 1 minute, puis garnissez et servez."
          },
          {
            "state": "Overdone",
            "description": "Des taches noires sur la plus grande partie de la surface. Une odeur d'acride et de miso brûlée plutôt que grillée.",
            "action": "Gratter soigneusement les zones les plus brûlées avec une cuillère. La chair en dessous est excellente et l'omble légèrement amer peut même être accueilli en petites quantités."
          }
        ]
      },
      "feelCue": "Le grilleur fera le sifflement de glaçure et la bulle — le son de la caramélisation active. Au moment où le bouillonnement s'abaisse et où la surface devient calme et mate, elle est prête."
    }
  ]
};
