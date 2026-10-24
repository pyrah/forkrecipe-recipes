export default {
  "repoId": "master_greek_prawn_saganaki_001",
  "parentRepoId": null,
  "slug": "prawn-saganaki",
  "author": "ForkRecipe Kitchen",
  "title": "Saganaki crevé",
  "description": "Crevettes prunes cuites dans une tomate bouillonnante et sauce ouzo, enterrées sous une dalle de feta émiettée qui adoucit sans fondre, son salinité tirant toute la tomate sucrée et la crevette Briny ensemble dans quelque chose d'irrésistible. Un plat de taverne grec fait pour un morceau de pain et un verre de vin blanc froid.",
  "cuisine": "Grec",
  "culture": "Grec",
  "category": "seafood",
  "tags": [
    "saganaki",
    "crevettes",
    "grec",
    "tomates",
    "Féta",
    "cuits"
  ],
  "difficulty": 2,
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
    "sweet": 2,
    "salty": 4,
    "sour": 3,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Crevettes crues avec coquilles, si possible tête (16/20 ct)",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "grandes crevettes pelées et dépeintes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Fromage feta, émietté en gros morceaux",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Feta d'âge barillé pour plus de pungence"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "tomates entières en conserve de San Marzano, concassées à la main",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "tomates fraîches mûres, râpées",
        "tomates concassées"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Échalotes, coupées finement",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Solvent",
      "name": "Ouzo ou pernod",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": [
        "vin blanc sec",
        "Pastis"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "flocons de chili rouges séchés",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "piment frais, tranché"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Origan frais, feuilles seulement",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "Origan séché, 1 c. à thé"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Persil frais à feuilles plates, approximativement haché",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel de mer fin et poivre noir",
      "ratioValue": 1,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Sweetener",
      "name": "Pince de sucre",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "miel, 1/2 c. à thé"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Garnish",
      "name": "Pain cru, pour servir",
      "ratioValue": 1,
      "defaultUnit": "loaf",
      "substitutions": [
        "Pita pain"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Construire une base de tomates",
      "inputs": [
        "ing_06",
        "ing_04",
        "ing_05",
        "ing_08",
        "ing_03",
        "ing_09",
        "ing_12",
        "ing_11"
      ],
      "outputState": "tomato_sauce",
      "instructions": "Chauffer l'huile d'olive dans une poêle de 25 à 30 cm (de préférence en fonte ou en saganaki en céramique) à feu moyen. Ajouter les échalotes et cuire 3-4 minutes jusqu'à ce qu'elles soient adoucies. Ajouter l'ail et les flocons de chili, remuer 30 secondes. Ajouter l'ouzo — il s'enflammera dramatiquement si on utilise un brûleur à gaz; inclinez la poêle loin de vous et laissez les flammes mourir naturellement (environ 10 secondes). Verser les tomates broyées à la main et leurs jus, ajouter l'origan et une pincée de sucre. Laisser mijoter de 8 à 10 minutes, en remuant occasionnellement, jusqu'à ce que la sauce s'épaississe et s'assombrisse légèrement. Assaisonner de sel et de poivre.",
      "visualCue": {
        "primaryTarget": "Une épaisse sauce tomate rouge brique qui tient sa forme lorsqu'une cuillère est tirée à travers elle, avec juste un léger réservoir d'huile rouge formant aux bords. La sauce doit être parfumée avec la note d'anis de ouzo.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse, les tomates sont encore molles et croustillantes. Exécute à remplir immédiatement quand une cuillère la sépare.",
            "action": "Continuer à mijoter: les tomates doivent se décomposer et se concentrer."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, brillant, sauce rouge foncé. Il tient un canal quand une cuillère la sépare. Des odeurs de tomates cuites, d'herbes et un murmure d'anis. Un mince film d'huile d'olive rouge aux bords.",
            "action": "Nez les crevettes dans la sauce."
          },
          {
            "state": "Overdone",
            "description": "La sauce est devenue sombre et pâteuse, commençant à coller au fond de la poêle. Ça sent profondément concentré, presque jammy.",
            "action": "Ajouter 2 à 3 cuillères à soupe d'eau et remuer avant d'ajouter les crevettes."
          }
        ]
      },
      "feelCue": "Tenez votre main sur la poêle — la vapeur qui s'élève de la sauce doit sentir la tomate et le vin et peu d'anis, comme une cuisine d'été grecque."
    },
    {
      "nodeId": "step_2",
      "action": "Ajouter les crevettes et les fetas",
      "inputs": [
        "tomato_sauce",
        "ing_01",
        "ing_02"
      ],
      "outputState": "assembled_saganaki",
      "instructions": "Préchauffer le four à 220°C (425°F). Nettoyez les crevettes dans la sauce tomate bouillonnante en une seule couche, en les pressant doucement. Épargnez le feta émietté et autour des crevettes en gros morceaux irréguliers — ne l'écrasez pas trop finement, vous voulez des morceaux visibles qui restent distincts lorsqu'ils sont cuits. Le feta devrait couvrir peut-être 60% de la surface, laissant des espaces de tomate visibles.",
      "visualCue": {
        "primaryTarget": "Crevettes disposées en une seule couche, toujours grises, nichées dans la sauce rouge. De grands morceaux irréguliers de fetas blanches éparpillés au sommet comme des chutes de neige sur une terre rouge. Sauce encore bouillonnant aux bords de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Crevettes empilées l'une sur l'autre. Feta s'est effondré trop finement en poudre. Sauce pas bouillonner avant d'aller au four.",
            "action": "Réorganiser les crevettes en une seule couche. La sauce doit être chaude avant d'entrer dans le four afin que le temps de cuisson soit précis."
          },
          {
            "state": "Perfect",
            "description": "Crevettes uniformément espacées en une seule couche. Gros morceaux de feta visibles avec des trous de sauce rouge entre. La poêle est chaude et la sauce mijote activement.",
            "action": "Dans le four immédiatement."
          },
          {
            "state": "Overdone",
            "description": "S/O — c'est une étape d'assemblage sans cuisson encore appliquée aux crevettes.",
            "action": "Allez au four."
          }
        ]
      },
      "feelCue": "La poignée de la poêle doit être chaude au toucher à partir de la poêle mijoter — le porter soigneusement au four et le placer sur la grille supérieure."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "assembled_saganaki"
      ],
      "outputState": "baked_saganaki",
      "instructions": "Cuire à 220°C (425°F) sur le support supérieur pendant 8-10 minutes. Les crevettes vont passer du gris au rose-orange, le feta va adoucir mais pas fondre (il tient sa forme contrairement à la plupart des fromages), et la sauce exposée autour des bords va buller et se concentrer, éventuellement attraper la couleur sur le bord de la poêle. La surface du feta peut prendre une touche de couleur dorée.",
      "visualCue": {
        "primaryTarget": "Les crevettes sont entièrement rose-orange dans l'ensemble. Feta s'est adoucie et peut montrer des bouts dorés sur les visages exposés. La sauce bouillonne activement aux bords. La cuisine sent la tomate rôtie, le fromage cuit et l'anis.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crevettes sont encore grises près de la tête. Feta chunks toujours blanc et ferme-aspect sans aucune couleur.",
            "action": "Retourner au four 2-3 minutes. Vérifiez en appuyant sur une crevette — elle doit se sentir ferme, pas squishy."
          },
          {
            "state": "Perfect",
            "description": "Toutes les crevettes sont entièrement orange-rose, même au point le plus épais près de la tête. Feta est crémeuse et douce, mais toujours intacte comme morceaux distincts. La sauce est profondément parfumée et légèrement caramélisée aux bords de la poêle.",
            "action": "Retirer du four. Scatter persil et se précipiter à la table."
          },
          {
            "state": "Overdone",
            "description": "Les queues de crevettes se sont contractées et ont commencé à se boucler fortement vers le haut, ce qui indique que la chair à l'intérieur a séché. Feta peut brunir agressivement.",
            "action": "Supprimer immédiatement. Pressez le citron sur le dessus pour ajouter l'humidité et l'acidité."
          }
        ]
      },
      "feelCue": "Appuyez sur la queue d'une crevette à travers la sauce — une crevette finie ressort fermement avec une résistance certaine, comme un gel ferme. Un snap caoutchouteux et serré, c'est trop cuit ; un squish doux, c'est moins cuit."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir et servir",
      "inputs": [
        "baked_saganaki",
        "ing_10",
        "ing_13"
      ],
      "outputState": "finished_prawn_saganaki",
      "instructions": "Amenez la poêle directement du four à la table — saganaki est une expérience à la table et doit être mangé de la casserole pendant qu'il est encore bouillonnant. Dispersez généreusement du persil frais sur le dessus. Servir avec des morceaux de pain croustillant pour glisser dans la sauce. Pour manger des crevettes coquillées: tordre la tête (le sucer — l'intérieur est extraordinaire), peler la coquille du corps, manger.",
      "visualCue": {
        "primaryTarget": "La casserole est toujours bouillonnante quand elle arrive à la table. Un tableau vif : crevettes roses vives, morceaux de feta blancs et dorés, sauce écarlate, persil vert vif. La vapeur s'élève.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poêle autorisée à refroidir avant de servir. La sauce a mis et perdu sa fluidité brillante. Feta s'est redressée.",
            "action": "Retournez brièvement à un four chaud (2 minutes) pour re-buller. Saganaki est toujours servi agressivement chaud."
          },
          {
            "state": "Perfect",
            "description": "Arrivé à la table encore étourdissant. La sauce est assez fine pour être mise dans le pain mais assez épaisse pour s'accrocher à la crevette. La feta est crémeuse et donne. La chambre sent la Grèce.",
            "action": "Mangez immédiatement avec du vin blanc froid."
          },
          {
            "state": "Overdone",
            "description": "Sans objet à cette dernière étape. Arrivez à la table rapidement et le plat parle d'elle-même.",
            "action": "Mangez chaud."
          }
        ]
      },
      "feelCue": "Un bon saganaki arrive en faisant un bruit — la bulle faible et paresseuse d'une sauce qui n'a pas tout à fait décidé d'arrêter la cuisson. Ce son, et l'odeur de la tomate et du feta cuit, est tout le plat qui s'annonce."
    }
  ]
};
