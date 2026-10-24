export default {
  "repoId": "master_japanese_matcha_ceremonial_001",
  "parentRepoId": null,
  "slug": "matcha-ceremonial",
  "author": "ForkRecipe Kitchen",
  "title": "Cérémonial Matcha",
  "description": "Le cœur de la cérémonie du thé japonais — matcha de qualité cérémonielle tamisé fin, fouetté avec un bambou poursuite dans l'eau juste-en-dessous-boulant dans un bol de vert vif et végétal avec un chapeau de mousse fine et persistante. Douce et salée à la fois, elle goûte au champ de thé ombragé au début du printemps.",
  "cuisine": "Japonais",
  "culture": "Cérémonie de thé japonais (Chado)",
  "category": "beverages",
  "tags": [
    "boisson",
    "Japonais",
    "matcha",
    "thé",
    "végétalien",
    "Sans gluten",
    "sans produits laitiers"
  ],
  "difficulty": 2,
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
    "salty": 0,
    "sour": 0,
    "bitter": 2,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Cérémonial-grade matcha (soufflé)",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "matcha culinaire de haute qualité pour un résultat plus robuste et légèrement plus amer"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau à 75-80°C (juste à ébullition)",
      "ratioValue": 70,
      "defaultUnit": "ml",
      "substitutions": [
        "l'eau de source est idéale — l'eau du robinet fortement chlorée ternit la saveur"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Chaleur",
      "inputs": [
        "ing_02"
      ],
      "outputState": "warmed_chawan",
      "instructions": "Verser une petite quantité d'eau de 80 °C dans le chawan (boulon de thé) et le tourner autour pour préchauffer le navire. Arroser l'eau et bien sécher le bol avec un chiffon propre. Un bol froid fera chuter instantanément la température de l'eau et empêchera la mousse de se former correctement. Pendant que vous travaillez, laissez l'eau juste bouillie reposer à découvert dans la bouilloire ou une cruche pendant 2 à 3 minutes pour atteindre la température cible de 75 à 80°C — un thermomètre à lecture instantanée est utile, mais le moment où l'ébullition active s'arrête et les premières lueurs de vapeur montante s'adoucissent, vous êtes proche.",
      "visualCue": {
        "primaryTarget": "Un bol de céramique sec et chaud – touchez l'extérieur et il doit se sentir agréablement chaud, pas neutre ou froid.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bol est encore frais au toucher et l'eau chaude a été déversée trop rapidement.",
            "action": "Ajoutez encore l'eau chaude et maintenez-la dans le bol pendant 20 secondes avant de sécher."
          },
          {
            "state": "Perfect",
            "description": "L'extérieur du bol se sent constamment chaud lorsque vous le coupez dans les deux mains, et l'intérieur est complètement sec sans condensation.",
            "action": "Passer immédiatement au crible: le bol est prêt pour le matcha."
          },
          {
            "state": "Overdone",
            "description": "On a utilisé de l'eau trop chaude (toujours bouillante); le bol est incomfortablement chaud à tenir.",
            "action": "Laissez le bol refroidir à chaud-à-confortable et laissez votre eau refroidir encore une minute avant de continuer — au-dessus de 85°C devient matcha amer."
          }
        ]
      },
      "feelCue": "Coupez le bol dans les deux mains comme vous le recevriez lors d'une cérémonie de thé. La céramique doit se sentir comme une pierre chaude — présente mais douce."
    },
    {
      "nodeId": "step_2",
      "action": "Sift",
      "inputs": [
        "ing_01"
      ],
      "outputState": "sifted_matcha",
      "instructions": "Mesurer 2 g de matcha (environ une boule de chashaku ou une cuillère à café de niveau) et la passer à travers un tamis très fin directement dans le chawan sec chaud. Le Matcha s'agrippe au contact de l'humidité, et le matcha non tamisé fouetté dans l'eau produit des bosses qui flottent obstinément à la surface plutôt que de se disperser en mousse. Utilisez l'arrière d'une petite cuillère pour presser la poudre si elle résiste. Le matcha tamisé doit se déposer dans le bol comme une couche mince, uniforme, vert vif sans empiècements visibles.",
      "visualCue": {
        "primaryTarget": "Une fine poudre de couleur vert émeraude sur le sol du bol, fine comme un fard à paupières, sans croûtes blanches ou jaunes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De grands taillis sont passés par le tamis intact et s'assoient dans le bol comme de petits cailloux verts.",
            "action": "Appuyez fermement sur le tamis avec une cuillère ou utilisez une maille plus fine. Les griffes ne se dissoudront pas à l'étape du fouet."
          },
          {
            "state": "Perfect",
            "description": "Une couche uniforme, parfaitement lisse de poudre verte fine, la couleur un vert jade clair, saturé — pas de teinte jaune ou brun.",
            "action": "Ajouter immédiatement l'eau dans un cours d'eau mince et prudent."
          },
          {
            "state": "Overdone",
            "description": "La poudre a été exposée à la chaleur ou à l'humidité et a pris une teinte légèrement brunâtre.",
            "action": "Le matcha a dépassé son sommet, mais toujours buvable. Conserver tous les matcha restants scellés et réfrigérés pour ralentir l'oxydation."
          }
        ]
      },
      "feelCue": "Tapez doucement le tamis — la poudre doit tomber librement, aussi fine et sans poids que le talc. La résistance signifie que le maillage est bloqué ou que le matcha s'accroche à l'humidité."
    },
    {
      "nodeId": "step_3",
      "action": "Whisk",
      "inputs": [
        "sifted_matcha",
        "ing_02"
      ],
      "outputState": "finished_matcha",
      "instructions": "Verser l'eau à 80°C dans un cours d'eau mince et lent sur le matcha, en ciblant le côté du bol plutôt que directement sur la poudre pour éviter les éclaboussures. Prendre la chassen (volaille de bambou) et, en tenant le bol stable d'une main, fouetter dans un mouvement rapide W ou M à travers la surface — non circulaire, qui crée de grandes bulles — en déplaçant le poignet rapidement de côté en côté. fouetter pendant 20 à 30 secondes jusqu'à ce qu'une couche de mousse fine, serrée et uniforme couvre toute la surface. Le bol doit rester immobile; seul le poignet bouge. Soulevez doucement la chasse à la fin pour éviter de laisser un trou dans la mousse.",
      "visualCue": {
        "primaryTarget": "Un liquide riche et opaque vert jade avec un bouchon uniforme de mousse fine, serrée, de couleur claire qui recouvre complètement la surface et tient sans s'effondrer immédiatement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface présente de grandes bulles inégales avec des taches de liquide sombre et sans mousse visibles en dessous. Le matcha n'est pas encore complètement dissous.",
            "action": "fouetter plus rapidement et plus vigoureusement dans le mouvement W pendant encore 15 secondes, en se concentrant sur les patchs sans mousse."
          },
          {
            "state": "Perfect",
            "description": "Un chapeau complet et uniforme de petites bulles uniformes de couleur crème se trouve sur le liquide vert vif ci-dessous. Levant la chasse dessine un mince fil de mousse qui tient brièvement avant de casser. La couleur est un vert clair et saturé.",
            "action": "Mettez la chasse de côté doucement et buvez à la fois — la mousse est à son meilleur dans les 90 premières secondes."
          },
          {
            "state": "Overdone",
            "description": "La mousse s'est effondrée dans de grandes bulles plates et la surface a l'air brun verdâtre et huileuse du sursaut avec de l'eau trop chaude.",
            "action": "Boire immédiatement indépendamment — le goût n'est en grande partie pas affecté même si l'esthétique n'est pas idéale. Utilisez de l'eau plus fraîche la prochaine fois."
          }
        ]
      },
      "feelCue": "La chasse devrait se déplacer assez vite pour sentir une légère résistance du liquide — une traînée douce et enflammée, jamais un remuement lourd. Lorsque vous le soulevez, les dents devraient sortir propres, et non les fils verts épais."
    }
  ]
};
