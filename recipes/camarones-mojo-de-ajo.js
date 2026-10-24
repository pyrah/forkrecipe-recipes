export default {
  "repoId": "master_mexican_camarones_mojo_de_ajo_001",
  "parentRepoId": null,
  "slug": "camarones-mojo-de-ajo",
  "author": "ForkRecipe Kitchen",
  "title": "Camarones al Mojo de Ajo",
  "description": "Jumbo crevettes blister dans une quantité obscène d'ail lentement grillé, beurre, citron vert, et une touche de guajillo — le genre de plat pour lequel vous frottez l'assiette.",
  "cuisine": "Mexicain",
  "culture": "Côte de Veracruz",
  "category": "seafood",
  "tags": [
    "crevettes",
    "Mexique",
    "Ail",
    "beurre",
    "Produits de la mer"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 0,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Crevettes jumbo, si possible tête-à-tête (déveinées, coquilles sur ou en dehors)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Grandes crevettes (U15)",
        "Langostines"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Girofles à l'ail (finement tranchés, 12-15 girofles minimum)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile neutre ou huile d'olive légère",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Guajillo chili (séché, ensemencé, coupé en bandes ou émietté)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Le chili ancho",
        "1 c. à thé de paprika fumé"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Jus de chaux frais",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Coriandre et quartiers de chaux frais (pour servir)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuse",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "mojo_de_ajo",
      "instructions": "Dans une grande poêle à feu moyen-doux, mélanger le beurre et l'huile. Ajouter toutes les tranches d'ail et les bandes de guajillo à la fois. Cuire en remuant doucement toutes les minutes, pendant 8-12 minutes jusqu'à ce que chaque tranche d'ail ait changé de couleur profonde, même dorée — pas bronzée, pas brune. Le but est un or ambré profond qui sent la douceur caramélisée, pas l'amertume. L'huile tournera une couleur ambre chaude du guajillo. C'est le mojo de ajo et c'est l'âme du plat — ne le précipitez pas.",
      "visualCue": {
        "primaryTarget": "Les tranches d'ail sont un or jaune-ambre, la couleur des noisettes grillées, sans taches blanches et sans bords bruns. L'huile autour d'eux est rouille-orange du guajillo.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est d'or pâle et translucide; il sent toujours cru et vif. Le pétrole est encore dégagé.",
            "action": "Réduire la chaleur si la coloration de l'ail est trop rapide sur les bords; continuer bas et lent jusqu'à ce que chaque tranche atteint l'or profond."
          },
          {
            "state": "Perfect",
            "description": "Chaque tranche est un ambre caramel, croustillant aux bords et doux au centre. Ça sent très doux et noisette, pas de netteté du tout. L'huile est très orange. Une seule tranche mangée sur l'extrémité d'un doigt a un goût doux, complexe, pas amer.",
            "action": "Augmenter la chaleur et ajouter les crevettes."
          },
          {
            "state": "Overdone",
            "description": "Les tranches d'ail sont brun foncé à noir; l'odeur est passée de douce à amère et acride.",
            "action": "Si la plupart des tranches sont brûlées, jeter et recommencer — il n'y a pas de récupération d'ail amer. Si seulement certains sont brûlés, retirez les plus sombres et procédez."
          }
        ]
      },
      "feelCue": "Le mojo de ajo, bien fait, remplit la cuisine d'un parfum d'ail chaud, doux et presque sucré — rien de vif ou cru, juste une douceur d'allium caramélisée profonde."
    },
    {
      "nodeId": "step_2",
      "action": "Sear",
      "inputs": [
        "ing_01",
        "mojo_de_ajo",
        "ing_07"
      ],
      "outputState": "seared_shrimp",
      "instructions": "Assaisonner généreusement les crevettes de sel. Augmentez la chaleur à haute intensité. Ajouter les crevettes dans la poêle en une seule couche — ne pas fouler. Semer sans bouger pendant 90 secondes jusqu'à ce que le bord inférieur devienne rose et que la coquille (si elle est allumée) commence à s'ombrager. Dépliez chaque crevette et faites cuire 60 à 90 secondes de plus jusqu'à ce que le deuxième côté soit rose et que les crevettes se bouclent en forme de C. Ne pas trop cuire — les crevettes vont de parfait à caoutchouteux en 30 secondes.",
      "visualCue": {
        "primaryTarget": "Les crevettes sont rose-orange de tous les côtés avec des marques d'omble où elles reposaient sur la poêle. Ils forment une forme C lâche, et non un O serré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crevettes sont gris translucide au centre lorsqu'elles sont pressées; elles se sentent douces et donnent trop facilement.",
            "action": "Flip et cuire 30-60 secondes de plus ; regarder le centre gris translucide disparaître."
          },
          {
            "state": "Perfect",
            "description": "Pink-orange tout le chemin à travers; une forme C lâche; la chair ressort fermement lorsqu'elle est pressée mais n'est pas rigide. La graisse autour de la tête (le cas échéant) est riche en orange et parfumée. Des odeurs d'ail caramélisé doux et la mer.",
            "action": "Déglacer immédiatement avec du jus de lime et ajouter le beurre final."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes se sont enroulées dans un O serré — elles sont caoutchouteuses et durs. Les bords sont passés du rose au blanc et opaques.",
            "action": "Pas de rétablissement. Ajouter immédiatement la chaux et le beurre pour arrêter la cuisson et servir rapidement."
          }
        ]
      },
      "feelCue": "Une crevette parfaitement cuite pressée délicatement entre le pouce et l'index donne avec une légère résistance et ressort, comme presser le tampon d'un doigt. Crevettes surcuites se sentent rigides et ressortent dur comme du caoutchouc."
    },
    {
      "nodeId": "step_3",
      "action": "Monter",
      "inputs": [
        "seared_shrimp",
        "ing_06",
        "ing_03",
        "ing_08"
      ],
      "outputState": "finished_camarones_mojo_de_ajo",
      "instructions": "Avec la poêle encore à feu vif, pressez le jus de lime directement sur les crevettes — il crache et vapeur instantanément. Ajoutez un petit bouton final de beurre froid et faites tourner la poêle constamment pendant 30-45 secondes jusqu'à ce que le beurre s'émulsionne dans les jus de poêle, créant une sauce brillante et cohésive plutôt qu'une huile séparée. Retirer du feu et disperser la coriandre sur le dessus. Servir immédiatement avec des tortillas chaudes et plus de chaux.",
      "visualCue": {
        "primaryTarget": "La sauce à la casserole est émulsifiée et brillante, un liquide or-orange unifié qui enrobe les crevettes, et non pas le beurre séparé et l'huile mise en commun sur les côtés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce à la poêle est séparée — lèche-huile à la surface avec du jus de lime aqueux en dessous. Le beurre a été ajouté pendant que la poêle était hors de la chaleur.",
            "action": "Retourner à feu moyen et tourner vigoureusement pendant 30 secondes; le beurre froid a besoin de chaleur et d'agitation pour émulsifier."
          },
          {
            "state": "Perfect",
            "description": "sauce à la poêle épaisse, brillante et émulsifiée — or profond du beurre et du guajillo. Enveloppe l'arrière d'une cuillère. Sensation puissante d'ail doux, d'agrumes et de beurre riche. La sauce s'accroche aux crevettes.",
            "action": "Assiette immédiatement — cette sauce se casse si elle est assise."
          },
          {
            "state": "Overdone",
            "description": "Le beurre s'est séparé de la chaleur; une sauce grasse et cassée avec des piscines de graisse claire.",
            "action": "Retirer du feu, ajouter 1 c. à soupe d'eau froide et faire tourner vigoureusement le feu pour le réémulsionner."
          }
        ]
      },
      "feelCue": "La sauce mojo de ajo bien montée a un poids de revêtement soyeux sur la cuillère — elle coule lentement et laisse un film visible sur la poêle plutôt que de s'enfuir."
    }
  ]
};
