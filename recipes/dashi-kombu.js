export default {
  "repoId": "master_japanese_dashikombu_001",
  "parentRepoId": null,
  "slug": "dashi-kombu",
  "author": "ForkRecipe Kitchen",
  "title": "Kombu Dashi profond et froid",
  "description": "Un stock végétalien minéral-propre tiré de varech séché et de l'eau froide seule — l'expression la plus pure de l'umami, extrait lentement sans chaleur pour préserver chaque délicate note d'iode.",
  "cuisine": "Japonais",
  "culture": "Washoku",
  "category": "stocks",
  "tags": [
    "stock",
    "Japonais",
    "végétalien",
    "kombu",
    "Dashi",
    "umami",
    "Sans gluten"
  ],
  "difficulty": 1,
  "activeTime": "5 min",
  "totalTime": "8 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Kombu séché (Ma-kombu ou Rishiri)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Wakame séché (humami plus faible)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau filtrée à froid",
      "ratioValue": 1000,
      "defaultUnit": "ml",
      "substitutions": [
        "eau de source"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel de mer fin (facultatif, au goût)",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "sauce soja légère"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation",
      "inputs": [
        "ing_01"
      ],
      "outputState": "wiped_kombu",
      "instructions": "essuyer doucement la surface du kombu avec un chiffon à peine humide pour enlever tout grain. Ne pas rincer sous l'eau courante — la fleur poudreuse blanche (mannitol) à la surface est naturelle MSG-adjacent glutamate et est essentielle à la profondeur de l'umami. Laissez-le intact.",
      "visualCue": {
        "primaryTarget": "Le kombu devrait avoir l'air vert olive foncé à presque noir, sec et ferme, avec une poussière blanche mate sur sa surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sable, le sable ou les particules étrangères visibles restent à la surface.",
            "action": "Essuyez encore avec un chiffon légèrement amorti, en veillant à ne pas frotter la fleur blanche."
          },
          {
            "state": "Perfect",
            "description": "Surface propre avec le mannitol blanc fleur entièrement intact. Pas de grit, pas de brillance.",
            "action": "Submerger immédiatement dans l'eau froide."
          },
          {
            "state": "Overdone",
            "description": "Vous l'avez rincé sous l'eau — la fleur blanche s'est lavée et le kombu semble uniformément sombre et légèrement brillant.",
            "action": "Continuez, mais attendez un dashi plus doux et plus mince. Une heure de plus."
          }
        ]
      },
      "feelCue": "Le kombu doit se sentir sec et légèrement cuireux, comme un morceau de parchemin raide — pas doux, pas s'écrouler."
    },
    {
      "nodeId": "step_2",
      "action": "Streep",
      "inputs": [
        "wiped_kombu",
        "ing_02"
      ],
      "outputState": "steeped_dashi",
      "instructions": "Placez le kombu dans un récipient propre avec l'eau filtrée froide. Couvrir et réfrigérer pendant au moins 6 heures, idéalement toute la nuit (jusqu'à 24 heures). L'extraction à froid tire lentement l'acide glutamique sans les composés de soufre amer libérés par la chaleur. Ne la laissez pas bouillir à aucun moment pendant cette étape.",
      "visualCue": {
        "primaryTarget": "L'eau aura tourné un ambre d'or pâle et clair — la couleur du thé vert très légèrement brassé, avec un léger éclat.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est encore presque incolore et aqueuse, sans douceur ni corps.",
            "action": "Pendant au moins 2 heures. La vraie profondeur de l'umami prend du temps."
          },
          {
            "state": "Perfect",
            "description": "Ambre pâle, légèrement parfumée de la mer – saline, légèrement douce, profondément minérale. Le kombu a gonflé et adouci considérablement.",
            "action": "Retirer le kombu et goûter avant l'assaisonnement."
          },
          {
            "state": "Overdone",
            "description": "L'eau est devenue brune et sent légèrement amère ou sulfureuse. Bien trop longtemps, ou la température est montée au-dessus de 60 °C.",
            "action": "Enfilez-vous dans un tissu à mailles fines. L'amertume peut se dissiper légèrement une fois refroidi; assaisonner soigneusement."
          }
        ]
      },
      "feelCue": "À la marque de 6 heures, trempez un doigt et un goût — le liquide devrait envelopper votre langue d'une douceur ronde et océanique et d'une chaleur minérale persistante qui n'a pas de saveur unique identifiable."
    },
    {
      "nodeId": "step_3",
      "action": "Poignée",
      "inputs": [
        "steeped_dashi",
        "ing_03"
      ],
      "outputState": "finished_dashi",
      "instructions": "Enlevez le kombu (réservez-le – il peut être tranché et mijoté dans le soja et le mirin comme condiment). Enfilez le dashi dans un tamis à mailles fines doublé d'une nappe de fromage ou d'un filtre à café. Assaisonner légèrement avec du sel seulement s'il est utilisé comme bouillon autonome. Utiliser immédiatement ou conserver au réfrigérateur jusqu'à 4 jours.",
      "visualCue": {
        "primaryTarget": "Liquide clair et lumineux d'or pâle sans sédiments ni particules flottantes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Trop vite entraînée — de fines particules et de petits morceaux de kombu encore visibles flottant dans le liquide, le rendant nuageux.",
            "action": "Reformer à travers un filtre à café placé à l'intérieur du tamis."
          },
          {
            "state": "Perfect",
            "description": "Bouillon doré clair de cristal. Ça tient la lumière. Sens de l'océan et des minéraux chauds.",
            "action": "Laisser refroidir et réfrigérer, ou utiliser immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Vous avez pressé ou pressé le kombu dans la souche — les tanins et les composés amers ont obscurci le bouillon.",
            "action": "Laisser reposer pendant 30 minutes, puis déposer soigneusement la couche supérieure claire."
          }
        ]
      },
      "feelCue": "Le dashi fini devrait se sentir soyeux et légèrement visqueux en bouche — non mince comme de l'eau, mais lisse et enduit, avec une finition savoureuse qui persiste pendant plusieurs secondes."
    }
  ]
};
