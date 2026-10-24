export default {
  "repoId": "master_cantonese_char_siu_glaze_001",
  "parentRepoId": null,
  "slug": "char-siu-glaze",
  "author": "ForkRecipe Kitchen",
  "title": "Char Siu Glaze",
  "description": "Une épaisse glaçure laquée de hoisin, de miel, de haricot rouge fermenté, et cinq épices qui caramélisent le porc au four à une acajou profonde — sucrée et salée dans les vagues alternées, avec ce singulier bord de char grillé qui définit le barbecue cantonais.",
  "cuisine": "Chinois",
  "culture": "Cantonais",
  "category": "sauces",
  "tags": [
    "Char-siu",
    "cantonais",
    "bbq",
    "porc",
    "glaçure",
    "Chinois"
  ],
  "difficulty": 2,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 920,
  "forks": 71,
  "contributors": 23,
  "license": "CC-BY-SA",
  "createdAt": "2026-02-01",
  "updatedAt": "2026-02-01",
  "flavorRadar": {
    "sweet": 4,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Sweetener",
      "name": "Chérie",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "sirop de maltose (traditionnel)",
        "agave"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Sauce à l'huile",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "Haricot rouge fermenté (nam yu), purée",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "1 c. à thé rouge colorant alimentaire + 1 c. à thé miso pour color-only sub"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "sauce soja",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari pour sans gluten"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Cinq épices en poudre",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Solvent",
      "name": "Vin de riz Shaoxing ou sherry sec",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "sherry sec",
        "jus de pomme"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Sucre brun",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre blanc"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Ail, râpé",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fouetter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "combined_glaze",
      "instructions": "Mash le haricots rouge fermenté courbé à une pâte lisse avec une fourchette. Mélanger tous les ingrédients dans une casserole et fouetter ensemble jusqu'à uniforme. Le haricot fermenté résistera, et le travaillera en profondeur. La glaçure à ce stade sera un brun rouge foncé et boueux.",
      "visualCue": {
        "primaryTarget": "Le mélange — l'intégration des haricots rouges dans les autres liquides.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux visibles de courge de haricots et les cinq épices sont encore une poudre flottante.",
            "action": "fouetter vigoureusement; le caillé de haricots doit être entièrement incorporé avant le chauffage."
          },
          {
            "state": "Perfect",
            "description": "Un liquide uniforme profondément brun-rouge avec un léger éclat. Pas de bosses, pas de poudre flottant à la surface. Sensation intense d'anis et de soja sucré.",
            "action": "Transférer à la chaleur et réduire."
          },
          {
            "state": "Overdone",
            "description": "Le sursaut a incorporé trop d'air — la glaçure est mousseuse.",
            "action": "Laisser reposer 2 minutes et la mousse se déposera avant le chauffage."
          }
        ]
      },
      "feelCue": "Plongez un doigt — la glaçure crue doit se sentir visqueuse et collante immédiatement, enrobant votre bout de doigt dans un film sombre et parfumé qui sent cinq épices et du soja sucré."
    },
    {
      "nodeId": "step_2",
      "action": "Faire réduire",
      "inputs": [
        "combined_glaze"
      ],
      "outputState": "finished_char_siu_glaze",
      "instructions": "Chauffer la glaçure dans une petite casserole à feu moyen, en remuant constamment. Porter à mijoter doucement et cuire 4 à 5 minutes jusqu'à ce que la glaçure ait épaissi, que le sucre ait complètement dissous, et qu'il enveloppe fortement l'arrière d'une cuillère. Retirer du feu — il continuera à épaissir à mesure qu'il refroidira. Utiliser chaud pour la marination et le vitrage, ou conserver réfrigéré pendant 3 semaines.",
      "visualCue": {
        "primaryTarget": "La glaçure sur le dos d'une cuillère — son épaisseur et la façon dont elle coule.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La glace est encore mince et se déverse librement de la cuillère — elle épuisera le porc plutôt que de le laquager.",
            "action": "Continuer à mijoter encore 2 minutes et tester à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Gloire, glaçure acajou profond qui se déplace lentement hors d'une cuillère inclinée et laisse un épais, même manteau sur le dos. Un doigt tiré à travers elle laisse une piste propre et lente.",
            "action": "Utiliser immédiatement comme marinade (réserver un peu pour le basting) et glacer le porc sur les 15 dernières minutes de rôtissage."
          },
          {
            "state": "Overdone",
            "description": "La glace a été réduite à une pâte très épaisse, presque solide. Il se solidifiera complètement en refroidissant et en brûlant au four.",
            "action": "Ajouter l'eau chaude une cuillère à soupe à la fois et remuer à feu doux pour rétablir la consistance appropriée."
          }
        ]
      },
      "feelCue": "Lorsque la glaçure est à la bonne consistance, une cuillère levée du pot doit tenir une lourde goutte à son extrémité pendant 2 secondes complètes avant qu'elle ne tombe — plus longue que l'eau, plus courte que le miel directement du pot."
    }
  ]
};
