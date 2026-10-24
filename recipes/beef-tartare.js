export default {
  "repoId": "master_french_beef_tartare_001",
  "parentRepoId": null,
  "slug": "beef-tartare",
  "author": "ForkRecipe Kitchen",
  "title": "Tartare de Steak",
  "description": "Le filet de bœuf coupé à la main est mélangé avec du jaune d'œuf, du Dijon, des câpres, de l'échalote et du Worcestershire, un classique qui exige de la viande de bœuf de qualité, un assaisonnement confiant et aucune cuisson.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "proteins",
  "tags": [
    "tartare",
    "boeuf",
    "cru",
    "français",
    "Câpres",
    "pas de cuisson"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "30 min",
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
    "sour": 3,
    "bitter": 1,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filet de bœuf (découpé au centre, entièrement coupé en sinus et en argent)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "longe de bœuf d'âge sec",
        "Bandelettes wagyu"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Jaune d'oeuf (très frais, de préférence pasteurisé)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Moutarde de Dijon",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "moutarde à grains entiers"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Échalote, très finement brunoise",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon rouge, rincé"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Autres câpres, égouttés et hachés approximativement",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "cornichons, hachés finement"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "sauce Worcestershire",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce soja (petite quantité)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "fleur de sel"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Heat",
      "name": "Poivre noir fraîchement moulu",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre blanc"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Cognac ou brandy (facultatif)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "vin rouge",
        "Tabasco"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Persil à feuilles plates, haché finement",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "ruches"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Cornichons, tranchés, à servir",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Refroidissement",
      "inputs": [
        "ing_01"
      ],
      "outputState": "chilled_beef",
      "instructions": "Conservez le boeuf au congélateur pendant 15 à 20 minutes avant de couper, un filet partiellement ferme est considérablement plus facile à couper proprement. Ce n'est pas pour le congeler mais pour raffermir les fibres afin que le couteau glisse plutôt que de glisser. Le boeuf doit rester rouge et non gris; il doit être froid au toucher au cœur, mais non congelé solide. Tous les bols, la planche à découper et le couteau doivent aussi être réfrigérés si vous travaillez dans une cuisine chaude.",
      "visualCue": {
        "primaryTarget": "Le boeuf est un rouge cerise vif et profond. L'extérieur est ferme au toucher et tient sa forme lorsqu'il est tranché, mais donne sans s'effondrer. Pas de brunissement ou d'oxydation grise sur aucune surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le boeuf est à température ambiante et doux — les fibres musculaires se compressent sous le couteau et les larmes et les lambeaux de viande plutôt que de couper proprement.",
            "action": "Retourner au congélateur pendant 10 minutes. Ne précipitez pas cette étape ; le tartare brut a une texture fictive désagréable."
          },
          {
            "state": "Perfect",
            "description": "Ferme, mais en train de céder au centre, froid jusqu'au bout. Couleur rouge cerise vif. Le couteau s'y déplace proprement sans presque aucune traînée.",
            "action": "Commencez à couper immédiatement — ne le laissez pas s'asseoir sur la planche."
          },
          {
            "state": "Overdone",
            "description": "La viande de boeuf a été trop longtemps au congélateur et est partiellement congelée — le couteau s'écrase à travers elle et les bords coupés sont grisâtres et glacés.",
            "action": "Laisser reposer à température ambiante pendant 3-4 minutes jusqu'à ce que la surface s'adoucisse, puis procéder."
          }
        ]
      },
      "feelCue": "Le boeuf doit se sentir froid et ferme comme un œuf dur à bouillir quand vous le pressez avec votre paume — pas solide en pierre, ne donnant pas. Cette fermeté est ce qui vous donne le travail de couteau propre."
    },
    {
      "nodeId": "step_2",
      "action": "Sérum",
      "inputs": [
        "chilled_beef"
      ],
      "outputState": "hand_cut_beef",
      "instructions": "À l'aide d'un couteau aiguisé et lourd, couper d'abord le boeuf à travers le grain en planches de 4 mm. Empilez les planches et coupez en bâtons de 4 mm. Rotation et coupe en dés de 4 mm. Rassemblez les dés et lancez le couteau à travers eux une ou deux fois pour briser des morceaux plus grands — vous voulez des cubes irréguliers de 3 à 4 mm, pas une pâte. N'utilisez pas de robot culinaire; il purifie plutôt que coupe, donnant une texture caoutchouteuse et homogène. Le but est des morceaux assez petits pour mélanger avec la vinaigrette mais assez grands pour conserver la saveur propre et riche en fer du boeuf.",
      "visualCue": {
        "primaryTarget": "cubes grossiers et irréguliers de 3 à 4 mm. Les faces coupées sont rouge vif et brillantes, pas brunes. Le tas de bœuf se tient lâchement et vous pouvez voir des morceaux distincts, pas une pâte uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les morceaux sont trop grands — 6 mm ou plus — et ne se mélangent pas avec la vinaigrette. Chaque bouchée sera un morceau de bœuf.",
            "action": "Faites passer le couteau à nouveau, le basculer sur la pile pour réduire la taille."
          },
          {
            "state": "Perfect",
            "description": "dés irréguliers de 3 à 4 mm, rouge vif dans l'ensemble, pas de taches grises, pas de sinus à cordes. La pile est lâche et souple plutôt que comprimée.",
            "action": "Transférer immédiatement dans le bol de mélange réfrigéré et commencer la vinaigrette."
          },
          {
            "state": "Overdone",
            "description": "Couteau a été traversé trop de fois et le boeuf approche d'une pâte — gris et comprimé, fibres détruites.",
            "action": "Tu ne peux pas le déjouer. Utilisez-le comme un tartare plus serré et de style pâté; assaisonner et servir dans un moule rond. Note pour la prochaine fois : moins de passes."
          }
        ]
      },
      "feelCue": "Exécutez votre bout de doigt à travers la pile: il devrait se sentir comme du sable grossier et humide — grains individuels que vous pouvez sentir, pas un mastic lisse. S'il reste dans une masse solide, vous êtes allés trop loin."
    },
    {
      "nodeId": "step_3",
      "action": "Saison",
      "inputs": [
        "hand_cut_beef",
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
      "outputState": "dressed_tartare",
      "instructions": "Dans un bol froid, mélanger le Dijon, le Worcestershire, le cognac (si utilisé) et le jaune d'œuf, en fouettant brièvement pour mélanger. Ajouter l'échalote, les câpres et le persil. Pliez dans le bœuf coupé à la main à l'aide d'une fourchette — n'utilisez pas vos mains, ce qui réchauffera la viande. Assaisonner agressivement avec du sel et du poivre, déguster au fur et à mesure. Le boeuf cru a besoin de beaucoup plus de sel que vous ne vous attendez; le tartare sous-saisonné a un goût plat et sanglant. La moutarde et les câpres transportent l'acidité; le Worcestershire et le jaune d'oeuf fournissent une liaison et une profondeur. Goûte. Réglez. Goûte encore. Le mélange doit avoir un goût brillant, salé et assaisonné avec hardiesse, et non timide.",
      "visualCue": {
        "primaryTarget": "Les morceaux de bœuf sont uniformément recouverts d'un pansement fin et brillant — à peine lié, pas mouillé ou nageant. La couleur est rouge vif avec des taches de vert ( persil) et pâle (hallot). Vous pouvez encore voir des morceaux individuels de bœuf.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le boeuf a l'air sec et nu, avec un pansement au fond du bol plutôt que de s'accrocher à chaque morceau. Goûte plat et sous-saisonné.",
            "action": "Mélanger plus soigneusement et ajouter une touche plus Dijon et sel. Goûtez après chaque ajout."
          },
          {
            "state": "Perfect",
            "description": "Chaque morceau de bœuf brille avec un revêtement léger. Le mélange a un goût savoureux, aiguisé de moutarde et de câpres, avec une profondeur ronde du jaune et du Worcestershire. Il se tient légèrement mais n'est pas dense.",
            "action": "Assiettez immédiatement ou maintenez au réfrigérateur pendant 10 minutes au maximum."
          },
          {
            "state": "Overdone",
            "description": "Le tartare a l'air humide et perd sa texture: le sel et l'acide ont commencé à puiser de l'humidité dans le boeuf et en partie le «cuisson». La couleur peut être déplacée vers le rose gris aux bords.",
            "action": "Servir immédiatement. Ne tentez pas de vous égoutter et de recommencer la saison; elle continuera seulement à se dégrader."
          }
        ]
      },
      "feelCue": "Goûtez une petite cuillerée sur le dos de votre main: vous devriez d'abord obtenir du sel, puis de la viande de bœuf riche en fer, puis le tangage aigu de moutarde et de câpres, puis une profondeur savoureuse persistante. Si vous goûtez seulement du boeuf et rien d'autre, ajoutez plus d'assaisonnement."
    },
    {
      "nodeId": "step_4",
      "action": "Plaque",
      "inputs": [
        "dressed_tartare",
        "ing_11"
      ],
      "outputState": "finished_tartare",
      "instructions": "Appuyez sur le tartare dans un moule à anneaux fixé sur une plaque réfrigérée ou formez un monticule soigné à la main à l'aide de deux cuillères. Si vous présentez officiellement, créez un puits peu profond sur le dessus et nichez un jaune d'œuf supplémentaire dans la coquille. Disposer les cornichons, les câpres et le pain grillé autour de l'assiette. Servir dans les 5 minutes suivant le placage — l'acide et le sel continueront à décomposer le boeuf. Boeuf cru servi froid sur une assiette froide.",
      "visualCue": {
        "primaryTarget": "Un monticule bien bombé de tartare rouge vif, brillant mais ne pleurant pas liquide. Nettoyer les bords où le moule s'est libéré. Garnitures arrangées simplement — rien ne surpeuple le boeuf.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le tartare s'effondre lorsque le moule est enlevé, s'étendant à plat sur la plaque — soit trop lâche ou pas assez de fixation.",
            "action": "Emballez le moule plus fermement la prochaine fois. Le jaune d'œuf fournit suffisamment de liaison si le dés est uniforme et les proportions de vinaigrette sont correctes."
          },
          {
            "state": "Perfect",
            "description": "Tient sa forme propre, rouge vif, garnit de croustillant et de brillant. Toute l'assiette semble vivante et bien assaisonnée.",
            "action": "Servir immédiatement avec des toasts chauds, des grissini ou des pommes."
          },
          {
            "state": "Overdone",
            "description": "Tartare a l'air gris-brun et a commencé à pleurer le liquide rose sur la plaque — il a été plaqué trop longtemps et l'acide est en train de le décomposer.",
            "action": "Il s'agit d'un problème de chronométrage: plaque à déposer en moins de 5 minutes. Servir comme si — la saveur est largement intacte même si l'apparence est compromise."
          }
        ]
      },
      "feelCue": "Le monticule doit se sentir froid et ferme sous l'arrière d'une cuillère — le presser devrait avoir l'impression de presser une terre humide légèrement emballée, et non un ballon d'eau doux. S'il s'effondre, il est trop chaud ou trop humide."
    }
  ]
};
