export default {
  "repoId": "master_indian_samosa_001",
  "parentRepoId": null,
  "slug": "samosa",
  "author": "ForkRecipe Kitchen",
  "title": "Samosa avec le remplissage Aloo",
  "description": "Crisp, pyramides de pâtisseries cloquées encaissant la pomme de terre épicée et la garniture de pois assaisonnés de poudre de mangue séchée et de garam masala — fracassés à l'extérieur avec un remplissage qui est simultanément doux, tranchant, et le réchauffement. Une tasse de chai et une assiette de celles-ci est le thé parfait de l'Inde du Nord.",
  "cuisine": "Indiens",
  "culture": "Rue des Indes du Nord",
  "category": "breads",
  "tags": [
    "indienne",
    "frits",
    "pâtisserie",
    "pommes de terre",
    "Produits de la rue",
    "végétarien",
    "thé-temps"
  ],
  "difficulty": 3,
  "activeTime": "1 hr",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 2,
    "bitter": 0,
    "umami": 2,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général (maïda)",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "farine de blé entier (la pâte sera moins croquante)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Shortening de ghee ou de légumes (pour pâtisserie)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "beurre froid, cubes",
        "huile végétale"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Eau glacée (pour pâte à pâte)",
      "ratioValue": 70,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Starch",
      "name": "Pommes de terre de cire (huiles, refroidies et grossièrement purées)",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "Yukon Pommes de terre d'or"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Protein",
      "name": "Pois verts congelés (dégelés)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "pois frais",
        "Maïs décortiqué"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Chili vert (finement haché)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "poivre de serrano",
        "jalapeño"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gingembre frais (finement râpé)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "0,5 c. à thé de gingembre moulu"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Graines de cumin (en entier, pour la floraison)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "poudre de cumin (utiliser 3g, ajouter avec des épices sèches)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Poudre d'amchur (poudre de mangue séchée)",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": [
        "1 c. à thé jus de citron plus 0,5 c. à thé pâte de tamarin"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Garam masala",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "Biryani masala"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel de mer fin (pour pâtisserie et remplissage)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Fat",
      "name": "Huile neutre pour friture profonde (fleur de soleil ou légumes)",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "huile de coco raffinée"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pétrir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_11"
      ],
      "outputState": "rested_pastry_dough",
      "instructions": "Mélanger la farine et la moitié du sel dans un bol. Frottez le ghee ou raccourcissez-le dans la farine avec le bout des doigts jusqu'à ce que le mélange ressemble à des chapelures grossières et qu'il ne reste plus de grosses boules de graisse. Arroser dans de l'eau glacée une cuillère à soupe à la fois, en mélangeant avec une fourchette après chaque addition, jusqu'à ce que la pâte se réunisse sans être collante. Il devrait se sentir plus ferme qu'une pâte à pain — cette pâte serrée et raide est ce qui donne samosas leur claquement. Agenouillez très brièvement — 1 minute seulement — puis enveloppez bien et reposez-vous pendant 30 minutes à température ambiante.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte pâle et ferme qui tient sa forme et ne craque pas lorsqu'elle est pressée mais ne ressort pas. Surface lisse sans miettes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est émiettée et s'effondre lorsqu'elle est pressée. Des taches sèches autour des bords.",
            "action": "Ajouter une cuillère à café à la fois, pétrir brièvement après chaque ajout jusqu'à ce qu'il cohère."
          },
          {
            "state": "Perfect",
            "description": "Ferme, lisse et souple. Presse à plat sans craquer. C'est comme modéliser l'argile — dense et coopérative.",
            "action": "Envelopper et reposer 30 minutes."
          },
          {
            "state": "Overdone",
            "description": "La toux est douce, collante et élastique. Il ressort quand il est roulé.",
            "action": "Poussière avec une petite quantité de farine et repos 30 minutes réfrigérés — le gluten doit se détendre."
          }
        ]
      },
      "feelCue": "Appuyez sur un pouce dans la pâte — il devrait laisser un cratère propre sans que la pâte craque aux bords. Ferme, pas raide; dense, pas collant."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_12",
        "ing_08",
        "ing_06",
        "ing_07",
        "ing_04",
        "ing_05",
        "ing_09",
        "ing_10"
      ],
      "outputState": "spiced_filling",
      "instructions": "Chauffer 2 cuillerées à soupe de l'huile de friture dans une poêle à feu moyen. Bloomez les graines de cumin pendant 30 secondes jusqu'à ce qu'elles craquent et s'assombrissent. Ajouter le chili vert et le gingembre, faire frire 1 minute. Ajouter la purée de pommes de terre et les pois et plier doucement pour la combiner, en essayant de conserver une certaine texture de pomme de terre — ne la transformez pas en aliments pour bébés. Ajouter l'amchur, le garam masala et le sel restant. Mélanger et cuire 2 à 3 minutes jusqu'à ce que le remplissage soit parfumé et légèrement sec. Bouche: il doit être assaisonné avec assurance, aigre de l'amchur, et se réchauffer avec des épices. Le remplissage doit être entièrement frais avant l'emballage — le remplissage chaud crée de la vapeur à l'intérieur de la samosa et fait le soggy pâtisserie.",
      "visualCue": {
        "primaryTarget": "Une garniture jaune doré, bien épicée avec des bijoux de pois visibles et des morceaux de pommes de terre. Pas mouillé ou brillant — assez sec pour tenir sa forme lorsqu'elle est écorcée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le remplissage est humide et collant. Le cumin brut et l'odeur de gingembre dominent. Ça a un goût plat.",
            "action": "Cuire plus longtemps à feu moyen pour éliminer l'humidité. Le remplissage doit être assez sec."
          },
          {
            "state": "Perfect",
            "description": "Le sec, bien assaisonné, tient sa forme lorsqu'il est écopé. Chaque morsure a un caractère aur-spice distinct. Graines de cumin visibles partout.",
            "action": "Étaler sur une assiette pour refroidir complètement avant l'emballage."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage est très sec et collant en touffes. Ça commence à brunir.",
            "action": "Ajouter une cuillère à soupe d'eau, remuer et retirer de la chaleur. Toujours bon pour l'emballage."
          }
        ]
      },
      "feelCue": "Goûtez une pincée de remplissage — l'amchure devrait délivrer une aurence brillante, semblable à des agrumes, qui capture à l'arrière de votre mâchoire, équilibrée contre le cumin terreux et la chaleur du chili."
    },
    {
      "nodeId": "step_3",
      "action": "Façonner",
      "inputs": [
        "rested_pastry_dough",
        "spiced_filling"
      ],
      "outputState": "raw_samosas",
      "instructions": "Divisez la pâte reposée en 10 à 12 boules égales. Roulez chaque boule sur une surface légèrement farinée dans un ovale d'environ 15 cm × 8 cm, d'une épaisseur de 2 à 3 mm — plus mince que vous ne le pensez. Couper chaque ovale en deux sur le long axe, donnant deux morceaux en forme de D. Pliez chaque D dans un cône : humidifiez un bord droit avec de l'eau, chevauchez les deux bords droits de 5 mm et appuyez fermement pour sceller. Remplir le cône des deux tiers avec le remplissage refroidi — ne pas remplir trop. Mouiller le bord supérieur ouvert avec de l'eau et appuyer fermement pour sceller dans un triangle. Appuyez sur chaque couture entre les doigts puis appuyez légèrement sur la surface de travail pour créer la forme plate et pyramidale. Installé sur un plateau légèrement huilé. Les bords scellés doivent être complètement étanches à l'eau.",
      "visualCue": {
        "primaryTarget": "Neat, parcelles triangulaires avec faces plates, coutures étanches et pas de trous de remplissage visibles. Chacun tient sa forme lorsqu'il est légèrement pressé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coutures sont pincées mais non scellées — vous pouvez voir des trous aux bords. Le remplissage a trop rempli et pousse à travers.",
            "action": "Réhydratez les bords de la couture et appuyez plus fermement. Enlever le remplissage si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Des parcelles triangulaires fermes sans coutures visibles. Une fois pressés, ils tiennent leur forme. La surface de la pâte est lisse avec un léger reflet de l'eau du phoque.",
            "action": "Repos à découvert 5 minutes avant la friture."
          },
          {
            "state": "Overdone",
            "description": "Vous avez trop manipulé la pâte et elle est devenue chaude, grasse et très élastique.",
            "action": "Réfrigérer les samosas en forme pendant 20 minutes avant de faire frire — la graisse doit se raffermir."
          }
        ]
      },
      "feelCue": "Maintenez chaque samosa scellé dans votre paume et appuyez doucement sur les trois visages — ils devraient se sentir uniformément fermes avec le remplissage distribué tout au long, non pas dentelé ou creux dans un coin."
    },
    {
      "nodeId": "step_4",
      "action": "Frire",
      "inputs": [
        "raw_samosas",
        "ing_12"
      ],
      "outputState": "finished_samosas",
      "instructions": "Chauffer l'huile de friture dans un pot profond et lourd à 160°C (325°F) – moins que prévu. Samosas doit faire frire lentement pour développer la croûte blister caractéristique : une chaleur élevée scelle l'extérieur avant que l'intérieur ne cuise et la pâtisserie n'a pas le temps de développer ses couches floceuses. Abaissez de 3 à 4 samosas à la fois dans l'huile et faire frire, tournant toutes les 2 minutes, pendant 10 à 12 minutes au total jusqu'à ce qu'ils soient un ambré-or même profond sur tous les visages. Augmenter la température à 175°C (350°F) pendant les 2 dernières minutes pour croquer l'extérieur. Enlever avec une cuillère à fentes et égoutter debout dans une grille ou une calandre, non couchée à plat, ce qui préserve la croûte de tous les côtés.",
      "visualCue": {
        "primaryTarget": "Deep ambre-or sur tous les visages avec un extérieur foulé, cloqué, mat. Pas de taches mouillées et pâles. La surface de la pâtisserie a la texture de la terre fine fissurée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les Samosa sont blonds avec une surface pâteuse lisse et brillante. Tu n'as toujours rien vu.",
            "action": "Continuer à frire à 160°C — ils ont besoin de plus de temps. Vérifiez la température de l'huile avec un thermomètre."
          },
          {
            "state": "Perfect",
            "description": "Deep, même ambre avec une surface cloquée folle qui semble croustillante lorsqu'on tape avec un ongle. Elle tient sa forme rigide lorsqu'elle est levée.",
            "action": "Égoutter et servir immédiatement avec du chutney à la menthe et de la sauce au tamarin."
          },
          {
            "state": "Overdone",
            "description": "Marron foncé bordant le brun rouge, avec des taches plus foncées aux coins.",
            "action": "Toujours comestible mais légèrement amer aux extrémités. Égoutter immédiatement sur les serviettes en papier et servir rapidement."
          }
        ]
      },
      "feelCue": "Tapez le côté d'un samosa frit avec votre ongle — il devrait sonner avec une fissure creuse, papier, pas un bourbier terne. Les couches de pâte se sont séparées dans la chaleur et la samosa se maintient avec sa propre croûte rigide."
    }
  ]
};
