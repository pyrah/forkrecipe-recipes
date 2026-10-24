export default {
  "repoId": "master_french_brown-butter_001",
  "parentRepoId": null,
  "slug": "brown-butter",
  "author": "ForkRecipe Kitchen",
  "title": "Beurre brun (Beurre Noisette)",
  "description": "La transformation de la noix, grillée, du beurre ordinaire — les solides de lait font cuire au-delà du point de mousse et s'installent dans les sédiments brun noisette tandis que la graisse devient un or profond, tout ce qui sent sans équivoque les noisettes grillées et le caramel.",
  "cuisine": "Français",
  "culture": "Français",
  "category": "condiments",
  "tags": [
    "français",
    "beurre",
    "Noix",
    "condiment",
    "sauce-base",
    "Vite"
  ],
  "difficulty": 2,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "beurre salé (comprimer tout sel ajouté)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Jus de citron frais (facultatif, pour l'arrêt)",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel de mer aplati (finition facultative)",
      "ratioValue": 0.5,
      "defaultUnit": "g",
      "substitutions": [
        "sel de mer fin"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire fondre",
      "inputs": [
        "ing_01"
      ],
      "outputState": "melted_foaming_butter",
      "instructions": "Coupez le beurre en cubes et placez-le dans une casserole en acier inoxydable ou émail de couleur claire – jamais une poêle sombre, car vous devez voir clairement la couleur des solides de lait. Régler à feu moyen. Au fur et à mesure que le beurre fond, il commence à mousser vigoureusement : c'est de l'eau bouillante. Tourner doucement la poêle toutes les 30 secondes au lieu de remuer, ce qui peut empêcher le brunissement. La mousse s'élèvera légèrement, puis reprendra dans une deuxième mousse.Cette deuxième mousse est le signal que l'eau est presque partie et que le brunissement est sur le point de commencer. Regardez attentivement la casserole dès maintenant.",
      "visualCue": {
        "primaryTarget": "Beurre entièrement fondu, mousser régulièrement dans une seule couche vigoureuse. Le liquide sous la mousse est clair jaune-or, pas encore brun. Un léger parfum de noix commence à peine à émerger.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre n'est que partiellement fondu, toujours avec des morceaux blancs. La mousse est mince et transparente.",
            "action": "Continuer le chauffage sur moyenne. Ne vous précipitez pas en soulevant la chaleur — une chaleur inégale fait brûler les bords avant que le centre brunisse."
          },
          {
            "state": "Perfect",
            "description": "Entièrement fondu, le beurre mousse vigoureusement avec une base en or clair ci-dessous. La mousse commence à diminuer légèrement, indiquant que l'eau est presque cuite.",
            "action": "Réduire très légèrement la chaleur et surveiller la deuxième mousse et l'apparence des sédiments bruns ci-dessous."
          },
          {
            "state": "Overdone",
            "description": "La mousse a complètement disparu et le beurre est déjà ambre profond — le brunissement s'est produit sous la mousse sans avertissement.",
            "action": "Vous pouvez encore être récupérable : retirer immédiatement de la chaleur, tourbillonner et verser dans un bol. Vérifiez l'amertume avant d'utiliser."
          }
        ]
      },
      "feelCue": "La poignée de la casserole doit être chaude mais confortable. Le bruit du beurre devrait passer d'un étourdissement fort et humide à un crépitement plus calme et plus sec — ce crépitement calme est l'eau presque disparue, votre signal de regarder de près."
    },
    {
      "nodeId": "step_2",
      "action": "Caraméliser",
      "inputs": [
        "melted_foaming_butter"
      ],
      "outputState": "browned_butter",
      "instructions": "Une fois que la deuxième mousse apparaît, inclinez la casserole et faites-la passer par la mousse au fond de la casserole : de petites taches dorées doivent se former sur le sol de la casserole — ce sont les solides de lait caramélisant. Courir constamment maintenant. La couleur passera de la crème au bronzage en quelques secondes. Au moment où les taches atteignent une couleur ambrée-hazelnut profonde et la cuisine se remplit de l'odeur incomparable des noisettes grillées, retirer la poêle de la chaleur. La chaleur de report continuera à cuire le beurre pendant 30 secondes hors du poêle.",
      "visualCue": {
        "primaryTarget": "La mousse s'est éclaircie pour révéler un liquide d'or ambré profond en dessous avec des taches brunes d'or foncées — bruitette — réparties uniformément sur le plancher de la casserole. L'arôme est incomparablement de noisettes grillées et de caramel.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les taches sont de couleur jaune pâle ou crème. Beurre sent le beurre cuit mais pas encore les noix. La saveur est douce et manque de complexité grillée.",
            "action": "Retourner à la chaleur et continuer à tourner. La transition vers la noisette parfaite se produit rapidement à partir de ce point."
          },
          {
            "state": "Perfect",
            "description": "Les mouches sont de couleur noisette, un brun-ambre chaud, pas brun foncé. Le liquide est en or profond. L'odeur est puissantement noisette, douce et légèrement caramélisée.",
            "action": "Verser immédiatement dans un bol froid pour arrêter la cuisson, ou ajouter le jus de citron directement dans la poêle pour l'arrêter."
          },
          {
            "state": "Overdone",
            "description": "Les mouches sont devenues brunes foncées et noires, le liquide est très foncé et l'odeur est passée de la noix à l'amère. Le beurre a traversé le beurre noir.",
            "action": "S'il sent amer et acride, jetez-le et recommencez. Si seulement légèrement sur, verser immédiatement et goûter — un lot légèrement sombre peut encore fonctionner dans des applications robustes comme la vinaigrette au beurre brun."
          }
        ]
      },
      "feelCue": "L'odeur est votre sens principal ici : le passage du « beurre cuit » aux « noisettes grillées » est soudain et indiscutable, comme au moment où un morceau de toast passe de pâle à dorée. Faites confiance à votre nez plus que vos yeux."
    },
    {
      "nodeId": "step_3",
      "action": "Terminer",
      "inputs": [
        "browned_butter",
        "ing_02",
        "ing_03"
      ],
      "outputState": "finished_brown_butter",
      "instructions": "Verser immédiatement le beurre brun dans un bol frais et résistant à la chaleur pour arrêter la cuisson — la poêle est encore très chaude et continuera à noircir les solides si vous les laissez dedans. Si vous utilisez comme sauce immédiatement, pressez dans le jus de citron maintenant; il arrête la cuisson instantanément et ajoute un ascenseur lumineux qui coupe la richesse. Assaisonner de sel si désiré. Le sédiment lait-solide brun est la partie la plus parfumée — ne pas l'extraire à moins que la recette exige spécifiquement du beurre brun clarifié. Utilisez immédiatement pendant que vous êtes chaud et fluide, ou laissez refroidir à une pâte dorée pour les applications de pâtisserie.",
      "visualCue": {
        "primaryTarget": "Un liquide ambre-or profond dans un bol frais, avec une couche de sédiment brun noisette grillé au fond. La surface mijote l'or et sent la plupart des noisettes grillées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Versé trop tôt — le beurre est doré mais les taches sont de couleur crème et l'arôme de noix est faible. C'est essentiellement du beurre clarifié.",
            "action": "Versez-le dans la poêle et continuez à cuire brièvement. Les solides de lait n'ont pas encore caramélisé."
          },
          {
            "state": "Perfect",
            "description": "Or profond, avec sédiments ambres, arômes de noix grillées et de caramel. Goûte à la noix, riche et légèrement sucré sans amertume.",
            "action": "Utiliser immédiatement ou refroidir et réfrigérer jusqu'à 2 semaines."
          },
          {
            "state": "Overdone",
            "description": "Très foncé avec des taches noires ; un bord amer et acride domine le parfum de noisette.",
            "action": "Si seulement légèrement amer, équilibrez avec le citron supplémentaire et utilisez en petites quantités. S'il est très amer, jetez - le beurre brûlé ruine les préparations délicates."
          }
        ]
      },
      "feelCue": "Plongez une cuillère et laissez tomber une goutte sur votre poignet: il doit sentir chaud mais pas violent, et l'arôme qui s'élève doit être toute la noisette et le caramel. Si vous sentez un soupçon de fumée ou de plastique, le beurre est allé trop loin."
    }
  ]
};
