export default {
  "repoId": "master_ethiopian_niterkilbbeh_001",
  "parentRepoId": null,
  "slug": "niter-kibbeh",
  "author": "ForkRecipe Kitchen",
  "title": "Niter Kibbeh",
  "description": "Beurre épicé clarifié de l'Éthiopie — beurre entier lentement infusé d'oignon, d'ail, de gingembre, de fenugrec, de curcuma, de cardamome et de korarima jusqu'à ce qu'il soit profondément doré et parfumé, puis dégagé dans une graisse de cuisson dorée d'une extraordinaire complexité.",
  "cuisine": "Éthiopien",
  "culture": "Éthiopien",
  "category": "condiments",
  "tags": [
    "ethiopienne",
    "Beurre épicée",
    "aromatiques",
    "matières grasses",
    "marque à l'avance"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "beurre salé"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon jaune, haché approximativement",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "Échalotes"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles d'ail brisées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Gingembre frais, pelé et tranché",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "gingembre moulu séché (5 g)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Graines de fénugreek",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "Fils de safran"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Korarima (Cardamome éthiopien) ou gousses de cardamome noir, graines seulement",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "Cardamome vert (la moitié du montant)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Noix de muscade",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Basilic séché ou bésobela éthiopien (basilic sacré)",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "Origan séché"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire fondre le beurre lentement",
      "inputs": [
        "ing_01"
      ],
      "outputState": "melted_butter",
      "instructions": "Placez le beurre dans une casserole à fond lourd à feu doux. Laisser fondre doucement sans remuer. À mesure qu'elle fond, une mousse blanche s'élèvera à la surface, ce sont les protéines du lait qui commencent à se séparer de la matière grasse du beurre. Continuer à chauffer à feu très doux, ne jamais remuer, jusqu'à ce que tout le beurre soit entièrement liquide et qu'une bulle douce et régulière apparaisse. Le but à ce stade est la fusion douce, pas le brunissement. Ne vous précipitez pas avec une chaleur élevée — les solides de lait ont besoin de temps pour se séparer proprement de la graisse.",
      "visualCue": {
        "primaryTarget": "Beurre d'or entièrement liquide avec un capuchon blanc en mousse à la surface et une couche claire et scintillante de graisse pure visible en dessous. Doux et paresseux bulles. Pas d'éblouissements.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est partiellement fondu — certains encore en morceaux solides, l'émulsion tient encore, et la graisse n'a pas séparé des solides de lait.",
            "action": "Réduisez encore la chaleur et soyez patient. Une chaleur plus élevée fera brunir les solides de lait avant que les aromatiques puissent infuser."
          },
          {
            "state": "Perfect",
            "description": "Entièrement fondu, bouchon en mousse douce sur le dessus, graisse jaune clair en dessous, paresseux doux bouillonnement sans agression. La cuisine sent la laiterie chaude.",
            "action": "Ajoutez maintenant les aromatiques alors que la température est toujours gérable et la graisse est dans un état idéal pour la perfusion lente."
          },
          {
            "state": "Overdone",
            "description": "Le beurre a déjà commencé à brunir — les solides de lait au fond sont en train de bronzer, et la graisse sent la noix et la grillée plutôt que neutre.",
            "action": "Réduire immédiatement la chaleur. Certains brunissements est acceptable et ajoute une dimension de noix, mais trop fera le goût de nitre kibbeh brûlé plutôt que propre et doré."
          }
        ]
      },
      "feelCue": "Écoutez le beurre — quand il est complètement fondu et à peine mijoté, il devrait sonner comme un murmure tranquille, pas un étourdissement. Le moment où il commence à sonner comme de l'huile de cuisson, la chaleur est trop élevée."
    },
    {
      "nodeId": "step_2",
      "action": "Aromates infusés",
      "inputs": [
        "melted_butter",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "infused_butter",
      "instructions": "Ajouter l'oignon, l'ail, le gingembre, les graines de fénugreek, le curcuma, le korarima, la cannelle, la muscade et le basilic séché directement au beurre fondu. L'ajout des aromatiques augmentera considérablement le bouillonnement, l'eau dans les ingrédients frais commencera à s'évaporer. Maintenir le feu très bas et laisser le mélange mijoter et infuser pendant 30 à 40 minutes. Mélanger une ou deux fois, mais laisser autrement sans gêne. Pendant ce temps, l'oignon et l'ail s'adoucissent lentement, se flétrissent et commencent à devenir dorés aux bords, tandis que la graisse devient un jaune d'or profond et saturé du curcuma et des épices infusées.",
      "visualCue": {
        "primaryTarget": "Après 30 minutes : le beurre a tourné un jaune d'or profond, les morceaux d'oignon sont doux et translucides avec des bords dorés, et la graisse est parfumée avec un arôme complexe, chaud et épicé. Les graines de fenugrec ont légèrement obscurci.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Seulement 10 minutes d'infusion — le beurre est encore jaune pâle, les oignons sont crus et blancs, et les épices n'ont pas encore libéré leurs huiles dans la graisse. L'odeur est brute et nette.",
            "action": "Continuer à infuser à feu doux. La complexité complète du niter kibbeh ne se développe qu'après une infusion soutenue à faible intensité de chaleur."
          },
          {
            "state": "Perfect",
            "description": "Graisse d'or profonde, oignons doux doré, la cuisine sent chaud et complexe : terreux curcuma, fleurs de cardamome, amertume fenugrec, tout équilibré et intégré dans le beurre.",
            "action": "Retirer du feu, ajouter du sel et filtrer immédiatement à travers un tamis à mailles fines doublé d'une nappe de fromage ou d'une nappe fine."
          },
          {
            "state": "Overdone",
            "description": "Les morceaux d'oignon sont brun foncé au noir, les graines de fénugreek sont très foncées, et le beurre sent acre et amer. Les solides de lait au fond de la poêle sont brûlés.",
            "action": "La souche immédiatement — la graisse elle-même peut être encore utilisable si les solides n'ont pas complètement carbonisé, mais goûtent soigneusement. Un niter kibbeh légèrement amer est utilisable en petites quantités dans les ragoûts où le berbère le masquera."
          }
        ]
      },
      "feelCue": "Inclinez légèrement la poêle et regardez la graisse loin des arômes mousseux — il devrait être clair, l'or profond-ambre, la couleur du miel ensoleillé. Si vous pouvez le voir au fond de la casserole, la clarification est complète. S'il semble laiteux ou opaque, plus de temps est nécessaire."
    },
    {
      "nodeId": "step_3",
      "action": "Poignée",
      "inputs": [
        "infused_butter",
        "ing_11"
      ],
      "outputState": "strained_niter_kibbeh",
      "instructions": "Mettre un tamis à mailles fines doublé d'une double couche de cheesewet ou d'un chiffon de mousseline propre sur un bol ou un pot thermofuge. Ajouter le sel dans la poêle et remuer une fois. Versez lentement le beurre infusé dans le tamis, en laissant la gravité faire le travail — ne pressez pas sur les solides. La graisse tendue devrait passer par clair et doré. Jeter les solides: toute la saveur qu'ils devaient donner est maintenant dans la graisse. Laisser refroidir légèrement le niter kibbeh avant de déguster.",
      "visualCue": {
        "primaryTarget": "Le niter kibbeh traverse le tamis comme un liquide d'or profond et cristallin sans solides ni trouble laiteux. Il devrait être entièrement translucide. Quand il refroidit légèrement, il ressemblera à de l'ambre liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La graisse tendue est laiteuse et opaque — les solides de lait sont passés à travers le tissu, ce qui indique que le tissu est trop grossier ou que la graisse a été poussée à travers plutôt que drainée passivement.",
            "action": "Retirez-vous à travers un tissu plus fin, très lentement, sans presser. Niter kibbeh laiteux a une durée de conservation plus courte et une saveur moins propre."
          },
          {
            "state": "Perfect",
            "description": "Liquide doré-ambre parfaitement clair et profond qui sent les épices chaudes et le beurre. Pas de nuages, pas de solides visibles. Goûte simultanément riche, complexe et propre.",
            "action": "Verser dans un pot propre, laisser refroidir à température ambiante, sceller et réfrigérer. Il se solidifiera à une belle pâte d'or profond à la température du réfrigérateur."
          },
          {
            "state": "Overdone",
            "description": "Le linge de fromage bouché et seulement une petite quantité de graisse s'est égouttée à travers — le reste est assis dans le linge refroidi et commence à solidifier avant toute déformation.",
            "action": "Réchauffer la masse solidifiante en douceur et régénérer en liquide. Ne forcez jamais le froid à travers le tissu ou le tissu se déchirera."
          }
        ]
      },
      "feelCue": "Plongez un doigt propre dans le tibia tiède et touchez à votre langue. La première sensation devrait être la richesse en beurre, suivie immédiatement d'une floraison d'épices chaudes et en couches : curcuma terreux, cardamome floral, fenugrec faible amer. Il ne doit pas y avoir de note d'épices pointues ou crues — seulement une complexité chaude, arrondie, intégrée."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser refroidir et entreposer",
      "inputs": [
        "strained_niter_kibbeh"
      ],
      "outputState": "finished_niter_kibbeh",
      "instructions": "Verser le niter kibbeh tendu dans un pot en verre propre. Laisser refroidir à température ambiante, à découvert, jusqu'à ce qu'il tombe à 40 °C ou moins, puis sceller et réfrigérer. Le niter kibbeh réfrigéré se solidifiera en pâte d'or ferme et profonde, ce qui est exact et attendu. Utilisez une cuillère propre et sèche à chaque fois pour prévenir la contamination. Il se conserve au réfrigérateur pendant 3 mois et au congélateur pendant 6 mois. Utilisez-le partout où vous utiliserez du beurre ou de l'huile : il est transformatif en ragoûts éthiopiens, mais aussi bon au goût des œufs, en finissant le riz ou en basting de poulet rôti.",
      "visualCue": {
        "primaryTarget": "Après réfrigération : une pâte d'or profond solidifiée avec une surface lisse et légèrement cireuse. La couleur est riche en or ambré, sans taches blanches de lait solide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le nitreux kibbéh stocké alors qu'il est encore chaud — la condensation s'est formée dans le pot, et la graisse est légèrement trouble avec l'humidité piégée.",
            "action": "Verser l'eau qui s'est mise au fond du pot. La graisse est encore utilisable, mais va gâter plus vite. La prochaine fois, refroidir à la température ambiante avant de sceller."
          },
          {
            "state": "Perfect",
            "description": "Solide, lisse, d'or profond et aromatique lorsque le pot est ouvert. Scoots propres avec une cuillère. Faire fondre instantanément au contact d'une poêle chaude, libérant immédiatement l'arôme complexe d'épices.",
            "action": "Utiliser dans n'importe quelle recette éthiopienne qui appelle le niter kibbeh. Elle élève tout ce qu'elle touche."
          },
          {
            "state": "Overdone",
            "description": "Bocal vieux de plusieurs mois: la graisse est devenue rancie — elle sent aiguisée, cireuse et éteinte, comme un vieux crayon. Une odeur de rancis est distincte et immédiatement apparente.",
            "action": "Jetez. La graisse rancide ne peut pas être réhabilitée. Faire un lot frais — niter kibbeh n'est pas difficile à faire et le résultat est considérablement meilleur que la graisse vieillie."
          }
        ]
      },
      "feelCue": "Prenez un bout de doigt de kibbéh nitrique solide et réchauffez-le entre le pouce et l'index – il devrait fondre à une huile dorée soyeuse et parfumée presque immédiatement de la chaleur du corps, enrobant vos doigts dans une graisse complexe, parfumée chaudement. Si elle reste dure, la pièce est très froide; si elle est déjà liquide à température ambiante, elle n'a pas été entièrement clarifiée."
    }
  ]
};
