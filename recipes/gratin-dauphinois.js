export default {
  "repoId": "master_french_gratin_dauphinois_001",
  "parentRepoId": null,
  "slug": "gratin-dauphinois",
  "author": "ForkRecipe Kitchen",
  "title": "Gratin Dauphinois",
  "description": "Des tranches de pommes de terre minces en papier, recouvertes de crème ailée et cuites au four jusqu'à ce que le dessus soit profondément doré et bouillonnant, tandis que l'intérieur devient une masse unique, unifiée et soyeuse, la chose la plus indulgente que l'on puisse faire avec une pomme de terre.",
  "cuisine": "Français",
  "culture": "Dauphiné",
  "category": "vegetables",
  "tags": [
    "Gratin",
    "français",
    "pommes de terre",
    "crème",
    "dauphinois",
    "cuits",
    "confort"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "1 hr 45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Pommes de terre mousseuses (Russet ou Maris Piper, pelés)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Or du Yukon (résultat légèrement plus humide)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Double crème (crème lourde)",
      "ratioValue": 45,
      "defaultUnit": "parts",
      "substitutions": [
        "Crème fraîche (réduit le risque fractionné)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Giroves à l'ail (1 moitié pour frotter, 2 mn)",
      "ratioValue": 3,
      "defaultUnit": "pieces",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé (pour le plat et le dot)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Noix de muscade fraîchement râpée",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Poivre blanc fraîchement moulu",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre noir"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trancher",
      "inputs": [
        "ing_01"
      ],
      "outputState": "sliced_potatoes",
      "instructions": "Peler les pommes de terre. À l'aide d'une mandoline de 2 à 3 mm, couper chaque pomme de terre en rondelles minces uniformes. Ne pas rincer la pomme de terre coupée — l'amidon de surface est ce qui provoque l'épaississement de la crème et lier le gratin au fur et à mesure qu'il fait cuire. Placer les tranches dans un bol pendant que vous travaillez. Le réglage de la mandoline n'est pas une suggestion: les tranches de 4mm seront toujours fermes au centre lorsque le dessus est doré; les tranches de 1mm se dissolvent entièrement.",
      "visualCue": {
        "primaryTarget": "Un tas de rondelles translucides, d'épaisseur uniforme, légèrement gommées au toucher de l'amidon de surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tranches sont épaisses et inégales — environ 4-5mm, un peu plus minces. Ne cuisinera pas uniformément.",
            "action": "Utilisez une mandoline constamment réglée à 2–3mm. Des tranches incohérentes créent un gratin avec des poches croquantes à l'intérieur d'une matrice douce."
          },
          {
            "state": "Perfect",
            "description": "Uniformement mince, semi-translucide. Quand vous êtes tenu à la lumière, vous pouvez presque voir à travers eux. Légèrement collant sur la surface.",
            "action": "Assaisonner les tranches et construire le gratin immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Séchés si minces, les rondelles se déchirent et se fragmentent.",
            "action": "Régler la mandoline légèrement plus épaisse. La pomme de terre fragrmentée est plus difficile à coucher proprement mais toujours parfaitement comestible."
          }
        ]
      },
      "feelCue": "Les pommes de terre coupées doivent se sentir comme des pages d'un livre lourd entre vos doigts — minces mais non fragiles, avec un léger collage de l'amidon qui les fait s'accrocher légèrement lorsqu'elles sont empilées."
    },
    {
      "nodeId": "step_2",
      "action": "Infuser",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "seasoned_cream",
      "instructions": "Dans une grande casserole, mélanger la crème, le lait, l'ail haché, le sel, le poivre et une généreuse grille de muscade. Faire mijoter à feu moyen-doux, en remuant pour dissoudre le sel. Goûtez la crème — elle devrait goûter légèrement outre-mer parce que la pomme de terre absorbera le sel de façon significative. Ne pas faire bouillir. Retirer du feu et réserver.",
      "visualCue": {
        "primaryTarget": "La crème est à la vapeur et à la mijote nue — de petites bulles apparaissant aux bords, pas un ébullition. L'ail est parfumé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème est à peine chaude. Le sel n'est pas complètement dissous. L'arôme d'ail est cru.",
            "action": "Continuez à vous réchauffer doucement. La crème doit être chaude lorsqu'elle entre dans le plat pour assurer une cuisson uniforme."
          },
          {
            "state": "Perfect",
            "description": "La vapeur, à mijoter nue, parfumée d'ail et commence à devenir translucide. La crème est bien assaisonnée.",
            "action": "Utilisez immédiatement ou maintenez-vous à une mijoteuse basse."
          },
          {
            "state": "Overdone",
            "description": "La crème est arrivée à ébullition et commence à diminuer. La graisse commence à se séparer.",
            "action": "Retirer immédiatement du feu. Bien mélanger pour réémulsionner et ajouter une touche de lait froid pour faire baisser la température."
          }
        ]
      },
      "feelCue": "Plongez un doigt propre dans la crème — il doit se sentir nettement chaud, mince mais revêtement, et intensément aromatisé. L'assaisonnement devrait rendre vos yeux légèrement élargis — il doit être assaisonné avec hardiesse pour assaisonner la pomme de terre."
    },
    {
      "nodeId": "step_3",
      "action": "Assembler",
      "inputs": [
        "sliced_potatoes",
        "seasoned_cream",
        "ing_05",
        "ing_04"
      ],
      "outputState": "assembled_gratin",
      "instructions": "Préchauffer le four à 160°C (350°F). Frotter généreusement un plat de cuisson avec la gousse d'ail à moitié, puis le beurrer généreusement. Coucher les tranches de pommes de terre uniformément à travers le fond, se chevauchant comme des écailles. Assaisonner la couche légèrement. Continuer la stratification et l'assaisonnement jusqu'à ce que toute la pomme de terre soit utilisée. Verser le mélange de crème chaude sur le dessus — il devrait venir environ deux tiers plus haut la profondeur de la pomme de terre. Dont le beurre.",
      "visualCue": {
        "primaryTarget": "Nez, recoupant des rangées de pommes de terre, uniformément submergées à la crème jusqu'à la profondeur des deux tiers, avec des points de beurre qui brillent à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pommes de terre sont empilées de façon aléatoire plutôt qu'en couches. La crème est bien en dessous ou bien au-dessus de la marque des deux tiers.",
            "action": "Même les couches assurent une cuisson uniforme. Appuyez doucement pour aplatir le dessus et distribuer la crème si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Nettoyer les couches recoupantes, la crème visible sur les côtés, le beurre uniformément distribué. Le plat semble prometteur.",
            "action": "Mettre au four immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La crème se remplit jusqu'au dessus même — débordera dans le four.",
            "action": "Retirer de la crème avec une louche. Le plat de cuisson a besoin d'espace de tête pour l'expansion bouillonnante."
          }
        ]
      },
      "feelCue": "Appuyez sur le gratin assemblé avec le plat de votre main — les couches de pommes de terre devraient se compacter légèrement et la crème devrait bien monter autour de votre main. Le plat doit se sentir substantiel et dense."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "assembled_gratin"
      ],
      "outputState": "baked_gratin",
      "instructions": "Cuire à 160°C (350°F) pendant 60 à 75 minutes. Pendant les 45 premières minutes, n'ouvrez pas le four — la pomme de terre absorbe lentement la crème et l'amidon épaissit la matrice. À 45 minutes, augmenter le feu à 190°C (375°F) et cuire encore 15 à 20 minutes jusqu'à ce que le dessus soit profondément doré et bouillonnant aux bords. Testez la finesse en insérant un couteau au centre — il devrait glisser à travers avec une résistance zéro.",
      "visualCue": {
        "primaryTarget": "Le sommet est profondément doré, presque caramélisé en patchs. La crème est visiblement bouillonnante et épaissie aux bords. La surface a une légère peau avec des taches d'or foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le dessus est en or pâle, la crème est encore liquide et mince aux bords. Le couteau rencontre la résistance au centre.",
            "action": "Continuer la cuisson. Couvrir lâchement avec du papier si le dessus est coloration trop rapide pendant que l'intérieur se termine."
          },
          {
            "state": "Perfect",
            "description": "Deep doré-brun, bouillonnant, couteau glisse dans comme le beurre. Le plat entier tremble légèrement lorsque la grille est bouchée — la crème a mis à un gel soyeux et stable.",
            "action": "Retirer du four. Reposez-vous 15 minutes avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Le dessus est très brun foncé à noir en patchs. Les bords sont séchés et rétrécis des côtés du plat. Sens de crème brûlée.",
            "action": "Couvrir immédiatement de papier et retirer du four. L'intérieur est probablement fin — retirez la couche supérieure la plus sombre avant de servir."
          }
        ]
      },
      "feelCue": "Après cuisson, rongez doucement le plat — le gratin doit trembler comme de la gélatine, et non pas se perdre comme du liquide. Ce tremblement signifie que la crème a complètement absorbé la fécule de pomme de terre et est mise dans la texture soyeuse classique."
    },
    {
      "nodeId": "step_5",
      "action": "Laisser reposer",
      "inputs": [
        "baked_gratin"
      ],
      "outputState": "gratin_dauphinois",
      "instructions": "Laisser reposer le gratin à température ambiante pendant 15 à 20 minutes avant de servir. Cette période de repos permet à la matrice de crème de se raffermir suffisamment pour trancher proprement. Servir en portions à l'aide d'une large spatule, levant du fond. Le gratin se réchauffe magnifiquement le lendemain, couvert d'une feuille de 160°C pendant 20 minutes.",
      "visualCue": {
        "primaryTarget": "Lors de la coupe, le gratin tient sa forme comme une tranche propre avec des couches visibles. La matrice de crème est réglée — pas de mise en commun liquide sur l'assiette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Couper immédiatement du four, le gratin s'effondre et la crème inonde l'assiette. La structure n'a pas été réglée.",
            "action": "Reposez-vous plus longtemps. 20 minutes minimum — la matrice à la crème a besoin de temps pour se raffermir après l'élimination de la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Nettoyer la tranche avec des couches distinctes visibles. La crème est mise à une soyeuse, pas rincée, consistance. La croûte supérieure est intacte et dorée.",
            "action": "Servir à côté de la viande rôtie, ou simplement avec une salade verte."
          },
          {
            "state": "Overdone",
            "description": "Reposé trop longtemps et complètement refroidi. La crème est très ferme et le gratin est séché aux bords.",
            "action": "Réchauffer couvert à 160°C pendant 15 minutes avec une touche de crème ajoutée autour des bords."
          }
        ]
      },
      "feelCue": "La spatule de service doit glisser proprement sous une tranche et la tranche doit se tenir ensemble sans s'effondrer, ce qui permet de vérifier si la crème s'est épaissie et s'est bien mise. L'intérieur doit se sentir doux et céder lorsqu'il est pressé, comme une crème ferme."
    }
  ]
};
