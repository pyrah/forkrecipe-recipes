export default {
  "repoId": "master_french_caramel_sauce_001",
  "parentRepoId": null,
  "slug": "caramel-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce au caramel à méthode sèche",
  "description": "Le sucre caramélisé dans une poêle sèche à l'ambre profond — poussé au-delà du point où la douceur s'estompe dans quelque chose de noisette et complexe — puis arrêté avec de la crème et fini avec du beurre et du sel dans une sauce brillante et versable.",
  "cuisine": "Français",
  "culture": "Français",
  "category": "sauces",
  "tags": [
    "Caramel",
    "sauce",
    "dessert",
    "beurre",
    "crème",
    "français",
    "classique"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 2180,
  "forks": 476,
  "contributors": 59,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 2,
    "sour": 0,
    "bitter": 2,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "sucre granulé"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Double crème (crème lourde), chaude",
      "ratioValue": 150,
      "defaultUnit": "ml",
      "substitutions": [
        "crème de coco (sans lait)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre froid non salé, cube",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel de mer (Fleur de sel)",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "sel de mer fin (utiliser moins)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Extrait de vanille (facultatif)",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Caramélisation",
      "inputs": [
        "ing_01"
      ],
      "outputState": "amber_caramel",
      "instructions": "Placez le sucre dans une grande casserole à base lourde (une légère couleur intérieure est idéale pour voir le caramel). Régler à feu moyen — ne pas remuer. À mesure que le sucre fond aux bords, tourner doucement la poêle pour épancher la chaleur, mais ne jamais utiliser une cuillère. Laisser fondre le sucre lentement et uniformément, en tourbillonnant occasionnellement, jusqu'à ce que la masse entière soit fondue et de couleur ambre profonde — la couleur du miel foncé ou du vieux whisky. Regardez attentivement dès qu'il liquéfie complètement : il passera de parfait à brûlé en 15-20 secondes. La température cible est de 175–180 C.",
      "visualCue": {
        "primaryTarget": "Une piscine entièrement liquide, même ambre, sans sucre cristallisé restant — la couleur d'un whisky de 12 ans ou d'une mâche au caramel tannées foncéement. La fumée s'élève.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le caramel est un or pâle — goûtant encore du sucre sucré plutôt que du caramel complexe. Pas encore d'amertume.",
            "action": "Continuez à cuisiner. Le caramel pâle fait une sauce bouillante. Poussez vers l'ambre."
          },
          {
            "state": "Perfect",
            "description": "Ambre profonde, pas tout à fait acajou. Des odeurs de caramel brûlé, de café et de beurre. Une petite goutte sur une plaque blanche est un riche brun-ambre.",
            "action": "Retirer immédiatement du feu et ajouter la crème chaude."
          },
          {
            "state": "Overdone",
            "description": "Acajou foncé à noir. Acre, odeur fumée. Une fumée amère s'élève. Le caramel a brûlé.",
            "action": "Jetez et recommencez. Le caramel brûlé ne peut pas être récupéré."
          }
        ]
      },
      "feelCue": "Regardez le bord de la casserole où le sucre fond d'abord — ces bords vous indiquent où est la chaleur, et le sucre fondu se déplacera vers le centre plus frais si vous tourbillonnez plutôt que de remuer. L'odeur du sucre passe du sucré au toast au café : le moment où vous sentez le café est le moment de bouger."
    },
    {
      "nodeId": "step_2",
      "action": "Déglacement",
      "inputs": [
        "amber_caramel",
        "ing_02"
      ],
      "outputState": "caramel_cream_base",
      "instructions": "Enlevez la poêle du feu et ajoutez immédiatement la crème chaude dans un dépôt lent et régulier. Reculez, le mélange fera des bulles violentes et de la vapeur dramatiquement pendant que la crème froide touche le sucre chaud. Incorporer ou fouetter continuellement en l'ajoutant. Le caramel saisira et durcira au début autour de la crème — continuez à remuer. Retourner à feu doux et remuer jusqu'à ce que les morceaux de caramel durci aient dissous et que le mélange soit lisse.",
      "visualCue": {
        "primaryTarget": "Une sauce lisse, uniforme, profondément ambre avec la crème entièrement incorporée. Pas de stries de crème blanche et pas de morceaux de caramel restant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème ajoutée mais les stries blanches restent non mélangées, ou des morceaux de caramel durci n'ont pas encore été dissous.",
            "action": "Retourner à feu doux et remuer continuellement jusqu'à ce que tous les morceaux fondent."
          },
          {
            "state": "Perfect",
            "description": "Doux, brillant, sauce brun-ambre. Couleur uniforme. Des chutes dans un ruisseau épais.",
            "action": "Ajouter le beurre, le sel et la vanille."
          },
          {
            "state": "Overdone",
            "description": "Sans objet à cette étape — la crème ne peut pas trop cuire ici.",
            "action": "Aller au montage avec du beurre."
          }
        ]
      },
      "feelCue": "Au moment où la crème frappe le caramel, vous sentirez la poignée de la poêle frémir de l'ébullition violente — ne vous éloignez pas. La réaction violente se calme en 10 secondes et l'agitation la ramène."
    },
    {
      "nodeId": "step_3",
      "action": "Monter",
      "inputs": [
        "caramel_cream_base",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "finished_caramel_sauce",
      "instructions": "Retirer la poêle du feu. Ajouter le beurre glacé, le sel feuilleté et l'extrait de vanille. Mélanger ou fouetter jusqu'à ce que le beurre soit complètement fondu et incorporé — la sauce passera de fin à brillant et légèrement épaissi au fur et à mesure que le beurre émulsifie. Bouche: il doit être profondément sucré, amer à l'arrière de la gorge, et fini avec un coup de sel défini. Verser dans un pot ou un bol propre. La sauce s'épaissit à mesure qu'elle refroidit; réchauffer doucement pour servir.",
      "visualCue": {
        "primaryTarget": "Une sauce ambre profondément brillante avec une légère viscosité — elle enveloppe l'intérieur de la poêle dans un mince film et tombe de la cuillère dans un ruban épais et lent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Beurre non encore entièrement incorporé — la sauce semble séparée, avec un éclat gras et des piscines de beurre visibles.",
            "action": "Plus vigoureusement. Le beurre froid émulsifie à mesure qu'il fond."
          },
          {
            "state": "Perfect",
            "description": "Parfaitement brillant. Ruban de la cuillère. Profondément de couleur caramel. Goûte doux, amer et salé en succession.",
            "action": "Verser dans un pot. Servir au chaud ou réfrigérer jusqu'à 2 semaines."
          },
          {
            "state": "Overdone",
            "description": "La sauce est devenue très épaisse et commence à s'éloigner de la poêle sous forme d'une seule masse — elle diminue sur la chaleur résiduelle.",
            "action": "Ajouter une cuillère à soupe de crème chaude et remuer vigoureusement pour se détendre."
          }
        ]
      },
      "feelCue": "La sauce finie devrait enrober l'arrière d'une cuillère froide dans une couche mince et uniforme — passer votre doigt à travers et le canal doit tenir proprement, la sauce collant comme du velours chaud. Le sel devrait arriver sur votre langue un battement après le doux et amer — un retard qui signifie que l'assaisonnement est juste."
    }
  ]
};
