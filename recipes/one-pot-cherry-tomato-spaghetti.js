export default {
  "repoId": "master_italian_onepotcherrytomatospaghetti_001",
  "parentRepoId": null,
  "slug": "one-pot-cherry-tomato-spaghetti",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Tomates de cerise et de basilic",
  "description": "Les spaghettis secs, les tomates cerises coupées en deux, l'ail tranché et l'oignon commencent tous ensemble dans une grande casserole d'eau froide, et quand les pâtes font cuire son amidon et les tomates en éclat réduisent dans une sauce douce et brillante qui s'accroche à chaque brin.",
  "cuisine": "Italien",
  "culture": "Cuisine maison italo-américaine",
  "category": "grains",
  "tags": [
    "cuisine maison",
    "nuit",
    "pâtes",
    "végétarien",
    "un seul pot",
    "tomates",
    "basilic",
    "Spaghetti"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "25 min",
  "ratioSystem": "weight",
  "servings": 4,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 2,
    "bitter": 0,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Spaghettis secs",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "linguine"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Base",
      "name": "Tomates de cerise ou de raisin, coupées en deux",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon jaune, coupé en deux et tranché finement",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "2 échalotes"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Ail, tranché finement",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Heat",
      "name": "Flacons de poivre rouge",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Feuilles de basilic fraîches, à moitié laissées entières, à moitié déchirées pour finir",
      "ratioValue": 20,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive extra vierge, plus plus à finir",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 2,
      "defaultUnit": "tsp",
      "substitutions": [
        "1 1/4 c. à thé sel de mer fin"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Hydration",
      "name": "Eau froide",
      "ratioValue": 1100,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Dairy",
      "name": "Parmesan, râpé finement",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "pécorino romano",
        "omit pour végétalien"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Assemblage",
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
      "outputState": "raw_one_pot",
      "instructions": "Utilisez une poêle rectiligne de 30 cm ou un brasseur large de 12 pouces. Placer les spaghettis secs dans la poêle, puis disperser sur les tomates, l'oignon, l'ail, les flocons de poivre rouge et la moitié du basilic (feuilles entières). Ajouter l'huile d'olive, le sel et l'eau froide — les pâtes doivent juste être submergées.",
      "visualCue": {
        "primaryTarget": "Spaghetti couché plat et entièrement submergé, légumes éparpillés uniformément sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pâtes se terminent par se glisser au-dessus de l'eau ou par se pencher sur les côtés d'un pot trop petit.",
            "action": "Passez à une casserole plus large, ou claquez les spaghettis en deux afin qu'il soit plat."
          },
          {
            "state": "Perfect",
            "description": "Pâtes juste sous la ligne de flottaison, tomates et oignons distribués sur toute la surface.",
            "action": "Tournez la chaleur à haute."
          },
          {
            "state": "Overdone",
            "description": "Arroser plusieurs centimètres au-dessus des pâtes parce que la poêle est profonde et étroite.",
            "action": "S'attendre à une réduction plus longue à la fin; être prêt à bouillir dur à découvert pendant quelques minutes supplémentaires."
          }
        ]
      },
      "feelCue": "Les brins secs devraient se sentir raides et lâches sous votre main pendant que vous les étendez dans un radeau uniforme."
    },
    {
      "nodeId": "step_2",
      "action": "Faire bouillir et remuer",
      "inputs": [
        "raw_one_pot"
      ],
      "outputState": "sauced_spaghetti",
      "instructions": "Porter à ébullition à feu vif. Dès que les pâtes s'adoucissent (environ 2 minutes), commencez à les tourner avec des pinces toutes les 30 à 60 secondes afin qu'elles ne s'agrippent pas. Conserver à ébullition vigoureuse, à découvert, pendant 9 à 11 minutes, jusqu'à ce que les pâtes soient al dente et que l'eau ait réduit à quelques cuillères à soupe de sauce rouge orange brillant. Appuyez sur une partie des tomates contre le côté de la poêle en adoucissant.",
      "visualCue": {
        "primaryTarget": "Al dente spaghetti lié dans une sauce tomate fine, brillante, féculente, avec la plupart de l'eau disparue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Soupy, liquide nuageux qui recouvre encore le fond et les pâtes fermes au centre.",
            "action": "Continuer à bouillir et tourner; le liquide se serrera rapidement au cours des 2 dernières minutes."
          },
          {
            "state": "Perfect",
            "description": "Une fine sauce enrobe la poêle et chaque brin; les pâtes se plient avec un petit point blanc de résistance au cœur.",
            "action": "Enlevez la chaleur et terminez."
          },
          {
            "state": "Overdone",
            "description": "Pan sèche et pâtes collant ou attraper sur le fond.",
            "action": "Ajouter 60 à 120 ml d'eau chaude et remuer jusqu'à ce qu'il soit encore chaud; baisser la chaleur."
          }
        ]
      },
      "feelCue": "Agiter un brin à 9 minutes — vous voulez une légère mâche au centre, et la sauce doit se sentir soyeuse, pas aqueuse, sur vos lèvres."
    },
    {
      "nodeId": "step_3",
      "action": "Finition",
      "inputs": [
        "sauced_spaghetti",
        "ing_06",
        "ing_07",
        "ing_10",
        "ing_11"
      ],
      "outputState": "finished_tomato_spaghetti",
      "instructions": "Hors du feu, ajoutez le parmesan, une bruine d'huile d'olive et quelques moulures de poivre noir, et jetez vigoureusement pendant 30 secondes afin que le fromage émulsifie dans la sauce. Laisser reposer 2 minutes. Pliez dans le reste du basilic déchiré, goûtez au sel et servez avec du fromage supplémentaire.",
      "visualCue": {
        "primaryTarget": "Des brins crémeux-brillants avec des tomates éclatantes qui s'accrochent à eux et un basilic brillant déchiré sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Fromage dans des taillis et une piscine aqueuse sous les pâtes.",
            "action": "Jetez plus fort et laissez-le reposer une autre minute pour absorber."
          },
          {
            "state": "Perfect",
            "description": "La sauce s'accroche dans une légère couche émulsifiée; pas de pooling; tomates confiture.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Pasta serrée et collante après s'être assise trop longtemps.",
            "action": "Loosen avec un jet d'eau chaude et d'huile d'olive."
          }
        ]
      },
      "feelCue": "Soulevez une fourchette — la sauce doit s'accrocher et glisser lentement dans les brins plutôt que de s'égoutter."
    }
  ]
};
