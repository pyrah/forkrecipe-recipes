export default {
  "repoId": "master_turkish_redlentilsoup_001",
  "parentRepoId": null,
  "slug": "red-lentil-soup",
  "author": "ForkRecipe Kitchen",
  "title": "Soupe de lentilles rouges turques",
  "description": "Soupe veloutée de lentilles rouges, de cumin et de paprika finie avec un tourbillon de beurre brun chili-crimson - réchauffement, soyeux, et profondément satisfaisant.",
  "cuisine": "Turquie",
  "culture": "Anatolien",
  "category": "grains",
  "tags": [
    "turc",
    "anatolien",
    "lentilles",
    "Soupe",
    "végétalien",
    "mélangés",
    "confort",
    "hiver"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 2,
    "bitter": 1,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Lentilles rouges fendues, rincées jusqu'à ce que l'eau soit claire",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon blanc, finement coupé en dés",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Carotte, pelée et coupée en dés",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Paprika doux",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": [
        "paprika fumé"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Base",
      "name": "Pâte de tomates (double concentré)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Matières végétales (ou eau)",
      "ratioValue": 1400,
      "defaultUnit": "ml",
      "substitutions": [
        "Poulet léger"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "huile d'olive pour végétalien"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Spice",
      "name": "Flacons de chili séchés (Bibardage d'pul / Alep préféré)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "flocons de chili réguliers"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire revenir",
      "inputs": [
        "ing_09",
        "ing_02",
        "ing_04",
        "ing_03",
        "ing_08",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "spiced_soup_base",
      "instructions": "Chauffer l'huile d'olive dans un grand pot lourd à feu moyen. Ajouter l'oignon et la carotte et cuire, en remuant de temps en temps, jusqu'à ce que l'oignon soit doux et translucide et que la carotte commence à ramollir — environ 8 minutes. Ajouter l'ail et cuire 1 minute jusqu'à parfumer. Ajouter la pâte de tomate et remuer vigoureusement, jusqu'à ce qu'elle s'assombrisse du rouge vif à une couleur brique plus profonde, environ 2 minutes. Ajouter le cumin, le curcuma et le paprika et remuer constamment pendant 30 secondes jusqu'à ce que les épices fleurissent et deviennent très parfumées.",
      "visualCue": {
        "primaryTarget": "La pâte de tomate a foncé jusqu'à un rouge-brique profond et colle légèrement au pot. Les épices recouvrent les légumes et la casserole sent le cumin grillé et le paprika.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte de tomates est encore rouge vif et n'a pas obscurci. Les épices sentent crus et piquants plutôt que grillés.",
            "action": "Continuer à remuer à feu moyen — la pâte doit caraméliser contre le pot chaud."
          },
          {
            "state": "Perfect",
            "description": "La pâte s'est approfondie jusqu'à un riche brun-rouge foncé. Les épices ont fleuri: parfumé, grillé et légèrement sucré. Le fond du pot montre un film sombre légèrement collé qui déglacera dans la saveur.",
            "action": "Ajouter immédiatement les lentilles et le stock."
          },
          {
            "state": "Overdone",
            "description": "Les épices sentent amers et tranchants. La pâte est devenue brun foncé ou noir sur les bords.",
            "action": "Ajouter un jet de stock immédiatement pour déglacer et refroidir la poêle. L'amertume peut disparaître une fois diluée."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir légèrement collante quand vous faites glisser une cuillère à travers elle — vous voulez une résistance contre le pot, vous disant que l'humidité a cuit et les sucres se concentrent."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "spiced_soup_base",
        "ing_01",
        "ing_10",
        "ing_12"
      ],
      "outputState": "cooked_lentil_soup",
      "instructions": "Ajouter les lentilles rincées dans le pot et remuer pour les enrober dans la base épicée. Verser le bouillon, ajouter le sel et porter à ébullition. Réduire le feu, couvrir partiellement et laisser mijoter de 20 à 25 minutes, en remuant occasionnellement, jusqu'à ce que les lentilles se soient complètement dissoutes dans le liquide et que la soupe soit épaisse et homogène.",
      "visualCue": {
        "primaryTarget": "La soupe est un liquide uniforme, épais, chaud-orange — aucune forme de lentilles distincte visible. Il devrait avoir la consistance d'une soupe à la crème versable.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pièces individuelles de lentilles sont encore visibles et le liquide est mince et se sépare. Les lentilles ont un goût crayeux.",
            "action": "Continuer à mijoter, couvert, pendant 5 à 10 minutes. Les lentilles rouges se dissolvent facilement — la chaleur a besoin de plus de temps."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, épaisse et d'une couleur orange-or profonde. Ça mord comme un porridge. Goûte terreux, doux et profondément salé.",
            "action": "Mélanger jusqu'à ce qu'il soit complètement lisse, puis assaisonner et mélanger le jus de citron."
          },
          {
            "state": "Overdone",
            "description": "La soupe a trop diminué et commence à coller et à cracher. Il est très épais et difficile à remuer.",
            "action": "Ajouter le bouillon chaud ou l'eau à mincer et retirer de la chaleur. Il s'épaissira encore plus quand il sera reposé."
          }
        ]
      },
      "feelCue": "Frottez une cuillerée de soupe entre vos doigts — elle devrait se sentir parfaitement lisse, sans grain de l'amidon non dissous."
    },
    {
      "nodeId": "step_3",
      "action": "Mixer",
      "inputs": [
        "cooked_lentil_soup",
        "ing_11"
      ],
      "outputState": "smooth_lentil_soup",
      "instructions": "Utilisez un mélangeur à main directement dans la casserole et mélangez jusqu'à ce qu'il soit complètement lisse et soyeux — 1-2 minutes. Alternativement mélanger en lots dans un mélangeur de comptoir, ne remplissant pas plus de la moitié à chaque fois. Incorporer le jus de citron. Goûtez et ajustez le sel et le citron – la soupe doit être suffisamment brillante et acide pour que l'arrière de votre gorge fourmille doucement. Retourner à une mijoter douce et ajuster la consistance avec un peu d'eau chaude si nécessaire.",
      "visualCue": {
        "primaryTarget": "Une soupe entièrement lisse, brillante et orangée, la couleur de la fin de l'après - midi. Pas de grumeaux, de fils ou de grains visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il reste une texture: la soupe semble légèrement tachetée et les fils de carotte ou d'oignon sont visibles.",
            "action": "Continuez à mélanger. À ce stade, 30 secondes de mélange feront une différence significative."
          },
          {
            "state": "Perfect",
            "description": "Parfaitement lisse, orange uniforme, avec une surface brillante. Le jus de citron a légèrement éclairci la couleur. La soupe recouvre l'arrière d'une cuillère et laisse un film propre et fin.",
            "action": "Préparer la garniture de beurre de chili et servir."
          },
          {
            "state": "Overdone",
            "description": "La soupe est très pâle — surmenée et aérée, presque mousseuse.",
            "action": "Laisser reposer le feu pendant 2 minutes pour permettre à la mousse de se déposer avant de servir."
          }
        ]
      },
      "feelCue": "La soupe mélangée devrait se sentir comme du velours quand vous dessinez un doigt à travers une cuillère en commun — absolument aucun grain, aucune résistance, juste un poids lisse."
    },
    {
      "nodeId": "step_4",
      "action": "Faire réduire",
      "inputs": [
        "ing_13",
        "ing_14"
      ],
      "outputState": "chili_butter",
      "instructions": "Faire fondre le beurre dans une petite casserole à feu moyen. Cuire, en tourbillonnant, jusqu'à ce que les solides de lait deviennent dorés et qu'ils sentent les noisettes. Retirer du feu et ajouter immédiatement les flocons de chili — ils crèveront et fleuriront dans le beurre chaud. Le beurre va tourner un rouge brique profond presque instantanément.",
      "visualCue": {
        "primaryTarget": "Le beurre est un brun cramoisi profond avec des flocons de chili-rouge suspendus. Le grésil s'est effondré et l'huile est immobile et éclatante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est encore jaune et mousseux; les flocons de chili sont à peine colorés.",
            "action": "Revenez brièvement au feu jusqu'à ce que le beurre brunisse et que le chili fleurisse."
          },
          {
            "state": "Perfect",
            "description": "Beurre rouge-ambre profond avec chili vif. La cuisine sent les épices grillées, les noisettes et la fumée.",
            "action": "Arrosez immédiatement sur des bols de soupe."
          },
          {
            "state": "Overdone",
            "description": "Le beurre est brun très foncé et le chili sent acride et brûlé.",
            "action": "Jeter et commencer frais — le beurre de chili brûlé rendra tout le plat amer."
          }
        ]
      },
      "feelCue": "Le beurre de chili fini devrait se sentir liquide mais substantiel lorsqu'il est incliné dans la poêle — pas l'eau-mince, mais une huile riche et lourde avec de minuscules fragments de chili suspendus."
    },
    {
      "nodeId": "step_5",
      "action": "Assaisonner",
      "inputs": [
        "smooth_lentil_soup",
        "chili_butter"
      ],
      "outputState": "finished_red_lentil_soup",
      "instructions": "Déposer la soupe chaude dans des bols chauds. Tourner une généreuse cuillère à café du beurre de chili sur la surface de chaque bol en spirale. Servir avec des quartiers de citron et du pain croustillant sur le côté. Le beurre saignera dans la soupe au fur et à mesure que le dîner remuera — c'est exact et beau.",
      "visualCue": {
        "primaryTarget": "Un bol de soupe orange foncé avec un tourbillon de beurre de chili sur la surface, ensanglantantant les sentiers rouge-orange aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre de chili est ajouté en trop petite quantité — une mince et pâle stries sans impact de couleur.",
            "action": "Ajouter plus de beurre — le tourbillon doit être vif et généreux, et non timide."
          },
          {
            "state": "Perfect",
            "description": "Une spirale cramoisi sur l'orange profonde. Le beurre flotte sur la surface et les flocons de chili pointent le bord du tourbillon. Le contraste est frappant visuellement.",
            "action": "Servir immédiatement pendant que la température et le contraste de couleur sont à leur meilleur."
          },
          {
            "state": "Overdone",
            "description": "Le beurre a été complètement agité avant de servir et la soupe est maintenant uniformément orange pâle sans drame visuel.",
            "action": "Servez comme il est. Il aura encore un excellent goût — l'effet visuel est parti mais la saveur de chili est maintenant distribuée tout au long."
          }
        ]
      },
      "feelCue": "La soupe doit se sentir comme du velours liquide chaud lorsqu'elle est sirotée — elle enveloppe la langue de poids et de chaleur, la chaleur se construisant lentement à l'arrière de la gorge du beurre de chili."
    }
  ]
};
