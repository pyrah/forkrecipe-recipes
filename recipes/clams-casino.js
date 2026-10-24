export default {
  "repoId": "master_american_clams_casino_001",
  "parentRepoId": null,
  "slug": "clams-casino",
  "author": "ForkRecipe Kitchen",
  "title": "Clams Casino",
  "description": "Le bar le plus fier de Rhode Island : les palourdes à petit cou à moitié coquillées et chargées d'un mélange fumé de bacon, de poivre sucré et de beurre, puis grillées jusqu'à ce que les bulles de liqueur de palourde et les bords de bacon croquant à une croûte sombre et salée.",
  "cuisine": "Américain",
  "culture": "Île Rhode",
  "category": "seafood",
  "tags": [
    "Palourdes",
    "casino",
    "américains",
    "Apéritif",
    "cuits",
    "bacon",
    "Produits de la mer",
    "rhode île"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 5,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Palourdes à petit cou (24 palourdes)",
      "ratioValue": 24,
      "defaultUnit": "whole",
      "substitutions": [
        "Palourdes de cerise (réduire de moitié la quantité)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Inosinate",
      "name": "Bacon épais coupé, finement coupé en dés",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Pancetta",
        "lardons"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "poivron vert, finement coupé en dés",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": [
        "poivron rouge",
        "poblano"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Échalotes hachées",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon blanc"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé, ramolli",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "flocons de poivre rouge concassé",
      "ratioValue": 1,
      "defaultUnit": "pinch",
      "substitutions": [
        "cayenne"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Coins de citron",
      "ratioValue": 4,
      "defaultUnit": "wedges",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire revenir",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "casino_stuffing",
      "instructions": "Dans une poêle à feu moyen, faire cuire le bacon en dés jusqu'à ce que la graisse se soit fondue et que les bords commencent à croquer — environ 5 minutes. Ne pas cuire à la croustillante; il finira sous la grille. Ajouter le poivre en dés et les échalotes et cuire encore 3 minutes jusqu'à ramollir. Retirer du feu. Incorporer le beurre adouci et les flocons de poivre rouge. Le mélange aura l'air lâche et gras — correct.",
      "visualCue": {
        "primaryTarget": "Un mélange de lard semi-cuit, de poivre vert doux et d'échalote translucide de couleur russé brillant, lié dans une glaçure de beurre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bacon est encore pâle et fragile. Les échalotes sont crues et pointues. Pas de graisse.",
            "action": "Continuer la cuisson à feu moyen: la graisse du bacon est le moyen de cuisson des légumes."
          },
          {
            "state": "Perfect",
            "description": "Le bacon est légèrement doré aux bords, mais toujours souple. Poivre et échalote sont complètement doux et doux. Mélanger les odeurs de porc caramélisé et de poivre sucré.",
            "action": "Retirer du feu et mélanger le beurre."
          },
          {
            "state": "Overdone",
            "description": "Le bacon est entièrement croustillant et le poivre et l'échalote brunissent aux bords.",
            "action": "Retirer immédiatement du feu — ils cuireont à nouveau sous la grille."
          }
        ]
      },
      "feelCue": "La farce devrait se sentir lâche et légèrement grasse lorsque vous appuyez sur une cuillère à travers elle — elle doit rester suffisamment humide pour abaisser la palourde pendant qu'elle grille."
    },
    {
      "nodeId": "step_2",
      "action": "Peler",
      "inputs": [
        "ing_01"
      ],
      "outputState": "shucked_clams",
      "instructions": "Frotter les palourdes sous l'eau froide pour enlever le grain. Coupez chaque palourde : maintenez-la dans une serviette pliée, insérez un couteau d'huître ou de palourde à la charnière, tournez pour sauter, puis glissez le couteau le long de la coquille supérieure pour couper le muscle. Jetez la coque supérieure. Couper le muscle adducteur du bas pour desserrer la palourde dans la coquille, mais laisser reposer dans la coquille du bas en coupe. Réserve toute la liqueur de palourde qui coule dans la coquille.",
      "visualCue": {
        "primaryTarget": "Clams assis entier dans la coquille inférieure, entouré d'une petite piscine de liqueur claire et salée. Les coquilles sont planes et intactes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Clam est toujours attaché à la coquille inférieure par le muscle. Il rétrécira et s'attachera pendant le gril.",
            "action": "Exécutez le couteau sous le corps de la palourde et coupez le lien avec la coquille."
          },
          {
            "state": "Perfect",
            "description": "Clam est assis libre dans la coquille, il brille dans sa liqueur. Les bords sont intacts, pas déchirés.",
            "action": "Placez-vous sur un plateau de grille-croûte doublé d'une feuille et garnissez-vous de farce."
          },
          {
            "state": "Overdone",
            "description": "La liqueur de clam a été perdue ou renversée. Shell a craqué.",
            "action": "Ajouter une petite éclaboussure de vin blanc pour remplacer la liqueur perdue avant de farcir."
          }
        ]
      },
      "feelCue": "Une palourde bien secouée devrait glisser légèrement dans sa coquille quand vous l'inclinez — lâche, non collée, assise dans une petite flaque de sa propre saumure."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "shucked_clams",
        "casino_stuffing",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_clams_casino",
      "instructions": "Préchauffer le poulet à haute température. Arrangez les palourdes sur une plaque de cuisson doublée de feuilles de papier; écrasez la feuille en crêtes pour maintenir le niveau des coquilles. Déposez une généreuse cuillère à café du casino farcissant sur chaque palourde, la tondant légèrement. Faire griller de 4 à 6 pouces de l'élément chauffant pendant 4 à 6 minutes, jusqu'à ce que les bords de la palourde se bouclent, que les bulles de liqueur et le bacon sur le dessus soient profondément dorés et commencent simplement à croquer aux bords. Veillez constamment — les poulets à griller varient sauvagement.",
      "visualCue": {
        "primaryTarget": "Les bords de clams se sont enroulés vers l'intérieur. La farce sur le dessus est dorée-brun avec des bords foncés et croustillants de bacon. Chaque coquille contient une petite piscine de liqueur de palourde crémeuse et bouillonnante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les clams sont encore plats et bruts. La farce est chaude mais pas dorée. L'alcool est froid.",
            "action": "Déplacez le plateau plus près de l'élément grilleur et donnez encore 2 minutes."
          },
          {
            "state": "Perfect",
            "description": "Les bords de clam sont enroulés, légèrement raffermis. Les bords du bacon sont croustillants. L'alcool bouillonne. Tout ça sent la mer et le porc fumé.",
            "action": "Servir immédiatement avec des quartiers de citron."
          },
          {
            "state": "Overdone",
            "description": "Les bords du clam se sont complètement rétractés et la viande est réduite, caoutchouteuse et sèche. Bacon est noir.",
            "action": "Servir de toute façon — une pression de citron et un peu de beurre de la garniture restaureront une certaine humidité."
          }
        ]
      },
      "feelCue": "Regardez le bord de la palourde plutôt que l'horloge : au moment où le bord extérieur se recroquevèle comme le bord d'un petit chapeau, la palourde est faite. Chaque seconde après, c'est trop cuit."
    }
  ]
};
