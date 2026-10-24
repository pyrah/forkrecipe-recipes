export default {
  "repoId": "master_italian_limoncello_001",
  "parentRepoId": null,
  "slug": "limoncello",
  "author": "ForkRecipe Kitchen",
  "title": "Limoncello",
  "description": "Zeste de citron imprégné d'alcool presque pur pendant un mois jusqu'à ce que chaque huile aromatique soit extraite et que l'esprit brille d'un jaune surnaturel, puis sucré avec du sirop de sucre froid et dilué dans une liqueur glacée soyeuse qui goûte de la côte amalfitaine dans un verre congelé. La patience est le seul ingrédient que vous ne pouvez pas acheter.",
  "cuisine": "Italien",
  "culture": "Sud de l ' Italie",
  "category": "beverages",
  "tags": [
    "boisson",
    "Italien",
    "liqueur",
    "citron",
    "végétalien",
    "Sans gluten",
    "pas de cuisson"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "30 days",
  "ratioSystem": "parts",
  "stars": 1640,
  "forks": 127,
  "contributors": 33,
  "license": "CC-BY-SA",
  "createdAt": "2026-02-15",
  "updatedAt": "2026-02-15",
  "flavorRadar": {
    "sweet": 4,
    "salty": 0,
    "sour": 3,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Citrus",
      "name": "Citrons biologiques (non épilés)",
      "ratioValue": 8,
      "defaultUnit": "whole",
      "substitutions": [
        "Citrons Sorrento (traditionnels et supérieurs)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Solvent",
      "name": "Alcool céréalier (95% ABV, Everclear)",
      "ratioValue": 500,
      "defaultUnit": "ml",
      "substitutions": [
        "190-proof esprit neutre",
        "vodka haute résistance (extraction moins efficace)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre blanc granulé",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Hydration",
      "name": "Eau filtrée (pour sirop)",
      "ratioValue": 500,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Prélever le zeste",
      "inputs": [
        "ing_01"
      ],
      "outputState": "lemon_zest",
      "instructions": "Frotter les citrons sous l'eau chaude pour enlever toute cire ou résidu. À l'aide d'un éplucher végétal ou d'un microplan, n'enlevez que le zeste extérieur jaune vif — évitez toute piqûre blanche, intensément amère. Les bandes doivent être minces, flexibles et presque translucides. Si une pointe blanche est visible à l'arrière d'une bande, utilisez un couteau pour la racler. Vous êtes seulement après la couche jaune riche en huile.",
      "visualCue": {
        "primaryTarget": "Sous les bandes zestes",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les bandes sont épaisses et raides, avec une pointe blanche visible sur la surface intérieure.",
            "action": "Enlevez la patte blanche avec un couteau. Même une petite quantité de piquant ajoutera de l'amertume perceptible à la liqueur finale."
          },
          {
            "state": "Perfect",
            "description": "Les bandes sont minces, jaune vif et légèrement flexibles. La surface intérieure est propre, blanche à jaune, sans piquant. Lorsqu'ils sont pliés, ils libèrent une brume d'huile aromatique que vous pouvez sentir à partir de 30 cm de distance.",
            "action": "Ajouter immédiatement au pot à alcool."
          },
          {
            "state": "Overdone",
            "description": "Les bandes sont très minces, borderline, et la couche blanche sous la chair est maintenant exposée sur le citron.",
            "action": "Arrêtez de zester ce citron — vous avez atteint la pointe. Passez au suivant."
          }
        ]
      },
      "feelCue": "Pliez une bande de zeste brusquement — vous devriez voir et sentir un vaporisateur minuscule d'huile essentielle libérée des cellules, l'odeur vous frappant comme un éclat de soleil froid."
    },
    {
      "nodeId": "step_2",
      "action": "Infuser",
      "inputs": [
        "lemon_zest",
        "ing_02"
      ],
      "outputState": "lemon_infused_spirit",
      "instructions": "Placez tout le zeste dans un pot en verre propre et scellable. Verser l'alcool de grain sur le zeste — il commencera immédiatement à devenir jaune lorsque les huiles essentielles se dissoudreont dans l'alcool. Sceller étroitement et conserver à température ambiante dans un endroit sombre pendant 20 à 30 jours. Agiter doucement tous les quelques jours. La couleur va s'approfondir de la paille pâle à un jaune vif et électrique au cours des deux premières semaines, puis plateau. Bouche : il doit être fortement citronné, farouchement alcoolique et légèrement sucré.",
      "visualCue": {
        "primaryTarget": "Couleur de l'esprit au jour 7 vs jour 21",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'esprit est jaune pâle au jour 14. L'arôme est présent mais doux. Les bandes de zestes sont encore collantes et jaunes.",
            "action": "Continuez à infuser. L'extraction est incomplète. Le zeste devrait paraître blanchi et passé au jour 20."
          },
          {
            "state": "Perfect",
            "description": "L'esprit est un jaune vif et électrique, presque néon. Les bandes zestes sont pâles, presque blanches, et ont donné toute leur couleur et l'huile à l'alcool. Sensation intense d'huile de citron.",
            "action": "Étendez le zeste à travers un tamis à mailles fines. Jetez le zeste dépensé."
          },
          {
            "state": "Overdone",
            "description": "L'esprit a infusé pendant plus de 60 jours. La couleur peut s'être membrée et une faible amertume s'est développée à partir d'un contact prolongé.",
            "action": "Soulevez immédiatement et continuez. Mélanger avec du sirop simple aidera à équilibrer toute amertume."
          }
        ]
      },
      "feelCue": "Frotter une goutte de l'esprit infusé entre les doigts et l'odeur — il devrait libérer un éclat puissant et propre d'huile de citron avec presque aucune autre note. S'il sent surtout l'alcool avec un soupçon de citron, il faut plus de temps."
    },
    {
      "nodeId": "step_3",
      "action": "Dissoudre",
      "inputs": [
        "ing_03",
        "ing_04"
      ],
      "outputState": "simple_syrup",
      "instructions": "Mélanger le sucre et l'eau dans une casserole à feu moyen. Incorporer constamment jusqu'à ce que le sucre soit complètement dissous — environ 3-5 minutes. Ne la laissez pas bouillir vigoureusement ou le sirop réduira et changera de caractère. Retirer de la chaleur et refroidir complètement à la température ambiante avant de combiner avec l'alcool — ajouter du sirop chaud à l'alcool provoque les aromatiques volatils à éclater.",
      "visualCue": {
        "primaryTarget": "Clarté du sirop dans la casserole",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sirop semble laiteux ou nuageux. Granulés de sucre visibles au fond de la poêle.",
            "action": "Continuer à remuer à feu moyen. La solution doit être complètement limpide avant de sortir de la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Le sirop est complètement clair, avec une viscosité légèrement supérieure à celle de l'eau. Pas de granules visibles lorsque la cuillère est levée.",
            "action": "Retirer du feu et refroidir complètement avant d'ajouter à l'esprit infusé."
          },
          {
            "state": "Overdone",
            "description": "Le sirop a bouilli et réduit. Il est épais et collant — vous avez commencé à faire des bonbons.",
            "action": "Ajouter plus d'eau et remuer à feu doux pour ramener à la bonne consistance."
          }
        ]
      },
      "feelCue": "Plongez un doigt dans le sirop refroidi — il devrait sentir soyeux et légèrement visqueux, laissant un mince film doux qui ne se sent pas collant, juste lisse."
    },
    {
      "nodeId": "step_4",
      "action": "Mixer",
      "inputs": [
        "lemon_infused_spirit",
        "simple_syrup"
      ],
      "outputState": "finished_limoncello",
      "instructions": "Combiner l'esprit infusé et le sirop simple complètement refroidi. Bien mélanger. Le mélange devient légèrement nuageux à mesure que la teneur en eau interagit avec les huiles essentielles — c'est l'effet 'louche', et c'est normal. Bouteille dans des bouteilles en verre propre et conserver au congélateur. Limoncello doit être servi en glaçon, directement du congélateur, dans des verres surgelés. Il ne gelera pas solide en raison de sa teneur en alcool.",
      "visualCue": {
        "primaryTarget": "Couleur et clarté de limoncello combiné",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'alcool et le sirop apparaissent séparés — l'alcool est assis sur le dessus du sirop. Pas encore mélangé.",
            "action": "Remuer plus soigneusement. Les deux se combineront avec un brassage vigoureux."
          },
          {
            "state": "Perfect",
            "description": "Une liqueur dorée-jaune, unifiée, avec un léger nuage des huiles essentielles. Ça sent le citron frais. La couleur doit être opaque-translucide, comme le soleil à travers une fenêtre givrée.",
            "action": "Bouteille immédiatement et congeler au moins 24 heures avant la première prise."
          },
          {
            "state": "Overdone",
            "description": "Limoncello est très doux avec un caractère citronné insuffisant. Trop de sirop a été ajouté.",
            "action": "Ajouter plus de l'esprit infusé en incréments de 50 ml et remuer. Goûtez pour l'équilibre après chaque ajout."
          }
        ]
      },
      "feelCue": "Versez quelques gouttes sur votre poignet à partir de la bouteille congelée — le froid devrait frapper votre peau d'abord, puis un parfum de citron propre et huileux devrait suivre. S'il sent surtout sucré, le taux de sirop est désactivé."
    }
  ]
};
