export default {
  "repoId": "master_french_creme-caramel_001",
  "parentRepoId": null,
  "slug": "creme-caramel",
  "author": "ForkRecipe Kitchen",
  "title": "Créme Caramel",
  "description": "Un dôme tremblant de crème vanille flottant sur un miroir de caramel amer — le dessert le plus élégant qui ne demande rien du cuisinier que la patience et une main douce.",
  "cuisine": "Français",
  "culture": "Patisserie française classique",
  "category": "desserts",
  "tags": [
    "dessert",
    "français",
    "Coutard",
    "Caramel",
    "cuits"
  ],
  "difficulty": 3,
  "activeTime": "25 min",
  "totalTime": "5 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2024-08-03",
  "updatedAt": "2025-01-30",
  "flavorRadar": {
    "sweet": 7,
    "salty": 1,
    "sour": 0,
    "bitter": 3,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Oeufs entiers",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre granulé (cuisine)",
      "ratioValue": 18,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre granulé (caramel)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Haricots de vanille (découpés et raclés)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Extrait de vanille"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Solvent",
      "name": "Eau (pour le caramel)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Caramélisation",
      "inputs": [
        "ing_04",
        "ing_06"
      ],
      "outputState": "caramel",
      "instructions": "Combiner le sucre caramel et l'eau dans une petite casserole de couleur claire. Mélanger une fois pour dissoudre, puis arrêter de remuer entièrement. Mettre à feu moyen-élevé. Le sucre va buller, puis la couleur. Tourner doucement la poêle — ne jamais remuer — pour assurer un brunissement uniforme. Retirer du feu lorsqu'il atteint un ambre profond. Verser immédiatement dans les ramequins et tourner pour enrober le fond.",
      "visualCue": {
        "primaryTarget": "Un caramel ambré profond de la couleur du miel foncé ou du whisky vieilli – transparent, avec des bulles minces et rapides et une faible cuillerée de fumée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle, comme du jus de pomme. Les bulles sont grandes et lentes. Goûte simplement doux, pas complexe.",
            "action": "Continuer la cuisson — la complexité amère ne se développe qu'en ambre plus profond. C'est la scène où la plupart des gens s'arrêtent trop tôt."
          },
          {
            "state": "Perfect",
            "description": "Ambre profonde aux tons rougeâtres. Ça sent le caramel avec un léger bord amer. Les bulles sont fines et rapides. Fin et liquide, enrobant la poêle en verre.",
            "action": "Verser dans les ramequins immédiatement — il durcit en quelques secondes."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé à noir. La fumée de sucre brûlée. Il a un goût amer.",
            "action": "Jetez et recommencez. Le caramel brûlé ne peut être sauvé et ruinera la crème."
          }
        ]
      },
      "feelCue": "L'odeur est le guide le plus fiable — elle passe de rien, au beurre de coco, au caramel, à une légère amertume carbonisée. Tirez-le au caramel. La transition de parfait à brûlé ne prend que 10-15 secondes."
    },
    {
      "nodeId": "step_2",
      "action": "Infuse",
      "inputs": [
        "ing_01",
        "ing_05"
      ],
      "outputState": "infused_milk",
      "instructions": "Mélanger le lait avec la fendue vanille et ses graines raclées dans une casserole. Chauffer sur le milieu jusqu'à ce que la vapeur monte et que de petites bulles se forment au bord — ne pas faire bouillir. Retirer du feu, couvrir et laisser tremper la vanille pendant 15 minutes. Enlevez la gousse de vanille.",
      "visualCue": {
        "primaryTarget": "Lait à la vapeur tacheté de milliers de petites graines de vanille noire. La surface a une peau qui commence juste à se former aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait est tiède. Pas de vapeur, pas de bulles. Les graines de vanille sont regroupées, non dispersées.",
            "action": "Continuez le chauffage. Le lait doit être assez chaud pour extraire les huiles de vanille."
          },
          {
            "state": "Perfect",
            "description": "De belles bulles sonnent le bord. La vapeur augmente régulièrement. Les graines de vanille sont dispersées partout. La cuisine sent la crème chaude et la vanille.",
            "action": "Retirer du feu et escarpé."
          },
          {
            "state": "Overdone",
            "description": "Le lait est arrivé à ébullition. La surface est en mousse. Une peau épaisse s'est formée.",
            "action": "Retirer immédiatement du feu. Coupez la peau. Le lait bouilli a une saveur légèrement cuite, mais la crème va encore fonctionner."
          }
        ]
      },
      "feelCue": "Le lait infusé de vanille doit sentir comme la base de la crème glacée — chaud, rond et floral. Si ça sent à plat, la vanille est morte. Une goutte sur votre poignet devrait se sentir confortablement chaud, pas scalding."
    },
    {
      "nodeId": "step_3",
      "action": "Cutard tempéré",
      "inputs": [
        "ing_02",
        "ing_03",
        "infused_milk"
      ],
      "outputState": "custard_base",
      "instructions": "Mélangez doucement les œufs fouettés et le sucre crème sans créer de mousse. Verser lentement le lait chaud dans le mélange d'oeufs dans un cours d'eau mince, fouettant constamment. Cela tempère les œufs pour qu'ils ne brouillent pas. Plongez la crème dans un tamis à mailles fines dans un vase verseur. Laisser les bulles se tasser pendant 5 minutes.",
      "visualCue": {
        "primaryTarget": "Un liquide lisse et versable de la couleur de la crème pâle — pas de bulles à la surface, pas de brins d'oeuf visibles, pas de mousse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Streaks d'oeufs non mélangés visibles. Des lumps lorsqu'ils sont agités. Des brins de blanc d'oeuf cuit dans le mélange.",
            "action": "Plongez dans un tamis fin — cela va attraper tous les morceaux cuits. fouetter le liquide tendu en douceur."
          },
          {
            "state": "Perfect",
            "description": "Parfaitement lisse, couleur uniforme. Entoie uniformément l'arrière d'une cuillère. Pas de mousse, pas de bulles. Ça verse comme de la crème lourde.",
            "action": "Verser doucement dans les ramequins doublés de caramel."
          },
          {
            "state": "Overdone",
            "description": "Surface couverte de bulles fines provenant du sursaut. La crème est mousseuse.",
            "action": "Laisser reposer 10 minutes. Les bulles de la surface pop avec une torche ou en passant une flamme rapidement sur la surface. Les bulles font cuire en pockmarks."
          }
        ]
      },
      "feelCue": "Faites glisser votre doigt sur le dos de la cuillère enduite — il devrait laisser une ligne nette et propre qui ne saigne pas ensemble. S'il fonctionne, le mélange est trop mince (probablement trop de lait). S'il est épais et lugubre, un œuf peut être brouillé — encore une souche."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire (bain-marie)",
      "inputs": [
        "custard_base",
        "caramel"
      ],
      "outputState": "baked_custard",
      "instructions": "Verser la crème dans des ramequins doublés de caramel, remplir à 5mm sous la jante. Placez les ramequins dans un plat de cuisson profond et versez de l'eau chaude dans le plat jusqu'à ce qu'il atteigne la moitié des côtés des ramequins. Faire cuire à 150 C (300 F) pendant 50-60 minutes. Le bain d'eau isole la crème de la chaleur directe, empêchant ainsi le caniveau.",
      "visualCue": {
        "primaryTarget": "La surface de la crème est fixée et mate — elle ne s'enlise plus lorsque la poêle est légèrement bousculée. Le centre même peut avoir le plus faible coup, comme la gélatine.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface s'enroule dans une onde du bord au centre quand elle est enroulée. Liquide visible en dessous. Plus d'un cercle de 3 cm au centre.",
            "action": "Continuer la cuisson par paliers de 5 minutes. La crème cuite ne s'effacera pas."
          },
          {
            "state": "Perfect",
            "description": "Les bords sont fixés. Le centre gronde comme le jello lorsqu'il est tapé — un doux tourbillon, pas une vague liquide. La surface est lisse, plate et jaune pâle sans brunissement.",
            "action": "Retirer immédiatement du bain d'eau."
          },
          {
            "state": "Overdone",
            "description": "La surface est brune ou gonflée comme un soufflé. Petites bulles ou pockmarks visibles. Il n'y a pas de joggle, complètement rigide.",
            "action": "La crème a craqué. Il aura une texture cottage-cheese granuleuse. Baissez la température du four la prochaine fois."
          }
        ]
      },
      "feelCue": "Tapez doucement le côté d'un ramekin avec une cuillère — le son doit être doux, terne, et non pas un slosh liquide. Le bain d'eau devrait encore être chaud mais ne jamais bouillir; si il bulle, le four est trop chaud."
    },
    {
      "nodeId": "step_5",
      "action": "Refroidissement et déballage",
      "inputs": [
        "baked_custard"
      ],
      "outputState": "finished_creme_caramel",
      "instructions": "Laisser refroidir les ramequins à la température ambiante, puis réfrigérer pendant au moins 4 heures ou toute la nuit. Pour déformer : lancez un couteau mince autour du bord, placez une plaque sur le dessus et inversez avec confiance en un seul mouvement. Le caramel sera liquéfié au réfrigérateur et versera les côtés comme une sauce.",
      "visualCue": {
        "primaryTarget": "Un dôme doux et tremblant de crème pâle assis dans une piscine de caramel ambre liquide. La surface est parfaite — pas de fissures, pas de bulles, pas de marques du couteau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème s'effondre ou se casse quand elle n'est pas mélangée. Caramel est toujours solide et collé au ramekin.",
            "action": "Il lui fallait plus de temps de refroidissement ou était sous-cuit. Scoop ce que vous pouvez et servir comme une crème cassée — la saveur est toujours belle."
          },
          {
            "state": "Perfect",
            "description": "Un dôme parfait qui tient sa forme mais tremble lorsque l'assiette est bouchée. Caramel coule sur les côtés dans un ruisseau mince et brillant. La surface prend de la lumière.",
            "action": "Servir immédiatement. Une cuillère, une assiette, pas besoin de garniture."
          },
          {
            "state": "Overdone",
            "description": "La crème démolde comme un cylindre solide et rigide. Lorsqu'il est coupé, l'intérieur est dense et granuleux. Caramel est sombre et trop amer.",
            "action": "Servir avec de la crème fouettée pour adoucir la texture. La saveur peut encore être agréable si le caramel n'a pas été brûlé."
          }
        ]
      },
      "feelCue": "La première cuillerée doit ressembler à de la soie contre la langue — si elle est granuleuse ou rugueuse, la crème est surchauffée. Le caramel doit goûter de la sucrée amère, un contrepoint à la crème vanille — s'il a seulement un goût sucré, il était mal cuit."
    }
  ]
};
