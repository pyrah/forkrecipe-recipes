export default {
  "repoId": "master_hawaiian_tuna_poke_bowl_001",
  "parentRepoId": null,
  "slug": "tuna-poke-bowl",
  "author": "ForkRecipe Kitchen",
  "title": "Tuna Poke Bowl",
  "description": "Le cadeau d'Hawaii - ahi de qualité sashimi cubed et habillé dans une marinade de sésame-soy qui approfondit sa saveur sans l'effacer, servi sur le riz chaud avec un avocat frais et radis lumineux, un plat qui existe à la limite entre japonais et hawaïen.",
  "cuisine": "Hawaïen",
  "culture": "Hawaïen",
  "category": "seafood",
  "tags": [
    "Coca",
    "thon",
    "ahi",
    "Hawaii",
    "Poisson cru",
    "bol de riz",
    "d'inspiration japonaise"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 2900,
  "forks": 388,
  "contributors": 96,
  "license": "CC-BY-SA",
  "createdAt": "2024-06-01",
  "updatedAt": "2025-05-01",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 2,
    "bitter": 0,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Thon ahi de qualité sashimi (peau enlevée, cube 2cm)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "saumon de qualité sashimi",
        "à queue jaune"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "sauce soja (ou tamari sans gluten)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignons verts (finement tranchés)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "ruches"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Graines de sésame",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Sriracha ou huile de chili (facultatif pour la chaleur)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "sambal oelek"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Starch",
      "name": "Riz japonais à grains courts (cuit, chaud)",
      "ratioValue": 150,
      "defaultUnit": "parts",
      "substitutions": [
        "riz chou-fleur pour faible teneur en glucides"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Structure",
      "name": "Avocat ridiculisé",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Structure",
      "name": "Concombre (finement tranché ou julienned)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "radis de daikon, tranchés finement"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Umami",
      "name": "Nori (coupé, coupé en bandes)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sérum",
      "inputs": [
        "ing_01"
      ],
      "outputState": "cubed_tuna",
      "instructions": "À l'aide d'un couteau extrêmement tranchant, couper le thon ahi contre le grain en cubes uniformes de 2 cm. Utilisez un seul mouvement de coupe — ne voyez pas aller et retour, qui déchire la chair et endommage la texture. Gardez le thon au froid jusqu'au moment du mélange; placez les morceaux cubes sur une plaque au réfrigérateur si vous travaillez avant. L'uniformité de la coupe est importante tant sur le plan esthétique que pour une marination cohérente.",
      "visualCue": {
        "primaryTarget": "Uniforme, cubes rouges profonds avec des bords propres et tranchants. Pas de surfaces déchirées ou déchirées. La chair a un léger reflet naturel.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pièces sont irrégulières, certaines beaucoup plus grandes que d'autres, avec des bords déchirés par le couteau qui traînent.",
            "action": "Utilisez un couteau plus tranchant et un seul mouvement de coupe. Un couteau tranchant est l'outil le plus important pour le poke."
          },
          {
            "state": "Perfect",
            "description": "Des cubes uniformes de 2cm avec des bords propres. Rouge profond avec un brillant naturel. Il fait froid au toucher.",
            "action": "Réfrigérer tout en mélangeant la marinade."
          },
          {
            "state": "Overdone",
            "description": "Les pièces ont été trop manipulées et commencent à montrer une oxydation de surface blanche.",
            "action": "Passer immédiatement à la marinade pour ralentir l'oxydation."
          }
        ]
      },
      "feelCue": "Le thon de qualité sashimi doit être froid, dense et soyeux, et non visqueux ou collant. Un seul cube pressé entre les doigts devrait avoir l'air d'un beurre ferme : frais, lisse et donnant."
    },
    {
      "nodeId": "step_2",
      "action": "Marinaté",
      "inputs": [
        "cubed_tuna",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "seasoned_poke",
      "instructions": "Dans un bol, mélanger la sauce de soja, l'huile de sésame, les oignons verts, les graines de sésame et la sriracha. Goûtez la marinade seule — elle devrait être salée, noisette, et avoir une chaleur de fond agréable. Ajouter les cubes de thon froid et plier doucement avec une spatule en caoutchouc. Ne remuez pas agressivement. Faire mariner 10-15 minutes au réfrigérateur. Ne dépassez pas 20 minutes — le soja commencera à guérir le thon, changeant sa texture de soyeux à plus ferme et assombrir la couleur.",
      "visualCue": {
        "primaryTarget": "Les cubes de thon sont uniformément recouverts d'une marinade brun foncé brillante. Chaque cube scintille avec de l'huile de sésame. L'oignon vert est distribué partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Marinade a mis en commun au fond du bol. Les cubes de thon ne sont que partiellement recouverts.",
            "action": "Plier plus doucement mais soigneusement pour distribuer la marinade."
          },
          {
            "state": "Perfect",
            "description": "Chaque cube enrobé, oignon vert distribué, graines de sésame visibles sur les surfaces. Encore rouge vif à l'intérieur où le soja n'a pas pénétré.",
            "action": "Réfrigérer pendant 10 minutes puis assembler."
          },
          {
            "state": "Overdone",
            "description": "Le thon marine depuis trop longtemps. L'extérieur est brun-gris foncé et s'est fortement raffermi par le remède au sel.",
            "action": "Rassemblez-vous immédiatement. Le poke surmarin est moins texturalement idéal mais sûr et toujours savoureux."
          }
        ]
      },
      "feelCue": "Lorsque vous pliez le thon avec la marinade, le bol doit sentir instantanément du sésame grillé et du soja — riche, salé et légèrement sucré, avec l'océan encore en dessous."
    },
    {
      "nodeId": "step_3",
      "action": "Assemblage",
      "inputs": [
        "ing_07",
        "seasoned_poke",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_poke_bowl",
      "instructions": "Diviser le riz chaud entre les bols et l'emballer dans un monticule lisse d'un côté. Faites revenir le thon mariné sur la moitié du riz. Les tranches d'avocat de ventilateur sur le côté opposé. Placez le concombre à côté. Drapez quelques bandes de nori sur le thon. Arroser toute marinade restante du bol sur tout. Le contraste de température du riz chaud et du thon froid est une partie essentielle du plat: le riz réchauffe le thon d'en bas quand vous mangez.",
      "visualCue": {
        "primaryTarget": "Un bol composé avec séparation visuelle entre les composants : thon rouge profond, avocat vert pâle, riz blanc, nori foncé et oignon vert vif visible partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tout jeté dans le bol et mélangé ensemble. Les couleurs sont boueuses et la séparation visuelle est perdue.",
            "action": "Prenez le temps de composer le bol. L'arrangement fait partie de l'expérience."
          },
          {
            "state": "Perfect",
            "description": "Sections claires, couleurs contrastantes vives. La vapeur chaude s'élève du riz. Le thon est froid et scintillant.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Bowl était assemblé trop tôt et assis. L'avocat a bruni, le thon a continué à se mouiller et le riz a séché.",
            "action": "Assemblez seulement au moment de servir. Les bols de poke n'attendent pas."
          }
        ]
      },
      "feelCue": "La première bouchée d'un bol de poke — quand le riz chaud rencontre le thon froid et soyeux et l'umami des coups de marinade — devrait ressembler à une révélation de température et de texture."
    }
  ]
};
