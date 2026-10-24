export default {
  "repoId": "master_indonesian_rendang_001",
  "parentRepoId": null,
  "slug": "rendang",
  "author": "ForkRecipe Kitchen",
  "title": "Boeuf Rendang",
  "description": "L'extraordinaire curry de boeuf sec du Minangkabau — des morceaux de bœuf cuits lentement pendant des heures dans du lait de coco avec une pâte complexe de galangal, de citronnelle et de chili jusqu'à ce que tous les liquides s'évaporent et les frites de viande dans leur propre graisse libérée, se revêtement dans une croûte d'épices sombre, presque noire, intensement concentrée.",
  "cuisine": "Indonésien",
  "culture": "Minangkabau",
  "category": "proteins",
  "tags": [
    "par an",
    "Minangkabau",
    "boeuf",
    "lait de coco",
    "curry sec",
    "épicé",
    "Fête"
  ],
  "difficulty": 4,
  "activeTime": "1 hr",
  "totalTime": "5 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Bouchée de boeuf ou côte courte, coupée en morceaux de 5 cm",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "poitrine de boeuf",
        "épaule de chèvre"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Lait de coco plein gras",
      "ratioValue": 800,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Pâtes de citronnelle, meurtries et liées en un nœud",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Feuilles de citron vert de Kaffir (pourpre de jeruk)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Feuilles turcumaniques (daun kunyit), déchirées (facultatif)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Noix de coco déshydratée grillée (kerisik)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Sweetener",
      "name": "Sucre de palme (gula merah), râpé",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brun foncé"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Heat",
      "name": "Piments rouges séchés, trempés dans l'eau chaude",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "2 c. à soupe de pâte de chili"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Heat",
      "name": "Chilies rouges rouges fraîches",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "poivre de Cayenne (utiliser moins)"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Allium",
      "name": "Échalotes, pelées et hachées grossièrement",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Allium",
      "name": "Giroves d'ail, pelées",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Aromatic",
      "name": "Galangal frais, pelé et tranché",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "galangal congelé",
        "2 c. à thé en poudre galangale"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Aromatic",
      "name": "Gingembre frais, pelé et tranché",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_15",
      "role": "Spice",
      "name": "Curcuma frais, pelé ou 1 c. à thé, broyé",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "1 c. à soupe de curcuma"
      ]
    },
    {
      "ingId": "ing_16",
      "role": "Fat",
      "name": "Huile neutre pour friture de pâte",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mixer",
      "inputs": [
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13",
        "ing_14",
        "ing_15"
      ],
      "outputState": "rempah_paste",
      "instructions": "Égoutter les piments séchés trempés. Mélanger tous les ingrédients en pâte — chilis séchés, chilis frais, échalotes, ail, galangal, gingembre et curcuma frais — dans un mélangeur ou un robot culinaire. Ajouter un jet d'eau (2 à 3 cuillères à soupe) pour aider les lames à attraper. Mélanger à une pâte lisse et fine, grattant les côtés plusieurs fois. La pâte doit avoir la consistance d'un hummus épais sans morceaux visibles d'échalote ou de galangal restant. Goûtez-le cru: il devrait être farouchement aromatique, brillant avec du chili, et piquant avec de l'allium. C'est le rempa, l'âme du rendang.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, rouge-orange vif sans bosses visibles, qui sent intensément le chili, l'échalote, le galangal et le curcuma frais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est épaisse et rugueuse, avec des morceaux visibles d'échalote, de galangal ou de chili. La texture est inégale.",
            "action": "Continuer le mélange, en grattant fréquemment les côtés. Ajouter une autre cuillère à soupe d'eau si les lames ne sont pas attraper."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse et homogène — soyeux, épais, profondément aromatique. La couleur est rouge-orange vif du curcuma et du chili.",
            "action": "Faire frire le rempa immédiatement ou réfrigérer jusqu'à 24 heures à l'avance."
          },
          {
            "state": "Overdone",
            "description": "La pâte a été mélangée si longtemps qu'elle a été aérée et devenue mousseuse et orange pâle.",
            "action": "Procéder — la mousse se dissipe dans la poêle. La saveur n'est pas affectée."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité entre vos doigts : vous devriez sentir la douceur avec seulement la résistance fibreuse la plus faible du galangal. Tout grittness signifie plus de mélange est nécessaire."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "rempah_paste",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_16"
      ],
      "outputState": "fried_rempah",
      "instructions": "Chauffer l'huile dans un grand pot ou un wok lourd à feu moyen. Ajouter la pâte de rempa, la citronnelle, les feuilles de lime kaffir et les feuilles de curcuma. Faire frire, en remuant presque constamment, pendant 12–18 minutes. La pâte crachera et sautera, puis s'assombrira lentement et commencera à coller au pot. Continuez à remuer — ce mouvement constant empêche la combustion et élimine l'humidité brute dans les aromatiques. Le rempah est prêt quand il a obscurci plusieurs nuances à un rouge-brique profond, l'huile commence à se séparer et baigner autour de la pâte, et la cuisine se remplit d'un arôme grillé, parfumé plutôt que l'odeur brute aiguë de la pâte non cuite.",
      "visualCue": {
        "primaryTarget": "Pâte rouge brique foncée qui a diminué d'environ un tiers, avec de l'huile claire et parfumée visiblement baissant autour et se séparant des solides.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore orange vif et sent cru et vif. Aucune séparation d'huile visible.",
            "action": "Continuez à frire. Le rempa non frit donne un goût cru et dur au plat final. La frite pleine de 15 minutes n'est pas négociable."
          },
          {
            "state": "Perfect",
            "description": "Profond, rouge brique foncé, parfumé avec un arôme complexe grillé. L'huile brille séparément aux bords de la pâte. Volume significativement réduit.",
            "action": "Ajouter les morceaux de boeuf et remuer soigneusement."
          },
          {
            "state": "Overdone",
            "description": "La pâte est collée et brûlée dans des taches — des taches brunes foncées au fond du pot, une odeur acride.",
            "action": "Retirer du feu, racler le pot et jeter la couche brûlée. Ajouter une touche de lait de coco pour déglacer avant de continuer."
          }
        ]
      },
      "feelCue": "Écouter le changement de son : le premier craché fort et humide et le sifflement de la pâte laisseront peu à peu place à un étourdissement plus sec et plus silencieux lorsque l'humidité se consume. Ce silence indique que le Rempa est presque terminé."
    },
    {
      "nodeId": "step_3",
      "action": "Braiser",
      "inputs": [
        "fried_rempah",
        "ing_01",
        "ing_02",
        "ing_07",
        "ing_08",
        "ing_06"
      ],
      "outputState": "simmering_rendang",
      "instructions": "Ajouter les morceaux de boeuf au rempa frit et remuer pour enrober chaque surface. Verser le lait de coco, ajouter le sel et le sucre de palme et mélanger. Porter à ébullition à feu vif, puis laisser mijoter vigoureusement. Le liquide sera jaune orange pâle. Cuire à découvert, en remuant occasionnellement au début et plus fréquemment que le liquide diminue. Après environ 1,5 à 2 heures, la plupart du liquide se sera évaporé. Ajoutez maintenant le kérisik (noix de coco grillée), il absorbe le liquide restant, épaissit la sauce et ajoute une richesse en noix. Continuez à cuisiner.",
      "visualCue": {
        "primaryTarget": "Un curry épais, de couleur profonde avec le bœuf entièrement submergé dans une sauce riche, brun caramel qui n'est plus liquide mais épais et collant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore pâle, mince et aqueuse. Le lait de coco n'a pas encore diminué de façon significative. Le boeuf n'est pas encore tendre.",
            "action": "Continuez à mijoter à découvert. Cette étape prend du temps — 2 heures ou plus selon la casserole et la chaleur."
          },
          {
            "state": "Perfect",
            "description": "La sauce est un caramel-brun profond, épais, et s'accroche au boeuf. L'huile de coco s'est séparée et a commencé à se mettre en commun. Le boeuf produit facilement lorsqu'il est pressé avec une cuillère.",
            "action": "Maintenant, entrez dans l'étape de friture à sec: continuez la cuisson en remuant fréquemment jusqu'à ce que l'huile frite le boeuf dans la croûte d'épices."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite trop vite avant que le boeuf ne soit tendre. Le fond du pot brûle et le bœuf est encore dur.",
            "action": "Ajouter 200 ml de lait de coco ou d'eau, baisser la chaleur, couvrir partiellement et continuer. Le boeuf a besoin de temps pour décomposer le collagène."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau de bœuf à l'arrière d'une cuillère en bois: il devrait offrir une résistance initiale qui donne sans que le boeuf tombe en morceaux — comme presser un champignon ferme. Si elle se sent encore printanière et inébranlable, elle a besoin de plus de temps dans le liquide."
    },
    {
      "nodeId": "step_4",
      "action": "Faire réduire",
      "inputs": [
        "simmering_rendang"
      ],
      "outputState": "dry_rendang",
      "instructions": "Une fois la sauce épaisse et l'huile séparée, abaissez légèrement la chaleur et continuez la cuisson, en remuant presque constamment. Le liquide est essentiellement parti et le boeuf commence à frire dans l'huile de coco et d'épices libérée. Cette dernière étape est transformatrice et prend encore 30 à 60 minutes de patient, en remuant attentivement. La sauce enrobera la viande dans une croûte noire et presque noire, et l'arôme passera d'un parfum séché à quelque chose de plus profond, plus sec et presque fumé. Le pot va siffler et craquer. C'est Rendang qui devient Rendang. Goûtez et ajustez le sel. Servir avec du riz cuit à la vapeur.",
      "visualCue": {
        "primaryTarget": "Des morceaux de boeuf enrobés d'une croûte d'épices foncée, presque noire et profondément parfumée qui brille avec de l'huile de coco — presque aucune sauce restant dans la casserole, juste de l'huile et de la viande enrobée d'épices.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le boeuf est encore recouvert d'une couche humide visible, semblable à une sauce, plutôt qu'une croûte sèche. La couleur est brun boueux plutôt que noir acajou foncé.",
            "action": "Continuez à cuisiner et à remuer. La transformation du curry humide au rendang sec est une question de patience."
          },
          {
            "state": "Perfect",
            "description": "Chaque morceau de boeuf est enrobé d'une croûte foncée, d'aspect sec, scintillante d'épices concentrées. Le fond du pot est sec et parfumé. Le bœuf se sépare facilement avec deux fourchettes.",
            "action": "Goûtez et ajustez le sel. Reposez-vous 10 minutes avant de servir."
          },
          {
            "state": "Overdone",
            "description": "La croûte d'épices est carbonisée, la viande sent brûlée plutôt que grillée, et la saveur est acride.",
            "action": "Ajouter 100 ml d'eau pour lever la couche brûlée et retirer immédiatement de la chaleur. L'intérieur des morceaux de boeuf est souvent encore excellent; jeter la croûte extérieure brûlée."
          }
        ]
      },
      "feelCue": "Prenez un morceau du rendang fini avec des pinces et tapez-le doucement contre le pot: il devrait faire un son sec, presque cuireux, et la croûte devrait se sentir ferme plutôt que humide. La viande à l'intérieur devrait être déchiquetée facilement lorsqu'elle est retirée des doigts."
    }
  ]
};
