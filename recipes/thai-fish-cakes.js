export default {
  "repoId": "master_thai_thaifishcakes_001",
  "parentRepoId": null,
  "slug": "thai-fish-cakes",
  "author": "ForkRecipe Kitchen",
  "title": "Cakes Thai (Tod Mun Pla)",
  "description": "Des gâteaux de poisson bonifiés et chargés d'herbes pétrissent jusqu'à ce qu'ils ressortent, frits dans l'huile jusqu'à ce qu'ils soient dorés — l'énergie protéique des poissons, élevés à l'aide de feuilles de chaux kaffir et de pâte de curry rouge ardent.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "seafood",
  "tags": [
    "poissons",
    "Thaï",
    "frits",
    "Crêpes de poisson",
    "Tod-mun-pla",
    "Produits de la mer",
    "collation",
    "Apéritif"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filets de poissons blancs (tilapie, maquereau espagnol, ou snapper), sabotés",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "crevettes, grossièrement hachées (collées, texture légèrement différente)",
        "Poisson-chat"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Pâte de curry rouge thaïlandaise",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Pâte de curry vert thaïlandais (arôme plus brillant)",
        "pâte de curry jaune"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "Sauce de poisson",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce soja + une pincée de MSG pour végétalien"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Grand œuf",
      "ratioValue": 1,
      "defaultUnit": "pcs",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Feuilles de chaux kaffir, tige centrale enlevée, finement cuffonade",
      "ratioValue": 8,
      "defaultUnit": "pcs",
      "substitutions": [
        "zeste de chaux (1 c. à thé) — moins floral, utilisation en dernier recours"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Garnish",
      "name": "Haricots longs ou haricots verts, coupés en rondelles de 3 mm",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "Fèves de serpent",
        "chou vert finement tranché"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Starch",
      "name": "Farine de maïs",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "farine de riz (plus légère, plus croustillante)",
        "Amidon de tapioca"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile neutre, pour friture profonde",
      "ratioValue": 500,
      "defaultUnit": "ml",
      "substitutions": [
        "Huile de son de riz",
        "huile de tournesol"
      ]
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
        "ing_07"
      ],
      "outputState": "fish_paste",
      "instructions": "Coupez le poisson en morceaux bruts. Pulse dans un robot culinaire jusqu'à ce que le poisson se décompose en pâte grossière — environ 15 à 20 impulsions courtes. Ne pas mélanger à une purée lisse; vous voulez qu'il reste de la texture. Ajouter la pâte de curry, la sauce de poisson, l'oeuf et la fécule de maïs. Pulse 10 fois de plus à combiner. Puis passer du pulsation au traitement : tourner en continu pendant 30 à 45 secondes. Le mélange changera visiblement: il commence à se rassembler en soi, à s'éloigner des côtés du bol et à devenir collant et élastique. C'est le réseau de protéines de la myosine qui se forme, le même mécanisme qui fait des boules de poisson bondissantes. Cette étape n'est pas facultative.",
      "visualCue": {
        "primaryTarget": "Une pâte orange-rouge cohésive et légèrement collante qui s'accroche au bol du robot culinaire en une masse plutôt qu'en éclaboussures. La texture est comme du beurre d'arachide épais avec quelques petits flocons de poisson visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mouille et lâche — éclabousse plutôt que de se rassembler. Des morceaux visibles de poissons non transformés. Pas d'élasticité; le mélange coule lorsque le bol est renversé.",
            "action": "Continuer le traitement pendant encore 30 secondes. Gratter les côtés et recommencer. La transformation est brutale."
          },
          {
            "state": "Perfect",
            "description": "La pâte s'est rassemblée en une seule masse cohésive qui se déplace à peine lorsque le bol est bouché. Rouge-orange de la pâte de curry, légèrement brillant de l'œuf. Quand on en prend et qu'on l'étire, ça tire plutôt que de déchirer.",
            "action": "Transférer immédiatement dans un bol — le surtraitement réchauffera le poisson de la friction."
          },
          {
            "state": "Overdone",
            "description": "La pâte est chaude de friction et est devenue extrêmement collante et lisse, presque comme de la colle. Difficile à gérer.",
            "action": "Réfrigérer la pâte pendant 20 minutes avant de la façonner. La texture produira encore de bons résultats."
          }
        ]
      },
      "feelCue": "Coupez une cuillère à soupe de pâte et giflez-la entre vos paumes à plusieurs reprises — elle doit se sentir élastique et printanière, s'étirant sans déchirer et en arrière avec chaque gifle. Cette technique d'échafaudage développe le réseau protéique et est traditionnelle dans les cuisines thaïlandaises."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "fish_paste",
        "ing_05",
        "ing_06"
      ],
      "outputState": "seasoned_fish_paste",
      "instructions": "Transférer la pâte de poisson dans un bol. Ajouter la chaux kaffir et les haricots tranchés. Pliez fermement avec une spatule — pas doucement, mais avec une pression réelle pour distribuer les ajouts sans briser le réseau de protéines déjà développé. A ce stade, de nombreux cuisiniers thaïlandais giflent le mélange contre le bol 10–15 fois: soulever et jeter la pâte dans le bol pour chasser les bulles d'air et encore resserrer le réseau. Réfrigérer la pâte pendant 15 minutes — le refroidissement facilite la formation.",
      "visualCue": {
        "primaryTarget": "Une pâte rouge-orange avec des taches visibles de feuille de lime de kaffir vert profond et des rondelles de haricots vert vif réparties dans tout. La pâte devrait contenir un pic lorsqu'elle est écorcée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lime kaffir et haricots assis sur le dessus, non incorporés. La pâte est humide et ne tient pas forme.",
            "action": "Plier plus fermement. Si elle est encore trop humide, réfrigérer 10 minutes et plier à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Haricots et chaux kaffir distribués uniformément. La pâte tient un pic clair lorsqu'elle est écopée d'une cuillère et libérée. Refroidie et facile à manipuler.",
            "action": "Commencez à façonner immédiatement pendant le froid."
          },
          {
            "state": "Overdone",
            "description": "Coller surmené — très serré et difficile à façonner. Les haricots ont commencé à libérer du liquide et à le rendre humide.",
            "action": "Réfrigérer 10 minutes. Le bref reste permettra aux protéines de gluten et de myosine de se détendre légèrement."
          }
        ]
      },
      "feelCue": "Ramassez une poignée de pâte — elle devrait éplucher votre paume avec un éclat satisfaisant, ne laissant qu'un léger résidu. Si elle glisse dans une feuille de liquide, le réseau de protéines est sous-développé. S'il reste collé, il est parfaitement développé."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "seasoned_fish_paste",
        "ing_08"
      ],
      "outputState": "fried_fish_cakes",
      "instructions": "Chauffer l'huile dans un wok ou une poêle profonde à 175°C (350°F). Mouiller vos paumes avec de l'eau froide. Scoop 2 cuillères à soupe tasées de pâte et se forment en un disque plat de 1,5 cm d'épaisseur et de 7 cm de diamètre — ils devraient ressembler à des rondelles de hockey, pas des balles. Glissez doucement dans l'huile. Fry 4-5 à la fois sans fouler. Cuire 2 à 3 minutes de chaque côté jusqu'à ce qu'il y ait un brun doré profond partout. Les gâteaux flotteront et souffleront légèrement pendant qu'ils cuisineront — un bon signe. Testez l'un en coupant en deux: il doit être cuit à travers sans centre translucide et une texture intérieure dense et généreuse.",
      "visualCue": {
        "primaryTarget": "Des disques bruns dorés qui flottent à la surface de l'huile, légèrement gonflés. Flacons vert visible de chaux kaffir et de haricots qui pèlent dans la croûte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Surface pâle, saturée d'huile. Les gâteaux coulent plutôt que de flotter. Gris brut au centre lors de l'essai.",
            "action": "Retournez à l'huile. Les cakes à brochettes indiquent que la température de l'huile a baissé à cause de l'engorgement."
          },
          {
            "state": "Perfect",
            "description": "De couleur dorée profonde, flottant avec confiance, la surface craque et légèrement cloquée. Bouffer fermement en appuyant avec une cuillère. Intérieur: uniformément blanc, dense, springy.",
            "action": "Égoutter sur des serviettes en papier et les servir immédiatement — ils perdent la croustillant rapidement."
          },
          {
            "state": "Overdone",
            "description": "Très brun foncé, croûte dure et cassante. Les haricots à l'intérieur sont devenus vert armée et ont perdu leur couleur.",
            "action": "Égoutter bien sur les serviettes en papier et servir immédiatement avec un rafraîchissement de concombre pour compenser l'intensité."
          }
        ]
      },
      "feelCue": "Appuyez sur le dessus d'un gâteau fraichement frit avec une cuillère — il devrait ressortir de façon décisive, comme presser une gomme en caoutchouc ferme. Un réseau bien développé de myosine produit cette générosité distinctive. Si elle donne sans retomber, le réseau protéique est sous-développé."
    },
    {
      "nodeId": "step_4",
      "action": "Saison",
      "inputs": [
        "fried_fish_cakes"
      ],
      "outputState": "finished_fish_cakes",
      "instructions": "Égoutter sur des serviettes en papier pendant 60 secondes seulement — trop longtemps et elles refroidissent et perdent leur crépitement. Disposer sur une assiette de service. Servir immédiatement avec du ragoût de concombre thaï (jat): concombre fine et échalote dans du vinaigre sucré avec des arachides concassées et de la coriandre. Le plaisir frais et aigu n'est pas un accompagnement facultatif — c'est le contrepoint que demande la richesse.",
      "visualCue": {
        "primaryTarget": "Gâteaux dorés brillants sur une assiette blanche, qui brillent encore légèrement de la frite. Les feuilles d'herbes vertes sont visibles à la surface. La vapeur monte doucement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Égoutter trop longtemps — la surface est ternie à mate et la croûte s'est vaporisée douce de l'humidité interne.",
            "action": "Faire revenir 30 secondes d'huile très chaude pour re-crisper l'extérieur."
          },
          {
            "state": "Perfect",
            "description": "Surface dorée, légèrement éblouissante. Son de crise quand tapoté avec un ongle. L'intérieur est encore très chaud: la vapeur s'échappe lorsqu'elle est coupée.",
            "action": "Servir dans les 3 minutes suivant la friture."
          },
          {
            "state": "Overdone",
            "description": "Servi après 10+ minutes de repos — la surface est devenue soyeuse, les herbes vertes se sont flétries et sont devenues sombres.",
            "action": "Brisez vite. La prochaine fois, frire en petits lots plus près du service."
          }
        ]
      },
      "feelCue": "Prenez - en un — il doit se sentir ferme et rigide avec une surface sèche et craquelée. Bite à travers: la résistance de la croûte cède la place à un intérieur dense et printanier avec une qualité presque mâcheuse de la myosine développée. La feuille de tilleul de kaffir doit éclater en coups individuels de citrus floral."
    }
  ]
};
