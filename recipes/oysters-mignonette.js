export default {
  "repoId": "master_french_oysters_mignonette_001",
  "parentRepoId": null,
  "slug": "oysters-mignonette",
  "author": "ForkRecipe Kitchen",
  "title": "Huîtres avec Mignonette Granita",
  "description": "Des huîtres françaises crues servies sur la glace concassée avec une mignonette granite — vinaigre d'échalote et de sherry congelées dans des cristaux glacés et tranchants qui fondent sur l'huître froide, élevant la saumure sans la masquer. Le luxe le plus simple de la cuisine.",
  "cuisine": "Français",
  "culture": "Français",
  "category": "seafood",
  "tags": [
    "Sans gluten",
    "cru",
    "huître",
    "français",
    "élégant",
    "Entrée"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "2 hrs 20 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 4,
    "bitter": 1,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Huîtres vivantes (Fines de Claire, Belon ou Kumamoto)",
      "ratioValue": 900,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Vinaigre de sherry (vinaigre de Jerez)",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de champagne",
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Échalotes, très finement hachées",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Poivre noir grossièrement craqué",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "grains de poivre roses, broyés"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel de mer blanc",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Structure",
      "name": "Glaces broyées, pour servir",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "lit de sel de roche grossière"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuse",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "mignonette_liquid",
      "instructions": "Mélanger le vinaigre de sherry, les échalotes très finement hachées, le poivre noir cassé et l'eau froide dans un petit bol. Mélanger. Bouche : il doit être fortement acidulé avec une note d'échalote piquante et une chaleur de poivre. Réglez l'équilibre avec une touche plus d'eau si très tranchante, ou une pincée supplémentaire de poivre fissuré pour plus de chaleur. Les échalotes se ramolliront légèrement dans le vinaigre au fil du temps.",
      "visualCue": {
        "primaryTarget": "Mignonette liquide",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le vinaigre est encore cru et dur. Les échalotes sont encore crues et agressives.",
            "action": "Laisser reposer le mélange 10 minutes avant la dégustation — les échalotes ont besoin de temps pour macérer et perdre une partie de leur netteté brute."
          },
          {
            "state": "Perfect",
            "description": "Un liquide ambré clair avec de fines échalotes qui ont commencé à tourner légèrement translucide. sent le vinaigre et l'échalote avec une netteté agréable et propre. Goûts équilibrés — tartes mais pas dures, salés de l'échalote.",
            "action": "Verser dans un plat plat et congeler."
          },
          {
            "state": "Overdone",
            "description": "S/O — la mignonette ne peut pas être trop préparée à ce stade.",
            "action": "Passer à la congélation."
          }
        ]
      },
      "feelCue": "Une goutte de mignonette sur le poignet devrait piquer légèrement du vinaigre et refroidir à partir du liquide — ensemble, ils devraient se sentir accroupis, pas agressifs. Cette qualité d'armature est ce qui rafraîchit la saumure de l'huître plutôt que de la surcharger."
    },
    {
      "nodeId": "step_2",
      "action": "Gel",
      "inputs": [
        "mignonette_liquid"
      ],
      "outputState": "mignonette_granita",
      "instructions": "Verser le liquide de la mignonette dans un plat large et peu profond, sans danger pour le congélateur. Placez dans le congélateur. Après 45 minutes, faites glisser une fourchette sur la surface partiellement gelée pour la briser en cristaux. Répétez toutes les 30 minutes pendant 2 heures au total, jusqu'à ce que vous ayez une masse molle et chatoyante de cristaux de glace au vinaigre vif-halogéné.",
      "visualCue": {
        "primaryTarget": "Granita dans le plat congélateur",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est à peine froid et encore complètement liquide après 45 minutes.",
            "action": "S'assurer que le congélateur est à la bonne température (-18 C). Vérifiez que le plat est plat et que la couche est mince (pas plus de 1,5 cm)."
          },
          {
            "state": "Perfect",
            "description": "Un monticule lâche et sec de cristaux de glace individuels, translucides et de couleur ambre, comme du sel rose rugueux mais légèrement plus foncé. Les cristaux s'effondrent lorsqu'ils sont grattés et fondent lentement sur la langue plutôt que dans une seule ruée vers le froid.",
            "action": "Couvrir et garder congelé jusqu'au moment de servir. Il tiendra jusqu'à 3 jours."
          },
          {
            "state": "Overdone",
            "description": "Congelé dans un bloc solide — non râpé dans des cristaux. Sera brisé plutôt que racler proprement.",
            "action": "Laisser à température ambiante pendant 3 minutes, puis gratter vigoureusement avec une fourchette pour se casser en cristaux."
          }
        ]
      },
      "feelCue": "Prenez une pincée de la granite finie entre vos doigts — les cristaux doivent être discrets et séparés, fondre rapidement contre votre peau chaude dans un liquide froid, tranchant, parfumé au vinaigre."
    },
    {
      "nodeId": "step_3",
      "action": "Peler",
      "inputs": [
        "ing_01"
      ],
      "outputState": "shucked_oysters",
      "instructions": "Tenez chaque huître dans une serviette de cuisine pliée, une coquille plate vers le haut, charnière vers vous. Insérez un couteau à huîtres dans la charnière à un angle de 45 degrés. Appliquer une pression ferme et torsadante jusqu'à ce que la charnière éclate. Glissez le couteau le long de la surface interne de la coque supérieure plane, coupant le muscle adducteur. Jetez la coque plane. Coupez également le muscle sur la coquille de la tasse inférieure. Vérifiez l'alcool: il doit être clair et légèrement salé. Disposer immédiatement sur la glace écrasée.",
      "visualCue": {
        "primaryTarget": "Huître ouverte dans sa tasse",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le couteau ne pénètre pas la charnière, l'huître gagne. Une force considérable est appliquée sans mouvement.",
            "action": "Réorienter l'extrémité du couteau vers l'extrémité même de la charnière, précisément là où les deux coquilles se rencontrent en un point. La charnière est le point le plus faible; toute la force doit se concentrer là."
          },
          {
            "state": "Perfect",
            "description": "Oyster est assis dans sa coupe profonde entourée d'une liqueur claire et parfaitement propre qui sent la mer. La chair est grise-crème et ferme, avec une surface brillante. Aucun fragment de coque visible.",
            "action": "Disposer sur la glace écrasée avec le côté de la tasse vers le bas et l'ouverture vers l'invité. Ne videz pas l'alcool."
          },
          {
            "state": "Overdone",
            "description": "Des fragments de coquillages flottent dans l'alcool à cause d'un shucking brutal. Le muscle a été déchiré plutôt que complètement coupé.",
            "action": "Utilisez l'embout du couteau pour pêcher soigneusement les fragments de coquille. Si l'alcool est très laiteux ou a des débris de coquille, versez - en la plupart en douceur — il n'aura pas bon goût."
          }
        ]
      },
      "feelCue": "Tilt une huître ouverte sur sa coquille — la liqueur devrait se mettre dans la coupe profonde et la chair devrait glisser légèrement mais rester attachée à la coquille. Si l'alcool s'épuise immédiatement, la tasse est trop superficielle ou la coquille est cassée."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "shucked_oysters",
        "mignonette_granita",
        "ing_07",
        "ing_06"
      ],
      "outputState": "finished_oysters_mignonette",
      "instructions": "Disposer les huîtres dans leurs tasses sur un grand plateau de glace écrasée — la glace les garde au froid et les maintient à niveau. Placer une demi-flaque de mignonette granita sur chaque huître juste avant de servir. Ajouter une petite pincée de sel si les huîtres sont très douces. Servir immédiatement, avant que la granite ne fonde complètement.",
      "visualCue": {
        "primaryTarget": "Huîtres habillées sur le plateau",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Aucune granite n'a encore été placée, ou tout a fondu. Les huîtres ne goûtent que de la mer crue.",
            "action": "Placez la granite au dernier moment — elle fond rapidement et le contraste entre le cristal froid et l'huître froide est le point du plat."
          },
          {
            "state": "Perfect",
            "description": "Chaque huître berce un petit monticule de cristaux de granite ambre qui commencent à peine à fondre à leurs bords, libérant une brume parfumée de vinaigre de sherry et d'échalote. Le visuel : crème, gris et ambre translucide sur glace blanche écrasée.",
            "action": "Servir immédiatement. Mangez en un seul mouvement — soulevez la coquille, mettez tout à l'arrière de la langue, et laissez la saumure, la granite et l'huître s'y rencontrer simultanément."
          },
          {
            "state": "Overdone",
            "description": "La granite a complètement fondu et n'est maintenant qu'une piscine de vinaigre liquide sur le dessus de l'huître, emportant la délicate saveur de la mer.",
            "action": "Conseilnez la plupart du vinaigre fondu liquide de chaque coque avant de servir. Servir avec une granite fraîche si disponible."
          }
        ]
      },
      "feelCue": "Astucez l'huître à vos lèvres — la première sensation doit être froide, puis saumure, puis un cristal tranchant et fondant qui se dissout dans l'arrière de la bouche avec un frisson propre et acide. Si vous n'êtes pas involontairement salivant, la granite n'a pas été assez nette."
    }
  ]
};
