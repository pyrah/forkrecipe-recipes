export default {
  "repoId": "master_mexican_tres_leches_001",
  "parentRepoId": null,
  "slug": "tres-leches",
  "author": "ForkRecipe Kitchen",
  "title": "Tres Leches Cake",
  "description": "Une éponge si trempée dans trois laits devient une crème borderline, surmontée de dérives de crème fouettée douce et de fraises mûres — humble, nostalgique, absolument impossible à résister, et mieux le matin après qu'il est fait que la nuit il est servi.",
  "cuisine": "Mexicain",
  "culture": "Amérique latine",
  "category": "desserts",
  "tags": [
    "Lentilles",
    "Mexique",
    "gâteau",
    "lait",
    "trempé",
    "crème",
    "fraises",
    "Latin"
  ],
  "difficulty": 2,
  "activeTime": "45 min",
  "totalTime": "5 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 5,
    "salty": 1,
    "sour": 1,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "farine de gâteau pour une miette plus délicate"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Œufs (grands, séparés, température ambiante)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "sucre granulé superfin"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Lait entier (pour le trempage)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "lait végétal plein gras pour les produits laitiers"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Lait condensé sucré",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Lait évaporé (non sucré)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "lait entier + 1 c. à soupe de lait séché en poudre"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Crème lourde pour garniture (35%+ gras)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "crème fraîche éclaircie avec une touche de crème"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "pâte de haricots vanille",
        "1 graines de gousses de vanille"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Fraises fraîches, décortiquées et tranchées",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "Pêches",
        "Mango",
        "framboises"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whip",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_08"
      ],
      "outputState": "ribbon_yolks",
      "instructions": "Séparer les œufs, placer les jaunes dans un grand bol et les blancs dans un bol propre et sans graisse. Ajouter aux jaunes les deux tiers du sucre et l'extrait de vanille. En utilisant un fouet électrique, battre à grande vitesse pendant 4 à 5 minutes jusqu'à ce que le mélange soit très épais, ivoire pâle, et tombe du fouet dans un ruban lourd qui tient sa forme sur la surface pendant au moins 5 secondes. Dans un bol complètement propre, fouetter les blancs d'oeufs à des pics raides avec le sucre restant — les blancs doivent rester fermes et brillants, non secs ou granuleux.",
      "visualCue": {
        "primaryTarget": "Mélange de jaune : ivoire pâle, presque blanc, épais et mousseux. Le ruban tient 5 secondes. Blancs: blanc brillant, pics brillants raides qui tiennent leur forme inversée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les jaunes sont encore jaunes-or et liquides. Le ruban tombe et disparaît immédiatement. Les blancs sont mousseux et lâches — pas de pics définis.",
            "action": "Continue de battre. L'étape du ruban jaune ne peut pas être précipitée. Le mélange de jaunes sous-battus produit une éponge dense et plate qui n'absorbera pas uniformément le mélange de lait."
          },
          {
            "state": "Perfect",
            "description": "Les jaunes sont pâles, épais et triples en volume. Le ruban tient clairement. Les blancs sont un nuage ferme et brillant avec des pics qui se tiennent droit et ne se bouclent pas.",
            "action": "Travailler rapidement — plier la farine dans les jaunes et ajouter les blancs avant de se dégonfler."
          },
          {
            "state": "Overdone",
            "description": "Les blancs sont secs, granuleux, et se sont légèrement séparés autour des bords du bol — trop battus. Les jaunes peuvent être raides et entassés.",
            "action": "Utilisez les blancs immédiatement — des blancs légèrement sur-battus peuvent encore être incorporés avec soin. Une cuillère à soupe du mélange de jaune battu dans peut aider à les desserrer."
          }
        ]
      },
      "feelCue": "Prenez une cuillerée au mélange de jaune et inclinez - la très lentement, comme de la lave. Si elle court librement, elle a besoin de plus de coups. Les blancs doivent se sentir satinés et légers, pas granuleux ou aqueux."
    },
    {
      "nodeId": "step_2",
      "action": "Plier",
      "inputs": [
        "ribbon_yolks",
        "ing_01",
        "ing_09",
        "ing_02"
      ],
      "outputState": "sponge_batter",
      "instructions": "Sirotez la farine et la poudre à pâte sur le mélange de jaune de ruban. À l'aide d'une grande spatule, plier avec de larges coups de balayage — sous, au - dessus, tourner — jusqu'à ce qu'ils soient simplement combinés avec des stries sèches. Travaillez doucement et rapidement. Ajoutez maintenant un tiers des blancs raides et remuez (pas plier) pour alléger la pâte, puis pliez dans les blancs restants en deux ajouts avec les traits les plus délicats que vous pouvez gérer, couper à travers le centre et plier sous. Arrêtez le moment où vous voyez une pâte uniforme — même quelques stries blanches sont meilleures que le surpliage.",
      "visualCue": {
        "primaryTarget": "Une pâte légère, aérée et pâle qui a conservé une grande partie du volume des blancs battus. Pas de stries de farine. Quelques minuscules wisps blancs de meringue sont acceptables.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries visibles de farine sèche ou de grandes poches de blanc d'œuf non incorporé encore clairement visibles dans la pâte.",
            "action": "Plier 3 à 4 coups de plus — seulement autant que nécessaire pour éliminer les stries. Chaque coup supplémentaire dégonfle légèrement la pâte."
          },
          {
            "state": "Perfect",
            "description": "Léger, bouffant, uniforme pâte pâle. Le volume est remarquablement important pour les ingrédients. Il tombe de la spatule dans un ruban lent et aéré.",
            "action": "Verser immédiatement dans une poêle beurrée et farinée de 23 × 33 cm et cuire à 180°C dans les 2 minutes. Le battement qui attend dégonfle."
          },
          {
            "state": "Overdone",
            "description": "La pâte est dense et plate — les bulles sont parties. On dirait de la pâte à crêpes mince. Un pliage vigoureux a effondré les blancs.",
            "action": "Cuissez - le de toute façon — le lait qui trempe compensera une certaine densité, et les trés leches est une recette de pardon. La prochaine fois, traitez chaque pli comme si ça coûte quelque chose."
          }
        ]
      },
      "feelCue": "La pâte devrait se sentir presque trop légère, comme si vous pouviez pratiquement la faire sauter de la spatule. Il devrait verser dans la poêle silencieusement et se propager avec une inclinaison douce, pas besoin de l'aider avec la spatule."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "sponge_batter"
      ],
      "outputState": "baked_sponge",
      "instructions": "Verser la pâte dans une poêle graissée de 23 × 33 cm (9 × 13 po) et lisser doucement le dessus. Cuire à 180°C (350°F) pendant 22 à 28 minutes jusqu'à ce que l'or profond et un cure-dent inséré au centre sortent propres. L'éponge reviendra fermement lorsqu'elle sera légèrement pressée. Retirer du four. Bien que toujours très chaud, poke l'éponge partout avec une fourchette ou une brochette — viser 50 à 60 trous répartis uniformément, allant jusqu'à la base de la poêle. Les trous sont les voies pour le lait.",
      "visualCue": {
        "primaryTarget": "Une éponge de couleur dorée uniformément relevée qui a légèrement tiré des bords de la poêle. La surface ressort immédiatement lorsqu'elle est pressée et ne présente aucune tache humide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre est encore humide et coulé. Le pick-dent sort avec des miettes humides. La surface ne ressort pas et laisse un tiret de doigt permanent.",
            "action": "Retourner au four 3 à 5 minutes de plus et procéder à un nouveau test. Une éponge sous-cuite se désintègre lorsqu'elle est imbibée — la structure doit être réglée avant l'entrée du lait."
          },
          {
            "state": "Perfect",
            "description": "Dors partout. Il ressort de façon décisive. Nettoyer les dents. La cuisine sent l'éponge de vanille chaude. Les bords commencent juste à tirer de la casserole.",
            "action": "Cocher les trous immédiatement pendant que l'éponge est à son plus chaud — la miette chaude s'ouvre et accepte le lait le plus facilement."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé, très ferme aux bords, à l'odeur sèche. L'éponge s'est considérablement contractée des quatre côtés de la poêle.",
            "action": "Faire tremper avec plus de mélange de lait pour compenser la sécheresse — augmenter de 20% si nécessaire. Le gâteau sera encore excellent quand il sera trempé."
          }
        ]
      },
      "feelCue": "Appuyez légèrement sur le centre de l'éponge à l'aide de deux doigts — il devrait repousser immédiatement et complètement, comme un oreiller en mousse de mémoire qui ne se souvient de rien. Pas de glissière, pas d'évier, juste un rebond instantané ferme."
    },
    {
      "nodeId": "step_4",
      "action": "Jeu",
      "inputs": [
        "baked_sponge",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "soaked_cake",
      "instructions": "Mélanger le lait entier, le lait condensé et le lait évaporé dans un pot ou un bol et fouetter ensemble. Verser ce mélange lentement et par étapes au-dessus de l'éponge encore chaude et pochée — commencer aux bords, puis se déplacer au centre, permettant à chaque verser d'absorber avant d'ajouter plus. Utilisez tout le mélange de lait, même s'il semble trop. Couvrez bien la poêle avec un film de collage et réfrigérez-la pendant au moins 4 heures, idéalement pendant la nuit. Le gâteau aura d'abord l'air dérangé, mais fermera et se mettra magnifiquement comme il refroidit.",
      "visualCue": {
        "primaryTarget": "Après réfrigération : l'éponge imbibée a absorbé tout le liquide, la surface est humide mais pas en pool, et le gâteau se sent ferme et comme de la crème lorsqu'il est pressé plutôt que spongieux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le gâteau n'est au réfrigérateur que depuis 1 à 2 heures. Le mélange de lait est encore bien visible à la base de la poêle et l'éponge est humide et sans structure.",
            "action": "Continuez à réfrigérer. La durée minimale de trempage est de 4 heures. Un trempage de 24 heures produit une texture magnifiquement uniforme, ressemblant à de la crème."
          },
          {
            "state": "Perfect",
            "description": "Le lait est totalement absorbé, pas de mise en commun. Le gâteau est ferme, crépuscule et froid. Presser la surface laisse un creux lent et humide. La structure de l'éponge est encore présente mais transformée.",
            "action": "Garnir et servir réfrigéré. Le gâteau est à son apogée 24 à 48 heures après avoir trempé."
          },
          {
            "state": "Overdone",
            "description": "Le gâteau a été trempé pendant plus de 3 jours et est devenu aigre, musqué, ou montre des signes de fermentation. Certaines éponges commencent à se désintégrer au fond.",
            "action": "Tres leches se maintient bien pendant 48 heures mais décline ensuite. Servir dans les 2 jours pour une meilleure texture."
          }
        ]
      },
      "feelCue": "Appuyez sur un doigt dans l'éponge fraîche et trempée — il doit sentir frais, uniformément humide et donnant, comme le flan froid ou le tofu de soie. Si le liquide s'évapore, il faut plus de temps au réfrigérateur. S'il ressort à sec, il lui fallait plus de lait."
    },
    {
      "nodeId": "step_5",
      "action": "Whip",
      "inputs": [
        "ing_07",
        "soaked_cake",
        "ing_10"
      ],
      "outputState": "finished_tres_leches",
      "instructions": "À l'aide d'une crème froide et d'un bol froid, fouetter la crème lourde avec une cuillère à soupe de sucre de roulette (facultatif) juste à des pics mous et bondissants — il devrait buter mais pas tenir des pics raides. Étendre la crème en vagues douces sur toute la surface du gâteau froid. Éparpiller les fraises décortiquées et tranchées sur le dessus. Couper en carrés avec un couteau tranchant, l'essuyer entre les coupes. Servir immédiatement et garder au réfrigérateur.",
      "visualCue": {
        "primaryTarget": "Une couche généreuse et inégale de crème douce — pas raide, pas plate — drapée à travers le gâteau comme un nuage. Tranches de fraises fraîches éparpillées sur le dessus, légèrement éblouissantes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème est trop douce et liquide pour rester sur le gâteau — elle sort des bords et des piscines au fond de la casserole.",
            "action": "Whip un peu plus, vérifier toutes les 10 secondes. Des pics doux montent, mais se plient à l'extrémité du fouet. Tu veux dépasser ce point pour t'étendre."
          },
          {
            "state": "Perfect",
            "description": "La crème est assise dans des monticules détendus et volumineux. Lorsqu'elle se répand, elle s'enroule doucement et reste en place. Les fraises coulent légèrement. Le bord coupé de gâteau montre des couches: gâteau, lait, crème.",
            "action": "Servir immédiatement ou réfrigérer jusqu'à 2 heures avant de servir – la crème s'adoucit magnifiquement contre le gâteau trempé."
          },
          {
            "state": "Overdone",
            "description": "La crème est raide et grineuse, trop fouettée. Il frotte plutôt que s'étend et semble dense plutôt qu'aéré.",
            "action": "Plier dans 2 cuillères à soupe de crème fraîche non fouettée et remuer doucement pour détendre la texture. Si elle s'est tournée vers le beurre, recommencer avec de la crème fraîche."
          }
        ]
      },
      "feelCue": "La crème fouettée devrait se sentir presque sans poids sur une cuillère — elle devrait à peine résister à l'inclinaison. S'il tient un bord propre et rigide, il est trop fouetté pour cette application; la crème de trés leches devrait être une couverture douce, pas une meringue."
    }
  ]
};
