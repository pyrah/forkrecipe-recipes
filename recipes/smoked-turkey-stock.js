export default {
  "repoId": "master_american_smoked_turkey_stock_001",
  "parentRepoId": null,
  "slug": "smoked-turkey-stock",
  "author": "ForkRecipe Kitchen",
  "title": "Stock de dinde fumée",
  "description": "Profondément fumé, le stock d'or de la carcasse de dinde ou des ailes fumées — le liquide de cuisson le plus mal utilisé dans la cuisine américaine, extraordinaire en graviers, risottos et verts braisés.",
  "cuisine": "Américain",
  "culture": "American Thanksgiving",
  "category": "stocks",
  "tags": [
    "américains",
    "dinde",
    "stock",
    "fumé",
    "Action de grâces",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "4 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Carcasse de dinde fumée (brochée en morceaux) ou ailes de dinde fumée (1,5 kg)",
      "ratioValue": 1500,
      "defaultUnit": "g",
      "substitutions": [
        "cuisses de dinde fumée",
        "carcasse de dinde grillée (moins de fumée)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 3500,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc, quartiers",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "parties de poireau, blanc et vert clair"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Pâtes de céleri avec feuilles, cassées en deux",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Carotte, coupée en deux dans le sens de la longueur",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Girofles d'ail brisées",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 3,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 5,
      "defaultUnit": "sprigs",
      "substitutions": [
        "1 c. à thé de thym séché"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Feuilles de sauge fraîches",
      "ratioValue": 6,
      "defaultUnit": "leaves",
      "substitutions": [
        "3 feuilles de sauge séchées"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Maïs de poivre noir",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtir",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "roasted_vegetables",
      "instructions": "Préchauffer le four à 220°C (425°F). Étaler l'oignon en quartiers, le céleri et la carotte sur une plaque sèche en une seule couche. Faire cuire pendant 15-20 minutes jusqu'à ce que les légumes aient pris la couleur dorée-brun sur leurs faces coupées et les bords de l'oignon sont légèrement carbonisés. Ne les huilez pas — la torréfaction sèche concentre leurs sucres naturels et ajoute de la profondeur de caramel au stock sans ajouter de graisse. L'omble sur l'oignon contribue spécifiquement à la couleur et à une légère amertume qui équilibre la fumée.",
      "visualCue": {
        "primaryTarget": "Les légumes montrent des bords dorés à caramélisés. Les bords de l'oignon sont légèrement carbonisés. Celery a flétri et pris sur des taches dorées. La plaque sent l'allium grillé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont à peine colorés, encore pâles et brillants. Pas de caramélisation.",
            "action": "Retourner au four 5-7 minutes de plus. La réaction de Maillard sur ces légumes est la principale source de couleur pour le stock final."
          },
          {
            "state": "Perfect",
            "description": "De couleur dorée sur toutes les faces coupées, avec des bords foncés sur l'oignon. La carotte semble légèrement réduite. Le fond de la poêle a des résidus sombres et collants — déglacez - les dans la marmite.",
            "action": "Transférer les légumes dans la réserve et déglacer la poêle avec 120 ml d'eau."
          },
          {
            "state": "Overdone",
            "description": "Les légumes sont brûlés — profondément noirs, avec une odeur aiguë et acride.",
            "action": "Jetez et utilisez plutôt des légumes crus. Les légumes brûlés rendront le stock amer et métallique."
          }
        ]
      },
      "feelCue": "Lorsque vous pressez un quart d'oignon torréfié contre la poêle avec une spatule, il devrait donner un léger sifflement et coller légèrement — les sucres naturels ont caramélisé à un collant doré."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "roasted_vegetables",
        "ing_01",
        "ing_02",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "simmering_stock",
      "instructions": "Placez les morceaux de dinde fumée dans la réserve avec les légumes rôtis. Ajouter l'eau froide, l'ail, le vinaigre de cidre de pomme, les feuilles de laurier, le thym, la sauge et les grains de poivre. Le vinaigre est essentiel : il puise du calcium et du collagène dans les os de la dinde, enrichissant le corps du stock sans ajouter d'acidité détectable dans le produit final. Porter lentement à feu moyen à une mijoter nue — 25-30 minutes. Réduire immédiatement à la chaleur la plus faible possible. Maintenir à 85-90°C pendant 3 à 3,5 heures.",
      "visualCue": {
        "primaryTarget": "Une mijote douce et régulière: de petites bulles s'élèvent lentement et paresseusement des os. Le stock est riche en or ambré chaud avec une brume fumée visible. La cuisine sent le hickory, la sauge et la dinde rôtie.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 2 heures, le bouillon est d'or pâle et mince. L'arôme de dinde est faible.",
            "action": "Continuer à mijoter — le collagène de dinde nécessite du temps. La couleur et le corps s'approfondiront considérablement dans la dernière heure."
          },
          {
            "state": "Perfect",
            "description": "Après 3,5 heures, le stock est un ambre profond et chaud avec une légère brume de collagène dissous. Les morceaux de dinde se détachent facilement avec des pinces. La surface a un éclat doré de graisse rendue.",
            "action": "Graisses superficielles écrémées, enlever la dinde et la souche."
          },
          {
            "state": "Overdone",
            "description": "Maintenance à un ébullition laminable — le matériel est moulu, gris-or et gras. La graisse est émulsifiée dans le bouillon.",
            "action": "Enfilez-vous dans la fine nappe de fromage et refroidissez-vous toute la nuit — le disque de graisse congelé peut encore être enlevé, et la saveur n'est pas perdue même si la clarté est."
          }
        ]
      },
      "feelCue": "Après 2 heures, insérez des pinces dans la casserole et pressez un os de dinde — si le cartilage à l'articulation a commencé à s'assouplir et à céder, vous êtes sur la bonne voie; le cartilage se dissolvant en gélatine est ce qui donne au stock son corps."
    },
    {
      "nodeId": "step_3",
      "action": "Écumer",
      "inputs": [
        "simmering_stock"
      ],
      "outputState": "skimmed_stock",
      "instructions": "Au cours des 30-45 premières minutes de mousse brun-gris et de graisse qui mijoteront, monteront à la surface. Enlevez-le toutes les 10-15 minutes avec une large cuillère ou une louche plate, en la faisant glisser jusqu'au bord de la casserole où elle recueille. Après la première heure, écumer seulement la graisse dorée qui se trouve dans les coins tranquilles de la surface du pot. Ne pas trop patiner — la graisse porte saveur et sera enlevée en quantité après le refroidissement.",
      "visualCue": {
        "primaryTarget": "La surface du stock est calme et généralement claire, avec seulement un léger éclat de graisse dorée. Pas de mousse grise ou de protéine brune coagulée visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mousse grise encore en évidence sur la surface. Les protéines brunes flottent librement.",
            "action": "Continuer à écumer toutes les 10 minutes. Utilisez une large louche plate et un bol d'eau froide pour le rincer entre les passes."
          },
          {
            "state": "Perfect",
            "description": "La surface est claire avec seulement un mince film doré de graisse de dinde. Le stock ci-dessous est visiblement ambre et clair. L'écrèmege est maintenant terminé.",
            "action": "Maintenez le mijoter, non perturbé, pour le temps de cuisson restant."
          },
          {
            "state": "Overdone",
            "description": "L'écume si agressive que même la graisse aromatique a été enlevée et que la surface ressemble presque à de l'eau — pas de frisson.",
            "action": "Une petite quantité de graisse de surface est bénéfique — elle transporte des composés de saveur soluble dans le gras de la fumée. Laisse tomber."
          }
        ]
      },
      "feelCue": "Touchez l'arrière de votre cuillère à écrèmege à la surface et soulevez - si la mousse grise s'accroche dans un anneau autour du bord de la cuillère, il y a encore des protéines coagulées à enlever. Si seulement le liquide doré s'accroche, l'écumage est fait."
    },
    {
      "nodeId": "step_4",
      "action": "Filtrer",
      "inputs": [
        "skimmed_stock"
      ],
      "outputState": "strained_stock",
      "instructions": "Retirer les gros morceaux de dinde de la casserole avec des pinces. Déposer le bouillon dans un tamis à mailles fines doublé d'une double couche de cheesewapp humide dans un grand pot ou un bol propre. Appuyez doucement sur les légumes usés pour extraire leur liquide, mais ne forcez pas la pulpe végétale. Réservez toute viande de dinde qui a tiré propre des os — il aura donné la plus grande partie de son goût au stock, mais est excellent pour un haschisch ou de la tarte en pot.",
      "visualCue": {
        "primaryTarget": "Stock d'or ambré clair, exempt de particules. Tenir une faible brume fumée des composés de fumée dissous — c'est souhaitable et ne disparaîtra pas dans la pression.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock contient encore de la matière végétale visible et de petits fragments osseux.",
            "action": "Retransformez-vous à travers la nappe fraîche."
          },
          {
            "state": "Perfect",
            "description": "Or, légèrement trouble (à partir de gélatine, pas de particules), chaud et parfumé avec de la fumée et des herbes. Une cuillère à soupe refroidie brièvement sur une plaque réfrigérée devrait s'épaissir légèrement à température ambiante.",
            "action": "Laisser refroidir et écrémer la graisse, ou utiliser immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Légumes pressés si dur que le tamis pousse à travers la pulpe de légumes gris vert.",
            "action": "Jeter la partie contaminée par la pulpe et reformer le reste. Au bout de 4 heures de mijotage, les légumes sont amers."
          }
        ]
      },
      "feelCue": "Frottez quelques gouttes de bouillon chaud tendu entre vos doigts et laissez-les sécher à l'air pendant 10 secondes — la légère tacticité laissée derrière est le collagène dissous, la marque d'un bouillon bien fait qui gelera à froid."
    },
    {
      "nodeId": "step_5",
      "action": "Réfrigérer",
      "inputs": [
        "strained_stock"
      ],
      "outputState": "finished_smoked_turkey_stock",
      "instructions": "Refroidir rapidement le stock tendu sur un bain de glace, en remuant occasionnellement. Réfrigérer à découvert jusqu'à ce qu'il soit complètement froid — au moins 4 heures, de préférence une nuit. Un disque solide de graisse de dinde dorée pâle se formera à la surface. Soulevez-le en une seule pièce et jetez ou réservez pour les légumes de cuisson. Le stock dégraissé ci-dessous doit être légèrement gelé et transparent. Utiliser dans les 4 jours ou congeler dans des portions de 500ml pendant 4 mois.",
      "visualCue": {
        "primaryTarget": "Après le refroidissement, un disque de graisse dorée se trouve au sommet d'un stock fortement gelé et de couleur ambre. Le gel doit trembler visiblement lorsque le récipient est secoué.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La graisse n'a pas été complètement solidifiée — seule une congélation partielle aux bords. Le stock est froid mais pas gelé.",
            "action": "Réfrigérer encore 4 heures. Un gel qui ne sert pas est encore un bon stock — il a simplement une teneur en gélatine inférieure; il sera encore excellent en utilisation."
          },
          {
            "state": "Perfect",
            "description": "Le disque gras se lève proprement en une seule pièce. Stock en dessous est une gelée ferme, wobbling. Ambre profonde, claire, avec une chaleur fumée à son arôme même froid.",
            "action": "A conserver réfrigéré 4 jours ou congeler. Réchauffer doucement à liquéfier."
          },
          {
            "state": "Overdone",
            "description": "Solide congelé avant dégraissage. La graisse est enfermée dans la glace.",
            "action": "Dégelez lentement au réfrigérateur pendant 24 heures. Les couches seront re-séparées et la graisse peut être levée proprement."
          }
        ]
      },
      "feelCue": "Piercez la gelée froide avec un doigt et sentez la résistance — un stock avec une bonne teneur en gélatine devrait se sentir comme un jello doux. Plus le wobble est riche, plus il prêtera à chaque plat qu'il entre."
    }
  ]
};
