export default {
  "repoId": "master_chinese_sichuan_mapo_tofu_001",
  "parentRepoId": null,
  "slug": "sichuan-mapo-tofu",
  "author": "ForkRecipe Kitchen",
  "title": "Sichuan Mapo Tofu",
  "description": "Silken tofu tremblant dans une sauce écarlate, chaude engourdissante de haricots noirs fermentés, de doubanjiang et de grains de poivre Sichuan – la combinaison mala (numbing-spicy) n'est pas une saveur mais une expérience, un fourmillement lent qui construit à travers les lèvres et la langue.",
  "cuisine": "Chinois",
  "culture": "Sichuanese",
  "category": "proteins",
  "tags": [
    "tofu",
    "Sichuan",
    "Chinois",
    "épicé",
    "mala",
    "mapo tofu",
    "maïs poivré"
  ],
  "difficulty": 3,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "weight",
  "stars": 2410,
  "forks": 318,
  "contributors": 71,
  "license": "CC-BY-SA",
  "createdAt": "2026-01-15",
  "updatedAt": "2026-01-15",
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
      "name": "Tofu en soie, coupé en cubes de 2 cm",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "tofu moyennement ferme (moins délicat)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Porc haché (ou boeuf)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "dinde hachée",
        "omit pour végétarien"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Doubanjiang (Pâte de chili de haricots large de Pixian)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Haricots noirs fermentés (douchi), hachés à peu près",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "sauce à l'ail de haricots noirs"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Maïs poivré sichuan, grillé et moulu",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gingembre frais, haché",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Stocks de poulet ou de légumes",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Starch",
      "name": "L'amidon de maïs dissous dans l'eau (2:1 eau:amidon)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Allium",
      "name": "Oignon vert, tranché",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanch",
      "inputs": [
        "ing_01"
      ],
      "outputState": "blanched_tofu",
      "instructions": "Abaissez doucement les cubes de tofu soyeux dans de l'eau légèrement salée mijotant pendant 2 minutes. Cette étape raffermit légèrement l'extérieur pour que le tofu survive au braisage subséquent sans se désintégrer, et saisonne l'intérieur. Retirer avec une cuillère à fentes dans une assiette — ne pas égoutter agressivement.",
      "visualCue": {
        "primaryTarget": "Les cubes de tofu qui tiennent leur forme, légèrement plus ferme à l'extérieur mais qui continuent de produire. La surface semble opaque et légèrement réglée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le tofu est encore très fragile et se brise avec la cuillère.",
            "action": "Laisser 1 minute de plus dans l'eau chaude."
          },
          {
            "state": "Perfect",
            "description": "Les cubes tiennent leur forme sous un doux prod avec une cuillère. La surface semble légèrement réglée et opaque. Intérieur encore soyeux quand mordu.",
            "action": "Réserver soigneusement et passer à la sauce."
          },
          {
            "state": "Overdone",
            "description": "Tofu a développé un extérieur robuste et caoutchouteux de trop longtemps dans l'eau salée.",
            "action": "Toujours utilisable; réduire légèrement le temps de brasage de la sauce finale."
          }
        ]
      },
      "feelCue": "Le tofu de soie bien blanchi devrait se sentir comme une gelée très ferme et fraîche lorsqu'il est ramassé avec une cuillère — assez solide pour tenir ensemble mais donnant à la moindre pression."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "ing_02",
        "ing_09"
      ],
      "outputState": "cooked_pork",
      "instructions": "Chauffer l'huile dans un wok ou une grande poêle à feu vif jusqu'à ce qu'elle fume. Ajouter le porc moulu et cuire sans remuer pendant 1 minute, puis casser et remuer jusqu'à ce que le porc soit doré et que la graisse ait fondu. Le porc doit être légèrement croustillant aux bords. Retirer du wok avec une cuillère à fente, laissant la graisse rendue derrière.",
      "visualCue": {
        "primaryTarget": "Porc broyé avec des bords légèrement croustillants et rendu gras pooling dans la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le porc est gris et dégage toujours de l'humidité, au lieu de la friture.",
            "action": "Élevez la chaleur et étalez le diluant de porc dans la poêle; il a besoin de chaleur sèche et élevée pour brunir."
          },
          {
            "state": "Perfect",
            "description": "Le porc est bruni avec des bords légèrement croustillants. Graisse rendue et claire dans la poêle. Sens de viande cuite.",
            "action": "Retirer le porc en laissant la graisse dans le wok."
          },
          {
            "state": "Overdone",
            "description": "Le porc est très foncé et sec: l'excès d'humidité a complètement cuit.",
            "action": "Toujours bien; le porc réhydratera dans la sauce."
          }
        ]
      },
      "feelCue": "Le wok doit sonner comme de la friture agressive — non pas de la vapeur ou du sifflement, mais d'un craquage sec et chaud — au moment où le porc entre."
    },
    {
      "nodeId": "step_3",
      "action": "Bloom",
      "inputs": [
        "cooked_pork",
        "ing_03",
        "ing_04",
        "ing_06",
        "ing_07"
      ],
      "outputState": "sauce_base",
      "instructions": "Dans la graisse restante dans le wok, ajouter le doubanjiang, les haricots noirs fermentés, l'ail et le gingembre. Faire revenir à feu moyen-vif pendant 2 à 3 minutes, en remuant constamment. Le doubanjiang transformera l'huile en un rouge vif et profond, c'est l'étape sa xiang (fragrance-releasing), où la capsaïcine soluble dans la graisse et les composés fermentés extraireont l'huile. La cuisine doit sentir le chili et les haricots fermentés. Rendez le porc.",
      "visualCue": {
        "primaryTarget": "L'huile rouge cramoisi se superpose autour de la pâte, se séparant légèrement des solides. La pâte semble plus foncée et plus parfumée que lorsqu'elle est crue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore rouge vif, l'huile n'est pas encore teintée rouge. Une odeur de chili vif.",
            "action": "Continuer à remuer à feu moyen-élevé pendant 1 à 2 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "L'huile est rouge cramoisi vif. La pâte est devenue rouge brique plus profonde. Arôme intense et complexe de chili fermenté, d'ail et de haricots noirs.",
            "action": "Ajoutez le stock."
          },
          {
            "state": "Overdone",
            "description": "La pâte est devenue presque noire et sent amère et acride.",
            "action": "Ajouter immédiatement du stock — la chaleur s'extrait trop loin; un tofu mapo légèrement amer est récupérable."
          }
        ]
      },
      "feelCue": "Le doubanjiang fleuri devrait se sentir épais et pâteux lorsqu'il est agité, non aqueux — la graisse du wok a été complètement infusée et séparée dans une piscine d'huile rouge."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "sauce_base",
        "ing_08",
        "blanched_tofu"
      ],
      "outputState": "braised_mapo",
      "instructions": "Verser le stock dans le wok et mélanger. Porter à ébullition, puis glisser doucement les cubes de tofu. Ne pas remuer de façon agressive – faire glisser la sauce sur le tofu ou incliner le wok pour la distribuer. Laisser mijoter pendant 5 minutes jusqu'à ce que le tofu ait absorbé les saveurs de la sauce et que le liquide soit légèrement réduit. La sauce doit être assez fine pour couler mais assez riche pour enrober.",
      "visualCue": {
        "primaryTarget": "Les cubes de tofu sont intacts dans un bouillon rouge vif et bouillonnant. La sauce est mince mais de couleur vibrante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a un goût cru et le tofu est froid — pas assez de temps.",
            "action": "Continuer pendant 3 minutes."
          },
          {
            "state": "Perfect",
            "description": "Le tofu est chauffé à travers et très légèrement infusé avec la couleur rouge à ses bords. Des bulles de sauce régulièrement. Aroma est féroce et complexe.",
            "action": "Ajouter la fécule de maïs à épaissir."
          },
          {
            "state": "Overdone",
            "description": "Le tofu s'est cassé et la sauce est très épaisse du liquide de tofu libéré.",
            "action": "Réduire immédiatement la chaleur; réduire ou sauter l'ajout de fécule de maïs."
          }
        ]
      },
      "feelCue": "Plongez une cuillère dans la sauce de cuisson — sur l'extrémité de la langue, vous devriez sentir la chaleur propre et piquante du bâtiment du doubanjiang vers l'engourdissement piquant du maïs poivré Sichuan."
    },
    {
      "nodeId": "step_5",
      "action": "Réduire",
      "inputs": [
        "braised_mapo",
        "ing_10",
        "ing_05",
        "ing_11"
      ],
      "outputState": "finished_mapo_tofu",
      "instructions": "Incorporer la fécule de maïs et la verser dans un cercle lent dans la sauce mijotante tout en agitant doucement le wok. La sauce s'épaissira à une consistance de revêtement brillante dans les 30 secondes. Goûtez et ajustez la sauce de soja ou le doubanjiang. Transférer dans un bol de service, la poussière généreusement avec du maïs poivré Sichuan moulu, et disperser l'oignon vert.",
      "visualCue": {
        "primaryTarget": "Une sauce épaisse, brillante et écarlate s'accrochant à chaque cube de tofu, surmontée d'oignon vert et de la poussière de poivre gris clair du Sichuan.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore aqueuse et ne recouvre pas le tofu. Pas encore ajouté.",
            "action": "Ajouter le lisier d'amidon de maïs; ne pas sauter — le tofu mapo mince manque du corps caractéristique."
          },
          {
            "state": "Perfect",
            "description": "Une sauce écarlate épaisse et brillante enveloppe chaque surface. Oignon vert dispersé. Poussière de maïs poivré sichuan visible. La surface du plat est brillante et tremblante. Des odeurs de chili, de haricots fermentés et d'agrumes du maïs poivré.",
            "action": "Servir sur le riz cuit à la vapeur immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La sauce est trop épaisse pour être collée.",
            "action": "Ajouter 2 cuillères à soupe de stock et remuer délicatement à l'arrière fin à brillant."
          }
        ]
      },
      "feelCue": "Le test définitif: manger une bouchée avec du riz et attendre 10 secondes — vos lèvres devraient commencer à fourmiller et puis aller lentement engourdir aux bords, la chaleur du bâtiment du doubanjiang en parallèle — que la double sensation est mala, et c'est pourquoi le tofu mapo existe."
    }
  ]
};
