export default {
  "repoId": "master_levantine_labneh_001",
  "parentRepoId": null,
  "slug": "labneh",
  "author": "ForkRecipe Kitchen",
  "title": "Labneh (fromage de yaourt entraîné 48 heures)",
  "description": "Le yogourt de lait entier est suspendu dans une nappe de fromage pendant deux jours alors que la gravité et le temps font le seul vrai travail: le lactosérum s'écoule, les cultures se concentrent, et ce qui reste est un fromage tanné, crémeux, à tartiner avec le corps du fromage à la crème et une saveur toute propre.",
  "cuisine": "Levantine",
  "culture": "Libanais",
  "category": "condiments",
  "tags": [
    "yaourt",
    "fromage",
    "fermenté",
    "tendues",
    "lévantine",
    "lébanèse",
    "végétarien",
    "Sans gluten"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "48 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 4,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Yogourt à base de matières grasses (pas de gélatine ou de stabilisateurs)",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "Yogourt grec (finira dans 12-24 heures au lieu de 48)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile d'olive extra vierge (à servir)",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Thym frais ou séché (à servir)",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "Mélange za'atar"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Garnish",
      "name": "Sel de mer (à servir)",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "Alep flocons de poivre"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "salted_yogurt",
      "instructions": "Consultez la liste des ingrédients de votre yaourt : il ne doit contenir que du lait et des cultures vivantes — pas de gélatine, de pectine, d'amidon ou de «arômes naturels». Ces stabilisateurs lient l'eau dans le yogourt et l'empêchent de s'égoutter, vous donnant un résultat caoutchouteux et humide après 48 heures d'effort. Dans un grand bol, mélanger soigneusement le sel dans le yogourt. Le sel sert deux buts : il aromatise directement le labneh et puise de l'eau par osmose, accélérant le processus de drainage. Agiter pendant 60 secondes jusqu'à ce que le sel soit complètement dissous — vous ne devriez pas pouvoir sentir de grains lorsque vous frottez une petite quantité entre vos doigts. Le mélange se détachera immédiatement légèrement lorsque le sel commencera à puiser de l'eau.",
      "visualCue": {
        "primaryTarget": "Un yogourt uniformément lisse sans cristaux de sel visibles. La texture est un peu plus lâche que lorsque vous avez commencé — le sel a commencé à tirer de l'eau du caillé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Vous pouvez sentir ou voir des cristaux de sel dans le yaourt. Certaines régions sont plus salées que d'autres.",
            "action": "Remuer encore 30 secondes. Le sel doit être complètement dissous avant d'être soumis à des pressions; les cristaux de sel non dissous font un assaisonnement final inégal."
          },
          {
            "state": "Perfect",
            "description": "Doux, uniforme, légèrement plus mince que le yogourt entier. Pas de grittness quand un doigt est frotté entre les doigts. L'odeur de sel est présente mais pas nette.",
            "action": "Transférer immédiatement dans la passoire à fromage."
          },
          {
            "state": "Overdone",
            "description": "Vous avez sursauté — le yaourt a un goût fortement salé avant tout égouttage. Souvenez-vous qu'il se concentrera pendant la pression.",
            "action": "Il n'y a pas de solution facile — diluée avec une cuillère à soupe de yogourt non salé et de ré-stir. Toujours mesurer le sel précisément pour labneh."
          }
        ]
      },
      "feelCue": "Le yogourt salé frotté entre les doigts doit se sentir complètement lisse sans frictions atroces — soyeuses, froides, uniformément liquides, avec une odeur laitière propre qui a pris le bord minéral le plus faible du sel."
    },
    {
      "nodeId": "step_2",
      "action": "Poignée",
      "inputs": [
        "salted_yogurt"
      ],
      "outputState": "hanging_labneh",
      "instructions": "Étaler une souche ou une calandre à mailles fines avec une double couche de linge de fromage humide (ou une serviette de lin fine et propre). Placez-le sur un bol profond qui peut capturer au moins 400 ml de liquide — le bol ne doit pas toucher le fond de la passoire, de sorte que le lactosérum coule librement. Verser le yogourt salé au centre de la nappe de fromage. Rassemblez les quatre coins et attachez-les ensemble avec la ficelle de cuisine. Vous pouvez laisser le paquet accrocher au-dessus du bol en attachant la ficelle à une cuillère en bois posée sur le bord du bol, ou simplement placer la souche et le bol dans le réfrigérateur découvert. La pression du réfrigérateur est plus sûre pour la sécurité alimentaire et donne un rythme plus contrôlé — 24 heures pour un labneh doux et extensible, 36 heures pour un labneh plus épais et balable, 48 heures pour un labneh assez ferme pour rouler dans les sphères et conserver dans l'huile.",
      "visualCue": {
        "primaryTarget": "Au bout de 24 heures : le paquet de cheesewapp est lourd et tendu, dégoulinant régulièrement. Le bol ci-dessous contient 200-400 ml de lactosérum aqueux pâle. Le paquet, lorsqu'il est pressé, se sent nettement plus ferme que le yogourt cru.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Moins de 150 ml de lactosérum dans le bol après 24 heures. Le faisceau se sent encore lâche et yogourt-soft. Le labneh sera trop lâche pour se propager sans courir.",
            "action": "Le yaourt peut avoir contenu des stabilisateurs. Continuer la pression — vérifier à 36 et 48 heures. Placer dans la partie la plus froide du réfrigérateur."
          },
          {
            "state": "Perfect",
            "description": "Après 48 heures : 350-450 ml de lactosérum pâle collecté. Le faisceau se sent ferme et le labneh conserve sa forme moulée lorsqu'il est déballé. La couleur est blanche. Le goût est propre et tannant.",
            "action": "Déposer et utiliser immédiatement ou réfrigérer jusqu'à 2 semaines."
          },
          {
            "state": "Overdone",
            "description": "Formé au-delà de 72 heures : le labneh est devenu très ferme et friable, presque feta-like. Le goût est fortement aigre et la texture est sèche plutôt que crémeuse.",
            "action": "Mélanger une cuillère à soupe d'huile d'olive pour restaurer la crémosité. Rouler dans les boules et conserver dans l'huile d'olive — c'est une méthode de stockage traditionnelle."
          }
        ]
      },
      "feelCue": "Vérifiez le paquet en le pressant doucement de l'extérieur de la nappe à la marque de 24 heures: il devrait se sentir comme un fromage crème très ferme ou dense, donnant à la légère pression mais ne pas operer. Après 48 heures il devrait avoir la résistance d'une boule ferme de mozzarella fraîche."
    },
    {
      "nodeId": "step_3",
      "action": "Garnir",
      "inputs": [
        "hanging_labneh",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "finished_labneh",
      "instructions": "Déposez soigneusement la labneh de la nappe de fromage et placez-la sur une plaque large et peu profonde. Utilisez le dos d'une cuillère pour l'étendre vers l'extérieur dans un mouvement balayant, créant un monticule à peu près circulaire avec une crête épaisse autour du bord et une légère dépression au centre - c'est la présentation traditionnelle qui tient des piscines d'huile d'olive. Arrosez généreusement l'huile d'olive dans le centre bien et à travers la surface. Dispersez les herbes hachées et salez-les sur le dessus. Servir à température ambiante avec du pain plat chaud, des légumes crus, des olives et d'autres mezze. Labneh entreposée sans garniture conserve réfrigérée pendant 2 semaines; roulée en boules et immergée dans l'huile d'olive avec des herbes, elle conserve jusqu'à un mois.",
      "visualCue": {
        "primaryTarget": "Un monticule blanc brillant avec une piscine brillante d'huile d'olive au centre. La surface est lisse où tartinée et rugueuse où l'étoffe a laissé sa texture. Les herbes et le sel sont éparpillés naturellement, non disposés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La labneh est trop molle pour tenir sa forme bombée et s'étale immédiatement, comme le yogourt grec lâche. Ça a l'air bâclé sur l'assiette.",
            "action": "La labneh avait besoin de plus de temps. Retournez-la dans la nappe de fromage pour 6-8 heures de plus. Il peut encore être servi — le présenter dans un petit bol à la place."
          },
          {
            "state": "Perfect",
            "description": "Tient une forme définie lorsqu'il est cuillé. Doux, blanc et cool. L'huile d'olive s'accumule visiblement plutôt que d'absorber immédiatement. Le goût est acidulé, riche et crémeux avec une agréable longue ameresse.",
            "action": "Servir à la température ambiante dans les 2 heures, ou réfrigérer et ramener à la température ambiante avant de servir."
          },
          {
            "state": "Overdone",
            "description": "La labneh est raide et émiettée — elle se brise plutôt que de s'étendre. La rouler a laissé des fissures et il semble crayeux plutôt que crémeux.",
            "action": "Mélanger une cuillère à soupe d'huile d'olive avec une fourchette jusqu'à ce qu'elle soit lisse. La texture se corrige facilement."
          }
        ]
      },
      "feelCue": "Le labneh à température ambiante pressé d'un doigt propre devrait résister en douceur, puis produire en douceur — comme du beurre très froid qui s'est suffisamment réchauffé. L'odeur est propre et aigre, comme la crème cultivée, avec l'huile d'olive ajoutant une note supérieure herbacée et fruitée."
    }
  ]
};
