export default {
  "repoId": "master_chinese_black_sesame_pudding_001",
  "parentRepoId": null,
  "slug": "black-sesame-pudding",
  "author": "ForkRecipe Kitchen",
  "title": "Poudre de sésame noir",
  "description": "Un pudding noir-jet, satiné construit sur de la pâte de sésame grillée — torréfié jusqu'à noisette et presque fumé, mélangé avec du lait de noix de coco et serti d'une gélose dans des dalles obsidiennes tremblantes qui s'éclaircissent et fondent sur la langue.",
  "cuisine": "Chinois",
  "culture": "Cantonais",
  "category": "desserts",
  "tags": [
    "végétalien",
    "Sans gluten",
    "Chinois",
    "cantonais",
    "dessert",
    "sésame"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "2 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Graines de sésame noir",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "pâte de sésame noir (utiliser 120 g, sauter l'étape toast)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau (pour mélange)",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Lait de coco plein gras",
      "ratioValue": 400,
      "defaultUnit": "ml",
      "substitutions": [
        "lait d'avoine pour version plus légère",
        "lait entier"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de roche, broyé ou caster",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "sucre de palme",
        "miel (pas pour végétalien)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Poudre de gélose",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "Feuilles de gélatine x4 (non véganes; fleurs en eau froide d'abord)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Eau (pour l'activation de la gélose)",
      "ratioValue": 100,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Pince de sel de mer fin",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire griller",
      "inputs": [
        "ing_01"
      ],
      "outputState": "toasted_sesame",
      "instructions": "Placer les graines de sésame noir dans une poêle sèche ou wok à feu moyen. Remuer ou tourner constamment — les graines de sésame brûlent en quelques secondes. Toast jusqu'à ce que les graines sautent dans la poêle, une fragrance de noix rôtie remplit la cuisine, et une petite pincée frottée entre les doigts libère un arôme intensément torréfié. Cela devrait prendre 3 à 5 minutes; ne pas s'éloigner. Transférer immédiatement dans une assiette fraîche pour arrêter la cuisson de report — les laisser dans la poêle chaude les poussera à l'amertume.",
      "visualCue": {
        "primaryTarget": "Les graines sautent. Un nuage parfumé, torréfié aux noix, se lève de la poêle. Quelques graines ont développé un léger reflet mat au lieu de noir plat.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines sont encore plates et silencieuses. Pas encore d'arôme. Les frotter entre les doigts ne produit aucun parfum.",
            "action": "Continuez à griller — la poêle n'est probablement pas encore assez chaude. Augmenter à moyenne-élevée et remuer constamment."
          },
          {
            "state": "Perfect",
            "description": "Ça saute. Parfum de sésame intense et presque fumé. Les graines dansent dans la poêle. Ils se frottent entre les doigts et sentent des noix grillées.",
            "action": "Astucez immédiatement sur une plaque fraîche ou une plaque de cuisson."
          },
          {
            "state": "Overdone",
            "description": "La fumée s'élève, les graines sentent acrides ou brûlées plutôt que noix. Certaines graines sont légèrement grises plutôt que noires profondes.",
            "action": "Jetez et recommencez: le sésame amer et brûlé ruinera tout le pudding. La marge entre parfait et brûlé est petite."
          }
        ]
      },
      "feelCue": "Appuyez sur une pincée de graines grillées entre vos doigts et portez - les près de votre nez — l'odeur devrait vous frapper comme un écrou chaud et rôti, et non comme un carbonisé."
    },
    {
      "nodeId": "step_2",
      "action": "Mixer",
      "inputs": [
        "toasted_sesame",
        "ing_02"
      ],
      "outputState": "sesame_paste",
      "instructions": "Transférer les graines grillées refroidies dans un mélangeur à haute puissance. Ajouter l'eau pour mélanger. Commencez à faible et augmentez progressivement à la vitesse maximale. Mélanger pendant 3 à 4 minutes, en grattant les côtés deux fois. Les graines deviendront d'abord une grosse poudre, puis un lisier gris foncé, puis enfin une pâte noire profonde, lisse et homogène, presque soyeuse. Si votre mélangeur lutte, ajoutez de l'eau une cuillère à soupe à la fois. Pour un pudding ultra lisses, filtrez la pâte à travers un tamis à mailles fines ou un sac à lait de noix, appuyez fermement pour extraire tout le liquide.",
      "visualCue": {
        "primaryTarget": "Une pâte complètement noire à jet sans particules visibles de graines. Lorsqu'une cuillère est retombée dans le mélangeur, elle se plie facilement sans grain.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Vous pouvez voir et sentir des fragments de graines individuels. La couleur est gris foncé plutôt que noir pur.",
            "action": "Mélanger encore 2 minutes à la vitesse maximale; ajouter de l'eau une cuillère à soupe à la fois si le mélangeur est en difficulté."
          },
          {
            "state": "Perfect",
            "description": "Pâte lisse complètement noire et soyeuse. Pas de grain visible. Elle coule lentement comme de la réglisse fondue. Sensation intense de sésame rôti.",
            "action": "La souche si désiré (pour un pudding plus raffiné) ou l'utilisation comme-est pour un résultat plus rustique et texturé."
          },
          {
            "state": "Overdone",
            "description": "Le mélangeur a surchauffé la pâte; elle sent peu l'huile brûlée. L'éclat huileux sur le dessus indique que les huiles se sont séparées.",
            "action": "Refroidissez la pâte pendant 10 minutes et reblendez brièvement — la séparation est cosmétique et n'affectera pas significativement la saveur finale."
          }
        ]
      },
      "feelCue": "Frottez la pâte entre les deux doigts — elle devrait être complètement lisse, comme du satin noir, sans grume qui pourrait attraper ou gratter."
    },
    {
      "nodeId": "step_3",
      "action": "Dissoudre",
      "inputs": [
        "ing_05",
        "ing_06"
      ],
      "outputState": "agar_solution",
      "instructions": "Dans une petite casserole, fouetter la gélose en poudre dans l'eau froide jusqu'à ce qu'elle soit complètement dispersée. N'ajoutez pas d'eau chaude — ajoutez la gélose au froid puis faites chauffer. Porter à ébullition à feu moyen, en fouettant constamment. Faire bouillir pendant exactement 2 minutes, en remuant pour dissoudre complètement — la gélose doit atteindre le point d'ébullition pour s'activer; une mijotée ne suffit pas. La solution doit être parfaitement limpide ou très faiblement trouble, sans granules de poudre visibles. Réserver brièvement, mais garder au chaud — la gélose commence à geler autour de 40°C et ne peut pas être re-liquée sans re-boiller.",
      "visualCue": {
        "primaryTarget": "Un liquide visqueux clair qui est nettement plus sirupeux que l'eau ordinaire lorsqu'il est versé de la cuillère. Entièrement clair sans taches de poudre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La solution semble encore légèrement granuleuse ou poussiéreuse. De petites taches blanches de poudre de gélose non dissoute sont visibles.",
            "action": "Continuer à bouillir et fouetter encore 60 secondes — la gélose a besoin d'un ébullition complet pour s'hydrater et s'activer."
          },
          {
            "state": "Perfect",
            "description": "Complètement clair à très faiblement laiteux. Plus épais que l'eau. Il tombe du fouet dans une mince feuille légèrement visqueuse.",
            "action": "Utilisez immédiatement pendant la chaleur — versez dans le mélange de lait de sésame avant qu'il ne commence à se mettre."
          },
          {
            "state": "Overdone",
            "description": "Le mélange s'est considérablement réduit et est devenu gelé dans la poêle. Il commence à se mettre avant d'être incorporé.",
            "action": "Ajouter un éclaboussure d'eau et ré-huiler brièvement pour re-liquéfier, puis incorporer immédiatement."
          }
        ]
      },
      "feelCue": "Inclinez la casserole — la solution de gélose devrait tourner au bord légèrement plus lentement que l'eau ne le ferait, avec une faible viscosité que vous pouvez voir mais à peine sentir."
    },
    {
      "nodeId": "step_4",
      "action": "Chauffer",
      "inputs": [
        "sesame_paste",
        "ing_03",
        "ing_04",
        "ing_07"
      ],
      "outputState": "sesame_milk",
      "instructions": "Verser le lait de coco dans une casserole moyenne à feu moyen. Ajouter la pâte de sésame, le sucre de roche concassé et le sel. fouetter doucement et continuellement jusqu'à ce que le mélange soit complètement combiné, le sucre s'est dissout, et le liquide est uniformément noir sans stries de pâte non diluée ou de crème de coco. Portez à un peu en dessous d'un ébullition — vous verrez la vapeur paresseuse et de petites bulles se former aux bords. Ne pas faire bouillir vigoureusement, car cela peut affecter la texture du lait de coco. Goûtez et ajustez la douceur : le pudding doit goûter agréablement sucré avec une forte saveur de sésame et juste un murmure de sel.",
      "visualCue": {
        "primaryTarget": "Un liquide à jet noir uniforme, lisse et aromatique qui s'évapore doucement. Pas de stries blanches de noix de coco. Pas de sucre visible. Un arôme de sésame profond remplit la cuisine.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries de crème de coco gris pâle sont encore visibles. Les cristaux de sucre sont encore visibles au fond de la casserole. La pâte de sésame n'est pas entièrement intégrée.",
            "action": "fouetter plus vigoureusement et augmenter légèrement la chaleur; tous les composants doivent être entièrement uniformes avant d'ajouter de la gélose."
          },
          {
            "state": "Perfect",
            "description": "Complètement uniforme, noir, liquide parfumé. Brûlant mais pas bouillant. Goûts équilibrés : doux, noisette, légèrement salé.",
            "action": "Retirer du feu et fouetter immédiatement dans la solution de gélose chaude."
          },
          {
            "state": "Overdone",
            "description": "Le liquide est à ébullition complète et a diminué de 10%+. Le lait de coco a un aspect légèrement huileux, fendue.",
            "action": "Retirer du feu, ajouter 2 cuillerées à soupe d'eau froide, fouetter pour ré-homogèner et procéder immédiatement."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt propre dans le mélange — il doit se sentir chaud et soyeux, pas gritty, et laisser une tache noire propre sur votre peau qui sent puissant de sésame grillé."
    },
    {
      "nodeId": "step_5",
      "action": "Faire prendre",
      "inputs": [
        "sesame_milk",
        "agar_solution"
      ],
      "outputState": "black_sesame_pudding",
      "instructions": "Travailler rapidement, verser la solution de gélose chaude dans le lait de sésame chaud dans un ruisseau mince tout en fouettant constamment. fouetter pendant 30 secondes pour distribuer complètement la gélose dans tout le mélange. Versez immédiatement une fine souche dans des tasses, des verres ou un moule plat légèrement huilé. Travail rapide — la gélose commence à se régler à partir d'environ 40°C et vous n'avez qu'une fenêtre de travail de 3 à 5 minutes. Appuyez doucement sur chaque moule sur le comptoir pour déloger les bulles d'air. Réfrigérer à découvert pendant 15 minutes jusqu'à ce qu'il soit réglé, puis recouvrir et réfrigérer au moins 2 heures avant de ne pas fondre ou servir.",
      "visualCue": {
        "primaryTarget": "Des puddings fermes, noirs-jets avec une surface lisse et légèrement brillante qui s'immolent proprement sur la plaque sans fissures ni oscillations.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pudding est encore douce ou liquide au centre après 2 heures de réfrigération. Il tremble trop librement et s'effondre lorsqu'il n'est pas mélangé.",
            "action": "Réfrigérer une autre heure; si la gélose n'était pas encore réglée, elle était insuffisante ou n'était pas complètement activée."
          },
          {
            "state": "Perfect",
            "description": "Assez ferme pour s'éclaircir et tenir sa forme sur la plaque. Léger jeu quand la plaque est tapotée, comme set panna cotta. La surface est mat-brillante et parfaitement lisse.",
            "action": "Démoudre et servir avec une bruine de lait condensé ou de crème de coco si désiré."
          },
          {
            "state": "Overdone",
            "description": "La pudding est très ferme et caoutchouteuse, rebondit dur, et la texture est désagréable — trop de gélose ou trop longtemps un cuisinier.",
            "action": "Couper en cubes et servir dans du lait de soja doux froid ou de l'eau de coco comme dessert tang yuan-style, où la texture plus ferme fonctionne mieux."
          }
        ]
      },
      "feelCue": "Passez un doigt sur la surface de l'ensemble — il devrait se sentir frais, absolument lisse, et assez ferme pour résister à une presse légère sans laisser une bosse."
    }
  ]
};
