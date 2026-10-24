export default {
  "repoId": "master_american_americancornbread_001",
  "parentRepoId": null,
  "slug": "american-cornbread",
  "author": "ForkRecipe Kitchen",
  "title": "Pain de cornichons en fonte",
  "description": "Un pain de maïs à base de craquant, à dorure d'or Southern, lacé et croustillant où la pâte a frappé le fer à fumer, tendre et à peine sucré à l'intérieur, sentant le beurre et le maïs grillé alors qu'il glisse hors de la poêle.",
  "cuisine": "Américain",
  "culture": "Amérique du Sud",
  "category": "breads",
  "tags": [
    "pain",
    "végétarien",
    "maïs",
    "Cuisinière",
    "Vite"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "40 min",
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
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Farine de maïs jaune fin",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "farine de maïs blanche (arôme doux)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "Farine AP sans gluten"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "Soda au four",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 7,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": [
        "miel (ajouter avec des ingrédients humides)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Beurre",
      "ratioValue": 280,
      "defaultUnit": "ml",
      "substitutions": [
        "lait + 1 c. à soupe de vinaigre"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Protein",
      "name": "Œufs (gros)",
      "ratioValue": 2,
      "defaultUnit": "eggs",
      "substitutions": [
        "Oeufs de lin pour végétaliens"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Beurre non salé (pour pâte)",
      "ratioValue": 55,
      "defaultUnit": "g",
      "substitutions": [
        "saindoux fondu (plus authentique)"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Beurre non salé (pour poêle)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Saindoux",
        "les gouttes de bacon"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Chaleur",
      "inputs": [
        "ing_10"
      ],
      "outputState": "preheated_skillet",
      "instructions": "Placer une poêle en fonte de 25 cm (10 po) dans le four et préchauffer les deux à 220 C (425 F). Cette étape n'est pas négociable : la poêle chaude à flamber crée la croûte de fond crépitante qui définit le pain de maïs en fonte. Pendant que le four chauffe, faire fondre le beurre de poêle et le beurre à pâte, puis préparer vos ingrédients secs et humides séparément.",
      "visualCue": {
        "primaryTarget": "La poêle doit être visiblement fumée lorsque vous la tirez du four — une chaleur sèche et chatoyante brume au - dessus de la surface du fer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La culotte est chaude au toucher mais ne fume pas. Pan a l'air ennuyeux.",
            "action": "Retourner au four pendant encore 10 minutes. La poêle doit fumer chaud ou la croûte inférieure ne se formera pas."
          },
          {
            "state": "Perfect",
            "description": "L'eau se vaporise instantanément. Un mince ruban de fumée se lève lorsque vous ouvrez la porte du four.",
            "action": "Ajouter le beurre de poêle et verser immédiatement dans la pâte."
          },
          {
            "state": "Overdone",
            "description": "La poêle commence à fumer fortement ou le beurre a brûlé avant que la pâte n'entre.",
            "action": "Ajouter la pâte immédiatement. Un peu de bruit à la base est souhaitable."
          }
        ]
      },
      "feelCue": "Tenez votre paume à 5 cm au-dessus de la poêle — vous devriez sentir une chaleur vive, presque brûlante en 1 seconde. Si vous pouvez le tenir là pendant 3 secondes, il n'est pas assez chaud."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "cornbread_batter",
      "instructions": "Dans un grand bol, fouetter ensemble la farine de maïs, la farine, la poudre à pâte, le bicarbonate de soude, le sel et le sucre. Dans un bol séparé, fouetter le babeurre, les œufs et le beurre fondu et refroidi. Verser les ingrédients humides dans le sec et remuer avec une spatule jusqu'à ce qu'ils soient combinés — 10-15 coups. Les lumps sont attendus et corrects. Ne pas trop mélanger. La pâte devrait être versable mais épaisse, comme une pâte à crêpes lâche.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse et dorée avec des morceaux visibles et quelques taches sèches — c'est la consistance correcte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Farine sèche visible. La pâte a l'air friable plutôt que versable.",
            "action": "Ajouter 1 à 2 cuillères à soupe de lait de beurre et plier doucement deux fois plus."
          },
          {
            "state": "Perfect",
            "description": "Versable, grumeux, légèrement mousseux des levains qui réagissent. La couleur est dorée de la farine de maïs. Des gouttes de la cuillère dans des rubans épais.",
            "action": "Verser immédiatement dans la poêle chaude à fumer."
          },
          {
            "state": "Overdone",
            "description": "Doux, élastique, pas de bosses. La pâte a été mélangée à une pâte.",
            "action": "Continuez — le pain de maïs sera moins tendre. La prochaine fois, arrêtez-vous à la bosse."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir lourde et goutte-comme lorsque vous soulevez la spatule — assez épaisse pour qu'elle ne coule pas rapidement, mais assez lâche pour se poser à plat dans la poêle."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "preheated_skillet",
        "cornbread_batter"
      ],
      "outputState": "finished_cornbread",
      "instructions": "Retirer la poêle à fumer du four. Ajouter le beurre de poêlon — il fera un étourdissement et moussera violemment. Tourner pour enrober, puis verser toute la pâte à la fois. Les bords doivent craquer et se mettre immédiatement au contact. Retourner au four et cuire à 220 °C pendant 20 à 25 minutes jusqu'à ce que le dessus soit doré et qu'un cure-dent inséré au centre soit propre. Le pain de maïs s'éloigne légèrement des côtés de la poêle. Laisser refroidir 5 minutes dans la poêle, puis retourner sur une planche à découper.",
      "visualCue": {
        "primaryTarget": "Un haut doré-brun bombé avec des bords rissés, légèrement plus foncés où la pâte rencontrait le fer. Le fond (revé lorsqu'il est inversé) doit être un brun lace et profond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pale, haut plat. Le pick-dent sort mouillé. Le pain de maïs sags au centre lorsque la poêle bascule.",
            "action": "Retourner au four pendant 5 minutes. Couvrir lâchement avec du papier si les bords s'assombrissent trop vite."
          },
          {
            "state": "Perfect",
            "description": "Top dominé, doré-brun avec des bords légèrement plus foncés. C'est propre. Le pain de maïs a tiré de 2 à 3 mm des côtés de la casserole. La base est un riche brun caramélisé aux bords lacés.",
            "action": "Inverser sur une planche à découper après 5 minutes. Servir au chaud avec du beurre."
          },
          {
            "state": "Overdone",
            "description": "Très sombre, rétrécissant de façon spectaculaire. Les odeurs de sucre caramélisé deviennent amères.",
            "action": "Laisser refroidir rapidement. Couche inférieure la plus foncée si nécessaire."
          }
        ]
      },
      "feelCue": "Le pain de maïs fini doit revenir fermement lorsque le centre est pressé doucement — humide mais non mouillé. Le bruit de craquelure quand vous coupez dedans avec un couteau est profondément satisfaisant."
    }
  ]
};
