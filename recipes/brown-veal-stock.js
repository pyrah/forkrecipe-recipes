export default {
  "repoId": "master_french_brown_veal_stock_001",
  "parentRepoId": null,
  "slug": "brown-veal-stock",
  "author": "ForkRecipe Kitchen",
  "title": "Stock de veau brun",
  "description": "Fond brun de veau — l'épine dorsale de la cuisine française classique. Des ossements de veau rôtis à un brun de noix profond, laqués avec de la tomate, mariés à un mirepoïx caramélisé et coaxés pendant des heures dans un stock gélatineux brillant la couleur de l'ambre vieux qui se met à un wobble quand froid.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "stocks",
  "tags": [
    "stock",
    "français",
    "Viande bovine",
    "de couleur brune",
    "fond-brun",
    "base",
    "mère"
  ],
  "difficulty": 3,
  "activeTime": "1 hr",
  "totalTime": "9 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 0,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Os de veau (cou, moelle et cou, sciés en morceaux de 5 à 8 cm)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "pied de veau pour la gélatine supplémentaire",
        "os de bœuf (plus riches, moins délicats)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Mirepoix (carotte, oignon, céleri, grossièrement haché)",
      "ratioValue": 20,
      "defaultUnit": "%",
      "substitutions": [
        "poireau au lieu de céleri"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 4,
      "defaultUnit": "%",
      "substitutions": [
        "quelques tomates grillées mûres"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Eau froide (assez couvert de 5 cm)",
      "ratioValue": 250,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Solvent",
      "name": "Vin rouge sec ou eau (pour déglacer le plateau de cuisson)",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": [
        "vin blanc sec",
        "plus d'eau"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Bouquet garni (thyme, feuille de laurier, tiges de persil)",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Maïs de poivre noir (légèrement craqué)",
      "ratioValue": 0.3,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Tête d'ail (répartie sur l'équateur, optionnelle)",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtis",
      "inputs": [
        "ing_01"
      ],
      "outputState": "roasted_bones",
      "instructions": "Chauffer le four à 220°C / 425°F. Étendre les os de veau en une seule couche dans un plateau de torréfaction lourd et rôtir pendant 45-60 minutes, en tournant une ou deux fois, jusqu'à ce qu'ils soient brun noyer même profond et que la moelle bouillonne. Ce brunissement Maillard est la couleur entière et la profondeur d'un stock brun — les os pâles font le stock pâle et faible.",
      "visualCue": {
        "primaryTarget": "Les os sont un uniforme brun-or foncé à acajou sur chaque visage, scintillement avec rendu gras, et le plancher du plateau est peint avec un fond brun collant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les os sont blonds ou légèrement bronzés; le plateau est encore pâle et il y a peu d'affection et aucun arôme rôti.",
            "action": "Retournez-les au four — la couleur est la saveur ici, continuez à rôtir jusqu'à ce qu'ils atteignent un brun foncé."
          },
          {
            "state": "Perfect",
            "description": "Même les os noyer-brun, odeur profondément torréfié, un riche fond brun collé au plateau, gras rendu et clair.",
            "action": "Éparpiller le mirepix et la pâte de tomate sur les os et continuer à rôtir."
          },
          {
            "state": "Overdone",
            "description": "Les os sont noircis aux bords et le fond du plateau est noirci et sent l'acre.",
            "action": "Tirez le plateau à la fois; jetez toute graisse gravement brûlée et évitez le fond carbonisé lors du déglaçage."
          }
        ]
      },
      "feelCue": "La cuisine doit sentir la viande rôtie et les os grillés, chauds et noisette — jamais de fumée ou de brûlure. La graisse dans le plateau doit être claire ambre, pas noircir."
    },
    {
      "nodeId": "step_2",
      "action": "Caramélise",
      "inputs": [
        "roasted_bones",
        "ing_02",
        "ing_03"
      ],
      "outputState": "browned_base",
      "instructions": "Déposer le mirepoïx sur les os brunis, mettre la pâte de tomate entre eux, et retourner le plateau au four pendant 20-25 minutes. Faire cuire jusqu'à ce que les légumes soient adoucis et caramélisés aux bords et que la pâte de tomate s'est assombrie du rouge vif à la brique — ce «pinçage» de la pâte fait cuire son acidité brute et approfondit la couleur et la saveur du stock fini.",
      "visualCue": {
        "primaryTarget": "Mirepoix est bruni aux bords et sombre, et la pâte de tomate a frit à une couleur de brique rouillée s'accrochant aux os et au plateau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont encore fermes et pâles; la pâte de tomate est rouge vif et sent cru et teinté.",
            "action": "Continuez à rôtir — la pâte doit perdre son bord brut et tranchant et tourner la couleur de la brique avant que les os entrent dans le pot."
          },
          {
            "state": "Perfect",
            "description": "Mirepoix est doux et caramélisé, pâte de tomate foncée à la brique avec un arôme torréfié doux, affection approfondie mais non brûlée.",
            "action": "Transférer les os et les légumes dans un grand dépôt et déglacer le plateau."
          },
          {
            "state": "Overdone",
            "description": "Les légumes et la pâte sont noirs et le plateau sent fortement amer.",
            "action": "Déplacez immédiatement tout de la chaleur et laissez derrière eux les grattages les plus brûlés pour qu'ils ne puissent pas rendre le stock amer."
          }
        ]
      },
      "feelCue": "L'odeur passe de l'oignon cru et de la tomate pointue à quelque chose de doux et torréfié. Les légumes doivent donner facilement lorsqu'ils sont pressés contre le plateau."
    },
    {
      "nodeId": "step_3",
      "action": "Déglacement",
      "inputs": [
        "browned_base",
        "ing_05"
      ],
      "outputState": "deglazed_pot",
      "instructions": "Soulevez les os et les légumes dans une grande réserve. Placer le plateau de cuisson vide sur un brûleur, verser dans le vin ou l'eau, et laisser mijoter, grattant avec une cuillère en bois pour dissoudre tous les morceaux du précieux fond brun. Versez ce liquide déglacant sombre sur les os de la casserole — aucune de cette saveur ne doit être gaspillée.",
      "visualCue": {
        "primaryTarget": "Le plancher du plateau est propre et le liquide de déglacement est brun foncé et brillant, portant tout le fond rôti dans le pot.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Une grande partie du fond brun est toujours collé dur au plateau et le liquide est mince et pâle.",
            "action": "Continuer à mijoter et à gratter — tricoter la cuillère dans les coins jusqu'à ce que le fond se lève et se dissout."
          },
          {
            "state": "Perfect",
            "description": "Le bac est nettoyé par le liquide mijotant, qui est maintenant brun foncé et concentré.",
            "action": "Versez-le sur les os et construisez le pot avec de l'eau et des aromatiques."
          },
          {
            "state": "Overdone",
            "description": "Le liquide a réduit presque à la sécheresse et commence à attraper et à brûler à nouveau.",
            "action": "Ajouter un éclaboussure plus d'eau à la fois et gratter rapidement avant qu'il ne brûle."
          }
        ]
      },
      "feelCue": "Écouter le fraicheur qui craque sous la cuillère pendant que le liquide se détache; le plateau devrait se sentir lisse et propre au moment où tu finis."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "deglazed_pot",
        "ing_04",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "simmered_stock",
      "instructions": "Ajouter de l'eau froide pour couvrir les os d'environ 5 cm, puis laisser mijoter lentement. Écraser la mousse grise et la graisse qui se lèvent dans les 20 premières minutes. Sucez le bouquet garni, les grains de poivre et l'ail, puis maintenez la plus douce mijotez (une bulle brisant la surface toutes les secondes ou deux) à découvert pendant 6-8 heures, garnissant d'eau pour garder les os submergés. Ne le laissez jamais bouillir, ou la graisse émulsifie et le stock devient nuageux.",
      "visualCue": {
        "primaryTarget": "Un liquide ambré clair et profond qui tremble à peine avec des bulles paresseuses, sa surface écréme de scum et de graisse, sentant richement la viande rôtie.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est pâle, mince et faible ; une goutte refroidie sur une cuillère reste aqueuse sans corps.",
            "action": "Continuez à mijoter — l'extraction de la gélatine et de la saveur est lente, et un véritable stock brun a besoin de longues heures de patient."
          },
          {
            "state": "Perfect",
            "description": "Ambre profond, clair, corsé; une goutte refroidie se sent légèrement collante entre le doigt et le pouce, montrant que la gélatine a été tirée.",
            "action": "Arrête de t'écraser, laisse-le se calmer, et tends."
          },
          {
            "state": "Overdone",
            "description": "Le niveau a baissé trop loin et le stock est trouble et gras de l'ébullition, ou a un goût surconcentré et plat.",
            "action": "Ajouter de l'eau pour recouvrir et baisser la chaleur pour laisser mijoter à nu; enlever la graisse émulsifiée de la surface."
          }
        ]
      },
      "feelCue": "Frotter une goutte refroidie entre le doigt et le pouce — quand il devient légèrement collant et vos doigts veulent s'accrocher ensemble, la gélatine est dans le stock et il est presque fini. Gardez la surface à peine tremblante, ne roulez jamais."
    },
    {
      "nodeId": "step_5",
      "action": "Souche & Réduire",
      "inputs": [
        "simmered_stock"
      ],
      "outputState": "fond_brun_de_veau",
      "instructions": "Placez le stock doucement dans un tamis fin recouvert de mousseline humide dans un pot propre, en perturbant les os aussi peu que possible afin que les sédiments restent derrière. Jeter les os et les aromatiques. Si vous voulez plus de profondeur, laissez mijoter le stock tendu pour le réduire de moitié. Refroidir rapidement, puis refroidir — la graisse sera mise sur le dessus pour décoller, et le stock en dessous devrait mettre à une gelée douce et tremblante.",
      "visualCue": {
        "primaryTarget": "Un stock d'ambre clair et brillant qui, une fois réfrigéré, se met à une gelée oscillante avec un bouchon de graisse pâle qui soulève proprement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock entraîné reste liquide et lâche lorsqu'il est complètement froid, avec peu ou pas de set.",
            "action": "Remettez-le dans la casserole et réduisez encore pour concentrer la gélatine et la saveur, puis re-froidissez et vérifiez l'ensemble."
          },
          {
            "state": "Perfect",
            "description": "Le stock froid contient une gelée douce et moussante; la saveur est profonde, propre et salée, la couleur est un ambre clair.",
            "action": "Retirer le bouchon et conserver : réfrigérer jusqu'à 4 jours, ou congeler en portions pour sauces et braises."
          },
          {
            "state": "Overdone",
            "description": "Réduit jusqu'ici, il se met à un bloc dur, caoutchouteux et goûte salé ou dur.",
            "action": "Déplacez-vous avec de l'eau dans le corps que vous voulez avant d'utiliser, dégustez pendant que vous diluez de nouveau pour équilibrer."
          }
        ]
      },
      "feelCue": "Soulevez lentement et discrètement — le prix est un stock brillamment clair. Lorsque la gelée froide oscille sous un robinet du doigt et glisse proprement sur une cuillère, vous avez un vrai brun tendre."
    }
  ]
};
