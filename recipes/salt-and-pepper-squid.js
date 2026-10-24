export default {
  "repoId": "master_chinese_saltpeppersquid_001",
  "parentRepoId": null,
  "slug": "salt-and-pepper-squid",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Sel et calmar poivré",
  "description": "Anneaux et tentacules jetés dans de la fécule de pomme de terre épicée et frits à éclats jusqu'à ce que le revêtement se brise au début de la morsure — fini dans le wok avec de l'ail, du chili et de l'oignon de printemps qui parfument la croûte sans la ramollir.",
  "cuisine": "Chinois",
  "culture": "Cantonais",
  "category": "seafood",
  "tags": [
    "Produits de la mer",
    "calmars",
    "cantonais",
    "Chinois",
    "frits",
    "wok",
    "Sans gluten"
  ],
  "difficulty": 3,
  "activeTime": "25 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Tubes et tentacules de calmars frais, nettoyés",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "anneaux calamars (dégelés)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Fécule de pomme de terre",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "Amidon de tapioca",
        "fécule de maïs"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Poivre blanc, grossièrement moulu",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre noir"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Maïs poivré sichuan, grillé et moulu",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre blanc supplémentaire"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre pour friture profonde (cacahuète ou tournesol)",
      "ratioValue": 200,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Girofles d'ail, tranchés finement",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Heat",
      "name": "Chili rouge long et chili vert, tranché finement",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "chili oculaire d'oiseau pour plus de chaleur"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Oignons de printemps, coupés en longueurs de 3 cm",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trancher",
      "inputs": [
        "ing_01"
      ],
      "outputState": "scored_squid",
      "instructions": "Ouvrez les tubes de calmar et marquez la surface intérieure dans un motif de croisement à intervalles de 5 mm — cela donne à l'amidon quelque chose à saisir et aide le calmar à boucler de façon spectaculaire dans l'huile. Couper en morceaux de 4cm. Gardez les tentacules entiers. Séchez tout très soigneusement avec des serviettes en papier.",
      "visualCue": {
        "primaryTarget": "Marques de la grille de diamant couvrant toute la surface intérieure. Les morceaux sont secs et légèrement collants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas de marques, la surface est encore lisse — le revêtement va glisser.",
            "action": "Score plus profond, allant à la moitié de l'épaisseur."
          },
          {
            "state": "Perfect",
            "description": "Grille de croisement visible, morceaux coupés à la même taille pour même friture. Surfaces mates et sèches.",
            "action": "Ajouter immédiatement l'amidon assaisonné."
          },
          {
            "state": "Overdone",
            "description": "Les morceaux ont été découpés par endroits.",
            "action": "Utilisez comme-est; les petites pièces frisent plus rapidement, alors regardez l'huile plus attentivement."
          }
        ]
      },
      "feelCue": "Le calmar doit se sentir frais et légèrement collant à partir de l'humidité résiduelle — toute humidité visible doit être séchée avant le revêtement."
    },
    {
      "nodeId": "step_2",
      "action": "Mélanger",
      "inputs": [
        "scored_squid",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "coated_squid",
      "instructions": "Mélanger la fécule de pomme de terre, le sel, le poivre blanc et le poivre Sichuan dans un bol. Ajouter le calmar séché et mélanger pour enrober complètement. Agiter l'excès dans un tamis — vous voulez un mince, même revêtement qui obscurcit à peine le calmar, pas un manteau lourd.",
      "visualCue": {
        "primaryTarget": "Chaque pièce est dépoussiérée dans un revêtement blanc mince, uniforme et opaque. Pas d'embrouilles, pas de taches nues.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Plaques translucides où le calmar se manifeste par un revêtement inégal.",
            "action": "Recoller et presser légèrement l'amidon pour adhérer, puis secouer l'excès."
          },
          {
            "state": "Perfect",
            "description": "Un revêtement fin, uniforme, blanc mat sur chaque surface. Lorsque vous secouez le tamis, seule l'amidon lâche tombe.",
            "action": "Faire frire dans les 60 secondes de l'enrobage — l'amidon absorbe l'humidité et les grumeaux s'il est assis."
          },
          {
            "state": "Overdone",
            "description": "Un revêtement épais et pâteux qui s'accroche à des endroits. On dirait du poisson battu, pas du sel et du poivre.",
            "action": "Agiter vigoureusement dans le tamis pour éliminer l'excès. Des revêtements fins croustillants."
          }
        ]
      },
      "feelCue": "Exécutez un doigt sur une pièce enduite — elle devrait être crayeuse et sèche, comme la poussière de sucre glace sur une pâtisserie."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "coated_squid",
        "ing_06"
      ],
      "outputState": "fried_squid",
      "instructions": "Chauffer l'huile à 200 C (390 F) dans un wok ou une poêle profonde, plus élevée que la plupart des fritures, car le calmar est mouillé. Faire frire en petits lots pendant exactement 90 secondes. Le calmar se bouclera et le revêtement sera réglé. Ne remuez pas pendant les 30 premières secondes afin que la croûte puisse se former. Retirez - vous immédiatement sur un rack.",
      "visualCue": {
        "primaryTarget": "Revêtement blanc-ivoire à or pâle, pièces pointues serrées, sucettes sur les tentacules gonflées et croquantes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le revêtement est encore pâle et doux. Le calmar n'est pas encore bouclé. L'amidon semble mouillé.",
            "action": "Encore 30 secondes. S'assurer que la température de l'huile n'est pas inférieure à 185 °C."
          },
          {
            "state": "Perfect",
            "description": "Or pâle, revêtement croustillant. Les pièces notées sont enroulées dans des cylindres serrés. Les tentacules sont frénétiques et croquantes.",
            "action": "Retirez immédiatement sur le rack et ne vous empilez pas — la vapeur adoucit la croûte."
          },
          {
            "state": "Overdone",
            "description": "Le revêtement est allé de l'or profond à brun, des odeurs de calmar de l'amidon brûlé.",
            "action": "Supprimer immédiatement. Le revêtement aura un goût légèrement amer, mais l'intérieur est probablement encore tendre."
          }
        ]
      },
      "feelCue": "Soulevez un morceau de calmar sur une araignée et laissez-le s'égoutter — vous devriez entendre un sifflement puis un craquage sec lorsque l'eau s'évapore de la croûte."
    },
    {
      "nodeId": "step_4",
      "action": "Mélanger",
      "inputs": [
        "fried_squid",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "finished_salt_pepper_squid",
      "instructions": "Verser la majeure partie de l'huile de friture, laissant une fine lissée. Au-dessus de la flamme élevée, ajouter l'ail, le chili et l'oignon de printemps. Faire frire pendant 20 à 30 secondes jusqu'à odorat et l'ail est à peine doré. Ajoutez le calmar frit et jetez furieusement pendant 15 secondes — juste assez pour parfumer la croûte sans la mettre à la vapeur.",
      "visualCue": {
        "primaryTarget": "L'ail est d'or pâle et parfumé, le chili et l'oignon de printemps sont brillants et flétris aux bords. La croûte de calmars semble encore sèche et intacte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est encore cru et blanc, les aromatiques ont à peine flétri.",
            "action": "Encore 10-15 secondes sur la chaleur maximale."
          },
          {
            "state": "Perfect",
            "description": "Or pâle à l'ail, chili et oignon brillant et parfumé. Le calmar est toujours croustillant — jetez en moins de 20 secondes.",
            "action": "Servir immédiatement sur une assiette chaude."
          },
          {
            "state": "Overdone",
            "description": "L'ail est brun et amer. Le calmar est cuit à la vapeur dans le wok et la croûte est devenue molle.",
            "action": "Servir de toute façon — la saveur est là même si la texture a souffert. La prochaine fois, travaillez plus vite et plus chaud."
          }
        ]
      },
      "feelCue": "La croûte finale doit sonner comme du gravier dans une poêle, car la croûte sèche reste croustillante."
    }
  ]
};
