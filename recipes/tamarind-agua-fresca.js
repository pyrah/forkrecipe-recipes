export default {
  "repoId": "master_mexican_tamarind_agua_fresca_001",
  "parentRepoId": null,
  "slug": "tamarind-agua-fresca",
  "author": "ForkRecipe Kitchen",
  "title": "Agua de Tamarindo",
  "description": "Le plus complexe des aguas frescas — les gousses de tamarins s'ouvrent pour révéler leur pulpe collante et foncée, qui est dissoute dans l'eau chaude et coaxée dans une boisson ambre foncée profondément aigre, légèrement sucrée et chargée d'une profondeur fruitée à mi-chemin entre la date mûre et l'abricot de tarte.",
  "cuisine": "Mexicain",
  "culture": "Mexicain",
  "category": "beverages",
  "tags": [
    "boisson",
    "Mexique",
    "Tamarin",
    "agua-fresca",
    "végétalien",
    "Sans gluten",
    "sans produits laitiers"
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
    "sweet": 2,
    "salty": 0,
    "sour": 5,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Blocs de tamarins (frais) ou sans pépins",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "concentré de tamarin — utiliser 3 c. à soupe dissous dans l'eau, sauter l'étape de stabilisation"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau bouillante (pour dissoudre la pulpe)",
      "ratioValue": 500,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Eau froide (à diluer)",
      "ratioValue": 1000,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "piloncillo (sucre de canne brut) pour une note de mélasse plus profonde",
        "nectar d'agave"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Pince de sel de mer fin",
      "ratioValue": 1,
      "defaultUnit": "pinch",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrate",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "soaked_tamarind",
      "instructions": "Si vous utilisez des gousses fraîches, fissurez les coquilles cassantes et les épluchez, enlevez les fibres à cordes foncées qui s'écoulent dans le sens de la longueur. La pulpe collante de couleur châtaigne à l'intérieur devrait être douce et dense. Si vous utilisez un bloc sans graines, il suffit de le casser en morceaux rugueux. Placer la pulpe dans un bol thermofuge et verser l'eau bouillante dessus. Laissez-le reposer pendant 10 minutes, presser et masser la pulpe à l'aide d'une fourchette ou de vos doigts toutes les quelques minutes — vous la sentirez se détendre et se dissoudre progressivement dans l'eau. Le liquide deviendra brun-ambre profond.",
      "visualCue": {
        "primaryTarget": "Un liquide brun-ambre foncé avec la pulpe de tamarin qui commence à se décomposer en fils et fibres mous, sentant les fruits aigres et les dattes séchées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pulpe est encore dense et compacte, ne dégageant qu'une fine teinte de couleur dans l'eau, à peine dissoute après 5 minutes.",
            "action": "Continuez à tremper et appuyez plus vigoureusement avec une fourchette ou utilisez de l'eau légèrement plus chaude. Les fibres ont besoin de chaleur et de pression soutenues pour se libérer."
          },
          {
            "state": "Perfect",
            "description": "L'eau a transformé une ambre riche et foncée et la pulpe s'est brisée en brins doux, en pâte, facilement poussé à travers un tamis. Les graines (si présentes) sont visibles et libres.",
            "action": "Verser à travers un tamis à mailles fines dans un pichet propre, en appuyant sur chaque goutte."
          },
          {
            "state": "Overdone",
            "description": "Laissé trop longtemps, le mélange s'est refroidi et la pulpe s'est re-congénérée en une masse épaisse et collante qui est plus difficile à presser à travers un tamis.",
            "action": "Ajoutez une éclaboussure d'eau plus chaude et massez à nouveau — il se desserre et passer à travers le tamis sans problème."
          }
        ]
      },
      "feelCue": "Appuyez sur la pulpe ramollie entre deux doigts — elle devrait se propager facilement et se sentir comme un fruit séché doux et humide plutôt qu'un bloc dense et résistant. Si elle est encore caoutchouteuse, elle a besoin d'être trempée."
    },
    {
      "nodeId": "step_2",
      "action": "Poignée",
      "inputs": [
        "soaked_tamarind"
      ],
      "outputState": "tamarind_concentrate",
      "instructions": "Réglez un tamis à mailles fines sur une grande cruche. Verser l'eau de tamarin et la pulpe dans le tamis et presser fermement avec le dos d'une grande cuillère, en travaillant en mouvements circulaires. Le liquide ambre foncé passera à travers tandis que les fibres, les graines et les peaux de graines restent derrière. Continuer à presser jusqu'à ce que le résidu du tamis soit presque sec et fibreux. Jetez les solides. Le concentré qui en résulte doit être un liquide ambré épais et foncé avec une consistance légèrement plus épaisse que l'eau, intensément acide et complexe.",
      "visualCue": {
        "primaryTarget": "Un liquide brun-ambre foncé et brillant qui s'accumule dans la cruche, de couleur plus profonde que le jus de pomme, avec un corps légèrement sirupeux qui coule lentement d'une cuillère inclinée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide qui traverse le tamis est mince et pâle, laissant la plus grande partie de la couleur et du goût enfermés dans une pulpe non pressée.",
            "action": "Appuyez plus fermement sur le résidu et dans plus de passages — il y a encore une saveur importante dans la pulpe."
          },
          {
            "state": "Perfect",
            "description": "Un concentré ambré riche et foncé qui sent intensément les fruits tartes et laisse un résidu collant sur le tamis. Les solides pressés sont pâles, secs et papiers.",
            "action": "Procédez immédiatement à l'édulcoration et à la dilution."
          },
          {
            "state": "Overdone",
            "description": "Le résidu fibreux a été poussé à travers le tamis, brouillant le concentré avec des fils fins.",
            "action": "Plongez encore une fois à travers un filtre à café ou un fin chiffon pour plus de clarté. Le goût n'est pas affecté."
          }
        ]
      },
      "feelCue": "Goûtez une goutte de concentré sur le bout de votre doigt — il devrait vous faire gagner avec de la tarte. S'il a seulement un goût aigre, pressez plus de pulpe dans le tamis."
    },
    {
      "nodeId": "step_3",
      "action": "Saison",
      "inputs": [
        "tamarind_concentrate",
        "ing_04",
        "ing_05",
        "ing_03"
      ],
      "outputState": "finished_tamarindo",
      "instructions": "Incorporer le sucre dans le concentré chaud jusqu'à dissolution complète, puis ajouter la pincée de sel. Versez progressivement dans l'eau froide diluante, en dégustant au fur et à mesure — le tamarin est affirmé et l'équilibre entre aigre, doux et salé est ce qui définit la boisson. L'agua finale devrait d'abord goûter de façon puissante aux fruits tamarins, avec la douceur arrivant en seconde et le sel comme une note arrière lointaine qui fait apparaître la surdité. Réfrigérer jusqu'à froid. Incorporer avant que les sédiments fins ne se déposent. Servir sur glace.",
      "visualCue": {
        "primaryTarget": "Une boisson d'ambre foncée dans un verre au-dessus de la glace — la couleur du thé fortement glacé, légèrement plus profonde, avec une translucence qui laisse briller l'ambre dans le verre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours chaude et à peine diluée, la boisson est extrêmement aigre avec le sucre non encore complètement dissous.",
            "action": "Mélanger jusqu'à ce que le sucre se dissout complètement, puis ajouter l'eau froide restante et réfrigérer. Goûtez au froid — la perception de la douceur change significativement avec la température."
          },
          {
            "state": "Perfect",
            "description": "Froid, ambre et complexe — l'aurore est emphatique mais amortie par la douceur, avec le sel lui donnant une profondeur presque salée qui le rend plus intéressant que toute boisson de fruits standard.",
            "action": "Servir immédiatement sur la glace. Il se conserve au réfrigérateur pendant 3 jours; remuer avant chaque utilisation."
          },
          {
            "state": "Overdone",
            "description": "Trop de sucre a terni l'aurore du tamarin et la boisson goûte plat et sucré, comme les bonbons dilués au tamarin.",
            "action": "Presser dans une chaux ou ajouter une cuillère à soupe plus de concentré de tamarin pour réaffirmer la tartness."
          }
        ]
      },
      "feelCue": "La boisson froide doit frapper l'arrière de la gorge avec une tarte claire et propre suivie d'une douceur ronde et fruitée — jamais collante ni cloie. Le sel est ressenti plutôt que goûté, rendant la boisson entière plus vivante."
    }
  ]
};
