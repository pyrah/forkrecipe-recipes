export default {
  "repoId": "master_japanese_yakitori-tare_001",
  "parentRepoId": null,
  "slug": "yakitori-tare",
  "author": "ForkRecipe Kitchen",
  "title": "Yakitori Tare",
  "description": "La glaçure sombre et brillante de soya-mirin qui définit yakitori - réduit à une laque qui caramélise sur chaque passage sur le charbon de bois, en construisant une couche de profondeur sucrée-savoureuse.",
  "cuisine": "Japonais",
  "culture": "Tokyo",
  "category": "condiments",
  "tags": [
    "Japonais",
    "sauce",
    "glaçure",
    "poulet",
    "grillage",
    "marque à l'avance"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Seasoning",
      "name": "Sauce soja (koikuchi, soja foncé standard)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari (sans gluten)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Mirin (Hon-mirin, vraiment fermenté)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "sherry sucré + une pincée de sucre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Solvent",
      "name": "Saucisse (sèche-cuisson ou boisson)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "sherry sec",
        "Vermouth sec"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre (cane blanche ou brun clair)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre de roche"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Ossements ou ailes de poulet (pour le corps)",
      "ratioValue": 2,
      "defaultUnit": "pieces",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélanger et ajouter les os",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "raw_tare_mixture",
      "instructions": "Dans une petite casserole lourde, mélanger la sauce soja, le mirin, le saké et le sucre. Ajouter les os ou les ailes de poulet — ceux-ci rendront le collagène dans la tare comme il le réduit, lui donnant un corps brillant, rouge à lèvres que la réduction du sourire de soja ne peut pas atteindre. Mélanger le sucre pour le distribuer. Mettre à feu moyen et laisser mijoter lentement, en remuant jusqu'à ce que le sucre soit complètement dissous. Vous remarquerez que le liquide devient plus parfumé alors que l'alcool de saké commence à cuire, passant de boozy à sucrément salé.",
      "visualCue": {
        "primaryTarget": "Un liquide ambré foncé à mijoter doucement, le sucre étant entièrement dissous, sans texture sèche lorsqu'une cuillère est tirée sur le fond de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sucre est encore granulaire et le liquide est froid ou à peine chaud.",
            "action": "Incorporer continuellement à feu moyen jusqu'à ce qu'on ne sente pas de graisse et que le liquide mijote."
          },
          {
            "state": "Perfect",
            "description": "Liquide ambré lisse, brillant, uniformément foncé à une bulle douce, sentant le caramel, le soja et le vin de riz doux.",
            "action": "Réduire le feu à moyen-doux et commencer la phase de réduction longue."
          },
          {
            "state": "Overdone",
            "description": "Le sucre a commencé à caraméliser sur les côtés de la poêle en taches sombres avant que la tare soit réduite — la chaleur était trop élevée.",
            "action": "Baissez immédiatement la chaleur, remuez les taches sombres (ils ajoutent de la profondeur, pas de saveur brûlée, à ce stade), et continuez."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère propre sur le fond de la casserole — vous ne devriez pas ressentir de grain. Le liquide doit s'écouler doucement de la cuillère comme du sirop chaud et mince."
    },
    {
      "nodeId": "step_2",
      "action": "Faire réduire",
      "inputs": [
        "raw_tare_mixture"
      ],
      "outputState": "reduced_tare",
      "instructions": "Maintenir une mijotée moyennement basse, à découvert, pendant 25 à 30 minutes, en remuant occasionnellement. Le liquide va progressivement s'amplifier de l'ambre à une acajou sombre et la surface passera d'une bulle de roulement vive à une ébullition plus lente, plus épaisse, plus réticente que les sucres se concentrent. Surveillez les côtés de la poêle : un anneau de résidus sirupeux va se former et s'assombrir, c'est normal. Garder la chaleur suffisamment basse pour qu'elle ne fasse jamais bouillir dur, ce qui peut rendre l'ivraie granuleuse. La tare est suffisamment réduite lorsqu'elle a perdu environ la moitié de son volume initial.",
      "visualCue": {
        "primaryTarget": "Un liquide d'acajou foncé qui recouvre une cuillère dans un ruban large et lent plutôt que de couler dans des gouttes — épais mais toujours versable quand chaud.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Encore minces et gouttes de la cuillère dans un ruisseau plutôt qu'une feuille — les sucres n'ont pas assez concentré pour donner la qualité de laque à feu vif.",
            "action": "Continuez à réduire. Tester en trempant une cuillère et la laisser refroidir pendant 10 secondes — seulement alors l'épaisseur sera apparente."
          },
          {
            "state": "Perfect",
            "description": "Déposer une cuillère fraîche dans un ruban lent, large et brillant. Une goutte sur une plaque froide se met à un point collant et brillant en quelques secondes. Acajou foncé, profondément aromatique.",
            "action": "Enlevez les os, souchez et refroidissez. La tare s'épaissira davantage à mesure qu'elle refroidit, en vue de la consistance du sirop d'érable à chaud."
          },
          {
            "state": "Overdone",
            "description": "Tare a réduit au-delà du sirop à un épais, sombre, semi-solide qui fixe raide sur une assiette froide et des odeurs de caramel brûlé.",
            "action": "Ajouter 1 à 2 cuillères à soupe d'eau ou de sauce de soja et remuer à feu doux pour se détendre. Mieux vaut sous-réduire et tremper plus fréquemment qu'à brûler."
          }
        ]
      },
      "feelCue": "Pincez une petite quantité entre deux bouts de doigts et frottez — vous devriez sentir une traction courte et collante avant que les doigts se séparent proprement. Ce collant est le concentré de sucres Maillard qui caramélise magnifiquement sur chaque passage sur le charbon."
    },
    {
      "nodeId": "step_3",
      "action": "Frais et frais",
      "inputs": [
        "reduced_tare",
        "ing_05"
      ],
      "outputState": "finished_yakitori_tare",
      "instructions": "Enlevez les os de poulet avec des pinces et jetez - ils ont fait leur travail de collagène. Verser la tare chaude dans un pot ou un contenant résistant à la chaleur, en appuyant sur les solides. Laisser refroidir à la température ambiante; il s'épaissira nettement car il refroidit à une consistance entre le sirop d'érable et la mélasse. Conserver au réfrigérateur, où il se conserve indéfiniment. Au service, réchauffer dans une petite casserole ou simplement laisser venir à la température ambiante — la tare froide est trop épaisse pour enrober uniformément. Pour l'utiliser : tremper les brochettes dans la tare et retourner au grill, en répétant 3 à 4 fois pour créer des couches de glaçure.",
      "visualCue": {
        "primaryTarget": "Une tare fraîche, mahogany foncée avec une goutte lente et brillante — assez épaisse pour enrober l'arrière d'une cuillère d'une finition miroir, assez fine pour s'écouler lorsqu'elle est renversée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La tare est fine et pâle lorsqu'elle est fraîche, enrobant à peine la cuillère — elle brûlera sur la grille avant de construire la laque.",
            "action": "Retournez dans la casserole et réduisez encore jusqu'à ce que l'essai de revêtement soit réussi. Une fine tare sèche sur le grill au lieu de caraméliser."
          },
          {
            "state": "Perfect",
            "description": "Riche en acajou, sirop à cuiller lente avec une surface miroir brillante. Enrober une cuillère complètement, et s'écouler de l'extrémité dans un seul fil épais qui se serpente quand il atteint la surface.",
            "action": "Jar et magasin. Utiliser à température ambiante ou légèrement chaud pour un meilleur débit."
          },
          {
            "state": "Overdone",
            "description": "Presque solide quand frais, ne peut pas être versé sans réchauffement — a dépassé le point de réduction idéal.",
            "action": "Arroser d'une cuillère à soupe de sauce soja ou de mirin, réchauffer doucement et remuer jusqu'à ce qu'elle soit lisse."
          }
        ]
      },
      "feelCue": "Plongez un doigt propre et maintenez - la tare doit draper et tomber dans un seul fil, lent et non brisé. S'il tombe en gouttes, réduire davantage. S'il met comme des bonbons sur ton doigt, mince-le. La tare droite est aussi collante que le miel chaud, pas les bonbons."
    }
  ]
};
