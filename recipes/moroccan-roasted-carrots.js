export default {
  "repoId": "master_moroccan_moroccanroastedcarrots_001",
  "parentRepoId": null,
  "slug": "moroccan-roasted-carrots",
  "author": "ForkRecipe Kitchen",
  "title": "Carottes grillées au cumin marocaines avec Harissa",
  "description": "Carottes rôties jusqu'à ce que leurs sucres caramélisent et se concentrent, puis glacés d'harissa et de miel et retournés au four — doux, fumé, et légèrement chaud dans la manière dont seule une main d'épices marocaines atteint.",
  "cuisine": "Maroc",
  "culture": "Maghrebi",
  "category": "vegetables",
  "tags": [
    "légumes",
    "végétalien",
    "Sans gluten",
    "Carotte",
    "Harissa",
    "Maroc"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "50 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 2,
    "sour": 1,
    "bitter": 1,
    "umami": 1,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Carottes pelées, coupées en deux dans le sens de la longueur",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "panais",
        "betteraves"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Paprika fumé",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Heat",
      "name": "Pâte de Harissa",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": [
        "rose harissa (mineur)",
        "sambal oelek"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Chérie",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": [
        "sirop d'érable",
        "agave"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel et poivre noir",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Coriandre fraîche ou persil à feuilles plates",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Graines de citrouille grillées (pepitas)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Noix de pin grillées"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_08",
        "ing_09"
      ],
      "outputState": "initial_roasted_carrots",
      "instructions": "Préchauffer le four à 200°C (400°F). Dans un grand bol, mélanger les demi-carottes à l'huile d'olive, au cumin, à la coriandre, au paprika fumé, à la cannelle, au sel et au poivre. Assurez-vous que chaque surface est recouverte d'huile et d'épices. Disposer le côté coupé sur une grande plaque de cuisson en une seule couche avec de l'espace entre chaque carotte. Faire cuire 25 à 30 minutes jusqu'à ce que les côtés coupés soient profondément caramélisés et que les bords montrent des taches d'omble.",
      "visualCue": {
        "primaryTarget": "Après 25 minutes, les côtés coupés des carottes sont d'or profond à brun caramel. Les pourboires peuvent montrer un peu d'omble. La cuisine sent le cumin grillé et le sucre caramélisé de carottes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 20 minutes, les carottes sont pâles et semblent toujours crues. Pas de caramélisation du côté coupé.",
            "action": "Retournez au four. Si ça prend du temps, le four peut ne pas être assez chaud ou les carottes sont surpeuplées. Déplacez-vous vers un support plus haut pour une chaleur supérieure plus directe."
          },
          {
            "state": "Perfect",
            "description": "D'or profond sur les côtés coupés avec des taches foncées tachetées aux bords. Une fourche insérée dans la partie la plus épaisse répond à une résistance douce — tendre mais non effondrement.",
            "action": "Dépliez le côté coupé et appliquez la glaçure harissa-honey."
          },
          {
            "state": "Overdone",
            "description": "Les carottes sont très sombres et les bouts ont brûlé. La surface coupée est noire.",
            "action": "Écrase les morceaux brûlés. Appliquer la glaçure et retourner au four pendant seulement 5 minutes."
          }
        ]
      },
      "feelCue": "Piercez la carotte la plus épaisse avec une fourchette ou un testeur de gâteau — il devrait entrer avec une résistance modérée, comme pousser à travers un avocat adouci. La carotte doit tenir sa forme et non s'effondrer."
    },
    {
      "nodeId": "step_2",
      "action": "Glacer",
      "inputs": [
        "initial_roasted_carrots",
        "ing_06",
        "ing_07"
      ],
      "outputState": "glazed_carrots",
      "instructions": "Mélanger la pâte de Harissa et le miel dans un glaçage lisse et rouge rouille. Dépliez les carottes partiellement grillées. À l'aide d'un pinceau ou d'une cuillère à pâtisserie, enrobez généreusement le côté coupé de chaque carotte de la glaçure harissa-honey. Retourner au four de 8 à 10 minutes de plus jusqu'à ce que la glaçure soit bouillie, caramélisée aux bords et collante. Le sucre dans le miel et les sucres naturels dans les carottes devraient atteindre la caramélisation profonde — sombre, presque comme des bijoux.",
      "visualCue": {
        "primaryTarget": "Carottes émaillées avec une surface profonde, collante, rouge rouille. Les bords de la glaçure doivent être légèrement carbonisés. La glaçure doit être laquée, pas mouillée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La glace est encore liquide et pâle. La Harissa n'a pas caramélisé.",
            "action": "Retour pour 3 à 5 minutes de plus. Regardez de près — la transition de parfait à brûlé est rapide avec le miel."
          },
          {
            "state": "Perfect",
            "description": "La glace est rouge rouille profonde à acajou, bouillonnant aux bords, et collant. Des taches sombres de caramélisation visibles. Les carottes sentent l'épice douce et la chaleur.",
            "action": "Supprimer immédiatement. Assiette et garniture."
          },
          {
            "state": "Overdone",
            "description": "La glaçure de miel a brûlé noir. Une odeur amère et acride.",
            "action": "Écraser soigneusement la glaçure brûlée des pires morceaux. La carotte ci-dessous est fine — appliquez une petite quantité de harissa fraîche et une bruine d'huile d'olive pour compenser."
          }
        ]
      },
      "feelCue": "Badigeonner la glaçure sur la carotte et la regarder commencer immédiatement à étourdir à partir de la chaleur résiduelle de la carotte — il devrait être assez épais pour rester là où il est appliqué, ne pas s'échapper des bords."
    },
    {
      "nodeId": "step_3",
      "action": "Dresser",
      "inputs": [
        "glazed_carrots",
        "ing_10",
        "ing_11"
      ],
      "outputState": "finished_moroccan_carrots",
      "instructions": "Transférer les carottes vitrées dans une assiette de service, côté glaçure. Dispersez les graines de citrouille grillées sur les carottes. Hacher ou hacher la coriandre fraîche et la disperser. Une dernière bruine d'huile d'olive complète le plat. Servir chaud ou à température ambiante — ce sont d'excellentes deux façons. À la température ambiante, la glaçure se met légèrement et devient presque comme un bonbon dans la texture.",
      "visualCue": {
        "primaryTarget": "Des carottes laquées et laquées avec des herbes vertes vives et des graines de citrouille vert olive éparpillées sur une surface de bijou.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas de garniture — le plat semble plat et monochromatique.",
            "action": "Ajouter les herbes et les graines avant de servir. Ils apportent de la saveur, pas seulement de la décoration."
          },
          {
            "state": "Perfect",
            "description": "Un plat frappant — les carottes sombres et collantes contrastant avec les herbes vives et la croûte de graines de citrouille. La glaçure s'est mise légèrement et brille.",
            "action": "Servez."
          },
          {
            "state": "Overdone",
            "description": "Les herbes ont été ajoutées trop tôt et sont flétries par la chaleur.",
            "action": "Ajouter les herbes fraîches au dernier moment, juste avant que le plat atteigne la table."
          }
        ]
      },
      "feelCue": "Appuyez sur une carotte vitrée à l'arrière d'une cuillère — elle devrait donner sans résistance, la chair donnant complètement, tandis que la surface glaçure s'accroche et s'étire comme une mince coquille de bonbons."
    }
  ]
};
