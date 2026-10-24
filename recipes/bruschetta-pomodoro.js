export default {
  "repoId": "master_italian_bruschetta_pomodoro_001",
  "parentRepoId": null,
  "slug": "bruschetta-pomodoro",
  "author": "ForkRecipe Kitchen",
  "title": "Bruschetta al Pomodoro",
  "description": "Le pain grillé frotté avec de l'ail cru, empilé de tomates mûres macérées avec du basilic et de l'huile d'olive — le test le plus vrai de vos tomates et de votre huile d'olive, ne nécessitant rien d'améliorer non plus.",
  "cuisine": "Italien",
  "culture": "Roman / Italien central",
  "category": "condiments",
  "tags": [
    "tomates",
    "pain",
    "Italien",
    "antipasto",
    "été"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 3,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Soudough ou ciabatta (collé 2 cm d'épaisseur)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Pain non salé toscan",
        "baguette"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Base",
      "name": "Tomates très mûres (San Marzano, Roma ou mûre de vigne)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates cerises, coupées en deux",
        "tomates héritières"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles à l'ail (chaudées, brutes, pour frotter)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive extra vierge (meilleure qualité)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Feuilles de basilic fraîches (tornées, non coupées)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel de mer blanc (Maldon ou sicilien)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Vin rouge (en option, quelques gouttes seulement)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire mariner",
      "inputs": [
        "ing_02",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "macerated_tomatoes",
      "instructions": "Noyez les tomates et écrasez ou désez à la main environ en morceaux de 1 à 2 cm — laissez les graines et le jus s'ils sentent bon; jetez le liquide aqueux si les tomates sont très grandes. Mélanger dans un bol avec le basilic déchiré, une pincée généreuse de sel flocé, l'huile d'olive et les gouttes optionnelles de vinaigre de vin rouge. Jeter doucement et laisser macérer à température ambiante pendant exactement 10-15 minutes — pas plus. Le sel tire le jus des tomates pour former une vinaigrette légère et émulsifiée; trop longue et les tomates deviennent waterlogged.",
      "visualCue": {
        "primaryTarget": "Morceaux de tomates brillants à l'huile d'olive; jus rose-rouge poêlé dans le fond du bol; basilic vert vif et commençant à s'assombrir très légèrement aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Aucun liquide n'a été mis en commun; les tomates sont sèches et le basilic n'a pas flétri du tout; les saveurs ne sont pas encore mariées.",
            "action": "Attendez encore 5 minutes; ne sautez pas le temps de macération."
          },
          {
            "state": "Perfect",
            "description": "Quelques cuillères à soupe de liquide d'huile d'olive de tomate dans le bol; les tomates ont l'air juteuses et brillantes; le basilic est vif mais à peine adouci; l'odeur est douce, acide et herbacée.",
            "action": "Faire griller le pain immédiatement et assembler."
          },
          {
            "state": "Overdone",
            "description": "Les tomates ont libéré un liquide excessif et ont l'air déchiquetées; le basilic est sombre et mou; l'acidité est nette.",
            "action": "Égoutter une partie de l'excès de liquide mais pas la totalité — un peu de jus est essentiel pour que le toast absorbe."
          }
        ]
      },
      "feelCue": "Soulevez un morceau de tomate macérée — il doit se sentir légèrement plus lourd que la tomate crue, donnant aux bords, et laisser une léchée d'huile d'olive parfumée et de jus sur vos doigts."
    },
    {
      "nodeId": "step_2",
      "action": "Griller",
      "inputs": [
        "ing_01"
      ],
      "outputState": "toasted_bread",
      "instructions": "Faire griller les tranches de pain sur une grille à feu vif, ou sous une grille chaude, ou directement sur les braises d'un feu de bois si disponible — l'omble est le point. Cuire de 1 à 2 minutes de chaque côté jusqu'à ce qu'il soit profondément doré-brun avec des marques claires et une texture dure et croustillante. L'extérieur devrait être presque croquant; l'intérieur a encore une petite mâche. Retirer du feu et frotter immédiatement la face coupée d'une gousse d'ail sur la surface rugueuse et grillée — frotter une fois fermement. L'ail se râpe contre la texture rugueuse; frotter seulement une fois par tranche ou il devient trop puissant.",
      "visualCue": {
        "primaryTarget": "Toast doré-brun profond avec des marques de grill clair et foncé; dur et croustillant quand tapoté; surface visiblement rugueuse du feu, prête à attraper l'ail.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle, encore doux au centre; la surface n'est pas encore rugueuse et grillée.",
            "action": "Retourner au grill pour une minute de plus; le brunchetta a besoin d'un toast ferme et croustillant qui peut tenir la tomate sans se faire bousculer immédiatement."
          },
          {
            "state": "Perfect",
            "description": "D'or profond, presque carbonisé sur les crêtes; craque proprement s'il est cassé; la surface est rugueuse et légèrement gribouillée par le toast.",
            "action": "Ajouter immédiatement l'ail au chaud et garnir de tomates."
          },
          {
            "state": "Overdone",
            "description": "Marques de grill noir couvrant la plus grande partie de la surface; goût d'omble amer à travers.",
            "action": "Frapper les morceaux les plus noirs légèrement avec un couteau; un peu d'omble est authentique, beaucoup ne l'est pas."
          }
        ]
      },
      "feelCue": "Le pain bruschetta parfaitement grillé devrait se sentir rigide et léger dans votre main — s'il fléchit ou se sent dense, il a besoin de plus de temps sur le grill."
    },
    {
      "nodeId": "step_3",
      "action": "Assembler",
      "inputs": [
        "toasted_bread",
        "ing_03",
        "macerated_tomatoes"
      ],
      "outputState": "finished_bruschetta",
      "instructions": "Frottez le toast chaud avec la face coupée d'une gousse d'ail à l'aide d'une seule fois. Déposer généreusement les tomates macérées sur chaque tranche, y compris l'huile d'olive mise en commun et les jus de tomate du bol. Le pain doit être chargé: les Italiens ne font pas de bruschetta dainty. Terminer avec une autre bruine d'huile d'olive extra vierge brute et une pincée supplémentaire de sel flocé. Mangez immédiatement — dans les 2-3 minutes suivant l'assemblage. Bruschetta n'attend personne : après 5 minutes, le toast s'adoucit et le plat est perdu.",
      "visualCue": {
        "primaryTarget": "Tomates empilées généreusement sur des toasts dorés; jus de rose-rouge qui commencent à tremper dans la croûte du pain; huile d'olive scintillement; basilic vert vif contre le rouge.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tomates placées parcimonieusement; toast encore à l'air sec; pas de trempage de jus; ail non frotté.",
            "action": "Ajouter plus de tomates et leur jus; appliquer le frotter d'ail si ce n'est pas fait."
          },
          {
            "state": "Perfect",
            "description": "Charge de tomates; les bords du toast commencent à absorber le jus tandis que le centre reste croquant; l'huile d'olive brille; la première bouchée donne une croûte suivie d'une explosion de tomates douces et acides.",
            "action": "Mangez immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le toast s'est complètement adouci à partir du jus de tomate; le pain est soyeux et s'effondre lorsqu'il est soulevé.",
            "action": "Il s'agit d'une panne de temps — se réunir sur un toast frais. Les tomates sont toujours bonnes."
          }
        ]
      },
      "feelCue": "La première bouchée d'un bruschetta parfait délivre un crunch audible suivi instantanément par la vague froide et sucrée de tomates et d'huile d'olive.Le contraste entre toast chaud et fruits à température ambiante est le plat entier."
    }
  ]
};
