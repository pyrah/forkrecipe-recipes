export default {
  "repoId": "master_thai_thainamjimjaew_001",
  "parentRepoId": null,
  "slug": "thai-nam-jim-jaew",
  "author": "ForkRecipe Kitchen",
  "title": "Thaïlande Nam Jim Jaew",
  "description": "Une sauce thaïlandaise collante, foncée, intensément aromatisée pour les viandes grillées — sauce de poisson et jus de citron vert fileté de tamarin, de chili séché, et la croûte décisive de poudre de riz grillé qui l'épaissit entre une sauce et un condiment.",
  "cuisine": "Thaï",
  "culture": "Isaan",
  "category": "condiments",
  "tags": [
    "condiment",
    "végétalien",
    "Sans gluten",
    "Thaï",
    "poisson-sauce",
    "Chaux",
    "Riz rôti"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 4,
    "bitter": 1,
    "umami": 4,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "sauce de poisson (Tiparos ou Megachef)",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce soja + pincée de MSG pour végétalien"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Jus de chaux frais",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": [
        "eau de tamarin pour une note aigre plus profonde"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Concentré de tamarin",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "jus de chaux supplémentaire (moins de complexité)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de palme ou sucre brun léger",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "miel ajouté hors-chauffe"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Heat",
      "name": "Flacons de chili thaïlandais séchés (bon de porc)",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "flocons de poivre rouge séché (moins aromatique)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Starch",
      "name": "Riz blanc cru (pour grillé)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "khoo khua acheté en magasin (gravure de riz en poudre) — saut 1"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Échalotes, coupées finement",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "oignon rouge, trempé dans de l'eau froide 5 min pour adoucir la dureté"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Feuilles de coriandre fraîches et tiges tendres",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_06"
      ],
      "outputState": "toasted_rice_powder",
      "instructions": "Placer le riz blanc cru dans une poêle sèche ou wok à feu moyen-doux. Faire cuire, agiter constamment la poêle, pendant 5 à 8 minutes, jusqu'à ce que le riz tourne un tank d'or, comme du caramel léger, chaque grain doit être coloré. La cuisine sentira le popcorn grillé et la chaleur des noix. Transférer au mortier et à la livre dans une poudre grossière, non pas aussi fine que la farine, mais sans grains entiers. Ce khua khao est l'élément phare de la cuisine Isaan : il ajoute de la noix, une croûte subtile et agit comme un épaississant léger pour la sauce.",
      "visualCue": {
        "primaryTarget": "Grains de riz dorés, uniformément colorés sans taches brûlées, piqués à une poudre sablonneuse grossière avec quelques fragments plus grands.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz est encore blanc et décoloré sans arôme de noix. Il aura un goût fébrile et cru dans la sauce.",
            "action": "Continuez à griller. La couleur doit se développer jusqu'au bout — pas de centres blancs."
          },
          {
            "state": "Perfect",
            "description": "De couleur dorée uniformément pâle. Ça sent la noix et légèrement fumé. Une fois battu, produit une poudre grossière et parfumée de la couleur du sable léger.",
            "action": "Pound à une poudre grossière et réserver."
          },
          {
            "state": "Overdone",
            "description": "Certains grains sont brun foncé et la poudre sent le popcorn brûlé.",
            "action": "Jeter les grains noirs avant de frapper. Ou continuez — quelques grains foncés ajoutent une subtile fumée que certains préfèrent."
          }
        ]
      },
      "feelCue": "Le riz grillé est plus sec et plus léger entre les doigts que le riz cru, moins féculent, plus creux. Lorsqu'il est pressé entre le pouce et l'index, il doit s'effondrer facilement."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "toasted_rice_powder",
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_nam_jim_jaew",
      "instructions": "Dissoudre le sucre de palme dans la sauce de poisson et le jus de lime en remuant — si le sucre est dans un bloc dur, griller ou raser d'abord. Ajouter le concentré de tamarin et mélanger. Ajouter les flocons de chili séchés, les tranches d'échalote et la poudre de riz grillé. Bien mélanger. Ajoutez la coriandre en dernier. Goûtez et ajustez : la sauce doit d'abord être salée, puis aigrer, puis sucrée, puis chauffer — les quatre piliers de l'assaisonnement d'Isaan. Il devrait être juste assez épais pour s'accrocher à la viande lorsqu'il est arrosé, aidé par la poudre de riz. Laisser reposer 5 minutes avant de servir afin que la poudre de riz absorbe le liquide et les échalotes légèrement cornichons.",
      "visualCue": {
        "primaryTarget": "Une sauce brun acajou foncé avec des anneaux d'échalote visibles, une coriandre verte et une texture légèrement sablonneuse de la poudre de riz — versable mais légèrement épaissie.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est mince comme de l'eau, le sucre non fondu, et la poudre de riz flottant sur le dessus plutôt que intégré.",
            "action": "Incorporer vigoureusement et laisser 5 minutes pour que la poudre de riz s'hydrate et que le sucre se dissout."
          },
          {
            "state": "Perfect",
            "description": "Une sauce sombre et complexe, juste épaissie par la poudre de riz, avec échalote visible, chili et herbe. Ça sent le aigre, l'umami et l'aromatique. Enrober légèrement l'arrière d'une cuillère.",
            "action": "Servir immédiatement ou dans les 2 heures. La sauce ne se conserve pas bien au réfrigérateur car la poudre de riz continue de l'épaissir."
          },
          {
            "state": "Overdone",
            "description": "Sat trop longtemps — la poudre de riz a sur-absorbé le liquide et la sauce s'est transformée en pâte épaisse ou les herbes se sont flétries.",
            "action": "Ajouter quelques gouttes de jus de lime et de sauce de poisson pour se détendre. Servir immédiatement."
          }
        ]
      },
      "feelCue": "La sauce doit se sentir légèrement râpée de la poudre de riz — cette texture sablonneuse contre la langue est la signature authentique de la cuisson Isaan, pas une faille."
    }
  ]
};
