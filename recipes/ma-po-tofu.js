export default {
  "repoId": "master_chinese_ma_po_tofu_001",
  "parentRepoId": null,
  "slug": "ma-po-tofu",
  "author": "ForkRecipe Kitchen",
  "title": "Ma Po Tofu",
  "description": "Silken tofu tremblant dans une sauce Sichuan doubanjiang avec du porc moulu et un nuage engourdissant et tingly de poivre Sichuan fraîchement moulu — l'une des grandes expériences de saveur du monde, un plat où le 'ma' (numbing) et 'la' (épicé) arrivent comme deux sensations distinctes.",
  "cuisine": "Chinois",
  "culture": "Sichuan",
  "category": "proteins",
  "tags": [
    "Sichuan",
    "Chinois",
    "tofu",
    "Doubanjiang",
    "porc",
    "épicé",
    "engourdissement",
    "Ma-la"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "35 min",
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
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Tofu doux ou en soie, coupé en cubes de 2 cm",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "Tofu moyennement ferme"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Porc haché (20 % de matières grasses)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "boeuf haché",
        "omit pour végétalien"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "Doubanjiang (Pâte de chili de Pixian)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Fèves noires fermentées (douchi), hachées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Gingembre frais, haché",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Poulet ou porc",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "eau avec un dashi cube"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "sauce soja",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Maïs poivré sichuan, grillé et moulu",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Flacons de chili rouges séchés (er jing tiao ou face au chili du ciel)",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": [
        "Gochugaru coréen"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Binder",
      "name": "Farine de maïs mélangée avec 60 g d'eau froide (lisier)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Allium",
      "name": "Oignons verts en tranches",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanchir",
      "inputs": [
        "ing_01",
        "ing_14"
      ],
      "outputState": "blanched_tofu",
      "instructions": "Porter un pot d'eau légèrement salée à ébullition. Faites glisser doucement les cubes de tofu et blanchissez-les pendant 2 minutes. Cette firme le tofu légèrement et enlève toute saveur brute de beany. Égoutter soigneusement — les cubes sont fragiles. Laisser égoutter sur une serviette de cuisine propre.",
      "visualCue": {
        "primaryTarget": "Les cubes de tofu tiennent leur forme, semblent blancs et propres. Pas de nuage dans l'eau qui blanchit (ce qui indiquerait que le tofu se brise).",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le tofu s'est effondré pendant la blanchissure — le tofu soyeux a été ajouté à l'eau bouillante (pas à peine mijotée).",
            "action": "Réduire la chaleur. Silken tofu a besoin du blanc le plus doux possible."
          },
          {
            "state": "Perfect",
            "description": "Intact cubes, légèrement raffermis à l'extérieur, blanc propre, fragile mais maniable. Se reposer sur la serviette sans s'effondrer.",
            "action": "Continuez — maniez avec une cuillère à fentes et de la patience."
          },
          {
            "state": "Overdone",
            "description": "Tofu est devenu caoutchouteux et dur à l'extérieur. Elle a perdu sa qualité de soie.",
            "action": "C'est encore bien — ma po tofu pardonne. La sauce réhydratera l'extérieur."
          }
        ]
      },
      "feelCue": "Soulevez un cube sur une cuillère à fentes et inclinez doucement — il devrait carer comme set custard et tenir sa forme, à peine. C'est incroyablement délicat à ce stade."
    },
    {
      "nodeId": "step_2",
      "action": "Frire",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_10",
        "ing_12"
      ],
      "outputState": "fragrant_base",
      "instructions": "Chauffer l'huile dans un wok à feu vif jusqu'à ce qu'elle mijote. Ajouter le porc moulu et faire sauter, en brisant toutes les croûtes, jusqu'à ce qu'elles soient entièrement cuites et commencent à croquer aux bords — environ 3 minutes. Poussez sur le côté. Ajouter le doubanjiang et faire frire l'huile pendant 1 minute jusqu'à ce que l'huile devienne rouge et que la pâte sente grillée. Ajouter les haricots noirs fermentés, l'ail, le gingembre et les flocons de chili. Faites frire ensemble pendant 1 minute.",
      "visualCue": {
        "primaryTarget": "L'huile dans le wok est devenue rouge-orange vif du doubanjiang. Le porc est entièrement cuit et légèrement croustillant aux bords. La base sent profondément salé, épicé et fermenté.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Doubanjiang est encore rouge vif et n'a pas tourné l'huile. Le porc a l'air gris et à la vapeur.",
            "action": "Augmenter la chaleur et faire frire plus longtemps — tant le porc que la pâte doivent cuire dans l'huile, pas la vapeur."
          },
          {
            "state": "Perfect",
            "description": "L'huile est profondément rouge, le porc est croustillant, l'ail et le gingembre ont cuit. Le wok est parfumé avec de la pâte de chili et des haricots noirs fermentés.",
            "action": "Ajouter le stock et le tofu."
          },
          {
            "state": "Overdone",
            "description": "Doubanjiang a commencé à coller et à scorcher. Une odeur amère et acride.",
            "action": "Ajouter immédiatement le stock pour déglacer et sauver la pâte."
          }
        ]
      },
      "feelCue": "Le wok devrait être très chaud et actif — le son devrait être un étourdissement intense continu, et non une bulle silencieuse. Ma po tofu a besoin de chaleur élevée pour développer sa caractéristique wok hei."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "fragrant_base",
        "blanched_tofu",
        "ing_07",
        "ing_08"
      ],
      "outputState": "simmering_ma_po",
      "instructions": "Verser le bouillon et la sauce de soja. Glissez doucement les cubes de tofu dans la sauce en utilisant une louche ou votre main — ne remuez jamais vigoureusement. Agiter le wok par la poignée pour distribuer sans casser le tofu. Porter à mijoter doucement et cuire 3 à 4 minutes, en inclinant et en tourbillonnant parfois le wok plutôt que de le remuer.",
      "visualCue": {
        "primaryTarget": "Les cubes de tofu, assis dans une sauce rouge vibrante, tremblent doucement avec la mijoter mais intacte. La sauce est fine à ce stade — elle s'épaissira ensuite.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a à peine chauffé. Tofu encore froid au centre.",
            "action": "S'assurer que la sauce est à une véritable mijoter avant d'épaissir — le tofu froid libère de l'eau et dilue la sauce."
          },
          {
            "state": "Perfect",
            "description": "Le tofu est chauffé à travers, intact, doucement entouré de la sauce rouge. Système est à une mijotée vivante.",
            "action": "Appliquez la sauce avec de la fécule de maïs."
          },
          {
            "state": "Overdone",
            "description": "Le tofu s'est cassé à l'exception d'un brassage ou d'un ébullition vigoureux. La sauce est pleine de fragments de tofu.",
            "action": "Continuer — la saveur est intacte même si la présentation est cassée."
          }
        ]
      },
      "feelCue": "Inclinez le wok et écoutez — les cubes de tofu doivent glisser l'un contre l'autre avec un son doux et humide. S'ils s'éclaboussent, la chaleur est trop élevée."
    },
    {
      "nodeId": "step_4",
      "action": "Faire réduire",
      "inputs": [
        "simmering_ma_po",
        "ing_11"
      ],
      "outputState": "thickened_ma_po",
      "instructions": "Mélanger la fécule de maïs pour la redistribuer (elle s'installe rapidement). Arrosez-le autour des bords du wok en trois ajouts, agitez doucement entre chacun d'eux, permettant à la sauce de s'épaissir avant d'ajouter davantage. La sauce devrait épaissir pour enrober le tofu d'une couche brillante et collante, non pas épaisse comme de la sauce, mais assez importante pour s'accrocher.",
      "visualCue": {
        "primaryTarget": "La sauce est passée de mince et aqueuse à un revêtement brillant et collant qui enveloppe chaque cube de tofu. La surface de la sauce est brillante et se déplace lentement lorsque le wok est incliné.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore aqueuse et s'échappe immédiatement du tofu. Le bouillon et l'huile se sont séparés.",
            "action": "Ajouter plus de amidon de maïs en petites quantités, en tremblant après chaque ajout."
          },
          {
            "state": "Perfect",
            "description": "La sauce s'accroche au tofu et se déplace lentement. Il enveloppe l'arrière d'une cuillère dans une couche mince et uniforme. L'huile rouge et la sauce sont émulsifiées dans un brillant unifié.",
            "action": "Terminer avec du poivre sichuan et de l'oignon vert."
          },
          {
            "state": "Overdone",
            "description": "La sauce est gommante et épaisse, s'éloignant du tofu en feuilles lorsque le wok est incliné.",
            "action": "Ajouter un éclaboussure de stock et agiter pour se détendre."
          }
        ]
      },
      "feelCue": "Faites tremper une cuillère et regardez la sauce glisser dans le wok — elle devrait couler dans les draps plutôt que dans les gouttes. Cette feuille est la bonne cohérence."
    },
    {
      "nodeId": "step_5",
      "action": "Dresser",
      "inputs": [
        "thickened_ma_po",
        "ing_09",
        "ing_13"
      ],
      "outputState": "finished_ma_po_tofu",
      "instructions": "Faites glisser le tofu ma po du wok dans un bol de service. Dispersez le sichuan fraîchement moulu et l'oignon vert sur le dessus. Le poivre Sichuan doit être ajouté à la fin, il s'ajoute comme élément de finition, non cuit dans la sauce, pour préserver sa volatilité florale engourdissante. Servir immédiatement sur du riz cuit à la vapeur.",
      "visualCue": {
        "primaryTarget": "Une piscine de sauce rouge-orange vive avec des cubes de tofu blancs à peine visibles en dessous. Une poussière visible de poivre sichuan pâle et d'oignon vert vif à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sichuan poivre non ajouté, ou ajouté trop tôt et a perdu sa qualité engourdissante.",
            "action": "Toujours ajouter le poivre sichuan cru et dernier — ses huiles essentielles sont détruites par la chaleur."
          },
          {
            "state": "Perfect",
            "description": "La poussière de poivre est visible et pâle. Lorsque vous mangez le plat, la chaleur (la) frappe d'abord, puis le picotement (ma) engourdissant arrive 10-15 secondes plus tard comme une sensation séparée. Deux vagues distinctes.",
            "action": "Mangez immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Trop de poivre Sichuan — l'engourdissement envahit toute autre saveur.",
            "action": "Servir avec du riz uni pour équilibrer."
          }
        ]
      },
      "feelCue": "La première bouchée devrait donner immédiatement de la chaleur épicée, suivie d'un bâtiment, engourdissement qui fait que vos lèvres et votre langue se sentent en vie électriquement — c'est le ma, et c'est le point du plat."
    }
  ]
};
