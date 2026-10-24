export default {
  "repoId": "master_italian_italianacquapazza_001",
  "parentRepoId": null,
  "slug": "italian-acqua-pazza",
  "author": "ForkRecipe Kitchen",
  "title": "Italien Acqua Pazza",
  "description": "Le poisson braconné dans l'eau vive — un bouillon bouillonnant de tomates cerises, de vin blanc et d'huile d'olive qui se jette à ébullition dans la poêle, perfumant le poisson de la brise marine de la côte sud de l'Italie.",
  "cuisine": "Italien",
  "culture": "Sud de l ' Italie",
  "category": "seafood",
  "tags": [
    "Produits de la mer",
    "Sans gluten",
    "Italien",
    "braconniers",
    "tomates",
    "simple",
    "italiques du Sud"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "35 min",
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
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Poisson entier (bream de mer, snapper ou bar), nettoyé",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "filets de poisson (réduire le temps de 5 min)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Base",
      "name": "Tomates cerises, coupées en deux",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "tomates datterini"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Girofles d'ail, meurtris",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Vin blanc sec",
      "ratioValue": 150,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Eau ou stock de poissons légers",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Persil frais à feuilles plates",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Heat",
      "name": "Peperoncino séché (glaces rouges)",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "piment rouge frais"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "baies ou câpres de bonne qualité",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saucisse",
      "inputs": [
        "ing_02",
        "ing_04",
        "ing_03",
        "ing_09",
        "ing_05",
        "ing_06",
        "ing_10"
      ],
      "outputState": "acqua_pazza_broth",
      "instructions": "Dans une poêle large, lissée ou peu profonde, réchauffer l'huile d'olive à feu moyen. Ajouter l'ail meurtri et le peperoncino et cuire doucement pendant 1 minute jusqu'à odorat. Ajouter les tomates cerises coupées et cuire 3 minutes jusqu'à ce qu'elles commencent à clotter et à s'effondrer. Ajouter le vin blanc et laisser buller pendant 1 minute. Ajouter l'eau ou le stock de poisson et les câpres. Assaisonner de sel. Portez à un mijot vigoureux.",
      "visualCue": {
        "primaryTarget": "Un bouillon vif et bouillonnant avec des tomates cerises qui commencent à s'effondrer et à libérer leur jus dans le liquide d'huile de vin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tomates sont encore entières et fermes; le bouillon est mince et pâle. Développement de saveur insuffisant.",
            "action": "Faire cuire 2 minutes de plus à feu moyen-vif, en pressant doucement les tomates avec une cuillère pour les encourager à éclater."
          },
          {
            "state": "Perfect",
            "description": "Au moins la moitié des tomates ont explosé, libérant leur jus dans le bouillon. Broth est une couleur rose-orange claire et sent le vin blanc, la tomate et l'ail.",
            "action": "Ajouter immédiatement le poisson."
          },
          {
            "state": "Overdone",
            "description": "Toutes les tomates se sont complètement dissoutes dans le bouillon; elle est devenue trop épaisse et réduite.",
            "action": "Ajouter 100 ml d'eau pour restaurer le volume avant d'ajouter le poisson."
          }
        ]
      },
      "feelCue": "Le bouillon doit faire des bulles vigoureuses et sentir simultanément la mer, le vin et la tomate — une distillation pure de la côte sud de l'Italie."
    },
    {
      "nodeId": "step_2",
      "action": "Pochette",
      "inputs": [
        "acqua_pazza_broth",
        "ing_01"
      ],
      "outputState": "poached_fish",
      "instructions": "Noter le poisson 3 fois de chaque côté. Assaisonner dedans et dehors. Abaissez le poisson dans le bouillon mijotant. Couvrir la poêle et cuire à feu moyen pendant 8-10 minutes par 500g de poisson. Déposer le bouillon sur le poisson toutes les 3 minutes. Le poisson est cuit quand les coupures de pointage ont ouvert et l'œil du poisson est devenu blanc et opaque — c'est l'indicateur traditionnel de la cuisson du pêcheur napolitain.",
      "visualCue": {
        "primaryTarget": "L'œil de poisson est blanc opaque; des coupures de score s'ouvrent révélant la chair blanche cuite; la peau a pris la couleur du bouillon de tomate.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'œil du poisson est encore sombre et translucide. Les coupures de score sont fermées. La chair dans la cavité du corps est rose.",
            "action": "Couvrir et continuer le braconnage pendant 4 à 5 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "L'œil est blanc nuageux. Coupes de score ouvertes entièrement avec chair blanche opaque. La peau a absorbé la couleur tomate rose-orange. Le poisson se soulève facilement de l'os.",
            "action": "Servir immédiatement directement de la poêle."
          },
          {
            "state": "Overdone",
            "description": "Le poisson s'éloigne spontanément des os; la chair semble sèche à la queue.",
            "action": "Servir immédiatement — soulever le poisson doucement pour éviter de durcir davantage la chaleur résiduelle."
          }
        ]
      },
      "feelCue": "Appuyez sur l'épaisse zone dorsale du poisson — il devrait produire complètement sans retour de printemps, comme presser dans le beurre à température ambiante, un signe que la chair a complètement détendu et cuit à travers."
    },
    {
      "nodeId": "step_3",
      "action": "Garnir",
      "inputs": [
        "poached_fish",
        "ing_07",
        "ing_02"
      ],
      "outputState": "finished_acqua_pazza",
      "instructions": "Scatter les feuilles de persil frais déchirées sur le poisson et arroser un fil final d'huile d'olive crue sur le bouillon. Servir directement de la casserole à la table. Fournissez du bon pain croustillant pour le bouillon — l'acqua-pazza (eau folle) est le véritable trésor: une essence légère, herb-brillante, parfumée de tomate qui devrait être bue du bol à la fin.",
      "visualCue": {
        "primaryTarget": "Poissonr dans un bouillon rose-orange brillant avec du persil vert, des tomates effondrées, et le fil brillant d'huile d'olive crue à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Broth est pâle et à peine aromatisé; le plat semble lavé et wan.",
            "action": "Augmenter la composante tomate ou laisser mijoter le bouillon 5 minutes de plus avant d'ajouter du poisson la prochaine fois."
          },
          {
            "state": "Perfect",
            "description": "Bouillon rose-orange vivide avec des piscines distinctes d'huile d'olive, persil parfumé, et un poisson qui tient sa forme tout en regardant complètement le rendement. Sens de la mer et de l'été.",
            "action": "Apportez à la table immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon a été réduit à une sauce épaisse plutôt qu'un léger liquide de braconnage.",
            "action": "Ajouter un jet d'eau chaude et remuer; servir sans cuisson ultérieure."
          }
        ]
      },
      "feelCue": "Le bouillon d'acqua-pazza doit se sentir sans poids sur la cuillère — léger comme de l'eau mais avec une douceur ronde et saline du poisson et une acidité du vin propre. Rien de lourd, rien d'épais."
    }
  ]
};
