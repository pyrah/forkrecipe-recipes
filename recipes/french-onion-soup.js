export default {
  "repoId": "master_french_french_onion_soup_001",
  "parentRepoId": null,
  "slug": "french-onion-soup",
  "author": "ForkRecipe Kitchen",
  "title": "Soupe à l'oignon française",
  "description": "Une heure de caramélisation patiente transforme les oignons crus en un bouillon acajou-doux, profondément salé qui remplit une croûte au bord, puis les croûtons drapés de Gruyère sont fondus sous le gril jusqu'à ce que le fromage tire en longs fils dorés à la table.",
  "cuisine": "Français",
  "culture": "Parisien",
  "category": "stocks",
  "tags": [
    "français",
    "oignon",
    "Soupe",
    "gruyère",
    "caramélisé"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 3105,
  "forks": 287,
  "contributors": 33,
  "license": "CC-BY-SA",
  "createdAt": "2024-11-05",
  "updatedAt": "2026-02-18",
  "flavorRadar": {
    "sweet": 3,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Allium",
      "name": "Oignons jaunes, tranchés finement (environ 5 grands)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "oignons blancs",
        "un mélange d'oignons jaunes et rouges"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre et huile d'olive non salés (parties égales)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Vin blanc sec ou sherry sec",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "Vermouth sec"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Boeuf (bonne qualité, idéalement fait maison)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "bouillon de poulet (coloration plus légère/arôme)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "tranches de baguette, 2 cm d'épaisseur, grillées à sec",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "n'importe quel pain croustillant, étêté toute la nuit"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Gruyère, généreusement râpée",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "Comté",
        "Emmental",
        "un mélange des deux"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel, poivre noir, pincée de thym et feuille de laurier",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Caraméliser",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_07"
      ],
      "outputState": "caramelized_onions",
      "instructions": "Faire fondre le beurre avec l'huile d'olive dans un grand pot lourd à feu moyen. Ajouter tous les oignons avec une pincée de sel, de thym et de laurier. Cuire de 45 à 60 minutes à feu moyen à moyen-doux, en remuant toutes les 5 à 10 minutes et en grattant n'importe quel fond. Résistez à l'envie d'élever la chaleur, car la vraie caramélisation ne peut être précipitée. Les oignons passeront par de nombreuses étapes : d'abord adoucissant, puis doré, puis lentement approfondissant en acajou.",
      "visualCue": {
        "primaryTarget": "Profondément acajou-oignons brun, s'est effondré à une fraction de leur volume original, sentant intensément sucré et salé. Le fond de la casserole a un fond brun riche et collant qui sent le sucre rôti.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont dorés mais pas brun foncé. Ils sentent doux, mais encore un peu oignon-brillant. Le volume est encore relativement élevé — environ la moitié en baisse.",
            "action": "Continuez à cuisiner. La véritable profondeur de la soupe à l'oignon français provient de la caramélisation bien sombre — l'or ne suffit pas."
          },
          {
            "state": "Perfect",
            "description": "Dark acajou-brun, s'est effondré à environ un cinquième du volume original. L'odeur est profondément douce, complexe et salée. Le fond du pot est très sombre et collant.",
            "action": "Augmenter la chaleur, ajouter du vin et déglacer."
          },
          {
            "state": "Overdone",
            "description": "Presque noir, très petit volume. Un bord amer, légèrement brûlé à l'odeur douce. Certains brins ont pu être croustillés contre le pot.",
            "action": "Déglacer immédiatement avec du vin. Une légère surcaramélisation ajoute en fait de la complexité, mais risque plus longtemps une véritable amertume."
          }
        ]
      },
      "feelCue": "Un brin d'oignon entièrement caramélisé pressé entre les doigts doit se dissoudre immédiatement, sans aucune résistance, comme presser de la soie chaude et humide entre les doigts."
    },
    {
      "nodeId": "step_2",
      "action": "Déglacer",
      "inputs": [
        "caramelized_onions",
        "ing_03"
      ],
      "outputState": "deglazed_onions",
      "instructions": "Élevez la chaleur. Verser le vin blanc ou le sherry et racler vigoureusement le fond du pot — tout ce fond sombre doit se dissoudre dans le liquide. Faire bouillir pendant 3-4 minutes jusqu'à ce que le vin ait diminué de deux tiers et que l'odeur d'alcool soit complètement disparue. Les oignons absorberont une grande partie du vin et le mélange sera dense et confitureux.",
      "visualCue": {
        "primaryTarget": "Le vin a été absorbé ou réduit presque complètement. Les oignons sont recouverts d'une glaçure sombre et brillante. Le fond du pot est complètement propre et le mélange sent doux, salé et légèrement tanné.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le vin est encore liquide dans la poêle. L'odeur d'alcool est forte. Le fond est à peine levé du fond du pot.",
            "action": "Faire bouillir plus fort et gratter plus vigoureusement. L'alcool cru dans la base de soupe aura un goût dur."
          },
          {
            "state": "Perfect",
            "description": "Pas de restes de liquide debout — le vin a réduit en une glaçure enrobant les oignons. Le fond du pot est propre. L'odeur est douce et arrondie.",
            "action": "Ajouter le stock et laisser mijoter."
          },
          {
            "state": "Overdone",
            "description": "Les oignons se collent et commencent à brûler à nouveau. La glaçure est très épaisse et l'odeur est forte.",
            "action": "Ajouter le stock immédiatement. Une petite brûlure à ce stade est bonne — elle ajoute de la profondeur."
          }
        ]
      },
      "feelCue": "Les oignons déglacés remués à l'aide d'une cuillère devraient s'éloigner du fond du pot en une seule masse lourde, collante et dense, comme en remuant la confiture foncée, sans éclabousser comme du liquide."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "deglazed_onions",
        "ing_04"
      ],
      "outputState": "onion_soup",
      "instructions": "Ajouter le bouillon de bœuf chaud et bien remuer, en grattant tout fond restant des côtés du pot. Porter à mijoter et cuire à découvert pendant 20 à 25 minutes jusqu'à ce que le bouillon ait pris une couleur acajou profonde des oignons et se soit légèrement concentré. Goûter et assaisonner avec du sel et du poivre noir. La soupe doit avoir un goût riche et complexe – profondément sucré des oignons, salé du stock et légèrement amer aux bords.",
      "visualCue": {
        "primaryTarget": "Un bouillon brun acajou foncé avec des fils d'oignons dissouts et mous. La surface mijote avec un mince film de graisse. La couleur est riche et profonde.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le papillon est pâle et mince. La saveur d'oignon n'est pas encore complètement intégrée. La soupe a un goût séparé de stock et d'oignons plutôt qu'un goût unifié.",
            "action": "Continuez à mijoter. Le mijot de 20 minutes est nécessaire pour que la douceur de l'oignon se marie pleinement avec le stock."
          },
          {
            "state": "Perfect",
            "description": "Bouillon acajou profond qui a un goût cohésif et complexe. Douce, salée, et profondément umami. Les fils d'oignon sont doux et à peine visibles. Louche enveloppe la cuillère.",
            "action": "Ajouter les croûtons et le fromage."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon a diminué de façon significative et est devenu très salé et intensément concentré. Les fils d'oignon sont très peu nombreux et presque dissous.",
            "action": "Ajouter une éclaboussure d'eau ou un stock supplémentaire pour ajuster la consistance et le goût à nouveau pour l'assaisonnement."
          }
        ]
      },
      "feelCue": "Goûtez une cuillerée — la soupe devrait envelopper votre langue d'une longue douceur chaude suivie d'une finale savoureuse profonde et d'une légère amertume agréable au fond du palais."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "onion_soup",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_french_onion_soup",
      "instructions": "Préchauffer le poulet à haute température. Placer la soupe dans des crevettes sans danger au four, remplir à environ 1 cm du dessus. Placez une ou deux tranches de baguette grillées sur le dessus — elles doivent s'asseoir à la surface de la soupe, et non pas couler. Gruyère râpé pile généreusement sur le pain et laisser surplomber le bord de la roche. Monter sur une plaque de cuisson et faire griller pendant 3 à 5 minutes jusqu'à ce que le fromage soit profondément doré, bouillonnant et a développé des taches caramélisées foncées.",
      "visualCue": {
        "primaryTarget": "Une couche bombée de Gruyère doré-brun couvrant toute l'ouverture de la roche, avec des taches d'ambre foncées et des bords légèrement croustillants où le fromage a touché le bord de la roche chaude.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le fromage est fondu mais encore pâle et caoutchouteux. Pas de brunissement ou de bouillonnement. Le croûton est encore visible par le fromage.",
            "action": "Continuez à faire griller. La transformation de la saveur et de la texture de Gruyère se produit quand elle commence à brunir."
          },
          {
            "state": "Perfect",
            "description": "Dôme doré-brun avec des taches sombres. Le fromage est croustillant là où il touche le bord de la roche. Le levage de la roche révèle de longs fils de fromage ropy tirant vers la table.",
            "action": "Transférer dans une assiette et servir immédiatement. Préviens que la croûte est extrêmement chaude."
          },
          {
            "state": "Overdone",
            "description": "Le fromage est uniformément brun foncé ou noir. La fumée monte de la plaque de cuisson. Le fromage a un goût amer et acride.",
            "action": "Supprimer immédiatement. Gratter la couche supérieure noircie — la couche inférieure est probablement encore bonne et fondue."
          }
        ]
      },
      "feelCue": "La soupe finie dans sa croûte devrait rayonner de chaleur que vous sentez sur le dos de votre main à partir de 30 cm de distance — la vaisselle conserve la chaleur si intensément qu'elle continue à cuire le fromage après avoir quitté le poulet."
    }
  ]
};
