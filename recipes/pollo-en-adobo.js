export default {
  "repoId": "master_mexican_pollo_en_adobo_001",
  "parentRepoId": null,
  "slug": "pollo-en-adobo",
  "author": "ForkRecipe Kitchen",
  "title": "Pollo en Adobo",
  "description": "Poulet désossé braisé dans un adobo mexicain rouge brique profonde — ancho et guajillo chiles grillés, réhydratés et mélangés avec du vinaigre, de l'ail, du cumin et de l'origan dans une sauce brillante et épaisse qui s'accroche à la viande comme du vernis.",
  "cuisine": "Mexicain",
  "culture": "Mexicain central",
  "category": "proteins",
  "tags": [
    "poulet",
    "Mexique",
    "Adobo",
    "les chiles",
    "braise",
    "ancho",
    "Guajillo"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "3 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Morceaux de poulet désossé (vif et jambes)",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "épaule de porc coupée en morceaux"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Chiles d'anchois séchés (tiges et graines enlevées)",
      "ratioValue": 4,
      "defaultUnit": "whole",
      "substitutions": [
        "Mulato chiles"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Heat",
      "name": "Chiles de guajillo séchés (tiges et graines enlevées)",
      "ratioValue": 4,
      "defaultUnit": "whole",
      "substitutions": [
        "Nouveau-Mexique"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon blanc, quartiers",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 5,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Graines de cumin grillées",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "cumin au sol (1⁄2 c. à thé)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Origan mexicain séché",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "Marjoram séché"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Bâton de cannelle",
      "ratioValue": 1,
      "defaultUnit": "small",
      "substitutions": [
        "1⁄4 c. à thé cannelle moulue"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Giroves entières",
      "ratioValue": 3,
      "defaultUnit": "whole",
      "substitutions": [
        "pincer les gousses du sol"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Liquid",
      "name": "Stocks de poulet",
      "ratioValue": 300,
      "defaultUnit": "ml",
      "substitutions": [
        "eau"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Fat",
      "name": "Lard ou huile neutre",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "Écourtement des légumes"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "toasted_chiles",
      "instructions": "Chauffer une poêle comale sèche ou lourde à feu moyen jusqu'à très chaud. Faites griller les morceaux de piments ancho et guajillo en tranches en les pressant à plat contre la surface chaude pendant 10-15 secondes de chaque côté — vous les verrez bouffer légèrement, changer de couleur et libérer une fragrance enivrante fumée. Ne les brûlez pas de noir : un chile grillé sent le raisin, le chocolat et les fruits secs ; un chile brûlé sent le carbone acride et rendra votre sauce amère. Une fois grillé, transférer immédiatement dans un bol et couvrir d'eau bouillante. Laisser tremper pendant 20-30 minutes jusqu'à ce qu'il soit complètement doux et souple.",
      "visualCue": {
        "primaryTarget": "Les Chiliens sont profondément parfumés, légèrement cloqués, et ont changé en un rouge brique plus vif ou brun-rouge foncé. Ils devraient se sentir pliables, pas papier.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les Chiliens sont toujours de couleur papier et terne. Aucun arôme libéré. L'humidité intérieure n'est pas activée.",
            "action": "Retourner à la surface chaude pendant quelques secondes de plus par côté. La poêle doit être correctement préchauffée."
          },
          {
            "state": "Perfect",
            "description": "Blister légèrement, brun-rouge vif, parfumé de fruits secs et de fumée douce. Pliable quand plié mais pas noir n'importe où.",
            "action": "Transférer immédiatement dans un bol et couvrir d'eau bouillante pour réhydrater."
          },
          {
            "state": "Overdone",
            "description": "Les taches noires sur la surface. Une odeur de café brûlé. La surface est rigide et carbonisée.",
            "action": "Jeter ces pièces et commencer à neuf. Un chile brûlé peut rendre tout l'adobo amer."
          }
        ]
      },
      "feelCue": "Un chile bien grillé presse à plat sous votre doigt avec une souplesse sinueuse et chaleureuse, comme du cuir chaud séché, pas une raideur de papier."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "toasted_chiles",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "adobo_paste",
      "instructions": "Égoutter les chiles réhydratés, en réservant 120 ml du liquide absorbant (il a une saveur mais peut être amer — goût avant utilisation). Déposer les chiles dans un mélangeur avec l'oignon coupé en quartiers, l'ail, le vinaigre de cidre de pomme, le cumin grillé, l'origan, la cannelle et les girofles. Ajouter 60 ml d'eau de trempage et 60 ml d'eau douce. Blitz à une pâte complètement lisse, épaisse, 2-3 minutes en hauteur. L'adobo fini doit être la couleur de la brique foncée, intensément aromatique, légèrement aigre du vinaigre, et assez épais pour enrober une cuillère. Passer à travers un filtre à mailles fines si désiré pour une texture plus lisse.",
      "visualCue": {
        "primaryTarget": "Une pâte rouge brique profonde avec une surface veloutée. Pas de peau de chile visible ou de fragments de graines. Assez épaisse pour qu'elle ne s'écoule pas librement du mélangeur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours avec des morceaux de chile visibles. Pale et inégale en couleur. Les épices ne sont pas entièrement intégrées.",
            "action": "Blitz plus longtemps, grattant les côtés toutes les 30 secondes. Ajouter une cuillère à soupe si le mélangeur lutte."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, pâte rouge brique profonde. Des chutes du mélangeur dans des vagues lentes et lourdes. Le goût est complexe : fumé, vinaigre, terreux, légèrement sucré.",
            "action": "Faire revenir la pâte immédiatement pour le meilleur développement de saveur."
          },
          {
            "state": "Overdone",
            "description": "Sur-pensé avec trop de liquide — pâte est aqueuse et pâle.",
            "action": "Faire frire la pâte comme d'habitude; l'humidité supplémentaire s'évaporera rapidement dans la graisse chaude."
          }
        ]
      },
      "feelCue": "La pâte d'adobo finie doit se sentir épaisse et légèrement sèche entre les doigts à partir des solides de chile séchés — plus comme un hummus épais qu'une sauce liquide."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "adobo_paste",
        "ing_12",
        "ing_01",
        "ing_13"
      ],
      "outputState": "fried_adobo_with_chicken",
      "instructions": "Chauffer le saindoux dans une grande casserole lourde (four hollandais) à feu vif jusqu'à ce qu'il fume. Travaillant en lots, faites fondre les morceaux de poulet salés sur la peau pendant 4-5 minutes sans bouger jusqu'à ce qu'ils soient profondément dorés. Tourner et saisir l'autre côté pendant 2 minutes. Retirer et réserver. Réduire le feu à moyen. Ajoutez la pâte d'adobo à la graisse chaude — elle s'épandrea furieusement. Reculez, puis remuez constamment pendant 3-4 minutes, en faisant frire la pâte dans la graisse. Cette étape, appelée freír el adobo, transforme la pâte brute de chile en une sauce profonde et complexe : la couleur s'assombrit, l'odeur brute aiguë se mêle à quelque chose de rond et grillé, et la graisse commence à saigner visiblement, l'équivalent mexicain de bhunao.",
      "visualCue": {
        "primaryTarget": "La pâte s'est assombrie à un brun rouge très profond et est visiblement friture dans la graisse — vous pouvez voir de petites bulles de graisse émerger à travers la surface de la pâte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore le rouge brillant des chiles mélangés. Ça a l'air cru et humide. Le vinaigre est encore aiguisé sur le nez.",
            "action": "Continuer à frire encore 2-3 minutes, en remuant constamment. L'adobo doit cuisiner et se concentrer."
          },
          {
            "state": "Perfect",
            "description": "La pâte s'est assombrie jusqu'à une acajou profonde et est visiblement frite — de petites perles de graisse à la surface. Ça sent la terre, complexe et rond. Pas de piquant brut.",
            "action": "Retourner le poulet dans la casserole, ajouter le bouillon et le braise."
          },
          {
            "state": "Overdone",
            "description": "La pâte colle et brûle aux bords. Ça sent amer et brûlé.",
            "action": "Déglacer immédiatement avec une touche de poulet. Réduire significativement la chaleur avant de retourner le poulet."
          }
        ]
      },
      "feelCue": "Lorsque l'adobo est bien frit, une cuillère en bois traînée sur le fond du pot laisse un sentier propre qui se remplit lentement, la pâte s'est épaissie et a commencé à se séparer de la graisse."
    },
    {
      "nodeId": "step_4",
      "action": "Brise",
      "inputs": [
        "fried_adobo_with_chicken",
        "ing_11"
      ],
      "outputState": "braised_adobo_chicken",
      "instructions": "Retournez tous les morceaux de poulets dans la casserole avec la pâte d'adobo frite. Verser le bouillon de poulet et remuer pour le mélanger — le liquide devrait venir à la moitié du poulet. Porter à mijoter, couvrir la casserole et cuire à feu doux pendant 45-60 minutes jusqu'à ce que le poulet soit complètement tendre à l'os. L'adobo pénétrera chaque surface du poulet. Une fourchette insérée à l'articulation de la cuisse ne devrait pas résister et la viande devrait vouloir tirer de l'os.",
      "visualCue": {
        "primaryTarget": "Poulet partiellement submergé dans un adobo rouge brique qui s'accroche à chaque surface. Le liquide est à mijoter, et non à ébullition. La cuisine sent le chile séché et le vinaigre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Moins de 30 minutes. La viande près de l'os est encore ferme et résiste à une fourchette. La sauce adobo est encore fine.",
            "action": "Continuez à faire l'éloge. Le poulet désossé a besoin de temps plein pour que le tissu conjonctif se décompose."
          },
          {
            "state": "Perfect",
            "description": "Après 45 à 60 minutes, la viande s'éloigne de l'os avec une légère pression de fourche. La sauce a réduit et épaissi pour enrober chaque morceau.",
            "action": "Découvrez et procédez à la réduction finale."
          },
          {
            "state": "Overdone",
            "description": "Le poulet s'est complètement désagrégé et la sauce est très épaisse et commence à coller.",
            "action": "Retirer soigneusement les plus gros morceaux. Finir la sauce avec un peu de bouillon et servir immédiatement."
          }
        ]
      },
      "feelCue": "Après le braisage complet, insérez une fourchette dans l'articulation de la cuisse — elle devrait glisser à travers la viande avec la sensation de se séparer chaud, donnant de l'argile plutôt que de couper les fibres musculaires."
    },
    {
      "nodeId": "step_5",
      "action": "Réduire",
      "inputs": [
        "braised_adobo_chicken"
      ],
      "outputState": "finished_pollo_adobo",
      "instructions": "Retirer le couvercle et augmenter le feu à moyen-élevé. Cuire à découvert pendant 10-15 minutes, en retournant fréquemment les morceaux de poulet et en y cuillerant de la sauce. L'adobo réduit et glaçure : chaque morceau de poulet se laque dans un revêtement épais, brillant, rouge brique. La sauce doit être assez épaisse pour enrober l'arrière d'une cuillère et tenir un instant. Goûtez et ajustez le sel. Servir sur le riz ou avec des tortillas chaudes, avec des jalapeños marinés et de l'oignon blanc tranché à côté.",
      "visualCue": {
        "primaryTarget": "Chaque morceau de poulet laqué dans un adobo épais et brillant. La sauce verse à peine — elle glisse. Le poulet est profondément coloré et brillant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore fine et aqueuse, en courant le poulet. La couleur du chile n'est pas concentrée.",
            "action": "Continuer à réduire, tourner les pièces toutes les 2-3 minutes pour favoriser un vitrage uniforme."
          },
          {
            "state": "Perfect",
            "description": "Chaque pièce est profondément vitrée dans un adobo presque collant. La sauce à la base du pot est épaisse et à peine versable. La couleur est un rouge brique foncé profond.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite à un quasi-pâté et commence à brûler. Le vinaigre et le sucre se sont trop concentrés — la sauce a un goût très intense.",
            "action": "Ajouter 50-80 ml d'eau chaude ou de bouillon, mélanger pour enrober et retirer de la chaleur."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère en bois dans la sauce à la base de la casserole — une pièce parfaite d'adobo propre et le canal tient pendant 3-4 secondes avant de se remplir lentement."
    }
  ]
};
