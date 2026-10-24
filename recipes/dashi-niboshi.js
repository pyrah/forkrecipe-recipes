export default {
  "repoId": "master_japanese_dashi_niboshi_001",
  "parentRepoId": null,
  "slug": "dashi-niboshi",
  "author": "ForkRecipe Kitchen",
  "title": "Niboshi Dashi (Sardine séchée Dashi)",
  "description": "Un dashi minéral et audacieux de niboshi — des anchois ou des sardines séchés qui ont été vidés pour éliminer l'amertume qui se cache dans leurs entrailles, puis ont commencé à froid dans l'eau et se sont lentement emparés d'un mijot pour en tirer toute leur profondeur inosinée. Plus sombre, plus affirmé et plus rustique que l'ichiban dashi, c'est le stock derrière la soupe miso dans les villages de pêche, derrière les bouillons aromatisés d'izakayas, derrière tout ce qui a besoin de la mer pour parler fort.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "stocks",
  "tags": [
    "stock",
    "Japonais",
    "Dashi",
    "Produits de la mer",
    "Sans gluten",
    "sans produits laitiers"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Inosinate",
      "name": "Niboshi (sardines séchées ou anchois pour bébés), têtes et entrailles enlevées",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "iriko (un peu plus petit anchois séchés)",
        "katsuobushi pour une saveur plus propre"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Solvent",
      "name": "Eau filtrée à froid",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "eau de source"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparer les niboshi",
      "inputs": [
        "ing_01"
      ],
      "outputState": "cleaned_niboshi",
      "instructions": "Pincez la tête sur chaque sardine séchée entre le pouce et l'index et jetez - cela seul enlève une grande partie de l'amertume. Puis divisez chaque corps dans le sens de la longueur avec votre vignette et soulevez les entrailles sombres (la petite bande intestinale qui coule le long de l'épine dorsale). Tous les cuisiniers n'effectuent pas les deux étapes; le retrait des têtes est le minimum. Enlever les entrailles donne aussi un dashi plus rond, moins amer, plus raffiné. Faites ceci sec, avant que l'eau touche le poisson, car les niboshi humides sont plus difficiles à diviser proprement. Certains cuisinent également toast le niboshi nettoyé dans une casserole sèche pendant 1 à 2 minutes à feu moyen pour approfondir la saveur — c'est optionnel mais ajoute une agréable dimension noix.",
      "visualCue": {
        "primaryTarget": "Petit poisson séché à l'eau pâle, sans tête et fendue, avec la fine bande d'intestin foncé enlevée, propre et uniforme. L'arôme doit sentir le poisson séché et l'océan, pas rancissement ou amer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Niboshi entier avec têtes et entrailles intactes; des composés amers sont encore présents.",
            "action": "Enlevez les têtes et pincez au minimum la bande sombre de l'intestin avant de procéder — l'amertume des entrailles ne peut être cuite une fois dans l'eau."
          },
          {
            "state": "Perfect",
            "description": "Poisson sans tête, sans intestin, sentant propre et océanique, légèrement grillé si vous choisissez cette étape, sec et prêt pour l'eau froide.",
            "action": "Placez directement dans l'eau froide pour commencer l'extraction à froid."
          },
          {
            "state": "Overdone",
            "description": "Surchauffé à brun foncé dans la poêle sèche, sentant carbonisé plutôt que grillé.",
            "action": "Jetez les niboshi brûlés — ils rendront les dashi amers. Utilisez du niboshi frais sans toast."
          }
        ]
      },
      "feelCue": "Les niboshi nettoyés et secs devraient se sentir légers et cassants entre vos doigts, en cassant proprement. S'ils se plient sans se briser, ils ont absorbé de l'humidité et peuvent rester dans l'impasse, le dashi sera plus faible et plus amer de l'inosinate dégradé."
    },
    {
      "nodeId": "step_2",
      "action": "Froide raide",
      "inputs": [
        "cleaned_niboshi",
        "ing_02"
      ],
      "outputState": "steeping_niboshi",
      "instructions": "Placer le niboshi nettoyé dans une casserole et verser sur l'eau froide. Laissez-les tremper pendant 20 à 30 minutes à température ambiante — ce pré-soleil de démarrage à froid hydrate le poisson et commence l'extraction doucement, ce qui aide les composés inosinés à se libérer à basse température plutôt que tous à la fois quand la chaleur est appliquée. Ne sautez pas cette étape si le temps le permet ; elle améliore sensiblement la propreté du dashi fini. Après avoir trempé, vous verrez que l'eau commence à tourner un or pâle et laiteux lorsque les premiers composés se dissolvent.",
      "visualCue": {
        "primaryTarget": "Après 20 à 30 minutes, l'eau a tourné une paille pâle, les niboshi ont visiblement gonflé et adouci, et l'arôme est passé du poisson sec à une odeur océanique faible et propre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sauté complètement la trempe; le niboshi froid est tombé directement dans l'eau chaude. L'extraction sera moins contrôlée et potentiellement plus amère.",
            "action": "Au minimum, laisser tremper 10 minutes même si le temps est court. Le trempage à froid est la différence entre l'extraction contrôlée et rapide."
          },
          {
            "state": "Perfect",
            "description": "Eau visiblement teintée d'or, niboshi gonflé et souple lorsqu'il est pressé, eau qui sent l'air pur de la mer et poisson séché. Prêt à chauffer.",
            "action": "Déplacez le pot vers le poêle et commencez à chauffer à feu moyen-doux."
          },
          {
            "state": "Overdone",
            "description": "Laisser tremper plus de 2 heures à température ambiante sans réfrigérer; l'extraction a commencé à fermenter légèrement, produisant un bord aigre.",
            "action": "Si vous trempez plus d'une heure, réfrigérer. Le froid peut passer la nuit au réfrigérateur sans problème."
          }
        ]
      },
      "feelCue": "Après l'imprégnation, appuyez sur un niboshi entre les doigts : il devrait céder, se sentir plumé et humide plutôt que rigide. L'eau qui l'entoure doit se sentir légèrement glissante, les premières protéines et graisses commençant à se dissoudre."
    },
    {
      "nodeId": "step_3",
      "action": "Chaleur et déformation",
      "inputs": [
        "steeping_niboshi"
      ],
      "outputState": "finished_niboshi_dashi",
      "instructions": "Réglez la poêle à feu moyen-doux et portez lentement le contenu à 80 à 85°C (175 à 185°F) – juste en dessous d'une mijote, où la surface mijote et de petites bulles apparaissent aux bords, mais le centre est encore. Cette plage de température extrait l'inosinate et les acides aminés salés du poisson sans franchir le seuil où les composés d'amertume se dissolvent dans l'eau. Maintenir cette température pendant 10 à 12 minutes. Ne le laissez pas bouillir. Retirer du feu et passer immédiatement à travers un tamis à mailles fines doublé de linge de fromage, en appuyant légèrement sur le niboshi. Jetez le poisson usé. Le dashi fini gardera 2 jours réfrigérés.",
      "visualCue": {
        "primaryTarget": "Un liquide clair, jaune-ambre à brun doré, vapeur mais pas mijotant, avec un arôme océanique propre et légèrement minéral. L'allumer doit être translucide, et non trouble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le dashi est à peine chaud, pâle et mince, sentant surtout le poisson séché avec peu de profondeur — l'inosinate n'a pas été complètement extrait.",
            "action": "Continuer le réchauffement lentement vers 80 à 85°C, en vérifiant avec un thermomètre. Si vous n'en avez pas, attendez que la surface mijote et que les bords commencent à buller."
          },
          {
            "state": "Perfect",
            "description": "Or pâle à l'ambre, clair, à la vapeur régulièrement, avec un arôme salé, minéral, océanique. En bouche, il délivre un umami ferme et affirmé avec une légère morsure minérale qui distingue niboshi dashi de tous les autres dashis.",
            "action": "Soudure immédiatement et utiliser. Assaisonner avec du soja et du mirin pour la soupe miso, ou utiliser sans saison comme liquide de cuisson."
          },
          {
            "state": "Overdone",
            "description": "Brûlé à ébullition; le dashi est devenu nuageux et amer, avec un arrière-goût rude et poissonneux.",
            "action": "Penchez immédiatement dans un pot propre et ajoutez un morceau de kombu de 5 cm; raide pendant 10 minutes hors du feu. Le glutamate du kombu peut tamponner et adoucir un niboshi dashi légèrement surextrait."
          }
        ]
      },
      "feelCue": "Testez la température en tenant votre main 10 cm au - dessus de la surface — vous devriez sentir une chaleur douce et régulière. Si la surface est enroulée et que la vapeur est en bouillie, vous avez une overshot; retirez immédiatement la poêle de la chaleur et laissez refroidir 2 minutes avant de la forcer."
    }
  ]
};
