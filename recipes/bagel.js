export default {
  "repoId": "master_american_bagel_001",
  "parentRepoId": null,
  "slug": "bagel",
  "author": "ForkRecipe Kitchen",
  "title": "New York Bagel",
  "description": "Un bagel de New York a une croûte fine et froissée du bain bouillant, légèrement brillant et tendre à l'extérieur, ce qui laisse place à un intérieur mâché et dense avec une profondeur maltée à peine sucrée. Toasted, le visage coupé caramélise en une surface croustillante et noisette qui est incomparable pour la conservation du fromage à la crème.",
  "cuisine": "Américain",
  "culture": "Ashkenazi juif-américain",
  "category": "breads",
  "tags": [
    "bagel",
    "nouveau-né",
    "bouillie",
    "cuits",
    "Petit déjeuner"
  ],
  "difficulty": 3,
  "activeTime": "50 min",
  "totalTime": "14 hr",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 2,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à haute teneur en gluten (14 % de protéines)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "farine de pain (légèrement moins croustillante)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau froide",
      "ratioValue": 55,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": [
        "levure sèche active"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sirop de malt d'orge (dough)",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": [
        "Chérie",
        "sucre brun foncé"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sirop de malt d'orge (bain bouillant)",
      "ratioValue": 15,
      "defaultUnit": "g per liter water",
      "substitutions": [
        "Chérie",
        "bicarbonate de soude (1 c. à soupe)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Tout assaisonnement / sésame / graines de pavot",
      "ratioValue": 5,
      "defaultUnit": "g per bagel",
      "substitutions": [
        "En clair"
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
        "ing_05"
      ],
      "outputState": "stiff_dough",
      "instructions": "Mélanger tous les ingrédients de la pâte dans un mélangeur de stand avec un crochet de pâte. Mélanger en bas 2 minutes pour rassembler, puis en milieu pendant 10 minutes. La pâte de Bagel est intentionnellement raide à 55 % d'hydratation, plus rigide que presque tout autre pain. La faible hydratation est ce qui crée la chapelure dense et mâcheuse caractéristique. Ajouter de l'eau seulement 1 cuillère à café à la fois si la pâte craque et ne se recoupe pas.",
      "visualCue": {
        "primaryTarget": "Une balle très raide et lisse qui n'est pas collante. Il tient fermement sa forme. La surface est légèrement mate — pas de brillant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte ne tient pas la forme d'une balle.",
            "action": "Ajouter 1 c. à thé et pétrir 3 minutes de plus. Le gluten a besoin de plus de développement dans les pâtes rigides."
          },
          {
            "state": "Perfect",
            "description": "Stiff, lisse, pas collant. Il tient une balle sans relâcher. Une petite pièce passe le test de vitre avec une certaine résistance.",
            "action": "Divisez et formez immédiatement — le ferment froid gérera le reste."
          },
          {
            "state": "Overdone",
            "description": "La toux est chaude et légèrement grasse. Résiste à façonner et à revenir agressivement.",
            "action": "Repos couvert 20 minutes au réfrigérateur."
          }
        ]
      },
      "feelCue": "La pâte Bagel est censée se sentir dure, presque comme de l'argile à modeler. S'il est doux et souple comme de la pâte à pain, il est trop humide. Il devrait offrir une résistance réelle et satisfaisante."
    },
    {
      "nodeId": "step_2",
      "action": "Forme",
      "inputs": [
        "stiff_dough"
      ],
      "outputState": "shaped_bagels",
      "instructions": "Diviser en 8 morceaux (~110 g chacun). Pour former : rouler chaque pièce dans une boule lisse, puis faire passer un doigt fariné à travers le centre. Étendez l'anneau de 3 à 4 cm de diamètre au centre – il se rétrécira. Alternativement, rouler dans une corde de 25 cm et joindre les extrémités autour de votre main, rouler la couture pour sceller. Placez sur le parchemin huilé. Couvrir et réfrigérer de 8 à 12 heures — le retard de froid développe de la saveur et consolide les bagels pour l'ébullition.",
      "visualCue": {
        "primaryTarget": "Même des anneaux avec un trou de 3-4 cm au centre. Pas de couture visible. Les anneaux sont uniformes en épaisseur tout autour.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le trou est trop petit (1-2 cm); le gluten est serré et le trou se ferme. L'épaisseur est inégale.",
            "action": "Reposez le bagel en forme 5 minutes et étirez doucement le trou plus large – il doit tenir compte du ressort du four."
          },
          {
            "state": "Perfect",
            "description": "Trou de 3 à 4 cm; anneau uniforme tout autour; couture pressée fermement; surface lisse.",
            "action": "Couvrir et réfrigérer pendant la nuit."
          },
          {
            "state": "Overdone",
            "description": "La toux a été surmenée; les larmes apparaissent à la jointure; l'anneau est maladroit.",
            "action": "Re-baller la pâte, reposer 10 minutes, et reformer."
          }
        ]
      },
      "feelCue": "L'anneau de bagel doit se sentir ferme et frais — il ne doit pas saigner ou déformer quand vous le ramassez. S'il flotte sur lui-même, il est trop chaud et humide."
    },
    {
      "nodeId": "step_3",
      "action": "Bouillir",
      "inputs": [
        "shaped_bagels",
        "ing_06"
      ],
      "outputState": "boiled_bagels",
      "instructions": "Porter un grand pot d'eau à ébullition. Ajouter le sirop de malt d'orge. Faire bouillir les bagels 2 bagels à la fois : 30 secondes de côté pour une croûte fine et douce ; 60 secondes de côté pour une croûte plus épaisse et plus mâcheuse (style New York). Les bagels flotteront presque immédiatement à la surface du ressort du four — c'est exact. Retirer avec une cuillère à fentes, égoutter brièvement, puis rouler dans les garnitures ou laisser uni. Placer sur une grille en fil sur un plateau de cuisson.",
      "visualCue": {
        "primaryTarget": "Les bagels flottent et soufflent légèrement dans l'eau bouillante. Après ébullition, la surface est brillante et légèrement ridée, comme le cuir poli humide. La couleur est encore pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les bagels ont coulé et n'ont pas flotté; la surface reste mate; ils ressemblent à des beignets denses après l'ébullition.",
            "action": "Ils ont probablement surproofé et perdu la structure. Faire bouillir 20 secondes de plus et cuire — ils seront encore comestibles."
          },
          {
            "state": "Perfect",
            "description": "Floté dans les 30 secondes; surface lustrée, légèrement collante après ébullition; tenir fermement la forme de l'anneau.",
            "action": "Haut immédiatement et faites cuire."
          },
          {
            "state": "Overdone",
            "description": "Trop longtemps bouillie; la surface est ridée et arrosée; les bagels se sentent lourds et mouillés.",
            "action": "Égoutter bien sur un rack. Pat sèche. Ils feront cuire plus dense que l'idéal."
          }
        ]
      },
      "feelCue": "Soulevez un bagel bouilli — il devrait se sentir nettement plus ferme et plus dense qu'avant d'ébullition. La peau a été réglée par l'eau chaude. Il devrait tenir sa forme d'anneau fermement dans vos mains."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "boiled_bagels",
        "ing_07"
      ],
      "outputState": "finished_bagels",
      "instructions": "Préchauffer le four à 240 °C (465 °F) avec une pierre ou une plaque de cuisson lourde à l'intérieur. Cuire les bagels bouillis et surmontés directement sur la surface chaude pendant 18 à 22 minutes, en tournant une fois à la marque de 10 minutes, jusqu'à ce que la surface soit profonde, voire dorée et que la croûte se sent ferme lorsqu'elle est tapée.",
      "visualCue": {
        "primaryTarget": "Deep, même doré-brun sur le dessus, avec toutes les graines grillées et parfumées. La croûte est ferme et légèrement brillante, non mate ni blonde.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Couleur blond pâle; la croûte est douce lorsqu'elle est pressée; les graines semblent toujours crues.",
            "action": "Retournez 4 minutes de plus. La croûte se met tard dans le four."
          },
          {
            "state": "Perfect",
            "description": "Même brun doré; les graines sont grillées à un léger rôti; le bagel se sent ferme et rigide lorsqu'il est pressé; sonne creux sur le fond.",
            "action": "Laisser refroidir sur une grille 10 minutes avant de trancher."
          },
          {
            "state": "Overdone",
            "description": "Très brun foncé; graines carbonisées; odeur amère.",
            "action": "Supprimer immédiatement. L'intérieur est probablement encore excellent. Couper et racler les graines très foncées."
          }
        ]
      },
      "feelCue": "Un bagel fini est remarquable pour sa densité — il devrait se sentir beaucoup plus lourd qu'il ne semble, comme une petite rondelle de hockey. Pressez-le : la croûte doit repousser avec une résistance réelle mais ne pas craquer sous la pression normale des mains."
    }
  ]
};
