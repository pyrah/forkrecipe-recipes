export default {
  "repoId": "master_japaneseamerican_misobuttersalmon_001",
  "parentRepoId": null,
  "slug": "miso-butter-salmon-green-beans",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Saumon Miso-Butter aux haricots verts rôtis",
  "description": "Filets de saumon peints à l'aide d'un torréfaction au beurre miso salé sur la même casserole que les haricots verts cloqués, et le beurre qui fond des piscines de poisson en une glaçure salée que vous cuillerez sur les haricots à la fin.",
  "cuisine": "Japonais-Américain",
  "culture": "Cuisine américaine à domicile",
  "category": "seafood",
  "tags": [
    "cuisine maison",
    "nuit",
    "saumon",
    "poissons",
    "Tôle",
    "grillés",
    "miso",
    "Haricots verts"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "30 min",
  "ratioSystem": "weight",
  "servings": 4,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 1,
    "bitter": 0,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filets de saumon, avec peau, environ 150 g chacun",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "omble chevalier",
        "truite arc-en-ciel"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Base",
      "name": "Haricots verts, parés",
      "ratioValue": 450,
      "defaultUnit": "g",
      "substitutions": [
        "asperges, extrémités boisées cassées"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Glutamate",
      "name": "Blanc (shiro) miso",
      "ratioValue": 45,
      "defaultUnit": "g",
      "substitutions": [
        "miso jaune"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé, ramolli",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Chérie",
      "ratioValue": 2,
      "defaultUnit": "tsp",
      "substitutions": [
        "sirop d'érable",
        "mirine (1 c. à soupe)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Ail, râpé finement",
      "ratioValue": 1,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "vinaigre de riz, non assaisonné",
      "ratioValue": 2,
      "defaultUnit": "tsp",
      "substitutions": [
        "jus de citron frais"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Échalons, tranchés finement",
      "ratioValue": 2,
      "defaultUnit": "stalks",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Graines de sésame grillées",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "miso_butter",
      "instructions": "Chauffer le four à 425°F (220°C) avec une grille en position médiane supérieure. Dans un petit bol, écraser le miso, adoucir le beurre, le miel et râpé l'ail avec une fourchette jusqu'à ce qu'il soit complètement lisse et uniforme.",
      "visualCue": {
        "primaryTarget": "Une pâte de caramel lisse et pâle sans stries de beurre clair ou de morceaux de miso.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Stries de beurre blanc et morceaux de miso beige visibles.",
            "action": "Continuez à broyer; si le beurre est trop froid, placez le bol près du four chaud pendant 1 minute."
          },
          {
            "state": "Perfect",
            "description": "Pâte uniforme et à tartiner de la couleur du beurre d'arachide.",
            "action": "Réserver pendant que les haricots commencent à rôtir."
          },
          {
            "state": "Overdone",
            "description": "Le beurre a complètement fondu et le miso s'est séparé en une couche granuleuse.",
            "action": "Refroidir 5 minutes et remuer à nouveau; ou simplement le brosser comme une glaçure plus mince."
          }
        ]
      },
      "feelCue": "Il devrait se propager comme le gel doux sur le dos d'une cuillère et sentir doux, salé et légèrement funky."
    },
    {
      "nodeId": "step_2",
      "action": "Rôtir",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "par_roasted_beans",
      "instructions": "Sur une casserole en tôle bordée, jeter les haricots verts avec l'huile et 1/2 c. à thé sel casher et les étaler. Faites cuire pendant 8 minutes pour leur donner une longueur d'avance.",
      "visualCue": {
        "primaryTarget": "Les haricots tournent un vert plus brillant avec les premières petites ampoules apparaissant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Haricots inchangés, vert terne, sans étourdissement.",
            "action": "Donnez-leur 2 minutes avant d'ajouter le poisson."
          },
          {
            "state": "Perfect",
            "description": "Vert vif avec quelques rousseurs brunis; encore ferme.",
            "action": "Poussez sur les bords et ajoutez le saumon."
          },
          {
            "state": "Overdone",
            "description": "Les haricots sont déjà rivés et bruns.",
            "action": "Déplacez-les dans une assiette et retournez-les dans la poêle pour seulement les 3 dernières minutes du rôti du saumon."
          }
        ]
      },
      "feelCue": "La poêle doit être légèrement étourdie lorsque vous ouvrez le four, et un haricot doit se plier légèrement mais se casser encore."
    },
    {
      "nodeId": "step_3",
      "action": "Glace et rôti",
      "inputs": [
        "par_roasted_beans",
        "ing_01",
        "miso_butter"
      ],
      "outputState": "roasted_salmon_beans",
      "instructions": "Faites sécher le saumon. Poussez les haricots sur les bords de la poêle et posez les filets côté peau au centre. Étendre le beurre miso épais sur le dessus et les côtés des filets. Faire cuire 9-12 minutes, selon l'épaisseur, jusqu'à ce que le saumon floce facilement et soit opaque au centre ou lit 145°F (63°C) dans la partie la plus épaisse. Si les sommets sont pâles, passez au grilleur pendant les dernières 1 à 2 minutes, en regardant constamment — miso brûle rapidement.",
      "visualCue": {
        "primaryTarget": "Saumon avec une croûte miso bronzée et bouillonnante, chair opaque et juste se séparant en flocons, beurre brouillant autour des haricots.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Centrer encore l'orange translucide profonde et la chair résiste à une fourchette.",
            "action": "Retourner au four 2 minutes et vérifier à nouveau."
          },
          {
            "state": "Perfect",
            "description": "La chair opaque pâle-corale qui se sépare en grands flocons humides sous une légère pression de fourche, 145°F (63°C) au point le plus épais; glaçure caramélisée aux bords.",
            "action": "Supprimer immédiatement."
          },
          {
            "state": "Overdone",
            "description": "L'albumine blanche perle fortement sur les côtés, flocons secs et crayeux, glaçure noircie.",
            "action": "Spoon beurre de casserole supplémentaire sur le poisson et racler toute glaçure brûlée."
          }
        ]
      },
      "feelCue": "Appuyez sur le dessus d'un filet avec un bout de doigt : il doit donner et commencer à se séparer en couches, comme en appuyant sur une pile de cartes, ne ressort pas fermement."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer",
      "inputs": [
        "roasted_salmon_beans",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "finished_miso_salmon",
      "instructions": "Arrosez le vinaigre de riz sur les haricots verts et jetez-les dans le beurre miso fondu sur la poêle. Associez le saumon avec les haricots, cuillerez sur tout jus de poêle restant et dispersez-le avec les oignons et les graines de sésame. Servir avec du riz cuit à la vapeur si vous voulez.",
      "visualCue": {
        "primaryTarget": "Les haricots scintillent avec du beurre miso, du saumon glacé et garnis d'anneaux verts frais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Haricots secs et unis tandis que le beurre est baigné sous le poisson.",
            "action": "Incliner la poêle et rouler les haricots dans les jus."
          },
          {
            "state": "Perfect",
            "description": "Tout enduit d'un fin brillant savoureux avec un coup lumineux de vinaigre.",
            "action": "Servir chaud."
          },
          {
            "state": "Overdone",
            "description": "Trop de vinaigre et de faire les haricots aigre.",
            "action": "Ajouter une petite tape de beurre et une pincée de sel pour rééquilibrer."
          }
        ]
      },
      "feelCue": "Une bouchée de haricot doit d'abord être profondément salée, puis propre et brillante du vinaigre."
    }
  ]
};
