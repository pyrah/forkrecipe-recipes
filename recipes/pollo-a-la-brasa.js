export default {
  "repoId": "master_peruvian_pollo_a_la_brasa_001",
  "parentRepoId": null,
  "slug": "pollo-a-la-brasa",
  "author": "ForkRecipe Kitchen",
  "title": "Pollo a la Brasa (poulet de la Rotisserie péruvienne)",
  "description": "Un poulet entier saigné de sauce soja, de cumin, d'aji panca et d'ail pendant 24 heures, puis rôti sur une rotisserie ou au four jusqu'à ce que la peau soit brûlée et craquelée et que la viande à l'intérieur soit si juteuse et aromatique qu'il n'a besoin de rien au-delà de la verde aji vert vif servie à côté.",
  "cuisine": "Pérou",
  "culture": "Pérou",
  "category": "proteins",
  "tags": [
    "périuvien",
    "poulet",
    "pourriture",
    "Aji-panca",
    "Cumin",
    "soja",
    "Brasa"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "26 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
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
      "name": "Poulet entier (1,6 à 2 kg)",
      "ratioValue": 1800,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "sauce soja",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Giroves d'ail hachées à la pâte",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Aji panca (ou aji panca séché, réhydraté)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "pâte de chili ancho + 1 c. à thé paprika"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Paprika fumé",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Jus de chaux frais",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "jus de citron"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Poivre noir, moulu",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Origan séché",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Aromatic",
      "name": "Feuilles fraîches de menthe (pour aji verde)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Aromatic",
      "name": "Coriandre fraîche (pour aji verde)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Heat",
      "name": "Jalapeño frais ou aji amarillo (pour aji verde)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_15",
      "role": "Fat",
      "name": "Mayonnaise (pour aji verde)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_16",
      "role": "Acid",
      "name": "Jus de lime (pour aji verde)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "brasa_marinade",
      "instructions": "Mélanger la sauce soja, la pâte d'ail, le cumin, la pâte aji panca, le paprika fumé, le jus de lime, le sel, le poivre, l'origan et l'huile jusqu'à uniforme. Le mélange doit être épais, foncé et profondément aromatique: le soya et l'aji panca forment ensemble la couleur acajou caractéristique du pollo a la brasa.",
      "visualCue": {
        "primaryTarget": "Une marinade acajou foncée, légèrement plus épaisse que l'eau, avec un sous-ton rougeâtre de l'aji panca et du paprika. Des odeurs de cumin, de soja et de chili.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Marinade a l'air mince et pâle. Pas complètement combiné.",
            "action": "Plus vigoureusement. L'aji panca devrait être entièrement incorporé, et non flottant dans des patchs."
          },
          {
            "state": "Perfect",
            "description": "Une marinade sombre et unifiée. Goûte de soja, de cumin et de chili. Il sera dilué quelque peu par le gros poulet — il devrait avoir un goût fort.",
            "action": "Appliquer sur le poulet."
          },
          {
            "state": "Overdone",
            "description": "S.O. — marinade brute.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "La marinade doit avoir un goût assaisonné de façon spectaculaire, salé, aromatique et complexe. S'il a un goût équilibré à ce stade, il ne sera pas assez savoureux une fois distribué sur 1,8 kg de poulet."
    },
    {
      "nodeId": "step_2",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "brasa_marinade"
      ],
      "outputState": "marinated_chicken",
      "instructions": "Sécher soigneusement le poulet à l'intérieur et à l'extérieur. À l'aide de vos doigts, séparer soigneusement la peau de la poitrine et de la cuisse et pousser la moitié de la marinade directement sous la peau, la massant sur la viande. Frotter le reste de la marinade sur l'extérieur et à l'intérieur de la cavité. Placer dans un grand sac à fermeture éclair ou un plat couvert. Réfrigérer de 12 à 24 heures, tourner une fois.",
      "visualCue": {
        "primaryTarget": "Le poulet est profondément coloré acajou-rouge partout, y compris sous la peau où la marinade déborde légèrement contre la poitrine. Après 24 heures, la peau semble sombre et mate.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Marinade seulement sur la surface. La peau n'a pas été séparée pour permettre l'assaisonnement sous la peau.",
            "action": "Soulevez doucement la peau avec les doigts, en veillant à ne pas déchirer. L'application sous la peau est ce qui rend le sein humide et aromatisé."
          },
          {
            "state": "Perfect",
            "description": "Même des taches sombres à l'intérieur et à l'extérieur. La marinade sous la peau s'est infiltrée dans la chair. La peau est sombre et légèrement collante.",
            "action": "Retirer du réfrigérateur 1 heure avant la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Plus de 24 heures. Une teneur élevée en soja peut commencer à obscurcir la chair.",
            "action": "Toujours excellent. Continuez."
          }
        ]
      },
      "feelCue": "Après 24 heures, la viande de poitrine sous la peau devrait se sentir légèrement plus ferme et plus dense — le soja et le sel ont fait un léger remède, améliorant la texture et la capacité de retenir l'humidité pendant la torréfaction."
    },
    {
      "nodeId": "step_3",
      "action": "Rôtis",
      "inputs": [
        "marinated_chicken"
      ],
      "outputState": "roasted_brasa_chicken",
      "instructions": "Placer la poitrine du poulet sur une grille dans une poêle à rôtir (ou sur une crache de rotisserie). Faire cuire à 200 C (400 F) pendant 1 heure à 1 heure 15 minutes. Toutes les 20 minutes, badigeonner de pansements. Faites tourner la poêle si vous utilisez un four ordinaire. Le poulet est fait lorsque l'articulation de la cuisse lit 82 C (180 F) et la peau est profondément brûlée. Reposez-vous 10 minutes avant la sculpture.",
      "visualCue": {
        "primaryTarget": "Un poulet profondément acajou brun avec une peau craquée et brûlée. Les ailes et les extrémités du pilon sont très sombres — presque noires — alors que la peau de la poitrine est ambre profonde. L'articulation de la cuisse ne montre pas de jus rose lorsqu'elle est percée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est rouge cuivre pâle et douce. Les jus à l'articulation de la cuisse sont roses. Température interne inférieure à 74°C au sein.",
            "action": "Continuer la cuisson et le basting. La peau a besoin de plus de temps pour se fixer et craquer."
          },
          {
            "state": "Perfect",
            "description": "Peau très brûlée, acajou à brun foncé. La peau craque lorsqu'elle est pressée avec une cuillère. Jus clairs à l'articulation de la cuisse. Température interne du sein 74 C, cuisse 82 C.",
            "action": "Reposez 10 minutes sous une tente lâche avec du papier."
          },
          {
            "state": "Overdone",
            "description": "La peau est très sombre, crépitante et sèche. La viande de sein commence à sécher aux bords.",
            "action": "Reposez-vous immédiatement sous la feuille. La poitrine peut être légèrement sèche, mais la cuisse sera excellente."
          }
        ]
      },
      "feelCue": "Après le repos, appuyez sur la peau — elle doit se sentir tendue et papier, pas molle ou grasse. Un polo parfaitement torréfié la peau de la brasa devrait rougir faiblement lorsqu'elle est pressée."
    },
    {
      "nodeId": "step_4",
      "action": "Mélange",
      "inputs": [
        "ing_12",
        "ing_13",
        "ing_14",
        "ing_15",
        "ing_16"
      ],
      "outputState": "aji_verde",
      "instructions": "Mélanger la menthe, la coriandre, le jalapeño, la mayonnaise et le jus de lime dans un mélangeur jusqu'à ce qu'il soit entièrement lisse et vert vif. Assaisonner de sel. La sauce doit être brillante, herbie, crémeuse et légèrement épicée, l'accompagnement essentiel pour couper la richesse du poulet.",
      "visualCue": {
        "primaryTarget": "Une sauce vert vif, complètement lisse sans morceaux d'herbe visible. La couleur doit être un vert clair, propre, pas gris-vert.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore épaisse avec des morceaux d'herbe visibles et une peau jalapeño.",
            "action": "Mélanger plus longtemps. La sauce doit être soyeuse et uniforme."
          },
          {
            "state": "Perfect",
            "description": "Vivant, vert doux. Goût lumineux, herbie, légèrement épicé, avec une richesse crémeuse de la mayonnaise. Équilibre la richesse du poulet.",
            "action": "Réfrigérer jusqu'à ce qu'il soit prêt à servir."
          },
          {
            "state": "Overdone",
            "description": "La sauce est gris-vert — surcollée et oxydée, ou laissée trop longtemps avant de servir.",
            "action": "Ajoutez une touche de citron vert frais pour éclaircir la couleur et servir immédiatement."
          }
        ]
      },
      "feelCue": "La verde aji doit se sentir crémeuse mais pas lourde sur la langue: la fraîcheur de l'herbe doit dominer, avec la mayonnaise comme émulsifiant de fond, pas un élément dominant."
    },
    {
      "nodeId": "step_5",
      "action": "Tranche",
      "inputs": [
        "roasted_brasa_chicken",
        "aji_verde"
      ],
      "outputState": "finished_pollo_a_la_brasa",
      "instructions": "Couper le poulet reposé : séparer les jambes, couper la poitrine, couper les ailes. Arrangez-vous sur un plateau chaud côté peau vers le haut afin que la peau brûlée reste visible. Servir l'aji verde dans un bol à côté, avec du yuca frit ou papas frits et une simple salade.",
      "visualCue": {
        "primaryTarget": "Morceaux de poulet sculptés disposés côté peau vers le haut, profondément acajou, à côté d'un bol de vert vif aji verde. Le contraste entre le poulet foncé et la sauce vert vif est frappant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est orientée vers le bas ou non. L'attrait visuel du pollo a la brasa est la peau brûlée.",
            "action": "Toujours présenter la peau vers le haut."
          },
          {
            "state": "Perfect",
            "description": "Poulet acajou sculpté et arrangé, sauce verte vive, côtés chauds. La cuisine sent le cumin, l'ail rôti et le soja caramélisé.",
            "action": "Servez."
          },
          {
            "state": "Overdone",
            "description": "Le poulet a été sculpté avant de se reposer. Les jus sont sortis de la planche à tailler plutôt que dans la viande.",
            "action": "Toujours reposer 10 minutes avant la sculpture."
          }
        ]
      },
      "feelCue": "Un morceau de polo a la brasa parfaitement reposé devrait se sentir humide et juteux au toucher — appuyer doucement la poitrine ne devrait pas faire couler le jus, parce que le reste l'a conservé dans les fibres musculaires."
    }
  ]
};
