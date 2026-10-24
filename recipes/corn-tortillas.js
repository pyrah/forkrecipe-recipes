export default {
  "repoId": "master_mexican_corn_tortillas_001",
  "parentRepoId": null,
  "slug": "corn-tortillas",
  "author": "ForkRecipe Kitchen",
  "title": "Tortilles de maïs Masa Harina",
  "description": "Des disques minces de masa pressés à la main et cuits sur un comal sec jusqu'à ce qu'ils bouffent avec de la vapeur piégée — la bouffée n'est pas décoration, il est la preuve que l'intérieur est vivant et léger, que la poche de vapeur tiendra vos remplissages sans s'effondrer.",
  "cuisine": "Mexicain",
  "culture": "Mexicain central",
  "category": "breads",
  "tags": [
    "tortilla",
    "Mexique",
    "Masa",
    "comal",
    "maïs",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "45 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Masa harina (Maseca ou équivalent)",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "masa fraîche d'une tortilleria (skiper l'étape d'hydratation)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude (environ 50°C)",
      "ratioValue": 300,
      "defaultUnit": "ml",
      "substitutions": [
        "bouillon de poulet chaud (ajoute de la saveur)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "sel de mer"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Raccourcis de lard ou de légumes",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "huile de coco raffinée",
        "beurre non salé"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrater",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "masa_dough",
      "instructions": "Mélanger la masa harina et le sel dans un grand bol de mélange. Ajouter l'eau chaude à la fois et utiliser vos mains pour rassembler le mélange, presser et presser jusqu'à ce qu'une pâte uniforme se forme. Ajouter le saindoux ou le raccourcissement en petits morceaux et le tricoter en pliant et en appuyant jusqu'à ce qu'il soit complètement incorporé. Au début, la pâte sera trop humide — continuez à travailler. La masa harina a très soif et absorbera l'eau dans les 2 à 3 minutes suivant le mélange actif. Une fois qu'il se réunit, pétrir pendant 2 minutes. Couvrir avec une serviette de cuisine humide et se reposer pendant 15 minutes — ce repos n'est pas facultatif. Pendant cette période, les particules de maïs nixtamalisées finissent par absorber l'eau et la graisse se distribue uniformément, ce qui se traduit par des tortillas qui sont pliables plutôt que friables. Après le repos, testez la pâte en la pressant : elle ne doit pas craquer aux bords et ne doit pas coller agressivement à votre paume. Si elle craque, ajouter de l'eau une cuillère à café à la fois. Si elle colle fortement, hydratez légèrement vos mains et travaillez l'humidité sans ajouter plus d'eau au bol.",
      "visualCue": {
        "primaryTarget": "La toux est lisse, uniforme jaune-gris, et tient une forme de boule sans craquer ni coller. La surface a un léger reflet de la graisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est encore émiettée et sèche, tombant aux bords lorsqu'elle est pressée. On dirait du sable humide plutôt qu'une masse cohésive.",
            "action": "Ajouter de l'eau chaude une cuillère à café à la fois, en travaillant chaque addition complètement avant d'ajouter plus. Ne vous précipitez pas — donnez à la masa harina le temps d'absorber entre les ajouts."
          },
          {
            "state": "Perfect",
            "description": "Pâte lisse et souple qui tient sa forme, ne craque pas lorsqu'elle est légèrement courbée, et pele proprement le palmier. Sens de maïs frais et de graisse légère. Une pièce pincée tient ensemble comme de l'argile de modélisation.",
            "action": "Couvrir avec un chiffon humide et reposer 15 minutes avant la portion."
          },
          {
            "state": "Overdone",
            "description": "La toux est très collante et humide, adhérant agressivement aux mains et aux surfaces. La surface semble brillante et presque translucide.",
            "action": "Saupoudrer en masa harina une cuillère à café à la fois et pétrir. La pâte va corriger rapidement — trop humide masa est plus facile à fixer que trop sec."
          }
        ]
      },
      "feelCue": "La bonne pâte de masa se sent comme de l'argile à modeler chaude — assez lisse pour rouler dans une boule sans fissures de surface, assez ferme pour tenir sa forme quand vous la posez. Il devrait être frais au toucher malgré l'eau chaude car la masa absorbe rapidement la chaleur."
    },
    {
      "nodeId": "step_2",
      "action": "Presser",
      "inputs": [
        "masa_dough"
      ],
      "outputState": "pressed_tortillas",
      "instructions": "Divisez la pâte en portions égales, d'environ 35 à 40 grammes chacune, et roulez chacun dans une boule lisse entre vos paumes. Gardez toutes les boules couvertes sous le chiffon humide pour éviter le séchage. Pour presser : couper deux cercles d'un sac à fermeture éclair ou utiliser des pièces en plastique légèrement plus grandes qu'une tortilla. Placer un cercle en plastique sur la plaque inférieure d'une presse à tortilla. Placez une boule de pâte légèrement hors centre vers le côté de la charnière. Couvrez le deuxième cercle en plastique et fermez fermement la presse, en appliquant une pression uniforme et constante à travers la poignée. Ouvrez et faites pivoter la tortilla de 180 degrés, puis appuyez à nouveau pour obtenir une variation d'épaisseur. La tortilla doit avoir environ 2 mm d'épaisseur et de 15 à 16 cm de diamètre. Si vous n'avez pas de presse tortilla, placez la boule de pâte entre les deux feuilles de plastique et pressez avec le fond plat d'une poêle lourde, en utilisant votre poids corporel penché vers l'avant — le résultat est identique. Pelez le plastique d'un côté, posez la tortilla sur votre paume et épluchez le plastique restant.",
      "visualCue": {
        "primaryTarget": "Rond, même disque d'environ 15 cm de long et uniformément mince de 2 mm. Les bords sont propres. La surface montre une faible texture du grain de la masa.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tortilla est épaisse, de 4 à 5 mm, et inégalement pressée — plus épaisse au centre, mince aux bords. Va cuisiner dans un disque dense et mâcheux.",
            "action": "Appuyez à nouveau avec plus de pression, et faites pivoter 90 degrés entre les presses pour une distribution plus uniforme."
          },
          {
            "state": "Perfect",
            "description": "Disque uniforme de 2 mm, légèrement translucide aux bords, tient ensemble lorsque le plastique est pelé. Les bords ne sont à peine pas teints — une tortilla cette fine a l'intégrité structurelle mais se sent délicate.",
            "action": "Peler du plastique et poser directement sur le comal chaud."
          },
          {
            "state": "Overdone",
            "description": "Surpression à 1 mm ou moins — les déchirures de tortillas lorsque le plastique est enlevé ou a des trous partout.",
            "action": "Re-ballez soigneusement la masa déchirée et laissez reposer 5 minutes avant de presser à nouveau. Les tortillas surpressées résultent généralement d'une pâte trop sèche — ajoutez quelques gouttes d'eau à la pâte restante."
          }
        ]
      },
      "feelCue": "Une tortilla bien pressée se sent à peine là dans votre main — papier-fin et frais, avec une légère humidité de l'humidité dans la pâte. Le plastique s'éloigne proprement sans déchirer la masa si l'hydratation est correcte."
    },
    {
      "nodeId": "step_3",
      "action": "Faire griller",
      "inputs": [
        "pressed_tortillas"
      ],
      "outputState": "cooked_tortillas",
      "instructions": "Chauffer une poêle comale, en fonte ou lourde à feu moyen-vif pendant au moins 3 minutes jusqu'à ce qu'elle soit très chaude — une goutte d'eau devrait s'évaporer en moins de 2 secondes. Ne graissez pas la surface. Placez la tortilla à plat sur le comal sec et faites cuire pendant 45 à 60 secondes jusqu'à ce que le dessous ait quelques taches brun clair et que les bords aient perdu leur aspect brut. Faire sauter et cuire le deuxième côté pendant 45 à 60 secondes. À ce stade, la tortilla sera surtout faite mais pâle. Flip une dernière fois et cuire pendant 20 à 30 secondes de plus. Au cours de ce dernier tour, si tout s'est bien passé, la tortilla va gonfler considérablement — une grosse bulle de vapeur enflant les deux moitiés. Cette bouffée est le but. Il indique que la structure interne est complète et que la vapeur est piégée uniformément entre deux couches entièrement cuites. Appuyez doucement sur n'importe quelle tache non perforée avec un chiffon plié pour encourager l'inflation. Transférer dans un panier doublé d'une serviette de cuisine propre et plier la serviette sur les tortillas pour piéger la vapeur et les garder doux.",
      "visualCue": {
        "primaryTarget": "Tortilla est dorée avec des taches brunes sur les deux côtés et a complètement gonflé sur le flip final — un dôme dramatique de vapeur. Les bords sont secs et légèrement croquants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tortilla est pâle, gris-blanc des deux côtés sans brunissement. Il n'a pas gonflé. L'intérieur sera cru et gommé.",
            "action": "Le comal n'est pas assez chaud. Augmenter la chaleur et laisser la poêle récupérer pendant 2 minutes avant de continuer. Les tortillas sous-marines vont se coller et se déchirer quand vous essayez de les retourner."
          },
          {
            "state": "Perfect",
            "description": "Taches brun clair éparpillées des deux côtés, marque d'omble ou deux. Puffé au troisième tour comme un ballon miniature. L'intérieur, quand la tortilla se dégonfle et que vous la pressez doucement, se sent chaud et doux.",
            "action": "Enveloppez la serviette immédiatement. La tortilla s'assouplira et deviendra souple à mesure qu'elle s'évaporera à l'intérieur de la serviette."
          },
          {
            "state": "Overdone",
            "description": "Tortilla est uniformément brun foncé, raide et légèrement cassante. N'a pas gonflé — l'humidité cuite avant que la vapeur puisse se former. Il craquera quand il sera plié.",
            "action": "Elles sont encore comestibles, mais sont mieux utilisées comme tostadas plutôt que comme tacos — brossez avec de l'huile et des toasts au four jusqu'à ce qu'ils soient croustillants."
          }
        ]
      },
      "feelCue": "Une tortilla fraîche tirée de la serviette doit se sentir douce et chaude, presque vapeur dans la main — elle se plie facilement autour d'un remplissage sans craquelure. L'odeur est le maïs grillé avec un léger bord minéral de la nixtamalisation. S'il se sent raide ou papier, il était soit trop cuit, soit perdu de la vapeur avant de servir."
    }
  ]
};
