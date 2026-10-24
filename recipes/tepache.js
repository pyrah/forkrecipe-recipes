export default {
  "repoId": "master_mexican_tepache_001",
  "parentRepoId": null,
  "slug": "tepache",
  "author": "ForkRecipe Kitchen",
  "title": "Tepache mexicaine",
  "description": "Une boisson d'ananas fermenté à peine alcoolisée, enrichie de piloncillo et de cannelle, légèrement pétillante, sucrée et rafraîchissante, faite de pelure et de noyau qui, autrement, serait gaspillée.",
  "cuisine": "Mexicain",
  "culture": "Mexicain Street Food",
  "category": "fermented",
  "tags": [
    "Mexique",
    "fermenté",
    "ananas",
    "Tépache",
    "boisson",
    "faible consommation d'alcool",
    "zéro déchet"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "3 days",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 3,
    "salty": 0,
    "sour": 3,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Peau et noyau d'ananas (à partir de 1 ananas entier, bien lavé)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Piloncillo ou sucre brun foncé",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "panneaua",
        "sucre de palme",
        "sucre brun léger"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Bâton de cannelle (canelle mexicaine préférée)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Ceylan bâton de cannelle"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Giroves entières",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Hydration",
      "name": "Eau filtrée ou non chlorée",
      "ratioValue": 300,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_05"
      ],
      "outputState": "sugar_water",
      "instructions": "Chauffer environ une tasse de l'eau mesurée à 40°C (juste chaud au toucher, pas chaud). Ajouter le piloncillo ou la cassonade et remuer jusqu'à dissolution complète. Combiner avec le reste de l'eau mesurée à température ambiante dans un grand pot propre ou une roche céramique (au moins 2 litres). Ne jamais utiliser l'eau froide seule — le froid ne dissout pas le piloncillo.",
      "visualCue": {
        "primaryTarget": "Liquide clair à légèrement ambré sans granulés de sucre visibles. L'eau sent peu la cassonade et la mélasse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux de piloncillo ou des granules de sucre encore non dissous, assis au fond du navire.",
            "action": "Incorporer plus longtemps avec de l'eau chaude. Piloncillo en particulier a besoin d'eau chaude et de brassage actif pour se dissoudre complètement."
          },
          {
            "state": "Perfect",
            "description": "Eau uniformément teintée d'ambre, complètement limpide sans matériau non dissout. Ça sent le sucre cru.",
            "action": "Ajouter les morceaux d'ananas et les épices dans le pot."
          },
          {
            "state": "Overdone",
            "description": "L'eau a été utilisée trop chaude — la vapeur s'élève, l'eau est supérieure à 60°C. Risque de tuer des levures sauvages sur la peau de l'ananas.",
            "action": "Laisser refroidir à moins de 40°C avant d'ajouter l'ananas. Les levures sauvages meurent au-dessus de 50°C."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt propre — l'eau doit se sentir agréablement chaude, semblable à un bain chaud, jamais trop chaud. Cette température maintient les levures sauvages en vie sur la peau de l'ananas."
    },
    {
      "nodeId": "step_2",
      "action": "Assembler",
      "inputs": [
        "ing_01",
        "sugar_water",
        "ing_03",
        "ing_04"
      ],
      "outputState": "tepache_mixture",
      "instructions": "Frottez soigneusement la peau de l'ananas sous l'eau courante avant de couper pour enlever la saleté de surface, puis coupez l'écorce et le noyau en morceaux rugueux. Ajoutez-les dans le pot avec l'eau sucrée, puis avec le bâton de cannelle et les girofles. L'ananas devrait être principalement submergé. Couvrez le pot d'un tissu de coton propre, fixé avec une bande de caoutchouc — pas un couvercle serré, car la fermentation produit du CO2 qui doit s'échapper.",
      "visualCue": {
        "primaryTarget": "Un grand pot rempli de débris d'ananas dorés, d'eau ambre chaude et d'épices. La couverture en tissu est tendue et sécurisée, permettant un échange d'air.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Jar est scellé avec un couvercle serré. Aucun échange aérien possible.",
            "action": "Remplacez immédiatement le couvercle par un couvercle en tissu — un pot scellé exercera une pression dangereuse ou créera des conditions pour les aromatisants."
          },
          {
            "state": "Perfect",
            "description": "Les débris d'ananas sont surtout submergés dans l'eau sucrée. La cannelle et les girofles visibles dans le liquide. Couverture de vêtements sécurisée et respirante.",
            "action": "Installez-vous dans un endroit chaud (22 à 28°C) en plein soleil pendant 2 à 3 jours."
          },
          {
            "state": "Overdone",
            "description": "La peau d'ananas n'a pas été lavée et porte des contaminants de surface ou des résidus de pesticides qui peuvent interférer avec la fermentation.",
            "action": "Lavez toujours l'ananas bien avant d'utiliser — le savon est fin aussi longtemps qu'il est bien rincé."
          }
        ]
      },
      "feelCue": "Poussez les débris d'ananas dans l'eau de sucre — ils doivent se sentir fermes et flotter doucement. Le liquide doit se sentir à peine chaud au toucher après la combinaison."
    },
    {
      "nodeId": "step_3",
      "action": "Fermenter",
      "inputs": [
        "tepache_mixture"
      ],
      "outputState": "fermented_tepache",
      "instructions": "Laisser couvert à température ambiante (22–28°C est idéal) pendant 2–3 jours, en remuant une fois par jour avec une cuillère propre. Les bulles commenceront à apparaître dans le liquide à la limite de 24 heures. D'ici 48 heures, la tepache doit être active lorsque le pot est légèrement incliné. Goûtez chaque jour — il devrait passer de doux à légèrement aigre et agréablement tropical. Arrête quand la tarte te plaît.",
      "visualCue": {
        "primaryTarget": "Après 48 heures : le liquide a pris une couleur ambre plus profonde, de fines bulles s'élèvent en continu des morceaux d'ananas, et une mince mousse blanche peut s'asseoir à la surface (levure sauvage sans danger).",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 24 heures : le liquide est encore clair et très doux. Pas de bulles visibles. Pas de note aigre au goût.",
            "action": "Attendez — la fermentation peut être lente si la pièce est fraîche (moins de 20°C). Passez à un endroit plus chaud. Incorporer pour redistribuer les levures."
          },
          {
            "state": "Perfect",
            "description": "Légèrement amer, avec un parfum d'ananas tropical et un soupçon de cannelle. Les bulles sont actives mais pas violentes. La mousse de surface est blanche et propre.",
            "action": "Souchez immédiatement et réfrigérez pour ralentir la fermentation."
          },
          {
            "state": "Overdone",
            "description": "Tepache est fortement aigre ou vinaigre, a perdu sa douceur entièrement, et peut sentir de l'alcool ou kombucha. Le liquide peut être nuageux à cause de la fermentation suractive.",
            "action": "Fraise et diluer à l'eau pétillante avant de servir. Ou utiliser comme vinaigre de cuisson – excellent en salsas et marinades."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt propre dans la tepache le jour 2 — vous devriez sentir le plus léger fourmillement de la carbonation, comme de l'eau pétillante très douce, pas des étourdissements agressifs."
    },
    {
      "nodeId": "step_4",
      "action": "Filtrer",
      "inputs": [
        "fermented_tepache"
      ],
      "outputState": "finished_tepache",
      "instructions": "Placer la tepache à travers un tamis à mailles fines ou une nappe de fromage dans un pichet ou des bouteilles propres, en jetant les solides d'ananas, la cannelle et les girofles. Réfrigérer immédiatement pour ralentir la fermentation. Servir froid sur la glace. Tepache conserve réfrigéré jusqu'à 5 jours et continuera à se développer légèrement dans la saveur.",
      "visualCue": {
        "primaryTarget": "Un liquide d'ambre clair à légèrement trouble avec une effervescence fine persistante. Sens tropical, légèrement aigre, et chaudement épicé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après la déformation, le liquide est à peine carbonaté — plat et purement sucré. Pas de développement aigre.",
            "action": "La fermentation n'était pas assez longue ou la température était trop froide. Servir comme un doux ananas agua fresca, ou laisser le liquide tendu fermenter 12 heures de plus dans une bouteille scellée au réfrigérateur."
          },
          {
            "state": "Perfect",
            "description": "Une carbonation légère et vivante qui chatouille le verre. La couleur est un or au miel chaud. Le nez est ananas, cassonade et cannelle. La bouche se termine par une agréable ameresse rafraîchissante.",
            "action": "Servir immédiatement sur la glace, ou en bouteille et réfrigérer jusqu'à 5 jours."
          },
          {
            "state": "Overdone",
            "description": "Très fortement aigre, douceur minimale, mousse lourde, peut-être légèrement alcoolique dans le goût.",
            "action": "Diluer 1:1 avec de l'eau pétillante ou utiliser comme base pour les cocktails. Encore délicieux — juste plus aigre que le profil prévu."
          }
        ]
      },
      "feelCue": "Une gorgée de tepache finie devrait se sentir refroidie et vive sur la langue — la légère carbonation lui donne une légère effervescence qui se sent comme de l'eau de source avec un but."
    }
  ]
};
