export default {
  "repoId": "master_american_mac_and_cheese_001",
  "parentRepoId": null,
  "slug": "mac-and-cheese",
  "author": "ForkRecipe Kitchen",
  "title": "Mac et fromage cuits au four",
  "description": "Macaroni suspendu dans un béchamel en fonte, cheddar aigu, couronné d'une croûte dorée qui se brise dans la crème ci-dessous — le genre de mac et de fromage qui fait de toutes les versions en boîte un souvenir lointain.",
  "cuisine": "Américain",
  "culture": "Américain",
  "category": "grains",
  "tags": [
    "américains",
    "pâtes",
    "fromage",
    "la nourriture confortable",
    "cuits"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 2671,
  "forks": 287,
  "contributors": 31,
  "license": "CC-BY-SA",
  "createdAt": "2024-09-03",
  "updatedAt": "2025-07-22",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Macaronis ou cavatappi",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "coques",
        "Penne",
        "Rigatoni"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Starch",
      "name": "Farine à usage général",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "Farine universelle sans gluten"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Lait entier, chauffé",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "lait évaporé (richisseur)",
        "2% lait"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Cheddar pointu, fraîchement râpé (plus Gruyère en option)",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "Colby",
        "Fontina",
        "Gouda fumé"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel casher, moutarde sèche, poivre blanc, muscade",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Moutarde de Dijon (1 c. à thé)",
        "cayenne"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Structure",
      "name": "Panko chapelures grillées au beurre (pour garniture)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "Crackers Ritz écrasés",
        "chapelures simples"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire bouillir les pâtes al dente",
      "inputs": [
        "ing_01"
      ],
      "outputState": "al_dente_pasta",
      "instructions": "Portez un grand pot d'eau généreusement salée à ébullition. Cuire les macaronis pendant 2 minutes de moins que le mode d'emploi de l'emballage. Les pâtes doivent avoir un noyau blanc distinct quand mordu. Égoutter mais ne pas rincer — l'amidon de surface aide la sauce à coller. Mélanger avec un petit bouton de beurre immédiatement pour éviter de coller.",
      "visualCue": {
        "primaryTarget": "Les pâtes sont à peine tendres à l'extérieur avec un noyau blanc crayeux visible quand mordu en deux. Pas de goût farineux mais ferme tout au long.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est dure et craque quand elle est pliée. Centre est crayeux et goûte toujours cru. Beaucoup trop ferme pour manger.",
            "action": "Continuez à bouillir. La règle des 2 minutes sous s'applique aux heures normales d'emballage — si elles sont mal cuites au-delà de cela, ajouter du temps."
          },
          {
            "state": "Perfect",
            "description": "Extérieur tendre avec un noyau blanc distinct et une certaine résistance dans la morsure. Vous pouvez toujours voir le centre blanc quand vous cassez un morceau en deux.",
            "action": "Égoutter immédiatement. Ne pas rincer. Ajouter le beurre et réserver."
          },
          {
            "state": "Overdone",
            "description": "Les pâtes sont entièrement cuites sans noyau blanc. Douce et qui commence à gonfler. Il deviendra moelleux après la cuisson.",
            "action": "Continuez mais réduisez le temps de cuisson à 15 minutes. Les pâtes entièrement cuites ne peuvent pas revenir en arrière, mais la cuisson rapide minimise davantage l'adoucissement."
          }
        ]
      },
      "feelCue": "Mordre un morceau de macaroni — l'extérieur devrait laisser place en douceur, mais vos dents devraient frapper une résistance distincte au centre, comme mordre à travers la peau d'un raisin dans un intérieur plus ferme."
    },
    {
      "nodeId": "step_2",
      "action": "Faire du béchamel",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_06"
      ],
      "outputState": "bechamel_sauce",
      "instructions": "Dans une casserole lourde à feu moyen, faire fondre le beurre jusqu'à mousser. Ajouter la farine à la fois et remuer constamment avec un fouet pendant 2 minutes — c'est le roux, et il doit cuire assez longtemps pour perdre le goût de la farine crue. Ajouter progressivement le lait chaud, un louche à la fois, fouettant vigoureusement après chaque ajout jusqu'à ce qu'il soit lisse avant d'en ajouter davantage. Une fois le lait incorporé, ajouter la moutarde, la muscade, le sel et le poivre blanc. Cuire en remuant, jusqu'à ce que la sauce épaississe suffisamment pour enrober une cuillère, environ 5 minutes.",
      "visualCue": {
        "primaryTarget": "Une sauce douce et ivoire qui enveloppe l'arrière d'une cuillère et tient une ligne tirée à travers elle avec un doigt. Pas de bosses. Une odeur de lait chaud et de beurre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse. Un doigt tiré à travers le dos de la cuillère laisse une ligne qui se remplit immédiatement. Goûte légèrement de farine crue.",
            "action": "Continuer la cuisson et remuer à feu moyen. La sauce s'épaissira lorsque les granules d'amidon gonfleront complètement."
          },
          {
            "state": "Perfect",
            "description": "La sauce est épaisse, lisse et ivoire. Un doigt traîné à travers la cuillère enduite laisse une ligne propre qui tient pendant 3 secondes. Des odeurs de lait chaud et de noix de muscade.",
            "action": "Retirer du feu et commencer immédiatement à ajouter du fromage."
          },
          {
            "state": "Overdone",
            "description": "La sauce est très épaisse, plus qu'une sauce. Lorsqu'il est agité, il s'éloigne proprement des côtés de la poêle.",
            "action": "fouetter dans un jet de lait chaud pour se détendre. La sauce se détendrea légèrement dans le four de toute façon – légèrement épaisse est préférable à trop fine."
          }
        ]
      },
      "feelCue": "Plonger une cuillère dans la sauce et la tenir droite – la sauce doit enrober le dos dans un film continu et uniforme sans dégoutter immédiatement. Passez un doigt à travers : la ligne propre devrait tenir pour un compte lent de trois."
    },
    {
      "nodeId": "step_3",
      "action": "Ajouter le fromage",
      "inputs": [
        "bechamel_sauce",
        "ing_05"
      ],
      "outputState": "cheese_sauce",
      "instructions": "Retirer le béchamel du feu. Ajouter le fromage râpé en trois ajouts, en remuant entre chacun jusqu'à ce qu'il soit complètement fondu avant d'en ajouter davantage. La sauce doit être coupée du feu — ajouter du fromage à la sauce bouillante fera saisir les protéines et deviendra granuleuse. Incorporer délicatement un mouvement de la figure-huit plutôt que vigoureusement, ce qui peut briser l'émulsion.",
      "visualCue": {
        "primaryTarget": "Une sauce au fromage doré brillant qui coule lentement. Pas de grain ou de griffes. La surface est légèrement brillante à partir de la graisse du fromage.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le fromage n'a pas complètement fondu, des morceaux visibles flottant encore dans la sauce. La sauce a l'air inégalement colorée, toujours striée ivoire et jaune.",
            "action": "Incorporer délicatement à feu très doux (sans bouillir). Le fromage fraîchement râpé fond beaucoup plus facilement que le fromage pré-râpé."
          },
          {
            "state": "Perfect",
            "description": "Doux, brillant, sauce au fromage uniformément doré. Ça coule comme de la crème épaisse. Pas de grain. Goûte intensément de cheddar avec un soupçon de moutarde.",
            "action": "Combinez immédiatement les pâtes et transférez-les dans un plat de cuisson."
          },
          {
            "state": "Overdone",
            "description": "La sauce était trop chaude lorsque le fromage était ajouté — elle a l'air granuleuse et grasse, avec des réserves de gras visibles et une texture ricotta-cordée.",
            "action": "fouetter dans 1 c. à soupe de citrate de sodium ou un jet de lait évaporé tout en se réchauffant doucement. La sauce au fromage grainé peut parfois être sauvée par un agent émulsifiant."
          }
        ]
      },
      "feelCue": "Mélanger la sauce au fromage avec une cuillère et observer la résistance — elle devrait se sentir luxueusement épaisse, comme en remuant du fromage à la crème très doux, et laisser un revêtement sur la cuillère que vous pouvez voir clairement."
    },
    {
      "nodeId": "step_4",
      "action": "Mélanger et cuire",
      "inputs": [
        "cheese_sauce",
        "al_dente_pasta",
        "ing_07"
      ],
      "outputState": "baked_mac_and_cheese",
      "instructions": "Préchauffer le four à 180°C. Pliez les pâtes égouttées dans la sauce au fromage jusqu'à ce que chaque morceau soit bien enrobé. Verser dans un plat beurré de 23x33cm. Garnir uniformément de la chapelure panko beurrée. Cuire au four de 20 à 25 minutes jusqu'à ce que la garniture de la chapelure soit bien dorée et que les bords soient visiblement bouillonnants.",
      "visualCue": {
        "primaryTarget": "Croûte de pain profondément dorée, légèrement craquelée sur le dessus. Les bords du plat montrent de la sauce au fromage bouillonnant et caramélisant autour du périmètre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les fils d'Ariane sont encore dorés ou blonds. Des bords pas encore bouillants. Le centre du plat peut encore sembler plat et non fixé.",
            "action": "Retournez au four. Le bouillonnement aux bords est crucial — cela signifie que la sauce est chaude tout au long du trajet, pas seulement à la surface."
          },
          {
            "state": "Perfect",
            "description": "Les Fil d'Ariane sont brun doré. Les bords bouillonnent activement avec la sauce au fromage caramélisé. Le haut semble légèrement creux lorsqu'il est tapé.",
            "action": "Retirer et reposer 5 minutes avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Les fils d'Ariane sont brun foncé à noir. Les bords ont séché et le fromage s'est séparé en piscines grasses visibles autour du périmètre.",
            "action": "Tente avec feuille la prochaine fois après les 15 premières minutes. Servez - le — l'intérieur peut encore être parfait malgré le sommet surnommé."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur le centre de la croûte à l'aide d'une cuillère — elle devrait donner une croûte satisfaisante, et vous devriez sentir le mac doux et fondu sous la couche croustillante céder légèrement sous la pression."
    },
    {
      "nodeId": "step_5",
      "action": "Repos et service",
      "inputs": [
        "baked_mac_and_cheese"
      ],
      "outputState": "finished_mac_and_cheese",
      "instructions": "Retirer du four et laisser reposer 5 minutes. Ce court repos permet à la sauce de se serrer légèrement pour que les portions tiennent leur forme lorsqu'elles sont écorcées. Servir en portions généreuses, en veillant à ce que chaque scoop récupère une partie de la croûte dorée du dessus et des pâtes crémeuses en dessous.",
      "visualCue": {
        "primaryTarget": "Lorsqu'une grande cuillère est poussée à travers la croûte et levée, elle apporte une portion avec de la croûte intacte sur le dessus et en fusion, un mac cohésif et du fromage en dessous — pas une soupe rincée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mac et le fromage est encore soupeux et sort de la cuillère. La sauce n'a pas serré du reste.",
            "action": "Attendez encore 5 minutes. S'il reste très lâche, la sauce peut avoir été sous-alimentée — encore délicieuse, juste plus d'une casserole."
          },
          {
            "state": "Perfect",
            "description": "Portionné proprement du plat. L'intérieur est fondu et crémeux. La croûte se tient sur le dessus. Des cordes de fromage s'étendent entre le plat et la cuillère.",
            "action": "Servir immédiatement dans des bols chauds."
          },
          {
            "state": "Overdone",
            "description": "Mac et le fromage se sont serrés dans un bloc ferme et trancheable. Il tient sa forme comme une frittata plutôt que de couler du tout.",
            "action": "Ajouter une touche de lait chaud à la portion dans le bol et au micro-ondes pendant 30 secondes pour se détendre. La prochaine fois, réduisez le temps de cuisson de 5 minutes."
          }
        ]
      },
      "feelCue": "Lorsque vous ramassez et soulevez, il devrait y avoir une légère résistance de la sauce au fromage set suivie d'un flux de fusion lent. Quelques cordes de fromage devraient s'étirer entre la poêle et la cuillère — c'est la texture correcte."
    }
  ]
};
