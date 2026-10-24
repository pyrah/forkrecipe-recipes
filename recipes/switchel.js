export default {
  "repoId": "master_american_switchel_001",
  "parentRepoId": null,
  "slug": "switchel",
  "author": "ForkRecipe Kitchen",
  "title": "Interrupteur (Haymaker's Punch)",
  "description": "Le vinaigre de cidre de pomme, la mélasse, le gingembre et l'eau — le champ américain colonial boit avant les boissons sportives de 300 ans. Tarte, douce, gingembre et étonnamment rafraîchissante.",
  "cuisine": "Américain",
  "culture": "Colonial américain",
  "category": "beverages",
  "tags": [
    "Interrupteur",
    "coloniale",
    "gingembre",
    "vinaigre",
    "hydratation",
    "vieux jeu",
    "pas de cuisson"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 2,
    "salty": 0,
    "sour": 4,
    "bitter": 1,
    "umami": 0,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme cru",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Molasses ou miel",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "sirop d'érable",
        "sucre brun"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé finement",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "gingembre moulu (utiliser la moitié de la quantité)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Hydration",
      "name": "Eau froide",
      "ratioValue": 800,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Jus de citron frais (facultatif)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whisk",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "switchel_concentrate",
      "instructions": "Mélanger le vinaigre de cidre de pomme, la mélasse et le gingembre râpé dans un grand pot ou un pichet. fouetter ou remuer vigoureusement jusqu'à ce que la mélasse soit complètement dissoute — elle est épaisse et voudra s'accrocher au fond. Ajouter un petit jet d'eau pour l'aider à se détendre si nécessaire. Le concentré sera foncé, sirupeux et intensément aromatisé.",
      "visualCue": {
        "primaryTarget": "Un concentré noir foncé avec de la pulpe de gingembre dorée suspendue. Pas de stries de mélasses non dissoutes enroulant au fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les rubans de mélasse sombres sont encore enroulés au fond lorsque le pot est renversé — pas encore dissous.",
            "action": "Continuez à remuer. Les molass se dissolvent lentement dans le vinaigre froid. Un bain d'eau chaude de 30 secondes autour de l'extérieur du pot (pas à l'intérieur) le détend plus rapidement."
          },
          {
            "state": "Perfect",
            "description": "Un sirop brun-noir uniformément foncé avec de la pulpe de gingembre distribuée partout. Goûte fortement aigre, profondément sucré, et punissantment épicé en concentration.",
            "action": "Ajouter l'eau froide et le jus de citron pour diluer à un niveau buvable."
          },
          {
            "state": "Overdone",
            "description": "Le concentré a été chauffé pour dissoudre la mélasse et goûte maintenant fin et cuit.",
            "action": "Refroidir avant d'ajouter l'eau froide. Le switchel est un procédé à froid — la chaleur élimine les notes de vinaigre vif et de gingembre."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt dans le concentré — il doit sentir visqueux et collant, enrobant votre peau comme un sirop foncé, avec la piqûre aiguë de vinaigre coupant à travers."
    },
    {
      "nodeId": "step_2",
      "action": "Refroidissement",
      "inputs": [
        "switchel_concentrate",
        "ing_04",
        "ing_05"
      ],
      "outputState": "switchel",
      "instructions": "Verser l'eau froide et le jus de citron dans le concentré et bien mélanger. Goûtez et ajustez - plus de mélasse si trop tranchante, plus de vinaigre si trop sucré, plus de gingembre si trop plat. Réfrigérer pendant au moins 1 heure pour permettre au gingembre de se moeller et aux saveurs de se marier. Servir sur de la glace, en remuant avant chaque verser lorsque la pulpe de gingembre se dépose.",
      "visualCue": {
        "primaryTarget": "Un liquide doré-brun nuageux sur la glace — plus foncé que le thé doux, plus léger que le cola, avec des sédiments de gingembre visibles se déposer dans le fond du pichet.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le switchel vient d'être fait et goûte aiguisé et disjointé — les pistes de vinaigre et la douceur n'ont pas été intégrées.",
            "action": "Donnez-le au moins une heure au frigo. Le reste n'est pas facultatif — le switchel brut a un goût dur parce que le gingembre et la mélasse n'ont pas encore mélangé avec l'acide."
          },
          {
            "state": "Perfect",
            "description": "Ambre doré et légèrement nuageux. Froid. Goûte à la tarte sucrée au gingembre chaud lentement à l'arrière de la gorge et à une longue finale de vinaigre propre.",
            "action": "Servir sur la glace et remuer avant chaque verser."
          },
          {
            "state": "Overdone",
            "description": "Laissé trop longtemps — la saveur de gingembre est devenue écrasante et piquante, le vinaigre plat.",
            "action": "Diluer avec plus d'eau froide et ajouter une pression d'agrumes pour éclaircir. L'allongement des pentes intensifie le gingembre au-delà des agréables."
          }
        ]
      },
      "feelCue": "Le switchel froid doit se sentir mince et hydratant en bouche, avec une chaleur douce qui se construit lentement à partir du gingembre — rafraîchissant d'une manière qui semble contre-intuitive compte tenu du vinaigre."
    }
  ]
};
