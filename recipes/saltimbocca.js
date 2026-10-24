export default {
  "repoId": "master_italian_saltimbocca_001",
  "parentRepoId": null,
  "slug": "saltimbocca",
  "author": "ForkRecipe Kitchen",
  "title": "Saltimbocca alla Romana",
  "description": "Escalopes de veau recouvertes de prosciutto et de sauge, sautées dans du beurre jusqu'à ce que le jambon craque et la sauce à vin blanc s'accroche à chaque pli.",
  "cuisine": "Italien",
  "culture": "Romain",
  "category": "proteins",
  "tags": [
    "Viande bovine",
    "Italien",
    "romaine",
    "prosciutto",
    "Sauge",
    "pan-sauce",
    "Vite"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Escalopes de veau (noce ou fesa), 150 g chacune",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "poitrine de poulet pillée mince",
        "Escalopes des longes de porc"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Prosciutto crudo, en tranches de papier-fin",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "tache",
        "San Daniele prosciutto"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Feuilles fraîches de sauge (2–3 par escalope)",
      "ratioValue": 8,
      "defaultUnit": "pcs",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Solvent",
      "name": "Vin blanc sec (Frascati ou Pinot Grigio)",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": [
        "Vermouth sec",
        "Marsala sec (changement de caractère)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Starch",
      "name": "Farine à usage général, pour la dépoussiérage",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "farine de riz sans gluten"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Poivre blanc, fraîchement moulu",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": [
        "poivre noir"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Piler",
      "inputs": [
        "ing_01"
      ],
      "outputState": "thin_escalopes",
      "instructions": "Placez chaque escalope de veau entre deux feuilles d'enveloppe plastique. En utilisant la face plate d'un maillet de viande ou le fond d'une poêle lourde, livrez avec ferme, même les coups du centre vers l'extérieur — non pas des coups verticaux qui déchirent la viande, mais des toboggans inclinés qui étirent les fibres. Cibler de 5 à 6 mm d'épaisseur, à peu près même sur toute l'escalope. Assaisonner légèrement avec du poivre blanc seulement — le prosciutto fournira tout le sel nécessaire.",
      "visualCue": {
        "primaryTarget": "Escalopes translucides rose pâle d'épaisseur uniforme. La surface a une texture légèrement rugueuse et mate du pilonnage. Pas de trous ni de larmes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Surface inégale avec des crêtes épaisses. Centrer encore 1 cm+, les bords minces et raclés. Elle cuisine mal.",
            "action": "Continuer à frapper du centre épais vers l'extérieur, en travaillant avec le grain de la viande."
          },
          {
            "state": "Perfect",
            "description": "Même 5 à 6 mm. Rose pâle, légèrement translucide au point le plus mince. La surface a une texture agréablement rugueuse qui va saisir la farine.",
            "action": "Poser à plat et préparer la garniture de prosciutto-sage."
          },
          {
            "state": "Overdone",
            "description": "Trous déchirés par l'escalope. La viande a été déchiquetée aux bords.",
            "action": "Surplombez les sections déchirées et appuyez ensemble — le prosciutto les tiendra. Les sections très fines peuvent cuire trop vite; veillez bien."
          }
        ]
      },
      "feelCue": "L'escalope piquée devrait ressembler presque à un morceau de cuir chamois — souple, mince et légèrement résistant à la déchirure. Aucune partie ne doit se sentir épaisse et raide lorsque vous la pliez."
    },
    {
      "nodeId": "step_2",
      "action": "Assembler",
      "inputs": [
        "thin_escalopes",
        "ing_02",
        "ing_03",
        "ing_06",
        "ing_07"
      ],
      "outputState": "assembled_saltimbocca",
      "instructions": "Placer 2 à 3 feuilles de sauge à plat sur le côté supérieur de chaque escalope. Drapez une ou deux tranches de prosciutto pour couvrir la sauge et toute la surface de l'escalope — le jambon doit s'étendre légèrement au-delà des bords de la viande. Sécuriser avec un ou deux cure-dents en bois percés à un angle à travers le jambon, la sauge et la viande. Assaisonner le dessous (côté veau) très légèrement avec du sel seulement. Poussez le côté veau dans la farine et arrosez tout excès — vous voulez un revêtement de gossamer, pas une croûte épaisse.",
      "visualCue": {
        "primaryTarget": "Une parcelle soignée : prosciutto lisse sur le dessus, sauge sandwichée entre les cure-dents horizontaux et flush. Le veau fariné semble mat et sec sans tache humide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le prosciutto se rassemble et s'éloigne des bords. Sauge non sécurisée. Excédent de revêtement de farine qui semble épais et pâteux.",
            "action": "Retirez le prosciutto et ajoutez un cure-dent à chaque bord. Patientez fermement la farine pour éliminer tout excès."
          },
          {
            "state": "Perfect",
            "description": "Prosciutto plat et tendu contre le veau. Sauge visible comme une ombre verte à travers le jambon translucide. Le revêtement de la farine est si mince qu'il est à peine visible.",
            "action": "Réfrigérer pendant 10 minutes avant la mise en mer, le prosciutto froid tient mieux dans la poêle."
          },
          {
            "state": "Overdone",
            "description": "Suralimenté — revêtement blanc épais visible, humide dans des zones où il a absorbé l'humidité de la viande.",
            "action": "Pat vigoureusement pour éliminer l'excès. Les couches de farine épaisse font cuire à une pâte gommée, pas une croûte croustillante."
          }
        ]
      },
      "feelCue": "Soulever un escalope assemblé — il devrait se sentir léger et plat avec le prosciutto en forme de seconde peau. Appuyez sur le bord du jambon : il devrait adhérer plutôt que de glisser."
    },
    {
      "nodeId": "step_3",
      "action": "Faire revenir",
      "inputs": [
        "assembled_saltimbocca",
        "ing_04"
      ],
      "outputState": "sauteed_saltimbocca",
      "instructions": "Chauffer une grande poêle en acier inoxydable ou au carbone à feu moyen-élevé. Ajoutez le beurre et laissez-le mousser et laisser tomber — quand les premières lucarnes de couleur apparaissent dans le beurre, il est prêt. Placez les escalopes côté prosciutto vers le bas. Appuyez sur eux à plat avec une spatule pendant les 10 premières secondes pour assurer un contact complet. Faire cuire le prosciutto pendant 2 à 3 minutes jusqu'à ce que le jambon craque et qu'il ait rendu sa graisse dans le beurre. Flip et cuire le côté veau pendant seulement 60 à 90 secondes — le veau est maigre et surcuit en quelques instants.",
      "visualCue": {
        "primaryTarget": "Côté prosciutto : Cuivre doré et légèrement rincé aux bords, ayant rendu sa graisse. Côté veau : à peine doré, toujours pâle au centre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le prosciutto est encore flopé et rose pâle. Pas de croustillant, pas de gras. Sauge pas encore parfumée.",
            "action": "Continuez — vous avez besoin de 1 à 2 minutes de plus de chaleur de contact. Assurez-vous que la poêle est vraiment chaude avant d'ajouter le prochain lot."
          },
          {
            "state": "Perfect",
            "description": "Les bords du prosciutto sont profondément dorés et rincés, libérant un arôme de noix-sel. Les feuilles de sauge en dessous ont changé de jade translucide. Le côté veau est tout juste à peine merdé.",
            "action": "Transférer dans une assiette chaude. Enlever les cure-dents."
          },
          {
            "state": "Overdone",
            "description": "Le prosciutto est brun foncé et dur à mâcher. Le veau est devenu sec et fibreux. Le beurre de pan a brûlé.",
            "action": "Saluvage avec sauce supplémentaire. Essuyer la poêle, ajouter le beurre frais et déglacer plus doucement."
          }
        ]
      },
      "feelCue": "Appuyez sur le centre d'un escalope de cuisson — il devrait se sentir comme un oreiller ferme mais donnant, pas rigide. Le côté prosciutto devrait craquer légèrement lorsque vous appuyez dessus, comme du papier rigide."
    },
    {
      "nodeId": "step_4",
      "action": "Déglacer",
      "inputs": [
        "sauteed_saltimbocca",
        "ing_05",
        "ing_04"
      ],
      "outputState": "finished_saltimbocca",
      "instructions": "Retirez les escalopes dans une assiette chaude. À feu vif, versez le vin dans la poêle encore chaude et grattez immédiatement les morceaux brunis de la base — voilà la saveur. Laisser le vin réduire de moitié, environ 90 secondes de bouillonnement vigoureux. Retirer du feu, ajouter un bouton froid de beurre et tourner constamment jusqu'à ce que la sauce soit brillante et émulsifiée. Versez sur les escalopes immédiatement. Le plat est mieux mangé dans les 3 minutes suivant le placage.",
      "visualCue": {
        "primaryTarget": "Une sauce ambre fine et brillante sans séparation. Elle enveloppe l'arrière d'une cuillère et tombe dans un ruban lent, pas une éclaboussure.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est aqueuse et fine, saveur de vin crue et nette. Pas encore réduit. Mise en commun sur la plaque plutôt que sur le revêtement.",
            "action": "Revenez à la chaleur élevée pendant 30 à 45 secondes. N'ajoutez pas de beurre tant que le vin n'est pas concentré."
          },
          {
            "state": "Perfect",
            "description": "Réduit à un sirop léger, profondément doré avec un arôme de vin arrondi. Le beurre s'est émulsionné dans une sauce cohésive brillante.",
            "action": "Verser immédiatement sur les escalopes — la sauce casse et perd son émulsion en refroidissant."
          },
          {
            "state": "Overdone",
            "description": "Sauce réduite trop loin et collante, bordant le caramel. L'arôme est aigu et unidimensionnel.",
            "action": "Ajouter une cuillère à soupe d'eau froide et faire un tourbillon, ce qui l'éclaircira vers une consistance de sauce."
          }
        ]
      },
      "feelCue": "Plongez une cuillère dans la sauce finie et retournez-la – elle devrait enrober le métal dans un film mince, même qui tient pendant 2-3 secondes avant de commencer à courir. S'il s'enlève instantanément, il faut plus de réduction."
    }
  ]
};
