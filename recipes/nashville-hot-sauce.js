export default {
  "repoId": "master_american_nashville-hot-sauce_001",
  "parentRepoId": null,
  "slug": "nashville-hot-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce chaude de Nashville",
  "description": "La sauce incendiaire à base de cayenne et de lard qui est brossée sur le poulet fraichement frit au poulet chaud de Prince et ses descendants — une pâte rouge profonde, brillant de cayenne, de sucre brun, et d'épices qui trempe dans la croûte et construit une chaleur lente et enroule qui gagne la réputation de sa ville. Le saindoux n'est pas négociable; c'est ce qui rend la sauce collante.",
  "cuisine": "Américain",
  "culture": "Nashville, Tennessee",
  "category": "condiments",
  "tags": [
    "américains",
    "Sucre chaude",
    "nashville",
    "cayenne",
    "Choux frits",
    "condiment",
    "épicé"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "15 min",
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
    "sour": 1,
    "bitter": 1,
    "umami": 2,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Lard ou huile de friture neutre (à partir de la friteuse de poulet frite, tendue)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre clarifié (richisseur)",
        "huile végétale neutre (vegan)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Poivre Cayenne (dépoli, pot fraîchement ouvert)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "poudre de poivre fantôme (plus chaud)",
        "ancho + Cayenne (50:50, moins de chaleur plus de saveur)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre brun (brûlé, emballé)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre blanc (moins de profondeur)",
        "miel (ajouter après refroidissement légèrement)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Paprika fumé",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika doux",
        "Paprika fumé chaud (augmenter encore la chaleur)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poudre d'ail",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "poudre d'oignon (sweeter)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre blanc (poivre)",
        "sauce chaude (ajoute plus de complexité)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Chaleur",
      "inputs": [
        "ing_01"
      ],
      "outputState": "hot_fat",
      "instructions": "Chauffer doucement le saindoux ou l'huile de friture dans une petite casserole à feu moyen jusqu'à ce qu'elle atteigne environ 150–160 °C (300–320 °F) — tout juste commencer à mijoter et à se déplacer dans la casserole en tourbillonnant. Cette température est assez chaude pour fleurir les épices et dissoudre le sucre sans brûler. Si vous utilisez de l'huile de friture de poulet fraîchement frit, il est probablement déjà à la bonne température.",
      "visualCue": {
        "primaryTarget": "Le saindoux ou l'huile est entièrement liquide, limpide et légèrement chatoyant à la surface. De petits courants paresseux de convection sont visibles lorsque la casserole est agitée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La graisse est chaude mais pas encore chatoyante. Une pincée de cayenne est tombée dans l'eau et ne fait pas de étourdissement.",
            "action": "Continuez le chauffage. La graisse doit être assez chaude pour fleurir les épices instantanément ou la sauce aura un goût cru et poussiéreux."
          },
          {
            "state": "Perfect",
            "description": "Graisse claire et chatoyante avec faible mouvement de convection. Une goutte d'eau s'éclabousse immédiatement.",
            "action": "Retirer du feu et ajouter toutes les épices à la fois."
          },
          {
            "state": "Overdone",
            "description": "La graisse est de fumer ou des odeurs brûlées. Très sombre si on utilise du saindoux.",
            "action": "Jeter et commencer frais avec de la graisse froide. La graisse surchauffée rendra les épices goût acride et amer."
          }
        ]
      },
      "feelCue": "Tenez votre main 10 cm au - dessus de la poêle — vous devriez sentir une chaleur forte et concentrée rayonnant vers le haut. Pas la chaleur douce de l'eau chaude, mais la chaleur sèche et piquante d'un four chaud. C'est le bon moment."
    },
    {
      "nodeId": "step_2",
      "action": "Bloom",
      "inputs": [
        "hot_fat",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "bloomed_spice_fat",
      "instructions": "Retirer la poêle du feu. Ajouter la Cayenne, la cassonade, le paprika fumé, la poudre d'ail et le sel à la graisse chaude. fouetter vigoureusement et continuellement pendant 30 à 45 secondes. La chaleur résiduelle fleurira les épices, dissout le sucre, et toast les poudres dans la graisse, approfondissant leur saveur de façon spectaculaire. Le mélange moussera et étourdira brièvement et tournera un rouge brique vif et profond.",
      "visualCue": {
        "primaryTarget": "Pâte rouge brique profonde, brillante sans sucre visible non dissous ou poudre d'épices sèches. Le mélange grésille et bulle activement pendant les 20 premières secondes de hors-chauffe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange était à peine étourdi: la graisse n'était pas assez chaude. Les épices ont l'air poussiéreuses et crues dans une flaque de graisse.",
            "action": "Retourner à feu très doux et fouetter 1-2 minutes pour fleurir les épices. La couleur va s'amplifier comme ils toast."
          },
          {
            "state": "Perfect",
            "description": "Rouge brique, brillant et parfumé. Des odeurs de Cayenne chaude, de sucre caramélisé et de paprika fumé. Le sucre est complètement dissous.",
            "action": "Laisser refroidir légèrement puis ajouter le vinaigre."
          },
          {
            "state": "Overdone",
            "description": "Les épices fument et commencent à sentir l'acridité et l'amertume. Le mélange est devenu très sombre, presque noir.",
            "action": "Jeter et commencer frais — la Cayenne brûlée et le sucre ne peuvent pas être récupérés et la saveur amère ruinera le plat."
          }
        ]
      },
      "feelCue": "La graisse d'épice fleurie va sentir agressivement du chili chaud et du caramel simultanément — un coup presque écrasant de chaleur et de douceur qui devrait vous faire vouloir immédiatement atteindre quelque chose pour le mettre. La cayenne devrait faire arroser vos yeux si vous vous penchez trop près."
    },
    {
      "nodeId": "step_3",
      "action": "Finition",
      "inputs": [
        "bloomed_spice_fat",
        "ing_07"
      ],
      "outputState": "finished_nashville_hot_sauce",
      "instructions": "Laisser refroidir légèrement pendant 2 minutes — à environ 80 °C (176 °F). Ajouter le vinaigre de cidre de pomme et fouetter immédiatement pour émulsifier. La sauce s'éclaircira légèrement de l'acide. Goûtez soigneusement (il fait très chaud): il doit être feu, légèrement sucré à partir de la cassonade, avec un arrière-plan acide aigu du vinaigre. Utiliser immédiatement pour broyer généreusement sur le poulet fraichement frit, ou conserver dans un bocal à température ambiante jusqu'à 2 semaines.",
      "visualCue": {
        "primaryTarget": "sauce semi-brillante rouge brique profonde avec une consistance fluide et brossable. Pas aussi épaisse qu'une pâte, pas aussi mince qu'une sauce chaude — elle doit se déplacer comme une fine sauce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore épaisse et pâteuse. Le vinaigre ne l'a pas suffisamment éclairci pour se brosser uniformément.",
            "action": "Ajouter encore une partie de vinaigre à la fois, fouetter après chaque ajout, jusqu'à brossable."
          },
          {
            "state": "Perfect",
            "description": "Rouge profond, brillant et fluide. Enrobez un pinceau et les transferts dans épais, même les coups. Des odeurs de Cayenne, de sucre caramélisé, de fumée et d'acide. La chaleur est apparente même avant la dégustation.",
            "action": "Badigeonner immédiatement le poulet frit et servir sur le pain blanc avec des tranches de cornichons d'aneth."
          },
          {
            "state": "Overdone",
            "description": "La sauce est fine et aqueuse — trop de vinaigre. Le mélange d'huile et d'épices s'est séparé.",
            "action": "Whisk vigoureusement. S'il est encore séparé, chauffer doucement à feu doux tout en fouettant pour réémulsionner."
          }
        ]
      },
      "feelCue": "Le goût de la sauce chaude finie de Nashville devrait donner immédiatement de la chaleur à l'extrémité de la langue, suivie de la douceur de la cassonade, puis de la tangette de vinaigre, exactement dans cet ordre. Si la chaleur arrive en dernier, la cayenne est sous-éblouie."
    }
  ]
};
