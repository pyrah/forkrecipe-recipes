export default {
  "repoId": "master_ukrainian_beet_borscht_001",
  "parentRepoId": null,
  "slug": "beet-borscht",
  "author": "ForkRecipe Kitchen",
  "title": "Betterave ukrainienne Borscht",
  "description": "La soupe nationale pourpre de l'Ukraine - betteraves, choux, pommes de terre et tomates, construite dans un bouillon vif et aromatisé qui maintient à la fois la douceur et l'acide en tension. Fini à table avec une poupée blanche neige de crème aigre et une douche d'aneth fraîche, il est le bol le plus complet de la cuisine d'Europe de l'Est.",
  "cuisine": "Ukrainien",
  "culture": "Ukrainien",
  "category": "vegetables",
  "tags": [
    "végétarien",
    "Sans gluten",
    "ukrainien",
    "Soupe",
    "betterave"
  ],
  "difficulty": 2,
  "activeTime": "40 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 2,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "betteraves crues, pelées et râpées grossièrement",
      "ratioValue": 350,
      "defaultUnit": "g",
      "substitutions": [
        "betteraves dorées (couleur plus légère)",
        "betteraves en conserve, égouttées et râpées (moins vibrantes)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Choux blancs, légèrement déchiquetés",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "Choux savoy",
        "Choux de napa"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Starch",
      "name": "Pommes de terre (Yukon Gold), pelées et dés de 1,5 cm",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "Pommes de terre à peau rouge"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon blanc, finement coupé en dés",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "oignon jaune",
        "Échalotes"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Carottes pelées et râpées ou juliennes",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "Tomates en conserve ou fraîches, concassées",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Stocks de légumes (ou stocks de boeuf léger/de poulet)",
      "ratioValue": 1500,
      "defaultUnit": "ml",
      "substitutions": [
        "eau avec 1–2 cubes de stock"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de vin blanc",
        "jus de citron frais"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "miel (ajouter à la fin, hors chaleur)"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 2,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel et poivre noir",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Fat",
      "name": "Huile neutre (fleur de soleil ou neutre),",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "beurre"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Dairy",
      "name": "Crème aigre, pour servir",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": [
        "Crème fraîche",
        "Yogourt grec"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Herb",
      "name": "Diluant frais, grossièrement haché, pour servir",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Découpe",
      "inputs": [
        "ing_01",
        "ing_09"
      ],
      "outputState": "acidulated_beets",
      "instructions": "Dans un bol, mélanger les betteraves crues râpées grossièrement avec tout le vinaigre de cidre de pomme et une pincée de sel. Jeter soigneusement et réserver. Cette étape d'acidification n'est pas facultative : l'acide réagit avec les pigments bétalains dans la betterave et les stabilise, empêchant le borscht de tourner un violet brunâtre terne pendant la longue mijote. Les betteraves acidulées conservent leur couleur cramoisi vive pendant la cuisson. Les betteraves commenceront immédiatement à pleurer leur jus dans le vinaigre.",
      "visualCue": {
        "primaryTarget": "Brillants morceaux de betterave cramoisi scintillent avec du vinaigre, le jus dans le bol déjà un rouge vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les betteraves ont seulement été jetées et le vinaigre n'a pas encore pénétré.",
            "action": "Attendez 5 minutes pour que l'acide commence ses travaux. La couleur va s'intensifier."
          },
          {
            "state": "Perfect",
            "description": "Le cramoisi profond est bien recouvert de vinaigre. Une piscine de jus de betterave rouge vif au fond du bol.",
            "action": "Aller à la construction de la base de soupe."
          },
          {
            "state": "Overdone",
            "description": "Les betteraves sont restées dans le vinaigre pendant plus d'une heure, trop acides.",
            "action": "Égoutter une partie du jus accumulé avant d'ajouter au pot. Régler la balance finale du vinaigre à la fin."
          }
        ]
      },
      "feelCue": "Les betteraves râpées doivent se sentir froides et légèrement humides, le vinaigre vous mordant immédiatement le nez pendant que vous jetez. Porter des gants ou s'attendre à ce que les doigts soient tachés pendant des heures."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "ing_13",
        "ing_04",
        "ing_05",
        "ing_07"
      ],
      "outputState": "vegetable_base",
      "instructions": "Chauffer l'huile dans une grande casserole à fond lourd ou un four hollandais à feu moyen. Ajouter l'oignon en dés et la carotte râpée et cuire, en remuant occasionnellement, jusqu'à ce que l'oignon soit doux et translucide et que la carotte commence à se ramollir, environ 6–8 minutes. Poussez les légumes sur les côtés et ajoutez la pâte de tomate au centre du pot, en appuyant sur le métal chaud. Cuire la pâte pendant 1 à 2 minutes, en remuant, jusqu'à ce qu'elle s'assombrisse légèrement du rouge vif à la brique profonde. Puis remuer la pâte dans les légumes.",
      "visualCue": {
        "primaryTarget": "Oignon doux, translucide et carotte ramollie, rouge-orange taché de la pâte de tomate cuite. La pâte s'est assombrie à rouge brique profonde.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est toujours ferme et blanc. La pâte de tomates est encore rouge vif et parfumée.",
            "action": "Cuire plus longtemps à feu moyen. La pâte doit s'assombrir et l'oignon adoucit complètement."
          },
          {
            "state": "Perfect",
            "description": "L'oignon est entièrement doux et commence à colorier. La pâte de tomate est rouge brique foncé et parfumée. L'odeur combinée est douce et salée.",
            "action": "Ajouter les betteraves et le stock."
          },
          {
            "state": "Overdone",
            "description": "La pâte de tomate commence à brûler et à coller au pot.",
            "action": "Déglacer avec un petit jet de stock, racler le fond, et procéder."
          }
        ]
      },
      "feelCue": "Incorporer le fond de la casserole — le mélange doit être brillant et légèrement collant, non mouillé. Si la cuillère traîne dans l'eau, continuez à cuire."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "vegetable_base",
        "acidulated_beets",
        "ing_08",
        "ing_11"
      ],
      "outputState": "beet_broth",
      "instructions": "Ajouter les betteraves acidulées et leur liquide dans le pot et bien remuer. Verser tout le stock. Ajouter les feuilles de la baie. Porter à ébullition à feu vif, puis laisser mijoter régulièrement. La borscht devrait mijoter, jamais faire bouillir dur, pour développer la saveur sans la rendre trouble. Cuire pendant 15 minutes pour commencer à construire la base. Le bouillon à ce stade sera un cramoisi vif et profond — c'est la couleur que vous travaillez à préserver à travers le reste de la cuisinière.",
      "visualCue": {
        "primaryTarget": "Bouillon rouge cramoisi vivide avec des lambeaux de betteraves et une base végétale répartie dans l'ensemble. La couleur devrait être rouge-bijou.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Broth est encore léger et aqueux, la saveur de betterave n'a pas encore fleuri. La couleur est rose pâle.",
            "action": "Continuez à mijoter. La saveur de betterave a besoin de temps pour infuser le stock."
          },
          {
            "state": "Perfect",
            "description": "Bouillon profond et saturé. Les lambeaux de betteraves s'adoucissent et le bouillon sent terreux, doux et légèrement acide.",
            "action": "Ajouter le chou et les pommes de terre."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon a bouilli dur et commence à devenir brunâtre-violet. La mousse s'accumule à la surface.",
            "action": "Éjaculez la mousse, réduisez à la plus basse mijotez, et ajoutez un peu plus de vinaigre pour éclaircir la couleur."
          }
        ]
      },
      "feelCue": "Goûtez le bouillon — à ce stade, il devrait être fortement terreux et légèrement aigre de la betterave et du vinaigre, avec la profondeur du stock en dessous. Faites confiance à la couleur: si elle est vive, vous allez bien."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "beet_broth",
        "ing_02",
        "ing_03"
      ],
      "outputState": "simmered_borscht",
      "instructions": "Ajouter le chou déchiqueté et les pommes de terre en dés au borscht. Mélanger pour submerger et revenir à un mijot. Cuire de 20 à 25 minutes jusqu'à ce que les pommes de terre soient complètement tendres et commencent à épaissir légèrement le bouillon avec leur amidon libéré, et le chou s'est complètement adouci et a abandonné toute croûte crue. La soupe doit rester à mijoter doucement tout au long de l'opération — un ébullition dur fera les pommes de terre se décomposer trop rapidement et rendra le bouillon fébrile et nuageux.",
      "visualCue": {
        "primaryTarget": "cubes de pommes de terre donnant à une cuillère, rubans de chou entièrement doux et translucides, bouillon encore profondément rouge et parfumé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pomme de terre est toujours crayeuse et ferme au centre. Le chou a une croûte brute.",
            "action": "Continuez à mijoter. Goûtez un cube de pomme de terre – il devrait écraser entre la langue et le palais sans résistance."
          },
          {
            "state": "Perfect",
            "description": "Les pommes de terre sont entièrement tendres et commencent à ramollir aux bords. Le chou est soyeux. Le bouillon s'est légèrement épaissi.",
            "action": "Ajouter les tomates, le sucre et ajuster l'équilibre sucre-soeur."
          },
          {
            "state": "Overdone",
            "description": "Les pommes de terre se sont dissoutes et le bouillon est épais et féculent. Le chou est très doux et gris.",
            "action": "Le borscht est plus riche en texture — pas idéal pour un style de bouillon propre mais excellent pour un borscht épais de style ukrainien."
          }
        ]
      },
      "feelCue": "Poissonr un cube de pomme de terre et le presser entre le pouce et le doigt — il devrait s'effondrer immédiatement, comme une éponge humide."
    },
    {
      "nodeId": "step_5",
      "action": "Saison",
      "inputs": [
        "simmered_borscht",
        "ing_06",
        "ing_10",
        "ing_12"
      ],
      "outputState": "finished_borscht",
      "instructions": "Ajouter les tomates concassées, le sucre, le sel et le poivre noir dans le pot. Bien mélanger et goûter soigneusement. Borscht est défini par l'équilibre entre sucré et aigre: ajouter du vinaigre une cuillère à café à la fois si elle a besoin de plus de luminosité; ajouter du sucre ou une betterave râpée si elle a besoin de plus de douceur. Le sel doit être affirmé — Borscht peut absorber beaucoup de sel sans goûter au sel en raison de l'acidité. Laisser mijoter pendant 5 minutes pour épouser les saveurs, goûter une dernière fois, et retirer les feuilles de la baie.",
      "visualCue": {
        "primaryTarget": "Soupe vive, complexe, rouge pourpre. L'équilibre du doux et de l'aurore est immédiatement apparent dans l'arôme qui monte de la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La soupe a un goût plat, ni douxment terreux, ni brillant avec de l'acide. Une dimension.",
            "action": "Ajouter plus de vinaigre et/ou de sucre en petits incréments, goûter après chaque ajout."
          },
          {
            "state": "Perfect",
            "description": "Doucement doux, doucement aigre, profondément terreux et salé. La couleur pourpre est vive. Chaque bouche frappe plusieurs notes.",
            "action": "Enlever les feuilles de laurier. Servir dans des bols chauds avec de la crème aigre et de l'aneth frais."
          },
          {
            "state": "Overdone",
            "description": "La soupe est très aigre ou très douce — l'équilibre est rompu.",
            "action": "Si trop acide : ajouter du sucre et un jet d'eau. Si trop sucré : ajouter une cuillère à café au vinaigre à la fois."
          }
        ]
      },
      "feelCue": "Goûtez d'une cuillère profonde — tenez le bouillon sur la langue un moment avant d'avaler. La douceur devrait arriver d'abord (betterave), puis terre, puis une finition acide brillante. Tous les trois devraient être présents et équilibrés."
    },
    {
      "nodeId": "step_6",
      "action": "Garnir",
      "inputs": [
        "finished_borscht",
        "ing_14",
        "ing_15"
      ],
      "outputState": "borscht",
      "instructions": "Déposer le borscht chaud dans des bols profonds et chauds. Placez une généreuse poupée de crème aigre froide directement au centre – le contraste entre la laiterie froide et la soupe chaude fait partie de l'expérience. Dispersez l'aneth fraîchement haché généreusement sur le dessus. Le parfum d'aneth provenant de la soupe chaude est l'une des odeurs les plus distinctives de la cuisine d'Europe orientale. Servir avec du pain de seigle foncé ou pampushky (rouleaux d'ail ukrainien) sur le côté.",
      "visualCue": {
        "primaryTarget": "Soupe pourpre profonde avec une île blanche nuageuse de crème aigre, d'aneth vert vif dispersé généreusement. La vapeur s'élève.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bol est sous-vêtu — la crème aigre est un mince grattage et l'aneth est un brin de jeton.",
            "action": "Borscht demande une garniture généreuse. Ajouter plus des deux."
          },
          {
            "state": "Perfect",
            "description": "Soupe vicieuse pourpre, dollope audacieuse de crème commençant à fondre dans un tourbillon rose aux bords, d'aneth éclatante éparpillée partout.",
            "action": "Servir immédiatement tandis que le contraste entre la soupe chaude et la crème froide est à son plus dramatique."
          },
          {
            "state": "Overdone",
            "description": "La soupe a été versée trop tôt — la crème a complètement fondu dans la soupe et l'aneth s'est flétrie et est devenue sombre.",
            "action": "Servez immédiatement la prochaine fois. La saveur est identique, l'impact visuel est diminué."
          }
        ]
      },
      "feelCue": "Tenez le bol dans les deux mains pendant que vous le portez à la table — il devrait se sentir lourd et très chaud, l'aneth et la vapeur de betterave se levant vers votre visage. Borscht servi dans un bol froid ou tiède est une déception."
    }
  ]
};
