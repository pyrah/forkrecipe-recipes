export default {
  "repoId": "master_japanese_mochi_daifuku_001",
  "parentRepoId": null,
  "slug": "mochi-daifuku",
  "author": "ForkRecipe Kitchen",
  "title": "Fraises Daifuku Mochi",
  "description": "Toute une fraise nichée dans de la pâte de haricots rouges doux, puis enveloppée dans un oreiller de gâteau de riz à mochi, le plus célèbre des bonbons japonais.",
  "cuisine": "Japonais",
  "culture": "Wagashi",
  "category": "desserts",
  "tags": [
    "Mochi",
    "Japonais",
    "dessert",
    "fraises",
    "doux",
    "riz"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 0,
    "sour": 1,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Shiratamako (farine de riz glutineux)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "mochiko ( texture légèrement plus grossière)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 90,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Tsubuan ou koshian (pâte de haricots rouges sucrée)",
      "ratioValue": 120,
      "defaultUnit": "parts",
      "substitutions": [
        "pâte de haricots blancs"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Fraises fraîches (à coque, calibre uniforme)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "raisins sans pépins",
        "framboises entières"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Starch",
      "name": "Katakuriko (amidon de pomme de terre, pour la poussière)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "fécule de maïs"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Façonner",
      "inputs": [
        "ing_04",
        "ing_05"
      ],
      "outputState": "anko_wrapped_strawberries",
      "instructions": "Divisez l'anko (pâte de haricots) en portions — environ 25g par daifuku. Aplatissez chaque portion dans un disque dans votre paume. Placer une fraise coquillée point vers le bas au centre et envelopper l'anko autour d'elle, pinçant pour sceller à la base de la fraise. La pointe de fraise doit être juste visible ou à peine couverte. Réfrigérer les fraises emballées pendant 15 minutes pour les fermer.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte de haricots lisse et compacte encaissant complètement la fraise, avec un léger point au sommet où se trouvait la coque — pas de larmes, pas de trous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le disque d'Anko est trop épais et la fraise passe d'un côté à l'autre; la couverture est inégale.",
            "action": "Re-envelopper avec un disque plus mince et plus large d'anko et appuyer plus soigneusement."
          },
          {
            "state": "Perfect",
            "description": "Extérieur lisse, sans soudure anko. La balle est à plat sur la base. En appuyant très doucement, vous pouvez sentir la fraise à l'intérieur.",
            "action": "Réfrigérer pendant 15 minutes; l'anko froid est plus ferme et plus facile à manipuler lors de l'emballage des mochi."
          },
          {
            "state": "Overdone",
            "description": "Anko appliqué dans une couche trop épaisse; le rapport de la pâte à la fraise est hors d'équilibre.",
            "action": "Couper l'excès d'anko du côté de la couture avant de l'envelopper en mochi."
          }
        ]
      },
      "feelCue": "La fraise fraîchement enrobée d'anko doit se sentir solide et légèrement fraîche dans la main — un poids calme, dense, lisse sans tact."
    },
    {
      "nodeId": "step_2",
      "action": "vapeur",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "cooked_mochi",
      "instructions": "Fouetter le shiratamako, le sucre et l'eau ensemble dans un bol à micro-ondes jusqu'à ce qu'ils soient lisses sans grumeaux. Couvrir lâchement avec un enveloppement en plastique et un micro-ondes haut pendant 2 minutes. Retirer, mélanger soigneusement avec une spatule humide, puis le micro-ondes pendant 1 minute. Remuer à nouveau — le mochi doit être entièrement translucide sans taches blanches et opaques. Si des taches blanches demeurent, le micro-ondes éclate en 30 secondes, remuant à chaque fois. Alternativement, vapeur dans un vapeur couvert pendant 20 minutes, en remuant à mi-chemin.",
      "visualCue": {
        "primaryTarget": "Une masse entièrement translucide, uniformément brillante, sans taches blanches ou opaques, stretchy et tirant du bol proprement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les taches blanches et crayeuses sont opaques; les mochis se déchirent facilement et sont granuleuses.",
            "action": "Continuer le micro-enroulement en 30 secondes, en remuant vigoureusement entre chacun, jusqu'à ce qu'il soit complètement translucide."
          },
          {
            "state": "Perfect",
            "description": "Masse élastique brillante, entièrement translucide. S'étire en douceur sans déchirer. Ça sent peu le riz chaud cuit. Très chaud.",
            "action": "Travailler rapidement pendant la chaleur — le mochi se raidit rapidement à mesure qu'il refroidit."
          },
          {
            "state": "Overdone",
            "description": "Mochi a séché et a commencé à peler; la surface est tacky mais l'intérieur est raide.",
            "action": "Plonger les mains dans l'eau et pétrir brièvement; ajouter 1 c. à thé et micro-ondes 20 secondes pour adoucir."
          }
        ]
      },
      "feelCue": "Le mochi bien cuit est intensément chaud et s'étire comme du chewing-gum à bulles chaudes – il résiste à la traction, puis donne en douceur, avec une tension élastique satisfaisante."
    },
    {
      "nodeId": "step_3",
      "action": "Façonner",
      "inputs": [
        "cooked_mochi",
        "anko_wrapped_strawberries",
        "ing_06"
      ],
      "outputState": "finished_daifuku",
      "instructions": "Poussez généreusement une surface de travail avec katakuriko. Tournez le moche chaud sur la surface de la poussière — il sera extrêmement collant et très chaud, donc travaillez rapidement. Poussez le haut et vos mains. Divisez en portions égales (environ 40 g chacune) à l'aide d'un coupe-pâtes ou de ciseaux. Étendez chaque portion dans un disque d'environ 10 cm de largeur. Placez une fraise enrobée d'anko au centre, point vers le bas. Rassembler les bords de mochi de haut en haut, pincer fermement pour sceller à la base. Pinch point vers le bas. Poussez le daifuku fini avec plus de katakuriko pour éviter de coller.",
      "visualCue": {
        "primaryTarget": "Un oreiller rond et lisse de mochi blanc avec une base propre et scellée, recouvert d'une fine poussière de fécule de pomme de terre, à peine collant au toucher.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'anko est visible et le joint est brisé.",
            "action": "Appuyez sur les bords déchirés et pincez fermement; un petit morceau de moche double couche au joint est normal."
          },
          {
            "state": "Perfect",
            "description": "Doux, en forme. La base scellée est bien rangée. Mochi donne quand il est pressé et ressort. La pulvérisation de l'amidon n'est pas entachée.",
            "action": "Laisser reposer 5 minutes à température ambiante avant de servir. Meilleur repas en 4 heures."
          },
          {
            "state": "Overdone",
            "description": "Mochi refroidit trop avant de façonner — il s'est déchiré ou fissuré aux bords et est raide.",
            "action": "Micro-ondes les mochi restants pendant 15 secondes pour restaurer la pliabilité."
          }
        ]
      },
      "feelCue": "Un daifuku fini devrait donner sous une légère pression et repousser lentement — une résistance douce et induisante, comme presser un guimauve ferme, avec la fermeté subtile de la fraise à l'intérieur."
    }
  ]
};
