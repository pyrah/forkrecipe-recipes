export default {
  "repoId": "master_moroccan_harissa_001",
  "parentRepoId": null,
  "slug": "harissa",
  "author": "ForkRecipe Kitchen",
  "title": "Harissa",
  "description": "Une pâte rouge brique de feu et de parfum — des chiles séchés trempés doux et fourrés de carafe grillée, de coriandre et de cumin, aiguisés d'ail et de citron, puis scellés sous l'huile d'olive. Il porte une chaleur profonde et fumée sur une chaleur lente d'épices de graines plutôt que de brûler à plat.",
  "cuisine": "Maroc",
  "culture": "Maghrebi",
  "category": "condiments",
  "tags": [
    "Harissa",
    "Maroc",
    "Chile",
    "pâte aux épices",
    "Maghrebi",
    "végétalien",
    "préserver"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hour",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 2,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Heat",
      "name": "Chiles rouges doux séchés (guajillo ou Alep, pédés et ensemencés)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "chiles séchés Nouveau-Mexique",
        "ancho pour une pâte plus douce et plus douce"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Chiles rouges chauds séchés (árbol ou piri-piri, pédés)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "gousses de Cayenne",
        "omit pour une pâte plus douce"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Graines de Carave",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Graines de coriandre",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Graines de cumin",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "ail rôti pour une note plus ronde, plus sucrée"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Citrus",
      "name": "Jus de citron frais",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin rouge",
        "saumure de citron conservée"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trempage",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "rehydrated_chiles",
      "instructions": "Attachez les chiles ensemencés en morceaux rugueux. Faites-les cuire brièvement dans une poêle sèche à feu moyen, en les pressant à plat pendant 20 à 30 secondes par côté jusqu'à ce qu'ils sentent chaud et légèrement fumé et sucer — ne les laissez pas noircir, ce qui rend la pâte amère. Couvrir d'eau simplement bouillie et les peser avec une assiette pour qu'ils restent submergés. Tremper 20 à 30 minutes jusqu'à ce qu'il soit complètement souple et souple. Égoutter, mais réserver un peu de liquide.",
      "visualCue": {
        "primaryTarget": "Les Chiliens sont complètement limpides et souples, gonflés et rouge-vin foncé, sans bords raides ou cassants; l'eau de trempe a tourné un rouge rouillé profond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les bords des chiles sont encore fermes, papier, ou se cassent lorsqu'ils sont pliés; l'eau de trempe n'est teintée que légèrement.",
            "action": "Couvrir à nouveau d'eau bouillante et tremper encore 10 à 15 minutes. Plus vieux, les chiles secs ont besoin de plus longtemps."
          },
          {
            "state": "Perfect",
            "description": "Un morceau de chile se déchire comme du cuir humide sans résistance et la chair est collante et soyeuse.",
            "action": "Égoutter bien, réserver quelques cuillères du liquide absorbant, et passer au broyage des épices."
          },
          {
            "state": "Overdone",
            "description": "Les Chiliens sont musqués et désintégrés et l'eau sent à plat ou lavé, après avoir lixivié la saveur fruitée.",
            "action": "Égoutter immédiatement et garder le liquide absorbant — remuer un peu plus tard pour récupérer la saveur perdue."
          }
        ]
      },
      "feelCue": "Un chile bien trempé ressemble à un cuir à gants doux et humide entre les doigts, frais et souple. L'odeur de toast devrait être douce et ressemblant à du raisin, jamais acride ou brûlé."
    },
    {
      "nodeId": "step_2",
      "action": "Toast",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "ground_spice",
      "instructions": "Dans la même poêle sèche à feu moyen, faire griller la carafe, la coriandre et les graines de cumin, en tremblant constamment, pendant 1 à 2 minutes jusqu'à ce qu'elles s'assombrissent, deviennent parfumées, et les premières graines commencent à éclater. Tuez-les immédiatement afin qu'ils ne scorlent pas dans la poêle chaude, laissez-les refroidir une minute, puis moudre à une poudre fine dans un mortier ou un broyeur d'épices. Cette épice fraîchement moulue fleurie est l'épine dorsale qui sépare le vrai harissa de la pâte de chile.",
      "visualCue": {
        "primaryTarget": "Les graines sont une touche plus foncée et brillante avec de l'huile de surface, jetant un arôme vif, de noix, d'agrumes et de terre; quelques graines de cumin et de coriandre ont sauté audiblement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines ont l'air inchangées et sentent crus et herbacés avec peu de parfum qui monte de la poêle.",
            "action": "Continuez à griller et à trembler: les épices sont plates jusqu'à ce que les huiles fleurissent. Attendez que l'arôme fleurisse et que les premiers éclats."
          },
          {
            "state": "Perfect",
            "description": "Un toast brun doré uniforme avec un arôme puissant et complexe qui remplit la cuisine; les graines écrasent une poudre fine et huileuse.",
            "action": "Plonger à la fois tout en étant chaud pour la meilleure poudre, puis réserver pour le pilonnage."
          },
          {
            "state": "Overdone",
            "description": "Les graines sont brun foncé à noir et sentent vif, fumé et amer.",
            "action": "Jetez et toastez un lot frais — les épices brûlées domineront et ruineront toute la pâte."
          }
        ]
      },
      "feelCue": "Au sol, la poudre d'épices doit être légèrement grasse et s'agglutiner sous le pestle plutôt que de la poussière. Écoutez les graines qui surgissent: ce crackle est votre minuterie."
    },
    {
      "nodeId": "step_3",
      "action": "Livre",
      "inputs": [
        "ing_06",
        "ing_07",
        "rehydrated_chiles",
        "ground_spice"
      ],
      "outputState": "chile_paste",
      "instructions": "Pound l'ail avec le sel dans un mortier à une pâte lisse — le sel agit comme un abrasif pour le briser. Ajouter les chiles drainés une poignée à la fois et la livre et broyer, en travaillant en cercles, jusqu'à ce qu'ils s'effondrent dans une pâte épaisse et grossière. Travailler dans l'épice du sol. Cela demande de la patience à la main; un robot alimentaire fonctionne aussi, poussant et grattant, avec une éclaboussure du liquide d'imprégnation réservé seulement si nécessaire pour garder les lames attraper.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse, rouge brique profonde, grossière mais cohésive, qui retient le creux de l'attaque du pestle et les monticules sur une cuillère sans courir.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est volumineux et lâche avec des peaux de chiles reconnaissables et des stries pâles d'épices ou d'ail non incorporées.",
            "action": "Continuer de frapper ou de pousser et de gratter jusqu'à uniforme. Ajouter un liquide de trempage réservé seulement une cuillère à café à la fois si elle est trop sèche pour se déplacer."
          },
          {
            "state": "Perfect",
            "description": "Une pâte uniforme, brillante et épaisse, finement texturée, mais avec un peu de corps rustique, colorait un rouge foncé.",
            "action": "Passer à l'assaisonnement : travailler dans le citron et la plupart de l'huile."
          },
          {
            "state": "Overdone",
            "description": "La pâte est devenue aqueuse et se relâche de trop de liquide ajouté et s'effondre à plat sur la cuillère.",
            "action": "Incorporer un peu plus d'épices ou le reposer à découvert pour laisser un peu d'humidité s'évaporer et serrer avant de sceller."
          }
        ]
      },
      "feelCue": "Sous le peste, la pâte doit traîner fortement et s'accrocher à la pierre, sentant intensément le chile et les épices chaudes. Enduit sur un bout de doigt, il est dense et légèrement collant, non mouillé."
    },
    {
      "nodeId": "step_4",
      "action": "Finition",
      "inputs": [
        "chile_paste",
        "ing_08",
        "ing_09"
      ],
      "outputState": "finished_harissa",
      "instructions": "Battre le jus de citron et la plupart de l'huile d'olive dans la pâte jusqu'à ce qu'elle soit brillante et émulsifiée, en retenant un peu d'huile. Goûtez et ajustez le sel, le citron et la chaleur. Emballez dans un pot propre, pressez les poches d'air et lissez le dessus à plat. Verser l'huile réservée sur la surface pour la sceller de l'air. Couvrir et réfrigérer; les saveurs s'approfondissent et se marient du jour au lendemain. Remplir le bouchon d'huile chaque fois que vous creusez, et il restera pendant plusieurs semaines.",
      "visualCue": {
        "primaryTarget": "Une pâte rouge brillante et vive sous un film clair d'huile d'olive dans le bocal, assez épaisse pour tenir un sourcil propre qui se remplit lentement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte a un goût dur et unidimensionnel, plat sur le sel ou aiguisé avec l'ail cru, et la surface semble terne et sèche.",
            "action": "Battre plus d'huile pour l'éclaircir, puis équilibrer avec le sel et le citron et laisser reposer — la crudité se calme en un jour."
          },
          {
            "state": "Perfect",
            "description": "Saveur profonde, en couches — piment fruité et épice de graines fleurie sur un lifting au citron vif et une chaleur lente — avec un corps brillant et extensible scellé sous l'huile.",
            "action": "Réfrigérer au moins quelques heures avant d'utiliser le bouchon d'huile intact."
          },
          {
            "state": "Overdone",
            "description": "La pâte est huilée et lâche, l'huile refusant de s'asseoir comme un bouchon propre et la saveur bouillie et grasse.",
            "action": "Incorporer une cuillère de pâte de chile réservée ou une pincée d'épices plus moulues pour réabsorber l'excès d'huile et plus récemment la saveur."
          }
        ]
      },
      "feelCue": "La harissa finie doit se répandre comme un beurre doux et dense et laisser une léchée d'huile rouge parfumée sur la cuillère. La chaleur devrait arriver un battement après la saveur — une chaleur qui construit et s'attarde plutôt qu'une piqûre brusque à l'avant."
    }
  ]
};
