export default {
  "repoId": "master_chinese_mapo-tofu-sauce_001",
  "parentRepoId": null,
  "slug": "mapo-tofu-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Mapo Sauce tofu",
  "description": "Une sauce Sichuan rouge profond construite à partir de doubanjiang, haricots noirs fermentés et porc moulu — le bol fini délivre un assaut simultané de chaleur de chili et d'engourdissement de maïs poivré Sichuan que les Chinois appellent ma la, laissant les lèvres fourmiller longtemps après la dernière bouchée.",
  "cuisine": "Chinois",
  "culture": "Sichuan",
  "category": "sauces",
  "tags": [
    "Doubanjiang",
    "Sichuan",
    "tofu",
    "engourdissement",
    "épicé"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 8,
    "sour": 1,
    "bitter": 2,
    "umami": 9,
    "heat": 9
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Doubanjiang (Pâte de chili de Pixian)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "gochujang + miso (supplément approximatif)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Porc haché (ou boeuf)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "poulet haché",
        "tofu ferme émietté (vegan)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "Fèves noires fermentées (douchi), hachées",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "1 c. à thé sauce soja comme substitut"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gingembre frais, haché",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Maïs poivré sichuan, grillé et moulu",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Poulet ou porc",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "eau"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Starch",
      "name": "Lisier de maïs (2:1 eau à amidon)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Lisier de fécule de pomme de terre"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile de Chili ou huile neutre",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "sauce de soja légère",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Allium",
      "name": "Échalons, parties blanches et vertes séparées",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire griller",
      "inputs": [
        "ing_06"
      ],
      "outputState": "toasted_peppercorns",
      "instructions": "Placer les grains de poivre Sichuan dans un wok ou une poêle froid et sec. Chauffer à feu moyen-doux, agiter et remuer constamment. Verser jusqu'à ce que les grains de poivre soient parfumés — environ 2 à 3 minutes. Ils doivent sentir les agrumes, les fleurs et un peu camphorace. Attention : le poivre de Sichuan sur-toasté devient amer et perd le composé engourdissant hydroxy-alpha-sanshool qui définit ma la. Retirer immédiatement de la chaleur et broyer grossièrement dans un mortier. Le poivre moulu devrait ressembler à du poivre noir grossier.",
      "visualCue": {
        "primaryTarget": "Les grains de poivre ont obscurci de l'acajou rouge brique à l'acajou profond, et la cuisine sent intensément floral et agrumes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains de poivre sentent encore crus et pinés, peu d'arôme floral. Extérieur encore terne rouge brique.",
            "action": "Continuer à griller à feu doux. Le poivre sous-toaste manque de qualité engourdissante."
          },
          {
            "state": "Perfect",
            "description": "Acajou profond, intensément aromatique – floral, citronné, légèrement résineux. Première bouffée de fumée parfumée.",
            "action": "Retirer immédiatement et moudre à chaud."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé, sent acre et amer plutôt que floral.",
            "action": "Jeter — le poivre sichuan brûlé est désagréablement astringent. Commence par frais."
          }
        ]
      },
      "feelCue": "Écraser un grain de poivre grillé sur votre langue — dans les 10 secondes, vous devriez sentir une sensation de picotement distincte sur la pointe de votre langue. S'il n'y a pas d'engourdissement, les grains de poivre sont vieux et doivent être remplacés."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_09",
        "ing_01",
        "ing_04",
        "ing_05",
        "ing_03"
      ],
      "outputState": "fragrant_paste",
      "instructions": "Chauffer l'huile dans un wok à feu moyen. Ajouter le doubanjiang et faire revenir 2 à 3 minutes jusqu'à ce que l'huile devienne rouge profond et que la pâte se sépare légèrement. Cette étape, la friture de la pâte de haricots dans l'huile, s'appelle chao hong vous ('huile rouge de friture') et c'est la base de saveur du tofu mapo. Ajouter l'ail haché, le gingembre et les haricots noirs fermentés. Arroser encore 90 secondes jusqu'à ce que tout soit aromatique et que l'odeur de l'ail cru se mélange. La pâte sent profondément savore, fermentée et légèrement tranchante.",
      "visualCue": {
        "primaryTarget": "L'huile dans le wok a tourné un rouge cramoisi brillant et translucide. La pâte est parfumée et grésillante, l'huile visiblement séparée et le pooling aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile est encore pâle et la pâte de haricots sent cru et vif. L'ail est encore piquant et mordant.",
            "action": "Continuez à frire — le changement de couleur dans l'huile est l'indicateur fiable. Un doubanjiang a un goût dur."
          },
          {
            "state": "Perfect",
            "description": "L'huile a fleuri jusqu'à un rouge profond et transparent. L'ail est doré et parfumé. La cuisine sent le chili fermenté, l'ail et le gingembre.",
            "action": "Ajouter le porc et faire revenir."
          },
          {
            "state": "Overdone",
            "description": "La pâte s'assombrit et commence à coller. L'huile devient brun-rouge foncé.",
            "action": "Ajouter le porc immédiatement et déglacer avec le bouillon, ce qui arrêtera la combustion."
          }
        ]
      },
      "feelCue": "Penchez-vous au-dessus du wok et respirez prudemment: la vapeur doit être très savoureuse et épicée, presque époustouflante de la pâte de chili fermentée. Si ça sent à plat, la chaleur est trop faible."
    },
    {
      "nodeId": "step_3",
      "action": "Saisir",
      "inputs": [
        "fragrant_paste",
        "ing_02"
      ],
      "outputState": "cooked_pork_base",
      "instructions": "Augmenter la chaleur et ajouter le porc haché. Faire frire rapidement, en brisant les croûtes, jusqu'à ce que le porc soit entièrement cuit et qu'il ne reste pas de rose — environ 3 minutes. Le porc doit être en petits granulés séparés enrobés de la pâte de chili rouge, et non de gros taillis. Chaque grain de porc doit être assaisonné individuellement par le doubanjiang. Une fois cuit, ajouter les parties blanches des pétoncles et remuer pendant 30 secondes.",
      "visualCue": {
        "primaryTarget": "Granulés fins et séparés de porc cuit, chacun enrobé de pâte rouge profonde, de gémissement et d'aromatique. Pas de restes roses, pas de gros morceaux de viande.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Porc rose visible dans les touffes. La viande a cuit à la vapeur plutôt qu'à la mer.",
            "action": "Augmenter la chaleur et briser les touffes. Ne pas couvrir — la vapeur empêche le brunissement."
          },
          {
            "state": "Perfect",
            "description": "Entièrement cuit, porc granulé enrobé de pâte rouge. Hissant et légèrement caramélisé aux bords du wok.",
            "action": "Ajouter le stock et laisser mijoter."
          },
          {
            "state": "Overdone",
            "description": "Le porc commence à sécher et à s'en tenir au wok.",
            "action": "Ajouter le stock immédiatement."
          }
        ]
      },
      "feelCue": "Le wok devrait être extrêmement chaud et fumer légèrement — vous voulez la chaleur agressive d'une station de wok restaurant. Le sifflement doit être fort et constant, pas occasionnel."
    },
    {
      "nodeId": "step_4",
      "action": "Mijoter",
      "inputs": [
        "cooked_pork_base",
        "ing_07",
        "ing_10"
      ],
      "outputState": "simmered_sauce",
      "instructions": "Ajouter le bouillon et la sauce de soja. Porter à ébullition en remuant pour incorporer toute la pâte collée du fond du wok. Réduisez le feu jusqu'à ce qu'il mijote régulièrement et faites cuire 5 minutes pour permettre aux saveurs de fondre. La sauce sera un rouge riche et profond. Goûtez et ajustez le sel avec la sauce soja. C'est le moment d'ajouter du tofu soyeux si on le sert comme tofu mapo : ajouter 400g de tofu soyeux coupé en cubes de 2,5 cm, les pousser doucement dans la sauce avec une cuillère (jamais en remuant ou ils se casseront). Laisser mijoter 3-4 minutes pour chauffer le tofu.",
      "visualCue": {
        "primaryTarget": "Une sauce orangée rouge foncée et brillante mijotant doucement. Si le tofu est ajouté, les cubes blancs flottent juste sous la surface, la sauce se teinte légèrement autour de leurs bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et les saveurs ont le goût séparé — pâte de chili tranchante, sauce de soja dominante, stock plat.",
            "action": "Laisser mijoter encore 3-5 minutes. La fusion demande du temps sur la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Sauce unifiée, complexe : épicée, salée, profondément salée, avec une profondeur totale du corps. Tous les éléments sont intégrés.",
            "action": "Ajouter la fécule de maïs à épaissir."
          },
          {
            "state": "Overdone",
            "description": "La sauce est réduite à une pâte épaisse, trop concentrée, trop salée.",
            "action": "Ajouter 4 c. à soupe de bouillon frais et mélanger à mince."
          }
        ]
      },
      "feelCue": "Plongez une cuillère et goûtez - la sauce doit frapper avec une chaleur de chili immédiate, puis une vague d'umami fermenté, puis l'arrière du palais avec une chaleur de bâtiment. Si une saveur unique domine trop, l'équilibre est désactivé."
    },
    {
      "nodeId": "step_5",
      "action": "Thicken",
      "inputs": [
        "simmered_sauce",
        "ing_08",
        "toasted_peppercorns",
        "ing_11"
      ],
      "outputState": "finished_mapo_sauce",
      "instructions": "Donnez à la fécule de maïs un mélange final (la fécule s'installe rapidement). Verser lentement et régulièrement autour des bords de la sauce, en remuant doucement. La sauce s'épaissira presque immédiatement. Pour le tofu : utiliser le dos d'une cuillère pour pousser doucement le tofu, ne jamais remuer. La sauce doit être assez épaisse pour enrober les cubes de tofu et ne pas mettre trop d'eau sur l'assiette. Dans les bols. Terminer avec une douche généreuse de grains de poivre Sichuan moulu et les plateaux de pétoncle vert tranchés. Le poivre doit être ajouté en dernier — la chaleur détruit ses composés engourdissants.",
      "visualCue": {
        "primaryTarget": "La sauce finie est brillante, assez épaisse pour enrober une cuillère, et rouge cramoisi profond avec des taches foncées visibles de poivre Sichuan et de pétoncle vert vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est mince et coule immédiatement de l'arrière d'une cuillère.",
            "action": "Ajouter une autre petite addition de lisier. Mélanger doucement et tester à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Sauce les cubes de tofu avec une couche épaisse et brillante. Une cuillère tirée à travers la sauce laisse un sentier qui se ferme lentement. Rouge profond, complexe avec des arômes visibles.",
            "action": "Servir immédiatement — le tofu mapo ne tient pas."
          },
          {
            "state": "Overdone",
            "description": "La sauce est devenue une pâte épaisse et givrée qui fond sur le tofu.",
            "action": "Ajouter 2 c. à soupe et remuer doucement. La texture doit s'écouler, pas rester solide."
          }
        ]
      },
      "feelCue": "Le plat fini doit se sentir chaud et légèrement huileux sur les lèvres, le maïs poivré Sichuan commençant sur le devant de la langue dans les 15 à 20 secondes suivant la consommation. La sensation d'engourdissement se construit sur les trois ou quatre premières morsures."
    }
  ]
};
