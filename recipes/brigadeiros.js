export default {
  "repoId": "master_brazilian_brigadeiros_001",
  "parentRepoId": null,
  "slug": "brigadeiros",
  "author": "ForkRecipe Kitchen",
  "title": "Les brigadesiros",
  "description": "Les truffes au chocolat bien-aimées du Brésil — seulement trois ingrédients cuits à un caramel qui roule dans des boules brillantes et des couches dans des saupoudrers de chocolat; la pièce maîtresse inévitable de chaque table d'anniversaire brésilienne.",
  "cuisine": "Brésil",
  "culture": "Brésil",
  "category": "desserts",
  "tags": [
    "végétarien",
    "Sans gluten",
    "Brésilien",
    "chocolat",
    "truffe",
    "confiserie"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 5,
    "salty": 0,
    "sour": 0,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Sweetener",
      "name": "Lait condensé sucré (1 397 g d'étain)",
      "ratioValue": 397,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Poudre de cacao non sucrée (ou chocolat noir à 70%, finement râpé)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "70 g de chocolat noir finement râpé 70%"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "beurre salé"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Garnish",
      "name": "Saupoudres de chocolat (granulado)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "cacao en poudre",
        "pistaches concassées",
        "flocons de noix de coco grillés"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Pince de sel fin",
      "ratioValue": 1,
      "defaultUnit": "pinch",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire fondre",
      "inputs": [
        "ing_03",
        "ing_01",
        "ing_02",
        "ing_05"
      ],
      "outputState": "brigadeiro_mix",
      "instructions": "Placer le beurre dans une casserole à fond lourd à feu moyen-doux. Une fois fondu, ajouter le lait condensé, le cacao en poudre et une pincée de sel. Mélanger immédiatement — utiliser une spatule en caoutchouc ou une cuillère en bois résistant à la chaleur. Le mélange sera d'abord lisse et brillant. Mélanger en continu pour éviter que toute partie de la base ne s'échauffe, surtout aux bords où la chaleur est la plus intense.",
      "visualCue": {
        "primaryTarget": "Un mélange lisse, uniformément brun foncé, brillant dans la poêle. Pas de stries de beurre ou de cacao sec visibles. La surface brille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux de cacao encore visibles et non dissouts. Le beurre s'est mis en commun au lieu de s'intégrer.",
            "action": "Incorporer plus vigoureusement et réduire légèrement la chaleur pour donner au cacao le temps d'hydrater dans le lait condensé."
          },
          {
            "state": "Perfect",
            "description": "Entièrement uniforme brun foncé, lisse et brillant. Sensation de cacao et de lait sucré. Le beurre est entièrement émulsifié.",
            "action": "Continuez à cuisiner et à remuer: le point de brigadeiro est toujours devant."
          },
          {
            "state": "Overdone",
            "description": "Des taches brûlées sombres apparaissent aux bords. Une odeur amère et des taches foncées partout.",
            "action": "Réduire immédiatement la chaleur et continuer à remuer. De petites zones brûlées peuvent être laissées derrière si vous transférez rapidement dans une poêle propre."
          }
        ]
      },
      "feelCue": "Le mélange doit se déplacer fluidement sous la spatule à ce stade, comme un chocolat chaud épais — toute résistance indique que la chaleur est trop élevée."
    },
    {
      "nodeId": "step_2",
      "action": "Faire réduire",
      "inputs": [
        "brigadeiro_mix"
      ],
      "outputState": "brigadeiro_fudge",
      "instructions": "Continuer la cuisson à feu moyen-doux, en remuant constamment pendant 8 à 12 minutes. Le mélange s'épaissira progressivement, et vous commencerez à le voir s'éloigner des côtés et du fond de la poêle dans une ligne propre que vous remuerez. C'est le point critique de brigadeiro. Testez-le en exécutant la spatule vers le centre de la casserole : si la piste reste ouverte pendant 2-3 secondes avant que le mélange ne revienne, elle est prête. Retirer du feu et mélanger dans l'extrait de vanille. Le mélange s'épaissira davantage à mesure qu'il refroidit.",
      "visualCue": {
        "primaryTarget": "Le mélange ne coule plus librement. Il s'éloigne des parois de la casserole en une seule masse et la spatule laisse une piste propre qui tient pendant plusieurs secondes avant de se fermer lentement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La piste de spatule se ferme immédiatement et le mélange est encore très fluide. Il ne sera pas assez ferme pour rouler en boules.",
            "action": "Continuer la cuisson et remuer. La dernière étape se déroule rapidement — vérifiez toutes les 2 minutes à partir de la note de 8 minutes."
          },
          {
            "state": "Perfect",
            "description": "La piste tient 2 à 3 secondes. Le mélange se déplace en masse lorsque la casserole est inclinée. On dirait une ganache épaisse et brillante. La température est d'environ 108°C (226°F).",
            "action": "Ajouter la vanille, verser sur une assiette beurrée et refroidir."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est devenu très rigide et difficile à remuer. Il se déplace dans des touffes sèches et a perdu son éclat. La piste se tient en permanence.",
            "action": "Verser immédiatement sur l'assiette beurrée. Ajouter 1 cuillère à soupe de crème lourde et remuer dans le mélange encore chaud pour l'adoucir légèrement."
          }
        ]
      },
      "feelCue": "Au point de brigadeiro, la masse se comporte comme une avalanche lente, coulissante sur la casserole en une seule feuille brillante plutôt que de couler comme du liquide."
    },
    {
      "nodeId": "step_3",
      "action": "Refroidir",
      "inputs": [
        "brigadeiro_fudge"
      ],
      "outputState": "cooled_brigadeiro",
      "instructions": "Beurrer légèrement une assiette plate ou un plat peu profond avec du beurre non salé. Verser le mélange de brigadeiro chaud sur la plaque en une seule couche plate. Ne grattez pas la poêle: les morceaux séchés ou brûlés collés sur les côtés doivent être laissés derrière. Laisser refroidir complètement à température ambiante de 20 à 30 minutes, puis réfrigérer à découvert de 30 à 60 minutes jusqu'à ce qu'il soit suffisamment ferme pour rouler.",
      "visualCue": {
        "primaryTarget": "Un disque de couleur chocolat foncé qui tient sa forme lorsque la plaque est inclinée. La surface est mate du refroidissement et ferme à une touche légère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est encore doux et chaud. Il s'étend sur la plaque et colle à un bout de doigt lorsqu'il est pressé.",
            "action": "Réfrigérer encore 20 minutes. N'essayez pas de rouler au chaud — il ne fera que frotter."
          },
          {
            "state": "Perfect",
            "description": "Assez ferme pour tenir une empreinte digitale lorsqu'elle est pressée. Lorsqu'une petite pièce est écopée, elle tient une forme sans s'étendre. Toujours légèrement souple, pas rigide.",
            "action": "Allez-y."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est devenu trop dur et fragile au réfrigérateur. Il craque plutôt que de rouler en douceur.",
            "action": "Laisser passer à la température ambiante pendant 5-10 minutes. Agenouillez doucement vos mains — la chaleur corporelle l'adoucit."
          }
        ]
      },
      "feelCue": "Appuyez avec un doigt — l'indentation doit tenir sa forme sans que le mélange s'étende autour de votre doigt. Comme presser dans une ganache au chocolat très froide."
    },
    {
      "nodeId": "step_4",
      "action": "Façonner",
      "inputs": [
        "cooled_brigadeiro",
        "ing_04"
      ],
      "outputState": "finished_brigadeiros",
      "instructions": "Répartir le chocolat sur une assiette plate. Beurrez légèrement vos paumes avec une petite quantité de beurre non salé. Faites environ 1 cuillère à soupe (15g) du mélange brigadeiro et roulez-le entre vos paumes en mouvements circulaires rapides pour former une sphère ronde et lisse. Placez-le immédiatement dans les saupoudrages et roulez doucement pour enrober complètement, en appuyant légèrement pour que les saupoudrages adhèrent. Transférer sur une tasse en papier ou un plateau parcheminé. Travaillez vite — la chaleur de vos mains adoucit rapidement la brigadeiro. Re-beurrer vos paumes toutes les truffes 3-4.",
      "visualCue": {
        "primaryTarget": "Une sphère parfaite uniformément enduite de chocolat saupoudrer sans taches chauves. Les saupoudres adhèrent complètement et la truffe conserve sa forme ronde sans s'aplatir.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Saupoudrer seulement la moitié de la surface. La truffe est décalée ou aplatie par un laminage insuffisant. Patchs chauves visibles.",
            "action": "Reroulez doucement dans les saupoudres, en appuyant légèrement. Si la forme est incorrecte, reroulez entre les palmiers beurrés avant le revêtement."
          },
          {
            "state": "Perfect",
            "description": "Une boule uniformément ronde entièrement recouverte de saupoudrers. Aucun mélange de brigadeiro visible nulle part. Il tient sa forme lorsqu'il est placé sur le plateau.",
            "action": "Placer dans une mini tasse en papier et continuer avec le reste du mélange."
          },
          {
            "state": "Overdone",
            "description": "La truffe a fondu à la suite d'une manipulation excessive et est maladive et collante. Les sprinkles sont trop profonds.",
            "action": "Retournez au réfrigérateur pendant 5 minutes pour fermer, puis reroulez rapidement."
          }
        ]
      },
      "feelCue": "Roulez la truffe entre vos paumes avec juste assez de pression pour la sentir glisser en douceur — trop de pression et elle déforme, trop peu et la surface reste rugueuse."
    }
  ]
};
