export default {
  "repoId": "master_italian_sourdoughfocaccia_001",
  "parentRepoId": null,
  "slug": "sourdough-focaccia",
  "author": "ForkRecipe Kitchen",
  "title": "Sourdough Focaccia",
  "description": "Focaccia à autruche fermentée lentement — des bassins d'huile d'olive se déposent dans des fossettes pressées par les doigts au-dessus d'une miette ouverte, à toile, finie avec du sel flocé et du romarin, la croûte craque et caramélisée sur le fond.",
  "cuisine": "Italien",
  "culture": "Ligurien",
  "category": "breads",
  "tags": [
    "focaccia",
    "Pâtes alimentaires",
    "Italien",
    "Huile d'olive",
    "ligurienne",
    "ferment lent",
    "romarin",
    "fossettes"
  ],
  "difficulty": 3,
  "activeTime": "35 min",
  "totalTime": "24 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 3,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de pain",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "tipo 0 farine",
        "tout usage (moins de mâcher)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Leavener",
      "name": "Démarrage actif à l'aurore (hydratation à 100%, alimenté il y a 8-12 heures)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau chaude (30–32 C)",
      "ratioValue": 75,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive extra vierge (en pâte)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive extra-virgine (pour poêle et vidange)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Sel de mer blanc",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Sel de maldon"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Graines de romarin fraîches",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Thym frais",
        "Feuilles de sauge"
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
        "ing_05"
      ],
      "outputState": "sourdough_focaccia_dough",
      "instructions": "Vérifier que le démarreur est actif: il doit flotter dans l'eau et sentir agréablement aigre et levure. Dans un grand bol, mélanger l'eau chaude, le démarreur et l'huile d'olive. Ajouter la farine et le sel. Mélanger avec une main mouillée ou une spatule jusqu'à ce qu'il ne reste plus de farine sèche — environ 3 minutes. Contrairement à la focaccia commerciale, cette pâte se déplace plus lentement et bénéficie de la patience. Couvrir et laisser reposer 30 minutes pour autolyser.",
      "visualCue": {
        "primaryTarget": "Une pâte rugueuse, cohésive et très humide avec une surface légèrement chaotique et sans taches sèches. Un flotteur de départ dans l'eau de mélange confirme sa disponibilité.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les poches de farine sèche restent. La toux n'est pas complètement combinée.",
            "action": "Pliez la farine sèche au centre avec une main mouillée. Ajouter une cuillère à café d'eau si vraiment sèche."
          },
          {
            "state": "Perfect",
            "description": "Uniformement combiné, humide, humide. Les odeurs de la culture d'entrée — aigre et levure. Pas de taches sèches.",
            "action": "Couvrir et reposer 30 minutes, puis commencer à plier."
          },
          {
            "state": "Overdone",
            "description": "Surmélangé — la pâte est déjà lisse et le gluten semble très développé.",
            "action": "Continuez. La focaccia auriculeuse s'accommodera : elle a besoin de gluten fort pour la miette ouverte."
          }
        ]
      },
      "feelCue": "Cette pâte devrait se sentir plus humide et plus fluide que la version commerciale du yeast — elle s'accroche au bol et s'étire dans de longues feuilles soyeuses plutôt que de s'éloigner proprement. Le démarreur le rend plus élastique, presque vivant."
    },
    {
      "nodeId": "step_2",
      "action": "Plier",
      "inputs": [
        "sourdough_focaccia_dough"
      ],
      "outputState": "developed_sourdough_focaccia",
      "instructions": "Effectuez quatre séries de plis de bobines sur 2 heures : mouillez votre main, glissez-la sous la pâte, soulevez toute la masse et laissez-la plier sous elle-même. Faites tourner le bol à 90 degrés et répétez. Effectuez un jeu toutes les 30 minutes pendant les deux premières heures. Après le quatrième set, couvrir et laisser le ferment en vrac à la température ambiante jusqu'à ce que la pâte soit de 50 à 75 % plus grande, visiblement bouillie et aérée — généralement 3 à 5 heures de plus selon la température ambiante et la résistance au démarrage.",
      "visualCue": {
        "primaryTarget": "Après le ferment en vrac : la pâte a grandi de 50 à 75 %, est visiblement bouillie, bombée sur le dessus, et grince dans une vague lorsque le bol est secoué.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toux à peine cultivée. Augmentation de moins de 30%. Quelques bulles. Le démarrage a pu être faible ou trop froid.",
            "action": "Continuez à fermenter. Passez à un endroit plus chaud. Sourdough n'est pas sur un calendrier rigide — c'est fait quand c'est fait."
          },
          {
            "state": "Perfect",
            "description": "50 à 75 % plus gros, clairement bubble et aéré, le dôme se forme. Jiggles quand j'ai bu. Ça sent agréablement tannant. Grandes bulles visibles le long des parois du bol.",
            "action": "Transférer dans la poêle inondée d'huile d'olive pour la montée finale."
          },
          {
            "state": "Overdone",
            "description": "Plus que doublé, commençant à avoir l'air plat ou effondré. Très aigre odeur. La toux est molle et ne tient pas sa forme.",
            "action": "Transférer immédiatement dans la poêle et cuire sans plus tarder. Ne pas fosser avant de cuire."
          }
        ]
      },
      "feelCue": "Par le dernier pli, la pâte à augure devrait se sentir plus légère dans vos mains avec chaque ensemble — comme si l'air était tissé dans le tissu de la pâte. Il s'étend plus loin sans déchirer et tient sa forme brièvement avant de se détendre lentement."
    },
    {
      "nodeId": "step_3",
      "action": "Preuve",
      "inputs": [
        "developed_sourdough_focaccia",
        "ing_06"
      ],
      "outputState": "pan_proofed_focaccia",
      "instructions": "Verser une généreuse marmite d'huile d'olive (au moins 3 cuillerées à soupe) dans une demi-bouilloire. Astucez la pâte et étirez-la doucement vers les bords. Couvrir lâchement de plastique et réfrigérer pendant la nuit (8 à 12 heures) pour une épreuve finale lente et froide. Le lendemain, retirer du réfrigérateur 2 heures avant la cuisson. La pâte aurait dû s'étendre pour remplir la plus grande partie de la casserole et avoir l'air gonflé et aéré.",
      "visualCue": {
        "primaryTarget": "La toux remplit la casserole, légèrement bombée et nettement gonflée, avec des bulles visibles sous la surface huilée après être arrivée à la température ambiante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux remplit moins de 70 % de la poêle et semble dense, pas aérée, après être arrivée à la température.",
            "action": "Laissez-le à température ambiante pendant encore 1 à 2 heures. Le retard froid ralentit significativement la levure."
          },
          {
            "state": "Perfect",
            "description": "La pâte couvre 90 à 100 % de la poêle, est visiblement gonflée et bouillie, et grippe lorsque la poêle est bouchée. De grandes bulles sont visibles à travers l'huile.",
            "action": "Fossez et faites cuire immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La toux est très gonflée et commence à avoir l'air dégonflée ou plate. Les bulles sont grandes et la surface semble fragile.",
            "action": "Fossez et faites cuire immédiatement."
          }
        ]
      },
      "feelCue": "Appuyez sur la pâte froide de focaccia avec un bout de doigt huileux — après 2 heures à température ambiante, il devrait appuyer lentement et revenir à mi-chemin sur 3-4 secondes. Si elle revient instantanément, donnez-lui plus de temps. S'il s'effondre et ne ressort pas, cuire immédiatement."
    },
    {
      "nodeId": "step_4",
      "action": "Fosse",
      "inputs": [
        "pan_proofed_focaccia",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "dimpled_sourdough_focaccia",
      "instructions": "Arrosez généreusement l'huile d'olive supplémentaire sur la surface de la pâte. Étendez vos doigts et appuyez fermement sur la pâte jusqu'au fond de la poêle, créant ainsi des fossettes profondes sur toute la surface. Ne soyez pas timide — appuyez fermement. Éparpiller les brins de romarin frais et le sel de mer. L'huile sera mise dans les fossettes. Cuire immédiatement à 230 C (450 F).",
      "visualCue": {
        "primaryTarget": "Un paysage de fossettes spectaculaires et profondes avec piscine d'huile d'olive dans chaque cratère. Des brins de romarin éparpillés. Scintillant de sel à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des fossettes peu profondes qui ont pour la plupart jailli. L'huile glisse sur les côtés.",
            "action": "Pressez de plus en plus, jusqu'à la poêle. La pâte peut prendre cette force."
          },
          {
            "state": "Perfect",
            "description": "Des cratères profonds avec piscine d'huile dans chacun. La pâte entre fossettes est montée dans de petites collines. Le romarin et le sel sont également placés.",
            "action": "Dans le four immédiatement. Chaque seconde retarde le ressort du four."
          },
          {
            "state": "Overdone",
            "description": "Frappé trop vigoureusement et déchiré à travers la pâte dans les endroits. Une fuite d'huile.",
            "action": "Appuyez doucement sur les zones déchirées à nouveau ensemble. Le four guérira les larmes mineures."
          }
        ]
      },
      "feelCue": "Votre bout des doigts devrait rencontrer de la pâte douce, donnant, puis sentir soudainement la résistance lissée du fond de la poêle recouverte d'huile. Cette sensation en deux étapes — pâte molle, puis poêle dure — est la confirmation que vous avez pressé tout le chemin à travers pour créer de véritables fossettes."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire",
      "inputs": [
        "dimpled_sourdough_focaccia"
      ],
      "outputState": "finished_sourdough_focaccia",
      "instructions": "Cuire à 230 °C (450 °F) sur le support intermédiaire inférieur pendant 20 à 25 minutes jusqu'à ce que le dessus soit profondément doré avec des taches blister plus foncées aux pics de fossette et que le fond soit croustillant et caramélisé. Soulevez un coin avec une spatule pour vérifier le fond. Retirez immédiatement de la poêle sur un support en fil pour préserver le fond croustillant.",
      "visualCue": {
        "primaryTarget": "Un haut en or profond avec des pics blisters plus foncés et des bords de fossettes caramélisées. Le fond est un riche caramel-brun qui craque audiblement quand la poêle est tapée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Haut en or pâle, fond doux et blond. Pas de crépitement.",
            "action": "Retournez au four. Déposer au support le plus bas pour la chaleur du fond. 3-5 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "Top riche en or avec des blisters carbonisés aux pics de fossette. Le fond est brun caramel profond et craque quand le coin est levé. La focaccia semble creuse quand elle est tapée.",
            "action": "Transférer immédiatement sur une grille. Le fond caramélisé deviendra la fierté de ce pain."
          },
          {
            "state": "Overdone",
            "description": "Haut brun foncé aux bords très foncés. Une odeur amère du romarin.",
            "action": "Coupez les bords les plus sombres. L'intérieur est probablement encore excellent."
          }
        ]
      },
      "feelCue": "Tapez sur le fond de la focaccia — elle doit sonner d'un son propre et creux, comme frapper sur le bois, plutôt qu'un bruit terne. La croûte inférieure doit se sentir rigide et sèche sous votre mèche : cette croustillante de la caramélisation à l'huile d'olive est le joyau de la couronne de la focaccia aurifère."
    }
  ]
};
