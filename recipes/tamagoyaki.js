export default {
  "repoId": "master_japanese_tamagoyaki_001",
  "parentRepoId": null,
  "slug": "tamagoyaki",
  "author": "ForkRecipe Kitchen",
  "title": "Tamagoyaki",
  "description": "Des couches d'oeufs dashi-assaisonnés roulés dans un rectangle d'or compact — doux, délicat, et précisément discipliné. La référence d'un petit déjeuner japonais et bento box.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "eggs",
  "tags": [
    "Japonais",
    "œufs",
    "Tamagoyaki",
    "bento",
    "Petit déjeuner",
    "Dashi",
    "Emelette laminée"
  ],
  "difficulty": 3,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Oeufs (gros, frais)",
      "ratioValue": 4,
      "defaultUnit": "eggs",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Stock de Dashi (chiban dashi ou hondashi dissous dans l'eau)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Poulet léger (moins traditionnel)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sauce de soja (sukuchi léger préféré)",
      "ratioValue": 0.08,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari pour sans gluten"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Mirin (Hon-mirin, pas assaisonnement mirin-style)",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 0.08,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre (bron de riz ou tournesol)",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fouetter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "seasoned_egg_mixture",
      "instructions": "Casser les œufs dans un bol ou un grand pot de mesure. Ajouter le dashi, la sauce soja, le mirin et le sucre. À l'aide d'une paire de hachi (choppicks) ou d'une fourche maintenue à plat, couper à travers les œufs avec un mouvement de coupe plutôt que de battre — le but est un mélange entièrement combiné, sans stries sans cordes visibles de blanc d'oeuf, mais des bulles d'air minimales. La mousse dans le mélange créera des trous inesthétiques dans le rouleau fini. Verser le mélange à l'aide d'un tamis à mailles fines pour enlever les chalazae et les morceaux restants. Le mélange doit être d'or pâle, uniforme et immobile.",
      "visualCue": {
        "primaryTarget": "Un liquide doré translucide dans la cruche, de couleur uniforme, sans stries de blanc d'œuf clair et sans mousse à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries blanches d'œufs claires sont encore visibles dans le mélange jaune. Un chalazae épais et coquin encore présent. Le mélange n'est pas uniforme.",
            "action": "Continuer le mélange de coupe jusqu'à ce que les stries disparaissent. Ne pas battre vigoureusement — un résultat sans stries importe plus qu'un résultat mousseux."
          },
          {
            "state": "Perfect",
            "description": "Uniforme or pâle, complètement lisse. Presque aucune bulle à la surface. Sent doucement doux et faiblement de dashi.",
            "action": "Plongez dans un tamis si vous en avez un, puis versez-le dans une cruche à bec pour les verser de façon contrôlée."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a été vigoureusement battu et est plein de mousse — une épaisse tête mousseuse s'est formée. La surface ressemble à du cappuccino.",
            "action": "Laissez-le reposer pendant 5 minutes pour se poser, ou éjaculez la mousse avec une cuillère. Les bulles dans le mélange d'oeufs produisent des trous dans les couches d'omelette."
          }
        ]
      },
      "feelCue": "Plongez un doigt — le mélange doit être à peine plus épais que l'eau, sans collants et sans grain de sucre non dissous."
    },
    {
      "nodeId": "step_2",
      "action": "Frire",
      "inputs": [
        "seasoned_egg_mixture",
        "ing_06"
      ],
      "outputState": "first_egg_layer",
      "instructions": "Chauffer une poêle à tamagoyaki rectangulaire (ou une petite poêle antiadhésive) à feu moyen. Déposer un morceau de papier de cuisine plié dans l'huile et essuyer la poêle dans une couche mince et uniforme, sans huile de mise en commun. Verser environ un tiers du mélange d'oeufs, en inclinant la poêle pour enrober toute la surface dans une couche mince et uniforme. Attendez que la surface tourne de brillant-humide à à peine réglée et juste mate — encore légèrement humide au centre mais plus fluide. À l'aide d'un hachi ou d'une spatule plate, commencez à rouler l'omelette de l'extrémité vers vous en 3 ou 4 plis courts, en pressant chaque plis doucement mais fermement. Poussez le rouleau terminé jusqu'au bout de la casserole.",
      "visualCue": {
        "primaryTarget": "Un petit morceau d'œuf d'or serré à l'extrémité la plus éloignée de la poêle, superposé aux bords, avec un extérieur doré pâle et sans brunissement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est encore très humide et brillante lorsque le roulement commence. L'oeuf se déchire alors que vous essayez de le rouler, se repliant inégalement et l'oeuf liquide qui fuit.",
            "action": "Attendez encore. La surface doit passer de brillant-humide à juste-matte avant de rouler. Une attente de 10 secondes est la différence entre un rouleau propre et un désordre brouillé."
          },
          {
            "state": "Perfect",
            "description": "La surface est juste mise — mate, pas brillante, avec un léger coup au centre. Roule facilement sans déchirer, les couches compressant proprement dans un log soigné. Pas de brunissement visible.",
            "action": "Poussez le rouleau jusqu'à l'extrémité de la casserole et essuyez la surface exposée avec du papier huilé avant d'ajouter la partie suivante."
          },
          {
            "state": "Overdone",
            "description": "L'oeuf est entièrement fixé à une feuille sèche et ferme, sans crosse, ou pire, de couleur dorée-brun apparaissant au fond. Le rouleau est rigide lorsqu'il est plié.",
            "action": "Baissez la chaleur. Les feuilles d'oeufs secs font un tamagoyaki dur et caoutchouteux. La chaleur résiduelle dans la poêle est presque toujours suffisante – réduire la flamme à faible-moyenne."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur la bûche roulée avec une spatule — elle devrait donner doucement, comme une serviette roulée, avec un peu de ressort mais pas de dureté."
    },
    {
      "nodeId": "step_3",
      "action": "Incorporer délicatement",
      "inputs": [
        "first_egg_layer",
        "seasoned_egg_mixture"
      ],
      "outputState": "tamagoyaki_roll",
      "instructions": "Essuyez la surface exposée de la casserole avec du papier de cuisine huilé et versez dans un autre tiers du mélange d'oeufs, soulevant légèrement le rouleau existant pour laisser couler l'oeuf cru en dessous. Attendez que la nouvelle couche atteigne le même état de surface à peine fixé, juste-matte. Roulez le log entier sur la nouvelle couche — le nouvel oeuf adhère au log et construit une autre couche. Poussez le rouleau qui pousse jusqu'au bout. Répéter avec le dernier tiers du mélange d'oeufs. Chaque couche doit être mince, uniforme et à peine cuite avant de rouler afin que le rouleau reste tendre tout au long.",
      "visualCue": {
        "primaryTarget": "Un log rectangulaire croissant de couches dorées, chaque nouvelle épaisseur de construction verse — des lignes de couches visibles aux extrémités lorsqu'on les regarde du côté.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De nouvelles couches d'oeufs sont trop humides lorsqu'elles sont roulées. Le rouleau commence à se déferler parce que les couches n'ont pas suffisamment défini pour s'accrocher. L'oeuf cru fuit des coutures.",
            "action": "Attendez 5-10 secondes de plus pour chaque nouvelle coulée avant de rouler. Les couches doivent être suffisamment bien fixées pour se lier sans être cuites ainsi, elles deviennent des feuilles sèches."
          },
          {
            "state": "Perfect",
            "description": "Une bûche, même log avec des lignes de couche complètement comprimées visibles aux extrémités. Jaune doré, uniformément pâle, sans brunissement. Le rouleau tient sa forme lorsque la poêle est inclinée.",
            "action": "Retirer du feu. Le tamagoyaki termine la cuisson à partir de sa propre chaleur résiduelle."
          },
          {
            "state": "Overdone",
            "description": "L'extérieur du rouleau a développé une croûte tachetée brune du contact avec une poêle trop chaude. Le rouleau est mishapen — un côté plus épais que l'autre.",
            "action": "Réduire immédiatement la chaleur pour les couches suivantes. La façonnage dans le tapis de bambou peut sauver l'apparence mais pas la texture de tout extérieur bruni."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur la longueur du rouleau — il doit se sentir uniformément printanier sur toute sa longueur, comme une éponge douce. Les taches dures signifient des taches épaisses et surcuites à l'intérieur."
    },
    {
      "nodeId": "step_4",
      "action": "Presser",
      "inputs": [
        "tamagoyaki_roll"
      ],
      "outputState": "finished_tamagoyaki",
      "instructions": "Rouler le tamagoyaki chaud dans un tapis de sushi de bambou propre ou une feuille de film de collage, serrer doucement mais fermement dans une bille rectangulaire serrée. Plier dans les extrémités du tapis et presser pour éloigner les coins. Laisser reposer 3-5 minutes — la vapeur intérieure continue la cuisson et les ensembles de forme. Couper en rondelles de 2 à 3 cm pour révéler la section transversale en spirale à l'intérieur. Servir immédiatement ou à température ambiante.",
      "visualCue": {
        "primaryTarget": "Un rondin d'or rectangulaire ferme qui tient sa forme lorsqu'il est déballé. Les tranches révèlent une spirale propre de couches jaunes dorées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le rouleau s'aplatit et s'étend lorsque le tapis est enlevé — il n'a pas mis de vapeur et de chaleur résiduelle. Les calques se séparent en tranches.",
            "action": "Re-emballer et serrer plus fermement, puis attendre encore 3 minutes. L'intérieur a besoin de temps pour terminer la cuisson à partir de sa propre chaleur."
          },
          {
            "state": "Perfect",
            "description": "Tient une forme rectangulaire croustillante lors du déballage. Slices propres en rondelles. La spirale des couches dorées est clairement visible. L'extérieur est uniformément doré pâle, tendre et crépuscule.",
            "action": "Couper et servir dans les 30 minutes suivant la fabrication de la meilleure texture."
          },
          {
            "state": "Overdone",
            "description": "Log est très ferme avec une texture serrée, presque caoutchouteuse. Pas de sensibilité dans les couches centrales. Les tranches tiennent leur forme mais se sentent comme un oeuf comprimé dense.",
            "action": "Il est encore comestible mais surcomprimé. La prochaine fois, appuyez plus doucement et pour moins de temps — tamagoyaki devrait être tendre, pas ferme."
          }
        ]
      },
      "feelCue": "Maintenez une tranche entre deux doigts — il doit donner avec une pression douce, tendre et donnant comme un gâteau au beurre chaud, pas caoutchouteux comme un œuf dur."
    }
  ]
};
