export default {
  "repoId": "master_german_germansoftpretzels_001",
  "parentRepoId": null,
  "slug": "german-soft-pretzels",
  "author": "ForkRecipe Kitchen",
  "title": "Brezel bavarois",
  "description": "Le Brezel bavarois définitif — un noeud en acajou, avec une croûte mince et éclatante, le ventre ambré à croquer, et la faible profondeur minérale que seul un bain de sourcils adéquat peut délivrer.",
  "cuisine": "Allemand",
  "culture": "Bavarois",
  "category": "breads",
  "tags": [
    "pain",
    "laitière",
    "bavarois",
    "bain de lie"
  ],
  "difficulty": 3,
  "activeTime": "60 min",
  "totalTime": "2 hours 30 min",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 5,
    "sour": 1,
    "bitter": 2,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de pain (protéines élevées, 13 %)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "farine tout usage (mâche légèrement plus molle)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude (32 C)",
      "ratioValue": 58,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Beurre non salé (doublé)",
      "ratioValue": 5,
      "defaultUnit": "%",
      "substitutions": [
        "huile neutre"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sirop de malt d'orge",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": [
        "sucre brun"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Base",
      "name": "Lys de qualité alimentaire (NaOH, solution à 3 %)",
      "ratioValue": 4,
      "defaultUnit": "tbsp per liter water",
      "substitutions": [
        "Solution de bicarbonate de soude (résultat plus faible)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel de bretzel",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": [
        "Sel de mer flocé",
        "sel casher"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "brezel_dough",
      "instructions": "Mélanger la farine, le sel, la levure et le sirop de malt. Ajouter l'eau tiède et mélanger à une pâte chaotique, puis ajouter le beurre ramolli. Agenouillez à la main ou supportez le mélangeur pendant 8-10 minutes jusqu'à ce que la pâte soit lisse, ferme et légèrement collante. La pâte de bretzel est plus rigide que la pâte à pain — la faible hydratation (58 %) crée la mâche. Formez une boule, huilez légèrement, couvrez et laissez fermenter à température ambiante pendant 60 minutes jusqu'à ce qu'il doublonne approximativement.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte ferme et non collante avec une surface lisse et tendue. Plus rigide que la pâte à pizza.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours rugueux et légèrement collant. Larmes lorsqu'elles sont étirées plutôt qu'étirées en douceur.",
            "action": "Agenouillez encore 3-4 minutes. Le beurre a besoin de plus de temps pour s'intégrer."
          },
          {
            "state": "Perfect",
            "description": "Lisse comme du cuir, assez ferme pour tenir sa forme, à peine collante. Revenez immédiatement quand vous avez sauté.",
            "action": "Couverture et ferment en vrac 1 heure à température ambiante."
          },
          {
            "state": "Overdone",
            "description": "Serré et ressortant agressivement. Très sec au toucher.",
            "action": "Mouiller légèrement les mains et continuer à pétrir pour restaurer l'humidité. Repos couvert 10 minutes."
          }
        ]
      },
      "feelCue": "La pâte à bronzer doit être nettement plus ferme que la pâte à pain sandwich, comme un lobe d'oreille ferme. Si elle est aussi douce que la focaccia, elle sera trop fragile après le bain de lys."
    },
    {
      "nodeId": "step_2",
      "action": "Forme",
      "inputs": [
        "brezel_dough"
      ],
      "outputState": "shaped_brezels",
      "instructions": "Divisez la pâte en 8 portions égales (environ 90 g chacune). Travaillant un à la fois, rouler chaque portion dans une corde de 60 cm qui est plus épaisse au centre et les touches aux extrémités. Le centre doit être de 2,5 cm d'épaisseur; les extrémités, 5 mm. Traverser les extrémités deux fois pour former une torsion, puis plier la torsion sur le ventre du bretzel. Appuyez fermement sur les extrémités pour adhérer. Placer sur des plateaux parcheminés. Refroidissement à découvert au réfrigérateur pendant 30 minutes — les bretzels froids tiennent mieux leur forme à travers le bain de sourcils.",
      "visualCue": {
        "primaryTarget": "Une forme classique de bretzel avec un ventre gras prononcé et des bras fins et bien collés. L'intérieur du noeud doit être tendu, pas lâche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La corde est d'épaisseur uniforme de bout en bout. La boucle est floppy et les bras ne adhèrent pas fermement.",
            "action": "Re-roulez vers les extrémités. Appuyez fermement sur les bouts du bras dans le ventre — les humidifier légèrement pour aider à l'adhésion."
          },
          {
            "state": "Perfect",
            "description": "Gros ventre arrondi. Les bras collés croisent dans une torsion serrée et s'allongent à plat. La forme tient sous un robinet doux.",
            "action": "Réfrigérer 30 minutes avant de tremper dans la lysse."
          },
          {
            "state": "Overdone",
            "description": "Les bras sont trop fins — moins de 3 mm. Ils seront cloqués et se briseront potentiellement dans le bain de sourcils.",
            "action": "Combiner deux pièces laminées et reformer à partir de zéro."
          }
        ]
      },
      "feelCue": "Le ventre de la bretzel doit se sentir comme une petite saucisse — plombée, tendue et uniforme. Si les extrémités se sentent aussi épaisses que le centre, la silhouette classique du bretzel est perdue."
    },
    {
      "nodeId": "step_3",
      "action": "Blanch",
      "inputs": [
        "shaped_brezels",
        "ing_07"
      ],
      "outputState": "lye_dipped_brezels",
      "instructions": "SÉCURITÉ: Portez des gants en caoutchouc et une protection oculaire lors de la manipulation de la lysse. Préparer une solution de 3 % de lie (30 g de NaOH par litre d'eau froide — ajouter la lie à l'eau, jamais inverser). Passer chaque bretzel réfrigéré pendant 30 secondes, tourner une fois, puis soulever avec une cuillère à fentes et égoutter brièvement. Placer sur un rack sur un plateau parcheminé. Noter chaque ventre avec une lame ou un rasoir pointu en une seule barre oblique de 5 mm de profondeur. Scatter sel de bretzel. Alternativement, utiliser du bicarbonate de soude : dissoudre 60 g de bicarbonate de soude dans 1 litre d'eau et tremper pendant 1 minute.",
      "visualCue": {
        "primaryTarget": "Après le trempage, les bretzels passent du blanc à un léger beige-gris translucide. La surface est légèrement cireuse et mate.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours blanc et pâteux à l'aspect du retrait. Aucun changement de surface visible.",
            "action": "Augmenter le temps de plongée à 45 secondes. La solution peut être plus faible que 3%."
          },
          {
            "state": "Perfect",
            "description": "La surface devient légèrement translucide, légèrement lissée et mate gris beige. La pâte n'a pas gonflé ou dissous à la surface.",
            "action": "Mettre sur le rack, le score, le sel et cuire en 15 minutes."
          },
          {
            "state": "Overdone",
            "description": "La surface a l'air gommée, mouillée ou pochée. La toux peut commencer à se dissoudre.",
            "action": "Réduisez le temps de trempe — vous avez peut - être utilisé une solution trop concentrée. Faire cuire de toute façon; l'intérieur ira bien."
          }
        ]
      },
      "feelCue": "Le bretzel trempé dans les lys se sent légèrement visqueux et ferme — manipulez-le soigneusement avec des gants. La surface a une qualité fraîche et lisse, contrairement à toute autre pâte à pain."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "lye_dipped_brezels"
      ],
      "outputState": "finished_brezels",
      "instructions": "Cuire au four préchauffé 220 C (425 F) avec de la vapeur (ajouter une casserole d'eau bouillante au sol du four) pendant 14 à 18 minutes jusqu'à ce qu'elle soit profondément acajou-brun avec une croûte brillante et craquelée. Ne pas ouvrir le four dans les 8 premières minutes. Les bretzels vont de blond à ambre en acajou dans une fenêtre étroite — regardez à partir de 12 minutes.",
      "visualCue": {
        "primaryTarget": "Deep, acajou-brun partout — la couleur du caramel sombre — avec une surface brillante et craquelée le long de la partition et naturellement fend le ventre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Blond doré, pas brun. Doucement et grinçant au toucher. Pas de craquelure visible.",
            "action": "Continuer la cuisson. Les bretzels sous-cuits sont tendres tout au long — ils manquent de la croûte fragile qui définit le Brezel."
          },
          {
            "state": "Perfect",
            "description": "Riche acajou-brun avec un miroir-comme brillant sur le ventre et la croûte. Le score s'est ouvert dans une couture dorée et mâcheuse. Tapez sur le fond, ferme et sec.",
            "action": "Retirer du four. Servir dans les 20 minutes pour un contraste maximum de croûte."
          },
          {
            "state": "Overdone",
            "description": "Noir ou très foncé avec une odeur amère brûlée au bout mince du bras.",
            "action": "Coupez les bouts noircis. Le ventre sera encore comestible. Réduire la température du four de 10 °C la prochaine fois."
          }
        ]
      },
      "feelCue": "À l'état frais du four, la croûte doit se sentir aussi tendue et fragile qu'une mince coquille de caramel. Le ventre en dessous est doux et cédant."
    }
  ]
};
