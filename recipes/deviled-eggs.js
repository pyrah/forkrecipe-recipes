export default {
  "repoId": "master_american_deviled_eggs_001",
  "parentRepoId": null,
  "slug": "deviled-eggs",
  "author": "ForkRecipe Kitchen",
  "title": "Œufs diaboliques classiques",
  "description": "Des œufs durs ont été coupés en deux, des jaunes battus avec de la mayonnaise, Dijon, et une touche de vinaigre dans un remplissage glacé et crémeux ont été ramenés dans des blancs d'albâtre.",
  "cuisine": "Américain",
  "culture": "Américain",
  "category": "eggs",
  "tags": [
    "Des œufs diaboliques",
    "américains",
    "aliments pour fêtes",
    "œufs",
    "mayonnaise",
    "classique",
    "Apéritif"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 3,
    "bitter": 0,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Oeufs (grands, âgés d'au moins une semaine — les œufs frais sont plus difficiles à peler)",
      "ratioValue": 6,
      "defaultUnit": "eggs",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Mayonnaise de bonne qualité (Duke ou Hellmann)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Yogourt grec pour version plus légère"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Moutarde de Dijon",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "moutarde jaune (plus traditionnel style sud)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de cidre de pomme",
        "jus de citron frais"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poivre blanc, finement moulu",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre noir (plus visible dans le remplissage)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Paprika doux ou fumé, pour la poussière",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "cayenne pour la chaleur"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Ciboulette fraîche, finement tranchée",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "frondes fraîches d'aneth"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire bouillir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "hard_boiled_eggs",
      "instructions": "Porter un pot d'eau à ébullition complète. Abaissez les œufs sur une cuillère et faites bouillir exactement 11 minutes. Transférer immédiatement dans un bain de glace — de l'eau froide avec autant de glace que possible — et laisser 10 minutes complètes. Le bain de glace est ce qui fait ou brise le jaune : il arrête la cuisson de report qui crée l'anneau de soufre gris-vert. Peler sous l'eau courante froide, à partir de l'extrémité large de la poche d'air. Entreposer les œufs pelés dans l'eau froide jusqu'à ce qu'ils soient prêts à être utilisés.",
      "visualCue": {
        "primaryTarget": "Oeufs pelés à l'extérieur blanc complètement opaque et propre. Séché en deux : un jaune jaune jaune soleil-jaune lumineux, entièrement réglé et centré, sans anneau gris-vert.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le jaune est encore doux ou orange foncé et légèrement embrouillé au centre lorsqu'il est coupé en deux. Le remplissage sera trop doux pour être propre.",
            "action": "Pour les œufs diaboliques, vous avez besoin d'un jaune poudré. Retournez à l'eau bouillante pendant 2 minutes si vous êtes sous-dosé, puis rebain de glace."
          },
          {
            "state": "Perfect",
            "description": "Yolk est entièrement sertie, jaune vif à doré, poudreuse et sèche. Pas d'anneau noir au bord. Le blanc est complètement ferme et pele proprement sans piquer.",
            "action": "Halte immédiatement pendant que le jaune est sec et s'émiette librement."
          },
          {
            "state": "Overdone",
            "description": "Un anneau vert-gris prononcé autour du jaune. Le jaune est jaune pâle et crayeux, avec une faible odeur de soufre.",
            "action": "Les œufs sont encore comestibles et le remplissage masquera le soufre lorsqu'il sera mélangé avec de la mayo et de la moutarde, mais réduisez votre timing à 11 minutes avec un bain de glace approprié la prochaine fois."
          }
        ]
      },
      "feelCue": "Maintenez un œuf pelé dur dans votre paume et pressez très doucement — il devrait se sentir complètement solide et uniformément ferme, comme une boule de stress qui ne donne pas du tout."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "hard_boiled_eggs",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "deviled_yolk_filling",
      "instructions": "Couper les œufs dans le sens de la longueur avec une coupe sûre propre. Mettez les jaunes dans un bol — les blancs vont sur un plateau. Appuyez sur les jaunes à travers un tamis à mailles fines avec le dos d'une cuillère (ou utilisez un riz) pour obtenir la texture la plus soyeuse possible. Ajouter la mayonnaise, le Dijon, le vinaigre, le sel et le poivre blanc. Agiter vigoureusement jusqu'à ce qu'il soit complètement lisse et crémeux — pas un grain de jaune doit être visible. Goûtez et ajustez : il doit être nettement tanné et bien salé. Le remplissage doit être plus gras qu'il ne semble juste dans le bol — il adoucit considérablement une fois qu'il rencontre le blanc d'œuf.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, crémeuse et dorée qui tombe d'une cuillère dans un ruban lent, sans grain ni grumeaux de jaune non masqué.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux de jaune visibles restent dans le remplissage. Le mélange est granuleux et ne tient pas encore ensemble dans une pâte lisse. Vinaigre pas encore uniformément distribué.",
            "action": "Mash plus vigoureusement, ou appuyez à travers un tamis fin. La graine du remplissage fini est la défaillance la plus courante et la plus évitable."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, uniforme, or pâle. Il tombe de la cuillère dans un ruban épais et lent. Des odeurs de moutarde et une tanget nette de vinaigre. Il tient une forme de pipe.",
            "action": "Goût et saison. Transférer dans un sac de tuyauterie muni d'une pointe étoile ou utiliser un sac à fermeture éclair avec un coin coupé."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage est trop mince et éclaboussé de trop de mayonnaise ou de vinaigre — il ne tiendra pas une forme piped et sortira des blancs.",
            "action": "Ajouter plus de jaune tamisé (si disponible) ou une touche plus Dijon pour épaissir. Refroidir pendant 15 minutes — le remplissage à froid tient une forme de tuyau bien meilleure que la température ambiante."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité entre vos doigts — il devrait se sentir soyeux et frais sans grain. Toute texture dans le bol sera amplifiée en bouche."
    },
    {
      "nodeId": "step_3",
      "action": "Assembler",
      "inputs": [
        "hard_boiled_eggs",
        "deviled_yolk_filling"
      ],
      "outputState": "filled_egg_whites",
      "instructions": "Disposer les moitiés blanches sur un plateau de service. S'ils se cassent, couper une tranche du fond arrondi pour créer une base plate. Faites sécher les intérieurs avec un coin de serviette en papier — toute humidité diluera le remplissage. Tuyau ou cuillère le remplissage généreusement dans chaque cavité, le bombant légèrement au-dessus du bord du blanc — un remplissage de chasse semble piquant, un dôme généreux semble abondant. Chaque moitié devrait avoir un remplissage égal, généreux.",
      "visualCue": {
        "primaryTarget": "Demi-tasses blanches d'albâtre chacune couronnée d'un généreux dôme de remplissage en or pâle, assis à plat et stable sur le plateau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les blancs sont mouillés à l'intérieur et le remplissage est fluide et mince — ne tenant pas une forme de dôme. Certains blancs sont encore en train de basculer sur l'assiette.",
            "action": "Pat blanc sèche avant de remplir. Refroidir le remplissage pendant 15 minutes pour le fermer avant la tuyauterie s'il ne tient pas sa forme."
          },
          {
            "state": "Perfect",
            "description": "Chaque moitié tient un généreux et propre dôme de remplissage. Les blancs sont blancs vifs sans décoloration. Le plateau semble abondant et accueillant.",
            "action": "Garnir immédiatement avant que la surface de remplissage sèche."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage a été empilé si haut qu'il tombe des côtés des blancs et pooling sur le plateau. Les blancs sont surchargés et désordonnés.",
            "action": "Un sac de tuyauterie avec une pointe d'étoile donne le plus de contrôle pour les remplissages généreux mais doux. Gratter l'excès de dos et re-tuber plus prudemment."
          }
        ]
      },
      "feelCue": "Appuyez légèrement sur un doigt sur le côté d'un blanc rempli — il devrait être complètement ferme et pas du tout roc. Un blanc d'œuf à bascule envoie le remplissage glisser sur le plateau au moment où quelqu'un touche le plateau."
    },
    {
      "nodeId": "step_4",
      "action": "Dresser",
      "inputs": [
        "filled_egg_whites",
        "ing_07",
        "ing_08"
      ],
      "outputState": "deviled_eggs",
      "instructions": "Maintenez le paprika sur chaque oeuf d'au moins 20 cm au-dessus et appuyez doucement sur le récipient pour épousseter un mince voile d'orange rouge à la surface — pas un amas, juste un murmure. Dispersez la ciboulette à l'autre bout du plateau. Servir immédiatement ou réfrigérer à découvert jusqu'à 4 heures. Porter à température ambiante 20 minutes avant de servir — le remplissage à froid perd une grande partie de son tang et de sa crémosité.",
      "visualCue": {
        "primaryTarget": "Un plateau d'oeufs à croûte d'or pâle s'éparpille avec un léger roussissement de paprika et éparpillé de fils de ciboulette vert vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas encore de paprika ou de ciboulette. Le remplissage semble simple et inachevé. La garniture n'est pas simplement décorative: le paprika ajoute de la chaleur douce et de la fumée qui fait partie de la saveur.",
            "action": "Appliquer d'abord la garniture — paprika, puis la ciboulette. Gardez la lumière d'application du paprika; il devrait teinter la surface, pas s'y empiler."
          },
          {
            "state": "Perfect",
            "description": "Un rouge clair uniforme du paprika sur chaque œuf. Morceaux de colombier vert vif et soigneusement dispersés. Le plateau a un rythme visuel propre et festif.",
            "action": "Servir dans les 2 heures pour une fraîcheur optimale, ou réfrigérer et ramener à la température avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Un lourd monticule orange de paprika se trouve sur le dessus de chaque œuf, obscurcissant entièrement la couleur de remplissage et goûtant amer et poussiéreux.",
            "action": "Badigeonner l'excès de paprika doucement avec une brosse à pâte douce et réappliquer d'une plus grande hauteur avec une main beaucoup plus légère."
          }
        ]
      },
      "feelCue": "Ramassez un œuf fini démonté et aspirez - le très doucement — le remplissage ne doit pas glisser ou gâcher. Le remplissage ferme, frais et en place est le signe que la balance des graisses au vinaigre est correcte."
    }
  ]
};
