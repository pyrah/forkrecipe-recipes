export default {
  "repoId": "master_indian_paratha_001",
  "parentRepoId": null,
  "slug": "paratha",
  "author": "ForkRecipe Kitchen",
  "title": "Plaine Paratha",
  "description": "Un pain plat cuit à la poêle avec une croûte extérieure croustillante et un intérieur tendre et en couches, construit en pliant le ghee en pâte roulée — le morceau d'or de chaque table de petit déjeuner du Punjabi, mangé chaud du tawa.",
  "cuisine": "Indiens",
  "culture": "Punjabi",
  "category": "breads",
  "tags": [
    "paratha",
    "Pain plat",
    "blé entier",
    "punjabi",
    "Petit déjeuner",
    "végétarien"
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
    "sweet": 0,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de blé entier (atta), plus supplément pour la poussière",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "50/50 blé entier et farine à usage général"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Ghee (pour la pâte et la couche)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "huile neutre",
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Ghee (pour cuisiner sur tawa)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre",
        "huile"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "rested_dough",
      "instructions": "Mélanger atta et saler dans un grand bol. Ajouter une petite quantité de ghee et frotter dans la farine jusqu'à ce qu'elle ressemble à de fines chapelures. Ajouter graduellement de l'eau chaude, mélanger au fur et à mesure, jusqu'à ce qu'une pâte chaotique se forme. Agenouillez vigoureusement de 8 à 10 minutes sur une surface non nourrie jusqu'à ce que la pâte soit lisse, douce et légèrement collante. Couvrir d'un chiffon humide et reposer pendant 20 minutes.",
      "visualCue": {
        "primaryTarget": "Pâte lisse et uniformément douce qui ressort quand elle est cuite. La surface semble légèrement brillante du ghee.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est rugueuse, émiettée et larmes lorsqu'elle est étendue. La surface est sèche et mate.",
            "action": "Ajouter une cuillère à café à la fois, pétrir après chaque ajout. Continuez à travailler jusqu'à ce que lisse."
          },
          {
            "state": "Perfect",
            "description": "Silky-smooth, anti-sticky, et rebondit lentement quand poché. S'étirent sans déchirer. Un peu brillant.",
            "action": "Couvrir et se reposer pendant au moins 20 minutes — le repos n'est pas facultatif."
          },
          {
            "state": "Overdone",
            "description": "La toux est collante et mouille le comptoir. Clings à tout.",
            "action": "Poussière avec une petite quantité de farine et pétrir doucement pour absorber. Ajouter la farine au minimum — trop de farine rend la paratha dure."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir comme un lobe d'oreille doux et chaud — donnant sous pression, jamais raide, jamais mouillé. Après le repos, il se sentira encore plus détendu et extensible."
    },
    {
      "nodeId": "step_2",
      "action": "Incorporer délicatement",
      "inputs": [
        "rested_dough",
        "ing_03"
      ],
      "outputState": "layered_dough",
      "instructions": "Divisez la pâte en parties de balle de golf. Sur une surface légèrement farinée, rouler une boule dans un disque de 15 cm. Étendre un mince frottis de ghee sur la surface. Plier le disque en deux à un demi-cercle, puis plier à nouveau à un triangle. Roulez le triangle à nouveau sur un disque mince, même, d'environ 18 à 20 cm de large. Le ghee entre les plis crée les couches. Répéter pour chaque portion.",
      "visualCue": {
        "primaryTarget": "Un petit disque rond avec des poches de ghee visibles entre les couches lorsqu'il est tenu à la lumière. La pâte a un aspect presque feuilleté et papier aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le disque est épais et inégal. Le centre est beaucoup plus épais que les bords. Les calques ne sont pas visibles.",
            "action": "Rouler plus fermement et uniformément du centre vers l'extérieur, en appliquant une pression constante. Faites tourner le disque d'un quart de tour entre les rouleaux."
          },
          {
            "state": "Perfect",
            "description": "Fin, même, environ 3 mm d'épaisseur, avec le contour des couches de ghee visibles comme des taches légèrement plus légères. Les bords sont plus fins que le centre par une fraction seulement.",
            "action": "Cuire immédiatement sur un tawa chaud."
          },
          {
            "state": "Overdone",
            "description": "La toux est roulée si mince qu'elle déchire. Ghee fuit dans les larmes.",
            "action": "Couper les petites larmes en pressant les bords ensemble. La prochaine fois, rouler moins agressivement — paratha bénéficie d'une certaine épaisseur."
          }
        ]
      },
      "feelCue": "Tenez la paratha roulée jusqu'à la lumière — vous devriez voir le fantôme des couches de ghee comme des stries subtiles à travers la pâte, comme la lecture du grain dans le marbre."
    },
    {
      "nodeId": "step_3",
      "action": "Saisir",
      "inputs": [
        "layered_dough",
        "ing_05"
      ],
      "outputState": "finished_paratha",
      "instructions": "Chauffer une poêle en tawa ou en fonte à feu moyen-vif jusqu'à ce qu'une goutte d'eau s'évapore immédiatement. Placer la paratha roulée sur la casserole sèche. Cuire pendant 60 à 90 secondes jusqu'à ce que la surface tourne de mat à légèrement sec et que de petites bulles commencent à apparaître. Flip. Cuire le deuxième côté pendant 60 secondes, puis ajouter un frottis généreux de ghee à la surface supérieure tout en appuyant doucement avec un chiffon plié (ou une spatule). Flipez encore une fois, ajoutez du ghee sur ce côté, et faites cuire jusqu'à ce que les deux surfaces aient des cloques dorées et que la paratha ait légèrement gonflé dans les endroits. Durée totale: 3–4 minutes par paratha.",
      "visualCue": {
        "primaryTarget": "Les deux côtés sont dorés-bruns avec des taches sombres cloquées. La paratha est gonflée au centre. Les bords sont croustillants et légèrement translucides.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Paratha est pâle et pâteuse. Bends floppy sans croustillant. L'odeur est crue.",
            "action": "Retourner à la poêle à feu plus élevé. Le tawa n'était pas assez chaud — une paratha pâle est mal cuite."
          },
          {
            "state": "Perfect",
            "description": "Plaquettes dorées des deux côtés. Un peu gonflé. Crisp aux bords. Une fois pressé avec un chiffon, il craque légèrement. La cuisine sent le ghee chaud et le blé grillé.",
            "action": "Retirer immédiatement, frotter avec un point final de ghee, et servir."
          },
          {
            "state": "Overdone",
            "description": "La surface est brun foncé-noir dans les taches. Ça sent un peu acride. La paratha est raide et crépitante.",
            "action": "Il est encore comestible — les taches sombres sont parfumées, comme l'omble sur le pain grillé. Réduire la chaleur pour le prochain."
          }
        ]
      },
      "feelCue": "Ramassez une paratha finie et compressez - la délicatement; elle devrait craquer avec une résistance papier, satisfaisante, et un petit nuage de vapeur devrait échapper aux plis."
    }
  ]
};
