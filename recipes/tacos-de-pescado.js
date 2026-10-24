export default {
  "repoId": "master_mexican_tacos_de_pescado_001",
  "parentRepoId": null,
  "slug": "tacos-de-pescado",
  "author": "ForkRecipe Kitchen",
  "title": "Tacos de poissons de Baja",
  "description": "Des poissons blancs bercés de la côte de la Basse-Californie — incroyablement légers, éclatants et croustillants, cousus dans des tortillas de maïs chaudes avec du chou déchiqueté, du crema de chipotle et une pression de citron vert qui coupe à travers la richesse comme un couteau. La nourriture de rue à son plus honnête.",
  "cuisine": "Mexicain",
  "culture": "Baja Californie",
  "category": "seafood",
  "tags": [
    "poisson-tacos",
    "Mexique",
    "Baja",
    "frits",
    "Choux",
    "Créma"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 4,
    "bitter": 1,
    "umami": 2,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filets de poissons blancs fermes (mahi-mahi, morue ou flétan), sans peau",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "tilapia",
        "snapper",
        "Poisson-chat"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Farine à usage général",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Bière à lager glacé",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": [
        "eau pétillante pour sans alcool"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Cumin, sol",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Paprika fumé",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile neutre pour friture profonde (végétable ou tournesol)",
      "ratioValue": 1,
      "defaultUnit": "L",
      "substitutions": [
        "huile de canola"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Structure",
      "name": "Tortilles de maïs, chaudes",
      "ratioValue": 12,
      "defaultUnit": "tortillas",
      "substitutions": [
        "tortillas de farine"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Choux verts, finement déchiquetés",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "choux violets",
        "Mélange de griffes préfabriquées"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Dairy",
      "name": "Crème crème ou aigre mexicaine",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": [
        "yogourt grec"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Spice",
      "name": "Piments chipotles en adobo, hachés",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "sauce chaude + 1/2 c. à thé paprika fumé"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Citrus",
      "name": "Limes fraîches, coupées en quartiers",
      "ratioValue": 3,
      "defaultUnit": "limes",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Herb",
      "name": "Coriandre fraîche, grossièrement déchirée",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "persil à feuilles plates pour coriandre-averse"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Garnish",
      "name": "Jalapeños marinés ou salsa frais",
      "ratioValue": 1,
      "defaultUnit": "to taste",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire crema de chipotle",
      "inputs": [
        "ing_11",
        "ing_12"
      ],
      "outputState": "chipotle_crema",
      "instructions": "fouetter les chipotles hachés dans l'adobo dans le crème jusqu'à ce qu'ils soient complètement combinés. Commencez par la moitié du chipotle et du goût — il devrait être fumé, crémeux et modérément épicé. La chaleur fleurit après une minute de contact, alors goûtez encore avant d'ajouter plus. Transférer dans une bouteille de pression ou un petit bol. Réfrigérer jusqu'à ce qu'il soit prêt à l'emploi.",
      "visualCue": {
        "primaryTarget": "Une crème aux teintes oranges avec des taches visibles de chipotle rouge-brun. Assez lisse pour arroser mais assez épaisse pour tenir sa forme sur le taco.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Créma blanc clair sans fumée ni chaleur. Chipotle non encore incorporé.",
            "action": "Frottez plus vigoureusement et goûtez à nouveau. La sauce adobo est aussi importante que le poivre lui-même."
          },
          {
            "state": "Perfect",
            "description": "Orange pâle, agréablement fumé et épicé. Coats une cuillère dans un film mince. Le niveau de chaleur est abordable mais présent.",
            "action": "Couvrir et réfrigérer. Les saveurs vont s'approfondir pendant 15 minutes."
          },
          {
            "state": "Overdone",
            "description": "Le crème est profondément orange et très épicé — trop chaud pour la plupart des invités.",
            "action": "Whisk in more plain crema to dilute. La chaleur de chipotle est pardonne et peut toujours être coupée."
          }
        ]
      },
      "feelCue": "Goûtez une petite quantité sur l'extrémité de votre langue — la fumée devrait arriver d'abord, puis la crème, puis le bâtiment de chaleur doucement à l'arrière de la gorge."
    },
    {
      "nodeId": "step_2",
      "action": "Mélanger la pâte à bière",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_04"
      ],
      "outputState": "beer_batter",
      "instructions": "Dans un grand bol, fouetter la farine, la poudre à pâte, le sel, le cumin et le paprika ensemble. Faites un puits au centre et versez dans la bière glacée tout à la fois. Whisk juste jusqu'à ce qu'il soit combiné — les morceaux sont les bienvenus, le surmenage construit du gluten et la pâte sera difficile. La pâte doit être la consistance de la pâte à crêpes mince. Gardez la pâte froide; placez le bol sur la glace si votre cuisine est chaude.",
      "visualCue": {
        "primaryTarget": "Une pâte mince et lâche avec quelques morceaux restants. Tan pâle avec des taches de paprika rouge. Des bulles montant de la carbonation de la bière — c'est ce qui rend la croûte légère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches de farine encore visibles. Farine sèche non entièrement incorporée.",
            "action": "Plier encore quelques fois avec une spatule — mais arrêter à l'incorporation, pas la douceur."
          },
          {
            "state": "Perfect",
            "description": "Mince, versable, légèrement bosselé. Exécute le fouet dans un mince ruban. Toujours carboné et légèrement mousseux sur le dessus.",
            "action": "Utiliser immédiatement pendant le froid et le carbonate."
          },
          {
            "state": "Overdone",
            "description": "La batte est lisse et élastique. Pas de bulles. Sensé. Produira une croûte dure et panée plutôt qu'une croûte croustillante et aérée.",
            "action": "fouetter un peu plus de bière froide pour se détendre et réintroduire la carbonation."
          }
        ]
      },
      "feelCue": "Plongez un doigt et laissez couler la pâte — elle devrait tomber dans un rideau mince et fluide, et non dans des gouttes épaisses. La pâte froide fait de la croûte légère; la pâte chaude fait de la croûte lourde."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "ing_01",
        "beer_batter",
        "ing_08"
      ],
      "outputState": "fried_fish",
      "instructions": "Chauffer l'huile dans un pot profond et lourd à 185°C (365°F). Couper le poisson en bandes d'environ 2,5 cm × 8 cm. Pat complètement sec. Travailler en lots de 4 à 5 bandes, tremper chaque morceau dans la pâte, laisser couler l'excès pendant 2 secondes, puis descendre doucement dans l'huile. Faire frire 3 à 4 minutes, en tournant une fois, jusqu'à ce que la pâte soit d'or profond et que le poisson flotte librement. Égoutter sur un porte-fils au-dessus d'une casserole — jamais sur une serviette en papier, qui vapeur la croûte douce.",
      "visualCue": {
        "primaryTarget": "Pâte d'ambre dorée profonde, blister et gonflée avec poches d'air de la carbonation. Le poisson flotte à la surface de l'huile. Une pièce levée de l'huile doit se vapeur visiblement et sonner creux lorsqu'elle est tapée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La batte est blonde pâle et semble encore humide à la surface. Le poisson coule dans l'huile plutôt que de flotter. La chair interne est toujours translucide.",
            "action": "Retourner à l'huile et vérifier la température — il peut avoir baissé de surpeuplement. Faire frire en petits lots."
          },
          {
            "state": "Perfect",
            "description": "Croûte ambre profonde, flottante, cloquée et croustillante. Les poissons à l'intérieur sont opaques et flocons propres lorsqu'une pièce est cassée ouverte. La croûte semble creuse quand on la tape.",
            "action": "Égoutter sur un porte-fils et assaisonner avec une pincée de sel immédiatement, à chaud."
          },
          {
            "state": "Overdone",
            "description": "La croûte est brun foncé et très épaisse. Les bords sont fragiles. Les poissons à l'intérieur peuvent commencer à sécher.",
            "action": "Égoutter immédiatement. L'extérieur peut être paré des morceaux les plus sombres. Prochain lot : réduire le temps d'alevage de 30 à 45 secondes."
          }
        ]
      },
      "feelCue": "Appuyez légèrement sur la croûte avec un bout de doigt — elle doit se croquer et se briser sous pression, et ne pas compresser doucement comme une éponge humide. Si elle donne sans craquer, l'huile était trop froide."
    },
    {
      "nodeId": "step_4",
      "action": "Assembler",
      "inputs": [
        "fried_fish",
        "ing_09",
        "ing_10",
        "chipotle_crema",
        "ing_13",
        "ing_14",
        "ing_15"
      ],
      "outputState": "finished_fish_tacos",
      "instructions": "Tortilles chaudes directement sur une flamme de gaz ou une grille sèche jusqu'à ce qu'elles soient pliables et légèrement carbonisées aux bords. Doublez-les (le style traditionnel Baja prévient le soggisme). Calque : une pincée de chou cru, 2 à 3 bandes de poissons chauds, une bruine de chipotle crème, une dispersion de coriandre et une bande de salsa ou de jalapeños marinés. Terminer avec une forte pression de citron vert. Mangez immédiatement — la croûte sur le poisson est une chose vivante et mourante qui commence à ramollir le moment où il est habillé.",
      "visualCue": {
        "primaryTarget": "Un taco à la vapeur, légèrement suralimenté. La croûte du poisson est encore visible et dorée au-dessus du chou. Crema scintille dans des rubans blanc orangé. Le jus de citron vert brille à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tortilla non chauffée. Cabotage placé sous le poisson, rendant la tortilla soggy. Pas d'acide appliqué.",
            "action": "Le jus de citron vert n'est pas négociable — le taco est incomplet sans sa luminosité. Chauffer la tortilla ou elle se déchirera."
          },
          {
            "state": "Perfect",
            "description": "Tortilla est chaude et flexible. Le poisson est chaud, croustillant et visible au-dessus des garnitures. Chaque morsure a le chou froid croquant, poisson croustillant chaud, crème fumé, et le citron vert vive.",
            "action": "Mangez immédiatement, le tenant dans les deux mains."
          },
          {
            "state": "Overdone",
            "description": "Les poissons s'asseyaient trop longtemps et la croûte était molle. Crema a trempé la tortilla.",
            "action": "Pour le tour suivant : habiller et manger immédiatement, un taco à la fois de la casserole."
          }
        ]
      },
      "feelCue": "La première bouchée devrait vous donner trois textures en une : la légère mâche de la tortilla chaude, la croûte pointue et ensuite le flocon du poisson, et la fraiche touche de chou frais."
    }
  ]
};
