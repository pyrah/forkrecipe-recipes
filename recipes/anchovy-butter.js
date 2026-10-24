export default {
  "repoId": "master_french_anchovy_butter_001",
  "parentRepoId": null,
  "slug": "anchovy-butter",
  "author": "ForkRecipe Kitchen",
  "title": "Beurre d'anchois",
  "description": "Beurre à température ambiante battu avec des anchois salants, du zeste de citron et du persil dans un beurre composé salé — fondu sur un steak, il disparaît dans la viande dans une vague d'umami océanique.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "condiments",
  "tags": [
    "Anchois",
    "Beurre composé",
    "français",
    "umami",
    "savoureux",
    "condiment"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "1 hr 15 min",
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
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Beurre non salé (à température ambiante)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Filets d'anchois salins (rincés, finement hachés)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "anchois à huile de bonne qualité, drainés",
        "pâte d'anchois (utiliser les deux tiers du poids)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Citrus",
      "name": "Zeste de citron (finement râpé)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Jus de citron",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Persil à feuilles plates (très finement haché)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "ruches",
        "estragon"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Échalote (très finement hachée)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "1 petite gousse d'ail hachée à la pâte"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Heat",
      "name": "Poivre noir fraichement craqué",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation",
      "inputs": [
        "ing_02"
      ],
      "outputState": "minced_anchovies",
      "instructions": "Si vous utilisez des anchois salins, séparer les filets sous l'eau froide courante, brosser le sel avec vos doigts et enlever la colonne vertébrale centrale. Pat complètement sec. Sur une planche à découper sèche, émincer finement les filets d'anchois jusqu'à ce qu'ils forment un quasi-collé — vous ne voulez pas de gros morceaux, car les morceaux dans le beurre fini auront un goût écrasant plutôt que intégré. Utilisez le plat du couteau pour frotter la menthe contre la planche en longs coups, en faisant glisser la pâte pour créer une purée complètement lisse et homogène.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, brillante, brun foncé sans fibre visible ni gros morceaux, qui ressemble à une pâte de viande concentrée et qui colle au couteau dans un film mince et uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux visibles d'anchois restent — vous pouvez voir la fibre individuelle du filet. Ils créeront des points chauds d'intensité dans le beurre fini.",
            "action": "Continuer à hacher et à frotter avec le plat du couteau jusqu'à ce que la pâte soit complètement lisse et homogène."
          },
          {
            "state": "Perfect",
            "description": "Une pâte brune uniforme, collante et brillante qui sent intensément la mer, salée, profondément salée, fermentée. Il s'accroche à la lame dans une couche mince et uniforme.",
            "action": "Réserver et procéder à l'adoucissement du beurre."
          },
          {
            "state": "Overdone",
            "description": "Ce n'est pas vraiment possible au stade mince — l'anchois bien travaillé est toujours le bienvenu. Il suffit de s'assurer que la planche et le couteau sont secs ou la pâte deviendra aqueuse.",
            "action": "La planche sèche et continue — l'eau dans la pâte interfère avec l'émulsion dans le beurre."
          }
        ]
      },
      "feelCue": "La pâte doit être lisse et légèrement collante entre les doigts sans texture fibreuse. Il frotte sur le tableau comme une pâte, laissant un léger et brillant sentier."
    },
    {
      "nodeId": "step_2",
      "action": "Crème",
      "inputs": [
        "ing_01",
        "minced_anchovies",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "compound_butter_mixture",
      "instructions": "Battre le beurre à température ambiante dans un bol avec une cuillère en bois ou dans un mélangeur de stand jusqu'à ce qu'il soit pâle, moelleux et extensible. Ajouter la pâte d'anchois, le zeste de citron, le jus de citron, le persil, l'échalote et le poivre. Battre vigoureusement jusqu'à ce que tous les ingrédients soient complètement et uniformément incorporés — il ne reste pas de stries visibles d'anchois ou de persil. Le beurre doit être uniforme, vert olive pâle, tacheté de persil plus foncé et sentant enivrant : beurre, bruine, herbes et agrumes.",
      "visualCue": {
        "primaryTarget": "Beurre composé vert olive pâle, de couleur uniforme, sans stries foncées d'anchois ou de taches irrégulières d'herbe. Fumé et léger d'être battu avec de l'air.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries d'anchois sombres sont visibles dans le beurre pâle, et le persil n'est pas encore uniformément distribué. La saveur sera inégale — des morsures alternant trop poissonneuses et trop molles.",
            "action": "Continuer à battre jusqu'à ce qu'aucune stries ne subsiste et que la couleur soit parfaitement uniforme."
          },
          {
            "state": "Perfect",
            "description": "Un beurre uniforme, moelleux et vert-herbe pâle. Chaque fourchette aura le même goût: riche, umami-chargé, lumineux avec du citron, et juste légèrement briny. Elle sent la vie: saveur, herbes, agrumes.",
            "action": "Procédez à la formation et au refroidissement."
          },
          {
            "state": "Overdone",
            "description": "Sur-battant avec un mélangeur, le beurre s'est divisé en miettes grasses et liquide aqueux du jus de citron — l'émulsion s'est cassée.",
            "action": "Rassemblez le mélange sur une feuille de film de collage et roulez dans un log de toute façon; la texture s'améliorera à mesure qu'elle refroidit et que le beurre se solidifie autour des herbes."
          }
        ]
      },
      "feelCue": "Le beurre doit se sentir léger et aéré lorsqu'il est pressé à l'arrière d'une cuillère — il doit se développer immédiatement et se propager sans résistance, comme le fromage à la crème ramolli."
    },
    {
      "nodeId": "step_3",
      "action": "Forme",
      "inputs": [
        "compound_butter_mixture"
      ],
      "outputState": "rolled_anchovy_butter",
      "instructions": "Poser une feuille de pellicule ou de parchemin sur une surface propre. Déposer le beurre composé en forme brute le long du tiers inférieur du film. Pliez le film sur le beurre et utilisez le bord d'un racleur ou d'une règle de banc pour le compacter et le rouler dans un cylindre lisse, même d'environ 3 cm de diamètre. Tordre les extrémités. Réfrigérer pendant au moins 1 heure jusqu'à ce qu'il soit ferme ou congeler pour un stockage plus long. La forme en rondins vous permet de couper des pièces précises de beurre à servir.",
      "visualCue": {
        "primaryTarget": "Un cylindre propre, lisse, ferme, enveloppé dans un film de collage — vert olive flanqué d'herbe visible dans toute la section lorsqu'il est coupé. Assez ferme pour trancher proprement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est doux et ne tiendra pas sa forme — encore chaud ou pas assez longtemps réfrigéré. Le log sag et se déforme sous son propre poids.",
            "action": "Réfrigérer encore 30 minutes. Le beurre doit être complètement froid avant de servir pour maintenir sa forme sur une surface chaude."
          },
          {
            "state": "Perfect",
            "description": "Ferme, lisse, et trancheable en propre, même les pièces qui tiennent leur forme pendant un moment sur la plaque avant de fondre lentement. Le visage coupé est uniformément coloré et tacheté d'herbe.",
            "action": "Couper en pièces de 1 cm et servir immédiatement sur le steak grillé, le poisson ou les légumes chauds."
          },
          {
            "state": "Overdone",
            "description": "Le beurre a été gelé et est dur à roc — couper la pièce, plutôt que de la couper proprement.",
            "action": "Transférer au réfrigérateur 30 minutes avant de servir pour adoucir à la consistance trancheuse."
          }
        ]
      },
      "feelCue": "La bûche réfrigérée doit se sentir ferme et légèrement résistante lorsque vous appuyez sur l'extérieur du film — elle doit denteler légèrement mais ressortre. Si elle tombe immédiatement sous une pression douce, il faut plus de temps au réfrigérateur."
    },
    {
      "nodeId": "step_4",
      "action": "Finition",
      "inputs": [
        "rolled_anchovy_butter"
      ],
      "outputState": "finished_anchovy_butter",
      "instructions": "Pour servir, tranchez la bûche en pièces de 1 cm directement du réfrigérateur et placez un ou deux sur de la viande, du poisson ou des légumes fraîchement grillés ou séchés. La chaleur résiduelle de la nourriture fait fondre le beurre dans un bassin lent et brillant, puisant le parfum anchois-lémon-herbe dans un nuage de vapeur. Le beurre d'anchois conserve, emballé, pendant 1 semaine au réfrigérateur ou 2 mois au congélateur. Couper les pièces de monnaie congelées et les retourner au congélateur.",
      "visualCue": {
        "primaryTarget": "Une pièce de beurre vert-brun tacheté ferme, placée sur un steak juste-resté, commençant à fondre aux bords dans une piscine brillante et chatoyante. La chaleur emporte de la vapeur qui sent le beurre, la mer et les herbes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pièce de beurre a été placée sur des aliments tièdes et est assise solide et non fondue, ne s'intégrant pas à la nourriture en dessous.",
            "action": "La nourriture n'est pas assez chaude. S'assurer que la protéine vient de sortir de la grille ou de la poêle — une chaleur résiduelle supérieure à 50 C est nécessaire pour faire fondre le beurre dans une glaçure."
          },
          {
            "state": "Perfect",
            "description": "La pièce fond en 30 à 60 secondes sur un steak au repos chaud, d'abord à la base, puis s'étend à la surface dans un glaçage aromatique vert doré. L'anchois disparaît dans la viande, ne laissant qu'une profondeur savoureuse profonde.",
            "action": "Servir immédiatement avec le beurre encore liquide et brillant."
          },
          {
            "state": "Overdone",
            "description": "Placé sur des aliments trop chauds (toujours cuits ou juste hors d'un four de 250 °C), le beurre s'est séparé en huile et en solides et s'est évaporé plutôt que de se mettre en commun gracieusement.",
            "action": "Laisser reposer la protéine pendant 2 à 3 minutes avant d'ajouter la pièce de beurre."
          }
        ]
      },
      "feelCue": "Lorsque la pièce de beurre frappe un steak correctement reposé, vous devriez sentir la chaleur immédiate à travers les pinces — et regarder les bords commencer à s'adoucir et à briller en quelques secondes. Si rien ne se passe dans les 30 premières secondes, la nourriture n'est pas assez chaude."
    }
  ]
};
