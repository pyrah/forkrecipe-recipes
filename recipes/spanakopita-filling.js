export default {
  "repoId": "master_greek_spanakopita-filling_001",
  "parentRepoId": null,
  "slug": "spanakopita-filling",
  "author": "ForkRecipe Kitchen",
  "title": "Spanakopita Remplissage",
  "description": "Le remplissage salé au cœur de chaque grande spanakopita — épinards flétris, désossé, émietté, feta, oeuf, pétoncle, et l'aneth se mirent ensemble dans un mélange riche et briny qui reste humide à l'intérieur de la pâtisserie phyllo.",
  "cuisine": "Grec",
  "culture": "Grec",
  "category": "proteins",
  "tags": [
    "grec",
    "épinards",
    "Féta",
    "phyllo",
    "remplissage",
    "végétarien"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 1,
    "bitter": 2,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "épinards frais, tiges enlevées (ou épinards bébés)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "Betteraves argentées",
        "épinards congelés (dégelés et pressés)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Fromage feta, émietté (non pré-brûlé — acheter un bloc)",
      "ratioValue": 50,
      "defaultUnit": "%",
      "substitutions": [
        "ricotta salata (moins salée)",
        "Fromage de chèvre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Gros œufs",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Échalons (oignons de printemps), tranchés finement",
      "ratioValue": 15,
      "defaultUnit": "%",
      "substitutions": [
        "Échalotes",
        "ruches"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Diluant frais, haché finement",
      "ratioValue": 8,
      "defaultUnit": "%",
      "substitutions": [
        "frondes de fenouil"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 8,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Poivre noir fraîchement moulu",
      "ratioValue": 0.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Noix de muscade fraîchement râpée",
      "ratioValue": 0.2,
      "defaultUnit": "%",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Wilt et égoutter les épinards",
      "inputs": [
        "ing_01"
      ],
      "outputState": "wrung_dry_spinach",
      "instructions": "Chauffer une grande poêle sèche à feu vif jusqu'à ce qu'elle soit très chaude. Ajouter les épinards frais dans de grandes poignées — il s'effondrera considérablement, réduisant à une fraction de son volume original en environ 1-2 minutes par lot. Mélanger et presser les épinards pour encourager le flétrissement. Ne pas ajouter d'eau ou d'huile à ce stade; vous voulez que les feuilles s'évaporent dans leur propre humidité et abandonnent le plus de liquide possible. Une fois que tous les épinards se sont flétris, transférez-le dans une calandre et laissez-la refroidir pour la manipuler. Puis prenez des poignées et pressez - les avec une force maximale sur l'évier, en les enfilant comme un chiffon mouillé. Le but est d'extraire chaque goutte d'eau possible. Les épinards secs devraient se sentir presque gritty dans votre main, pas humide. Puis couper les épinards en morceaux d'environ 1 cm.",
      "visualCue": {
        "primaryTarget": "Une masse d'épinards à texture rugueuse, vert foncé, qui libère à peine tout liquide lorsqu'elle est pressée — les harnais auraient dû enlever tellement d'humidité que la pile semble sombre et compacte, non brillante ni humide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épinards sont flétris, mais ils libèrent toujours de l'eau lorsqu'ils sont pressés — la pile est mouillée et lourde, et le liquide se trouve sous la planche.",
            "action": "Encore une fois en petites poignées avec plus de force. Cette étape ne peut pas être précipitée ou compromise — l'excès d'humidité est le plus grand ennemi de la spakopita croustillante."
          },
          {
            "state": "Perfect",
            "description": "Ténébreux, cohésifs et à peine humides — les morceaux hachés se séparent les uns des autres sans accroupir, et presser fermement la pile ne donne que quelques gouttes de liquide.",
            "action": "Procéder à la combinaison. Les épinards secs signifient du phyllo croustillant."
          },
          {
            "state": "Overdone",
            "description": "Les épinards ont été pressés de manière si agressive qu'ils se sont décomposés en pâte et la plupart de la texture de légumes frais a disparu.",
            "action": "Ceci est acceptable — la texture sera plus homogène mais la saveur est la même. Continuez."
          }
        ]
      },
      "feelCue": "Prenez une grande poignée et pressez les deux mains aussi fort que possible. Si plus d'une cuillère à soupe de liquide vert s'écoule, pressez à nouveau. Le wad fini dans votre main devrait être comme de l'argile sèche — dense, compact, à peine humide. C'est l'étape la plus importante de toute la recette."
    },
    {
      "nodeId": "step_2",
      "action": "Choux verts",
      "inputs": [
        "ing_04",
        "ing_06"
      ],
      "outputState": "softened_scallions",
      "instructions": "Dans une petite poêle, chauffer l'huile d'olive à feu moyen. Ajouter les pétoncles tranchés et cuire 3 à 4 minutes, en remuant occasionnellement, jusqu'à ce qu'ils soient flétris et sucrés, mais non dorés. Le but est de retirer le bord brut de la saveur de pétoncle — le pétoncle brut dans un remplissage cuit au four peut être aiguisé et piquant, tandis que le pétoncle cuit brièvement devient sucré et intégré. Retirer du feu et laisser refroidir légèrement. Les pétoncles continueront de s'assouplir dans la chaleur résiduelle. Ils devraient avoir l'air translucide et sentir doux et doux.",
      "visualCue": {
        "primaryTarget": "Des anneaux de pétoncle translucides et brillants, sans brunissement, sentant doux et doux plutôt que vifs et crus — une transformation complète de leur état brut.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pétoncles ont encore une morsure brute et ne sont que légèrement ramollis — ils goûteront piquantment à l'oignon brut dans le remplissage fini.",
            "action": "Cuire encore 2 minutes. Le but est la translucidité et la douceur, pas la caramélisation."
          },
          {
            "state": "Perfect",
            "description": "Translucide, doux et légèrement sucré. Ils s'effondrent facilement lorsqu'ils sont pressés contre la casserole. L'huile qu'ils ont cuite dans des odeurs d'allium sucré.",
            "action": "Retirer du feu et refroidir avant d'ajouter au remplissage."
          },
          {
            "state": "Overdone",
            "description": "Les pétoncles ont bruni et ont pris une douceur caramélisée qui peut surpasser le remplissage délicat.",
            "action": "Un peu de brunissement n'est pas catastrophique — continuez, sachant que le remplissage sera légèrement plus doux que prévu."
          }
        ]
      },
      "feelCue": "Appuyez sur un anneau de pétoncle avec l'extrémité d'une spatule — il devrait donner instantanément et complètement sans résistance ferme. L'huile dans la poêle devrait se sentir glissante à partir des sucres libérés — légèrement plus épais que lorsque vous avez commencé."
    },
    {
      "nodeId": "step_3",
      "action": "Mélanger le remplissage",
      "inputs": [
        "wrung_dry_spinach",
        "ing_02",
        "ing_03",
        "ing_05",
        "ing_07",
        "ing_08",
        "softened_scallions"
      ],
      "outputState": "spanakopita_filling",
      "instructions": "Dans un grand bol, mélanger les épinards hachés, les pétoncles transpirés refroidis, les fetas émiettées, les oeufs battus, l'aneth hachée, le poivre noir et la muscade fraîchement râpée. Mélangez soigneusement avec vos mains ou une grande cuillère, en brisant le feta en miettes, pas plus grand qu'un petit pois. Ne pas ajouter de sel avant la dégustation : le feta porte du sel significatif et le remplissage peut n'en avoir besoin. Goûtez critiquement et ajoutez du sel seulement si nécessaire. Le mélange doit sentir l'aneth fraîche, le feta crémeux et les épinards cuits — frais et herbacés avec un fond de brio. La texture doit être suffisamment cohésive pour tenir sa forme brièvement lorsqu'elle est écorcée mais non raide.",
      "visualCue": {
        "primaryTarget": "Un remplissage vert foncé généreusement cloué avec des miettes de feta blanc et flocé de vert d'aneth – le mélange devrait avoir l'air vif et frais, pas gris ou aqueux, et devrait tenir une forme de scoop lâche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le remplissage n'est pas complètement combiné — il y a des poches d'épinards non mélangés, des morceaux de feta, et l'œuf n'a pas tout recouvert uniformément.",
            "action": "Mélanger plus soigneusement, en particulier en brisant les gros morceaux de feta et en veillant à ce que l'oeuf enveloppe tous les épinards."
          },
          {
            "state": "Perfect",
            "description": "Combiné uniformément, avec du feta distribué dans l'ensemble et chaque morceau d'épinard enrobé d'oeuf. Le remplissage tient une forme écorcée et sent frais et herbie.",
            "action": "Utiliser immédiatement comme remplissage ou réfrigérer jusqu'à 24 heures."
          },
          {
            "state": "Overdone",
            "description": "Surmélangé au point où les épinards se sont brisés et le feta s'est dissous dans les épinards — le remplissage est uniformément vert-gris plutôt que tacheté de blanc.",
            "action": "Continuez. La texture a changé mais la saveur est intacte."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère et maintenez - la en haut, elle devrait bourdonner légèrement, puis s'effondrer lentement, ne pas verser. S'il s'écoule, les épinards étaient trop mouillés. Appuyez sur le dos de la cuillère dans le mélange dans le bol; il devrait laisser une impression propre qui tient un moment avant que le remplissage retourne lentement au niveau."
    },
    {
      "nodeId": "step_4",
      "action": "Repos et réglage",
      "inputs": [
        "spanakopita_filling"
      ],
      "outputState": "finished_spanakopita_filling",
      "instructions": "Laisser reposer le remplissage combiné pendant 10 minutes à température ambiante. Pendant ce temps, l'oeuf commencera à se lier plus fermement avec les épinards et le feta, et les saveurs d'aneth et d'échon fleuriront et s'intégreront. Après le repos, goûtez une fois de plus — les saveurs se seront mélangées et fusionnées. Faire les derniers ajustements: plus d'aneth si la saveur de l'herbe est trop subtile, quelques autres meules de poivre si elle a un goût plat, une goutte de jus de citron si elle a besoin de luminosité. Le remplissage est maintenant prêt à être utilisé avec des feuilles de phyllo beurré pour triangles, une tarte à la poêle ou des cigares roulés. Il tient réfrigéré pendant 24 heures avec une perte de qualité minimale; les saveurs en fait s'approfondissent légèrement pendant la nuit.",
      "visualCue": {
        "primaryTarget": "Après le repos, le remplissage semble plus dense et plus cohésif, l'œuf ayant visiblement tricoté les composants ensemble — il tient la forme d'une indentation de cuillère plus longue que la version fraîchement mélangée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours fraîchement mélangées et aqueuses au fond du bol — les composants n'ont pas eu le temps de se lier et le remplissage fera du phyllo soggy.",
            "action": "Reposez-vous pendant 10 minutes. Si le fond du bol est rempli de liquide, pressez une fois de plus l'ensemble du remplissage à travers une serviette propre."
          },
          {
            "state": "Perfect",
            "description": "Cohésif, vif et parfumé. Un scoopful tient sa forme de monticule. Pas de mise en commun liquide à la base du bol. Goûts brillants, brillants, herbies, et profondément satisfaisant.",
            "action": "Procéder immédiatement à la superposition avec du phyllo ou réfrigérer pendant 24 heures."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage a été réfrigéré pendant plus de 2 jours et le feta a rendu les épinards très humides et l'aneth s'est transformé en drab et en piquant.",
            "action": "Pressez à nouveau le remplissage à travers une serviette propre pour éliminer l'excès d'humidité avant d'utiliser."
          }
        ]
      },
      "feelCue": "Après le repos, faites glisser deux doigts à travers le remplissage et pressez - les ensemble — il devrait y avoir suffisamment de corps de l'œuf que le remplissage s'attache brièvement entre vos doigts avant de casser. Ce fil mince et doux est le liant d'oeufs au travail, et il vous dit que le remplissage restera mis à l'intérieur du phyllo plutôt que de se faner pendant la cuisson."
    }
  ]
};
