export default {
  "repoId": "master_french_onion_jam_001",
  "parentRepoId": null,
  "slug": "caramelized-onion-jam",
  "author": "ForkRecipe Kitchen",
  "title": "Jambon d'oignon caramélisé",
  "description": "Deux livres d'oignons cuits dans un quart de leur volume sur une heure de chaleur patiente — s'effondrer, édulcorer, brunir dans une confiture d'acajou qui rend chaque planche de charcuterie, burger et assiette de fromage infiniment mieux.",
  "cuisine": "Français",
  "culture": "Français",
  "category": "condiments",
  "tags": [
    "oignon",
    "confiture",
    "français",
    "condiment",
    "caramélisé",
    "Étendue"
  ],
  "difficulty": 2,
  "activeTime": "75 min",
  "totalTime": "90 min",
  "ratioSystem": "parts",
  "stars": 1680,
  "forks": 163,
  "contributors": 47,
  "license": "CC-BY-SA",
  "createdAt": "2024-09-10",
  "updatedAt": "2025-04-05",
  "flavorRadar": {
    "sweet": 4,
    "salty": 2,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Oignons jaunes (finement tranchés)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "oignons doux Vidalia",
        "oignons rouges (pour la couleur)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Huile d'olive",
        "combinaison des deux"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre brun",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre blanc",
        "Chérie"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Vinaigre balsamique",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin rouge",
        "vinaigre de sherry"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Solvent",
      "name": "Vin blanc sec ou vermouth sec",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "bouillon de poulet",
        "eau"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Thym frais (3-4 brins)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Thym séché (utiliser la moitié)",
        "feuille de laurier"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire revenir",
      "inputs": [
        "ing_02",
        "ing_01",
        "ing_03",
        "ing_07"
      ],
      "outputState": "wilted_onions",
      "instructions": "Faire fondre le beurre dans une poêle à gros fond ou un four hollandais à feu moyen. Ajouter tous les oignons tranchés, le sel et le thym en même temps. La casserole apparaîtra trop pleine — c'est exact, elle diminue considérablement. Incorporer pour enrober le beurre, puis laisser cuire pendant 5 minutes jusqu'à ce que la couche inférieure commence à ramollir et à devenir translucide. Le sel attire l'humidité immédiatement, ce qui se transforme en une vapeur douce. Mélanger toutes les 3-4 minutes.",
      "visualCue": {
        "primaryTarget": "Les oignons ont diminué à environ la moitié de leur volume d'origine, sont entièrement translucides et sont enduits dans un liquide mince et brillant provenant de l'humidité libérée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont encore opaques et généralement bruts. La casserole semble toujours très pleine avec un minimum de liquide libéré.",
            "action": "Soyez patient — n'élèvez pas la chaleur. L'objectif ici est une légère libération d'humidité, pas de brunissement. Continuer à feu moyen."
          },
          {
            "state": "Perfect",
            "description": "Entièrement translucide, volume réduit de moitié. Une réserve de liqueur d'oignon a été recueillie à la base. L'arôme est doux, juste légèrement cuit, rien encore brun.",
            "action": "Commencez la longue phase de caramélisation."
          },
          {
            "state": "Overdone",
            "description": "Les oignons brunissent avant d'adoucir complètement — certains bords sont dorés tandis que les centres sont encore fermes. La chaleur est trop élevée.",
            "action": "Réduire le feu immédiatement à moyen-doux. Ajouter 2 cuillères à soupe d'eau et remuer pour redistribuer. Les oignons brunis avant tout doux ne caramélisent pas correctement."
          }
        ]
      },
      "feelCue": "La cuisine doit sentir de la vapeur d'oignon douce et douce — humide et douce, comme la soupe d'oignon qui commence, pas comme la friture."
    },
    {
      "nodeId": "step_2",
      "action": "Caraméliser",
      "inputs": [
        "wilted_onions"
      ],
      "outputState": "caramelized_onions",
      "instructions": "Réduire le feu à moyen-doux. À partir de ce moment, le processus prend de 45 à 60 minutes et ne peut être précipité. Mélanger toutes les 5 minutes, en grattant n'importe quel fond qui se développe sur le fond de la poêle. Ne pas ajouter de liquide à moins que les oignons ne collent et ne menacent de brûler — l'humidité des oignons eux-mêmes suffit. A 20 minutes, les oignons seront dorés; à 40 minutes, ambre; à 60 minutes, une acajou profonde. L'arôme passe de la douceur crue à quelque chose de profondément complexe — caramel, savoureux et presque charnu de la réaction de Maillard.",
      "visualCue": {
        "primaryTarget": "Les oignons sont un acajou-brun profond, réduit à une fraction de leur volume original, tout à fait doux, et scintillant avec leurs propres jus concentrés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont dorés mais pas acajous. Ils ont encore une structure visible et l'arôme est doux et doux plutôt que complexe et profond.",
            "action": "Continuer à feu moyen-doux. Cette étape ne peut pas être raccourcie — les oignons d'or pâle ne sont pas caramélisés, ils sont simplement adoucis."
          },
          {
            "state": "Perfect",
            "description": "Une acajou profonde, presque embrouillée en apparence. Réduction à 20 % du volume original. Une cuillère traînée à travers la casserole révèle une ligne claire qui se remplit lentement. Arôme riche, caramel-savoureux.",
            "action": "Déglacer avec le vin, puis ajouter le sucre et la balsamique."
          },
          {
            "state": "Overdone",
            "description": "Les oignons sont brun foncé et collent agressivement. Certaines taches sont presque noires. Une légère odeur brûlée est présente.",
            "action": "Ajouter immédiatement 50 ml d'eau et remuer vigoureusement. Enlever les taches carbonisées. La saveur très foncée de caramel peut ajouter de l'amertume — équilibre avec plus de vinaigre balsamique."
          }
        ]
      },
      "feelCue": "Les oignons à ce stade devraient se sentir presque gélatineux lorsqu'ils sont agités — ils se sont effondrés dans une masse douce et cohésive plutôt que des brins individuels, et la cuillère ne rencontre presque aucune résistance."
    },
    {
      "nodeId": "step_3",
      "action": "Déglacer",
      "inputs": [
        "caramelized_onions",
        "ing_06",
        "ing_04",
        "ing_05"
      ],
      "outputState": "finished_onion_jam",
      "instructions": "Verser le vin et remuer vigoureusement, en grattant tout le fond de la poêle — c'est une saveur concentrée. Ajouter la cassonade et le vinaigre balsamique. Augmenter le feu à moyen et cuire encore 5 à 8 minutes, en remuant fréquemment, jusqu'à ce que le liquide ait diminué presque complètement et que le mélange soit épais, brillant et embrouillé. Enlevez les brins de thym. Goûtez et ajustez : plus de balsamique pour la tarte, plus de sucre pour la douceur, une pincée plus de sel si plat.",
      "visualCue": {
        "primaryTarget": "Une confiture d'acajou épaisse, brillante et profonde qui fond légèrement sur une cuillère et tombe dans des gouttes lentes et lourdes plutôt que de courir librement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La confiture est encore lâche et runny — le vin et le vinaigre n'ont pas assez diminué. Il glisse d'une cuillère comme un mince sirop.",
            "action": "Continuer la cuisson à feu moyen, en remuant constamment, pendant encore 3 à 5 minutes jusqu'à ce que le liquide épaississe visiblement."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, confiture, acajou brillant. Des chutes d'une cuillère dans des gouttes lentes et réticentes. L'arôme est profondément sucré, salé et acide en parfait équilibre.",
            "action": "Refroidir et conserver dans un pot. Réfrigérer pendant 2 semaines."
          },
          {
            "state": "Overdone",
            "description": "Jam a réduit trop loin et est rigide et collant, en tirant loin de la poêle en une seule masse.",
            "action": "Ajouter 2 cuillères à soupe d'eau ou de vin supplémentaire et remuer à feu doux pour se détendre."
          }
        ]
      },
      "feelCue": "Répartir une petite quantité sur le doigt – il devrait se sentir comme une confiture épaisse, chaude, légèrement collante et enrober votre peau sans dégoutter. Si ça s'arrête, faites cuire plus longtemps."
    }
  ]
};
