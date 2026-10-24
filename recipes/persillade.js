export default {
  "repoId": "master_french_persillade_001",
  "parentRepoId": null,
  "slug": "persillade",
  "author": "ForkRecipe Kitchen",
  "title": "Persillade",
  "description": "Le condiment français le plus élémentaire — le persil à feuilles plates et l'ail cru haché ensemble jusqu'à ce que l'ail parfume le persil et le persil tempère l'ail, prêt à finir une cuisson, couronner un os rôti, ou disperser sur les légumes rôtis.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "sauces",
  "tags": [
    "français",
    "herbe",
    "Ail",
    "persil",
    "condiment",
    "finissage-sauce",
    "Vite"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 1,
    "sour": 0,
    "bitter": 2,
    "umami": 0,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Herb",
      "name": "Persil à feuilles plates, feuilles et tiges tendres",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "ail noir pour un résultat plus doux et plus doux"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel de mer blanc",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "sel fin"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive extra vierge (facultatif)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre non salé fondu pour un résultat plus riche"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hacher finement",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "garlic_salt_paste",
      "instructions": "Peler les gousses d'ail et les hacher très finement avec un couteau tranchant. Déposer le sel sur l'ail haché sur la planche à découper. À l'aide du côté plat du couteau du chef, frotter l'ail et le sel à travers la planche en longs coups, en avant, puis le racler avec la lame et répéter — alternant entre le hachage et le frottage. Après 2-3 minutes de ce mouvement, vous avez une pâte d'ail lisse et collante. Le sel abrade l'ail, libère son jus et décompose les parois cellulaires pour donner une saveur plus douce et plus intégrée que les morceaux crus.",
      "visualCue": {
        "primaryTarget": "Une pâte d'ivoire pâle, complètement lisse, visiblement collante, s'accrochant à l'aplat de la lame lorsqu'elle est grattée — pas de morceaux d'ail perceptibles, juste une masse translucide et scintillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est finement haché mais toujours en morceaux discrets plutôt qu'en pâte. Le sel est visible sous forme de granules blancs plutôt que dissous dans le jus d'ail.",
            "action": "Continuez le mouvement de frottis. La transformation de la menthe à la pâte prend patience mais se produit soudainement — continuez à travailler."
          },
          {
            "state": "Perfect",
            "description": "Une pâte d'ail parfaitement lisse et cohésive qui s'accroche au couteau dans un mince film translucide. Le sel s'est complètement dissous dans l'humidité de l'ail.",
            "action": "Transférer la pâte sur la planche où vous couperez le persil, ou le garder sur la même planche et ajouter le persil directement."
          },
          {
            "state": "Overdone",
            "description": "La pâte d'ail est oxydante et devient légèrement grise — vous avez passé trop de temps sur cette étape et l'ail commence à devenir dur et acride.",
            "action": "Passez immédiatement à l'étape suivante. Le persil modérera l'intensité; utilisez la persillade tout de suite plutôt que de la laisser s'asseoir."
          }
        ]
      },
      "feelCue": "Appuyez sur un bout de doigt dans la pâte — il devrait saisir votre peau légèrement et tirer loin dans une corde propre, la texture d'une colle très épaisse et lisse. Si c'est encore grincheux, gardez le frottis."
    },
    {
      "nodeId": "step_2",
      "action": "Hacher",
      "inputs": [
        "ing_01",
        "garlic_salt_paste",
        "ing_04"
      ],
      "outputState": "persillade",
      "instructions": "Pile les feuilles de persil sur la pâte d'ail sur la planche à découper. Chopez avec un mouvement de basculement, repliez le mélange vers le centre lorsque le persil s'étend vers l'extérieur. L'objectif est l'intégration, pas l'effacement: vous voulez la pâte d'ail entièrement enduite dans l'huile de persil et le persil finement haché, mais pas réduit à un mash vert humide. Continuer à couper et à plier jusqu'à ce que le mélange soit uniforme, parfumé et vert vif. Si vous utilisez de l'huile d'olive, arrosez-la sur la persillade finie et repliez-la à travers - ce qui préserve la couleur et rend la persillade plus facile à disperser.",
      "visualCue": {
        "primaryTarget": "Un mélange vif et vert vif avec du persil finement haché uniformément intégré à la pâte d'ail — pas de stries blanches d'ail non incorporé, pas de feuilles de persil restant, pas de mise en commun humide de liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grandes feuilles de persil sont encore visibles. La pâte d'ail est concentrée dans une zone, non intégrée. Le mélange sent l'ail cru et le persil brut séparément plutôt que comme un seul parfum.",
            "action": "Continuer à couper et à plier — faire glisser le mélange des bords vers le centre avec chaque trait et hacher à plusieurs reprises dans la pile."
          },
          {
            "state": "Perfect",
            "description": "La persillade est uniformément hachée et vert vif. Le levage d'une pincée libère un seul parfum intégré : lumineux, à base de plantes et pungent tout à la fois. La texture est assez sèche pour se disperser librement.",
            "action": "Utiliser immédiatement comme garniture de finition : éparpillé sur une côte de bœuf au repos, brassé dans les jus de casserole d'une sauce, ou jeté avec des champignons rôtis."
          },
          {
            "state": "Overdone",
            "description": "La persillade a été hachée si fine et depuis si longtemps qu'elle libère de l'eau verte et devient humide, couleur olive et pâte-like. Le persil commence à s'oxyder.",
            "action": "Utilisez-le immédiatement — la saveur est toujours excellente, mais la couleur et la texture ne récupéreront pas. Ne pas réfrigérer la persillade humide."
          }
        ]
      },
      "feelCue": "Prenez une petite pincée – elle devrait être légèrement collante de l'ail et des huiles libérées du persil, mais suffisamment sèche pour que les morceaux restent distincts et ne s'agrippent pas dans une boule."
    }
  ]
};
