export default {
  "repoId": "master_thai_tom-yum-paste_001",
  "parentRepoId": null,
  "slug": "tom-yum-paste",
  "author": "ForkRecipe Kitchen",
  "title": "Tom Yum Paste",
  "description": "Une pâte aromatique concentrée de citronnelle, de galangal, de chaux de kaffir, de chilis séchés et de crevette, l'épine dorsale de la soupe la plus célèbre de Thaïlande, comprimée dans une cuillère qui sent le pays entier. Une cuillère à soupe dissoute dans un bouillon chaud évoque un bol de brillance aigre, épicée et à base de plantes.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "condiments",
  "tags": [
    "Thaï",
    "Tom-Yum",
    "pâte",
    "citronnelle",
    "Galangal",
    "Chili",
    "épicé-sour"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 3,
    "bitter": 0,
    "umami": 4,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Aromatic",
      "name": "Pâtes de citronnelle, partie blanche seulement, coupées en tranches minces",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "citronnelle congelée"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Galangal, frais, pelé et écorché",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "gingembre frais (douleur, saveur différente)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Citrus",
      "name": "Zeste de chaux de Kaffir (à partir de 2 feuilles, ou pelage de chaux de Kaffir)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "zeste de chaux frais (moins complexe)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Heat",
      "name": "Piments thaïs rouges séchés, ensemencés et trempés",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "guajillo séché pour pâte plus douce"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Échalotes pelées et écorchées",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Giroves d'ail, pelées",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "Pâte de crevettes (kapi), emballée dans une feuille et cuite à sec 2 min",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "blanc miso (vegan)",
        "pâte de soja fermentée"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "Feuilles de chaux séchées, émiettées (ou fraîches, très fines)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "zeste de chaux supplémentaire"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Umami",
      "name": "sauce de poisson, pour assaisonnement final",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce de soja (vegan)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Livre",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_09"
      ],
      "outputState": "aromatic_base",
      "instructions": "Mélanger la citronnelle tranchée, le galangal, le zeste de lime kaffir et le sel dans un mortier lourd. Commencer à frapper avec un rythme ferme vers le bas, en tournant le pestle pour faire glisser les fibres dans le centre. Ces aromatiques sont extrêmement fibreux — la citronnelle en particulier a des parois cellulaires boisées qui doivent être complètement écrasées pour libérer leurs huiles volatiles. Pound pendant 8-10 minutes jusqu'à ce qu'il ne reste plus de cordes visibles et que la pâte sente explosivement le citron, le pin et quelque chose de vaguement médicinal. Ajouter une éclaboussure d'eau si elle devient trop sèche pour pouvoir rouler efficacement.",
      "visualCue": {
        "primaryTarget": "Une pâte fibreuse jaune-vert pâle sans cordes de citronnelle visibles. Un intense parfum agrumes-médicinal qui fait que les yeux arrosent légèrement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lemongrass anneaux encore visibles, galangal dans des morceaux reconnaissables, pâte semble stringy et mal intégrée.",
            "action": "Continuez à frapper rythmiquement — ce sont les aromatiques les plus difficiles à décomposer. 10 minutes de travail ne sont pas excessives."
          },
          {
            "state": "Perfect",
            "description": "Doux, cohésif, pâte jaune pâle. Pas de ficelles. Il sent vifment le citron frais, le gingembre et une note galangale de pin.",
            "action": "Ajouter les piments et les alliums."
          },
          {
            "state": "Overdone",
            "description": "La pâte est humide et aqueuse, libérant trop de liquide.",
            "action": "Égoutter un peu du liquide et continuer — les huiles sont ce qui importe, pas la teneur en eau."
          }
        ]
      },
      "feelCue": "Exécutez un doigt à travers la pâte — si elle traîne proprement sans que les cordes ne s'accrochent à votre bout de doigt, la citronnelle est suffisamment brisée."
    },
    {
      "nodeId": "step_2",
      "action": "Livre",
      "inputs": [
        "aromatic_base",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "chili_allium_paste",
      "instructions": "Égoutter les piments trempés et retirer l'excès d'eau. Ajouter les chilis, les échalotes et l'ail au mortier. Continuez à battre, en travaillant chaque ajout progressivement — ajoutez le nouvel ingrédient, livre jusqu'à ce qu'il soit intégré avant d'ajouter le suivant. La pâte tournera de jaune pâle à un rouge-brique profond comme les chilies incorporer. Travaillez encore 8-10 minutes jusqu'à ce que le mélange soit unifié et lisse. Les échalotes et l'ail se décomposent plus facilement que les aromatiques initiaux.",
      "visualCue": {
        "primaryTarget": "Une pâte orangée-rougeâtre profonde, dense et cohésive, avec une couleur ardente et un arôme complexe en couches de chili, d'ail et d'agrumes aromatiques.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux d'échalote ou d'ail encore visibles, la pâte est à deux tons avec des sections pâles et rouges.",
            "action": "Continuer à frapper avec la rotation — les alliums se décomposent rapidement une fois qu'ils sont complètement pressés dans la pâte."
          },
          {
            "state": "Perfect",
            "description": "De couleur rouge brique, lisse et cohésive. Sensations de chaleur de chili concentré, d'ail cru et de citronnelle sous-jacente. Laisse un frottis monocolore sur le mur de mortier.",
            "action": "Ajouter la pâte de crevettes et les feuilles de lime kaffir."
          },
          {
            "state": "Overdone",
            "description": "La pâte est liquéfiée et éclaboussée lorsque le pestle frappe.",
            "action": "Ajoutez une petite pincée de sel pour l'aider à re-cohere, et livrez plus doucement."
          }
        ]
      },
      "feelCue": "La pâte est prête lorsqu'un frottis sur le dos de votre main la tache rouge sans particules visibles — et la chaleur des piments bruts rend votre peau teintée en 30 secondes."
    },
    {
      "nodeId": "step_3",
      "action": "Livre",
      "inputs": [
        "chili_allium_paste",
        "ing_07",
        "ing_08",
        "ing_10"
      ],
      "outputState": "tom_yum_paste",
      "instructions": "Déballez la pâte de crevette grillée de son papier et ajoutez-la au mortier avec les feuilles de lime kaffir émiettées. Livre à intégrer pleinement — la pâte de crevettes ajoutera une note fermentée, profondément umami qui transforme la pâte de simplement épicé-aromatique à complexe et savoureux. Ajouter la sauce de poisson et la plier avec quelques coups de pilon plutôt que de frapper. Bouche : La pâte doit être fortement concentrée – chaude, aigre-aromatique, salée et océanique. Lorsqu'elle est diluée dans un bouillon (1 cuillère à soupe par 200 ml), elle doit produire un tom yum équilibré. Conserver sous une fine couche d'huile au réfrigérateur jusqu'à 2 semaines, ou congeler en portions de cuillère à soupe.",
      "visualCue": {
        "primaryTarget": "Une pâte rouge brique foncée, unifiée et dense, avec des caractéristiques visibles de feuille de lime kaffir et la signature sombre de la pâte de crevette grillée à travers.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte de crevettes est toujours dans des morceaux identifiables, la sauce de poisson est mise en commun plutôt que incorporé.",
            "action": "Pound plus agressivement et plier avec une spatule pour amener le liquide dans la pâte."
          },
          {
            "state": "Perfect",
            "description": "Entièrement intégrée, sombre, piquante et profondément complexe. L'arôme fermenté est présent mais pas écrasant. Un goût minuscule est chaud, aromatique et riche en umami.",
            "action": "La pâte est finie. Entreposez immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La pâte est trop travaillée et huileuse, ou la pâte de crevette était trop grillée et goûtée brûlée.",
            "action": "Ajouter quelques gouttes de jus de lime pour éclaircir. L'amertume diminuera légèrement lorsque la pâte reposera."
          }
        ]
      },
      "feelCue": "La pâte de tom yum finie doit avoir l'air d'un terreau humide — dense, légèrement grincé et uniformément texturé. L'odeur devrait vous faire vouloir immédiatement chauffer une casserole d'eau et faire de la soupe."
    }
  ]
};
