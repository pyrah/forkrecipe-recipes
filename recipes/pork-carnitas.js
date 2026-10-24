export default {
  "repoId": "master_mexican_pork_carnitas_001",
  "parentRepoId": null,
  "slug": "pork-carnitas",
  "author": "ForkRecipe Kitchen",
  "title": "Carnitas de porc",
  "description": "La farce définitive du taco de Michoacán — l'épaule de porc braisée lentement dans son propre saindoux rendu avec l'orange, la cannelle, la baie et l'ail jusqu'à ce qu'elle soit tendre et fondue, puis frite dans cette même graisse jusqu'à ce que les bords se brisent en crépitements brun acajou pendant que le centre reste irrésistiblement juteux.",
  "cuisine": "Mexicain",
  "culture": "Michoacán",
  "category": "proteins",
  "tags": [
    "Carnites",
    "Mexique",
    "porc",
    "confit",
    "Taco",
    "Michoacan",
    "croustillant"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "3 hr 15 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Epaule de porc (botton, coupée en gros morceaux de 6 cm)",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "cuisse de porc",
        "épaule de pique-nique de porc"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Lard (manteca de cerdo)",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "huile de coco raffinée",
        "huile végétale neutre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Citrus",
      "name": "Orange (1 grande – moitié, jus pressé, coquilles réservées)",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "1/2 orange + 1 lime"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon blanc (quartier)",
      "ratioValue": 0.5,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Girofles d'ail entiers, cassés",
      "ratioValue": 5,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 3,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Stick de cannelle mexicaine (canelle, une petite pièce)",
      "ratioValue": 1,
      "defaultUnit": "piece",
      "substitutions": [
        "Ceylon cannelle"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Sweetener",
      "name": "Lait condensé sucré (tradition Michoacán)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "1 c. à thé lait entier + 1 c. à thé sucre",
        "omit"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 18,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Assaisonner",
      "inputs": [
        "ing_01",
        "ing_09"
      ],
      "outputState": "salted_pork",
      "instructions": "Les morceaux de porc sont bien secs avec des serviettes en papier — l'humidité de surface est l'ennemi du rendu et du brunissement. Mélanger généreusement le sel jusqu'à ce que chaque surface porte un revêtement visible et uniforme. Laisser à température ambiante pendant 20 minutes pendant que vous ramassez les aromatiques. Le sel tire la trace la plus barrée de l'humidité à la surface, puis la surface sèche : ce sac aide le saindoux à s'accrocher et les assaisonnements pénètrent.",
      "visualCue": {
        "primaryTarget": "Les morceaux de porc semblent mats et secs, salés uniformément, chaque morceau à peu près de la même taille pour assurer une cuisson uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les morceaux sont visiblement mouillés et le sel glisse plutôt que de se dissoudre dans la surface.",
            "action": "Pat plus soigneusement et attendre — l'humidité de surface doit être enlevée avant de procéder."
          },
          {
            "state": "Perfect",
            "description": "Tacky et sec, avec des cristaux de sel fin qui commencent à peine à se dissoudre en un léger éclat. Toutes les pièces sont uniformes.",
            "action": "Transférer dans le grand pot lourd avec le saindoux."
          },
          {
            "state": "Overdone",
            "description": "Sat trop long, la surface semble grisâtre et déshydratée avec une petite flaque de liquide dans le bol.",
            "action": "Égoutter n'importe quel liquide, faire sécher et procéder — le résultat sera encore bon."
          }
        ]
      },
      "feelCue": "La viande doit se sentir collante et légèrement grippante, pas glissante. Une odeur faible et propre de porc: rien de acide, rien de tranchant."
    },
    {
      "nodeId": "step_2",
      "action": "Braiser",
      "inputs": [
        "salted_pork",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "braised_pork",
      "instructions": "Nettoyez les morceaux de porc en une seule couche dans une grande casserole ou un four hollandais. Ajouter le saindoux, puis presser le jus d'orange sur le dessus et déposer dans les moitiés de coquilles d'orange épuisées. Dans l'oignon, l'ail, les feuilles de laurier et le bâton de cannelle. Ajouter juste assez d'eau froide pour venir à niveau avec le dessus de la viande — l'eau va cuire d'abord, et quand il le fait, le saindoux prend le dessus. Porter à mijoter doucement et cuire à découvert sur le feu le plus bas, ne jamais laisser bouillir, pendant 1,5 à 2 heures. L'eau s'évapore progressivement au cours de la première heure; le porc poché dans du saindoux clair pendant la seconde heure jusqu'à ce que la fourchette soit tendre.",
      "visualCue": {
        "primaryTarget": "Après la cuisson de l'eau, le liquide dans le pot est passé du laiteux et nuageux à la graisse dorée cristalline, avec des bulles huileuses paresseuses qui dérivent autour de porc tendre et pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est encore nuageux et aqueux, bouillonnant activement; une fourchette rencontre une résistance ferme dans la viande.",
            "action": "Maintenez la chaleur faible et le patient — l'eau doit s'évaporer complètement avant que le porc ne soit fini. L'ébullition dure durcit la viande."
          },
          {
            "state": "Perfect",
            "description": "Saindoux clair, doré, bulles grasses lentes, orange et baie parfumant la cuisine. Une fourche s'enfonce dans un morceau sans résistance et la pièce se maintient ensemble, mais donne complètement.",
            "action": "Augmentez la chaleur pour faire frire — l'étape finale critique."
          },
          {
            "state": "Overdone",
            "description": "L'eau cuite avant le porc était tendre; les morceaux brunissent dans du saindoux sec avant que le tissu conjonctif ne se décompose complètement.",
            "action": "Ajouter une éclaboussure d'eau pour réinitialiser, diminuer la chaleur et continuer à braiser couvert."
          }
        ]
      },
      "feelCue": "Au début de la casserole, on dirait une mijotée d'eau régulière; comme l'eau s'en va, ce son se déplace graduellement vers le craquement plus silencieux et plus profond de la friture grasse. Cette transition audible est votre signal à surveiller de près."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "braised_pork",
        "ing_08"
      ],
      "outputState": "crisped_carnitas",
      "instructions": "Une fois l'eau complètement partie et le porc assis dans le saindoux clair, porter le feu à moyen-élevé. Si l'on utilise du lait condensé, arrosez-le maintenant et remuez - la trace de sucre laitier accélère le brunissement de la manière authentique de Michoacán. Cuire en ne tournant les morceaux que toutes les 3 à 4 minutes, jusqu'à ce qu'ils soient profondément dorés et croustillants à tous les bords exposés et aux points élevés. La graisse va buller vigoureusement autour des morceaux. Résistez à l'envie de remuer constamment — un contact prolongé entre la viande et le métal chaud est ce qui construit la croûte. Temps total de cuisson de 8 à 15 minutes.",
      "visualCue": {
        "primaryTarget": "Les bords et les surfaces angulaires de chaque morceau sont brun acajou profond et visiblement croustillants, craquelants lorsqu'ils sont tapés d'une cuillère; l'intérieur reste brillant et juteux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande semble pâle et douce, bouillie, sans brunissement; elle dégage peu d'arôme.",
            "action": "Levez la chaleur et arrêtez de remuer — les pièces doivent être en contact permanent avec la surface chaude."
          },
          {
            "state": "Perfect",
            "description": "Arêtes brûlées et crépitantes; une pièce pressée à l'arrière d'une cuillère donne doucement au centre. La cuisine sent la graisse de porc caramélisée et l'orange.",
            "action": "Soulever avec une cuillère à fentes, égoutter le gras dans le pot et le transférer sur une planche."
          },
          {
            "state": "Overdone",
            "description": "De couleur brun foncé uniforme et dur dans l'ensemble; la graisse sent brûlée; les morceaux s'écroulent plutôt que déchiqueté.",
            "action": "Retirer immédiatement; hacher finement et mélanger avec les morceaux encore juteux. Même les carnitas trop cuits se replient dans de bons tacos."
          }
        ]
      },
      "feelCue": "Tapez une pièce avec le dos d'une cuillère — un morceau parfait de carnitas semble croquant mais donne: comme tapoter un crouton bien fait qui a encore un intérieur doux. Le saindoux doit sentir la noix et doux, jamais acride."
    },
    {
      "nodeId": "step_4",
      "action": "Repos & déchiqueté",
      "inputs": [
        "crisped_carnitas"
      ],
      "outputState": "finished_pork_carnitas",
      "instructions": "Transférer les carnitas sur une grande planche à découper et laisser reposer 5 minutes. Le repos est important — la chaleur résiduelle finit tout l'intérieur rose restant, et la croûte se met plutôt que de revenir à la vapeur douce. À l'aide de deux fourchettes ou de vos doigts, tirez et coupez chaque pièce dans un mélange de gros brins croustillants et de lambeaux tendres. Faites revenir une cuillère à soupe du saindoux chaud réservé sur le dessus pour les brillancer. Goûtez et assaisonnez avec une pincée de sel feuilleté et une touche de citron vert frais. Servir immédiatement sur les tortillas chaudes de maïs avec l'oignon blanc, la coriandre, le citron vert et votre salsa de choix.",
      "visualCue": {
        "primaryTarget": "Un enchevêtrement texturé et texturé de shards dorés-mahogany et de lambeaux juteux, léché de gras rendu, ressemblant à la meilleure chose sur n'importe quel menu taco.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La plupart des lambeaux doux, peu de bords croustillants, pâles et un peu gras plutôt que caramélisés.",
            "action": "Retourner à la graisse chaude pendant 2 à 3 minutes avant de déchiqueter."
          },
          {
            "state": "Perfect",
            "description": "Textures mélangées à travers : bords croustillants et acajous contrasté avec des lambeaux juteux et tendres; sucrés avec une note de dos d'agrumes.",
            "action": "Pilez dans des tortillas chaudes et servez à la fois — carnitas sont les meilleurs dans les 15 premières minutes."
          },
          {
            "state": "Overdone",
            "description": "Sécher et mijoter sans intérieur juteux; tomber à la poussière plutôt que de se déchirer en fibres.",
            "action": "Mélanger avec un jet de jus d'orange et une cuillère de saindoux chaud pour raviver un peu d'humidité et de brillant."
          }
        ]
      },
      "feelCue": "Les carnitas finis devraient se sentir riches mais propres — la graisse recouvrant vos doigts mais ne laissant pas une graisse lourde. Chaque morsure doit donner à la fois la touche d'une croûte et le confort de la viande brasée : que la dualité est le point entier."
    }
  ]
};
