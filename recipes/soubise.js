export default {
  "repoId": "fork_french_soubise_001",
  "parentRepoId": "master_french_bechamel_001",
  "slug": "soubise",
  "parentSlug": "bechamel",
  "author": "ForkRecipe Kitchen",
  "title": "Soubis de sauce",
  "description": "Béchamel devient soyeux et doux par une purée d'oignons transpirant bas et lent jusqu'à ce qu'ils abandonnent toute leur morsure. Pale, brillant, légèrement parfumé — le partenaire classique pour rôtir les viandes, les œufs, et tout ce qui veut un doux allium hum.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "sauces",
  "tags": [
    "sauce",
    "français",
    "oignon",
    "mère-sauce-dérivée",
    "purée"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "55 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2025-06-09",
  "updatedAt": "2025-06-09",
  "forkNote": "Béchamel enrichi d'une purée soyeuse d'oignons sucrés lentement, classique avec des viandes rôties et des œufs.",
  "changes": {
    "ingredientsAdded": 2,
    "ingredientsRemoved": 0,
    "ingredientsModified": 0,
    "stepsAdded": 1,
    "stepsRemoved": 0,
    "stepsModified": 1
  },
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Lait entier (chauffé)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "2% lait",
        "moitié-moitié pour une sauce plus riche"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": [
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": [
        "Wondera pour une sauce à l'épreuve des grumeaux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.2,
      "defaultUnit": "part",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Noix de muscade fraîchement râpée",
      "ratioValue": 0.02,
      "defaultUnit": "part",
      "substitutions": [
        "une pincée pré-gérée, dans une pincée"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poivre blanc",
      "ratioValue": 0.04,
      "defaultUnit": "part",
      "substitutions": [
        "poivre noir si ça ne vous dérange pas les taches"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Allium",
      "name": "Oignons jaunes (finement tranchés)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "oignons blancs",
        "oignons doux pour une sauce plus douce"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Beurre (pour les oignons transpirants)",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": [
        "une huile neutre pour une finition plus propre"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sueurs des oignons",
      "inputs": [
        "ing_10",
        "ing_11",
        "ing_04"
      ],
      "outputState": "sweated_onions",
      "instructions": "Faire fondre le beurre à feu doux, ajouter les oignons tranchés et une pincée de sel, et couvrir d'un couvercle ou d'une cartouche. Pliez-les doucement pendant 20-30 minutes, en remuant de temps en temps, jusqu'à ce que la fusion soit complètement douce et translucide. C'est transpirant, pas savourant — les oignons ne doivent pas prendre de couleur, ou la sauce finie deviendra grise et le goût d'oignon frit au lieu de sucré.",
      "visualCue": {
        "primaryTarget": "Un tas d'oignons gorgés, glacés, presque jammy, entièrement translucides avec pas un paquet d'or nulle part, assis dans une piscine de beurre clair.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont encore blancs, croquants aux bords, et sentent vifs et crus lorsque vous vous penchez.",
            "action": "Abaissez la chaleur, recouvrez-vous et continuez à transpirer — ils ont besoin de temps pour se briser et perdre leur morsure entièrement."
          },
          {
            "state": "Perfect",
            "description": "Les oignons se sont effondrés dans une masse douce, translucide, presque cuillerée, sucrée et entièrement sans couleur.",
            "action": "Ils sont prêts à rencontrer le béchamel."
          },
          {
            "state": "Overdone",
            "description": "Les bords ont tourné l'or ou le brun et les odeurs de cuisine des oignons frits — la sauce serait teintée et salée plutôt que pâle et douce.",
            "action": "Pour un pur soubis blanc, recommencez les oignons. Sinon, accepter une sauce au caramel plus foncée."
          }
        ]
      },
      "feelCue": "La casserole devrait chuchoter, pas étourdir. Les oignons ont l'impression de se dissoudre contre la cuillère, et l'arôme est doux, jamais le coup aigu du brunissement."
    },
    {
      "nodeId": "step_2",
      "action": "Cuire le roux",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "white_roux",
      "instructions": "Dans une casserole séparée, faire fondre le beurre jusqu'à ce qu'il mousse mais ne brunisse pas, fouetter dans la farine et cuire 2-3 minutes à feu moyen-doux à un roux blanc pâle, en remuant constamment. Gardez-le blanc pour protéger la couleur délicate de la sauce.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse et pâle de la couleur du sable humide, desserrant comme il cuisine et sentant faiblement la croûte de tarte — pas de couleur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte sent cru et farineux sans arôme de la poêle.",
            "action": "Continuez à remuer encore une minute pour faire cuire la farine crue."
          },
          {
            "state": "Perfect",
            "description": "Plongée, bouillonnant doucement, la couleur de l'os, sentant la croûte courte chaude.",
            "action": "Il est prêt pour le lait."
          },
          {
            "state": "Overdone",
            "description": "Tanné à blond et sentant la noix.",
            "action": "Recommencer — un roux blanc garde la soubise pâle et propre."
          }
        ]
      },
      "feelCue": "Le roux traîne contre le fouet comme une pâte épaisse, puis se détend. Il siffle doucement et ne craque jamais."
    },
    {
      "nodeId": "step_3",
      "action": "Construire le béchamel",
      "inputs": [
        "white_roux",
        "ing_01",
        "ing_05",
        "ing_06"
      ],
      "outputState": "nappe_bechamel",
      "instructions": "Rincer le lait chaud, fouetter constamment, puis laisser mijoter doucement 8-10 minutes jusqu'à une consistance de nappe qui enveloppe l'arrière d'une cuillère. Assaisonner de muscade et de poivre blanc. Gardez-le sur le côté plus épais — les oignons aqueux vont desserrer la purée finale.",
      "visualCue": {
        "primaryTarget": "Un béchamel lisse et brillant qui enveloppe la cuillère; un doigt tiré à travers le revêtement laisse un canal propre qui tient.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mince et aqueuse, sortant de la cuillère, le canal se fermant instantanément.",
            "action": "Laisser mijoter plus longtemps, fouetter, gélatiniser l'amidon et sortir de l'eau."
          },
          {
            "state": "Perfect",
            "description": "Velours et assez épais pour napper, tombant du fouet dans un ruban lisse.",
            "action": "Conseil dans les oignons transpirés."
          },
          {
            "state": "Overdone",
            "description": "Colle et raide, collant comme de la pâte avec une surface terne.",
            "action": "Whisk dans un jet de lait chaud pour se détendre — les oignons vont l'amincir davantage, alors ne pas trop corriger."
          }
        ]
      },
      "feelCue": "Le fouet rencontre une résistance constante, et la sauce s'estompe paresseusement avec des bulles lentes et lourdes, sentant le lait cuit sucré."
    },
    {
      "nodeId": "step_4",
      "action": "Purée et passe",
      "inputs": [
        "nappe_bechamel",
        "sweated_onions"
      ],
      "outputState": "finished_soubise",
      "instructions": "Incorporer les oignons transpirés dans le béchamel et mijoter ensemble quelques minutes pour se marier. Purée lisse avec un mélangeur ou un mélangeur d'immersion, puis passer à travers un tamis fin pour la texture la plus soyeuse – pousser la purée à travers avec une louche et jeter toutes les fibres laissées derrière. Goûtez et ajustez le sel; terminez avec un bouton de beurre pour le brillant si vous voulez.",
      "visualCue": {
        "primaryTarget": "Un ivoire pâle, purée tout à fait lisse, sans fibres ni paillettes, brillant et versable, drapant la cuillère et sentant douxment l'oignon et la crème.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Graineux ou fibreux, avec des morceaux visibles d'oignon et une texture rugueuse sur la langue.",
            "action": "Mélanger plus longtemps et passer à nouveau à travers le tamis jusqu'à ce qu'il soit parfaitement lisse."
          },
          {
            "state": "Perfect",
            "description": "Silence et uniforme, pâle et brillant, avec un doux parfum d'oignon doux et une finale propre et équilibrée. Enrober la cuillère uniformément.",
            "action": "Servir au chaud sur les viandes, oeufs ou légumes rôtis."
          },
          {
            "state": "Overdone",
            "description": "Surréduit et raide après mélange, ou fendue et huileuse à partir de bouillie trop agressive une fois les oignons entrés.",
            "action": "fouetter dans du lait chaud pour dénouer une épaisse purée; pour une sauce fractionnée, mélanger dans un jet de lait froid pour le ramener ensemble."
          }
        ]
      },
      "feelCue": "La sauce mélangée est sans poids et soyeuse sur la cuillère. Passé à travers le tamis, pas une seule fibre ne devrait glisser — il devrait verser comme une crème pâle et chaude."
    }
  ]
};
