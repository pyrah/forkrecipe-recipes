export default {
  "repoId": "master_american_coldbrewconcentrate_001",
  "parentRepoId": null,
  "slug": "cold-brew-concentrate",
  "author": "ForkRecipe Kitchen",
  "title": "Cold Brew Concentrate",
  "description": "Du café à une seule origine grossièrement broyé dans de l'eau froide pendant 12 à 16 heures, l'extraction lente tire le chocolat, les fruits et le caramel du sol tout en laissant derrière eux les acides et les composés amers qui se libèrent. Le résultat est un concentré d'encre lisse à diluer au goût sur glace ou avec du lait.",
  "cuisine": "Américain",
  "culture": "Troisième vague de café",
  "category": "beverages",
  "tags": [
    "café",
    "à froid",
    "boisson",
    "concentré",
    "végétalien",
    "été",
    "caféinés"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "16 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 0,
    "sour": 1,
    "bitter": 3,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Café grossièrement moulu (fourneau moyen foncé ou léger, préférence pour une seule origine)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "mélange de rôti moyen — éviter le rôti noir qui devient froid amère"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Solvent",
      "name": "Eau filtrée à froid (ou eau à température ambiante pour une extraction plus rapide)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "eau froide du robinet qui s'est reposée toute la nuit"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "steeping_grounds",
      "instructions": "Mélanger le café grossièrement moulu et l'eau filtrée froide dans un grand pot de maçon, une presse française ou un récipient dédié à la bière froide. La mouture doit être grossière, semblable au sucre brut ou au sel de mer grossier. Les broyeurs fins sur-extraient pendant la longue pente et produisent de l'amertume. Mélanger le terrain et l'eau ensemble pour s'assurer que tous les terrains sont saturés sans poches sèches flottant sur le dessus. Couvrir le récipient et le placer au réfrigérateur (4 C / 40 F). Au-delà de 16 heures, on commence à extraire des composés astringents et amers même dans l'eau froide. 14 heures est la place douce pour la plupart des cafés.",
      "visualCue": {
        "primaryTarget": "Après 14 heures : le liquide sous le sol est un brun foncé, presque opaque et profond, presque noir dans le pot. Les terrains ont coulé au fond ou formé une rondelle flottante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est brun moyen et translucide. Les sols flottent encore activement. Moins de 10 heures.",
            "action": "Retournez au frigo. Vérifiez encore en 2-4 heures. L'extraction se produit lentement et ne peut être précipitée en remuant."
          },
          {
            "state": "Perfect",
            "description": "Liquide profond, presque noir. Quand une petite quantité est versée dans un verre, c'est un riche chocolat brun. Les terrains se sont installés ou ont formé une rondelle compacte.",
            "action": "Souchez immédiatement pour arrêter l'extraction."
          },
          {
            "state": "Overdone",
            "description": "Le liquide a une légère teinte verdâtre ou une odeur acide et nette. Ça fait plus de 18 heures.",
            "action": "Souchez immédiatement et diluez plus fortement avant de boire. Le concentré sera plus amer que l'idéal mais n'est pas inutilisable."
          }
        ]
      },
      "feelCue": "Après avoir serré quelques gouttes sur votre paume, le concentré doit se sentir légèrement plus épais que l'eau — riche et huileux, comme un mince sirop — et laisser une faible tache de café sur votre peau."
    },
    {
      "nodeId": "step_2",
      "action": "Filtrer",
      "inputs": [
        "steeping_grounds"
      ],
      "outputState": "cold_brew_concentrate",
      "instructions": "Verser les terrains abîmés dans un pot ou une bouteille propre à l'aide d'un filtre à café en papier (ou d'un chiffon de mousseline propre). Ne pressez pas ou ne pressez pas le sol — la gravité est suffisante. Extraits pressurisants huiles amères et fines particules qui nuagent et aiguisent le concentré. La filtration prendra 5-10 minutes ; la patience ici est récompensée. Une fois filtré, sceller le pot et réfrigérer. Le concentré se conserve bien pendant 2 semaines au réfrigérateur. Pour servir, diluer 1:1 avec de l'eau froide ou du lait pour une résistance standard, ou 1:2 pour quelque chose de plus doux.",
      "visualCue": {
        "primaryTarget": "Liquide clair et mahogany foncé qui permet à la lumière de passer aux bords mais qui semble presque noir à la profondeur. Pas de particules. Une surface mince et lisse, sans huile lissée ni trouble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est boueux et épais avec de fines particules. Le filtre est bouché ou la mouture était trop fine.",
            "action": "Changez le filtre en papier, versez le liquide boueux à travers un filtre frais et attendez la gravité. Ne appuyez pas."
          },
          {
            "state": "Perfect",
            "description": "Un liquide brun foncé clair, teint de joyau, s'écoule régulièrement à travers le filtre. Des odeurs de chocolat, de fruits et de café torréfié sans notes vives brûlées.",
            "action": "Sceller et réfrigérer. Étiquette avec date et taux de dilution."
          },
          {
            "state": "Overdone",
            "description": "Très sombre, presque sirupeuse. Vous avez pressé le terrain ou utilisé trop de café. Goût extrêmement concentré et amer non dilué.",
            "action": "Ceci est encore utilisable — il suffit de diluer à un rapport supérieur (1:3 ou 1:4) plutôt que la norme 1:1."
          }
        ]
      },
      "feelCue": "Le concentré fini, lorsqu'une goutte est frottée entre le pouce et l'index, devrait se sentir légèrement lissé des huiles de café naturelles — lisse et propre, pas astringent ou gritty."
    }
  ]
};
