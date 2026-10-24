export default {
  "repoId": "fork_french_demiglace_001",
  "parentRepoId": "master_french_espagnole_001",
  "slug": "demi-glace",
  "parentSlug": "espagnole",
  "author": "ForkRecipe Kitchen",
  "title": "Demi-glaces",
  "description": "Descendant régal d'Espagnole : parties égales de la sauce mère et du bouillon brun, réduit de moitié sur une longue, mijoter le patient jusqu'à ce qu'il devienne brillant, sirupeux et intensément salé. Une cuillère enveloppe le dos d'une cuillère et s'accroche, l'âme concentrée de la cuisine française classique.",
  "cuisine": "Français",
  "culture": "Classique",
  "category": "sauces",
  "tags": [
    "sauce",
    "français",
    "demi-glaces",
    "réduction",
    "sauce brune"
  ],
  "difficulty": 5,
  "activeTime": "1 hour",
  "totalTime": "6 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2025-06-09",
  "updatedAt": "2025-06-09",
  "forkNote": "Egalité des parties espagnole et marron réduit de moitié à une glaçure brillante et intensément salée, l'âme des sauces de viande classiques.",
  "changes": {
    "ingredientsAdded": 1,
    "ingredientsRemoved": 0,
    "ingredientsModified": 0,
    "stepsAdded": 1,
    "stepsRemoved": 0,
    "stepsModified": 0
  },
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Stock brun (veau)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "viande bovine brune",
        "de poulet riche"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre clarifié",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "gras de boeuf fondu",
        "huile neutre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Mirepoix (oignon, carotte, céleri)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates écrasées (réduites)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Bouquet garni",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "Thym, laurier, persil, tiges attachées en tissu de fromage"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Stock brun supplémentaire (pour réduction)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "viande bovine brune"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Caramélisation",
      "inputs": [
        "ing_04",
        "ing_02"
      ],
      "outputState": "browned_mirepoix",
      "instructions": "Faire fondre environ un tiers du beurre clarifié dans un pot à fond lourd à feu moyen. Ajouter le mirepoïx et cuire, en remuant occasionnellement, jusqu'à ce que les oignons aient dépassé le translucide et que le mélange entier soit profondément doré et sucré — 12 à 18 minutes. Laissez les sucres dans la carotte et l'oignon caraméliser contre la poêle; le fond qui construit sur le fond est le début de tout.",
      "visualCue": {
        "primaryTarget": "Mirepoix ramolli et effondré, bords d'oignon doré-ambre, avec un fond de couleur rouille formant sur le fond de la poêle. La cuisine sent doux et salé, comme les légumes rôtis.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont translucides et boiteux, mais encore pâles — pas de couleur, pas d'affection pour la poêle, et l'odeur est crue et herbacée.",
            "action": "Levez légèrement la chaleur et faites cuire. Browning est d'où vient la profondeur; ne vous précipitez pas au-delà de cette étape."
          },
          {
            "state": "Perfect",
            "description": "Les oignons sont ambres aux bords, les carottes scintillent et se ramollissent, et un fond brun s'accroche au fond du pot. L'arôme est doux, noisette et salé.",
            "action": "Poussez le mirepix sur le côté et ajoutez le beurre restant à l'espace dégagé pour commencer le roux."
          },
          {
            "state": "Overdone",
            "description": "Les légumes sont noircis, le fond de la poêle est passé du brun au noir, et il y a une odeur acride et brûlée.",
            "action": "Baissez immédiatement la chaleur. Si le fond est vraiment brûlé et amer, déglacer avec un jet de stock, essuyer le pot, et recommencer le mirepoïx — le fond brûlé va taper tout ce qui y est construit."
          }
        ]
      },
      "feelCue": "Les légumes doivent étourdir régulièrement, pas violemment. Lorsque vous faites glisser une cuillère à travers le fond, vous devriez sentir la traînée collante de l'affection, pas une lisse lisse de graisse."
    },
    {
      "nodeId": "step_2",
      "action": "Toast",
      "inputs": [
        "browned_mirepoix",
        "ing_02",
        "ing_03"
      ],
      "outputState": "brown_roux",
      "instructions": "Avec le reste du beurre clarifié fondu dans la partie défrichée de la casserole, saupoudrer de farine et le remuer dans une pâte. Cuire le roux lentement, en remuant presque constamment, en le regardant passer à travers blond à cacahuète-beurre et sur un brun marron profond. Cela peut prendre 10 à 20 minutes. Elle sent de plus en plus la noix et le toast, comme la pâte à tarte. Aller bas et patient; un roux brun est une minute insouciante de brûlé.",
      "visualCue": {
        "primaryTarget": "Une pâte molle et versable de la couleur du chocolat au lait ou du beurre d'arachide foncé, sentant distinctement les noix grillées et le pain chaud. Il se déplace lentement en agitant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Roux est blond pâle ou bronzé, sent la farine crue ou simplement le beurre. Le pouvoir épaississant est élevé, mais la saveur est plate.",
            "action": "Continuer à cuire et à remuer à feu doux et moyen. Un roux brun doit développer une couleur réelle et un arôme grillé."
          },
          {
            "state": "Perfect",
            "description": "Beurre d'arachide profonde à marron brun, brillant, fluide, avec une odeur prononcée de noix grillées et de pain au four. Pas de taches noires.",
            "action": "Ajouter la pâte de tomate et continuer au pinçage."
          },
          {
            "state": "Overdone",
            "description": "Roux a obscurci au noir de café, jette une odeur acride, brûlée, et vous pouvez voir des taches noires brûlées partout.",
            "action": "Jetez-le et recommencez avec du beurre frais et de la farine. Burnt roux est amer et perd son pouvoir épaississant — il n'y a pas de sauvetage."
          }
        ]
      },
      "feelCue": "Le roux devrait se sentir comme du sable lâche et chaud qui se tourne vers la boue lisse pendant qu'il cuit — gris au début, puis soyeux. Écoutez un étourdissement doux et régulier; un craquement aigu signifie que la chaleur est trop élevée."
    },
    {
      "nodeId": "step_3",
      "action": "Caramélisation",
      "inputs": [
        "brown_roux",
        "ing_05"
      ],
      "outputState": "pincage",
      "instructions": "Incorporer la pâte de tomate dans le roux et le mirpoix et la faire cuire 3 à 5 minutes — le pinçage. Gardez-le en mouvement à feu moyen jusqu'à ce que la pâte perde son aspect brut, rouge vif, s'assombrit à une couleur de rouille de brique, et sent doux et concentré plutôt que vif et teinté. La cuisson de la tomate enlève maintenant son acidité brute et construit une autre couche de profondeur caramélisée.",
      "visualCue": {
        "primaryTarget": "La pâte de tomate s'est assombrie du rouge vif à une rouille de brique profonde, enrobant le roux et les légumes, et sent doux, profond et légèrement caramélisé plutôt que vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte de tomate est encore brillante, rouge-orange, et sent vif, cru et métallique.",
            "action": "Continuer la cuisson et remuer encore quelques minutes. La pâte de tomate crue laissera un bord adouci et acide qui se concentre seulement à mesure que la sauce diminue."
          },
          {
            "state": "Perfect",
            "description": "Le mélange est un brun brique-rouille uniforme, l'odeur de tomate est devenue sucrée et torréfié, et un fond plus profond a construit sur la poêle.",
            "action": "Whisk dans la première mesure du stock brun pour tout desserrer."
          },
          {
            "state": "Overdone",
            "description": "La tomate est devenue brune foncée à noire et sent la brûlure et l'amertume.",
            "action": "Retirer immédiatement la casserole du feu et ajouter immédiatement le bouillon pour arrêter la cuisson. Si l'odeur brûlée est forte, recommencez — l'amertume s'intensifie en une réduction."
          }
        ]
      },
      "feelCue": "La pâte se raidit et s'épaissit, s'éloignant du fond du pot dans une masse cohésive avant de s'assombrir. Cette traînée et la couleur approfondissement vous disent que l'acide brut a cuit."
    },
    {
      "nodeId": "step_4",
      "action": "Whisk",
      "inputs": [
        "pincage",
        "ing_01",
        "ing_07"
      ],
      "outputState": "loose_espagnole",
      "instructions": "Verser dans la première mesure du bouillon brun quelques louches à la fois, fouettant dur après chaque addition pour travailler des morceaux avant d'ajouter plus. Une fois lisse, déposer dans le bouquet garni et le laisser mijoter à nu, fouetter en épaississant de sorte que le roux ne s'attrape pas et ne s'assombrisse pas sur le fond.",
      "visualCue": {
        "primaryTarget": "Une sauce brune lisse, sans grumeaux, mince, qui vient à la mijoter, la couleur du thé fort, avec le bouquet garni en saillie à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est pleine de morceaux de farine, ou le stock a été ajouté trop vite, donc il est mince et cassé avec une peau de roux flottant sur le dessus.",
            "action": "fouetter vigoureusement pour briser les morceaux; si nécessaire, passer à travers un tamis. Ajouter le reste plus lentement, fouetter constamment."
          },
          {
            "state": "Perfect",
            "description": "Gloire, uniforme et sans grumeaux, enroulant légèrement le fouet lorsqu'il se réchauffe, mijotant doucement avec le bouquet garni raide.",
            "action": "Abaissez jusqu'à la plus douce mijoter pour construire l'espagnole de base."
          },
          {
            "state": "Overdone",
            "description": "Le fond a brûlé tout en fouettant, en envoyant une odeur brûlée et des taches sombres dans la sauce.",
            "action": "Arrêtez de fouetter le fond, versez soigneusement la sauce dans un pot propre sans racler la couche brûlée, et continuez à partir de là."
          }
        ]
      },
      "feelCue": "Au fur et à mesure que le bouillon entre, la pâte lourde doit se relâcher dans une sauce fluide sous le fouet — d'abord rubanée, puis fine. Il devrait avoir l'impression qu'il a complètement détendu, sans accrocs serrés pris dans les fils."
    },
    {
      "nodeId": "step_5",
      "action": "Laisser mijoter",
      "inputs": [
        "loose_espagnole",
        "ing_06"
      ],
      "outputState": "finished_espagnole",
      "instructions": "Maintenez la sauce à mijoter pendant 2 à 3 heures, en remuant de temps en temps et ensuite et en écrémant la graisse et la mousse grise de la surface, en rongant le pot à moitié du brûleur afin que les impuretés se rassemblent sur un côté. Assaisonner légèrement avec du sel — rappelez - vous qu'il se concentrera davantage. Lorsqu'il a réduit d'environ un tiers et enrobe une cuillère, étirer les solides et le bouquet garnir à travers un tamis fin. C'est ton espagnole de base.",
      "visualCue": {
        "primaryTarget": "Un espagnole clair, brillant, mahogany profond qui enveloppe légèrement l'arrière d'une cuillère, réduit d'environ un tiers, avec une surface propre exempte de graisse et de souillure.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore mince et aqueuse, brun pâle, et coule directement sur une cuillère. La surface est grasse et nuageuse.",
            "action": "Continuez à mijoter et à écrémer. La base de l'espagnole doit avoir un corps réel avant la seconde réduction, ou la demi-glace ne sera jamais mise en place."
          },
          {
            "state": "Perfect",
            "description": "Acajou profond, brillant et propre, enrobant le dos d'une cuillère de sorte qu'un doigt tiré à travers laisse une ligne claire. Pas de farine crue ou de tomate dure dans le goût.",
            "action": "Plonger dans un tamis fin et procéder à la combinaison avec le stock supplémentaire."
          },
          {
            "state": "Overdone",
            "description": "La sauce a diminué trop loin — épaisse, lugubre et surconcentrée avant même le début de la deuxième étape.",
            "action": "Whisk dans un peu de stock chaud pour le ramener à une bonne nappe avant de passer."
          }
        ]
      },
      "feelCue": "Un véritable espagnole dessiné sur une cuillère laisse un sentier propre et durable. La surface doit avoir l'air polie, non lissée avec de la graisse, et la cuisine doit sentir profondément torréfié et bœuf."
    },
    {
      "nodeId": "step_6",
      "action": "Réduire",
      "inputs": [
        "finished_espagnole",
        "ing_08"
      ],
      "outputState": "finished_demiglace",
      "instructions": "Combiner l'espagnole tendu avec un volume égal de bouillon frais brun dans un pot propre large. Portez-vous à un doux mijoter et réduisez de moitié, en écrémant patiemment et constamment au fur et à mesure que les graisses et les impuretés s'élèvent. Prenez votre temps à feu doux; un ébullition agressif va nuager et bouillir. La sauce est prête quand elle a diminué de moitié, est devenue brillante et sirupeuse, et enrobe l'arrière d'une cuillère dans une nappe laquée collante.",
      "visualCue": {
        "primaryTarget": "Une glaçure brillante, foncée et sirupeuse réduite de moitié qui s'accroche à l'arrière d'une cuillère dans une couche épaisse et laquée — une ligne de doigt propre tirée à travers elle tient et ne court pas. Un miroir à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est encore lâche et mince, s'écoule librement de la cuillère, et manque de lustre profond et de corps collant d'une véritable demi-glace.",
            "action": "Continuez à réduire doucement et à écrémer. La transformation en glaçure se produit lentement vers la fin — soyez patient et n'élèvez pas la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Réduit de moitié à une sauce visqueuse brillante de la couleur de l'acajou foncé, enrobant une cuillère épaisse et collant dans une nappe lisse. Intensément salé, rond et propre en bouche.",
            "action": "Retraire une fois de plus si désiré, refroidir et conserver. Elle mettra une gelée ferme lorsqu'elle sera réfrigérée, marque d'un grand demi - glace."
          },
          {
            "state": "Overdone",
            "description": "Réduit trop loin — collant, collant et sursauté, menaçant de brûler sur le fond et tirant dans une glaçure semblable à du goudron.",
            "action": "Retirez-le immédiatement de la chaleur et fouettez dans un peu de bouillon chaud pour le desserrer jusqu'à une consistance brillante de revêtement de cuillère, puis rééquilibrez le sel."
          }
        ]
      },
      "feelCue": "Vers la fin, les bulles ralentissent et deviennent grandes et paresseuses à mesure que la sauce s'épaissit. Soulevez la cuillère et la demi-glace, et accrochez-vous plutôt que de la bâche — lorsqu'elle est réfrigérée, une cuillère sert à la gelée savoureuse."
    }
  ]
};
