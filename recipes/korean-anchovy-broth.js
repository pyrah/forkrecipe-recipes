export default {
  "repoId": "master_korean_koreananchovybroth_001",
  "parentRepoId": null,
  "slug": "korean-anchovy-broth",
  "author": "ForkRecipe Kitchen",
  "title": "Broth d'anchois coréen (Myeolchi Yuksu)",
  "description": "L'épine dorsale sous-estimée de la cuisine maison coréenne — les anchois séchés et le varech trempés dans l'eau froide et porté à un bref ébullition, donnant un bouillon propre, légèrement salé, profondément salé qui soutient tout de doenjang jjigae à teokbokki sans jamais exiger les projecteurs.",
  "cuisine": "Coréen",
  "culture": "Coréen",
  "category": "stocks",
  "tags": [
    "stock",
    "Sans gluten",
    "anchois",
    "coréen",
    "umami",
    "bouillon"
  ],
  "difficulty": 1,
  "activeTime": "5 min",
  "totalTime": "25 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Inosinate",
      "name": "Grandes anchois séchés (myeolchi), têtes et intestins enlevés",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "sardines séchées (arôme plus fort)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Glutamate",
      "name": "Calpe séchée (dashima/kombu)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau froide",
      "ratioValue": 1200,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Champignons à shiitake séchés (facultatif)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon vert (partie blanche, option)",
      "ratioValue": 1,
      "defaultUnit": "stalk",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire griller",
      "inputs": [
        "ing_01"
      ],
      "outputState": "toasted_anchovies",
      "instructions": "Retirer les têtes et les voies intestinales des anchois séchés — la tête ajoute de l'amertume et l'intestin ajoute de la pêche. Divisez chaque anchois dans le sens de la longueur et retirez le brin intestinal foncé. Dans une poêle sèche à feu moyen, faire griller les anchois nettoyés 2 à 3 minutes jusqu'à ce qu'ils soient parfumés et légèrement plus dorés. Cette étape élimine un peu de pêche et approfondit la saveur. Les anchois sont prêts lorsqu'ils sentent la noisette et le savoureux plutôt que très poissonneux.",
      "visualCue": {
        "primaryTarget": "Les anchois sont légèrement dorés et parfumés — une odeur de fruits de mer doux, salés et légèrement torréfiés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours gris argenté et sentant très poissonneux. Pas de changement de couleur.",
            "action": "Continuez à griller. Le pain transforme l'arôme de poisson cru en un arôme propre et salé."
          },
          {
            "state": "Perfect",
            "description": "Légèrement doré, parfumé avec un arôme de poisson propre et rôti. Pas brun — juste une nuance plus chaude qu'auparavant.",
            "action": "Ajouter à l'eau froide avec le varech. N'attendez pas — la chaleur résiduelle continue la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé ou carbonisé. Une odeur acride.",
            "action": "Les anchois brûlés font du bouillon amer. L'étape est rapide; restez attentif."
          }
        ]
      },
      "feelCue": "Un anchois bien grillé se sent sec et légèrement cassant, cassant proprement quand il est plié plutôt que fléchissant. L'arôme est propre et salé, comme l'océan avec une légère noisette."
    },
    {
      "nodeId": "step_2",
      "action": "Infuser",
      "inputs": [
        "toasted_anchovies",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "simmering_anchovy_broth",
      "instructions": "Dans une casserole moyenne, déposer les anchois grillés et le varech (dashima) dans de l'eau froide. En cas d'utilisation, ajouter les champignons shiitake séchés et la partie blanche d'un oignon vert pour une profondeur supplémentaire. Porter à ébullition à feu moyen, ce qui prend environ 10 à 12 minutes. Enlevez la varech dès que l'eau arrive à ébullition — la varech qui mijote après ce point libère des composés amers. Une fois bouillant, réduire le feu et laisser mijoter les anchois pendant 10 minutes de plus. Ne pas faire bouillir agressivement.",
      "visualCue": {
        "primaryTarget": "Un bouillon d'ambre doré avec un arôme propre et salé, rappelant la mer, mais pas très poissonneux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pale, aqueuse et à peine aromatisée après seulement 5 minutes.",
            "action": "Laisser mijoter 10 minutes après avoir retiré le varech. L'inosinate d'anchois prend du temps pour se dissoudre."
          },
          {
            "state": "Perfect",
            "description": "Couleur dorée à jaune-auto clair, propre et clair. Ça sent le savore et l'océanique sans être piquant. Une cuillerée goûte équilibré — umami vers l'avant sans aucune note dure.",
            "action": "Soucher et utiliser immédiatement ou refroidir et réfrigérer jusqu'à 3 jours."
          },
          {
            "state": "Overdone",
            "description": "Ambre foncée, trouble, fortement poissonneuse et amère. Kelp a été laissé trop longtemps ou anchois mijoté pendant 20 minutes.",
            "action": "Diluer à l'eau douce. L'amertume peut se faner partiellement — utiliser dans les plats avec des saveurs fortes comme le doenjang."
          }
        ]
      },
      "feelCue": "Le bouillon mijotant doit sentir propre et accueillant, comme se tenir près d'une brise d'air salée plutôt qu'un marché de poisson. Si l'odeur vous fait froncer, le varech doit sortir immédiatement."
    },
    {
      "nodeId": "step_3",
      "action": "Filtrer",
      "inputs": [
        "simmering_anchovy_broth"
      ],
      "outputState": "finished_anchovy_broth",
      "instructions": "Retirez le varech (déjà fait), puis versez le bouillon à l'aide d'une passoire fine. Appuyez doucement sur les anchois pour extraire le dernier de leur liquide — c'est différent de dashi, où les flocons de bonito ne doivent pas être pressés. Le bouillon d'anchois est moins délicat et bénéficie du pressurage. Le bouillon tendu est prêt à servir de base pour le tteokbokki (gâteaux de riz épicé), le doenjang jjigae (pâte de soja fermentée) ou le kongnamul (soupe de choux de haricots). Assaisonner de sel seulement dans le plat final.",
      "visualCue": {
        "primaryTarget": "Un bouillon clair, doré-ambre — légèrement plus foncé que le dashi japonais, avec une odeur salée propre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Très pâle, aqueuse, mince.",
            "action": "Laisser mijoter 5 minutes de plus avant la pression. Ou ajoutez plus d'anchois et laissez mijoter."
          },
          {
            "state": "Perfect",
            "description": "Ambre doré, clair et parfumé. Une cuillerée goûte savoureux avec une finition propre et pas de pêche persistante.",
            "action": "Utiliser immédiatement ou refroidir rapidement et réfrigérer. Conserve 3 jours réfrigérés, 1 mois congelés."
          },
          {
            "state": "Overdone",
            "description": "Très sombre, opaque, fortement amer de poissons.",
            "action": "Diluer 1:1 à l'eau douce. Assaisonner plus soigneusement dans le plat final."
          }
        ]
      },
      "feelCue": "Myeolchi yuksu est plus léger et moins enrobé que le bouillon osseux — sur la langue, il se sent plus proche de l'eau assaisonnée que de la gélatine, mais avec une profondeur savoureuse que l'eau pure n'a jamais."
    }
  ]
};
