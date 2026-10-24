export default {
  "repoId": "master_hungarian_beef_goulash_001",
  "parentRepoId": null,
  "slug": "beef-goulash",
  "author": "ForkRecipe Kitchen",
  "title": "Goulash de boeuf hongrois",
  "description": "Rouge Paprika et profondément parfumé, ce ragoût construit son âme dans la graisse qui fleurit l'épice - le boeuf donne heure par heure dans quelque chose qui enveloppe une cuillère en bois et la tache en permanence orange.",
  "cuisine": "Hongrois",
  "culture": "Hongrois",
  "category": "proteins",
  "tags": [
    "Hongrois",
    "boeuf",
    "paprika",
    "ragoût",
    "coeurux"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "2 hrs",
  "ratioSystem": "parts",
  "stars": 1840,
  "forks": 214,
  "contributors": 27,
  "license": "CC-BY-SA",
  "createdAt": "2024-03-15",
  "updatedAt": "2025-08-20",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Bouchée de boeuf, coupée en cubes de 4 cm",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Jarret de bœuf",
        "épaule de porc"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignons jaunes en dés",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon blanc"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Paprika hongrois doux",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika mi-doux, mi-fumé"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Lard ou huile neutre",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "gras de canard",
        "huile végétale"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Viande bovine ou eau",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "bouillon de poulet"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel et graines de carvi",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gousses d'ail hachées",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "poudre d'ail"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire revenir",
      "inputs": [
        "ing_02",
        "ing_04"
      ],
      "outputState": "softened_onions",
      "instructions": "Faire fondre le saindoux dans une casserole ou un four hollandais à feu moyen. Ajouter les dés d'oignons avec une pincée de sel. Cuire lentement, en remuant souvent, pendant 15 à 20 minutes jusqu'à ce que les oignons soient profondément dorés et confitureux. Ne précipitez pas cette étape: la douceur de l'oignon est l'épine dorsale de tout le plat.",
      "visualCue": {
        "primaryTarget": "Les oignons sont effondrés, dorés-ambres avec des bords doux et brillants. Le volume a diminué d'au moins la moitié.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont encore jaune pâle et tiennent leur forme. L'arôme d'oignon brut et vif domine.",
            "action": "Continuer la cuisson à feu moyen-doux. Ajouter du paprika va maintenant produire une saveur crue et dure."
          },
          {
            "state": "Perfect",
            "description": "Les oignons sont d'or profond, presque confiture, et sentent doux et salé. Ils se déplacent comme une masse lorsqu'ils sont agités.",
            "action": "Retirer du feu et fleurir le paprika."
          },
          {
            "state": "Overdone",
            "description": "Les oignons sont brun foncé et le fond du pot a des résidus foncés. Un bord amer à l'odeur.",
            "action": "Déglacer avec un jet d'eau et gratter le fond. La légère amertume sera absorbée par la longue braise."
          }
        ]
      },
      "feelCue": "Les oignons devraient se sentir soyeux et n'offrir aucune résistance lorsqu'ils sont pressés contre la paroi de la casserole avec votre cuillère — ils devraient s'effondrer dans une pâte instantanément."
    },
    {
      "nodeId": "step_2",
      "action": "Faire infuser",
      "inputs": [
        "softened_onions",
        "ing_03",
        "ing_07"
      ],
      "outputState": "paprika_base",
      "instructions": "Retirer complètement la casserole de la chaleur — c'est essentiel. Incorporer le paprika et l'ail. La chaleur résiduelle fera cuire l'épice assez pour ouvrir ses composés de couleur soluble dans les graisses sans les brûler. Paprika brûle à très basse température et devient amère en quelques secondes sur chaleur directe. Incorporer 30 à 45 secondes jusqu'à ce que le mélange soit une pâte rouge vive et uniforme.",
      "visualCue": {
        "primaryTarget": "Le mélange se transforme en une pâte rouge épaisse et brillante avec un arôme de paprika intensement doux et terreux qui remplit la cuisine.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Paprika est encore orange et poudreux. L'odeur d'épices crues est vive et poussiéreuse.",
            "action": "Incorporer encore 30 secondes dans la chaleur résiduelle. L'huile doit absorber complètement le pigment paprika."
          },
          {
            "state": "Perfect",
            "description": "Pâte rouge brique profonde, scintillement et uniforme. L'arôme est doux, complexe et légèrement fruité, comme les poivrons rouges séchés et la terre.",
            "action": "Revenez chauffer et ajoutez immédiatement le bœuf."
          },
          {
            "state": "Overdone",
            "description": "La pâte est foncée à brune aux bords. Une odeur dure et acride. Des notes amères sombres.",
            "action": "Ajouter immédiatement un jet de bouillon pour arrêter la cuisson. Continuez, mais réduisez le temps de cuisson — l'amertume sera présente."
          }
        ]
      },
      "feelCue": "Pressez un doigt sur la pâte — elle doit se sentir grasse et lisse, pas pulvérulente ou sèche. Le pigment rouge devrait tacher votre bout de doigt immédiatement."
    },
    {
      "nodeId": "step_3",
      "action": "Saisir",
      "inputs": [
        "paprika_base",
        "ing_01",
        "ing_06"
      ],
      "outputState": "browned_beef",
      "instructions": "Retourner le pot à feu moyen-élevé. Ajouter les cubes de boeuf et assaisonner de sel et de graines de carvi. Incorporer chaque morceau de la base du paprika. Laissez le boeuf colorer sur au moins deux côtés – environ 3-4 minutes de chaque côté sans bouger. Travaillez en lots si nécessaire pour éviter la vapeur. L'objectif est d'un fond de teint, pas un brunissement complet.",
      "visualCue": {
        "primaryTarget": "Les cubes de boeuf présentent une croûte brun-rouge foncé sur leurs surfaces où ils ont touché la poêle, entourée d'une masse de paprika-oignon intensement aromatique.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le boeuf est gris et terne. Il a libéré de l'humidité et est en vapeur plutôt que de semer. Aucune croûte visible.",
            "action": "Levez la chaleur et arrêtez de remuer. Laisser cuire le liquide avant le début de la réaction de Maillard."
          },
          {
            "state": "Perfect",
            "description": "Au moins deux côtés de chaque cube sont brun acajou avec une croûte distincte. Le fond du pot a un fond sombre et parfumé.",
            "action": "Ajoutez le stock et grattez le fond."
          },
          {
            "state": "Overdone",
            "description": "La croûte est presque noire. Forte odeur brûlée du paprika sur le fond du pot.",
            "action": "Déglacer immédiatement avec le stock et procéder. Le braise équilibrera une grande partie de l'amertume."
          }
        ]
      },
      "feelCue": "Le boeuf devrait résister lorsque vous essayez de le déplacer du pot — s'il se libère facilement, il a développé une bonne croûte. Larmes de levage forcée de la croûte."
    },
    {
      "nodeId": "step_4",
      "action": "Braiser",
      "inputs": [
        "browned_beef",
        "ing_05"
      ],
      "outputState": "finished_goulash",
      "instructions": "Ajouter suffisamment de stock pour couvrir à peine le boeuf. Grattez n'importe quel fond. Porter à ébullition, puis réduire à la plus basse mijoter — juste une bulle qui brise la surface toutes les quelques secondes. Couvrir et cuire pendant 1 heure 30 minutes. Vérifiez à l'occasion et ajoutez un jet d'eau si le liquide tombe sous le tiers de la hauteur de la viande. Le ragoût est fait lorsque le boeuf donne complètement à une fourchette sans résistance.",
      "visualCue": {
        "primaryTarget": "La sauce a été réduite à une sauce épaisse, brillante, rouge profond qui enrobe une cuillère et maintient le revêtement lorsque vous l'inclinez. Le bœuf se sépare avec une fourchette mais tient sa forme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le boeuf résiste à la fourche, mâcheuse et dure au centre. La sauce est fine et aqueuse, orange pâle plutôt que rouge foncé.",
            "action": "Continuer à mijoter pendant 20 à 30 minutes. Le tissu conjonctif nécessite une chaleur soutenue pour se convertir en gélatine."
          },
          {
            "state": "Perfect",
            "description": "Le boeuf donne comme du beurre mou à une fourchette. La sauce est assez épaisse pour enrober une cuillère en bois et s'écoule lentement. La couleur est un rouge de brique profonde.",
            "action": "Goûtez et ajustez le sel. Servir sur des nouilles d'œufs ou avec du pain croustillant."
          },
          {
            "state": "Overdone",
            "description": "Le boeuf s'est désintégré en lambeaux. La sauce a réduit la sauce passée en pâte collante. La couleur s'est foncée vers le brun.",
            "action": "Ajouter une tasse de stock pour restaurer la consistance. La texture de bœuf déchiqueté n'est pas traditionnelle, mais encore délicieuse."
          }
        ]
      },
      "feelCue": "Un morceau de bœuf, pressé entre les doigts, devrait tomber en morceaux sans aucun mouvement de mâcher nécessaire — le collagène s'est complètement transformé en gélatine lorsque vous pouvez pincer un cube en deux avec deux doigts."
    }
  ]
};
