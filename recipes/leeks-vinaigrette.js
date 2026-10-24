export default {
  "repoId": "master_french_leeks_vinaigrette_001",
  "parentRepoId": null,
  "slug": "leeks-vinaigrette",
  "author": "ForkRecipe Kitchen",
  "title": "Leeks Vinaigrette",
  "description": "Des poireaux braisés entiers, leurs couches ramollies à la soie, servis à la température ambiante sous une vinaigrette de Dijon tranchante qui se marie dans leurs anneaux de coupe transversale – un plat de brasserie d'élégance austère, le meilleur quand les poireaux sont à peine chauds et la vinaigrette est froide.",
  "cuisine": "Français",
  "culture": "Brasserie française",
  "category": "vegetables",
  "tags": [
    "poireaux",
    "français",
    "vinaigrette",
    "brasserie",
    "froid",
    "végétarien"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 4,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Alcools moyens, parties blanches et vert clair seulement",
      "ratioValue": 6,
      "defaultUnit": "leeks",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "Vinaigre de Champagne",
        "vinaigre de sherry"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Moutarde de Dijon",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "moutarde à grains entiers"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 5,
      "defaultUnit": "tbsp",
      "substitutions": [
        "Bonne huile de noix",
        "huile neutre pour un résultat plus doux"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Petite échalote finement hachée",
      "ratioValue": 1,
      "defaultUnit": "shallot",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Persil à feuilles plates, haché finement",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "estragon (plus d'anis)",
        "Cerveau"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Oeuf dur, haché finement (mimosa)",
      "ratioValue": 1,
      "defaultUnit": "egg",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Eau froide (pour la cuisson)",
      "ratioValue": 1,
      "defaultUnit": "pot",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanch",
      "inputs": [
        "ing_01",
        "ing_10",
        "ing_06"
      ],
      "outputState": "braised_leeks",
      "instructions": "Couper le bout des racines et les hauts de chaque poireau. Divisez chaque longueur du haut à moins de 2 cm de l'extrémité de la racine, les laissant attachés à la base. Éventail ouvert et laver sous l'eau froide courante pour enlever tout le grain entre les couches. Porter à ébullition un grand pot d'eau bien salée. Attachez les poireaux lâchement en couple avec la ficelle de cuisine pour les garder ensemble. Baissez-vous dans l'eau. Cuire à ébullition douce de 18 à 22 minutes jusqu'à ce qu'il soit complètement tendre.",
      "visualCue": {
        "primaryTarget": "Les poireaux se sont effondrés des cylindres rigides en faisceaux mous et productifs. La couche externe semble translucide et pâle. La section transversale présente des anneaux distincts de tissus soyeux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les poireaux résistent à une pointe de couteau au centre. Les couches blanches sont encore fermes et opaques. La texture est fibreuse quand mordue.",
            "action": "Retournez à l'eau. Les levains ont besoin d'une cuisson approfondie — même un centre légèrement sous-doré goûtera à la vinaigrette, forte et dure."
          },
          {
            "state": "Perfect",
            "description": "Une brochette ou un couteau à éparpiller glisse dans la partie la plus épaisse avec une résistance nulle. Tout le poireau est uniformément tendre — soyeux, presque écroulant. Les couches se séparent doucement lorsqu'elles sont pressées.",
            "action": "Soulever de l'eau et égoutter sur une serviette de cuisine pliée."
          },
          {
            "state": "Overdone",
            "description": "Les couches extérieures ont glissé entièrement et le poireau s'effondre. L'eau est très verte.",
            "action": "Égoutter immédiatement et manipuler doucement. Remonter sur la plaque — la saveur est intacte même si la structure n'est pas."
          }
        ]
      },
      "feelCue": "Soulevez un poireau d'une extrémité — il devrait tomber de façon spectaculaire sous son propre poids, comme une nouille humide. Toute rigidité nécessite plus de temps."
    },
    {
      "nodeId": "step_2",
      "action": "Frais",
      "inputs": [
        "braised_leeks"
      ],
      "outputState": "cooled_leeks",
      "instructions": "Poser les poireaux cuits sur une serviette de cuisine pliée ou une grille en une seule couche. Enlevez la ficelle. Laissez - les refroidir à la température ambiante — environ 20 minutes. Ne pas réfrigérer. Appuyez-les doucement pour extraire une partie de l'eau de cuisson, mais ne pressez pas assez fort pour endommager les couches.",
      "visualCue": {
        "primaryTarget": "Les poireaux sont à température ambiante, légèrement humides à la surface, avec leur forme cylindrique restaurée par égouttage. La coupe transversale montre des anneaux de jade concentriques.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les poireaux sont encore chauds. La vinaigrette va glisser et les saveurs ne vont pas se fondre.",
            "action": "Attendez — le contraste de la vinaigrette froide sur les poireaux à peine chauds est tout le point."
          },
          {
            "state": "Perfect",
            "description": "Juste à peine chaud au toucher — comme une main tenue sous l'eau tiède du robinet. Légèrement ferme à l'extérieur de l'évaporation de surface.",
            "action": "Disposer sur l'assiette et la robe."
          },
          {
            "state": "Overdone",
            "description": "Les poireaux sont complètement froids de s'asseoir dans un traiteur ou un réfrigérateur. Les huiles de la vinaigrette congeleront.",
            "action": "Chauffer brièvement au four à 150 °C pendant 5 minutes, ou habiller et servir à température ambiante."
          }
        ]
      },
      "feelCue": "Posez le dos de votre main contre un poireau — il devrait se sentir à peine au-dessus de la température du corps neutre, comme une joue chaude."
    },
    {
      "nodeId": "step_3",
      "action": "Émulsifier",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "dijon_vinaigrette",
      "instructions": "Dans un petit bol, mélanger l'échalote hachée, la moutarde de Dijon, le vinaigre, le sel et le poivre. Laisser reposer 5 minutes — le vinaigre adoucira la netteté de l'échalote brute. Puis fouetter constamment tout en bruissant dans l'huile d'olive dans un cours d'eau mince et stable pour former une émulsion stable. La vinaigrette doit être épaisse et crémeuse, non cassée ni grasse.",
      "visualCue": {
        "primaryTarget": "Une émulsion opaque et d'or pâle qui tient sa forme lorsque le bol est incliné — pas de réservoir d'huile se séparant au bord.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La vinaigrette est un liquide souple et huileux avec des gouttelettes d'huile encore visibles. Il se sépare dans le bol.",
            "action": "Ajouter une autre petite quantité de moutarde et fouetter à nouveau — la moutarde est l'émulsionneur et plus est nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, crémeux, or uniformément pâle. Bouche vif et lumineux avec une finale ronde et grasse. Il tient sa forme à la cuillère.",
            "action": "Goûtez et ajustez le sel et l'acide, puis cuillerez sur les poireaux."
          },
          {
            "state": "Overdone",
            "description": "La vinaigrette est trop épaisse — presque une pâte — de trop de moutarde.",
            "action": "fouetter dans une cuillère à café d'eau ou une touche supplémentaire de vinaigre pour l'éclaircir."
          }
        ]
      },
      "feelCue": "Passez un doigt dans la vinaigrette dans le bol — il devrait tenir la piste propre pendant plusieurs secondes avant de revenir lentement ensemble."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "cooled_leeks",
        "dijon_vinaigrette",
        "ing_08",
        "ing_09"
      ],
      "outputState": "finished_leeks_vinaigrette",
      "instructions": "Disposer les poireaux refroidis sur un plateau de service ou sur des assiettes individuelles. Déposer généreusement la vinaigrette au-dessus d'eux, en la laissant mettre dans les anneaux de section transversale. Dispersez le persil haché sur le dessus. Si vous incluez l'œuf mimosa, pressez l'œuf dur dans un tamis ou écrasez-le finement à la main sur les poireaux habillés. Servir à température ambiante.",
      "visualCue": {
        "primaryTarget": "Des rangées de poireaux vert jade croisés avec de la vinaigrette en or pâle, leurs anneaux concentriques remplis de pansement, éparpillés de persil vert vif et une chute de neige de mimosa d'œuf pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La vinaigrette n'est qu'à un seul endroit, l'assiette semble nue et sous-sauvée.",
            "action": "Spoon plus de vinaigrette — ce plat devrait être généreusement habillé, et non légèrement arrosé."
          },
          {
            "state": "Perfect",
            "description": "Chaque poireau est bien enrobé, la vinaigrette est mise dans les anneaux, la garniture est uniformément dispersée. L'assiette sent le vinaigre, Dijon et l'allium sucré.",
            "action": "Servir avec du pain croustillant pour éponger l'assiette."
          },
          {
            "state": "Overdone",
            "description": "Noyade dans la vinaigrette, qui a recueilli dans une flaque jaune à la base. Les herbes et les œufs se sont dissous dans la vinaigrette.",
            "action": "Incliner l'assiette et la cuillère de l'excès. Ajouter l'herbe fraîche juste avant de servir."
          }
        ]
      },
      "feelCue": "Le poireau fini devrait glisser facilement lorsqu'une fourche le ronge — les couches se pelant comme des pages humides, chacune habillée de vinaigrette."
    }
  ]
};
