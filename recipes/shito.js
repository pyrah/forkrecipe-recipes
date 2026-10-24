export default {
  "repoId": "master_ghanaian_shito_001",
  "parentRepoId": null,
  "slug": "shito",
  "author": "ForkRecipe Kitchen",
  "title": "Merde",
  "description": "La fameuse sauce au poivre noir du Ghana — crevettes séchées et chiles moulues lentement frites dans l'huile jusqu'à l'acajou profond et intensément salé, l'un des condiments les plus punitifs de la terre.",
  "cuisine": "Ghanéen",
  "culture": "Ghanéen de l'Afrique de l'Ouest",
  "category": "condiments",
  "tags": [
    "ghanaïen",
    "Afrique de l ' Ouest",
    "condiment",
    "Chile",
    "crevettes séchées",
    "umami"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Crevettes séchées (petites, séchées au soleil)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "poudre de crevettes (achetée en magasin)",
        "crevettes séchées"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Harengs séchés ou maquereaux fumés, désossés",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "anchois séchés",
        "Poisson-chat séché"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Heat",
      "name": "Chiles rouges séchés (cayenne, oeil d'oiseau ou poivrons ghanéens)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "1-2 c. à soupe de poivre de Cayenne"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon rouge, haché approximativement",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "oignon blanc"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 6,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Gingembre frais, pelé, tranché approximativement",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "1 c. à thé de gingembre moulu"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile végétale neutre (canola ou tournesol)",
      "ratioValue": 240,
      "defaultUnit": "ml",
      "substitutions": [
        "huile de coco raffinée"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "2 tomates roms, hachées et cuites"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Stock ou eau",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": [
        "bouillon de poulet",
        "Matériel de champignons"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Livre",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "seafood_powder",
      "instructions": "Briser les crevettes séchées et les poissons séchés désossés en petits morceaux. Travailler en lots, les broyer dans un broyeur d'épices, un robot culinaire ou un mélangeur à grande vitesse jusqu'à ce qu'il s'agisse d'une poudre grossière et sèche — pas d'une pâte, pas d'une farine, mais d'une poudre texturée et parfumée à peu près la consistance du café grossièrement moulu. Étendre la poudre finie sur une plaque et vérifier les fragments d'os restants du poisson séché avant de procéder. La poudre sentira intensément la mer.",
      "visualCue": {
        "primaryTarget": "Poudre sèche, texturée de sable, de couleur rougeâtre-tan, de crevettes et de taches plus foncées du poisson. Doit verser librement d'une cuillère sans accroupir.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pièces encore reconnaissables comme crevettes ou poissons. La poudre est épaisse et inégale.",
            "action": "Retour à la meuleuse en petits lots et impulsion en courts éclats - surcharger la meuleuse produit une texture inégale."
          },
          {
            "state": "Perfect",
            "description": "Poudre grossière uniforme, sèche et libre. L'arôme est intensément salin et marin, presque écrasant à cette concentration. Pas de fragments osseux visibles.",
            "action": "Réserver et préparer la pâte."
          },
          {
            "state": "Overdone",
            "description": "Répartir à la farine fine – créera une texture différente dans la sauce finale (lunette, moins texturée).",
            "action": "Procéder — une poudre plus fine n'est pas un échec, elle produit simplement un chito plus lisse."
          }
        ]
      },
      "feelCue": "Pincez une petite quantité de poudre entre vos doigts et frottez - elle doit être sèche et légèrement gribouillée, non mouillée ou entaillée. Si elle s'agrippe, les fruits de mer séchés ont absorbé l'humidité et peuvent avoir besoin d'un bref toast sec avant de broyer."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "chile_paste",
      "instructions": "Si vous utilisez des chiles séchés entiers, réhydratez-les dans de l'eau tiède pendant 15 minutes, puis égouttez. Mélanger les chiles réhydratés ou séchés (une petite quantité d'eau de trempe est fine), l'oignon rouge, l'ail et le gingembre dans un mélangeur ou un robot culinaire. Mélanger à une pâte grossière, rouge brique — pas complètement lisse, mais pas de gros morceaux restant. Un mortier et un pilon produisent une pâte plus texturée si le temps le permet.",
      "visualCue": {
        "primaryTarget": "Une pâte rouge brique profonde avec une texture d'oignon visible et de piment. Doit être assez épais pour maintenir un pic brièvement mais va s'effondrer immédiatement. Arôme piquant et apaisant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte a encore de gros morceaux d'oignon et des morceaux entiers de chile. Une texture inégale qui fera cuire inégalement.",
            "action": "Mélanger encore 30 secondes, en ajoutant 1 cuillère à soupe d'eau si nécessaire pour aider le mélangeur à attraper les ingrédients."
          },
          {
            "state": "Perfect",
            "description": "Une pâte épaisse, de couleur profonde avec une texture fine mais visible. L'odeur d'oignon cru est forte. La couleur du chile est un riche rouge brique.",
            "action": "Chauffer l'huile dans une grande poêle et commencer à frire."
          },
          {
            "state": "Overdone",
            "description": "Mélanger complètement lisse avec trop d'eau ajoutée — la pâte est fine et aqueuse.",
            "action": "L'excès d'eau s'effacera mal dans l'huile chaude. Faire cuire à feu doux au départ pour sortir de l'eau avant de commencer à frire proprement."
          }
        ]
      },
      "feelCue": "La pâte devrait glisser quand vous tirez une cuillère à travers elle et se déposer lentement — comme une sauce tomate épaisse, pas comme un liquide. S'il verse librement, il contient trop d'eau."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "chile_paste",
        "ing_07"
      ],
      "outputState": "fried_paste",
      "instructions": "Chauffer l'huile dans une poêle large à fond lourd ou wok à feu moyen jusqu'à ce qu'elle mijote mais ne fume pas. Ajouter la pâte de piment tout à la fois — elle éclaboussera et sifflera de façon spectaculaire. Reculez et réduisez immédiatement le feu à moyen-doux. Faire frire la pâte en remuant constamment avec une cuillère à main longue, pendant 15-20 minutes. La pâte doit frire — pas mijoter — dans l'huile: vous voulez des sons de friture actifs (un crackle continu, vif) pas une gourde douce. La pâte s'obscurcira progressivement de rouge brique à un marron foncé profond.",
      "visualCue": {
        "primaryTarget": "Après 15-20 minutes, la pâte s'est considérablement foncée jusqu'à un maroon-acajou profond. La pâte s'est rétrécie et l'huile se sépare visiblement, se regroupant dans des canaux clairs autour des bords de la pâte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore rouge vif et sent l'oignon cru et le chile. L'huile n'est pas séparée. Moins de 10 minutes.",
            "action": "Continuer à frire — les saveurs crues doivent être complètement cuites. Le changement de couleur est le signal, pas l'horloge."
          },
          {
            "state": "Perfect",
            "description": "Une pâte rouge acajou foncée. L'huile est visiblement séparée des solides, se superposant autour des bords. L'odeur d'oignon brut a été remplacée par un arôme complexe, torréfié et profondément salé.",
            "action": "Ajouter la poudre de fruits de mer."
          },
          {
            "state": "Overdone",
            "description": "La pâte est presque noire, sent l'acride, et l'huile fume. Petites taches brûlantes visibles.",
            "action": "Retirer immédiatement du feu. Si le goût est amer, il n'y a pas de guérison, la sauce sera désagréable. Utilisez une chaleur plus faible et plus longtemps la prochaine tentative."
          }
        ]
      },
      "feelCue": "Écoutez la poêle — le son correct est un craquelin à frire stable et actif, comme une sauce vigoureuse. Si ça sonne comme une mijot douce avec des pops occasionnels, la chaleur est trop faible et vous êtes éparpillé, sans faire frire la pâte."
    },
    {
      "nodeId": "step_4",
      "action": "Toast",
      "inputs": [
        "fried_paste",
        "seafood_powder"
      ],
      "outputState": "seafood_incorporated",
      "instructions": "Ajouter la poudre de fruits de mer à la pâte frite foncée et mélanger vigoureusement. La poudre absorbera une partie de l'huile et le mélange saisira légèrement et deviendra une masse épaisse et sombre. Continuer à frire pendant 5-7 minutes en remuant constamment. La poudre de fruits de mer grillera dans l'huile résiduelle, intensifiant sa saveur marine et développant une profondeur torréfié aux noix. Le mélange sentira une odeur très savoureuse, presque écrasante à proximité.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse, très sombre, acajou à noir où la poudre de fruits de mer est devenue entièrement incorporée et grillée. Le mélange est sec et raide, collant à la cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La poudre de fruits de mer semble toujours crue et pâle contre la base de pâte foncée. L'odeur marine n'a pas cuit.",
            "action": "Continuer à frire pendant encore 3-4 minutes, en remuant constamment pour éviter que la poudre ne brûle sur le fond de la poêle."
          },
          {
            "state": "Perfect",
            "description": "Le mélange combiné est une masse homogène, très foncée, intensément aromatique. L'odeur est passée d'un poisson cru à un poisson profondément rôti et salé — funky de la meilleure façon possible.",
            "action": "Ajouter la pâte de tomate et le bouillon."
          },
          {
            "state": "Overdone",
            "description": "La poudre de poisson de mer a été brûlée sur le fond de la poêle, une odeur de poisson vif, amer et brûlé.",
            "action": "Ajouter le stock immédiatement pour arrêter le brûlage. Si l'odeur amère est forte, le lot est compromis."
          }
        ]
      },
      "feelCue": "Appuyez sur le mélange contre le côté de la poêle avec une cuillère — il doit se sentir comme une pâte de tomate très épaisse et raide: dense et résistant, nécessitant une force réelle pour pousser et se propager. S'il coule facilement, il faut plus de temps à frire pour réduire son humidité."
    },
    {
      "nodeId": "step_5",
      "action": "Réduire",
      "inputs": [
        "seafood_incorporated",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_shito",
      "instructions": "Ajouter la pâte de tomate et la mélanger vigoureusement dans le mélange de pâte frite, faire frire pendant 2 minutes pour cuire la pâte de tomate et approfondir sa couleur. Ajouter le bouillon ou l'eau et bien mélanger pour incorporer. Relever le feu à moyen et réduire le mélange en brassant constamment pendant 5 à 8 minutes jusqu'à ce que le bouillon ait cuit et que l'huile se sépare visiblement des solides. Le chito fini devrait être assez lâche pour cuillerer mais assez épais pour fouiner. Assaisonner de sel. Laisser refroidir complètement avant de conserver dans des pots stérilisés recouverts généreusement d'huile. Conserver au réfrigérateur pendant 3-4 semaines.",
      "visualCue": {
        "primaryTarget": "Une pâte très foncée, presque noire-maron qui est épaisse mais extensible. Une généreuse couche d'huile rouge foncé sur la surface et autour des bords — c'est la couche de préservation. L'odeur est profondément complexe : fumée, marine, piment chaud, salé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock n'est pas complètement réduit — le chito est humide et mince, manque de profondeur. Encore des odeurs de pâte de tomate crue.",
            "action": "Continuer la cuisson à feu moyen, en remuant constamment, jusqu'à ce que le mélange se raidisse et que l'huile se sépare à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Une pâte profonde, presque noire, qui tient sa forme sur une cuillère. Pool de pétrole visible à la surface. Le goût est une cascade écrasante de chaleur, d'umami, de sel, et une légère douceur de la tomate. La chaleur se construit lentement et persiste.",
            "action": "Refroidir complètement, transférer dans des pots stérilisés, en assurant une couche d'huile couvre la surface pour la préserver. Réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "Surcuite jusqu'au point de sécheresse — le chito s'est emparé d'une masse raide et friable avec à peine n'importe quelle huile restante.",
            "action": "Ajouter 30 ml d'huile végétale, bien remuer à feu doux pour réhydrater et transférer dans les pots. La texture sera restaurée même si le chito est trop serré."
          }
        ]
      },
      "feelCue": "Goûtez une petite quantité de chito fini et maintenez-le à l'arrière de votre langue — la chaleur devrait arriver tard, construisant plus de 10-15 secondes à une intensité élevée et soutenue qui est plus au sujet de la profondeur que la netteté immédiate. La note de l'umami devrait se sentir presque charnue, comme si la sauce avait des protéines en elle - même."
    }
  ]
};
