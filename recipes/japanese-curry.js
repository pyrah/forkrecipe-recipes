export default {
  "repoId": "master_japanese_japanese_curry_001",
  "parentRepoId": null,
  "slug": "japanese-curry",
  "author": "ForkRecipe Kitchen",
  "title": "Curry japonais",
  "description": "Le plat le plus réconfortant de la cuisine japonaise : le poulet doré et la patate douce disparaissent dans une sauce brillante et profondément épicée qui chevauche la ligne entre le curry et la sauce – le réchauffement, légèrement sucré, et construit pour des bols de riz à grains courts le soir froid.",
  "cuisine": "Japonais",
  "culture": "Yōshoku japonais",
  "category": "proteins",
  "tags": [
    "Japonais",
    "curry",
    "la nourriture confortable",
    "légère"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 2178,
  "forks": 223,
  "contributors": 26,
  "license": "CC-BY-SA",
  "createdAt": "2024-10-05",
  "updatedAt": "2025-06-18",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "cuisse de poulet, désossée ou désossée (découpée en gros morceaux)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "mandrin de boeuf",
        "épaule de porc",
        "tofu ferme (vegan)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon (grand, coupé en dés)",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "Échalotes"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Pommes de terre ou patates douces (gros morceaux)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "squash kabocha",
        "Carotte + pomme de terre"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Carotte (gros morceaux)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "panais"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Blocs roux de curry japonais (S&B Golden Curry ou similaires)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "roux maison: 2 c. à soupe de beurre + 2 c. à soupe de farine + 2 c. à thé de poudre de curry"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Eau ou bouillon de poulet",
      "ratioValue": 120,
      "defaultUnit": "parts",
      "substitutions": [
        "Dashi"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre (richir)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sear",
      "inputs": [
        "ing_01",
        "ing_07"
      ],
      "outputState": "seared_chicken",
      "instructions": "Chauffer l'huile dans une grande casserole ou un four hollandais à feu moyen-vif. Séchez le poulet avec des serviettes en papier et assaisonner généreusement de sel et de poivre. Semer en une seule couche, côté peau vers le bas si osseux, pendant 3-4 minutes sans bouger jusqu'à ce que doré-brun. Plongez et entrez l'autre côté pendant 2 minutes. Retirer et mettre de côté — le poulet ne sera pas cuit jusqu'à présent. Le fond laissé dans le pot est l'or saveur.",
      "visualCue": {
        "primaryTarget": "Les morceaux de poulet sont dorés-bruns sur les deux côtés avec quelques bords carbonisés. Le fond du pot a une couche de couleur marron.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poulet est blanc-jaune pâle. Il n'y a pas eu de brunissement. Le fonds est minimal ou absent.",
            "action": "Augmentez la chaleur et attendez. La couche contribue à la profondeur de saveur de tout le curry, pas seulement le poulet."
          },
          {
            "state": "Perfect",
            "description": "Deep doré-brun sur les faces voûtées, avec fond aromatique enrobant le fond du pot. Ça sent le poulet rôti.",
            "action": "Retirer le poulet et passer aux oignons immédiatement avant que le fond brûle."
          },
          {
            "state": "Overdone",
            "description": "La peau de poulet est très sombre et le fond est devenu noir et sent amer.",
            "action": "Déglacer immédiatement avec un jet d'eau, grattant ce que vous pouvez. Jeter tous les morceaux noirs entièrement brûlés de fond."
          }
        ]
      },
      "feelCue": "Le poulet devrait se libérer proprement de la poêle lorsqu'il est prêt à se retourner — s'il résiste et déchire, la couture n'est pas complète et laissera la croûte derrière."
    },
    {
      "nodeId": "step_2",
      "action": "Caramélisation",
      "inputs": [
        "ing_02"
      ],
      "outputState": "caramelized_onion",
      "instructions": "Réduire le feu à moyen. Ajouter les oignons dans la même casserole avec du poulet. Cuire, en remuant régulièrement, pendant 12-15 minutes jusqu'à ce que les oignons soient profondément dorés et aient diminué considérablement en volume. Cette caramélisation prolongée de l'oignon est le secret d'une base riche et douce de curry japonais. Ne précipitez pas cette étape — les oignons pâles et sous - dorés produisent une saveur vive et crue qui ne se calme pas dans la sauce.",
      "visualCue": {
        "primaryTarget": "Les oignons ont réduit à environ un tiers leur volume initial. La couleur est brun-or profond, presque ambre. Il ne reste pas de morceaux blancs ou pâles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont encore pâles et n'ont que légèrement ramolli. Le volume est presque inchangé par rapport au brut. Le goût est vif et cru.",
            "action": "Continuez à cuisiner. Baissez la chaleur pour éviter de brûler et remuer plus fréquemment. La patience ici est remboursée dans le plat final."
          },
          {
            "state": "Perfect",
            "description": "Profondément ambrée, jammy, sucrée. Les oignons collent légèrement à la casserole. Quand vous faites glisser une cuillère à travers eux, ils reviennent lentement.",
            "action": "Ajouter la pomme de terre et la carotte, mélanger pour enrober l'oignon et procéder."
          },
          {
            "state": "Overdone",
            "description": "Les oignons sont brun foncé à noir et sentent amer. Ils se sont fermement collés au pot.",
            "action": "Déglacer avec un petit jet d'eau, racler le fond. Les notes légèrement amères peuvent ajouter de la complexité ou peut être trop dépendant de la noirceur."
          }
        ]
      },
      "feelCue": "La cuisine doit sentir de l'oignon doux et grillé — que l'arôme caramel-savori signale la réaction Maillard a couru son cours et les sucres sont pleinement développés."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "caramelized_onion",
        "ing_03",
        "ing_04",
        "ing_06",
        "seared_chicken"
      ],
      "outputState": "cooked_stew",
      "instructions": "Ajouter la pomme de terre et la carotte dans le pot. Incorporer pour enrober l'oignon caramélisé. Retourne le poulet. Verser dans l'eau ou le stock, assez pour couvrir. Porter à ébullition, puis laisser mijoter. Écraser toute mousse qui monte. Laisser mijoter à découvert pendant 20-25 minutes jusqu'à ce que les pommes de terre et les carottes soient complètement tendres lorsqu'elles sont percées d'une brochette et que le poulet soit cuit. Si vous utilisez du poulet désossé, la viande doit commencer à s'éloigner de l'os.",
      "visualCue": {
        "primaryTarget": "Les légumes sont complètement tendres. Pistolets sans résistance. Le bouillon est légèrement doré et a diminué d'environ un quart du niveau d'ébullition.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La brochette rencontre la résistance au centre de la pomme de terre. Le papillon est encore très mince et pâle. Le poulet peut encore être rose à l'intérieur.",
            "action": "Continuer à mijoter pendant 5 à 10 minutes de plus et procéder à un nouveau test. L'amidon de pomme de terre a besoin d'une gélatinisation complète avant d'ajouter du roux."
          },
          {
            "state": "Perfect",
            "description": "Tout est tendre. Broth a un corps léger de la fécule de pomme de terre qui s'y lixivie. Le poulet est cuit.",
            "action": "Retirer du feu avant d'ajouter le curry roux."
          },
          {
            "state": "Overdone",
            "description": "Les pommes de terre commencent à s'effondrer et à se dissoudre dans le bouillon. Le poulet se dessèche.",
            "action": "Ajouter le roux immédiatement. La pomme de terre dissoute va en fait épaissir la sauce plus, ce que vous devez rendre compte."
          }
        ]
      },
      "feelCue": "Plongez une cuillère dans le bouillon et sentez - la entre vos doigts lorsqu'elle est fraîche; elle doit se sentir légèrement glissante à partir de l'amidon dissous, non aqueuse comme de l'eau pure."
    },
    {
      "nodeId": "step_4",
      "action": "Finition",
      "inputs": [
        "cooked_stew",
        "ing_05"
      ],
      "outputState": "finished_japanese_curry",
      "instructions": "Briser les blocs de curry roux dans le pot, les distribuer uniformément. Incorporer doucement à feu doux jusqu'à ce que les blocs soient complètement dissous — environ 3-5 minutes. Retourner à une mijotée très douce, en remuant fréquemment, pendant 5 minutes de plus lorsque l'amidon dans le roux épaissit la sauce. Le curry doit être brillant et enrober une cuillère épaissement. Goûtez et ajustez avec un peu de sauce de soja extra pour saler, ou de pomme râpée pour la douceur. Servir sur du riz blanc à grains courts avec des cornichons de fukujinzuke et de la sauce tonkatsu sur le côté.",
      "visualCue": {
        "primaryTarget": "Le curry est épais, brillant et uniforme en couleur — un brun-ambre profond sans traces visibles de roux. Il tombe d'une louche dans un ruisseau épais et lent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse. Des morceaux de roux non dissous sont encore visibles. Le curry sent cru et épicé plutôt que cuit et arrondi.",
            "action": "Continuez à remuer à feu doux. Les grumeaux Roux ont besoin de chaleur et de brassage pour se dissoudre complètement."
          },
          {
            "state": "Perfect",
            "description": "Épais, brillant, uniformément brun-ambre. La sauce couvre le dos d'une cuillère et la ligne que vous dessinez avec votre doigt à travers elle reste propre. Des odeurs d'épices, de douceur et de viande.",
            "action": "Servir immédiatement sur le riz, ou reposer pendant 5 minutes — la saveur s'améliore comme elle est assise."
          },
          {
            "state": "Overdone",
            "description": "Le curry est très épais et commence à coller au fond du pot. Lorsqu'il est agité, il se déplace comme une seule masse plutôt qu'une sauce fluide.",
            "action": "Ajouter l'eau chaude ou le bouillon, 2 cuillères à soupe à la fois, et remuer pour obtenir la consistance correcte."
          }
        ]
      },
      "feelCue": "Le curry japonais devrait avoir une texture peu collante et presque veloutée sur votre langue, plus épaisse qu'un bouillon, plus mince qu'une sauce, avec une chaleur persistante qui se construit lentement plutôt que de frapper immédiatement."
    }
  ]
};
