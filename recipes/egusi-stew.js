export default {
  "repoId": "master_nigerian_egusi_stew_001",
  "parentRepoId": null,
  "slug": "egusi-stew",
  "author": "ForkRecipe Kitchen",
  "title": "Égusi ragoût",
  "description": "Les graines de melon moulues frites dans une riche base d'huile de palme rouge avec du poivre de bonnet écossais et de l'écrevisse, puis mijotées jusqu'à ce qu'elles entrent dans un épais ragoût salé digne d'un festin — la mère des soupes nigérianes.",
  "cuisine": "Nigérian",
  "culture": "Yoruba / Afrique de l'Ouest",
  "category": "proteins",
  "tags": [
    "ragoût",
    "nigérien",
    "Ouest africain",
    "graines de melon",
    "soupe au poivre"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Boeuf (côte courte ou poitrine, coupé en morceaux de 5 cm)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Viande de chèvre",
        "Poisson-chat fumé",
        "tofu"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Egusi moulu (graines de melon séché, grossièrement moulues)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile de palme rouge (non raffinée)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Base",
      "name": "Base de poivre: tomates, poivrons rouges, bonnets écossais, oignon (brûlé)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Écrevisse au sol (crevettes séchées fumées, en poudre)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Pâte de crevette séchée",
        "pâte d'anchois"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Boeuf ou bouillon de poulet (ou liquide de cuisson de viande)",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "eau"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Épinards frais ou feuilles amères (approximativement hachés)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "épinards congelés",
        "Verts à collier"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Brise",
      "inputs": [
        "ing_01",
        "ing_07"
      ],
      "outputState": "braised_meat",
      "instructions": "Assaisonner généreusement le bœuf de sel et le mettre dans une casserole avec assez d'eau pour couvrir à peine. Porter à ébullition, puis réduire le feu et laisser mijoter pendant 40 à 50 minutes jusqu'à tendreté mais sans tomber en morceaux. Réservez le liquide de braisage — c'est votre stock. Mettez la viande de côté.",
      "visualCue": {
        "primaryTarget": "La viande de boeuf est sombre et tendre, s'éloignant légèrement lorsqu'elle est pressée avec des pinces, mais tenant toujours sa forme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande est dure et résiste à une fourchette; le collagène n'est pas encore fondu.",
            "action": "Continuer à mijoter et vérifier toutes les 10 minutes."
          },
          {
            "state": "Perfect",
            "description": "La viande donne à la pression douce, coupe proprement avec un bord de cuillère, et le liquide de braisage est sombre et profondément salé.",
            "action": "Réserver le liquide et réserver la viande."
          },
          {
            "state": "Overdone",
            "description": "La viande est complètement tombée en morceaux et le liquide semble boueux.",
            "action": "Procéder — le bœuf déchiqueté dans le ragoût d'égusi est acceptable; il suffit de plier soigneusement plus tard."
          }
        ]
      },
      "feelCue": "Une pièce braisée doit se sentir comme une éponge ferme lorsque vous la pressez — elle donne et ressort légèrement, avec des jus à la surface."
    },
    {
      "nodeId": "step_2",
      "action": "Réduire",
      "inputs": [
        "ing_03",
        "ing_04"
      ],
      "outputState": "fried_pepper_base",
      "instructions": "Chauffer l'huile de palme dans un pot à fond lourd à feu moyen-élevé jusqu'à ce qu'elle fonde et mijote — ne la laissez pas fumer. Ajouter la base de poivre mélangée tout à la fois (il éclaboussera). Faire frire, en remuant fréquemment, pendant 15 à 20 minutes jusqu'à ce que l'odeur brute de la tomate soit disparue et que la base ait diminué de moitié, s'assombri à un rouge brique profond, et que l'huile se soit séparée de la surface.",
      "visualCue": {
        "primaryTarget": "Pâte rouge brique profonde avec des piscines d'huile de palme orange visiblement séparées à la surface. Plus d'odeurs crues, torréfiés et sucrées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La base du poivre est encore rouge vif et liquide; l'odeur brute de la tomate persiste. L'huile n'est pas séparée.",
            "action": "Continuer à frire à feu moyen-vif, en remuant chaque minute pour éviter les brûlures."
          },
          {
            "state": "Perfect",
            "description": "La pâte est épaisse et jammy, a réduit à une fraction de son volume original, et l'huile de palme se trouve dans les piscines oranges à la surface. Goûte riche et légèrement sucré.",
            "action": "Ajouter l'egusi immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La base est brûlée au fond; l'odeur amère et acride.",
            "action": "Ajouter un éclaboussure de stock pour déglacer et baisser la chaleur avant de procéder."
          }
        ]
      },
      "feelCue": "Le sifflement effréné et agressif de la base de poivre humide s'affaiblira progressivement dans une gourde basse et stable, ce qui changera les signaux sonores que l'eau a cuit et que la base est bien frite."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "fried_pepper_base",
        "ing_02"
      ],
      "outputState": "fried_egusi_base",
      "instructions": "Ajouter l'egusi moulu à la base de poivre frit dans la casserole. Incorporer vigoureusement. L'egusi absorbera l'huile et commencera à s'écraser et à brunir contre le fond du pot, ce qui est correct et souhaitable. Faire frire 8-10 minutes en grattant constamment le fond, jusqu'à ce que l'egusi perde son odeur de farine brute et prenne un caractère noisette et grillé. Il formera des amas lâches.",
      "visualCue": {
        "primaryTarget": "Egusi sec, sablonneux, tacheté de poivre rouge. Le fond de la casserole montre l'egusi grillé doré-brun lorsqu'il est gratté.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Egusi semble encore pâle et pâteux; sent cru et féculent.",
            "action": "Continuer à frire à feu moyen, grattant constamment."
          },
          {
            "state": "Perfect",
            "description": "Egusi est doré avec des taches grillées plus foncées. L'arôme est noisette, comme les graines de citrouille grillées. Les touffes sont sèches et tiennent leur forme.",
            "action": "Ajouter le stock et les écrevisses."
          },
          {
            "state": "Overdone",
            "description": "Egusi a collé et brûlé sur le fond; brun foncé et amer.",
            "action": "Retirer du feu, déglacer avec le bouillon soigneusement, et procéder — la couche brûlée ne ruinera pas le plat si elle n'est pas raclée."
          }
        ]
      },
      "feelCue": "L'egusi doit se sentir sec et granuleux lorsque vous passez votre cuillère à travers, avec une douce résistance au fond où il a grillé contre la casserole."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "fried_egusi_base",
        "ing_05",
        "ing_06",
        "braised_meat"
      ],
      "outputState": "simmered_egusi_stew",
      "instructions": "Verser le stock et ajouter les écrevisses. Mélanger — l'égusi s'hydratera et le ragoût s'épaissira. Ajouter la viande braisée. Assaisonner de sel. Porter à mijoter doucement et faire cuire, partiellement couvert, pendant 15 à 20 minutes, en remuant toutes les quelques minutes pour éviter que l'égusi ne se dépose et ne brûle. Le ragoût est prêt lorsqu'il tient une forme butée sur une cuillère.",
      "visualCue": {
        "primaryTarget": "Ragoût épais et rouge rouille avec texture égusi visible et morceaux de viande. Une cuillère traînée à travers elle laisse un canal de remplissage lent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le ragoût est lâche et versable; l'égusi n'a pas encore complètement hydraté et épaissi.",
            "action": "Laisser mijoter à découvert plus longtemps, en remuant fréquemment."
          },
          {
            "state": "Perfect",
            "description": "Ragoûter les monticules sur une cuillère et tenir brièvement. Riche couleur rouge brique. Egusi est complètement gonflé et noisette. L'huile brille à la surface.",
            "action": "Ajouter les verts et terminer."
          },
          {
            "state": "Overdone",
            "description": "Le ragoût s'est épaissi en pâte; l'égusi est gommé et dense.",
            "action": "Incorporer quelques cuillères à soupe de bouillon ou d'eau pour se détendre."
          }
        ]
      },
      "feelCue": "Mélanger du fond — le ragoût d'égusi cuit correctement a un tirage légèrement sec contre la cuillère, comme du porridge très épais, et laissera un revêtement sur la cuillère."
    },
    {
      "nodeId": "step_5",
      "action": "Finition",
      "inputs": [
        "simmered_egusi_stew",
        "ing_08"
      ],
      "outputState": "finished_egusi_stew",
      "instructions": "Plier dans les verts hachés et remuer doucement dans le ragoût. Cuire encore 2 à 3 minutes jusqu'à ce qu'il soit flétri — ne pas trop cuire; les verts devraient conserver une certaine couleur et texture. Goûtez et ajustez le sel. Servir immédiatement avec l'igname, l'éba, le fufu ou le riz.",
      "visualCue": {
        "primaryTarget": "Verts flétris vert foncé répartis dans le ragoût rouge-orange, visibles mais entièrement intégrés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les verts sont toujours crus et brillants; assis sur le ragoût non intégré.",
            "action": "Incorporer et cuire encore 2 minutes."
          },
          {
            "state": "Perfect",
            "description": "Les verts sont sombres, flétris et soyeux, pliés à travers le ragoût sans perdre toute leur couleur.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les verts sont de couleur kaki et musqués; ont perdu toute texture.",
            "action": "La saveur est fine; garnir avec une petite poignée de verts crus frais pour la couleur."
          }
        ]
      },
      "feelCue": "Le ragoût fini doit être lourd et visqueux lorsqu'il est lavé; il tombe dans un ruban épais et lent de la cuillère, et non dans une goutte."
    }
  ]
};
