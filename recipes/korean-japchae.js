export default {
  "repoId": "master_korean_japchae_001",
  "parentRepoId": null,
  "slug": "korean-japchae",
  "author": "ForkRecipe Kitchen",
  "title": "Japchae (Nouilles en verre coréen)",
  "description": "Des nouilles en verre de patate douce et translucide pétrissent avec des légumes de julienne arc-en-ciel — chaque composant cuit séparément puis rassemblé dans une sauce de soya-sésame-sucre — le plat de nouilles festive de Corée, né pour les célébrations et les pots, beau comme une tapisserie bijoutée.",
  "cuisine": "Coréen",
  "culture": "Coréen",
  "category": "vegetables",
  "tags": [
    "coréen",
    "nouilles",
    "nouilles de verre",
    "végétarien",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "45 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Dangmyeon (Nouilles sucrées en verre de pomme de terre)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "mung haricot vermicelli (différente texture mais esprit similaire)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Epinards frais, brièvement blanchis et pressés",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "vert chrysanthème",
        "cresson d'eau"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Carottes, julienned dans de fines allumettes",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "daikon radis (blanch bref)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "poivron rouge, julienned",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "poivron jaune ou orange"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Champignons chiitake, tiges enlevées et tranchées",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "shiitake séché, réhydraté (umami plus riche)",
        "Champignons d'huître"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Oignon, tranché finement",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Umami",
      "name": "sauce soja (ganjang)",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari certifié sans gluten"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Sweetener",
      "name": "Sucre (blanc)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "Chérie",
        "sirop d'érable"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Huile végétale",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Garnish",
      "name": "Graines de sésame grillées",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Garnish",
      "name": "Oeufs cuits en omelette fine et julienned (facultatif)",
      "ratioValue": 1,
      "defaultUnit": "egg",
      "substitutions": [
        "Oeuf frit, cassé sur le dessus"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation de nouilles",
      "inputs": [
        "ing_01"
      ],
      "outputState": "cooked_noodles",
      "instructions": "Portez une grande casserole d'eau à ébullition. Ajouter le dangmyéon et cuire 6 à 8 minutes, en remuant occasionnellement, jusqu'à ce que les nouilles soient complètement tendres — elles auraient dû être complètement transformées de blanc opaque à une translucence claire et vitreuse, avec une résistance satisfaisante à mâcher quand mordu. Ils ne devraient pas être gommés ou mous. Égoutter immédiatement et rincer sous l'eau froide pour arrêter la cuisson. Mélanger avec une cuillère à café d'huile de sésame pour éviter les accrochages. À l'aide de ciseaux, couper les nouilles en longueurs d'environ 15 cm — le dangmyéon est très long et peu maniable autrement. Mettez de côté.",
      "visualCue": {
        "primaryTarget": "Nouilles entièrement translucides et brillantes — complètement limpides comme du verre, avec un éclat semi-brillant uniforme et aucun centre opaque blanc restant dans aucune nouilles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les nouilles sont encore opaques ou blanches au centre quand vous mordez, avec un noyau crayeux et une texture ferme et raide plutôt que mâcheuse.",
            "action": "Continuer la cuisson pendant 1 à 2 minutes et tester à nouveau. Le dangmyéon sous-cuit est désagréablement dense et féculent dans le plat final."
          },
          {
            "state": "Perfect",
            "description": "Complètement translucide et vitreux, avec une morsure agréablement mâchante — printanière, non gommante — et une surface lisse et soyeuse.",
            "action": "Égoutter immédiatement et rincer à l'eau froide. Ajouter à l'huile de sésame et couper en longueur."
          },
          {
            "state": "Overdone",
            "description": "Les nouilles sont douces, glissantes et commencent à s'agglutiner ensemble — elles ont perdu leur mâche caractéristique et seront collantes dans l'agitation.",
            "action": "Rincer soigneusement à l'eau froide et mélanger avec de l'huile de sésame supplémentaire pour séparer. Ils seront plus doux dans le plat final mais encore comestibles."
          }
        ]
      },
      "feelCue": "Mordre une nouille en deux — elle devrait revenir légèrement au lieu de se déchirer facilement, avec une surface lisse et brillante qui glisse entre les dents. L'aspect en verre est le signal visuel fiable."
    },
    {
      "nodeId": "step_2",
      "action": "Légumes-séparés",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_11",
        "ing_08",
        "ing_12"
      ],
      "outputState": "stir_fried_vegetables",
      "instructions": "La clé de la beauté du japchae est de cuisiner chaque composant végétal séparément afin qu'ils conservent la couleur, la texture et la saveur individuelles. Chauffer un grand wok ou une poêle à feu vif. Tricoter un ingrédient à la fois, ajouter un mince film d'huile et remuer chaque légume brièvement : shiitake champignons, 3 minutes jusqu'à l'or et légèrement réduit; oignon à l'ail, 3 minutes jusqu'à translucide et adouci; carottes, 2 minutes, encore avec un peu de morsure; poivron rouge, 1-2 minutes, rouge vif; épinards (blanchis, pressés), 30 secondes à chauffer. Assaisonner chaque composant légèrement avec du sel au fur et à mesure. Laissez chaque lot refroidir légèrement sur des sections séparées d'une plaque ou d'un plateau — les garder séparés signifie que les couleurs restent vives lorsque vous rassemblez tout.",
      "visualCue": {
        "primaryTarget": "Une palette de légumes cuits individuellement — les shiitakes brun foncé, les carottes orange vif, le poivron rouge vif, les épinards verts jade — chacun conservant sa propre couleur et une texture distincte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont crus ou à peine cuits — l'oignon est encore aiguisé et piquant, les champignons n'ont pas libéré leur liquide, la carotte est dure.",
            "action": "Faire cuire chaque composant plus longtemps à feu vif. Les légumes crus saignent les saveurs crues dans le plat fini plutôt que de contribuer au caractère sucré et sauté."
          },
          {
            "state": "Perfect",
            "description": "Chaque légume est cuit mais conserve sa couleur, son arôme et sa légère morsure. Les champignons sont bordés d'or, la carotte est tendre mais pas boiteuse, le poivre est brillant et juste-douci.",
            "action": "Reposez chaque composant sur une assiette jusqu'à ce que tous les légumes soient cuits, puis mélangez avec des nouilles."
          },
          {
            "state": "Overdone",
            "description": "Les légumes sont surcuits, bruns et soggy, le poivron terne et gris, les épinards visqueux — les couleurs et les textures qui rendent le japchae beau sont partis.",
            "action": "Procéder — la saveur est toujours là même si l'impact visuel est muet. La prochaine fois, gardez la chaleur très élevée et les temps de cuisson courts."
          }
        ]
      },
      "feelCue": "Les champignons doivent avoir une légère mâche et une densité salée et charnue. La carotte doit se casser légèrement lorsqu'elle est mordue plutôt que d'être molle. Le poivron doit encore sentir frais et vif, pas cuit à la vapeur."
    },
    {
      "nodeId": "step_3",
      "action": "Combiner et assaisonner",
      "inputs": [
        "cooked_noodles",
        "stir_fried_vegetables",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "seasoned_japchae",
      "instructions": "Dans le plus grand bol que vous possédez, ou dans le wok à feu doux, combinez les nouilles cuites et tous les légumes frits. Dans un petit bol, fouetter ensemble la sauce de soja restante, l'huile de sésame et le sucre jusqu'à ce que le sucre se dissout. Verser cette sauce assaisonnée sur tout et mélanger doucement mais soigneusement avec des pinces ou deux fourchettes, soulever et plier les nouilles pour distribuer la sauce et les légumes uniformément. La sauce soya-sésame-doux devrait enrober chaque brin de nouilles et s'accrocher aux légumes. Goûtez et ajustez : plus de soja s'il a besoin de sel, plus d'huile de sésame pour la noix, plus de sucre pour équilibrer. La saveur doit être magnifiquement équilibrée: savoureuse, noisette, légèrement sucrée, profondément umami.",
      "visualCue": {
        "primaryTarget": "Un enchevêtrement scintillant et translucide de nouilles de verre aux couleurs végétales vives — tapisserie joaillière de noir, orange, rouge, blanc et vert — chaque brin recouvert d'un brillant de sésame foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce d'assaisonnement est mise en réserve au fond du bol plutôt que d'enrober les nouilles — le lancer n'a pas été assez complet, et les nouilles ont un goût fade.",
            "action": "Jetez plus vigoureusement et plus longtemps. Chaque nouilles doit être touchée par la sauce. Si les piscines de sauce, ajoutez-le en deux additions, en jetant entre chacune."
          },
          {
            "state": "Perfect",
            "description": "Chaque brin de nouilles porte un brillant de sésame visible et les légumes sont distribués uniformément. Le parfum est profondément salé avec la note savoureuse distinctive de l'huile de sésame. Le goût est équilibré et complexe.",
            "action": "Servir à la température ambiante, qui est traditionnelle, ou chaude — les deux sont excellents."
          },
          {
            "state": "Overdone",
            "description": "Sursaisonné — le plat est fortement salé à partir de trop de soja, ou l'huile de sésame domine et le plat entier a un goût huileux.",
            "action": "Blanchir une petite poignée de nouilles supplémentaires et les jeter à travers pour diluer. Ou ajouter une petite pincée de sucre pour contrebalancer le sel."
          }
        ]
      },
      "feelCue": "Exécutez vos doigts à travers les nouilles — ils doivent glisser et se séparer librement, et non s'écraser, revêtus d'un mince brillant uniforme. Soulevez un brin : il doit porter un enchevêtrement de couleur végétale avec lui, ne pas tout laisser tomber propre."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir et servir",
      "inputs": [
        "seasoned_japchae",
        "ing_13",
        "ing_14"
      ],
      "outputState": "finished_japchae",
      "instructions": "Transférer le japchae dans un grand plateau de service. Dispersez généreusement les graines de sésame grillées sur le dessus. Si l'on utilise la garniture d'oeufs, couper l'omelette fine en fines bandes juliennes et les arranger sur le dessus dans une pile lâche — ils ajoutent une richesse douce et une couleur dorée frappante contre les nouilles foncées. Le japchae est traditionnellement servi à la température ambiante, ce qui le rend idéal pour les fêtes et les repas communautaires — il peut être fait plusieurs heures à l'avance et s'améliore à mesure que la sauce continue à mariner les nouilles. Si vous servez au chaud, un court lancer dans un wok chaud pendant 2 minutes le ravivera.",
      "visualCue": {
        "primaryTarget": "Un plateau de nouilles en verre brillant et abondant, orné de couleurs, les graines de sésame attrapant la lumière, l'œuf julienne doré contre l'enchevêtrement sombre, célébrant et beau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le plat a l'air grisé et pâle — les graines de sésame sont manquantes ou clairsemées et les couleurs sont moins vibrantes qu'elles ne devraient l'être.",
            "action": "Ajoutez plus de graines de sésame grillées et flippez les nouilles pour exposer plus de légumes colorés à l'intérieur."
          },
          {
            "state": "Perfect",
            "description": "Un plateau scintillant et scintillant aux couleurs végétales vives visibles dans les nouilles brillantes, les graines de sésame dispersées généreusement, les bandes d'oeufs brillantes et dorées.",
            "action": "Servir à température ambiante. Ce plat est une célébration sur une assiette."
          },
          {
            "state": "Overdone",
            "description": "Le japchae a été fait trop loin à l'avance et les nouilles ont absorbé toute la sauce, tournant à sec et légèrement gommeux, les couleurs ternes.",
            "action": "Mélanger avec une petite bruine d'huile de sésame supplémentaire et de soja pour réanimer, et plisser avec des pinces à feu doux pendant 1 à 2 minutes."
          }
        ]
      },
      "feelCue": "Une baguette pleine de japchae doit se sentir soyeuse et productive — les nouilles de verre plus légères et plus délicates que les pâtes de blé, les légumes offrant une résistance douce. Le parfum de sésame grillé doit se lever avec la vapeur."
    }
  ]
};
