export default {
  "repoId": "master_french_appletartetatin_001",
  "parentRepoId": null,
  "slug": "apple-tarte-tatin",
  "author": "ForkRecipe Kitchen",
  "title": "Tarte de pomme Tatin",
  "description": "Pommes caramélisées en ambre dans le beurre et le sucre, puis recouvertes sous un couvercle de pâtisserie croustillant et inversées, la tarte à l'envers qui s'est inventée par accident dans la vallée de la Loire.",
  "cuisine": "Français",
  "culture": "Solognaise",
  "category": "desserts",
  "tags": [
    "tarte",
    "français",
    "pomme",
    "Caramel",
    "pâtisserie",
    "dessert",
    "inversé"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "1 hr 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 2,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Pommes fermes (Golden Delicious ou Braeburn), pelées, coupées en deux, cardées",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Grand-mère Smith",
        "Cox",
        "Fuji"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre granulé"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé, froid, coupé en morceaux",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre salé (comprimer tout sel ajouté)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Pâtisserie ou croûte courte, laminée à 3 mm",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "Pâtisserie bouffée brute",
        "courte croûte maison"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gousse de vanille, fendue et graines raclées",
      "ratioValue": 1,
      "defaultUnit": "pod",
      "substitutions": [
        "1 c. à thé extrait de vanille"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Crème fraîche, pour servir",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "crème caillotée",
        "crème glacée vanille"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Caraméliser",
      "inputs": [
        "ing_02"
      ],
      "outputState": "amber_caramel",
      "instructions": "Épargnez le sucre de la roulette dans une couche uniforme sur la base d'une poêle lourde de 24 à 26 cm ou d'un moule à tatin de tarte. Régler à feu moyen sans remuer. Le sucre commencera à se liquéfier aux bords — laissez-le s'assembler avant de tourner doucement la poêle à même la couleur. Continuer jusqu'à ce que le caramel liquide atteigne un ambre profond, la couleur de l'acajou foncé. Retirer du feu.",
      "visualCue": {
        "primaryTarget": "Un liquide ambre profond et uniforme qui se déplace librement lorsque la casserole est inclinée. L'odeur est complexe: beurre de coco, un bord amer propre, peu de noix — pas de sucre brut, pas de fumée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle et sentant purement sucré. Pas d'amertume à l'air.",
            "action": "Continuer à feu moyen, en tourbillonnant occasionnellement. L'amertume qui définit un vrai tatin n'arrive qu'à l'ambre véritable."
          },
          {
            "state": "Perfect",
            "description": "Deep acajou ambre, wisps de fumée qui commence à apparaître. La poêle sent le caramel complexe avec une note amère contrôlée.",
            "action": "Retirer immédiatement du feu et ajouter le beurre et la vanille."
          },
          {
            "state": "Overdone",
            "description": "Noir aux bords, fumée acride, irréversiblement amer et tranchant.",
            "action": "Jeter complètement et recommencer — le caramel brûlé ne peut être sauvé."
          }
        ]
      },
      "feelCue": "La poêle émet une chaleur intense. Lorsqu'il est incliné, le caramel doit circuler librement comme liquide, jamais granuleux ou cristallin."
    },
    {
      "nodeId": "step_2",
      "action": "Faire fondre",
      "inputs": [
        "amber_caramel",
        "ing_03",
        "ing_05"
      ],
      "outputState": "butter_caramel",
      "instructions": "Hors du feu, déposer les morceaux de beurre froid dans le caramel ambre une à la fois. Ajouter les graines de vanille et la goutte. Le mélange va exploser furieusement — c'est exact. Incorporer une spatule thermofuge jusqu'à ce que le beurre soit entièrement incorporé et que le caramel soit lisse, brillant et homogène.",
      "visualCue": {
        "primaryTarget": "Une sauce à l'ambre foncé laqué et brillant qui se déplace comme un seul corps. Pas de piscines de beurre blanc, pas de grains de sucre visibles sur la spatule.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Beurre flottant encore dans des gouttelettes ou des stries pâles sur la surface du caramel.",
            "action": "Mélanger plus vigoureusement la chaleur. La chaleur résiduelle du caramel est suffisante pour faire fondre le beurre froid sans retourner à la flamme."
          },
          {
            "state": "Perfect",
            "description": "Une sauce homogène et de couleur profonde. Tire dans des fils courts de la pointe de la spatule.",
            "action": "Commencez immédiatement à emballer les pommes."
          },
          {
            "state": "Overdone",
            "description": "Le gras s'est cassé libre dans une piscine grasse au-dessus du caramel granuleux cristallisé.",
            "action": "Ajouter une cuillère à soupe d'eau chaude et remuer fermement à feu très doux pour réhydrater les cristaux."
          }
        ]
      },
      "feelCue": "Le caramel doit se sentir légèrement collant sur le dos de la spatule et s'éloigner en courts fils brillants, signe de concentration correcte de sucre."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "butter_caramel",
        "ing_01"
      ],
      "outputState": "cooked_apple_base",
      "instructions": "Enlevez la gousse de vanille. Disposer les moitiés de pommes coupées sur le caramel, les emballer le plus étroitement possible dans un motif circulaire — elles se rétréciront pendant la cuisson, de sorte que la foule est correcte. Placer la poêle à feu moyen et cuire de 15 à 20 minutes jusqu'à ce que les pommes soient partiellement adoucies et que le caramel s'est approfondi et épaissi autour d'elles.",
      "visualCue": {
        "primaryTarget": "Les bords des pommes translucides et ambrées, les centres tiennent encore forme mais donnent au point le plus épais. Le caramel est épais et s'accroche aux pommes plutôt qu'à la base.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pommes encore fermes et blanc vif au centre. Caramel mince et pâle.",
            "action": "Continuer sur moyenne-doux. Les pommes partiellement cuites sont essentielles: elles finiront au four; les pommes crues resteront crues après cuisson."
          },
          {
            "state": "Perfect",
            "description": "Bords translucides, dorés aux extrémités. Les centres donnent un peu sous un ongle. Les écarts entre les pommes se sont rompus au fur et à mesure qu'elles se contractaient.",
            "action": "Retirer du feu et laisser refroidir brièvement avant de draper la pâtisserie."
          },
          {
            "state": "Overdone",
            "description": "Les pommes s'effondrent et libèrent de l'eau, du caramel ou commencent à noircir.",
            "action": "Retirer immédiatement du feu. La tarte sera encore inversée, mais la couche de pomme sera très douce."
          }
        ]
      },
      "feelCue": "Sonder la partie la plus épaisse d'une pomme avec une pointe de couteau — il devrait entrer avec une résistance modérée, comme le fruit mûr plutôt que la pomme de terre crue."
    },
    {
      "nodeId": "step_4",
      "action": "Assembler",
      "inputs": [
        "cooked_apple_base",
        "ing_04"
      ],
      "outputState": "assembled_tatin",
      "instructions": "Couper la pâte en un cercle de 2 cm de plus que le diamètre de la poêle. Enveloppez-le au-dessus des pommes et placez le bord surplombant dans la poêle, en embrassant le périmètre des pommes. Pique la pâtisserie six fois avec une fourchette. Préchauffer le four à 190°C (375°F) assisté par le ventilateur.",
      "visualCue": {
        "primaryTarget": "Un dôme de pâtisserie même assis au-dessus des pommes, bord propre cousu 1–2 cm à l'intérieur du bord de la casserole. Les trous de briques sont répartis uniformément sur la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte n'atteint pas le bord de la casserole, ou le bord est plié inégalement — épais dans certaines régions, mince dans d'autres.",
            "action": "Soulagez la pâtisserie avec une spatule et re-tuck. Une couverture inégale entraîne un brunissement inégal."
          },
          {
            "state": "Perfect",
            "description": "Même coupole en contact doux avec les pommes. Le bord est cousu uniformément à l'intérieur du bord.",
            "action": "Cuire immédiatement sur la grille du milieu."
          },
          {
            "state": "Overdone",
            "description": "Pâtisserie chaude au point de douceur ou a déchiré près du bord de la manipulation.",
            "action": "Réfrigérer le tatin assemblé pendant 10 minutes avant de faire cuire la pâte de nouveau."
          }
        ]
      },
      "feelCue": "La pâtisserie doit être fraîche et ferme, presque rigide, avant d'entrer dans le four. Une pâte douce et chaude a perdu sa structure en couches."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire au four",
      "inputs": [
        "assembled_tatin"
      ],
      "outputState": "baked_tatin",
      "instructions": "Cuire à 190°C pendant 25 à 30 minutes jusqu'à ce que la pâtisserie soit profondément dorée et gonflée, et que le caramel bouillonne visiblement aux bords de la poêle. Retirez-vous et reposez-vous sur un porte-fils pendant exactement 5 minutes, ou le caramel s'emparera et la tarte s'accrochera à l'inversion.",
      "visualCue": {
        "primaryTarget": "Riche pâtisserie au miel, gonflée et flocée sans taches pâles. Caramel ambré foncé bouillonnant activement aux bords de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pâtisserie or pâle, encore doux et pâteux. Caramel pas encore bouillonner aux bords.",
            "action": "Retourner au four 5 minutes de plus. La pâte molle s'effondrera quand elle sera inversée."
          },
          {
            "state": "Perfect",
            "description": "Deep doré-brun avec un son creux quand tapoté. Caramel réduisant visiblement autour du périmètre avec une couleur jaune foncé.",
            "action": "Repose exactement 5 minutes sur un rack, puis inverse."
          },
          {
            "state": "Overdone",
            "description": "Pâtisserie très foncée ou carbonisée aux bords. Une odeur de caramel acride.",
            "action": "Couper les bords les plus sombres avant de retourner. L'intérieur sera probablement bien."
          }
        ]
      },
      "feelCue": "Écouter au four : un bouillon actif et bas du caramel doit être audible lorsque la porte se fissure. La pâtisserie semble croustillante, pas douce, quand elle est légèrement tapée."
    },
    {
      "nodeId": "step_6",
      "action": "Assembler",
      "inputs": [
        "baked_tatin",
        "ing_06"
      ],
      "outputState": "finished_tarte_tatin",
      "instructions": "Déposer fermement sur la casserole une grande assiette de service lissée. Poignez bien la plaque et la poêle, comptez jusqu'à un, puis inversez avec confiance. Attendez trois secondes, puis soulevez la poêle. Toutes les pommes qui se sont déplacées peuvent être pressées doucement en place avec une cuillère. Servir au chaud avec crème fraîche à côté.",
      "visualCue": {
        "primaryTarget": "Collage de moitiés de pomme ambre disposées dans une rosette recoupante, laquée avec du caramel profond. La pâtisserie en dessous est croquante et dorée, caramel courant lentement sur les côtés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Caramel encore liquide — les pommes glissent et la tarte n'a pas de structure sur la plaque.",
            "action": "Tu t'es inversé trop tôt. Retourner soigneusement à la poêle et chauffer à feu doux pendant 2 minutes pour se réinstaller. Laisser 5 minutes la prochaine fois."
          },
          {
            "state": "Perfect",
            "description": "Un disque de pomme en ambre profond, glacé de caramel, assis fièrement sur sa base de pâtisserie croustillante. Caramel commence juste à courir aux bords.",
            "action": "Servir en 10 minutes pendant que le caramel reste fluide et chaud."
          },
          {
            "state": "Overdone",
            "description": "Caramel s'est complètement saisi — les pommes s'accrochent à la poêle et ne relâchent pas.",
            "action": "Remettre la poêle à feu très faible pendant 30 secondes pour re-liquéfier le caramel, puis inverser à nouveau."
          }
        ]
      },
      "feelCue": "Appuyez sur votre paume plat contre la plaque de service avant d'inverser — il devrait se sentir chaud du caramel irradié dans la poêle. La chaleur signifie que le caramel est suffisamment fluide pour se libérer proprement."
    }
  ]
};
