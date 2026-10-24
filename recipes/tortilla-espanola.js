export default {
  "repoId": "master_spanish_tortilla-espanola_001",
  "parentRepoId": null,
  "slug": "tortilla-espanola",
  "author": "ForkRecipe Kitchen",
  "title": "Tortilla Española",
  "description": "Torte d'oeufs et de pommes de terre, la pomme de terre mince et les tranches d'oignons cuits lentement dans l'huile d'olive jusqu'à ce qu'ils donnent, puis liés dans l'œuf battu et mis des deux côtés dans un disque doré légèrement arrosé qui est la réponse de l'Espagne à l'omelette.",
  "cuisine": "Espagnol",
  "culture": "Espagne",
  "category": "eggs",
  "tags": [
    "Espagnol",
    "œuf",
    "pommes de terre",
    "oignon",
    "Tapas",
    "végétarien"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "1 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Pommes de terre de cire (Yukon Gold ou similaires), pelées et coupées en tranches de 3 mm",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "pommes de terre à doigter"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Gros œufs, à température ambiante",
      "ratioValue": 60,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon jaune, coupé en deux et tranché de 3 mm",
      "ratioValue": 40,
      "defaultUnit": "%",
      "substitutions": [
        "oignon blanc",
        "oignon doux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 50,
      "defaultUnit": "%",
      "substitutions": [
        "huile d'olive pure"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Confit les pommes de terre et l'oignon",
      "inputs": [
        "ing_01",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "confited_potato_onion",
      "instructions": "Verser l'huile d'olive dans une poêle antiadhésive lourde de 24 cm (9 pouces) ou en fonte bien assaisonnée — il devrait y avoir suffisamment d'huile pour submerger la pomme de terre et les tranches d'oignon au moins à mi-chemin. Chauffer à feu moyen-doux jusqu'à ce que l'huile mijote paresseusement. Ajouter les tranches de pommes de terre et l'oignon avec une pincée généreuse de sel. L'huile devrait les entourer dans une bulle douce et lente — c'est un confit, pas une frite. Réglez la chaleur pour que le bouillon soit lent et que les pommes de terre soient cuites sans brunir. Tourner le mélange à l'occasion avec une cuillère à fente. Après 20 à 25 minutes, les pommes de terre seront complètement tendres, l'oignon deviendra translucide et sucré, et les deux produiront sans résistance lorsqu'ils seront pressés. Utilisez une cuillère à fente pour les transférer dans une calandre sertie sur un bol, en réservant l'huile précieuse. Laissez-les égoutter et refroidir pendant 5 minutes.",
      "visualCue": {
        "primaryTarget": "Les tranches de pommes de terre sont uniformément dorées pâles, entièrement pliables, et se décomposent facilement aux bords; l'oignon est translucide et soyeux, sans brunissement non plus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tranches de pomme de terre se cassent ou résistent lorsqu'elles sont pressées. L'oignon reste opaque.",
            "action": "Continuez à confiner à feu doux. Ne vous précipitez pas avec une température plus élevée — la pomme de terre sous-cuite fait une tortilla amylacée."
          },
          {
            "state": "Perfect",
            "description": "Les pommes de terre glissent à la pression la plus douce, complètement tendres. L'oignon est sucré, soyeux et entièrement translucide.",
            "action": "Transférer dans la calandre immédiatement, laisser égoutter et refroidir légèrement avant de mélanger avec l'oeuf."
          },
          {
            "state": "Overdone",
            "description": "Les bords de la pomme de terre sont bruns et certaines tranches se décomposent en mousse; les odeurs d'huile d'amidon brunissent.",
            "action": "Les morceaux de pommes de terre en purée feront une tortilla plus dense mais ne seront pas ruineux. Procédez avec plus de soin à ne pas trop mélanger avec l'oeuf."
          }
        ]
      },
      "feelCue": "Appuyez sur une tranche de pomme de terre entre le pouce et l'index – elle devrait donner complètement et se séparer comme de la cire douce, sans croquant ni résistance nulle part. L'oignon devrait se sentir comme de la soie cuite."
    },
    {
      "nodeId": "step_2",
      "action": "Battre et combiner",
      "inputs": [
        "ing_02",
        "confited_potato_onion"
      ],
      "outputState": "egg_potato_mixture",
      "instructions": "Casser les œufs dans un grand bol et bien battre avec une fourchette — pas un fouet — jusqu'à ce que les jaunes et les blancs soient complètement combinés. Assaisonner de sel. Ajouter la pomme de terre égouttée, légèrement refroidie et l'oignon à l'oeuf battu et plier doucement ensemble. Ne pas simplement jeter et remuer : couchez les pommes de terre dans l'œuf, en faisant tourner le mélange plusieurs fois, de sorte que les tranches se séparent et sont enrobées individuellement sans casser en bouillie. Appuyez sur le mélange pour que l'œuf couvre les pommes de terre. Reposez-vous pendant 5 minutes, ce qui permet à l'œuf de pénétrer entre les couches de pommes de terre et la fécule de pomme de terre pour commencer à épaissir légèrement l'oeuf, ce qui donne à la tortilla sa texture dense et distinctive.",
      "visualCue": {
        "primaryTarget": "Tranches de pommes de terre et d'oignon enrobées d'œuf battu avec toutes les bulles d'air, le mélange semble dense, jaune doré et saturé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tranches de pommes de terre sèches assises sur l'œuf sans enrobage — l'œuf n'a pas eu le temps de pénétrer entre les couches.",
            "action": "Appuyez fermement sur le mélange et repliez à nouveau. Donnez 5 minutes de plus pour se reposer avant de cuisiner."
          },
          {
            "state": "Perfect",
            "description": "Chaque tranche de pomme de terre est enrobée d'oeuf, le mélange a une couleur or pâle uniforme, et le bol sent l'oeuf et l'oignon doux ensemble.",
            "action": "Cuire immédiatement pendant que le mélange est à température ambiante pour un réglage uniforme."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a été agité de manière si agressive que les pommes de terre se sont décomposées en une masse brute — la tortilla sera dense et homogène plutôt que stratifiée.",
            "action": "Procéder; la tortilla aura un bon goût mais aura moins de la texture en couches caractéristique."
          }
        ]
      },
      "feelCue": "Le mélange doit se sentir lourd lorsque vous inclinez le bol — plus dense que l'oeuf battu seul mais pas raide. Il devrait verser lentement, pas verser librement. Si elle coule trop librement, le rapport oeuf-potato est désactivé."
    },
    {
      "nodeId": "step_3",
      "action": "Régler le premier côté",
      "inputs": [
        "egg_potato_mixture"
      ],
      "outputState": "half_set_tortilla",
      "instructions": "Retourner 2 cuillerées à soupe de l'huile d'olive réservée à la poêle et faire chauffer à feu moyen jusqu'à ce qu'elle mijote. Verser le mélange d'oeufs-potates et agiter immédiatement la poêle pour le répartir uniformément. Réduire le feu à feu moyen-doux et faire cuire pendant 5 à 6 minutes. Exécutez une spatule flexible autour du bord chaque minute ou ainsi pour éviter de coller. La tortilla est prête à basculer lorsque les bords sont fermes et sont devenus de l'or pâle, et le centre — tout en étant visiblement mouillé et jiggly — ne s'enlise plus lorsque vous secouez la poêle. Le dessous devrait être profond, voire doré. C'est le moment du flip.",
      "visualCue": {
        "primaryTarget": "Le bord de la tortilla est fixé solide et doré, la surface semble encore humide et brillante au centre, et quand la casserole est secouée, le disque entier se déplace comme une seule pièce plutôt que de s'enrouler comme un liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La tortilla n'est réglée qu'à quelques millimètres du bord; le centre s'enroule librement lorsque la poêle est inclinée. Le dessous peut ne pas avoir développé la couleur.",
            "action": "Continuer la cuisson à feu moyen-doux. Ne retournez pas encore — une tortilla trop molle s'effondrera ou se déchirera pendant le retournement."
          },
          {
            "state": "Perfect",
            "description": "Les 3 à 4 cm extérieurs sont entièrement réglés; le centre se fige comme une masse (comme la gelée-O, pas l'eau). Le dessous est un brun foncé, même doré.",
            "action": "Flipez immédiatement en utilisant une plaque ou un couvercle légèrement plus grand que la poêle."
          },
          {
            "state": "Overdone",
            "description": "Toute la surface supérieure est sèche et le centre a gonflé — l'œuf a entièrement cuit sur le premier côté, ne laissant rien de crépuscule au milieu.",
            "action": "Dépliez de toute façon et faites cuire le deuxième côté pendant seulement 1 minute pour le réchauffer. Acceptez une tortilla sèche ce tour."
          }
        ]
      },
      "feelCue": "Faites glisser la poêle vers l'avant et arrêtez - vous devriez sentir la tortilla se déplacer comme une seule masse, comme une rondelle, pas une vague. Ce mouvement unifié vous dit qu'il est structurellement assez solide pour basculer en toute sécurité."
    },
    {
      "nodeId": "step_4",
      "action": "Flip et finition",
      "inputs": [
        "half_set_tortilla"
      ],
      "outputState": "finished_tortilla",
      "instructions": "Placer une plaque ou un couvercle plat (au moins aussi large que la poêle) sur la poêle. Dans un mouvement confiant, inverser la poêle de sorte que la tortilla tombe sur la plaque avec le côté cuit vers le haut. Ajouter une bruine de l'huile réservée dans la poêle et glisser la tortilla en arrière, côté non cuit vers le bas. Cuire encore 3 à 4 minutes sur une longueur moyennement basse. La tortilla espanola idéale est placée à l'extérieur et légèrement runny — cuajada por fuera, jugosa por dentro — juste à l'extérieur, juteux à l'intérieur. Pour vérifier la finesse, appuyez doucement sur le centre: il doit se sentir comme une gelée ferme — solide mais avec un léger rendement. Faites glisser sur une planche ou une assiette et reposez-vous 10 minutes avant de trancher. Tortilla s'améliore considérablement à la température ambiante et est traditionnellement servi entre 45 minutes et 3 heures après la cuisson.",
      "visualCue": {
        "primaryTarget": "Les deux faces plates de la tortilla sont un uniforme, en forme d'ambre doré. Les côtés du disque sont réglés mais le centre donne à la pression légère avec un léger wobble — il devrait se sentir comme un flan ferme, pas un oeuf cuit.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lorsqu'il est coupé, l'intérieur est entièrement liquide plutôt que crépuscule — l'oeuf n'a pas du tout fixé au cœur, et la tranche s'effondre.",
            "action": "Retournez les moitiés coupées dans la poêle brièvement, coupez-la vers le bas, pour placer légèrement l'intérieur. Le centre d'exécution classique est une cible étroite."
          },
          {
            "state": "Perfect",
            "description": "La surface coupée révèle des couches de pomme de terre dorée dans un œuf pâle et crépuscule qui tient sa forme mais qui brille — pas sèche, pas liquide, comme un œuf doux brouillé qui a à peine mis.",
            "action": "Laisser reposer 10 minutes pour que la chaleur résiduelle soit égale avant de servir à température ambiante."
          },
          {
            "state": "Overdone",
            "description": "L'intérieur est entièrement serti, sec et émietté lorsqu'il est coupé — les tortillas ont le goût d'oeufs cuits plutôt que le mélange crémeux et crémeux d'oeufs et de pommes de terre.",
            "action": "Une bruine d'huile d'olive sur la tranche lors du service contribue à compenser la sécheresse."
          }
        ]
      },
      "feelCue": "Reposez votre palmier à plat au centre de la tortilla — il devrait donner légèrement et ressortre lentement, comme un matelas sous pression. S'il est aussi ferme qu'une rondelle de hockey, il a trop cuit. Si votre main coule, il faut encore une minute."
    }
  ]
};
