export default {
  "repoId": "master_korean_galbiijjim_001",
  "parentRepoId": null,
  "slug": "korean-galbi-jjim",
  "author": "ForkRecipe Kitchen",
  "title": "Galbi-Jjim coréen (côtes courtes braisées de boeuf)",
  "description": "Les côtes courtes sucrées au soja se saignent lentement avec la poire, l'ail et le gingembre d'Asie jusqu'à ce que le collagène fonde dans une sauce laquée brillante qui s'accroche au boeuf dépoli.",
  "cuisine": "Coréen",
  "culture": "Hansik cuisine maison",
  "category": "proteins",
  "tags": [
    "coréen",
    "braisés",
    "boeuf",
    "côtes courtes",
    "soja",
    "poire",
    "- Oui.",
    "Cuisson lente"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "3 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 4,
    "sour": 1,
    "bitter": 0,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Côtes courtes de boeuf désossées (coupées en blanc ou en anglais)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "rondelle de bœuf osseux"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "sauce soja (ganjang)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Mirin",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "vin de riz + 1 c. à thé sucre"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Poire asiatique râpée (poire nashi)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "Poire de bosc",
        "kiwi (la moitié du montant)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Galangal"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Sucre brun ou brut",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Stocks d'eau ou de viande bovine",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Huile de sésame (finie)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Graines de sésame grillées et pétoncle tranché",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Gochujang ou flocons de chili séchés (chaleur facultative)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanchir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "blanched_ribs",
      "instructions": "Placer les côtes courtes dans une grande casserole et couvrir d'eau froide. Porter à ébullition à feu vif. Une fois bouillante, écumer vigoureusement la mousse grise. Après 5 à 7 minutes de blanchiment, égoutter et rincer chaque côte sous l'eau froide courante, frotter les protéines grises résiduelles. Cette étape n'est pas négociable pour un braise propre et clair sans aromatisants.",
      "visualCue": {
        "primaryTarget": "Les côtes sont gris pâle partout sans taches rouge sang. L'eau est libre lorsqu'elle est rincée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours rouge sang à l'extrémité osseuse. La mousse grise monte toujours dans le pot.",
            "action": "Continuer à blanchir — ces protéines sanguines vont troubler et bouillir la sauce finale."
          },
          {
            "state": "Perfect",
            "description": "Gris uniformément pâle, ferme au toucher. Plus de mousse. L'eau est libre.",
            "action": "Égoutter, rincer et sécher. Allez au braise."
          },
          {
            "state": "Overdone",
            "description": "La surface de la viande commence à se resserrer et à s'éloigner de l'os.",
            "action": "Aucun mal durable — le long braise va tout détendre. Continuez immédiatement."
          }
        ]
      },
      "feelCue": "Chaque côte doit se sentir ferme et fraîche après le rinçage: l'eau froide arrête la cuisson et place la surface de façon à ce qu'elle souille correctement à l'étape suivante."
    },
    {
      "nodeId": "step_2",
      "action": "Faire mariner",
      "inputs": [
        "blanched_ribs",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_11"
      ],
      "outputState": "marinated_ribs",
      "instructions": "Mélanger la sauce soja, le mirin, la poire râpée, l'ail, le gingembre, le sucre et le gochujang en option dans un bol. fouetter jusqu'à ce que le sucre se dissout. Ajouter les côtes blanchies et masser la marinade dans chaque crevasse autour de l'os. Faire mariner au moins 30 minutes à température ambiante ou jusqu'à la nuit au réfrigérateur.",
      "visualCue": {
        "primaryTarget": "Les côtes sont profondément enrobées d'une marinade brun rougeâtre, brillante avec des morceaux visibles d'ail et de gingembre qui s'accrochent à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les piscines de Marinade en bas. La surface de la viande est encore gris pâle, pas encore teintée.",
            "action": "Rejeter et masser plus activement. Les enzymes de la poire doivent être en contact avec la fève."
          },
          {
            "state": "Perfect",
            "description": "Chaque côte est uniformément recouverte. La surface a pris une teinte acajou légère. Un arôme sucré et salé se lève.",
            "action": "Procédez à la préparation de l'eau, réservant tout liquide marinade."
          },
          {
            "state": "Overdone",
            "description": "Viande marinée dans la poire pendant plus de 6 heures — la surface peut être légèrement musclée.",
            "action": "La texture sera encore excellente après la longue braise. Continuez."
          }
        ]
      },
      "feelCue": "La marinade doit être assez épaisse pour s'accrocher aux surfaces verticales de l'os — si elle glisse comme de l'eau, ajouter une touche plus râpée poire ou sucre pour construire la viscosité."
    },
    {
      "nodeId": "step_3",
      "action": "Braiser",
      "inputs": [
        "marinated_ribs",
        "ing_08"
      ],
      "outputState": "braised_ribs",
      "instructions": "Transférer les côtes et toute la marinade dans un four hollandais lourd ou une marmite. Ajouter l'eau ou le stock de sorte que le liquide arrive à la moitié des côtes. Porter à ébullition à feu vif, puis laisser mijoter lentement et régulièrement. Couvrir et brasser pendant 1,5 à 2 heures, tourner les côtes toutes les 30 minutes afin que tous les côtés se baignent dans la sauce.",
      "visualCue": {
        "primaryTarget": "Les côtes sont tendres à l'os, profondément acajou, et le liquide de cuisson est réduit à une sauce sirupeuse et brillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande reste ferme et résiste lorsqu'elle est pressée. L'os ne bouge pas. La sauce est fine et aqueuse.",
            "action": "Continuez à faire des larmes. À faible mijoter, le collagène prend du temps. Donnez-lui encore 30 minutes avant de tester à nouveau."
          },
          {
            "state": "Perfect",
            "description": "La viande produit une pression douce et tire proprement de l'os avec un léger remorqueur. La sauce est épaisse et s'accroche à une cuillère. Couleur profonde caramel-soy.",
            "action": "Découvrez pour réduire et terminer la glaçure."
          },
          {
            "state": "Overdone",
            "description": "La viande tombe complètement en morceaux. La sauce peut être trop réduite ou brûlée.",
            "action": "Retirer soigneusement la viande. Ajouter une éclaboussure d'eau dans la casserole et réduire plus doucement pour ramener la sauce."
          }
        ]
      },
      "feelCue": "Appuyez sur une côte avec une baguette — elle ne devrait rencontrer presque aucune résistance, comme pousser dans le beurre doux. La viande devrait avoir l'impression qu'elle veut quitter l'os, pas la tomber involontairement."
    },
    {
      "nodeId": "step_4",
      "action": "Faire réduire",
      "inputs": [
        "braised_ribs"
      ],
      "outputState": "glazed_ribs",
      "instructions": "Découvrez le pot et augmentez le feu à moyen. Déposer le liquide de cuisson en continu sur les côtes en les réduisant, en les basifiant chaque minute. Cuire de 10 à 15 minutes jusqu'à ce que la sauce soit épaisse, brillante et enveloppe l'arrière d'une cuillère sans courir. Retirer du feu et remuer dans l'huile de sésame.",
      "visualCue": {
        "primaryTarget": "Un manteau laqué, brillant miroir sur chaque côte. La sauce laisse un épais sentier lent lorsqu'elle sort d'une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sauce encore aqueuse et pâle. Débarrasse vite la cuillère.",
            "action": "Continuez à réduire, en basting continuellement. Les sucres doivent se concentrer."
          },
          {
            "state": "Perfect",
            "description": "La sauce est sirupeuse et acajou profond. On tombe de la cuillère dans des rubans épais et lents. Les côtes sont laquées.",
            "action": "Terminer avec de l'huile de sésame hors feu, puis déposer immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La sauce colle et commence à brûler aux bords du pot. Des odeurs de caramel qui deviennent amères.",
            "action": "Retirer immédiatement du feu. Déglacer avec 2 cuillères à soupe d'eau et remuer pour réémulsionner."
          }
        ]
      },
      "feelCue": "La cuillère à basting devrait laisser un sentier qui tient sa forme pendant une seconde avant de retomber — c'est le point de nappe où les sucres de soja et le collagène sont devenus un."
    },
    {
      "nodeId": "step_5",
      "action": "Dresser",
      "inputs": [
        "glazed_ribs",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_galbi_jjim",
      "instructions": "Disposer les côtes côté os sur un plateau de service. Arrosez toute la sauce restante sur le dessus. Éparpiller les graines de sésame grillées et les tranches minces de pétoncle. Servir immédiatement avec du riz à grains courts cuit à la vapeur.",
      "visualCue": {
        "primaryTarget": "Des côtes acajoues profondes scintillent avec de l'huile de sésame, parsemées de sésame blanc et de pétoncle vert vif contre la glaçure foncée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les côtes sont sèches et mates. Pas de gloss de l'huile de sésame.",
            "action": "Arrosez un peu plus d'huile de sésame tout en étant chaud. La chaleur résiduelle s'étendra et l'émulsionnera à travers la surface."
          },
          {
            "state": "Perfect",
            "description": "Surface vitrée. Les graines de sésame et le pétoncle s'assoient sur le dessus sans couler. La vapeur monte doucement.",
            "action": "Servir immédiatement. La sauce sera ferme comme elle refroidit."
          },
          {
            "state": "Overdone",
            "description": "Des graines de sésame ont été ajoutées alors que la viande était trop chaude.",
            "action": "Ajouter une deuxième couche de graines fraîches sur le dessus pour corriger la couleur."
          }
        ]
      },
      "feelCue": "La côte finie ne devrait offrir aucune résistance lorsqu'elle est tirée à la main; l'os doit glisser comme si elle était huilée, laissant la viande derrière elle dans une pièce brillante et intacte."
    }
  ]
};
