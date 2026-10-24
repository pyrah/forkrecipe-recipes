export default {
  "repoId": "master_italian_semifreddo_001",
  "parentRepoId": null,
  "slug": "semifreddo",
  "author": "ForkRecipe Kitchen",
  "title": "Semifreddo al Limone",
  "description": "La réponse de l'Italie à la mousse congelée — un oreiller de crème fouettée et de meringue en suspension dans un doux froid, tranché pour révéler une coupe transversale de crème de citron d'or pâle qui donne instantanément sur la langue et disparaît sans trace de glace.",
  "cuisine": "Italien",
  "culture": "Italien",
  "category": "desserts",
  "tags": [
    "dessert",
    "congelés",
    "Italien",
    "citron",
    "mousse",
    "crème",
    "été",
    "Sans objet"
  ],
  "difficulty": 3,
  "activeTime": "35 min",
  "totalTime": "5 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 0,
    "sour": 3,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Double crème (crème lourde, 35%+ gras)",
      "ratioValue": 400,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Œufs séparés",
      "ratioValue": 4,
      "defaultUnit": "ea",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Sucre caster doré"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Citrons, zestes et jus non épilés",
      "ratioValue": 2,
      "defaultUnit": "ea",
      "substitutions": [
        "orangé sanguin (milder, belle couleur)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Garnish",
      "name": "Peau de citron confite ou baies fraîches",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "Pistaches grillées",
        "copeaux de chocolat noir"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whisk",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "lemon_zabaglione",
      "instructions": "Mettre les jaunes d'œufs, le sucre de castre, le zeste de citron et le jus de citron dans un bol thermofuge sur une casserole d'eau mijotante. fouetter vigoureusement et continuellement de 8 à 10 minutes jusqu'à ce que le mélange soit très épais, pâle et triple en volume — il devrait tenir un ruban épais pendant plusieurs secondes lorsque le fouet est levé. C'est la base de la zabaglione. Retirer du feu et continuer à fouetter jusqu'à ce que le bol se sente frais au toucher. La cuisson stabilise les jaunes de sorte que le semi-freddo reste aéré lorsqu'il est congelé.",
      "visualCue": {
        "primaryTarget": "Jaune pâle, épais et volumineux — le fouet laisse un sentier distinct qui tient pendant 3-4 secondes avant de se dissoudre. Le bol ne se sent pas plus chaud que le corps.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est encore mince et liquide. Jaune pâle mais pas d'augmentation du volume. Le ruban se dissout instantanément.",
            "action": "Continuer à fouetter sur la chaleur — les jaunes ont besoin d'une chaleur douce soutenue pour cuire et aérer simultanément."
          },
          {
            "state": "Perfect",
            "description": "Épais, pâle, volumineux. Le test du ruban tient clairement. Des odeurs de citron et d'oeuf cuits. Le bol est chaud mais pas chaud.",
            "action": "Retirer du feu et fouetter jusqu'à refroidir avant de plier."
          },
          {
            "state": "Overdone",
            "description": "De petits oeufs cuits sont visibles. Le mélange est granuleux ou grumelé.",
            "action": "Plongez immédiatement dans un tamis fin — de petits caillés peuvent être sauvés s'ils sont capturés tôt. Plus gros, ça veut dire recommencer."
          }
        ]
      },
      "feelCue": "Plongez un doigt dans la zabaglione — il devrait envelopper votre doigt d'une couche épaisse et veloutée qui tient sa forme sans dégoutter, comme une crème chaude."
    },
    {
      "nodeId": "step_2",
      "action": "Whip",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "whipped_components",
      "instructions": "Dans deux bols séparés: fouetter la crème double froide aux pics doux — il devrait tenir une forme mais être toujours soyeux et fluide, pas raide. Dans un bol séparé sans graisse, fouetter les blancs d'oeufs avec une pincée de sel jusqu'à ce qu'ils tiennent fermes et brillants pics. Ne pas déborder non plus — les deux doivent être aérés et légers, non rigides et secs. Conserver les deux au frais jusqu'à ce que nécessaire.",
      "visualCue": {
        "primaryTarget": "La crème tient un pic doux qui s'incline gracieusement au bout. Les blancs tiennent un pic ferme avec un léger virage — brillant et lisse, non sec.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème à peine épaissie: elle verse plutôt que les monticules. Les blancs sont mousseux et liquides.",
            "action": "Continuez à fouetter les deux — quelques minutes de plus avec un bol froid apportera de la crème à la bonne étape."
          },
          {
            "state": "Perfect",
            "description": "Crème : douce, bouillante, tient un pic qui tourne doucement. Blancs : brillants, fermes, les pics se tiennent avec un léger crochet à l'extrémité.",
            "action": "Plier immédiatement dans la zabaglione avant de perdre la structure."
          },
          {
            "state": "Overdone",
            "description": "La crème est devenue granuleuse et raide, et commence à se séparer vers le beurre. Les blancs sont secs et entassés.",
            "action": "La crème trop fouettée ne peut être corrigée. Blancs : ajouter un blanc non battu et plier doucement pour se détendre."
          }
        ]
      },
      "feelCue": "Exécutez une spatule à travers la crème – elle devrait laisser un sillon propre et défini qui tient ses bords, mais la crème de chaque côté est clairement légère et aérée, pas dense."
    },
    {
      "nodeId": "step_3",
      "action": "Plier",
      "inputs": [
        "lemon_zabaglione",
        "whipped_components"
      ],
      "outputState": "semifreddo_base",
      "instructions": "D'abord plier les blancs fouettés dans la zabaglione refroidie en deux ajouts, en utilisant une grande spatule avec un mouvement de coupe et de levage. Puis plier dans la crème fouettée en deux ajouts. Soyez doux et décisif — l'objectif est de conserver autant d'air que possible tout en réalisant un mélange entièrement uniforme et exempt de stries. La base finie doit être légère, de type mousse et jaune pâle. Verser dans une boîte de pain doublée de deux couches de film collant, avec beaucoup de surplomb de tous les côtés.",
      "visualCue": {
        "primaryTarget": "Jaune pâle, mousse et aéré. Pas de stries blanches de la crème ou des blancs. La surface tient sa forme bombée lorsque la spatule est levée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries blanches de crème ou de blanc encore visibles dans la base jaune. Le mélange est marbré et inégal.",
            "action": "Un ou deux plis plus prudents — arrêtez immédiatement quand les stries disparaissent."
          },
          {
            "state": "Perfect",
            "description": "Uniforme jaune pâle, aéré et volumineux. Un peu plus épais que la crème double mais clairement pas dense. Des odeurs de crème de citron fraîche.",
            "action": "Verser dans de l'étain préparé, plier le film sur le dessus et congeler."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a dégonflé à une consistance dense et lourde. Le volume a sensiblement diminué.",
            "action": "Procéder — le semifreddo gèlera dense plutôt que léger et mousseux. Toujours agréable mais moins éthéré."
          }
        ]
      },
      "feelCue": "Coupez une cuillère de la base et laissez-la tomber — elle doit couler dans une goutte lente, épaisse et se déposer avec un léger dôme, comme la crème molle, pas comme la crème liquide."
    },
    {
      "nodeId": "step_4",
      "action": "Gel",
      "inputs": [
        "semifreddo_base",
        "ing_05"
      ],
      "outputState": "finished_semifreddo",
      "instructions": "Pliez le film de collage sur la surface pour sceller complètement. Geler au moins 4 heures, de préférence pendant la nuit. Pour servir : déballer, retourner sur une assiette de service réfrigérée et éplucher le film de collage. Le semifreddo doit tenir sa forme propre et être facile à trancher avec un couteau chaud. Décorer le plateau avec de la peau de citron confite ou des baies fraîches. Couper en portions de 2 à 3 cm et servir immédiatement — il adoucit rapidement à température ambiante.",
      "visualCue": {
        "primaryTarget": "Un pain jaune pâle ferme qui tient parfaitement sa forme lorsqu'il est inversé et tranché. La surface de coupe est lisse et uniforme, pas glacée ou grossière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'intérieur est encore doux et mousseux lorsqu'il est tranché — il n'a pas complètement congelé. Ça s'effondre sur la plaque.",
            "action": "Retourner au congélateur pendant au moins 2 heures de plus. Un semifreddo entièrement congelé est ferme, mais pas dur."
          },
          {
            "state": "Perfect",
            "description": "Couper proprement avec un couteau chaud, en tenant sa forme sur l'assiette. La surface coupée est lisse, pâle et mate — aucun cristal de glace visible. Il fond immédiatement sur la langue sans aucun choc froid.",
            "action": "Décorer et servir immédiatement. Semifreddo est mieux consommé dans les 30 secondes suivant la coupe."
          },
          {
            "state": "Overdone",
            "description": "La roche dure — le couteau lutte pour couper et la surface montre une grande formation de cristal de glace. Gritty sur la langue.",
            "action": "Laisser refroidir à température ambiante pendant 8-10 minutes avant de trancher. La température de service idéale est de -8 C, pas -18 C."
          }
        ]
      },
      "feelCue": "Appuyez sur l'arrière d'une cuillère contre une surface fraîchement coupée — elle devrait se produire en douceur et laisser une impression peu profonde, puis maintenez cette forme sans que la surface ne craque ou ne s'effondre."
    }
  ]
};
