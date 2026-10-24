export default {
  "repoId": "master_japanese_teriyaki_sauce_001",
  "parentRepoId": null,
  "slug": "teriyaki-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce Teriyaki",
  "description": "Le soja, le mirin, le saké et le sucre sont réduits en quelques minutes à une laque bronzée, quatre ingrédients qui caramélisent tout ce qu'ils touchent et construisent une glaçure de grain doux, salé et fermenté.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "sauces",
  "tags": [
    "Japonais",
    "glaçure",
    "soja",
    "spirin",
    "Teriyaki",
    "umami",
    "Vite"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 4,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "sauce soja (de style japonais, p.ex. Kikkoman)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari pour sans gluten"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Mirin (favorité de l'honneur)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "sherry sec + 1 c. à thé sucre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Solvent",
      "name": "Mâcher",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "vin blanc sec",
        "sherry sec"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun léger",
        "Chérie"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Farine de maïs (facultatif, pour corps supplémentaire)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "poudre de arrowroot"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "teriyaki_mixture",
      "instructions": "Mélanger la sauce soja, le mirin, le saké et le sucre dans une petite casserole à fond lourd. Mélanger brièvement pour dissoudre le sucre. À ce stade, le mélange est mince, sombre et sent fortement l'alcool — le saké et le mirin sont crus. Mettre à feu moyen et laisser mijoter en remuant une ou deux fois. Laissez l'alcool cuire avant de réduire: vous remarquerez que l'odeur d'alcool vif adoucit et sucre comme le saké et mirin cuisinent, remplacé par un arrondi, plus parfum caramélisé.",
      "visualCue": {
        "primaryTarget": "Un liquide acajou foncé uniforme avec de fines bulles se formant aux bords de la casserole. L'odeur d'alcool brut s'estompe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est encore froid et le sucre n'a pas complètement dissous — granulés visibles au fond de la poêle. L'odeur est le soja cru et l'alcool cru.",
            "action": "Mélanger doucement et continuer le chauffage. Ne pas faire bouillir agressivement avant la dissolution du sucre."
          },
          {
            "state": "Perfect",
            "description": "Le mélange est uniformément liquide, mijotant doucement aux bords, brun foncé et sentant le soja chaud et le caramel plutôt que l'alcool vif.",
            "action": "Procéder à la réduction sans remuer, juste un tourbillonnement occasionnel de la poêle."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a été porté à un ébullition dur avant la cuisson de l'alcool — le mirin a fait la mousse de surface et le sucre peut brûler sur les côtés.",
            "action": "Réduire immédiatement la chaleur et utiliser une brosse à pâtisserie trempée dans l'eau froide pour dissoudre les cristaux de sucre sur les côtés de la casserole."
          }
        ]
      },
      "feelCue": "Au stade brut, le liquide est mince et aqueux, enrobant à peine un doigt trempé. L'odeur du saké doit être immédiatement perceptible: vive et légèrement florale. Comme il chauffe, la netteté s'adoucit."
    },
    {
      "nodeId": "step_2",
      "action": "Réduire",
      "inputs": [
        "teriyaki_mixture",
        "ing_05"
      ],
      "outputState": "teriyaki_glaze",
      "instructions": "Maintenez une mijotée régulière et douce — pas un ébullition dur — et réduisez la sauce pendant 5 à 8 minutes, en agitant parfois la poêle plutôt que de la remuer. La sauce est prête lorsqu'elle enveloppe l'arrière d'une cuillère de façon épaisse et qu'une ligne tirée à travers le revêtement tient 2 à 3 secondes. Si vous utilisez de la fécule de maïs : mélangez-le avec une cuillère à soupe d'eau froide pour former un lisier, puis fouettez-le dans la sauce mijotée et remuez-le pendant 30 secondes jusqu'à épaississement et brillant. Retirer du feu — la sauce s'épaissit davantage en refroidissant.",
      "visualCue": {
        "primaryTarget": "Un glaçure brillant et brun acajou qui enveloppe une cuillère dans une couche brillante et ininterrompue. Lorsque vous dessinez une ligne à travers le revêtement avec votre doigt, il tient propre pendant plusieurs secondes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce coule de l'arrière de la cuillère comme de l'eau. Il a un goût salé et doux mais mince, sans profondeur caramélisée ni corps.",
            "action": "Continuez à mijoter. La sauce diminue rapidement une fois qu'elle passe à mi-chemin — regardez attentivement et tourbillonnez plutôt que de remuer pour éviter de perturber la réduction."
          },
          {
            "state": "Perfect",
            "description": "La sauce enrobe une cuillère en métal d'une couche laquée brillante. Une fois refroidi à température ambiante, il sera assez épais pour s'accrocher aux protéines sans dégoutter. La saveur est équilibrée : sucré-savoureux, avec la profondeur de l'umami et aucun goût d'alcool cru.",
            "action": "Retirer du feu et laisser refroidir légèrement avant d'utiliser. La glaçure s'épaissira davantage à mesure qu'elle refroidit — si elle est trop épaisse à froid, mince avec un jet d'eau ou de soja."
          },
          {
            "state": "Overdone",
            "description": "La sauce a diminué trop loin — elle semble sirupeuse et très sombre, presque noire. De petites bulles éclatent à la surface d'un son épais, semblable au caramel. Il peut sentir légèrement brûlé.",
            "action": "Ajouter une cuillerée à soupe d'eau ou de sauce de soja et tourner doucement pour se réintégrer. La sauce se desserre en absorbant le liquide. Retirer immédiatement du feu."
          }
        ]
      },
      "feelCue": "Plongez une cuillère et laissez la sauce couler votre doigt sur une assiette froide — une sauce teriyaki correctement réduite sera mise dans un film collant et laque-firm plutôt qu'une flaque rugueuse."
    }
  ]
};
