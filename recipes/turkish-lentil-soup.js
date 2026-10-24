export default {
  "repoId": "master_turkish_turkish_lentil_soup_001",
  "parentRepoId": null,
  "slug": "turkish-lentil-soup",
  "author": "ForkRecipe Kitchen",
  "title": "Soupe de lentilles rouges turques",
  "description": "Une soupe veloutée, rouge brique, construite sur des lentilles rouges qui se dissolvent complètement dans le bouillon, leur terre, levée par une floraison de paprika fumé et de menthe séchée frite dans le beurre versé sur la surface au dernier moment — un rituel nocturne dans les maisons turques pendant des siècles.",
  "cuisine": "Turquie",
  "culture": "Turquie",
  "category": "vegetables",
  "tags": [
    "lentilles",
    "Soupe",
    "turc",
    "rouge-lentil",
    "paprika",
    "végétalien"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Lentilles rouges, rincées",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "pois jaunes fendus (cuisson plus longue)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon jaune, coupé en dés",
      "ratioValue": 1,
      "defaultUnit": "large",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles d'ail brisées",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Starch",
      "name": "Pommes de terre, pelées et coupées en dés",
      "ratioValue": 1,
      "defaultUnit": "medium",
      "substitutions": [
        "Carotte (sweeter)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Paprika fumé doux",
      "ratioValue": 1.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "Paprika hongrois doux"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Flacons de chili rouges séchés",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "Poivre d'Alep",
        "flocons de chili réguliers"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "menthe séchée",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Beurre (pour la finition)",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "huile d'olive pour végétalien"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Liquid",
      "name": "Matières végétales ou eau",
      "ratioValue": 1200,
      "defaultUnit": "ml",
      "substitutions": [
        "de poulet (non végétalisé)"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Acid",
      "name": "Jus de citron, fraîchement pressé",
      "ratioValue": 1,
      "defaultUnit": "lemon",
      "substitutions": [
        "sumac (plus complexe)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire revenir",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_09"
      ],
      "outputState": "softened_aromatics",
      "instructions": "Chauffer l'huile d'olive dans un grand pot lourd à feu moyen. Ajouter l'oignon en dés et l'ail cassé. Cuire en remuant occasionnellement pendant 10 à 12 minutes jusqu'à ce que l'oignon soit complètement doux et translucide — il ne doit pas brunir. Ajouter le cumin et la moitié du paprika (réserver le reste pour la finale), remuer pendant 60 secondes jusqu'à parfumer.",
      "visualCue": {
        "primaryTarget": "L'oignon translucide, doux — pas de couleur dorée, pas de brunissement. La fleur d'épices est rouge rouille et parfumée, en tachant l'huile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore opaque et blanc avec une forte odeur brute. Il craque quand il est pressé.",
            "action": "Continuer la cuisson à feu moyen : cette soupe est faite d'oignons sucrés, entièrement cuits, non crus ni caramélisés."
          },
          {
            "state": "Perfect",
            "description": "Complètement mou et translucide, presque fondant dans l'huile. Douce odeur d'oignon, pas de puanteur. Paprika est fleuri en rouge rouille profonde.",
            "action": "Ajouter la pomme de terre et les lentilles."
          },
          {
            "state": "Overdone",
            "description": "L'oignon brunit aux bords et commence à caraméliser. Une odeur douce mais distinctement maillard.",
            "action": "Ajoutez une éclaboussure d'eau pour arrêter le brunissement et procéder — la soupe sera légèrement plus douce mais toujours excellente."
          }
        ]
      },
      "feelCue": "L'oignon doit se sentir complètement lâche lorsqu'il est pressé à l'aide d'une cuillère en bois: il n'y a pas de résistance, il n'y a que de la chair molle qui donne."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "softened_aromatics",
        "ing_01",
        "ing_04",
        "ing_11",
        "ing_12"
      ],
      "outputState": "cooked_lentil_soup",
      "instructions": "Ajouter la pomme de terre en dés et les lentilles rincées dans la casserole. Verser dans le stock. Porter à ébullition, puis laisser mijoter régulièrement. Cuire à découvert pendant 25 à 30 minutes, en remuant occasionnellement, jusqu'à ce que les lentilles soient complètement dissoutes et que la pomme de terre soit très molle. La soupe doit avoir l'air épaisse et légèrement porridge.",
      "visualCue": {
        "primaryTarget": "Une soupe épaisse et uniforme à l'orange pâle sans grains de lentilles visibles. La surface bouillonne doucement. Une cuillère traînée à travers laisse un sentier clair qui se remplit lentement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des grains individuels de lentilles sont encore visibles. La soupe est fine et aqueuse. Les morceaux de pommes de terre sont fermes.",
            "action": "Continuer à mijoter — les lentilles rouges doivent se dissoudre complètement pour la texture caractéristique de cette soupe."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisses et épaisses, les lentilles se dissolvent complètement dans le bouillon. La pomme de terre est invisible, car elle est également décomposée. La couleur est un saumon-orange profond. Il tient une trace de cuillère.",
            "action": "Retirer du feu et mélanger."
          },
          {
            "state": "Overdone",
            "description": "La soupe est si épaisse qu'elle colle au fond et brûle. Une odeur brûlée se lève.",
            "action": "Ajouter 200 ml de plus, remuer vigoureusement et réduire la chaleur. Retirer toute couche brûlée du bas."
          }
        ]
      },
      "feelCue": "Frottez une goutte de soupe entre deux doigts — elle doit être soyeuse et légèrement fébrile, comme un petit porridge, sans particules de lentilles."
    },
    {
      "nodeId": "step_3",
      "action": "Mixer",
      "inputs": [
        "cooked_lentil_soup"
      ],
      "outputState": "blended_soup",
      "instructions": "Utilisez un mélangeur d'immersion directement dans le pot, ou transférez en lots dans un mélangeur debout, et blitz jusqu'à ce que complètement lisse et velouté. Retourner à faible chaleur et ajuster la consistance avec l'eau ou le stock si trop épais. Assaisonner de sel et de jus d'un citron. La soupe doit être versable mais enrobée.",
      "visualCue": {
        "primaryTarget": "Une soupe orangée-saumon uniformément lisse et mate. Pas de bosses, pas de variation de texture. Il s'écoule dans un flux propre et stable d'une louche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours granuleux avec des fragments de lentilles. La texture est inégale et la couleur est à deux tons.",
            "action": "Mélanger plus longtemps, ou utiliser un mélangeur debout pour un résultat vraiment lisse."
          },
          {
            "state": "Perfect",
            "description": "Entièrement lisse, velouté, uniforme brique-orange. Enveloppe l'arrière d'une cuillère. Goûte terreux, légèrement citronné, bien salé.",
            "action": "Gardez-vous au chaud à feu doux pendant que vous faites la finition beurre."
          },
          {
            "state": "Overdone",
            "description": "Mélangeé si longtemps, la soupe est devenue aérée et mousseuse, perdant son corps.",
            "action": "Mélanger doucement et laisser reposer avant de servir. La mousse va tomber."
          }
        ]
      },
      "feelCue": "La soupe mélangée doit se sentir complètement uniforme sur la langue, soyeuse, sans grain, comme du velours chaud."
    },
    {
      "nodeId": "step_4",
      "action": "Faire infuser",
      "inputs": [
        "ing_10",
        "ing_05",
        "ing_07",
        "ing_08"
      ],
      "outputState": "paprika_butter",
      "instructions": "Dans une petite casserole ou plus chaude au beurre, faire fondre le beurre à feu moyen-vif jusqu'à ce qu'il commence à mousser. Ajouter le reste du paprika, les flocons de chili et la menthe séchée. Tourne la poêle. Les épices s'échaufferont et fleuriront dans le beurre chaud pendant 20 à 30 secondes — retirer de la chaleur à l'instant où le beurre devient rouge rubis et parfumé. Ne le laissez pas brûler.",
      "visualCue": {
        "primaryTarget": "Le beurre est devenu un rouge rubis vif et translucide du paprika. Les épices sont vertigineuses et parfumées. Le beurre bouillonne autour des épices.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est encore jaune pâle et les épices semblent crues et non cuites. Pas de changement de couleur.",
            "action": "Maintenez la chaleur — le beurre doit être activement moussant avant que les épices entrent."
          },
          {
            "state": "Perfect",
            "description": "Rouge rubis profond, visiblement parfumé, avec de minuscules bulles. Des odeurs de chili grillé, de paprika et d'herbes séchées. Le beurre a pris une couleur rouge brique brillant.",
            "action": "Verser immédiatement sur les bols à soupe."
          },
          {
            "state": "Overdone",
            "description": "Le beurre est brun foncé et les épices sentent acride et brûlé.",
            "action": "Jeter et recommencer — le beurre de paprika brûlé rendra le plat entier amer. Ça ne prend que 30 secondes de plus."
          }
        ]
      },
      "feelCue": "Le moment où vous entendez les épices s'échauffer fort dans le beurre — un sifflement rapide et agressif — compte jusqu'à 10 et retire de la chaleur."
    },
    {
      "nodeId": "step_5",
      "action": "Assembler",
      "inputs": [
        "blended_soup",
        "paprika_butter",
        "ing_13"
      ],
      "outputState": "finished_turkish_lentil_soup",
      "instructions": "Déposer la soupe chaude dans des bols chauds. Arrosez le beurre de paprika rouge rubis sur la surface d'une spirale fine – il sera mis en commun sur le dessus d'un anneau cramoisi vif. Servir avec un coin de citron sur le côté et inviter le diner à le presser en eux-mêmes.",
      "visualCue": {
        "primaryTarget": "Un bol doux saumon-orange de soupe avec une spirale vive de beurre rouge rubis flottait à la surface. Le beurre n'a pas coulé mais est assis dans un anneau brillant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre a été ajouté trop tôt et a été agité, disparaissant dans la soupe. Pas de contraste visuel.",
            "action": "Arrosez un peu d'huile d'olive sur le dessus pour restaurer l'apparence en couches."
          },
          {
            "state": "Perfect",
            "description": "L'anneau de beurre pourpre flotte à la surface, entouré de la soupe orange mate. Des odeurs de chili grillé et de menthe. Vivant, invitant le contraste.",
            "action": "Servir immédiatement avec du pain croustillant."
          },
          {
            "state": "Overdone",
            "description": "Le beurre a été versé dans une grande piscine plutôt qu'une spirale et couvre la plus grande partie de la surface. Trop gras au premier goût.",
            "action": "Mélanger doucement une fois pour incorporer une partie du beurre, laissant un anneau au bord."
          }
        ]
      },
      "feelCue": "La soupe devrait arriver à la table à la vapeur — il faut la manger chaude, parce qu'elle refroidit et perd la qualité soyeuse et fluide qui la rend luxueuse."
    }
  ]
};
