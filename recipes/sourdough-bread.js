export default {
  "repoId": "master_american_sourdough_001",
  "parentRepoId": null,
  "slug": "sourdough-bread",
  "author": "ForkRecipe Kitchen",
  "title": "Mousse rustique sourde",
  "description": "Un arbustif à chapelure ouverte, avec une croûte d'acajou qui se brise, construit sur la fermentation sauvage, le temps froid et la forme vivante d'un démarreur actif. La miette est irrégulière et crépuscule; la croûte chante en refroidissant.",
  "cuisine": "Américain",
  "culture": "Pacifique Nord-Ouest",
  "category": "breads",
  "tags": [
    "Pâtes alimentaires",
    "pain",
    "fermenté",
    "wild-yeast",
    "artisan",
    "duvet"
  ],
  "difficulty": 3,
  "activeTime": "1 hr",
  "totalTime": "36 hr",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
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
      "name": "Farine de pain (12,5% de protéines)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "Farine polyvalente",
        "tipo 0"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau fraîche filtrée (22 C)",
      "ratioValue": 75,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "Démarrage actif à l'aurore (hydratation à 100%)",
      "ratioValue": 20,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Starch",
      "name": "Farine de riz (pour la poudre de banneton)",
      "ratioValue": 5,
      "defaultUnit": "%",
      "substitutions": [
        "sémoline"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Autolyser",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "autolyse_dough",
      "instructions": "Mélanger la farine de pain et l'eau fraîche dans un grand bol. Mélanger avec des mains mouillées ou une pâte fouetter jusqu'à ce qu'il ne reste absolument pas de farine sèche — racler le fond du bol. La pâte sera rugueuse et louche. Couvrir soigneusement avec une serviette humide ou une enveloppe en plastique et reposer pendant 45 minutes. Pendant ce repos, les protéines de farine absorbent l'eau et le gluten commence à s'organiser sans aucun effort de pétrissage. N'ajoutez pas encore de entrée ou de sel.",
      "visualCue": {
        "primaryTarget": "Après 45 minutes, la pâte a lissé et détendu. La surface tient un dôme doux et a l'air cohésif plutôt que rabâché.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Surface encore émiettée et sèche; larmes quand étirée même quelques pouces; farine sèche visible à la couture du bol.",
            "action": "Mouiller votre main, mélanger plus soigneusement et reposer encore 20 minutes — la farine n'a pas complètement absorbé l'eau."
          },
          {
            "state": "Perfect",
            "description": "Uniformément humide et cohésif. Attaches 10-15 cm sans déchirement. Il a un faible arôme de blé propre.",
            "action": "Ajouter le démarreur et le sel et procéder au plis de laminage."
          },
          {
            "state": "Overdone",
            "description": "La toux est serrée et légèrement chaude; une faible odeur acide signale déjà une fermentation.",
            "action": "Continuez immédiatement — ne laissez pas l'autolyse dépasser 90 minutes sans démarreur."
          }
        ]
      },
      "feelCue": "Après l'autolyse, la pâte doit se sentir comme de l'argile douce et fraîche — elle donne à la pression sans déchirer et laisse une empreinte lente lorsqu'elle est cuite."
    },
    {
      "nodeId": "step_2",
      "action": "Incorporer délicatement",
      "inputs": [
        "autolyse_dough",
        "ing_03",
        "ing_04"
      ],
      "outputState": "mixed_dough",
      "instructions": "Mouiller légèrement la surface du travail. Versez le démarreur actif sur la pâte autolyse; dispersez le sel sur le dessus. Effectuez un pli de laminage : étirez la pâte dans un rectangle large et mince, repliez-la en tiers comme une lettre, puis repliez-la en tiers dans l'autre sens. Remontez dans le bol. Cela tisse le démarreur et le sel dans chaque couche de gluten en un seul passage. Ensuite, exécutez un ensemble d'étirements pour unifier la masse.",
      "visualCue": {
        "primaryTarget": "Pas de cristaux de sel blanc visibles ni de stries de départ. La toux a une surface uniforme, légèrement plus soyeuse qu'après autolyse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des cristaux de sel blanc parsèment encore la surface; des rubans de départ plus pâles visibles comme des stries non mélangées.",
            "action": "Continuer à plier avec les mains mouillées jusqu'à ce que la pâte semble uniforme en couleur."
          },
          {
            "state": "Perfect",
            "description": "Couleur pâle uniforme dans l'ensemble, légèrement collante mais cohésive, la pâte ressort lentement lorsqu'elle est cuite. Ça sent légèrement acide depuis le début.",
            "action": "Retournez dans le bol couvert et commencez la fermentation en vrac."
          },
          {
            "state": "Overdone",
            "description": "La toux est devenue serrée et chaude, commence à se déchirer aux bords de la lamination.",
            "action": "Repos à découvert 10 minutes pour détendre le gluten avant de continuer."
          }
        ]
      },
      "feelCue": "La pâte résistera d'abord à l'étirement, puis cédera la place dans une feuille soyeuse et extensible. Vous devriez être en mesure de tirer assez mince pour voir la lumière à travers elle avant de plier."
    },
    {
      "nodeId": "step_3",
      "action": "Fermenter",
      "inputs": [
        "mixed_dough"
      ],
      "outputState": "bulk_dough",
      "instructions": "Couvrir le bol et le ferment en vrac à température ambiante (21–23 C / 70–73 F) pendant 4–5 heures. Au cours des 2 premières heures, effectuer quatre jeux de stretch-and-folds, un jeu toutes les 30 minutes. Pour chaque set: mouiller votre main, saisir un côté de la pâte, tirer aussi haut qu'il s'étire sans déchirer, plier sur le centre. Rotation de 90 degrés et répéter quatre fois au total. Après le dernier set, laisser complètement intact pour le reste de la masse.",
      "visualCue": {
        "primaryTarget": "Dough a augmenté de 70 à 80 % en volume. La surface est bombée et aérée, avec un réseau visible de petites bulles le long de la paroi du bol. La pâte grince comme le jello doux quand le bol est secoué doucement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Élevée minimale, pas de bulles visibles le long de la paroi du bol, la pâte est fraîche et dense. Pas d'embrouille.",
            "action": "Passez à un endroit plus chaud — 24 C est idéal. Étendre le volume de 1 à 2 heures et surveiller le gabarit."
          },
          {
            "state": "Perfect",
            "description": "Dôme visible d'en haut, bulles tracent la paroi du bol, la pâte s'éloigne du bol proprement et montre une toile de gluten quand une portion est étirée.",
            "action": "Astucez doucement sur une surface légèrement farinée et préformez sans dégazage."
          },
          {
            "state": "Overdone",
            "description": "Dome s'est effondré, la surface est collante et scintille, l'odeur d'alcool vif. De grandes poches de gaz ont explosé.",
            "action": "Formez immédiatement et réduisez l'épreuve de froid à 8 heures. Le pain sera très aigre mais toujours délicieux."
          }
        ]
      },
      "feelCue": "À la fin de l'enrobage, une poignée de pâte levée dans le bol devrait draper dans de longs rubans paresseux plutôt que de se casser. Il se sent aéré — presque comme la manipulation de mousse chaude enveloppée de soie."
    },
    {
      "nodeId": "step_4",
      "action": "Façonner",
      "inputs": [
        "bulk_dough",
        "ing_05"
      ],
      "outputState": "shaped_loaf",
      "instructions": "Poussez généreusement une banane ronde avec de la farine de riz. Astucez la pâte en vrac sur une surface de travail nue et intacte. Pré-forme : plier les bords vers le centre, retourner la couture vers le bas, et faire glisser la balle doucement sur la surface de la table pour construire la tension. Couvrir et reposer 20 minutes. Forme finale: retourner le rond, s'étirer à un ovale lâche, plier le tiers au centre, le tiers près sur celui, puis rouler vers vous avec les deux mains cousues sous pour serrer. Placez le bord de la couture dans le pavillon. Couvrir de plastique et réfrigérer 12-16 heures.",
      "visualCue": {
        "primaryTarget": "Un dôme lisse et tendu, assis haut dans le banneton, avec une couture clairement scellée vers le haut. La surface a suffisamment de tension qu'elle conserve sa forme sans s'étendre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le pain se relâche et se répand latéralement au lieu de se lever. La couture est lâche ou ouverte.",
            "action": "Reformage: utilisez un racleur de banc pour plier la pâte sous elle-même et serrer."
          },
          {
            "state": "Perfect",
            "description": "Surface étanche au tambour qui ressort immédiatement lorsqu'il est légèrement poché avec un doigt fariné. Seam scellé. Farine de riz visible comme une fine poussière blanche.",
            "action": "Couvrir et réfrigérer pendant la nuit pour la preuve du froid."
          },
          {
            "state": "Overdone",
            "description": "Les déchirures visibles ou les déchirures dans la peau externe de tirer trop agressivement pendant la formation.",
            "action": "Les larmes de presse se ferment. Le ressort du four scellera des dommages mineurs."
          }
        ]
      },
      "feelCue": "Un pain bien façonné se sent comme un ballon tendu, rempli sous votre paume — il repousse avec une résistance silencieuse. Si votre main coule sans résistance, la forme n'a pas de tension."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire au four",
      "inputs": [
        "shaped_loaf"
      ],
      "outputState": "finished_sourdough",
      "instructions": "Une heure avant la cuisson, préchauffer un four hollandais avec son couvercle à 260 C (500 F). Score le pain froid avec une lame de rasoir ou de lame boiteuse : une seule barre oblique de 30 à 45 degrés par rapport à la surface, d'environ 1 cm de profondeur. Soulevez du banneton à l'aide d'une élingue parcheminée et vers le bas dans le four hollandais chaud. Cuire couvert 20 minutes — la vapeur de la pâte froide laisse le pain jaillir et fleurir. Retirez le couvercle, réduisez le feu à 230 C (450 F) et faites cuire de 22 à 27 minutes de plus jusqu'à ce qu'il soit profondément caramel-brun.",
      "visualCue": {
        "primaryTarget": "Une croûte d'acajou avec une oreille dramatique levée le long de la ligne de score et des taches pâles blister où la croûte s'éclaircit au printemps du four. Le tapotage du fond produit un coup profond et creux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est d'or pâle; l'oreille est à peine levée; le fond de l'oreille semble dense et touffu. Le pain est légèrement doux lorsqu'il est pressé.",
            "action": "Rabattre le couvercle pendant 5 à 10 minutes et sonder — la température interne devrait atteindre 96 à 98 °C."
          },
          {
            "state": "Perfect",
            "description": "L'acajou profond avec des taches plus légères, une oreille prononcée, un bruit creux sur le fond. Température interne 96–98 C (205–208 F).",
            "action": "Refroidir sur une grille au moins 1 heure avant de trancher — la miette est toujours à l'intérieur."
          },
          {
            "state": "Overdone",
            "description": "Croûte presque noire, odeur amère-charrée, croûte s'éloignant de la miette sur les côtés.",
            "action": "Refroidir normalement. L'intérieur est presque certainement bien. Trim les bords les plus sombres avec un couteau à pain."
          }
        ]
      },
      "feelCue": "Dès qu'il quitte le four hollandais, la croûte chante — un crack et une tique musicale qui se contracte dans l'air frais. Si elle est silencieuse, la croûte n'a pas été réglée; si elle est forte et soutenue, elle est parfaite."
    }
  ]
};
