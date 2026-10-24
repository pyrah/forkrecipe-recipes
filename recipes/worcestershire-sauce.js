export default {
  "repoId": "master_british_worcestershire_sauce_001",
  "parentRepoId": null,
  "slug": "worcestershire-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce Worcestershire",
  "description": "La bombe umami victorienne — tamarin, anchois, oignons, mélasses, et une douzaine d'épices fermentées ensemble pendant des semaines dans un condiment sombre, complexe et profondément salé qui défie toute catégorie de saveur.",
  "cuisine": "Anglais",
  "culture": "Colombie-Britannique",
  "category": "condiments",
  "tags": [
    "britanniques",
    "fermenté",
    "condiment",
    "umami",
    "anchois",
    "Tamarin"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "2 weeks",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Acid",
      "name": "vinaigre de malt",
      "ratioValue": 240,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de cidre de pomme",
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Molasses ou sucre brun foncé",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "mélasse noire (plus amère)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari (sans gluten)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Pâte de tamarin (bloc sans graines, humidifiée)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "pâte de tamarin concentré (2 c. à soupe)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Filets d'anchois dans l'huile",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "sauce de poisson (2 c. à soupe)",
        "blanc miso (vegan)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Oignon blanc, finement coupé en dés",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Échalotes"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Girofles d'ail brisées",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Gingembre frais, tranché approximativement",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "1/2 c. à thé de gingembre moulu"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Maïs de poivre noir",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Vêtements",
      "ratioValue": 4,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Spice",
      "name": "Bâton de cannelle",
      "ratioValue": 1,
      "defaultUnit": "stick",
      "substitutions": [
        "1/4 c. à thé cannelle au sol"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Spice",
      "name": "Gousses de cardamome vert, meurtris",
      "ratioValue": 4,
      "defaultUnit": "pods",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Spice",
      "name": "Graines de coriandre légèrement broyées",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_15",
      "role": "Heat",
      "name": "Poivre de Cayenne",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "flocons de chiles rouges séchés"
      ]
    },
    {
      "ingId": "ing_16",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13",
        "ing_14",
        "ing_15",
        "ing_16"
      ],
      "outputState": "combined_sauce",
      "instructions": "Mélanger tous les ingrédients dans une casserole moyennement non réactive (acier inoxydable ou émail — pas aluminium). Porter à ébullition à feu moyen-élevé, en remuant pour dissoudre la mélasse et briser les filets d'anchois. Une fois bouillante, réduisez la chaleur à une mijotée nue — juste quelques bulles paresseuses qui brisent la surface. Laisser mijoter à découvert pendant 20 minutes, en remuant de temps en temps, jusqu'à ce que la sauce ait diminué d'environ 15 % et sente profondément salée et épicée.",
      "visualCue": {
        "primaryTarget": "Liquide brun acajou foncé à mijoter régulièrement et doucement. Les filets d'anchois se sont complètement dissous dans le bouillon. La surface présente une faible iridescence huileuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les filets d'anchois sont encore visibles comme des morceaux reconnaissables. La molasse n'a pas été complètement dissoute: des stries sombres traversent le liquide.",
            "action": "Augmenter légèrement la chaleur et remuer vigoureusement pour aider les anchois à fondre."
          },
          {
            "state": "Perfect",
            "description": "Liquide lisse et profondément sombre avec une vapeur chaude et épicée qui s'en relève. Tous les solides autres que les épices entières se sont dissous. L'odeur est complexe: vive, douce, salée.",
            "action": "Retirer du feu et laisser refroidir à la température ambiante avant de passer à un récipient de fermentation."
          },
          {
            "state": "Overdone",
            "description": "Réduction de plus de 25%. La sauce est visqueuse et le sucre a commencé à se concentrer vers un caramel. L'arôme d'épice est très vif.",
            "action": "Ajouter 60 ml d'eau et bien remuer – la fermentation la concentrera de toute façon, donc commencer trop épais finira par une pâte."
          }
        ]
      },
      "feelCue": "Tenez-vous au-dessus de la casserole et inhalez la vapeur à longueur de bras — vous devriez pouvoir sentir le tamarin, la cannelle, l'anchois et le vinaigre dans des couches distinctes, chacun arrivant à un moment différent sur le souffle."
    },
    {
      "nodeId": "step_2",
      "action": "Refroidir",
      "inputs": [
        "combined_sauce"
      ],
      "outputState": "cooled_sauce",
      "instructions": "Retirer la casserole du feu et laisser refroidir complètement à température ambiante — au moins 60 minutes. Ne précipitez pas cela avec un bain de glace; un changement de température rapide peut entraîner des volatiles aromatiques. Pendant le refroidissement, la sauce s'épaissira légèrement à mesure qu'elle approche de la température ambiante et toute graisse des anchois peut former une peau mince à la surface.",
      "visualCue": {
        "primaryTarget": "La sauce a cessé la vapeur et est à température ambiante. La couleur est une acajou très profonde, presque opaque. La surface est calme et légèrement brillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore chaude au toucher. La vapeur s'élève de la surface.",
            "action": "Attendre — transférer une sauce chaude dans un pot de verre peut la fissurer, et la chaleur accélère la fermentation indésirable de la mauvaise manière pendant les 24 premières heures."
          },
          {
            "state": "Perfect",
            "description": "Température ambiante. Un film mince et huileux peut flotter à la surface de la graisse d'anchois — c'est normal et souhaitable.",
            "action": "Transférer dans un pot en verre pour fermentation."
          },
          {
            "state": "Overdone",
            "description": "Laissé à découvert toute la nuit pendant le refroidissement — la surface a séché dans une peau sombre et papier.",
            "action": "Écraser et jeter la peau séchée, puis procéder. Couvrir la casserole à l'avenir pendant le refroidissement."
          }
        ]
      },
      "feelCue": "Touchez l'extérieur du pot — il devrait sentir exactement comme la température ambiante de l'air autour, pas chaud, pas frais. En cas de doute, attendez encore 20 minutes."
    },
    {
      "nodeId": "step_3",
      "action": "Fermenter",
      "inputs": [
        "cooled_sauce"
      ],
      "outputState": "fermented_sauce",
      "instructions": "Transférer la sauce refroidie avec toutes ses épices et ses solides dans un pot en verre propre à large bouche. Couvrir d'un morceau de cheesewet fixé avec une bande de caoutchouc — vous voulez la circulation de l'air, pas un couvercle scellé, pendant la fermentation. Conserver à température ambiante froide (18-22°C), à l'abri du soleil direct. Incorporer une fois par jour avec une cuillère propre. Ferment pour un minimum de 1 semaine, idéalement 2 semaines — les saveurs vont tricoter ensemble et se mouiller considérablement. La sauce sentira progressivement moins vif et plus complexe.",
      "visualCue": {
        "primaryTarget": "Après 7 jours, la sauce s'assombrit davantage. Après 14 jours, la surface se développe un reflet mince et sain et l'arôme se déplace de vif-vinégaire à profondément salé avec un sous-ton presque charnu.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "En moins de 5 jours, la sauce sent encore surtout du vinaigre de malt aux bords d'épices vives. Le tamarin et l'anchois ne sont pas intégrés.",
            "action": "Continuez à fermenter — la patience est le seul outil ici. Goûtez tous les jours : vous remarquerez le changement autour du jour 7-8."
          },
          {
            "state": "Perfect",
            "description": "À 14 jours, la sauce sent complexe et unifiée : savore, légèrement sucrée, légèrement funky, profondément umami. Aucune note ne domine. Le vinaigre est devenu l'architecture de fond, pas une odeur de premier plan.",
            "action": "Plongez dans un bon tamis."
          },
          {
            "state": "Overdone",
            "description": "Après plus de 3 semaines à température ambiante, la sauce peut développer une odeur de désodorisation, trop funky ou légèrement moisie, indiquant une surfermentation.",
            "action": "Si l'odeur est forte mais pas sale, réfrigérer et utiliser dans les 2 mois. Si ça sent vraiment désagréable, jetez."
          }
        ]
      },
      "feelCue": "Le jour 10, trempez une cuillère et goûtez à la température ambiante — si le dos de votre palais enregistre une sensation chaude, ronde, profondément savore qui se développe lentement plutôt qu'une piqûre de vinaigre pointu, la fermentation fonctionne correctement."
    },
    {
      "nodeId": "step_4",
      "action": "Filtrer",
      "inputs": [
        "fermented_sauce"
      ],
      "outputState": "strained_sauce",
      "instructions": "Déposer un tamis à mailles fines avec une double couche de linge de fromage humide et le placer sur un bol profond. Verser la sauce fermentée par lots, en appuyant fermement sur les solides avec le dos d'une louche pour extraire chaque goutte de liquide. Jetez les solides usés. La sauce tendue doit être lisse, complètement exempte de particules et profondément sombre. Le rendement est d'environ 200-220ml de cette recette.",
      "visualCue": {
        "primaryTarget": "Liquide d'acajou clair et foncé qui coule dans la nappe de fromage. Pas de nuages, pas de particules visibles lorsqu'elles sont maintenues à la lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le fromage n'est pas pressé — le liquide coule lentement et le rendement est faible. Les solides tiennent encore beaucoup de liquide.",
            "action": "Appuyez fermement et à plusieurs reprises avec la louche — il y a une saveur importante dans les solides qui doit être coupée."
          },
          {
            "state": "Perfect",
            "description": "Le liquide entraîné est brun-ambre profond et parfaitement clair. Les solides dans le tamis sont secs et dépensés. Le bol contient une sauce concentrée et brillante.",
            "action": "Bouteille dans un flacon en verre stérilisé et réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "Pressé si fort que les solides ont brisé la nappe de fromage — la sauce a de petites particules ou un aspect légèrement trouble.",
            "action": "Reformer à travers une double couche fraîche de cheesewapp. La sauce nuageuse est cosmétiquement imparfaite mais culinairement fine."
          }
        ]
      },
      "feelCue": "Frottez une goutte de sauce tendue entre vos doigts — elle doit se sentir légèrement sirupeuse et laisser une tache pâle et sombre sur le bout des doigts qui sent le tamarin et l'anchois même après un rinçage rapide."
    },
    {
      "nodeId": "step_5",
      "action": "Faire réduire",
      "inputs": [
        "strained_sauce"
      ],
      "outputState": "finished_worcestershire",
      "instructions": "Verser la sauce tendue dans une petite casserole et laisser mijoter très doucement. Réduire de 20 à 25 % pour concentrer les saveurs et obtenir la consistance caractéristique Worcester — assez mince pour secouer d'une bouteille, assez épaisse pour s'accrocher brièvement à une cuillère. Cette étape est facultative mais fortement recommandée : elle élimine la rouille résiduelle de la fermentation et définit la saveur finale. Refroidir complètement avant l'embouteillage. Réfrigéré, conserve pendant 6 mois.",
      "visualCue": {
        "primaryTarget": "Une sauce mince, foncée, versable – moins visqueuse que la sauce soja, plus concentrée que le vinaigre. Laisse un sentier sombre sur une plaque blanche qui s'estompe des bords vers l'intérieur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore assez fine et la saveur a un bord de ferment légèrement brut qui ne sera pas familier avec le Worcester commercial.",
            "action": "Laisser mijoter encore 5 minutes — l'étape de réduction fait une différence de saveur significative."
          },
          {
            "state": "Perfect",
            "description": "La sauce couvre une cuillère finement et coule dans un ruisseau propre et intact. L'arôme est profondément complexe, le réchauffement, et tout à fait différent de tout ingrédient qui est entré.",
            "action": "Refroidir complètement, en bouteille dans une bouteille de verre stérilisée, et réfrigérer jusqu'à 6 mois."
          },
          {
            "state": "Overdone",
            "description": "Réduction de plus de 35 % — la sauce est maintenant très épaisse et le sucre a commencé à caraméliser, lui donnant une douceur de type treacle qui surpasse les notes salées.",
            "action": "Arroser d'une cuillère à soupe de vinaigre de malt et d'eau, bien remuer et arrêter immédiatement la réduction."
          }
        ]
      },
      "feelCue": "Agiter la sauce refroidie dans un flacon à demi-rempli, en cascade et se réinstaller en moins de 3 secondes. S'il coule comme du ketchup, il est surréduit; s'il coule comme de l'eau sans s'accrocher, mijoter un peu plus."
    }
  ]
};
