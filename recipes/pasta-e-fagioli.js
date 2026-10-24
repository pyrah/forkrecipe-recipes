export default {
  "repoId": "master_italian_pasta-e-fagioli_001",
  "parentRepoId": null,
  "slug": "pasta-e-fagioli",
  "author": "ForkRecipe Kitchen",
  "title": "Pâtes alimentaires",
  "description": "Le plat définitif de Naples pour la saison froide — des pâtes courtes et des haricots blancs crémeux dans un bouillon épais et rosé qui oscille parfaitement entre soupe et ragoût, construit lentement sur une base soffritto et fini avec suffisamment d'huile d'olive que chaque bol mijote.",
  "cuisine": "Italien",
  "culture": "Napolitaine",
  "category": "grains",
  "tags": [
    "pâtes",
    "haricots",
    "Italien",
    "végétarien",
    "Soupe"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "2 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 5,
    "sour": 1,
    "bitter": 2,
    "umami": 6,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Morceaux séchés en borlotti ou en cannellini, trempés pendant la nuit",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "haricots borlotti en conserve"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Pâtes courtes: ditalini, tubettini, ou spaghettis cassés",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "orecchiette"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc, finement coupé en dés",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Céleri, coupé en dés (y compris les feuilles intérieures pâles)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Carotte en dés",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates concassées en conserve, réduites"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Graines de romarin frais",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "romarin séché"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile d'olive extra vierge, plus plus à finir",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "flocons de poivre rouge séché (peperoncino)",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_01",
        "ing_08",
        "ing_11"
      ],
      "outputState": "cooked_beans",
      "instructions": "Égoutter et rincer les haricots trempés. Placez-les dans une grande casserole et couvrez-les d'eau froide fraîche de 6 cm. Ajouter le rameau de romarin et une pincée généreuse de sel. Porter à ébullition à feu vif, écrémer toute mousse grise, puis laisser mijoter doucement. Cuire à découvert pendant 60-90 minutes jusqu'à ce que les haricots soient complètement tendres — pas de craie au centre quand mordu. Ne précipitez pas cette étape avec un ébullition dur, qui peut diviser les peaux de haricots et rendre le bouillon nuageux. Réserver tout le liquide de cuisson. Enlevez le romarin. À l'aide d'une purée de pommes de terre ou de l'arrière d'une cuillère, écraser environ un tiers des haricots directement dans le pot pour créer un bouillon crémeux naturellement épais.",
      "visualCue": {
        "primaryTarget": "Fèves tendres sans centre crayeux dans un bouillon amylacé nuageux. Un tiers des haricots ont été partiellement massés pour créer de l'épaisseur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les haricots ont un centre crayeux ferme quand ils sont mordus. Le bouillon est mince et clair.",
            "action": "Continuer à mijoter et tester toutes les 10 minutes. Les vieux haricots peuvent prendre jusqu'à 2 heures."
          },
          {
            "state": "Perfect",
            "description": "Les haricots s'écrasent complètement entre les doigts sans résistance. Le bouillon est nuageux et légèrement épais à partir d'amidon dissous. Un tiers dans le bouillon.",
            "action": "Réserver et commencer le soffritto."
          },
          {
            "state": "Overdone",
            "description": "La plupart des haricots ont éclaté et se sont dissous dans le bouillon. Le liquide est très épais.",
            "action": "C'est très bien, les haricots dissous enrichissent le bouillon. Continuez."
          }
        ]
      },
      "feelCue": "Pincez un haricot — il devrait s'effondrer instantanément à une pâte lisse sans aucune résistance, comme presser un raisin mûr."
    },
    {
      "nodeId": "step_2",
      "action": "Sueur",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_09",
        "ing_10"
      ],
      "outputState": "soffritto",
      "instructions": "Chauffer l'huile d'olive dans un grand pot lourd à feu moyen-doux. Ajouter les dés d'oignon, le céleri, la carotte, l'ail et les flocons de poivre rouge. Assaisonner légèrement avec du sel. Cuire, en remuant de temps en temps, pendant 10-12 minutes jusqu'à ce que les légumes soient complètement doux et que l'oignon soit translucide et commence à tourner l'or. Ajouter la pâte de tomate et remuer pour enrober tous les légumes. Cuire 3-4 minutes, en remuant constamment, en pressant la pâte contre la casserole chaude jusqu'à ce qu'elle s'assombrisse légèrement du rouge vif au rouge brique et sent doux et caramélisé.",
      "visualCue": {
        "primaryTarget": "Légumes complètement adoucis et brillants dans une base parfumée, avec un revêtement en pâte de tomate rouge brique entièrement incorporé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon a encore une bouchée crue. Pâte de tomate encore rouge vif et sent cru.",
            "action": "Continuez à cuisiner. La pâte de tomate a particulièrement besoin de temps sur la chaleur pour développer la douceur."
          },
          {
            "state": "Perfect",
            "description": "Légumes complètement tendres et brillants. Pâte de tomates foncée à rouge brique. Sens doux, salé et complexe.",
            "action": "Ajouter les haricots et leur liquide de cuisson."
          },
          {
            "state": "Overdone",
            "description": "La pâte de tomates est brûlée à des taches noires. Une odeur amère.",
            "action": "Ajouter une petite éclaboussure d'eau pour déglacer les taches brûlées avant d'ajouter les haricots."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau d'oignon contre le côté du pot — il devrait frotter entièrement sans résistance. Le soffritto doit sentir comme le début de chaque bonne sauce du dimanche."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "soffritto",
        "cooked_beans"
      ],
      "outputState": "bean_broth",
      "instructions": "Ajouter les haricots cuits et tout leur liquide de cuisson réservé au soffritto. Mélanger et laisser mijoter. Si le bouillon est trop épais, ajoutez de l'eau jusqu'à ce que vous atteigniez une consistance légèrement plus mince que votre soupe finie cible — les pâtes l'épaississent davantage. Laisser mijoter pendant 15 minutes pour permettre aux saveurs de fondre. Goûtez et ajustez le sel. Le bouillon doit maintenant goûter profondément salé avec une légère douceur du soffritto et une chaleur persistante du peperoncino.",
      "visualCue": {
        "primaryTarget": "Un bouillon crémeux, teinté de rose, quelque part entre une soupe à la crème et un bouillon mince, avec des haricots entiers et de la purée visibles partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon a encore un goût séparé de haricots et de tomates. Les saveurs n'ont pas fondu.",
            "action": "Laisser mijoter encore 10 minutes et goûter à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Unifié, bouillon profondément salé avec une légère douceur et de la chaleur. L'amidon de haricots et le soffritto sont entièrement intégrés.",
            "action": "Ajouter les pâtes directement dans la casserole."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon a été réduit trop loin et est très épais et féculent.",
            "action": "Ajouter de l'eau pour se détendre avant d'ajouter les pâtes — les pâtes s'épaississent davantage."
          }
        ]
      },
      "feelCue": "Goûtez une cuillerée de bouillon – elle doit enrober légèrement l'arrière de la cuillère, avec un poids chaud, salé, légèrement sucré qui se sent important même sans les pâtes."
    },
    {
      "nodeId": "step_4",
      "action": "Faire bouillir",
      "inputs": [
        "bean_broth",
        "ing_02"
      ],
      "outputState": "finished_pasta_e_fagioli",
      "instructions": "Ajouter les pâtes sèches directement au bouillon de haricots. Mélanger immédiatement et fréquemment — les pâtes absorberont le bouillon de façon agressive, vérifier la consistance toutes les 2 minutes et ajouter de l'eau au besoin pour le garder souper tout au long de la cuisson. Cuire jusqu'à ce que les pâtes soient al dente — il continuera à ramollir dans la chaleur résiduelle. Le plat final doit être assez épais pour qu'une cuillère traînée à travers elle laisse un canal clair qui se remplit lentement. Retirer du feu. Goûtez et ajustez généreusement le sel. Arrosez une généreuse quantité d'huile d'olive sur la surface et remuez-la. Laisser reposer la soupe 2-3 minutes avant de servir.",
      "visualCue": {
        "primaryTarget": "Une soupe épaisse et crémeuse rose-rose avec des pâtes et des haricots distribués uniformément. La surface mijote d'huile d'olive. Une cuillère-trail se ferme lentement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pâtes sont encore très fermes ou crayeuses au centre. Le papillon est mince.",
            "action": "Continuer la cuisson, en ajoutant un jet d'eau si le bouillon a absorbé trop rapidement."
          },
          {
            "state": "Perfect",
            "description": "Les pâtes sont juste al dente. La soupe est assez épaisse pour tenir une cuillère-trail mais assez lâche pour verser dans un bol. Riche, crémeux, éclatant d'huile d'olive.",
            "action": "Laisser reposer 3 minutes hors chauffage, puis servir dans des bols chauds."
          },
          {
            "state": "Overdone",
            "description": "Les pâtes ont absorbé tout le bouillon. Le plat est devenu une pâte épaisse et féculente. Les pâtes ont trop cuit.",
            "action": "Ajouter de l'eau tiède et remuer vigoureusement. Une version plus humide est toujours délicieuse."
          }
        ]
      },
      "feelCue": "Plongez dans un bol et inclinez - la soupe doit couler lentement comme une seule masse unifiée, ni courir librement comme de l'eau, ni s'asseoir immovablement comme de la polenta. C'est la consistance parfaite de la lagane que les napolitains appellent « né troppo asciutta, né troppo brodosa »."
    }
  ]
};
