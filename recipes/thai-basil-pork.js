export default {
  "repoId": "master_thai_thai_basil_pork_001",
  "parentRepoId": null,
  "slug": "thai-basil-pork",
  "author": "ForkRecipe Kitchen",
  "title": "Pad Kra Pao",
  "description": "Porc haché sauté sur une chaleur violente avec des chilis oculaires d'oiseau et basilic saint thaïlandais jusqu'à ce que la viande caramélise aux bords et le plat entier fleurit avec un parfum poivré, semblable à une girofle que le basilic saint seul produit — un aliment de rue de Bangkok qui prend 8 minutes, demande une chaleur féroce, et récompense avec une intensité que les versions de restaurant formelles correspondent rarement.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "proteins",
  "tags": [
    "Pad-kra-pao",
    "Thaï",
    "basilic",
    "porc",
    "sauté",
    "épicé"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Porc haché (ou porc haché grossièrement à la main)",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "poulet haché",
        "boeuf haché",
        "tofu émietté"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Piments oculaires d'oiseau, tranchés finement",
      "ratioValue": 5,
      "defaultUnit": "whole",
      "substitutions": [
        "Sérano chilies (milder)",
        "piments thaïlandais séchés"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail, approximativement hachées",
      "ratioValue": 5,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "sauce à l'huître",
      "ratioValue": 1.5,
      "defaultUnit": "tbsp",
      "substitutions": [
        "sauce aux huîtres aux champignons (vegan)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sauce de poisson",
      "ratioValue": 1.5,
      "defaultUnit": "tbsp",
      "substitutions": [
        "sauce soja + pincée sel"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "sauce soja (fine, pas foncée)",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "sauce soja légère"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Sweetener",
      "name": "Sucre aromatisé à l'huître (ou sucre de palme)",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "sucre blanc"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Basilic saint thaïlandais (kra pao), feuilles seulement",
      "ratioValue": 1,
      "defaultUnit": "cup (loosely packed)",
      "substitutions": [
        "Basilic italien (le goût diffère significativement)"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Eau ou bouillon de poulet",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Oeufs frits (kai dao), un par portion",
      "ratioValue": 2,
      "defaultUnit": "eggs",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "sauce_mix",
      "instructions": "Mélanger la sauce aux huîtres, la sauce au poisson, la sauce au soja et le sucre dans un petit bol. Incorporer jusqu'à dissolution du sucre. Goûtez et ajustez : il doit être intensément salé, salé, légèrement sucré et sentir fortement les fruits de mer fermentés et le caramel. Mets-toi à côté du poêle. En pad kra pao, il n'y a pas de temps pour mesurer une fois le wok chaud — tout doit être prêt avant de commencer.",
      "visualCue": {
        "primaryTarget": "Une sauce brune foncée et uniforme avec du sucre dissous et aucune séparation entre les différentes sauces.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des cristaux de sucre encore visibles. sauce de poisson et sauce à l'huître non encore combinée.",
            "action": "Mélanger jusqu'à ce qu'il soit complètement homogène."
          },
          {
            "state": "Perfect",
            "description": "Doux, foncé, sauce unifiée. Ça sent la mer et le caramel. Prêt à la portée du wok.",
            "action": "Préparez le wok."
          },
          {
            "state": "Overdone",
            "description": "Pas un tel état. Continuez.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "Plongez un doigt et goûtez - la sauce doit piquer la langue avec du sel et laisser un arrière - goût doux et umami."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "ing_04",
        "ing_02",
        "ing_03"
      ],
      "outputState": "aromatic_base",
      "instructions": "Chauffer un wok ou une grande poêle en fonte sur la chaleur la plus élevée possible jusqu'à ce qu'elle commence à fumer. Ajouter l'huile et chauffer pendant 15 secondes. Ajouter les piments et l'ail simultanément. Stir-fry, garder tout en mouvement, pendant 30-45 secondes. L'ail doit être parfumé et juste commencer à colorier aux bords — pas brûlé. Les piments libèrent une vapeur intense de capsaïcine; assurent la ventilation. Cette étape est rapide et violente.",
      "visualCue": {
        "primaryTarget": "Ail avec des bords dorés et tournants entourés de morceaux de chili vert foncé, dans une brume de fumée parfumée et épicée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est toujours blanc cru. Pas de couleur. Pas de fleur de parfum. Le wok peut ne pas être assez chaud.",
            "action": "Augmenter la chaleur au maximum et remuer constamment — la saveur d'ail brut dominera le plat final."
          },
          {
            "state": "Perfect",
            "description": "Les bords d'ail sont en or. Les piments sont légèrement adoucis. Le wok fume et sent l'ail chaud et la capsaïcine.",
            "action": "Ajouter le porc immédiatement — ne laissez pas passer l'ail au brun."
          },
          {
            "state": "Overdone",
            "description": "L'ail est brun foncé et commence à sentir amer.",
            "action": "Jeter et recommencer avec de l'huile fraîche, de l'ail et des piments — l'ail brûlé ne peut être corrigé dans un plat aussi simple."
          }
        ]
      },
      "feelCue": "Vous sentirez la chaleur de la capsaïcine dans vos yeux et votre gorge — c'est l'indication que les chilies fonctionnent. Si vous ne sentez rien, le wok n'est pas assez chaud."
    },
    {
      "nodeId": "step_3",
      "action": "Sear",
      "inputs": [
        "aromatic_base",
        "ing_01",
        "sauce_mix",
        "ing_10"
      ],
      "outputState": "cooked_pork",
      "instructions": "Ajouter le porc haché au wok en un seul ajout. Pressez-le à plat contre la surface chaude et laissez-le saisir sans remuer pendant 30-45 secondes jusqu'à ce que le côté contact devienne gris-caramélisé. Puis le casser et remuer vigoureusement pendant 2-3 minutes, presser et casser les amas. Verser la sauce prémélangée et l'eau. Continuer à remuer sur une chaleur maximale pendant une minute jusqu'à ce que la sauce ait réduit et enrobé chaque morceau de viande dans un glaçage collant et foncé. La poêle devrait sonner comme si elle tournait furieusement, et non pas à la vapeur.",
      "visualCue": {
        "primaryTarget": "De petits morceaux irréguliers de porc enrobés d'une sauce sombre, brillante et réduite aux bords caramélisés — pas de viande grise et à la vapeur visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le porc est encore gris pâle et cuit à la vapeur plutôt que de grincer. La sauce n'a pas diminué. Trop de liquide dans la poêle.",
            "action": "Augmentez la chaleur de façon agressive. Arrête d'ajouter de l'eau. Continuez de remuer et de jeter jusqu'à ce que le vertige revienne."
          },
          {
            "state": "Perfect",
            "description": "Chaque morceau de porc est foncé, brillant et caramélisé aux bords. La sauce est réduite à un manteau collant. Pan étourdit fort. La cuisine est parfumée de soja caramélisé et de chili.",
            "action": "Tuez la chaleur. Ajouter immédiatement le basilic."
          },
          {
            "state": "Overdone",
            "description": "Le porc est sec et la sauce a brûlé à un résidu amer sur le fond de la poêle.",
            "action": "Déglacer immédiatement avec un jet d'eau, remuer rapidement et retirer de la chaleur."
          }
        ]
      },
      "feelCue": "Écoutez le wok — le pad kra pao est prêt quand il ressemble à un feu rugissant, pas à un pot bouillant."
    },
    {
      "nodeId": "step_4",
      "action": "Finition",
      "inputs": [
        "cooked_pork",
        "ing_09",
        "ing_11"
      ],
      "outputState": "finished_thai_basil_pork",
      "instructions": "Retirer le wok du feu. Ajouter toutes les feuilles saintes de basilic à la fois et jeter rapidement — la chaleur résiduelle va flétrir le basilic en 15-20 secondes. Saint basilic libère son meilleur arôme quand il touche la chaleur mais n'est pas trop cuit: les feuilles doivent être flétries mais toujours intensément parfumées et pas uniformément noires. Servir immédiatement sur le riz jasmin, garni d'un oeuf frit cuit dans une huile très chaude jusqu'à ce que les bords soient croustillants et lacés.",
      "visualCue": {
        "primaryTarget": "Porc foncé et sauce brillante aux feuilles de basilic flétries mais encore vertes éparpillées, surmontées d'un œuf frit à bord croustillant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les feuilles de basilic sont encore complètement crues et raides. Le plat sent l'herbe crue plutôt que la chaleur poivrée du basilic cuit.",
            "action": "Retourner à feu doux pendant 10 secondes avec un lancer constant."
          },
          {
            "state": "Perfect",
            "description": "Les feuilles de basilic se sont flétries à un vert profond et brillant avec le parfum de girofle-poivre de kra pao libéré dans le plat. Quelques bords croustillants sont acceptables et souhaitables.",
            "action": "Tout de suite. Le parfum de basilic disparaît en quelques minutes."
          },
          {
            "state": "Overdone",
            "description": "Le basilic est devenu noir et a perdu tout parfum. C'est amer.",
            "action": "Rien ne peut récupérer le basilic brûlé dans le plat. Garnir de quelques feuilles fraîches crues pour restaurer un peu de parfum."
          }
        ]
      },
      "feelCue": "Le plat fini devrait attaquer votre nez avec une intensité épicée, sucrée, semblable à une girofle au moment où vous soulevez le couvercle — le parfum du basilic saint est l'âme du plat et il doit être évident."
    }
  ]
};
