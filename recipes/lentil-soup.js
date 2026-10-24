export default {
  "repoId": "master_turkish_lentil_soup_001",
  "parentRepoId": null,
  "slug": "lentil-soup",
  "author": "ForkRecipe Kitchen",
  "title": "Soupe de lentilles rouges",
  "description": "Le plat le plus démocratique de la Turquie — les lentilles rouges dissoutes en velours, fleuries de paprika-butter à la table, et finies par une jute de citron qui se transforme humble en électrique.",
  "cuisine": "Turquie",
  "culture": "Turquie",
  "category": "grains",
  "tags": [
    "lentilles",
    "Soupe",
    "turc",
    "végétalien",
    "mélangés",
    "hiver"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 1990,
  "forks": 156,
  "contributors": 44,
  "license": "CC-BY-SA",
  "createdAt": "2024-07-20",
  "updatedAt": "2025-02-01",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 3,
    "bitter": 1,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Lentilles rouges (rincées)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "pois fendus jaunes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon jaune (découpé)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Carotte (découpée)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "panais"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Stocks de légumes ou de poulet",
      "ratioValue": 500,
      "defaultUnit": "parts",
      "substitutions": [
        "eau + bouillon"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Paprika doux",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika fumé"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Beurre (pour floraison)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "Huile d'olive"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel et poivre noir",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saucisse",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_08"
      ],
      "outputState": "softened_aromatics",
      "instructions": "Faire fondre la moitié du beurre dans une grande casserole à feu moyen. Ajouter l'oignon et la carotte et cuire, en remuant de temps en temps, pendant 8-10 minutes jusqu'à ramollir et l'oignon est translucide et légèrement doré aux bords. Ajouter l'ail et cuire encore 1 minute. Ajouter le paprika et le cumin et remuer pendant 30 secondes — les épices doivent s'étourdir brièvement dans le beurre et libérer une floraison parfumée. Ne les laissez pas scorcher.",
      "visualCue": {
        "primaryTarget": "Les oignons sont translucides et légèrement dorés. Le pot sent le paprika fleuri et la carotte douce — un arôme chaud et rouge brique qui s'élève du beurre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore blanc et ferme. L'ail sent cru. Les épices sont pâles et non activées.",
            "action": "Faire cuire 3-5 minutes de plus. La base d'oignons doit être adoucie pour se fondre en douceur."
          },
          {
            "state": "Perfect",
            "description": "Les oignons sont floppés et dorés. L'épice dans le beurre est rouge-orange foncé et parfumée.",
            "action": "Ajouter immédiatement les lentilles et le stock."
          },
          {
            "state": "Overdone",
            "description": "Les épices sont brun foncé et sentent amer. L'ail a brûlé.",
            "action": "Ajoutez immédiatement un peu de bouillon pour arrêter la cuisson. L'ail amer sera dilué par les lentilles."
          }
        ]
      },
      "feelCue": "Lorsque le paprika frappe le beurre, la cuisine se remplit immédiatement d'un nuage d'épices tièdes et légèrement sucrées."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "softened_aromatics",
        "ing_01",
        "ing_05",
        "ing_10"
      ],
      "outputState": "cooked_lentil_soup",
      "instructions": "Ajouter les lentilles rincées et le bouillon dans la casserole. Assaisonner de sel et de poivre. Porter à ébullition à feu vif, puis laisser mijoter régulièrement. Cuire à découvert pendant 20-25 minutes, en remuant occasionnellement. Les lentilles rouges se dissolvent seules — aucun mélange nécessaire pour une texture lisse — mais un bref mélange produit un résultat plus soyeux et de qualité restaurant. Essuie toute mousse qui monte dans les premières minutes.",
      "visualCue": {
        "primaryTarget": "Les lentilles se sont complètement dissoutes dans le stock. La soupe est épaisse, opaque et jaune-orange foncé. Une cuillère en bois traînée à travers la surface laisse un sentier qui se ferme lentement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les lentilles sont visibles sous forme de disques orange pâle distincts. La soupe est fine et bouillonnante.",
            "action": "Faites mijoter 10 minutes de plus. Les lentilles rouges perdent progressivement leur structure — elles se dissolvent avec patience."
          },
          {
            "state": "Perfect",
            "description": "La soupe est épaisse et uniformément colorée. Les lentilles sont indistinguables du bouillon. Mélanger avec une résistance douce.",
            "action": "Retirer du feu et mélanger si désiré, puis retourner en pot."
          },
          {
            "state": "Overdone",
            "description": "La soupe est devenue très épaisse et commence à coller et à cracher. Le fond peut être brûlant.",
            "action": "Retirer du feu, ajouter une louche d'eau chaude et remuer vigoureusement."
          }
        ]
      },
      "feelCue": "La soupe à ce point sent chaudement l'amidon de cumin et de lentilles, presque comme du pain, avec une note minérale douce du stock."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "cooked_lentil_soup"
      ],
      "outputState": "blended_soup",
      "instructions": "Utilisez un mélangeur d'immersion pour mélanger la soupe directement dans la casserole pendant 1 à 2 minutes jusqu'à ce qu'elle soit complètement lisse. Alternativement, mélanger en lots dans un mélangeur de support, ne remplir qu'à mi-chemin et tenir le couvercle avec une serviette pliée. Retourner dans le pot, ajuster la consistance avec une éclaboussure d'eau chaude si trop épaisse, et ramener à mijoter. Goûtez et ajustez le sel. La texture doit couler comme de la crème lourde — fluide mais substantielle.",
      "visualCue": {
        "primaryTarget": "Soupe orange-ambre uniformément lisse avec une surface brillante. Pas de lentilles visibles. Il enveloppe l'arrière d'une cuillère et y tient.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il reste des morceaux visibles de carottes ou de lentilles. La texture est rugueuse quand vous passez une cuillère à travers votre langue.",
            "action": "Continuez à mélanger. Un mélangeur d'immersion prend plus de temps qu'un mélangeur de peuplement — au moins 90 secondes à pleine vitesse."
          },
          {
            "state": "Perfect",
            "description": "Gloire, lisse et parfaitement uniforme. La couleur orange s'approfondit lorsqu'elle est mélangée. Pas de texture granuleuse.",
            "action": "Retourner en pot, ajuster l'assaisonnement et préparer le beurre de paprika."
          },
          {
            "state": "Overdone",
            "description": "Mélange trop long et la soupe est devenue mince de l'aération et de la perte de chaleur.",
            "action": "Retour à la chaleur et mijoter découvert brièvement pour restaurer le corps. Cela ne peut vraiment pas être exagéré — c'est mieux."
          }
        ]
      },
      "feelCue": "La soupe de lentilles bien mélangée enveloppe l'arrière d'une cuillère et se sent comme du velours sur votre langue — pas de grumeaux, pas de grumeaux, seulement de chaleur."
    },
    {
      "nodeId": "step_4",
      "action": "Bloom",
      "inputs": [
        "ing_08",
        "ing_06"
      ],
      "outputState": "paprika_butter",
      "instructions": "Dans une petite casserole ou une louche maintenue au-dessus de la flamme, faire fondre le beurre restant à feu moyen. Quand il mousse, ajouter une pincée de paprika et tourbillonner jusqu'à ce que le beurre devienne rouge orange vif et sente intensément le poivre doux. Cela prend 30-45 secondes. Retirer du feu le moment où il commence à approfondir l'orange passée vers le brun.",
      "visualCue": {
        "primaryTarget": "Le beurre est rouge-orange vif et mousse autour du paprika. Il sent intensément le poivre sucré fleuri, pas la graisse brûlée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est encore jaune et le paprika flotte sur le dessus, non activé.",
            "action": "Augmenter légèrement la chaleur et tourner la poêle plus activement."
          },
          {
            "state": "Perfect",
            "description": "Orange vif, mousseux, intensément aromatique. Le paprika s'est dissous dans la graisse.",
            "action": "Retirer du feu et arroser immédiatement sur les bols à soupe."
          },
          {
            "state": "Overdone",
            "description": "Le beurre est brun foncé et le paprika est devenu amer et sombre. Une odeur d'acride.",
            "action": "Jeter et recommencer à zéro — la bruine au beurre brûlé ruinera la délicate finale de la soupe."
          }
        ]
      },
      "feelCue": "Le moment du beurre de paprika est éphémère et théâtral — vous pouvez le sentir de l'autre côté de la pièce, doux et riche en capsicum, coupant à travers la vapeur neutre de lentilles."
    },
    {
      "nodeId": "step_5",
      "action": "Finition",
      "inputs": [
        "blended_soup",
        "paprika_butter",
        "ing_09"
      ],
      "outputState": "finished_lentil_soup",
      "instructions": "Déposer la soupe chaude dans des bols chauds. Faire tremper une cuillère à café de beurre de paprika dans un cercle au-dessus de chaque bol. Pressez le jus de citron frais directement dans chaque portion — environ une demi- cuillère à café par bol — et servez immédiatement avec du pain croustillant ou du pain plat. Le citron doit être ajouté au service, et non au pot, pour préserver sa luminosité.",
      "visualCue": {
        "primaryTarget": "Un bol orange vif avec un anneau de beurre de paprika brûlé-orange flottant à la surface et un éclat de jus de citron attraper la lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas de bruine de beurre de paprika. La soupe a l'air plate et monochrome.",
            "action": "Ajouter le beurre de paprika — il est essentiel, et non décoratif."
          },
          {
            "state": "Perfect",
            "description": "Soupe orange vive avec un anneau de beurre rouge-orange tourbillonné. La vapeur monte. L'odeur est le paprika chaud, le citron et le cumin.",
            "action": "Servir immédiatement avant que le beurre coule."
          },
          {
            "state": "Overdone",
            "description": "La soupe est trop longue et le beurre de paprika est coulé et incorporé. Le citron s'est évanoui.",
            "action": "Ajouter une touche de citron fraîche à la table pour restaurer la luminosité."
          }
        ]
      },
      "feelCue": "Au moment où le citron frappe la soupe chaude, le profil aromatique s'enfonce vers le haut — la chaleur et le poids des lentilles sont soudainement levés, et le bol entier a un goût plus lumineux."
    }
  ]
};
