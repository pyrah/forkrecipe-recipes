export default {
  "repoId": "master_thai_thaipadthai_001",
  "parentRepoId": null,
  "slug": "thai-pad-thai",
  "author": "ForkRecipe Kitchen",
  "title": "Thaï Pad Thaï",
  "description": "Des nouilles de riz charriées de Wok avec des crevettes, des oeufs glissants et le punch de tamarin, ont fini avec un tas de germes de haricots et d'arachides grillées — chaque brin de dégustation de wok hei.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "seafood",
  "tags": [
    "Produits de la mer",
    "Sans gluten",
    "Thaï",
    "nouilles",
    "crevettes",
    "Tamarin",
    "wok"
  ],
  "difficulty": 3,
  "activeTime": "25 min",
  "totalTime": "45 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 4,
    "sour": 3,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Nouilles de riz sen lek séchées (3mm de large)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "Nouilles à bâton de riz"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Crevettes crues, pelées et décortiquées",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "tofu pour végétarien",
        "poulet"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Oeufs",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Pâte de tamarin (à base de concentré)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "3 c. à soupe de jus de lime + 1 c. à soupe de sucre brun"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Sauce de poisson",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce de soja"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre de palme ou cassonade",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile végétale ou saindoux",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Allium",
      "name": "Échalotes, tranchées finement",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Structure",
      "name": "Choux de haricots",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Cacahuètes grillées, hachées approximativement",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Garnish",
      "name": "Oignons verts coupés en morceaux de 2 cm",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Acid",
      "name": "Coins de citron vert",
      "ratioValue": 1,
      "defaultUnit": "lime",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Umami",
      "name": "Crevettes séchées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "sauce de poisson supplémentaire"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrater",
      "inputs": [
        "ing_01"
      ],
      "outputState": "soaked_noodles",
      "instructions": "Placer les nouilles de riz séchées dans un grand bol et couvrir d'eau à température ambiante. Tremper de 25 à 30 minutes jusqu'à ce qu'ils soient souples et souples, mais encore légèrement fermes. Drainez bien. Ne trempez pas dans l'eau bouillante : le bouillonnement adoucit trop les nouilles avant qu'elles ne frappent le wok, et elles vont se transformer en bouillir sous la chaleur du wok.",
      "visualCue": {
        "primaryTarget": "Les nouilles sont pliables et se plient facilement en U sans craquelure, mais résistent quand elles sont pliées à 90 degrés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les nouilles se cassent quand elles sont pliées. Toujours blanc opaque. Encore 10 minutes.",
            "action": "Continuer à tremper dans l'eau à température ambiante."
          },
          {
            "state": "Perfect",
            "description": "Les nouilles sont translucides et flexibles, mais ont une bouchée ferme au centre. Égoutter immédiatement.",
            "action": "Égoutter et utiliser en moins de 15 minutes — les nouilles trempées continuent de ramollir."
          },
          {
            "state": "Overdone",
            "description": "Les nouilles sont entièrement molles et molles, se pliant dans n'importe quelle direction sans résistance. Ils vont se désintégrer dans le wok.",
            "action": "Cuire très brièvement — 30 secondes maximum dans le wok, ajouter la sauce rapidement pour arrêter la cuisson."
          }
        ]
      },
      "feelCue": "Une nouille thaï bien trempée doit se sentir comme un bracelet en cuir ferme — flexible mais avec la colonne vertébrale, pas comme un ruban mouillé."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "pad_thai_sauce",
      "instructions": "Dans une petite casserole, mélanger la pâte de tamarin, la sauce de poisson et le sucre de palme. Chauffer à feu moyen, en remuant jusqu'à ce que le sucre se dissout complètement et que la sauce soit uniforme. Bouche: Il doit être un mélange équilibré de aigre, salé et sucré — ajuster avec plus de tamarin pour aigre, sauce de poisson pour salé, ou sucre pour sucré. L'équilibre devrait s'appuyer légèrement sur la saveur douce.",
      "visualCue": {
        "primaryTarget": "Sauce brun foncé et brillant sans cristaux de sucre visibles. La consistance d'un caramel mince et versable.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Cristaux de sucre encore visibles; la sauce a deux textures distinctes.",
            "action": "Continuer à remuer à feu doux jusqu'à dissolution complète."
          },
          {
            "state": "Perfect",
            "description": "Une sauce brun foncé uniforme qui a un goût équilibré : sur le devant, doux au milieu, salé. Il verse comme de la sauce de soja.",
            "action": "Réserver à la température ambiante — elle se conservera pendant des semaines."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite trop loin et est en train de devenir d'épaisseur de bonbons.",
            "action": "Ajouter 1 c. à soupe d'eau et remuer pour se détendre."
          }
        ]
      },
      "feelCue": "Plongez le doigt : la sauce thai doit toucher trois notes en séquence – aigre, doux, puis une longue finale salée. Toute note dominant signifie que l'équilibre est annulé."
    },
    {
      "nodeId": "step_3",
      "action": "Faire revenir",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_14",
        "ing_02"
      ],
      "outputState": "cooked_shrimp_aromatics",
      "instructions": "Chauffer un wok sur la plus haute chaleur possible jusqu'à ce qu'il fume. Ajouter l'huile. Lorsque l'huile mijote et que les flocons de fumée apparaissent, ajouter l'ail et les échalotes — elles doivent étourdir immédiatement et vigoureusement. Faire frire 30 secondes. Ajouter les crevettes séchées en cas d'utilisation, lancer 15 secondes. Ajouter les crevettes crues en une seule couche. Cuire 1 minute sans bouger, puis lancer. Les crevettes devraient être presque cuites mais pas tout à fait.",
      "visualCue": {
        "primaryTarget": "Les crevettes sont roses à l'extérieur, à peine translucides au point le plus épais. L'aromatisme est légèrement doré et parfumé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crevette est encore grise et translucide. L'aromatisme sent cru.",
            "action": "Faire cuire 30 secondes de plus sur la chaleur maximale."
          },
          {
            "state": "Perfect",
            "description": "Les crevettes sont rose à 80% avec un noyau faiblement translucide. L'aromatisme est doré et les odeurs de wok hei — fumé et salé.",
            "action": "Poussez sur les côtés et ajoutez les nouilles."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes ont été entièrement enroulées et caoutchouteuses avant d'ajouter les nouilles.",
            "action": "Retirer et ajouter à la fin pour éviter de trop cuire."
          }
        ]
      },
      "feelCue": "Le wok doit rugir avec le grésillement quand les ingrédients frappent — si ce n'est pas, la chaleur est insuffisante et le plat sera huileux plutôt que wok-charred."
    },
    {
      "nodeId": "step_4",
      "action": "Mélanger",
      "inputs": [
        "cooked_shrimp_aromatics",
        "soaked_noodles",
        "pad_thai_sauce",
        "ing_03",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "finished_pad_thai",
      "instructions": "Ajouter les nouilles égouttées au wok. Verser la sauce thai. Jetez constamment pendant 1-2 minutes. Poussez tout d'un côté, fendez les œufs dans le côté vide, et brouillez rapidement jusqu'à ce qu'ils soient à peine fixés, puis repliez-vous dans les nouilles. Ajouter les pousses de haricots et les oignons verts, mélanger deux fois et servir immédiatement. Garnir de cacahuètes. Servir avec de la sauce de poisson, des flocons de chili, du sucre et des quartiers de citron vert à table.",
      "visualCue": {
        "primaryTarget": "Les nouilles sont également enrobées d'un glaçure brun caramel, avec des morceaux visibles d'œuf, de crevettes roses et des flecks d'oignon vert.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les nouilles sont pâles et insuffisamment enrobées de sauce. L'oeuf est encore humide et arrosé.",
            "action": "Verser sur la chaleur maximale pendant 1 minute de plus — les nouilles ont besoin d'un contact direct avec le charbon."
          },
          {
            "state": "Perfect",
            "description": "Les nouilles sont profondément dorées avec des bords carbonisés occasionnels, la sauce est brillante et uniformément distribuée, l'oeuf est en rubans dorés. Des odeurs de wok hei et de tamarin.",
            "action": "Plaquer immédiatement et ajouter les garnitures."
          },
          {
            "state": "Overdone",
            "description": "Les nouilles collent et se brisent en segments courts; la sauce est complètement absorbée et le wok est sec et brûlant.",
            "action": "Ajouter un jet d'eau et jeter rapidement pour libérer. Tout de suite."
          }
        ]
      },
      "feelCue": "Le tampon fini thai devrait vapeur agressivement quand plaqué — la chaleur, le tamarin, et le wok char arrivent tous dans un nuage de parfum qui est aigre, fumé, et profondément salé à la fois."
    }
  ]
};
