export default {
  "repoId": "master_spanish_spanishchurros_001",
  "parentRepoId": null,
  "slug": "spanish-churros",
  "author": "ForkRecipe Kitchen",
  "title": "Churros avec sauce au chocolat",
  "description": "Des bâtons à crêtes Crisp de pâte chaude frite, profondément dorée et brisée à la morsure, trempés dans un épais et sombre chocolat de style espagnol.",
  "cuisine": "Espagnol",
  "culture": "Mandrileño",
  "category": "desserts",
  "tags": [
    "dessert",
    "végétarien",
    "laitière",
    "frits",
    "Churros",
    "chocolat",
    "Espagnol"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "45 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 0,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Hydration",
      "name": "Eau",
      "ratioValue": 240,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "huile neutre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de ricin (en pâte)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre pour friture",
      "ratioValue": 700,
      "defaultUnit": "ml",
      "substitutions": [
        "huile de tournesol",
        "huile végétale"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Sucre de ricin (pour revêtement)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Cannelle au sol (pour revêtement)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Umami",
      "name": "Chocolat noir (70%), haché",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "chocolat au lait"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": [
        "Lait d'avoine"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Sweetener",
      "name": "Sucre de castre (pour sauce au chocolat)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Starch",
      "name": "Farine de maïs",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Bouillir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "churro_base_liquid",
      "instructions": "Mélanger l'eau, le beurre, le sel et le sucre dans une casserole moyenne. Porter à ébullition à feu moyen-vif, en remuant pour s'assurer que le beurre est complètement fondu. Chaque granule de sucre et de cristal de sel doit être dissous avant l'entrée de la farine — le liquide doit être à ébullition complète, et non à mijoter.",
      "visualCue": {
        "primaryTarget": "Un liquide à bouillir rapidement, complètement clair, sans cristaux de sucre visibles. Graisse complètement fondue et incorporée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Seulement mijoter aux bords. Beurre partiellement fondu. Les granules de sucre sont encore visibles.",
            "action": "Augmentez la chaleur et attendez un ébullition complet et enroulez avant d'ajouter de la farine."
          },
          {
            "state": "Perfect",
            "description": "Bouillir vif, liquide transparent sans cristaux, graisse entièrement émulsifiée. Violent bouillonnement sur toute la surface.",
            "action": "Retirer immédiatement du feu et ajouter toute la farine à la fois."
          },
          {
            "state": "Overdone",
            "description": "Le liquide a considérablement diminué — trop longtemps à l'ébullition. Le volume est nettement inférieur.",
            "action": "Ajouter une cuillère à soupe ou deux d'eau pour restaurer le volume original, puis faire bouillir à nouveau."
          }
        ]
      },
      "feelCue": "Au moment où le beurre fond complètement et que vous pouvez sentir une légère douceur, le liquide est prêt — un ébullition avec des bulles uniformes à la surface."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "churro_base_liquid",
        "ing_05"
      ],
      "outputState": "churro_dough",
      "instructions": "Retirer le liquide bouillant du feu. Ajouter toute la farine à la fois et remuer immédiatement et vigoureusement avec une cuillère en bois. La pâte se retrouvera presque instantanément dans une boule rugueuse et chaotique. Revenez à feu doux et faites cuire, en remuant et en pressant constamment, pendant 2-3 minutes jusqu'à ce que la pâte s'éloigne proprement des côtés et qu'un film sec se forme sur le fond de la poêle. La pâte doit être légèrement séchée — c'est ce qui rend les churros croustillants. Transfert dans un sac de tuyauterie muni d'une grande pointe étoile (1,5-2cm).",
      "visualCue": {
        "primaryTarget": "Une boule de pâte lisse, rigide et non collante qui tire proprement de la poêle et tient sa forme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est encore chaotique et colle à la poêle et à la cuillère. Patchs humides visibles. Il ne s'est pas pleinement réuni.",
            "action": "Continuer la cuisson et remuer à feu doux. La pâte a besoin de plus d'humidité."
          },
          {
            "state": "Perfect",
            "description": "Balle lisse et raide qui tire proprement loin des murs de la poêle. Un film mince et sec enveloppe le fond de la poêle. La toux ne colle pas à la cuillère lorsqu'elle est pressée. A un faible arôme de farine cuite.",
            "action": "Pipe immédiatement dans l'huile chaude. La toux doit se réchauffer, elle se détend en refroidissant."
          },
          {
            "state": "Overdone",
            "description": "La toux est grisée, très raide, et commence à sentir la farine trop cuite.",
            "action": "Tuyau immédiatement — il fonctionnera encore mais les churros peuvent être plus denses."
          }
        ]
      },
      "feelCue": "La pâte finie doit se sentir ferme et chaude Play-Doh — assez raide pour tenir une étoile quand piped, assez lisse pour couler à travers l'extrémité sans déchirer."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "churro_dough",
        "ing_06"
      ],
      "outputState": "fried_churros",
      "instructions": "Chauffer l'huile de friture à 180°C (355°F) dans une poêle profonde. Pipe 15-20cm longueurs de pâte directement dans l'huile chaude, à l'aide de ciseaux pour couper chaque churro libre du sac de tuyauterie. Faire frire en lots de 4-5 sans fouler pendant 3-4 minutes, en tournant une fois, jusqu'à ce que profondément doré de tous les côtés. Les crêtes de la pointe de l'étoile devraient être les points les plus sombres. Retirer avec une cuillère à fentes et égoutter brièvement sur les serviettes en papier.",
      "visualCue": {
        "primaryTarget": "Des churros profonds, même brun doré, avec des crêtes clairement définies. Pas de taches pâles ou de côtés bruts.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle avec de l'extérieur doux et productif. Doughy et pâle à l'extrémité de la crête. L'huile n'est pas assez chaude — les churros seront gras.",
            "action": "Augmenter la température de l'huile. Retirez et testez-en un : il doit être croustillant et creux en tapotant."
          },
          {
            "state": "Perfect",
            "description": "Deep, même brun doré partout. Les crêtes sont sombres et croquantes. Le churro est léger et rigide. Fait un léger bruit de craquelage quand il est déplacé. L'intérieur est doux et aéré.",
            "action": "Égoutter et jeter immédiatement dans le sucre de cannelle tout en restant chaud."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé à brûler, surtout aux crêtes. Un arôme amer. Extérieur très dur.",
            "action": "Réduire la température de l'huile de 10°C. Les arêtes des étoiles brûlent plus vite que le corps — surveillez de près."
          }
        ]
      },
      "feelCue": "Un churro parfait devrait se sentir rigide et croustillant lorsque vous appuyez légèrement sur les crêtes — ne pas donner du tout comme de la pâte. Il se déchire légèrement lorsqu'il est secoué."
    },
    {
      "nodeId": "step_4",
      "action": "Saison",
      "inputs": [
        "fried_churros",
        "ing_07",
        "ing_08"
      ],
      "outputState": "sugared_churros",
      "instructions": "Mélanger le sucre de roulette et la cannelle moulue dans un bol peu profond ou sur une assiette. Mettre les churros chauds dans le sucre de cannelle immédiatement après avoir drainé — tout en étant encore chaud, de sorte que le sucre adhère à la surface. Roulez chaque churro pour enrober tous les côtés.",
      "visualCue": {
        "primaryTarget": "Des churros enduits de cannelle-sucre avec une croûte de russet tachetée sur le dessus de l'extérieur doré frit.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sucre n'a pas adhéré — il tombe en gouffres parce que les churros ont trop refroidi.",
            "action": "Rejeter et presser le sucre dans la surface. Pour les churros froids, brosser légèrement avec le beurre fondu avant de rouler dans le sucre."
          },
          {
            "state": "Perfect",
            "description": "Même un revêtement tacheté de sucre de cannelle sur chaque surface du churro chaud. Le sucre s'est légèrement dissous dans la graisse de surface chaude.",
            "action": "Servir immédiatement à côté de la sauce au chocolat chaud."
          },
          {
            "state": "Overdone",
            "description": "Trop de sucre appliqué, créant une croûte très épaisse qui tombe en feuilles.",
            "action": "Éliminez l'excès. Seul un revêtement mince et uniforme est nécessaire."
          }
        ]
      },
      "feelCue": "Le churro doit se sentir chaud et légèrement gras du revêtement de sucre — le sucre a légèrement fondu dans la surface, mais pas complètement dissous."
    },
    {
      "nodeId": "step_5",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "thick_chocolate_sauce",
      "instructions": "fouetter la fécule de maïs dans 3 cuillères à soupe de lait froid jusqu'à ce qu'elle soit lisse. Chauffer le reste du lait avec le sucre dans une petite casserole à feu moyen. Ajouter le chocolat noir haché et fouetter constamment jusqu'à ce que fondu et lisse. Ajouter la fécule de maïs et continuer à fouetter à feu moyen jusqu'à ce que la sauce s'épaississe à la consistance d'une crème versable — environ 3-4 minutes. La sauce doit être assez épaisse pour enrober une cuillère fortement et ne pas s'écouler immédiatement lorsque la cuillère est inclinée.",
      "visualCue": {
        "primaryTarget": "Une sauce au chocolat épais, brillant et profondément sombre qui enveloppe l'arrière d'une cuillère et tombe dans des gouttes lentes et lourdes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mince et laiteuse, tombe de la cuillère immédiatement dans un ruisseau. L'épaississement de la fécule de maïs n'est pas suffisant.",
            "action": "Continuer à fouetter à feu moyen. La sauce s'épaissit rapidement près du point d'ébullition."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, brillant, brun foncé. Il tombe d'une cuillère dans des draps lents et lourds. Enrober l'arrière de la cuillère et un doigt balayé à travers laisse une ligne propre. La vapeur et parfumée.",
            "action": "Verser dans une tasse chaude pour le dunking. Garder au chaud à feu très doux."
          },
          {
            "state": "Overdone",
            "description": "La sauce est devenue raide et tire de la poêle dans une masse solide. Trop d'amidon.",
            "action": "Retirer du feu, ajouter 2-3 c. à soupe de lait chaud et fouetter vigoureusement à mince."
          }
        ]
      },
      "feelCue": "La sauce au chocolat doit verser comme de la crème épaisse — pas tout à fait fluide librement, mais pas besoin d'être cuillé. Il laisse un sentier visible à la surface lorsqu'il est bruissé."
    }
  ]
};
