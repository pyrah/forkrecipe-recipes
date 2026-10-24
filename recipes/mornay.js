export default {
  "repoId": "fork_french_mornay_001",
  "parentRepoId": "master_french_bechamel_001",
  "slug": "mornay",
  "parentSlug": "bechamel",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce Mornay",
  "description": "L'enfant le plus riche de Béchamel : la base de velours fondue avec Gruyère et Parmigiano et liée brillante avec un jaune d'œuf. C'est la sauce sous le couvercle bronzé d'un croque-monsieur et dans chaque grand gratin.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "sauces",
  "tags": [
    "sauce",
    "français",
    "fromage",
    "Gratin",
    "mère-sauce-dérivée"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2025-06-09",
  "updatedAt": "2025-06-09",
  "forkNote": "Béchamel fini avec Gruyère et Parmesan, enrichi d'un jaune d'œuf – la sauce au fromage de gratins et croque-monsieur.",
  "changes": {
    "ingredientsAdded": 3,
    "ingredientsRemoved": 0,
    "ingredientsModified": 0,
    "stepsAdded": 1,
    "stepsRemoved": 0,
    "stepsModified": 1
  },
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Lait entier (chauffé)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "2% lait",
        "moitié-moitié pour une sauce plus riche"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": [
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": [
        "Wondera pour une sauce à l'épreuve des grumeaux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.2,
      "defaultUnit": "part",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Noix de muscade fraîchement râpée",
      "ratioValue": 0.02,
      "defaultUnit": "part",
      "substitutions": [
        "une pincée pré-gérée, dans une pincée"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poivre blanc",
      "ratioValue": 0.04,
      "defaultUnit": "part",
      "substitutions": [
        "poivre noir si ça ne vous dérange pas les taches"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Gruyère (gré)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Comté",
        "Emmental"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Glutamate",
      "name": "Parmigiano-Reggiano (grâce)",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": [
        "Grana Padano",
        "Pecorino pour un bord plus net"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Binder",
      "name": "Jaune d'œuf",
      "ratioValue": 0.5,
      "defaultUnit": "part",
      "substitutions": [
        "omettre pour une sauce plus légère et moins brillante"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Cuire le roux",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "white_roux",
      "instructions": "Faire fondre le beurre à feu moyen-doux jusqu'à ce qu'il mousse mais ne brunisse pas. fouetter la farine en même temps et cuire en remuant constamment, pendant 2-3 minutes pour faire cuire le goût de la farine crue tout en gardant le roux pâle. Gardez-le blanc — un Mornay devrait goûter du fromage, pas de la farine grillée.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse et pâle de la couleur du sable humide, desserrant comme il cuit et sentant faiblement la croûte de tarte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte sent toujours cru et farineux, sans arôme de la poêle.",
            "action": "Continuez à remuer sur le feu encore une minute pour faire cuire l'odeur crue."
          },
          {
            "state": "Perfect",
            "description": "Plongée et légèrement bouillonnante, la couleur de l'os, odeur de croûte courte chaude. Ça bouge comme de la lave sous le fouet.",
            "action": "Il est prêt pour le lait."
          },
          {
            "state": "Overdone",
            "description": "Tanné à blond et sentant la noix.",
            "action": "Recommencer pour une saveur de fromage propre – un roux grillé boueux le Gruyère."
          }
        ]
      },
      "feelCue": "Le roux traîne contre le fouet comme une pâte épaisse, puis se détend. Il siffle doucement et ne devrait jamais craquer."
    },
    {
      "nodeId": "step_2",
      "action": "Société",
      "inputs": [
        "white_roux",
        "ing_01"
      ],
      "outputState": "loose_bechamel",
      "instructions": "Courir dans le lait chaud, fouettant dur et constamment — le premier tiers lentement pour construire une pâte lisse, puis le reste dans un verser stable. Le sifflement constant est ce qui le garde libre.",
      "visualCue": {
        "primaryTarget": "Un liquide mince, uniforme, sans morceaux de la couleur de la crème, juste commencer à vapeur, avec le fouet laissant des sentiers de décoloration.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lumps de roux bob dans le lait mince; la sauce semble granuleuse et cassée.",
            "action": "Whisk different pour les briser ou passer par un tamis fin avant de continuer."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse et versable comme une crème lourde, avec un léger éclat. Les sentiers de fouet se ferment lentement.",
            "action": "Porter à un doux mijoter pour épaissir."
          },
          {
            "state": "Overdone",
            "description": "Le lait ajouté trop vite et chaud a brûlé le fond, flanquant la sauce brune.",
            "action": "Verser dans une poêle propre, laissant la couche brûlée derrière."
          }
        ]
      },
      "feelCue": "Chaque éclaboussure de lait relâche la résistance sous le fouet jusqu'à ce que l'épais squuelch de pâte devienne un slosh doux."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "loose_bechamel"
      ],
      "outputState": "nappe_bechamel",
      "instructions": "Laisser mijoter doucement de 8 à 10 minutes, fouettant souvent, jusqu'à ce que la sauce épaississe pour napper la consistance — assez épaisse pour enrober l'arrière d'une cuillère. Construisez-le légèrement plus épais qu'un béchamel uni; le fromage le desserrera plus tard. Assaisonner légèrement de sel, de muscade et de poivre blanc, en se rappelant que les fromages apportent leur propre sel.",
      "visualCue": {
        "primaryTarget": "Une sauce épaisse et brillante qui enveloppe la cuillère; un doigt tiré à travers laisse un canal propre qui tient et ne renverse pas.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mince et aqueuse, en courant de la cuillère lorsque le canal se ferme instantanément.",
            "action": "Laisser mijoter plus longtemps pour évaporer l'eau et gélatiniser l'amidon."
          },
          {
            "state": "Perfect",
            "description": "Velours et assez épais pour napper, tombant du fouet dans un ruban lisse, le sel retenu.",
            "action": "Tirez du feu et laissez le bouillonnement s'arrêter avant d'ajouter du fromage."
          },
          {
            "state": "Overdone",
            "description": "Collée et raide, collante comme de la pâte, la surface est terne.",
            "action": "fouetter dans un jet de lait chaud pour ramener un ruban versable."
          }
        ]
      },
      "feelCue": "Le fouet rencontre une résistance constante, même ; la sauce s'épanouit paresseusement avec des bulles lentes et lourdes et des odeurs de lait cuit sucré."
    },
    {
      "nodeId": "step_4",
      "action": "Faire fondre le fromage",
      "inputs": [
        "nappe_bechamel",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_04"
      ],
      "outputState": "finished_mornay",
      "instructions": "Hors de la chaleur — et cela importe, parce que le fromage bouillant devient gras et à cordes — fouetter dans le Gruyère et Parmigiano une poignée à la fois jusqu'à ce que chaque fondu. Tempérer le jaune: fouetter une louche de la sauce tiède dans le jaune, puis fouetter dans le pot. La chaleur résiduelle fait cuire et épaissit le jaune sans le brouiller. Réglez le sel en dernier.",
      "visualCue": {
        "primaryTarget": "Une sauce laquée, très brillante, de la couleur de la paille pâle qui tombe dans une épaisse feuille satinée — pas de liquéfaction de l'huile à la surface, pas de ficelles traînant le fouet.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Grainé avec du fromage non dissout, ou mince et pâle parce que le jaune n'a pas mis; le fromage s'accroche au fouet.",
            "action": "Frottez patiemment la chaleur; si elle a trop refroidi, retournez à la chaleur la plus douce pendant quelques secondes à la fois jusqu'à ce qu'elle soit lisse."
          },
          {
            "state": "Perfect",
            "description": "Lisse uniformément, brillant et épaissi par le jaune, il recouvre la cuillère et goûte de la noix Gruyère et du parmesan salé sur la crème.",
            "action": "Utiliser immédiatement sur les gratins ou les croques, ou tenir au chaud avec du plastique pressé à la surface."
          },
          {
            "state": "Overdone",
            "description": "Broyé et huileux, avec de la graisse de fromage sur le dessus et des caillés à cordes — la sauce était trop chaude ou bouillie.",
            "action": "Retirez la chaleur et fouettez dans une éclaboussure de lait froid pour réémulsionner; fouettez dur pour le ramener ensemble."
          }
        ]
      },
      "feelCue": "Au fur et à mesure que le fromage fond, la sauce devient plus lourde et plus soyeuse sous le fouet et l'arôme fleurit — sucré, noisette, salé. Il doit verser comme du satin chaud, jamais caoutchouteux ou pleurer de graisse."
    }
  ]
};
