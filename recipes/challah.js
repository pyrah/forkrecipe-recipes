export default {
  "repoId": "master_jewish_challah_001",
  "parentRepoId": null,
  "slug": "challah",
  "author": "ForkRecipe Kitchen",
  "title": "Challah tressé",
  "description": "Un pain doré, tressé aussi riche qu'une brioche, mais plus léger, s'est détaché pour révéler une miette d'oreiller et d'oeufs, qui s'efface avec de la douceur au miel et une croûte d'acajou laquée qui se brise en shards ambres.",
  "cuisine": "Juif",
  "culture": "Ashkenazi",
  "category": "breads",
  "tags": [
    "Challah",
    "Juifs",
    "tressé",
    "pain",
    "enrichi",
    "doux",
    "oeufs",
    "shabbat"
  ],
  "difficulty": 3,
  "activeTime": "1 hr",
  "totalTime": "4 hr",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 4,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de pain",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "farine tout usage (légèrement moins croustillante)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude (38 C)",
      "ratioValue": 30,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Gros œufs battus (environ 3 œufs)",
      "ratioValue": 22,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile végétale neutre",
      "ratioValue": 18,
      "defaultUnit": "%",
      "substitutions": [
        "huile d'olive légère",
        "Huile de coco (fondue)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Chérie",
      "ratioValue": 12,
      "defaultUnit": "%",
      "substitutions": [
        "sucre",
        "sirop d'érable"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "levure sèche active (proof first)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Jaune d'œuf + 1 c. à thé d'eau (lavage des œufs)",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": [
        "lavage d'œuf entier (moins d'acajou)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "challah_dough",
      "instructions": "Dans un grand bol, fouetter ensemble l'eau chaude, les œufs battus, l'huile et le miel. Ajouter la levure et remuer brièvement. Ajouter la farine et le sel. Mélanger avec une cuillère en bois jusqu'à ce que la pâte se combine, puis passer au mélange manuel. La pâte sera douce et légèrement collante – plus riche et plus souple que la pâte à pain maigre des œufs et de l'huile. Il ne devrait pas verser, mais il s'accrochera à vos mains. N'ajoutez pas encore de farine supplémentaire — challah a besoin de cette douceur initiale.",
      "visualCue": {
        "primaryTarget": "Une boule douce et dorée qui tient sa forme mais colle légèrement au bol. Plus de couleur que de pâte maigre en raison des œufs et du miel.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mouille et runny; ne tient pas une forme de boule; plus comme une pâte épaisse.",
            "action": "Ajouter la farine 2 cuillères à soupe à la fois jusqu'à ce qu'elle tienne ensemble. Challah est enrichi — il devrait être doux mais non versable."
          },
          {
            "state": "Perfect",
            "description": "Doux, doré, légèrement collant. Ça tient une forme. Des odeurs de miel et d'œufs. Retirez-vous du bol avec un peu d'effort.",
            "action": "Il s'avère et pétrir jusqu'à ce que lisse."
          },
          {
            "state": "Overdone",
            "description": "Stiff et non pliable — comme une pâte à pâtes très ferme. Pale, sans la teinte dorée des œufs.",
            "action": "Ajouter 1 cuillère à café d'eau à la fois jusqu'à ce qu'elle soit douce et souple."
          }
        ]
      },
      "feelCue": "À ce stade, la pâte de Challah ressemble à une pâte à gâteau épaisse qui a à peine traversé la ligne dans une pâte – dense, riche et presque indulgente dans vos mains."
    },
    {
      "nodeId": "step_2",
      "action": "Pétrir",
      "inputs": [
        "challah_dough"
      ],
      "outputState": "developed_dough",
      "instructions": "Agenouiller sur une surface légèrement farinée pendant 10 minutes à la main, ou 7 minutes à vitesse moyenne dans un mélangeur de stand avec un crochet de pâte. La pâte enrichie prend plus de temps à se développer que la pâte maigre parce que la graisse enveloppe les brins de gluten. La pâte va commencer à s'assouplir et devenir progressivement lisse et souple. Il est complètement développé lorsque la surface est soyeuse, légèrement brillante, et s'éloigne de vos mains proprement. Le test de la vitre: étirer une petite pièce — elle devrait être mince à une membrane presque translucide.",
      "visualCue": {
        "primaryTarget": "Une balle lisse, souple et dorée. La surface a un léger reflet de l'huile et des œufs. Revenez lentement en appuyant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours tacky et rugueux; déchire facilement lorsqu'il est étiré. La surface est bosselée plutôt que lisse.",
            "action": "Continuez à pétrir — les pâtes enrichies prennent patience. Vérifiez toutes les 2 minutes."
          },
          {
            "state": "Perfect",
            "description": "Soyeux, doux, éloigne les mains proprement. Étriers minces sans déchirement. La surface brille légèrement. Ça sent richement l'oeuf.",
            "action": "Mettre dans un bol huilé, couvrir et laisser lever jusqu'à doubler."
          },
          {
            "state": "Overdone",
            "description": "Très serré et effiloché; ressort de manière agressive; pâte pétrie à la machine peut sentir chaud.",
            "action": "Couvrir et reposer 15 minutes — le gluten surmené doit se détendre avant de façonner."
          }
        ]
      },
      "feelCue": "La pâte de challah bien kneaded ressemble à du velours chaud – lisse, doux et presque décadent au toucher. Il devrait à peine laisser une trace sur votre paume quand vous la ramassez."
    },
    {
      "nodeId": "step_3",
      "action": "Faire lever",
      "inputs": [
        "developed_dough"
      ],
      "outputState": "risen_dough",
      "instructions": "Placer la pâte dans un bol légèrement huilé, en tournant une fois pour enrober. Couvrir d'une enveloppe en plastique. Laisser monter dans un endroit chaud (26–28 C) pendant 90 minutes jusqu'à doubler. La pâte de Challah augmente plus lentement que la pâte maigre à cause de l'huile et des œufs, qui inhibent légèrement la levure. La patience est essentielle. Ne vous précipitez pas avec de la chaleur supplémentaire — le lent lever construit une saveur plus complexe dans la miettes enrichies.",
      "visualCue": {
        "primaryTarget": "La toux a doublé, la surface est bombée et lisse, et les côtés montrent des lignes d'expansion claires d'où la pâte a grimpé le bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "A peine 50% de plus après 90 minutes. Sensé et serré. Poke ressort immédiatement.",
            "action": "Couvrir et attendre plus longtemps — les pâtes enrichies s'élèvent plus lentement. Déplacez-vous vers un endroit plus chaud près de 28 C."
          },
          {
            "state": "Perfect",
            "description": "Double, bombé, légèrement rigolo. Le poke avec un doigt fariné laisse une fossette lente qui ressort vers la moitié.",
            "action": "Frappe doucement et divise pour tresser."
          },
          {
            "state": "Overdone",
            "description": "Dough a dépassé le double, est très jiggly et légèrement dégonflé au sommet. Des odeurs d'alcool.",
            "action": "Divisez et formez immédiatement. Challah sera un peu moins structuré mais toujours bon."
          }
        ]
      },
      "feelCue": "La pâte de challah bien éprouvée ressemble à une guimauve géante — aérée, légère et tremblante de gaz. Poignez-le tendrement lorsque vous commencez à diviser ou que le gaz s'échappe avec un sifflement."
    },
    {
      "nodeId": "step_4",
      "action": "Façonner",
      "inputs": [
        "risen_dough"
      ],
      "outputState": "braided_challah",
      "instructions": "Frappez doucement la pâte et divisez en 6 brins égaux (ou 3 pour une simple tresse). Rouler chaque brin sur une surface légèrement farinée dans une corde longue de 35 à 40 cm, effilée aux deux extrémités. Pour une tresse à six brins : déposer les brins parallèles, pincer en haut. Nombre 1 (extrême gauche) à 6 (extrême droite). Déplacer le brin 6 sur le brin 1. Déplacer le brin 1 sur les brins 3 et 4. Déplacer le brin 6 sous le brin 4, puis sur le brin 5. Répéter: toujours déplacer le brin d'extrême droite sur l'extrême gauche, puis le brin d'extrême gauche sur les brins 3-4, le brin d'extrême droite sous le brin 4 et sur le brin 5. Pincez en bas et collez les deux bouts sous. Allongez-vous sur une poêle parcheminée. Couvrir et prouver 45 minutes jusqu'à ce qu'il soit visiblement gonflé.",
      "visualCue": {
        "primaryTarget": "Une tresse bien tissée, avec 6 brins clairement définis, assise sur la poêle plutôt que de s'étendre à plat. Les brins sont même de diamètre partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les brins sont inégaux ou la tresse est lâche et large; les écarts entre les brins sont visibles d'en haut; la tresse s'est étendue à plat.",
            "action": "Serrez-vous en couchant des brins plus fermement sous les deux extrémités. Reformer pendant que la pâte est encore froide et ferme."
          },
          {
            "state": "Perfect",
            "description": "Tissage propre à 6 brins, assis haut. Tous les brins d'égale largeur, tresse resserre comme il le prouve. On dirait un challah manuel.",
            "action": "Couvrir d'une serviette et laisser étaler 45 minutes avant le lavage et la cuisson des œufs."
          },
          {
            "state": "Overdone",
            "description": "Le tressage est surproofé : les brins ont fusionné, le tressage s'est étendu largement et plat, aucune définition entre les brins.",
            "action": "Cuire immédiatement avec le lavage de l'œuf — la forme sera placée dans le four bien qu'il puisse être plus plat que l'idéal."
          }
        ]
      },
      "feelCue": "Chaque brin doit se sentir comme un saucisson, lisse, même, avec juste assez de tension pour tenir sa forme de cylindre sans retourner dans une boule quand vous le relâchez."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire au four",
      "inputs": [
        "braided_challah",
        "ing_08"
      ],
      "outputState": "finished_challah",
      "instructions": "Préchauffer le four à 190 C (375 F). Battre le jaune d'œuf avec 1 cuillère à café jusqu'à ce que lisse. Brossez doucement toute la surface de la tresse éprouvée — entrez toutes les crevasses entre les brins. Appliquer deux couches pour une acajou plus profonde. Cuire 30 à 35 minutes jusqu'à ce qu'il soit profondément doré. Vérifiez la température interne : 88-90 C (190-195 F). Si la tresse est brunissante trop vite sur le dessus après 20 minutes, tentez avec du papier. Laisser refroidir sur une grille au moins 30 minutes avant de déchirer.",
      "visualCue": {
        "primaryTarget": "Une riche tresse d'acajou – profondément dorée-brun de la réaction de lavage d'oeuf Maillard, avec la définition du brin encore clairement visible. Le pain semble creux lorsqu'il est tapé sur le fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle, surface légèrement terne. Température intérieure inférieure à 88 C. L'intérieur peut encore être gommé.",
            "action": "Retourner au four pendant 5 à 8 minutes. Le lavage des œufs a besoin de chaleur pour se laquer correctement."
          },
          {
            "state": "Perfect",
            "description": "Acajou profond, surface laquée avec un léger reflet. Définition de brin croustillant. Un bruit creux en bas. Des odeurs de miel chaud et d'œuf grillé.",
            "action": "Laisser refroidir 30 minutes minimum. La déchirure ou la tranche pour révéler la miette d'oreiller légèrement sucrée."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé à croûte noire, odeur amère, lavage des oeufs a brûlé dans les crevasses entre les brins.",
            "action": "Tente avec feuille immédiatement. L'intérieur est probablement fin — le challah brunit rapidement à partir du lavage des œufs."
          }
        ]
      },
      "feelCue": "Un challah cuit au four devrait se sentir plus léger qu'il ne semble — l'œuf et l'huile créent une miette pleine de petites poches d'air doux. Tapez sur le fond : un bruit creux résonnant, pas un coup dense, signale un pain entièrement cuit."
    }
  ]
};
