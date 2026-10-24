export default {
  "repoId": "master_italian_salt_baked_branzino_001",
  "parentRepoId": null,
  "slug": "salt-baked-branzino",
  "author": "ForkRecipe Kitchen",
  "title": "Branzino salé",
  "description": "Un branzino entier enterré dans une épaisse croûte de sel blanc-oeuf et cuit au four — la coquille minérale s'étanchéité dans la vapeur et l'humidité, la cuisson du poisson impossiblement doucement dans ses propres aromatiques.",
  "cuisine": "Italien",
  "culture": "Méditerranée",
  "category": "seafood",
  "tags": [
    "branzino",
    "Italien",
    "croûte salée",
    "poissons entiers",
    "méditerranéen",
    "Cuisson",
    "dramatique"
  ],
  "difficulty": 3,
  "activeTime": "20 min",
  "totalTime": "50 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Branzino entier (basse européen), vidé et écalé",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "toute la mer",
        "snapper rouge"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sels de mer grossiers (non iodés)",
      "ratioValue": 1500,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Blancs d'oeufs",
      "ratioValue": 3,
      "defaultUnit": "units",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Citrus",
      "name": "Citron, tranché en rondelles",
      "ratioValue": 1,
      "defaultUnit": "lemon",
      "substitutions": [
        "tranches d'orange"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Frondes de fenouil frais",
      "ratioValue": 1,
      "defaultUnit": "small bunch",
      "substitutions": [
        "d'aneth frais"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 4,
      "defaultUnit": "sprigs",
      "substitutions": [
        "romarin frais"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Graines de persil à feuilles plates fraîches",
      "ratioValue": 4,
      "defaultUnit": "sprigs",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile d'olive extra vierge, pour le service",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "salt_crust_mixture",
      "instructions": "Préchauffer le four à 190°C (375°F). Dans un grand bol, mélanger le sel de mer grossier avec les blancs d'œufs. Mélangez fermement avec vos mains jusqu'à ce que chaque grain de sel soit enduit et que le mélange ressemble à du sable humide — il devrait s'agglutiner lorsqu'il est pressé et tenir une impression de votre poing. C'est le mortier qui va sceller le poisson. Si elle s'écroule et ne tient pas une forme, ajoutez un quatrième blanc d'œuf.",
      "visualCue": {
        "primaryTarget": "Un mélange dense et lourd de la couleur et de la texture du sable humide de la plage – grondant facilement lorsqu'il est pressé, tenant sa forme sans s'effondrer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sel est encore sec et granuleux. Les blancs d'oeufs s'assoient dans des zones humides plutôt que de couvrir tous les grains. Le mélange s'effondre lorsqu'il est pressé.",
            "action": "Mélanger plus vigoureusement jusqu'à ce que tout le blanc d'œuf soit uniformément distribué. Le mélange doit avoir une forme pressée ou la croûte s'ouvrira pendant la cuisson."
          },
          {
            "state": "Perfect",
            "description": "Lourd, cohésif, humide. Serrez dans une masse ferme qui tient sa forme lorsqu'elle est libérée, comme du sable humide bien emballé pour un sandcastle.",
            "action": "Travaillez rapidement — les blancs d'œufs commencent à se mettre en température."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a été trop travaillé et commence à se sentir collant plutôt que sableux. Les blancs d'oeufs sont légèrement mousseux.",
            "action": "Elle est encore utilisable — appuyez sur. La croûte est peut-être un peu moins rigide, mais elle scellera toujours adéquatement."
          }
        ]
      },
      "feelCue": "Serrez un poing — il devrait emballer comme du sable humide, en tenant l'impression de vos doigts sans pleurer liquide."
    },
    {
      "nodeId": "step_2",
      "action": "Saison",
      "inputs": [
        "ing_01",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "stuffed_branzino",
      "instructions": "Vérifiez que la cavité du poisson est propre et sèche. Assaisonner légèrement l'intérieur avec une pincée de sel. Poser les rondelles de citron dans un motif de bardeau le long du plancher de la cavité. Emballez les frondes de fenouil, le thym et le persil sur le citron — la cavité doit être visiblement pleine. Les herbes vaporiseront à l'intérieur de la croûte et parfumeront la chair de l'intérieur sans la pénétrer extérieurement du tout.",
      "visualCue": {
        "primaryTarget": "La cavité des poissons bombait visiblement avec des herbes vertes et des rondelles de citron qui se chevauchaient. L'extérieur du poisson est sec et non décoré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La cavité est seulement à moitié remplie. Quelques brins d'herbe clairsemés se pressent autour.",
            "action": "Ajouter plus d'herbes — la farce se développe avec la chaleur et libère ses aromatiques sous forme de vapeur. Une farce clairsemée laisse la chair sans saveur."
          },
          {
            "state": "Perfect",
            "description": "Cavidité bien remplie d'herbes et de citron, avec un léger gonflement visible le long du ventre. Le poisson tient ensemble lorsqu'il est levé.",
            "action": "Transférer immédiatement dans le plateau de cuisson sur le lit de sel."
          },
          {
            "state": "Overdone",
            "description": "Tellement de farce entaillée dans le ventre a été déchiré ou le poisson a été forcé à ouvrir. Les herbes se déversent de la cavité.",
            "action": "Réduire légèrement la quantité et fermer le ventre avec une brochette si nécessaire pour tenir tout en place."
          }
        ]
      },
      "feelCue": "Le poisson farci devrait se sentir lourd et dense quand vous le soulevez. Vous pouvez sentir les herbes remplir le ventre — une résistance rassurante et solide."
    },
    {
      "nodeId": "step_3",
      "action": "Appuyez sur",
      "inputs": [
        "stuffed_branzino",
        "salt_crust_mixture"
      ],
      "outputState": "encased_branzino",
      "instructions": "Étendre un tiers du mélange de sel sur une plaque de cuisson bordée de la forme et de la taille exactes du poisson, d'environ 1,5 cm d'épaisseur. Pose le branzino en peluche sur le dessus. Emballez fermement le reste du mélange de sel sur le dessus et les côtés du poisson, en le pressant et en le lissant dans une enveloppe solide, même d'au moins 1,5 cm d'épaisseur à chaque point. Faites une attention particulière à la tête et à la queue — les fissures là - bas laisseront échapper la vapeur et sécher la chair. Le poisson doit être complètement invisible sous la croûte. Lisser la surface avec des palmiers mouillés.",
      "visualCue": {
        "primaryTarget": "Un monticule lisse et solide de sel blanc sur la plaque de cuisson, clairement en forme de poisson, sans fissures, fentes ou poissons exposés visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte salée est mince dans les endroits, craquelant aux bords ou à la queue. Des taches de peau de poisson sont encore visibles à travers la croûte.",
            "action": "Appuyez sur le mélange de sel supplémentaire sur toutes les zones exposées et lissez fermement avec les mains mouillées. Des taches fines s'ouvriront au four et sécheront ces portions de poisson."
          },
          {
            "state": "Perfect",
            "description": "Un dôme blanc lisse et solide de 1,5 à 2 cm d'épaisseur. Pas de fissures. Pas de poisson visible. La surface a été lissée à une finition uniforme.",
            "action": "Dans le four, cuire immédiatement avant que le sel ne tire l'humidité du poisson."
          },
          {
            "state": "Overdone",
            "description": "La croûte salée est trop épaisse (plus de 3 cm) en place, ce qui la rend très lourde. La forme du poisson est complètement perdue et la croûte ressemble à un pain blanc sans forme.",
            "action": "Il va encore fonctionner, mais prendre plus de temps à cuire et être plus difficile à craquer. Visez la cohérence de l'épaisseur la prochaine fois."
          }
        ]
      },
      "feelCue": "Patientez fermement la croûte — elle doit se sentir aussi solide et rigide que l'argile emballée, sans taches molles qui donnent quand on la presse."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "encased_branzino"
      ],
      "outputState": "baked_branzino",
      "instructions": "Cuire à 190°C (375°F) pendant 25 à 30 minutes pour un poisson de 600g. Les échelles de temps avec le poids du poisson: ajouter 5 minutes par 200g supplémentaire. La croûte durcit jusqu'à une coquille rigide et crayeuse et peut développer une faible coloration ivoire à beige sur le dessus. Il ne brunira pas de façon spectaculaire — les indices visuels ici sont tout au sujet du durcissement de la croûte. Un thermomètre à sonde inséré dans la croûte doit lire de 58 à 60 °C à la partie la plus épaisse du poisson. Si vous n'avez pas de sonde, utilisez le timing comme guide.",
      "visualCue": {
        "primaryTarget": "Une coquille dure et rigide blanc crayeuse sur le plateau de cuisson qui résiste lorsqu'elle est tapée d'une cuillère en bois.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est encore légèrement douce et donne lorsqu'elle est pressée. C'est comme de l'argile dense et pas encore encombrée. Sonde se lit en dessous de 55°C.",
            "action": "Revenez encore 5 minutes. La croûte doit être complètement rigide avant de craquer — une croûte molle signifie un poisson mal cuit à l'intérieur."
          },
          {
            "state": "Perfect",
            "description": "La croûte est dure, crayeuse et sonne creuse lorsqu'elle est tapée avec une cuillère. Sonde à la partie la plus épaisse lit 58-60°C. Une faible odeur d'herbes s'échappant autour des bords.",
            "action": "Apportez immédiatement à la table pour le craquement spectaculaire côté table."
          },
          {
            "state": "Overdone",
            "description": "La croûte a tourné un beige profond ou brun pâle dans les taches. Sonde se lit au-dessus de 65°C. Une forte odeur de sel cuit.",
            "action": "Le poisson peut être plus sec qu'idéal à l'intérieur. La méthode de la croûte protège contre la surcuisson extrême — la fissurer immédiatement et évaluer la chair."
          }
        ]
      },
      "feelCue": "Frappez fermement la croûte à l'aide d'une poignée de cuillère en bois — vous devriez entendre un « thunk » solide et résonnant, comme frapper sur un pot de céramique épais."
    },
    {
      "nodeId": "step_5",
      "action": "Finition",
      "inputs": [
        "baked_branzino",
        "ing_08"
      ],
      "outputState": "salt_baked_branzino",
      "instructions": "Apportez la plaque de cuisson à la table. À l'aide d'une cuillère lourde ou d'un petit maillet, fissurer fermement la croûte le long de la colonne vertébrale du poisson. Il se brisera dans de grands bourrasques — les éplucher et les jeter. Soulevez soigneusement le filet supérieur, puis retirez la colonne vertébrale en une seule pièce. Le filet inférieur est assis sur le lit de sel inférieur — glissez une spatule en dessous pour le soulever propre. Servir les filets sur des assiettes chaudes avec une généreuse préparation d'huile d'olive extra vierge et les tranches de citron de l'intérieur de la cavité.",
      "visualCue": {
        "primaryTarget": "Filets de poissons perlés, parfaitement cuits avec une surface scintillante et sans taches grises et sèches. La chair doit se détacher dans de grands flocons, humides et limpides.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La chair au point le plus épais près de la tête est toujours translucide et fraîche au toucher. Les flocons résistent à la séparation proprement dite.",
            "action": "Remettre le poisson dans la croûte cassée au four pendant encore 5 minutes — la coquille piège encore une certaine chaleur."
          },
          {
            "state": "Perfect",
            "description": "La chair est entièrement opaque, blanche à ivoire, et se sépare dans des flocons généreux et scintillants sans aucune sécheresse. Sensation intense d'herbes et de mer. Une goutte lente et claire de perles de jus naturel sur l'assiette.",
            "action": "Assiettez immédiatement et versez l'huile d'olive sur la chair exposée pendant qu'elle est encore en vapeur."
          },
          {
            "state": "Overdone",
            "description": "La chair semble sèche, crayeuse ou granuleuse. Les flocons sont petits et serrés plutôt que grands et donnent. Toute humidité a été cuite.",
            "action": "Un généreux dépôt d'excellente huile d'olive à table peut raviver la saveur, sinon la texture. Servir avec beaucoup de citron."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur un filet à l'aide d'une fourchette — il devrait se déposer immédiatement et tomber dans des flocons épais et brillants sans aucune résistance. Résistance signifie sécheresse."
    }
  ]
};
