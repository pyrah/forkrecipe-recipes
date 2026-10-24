export default {
  "repoId": "master_korean_koreansigeumchinamul_001",
  "parentRepoId": null,
  "slug": "korean-sigeumchi-namul",
  "author": "ForkRecipe Kitchen",
  "title": "Sigeumchi Namul (épinards sésame coréens)",
  "description": "Des épinards blanchis pressés à la soie et vêtus de sésame grillé, d'ail et de soja — le plus simple banchan de la table coréenne, et celui qui disparaît le premier du bol.",
  "cuisine": "Coréen",
  "culture": "Coréen",
  "category": "vegetables",
  "tags": [
    "légumes",
    "végétalien",
    "Sans gluten",
    "épinards",
    "coréen",
    "Banchan"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
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
    "sour": 0,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Epinards frais (feuille entière, pas bébé)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "épinards d'eau",
        "Fard suisse (blanchissement plus long)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "sauce soja (tamari sans gluten)",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "aminos de coco"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Garnish",
      "name": "Graines de sésame grillées",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanchir",
      "inputs": [
        "ing_01",
        "ing_05"
      ],
      "outputState": "blanched_spinach",
      "instructions": "Portez une grande casserole d'eau bouillante généreusement salée à ébullition. Ajouter les épinards en même temps et blanchir pendant 30 à 45 secondes, jusqu'à ce qu'ils soient entièrement flétris et vert vif. Ne pas blanchir plus longtemps. Drainez et transférez immédiatement dans un bol d'eau glacée pour arrêter la cuisson et fixer la couleur. Après 1 minute, égoutter et presser fermement les épinards avec les deux mains pour retirer autant d'eau que possible. Le paquet pressé devrait être environ un tiers du volume original. Coupez le faisceau deux fois dans le sens transversal en troisièmes.",
      "visualCue": {
        "primaryTarget": "Un faisceau serré d'épinards verts vifs. Lorsqu'elle est coupée, la section transversale présente des épinards denses et compacts avec très peu d'eau restante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épinards sont encore légèrement rafraîchis et les feuilles ne se sont pas complètement flétries. Vert foncé mais pas très soyeux.",
            "action": "30 secondes de plus dans l'eau bouillante."
          },
          {
            "state": "Perfect",
            "description": "Vivant, vert électrique. Entièrement flétris. Sensé lorsqu'il est pressé — l'eau a été pressée et le faisceau tient sa forme.",
            "action": "Coupe en troisièmes et saison."
          },
          {
            "state": "Overdone",
            "description": "L'épinard est vert olive ou kaki. Le bain de glace était trop lent.",
            "action": "Continuez. La saveur est la même, mais la couleur est moins vive. La prochaine fois, préparez le bain de glace avant que les épinards entrent dans l'eau."
          }
        ]
      },
      "feelCue": "Le faisceau d'épinards pressés doit se sentir aussi dense qu'une éponge ferme — pas mouillée et molle. Si l'eau coule quand vous la tenez, pressez plus fort."
    },
    {
      "nodeId": "step_2",
      "action": "Assaisonner",
      "inputs": [
        "blanched_spinach",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "dressed_namul",
      "instructions": "Placer les épinards coupés dans un bol. Ajouter la sauce soja, l'huile de sésame grillée et l'ail cru haché. Jetez avec vos mains, en travaillant le pansement dans chaque couche des épinards. Goûtez et ajustez - les épinards doivent être bien assaisonnés et salés, avec l'huile de sésame parfumant chaque bouchée. L'ail cru se moelle légèrement lorsque le namul est assis. Pour une version plus douce, faire sauter très brièvement l'ail dans l'huile de sésame avant de l'ajouter.",
      "visualCue": {
        "primaryTarget": "Chaque brin d'épinard scintille avec de l'huile de sésame et est uniformément assaisonné de soja.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épinards sont assaisonnés de façon inégale — certaines morsures sont molles.",
            "action": "Jetez plus soigneusement avec vos mains. Chaque brin doit être recouvert."
          },
          {
            "state": "Perfect",
            "description": "Chaque morceau d'épinard est assaisonné uniformément. L'huile de sésame fait briller les épinards. L'ail est distribué partout.",
            "action": "Assiette et garnir de graines de sésame."
          },
          {
            "state": "Overdone",
            "description": "Trop de soja — le namul est très salé et la saveur délicate des épinards est débordée.",
            "action": "Ajoutez encore quelques morceaux d'épinards blanchis et non assaisonnés et lancez-les pour diluer."
          }
        ]
      },
      "feelCue": "Jetez le namul avec vos doigts — les épinards devraient se sentir léchés avec de l'huile de sésame, et non secs. Chaque pièce doit se séparer facilement, et non s'écraser."
    },
    {
      "nodeId": "step_3",
      "action": "Dresser",
      "inputs": [
        "dressed_namul",
        "ing_06"
      ],
      "outputState": "finished_sigeumchi_namul",
      "instructions": "Transférer les épinards assaisonnés dans un petit bol de service. Déposer les graines de sésame grillées sur le dessus. Servir à température ambiante ou légèrement réfrigéré comme banchan aux côtés du riz et d'autres plats coréens. Sigeumchi namul s'améliore après 30 minutes à mesure que les saveurs se mélangent — c'est un plat idéal en tête de marque et conserve réfrigéré jusqu'à 3 jours.",
      "visualCue": {
        "primaryTarget": "Un monticule compact d'épinards verts vifs, avec des graines de sésame blanches dispersées sur la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Namul semble humide et sans saison. Pas d'éclat de l'huile de sésame.",
            "action": "Ajouter encore quelques gouttes d'huile de sésame et jeter à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Vert vif, illuminant uniformément. Les graines de sésame sont blanches et fraîches contre le vert foncé. L'arôme est noisette et salée.",
            "action": "Servir dans le cadre d'une propagation banchan."
          },
          {
            "state": "Overdone",
            "description": "La couleur s'estompe en olive. Les graines de sésame ont absorbé l'humidité.",
            "action": "Ajouter les graines de sésame frais juste avant de servir. La saveur est inchangée."
          }
        ]
      },
      "feelCue": "Ramassez un brin de namul et tenez-le à la lumière — il devrait briller avec de l'huile de sésame, les feuilles boiteuses mais intactes, non déchirées ni déchiquetées."
    }
  ]
};
