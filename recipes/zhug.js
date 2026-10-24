export default {
  "repoId": "master_yemeni_zhug_001",
  "parentRepoId": null,
  "slug": "zhug",
  "author": "ForkRecipe Kitchen",
  "title": "Zhug",
  "description": "La sauce à l'herbe verte incendiaire du Yémen, la coriandre fraîche et le persil fourmillent farciment de jalapeños, de cardamome et de cumin dans une pâte épaisse et vert émeraude qui brûle propre et brillante. Le condiment le plus aimé de la diaspora yéménite et de tous les marchés israéliens.",
  "cuisine": "Yémen",
  "culture": "Yémen",
  "category": "condiments",
  "tags": [
    "Zhug",
    "yemeni",
    "Sucre chaude",
    "herbe",
    "épicé",
    "végétalien",
    "Moyen-Orient"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "10 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 2,
    "bitter": 1,
    "umami": 1,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Herb",
      "name": "Coriandre fraîche (cilantro), feuilles et tiges",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Herb",
      "name": "Persil à feuilles plates, feuilles et tiges",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Heat",
      "name": "Piments de jalapeño (découpés à peu près)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "serrano pour plus de chaleur",
        "Chilis vert"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Gousses de cardamome vert, graines enlevées",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Graines de cumin",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "Cumin de fond, 2 g"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Maïs de poivre noir",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pound épices",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "ground_spices",
      "instructions": "Dans un mortier, battre les graines de cardamome, les graines de cumin et les grains de poivre noir à une fine, même poudre. Les graines de cardamome sont les plus importantes: elles doivent être entièrement écrasées pour libérer les huiles de fleurs eucalyptus qui sont la signature de zhug. Si vous utilisez un broyeur d'épices, lancez-le pendant 30 secondes et vérifiez s'il reste des graines entières. La poudre d'épices doit être assez fine pour ne pas se sentir mal sur la langue.",
      "visualCue": {
        "primaryTarget": "Poudre fine, vert olive pâle avec un arôme complexe, presque médicinal-floral de la cardamome.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Graines entières ou moitiés encore visibles dans la poudre. La cardamome n'a pas ouvert et l'arôme est plat.",
            "action": "Continuez à frapper. Les graines de cardamome sont difficiles — elles ont besoin d'une pression soutenue et ciblée pour libérer leurs huiles."
          },
          {
            "state": "Perfect",
            "description": "Poudre fine et uniforme sans graines entières. L'arôme est fortement floral et chaud, avec la terre du cumin montant sous les hautes notes de la cardamome.",
            "action": "Réserver et commencer la pâte principale."
          },
          {
            "state": "Overdone",
            "description": "Les épices ont été frappées si longtemps qu'elles sont chaudes et ont perdu leurs aromatiques volatils. La poudre sent à plat.",
            "action": "Procéder — le zhug est assez robuste pour transporter même des épices légèrement diminuées, et les herbes fraîches fourniront la plupart de l'arôme."
          }
        ]
      },
      "feelCue": "Frottez la poudre d'épice entre le pouce et le doigt — elle devrait être soyeuse et fine, et non pas gritty avec des fragments de graines entières. Au moment où les graines de cardamome s'ouvrent, le mortier se remplit d'un nuage d'eucalyptus-floral."
    },
    {
      "nodeId": "step_2",
      "action": "Pound herbes et chili",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_08",
        "ground_spices"
      ],
      "outputState": "herb_chili_paste",
      "instructions": "Ajouter l'ail et le sel dans le mortier avec les épices moulues et pilonner dans une pâte lisse. Ajouter les morceaux de jalapeño en deux lots, taper chaque lot dans la base d'ail avant d'ajouter plus. Enfin, ajouter d'abord les tiges de coriandre et de persil (elles sont plus résistantes), la livre à une pâte brute, puis ajouter les feuilles. Travaillez avec un mouvement circulaire de broyage contre le mur de mortier entre les coups de frappe. La pâte sera humide et vert émeraude.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse et vive vert émeraude avec une texture fibreuse légèrement grossière des tiges de l'herbe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est épaisse avec de gros fragments d'herbe et des morceaux de jalapeño clairement visibles. La chaleur du chili n'est pas complètement intégrée.",
            "action": "Continuer à frapper et à broyer. La texture doit être suffisamment cohésive pour qu'une cuillère tienne."
          },
          {
            "state": "Perfect",
            "description": "Pâte dense, humide, vert émeraude. Pas complètement lisse — une texture de tiges d'herbe est correcte et authentique. Sensation intense de coriandre fraîche et de jalapeño.",
            "action": "Incorporer l'huile d'olive pour finir."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a été pilonné dans une purée complètement lisse et imprégnée d'eau. Les herbes ont libéré tellement de liquide que la pâte est soupeuse.",
            "action": "Égoutter l'excès de liquide et procéder. La saveur sera fine mais la texture sera plus mince."
          }
        ]
      },
      "feelCue": "Pincez la pâte d'herbe — elle devrait se sentir dense et fibreuse, comme un paquet d'herbe comprimé, libérant un liquide vert vif lorsqu'elle est pressée. La chaleur de chili devrait déjà réchauffer vos doigts après le contact avec le jalapeño."
    },
    {
      "nodeId": "step_3",
      "action": "Terminer avec de l'huile",
      "inputs": [
        "herb_chili_paste",
        "ing_01",
        "ing_02",
        "ing_09"
      ],
      "outputState": "finished_zhug",
      "instructions": "Si vous n'avez pas encore, ajoutez les feuilles d'herbe restantes à la pâte et travaillez dedans. Versez l'huile d'olive sur la pâte et pliez-la avec une cuillère ou quelques tours de pestle. L'huile doit s'intégrer mais pas complètement émulsifier — le zhug n'est pas une sauce lisse. Goûtez et ajustez le sel et la chaleur. Emballer dans un pot propre, lisser la surface et presser une fine couche d'huile d'olive sur le dessus pour sceller. Réfrigérer. Zhug conserve pendant 1 à 2 semaines et la saveur se approfondit après 24 heures.",
      "visualCue": {
        "primaryTarget": "Une pâte vert émeraude, teintée d'huile, qui fond sur une cuillère et libère de l'huile teintée de vert lorsqu'elle est pressée. Pas une émulsion lisse, visiblement texturée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le pétrole est mis en commun séparément au sommet plutôt que d'être intégré. La pâte semble sèche et dense en dessous.",
            "action": "Plier plus délibérément avec une cuillère, faire passer l'huile dans la pâte."
          },
          {
            "state": "Perfect",
            "description": "Vert vif, brillant, pâte cohérente. Des odeurs de chili vert, de coriandre et la chaleur florale de la cardamome. La chaleur sur la langue est immédiate et propre.",
            "action": "Conditionner dans un pot et réfrigérer. Servir aux côtés de l'hummus, du falafel, du shakshuka ou des viandes grillées."
          },
          {
            "state": "Overdone",
            "description": "Trop d'huile a été ajoutée et la pâte flotte dans l'huile, les deux se séparant en couches instantanément.",
            "action": "Verser l'excédent d'huile. Incorporer une poignée d'herbes hachées plus fraîches pour réabsorber et épaissir."
          }
        ]
      },
      "feelCue": "Zhug sur la langue est immédiat — il n'y a pas de accumulation. La chaleur du jalapeños frappe à l'avant et vif, puis la note eucalyptus de la cardamome arrive comme un contraste floral élevé, et la coriandre offre une longue finale verte. Il devrait vous faire atteindre pour le pain immédiatement, ne pas atteindre pour l'eau."
    }
  ]
};
