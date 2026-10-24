export default {
  "repoId": "master_british_kedgeree_001",
  "parentRepoId": null,
  "slug": "kedgeree",
  "author": "ForkRecipe Kitchen",
  "title": "Kedgeree",
  "description": "Le petit déjeuner britannique qui n'a jamais complètement oublié, c'était l'indienne, l'aiglefin fumé et le riz basmati parfumé de feuilles de curry et de cardamome, surmonté d'œufs et de persil, une collision coloniale qui est devenue sa propre chose distincte.",
  "cuisine": "Anglais",
  "culture": "Anglo-Indien",
  "category": "seafood",
  "tags": [
    "kedgeree",
    "d'aiglefin fumé",
    "riz",
    "britanniques",
    "Petit déjeuner",
    "anglais",
    "œufs"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 980,
  "forks": 82,
  "contributors": 24,
  "license": "CC-BY-SA",
  "createdAt": "2025-01-05",
  "updatedAt": "2025-05-11",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filet d'aiglefin fumé non teint",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "morue fumée",
        "hareng kippé"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Riz basmati (rincé)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Œufs (doux, coupés en deux)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Lait entier (pour l'aiglefin braconnier)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "eau"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "ghee"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Oignon jaune (en dés)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poudre de curry légère (style Madras)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "garam masala + curcuma"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Pousses de cardamome et feuilles de laurier",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Persil à feuilles plates (choupé)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "coriandre pour un style plus indien"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Poivre noir (fraîchir)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pocher",
      "inputs": [
        "ing_01",
        "ing_04"
      ],
      "outputState": "poached_haddock",
      "instructions": "Placer l'aiglefin fumé dans une grande casserole peu profonde, côté peau vers le bas. Verser le lait sur presque couvert. Ajouter une feuille de laurier et quelques grains de poivre. Porter à feu doux à feu moyen — ne pas faire bouillir. Pocher pendant 8-10 minutes jusqu'à ce que le poisson devienne opaque et flocon facilement. Retirez le poisson dans une assiette. Réservez le lait de pochage — il porte de la fumée et du sel qui assaisonneront le riz. Lorsque le poisson est assez frais pour être manipulé, retirez la peau et flocez-le en gros morceaux irréguliers.",
      "visualCue": {
        "primaryTarget": "Le poisson est uniformément opaque et blanc ivoire. La chair s'éclabousse en gros morceaux naturels lorsqu'une fourchette est pressée doucement contre la partie la plus épaisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre du poisson est encore gris translucide et résiste aux flocons. La chair est caoutchouteuse.",
            "action": "Continuez à braconner 3-4 minutes de plus. Le lait doit mijoter doucement, et non pas faire bouillir."
          },
          {
            "state": "Perfect",
            "description": "Entièrement opaque, flocons naturels, humide. La peau se libère proprement. Les grandes pièces se tiennent ensemble lorsqu'elles sont levées.",
            "action": "Retirer immédiatement du lait et réserver le liquide de pochage."
          },
          {
            "state": "Overdone",
            "description": "Le poisson se brise dans le lait. Les morceaux sont secs et s'écroulent en petits fragments.",
            "action": "Retirer immédiatement et manipuler soigneusement. Le poisson fonctionnera encore, mais la texture de gros flocons est perdue."
          }
        ]
      },
      "feelCue": "Un flocon d'aiglefin bien poché devrait se sentir humide et légèrement ferme entre les doigts — il résiste à la rupture en petits morceaux, laissant place à des lignes de grains naturelles."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "spiced_onion_base",
      "instructions": "Faire fondre le beurre dans un grand pot lourd à feu moyen. Ajouter l'oignon et cuire 10 minutes jusqu'à ce qu'il soit doux et doré. Ajouter les gousses de cardamome concassées, la feuille de laurier et la poudre de curry. Incorporer 1-2 minutes jusqu'à ce que les épices soient parfumées et ont fleuri dans le beurre. L'oignon doit être doux et parfumé avec le curry, la cardamome et la légère douceur de l'allium cuit. Enlever la feuille de laurier et les grosses pièces de cardamome avant d'ajouter du riz.",
      "visualCue": {
        "primaryTarget": "L'oignon est doré et doux, recouvert de beurre de curry jaune-orange profond. Les épices sont parfumées et bien distribuées. La casserole sent chaudement le curry et la cardamome.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore translucide et aiguisé. La poudre de curry semble pâle et crue.",
            "action": "Faire cuire 3-5 minutes de plus. Les épices ont besoin de l'oignon pour adoucir complètement d'abord."
          },
          {
            "state": "Perfect",
            "description": "Or, jammy, uniformément jaune du curry. Une odeur aromatique profonde et chaude, épicée mais pas dure.",
            "action": "Ajouter le riz et mélanger pour enrober."
          },
          {
            "state": "Overdone",
            "description": "La poudre de curry brûle et l'odeur est acride. L'oignon est très brun.",
            "action": "Ajouter immédiatement un jet de lait de pochage pour arrêter la combustion des épices."
          }
        ]
      },
      "feelCue": "Le curry fleuri dans le beurre a une fragrance ronde et chaude plutôt qu'une fragrance crue et tranchante — il sent l'intérieur d'un bon restaurant plutôt qu'un pot d'épices ouvert."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "spiced_onion_base",
        "ing_02",
        "ing_04"
      ],
      "outputState": "cooked_spiced_rice",
      "instructions": "Ajouter le riz rincé dans la casserole et mélanger pour enrober le beurre épicé. Verser 300 ml du lait de pochage réservé (rempli d'eau si nécessaire). Porter à ébullition, réduire le feu à très faible et couvrir soigneusement. Cuire 12 minutes sans lever le couvercle. Retirer du feu et laisser la vapeur couverte pendant 8 minutes. Le riz doit être entièrement cuit, parfumé d'épices et légèrement jaune du curry.",
      "visualCue": {
        "primaryTarget": "Le riz est uniformément cuit, moelleux et jaune-or du curry. Une fourchette tirée à travers des canaux de grains distincts. Pas de liquide de mise en commun.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz est toujours crayeux au centre. Les canaux à vapeur sont absents ou clairsemés. Une morsure d'amidon.",
            "action": "Remplacer le couvercle et la vapeur 5 minutes de plus sur la chaleur la plus basse possible."
          },
          {
            "state": "Perfect",
            "description": "Grains jaunes dorés, séparés. Propre et parfumé. La fourche glisse sans résistance.",
            "action": "Plier doucement dans les morceaux d'aiglefin."
          },
          {
            "state": "Overdone",
            "description": "Le riz s'est emparé et la couche de base est collante. Le lait de pochage a trop cuit et le fond brûle.",
            "action": "Retirer immédiatement du feu. Spoon du centre du pot."
          }
        ]
      },
      "feelCue": "Lever le couvercle du riz kedgeree bien cuit libère un panache de vapeur cardamome-curry qui sent comme le matin dans un siècle différent."
    },
    {
      "nodeId": "step_4",
      "action": "Incorporer délicatement",
      "inputs": [
        "cooked_spiced_rice",
        "poached_haddock",
        "ing_03",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_kedgeree",
      "instructions": "Plier doucement les flocons d'aiglefin dans le riz à l'aide d'une large spatule, en travaillant en larges mouvements prudents pour garder le poisson en gros morceaux. Ajouter les œufs mous (chaudés ou en quartiers) et disperser le persil haché sur le dessus. Assaisonner avec du poivre noir — le poisson fumé aura apporté un sel important, alors goûtez avant d'en ajouter. Servir directement de la casserole avec du beurre sur le côté.",
      "visualCue": {
        "primaryTarget": "Riz doré avec de grands flocons de poisson ivoire, persil vert vif, et le jaune d'or d'un oeuf doux visible partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'aiglefin et le riz sont en couches séparées. Le persil et les œufs n'ont pas été ajoutés.",
            "action": "Plier doucement mais complètement. Chaque cuillère doit contenir du riz et du poisson."
          },
          {
            "state": "Perfect",
            "description": "Riz doré uniformément distribué avec de grands flocons de poissons humides et des moitiés visibles d'oeufs. Le plat entier est parfumé et vibrant.",
            "action": "Servir immédiatement dans des bols chauds."
          },
          {
            "state": "Overdone",
            "description": "Haddock s'est cassé en très petits flocons à la suite d'un surmenage. Les jaunes d'œufs sont tombés dans le riz.",
            "action": "Servez quand même. La saveur est intacte — seule la texture du poisson a changé."
          }
        ]
      },
      "feelCue": "Un kedgeree bien fait sent le poisson fumé, l'épice chaude et le persil frais — trois choses qui n'ont pas d'affaires évidentes étant ensemble, tout en étant en parfaite harmonie."
    }
  ]
};
