export default {
  "repoId": "master_french_pate_a_choux_001",
  "parentRepoId": null,
  "slug": "pate-a-choux",
  "author": "ForkRecipe Kitchen",
  "title": "Pâte à Choux",
  "description": "Paradoxe d'une pâte — cuite deux fois, enrichie d'œufs ajoutés un à la fois, elle se transforme en coquilles creuses dorées qui sont simultanément croquantes comme un craquelin à l'extérieur et complètement vides à l'intérieur, attendant d'être remplie de crème pâtissière, de ganache ou de crème fouettée. Le four transforme une pâte collante en architecture.",
  "cuisine": "Français",
  "culture": "Pâtisserie Française Classique",
  "category": "breads",
  "tags": [
    "Choux",
    "français",
    "pâtisserie",
    "Éclairs",
    "les bénéfices",
    "Cuisson",
    "pâte"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "1 hr 10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "moitié eau, moitié lait entier (couleur et saveur plus riches)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé, cube",
      "ratioValue": 0.45,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre salé"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de castre (une pincée, aide à brunir)",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Farine plate (toute utilisation), tamisée",
      "ratioValue": 0.6,
      "defaultUnit": "parts",
      "substitutions": [
        "farine de pain pour coquilles plus croustillantes"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Binder",
      "name": "Oeufs entiers, légèrement battus, température ambiante",
      "ratioValue": 1,
      "defaultUnit": "parts by weight of egg to flour",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire bouillir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "boiling_butter_water",
      "instructions": "Mélanger l'eau, le beurre cube, le sel et le sucre dans une casserole moyennement à fond lourd. Placer à feu moyen et porter à ébullition complète. L'objectif ici est de fondre complètement le beurre avant que l'eau ne bouillie — si l'eau commence à bouillir en premier et commence à s'évaporer avant que le beurre ne soit fondu, le rapport matières grasses à l'eau de la pâte est compromis et le choc sera imprévisible. Attention : au fur et à mesure que le beurre fond, vous verrez l'eau passer d'une émulsion blanche limpide à une émulsion blanche légèrement laiteuse. À l'approche de l'ébullition, l'émulsion va mousser. Dès qu'il atteint un ébullition complet, passer immédiatement à l'étape suivante — chaque seconde supplémentaire d'ébullition évapore l'eau et change la consistance de la pâte.",
      "visualCue": {
        "primaryTarget": "Un ébullition vigoureux et enroulé avec une mousse d'émulsion au beurre blanc laiteux dans la poêle. Tout le beurre est fondu et entièrement émulsifié.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre n'est pas complètement fondu — on peut voir des morceaux de beurre flottant encore. L'eau n'a pas encore bouilli.",
            "action": "Attendez. N'ajoutez pas de farine tant que le beurre n'aura pas bouilli et fondu."
          },
          {
            "state": "Perfect",
            "description": "Un ébullition complet — pas une mijoter douce, mais une bulle vigoureuse et agressive sur toute la surface. Tout le beurre est dissous dans l'eau.",
            "action": "Ajouter toute la farine à la fois et remuer immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est bouillant depuis plus de 30 secondes. La vapeur et le bouillonnement ont considérablement réduit l'eau. Le niveau de liquide est visiblement plus bas.",
            "action": "Continuer, mais ajouter 2 cuillerées à soupe d'eau supplémentaire à la panade pendant l'étape de séchage pour compenser."
          }
        ]
      },
      "feelCue": "La poêle devrait se sentir mal à l'aise pour tenir les mains nues. L'ébullition vigoureuse ressemble à un rugissement rapide et insistant, non à un murmure doux mais à un rugissement plein et criant."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "boiling_butter_water",
        "ing_05"
      ],
      "outputState": "dried_panade",
      "instructions": "Retirer la poêle du feu et ajouter toute la farine tamisée en un seul coup. Battre immédiatement et vigoureusement avec une cuillère en bois — c'est urgent. L'eau chaude de beurre doit hydrater chaque particule de farine dans les premières secondes, et l'amidon doit se gélatiniser instantanément dans la chaleur résiduelle. Battre jusqu'à ce qu'aucune farine sèche ne reste, puis retourner la poêle à feu moyen. Cuire la panade (la boule de pâte), en remuant et en pressant constamment, pendant 2 à 3 minutes. Vous chassez l'humidité — la panade est prête lorsqu'elle s'éloigne complètement des côtés de la poêle, forme une boule cohésive au centre et laisse un mince film sec sur le fond de la poêle. Ce film est le signe que suffisamment d'eau s'est évaporée. La pâte sera très raide et non collante à ce stade.",
      "visualCue": {
        "primaryTarget": "Une simple boule de pâte lisse et raide assise au centre de la poêle, complètement retirée des côtés, avec un film blanc sec sur le fond de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est toujours collante et collée aux côtés de la casserole. Le bas ne montre pas de film sec. La pâte semble humide et brillante.",
            "action": "Continuez à cuire et à remuer sur feu. Le séchage prend 2 à 3 minutes de cuisson active — ne le précipitez pas."
          },
          {
            "state": "Perfect",
            "description": "Une balle rigide, lisse et unifiée. Relâche complètement des côtés. Nettoyer le film sec sur le fond de la poêle. La pâte ressemble à de la purée épaisse et raide.",
            "action": "Transférer dans le bol d'un mélangeur de stand muni de la fixation de la palette (ou d'un grand bol pour mélanger les mains) et refroidir pendant 5 minutes avant d'ajouter les œufs."
          },
          {
            "state": "Overdone",
            "description": "Le film en bas devient sombre ou la pâte craque à la surface. Trop cuit.",
            "action": "Retirer immédiatement du feu. Le chou peut encore fonctionner mais sera plus sec — ajouter les œufs soigneusement pour ajuster la consistance."
          }
        ]
      },
      "feelCue": "Appuyez sur l'arrière de la cuillère dans la pâte — elle doit résister fermement et revenir très légèrement. S'il colle à la cuillère et s'éloigne, il faut plus de séchage. La pâte doit sentir la farine chaude, légèrement cuite aux noix."
    },
    {
      "nodeId": "step_3",
      "action": "Incorporer délicatement",
      "inputs": [
        "dried_panade",
        "ing_06"
      ],
      "outputState": "piping_choux",
      "instructions": "C'est l'étape la plus nuancée dans le choux. Laisser refroidir la panade pendant 5 minutes (pour ne pas cuire les œufs au contact), puis commencer à ajouter progressivement les œufs battus — une cuillère à soupe à la fois pour les premiers ajouts, battant vigoureusement entre chaque ajout. La pâte sera d'abord cassée et caillé alors que l'œuf essaie de se séparer de la graisse dans la panade. Continuez à battre — il reviendra ensemble. Ne pas ajouter tout l'œuf à la fois. L'oeuf total nécessaire varie selon la teneur exacte en eau de votre panade, la teneur en protéines de votre farine et l'humidité ambiante. Arrêtez d'ajouter de l'oeuf lorsque la pâte atteint la bonne consistance : lorsque vous soulevez la spatule et laissez tomber la pâte, elle doit tomber dans une forme « V » lente et lourde qui se courbe mais ne se brise pas – le bec doit être de 2 à 3 cm de long avant de tomber. Testez en tirant la spatule à travers la pâte : elle doit former un canal lisse qui se ferme lentement.",
      "visualCue": {
        "primaryTarget": "Doux, brillant, pâte pipeable qui pend de la spatule dans une goutte lente en forme de V (2-3 cm de bec) sans se casser. Surface brillante, non terne ni mate.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est raide et se brise proprement lorsqu'elle est levée sur la spatule. Ça ne coule pas. Trop petit œuf ajouté.",
            "action": "Ajouter plus d'oeuf battu, une cuillère à soupe à la fois, et bien battre entre les ajouts."
          },
          {
            "state": "Perfect",
            "description": "La pâte est brillante et lisse. Lorsqu'une spatule est levée lentement, elle forme une longue forme de V inversée (le « bec ») qui tient 2 à 3 secondes avant de tomber. Le test de canal montre une fermeture lente.",
            "action": "Transférer immédiatement dans un sac de tuyauterie muni d'une pointe ronde ou étoilée de 1,5 cm."
          },
          {
            "state": "Overdone",
            "description": "La pâte est écoulement et coule de la spatule dans un flux liquide. Elle s'étend à plat quand elle est conduite. Trop d'œufs.",
            "action": "Malheureusement, cela ne peut pas être récupéré en ajoutant plus de panade — faire un second petit lot de panade et plier la pâte d'écoulement en elle pour la re-coller."
          }
        ]
      },
      "feelCue": "La pâte devrait se sentir comme une pâte ferme, lourde et chaude lorsque vous la pressez entre vos doigts — lisse et brillante, jamais gritty ou grain. Il doit éplucher proprement une spatule avec une résistance satisfaisante et lente."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "piping_choux"
      ],
      "outputState": "finished_choux_shells",
      "instructions": "Pipez le choux sur des plaques de cuisson parcheminées : pour les profiteroles, faites des rondelles de 3 cm espacées de 4 cm ; pour les clairons, des lignes de 10 cm. Dégâtez votre bout de doigt et lissez tous les pics. Cuire au four à 200°C (390°F) pendant 10 minutes sans ouvrir le four — l'explosion initiale de la chaleur provoque une expansion rapide de la vapeur qui gonfle les coquilles. Puis réduire à 180°C (356°F) et cuire encore 15 à 20 minutes jusqu'à ce que les coquilles soient bien dorées, pas seulement sur le dessus. Les coquilles doivent être entièrement colorées avant d'ouvrir le four : une coquille pâle s'effondrera lorsqu'elle rencontrera l'air frais. Dans les 5 dernières minutes, fissurer la porte du four ouverte 5 cm pour laisser la vapeur s'échapper et les coquilles sécher complètement à l'intérieur. Transférer sur une grille et percer chaque coque avec une brochette à la base pour évacuer la vapeur restante.",
      "visualCue": {
        "primaryTarget": "Des coquilles profondes, même brunes dorées, qui ont gonflé jusqu'à 2-3 fois leur taille de pipe, sans taches pâles. Ils ressemblent à des dômes creux ou des oreillers.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Coquilles dorées pâles avec une surface mat et humide. Ils se sentent doux lorsqu'ils sont pressés et se dégonflent s'ils sont retirés du four maintenant.",
            "action": "Retourner au four 5 minutes de plus. Ne pas ouvrir le four tôt — l'effondrement de l'air frais est irréversible."
          },
          {
            "state": "Perfect",
            "description": "Deep, même brun doré partout, y compris sur les côtés. Les coquilles se sentent creuses et légères lorsqu'elles sont ramassées. Le tapotage de la base produit un son sec et creux.",
            "action": "Pierce avec une brochette pour évacuer la vapeur et refroidir sur une grille. Remplir dans les 4 heures pour un maximum de croustillant."
          },
          {
            "state": "Overdone",
            "description": "Très brun foncé, presque acajou. Les coquilles peuvent être fissurées sur les côtés. Une odeur d'œuf grillé.",
            "action": "Ils sont encore utilisables — coupez les taches très sombres. La saveur sera plus noisette et caramélisée, que beaucoup préfèrent."
          }
        ]
      },
      "feelCue": "Une coquille de choux parfaitement cuite ne pèse presque rien — elle devrait se sentir étonnamment légère pour sa taille, comme si le four mangeait l'intérieur et ne laissait que la croûte. Pressez doucement : il doit se sentir rigide, ne pas céder."
    }
  ]
};
