export default {
  "repoId": "master_french_tapenade_001",
  "parentRepoId": null,
  "slug": "tapenade",
  "author": "ForkRecipe Kitchen",
  "title": "Tapenade",
  "description": "Des olives noires, des câpres, des anchois et de l'huile d'olive pillées dans un mortier ou pompées à une pâte grossière, pourpre-noire — briochée, affirmée et profondément salée, étalée sur des toasts ou brassée dans des pâtes.",
  "cuisine": "Français",
  "culture": "Provençal",
  "category": "condiments",
  "tags": [
    "Bandes magnétiques",
    "français",
    "Origine",
    "olive",
    "condiment",
    "végétalien",
    "Sans gluten"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 2,
    "bitter": 2,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Base",
      "name": "Olives noires (épilées, guéries — Niçoise ou Kalamata)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "olives vertes pour une tapenade verte piquante"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Capeurs (salés, rincés; ou en saumure, égouttés)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "Filets d'anchois (emballés à l'huile)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "omit pour végétalien; ajouter 1 c. à thé miso pâte pour compenser"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Ail (1 petite gousse)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Feuilles de thym fraîches (épicées)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Herbes séchées de Provence"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Citrus",
      "name": "Jus de citron",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Solvent",
      "name": "Cognac ou sherry sec (facultatif)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "un jet de vinaigre de vin rouge"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Piler",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_05"
      ],
      "outputState": "coarse_tapenade_base",
      "instructions": "Mélanger les olives piquées, les câpres rincées, les filets d'anchois et l'ail dans un grand mortier en pierre. Pound avec un mouvement circulaire, broyant jusqu'à ce que le mélange se décompose en une pâte rugueuse et cohésive avec une texture visible — il ne s'agit pas d'atteindre la douceur. Vous voulez une masse hétérogène et volumineuse avec personnalité : des morceaux identifiables de peau d'olive et de câpres au milieu de la pâte sombre et onctueuse. Alternativement, impulsion 5 à 6 fois dans un robot alimentaire. Le mortier produit une texture plus complexe, stratifiée; le processeur est plus rapide mais bordé vers l'uniformité.",
      "visualCue": {
        "primaryTarget": "Une pâte foncée, noire-violet, avec une peau d'olive visible et de petits morceaux intacts de câpres. Il brille faiblement dans l'huile de l'olive. Sensé et légèrement collant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De grandes moitiés d'olive intactes et des câpres entières encore visibles — à peine une pâte, plus une côte rugueuse.",
            "action": "Continuez à frapper ou à pousser. L'anchois et les câpres doivent se dissoudre dans la masse d'olive pour créer la base cohésive."
          },
          {
            "state": "Perfect",
            "description": "Une pâte foncée, grossière, unie, dominante d'olive (violet profond-noir), suffisamment cohésive pour s'étendre, avec suffisamment de texture pour se sentir faite à la main plutôt que fabriquée.",
            "action": "Ajouter le reste des ingrédients et travailler pour finir."
          },
          {
            "state": "Overdone",
            "description": "Une pâte lisse, uniforme, presque liquide sans texture — tout le caractère a été traité.",
            "action": "Incorporer une poignée d'olives très grossièrement hachées à la main pour restaurer une certaine variation texturale."
          }
        ]
      },
      "feelCue": "Lorsque vous pressez la pâte avec le pilon et qu'elle résiste uniformément — pas de gros morceaux qui roulent — et colle légèrement aux côtés du mortier plutôt que de glisser, vous avez la bonne consistance."
    },
    {
      "nodeId": "step_2",
      "action": "Émulsionner",
      "inputs": [
        "coarse_tapenade_base",
        "ing_04",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_tapenade",
      "instructions": "Incorporer le thym, le jus de citron et le cognac (si utilisé). Puis arrosez l'huile d'olive en remuant, en l'ouvrant dans la pâte avec une cuillère en bois ou le pilon dans un mouvement lent et circulaire. Vous ne faites pas une sauce entièrement émulsifiée — l'huile ne se liera que partiellement avec la pâte, donnant à la tapenade une consistance lâche, huileuse, tartinable. Ajouter l'huile progressivement; si vous l'ajoutez tout à la fois, la pâte devient grasse plutôt que soyeuse. Bouche: la saveur doit être affirmée, brillamment, salée et légèrement amère — pas timide.",
      "visualCue": {
        "primaryTarget": "Une pâte brillante, foncée et extensible avec une surface lisse de l'huile d'olive. Il tient sa forme lorsqu'il est cuillé mais descend lentement de la cuillère, laissant un sentier qui ne se remplit pas immédiatement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est raide et sèche, s'écroulant plutôt que s'épandant — pas assez d'huile d'olive incorporée.",
            "action": "Arroser plus d'huile d'une cuillère à café à la fois, la travailler, jusqu'à ce que la consistance se relâche en pâte à tartiner."
          },
          {
            "state": "Perfect",
            "description": "Profondément brillant, sombre, affirmé et complexe. Étaler sur des toasts avec un peu de résistance qui laisse place à une morsure onctueuse et bruine. L'huile scintille sur la surface sans se regrouper séparément.",
            "action": "Transférer dans un pot, couvrir d'une fine couche d'huile d'olive et réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "Trop d'huile: la pâte s'est cassée en une lécherette grasse et liquide avec les solides qui coulent. Il se met sur des toasts plutôt que de s'étendre.",
            "action": "Égoutter l'excès d'huile et l'économiser pour la cuisson; le reste de la tapenade sera plus rigide mais savoureux."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère propre dans la tapenade — elle doit se déplacer avec une résistance douce et laisser une tranchée propre qui tient sa forme pendant quelques secondes avant que les bords commencent à se détendre. S'il revient immédiatement, il lui faut plus ou moins de pétrole."
    },
    {
      "nodeId": "step_3",
      "action": "Assaisonner",
      "inputs": [
        "finished_tapenade"
      ],
      "outputState": "seasoned_tapenade",
      "instructions": "Goûtez soigneusement la tapenade avant d'ajouter du sel — les anchois et les câpres apportent un énorme sel, et les olives elles-mêmes sont guéries. Le poivre est le seul assaisonnement probablement nécessaire. Ajuster avec quelques gouttes de citron si elle a un goût plat. La tapenade doit être audacieuse et non apologétique: brillance, amère de la peau d'olive, profondément salée de l'anchois et du câpres, avec une faible note florale de la plante du thym et la levée aiguë du citron. Il ne devrait jamais goûter doux.",
      "visualCue": {
        "primaryTarget": "Une pâte lustrée, liquéfiée d'huile, presque noire, de confiance absolue. Il n'a pas l'air subtil et il ne doit pas goûter subtil. La surface est vivante avec le reflet d'une bonne huile d'olive.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Goûts plats et boueux — les notes d'acide et d'herbe sont absentes et l'olive domine d'une manière unidimensionnelle.",
            "action": "Ajouter plus de jus de citron goutte à goutte, une petite pincée de câpres, et vérifier que le thym a été ajouté."
          },
          {
            "state": "Perfect",
            "description": "Un coup complet, affirmé, complexe: d'abord sel et saumure, puis amertume d'olive, puis une longue queue d'umami de l'anchois, et un léger lifting de citron à la fin. Complètement vivant et intégré.",
            "action": "Couvrir d'une fine couche d'huile d'olive dans le pot et réfrigérer jusqu'à 2 semaines. Porter à la température ambiante avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Sur-salé ou sur-acide — goût aigu et abrasif, pas rond. Cela peut se produire si les anchois et les câpres n'ont pas été rincés adéquatement.",
            "action": "Travaillez dans des olives fraîches plus piquées et un peu plus d'huile d'olive pour diluer le sel."
          }
        ]
      },
      "feelCue": "Après la dégustation, le goût devrait s'attarder en bouche pendant 15 à 20 secondes, soit une longue finale salée, brillance et très légère amertume. Si elle disparaît rapidement, l'assaisonnement ou la profondeur doit être ajusté."
    }
  ]
};
