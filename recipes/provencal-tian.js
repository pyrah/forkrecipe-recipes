export default {
  "repoId": "master_french_provencaltian_001",
  "parentRepoId": null,
  "slug": "provencal-tian",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Tian provençal",
  "description": "Des rondelles de courgettes, de tomates mûres et de pommes de terre cireuses disposées en spirales qui se chevauchent dans un plat de terre cuite à l'huile d'olive, puis cuites au four jusqu'à ce que chaque bord prenne de la couleur et que les légumes fondent les uns dans les autres à leur visage touchant.",
  "cuisine": "Français",
  "culture": "Provençal",
  "category": "vegetables",
  "tags": [
    "végétalien",
    "Sans gluten",
    "Faire cuire",
    "été",
    "français",
    "d ' origine",
    "courgettes",
    "tomates"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Zucchini, tranches de 5 mm",
      "ratioValue": 35,
      "defaultUnit": "parts",
      "substitutions": [
        "courge jaune",
        "aubergine"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Tomates de prune, coupées en tranches de 5 mm",
      "ratioValue": 35,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates héritières"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Starch",
      "name": "Pommes de terre, pelées, coupées en tranches de 5 mm",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "patates douces"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Thym et romarin frais, dépouillés des tiges",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "herbe de Provence"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel de mer et poivre noir",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Huile d'olive supplémentaire pour finition",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Tranche",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "sliced_vegetables",
      "instructions": "Utilisez une mandoline ou un couteau très tranchant pour couper tous les légumes à une épaisseur uniforme de 5 mm. La cohérence est ce qui rend le tian visuellement cohésif — les tranches irrégulières font cuire inégalement, laissant des taches crues à côté des bords surdosés. Poser les tranches sur une surface propre et évaluer l'uniformité.",
      "visualCue": {
        "primaryTarget": "Les tranches de légumes posées à plat",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tranches varient en épaisseur de 3 mm à 10 mm — les plus minces seront char pendant que les épaisses sont crues.",
            "action": "Recoupez les morceaux plus épais. La mandoline est ton amie ici."
          },
          {
            "state": "Perfect",
            "description": "Chaque tour est translucide à ses bords fins, cohérent en épaisseur, et tient sa forme circulaire sans fissuration ni flexion. Les rondelles de pommes de terre sont opaques; les rondelles de tomates montrent leurs chambres de semences.",
            "action": "Passez au lit d'huile et d'herbe."
          },
          {
            "state": "Overdone",
            "description": "Les tranches sont minces (moins de 3 mm) et commencent déjà à pleurer l'humidité, surtout la tomate.",
            "action": "Procédez prudemment; les tomates minces vont fondre plus vite que la pomme de terre — en deux rangées distinctes dans le plat plutôt que d'alterner."
          }
        ]
      },
      "feelCue": "Une tomate bien coupée doit tenir sa forme lorsqu'elle est levée d'un seul bord — si elle flope et déchire, elle est coupée trop fine."
    },
    {
      "nodeId": "step_2",
      "action": "Saison",
      "inputs": [
        "sliced_vegetables",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "dressed_vegetables",
      "instructions": "Enrober le fond d'un large plat de gratin en faïence avec un tiers de l'huile d'olive. Éparpiller les tranches d'ail à travers l'huile. Disposer les rondelles de légumes debout dans les rangs qui se chevauchent — pommes de terre, courgettes, tomates, répétition — en inclinant légèrement chaque tour pour qu'il s'appuie sur celui derrière. Arroser le reste de l'huile d'olive sur le dessus, disperser les herbes dans les tranches et assaisonner généreusement de sel et de poivre.",
      "visualCue": {
        "primaryTarget": "Le tian arrangé avant cuisson",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont mis à plat dans une seule couche plutôt qu'à la verticale — ils vont vapeur au lieu de rôtir.",
            "action": "Reposer les tranches sur leurs bords dans le plat, se chevauchant comme des écailles."
          },
          {
            "state": "Perfect",
            "description": "Des rangées concentriques de couleurs alternées — courgettes vertes profondes, tomate rouge vif, pomme de terre pâle — debout et se chevauchant de moitié. L'huile brille dans les crevasses. Les sprigs d'herbe pointent entre les tranches comme de petits drapeaux verts.",
            "action": "Couvrir de papier et cuire à 180 C (350 F) pendant 40 minutes."
          },
          {
            "state": "Overdone",
            "description": "Les rondelles sont si serrées qu'elles ne se chevauchent pas, mais sont comprimées, les murs parallèles — la vapeur ne peut s'échapper.",
            "action": "Utilisez la poignée d'une cuillère pour créer des petits espaces entre les rangs."
          }
        ]
      },
      "feelCue": "Courez un doigt le long des tranches disposées — il devrait y avoir résistance, comme une rangée de livres debout. Aucune tranche ne doit tomber à plat sans déclencher."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "dressed_vegetables"
      ],
      "outputState": "finished_tian",
      "instructions": "Couvrir le plat d'une feuille d'aluminium et cuire au four à 180 C (350 F) pendant 40 minutes pour faire bouillir les légumes. Retirer la feuille et relever le four à 220 C (425 F). Cuire encore 25 à 35 minutes jusqu'à ce que les sommets soient profondément dorés et que la tomate ait caramélisé à ses bords. Le plat doit être agité doucement au périmètre. Reposez-vous 10 minutes avant de servir.",
      "visualCue": {
        "primaryTarget": "Les bords supérieurs des rondelles de légumes",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les dessus exposés sont toujours les couleurs brutes des légumes crus — pas de brunissement, pas de caramélisation. Une piscine d'huile d'olive non absorbée se trouve non perturbée dans le plat.",
            "action": "Retour découvert pendant 15 minutes à 220°C."
          },
          {
            "state": "Perfect",
            "description": "Le top 5 mm de chaque rond a caramélisé en ambre et en or, avec les tomates montrant des bords sombres et confitureux et les courgettes et la pomme de terre légèrement croustillant. Le plat sent l'huile d'olive grillée, les herbes provençales et la tomate concentrée. La base du plat présente un liquide végétal doré épais.",
            "action": "Retirer du four et laisser reposer 10 minutes; le tian se met à refroidir."
          },
          {
            "state": "Overdone",
            "description": "Les rondelles supérieures sont uniformément sombres — carbonisées plutôt que caramélisées — et la tomate a séché sur un disque de papier.",
            "action": "Couvrir lâchement avec du papier pendant les dernières minutes de tout temps de cuisson restant pour protéger les dessus."
          }
        ]
      },
      "feelCue": "Appuyez sur le centre du tian avec un doigt à travers un chiffon — il devrait donner sans résistance de la pomme de terre, le légume le plus tenace dans le plat. Si la pomme de terre recule encore, il faut plus de temps sous la feuille."
    }
  ]
};
