export default {
  "repoId": "master_indian_kitchari_001",
  "parentRepoId": null,
  "slug": "kitchari",
  "author": "ForkRecipe Kitchen",
  "title": "Kitchari",
  "description": "Le porridge ayurvédique de guérison de l'Inde — le mung dal et le riz basmati fendus cuits ensemble avec le ghee doré, le cumin et le curcuma jusqu'à ce qu'ils se dissolvent dans un tout parfumé, profondément nourrissant, facilement digestible qui est plus que la somme de ses parties.",
  "cuisine": "Indiens",
  "culture": "Indiens",
  "category": "grains",
  "tags": [
    "grains",
    "indienne",
    "ayurvédique",
    "lentilles",
    "riz",
    "végétalien",
    "Sans gluten"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
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
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz basmati (rincé)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "riz blanc à grains courts"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Fendue jaune munge dal (mong dal)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "lentilles rouges"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Ghee",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "Huile de coco"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Graines de cumin",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 1200,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Coriandre fraîche, citron, ghee à servir",
      "ratioValue": 1,
      "defaultUnit": "serving",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire infuser",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "spiced_ghee",
      "instructions": "Faire fondre le ghee dans un pot à fond lourd à feu moyen. Ajouter les graines de cumin et faire frire pendant 60-90 secondes, en remuant, jusqu'à ce qu'elles commencent à sauter et à tourner une ombre plus foncée. Ajouter le curcuma et remuer pendant 20 secondes. Les épices sont fleuries dans les graisses pour libérer leurs composés aromatisants solubles dans les graisses.",
      "visualCue": {
        "primaryTarget": "Graines de cumin qui ont visiblement obscurci du bronzage pâle à un brun riche, entourées de ghee doré bouillonnant. Le curcuma a transformé la graisse en or vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines de cumin sont encore pâles, pas de son. Le ghee est chaud mais pas étourdissant.",
            "action": "Augmenter légèrement la chaleur. Les graines doivent s'assombrir et s'assombrir pour libérer leur arôme."
          },
          {
            "state": "Perfect",
            "description": "Les graines sont soufflées, bronzées, parfumées. La cuisine sent le cumin chaud et terreux. Ghee est profondément doré du curcuma.",
            "action": "Ajouter le riz et le dal immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les graines sont très brun foncé à noir. Une odeur amère et acride. Ghee fume.",
            "action": "Retirer du feu et verser dans un pot propre à travers un tamis pour enlever les graines brûlées. Commencez par du cumin frais."
          }
        ]
      },
      "feelCue": "Vous entendrez le cumin avant de le voir — un rapide, saccato popping, comme de très petits feux d'artifice. Ce son est votre signal."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "spiced_ghee",
        "ing_01",
        "ing_02",
        "ing_07",
        "ing_06"
      ],
      "outputState": "finished_kitchari",
      "instructions": "Ajouter le riz rincé et le dal mung dans le ghee épicé et mélanger pour enrober la graisse d'or curcuma. Verser l'eau, ajouter le sel et porter à ébullition. Réduire à mijoter doucement, couvrir et cuire pendant 25-30 minutes, en remuant occasionnellement, jusqu'à ce que le riz et le dal aient complètement fusionné en une consistance douce, semblable au porridge. Le kitchari doit couler lentement de la cuillère, ne pas tenir sa forme.",
      "visualCue": {
        "primaryTarget": "Un porridge doré, qui coule, où les grains de riz et le dal ne se distinguent plus, le plat s'est adouci en une masse unie, profondément jaune.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz et le dal sont encore des entités clairement distinctes. Une morsure ferme révèle des centres crayeux. La texture est plus riz-et-dal que porridge.",
            "action": "Ajouter 200 ml d'eau, couvrir et laisser mijoter encore 10-15 minutes. Kitchari n'est pas fait avant qu'il coule comme une rivière lente."
          },
          {
            "state": "Perfect",
            "description": "Or, unifié, coule lentement d'une louche. La texture est douce et réconfortante, sans pièces durs. Des odeurs de cumin, de ghee et de curcuma.",
            "action": "Goûtez au sel, ajoutez une bruine de ghee, et servez avec de la coriandre fraîche et une touche de citron."
          },
          {
            "state": "Overdone",
            "description": "Très humide et aqueuse — le rapport eau-grain était trop élevé ou il cuisinait trop longtemps. Ressemble à du porridge fin.",
            "action": "Cuire à découvert pendant 5-10 minutes pour réduire l'excès d'humidité, en remuant fréquemment."
          }
        ]
      },
      "feelCue": "Goûtez une cuillère — le dal et le riz auraient dû se dissoudre si complètement qu'ils se sentent comme une seule substance douce sur votre langue, chaude et enrobée, avec le fantôme des grains individuels plutôt que leur réalité."
    }
  ]
};
