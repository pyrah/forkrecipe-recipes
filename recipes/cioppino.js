export default {
  "repoId": "master_italian_american_cioppino_001",
  "parentRepoId": null,
  "slug": "cioppino",
  "author": "ForkRecipe Kitchen",
  "title": "Cioppino",
  "description": "Le magnifique ragoût de poisson de San Francisco — crabe de Dungeness, palourdes, moules, crevettes et poissons fermes mijotés dans un bouillon de vin de tomate épicé assez épais pour enrober le pain, la réponse du pêcheur italo-américain à la bouillabaisse.",
  "cuisine": "Italien-Américain",
  "culture": "San Francisco Italien",
  "category": "seafood",
  "tags": [
    "Italienne-américaine",
    "SAN-francisco"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "1 hr 15 min",
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
    "sour": 2,
    "bitter": 0,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Crabe de Dungeness, fissuré en sections (ou pattes de crabe royal)",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "crabe bleu",
        "griffes de crabe pierre"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Palourdes à cou court, frottées",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "Palourdes de Manille"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Moules, nettoyées et débarquées",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "Autres palourdes"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Protein",
      "name": "Crevettes crues",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "Les queues de langoustine"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Protein",
      "name": "Poisson blanc ferme (halbut ou bar de mer), morceaux de 4 cm",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "morue",
        "espadon"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "tomates entières en conserve de San Marzano, concassées à la main",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "2 × 400 g de conserves de tomates prunes de bonne qualité"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Oignon blanc, finement coupé en dés",
      "ratioValue": 1,
      "defaultUnit": "large",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Ampoule en fenouil, finement coupée en dés",
      "ratioValue": 1,
      "defaultUnit": "small",
      "substitutions": [
        "2 tiges de céleri + 0,5 c. à thé graines de fenouil"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 6,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Solvent",
      "name": "Vin blanc sec",
      "ratioValue": 250,
      "defaultUnit": "ml",
      "substitutions": [
        "Vermouth sec",
        "stocks de poissons supplémentaires"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Liquid",
      "name": "Stock de poisson ou jus de palourde",
      "ratioValue": 500,
      "defaultUnit": "ml",
      "substitutions": [
        "jus de palourde en bouteille (2 × 250 ml)"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Heat",
      "name": "flocons de poivre rouge concassé",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "poivron frais, haché"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Spice",
      "name": "Origan séché",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "Origan frais (1 c. à soupe)"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_15",
      "role": "Herb",
      "name": "Basilic frais, déchiré",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "persil frais à feuilles plates"
      ]
    },
    {
      "ingId": "ing_16",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_17",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_18",
      "role": "Structure",
      "name": "Pain sourd, coupé en tranches épaisses",
      "ratioValue": 4,
      "defaultUnit": "slices",
      "substitutions": [
        "pain italien croustillant",
        "focaccia"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saucisse",
      "inputs": [
        "ing_16",
        "ing_07",
        "ing_08",
        "ing_12"
      ],
      "outputState": "soffritto_base",
      "instructions": "Chauffer l'huile d'olive dans un très grand pot large (au moins 8 litres — le cioppino est généreux) à feu moyen. Ajouter l'oignon en dés et le fenouil et cuire en remuant régulièrement pendant 10 à 12 minutes jusqu'à ce que les deux soient complètement doux, translucides et légèrement dorés aux bords. Le fenouil perdra sa netteté de réglisse et deviendra doux et productif. Ajouter le poivron rouge broyé et cuire encore 1 minute. La base doit sentir doux, salé et peu d'anis.",
      "visualCue": {
        "primaryTarget": "L'oignon et le fenouil sont doux, dorés aux bords, et ont rétréci à environ un tiers de leur volume original. L'huile est richement teintée de leur couleur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon et le fenouil sont encore fermes et translucides sans couleur. La base goûtera cru et tranchant dans le bouillon fini.",
            "action": "Continuer la cuisson à feu moyen pendant 3 à 4 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "Les deux légumes sont dorés et complètement mous, presque fondus l'un dans l'autre. Le pot sent doux et salé. Les flocons de poivre rouge commencent à s'assombrir dans l'huile.",
            "action": "Ajouter l'ail et l'origan."
          },
          {
            "state": "Overdone",
            "description": "L'oignon et le fenouil sont brun moyen et commencent à coller. L'huile sent le caramélisé.",
            "action": "Continuez immédiatement — la caramélisation ajoute de la profondeur. Déglacer avec le vin à l'étape suivante pour soulever tout amour."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau de fenouil ramolli contre le côté de la casserole avec une cuillère en bois — il ne devrait offrir aucune résistance et écraser facilement, sa texture presque translucide."
    },
    {
      "nodeId": "step_2",
      "action": "Déglacement",
      "inputs": [
        "soffritto_base",
        "ing_09",
        "ing_13",
        "ing_10"
      ],
      "outputState": "wine_base",
      "instructions": "Ajouter l'ail haché et l'origan séché aux légumes adoucis et cuire 2 minutes en remuant jusqu'à ce que l'ail soit parfumé mais non doré. Verser dans le vin blanc — il sifflera et s'évaporera de façon spectaculaire. Grattez tout fond caramélisé de la base du pot. Élevez le feu à haute température et faites cuire vigoureusement le vin pendant 4-5 minutes jusqu'à ce qu'il ait diminué d'environ la moitié et l'odeur d'alcool cru s'est dissipée, laissant un arôme propre, fruité, légèrement acide.",
      "visualCue": {
        "primaryTarget": "Le vin a diminué à environ la moitié de son volume d'origine et le liquide dans la casserole semble sirupeux et profondément aromatique. L'odeur d'alcool brut a disparu.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le vin est encore à son volume original et sent fortement l'alcool. La note de vin cru rendra le bouillon fini goût dur.",
            "action": "Continuer à réduire à feu vif pendant 3 minutes supplémentaires."
          },
          {
            "state": "Perfect",
            "description": "Le vin a diminué de moitié. Le liquide sent propre et fruité. L'ail est parfumé partout. La base en pot est propre du déglacement.",
            "action": "Ajouter les tomates, le bouillon et les arômes."
          },
          {
            "state": "Overdone",
            "description": "Le vin est réduit à presque rien et le mélange commence à coller.",
            "action": "Ajouter les tomates et le bouillon immédiatement."
          }
        ]
      },
      "feelCue": "L'odeur de la casserole en ce moment vous dit tout — de l'alcool vif cède la place à un vin propre et sucré fruité comme il diminue. Lorsque l'alcool pique vos narines, continuez à réduire. Sinon, ajoutez les tomates."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "wine_base",
        "ing_06",
        "ing_11",
        "ing_14",
        "ing_17"
      ],
      "outputState": "tomato_broth",
      "instructions": "Ajouter les tomates broyées à la main avec leurs jus, le stock de poisson, les feuilles de laurier et le sel. Mélangez tout ensemble. Porter à ébullition, puis laisser mijoter (petites bulles fréquentes). Cuire à découvert pendant 20 minutes, en remuant occasionnellement, jusqu'à ce que les tomates se décomposent complètement et que le bouillon se approfondisse en saveur et en couleur. Le bouillon sera réduit et concentré. Goûtez et ajustez le sel — c'est aussi votre dernière occasion d'équilibrer le bouillon avant que les fruits de mer entrent.",
      "visualCue": {
        "primaryTarget": "Un bouillon rouge rouille vif qui s'épaissit légèrement à partir des tomates réduites. Il contient une cuillère de revêtement. Les morceaux de tomates se sont cassés dans le liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est mince et la tomate est encore en croûte avec un bord acide vif. Il a un goût lumineux mais peu développé.",
            "action": "Continuer à mijoter 5 minutes de plus. La saveur a besoin de temps pour tourner."
          },
          {
            "state": "Perfect",
            "description": "Le papillon est riche en rouge rouille, légèrement épais et profondément salé. La douceur et l'acidité de la tomate ont fusionné avec le vin et le stock en une base harmonieuse. Il enveloppe une cuillère légèrement.",
            "action": "Ajouter les fruits de mer à coque dure — crabe et palourdes."
          },
          {
            "state": "Overdone",
            "description": "Broth a réduit trop et est très épais, presque une sauce. La saveur de la tomate est dominante et légèrement amère.",
            "action": "Ajouter un peu plus de poisson ou d'eau pour restaurer une consistance bouillonnante."
          }
        ]
      },
      "feelCue": "Plongez un morceau de pain dans le bouillon à ce stade - il devrait avoir assez de corps pour enrober le pain immédiatement, tremper dans plutôt que de s'enfuir, mais il ne devrait pas s'asseoir sur le dessus comme une sauce."
    },
    {
      "nodeId": "step_4",
      "action": "Brise",
      "inputs": [
        "tomato_broth",
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "finished_cioppino",
      "instructions": "Ajouter d'abord les sections de crabe dans le bouillon et couvrir. Cuire 5 minutes. Ajouter les palourdes, couvrir et cuire encore 4 minutes. Lorsque les palourdes commencent à s'ouvrir, ajouter les moules et les crevettes. Couvrir et cuire 3 minutes. Ajouter les morceaux de poisson en dernier — ils n'ont besoin que de 3 minutes. Submerger doucement le poisson dans le bouillon, en veillant à ne pas casser les morceaux. Lorsque le poisson est tout simplement opaque et flocons doucement au bord, retirer de la chaleur. Jeter les palourdes ou moules qui n'ont pas ouvert.",
      "visualCue": {
        "primaryTarget": "Un pot débordant de bouillon de rouille profonde avec des pattes de crabe, des coquilles ouvertes, des crevettes roses et des morceaux de poisson blanc. La vapeur monte. Le bouillon a pris la teinte orange des coquilles de crabe et de crevette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coquilles de clam et de moules sont toujours fermées. Le poisson est translucide au centre. La crevette est grise. Le crabe se sent froid quand il est levé.",
            "action": "Remplacer le couvercle et cuire encore 2–3 minutes. Les fruits de mer doivent être ajoutés par étapes — ne vous précipitez pas."
          },
          {
            "state": "Perfect",
            "description": "Les coquilles sont ouvertes. Les crevettes sont coralliennes. Le poisson est juste opaque et flocons aux bords. Le crabe est chauffé. Le bouillon a pris la complexité des jus de fruits de mer.",
            "action": "Terminer avec le basilic déchiré et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le poisson s'est cassé en morceaux dans tout le bouillon. Les crevettes sont étroitement enroulées et caoutchouteuses. Les moules ont des morceaux minuscules et sombres.",
            "action": "Servir immédiatement. Soyez très doux quand vous êtes en train de monter — le poisson tombera plus loin s'il est agité de façon agressive."
          }
        ]
      },
      "feelCue": "Soulevez le couvercle sur un cippino entièrement cuit et reculez - la vapeur est parfumée de mollusques, de vin, de tomates et de la mer. Si vous n'avez pas immédiatement faim, quelque chose a mal tourné."
    },
    {
      "nodeId": "step_5",
      "action": "Garnir",
      "inputs": [
        "finished_cioppino",
        "ing_15",
        "ing_18"
      ],
      "outputState": "plated_cioppino",
      "instructions": "Hacher le basilic frais sur la surface du coppino fini et remuer une fois, très doucement, pour distribuer sans casser les fruits de mer. Faire griller les tranches de courge pendant que le coppino finit. Dans des bols très grands et chauds, chaque bol doit contenir un morceau de crabe, plusieurs palourdes et moules, des crevettes et un morceau de poisson. Verser généreusement du bouillon supplémentaire. Le toast va à côté du bol, pas dedans, pour traîner dans le bouillon entre les morsures.",
      "visualCue": {
        "primaryTarget": "Un bouillon profond et rouge rouille tenant une vaste gamme de mollusques. Basilic déchiré vif. Un morceau de sarcophage grillé est ajouté au bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas de basilic ajouté. Le pain est inaltéré et doux. Le cippino semble complet mais goûte plat sans l'herbe fraîche et le contraste textural de toast.",
            "action": "Finissez toujours avec du basilic frais — ce n'est pas une décoration mais un contrepoint de saveur au bouillon riche."
          },
          {
            "state": "Perfect",
            "description": "Les feuilles de basilic vivides flottent sur le bouillon sombre. Chaque bol est richement rempli de nombreux types de fruits de mer. Le toast est doré et craquant. L'odeur du bol est extraordinaire: la mer, la tomate, le vin et l'herbe.",
            "action": "Servir et manger immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le basilic a été brassé dans le bouillon par la chaleur et est devenu sombre et amer. Le pain a été placé dans le bol et est devenu mousseux.",
            "action": "Ajouter le basilic frais dans chaque bol individuellement la prochaine fois. Gardez du pain sur le côté."
          }
        ]
      },
      "feelCue": "Un coppino bien fait devrait vous obliger à utiliser les deux mains — une fourchette et une cuillère, ou simplement vos mains sur les pattes de crabe — et une pile de serviettes. Ce n'est pas un plat poli."
    }
  ]
};
