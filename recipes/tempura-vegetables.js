export default {
  "repoId": "master_japanese_tempuravegetables_001",
  "parentRepoId": null,
  "slug": "tempura-vegetables",
  "author": "ForkRecipe Kitchen",
  "title": "Tempura végétal",
  "description": "Légumes disparates enrobés d'une pâte à peine mélangée à glace et plongés dans de l'huile à la bonne température – émergeant dans une coquille si délicatement croustillante, si délicate qu'elle est presque transparente, les propres poches de vapeur du légume qui conduisent à une légèreté aérée.",
  "cuisine": "Japonais",
  "culture": "Tempura de style Edo",
  "category": "vegetables",
  "tags": [
    "légumes",
    "Japonais",
    "tempura",
    "frits",
    "végétarien"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "45 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Légumes mélangés : patates douces (sétirées), shiitake, haricots verts, racine de lotus, poivre rouge",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "fleurs de brocoli, courgettes, aubergines"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Farine de gâteau ou farine à usage général (très froid)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Starch",
      "name": "Fécule de pomme de terre ou fécule de maïs",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Jaune d'œuf",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "eau gazeuse (vegan, utiliser 200 ml au total)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Hydration",
      "name": "Eau pétillante ou stagnante à froid",
      "ratioValue": 180,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre pour friture",
      "ratioValue": 1500,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin, pour la poussière des légumes",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation",
      "inputs": [
        "ing_01",
        "ing_07"
      ],
      "outputState": "prepped_vegetables",
      "instructions": "Préparer les légumes : couper la patate douce de 6mm d'épaisseur, shiitake propre et marquer les capsules, les haricots verts du haut et de la queue, couper la racine de lotus de 5mm d'épaisseur, couper le poivre rouge en larges bandes. Pat tous les légumes complètement secs — toute humidité de surface empêche l'adhérence de la pâte et provoque des éclaboussures d'huile dangereuses. Poussière légèrement avec de la farine (la farine de seconde fonction sert après le gluten structural — elle agit comme amorce pour l'adhésion à la pâte). Gardez tout froid jusqu'au moment de la friture.",
      "visualCue": {
        "primaryTarget": "Morceaux de légumes secs à la farine disposés sur un plateau. Aucune humidité scintillante visible sur aucune surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont encore mouillés par lavage — perles d'eau à la surface. Batter ne va pas adhérer et éclaboussera violemment dans l'huile.",
            "action": "Pat complètement sécher avec des serviettes en papier et laisser sécher à l'air pendant 5 minutes avant la farine."
          },
          {
            "state": "Perfect",
            "description": "Tous les morceaux sont complètement secs, avec une poussière très fine et à peine visible de farine. Pas de taches mouillées nues et brillantes.",
            "action": "Conserver au réfrigérateur jusqu'au moment de la friture."
          },
          {
            "state": "Overdone",
            "description": "Trop de farine — les morceaux sont épais avec une couche blanche visible.",
            "action": "Désactivez l'excès. Trop de farine rend la pâte épaisse et collante plutôt que le gossamer."
          }
        ]
      },
      "feelCue": "Frottez un morceau entre les doigts après le séchage et la poussière — il doit être sec comme de la poudre de talc, pas humide ou collant. Les légumes froids tiennent la pâte plus longtemps avant qu'elle ne glisse."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "tempura_batter",
      "instructions": "Cette étape doit être franchie dès que la friture est faite — jamais à l'avance. Mélanger le jaune d'œuf avec l'eau pétillante glacée et remuer brièvement. Ajouter les deux farines à la fois et remuer avec des baguettes ou une fourchette seulement 8-10 coups. La pâte doit rester bosselée, farineuse et manifestement sous-mélangée. Les grandes tranches de farine sèche sont normales et souhaitables. Ne soyez pas tentés de se mélanger jusqu'à ce que le développement du gluten soit doux.",
      "visualCue": {
        "primaryTarget": "Une pâte à peine combinée avec des stries de farine sèche visibles et des touffes. On dirait qu'il a été mélangé par quelqu'un qui n'a pas essayé très fort. C'est exact.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Si possible, la pâte n'est qu'une farine et un œuf sans incorporation d'eau. Je n'adhérerai pas.",
            "action": "Ajouter l'eau et remuer au minimum."
          },
          {
            "state": "Perfect",
            "description": "Lumpy, strié, manifestement sous-mixé. Suffisamment pour égoutter une baguette dans un cours d'eau mince et inégal. A peine tenir ensemble. Glace froide.",
            "action": "À utiliser immédiatement. Chaque minute, le gluten se développe et la pâte devient moins éthérée."
          },
          {
            "state": "Overdone",
            "description": "Lisse, consistance crêpe-batteuse sans bosses. Le gluten s'est développé à partir d'un mélange excessif. Produira une croûte épaisse et croustillante au lieu d'une coquille pure et croustillante.",
            "action": "Ne peut pas être démixé. Utilisez-le de toute façon, mais attendez un résultat moins délicat."
          }
        ]
      },
      "feelCue": "Plongez un doigt dans la pâte et maintenez - la; la pâte devrait s'écouler de votre doigt dans un cours d'eau mince et inégal avec des grumeaux, pas dans une feuille lisse et uniforme. Il devrait sentir froid et à peine là."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "prepped_vegetables",
        "tempura_batter",
        "ing_06"
      ],
      "outputState": "finished_tempura",
      "instructions": "Chauffer l'huile à exactement 170-175 C (340-345 F) — utilisez un thermomètre. Déposer brièvement chaque morceau de légumes dans la pâte (gouttez l'excès pendant 1 seconde seulement) et baissez dans l'huile. Faire frire en petits lots pour maintenir la température de l'huile — trop de morceaux refroidissent l'huile et produisent des résultats soyeux. Faire frire 2–3 minutes jusqu'à ce que la pâte se mette à un or très pâle, presque blanc. Égoutter sur une grille. Servir dans les 2 minutes.",
      "visualCue": {
        "primaryTarget": "Pale, presque or blanc, pâte pure avec une surface à peine perceptible bubbled. Pas d'or foncé. Il semble presque translucide dans les endroits où la pâte est la plus mince.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Batter semble humide et est toujours souplement pliant autour du légume. Il n'est pas prêt.",
            "action": "Laissez l'huile plus longtemps. La pâte a besoin d'une texture rigide et sèche."
          },
          {
            "state": "Perfect",
            "description": "Installé sur une coquille rigide, à peine dorée. Petites bulles à la surface. Le pétrole s'est dégagé. Lorsqu'elle est levée, la croûte ne fléchit pas, elle tient sa forme. Le légume intérieur est cuit.",
            "action": "Égoutter sur un rack et servir en 2 minutes. Saler légèrement à table."
          },
          {
            "state": "Overdone",
            "description": "La batte est d'or profond ou brun. La délicatesse pure est disparue — elle ressemble maintenant à un anneau d'oignon épais.",
            "action": "Égoutter et servir. Encore bon à manger, mais l'essence de la tempura — le voile de gossamer — est perdue."
          }
        ]
      },
      "feelCue": "Tenez un morceau de tempura fini par son bord le plus épais et agitez-le doucement — un morceau bien frit se sentira presque sans poids, et vous devriez entendre un léger bruit de bruissement que la pâte se déplace. Elle doit être aussi légère qu'une feuille d'automne."
    }
  ]
};
