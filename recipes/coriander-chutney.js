export default {
  "repoId": "master_indian_coriander_chutney_001",
  "parentRepoId": null,
  "slug": "coriander-chutney",
  "author": "ForkRecipe Kitchen",
  "title": "Coriandre Chutney",
  "description": "Un chutney vif, vert électrique blitzé de la coriandre fraîche et de la menthe avec la chaleur de chili vert et la luminosité du citron vert — le genre de contrepoint frais, herbacé qui fait chaque samosa, chaat, et bouchée grillée viennent en vie.",
  "cuisine": "Indiens",
  "culture": "Nationaux",
  "category": "condiments",
  "tags": [
    "Chutney",
    "Coriandre",
    "vert",
    "menthe",
    "frais",
    "Chaat",
    "végétalien"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 3,
    "bitter": 2,
    "umami": 1,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Herb",
      "name": "Coriandre fraîche (feuilles et tiges tendres)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Herb",
      "name": "Feuilles fraîches de menthe",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Heat",
      "name": "Chili vert (serrano ou oeil d'oiseau)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "jalapeño pour doux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousse d'ail",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gingembre frais, haché approximativement",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Jus de citron vert frais",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": [
        "sel noir (kala namak) pour plus de complexité"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mixer",
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
      "outputState": "blended_chutney",
      "instructions": "Mélanger tous les ingrédients dans un mélangeur ou le pot d'un mélangeur d'immersion. Commencez avec l'eau et le jus de lime au fond afin que les lames s'attrapent facilement. Mélanger en haut pendant 60 à 90 secondes, en grattant les côtés une fois, jusqu'à ce que le chutney soit très lisse et uniformément vert vif. Goûtez et ajustez : ajoutez plus de citron vert pour la luminosité, plus de chili pour la chaleur, ou une pincée de sel si plat.",
      "visualCue": {
        "primaryTarget": "Une purée d'une couleur vert-électrique intense, sans herbe visible, uniformément lisse, lumineuse comme de la peinture fraîche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pâte verte avec des morceaux d'herbe visibles. La couleur est foncée et vert vif.",
            "action": "Mélangez encore 30 secondes. Ajouter 1 cuillère à soupe de plus d'eau si nécessaire pour faire bouger les lames."
          },
          {
            "state": "Perfect",
            "description": "Doux, fluide, vert vif. Enrober le pot de mélangeur dans un film. Goûte frais, herbacé, vif et chaud.",
            "action": "Boucher, ajuster et servir immédiatement ou réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "Il n'est généralement pas possible de le faire en surchauffant, mais le réchauffement du chutney (p. ex. dans un mélangeur chaud) assombrira le vert en olive.",
            "action": "Mélanger brièvement et utiliser un pot froid. Ajouter une petite poignée de coriandre fraîche pour raviver la couleur."
          }
        ]
      },
      "feelCue": "Une petite quantité frottée sur votre poignet devrait se sentir fraîche et légèrement teintée par le chili — et sentir sans équivoque la coriandre fraîche en deux secondes."
    },
    {
      "nodeId": "step_2",
      "action": "Terminer",
      "inputs": [
        "blended_chutney"
      ],
      "outputState": "finished_coriander_chutney",
      "instructions": "Transférer dans un petit bol ou un pot. Si vous servez immédiatement, le chutney est à son plus vif et frais. Si vous avancez, appuyez sur un morceau de film de collage directement sur la surface pour empêcher l'oxydation et réfrigérer jusqu'à 3 jours. Bien mélanger avant de servir — le chutney peut se séparer légèrement en position debout.",
      "visualCue": {
        "primaryTarget": "Vert électrique, brillant, lisse — se tient dans un monticule doux dans le bol sans s'étaler immédiatement à plat.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Chutney est trop mince et arrosé, se répand immédiatement à plat.",
            "action": "Retourner au mélangeur avec une poignée de coriandre plus fraîche pour épaissir sans ajouter d'eau."
          },
          {
            "state": "Perfect",
            "description": "Tenir une forme douce pendant quelques secondes avant de s'installer. Vert vif avec un éclat brillant. C'est facile.",
            "action": "Servir à température ambiante pour un arôme maximum."
          },
          {
            "state": "Overdone",
            "description": "Chutney s'est oxydé jusqu'à une couleur gris olive en étant assis découvert ou en étant fait trop loin à l'avance.",
            "action": "Ajoutez une poignée de coriandre fraîche et re-blend. La couleur s'éclaire instantanément."
          }
        ]
      },
      "feelCue": "Une cuillère sur la langue devrait délivrer trois vagues dans l'ordre: la fraîcheur herbacée d'abord, puis la luminosité du citron vert, puis une chaleur de chili lente s'étendant à l'arrière de la gorge."
    }
  ]
};
