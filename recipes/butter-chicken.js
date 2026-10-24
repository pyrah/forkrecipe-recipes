export default {
  "repoId": "master_indian_butterchicken_001",
  "parentRepoId": null,
  "slug": "butter-chicken",
  "author": "ForkRecipe Kitchen",
  "title": "Poulet de beurre (Murgh Makhani)",
  "description": "Les cuisses de poulet au tandoor sont nichées dans une sauce tomate-crème veloutée et orangée, parfumée de kasuri methi et de cardamome, inventée dans les années 1950 à Delhi et encore le plat qui introduit un million de personnes par an à la cuisine indienne.",
  "cuisine": "Indiens",
  "culture": "Punjabi/Delhi",
  "category": "proteins",
  "tags": [
    "indienne",
    "poulet",
    "beurre",
    "curry",
    "Makhani",
    "punjabi",
    "delhi",
    "tomates",
    "crème"
  ],
  "difficulty": 3,
  "activeTime": "50 min",
  "totalTime": "5 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Cuisses de poulet désossées, sans peau",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "cuisses désossées (ajouter 15 min de cuisson)",
        "poitrine de poulet (moins de pardon)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Yogourt plein gras",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Pâte gingembre-ail (pièces égales, sol fin)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Chili cachemiri en poudre (ou chili doux pour la couleur)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "paprika doux + pincée cayenne"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Garam masala",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Base",
      "name": "Tomates passata (tomates entraînées)",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "400g de tomates fraîches, blanchies et purées"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Crème lourde (35%+ gras)",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": [
        "Crème de cajou (vegan)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "Ghee (arôme plus riche, plus propre)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Kasuri methi (feuilles de fénugreek séchées), écrasées entre les palmiers",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Gousses de cardamome vert, légèrement broyées",
      "ratioValue": 4,
      "defaultUnit": "pods",
      "substitutions": [
        "1/4 c. à thé cardamome au sol"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Allium",
      "name": "Oignon blanc, tranché finement",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Échalotes"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Sweetener",
      "name": "Sucre (blanc ou jaggé)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_13"
      ],
      "outputState": "marinated_chicken",
      "instructions": "Dans un grand bol, mélanger le yogourt, la pâte gingembre-ail, la poudre de chili cachemiri, la moitié du garam masala et le sel. Bien mélanger. Score les cuisses de poulet avec trois coupes diagonales peu profondes de chaque côté, ce qui permet à la marinade de pénétrer et crée plus de surface pour l'ombrage. Ajouter le poulet et tourner jusqu'à ce que chaque morceau soit uniformément enduit dans la marinade rouge-orange profonde. Couvrir et réfrigérer pendant au moins 4 heures, et idéalement pendant la nuit. L'acide lactique du yogourt soumet les fibres protéiques; le chili colore la croûte; l'ail gingembre pénètre profondément.",
      "visualCue": {
        "primaryTarget": "Après 4 heures : poulet recouvert d'une marinade de terre cuite-orange profonde qui s'est en partie insérée dans les rainures marquées. La surface semble mate plutôt qu'humide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Moins de 2 heures : la marinade est assise à la surface sans pénétrer. Les découpes n'ont pas été dessinées en aucune couleur.",
            "action": "Réfrigérer plus longtemps. Cette marinade améliore réellement jusqu'à 24 heures — 4 heures est le minimum absolu."
          },
          {
            "state": "Perfect",
            "description": "4-12 heures : marinade terre cuite-orange intégrée dans les lignes de score. Le poulet se sent légèrement plus ferme que cru du remède à l'acide lactique.",
            "action": "Retirer du réfrigérateur 30 minutes avant la cuisson pour réduire le refroidissement."
          },
          {
            "state": "Overdone",
            "description": "Au-delà de 24 heures : l'acide commence à cuire les protéines de surface. La couche externe semble pâle et légèrement sèche.",
            "action": "Secouer l'excès de marinade et procéder. La texture extérieure sera plus sèche mais l'intérieur sera bien."
          }
        ]
      },
      "feelCue": "Au bout de 4 heures, pressez une cuisse marinée – elle doit se sentir plus ferme et moins productive que le poulet cru, la marinade étant encastrée plutôt que assise à la surface. Le yaourt devrait se sentir presque contre la viande."
    },
    {
      "nodeId": "step_2",
      "action": "Rôtis",
      "inputs": [
        "marinated_chicken"
      ],
      "outputState": "charred_chicken",
      "instructions": "Placer le porte-four à la position la plus élevée et préchauffer le grille-four à son réglage maximal. Disposer une plaque de cuisson lourde avec du papier et placer les morceaux de poulet marinés en une seule couche, en agitant toute marinade excédentaire. Faire griller de 8 à 10 minutes, en tournant une fois à mi-chemin, jusqu'à ce que le poulet soit cuit et que la marinade s'est carbonisée dans des taches brun foncé-noir à la surface. Ces marques d'omble ne sont pas négociables — elles ne sont pas seulement visuelles, elles sont un élément de saveur intrinsèque du makhani (l'omble qui se produit dans une tangle à 450°C). Retirer et reposer 5 minutes, puis couper en gros morceaux.",
      "visualCue": {
        "primaryTarget": "Poulet d'acajou foncé très carbonisé avec des taches noires sur le revêtement de la marinade. La surface sent la fumée tandorée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poulet est cuit à travers l'orange pâle, sans carbonisation. La grille était trop éloignée de l'élément ou non préchauffée.",
            "action": "Déplacez le rack plus haut et donnez encore 3 minutes sous le grilleur. Sans l'omble il n'y a pas de makhani — c'est juste du poulet dans la sauce tomate."
          },
          {
            "state": "Perfect",
            "description": "L'acajou foncé avec des taches d'omble, les jus sont clairs quand ils sont percés. Les odeurs extérieures d'épices carbonisées et la cuisine est légèrement fumée. L'intérieur est juste cuit à travers.",
            "action": "Repose-toi et coupe en gros morceaux. Continuez à construire la sauce."
          },
          {
            "state": "Overdone",
            "description": "Le poulet est entièrement noir à l'extérieur et sèche à l'intérieur. Température intérieure supérieure à 82°C.",
            "action": "Saluvage en coupant l'extérieur le plus carbonisé et en mijotant plus longtemps dans la sauce pour ré-hydrater la viande."
          }
        ]
      },
      "feelCue": "Appuyez sur le point le plus épais d'une cuisse après le gril — il devrait donner légèrement et se sentir ferme mais pas dur. Les jus au bord de la coupe doivent être limpides et rosés. Toute couleur interne rouge vif nécessite 2 minutes de plus."
    },
    {
      "nodeId": "step_3",
      "action": "Saucisse",
      "inputs": [
        "ing_11",
        "ing_08",
        "ing_10",
        "ing_06",
        "ing_04",
        "ing_05"
      ],
      "outputState": "bhuna_base",
      "instructions": "Dans un grand pot lourd, faire fondre le beurre à feu moyen. Ajouter les gousses de cardamome concassées et cuire 30 secondes jusqu'à odorat – le beurre moussera et la cardamome s'étourdira. Ajouter l'oignon tranché et cuire en remuant régulièrement, pendant 15 à 18 minutes jusqu'à ce qu'il soit profondément doré (pas seulement translucide) – c'est l'étape la plus critique dans le temps. La réaction de Maillard dans l'oignon apporte douceur et corps à la sauce. Ajouter la passata, la poudre de chili cachemiri et le masala de garam restant. Cuire à feu moyen-vif pendant 15 à 20 minutes, en remuant fréquemment, jusqu'à ce que le beurre se sépare visiblement de la masse de la tomate, c'est-à-dire que la sauce est cuite plutôt que crue.",
      "visualCue": {
        "primaryTarget": "La sauce s'est foncée du rouge vif au rouge rouille. Des piscines de beurre rouge orange se sont séparées aux bords et à la surface de la sauce. L'odeur de la tomate est passée de vive et acide à douce et concentrée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons ne sont dorés qu'au bout de 8 minutes — avancez avant qu'ils ne soient sombres et la tomate a à peine cuit. La sauce a un goût cru et acide.",
            "action": "Ne vous pressez pas. Les oignons ont besoin de 15 à 18 minutes à feu moyen. La tomate a besoin d'au moins 15 minutes de bhuna pour perdre son bord brut."
          },
          {
            "state": "Perfect",
            "description": "sauce rouge rouille profonde, piscines de beurre orange séparé visible. La sauce est épaisse et jammy, tombant d'une cuillère dans un tas. Ça sent profondément sucré, concentré et épicé.",
            "action": "Enlever les gousses de cardamome. Mélanger à une sauce lisse."
          },
          {
            "state": "Overdone",
            "description": "La sauce est collée et brûlée sur le fond du pot. Morceaux brun foncé visibles partout. Ça sent amer.",
            "action": "Déglacer immédiatement avec 50ml d'eau, réduire la chaleur. Goûter — si elle est très amère, la sauce peut ne pas être récupérable."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère en bois sur le fond du pot – la sauce doit se séparer proprement et tenir sa piste pendant 2 secondes complètes avant de fermer. Lorsque le beurre s'est séparé, vous verrez qu'il pool dans les canaux. Cet éclat gras est le signal."
    },
    {
      "nodeId": "step_4",
      "action": "Mélange",
      "inputs": [
        "bhuna_base"
      ],
      "outputState": "smooth_sauce",
      "instructions": "Enlevez les gousses de cardamome. Laisser la sauce refroidir pendant 5 minutes, puis mélanger jusqu'à ce qu'elle soit complètement lisse à l'aide d'un mélangeur d'immersion ou en transférant dans un mélangeur de peuplement en lots. Une sauce makhani bien mélangée est soyeuse et épaisse, sans oignon visible ni fibres de tomate. Si vous utilisez un mélangeur de support, tenez le couvercle avec une serviette à thé pliée et commencez à la vitesse la plus basse — les liquides chauds s'étendent dans des mélanges scellés. Passer à travers une passoire fine pour une finition ultra-lisse si désiré (les restaurants font; les cuisiniers à domicile n'ont pas besoin).",
      "visualCue": {
        "primaryTarget": "Une sauce corallienne-orange très lisse avec une surface brillante et fluide. Pas de pièces visibles. Verse doucement et lentement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a des morceaux d'oignon et de peau de tomate encore visibles. La texture est inégale et légèrement rugueuse.",
            "action": "Mélanger pendant plus longtemps — 3 minutes complètes dans un mélangeur de peuplement en hauteur. Ou passer un tamis après le mélange."
          },
          {
            "state": "Perfect",
            "description": "Soyeux, fluide, uniforme corail-orange. Enrober une cuillère complètement. Lorsque vous basculez le mélangeur, la sauce se déplace comme un seul corps cohésif.",
            "action": "Retourner la sauce dans la casserole à feu doux. Ajouter le poulet brûlé."
          },
          {
            "state": "Overdone",
            "description": "Le surmenage est essentiellement impossible. Si la sauce refroidit trop en mélangeant et commence à congeler, réchauffez simplement doucement.",
            "action": "Chauffer la sauce avant d'ajouter le poulet."
          }
        ]
      },
      "feelCue": "Exécutez un doigt le long de l'intérieur du pot de mélangeur : la sauce doit être lisse comme de la crème molle, sans grain ni fibre. Une tranche de sauce orange sur le dos de votre main devrait sécher à un mince film, même sans grumeaux."
    },
    {
      "nodeId": "step_5",
      "action": "Laisser mijoter",
      "inputs": [
        "smooth_sauce",
        "charred_chicken",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_12"
      ],
      "outputState": "butter_chicken",
      "instructions": "Retourner la sauce lisse dans le pot à feu moyen-doux. Ajouter les morceaux de poulet carbonisé et mélanger pour enrober. Laisser mijoter doucement pendant 10 minutes — le poulet finit la cuisson et l'arôme d'omble pénètre la sauce. Verser la crème lourde et remuer. Ajouter le reste du beurre dans de petits cubes, en remuant jusqu'à ce qu'il fonde dans la sauce dans une émulsion brillante. Crushez le kasuri methi entre vos palmiers directement au-dessus de la casserole — il libère un arôme amer et mapley distinctif qui est la marque de makhani. Ajouter le sucre pour équilibrer l'acidité. Bouche : La sauce doit être crémeuse, légèrement épicée, légèrement fumée et parfaitement équilibrée entre sucré et acide.",
      "visualCue": {
        "primaryTarget": "Une sauce orangée roussâtre profonde, plus légère que la phase pré-crème, qui est brillante et voluptueuse, attachée à chaque morceau de poulet. Flecks de kasuri methi foncés visibles partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Crème non entièrement incorporée — la sauce semble cassée avec des stries blanches. Kasuri methi pas encore ajouté. La sauce a un goût plat et tomate-avant sans la richesse de la crème.",
            "action": "Incorporer continuellement à feu doux jusqu'à ce que la crème soit complètement émulsifiée. Ajouter le beurre et le kasuri methi."
          },
          {
            "state": "Perfect",
            "description": "Sauce crémeuse, brillante et orangée. Il enveloppe le poulet d'une couche épaisse. La saveur est complexe : omble fumé, crème douce, cardamome floral, carmley fenugreek. Le beurre lui a donné un éclat subtil.",
            "action": "Servir sur le riz basmati avec du naan."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été coupée après l'ajout de crème. La graisse gris-blanc s'est séparée.",
            "action": "Retirer immédiatement du feu et remuer vigoureusement. Ajouter une cuillère à soupe d'eau froide et remuer à nouveau. La sauce revient généralement de la chaleur."
          }
        ]
      },
      "feelCue": "Goûtez une cuillerée de sauce seule : elle devrait envelopper le dos de votre gorge d'un film chaud et velouté qui s'attarde. La chaleur du chili est douce et se construit lentement. La saveur de kasuri methi est la dernière chose que vous goûtez — une amertume faible et agréable comme l'ombre du sirop d'érable."
    }
  ]
};
