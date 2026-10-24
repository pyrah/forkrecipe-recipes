export default {
  "repoId": "master_japanese_miso-soup_001",
  "parentRepoId": null,
  "slug": "miso-soup",
  "author": "ForkRecipe Kitchen",
  "title": "Soupe classique Miso",
  "description": "Le cœur tranquille d'un petit déjeuner japonais — dashi ramolli avec de la pâte de soja fermentée, servi au moment où il est prêt, jamais une minute plus tard.",
  "cuisine": "Japonais",
  "culture": "Washoku",
  "category": "stocks",
  "tags": [
    "Soupe",
    "Japonais",
    "miso",
    "umami",
    "fermenté"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2024-01-20",
  "updatedAt": "2024-11-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 5,
    "sour": 1,
    "bitter": 0,
    "umami": 9,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Base",
      "name": "Stock de Dashi",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "kombu-shiitake dashi"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Awase miso (complété)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Shiro miso",
        "Aka miso"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Tofu de soie",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "tofu ferme"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Wakame (algue séchée)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "wawame frais"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Échalote (partie verte)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "mitsuba"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Réhydrater",
      "inputs": [
        "ing_04"
      ],
      "outputState": "bloomed_wakame",
      "instructions": "Dans un petit bol d'eau froide, déposer le wakame séché. Laissez - le tremper jusqu'à ce qu'il ait complètement élargi et qu'il devienne soyeux — environ cinq minutes. Égoutter et presser doucement l'excès d'eau.",
      "visualCue": {
        "primaryTarget": "Wakame a triplé en volume et a tourné un vert profond et translucide — chaque fronde est souple et légèrement glissante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pièces sont encore sombres, râpées et en cuir au centre.",
            "action": "Continuez à tremper. Le wakame séché se reconstitue inégalement, alors donnez-lui une minute ou deux de plus."
          },
          {
            "state": "Perfect",
            "description": "Uniformement vert, doux, avec un léger reflet. Larmes facilement entre les doigts.",
            "action": "Égoutter et réserver."
          },
          {
            "state": "Overdone",
            "description": "Slimy, musclé, avec une couleur olive terne. S'effondrent quand ils sont levés.",
            "action": "Utilisez - le — la saveur est intacte, mais réduisez légèrement la quantité car elle se dissout dans le bouillon."
          }
        ]
      },
      "feelCue": "Le wakame bien réhydraté se sent comme de la soie humide entre vos doigts — s'il se sent dur ou raide, il a besoin de plus de temps."
    },
    {
      "nodeId": "step_2",
      "action": "Chaleur",
      "inputs": [
        "ing_01"
      ],
      "outputState": "warmed_dashi",
      "instructions": "Porter le dashi à feu doux à feu moyen. Vous voulez de la vapeur et un léger mouvement à la surface — jamais un ébullition qui détruit les aromatiques délicats.",
      "visualCue": {
        "primaryTarget": "Essence de vapeur montant de la surface. Petites bulles se formant autour des bords du pot mais ne se brisant pas au centre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas de vapeur, pas de bulles. La surface est toujours là.",
            "action": "Augmentez légèrement la chaleur et attendez."
          },
          {
            "state": "Perfect",
            "description": "vapeur douce, petites bulles occasionnelles au périmètre. La surface mijote mais ne bouge pas.",
            "action": "Réduire la chaleur à faible et ajouter le tofu."
          },
          {
            "state": "Overdone",
            "description": "Pleine ébullition avec des bulles agressives.",
            "action": "Retirer immédiatement du feu et laisser reposer — bouillir la clarté."
          }
        ]
      },
      "feelCue": "Tenez votre main à six pouces au - dessus de la casserole — vous devriez sentir la chaleur régulière, et non la chaleur qui souffle. Le dashi doit sentir l'océan et nettoyer."
    },
    {
      "nodeId": "step_3",
      "action": "Pochette",
      "inputs": [
        "warmed_dashi",
        "ing_03"
      ],
      "outputState": "tofu_in_dashi",
      "instructions": "Couper le tofu en cubes de 1,5 cm et les déposer doucement dans le dashi avec une cuillère. Laissez-les chauffer pendant deux minutes sur la chaleur la plus basse. Ne remuez jamais — poussez doucement si nécessaire.",
      "visualCue": {
        "primaryTarget": "Les cubes de tofu flottent juste sous la surface, chauffés à travers, avec des bords blancs propres intacts.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les cubes de tofu ont coulé au fond et se sentent froids quand on est pêché.",
            "action": "Donne-leur encore une minute. Ils sont denses quand ils sont froids et se lèveront légèrement quand ils seront chauds."
          },
          {
            "state": "Perfect",
            "description": "Les cubes sont suspendus dans le bouillon, bords tranchants, surface lisse. Un cube de test est chaud jusqu'au bout.",
            "action": "Continuez à dissoudre miso."
          },
          {
            "state": "Overdone",
            "description": "Les cubes ont développé une surface cratère et écailleuse. Le bruit autour d'eux est nuageux.",
            "action": "Le tofu bouilli — il sera spongieux. Baissez la chaleur et continuez. Le goût est toujours bon."
          }
        ]
      },
      "feelCue": "Soulevez un cube avec une cuillère et touchez - le — il devrait être chaud au bain-température, avec une crème-comme donner, pas une résistance caoutchouteuse."
    },
    {
      "nodeId": "step_4",
      "action": "Dissoudre",
      "inputs": [
        "tofu_in_dashi",
        "ing_02"
      ],
      "outputState": "miso_broth",
      "instructions": "Placer le miso dans une louche ou une petite souche. Submerger-le à mi-chemin dans le bouillon et remuer avec des baguettes jusqu'à ce que la pâte soit complètement dissoute. Cela empêche les grumeaux et empêche le bouillon de bouillir. Ne jamais faire bouillir le miso — il tue les cultures vivantes et fait fondre la saveur.",
      "visualCue": {
        "primaryTarget": "Broth est devenu un bourdon opaque. Pas de miseso visibles. Une légère brume s'accroche uniformément dans tout le pays, sans s'installer au fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Streaks de miso non dissous tourbillonnant dans le bouillon. Les taches de gritty près du fond.",
            "action": "Retournez la louche et continuez à la remuer. Certains misos sont têtus — appuyer sur le filet aide."
          },
          {
            "state": "Perfect",
            "description": "Ambre uniformément nuageuse et chaude. Goûts équilibrés — salés, ronds et profonds.",
            "action": "Retirer immédiatement du feu."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon a bouilli après l'ajout de miso — rugissement de surface. Le goût est plat et unidimensionnel.",
            "action": "Ne peut pas se défaire, mais une petite éclaboussure de miso frais agité en dehors de la chaleur peut partiellement restaurer la profondeur."
          }
        ]
      },
      "feelCue": "L'arôme devrait fleurir au moment où le miso se dissout — terreux, chaud et légèrement doux, comme une grange en automne. S'il sent aiguisé ou acride, le bouillon était trop chaud."
    },
    {
      "nodeId": "step_5",
      "action": "Assemblage",
      "inputs": [
        "miso_broth",
        "bloomed_wakame",
        "ing_05"
      ],
      "outputState": "finished_miso_soup",
      "instructions": "Ajouter le wakame égoutté dans le pot. Déposer la soupe dans des bols chauds. Float mincement tranché vert pétoncle sur la surface. Servir immédiatement — la soupe miso est un plat qui ne peut pas attendre.",
      "visualCue": {
        "primaryTarget": "Un bol chaud de bouillon ambre avec des cubes de tofu blanc, des frondes de wakame vert foncé et des anneaux de pétoncle lumineux flottant à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Broth a l'air mince et aqueux. Les garnitures ont coulé.",
            "action": "Vérifiez le rapport miso — vous pourriez avoir besoin de plus. Il faut ajouter les oignons pour qu'ils restent à flot."
          },
          {
            "state": "Perfect",
            "description": "Le papillon a le corps et l'opacité. Chaque ingrédient est distinct et visible. La surface est douce.",
            "action": "Amène-toi à la table. C'est prêt."
          },
          {
            "state": "Overdone",
            "description": "Wakame est tombé dans le bouillon. Les pétoncles sont flétris et ternes.",
            "action": "Garnir d'échalote fraîche sur le dessus. La soupe elle-même est encore parfaitement bonne à manger."
          }
        ]
      },
      "feelCue": "La première gorgée devrait ressembler à une couverture chaude: chaleur douce, salinité douce et douceur persistante à l'arrière de la gorge. Si le sel frappe en premier, le rapport miso était trop élevé."
    }
  ]
};
