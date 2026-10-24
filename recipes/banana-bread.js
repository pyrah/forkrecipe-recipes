export default {
  "repoId": "master_american_banana_bread_001",
  "parentRepoId": null,
  "slug": "banana-bread",
  "author": "ForkRecipe Kitchen",
  "title": "Pain de banane",
  "description": "Des bananes trop mûres, presque noires, intensément sucrées et tropicales, pliées dans une simple pâte et cuites dans un pain dense et humide avec une croûte de sucre crépitante qui sent la boulangerie et goûte la nostalgie.",
  "cuisine": "Américain",
  "culture": "Américain",
  "category": "breads",
  "tags": [
    "américains",
    "banane",
    "pain",
    "Cuisson",
    "confort"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "1 hr 15 min",
  "ratioSystem": "bakers_percentage",
  "stars": 2109,
  "forks": 234,
  "contributors": 28,
  "license": "CC-BY-SA",
  "createdAt": "2024-10-08",
  "updatedAt": "2025-10-30",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "farine de blé entier (swap de 50% pour une saveur de noisette)",
        "Mélange de farine d'avoine"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Bananes trop mûres, purée (3–4 grandes, très noires)",
      "ratioValue": 130,
      "defaultUnit": "%",
      "substitutions": [
        "plantains (très mûrs)",
        "bananes congelées"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre brun, emballé",
      "ratioValue": 65,
      "defaultUnit": "%",
      "substitutions": [
        "sucre granulé",
        "Sucre de coco"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé fondu et refroidi",
      "ratioValue": 40,
      "defaultUnit": "%",
      "substitutions": [
        "huile végétale (résultat d'humidité)",
        "Huile de coco"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Gros œufs",
      "ratioValue": 25,
      "defaultUnit": "%",
      "substitutions": [
        "oeuf de lin (1 c. à soupe de lin + 3 c. à soupe d'eau)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Leavener",
      "name": "Soda au four",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin, extrait de vanille, cannelle moulue",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": [
        "Cardamome",
        "muscade"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mash et prép bananes",
      "inputs": [
        "ing_02"
      ],
      "outputState": "mashed_banana",
      "instructions": "Peler les bananes trop mûres dans un grand bol. Masser soigneusement avec une fourchette jusqu'à ce qu'elle soit presque complètement lisse – quelques petites boulettes sont fines et ajoutent de la texture. Les bananes doivent être très trop mûres : brun foncé à noir à l'extérieur, douces au point d'être presque liquides. Les bananes jaunes peu mûres manquent de douceur concentrée et de conversion de l'amidon qui fait travailler le pain de banane.",
      "visualCue": {
        "primaryTarget": "Une pâte dorée-brun lisse et foncée avec de petites bosses occasionnelles. Le mash est humide et brillant, pas sec et pâle. Sensation intense de banane mûre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les bananes sont jaunes ou à peine tachetées; elles se mélangent dans une pâte pâle et raide qui sent le vert et l'amidon plutôt que le doux.",
            "action": "N'utilisez pas de bananes jaunes. Rippez plus vite en faisant cuire les bananes non pelées à 150°C pendant 20 minutes jusqu'à ce que les peaux deviennent noires, puis refroidissez avant d'utiliser."
          },
          {
            "state": "Perfect",
            "description": "Presque entièrement noir bananes mash dans une pâte sombre, humide, lisse avec un arôme de banane intensément doux, presque fermenté. Très peu de résistance à la fourchette.",
            "action": "Procédez au mélange."
          },
          {
            "state": "Overdone",
            "description": "Les bananes ont commencé à fermenter: la mash a une odeur légèrement alcoolique et aigre à côté de la douceur de la banane.",
            "action": "Ceux-ci sont en fait idéaux pour le pain de banane — la fermentation ajoute de la complexité. Continuez."
          }
        ]
      },
      "feelCue": "La purée de banane doit se sentir comme de la boue épaisse et humide entre les dents de fourche — pas raide ou crayeuse. Lorsque vous soulevez la fourchette, un ruban épais de machette devrait retomber lentement dans le bol."
    },
    {
      "nodeId": "step_2",
      "action": "Mélanger les ingrédients humides",
      "inputs": [
        "mashed_banana",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_07"
      ],
      "outputState": "wet_mixture",
      "instructions": "Vers la purée de banane, ajouter la cassonade, le beurre fondu (et refroidi), les œufs, la vanille et les épices. Whisk jusqu'à ce qu'il soit complètement combiné et que le sucre soit principalement dissous. Le beurre doit être refroidi — s'il est encore chaud, il va brouiller les œufs. Le mélange sera épais et brillant, comme une sauce au caramel lâche.",
      "visualCue": {
        "primaryTarget": "Un épais liquide brun doré foncé qui coule lentement. La couleur est uniforme — pas de stries de beurre non mélangé ou de tourbillons de sucre non dissous visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries visibles de beurre tourbillonnent dans le mélange. Le sucre se trouve dans des granules visibles au fond. Les œufs ne peuvent pas être entièrement incorporés.",
            "action": "Frottez plus vigoureusement pendant 30 secondes. Le beurre chaud qui monte à la surface est un signe que le beurre était trop chaud — qu'il refroidisse et qu'il remblaie."
          },
          {
            "state": "Perfect",
            "description": "Mélange uniforme, épais et brillant d'or foncé. Des odeurs de banane, de vanille et de sucre brun. Le sucre est complètement dissous. Il coule d'un fouet dans un ruban épais.",
            "action": "Ajouter la farine et le levain."
          },
          {
            "state": "Overdone",
            "description": "Sans objet pour une pâte mélangée à froid. Si vous voyez des morceaux d'oeufs caillés ou brouillés, le beurre était trop chaud.",
            "action": "Si les œufs sont brouillés, filtrez le mélange dans un tamis pour enlever les morceaux d'oeuf cuits. Le batteur marchera toujours."
          }
        ]
      },
      "feelCue": "Plongez un doigt dans le mélange humide et frottez entre vos doigts — il devrait se sentir légèrement gritty du sucre résiduel, puis lisse comme vous frottez. Pas de pellicule de beurre ou de croquant de sucre."
    },
    {
      "nodeId": "step_3",
      "action": "Plier dans des ingrédients secs",
      "inputs": [
        "wet_mixture",
        "ing_01",
        "ing_06"
      ],
      "outputState": "banana_batter",
      "instructions": "Passer la farine, le bicarbonate de soude et le sel ensemble sur le mélange humide. À l'aide d'une spatule en caoutchouc, plier délicatement avec un mouvement J — gratter, plier — jusqu'à ce qu'il ne reste pas de stries de farine sèche. Ne pas remuer vigoureusement ou battre. Surmener la pâte développe du gluten et crée un pain dur et caoutchouteux plutôt qu'un pain tendre et humide. Dix à quinze plis devraient suffire.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse et grumelée sans farine sèche visible. La texture est rugueuse et inégale — pas lisse. Banana mash crée des tourbillons bruns visibles dans la pâte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries blanches et des poches de farine sèche encore visibles dans la pâte. Un mélange incohérent signifie que certaines bouchées du pain seront gommées de farine crue.",
            "action": "Repliez encore 3 à 4 fois jusqu'à ce qu'il ne reste plus de taches sèches. Quelques morceaux sont fins: les morceaux sont de la banane et non de la farine non mélangée."
          },
          {
            "state": "Perfect",
            "description": "La pâte est épaisse et inégale, sans farine sèche visible. Ça a l'air légèrement grumelé des morceaux de banane. La spatule laisse un sentier qui se remplit lentement lorsqu'elle est traînée.",
            "action": "Verser immédiatement dans la casserole préparée."
          },
          {
            "state": "Overdone",
            "description": "La batterie est lisse et élastique — elle s'étire légèrement lorsque vous soulevez la spatule, presque comme une pâte à pain. Le gluten s'est développé. Le pain sera plus serré et plus dense.",
            "action": "Passer à la cuisson. Évitez cette prochaine fois en comptant les plis — 15 maximum."
          }
        ]
      },
      "feelCue": "Faites glisser une spatule à travers la pâte lentement — elle doit se séparer et revenir ensemble progressivement, comme la pâte à gâteau épaisse, ne ressort pas comme la pâte élastique ou coule librement comme la pâte à crêpe."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "banana_batter"
      ],
      "outputState": "finished_banana_bread",
      "instructions": "Préchauffer le four à 175°C. Verser la pâte dans une poêle à pain graissée et farinée de 23x13cm. En option, saupoudrer le dessus d'une cuillère à soupe de sucre brun pour une croûte craquelée. Cuire pendant 55 à 65 minutes jusqu'à ce qu'un cure-dent inséré au centre soit propre ou avec seulement quelques miettes humides. Le haut devrait craquer le long du centre — c'est exact. Laisser refroidir dans la casserole pendant 10 minutes avant d'arriver.",
      "visualCue": {
        "primaryTarget": "Haut d'or-brun profond avec une fissure naturelle qui descend le centre. Les bords des fissures sont légèrement plus foncés. Le pain s'est éloigné des côtés de la casserole.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le dessus est doré mais pas profondément doré. Le centre du sommet semble humide et légèrement coulé. Un cure-dent sort avec une pâte mouillée dessus, pas des miettes.",
            "action": "Retourner au four 5-10 minutes de plus. Tente avec feuille si le dessus est brunissant trop vite alors que le centre est encore humide."
          },
          {
            "state": "Perfect",
            "description": "De couleur dorée profonde avec une fissure centrale. L'intérieur de la fissure est encore humide, mais la surface environnante est réglée. L'épiderme sort propre ou avec quelques miettes humides — pas de pâte humide.",
            "action": "Laisser refroidir 10 minutes, puis tourner."
          },
          {
            "state": "Overdone",
            "description": "Le dessus est brun très foncé et la fissure centrale semble sèche. Les bords se sont nettement éloignés de la casserole. Le pick-dent est complètement sec.",
            "action": "Supprimer immédiatement. Refroidir dans la poêle — l'intérieur sec réhydrate légèrement de la vapeur piégée à l'intérieur pendant qu'il refroidit."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur le centre du pain avec un bout de doigt — il devrait revenir lentement et complètement, comme presser un fruit mûr mais ferme. Si elle reste dentelée, le centre est encore liquide et a besoin de plus de temps."
    }
  ]
};
