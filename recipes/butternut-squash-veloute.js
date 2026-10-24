export default {
  "repoId": "master_french_butternut_squash_veloute_001",
  "parentRepoId": null,
  "slug": "butternut-squash-veloute",
  "author": "ForkRecipe Kitchen",
  "title": "Veloute de squash à beurre",
  "description": "Soupe soyeuse, dorée à l'automne, de courges de beurre grillées mélangées à un stock de légumes légèrement épicés dans une purée de velours, finie avec de la crème et un fil de beurre brun — riche et doux mais équilibré par un murmure de muscade et de poivre blanc.",
  "cuisine": "Français",
  "culture": "Français",
  "category": "vegetables",
  "tags": [
    "squash",
    "velouté",
    "français",
    "Soupe",
    "végétarien"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Courge de butternut, pelée, ensemencée et coupée en dés",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "squash kabocha",
        "Citrouille"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Échalotes, coupées en tranches",
      "ratioValue": 3,
      "defaultUnit": "shallots",
      "substitutions": [
        "moitié un petit oignon"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail, non pelées",
      "ratioValue": 2,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Stock de légumes, chaud",
      "ratioValue": 800,
      "defaultUnit": "ml",
      "substitutions": [
        "bouillon de poulet"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": [
        "crème fraîche",
        "crème de noix de coco pour végétalien"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "Huile d'olive"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive (à rôtir)",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Noix de muscade fraîchement râpée",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": [
        "noix de muscade"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Poivre blanc, fraîchement moulu",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": [
        "poivre noir"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Pepitas (graines de citrouille grillées)",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "noisettes grillées et concassées"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Garnish",
      "name": "Creme fraise ou une bruine de crème",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtis",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_07",
        "ing_10"
      ],
      "outputState": "roasted_squash",
      "instructions": "Préchauffer le four à 200 C (400 F). Étendre la courge en dés, les échalotes en tranches et les gousses d'ail non pelées sur une grande plaque de cuisson. Arroser généreusement d'huile d'olive et assaisonner de sel. Mets-toi à manteaur. Faire cuire 25 à 30 minutes, tourner une fois à mi-chemin, jusqu'à ce que la courge soit profondément caramélisée sur les surfaces coupées et complètement tendre.",
      "visualCue": {
        "primaryTarget": "Les cubes de courges sont orange ambre à brun doré profond sur leurs faces coupées, avec des bords caramélisés. Les échalotes sont flétries et légèrement carbonisées. La casserole a un fond doré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La courge est encore orange pâle, douce mais non caramélisée. Pas de brunissement sur les visages coupés.",
            "action": "Retourner au four — la caramélisation construite ici est le principal moteur de saveur de la soupe. La courge crue fait un velouté plat et fin."
          },
          {
            "state": "Perfect",
            "description": "Courge dorée profonde avec caramel foncé sur les coins et les bords. La courge donne complètement à une fourchette. Les échalotes sont jammy. L'odeur est de sucre brûlé et d'amidon rôti.",
            "action": "Pressez l'ail de sa peau et transférez tout — y compris tout jus de casserole — dans un mélangeur ou une casserole."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé à noir sur les bords, sec et cuir sur certains morceaux. Un peu d'affection a brûlé.",
            "action": "Jeter les pièces vraiment noircies. Le reste sera encore savoureux — la soupe sera juste plus amère et fumée."
          }
        ]
      },
      "feelCue": "Une brochette devrait percer le centre du plus grand cube de courge avec une résistance nulle. Si vous ressentez une raideur, retournez le plateau au four."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "roasted_squash",
        "ing_04"
      ],
      "outputState": "rough_puree",
      "instructions": "Pressez les gousses d'ail grillées de leur peau dans un mélangeur. Ajouter toute la courge rôtie et les échalotes. Verser la moitié du stock chaud. Mélanger sur haute jusqu'à ce que complètement lisse, ajouter plus de stock jusqu'à ce que vous atteignez une consistance versable mais épaisse. Passez à travers un tamis à mailles fines si vous voulez la texture la plus raffinée.",
      "visualCue": {
        "primaryTarget": "Une purée épaisse, uniformément lisse, d'ambre profonde. Pas de morceaux, pas de fils de fibres. Il coule régulièrement d'une louche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours brouillé avec des morceaux de courges visibles. La couleur est striée — plus pâle où la courge n'est pas mélangée.",
            "action": "Mélanger plus longtemps. Ajouter le stock par paliers pour aider le mélangeur à circuler."
          },
          {
            "state": "Perfect",
            "description": "Complètement uniforme, riche ambre, qui coule en douceur du mélangeur. Goûte intensément de courges grillées avec une complexité profonde et douce.",
            "action": "Transférer dans une casserole et chauffer à feu doux."
          },
          {
            "state": "Overdone",
            "description": "La purée a été mélangée si longtemps qu'elle est aérée et mousseuse. Le volume a augmenté et la couleur est plus légère.",
            "action": "Laisser reposer la chaleur quelques minutes avant de continuer. La mousse va tomber."
          }
        ]
      },
      "feelCue": "Exécutez la purée mélangée à travers votre langue — elle devrait se sentir complètement lisse, comme du velours chaud, sans fibre ni grain à aucun moment."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "rough_puree",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "seasoned_veloute",
      "instructions": "Verser la purée dans une casserole moyenne à feu doux. Incorporer le reste du bouillon chaud pour ajuster la consistance — la soupe finale doit couler comme de la crème lourde, pas s'asseoir comme un porridge raide. Assaisonner soigneusement de sel, de poivre blanc et de muscade fraîchement râpée. Laisser mijoter au feu le plus bas pendant 5 minutes, en remuant, pour épouser les saveurs.",
      "visualCue": {
        "primaryTarget": "Soupe lisse, fluide et ambre profonde, légèrement bouillante mais sans bouillir. La cohérence est entre la crème lourde et un porridge mince.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La soupe est encore très épaisse et est assise dans le pot comme une pâte. Il ne coule pas librement lorsque le pot est incliné.",
            "action": "Ajouter plus de bouillon chaud en incréments de 100 ml, en remuant, jusqu'à ce qu'il se déplace fluidement."
          },
          {
            "state": "Perfect",
            "description": "La soupe coule lorsque le pot est incliné, enrobant les côtés dans un film mince, même. Goûte profondément de courges, avec chaleur de muscade et assaisonnement propre.",
            "action": "Incorporer la crème et faire le beurre brun."
          },
          {
            "state": "Overdone",
            "description": "La soupe est si fine et aqueuse qu'elle a un goût dilué. La saveur de courge a été lavée.",
            "action": "Laisser mijoter à feu moyen pendant 10 minutes pour réduire et concentrer."
          }
        ]
      },
      "feelCue": "La soupe devrait se sentir soyeuse et substantielle sur la langue — riche, pas aqueuse. Goûtez-le au chaud : la muscade doit s'inscrire comme une chaleur agréable à l'arrière de la gorge, pas comme une saveur distincte."
    },
    {
      "nodeId": "step_4",
      "action": "Monter",
      "inputs": [
        "seasoned_veloute",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_squash_veloute",
      "instructions": "Incorporer la crème lourde dans la soupe chaude du feu et goûter une fois de plus pour l'assaisonnement. Dans une petite casserole, faire fondre le beurre à feu moyen, en tourbillonnant la casserole. Continuer la cuisson jusqu'à ce que les solides de beurre deviennent brun-noix et que le beurre sente les noisettes grillées — environ 3 minutes. Verser immédiatement dans un petit bol. Déposer la soupe dans des bols chauds, arroser avec un fil de beurre brun, et terminer avec des pepitas grillés et un point de crème fraîche.",
      "visualCue": {
        "primaryTarget": "Soupe ambre brûlée dans un bol chaud. Un bruissement noir-brun au beurre qui s'enroule sur la surface. Pepitas verts et une crème fraîche blanche point pour le contraste.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est d'or pâle et sent toujours le lait. Pas de folie.",
            "action": "Retourner à la chaleur et continuer à cuisiner - beurre bruittte a besoin de ces solides de lait brun pour son parfum de noisette signature."
          },
          {
            "state": "Perfect",
            "description": "Le beurre est brun-ambre avec des taches foncées de solides de lait caramélisé. Sensation intense de noisettes grillées et de caramel. Versé dans un fil fin, il laisse un anneau sombre sur la soupe.",
            "action": "Servir immédiatement avant que le beurre se solidifie."
          },
          {
            "state": "Overdone",
            "description": "Le beurre est brun foncé à noir et sent amer et acride — beurre noir, pas beurre bruit.",
            "action": "Jeter et recommencer avec du beurre frais. Beurre noir fera brûler le goût de la soupe."
          }
        ]
      },
      "feelCue": "La soupe finie devrait se sentir luxueusement lisse en bouche — la crème et le beurre brun ajoutent une rondeur qui rend la soupe plus épaisse qu'elle ne l'est réellement."
    }
  ]
};
