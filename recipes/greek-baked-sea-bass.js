export default {
  "repoId": "master_greek_greekbakedseabass_001",
  "parentRepoId": null,
  "slug": "greek-baked-sea-bass",
  "author": "ForkRecipe Kitchen",
  "title": "Bass grec de mer cuite (Lavraki Plaki)",
  "description": "Un bar tout entier posé sur un lit de tomates, d'oignons et de pommes de terre, noyé dans l'huile d'olive et le vin blanc, et cuit bas et lent jusqu'à ce que tout soit soyeux et le poisson tombe de l'os en un coup d'œil.",
  "cuisine": "Grec",
  "culture": "Grec",
  "category": "seafood",
  "tags": [
    "Produits de la mer",
    "Sans gluten",
    "grec",
    "base maritime",
    "tomates",
    "herbe",
    "cuits"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "1 hour 10 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Bars entiers (lavraki), 1–1,2 kg, nettoyés",
      "ratioValue": 1100,
      "defaultUnit": "g",
      "substitutions": [
        "branzino",
        "brème de mer"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 100,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Base",
      "name": "Tomates ripées, coupées en tranches",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "une tomate entière de 400 g d'étain, égouttée"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignons blancs, tranchés en rondelles",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Structure",
      "name": "Pommes de terre, pelées et coupées en tranches",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Vin blanc sec",
      "ratioValue": 100,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Persil frais à feuilles plates",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 4,
      "defaultUnit": "sprigs",
      "substitutions": [
        "Thym séché"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel de mer fin et poivre noir fraîchement moulu",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Acid",
      "name": "Citron, tranché en rondelles",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtir",
      "inputs": [
        "ing_06",
        "ing_04",
        "ing_03",
        "ing_05",
        "ing_02",
        "ing_07",
        "ing_09",
        "ing_10"
      ],
      "outputState": "vegetable_bed",
      "instructions": "Préchauffer le four à 180°C (350°F). Dans un grand plat torréfié ou une poêle au four, planter les tranches de pommes de terre sur le fond. Ajouter les anneaux d'oignon, les tranches de tomates et l'ail au-dessus. Assaisonner généreusement de sel et de poivre. Verser 60 ml d'huile d'olive et le vin blanc sur les légumes. Ajouter les brins de thym. Cuire au four pendant 25 minutes jusqu'à ce que les pommes de terre commencent à ramollir et que les tomates commencent à s'effondrer. La cuisson préliminaire garantit que les pommes de terre sont cuites — elles ont besoin de plus de temps que les poissons.",
      "visualCue": {
        "primaryTarget": "Les pommes de terre sont semi-tendantes et les tomates se sont effondrées, libérant leur jus dans une base parfumée et parfumée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pommes de terre sont encore fermes et crues au centre; les tomates sont à peine adoucies.",
            "action": "Continuer la cuisson pendant 10 minutes avant d'ajouter le poisson."
          },
          {
            "state": "Perfect",
            "description": "Les pommes de terre donnent à une pointe de couteau mais tiennent leur forme. Les tomates s'effondrent et juteuses. Les oignons sont translucides et doux.",
            "action": "Posez le poisson marqué sur le lit de légumes."
          },
          {
            "state": "Overdone",
            "description": "Les pommes de terre sont très molles et les jus de tomates sont réduits à une couche sèche et concentrée.",
            "action": "Ajouter 100 ml d'eau chaude avant de placer le poisson pour restaurer l'humidité."
          }
        ]
      },
      "feelCue": "Le lit de légumes doit sentir le vin de cuisson et la tomate — sucrée, acide et chaude — remplir la cuisine avant même l'arrivée du poisson."
    },
    {
      "nodeId": "step_2",
      "action": "Cuire au four",
      "inputs": [
        "vegetable_bed",
        "ing_01",
        "ing_11",
        "ing_08",
        "ing_02",
        "ing_10"
      ],
      "outputState": "finished_greek_sea_bass",
      "instructions": "Noter le poisson 3 fois de chaque côté. Assaisonner à l'intérieur et à l'extérieur avec du sel et du poivre. Remplis la cavité de persil, de rondelles de citron et d'un filet d'huile d'olive. Posez le poisson sur le lit de légumes partiellement cuit. Faire revenir le reste de l'huile d'olive sur le poisson. Disposer les autres rondelles de citron sur le dessus. Retourner au four de 30 à 35 minutes jusqu'à ce que le poisson soit cuit. Déposer deux fois le jus de cuisson sur le poisson.",
      "visualCue": {
        "primaryTarget": "La peau de poisson est dorée et légèrement cloquée; les coupes de pointes ont ouvert et révèlent une chair blanche opaque. Les jus de pan bouillonnent autour du poisson.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coupures sont toujours fermées; la chair à l'intérieur de la cavité corporelle semble rose translucide.",
            "action": "Retournez 10 minutes de plus. Testez avec une brochette au point le plus épais — elle devrait passer sans résistance."
          },
          {
            "state": "Perfect",
            "description": "La peau est dorée avec des patchs légèrement cloqués. Coupes de scores ouvertes avec la chair blanche et opaque. Le poisson se soulève proprement de l'épine dorsale lorsqu'il est testé avec une cuillère.",
            "action": "Reposez-vous 5 minutes et servez directement à partir du plat."
          },
          {
            "state": "Overdone",
            "description": "Le poisson s'éloigne spontanément des os; la chair semble sèche à la surface.",
            "action": "Servir immédiatement avec des jus de casserole supplémentaires en lambeaux pour restaurer l'humidité."
          }
        ]
      },
      "feelCue": "Le poisson est fait quand vous pouvez glisser une fourchette dans la coupe la plus épaisse et sentir qu'il donne complètement sans résistance — comme pousser à travers le beurre chaud."
    },
    {
      "nodeId": "step_3",
      "action": "Assembler",
      "inputs": [
        "finished_greek_sea_bass",
        "ing_08"
      ],
      "outputState": "plated_lavraki_plaki",
      "instructions": "Apportez l'ensemble du plat rôti à la table — c'est ainsi que le plat est servi. Éparpiller du persil frais sur le dessus. Chaque personne prend une portion de poisson et une cuillère des légumes et des jus de poêle parfumés en dessous. Servir avec du pain croustillant pour éponger les jus.",
      "visualCue": {
        "primaryTarget": "Poisson doré reposant sur un lit de tomates effondrées et de pommes de terre tendres, avec une piscine d'huile d'olive et des jus de tomate qui l'entourent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les jus sont minces et aqueux; le plat semble inachevé et sous-vêtus.",
            "action": "Retourner à un four à 200 °C pendant 5 minutes à découvert pour concentrer les jus de poêle."
          },
          {
            "state": "Perfect",
            "description": "Les jus de pan sont de couleur profonde, orange brique et légèrement épais — une sauce naturelle. Le poisson est doré, les légumes sont tendres et brillants.",
            "action": "Servir directement à la table."
          },
          {
            "state": "Overdone",
            "description": "Les jus de casserole ont séché complètement; les légumes s'y collent.",
            "action": "Ajouter une éclaboussure d'eau chaude, gratter le fond et verser le poisson comme sauce."
          }
        ]
      },
      "feelCue": "Les jus de casserole doivent goûter simultanément de l'huile d'olive, de la douceur tomate, de l'acidité du vin blanc et de la note minérale propre du bar, une sauce simple mais complète qui n'a besoin de rien ajouté."
    }
  ]
};
