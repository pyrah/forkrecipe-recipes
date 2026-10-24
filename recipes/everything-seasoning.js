export default {
  "repoId": "master_american_everything_seasoning_001",
  "parentRepoId": null,
  "slug": "everything-seasoning",
  "author": "ForkRecipe Kitchen",
  "title": "Tout assaisonner",
  "description": "Le comptoir de bagel de New York dans un bocal — un mélange sec de sésame blanc et noir, de graines de pavot, d'ail déshydraté, d'oignon déshydraté et de sel de mer flocé. Saupoudrer de pain, d'oeufs, d'avocats, de légumes grillés ou de tout ce qui nécessite un contraste textural et une profondeur savoureuse.",
  "cuisine": "Américain",
  "culture": "Américain",
  "category": "condiments",
  "tags": [
    "assaisonnement",
    "américains",
    "bagel",
    "sésame",
    "végétalien",
    "à l'état sec",
    "Vite"
  ],
  "difficulty": 1,
  "activeTime": "5 min",
  "totalTime": "5 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 0,
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Spice",
      "name": "Graines de sésame blanc",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Graines de sésame noir",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Graines de coquelicots",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon haché déshydraté",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Ail haché déshydraté",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel de mer blanc (Maldon)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "Sel casher grossier"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Combiner",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "mixed_seasoning",
      "instructions": "Mesurer tous les ingrédients en poids dans un bol. Mélanger délicatement avec une cuillère ou une fourchette à distribuer uniformément — éviter de remuer vigoureusement pour écraser le sel feuilleté ou faire reposer inégalement les graines de sésame au fond. Le but est un mélange visuellement hétérogène où chaque cuillère apporte le profil complet : croûte de sésame, morsure de graines de pavot, saveur d'oignon et d'ail, et cristaux de sel. Garder le sel feuilleté en dernier, le plier doucement à l'extrémité pour préserver la structure cristalline.",
      "visualCue": {
        "primaryTarget": "Un beau mélange tacheté de sésame blanc et noir, de graines de pavot bleu-gris, de flocons d'allium déshydratés d'or pâle et de cristaux de sel blanc.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les composants sont stratifiés plutôt que mélangés — le sésame d'un côté, les grosses graines de pavot se déposent au fond. Chaque scoop sera déséquilibré.",
            "action": "Plier plus doucement et soigneusement. Incliner et tourner le bol, plier du bas vers le haut pour redistribuer les composants les plus denses."
          },
          {
            "state": "Perfect",
            "description": "Chaque cuilleré soulève un peu de tout — visiblement hétérogène sans aucun composant dominant. Sens de sésame et d'allium séché.",
            "action": "Transférer immédiatement dans un pot hermétique. Étiquette avec date."
          },
          {
            "state": "Overdone",
            "description": "Stirré trop vigoureusement, le sel flocé est écrasé à la poudre fine et les graines de sésame se sont emparées. La texture sera plate et poussiéreuse plutôt que agréablement grossière.",
            "action": "Incorporer encore quelques pincées de sel frais flocé pour restaurer la texture cristalline et la variance croquante."
          }
        ]
      },
      "feelCue": "Prenez une pincée du mélange fini et roulez-le entre vos doigts — vous devriez sentir des éléments distincts: les graines durs, rondes, les bords de cristal de sel déchiquetés et les flocons d'allium séchés plus grossiers. Si tout se sent comme une poudre fine uniforme, le sel flocé a été écrasé et le mélange aura un goût plat."
    },
    {
      "nodeId": "step_2",
      "action": "A conserver",
      "inputs": [
        "mixed_seasoning"
      ],
      "outputState": "finished_everything_seasoning",
      "instructions": "Transférer dans un pot en verre hermétique. Entreposer à la température ambiante à l'abri de la chaleur et de l'humidité — l'oignon déshydraté et l'ail sont hygroscopiques et s'écraseront s'ils sont exposés à la vapeur (ne pas conserver à côté du poêle). Le mélange se conserve pendant 3 mois. Agiter le pot avant chaque utilisation pour redistribuer les graines plus lourdes. Utilisez généreusement sur les bagels avec du fromage à la crème, des toasts à l'avocat, des œufs à la chair molle, de la peau de poulet rôtie avant de cuisiner ou mélangés au fromage à la crème ramolli pour une trempette.",
      "visualCue": {
        "primaryTarget": "Un pot complet de mélange assaisonné tacheté, visiblement texturé. Lorsque le pot est incliné, le contenu se déplace uniformément en un mélange, et non en couches séparées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les composants se sont installés en couches dans le bocal — les grosses graines de pavot et l'ail au fond, le sésame flottant au-dessus.",
            "action": "Agiter et tourner vigoureusement le pot avant chaque utilisation. Ceci est normal et n'indique pas un mauvais mélange."
          },
          {
            "state": "Perfect",
            "description": "Mélange bien distribué qui sent fortement le sésame, l'allium et le sel lorsque le couvercle est enlevé. Chaque pinceau offre une saveur cohérente.",
            "action": "Etiquette et date du pot. Profitez jusqu'à 3 mois."
          },
          {
            "state": "Overdone",
            "description": "Le pot était entreposé près du poêle ou mal scellé. L'oignon déshydraté et l'ail se sont réhydratés et le mélange est entaillé, humide et partiellement adouci.",
            "action": "Répartir sur une plaque de cuisson et sécher à 80°C pendant 15 minutes. Refroidir complètement et re-jar dans un endroit plus sec."
          }
        ]
      },
      "feelCue": "Pincez le tout assaisonner directement et pressez-le contre un morceau de pain beurré ou une moitié de bagel à la crème-fromage – il doit adhérer immédiatement au contact, les cristaux de sel scintillant, les graines de sésame visibles. Cette première morsure devrait produire de multiples textures : croquant des graines, la légère résistance des graines de pavot entre les dents, et un éclat d'allium sucré-savori."
    }
  ]
};
