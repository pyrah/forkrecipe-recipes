export default {
  "repoId": "master_japanese_teriyaki_glaze_001",
  "parentRepoId": null,
  "slug": "teriyaki-glaze",
  "author": "ForkRecipe Kitchen",
  "title": "Teriyaki Glaze",
  "description": "Un glaçure brillant, laqué et épais de soja, de mirine et de saké réduit à une consistance sirupeuse – sucré, salé et profondément umami, brossé sur les protéines dans les dernières minutes de cuisson.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "sauces",
  "tags": [
    "sauce",
    "Japonais",
    "glaçure",
    "doux",
    "soja",
    "umami"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "sauce soja japonaise (koikuchi shoyu)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari pour sans gluten"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Mirin (Hon-mirin, pas l'assaisonnement aji-mirin)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "sherry sec + 1 c. à thé sucre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Solvent",
      "name": "Cake (vin de riz japonais sec)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "sherry sec",
        "vin blanc sec"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre granulé blanc",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun léger",
        "Chérie"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gingembre frais (1 fine tranche, en option)",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélanger et chauffer",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "teriyaki_liquid",
      "instructions": "Mélanger la sauce de soja, le mirin, le saké, le sucre et la tranche de gingembre dans une petite casserole. Mélanger brièvement pour aider le sucre à commencer à se dissoudre. Faire mijoter à feu moyen, en remuant une fois de plus pour s'assurer que le sucre s'est complètement dissous avant que le liquide ne ébullition. Ne pas laisser sans surveillance à ce stade — la teneur en sucre signifie qu'elle peut bouillir rapidement une fois qu'elle arrive. Retirer la tranche de gingembre après 2 minutes si vous utilisez.",
      "visualCue": {
        "primaryTarget": "Un liquide brun-ambre foncé mijotant doucement, avec de petites bulles aux bords et un léger éclat qui commence à se développer à la surface. La vapeur porte un arôme sucré et salé de saké et de soie.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des granules de sucre encore visibles sur la cuillère lorsque vous remuez — le liquide n'a pas encore atteint une température uniforme.",
            "action": "Mélanger sur la chaleur jusqu'à ce que le sucre soit complètement dissous et que le liquide soit de couleur uniforme avant de réduire la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Toujours sombre, mijotant doucement et clair: le sucre est dissous et l'alcool commence à cuire. Ça sent le soja caramélisant et le mirin doux.",
            "action": "Réduire le feu à moyen-doux et commencer la phase de réduction."
          },
          {
            "state": "Overdone",
            "description": "Brouillant trop fort, avec de grandes bulles et éclaboussures, au risque de brûler le sucre sur les parois de la poêle.",
            "action": "Réduire immédiatement la chaleur. Essuyer les côtés de la poêle avec une brosse à pâtisserie humide si le sucre y caramélise."
          }
        ]
      },
      "feelCue": "Le liquide à ce stade devrait se sentir aussi mince que l'eau lorsque vous testez une goutte entre vos doigts. La douceur et le sel devraient être également affirmés — si le soja domine, ajouter une petite éclaboussure plus de mirin."
    },
    {
      "nodeId": "step_2",
      "action": "Réduire",
      "inputs": [
        "teriyaki_liquid"
      ],
      "outputState": "finished_teriyaki_glaze",
      "instructions": "Réduire le liquide mijotant à feu moyen-doux, sans remuer, jusqu'à ce qu'il ait diminué d'environ la moitié et qu'il ait atteint une consistance sirupeuse et glaçure. Cela prend 8-10 minutes. Regardez attentivement dans les 2 dernières minutes — la concentration de sucre augmente fortement et la glaçure peut aller de parfait à brûlé en moins d'une minute. Pour tester: tremper une cuillère froide dans la glaçure et l'incliner — elle doit couler dans une feuille lente et lourde et enrober la cuillère dans une fine laque. Hors de la chaleur, il s'épaissira encore plus à mesure qu'il refroidit.",
      "visualCue": {
        "primaryTarget": "Un glaçure brillant et acajou foncé qui se déplace lentement dans la poêle lorsqu'il est incliné. De petites bulles lentes surgissent à la surface. Sur une cuillère froide, elle revêt une couche mince, brillante, laquée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours mince et aqueux — coule une cuillère immédiatement sans enrobage. Ne va pas adhérer aux protéines pendant le brossage et produira une finition pâle et inégale.",
            "action": "Continuer à réduire à feu doux. Le passage du liquide à la glaçure est progressif, puis soudain — restez attentif."
          },
          {
            "state": "Perfect",
            "description": "Épais, lent et laqué. Enrober l'arrière d'une cuillère froide dans une feuille d'acajou. Sur le bout du doigt, il est nettement sirupeux et collant.",
            "action": "Retirer immédiatement du feu. Utilisez chaud — brossez sur le saumon, le poulet ou le tofu au cours des 2-3 dernières minutes de cuisson."
          },
          {
            "state": "Overdone",
            "description": "Trop épais — presque caramel-stiff quand chaud, durcit à un film vitreux fragile quand frais. Goûte intensément sucré avec un bord amer et carbonisé.",
            "action": "Hors de la chaleur, mélanger quelques gouttes de sauce de soja et de l'eau chaude à mince à une consistance utilisable. Utilisez immédiatement ou il sera sur-réglé."
          }
        ]
      },
      "feelCue": "Touchez une goutte refroidie sur une plaque : à la réduction parfaite, elle doit être collante comme une note collante – adhérente mais non collante. S'il s'agit d'une perle rigide et vitreuse en quelques secondes, il a été réduit trop loin."
    }
  ]
};
