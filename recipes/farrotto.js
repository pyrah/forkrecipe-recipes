export default {
  "repoId": "master_italian_farrotto_001",
  "parentRepoId": null,
  "slug": "farrotto",
  "author": "ForkRecipe Kitchen",
  "title": "Farrocto al Parmigiano",
  "description": "Le risotto de Farro — de style risotto perlé, ladleful by ladleful, jusqu'à ce qu'il atteigne une texture crémeuse, glorieusement al dente avec plus de mâcher et de noix que Arborio n'a jamais pu offrir, fini avec la mantecatura classique de beurre froid et de parmesan.",
  "cuisine": "Italien",
  "culture": "Nord italien",
  "category": "grains",
  "tags": [
    "végétarien",
    "Italien",
    "Farro",
    "style risotto",
    "parmesan"
  ],
  "difficulty": 2,
  "activeTime": "35 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farro perlé (farro perlato)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "Farro semi-pair (ajouter 10 min à la cuisson)",
        "baies d'épeautre (ajouter 15 min)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon blanc (en dés)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "Échalotes (2 grandes)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail (mincées)",
      "ratioValue": 2,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Solvent",
      "name": "Vin blanc sec",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": [
        "Vermouth sec",
        "stock supplémentaire + 1 c. à thé vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Légumes et poulets chauds",
      "ratioValue": 1200,
      "defaultUnit": "ml",
      "substitutions": [
        "eau en cas d'urgence — puits de saison"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé (froid, cube, divisé)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Parmesan (finement râpé sur un microplan)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "Grana Padano",
        "Pecorino Romano (saltier — ajuster l'assaisonnement)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 4,
      "defaultUnit": "sprigs",
      "substitutions": [
        "Thym séché (1 c. à thé)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Poivre noir (fraîchir)",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Citrus",
      "name": "Zeste de citron",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saucisse",
      "inputs": [
        "ing_09",
        "ing_06",
        "ing_02",
        "ing_03",
        "ing_08"
      ],
      "outputState": "soffritto",
      "instructions": "Dans une grande casserole ou un brasseur à fond lourd, chauffer l'huile d'olive et 20 g de beurre ensemble à feu moyen-doux. Ajouter l'oignon, l'ail et le thym avec une pincée de sel. Cuire doucement, en remuant souvent, pendant 8 à 10 minutes jusqu'à ce que l'oignon soit complètement doux, translucide et productif — il ne devrait avoir absolument aucune couleur. C'est le soffritto; il fournit l'épine dorsale douce et aromatique du farrotto et doit être cuit bas et lent de sorte que les sucres naturels se développent sans caramélisation.",
      "visualCue": {
        "primaryTarget": "L'oignon est translucide, très doux, brillant dans le beurre et l'huile, et complètement incolore. L'ail est doux et parfumé. Le thym est flétri.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore opaque et a une légère croûte. Une odeur d'ail cru.",
            "action": "Abaissez la chaleur et continuez la cuisson. Un soffritto cuit trop vite produit une saveur dure et nette plutôt que la douceur nécessaire ici."
          },
          {
            "state": "Perfect",
            "description": "L'oignon est complètement translucide, doux et donne à la cuillère sans résistance. Pas de brunissement nulle part. Ça sent doux et doux.",
            "action": "Ajouter le farro et le toast immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les bords de l'oignon commencent à devenir dorés. Le beurre sent légèrement la noix.",
            "action": "Réduire immédiatement la chaleur. Une teinte dorée légère est acceptable, mais le plat sera légèrement moins délicat."
          }
        ]
      },
      "feelCue": "Le soffritto devrait se sentir presque fondre lorsque vous pressez un morceau d'oignon contre le côté de la casserole avec votre cuillère — complètement sans résistance, comme presser le beurre chaud."
    },
    {
      "nodeId": "step_2",
      "action": "Toast",
      "inputs": [
        "ing_01",
        "soffritto"
      ],
      "outputState": "toasted_farro",
      "instructions": "Ajouter le farro perlé au soffritto et mélanger pour enrober chaque grain dans le mélange de beurre et d'huile. Relever le feu à moyen. Faites cuire le farro, en remuant constamment, pendant 2 minutes jusqu'à ce que les grains semblent légèrement brillants et l'odeur de grains chauds et noisette — comme un doux arôme de popcorn. Cette étape de revêtement n'est pas strictement nécessaire pour le farro comme pour Arborio (qui absorberait trop de graisse), mais il parfume le grain et ajoute une profondeur subtile au plat fini.",
      "visualCue": {
        "primaryTarget": "Les grains de Farro sont légèrement brillants et translucides aux bords. La casserole sent le grain chaud, grillé et le beurre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Farro a l'air crayeux et mat sans éclat. Pas d'arôme grillé.",
            "action": "Continuer à griller pendant une minute, en remuant constamment à feu moyen."
          },
          {
            "state": "Perfect",
            "description": "Les grains scintillent avec de la graisse, légèrement translucide aux bords, et sentent doucement les grains grillés sans aucun changement de couleur.",
            "action": "Ajouter immédiatement le vin blanc."
          },
          {
            "state": "Overdone",
            "description": "Farro a commencé à devenir doré et sent la noix.",
            "action": "Ajouter le vin à la fois pour arrêter le toast. La noisette supplémentaire est agréable mais ne la prenez pas plus loin."
          }
        ]
      },
      "feelCue": "Mélanger le farro grillé et écouter — il devrait faire un son sec, légèrement vitreux que les grains enrobés de graisse murmurent l'un contre l'autre, et non l'entaille humide de grain cru."
    },
    {
      "nodeId": "step_3",
      "action": "Déglacement",
      "inputs": [
        "toasted_farro",
        "ing_04"
      ],
      "outputState": "wine_absorbed_farro",
      "instructions": "Versez le vin blanc dans la casserole tout d'un coup, il sifflera et s'évaporera de façon spectaculaire. Incorporer constamment jusqu'à ce que le vin soit presque entièrement absorbé, environ 2-3 minutes. Cette étape fait trois choses : elle déglace tous les morceaux salés du fond du pot, ajoute de l'acidité qui équilibrera la richesse du beurre et du parmesan à la fin, et commence le processus de coaxing de l'amidon du farro pour construire la sauce crémeuse. L'odeur d'alcool cru doit être complètement cuite avant d'ajouter la première louche de stock.",
      "visualCue": {
        "primaryTarget": "Le vin a été absorbé et le pot sent le parfum du vin sans alcool cru. Le farro semble légèrement brillant et le fond du pot est propre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le vin est encore visiblement mis en commun et vous pouvez sentir l'alcool brut fortement.",
            "action": "Continuer à remuer à feu moyen jusqu'à ce que le vin soit complètement absorbé et que l'odeur d'alcool brut soit disparue."
          },
          {
            "state": "Perfect",
            "description": "Le vin est absorbé, le fond en pot est clair. Farro a l'air brillant. L'odeur est de réduction de vin blanc — fruité et acide sans netteté.",
            "action": "Commencez à ajouter du stock une louche à la fois."
          },
          {
            "state": "Overdone",
            "description": "Le vin a tellement diminué que le farro commence à coller et à étourdir au fond.",
            "action": "Ajouter immédiatement la première louche de stock et racler le fond propre."
          }
        ]
      },
      "feelCue": "Lorsque vous faites glisser une cuillère dans le farro après l'absorption du vin, un canal court et propre doit apparaître avant que le mélange ne revienne lentement — c'est le premier signe de l'amidon qui commence à se libérer."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "wine_absorbed_farro",
        "ing_05",
        "ing_10"
      ],
      "outputState": "cooked_farrotto",
      "instructions": "Gardez le stock au chaud dans une casserole séparée — le stock froid arrêterait la cuisson et refroidirait le farro de façon inégale. Ajouter le stock une louche (environ 100-120 ml) à la fois, en remuant presque constamment et en attendant que chaque ajout soit presque absorbé avant d'ajouter le prochain. Maintenez une mijotée régulière et active tout au long de votre vie — jamais un ébullition, jamais un bassin statique. Après 25-30 minutes, le farro doit être al dente: tendre à l'extérieur avec une légère, satisfaisante mâche au centre. Assaisonner de sel. La base du risotto aura l'air assez lâche et soupeuse lorsqu'elle sera faite — c'est exact; la mantecatura le serrera.",
      "visualCue": {
        "primaryTarget": "Les grains de Farro sont al dente — tendre extérieur avec un léger mâcher au centre. La base est crémeuse et coule lentement quand le pot est renversé, comme un porridge très lâche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore assez fermes tout au long avec un centre féculent et crayeux.",
            "action": "Continuer à ajouter de la louche par la louche et la cuisson. Farro est plus indulgent qu'Arborio — il ne se tournera pas pour se bousculer rapidement."
          },
          {
            "state": "Perfect",
            "description": "Les grains sont tendres avec une mâche distincte mais agréable. La base est crémeuse de l'amidon libéré et coule lorsque le pot est secoué. Ça sent la noix et la savoureuse.",
            "action": "Retirer immédiatement du feu et passer à la mantecatura."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont entièrement mous sans distinction textuelle. La base est très épaisse, presque pâteuse.",
            "action": "Aller à la mantecatura immédiatement, être doux. Ajouter un éclaboussure plus de stock si la base est trop épaisse pour s'écouler."
          }
        ]
      },
      "feelCue": "Goûtez un grain de farro quand vous pensez qu'il est prêt — l'extérieur devrait donner comme un grain de pâtes cuites tandis que le centre offre une résistance douce, qui satisfait al dente morsure."
    },
    {
      "nodeId": "step_5",
      "action": "Monter",
      "inputs": [
        "cooked_farrotto",
        "ing_06",
        "ing_07",
        "ing_11",
        "ing_12"
      ],
      "outputState": "finished_farrotto",
      "instructions": "Retirer complètement la casserole du feu. C'est la mantecatura — la méthode italienne d'émulsion des graisses dans un risotto hors-chauffe pour créer une sauce crémeuse et unifiée. Ajouter les cubes de beurre froid restants (60 g) et tous les parmesan à la fois. Agiter vigoureusement le pot dans un mouvement elliptique tout en remuant simultanément avec une cuillère — le but est d'émulsionner le beurre froid et le fromage dans la base chaude et féculente sans briser l'émulsion. Ajouter le zeste de citron et le poivre noir. Laissez reposer le farrotto, découvert, pendant exactement 2 minutes. Il devrait avoir l'air brillant, crémeux et fluide, et non rigide. Servir dans des bols chauds immédiatement.",
      "visualCue": {
        "primaryTarget": "Farrotto brillant, coulant et crémeux qui se déplace paresseusement lorsque le pot est incliné — le test de toute l'onde. Pas raide, pas boueux : il se déchire.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre et le fromage ne sont pas entièrement incorporés — vous pouvez voir des piscines de beurre fondu se séparer de la base de grain.",
            "action": "Continuez à remuer et agiter vigoureusement. L'émulsion a besoin d'agitation pour se former: un remuant paresseux le brisera."
          },
          {
            "state": "Perfect",
            "description": "Le farrotto est brillant et unifié, coulant avec une seule onde lente lorsque le pot est incliné. Le fromage et le beurre sont invisibles — absorbés dans une sauce crémeuse qui enrobe chaque grain.",
            "action": "Reposez-vous 2 minutes et servez dans des bols chauds immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le farrotto est raide et entassant — il a été agité trop longtemps ou la chaleur a été laissée pendant la mantecatura.",
            "action": "Ajouter une petite louche de bouillon chaud et remuer vigoureusement pour se détendre. Servir immédiatement."
          }
        ]
      },
      "feelCue": "La mantecatura est complète lorsque le farrotto enveloppe l'arrière d'une cuillère dans un film mince, crémeux, uniforme — faites glisser votre doigt à travers elle et la ligne doit tenir propre pendant 3 secondes avant de fermer lentement."
    }
  ]
};
