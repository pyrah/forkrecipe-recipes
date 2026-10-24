export default {
  "repoId": "master_french_chicken_stock_001",
  "parentRepoId": null,
  "slug": "chicken-stock",
  "author": "ForkRecipe Kitchen",
  "title": "Stock de poulet",
  "description": "L'épine dorsale tranquille de la cuisine française — les os et les aromatiques s'étirent pendant des heures d'eau à peine tremblante jusqu'à ce que le liquide devienne or, riche en gélatine, légèrement sucré, jamais laissé bouillir.",
  "cuisine": "Français",
  "culture": "Burgundian",
  "category": "stocks",
  "tags": [
    "stock",
    "français",
    "Fonds",
    "os",
    "Fondation",
    "technique"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "4 hr 30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 1,
    "salty": 1,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Ossements, dos et ailes de poulet (brut)",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "carcasse rôtie pour un stock brun plus profond",
        "pieds de poulet pour la gélatine extra"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 2000,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Oignon jaune (halves, peau dessus)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "haut de poireaux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Carotte (gros morceaux)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Céleri (gros morceaux)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "parures de fenouil"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Bouquet garni (thyme, tiges de persil, feuille de laurier, feuille de poireau)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "1 c. à thé thym séché + 1 feuille de laurier"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Maïs de poivre noir (ensemble)",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "grains de poivre blancs pour un stock plus propre"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanchir",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "blanched_bones",
      "instructions": "Placer les os dans un grand dépôt et couvrir d'environ un tiers de l'eau froide (ou de l'eau douce à couvrir). Porter à un ébullition à feu vif pendant 2-3 minutes, puis jeter tout dans une calandre et rincer les os sous l'eau froide courante, frotter toute mousse grise collante et le sang caillé. C'est cette étape qui donne une clarté au stock français. Retournez les os propres dans une casserole rincée.",
      "visualCue": {
        "primaryTarget": "Une lourde couche de cigogne brun grisâtre s'est levée et les os sont pâles et propres. Après le rinçage, les os ont l'air nus et lavés, sans résidu de collage foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau n'est qu'échauffante ou mijotante; une petite écume a surgi et les os regardent toujours les articulations en sang.",
            "action": "Levez la chaleur à ébullition complète et donnez - lui une minute de plus — les impuretés ont besoin d'une chaleur vigoureuse pour coaguler et monter."
          },
          {
            "state": "Perfect",
            "description": "Un radeau épais de mousse grise enveloppe la surface et les os sont blanchis pâlement. L'odeur est propre et légèrement charnue, pas crue.",
            "action": "Égoutter, rincer les os et le pot, et laisser mijoter."
          },
          {
            "state": "Overdone",
            "description": "L'eau a bouilli dur pendant de nombreuses minutes et se transforme en laiteux nuageux à mesure que la graisse émulsifie en elle.",
            "action": "Égoutter maintenant — vous avez perdu un peu de saveur à l'eau blanchissante, mais le stock lui-même sera toujours propre. Rincez bien et avancez."
          }
        ]
      },
      "feelCue": "La cuisine sent peu de volaille propre, pas de cuisine — c'est une purge, pas une étape de saveur. Les os rincés doivent se sentir fermes et un toucher glissant, frottés sans film collant."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "blanched_bones",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "simmered_stock",
      "instructions": "Couvrez les os blanchis avec le reste de l'eau froide — il devrait s'asseoir à environ 3 cm au - dessus d'eux. Porter lentement à feu, puis laisser mijoter au plus doux où seulement quelques bulles brisent la surface chaque seconde ou deux. Après 30 minutes, ajouter l'oignon, la carotte, le céleri, le bouquet garni et les grains de poivre. Tenez ce tremble nu, découvert, pendant 3-4 heures, mousse écrèmente et graisse de surface avec une louche chaque fois qu'il se rassemble. Ne la laissez jamais bouillir — bouillir la graisse et les protéines dans le liquide et la rendre trouble et grasse.",
      "visualCue": {
        "primaryTarget": "La surface bouge à peine: une bulle paresseuse ou un éclat s'élevant ici et là, avec un mince rideau de vapeur. Le liquide s'amplifie graduellement à l'or pâle et goûte distinctement du poulet avec une note de derrière végétale douce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est mince, aqueux et presque incolore; il a un goût faible et lavé même après une heure ou deux.",
            "action": "Confirmez que le niveau d'eau n'est pas trop élevé, maintenez le mijot, et donnez-lui plus de temps — saveur et extrait de gélatine lentement. Incliner partiellement le couvercle s'il diminue trop vite."
          },
          {
            "state": "Perfect",
            "description": "Pâle-or, brillant, et nettement parfumé de poulet avec un arôme propre. Un refroidissement à cuillères sur une assiette se sent légèrement collant entre les doigts — signe de gélatine dissoute.",
            "action": "Arrêtez d'ajouter de la chaleur et préparez-vous à la déformation."
          },
          {
            "state": "Overdone",
            "description": "Le stock est devenu nuageux et grisâtre, avec un éclat gras et un goût plat, surcuit, légèrement amer d'un ébullition dur ou des légumes qui se décomposent.",
            "action": "Retirez-vous immédiatement pour arrêter la dégradation; refroidissez et retirez la graisse solidifiée. Lots futurs : baissez la chaleur et tirez les légumes plus tôt."
          }
        ]
      },
      "feelCue": "Écouter la quasi-silence — un mijot approprié ne fait que le blip le plus doux, pas un churn roulant. La vapeur devrait sentir rondement salé et doux, comme le dîner du dimanche deux chambres loin."
    },
    {
      "nodeId": "step_3",
      "action": "La souche et la dégraisse",
      "inputs": [
        "simmered_stock"
      ],
      "outputState": "finished_stock",
      "instructions": "Déposer le stock à travers un tamis à mailles fines doublé d'un chiffon humide dans un contenant propre, laissant derrière lui le dernier pouce boueux. Ne pressez pas les solides — laissez-les couler. Refroidir rapidement : placer le récipient dans un bain de glace, puis réfrigérer. Une fois froid, retirez le bouchon de graisse solidifiée avec une cuillère. Le stock fini doit être préparé à une gelée molle et moussante lorsqu'il est complètement réfrigéré, preuve de gélatine bien extraite. Utiliser dans les 4 jours ou congeler.",
      "visualCue": {
        "primaryTarget": "Liquide clair et doré sans particules flottantes, capté (une fois réfrigéré) par un disque de graisse pâle qui s'éloigne proprement. En dessous, le stock tremble comme une gelée molle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le matériel entraîné est encore recouvert de sédiments fins ou reste complètement liquide et lâche après une nuit au réfrigérateur.",
            "action": "Reformer à travers un chiffon frais humide pour plus de clarté. S'il ne se met jamais, il manque de gélatine — réduisez - la doucement sur le poêle pour se concentrer, ou ajoutez les pieds de poulet la prochaine fois."
          },
          {
            "state": "Perfect",
            "description": "Or cristallin au chaud; se met à une gelée crépusculaire à cuiller quand elle est froide avec un bouchon de graisse propre sur le dessus.",
            "action": "Relever la graisse, la portion et réfrigérer ou congeler. Il est prêt à construire des soupes et des sauces."
          },
          {
            "state": "Overdone",
            "description": "Stock a réduit jusqu'à présent il se met dans un bloc rigide, caoutchouteux, ou goûts sursalés et intenses.",
            "action": "Ceci est concentré — traitez - le comme une base de glace et diluez avec de l'eau quand vous l'utilisez."
          }
        ]
      },
      "feelCue": "Chaud, le stock enveloppe une cuillère et vos lèvres d'un faible collant; froid, il devrait gigoler quand le récipient est bouché. C'est tout ce que l'on peut dire: la gélatine est ce qui donne des sauces à leur corps et qui brille."
    }
  ]
};
