export default {
  "repoId": "master_french_moules_marinieres_001",
  "parentRepoId": null,
  "slug": "moules-marinieres",
  "author": "ForkRecipe Kitchen",
  "title": "Moules Marinières",
  "description": "Les moules s'ouvraient à la vapeur dans du vin blanc, des échalotes et du persil — le bouillon entier devenant la sauce. Le plat est fait en dix minutes et doit être mangé immédiatement.",
  "cuisine": "Français",
  "culture": "Norman/Breton",
  "category": "seafood",
  "tags": [
    "Moules",
    "français",
    "Produits de la mer",
    "vin",
    "vapeur",
    "Normes",
    "breton"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Moules vivantes, broyées et démêlées",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Palourdes",
        "coqs"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Solvent",
      "name": "Vin blanc sec (Muscadet ou Chablis)",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "cidre sec",
        "stocks de poissons légers"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Échalotes finement coupées en rondelles",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "oignons blancs, tranchés finement"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Persil à feuilles plates, approximativement haché",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": [
        "Cerveau"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "Bonne huile d'olive"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poivre noir, fraichement craqué",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "La baguette croustillante ou la courge, pour servir",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "frites"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Tri",
      "inputs": [
        "ing_01"
      ],
      "outputState": "sorted_mussels",
      "instructions": "Astucez les moules dans une calandre sous eau froide. Jetez tout avec des coquilles cassées ou cassées. Maintenez chaque moule à coquille ouverte et tapez-la fermement sur le bord de l'évier — une moule vivante se fermera en 30 secondes. Jetez tout ce qui reste ouvert. Grappez toutes les barbes visibles (la touffe fibreuse qui dépasse la couture) entre vos doigts et déchirez fermement vers la charnière pour les tirer libres. Éliminez les branles restantes avec une brosse rigide. Conserver les moules triées dans la calandre à température ambiante; ne pas les submerger dans l'eau douce.",
      "visualCue": {
        "primaryTarget": "Un tas de moules foncées bien fermées, à coquille propre, sans barbe visible ni amas de barnacles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Plusieurs coquilles encore ouvertes et non testées, des barbes encore en fuite des coutures, de lourds revêtements de barnacles sur les coquilles.",
            "action": "Appuyez sur chaque coque ouverte individuellement; retirez les barbes en s'attachant près de la coque et en tirant fermement vers la charnière. Jetez ceux qui ne se referment pas après avoir tapé."
          },
          {
            "state": "Perfect",
            "description": "Tous les coquillages sont fermés serrés ou activement fermés lorsqu'ils sont touchés. Les coquilles sont propres et sombres. Aucune barbe visible à n'importe quelle couture.",
            "action": "Continuez — les moules sont prêtes. Cuire dans l'heure."
          },
          {
            "state": "Overdone",
            "description": "Les moules ont été submergées dans l'eau douce et certaines sont en train de s'ouvrir ou de flotter, elles se noient.",
            "action": "Égoutter immédiatement et procéder à la cuisson. Ne trempez pas les bivalves dans de l'eau douce — il les tue et dilue la liqueur de bricolage dont dépend le plat."
          }
        ]
      },
      "feelCue": "Chaque moule doit se sentir lourde et dense pour sa taille: une coquille qui se déchire ou qui se sent creuse est vide ou morte et doit être jetée."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_06"
      ],
      "outputState": "softened_alliums",
      "instructions": "Réglez un grand pot, large, à base lourde à feu moyen — il doit être assez grand pour tenir toutes les moules avec de la place à épargner. Faire fondre le beurre jusqu'à mousser. Ajouter les échalotes et l'ail. Transpirer doucement, en remuant souvent, pendant 3 à 4 minutes jusqu'à ce qu'il soit complètement doux, vitreux et sucré. Ne les laissez pas colorer du tout — tout brunissement poussera le bouillon final amer.",
      "visualCue": {
        "primaryTarget": "Des anneaux d'échalote et des tranches d'ail se sont effondrés dans des rubans glacés collés au beurre doré mousseux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les échalotes sont toujours blanches opaques et se cassent lorsqu'elles sont pressées. L'ail sent cru et vif.",
            "action": "Abaissez la chaleur et continuez la cuisson. Les alliums bruts laisseront un bord dur et piquant dans le bouillon fini."
          },
          {
            "state": "Perfect",
            "description": "Complètement translucide, douce comme des nouilles cuites, sucrée. Le beurre est doré et parfumé sans brunissement sur le fond de la poêle.",
            "action": "Augmenter la chaleur et ajouter le vin immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les bords de l'ail sont dorés pâles ou bruns et sentent les amers grillés. Les échalotes sont jammy et sombres aux bords.",
            "action": "Enlevez les morceaux d'ail doré. Le bouillon portera une faible note amère, mais est toujours utilisable."
          }
        ]
      },
      "feelCue": "Appuyez sur un anneau d'échalote ramolli entre vos doigts — il devrait s'effondrer instantanément sans résistance, comme un anneau de pâtes cuites."
    },
    {
      "nodeId": "step_3",
      "action": "Déglacer",
      "inputs": [
        "softened_alliums",
        "ing_02",
        "ing_07"
      ],
      "outputState": "wine_broth",
      "instructions": "Verser le vin blanc et ajouter le poivre noir cassé. Augmenter la chaleur et porter à un ébullition vigoureux. Laisser bouillir pendant 1 minute pour sortir du bord dur de l'alcool brut. Le liquide devrait réduire très légèrement et sentir comme un court-bouillon propre et raffiné – lumineux et vineux mais pas tranchant.",
      "visualCue": {
        "primaryTarget": "Un liquide d'or pâle bouillonnant rapidement remplit le pot de vapeur bouillante. La netteté du vin cru a cuit.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide mijote à peine et sent clairement l'alcool brut, vif et fermenté.",
            "action": "Augmentez encore la chaleur et attendez un ébullition approprié avant d'ajouter des moules. L'alcool brut rétrécit la chair des moules et terne le bouillon."
          },
          {
            "state": "Perfect",
            "description": "Faire bouillir, faire des bulles au centre. La vapeur sent clair et propre — des notes de vin fruité sans la morsure. Les échalotes boudent.",
            "action": "Astucez toutes les moules en un seul mouvement et couvrez immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le liquide a été réduit à une fine piscine sirupeuse. Les échalotes s'attrapent au fond du pot.",
            "action": "Ajouter une autre petite éclaboussure de vin ou d'eau pour restaurer suffisamment de volume pour créer de la vapeur."
          }
        ]
      },
      "feelCue": "Coupez votre main sur la vapeur qui s'élève de la casserole — elle doit sentir comme la mer avec une note de vin propre, pas comme l'intérieur d'une bouteille de vin."
    },
    {
      "nodeId": "step_4",
      "action": "vapeur",
      "inputs": [
        "sorted_mussels",
        "wine_broth"
      ],
      "outputState": "steamed_mussels",
      "instructions": "Astucez toutes les moules triées dans le bouillon bouillant en un seul coup. Fermez immédiatement le couvercle et faites cuire à feu maximum pendant 3-4 minutes. Agiter vigoureusement le pot par les poignées une ou deux fois pendant la cuisson pour redistribuer les moules afin que chaque coquille soit directement en contact avec la vapeur. Soulevez le couvercle et inspectez : chaque coque doit être ouverte. Toute moule encore fermée après 6 minutes de cuisson totale doit être jetée — ils étaient morts avant d'entrer.",
      "visualCue": {
        "primaryTarget": "Un pot de moules larges ouvertes à la chair jaune orange vif, dans un bouillon riche en or ambre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Plusieurs coquilles sont encore serrées. Le bouillon est encore légèrement mijoté, pas complètement enroulé. La chair des moules à l'intérieur des coquilles ouvertes est encore grise et légèrement translucide.",
            "action": "Remplacez immédiatement le couvercle et faites cuire 1 à 2 minutes de plus, en agitant le pot. Si les coquilles restent fermées après 6 minutes au total, retirez-les et jetez-les — ne les forcez pas à s'ouvrir."
          },
          {
            "state": "Perfect",
            "description": "Tous les coquillages sont larges. La chair est pluviale, entièrement opaque, et un safran-orange vif. Le papillon est d'or profond, parfumé et abondant.",
            "action": "Retirer du feu instantanément — chaque seconde supplémentaire sur la chaleur durcit la chair."
          },
          {
            "state": "Overdone",
            "description": "La chair des moules a rétréci, frisé et est devenue caoutchouteuse. Certains se sont entièrement détachés de leurs coquilles. Le bouillon est réduit et intensément salé.",
            "action": "Servir immédiatement, peu importe — le bouillon est toujours bon et les moules sont encore comestibles, juste plus mâcher. Il n'y a pas de sauvetage une fois trop cuit."
          }
        ]
      },
      "feelCue": "Agiter le pot à mi-cuisson — vous devriez entendre un tas de coquillages qui roulent ensemble. Un son mince et craquant signifie que les moules sont surtout des coquilles vides."
    },
    {
      "nodeId": "step_5",
      "action": "Dresser",
      "inputs": [
        "steamed_mussels",
        "ing_05",
        "ing_08"
      ],
      "outputState": "moules_marinieres",
      "instructions": "Déposer les moules et chaque goutte de bouillon parfumé dans des bols profonds et chauds. Dispersez un généreux poing de persil haché approximativement sur chaque bol. Servir instantanément avec un panier de pain croustillant pour la garniture. Toute la casserole devrait atteindre la table dans les 90 secondes suivant la sortie de la chaleur — les moules sont le plat le plus sensible au temps dans la cuisine bistro française.",
      "visualCue": {
        "primaryTarget": "Des bols profonds empilés de coquilles noires à jet ouvert, de chair orange vif scintillent à l'intérieur, de persil vert vif éparpillé sur le dessus, bouillon doré à la vapeur pooled below.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le persil n'est pas encore ajouté. Les bols sont froids. Broth toujours dans la casserole.",
            "action": "Chauffer les bols d'abord (remplir d'eau bouillante pendant 30 secondes, vide). Le persil n'est pas une décoration facultative — il ajoute une fraîcheur herbacée essentielle qui coupe la saumure."
          },
          {
            "state": "Perfect",
            "description": "Persil vert vif et abondant. Brûlant et chatoyant. Les moules sont toutes ouvertes et oranges. Du pain à côté.",
            "action": "Mangez immédiatement. Ne les laissez pas s'asseoir."
          },
          {
            "state": "Overdone",
            "description": "Les moules sont assises et refroidissent dans leurs coquilles. Le papillon est devenu une lécherette gélatineuse et congelante.",
            "action": "Il n'y a pas de rétablissement. Servir l'instant où le pot quitte le poêle — les moules marinières n'attendent personne."
          }
        ]
      },
      "feelCue": "Le bouillon dans la cuillère doit goûter simultanément salé, doux, vineux et océanique — une sauce complète née de la chaleur, du vin et de la liqueur de moules."
    }
  ]
};
