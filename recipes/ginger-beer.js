export default {
  "repoId": "master_caribbean_ginger_beer_001",
  "parentRepoId": null,
  "slug": "ginger-beer",
  "author": "ForkRecipe Kitchen",
  "title": "Bière de gingembre fermentée jamaïcaine",
  "description": "Fiery, effervescent, et vivant — la vraie bière jamaïcaine au gingembre commence par un gingembre, une entrée sauvage de gingembre râpé et de sucre qui capture la levure ambiante et le lactobacillus. La boisson finie est épicée, sucrée et légèrement gazeuse avec des bulles naturelles.",
  "cuisine": "Caraïbes",
  "culture": "Jamaïquen",
  "category": "beverages",
  "tags": [
    "bière au gingembre",
    "fermenté",
    "Caribbean",
    "probiotique",
    "Foncé",
    "Le gingembre",
    "boisson"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "10 days",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 0,
    "sour": 3,
    "bitter": 1,
    "umami": 0,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Aromatic",
      "name": "Racine de gingembre fraîche, non pelée, râpée",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de canne blanche",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "sucre de canne brut",
        "Sucre de coco"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau filtrée (non chlorée)",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "eau de source"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Jus de citron vert frais",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "jus de citron"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Crème de tartre",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fermenter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "ginger_bug",
      "instructions": "Dans un pot à pinte propre, mélanger 1 c. à soupe de gingembre non pelé râpé, 1 c. à soupe de sucre et 60g d'eau filtrée. Bien mélanger. Chaque jour pendant 5 à 7 jours, nourrir le boyau encore 1 c. à soupe de gingembre râpé et 1 c. à soupe de sucre, en remuant vigoureusement. Conserver à 70–80°F (21–27°C). Le gingembre non pelé apporte de la levure sauvage de sa peau, ne la pele jamais pour le bug. Cela utilise une partie du gingembre total et du sucre; réservez le reste pour le brassage principal.",
      "visualCue": {
        "primaryTarget": "Au jour 3-4 : bulles visibles dans le bocal, morceaux de gingembre suspendus dans un liquide moulu. Le bug s'élève légèrement lorsqu'il est agité.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 5 jours, le liquide est encore clair sans bulles et sans activité. Ça sent seulement le gingembre cru.",
            "action": "Passez à un endroit plus chaud. Vérifiez que l'eau est déchlorée — le chlore tue la levure sauvage. Ajoutez une pincée de sucre et attendez encore 24 heures."
          },
          {
            "state": "Perfect",
            "description": "Bubblez en permanence dans les 10 minutes suivant l'agitation. Ça sent le bronzage, la levure et le gingembre, comme le gingembre avec un peu de funk. Une cuillerée dans l'eau devrait pétrir.",
            "action": "Votre bug est actif. Allez brasser la bière au gingembre."
          },
          {
            "state": "Overdone",
            "description": "Le bug sent l'alcool ou très aiguisé sans caractère gingembre. Floaters ou moule sur le dessus.",
            "action": "Si juste très aigre, utilisez immédiatement. Si vous moulussez, jetez et recommencez — assurez - vous que le pot est propre et que le gingembre est frais."
          }
        ]
      },
      "feelCue": "Déposez une cuillère à café d'insectes dans un verre d'eau pure — si elle brille comme un petit Alka-Seltzer, elle est prête. Si elle coule sans bouillonner, elle a besoin de plus de jours."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_05"
      ],
      "outputState": "ginger_syrup",
      "instructions": "Dans une casserole, faire mijoter 500g d'eau filtrée. Ajouter le reste du gingembre râpé, du sucre et de la crème de tartre. Laisser mijoter doucement pendant 5 minutes, en remuant jusqu'à dissolution du sucre. La crème de tartre ajoute une légère tartre et aide à la carbonation. Retirer du feu et laisser refroidir à la température ambiante — ne jamais ajouter le bug au liquide chaud.",
      "visualCue": {
        "primaryTarget": "Un liquide doré et parfumé avec des morceaux de gingembre suspendus. Sucre complètement dissous — aucun cristal visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "granulés de sucre encore visibles, liquide pas encore chaud.",
            "action": "Continuer à chauffer et à remuer jusqu'à ce que le liquide soit clair et uniforme."
          },
          {
            "state": "Perfect",
            "description": "Liquide doré clair, parfumé à la vapeur de gingembre. Pas de cristaux. Bubbles doucement au bord.",
            "action": "Retirer du feu. Laisser refroidir à température ambiante (inférieure à 80°F) avant de procéder."
          },
          {
            "state": "Overdone",
            "description": "Le liquide a diminué considérablement, devenant épais et sirupeux. Ginger a caramélisé légèrement.",
            "action": "Ajouter de l'eau pour ramener au volume original. Le sirop sera encore fermenté, mais la saveur sera plus concentrée."
          }
        ]
      },
      "feelCue": "Plongez une cuillère propre et goûtez — la chaleur du gingembre cru devrait frapper immédiatement l'arrière de votre gorge. Si elle a seulement un goût sucré, ajoutez plus de gingembre."
    },
    {
      "nodeId": "step_3",
      "action": "Mixer",
      "inputs": [
        "ginger_syrup",
        "ing_03",
        "ing_04",
        "ginger_bug"
      ],
      "outputState": "unbottled_ginger_beer",
      "instructions": "Placer le sirop de gingembre dans un grand pichet propre. Ajouter le reste de 500g d'eau filtrée, de jus de lime et de 60g (environ 4 cuillerées à soupe) de liquide de gingembre. Mélangez doucement. Goûtez et ajustez : devrait être très sucré et épicé maintenant, car la fermentation ajoutera de l'ameresse.",
      "visualCue": {
        "primaryTarget": "Un liquide doré pâle, légèrement agité par le bug. Sensation intense de gingembre frais et de lime.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Goûte seulement d'eau sucrée avec un léger gingembre. Le bug a peut-être été complètement épuisé.",
            "action": "Ajouter plus de liquide de bogue (1-2 c. à thé) et remuer."
          },
          {
            "state": "Perfect",
            "description": "Le gingembre, le citron vert, le gingembre, le gingembre, et presque trop sucré. C'est exact, la fermentation l'équilibrera.",
            "action": "Bouteille immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Goût déjà aigre et fermenté — le bug était très actif et a commencé à travailler pendant le mélange.",
            "action": "Bouteille rapidement et réfrigérer plus rapidement — la fermentation se déplace rapidement."
          }
        ]
      },
      "feelCue": "La brûlure de gingembre devrait durer 10 à 15 secondes après la dégustation. La citron vert fournit une note d'agrumes élevée qui coupe le sucre."
    },
    {
      "nodeId": "step_4",
      "action": "Fermenter",
      "inputs": [
        "unbottled_ginger_beer"
      ],
      "outputState": "carbonated_ginger_beer",
      "instructions": "Verser dans des bouteilles à vis en plastique (les bouteilles PET sont plus sûres — vous pouvez les presser pour mesurer la carbonation) laissant 2 pouces d'espace de tête. Fermez bien. Laisser à température ambiante 24–48 heures. Vérifiez la carbonation en resserrant la bouteille : quand elle se sent dure, transférez immédiatement au réfrigérateur pour arrêter la fermentation. Ouvert sur un évier, il sera effervescent. Bouteilles toutes les 12 heures si vous utilisez du verre pour prévenir l'explosion.",
      "visualCue": {
        "primaryTarget": "La bouteille en plastique devient rigide et inébranlable. Petites bulles visibles montant du bas lorsqu'elles sont maintenues jusqu'à la lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Bouteille encore douce, facilement comprimée. Aucune bulle visible lorsqu'elle est tenue à la lumière. Ça a un goût plat.",
            "action": "Scellez et attendez encore 12 à 24 heures à température ambiante."
          },
          {
            "state": "Perfect",
            "description": "La bouteille est dure comme une pierre — ne compressera pas du tout. Étanchéité de la carbonation sonore lorsqu'elle est légèrement secouée. Goûte de tarte, d'épices et de fizzy.",
            "action": "Déplacez immédiatement toutes les bouteilles au réfrigérateur."
          },
          {
            "state": "Overdone",
            "description": "La bouteille est extrêmement pressurisée, légèrement gonflée. Fort sifflement quand légèrement dévissé.",
            "action": "Ouvrez très lentement sur un évier, libérant la pression en éclats. Réfrigérer immédiatement. Ne jamais laisser les bouteilles de verre sans surveillance si cela arrive."
          }
        ]
      },
      "feelCue": "Pressez la bouteille toutes les 12 heures — elle doit passer du doux (jour 1) à ferme (jour 1.5) à un manque de rendement (prêt). La progression ressemble à un ballon en caoutchouc."
    }
  ]
};
