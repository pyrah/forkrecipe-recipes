export default {
  "repoId": "master_american_buffalo_sauce_001",
  "parentRepoId": null,
  "slug": "buffalo-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce chaude Buffalo",
  "description": "L'Anchor Bar originale déconstruite — RedHot de Frank et beurre froid, monté ensemble à feu doux dans une émulsion cayenne-orange brillante qui enveloppe les ailes avec des parties égales piquantes, richesse et vinaigre tang.",
  "cuisine": "Américain",
  "culture": "Buffalo, New York",
  "category": "sauces",
  "tags": [
    "Buffle",
    "Sucre chaude",
    "ailes",
    "beurre",
    "épicé",
    "américains"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 3,
    "bitter": 1,
    "umami": 1,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Acid",
      "name": "Sauce au poivre de Cayenne originale de Frank RedHot",
      "ratioValue": 0.5,
      "defaultUnit": "cup",
      "substitutions": [
        "Sauce chaude en cristal",
        "Texas Pete (un peu plus doux)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé, froid, coupé en cubes de 1/2 pouce",
      "ratioValue": 4,
      "defaultUnit": "tbsp",
      "substitutions": [
        "beurre végétalien (Earth Balance fonctionne bien)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Poudre d'ail",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "1 gousse d'ail frais, pressée"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "vinaigre blanc distillé"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "sauce Worcestershire",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_01",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "warmed_hot_sauce",
      "instructions": "Mélanger le RedHot de Frank, la poudre d'ail, le sel, le vinaigre de vin blanc et la sauce Worcestershire dans une petite casserole. Mettre à feu moyen-doux et chauffer doucement, en remuant une ou deux fois, jusqu'à ce que la sauce soit juste à la vapeur – environ 3-4 minutes. Vous ne le faites pas cuire, il suffit de le réchauffer à la température précise où le beurre émulsifiera en douceur. La température cible est de 130–140°F (54–60°C): assez chaud pour fondre le beurre froid rapidement, mais pas si chaud qu'il dégage la graisse du beurre avant qu'il ne puisse émulsifier. Un thermomètre de cuisine est utile ici, mais vous pouvez juger par la vapeur: doux wisps montant de la surface, pas de bulles. Ne la laissez pas bouillir — l'ébullition entraîne les acides volatils qui donnent à Frank son tang caractéristique.",
      "visualCue": {
        "primaryTarget": "La sauce chaude est légèrement vapeur et sa couleur est passée d'un rouge orange vif à un orange brique légèrement plus profond, plus translucide qu'il chauffe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est à peine chaude, pas de vapeur. Toujours l'orange froide. Le beurre fondra très lentement et peut ne pas émulsifier.",
            "action": "Augmenter légèrement la chaleur et continuer le réchauffement. Visez des spores de vapeur, pas des bulles."
          },
          {
            "state": "Perfect",
            "description": "Une vapeur douce et régulière qui monte de la surface. Pas de bulles. La sauce sent chaud et vinaigre. 130–140°F.",
            "action": "Retirer du feu et commencer immédiatement à monter avec du beurre froid."
          },
          {
            "state": "Overdone",
            "description": "La sauce est à mijoter, bouillonnant autour des bords. Le volume a légèrement diminué.",
            "action": "Retirer immédiatement du feu et laisser refroidir 90 secondes avant de monter le beurre – une sauce trop chaude brisera l'émulsion."
          }
        ]
      },
      "feelCue": "Tenez votre paume à 4 pouces au-dessus de la casserole — vous devriez sentir une chaleur distincte et constante, comme une fenêtre ensoleillée. Si vous ressentez une chaleur intense ou si vous voyez la vapeur s'agglutiner rapidement, la sauce est trop chaude. Retirez-le de la chaleur."
    },
    {
      "nodeId": "step_2",
      "action": "Monter au beurre",
      "inputs": [
        "warmed_hot_sauce",
        "ing_02"
      ],
      "outputState": "finished_buffalo_sauce",
      "instructions": "Retirer la casserole du feu — la chaleur résiduelle de la casserole est tout ce dont vous avez besoin. Travailler rapidement avec un fouet, ajouter les cubes de beurre froid un ou deux à la fois, fouettant constamment et vigoureusement en petits cercles serrés. Chaque cube doit fondre et être incorporé avant l'entrée suivante. La technique est appelée «montage au beurre» (monter au beurre): les morceaux de beurre froid maintiennent une structure cristalline suffisamment grasse pour créer une émulsion stable avec la sauce chaude à base d'eau. Au fur et à mesure que vous ajoutez chaque cube, la sauce se transformera : elle va de mince et aqueuse à soyeuse et enduite, et sa couleur s'approfondit de rouge-orange vif à une terre cuite riche et brillante. Si à tout moment la sauce a l'air grasse ou si le beurre est mis en commun dans des flaques oranges plutôt que d'intégrer, la sauce est trop chaude — ajouter un autre cube de beurre froid et fouetter le feu jusqu'à ce qu'il revienne ensemble. La sauce finie doit être lisse, brillante et enrober complètement une cuillère.",
      "visualCue": {
        "primaryTarget": "Sauce en terre cuite opaque. Assez épais pour envelopper l'arrière d'une cuillère. Pas de piscines de beurre ou de graisse visible à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore fine et aqueuse. Un ou deux cubes de beurre seulement sont ajoutés. On dirait toujours de la sauce chaude.",
            "action": "Continuer à ajouter des cubes de beurre tout en fouettant. L'émulsion se construit progressivement — vous avez besoin de tout le beurre."
          },
          {
            "state": "Perfect",
            "description": "Gloire, terre cuite-orange unifiée. Enrober une cuillère dans une couche uniforme et opaque. Des chutes d'une cuillère inclinée dans un rideau lent et épais. Des odeurs de Cayenne, de beurre et de vinaigre simultanément.",
            "action": "Ajouter immédiatement les ailes chaudes, ou garder au chaud (pas chaud) dans la poêle jusqu'à ce qu'elle soit prête."
          },
          {
            "state": "Overdone",
            "description": "La sauce est cassée : des flaques d'orange grasse de beurre séparé flottent sur un liquide rouge fin et aqueux. Beurre et sauce ont divorcé.",
            "action": "Ajouter 1 c. à soupe de beurre froid et fouetter vigoureusement le feu. S'il ne revient pas, commencez par 2 c. à soupe de sauce chaude fraîche dans une poêle propre, réchauffez doucement, et fouettez la sauce cassée dans comme si c'était du beurre — il réémulsionne parfois."
          }
        ]
      },
      "feelCue": "Plongez une aile ou un bout de doigt dans la sauce finie — il devrait s'accrocher plutôt que d'égoutter, enrober uniformément sans mise en commun. La texture sur la langue est simultanément lisse et riche à partir du beurre et tranchant et acide à partir de la sauce chaude: aucun élément ne domine. Si le goût du beurre écrase le feu, ajoutez quelques gouttes de sauce plus chaude. Si la chaleur envahit tout, fouettez dans un cube de beurre froid de plus."
    }
  ]
};
