export default {
  "repoId": "master_eastern_european_kefir_001",
  "parentRepoId": null,
  "slug": "kefir",
  "author": "ForkRecipe Kitchen",
  "title": "Kéfir de lait",
  "description": "Le lait entier cultivé avec des grains de kéfir vivants pendant 24 heures dans une boisson probiotique acidulée, légèrement effervescente, plus épaisse que le babeurre, vivante avec des douzaines de souches bactériennes et de levures qui ont passé main dans la main dans le Caucase pendant des siècles. Versé froid sur les fruits ou bu directement dans le pot, il est tart et crémeux et légèrement pétillant d'une manière qu'aucun yaourt ne peut se répliquer.",
  "cuisine": "Europe orientale",
  "culture": "Caucasien (Géorgie)",
  "category": "fermented",
  "tags": [
    "fermenté",
    "lait",
    "Kéfir",
    "probiotique",
    "Caucasien",
    "boisson",
    "Sans gluten",
    "culture vivante"
  ],
  "difficulty": 2,
  "activeTime": "10 min",
  "totalTime": "24 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 1,
    "sour": 4,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Lait entier (complètement gras, pasteurisé — pas ultra pasteurisé si possible)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "2% lait (résultat mince)",
        "lait de coco (pour les produits laitiers — utiliser plus de céréales)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Leavener",
      "name": "Graines actives de kéfir de lait (vivant, rincé)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "démarreur de kéfir en poudre (les cultures sont moins diversifiées, à usage unique)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fermenter",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "fermenting_kefir",
      "instructions": "Placez les grains de kéfir vivants dans un pot en verre propre (ne pas utiliser de bols ou d'ustensiles métalliques avec du kéfir — les grains sont sensibles aux métaux réactifs). Verser le lait entier sur les grains à température ambiante — si le lait est froid du réfrigérateur, la fermentation sera plus lente et peut prendre jusqu'à 36 heures. Le rapport céréales/lait est important : environ 1 cuillère à soupe de grains par lait de 250 ml est idéal. Trop de grains ferment le lait trop rapidement, produisant un résultat très aigre et mince. Couvrir le bocal d'un chiffon ou d'une serviette en papier fixé à l'aide d'une bande de caoutchouc — ne pas utiliser de couvercle hermétique pendant la fermentation, car le CO2 produit doit s'échapper. Laisser à température ambiante (18–24 C) pendant 18–28 heures, dégustation à 18 heures et encore à 24 heures.",
      "visualCue": {
        "primaryTarget": "Le lait s'est épaissi sensiblement. Les grains flottent près du dessus ou sont suspendus dans un liquide épais et de couleur crème qui se déplace lentement lorsque le pot est incliné.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait ressemble encore et coule comme du lait frais. Pas de épaississement. Pas d'arôme aigre. Les grains ont coulé au fond.",
            "action": "Déplacez le pot à un endroit plus chaud (22-25 C). Goûtez à intervalles de 6 heures — les chambres froides ralentissent la culture de façon spectaculaire."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur à la consistance du yogourt mince. Arôme de Tangy, effervescent, comme le babeurre à bord de levure. Légère séparation du lactosérum visible au fond.",
            "action": "Soucher immédiatement pour arrêter la fermentation et séparer les grains."
          },
          {
            "state": "Overdone",
            "description": "Kefir s'est séparé considérablement en gros caillés et en lactosérum aqueux et jaunâtre. Sens très aigre et légèrement alcoolique.",
            "action": "Soucher et mélanger pour réémulsionner, puis réfrigérer. Il est toujours sûr de boire, mais très goudronneux, idéal pour la cuisson ou les smoothies plutôt que de boire droit."
          }
        ]
      },
      "feelCue": "Inclinez doucement le pot — le lait cultivé doit couler lentement et enrober le verre d'une fine couche, comme la crème qui s'est épaissie pendant la nuit. Si elle coule aussi librement que du lait frais, elle a besoin de plus de temps."
    },
    {
      "nodeId": "step_2",
      "action": "Filtrer",
      "inputs": [
        "fermenting_kefir"
      ],
      "outputState": "finished_kefir",
      "instructions": "Verser le kéfir fermenté à travers une souche en plastique ou en acier inoxydable (pas de mésange fine — les grains de kéfir doivent passer facilement à travers; utiliser un tamis grossier avec des trous de 2 à 3 mm) dans un pot ou un pichet propre. Les grains seront récoltés dans la souche. Mélanger doucement avec une spatule en plastique pour aider le liquide à s'écouler — ne pas forcer ou presser les grains. Une fois épuisés, rincer les grains très brièvement sous de l'eau fraîche et non chlorée si désiré (certains fermenteurs ne rincent pas, ce qui maintient les cultures plus diversifiées). Placez les grains récupérés dans un pot frais avec du lait frais pour commencer le prochain lot immédiatement, ou entreposez les grains immergés dans du lait frais au réfrigérateur pendant 2 semaines maximum. Sceller le kéfir fini et réfrigérer; il continuera à fermenter lentement et deviendra plus carbonaté pendant 1 à 3 jours au réfrigérateur.",
      "visualCue": {
        "primaryTarget": "Le kéfir fini est un liquide blanc-ivoire crémeux, légèrement grumelé, plus épais que le lait, plus mince que le yogourt grec. Les grains tendus ressemblent à de petites touffes de chou-fleur translucides.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide tendu coule aussi librement que le lait frais. Les grains sont plats et petits.",
            "action": "Verser le liquide sur les grains et fermenter encore 6 à 8 heures. Les grains sous-développés ont besoin de temps pour croître."
          },
          {
            "state": "Perfect",
            "description": "Liquide crémeux, légèrement visqueux, blanc ivoire. Les grains sont bruns, blancs et gélatineux, ressemblant à de petits fleurons de chou-fleur.",
            "action": "Réfrigérer le kéfir et commencer le prochain lot avec les grains récupérés tout de suite."
          },
          {
            "state": "Overdone",
            "description": "Très acide, liquide mince avec séparation significative du lactosérum. Les grains semblent légèrement visqueux.",
            "action": "Mélanger le kéfir tendu pour unifier le caillé et le lactosérum. Rincer les grains et commencer un lot frais dans des conditions légèrement plus fraîches."
          }
        ]
      },
      "feelCue": "Les grains de kefir récupérés doivent se sentir comme des perles gélatineuses et molles entre les doigts, glissantes et légèrement bouncy, jamais musquées ou dissolues. Les céréales saines sont la promesse du lot de demain."
    }
  ]
};
