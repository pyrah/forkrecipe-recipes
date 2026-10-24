export default {
  "repoId": "master_moroccan_moroccanchermoula_001",
  "parentRepoId": null,
  "slug": "moroccan-chermoula-fish",
  "author": "ForkRecipe Kitchen",
  "title": "Poissons cuits au four à la Chermoula marocaine",
  "description": "Un poisson entier mariné à l'intérieur et à l'extérieur dans la cermoule — une pâte verte vive de coriandre, de cumin et de citron conservé — a ensuite cuit jusqu'à ce que la chair s'évapore dans son propre nuage parfumé d'herbe.",
  "cuisine": "Maroc",
  "culture": "Maroc",
  "category": "seafood",
  "tags": [
    "Produits de la mer",
    "Sans gluten",
    "Maroc",
    "Cermoula",
    "herbe",
    "cuits",
    "poissons"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "1 hour",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 3,
    "bitter": 2,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Brème de mer entier ou bar (1–1,2 kg), nettoyé et marqué",
      "ratioValue": 1100,
      "defaultUnit": "g",
      "substitutions": [
        "snapper",
        "branzino"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Herb",
      "name": "Coriandre fraîche (grande grappe)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Persil frais à feuilles plates",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Paprika doux",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": [
        "paprika fumé"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poivre de Cayenne",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "piment au sol"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "Citron conservé, croûte seulement, rincé",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "zeste de citron frais + 1 c. à thé sel"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Garnish",
      "name": "Coins de citron et coriandre supplémentaire",
      "ratioValue": 1,
      "defaultUnit": "serving",
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
      "outputState": "chermoula_paste",
      "instructions": "Mélanger tous les ingrédients de la cermoule dans un robot culinaire ou la livre dans un grand mortier. Procéder jusqu'à ce qu'une pâte épaisse et vert vif se forme — elle doit avoir le corps et s'accrocher à une cuillère, pas être un liquide lisse. Bouche: Il doit être intensément herbacé, aigre du citron conservé, et terreux chaud du cumin. Une cermoule traditionnelle faite dans un mortier aura plus de texture ; un processeur donne un résultat plus lisse. Les deux sont corrects.",
      "visualCue": {
        "primaryTarget": "Une pâte verte épaisse et vive tachetée de taches d'herbes plus foncées et de citron pâle conservé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore épaisse avec de grandes herbes visibles et de l'ail intact.",
            "action": "Continuer à mélanger ou frapper jusqu'à ce qu'il soit cohérent et extensible."
          },
          {
            "state": "Perfect",
            "description": "Une pâte épaisse et vert vif qui tient sa forme sur une cuillère. Ça sent le cumin, la coriandre et le citron.",
            "action": "Diviser : les deux tiers pour mariner le poisson, un tiers réservé au basting."
          },
          {
            "state": "Overdone",
            "description": "La pâte est aqueuse et mince due au surtraitement; les herbes ont libéré trop d'humidité.",
            "action": "Pressez à travers un chiffon pour enlever l'excès de liquide ; la pâte sera plus dense et plus concentrée."
          }
        ]
      },
      "feelCue": "La cermoule doit se sentir légèrement gritté à partir des tiges et des épices de l'herbe, une pâte aromatique vivante plutôt qu'une sauce lisse. Frottez une petite quantité entre vos doigts; vous devriez être en mesure de le sentir à travers la pièce."
    },
    {
      "nodeId": "step_2",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "chermoula_paste"
      ],
      "outputState": "marinated_fish",
      "instructions": "Noter le poisson en profondeur des deux côtés — 4–5 coupes diagonales par côté, jusqu'à l'os. C'est essentiel pour deux raisons : il permet à la cermoule de pénétrer profondément dans la chair, et il empêche la peau de se bouillir dans le four. Frottez les deux tiers de la cermoule de façon agressive dans toutes les surfaces du poisson : à l'intérieur de la cavité corporelle, dans chaque coupe et sur la peau. Faire mariner au moins 30 minutes à température ambiante ou jusqu'à 4 heures au réfrigérateur.",
      "visualCue": {
        "primaryTarget": "Le poisson est entièrement enduit de pâte verte, avec une cermoule visible profondément dans chaque coupe et dans toute la cavité du corps.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La Chermoula n'est qu'en surface; les coupures ne sont pas remplies.",
            "action": "Utilisez vos doigts pour appuyer et forcer la pâte dans chaque coupe et crevasse."
          },
          {
            "state": "Perfect",
            "description": "Le poisson est complètement vert. Les coupures sont emballées avec de la pâte. La cavité est généreusement recouverte. Le poisson sent l'herbe intensément.",
            "action": "Laisser mariner. Préchauffer le four à 200°C."
          },
          {
            "state": "Overdone",
            "description": "Le poisson a mariné plus de 6 heures dans la cermoule lourde de citron; l'acide a commencé à «cuire» la chair de surface.",
            "action": "Rincer la marinade, sécher, appliquer la cermoule fraîche et cuire immédiatement."
          }
        ]
      },
      "feelCue": "Travaillez la cermoula dans les coupes de score fermement avec votre pouce — vous devriez sentir chaque coupe ouverte et accepter la pâte plutôt que de sceller dessus."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "marinated_fish",
        "chermoula_paste",
        "ing_12"
      ],
      "outputState": "finished_chermoula_fish",
      "instructions": "Placez le poisson sur une plaque de cuisson légèrement huilée ou dans un tagine. Spoon la chermoula réservée sur le dessus. Cuire à 200 °C (400 °F) pendant 20 à 25 minutes selon l'épaisseur (10 minutes par 2,5 cm d'épaisseur au point le plus large). Le poisson est fait lorsque les coupes de pointes ont ouvert et la chair à l'intérieur est blanche et opaque, et la peau est légèrement cloquée. Reposez-vous 5 minutes avant de servir. Garnir de quartiers de citron et de coriandre fraîche.",
      "visualCue": {
        "primaryTarget": "La peau est cloquée et légèrement carbonisée aux bords coupés; la cermoule est foncée jusqu'à un brun vert foncé. Les coupes de score s'ouvrent révélant la chair blanche et opaque.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coupes sont toujours fermées; la chair à l'intérieur montre des sections roses translucides. La peau n'a pas été cloquée.",
            "action": "Retourner au four 5 minutes de plus. Testez avec une brochette au point le plus épais — elle devrait passer sans résistance."
          },
          {
            "state": "Perfect",
            "description": "Les coupes de pointage s'ouvrent complètement; chaque coupe révèle des poissons blancs vifs et entièrement opaques. Chermoula est sombre et parfumée. Le poisson s'éloigne complètement de l'os.",
            "action": "Reposez-vous 5 minutes avant d'apporter à la table."
          },
          {
            "state": "Overdone",
            "description": "La chair commence à s'éloigner spontanément de l'os; l'extérieur semble très sec.",
            "action": "Servir immédiatement avec une bruine d'huile d'olive crue et un citron supplémentaire pour restaurer l'humidité."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère ou un couteau dans la coupe la plus épaisse — le poisson parfaitement cuit doit se séparer proprement dans de grands flocons brillants, chacun encore humide et tendre plutôt que sec et à cordes."
    }
  ]
};
