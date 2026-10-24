export default {
  "repoId": "master_french_chocolate_ganache_001",
  "parentRepoId": null,
  "slug": "chocolate-ganache",
  "author": "ForkRecipe Kitchen",
  "title": "Chocolat noir Ganache",
  "description": "La crème et le chocolat s'effondrent l'un dans l'autre dans une émulsion noire brillante qui s'accroche à une cuillère comme du velours liquide. À la température ambiante, il verse comme un miroir glaçure; réfrigéré, il se sert d'un caramel à truffe ferme que vous pouvez couper en tranches propres.",
  "cuisine": "Français",
  "culture": "Pâtisserie",
  "category": "desserts",
  "tags": [
    "chocolat",
    "ganache",
    "français",
    "pâtisserie",
    "Pas de cuisson",
    "glaçure",
    "truffe"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 1,
    "bitter": 4,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Chocolat noir (70% cacao), finement haché",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "60% chocolat doux amer",
        "chocolat au lait (réduire la crème de 20%)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Crème lourde (36% de matières grasses)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "crème de noix de coco pleine graisse pour la version végétalienne"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé, température ambiante, cubed",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "huile de coco pressée à froid"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sirop de maïs léger (pour le gloss et la durée de conservation)",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "sirop de glucose",
        "Chérie"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel de mer blanc",
      "ratioValue": 0.005,
      "defaultUnit": "parts",
      "substitutions": [
        "sel fumé"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire fondre",
      "inputs": [
        "ing_02",
        "ing_04"
      ],
      "outputState": "hot_cream",
      "instructions": "Verser la crème lourde et le sirop de maïs dans une petite casserole à fond lourd. Réglez-vous à feu moyen et faites mijoter complètement — vous voulez de petites bulles persistantes qui se brisent sur toute la surface, pas un ébullition qui brûle la graisse. Surveillez les bords de la poêle : la crème s'échaude rapidement une fois qu'elle atteint un galop. Au moment où vous voyez une mijoter confiante avec de la vapeur montant dans une colonne, retirer de la chaleur. Le sirop de maïs se dissout de façon invisible mais fait un travail important : il perturbe la cristallisation du sucre et donne à la ganache finie un éclat de bijou qui fait chanter les glaçures miroirs. Ne remuez pas une fois qu'il approche de la chaleur — veillez simplement. Temps total à la chaleur: 2–3 minutes.",
      "visualCue": {
        "primaryTarget": "Petites bulles formant un anneau autour du bord, brisant vers le centre. La surface est chatoyante et une fine vapeur monte régulièrement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème est chaude mais plate — pas de bulles aux bords, pas de vapeur. Le chocolat ne fondra pas uniformément lorsqu'il sera versé.",
            "action": "Retourner à la chaleur pendant 60 secondes. La crème doit être vraiment chaude."
          },
          {
            "state": "Perfect",
            "description": "Un anneau confiant de petites bulles aux bords de course vers l'intérieur. La vapeur s'enroule. La crème vient de souffler et de se lever légèrement.",
            "action": "Retirer immédiatement du feu et verser sur le chocolat."
          },
          {
            "state": "Overdone",
            "description": "Un ébullition dur avec de grandes bulles violentes. La crème perd de l'eau sous forme de vapeur et peut brûler.",
            "action": "Retirer du feu. Laisser reposer pendant 30 secondes avant de verser — une certaine perte d'eau est acceptable, la ganache sera légèrement plus ferme."
          }
        ]
      },
      "feelCue": "Tenez votre main 10 cm au - dessus de la casserole — vous devriez sentir la chaleur ferme et sèche poussant vers le haut, et non un nuage humide. Cette chaleur radieuse sèche signifie que la crème est assez chaude sans avoir bouilli."
    },
    {
      "nodeId": "step_2",
      "action": "Émulsifier",
      "inputs": [
        "hot_cream",
        "ing_01"
      ],
      "outputState": "emulsified_ganache",
      "instructions": "Placez le chocolat finement haché dans un bol profond et résistant à la chaleur — un bol profond concentre la chaleur et empêche les éclaboussures. Verser la crème chaude sur le chocolat en une seule fois, en veillant à ce que tout le chocolat soit immergé ou en contact avec la crème. Ne remuez pas encore. Attendez 90 secondes, laissant la chaleur résiduelle de la crème fondre le chocolat de l'extérieur. Cette patience est le secret: si vous remuez immédiatement, vous introduisez l'air froid avant que le chocolat ait fondu, risquant une ganache granuleuse et cassée. Après 90 secondes, commencez à remuer avec une spatule de silicone du centre du bol, faisant de petits cercles concentriques serrés. Vous verrez une forme d'émulsion foncée et brillante au centre — continuer à travailler vers l'extérieur jusqu'à ce que la ganache soit complètement uniforme, brillante, et il ne reste pas de stries de crème. Cela devrait prendre environ 2 minutes de brassage doux et délibéré.",
      "visualCue": {
        "primaryTarget": "Une émulsion complètement uniforme, profondément brillante, brun foncé, sans stries de crème blanche et sans croustilles de chocolat visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est strié — la crème pâle et le chocolat noir n'ont pas été complètement combinés. Certaines puces sont encore visibles.",
            "action": "Continuez à remuer du centre vers l'extérieur. Si les croustilles restent après 3 minutes, mettre le bol sur un pot d'eau à peine mijotant pendant 20 secondes et remuer à nouveau."
          },
          {
            "state": "Perfect",
            "description": "La ganache est brillante, uniformément sombre, et coule lentement hors de la spatule dans un ruban épais et continu. Ça bouge comme de la sauce tiède.",
            "action": "Ajouter le beurre et le sel dans la prochaine étape."
          },
          {
            "state": "Overdone",
            "description": "La ganache a l'air grasse ou granuleuse, l'émulsion s'est brisée. La graisse s'est séparée et les piscines à la surface.",
            "action": "Ajouter une cuillère à soupe de crème chaude et fouetter vigoureusement. Si elle est toujours cassée, ajoutez une autre cuillère à soupe. L'émulsion peut presque toujours être récupérée."
          }
        ]
      },
      "feelCue": "Faites glisser la spatule à travers le centre - il devrait sentir comme tirer à travers le miel chaud, enrober la spatule dans une couche lisse sans graine lorsque vous frottez une petite quantité entre vos doigts."
    },
    {
      "nodeId": "step_3",
      "action": "Monter",
      "inputs": [
        "emulsified_ganache",
        "ing_03",
        "ing_05"
      ],
      "outputState": "finished_ganache",
      "instructions": "Alors que la ganache est encore chaude (mais pas brûlante – idéalement autour de 40°C / 104°F), chute dans les cubes de beurre à température ambiante un à la fois, en remuant chacun complètement avant d'ajouter le suivant. Le beurre à température ambiante est critique : le beurre froid n'émulsionnera pas facilement et peut faire saisir le ganache. Ajouter la pincée de sel de mer et le remuer à travers — le sel remplit deux fonctions: il amplifie le fruité du chocolat et équilibre la douceur ainsi le goût complexe de la ganache plutôt que simplement sucré. Le ganache fini doit être versé immédiatement en cas d'utilisation comme glaçure, ou laissé à la température ambiante pendant 2 heures jusqu'à ce qu'il s'engage dans une consistance truffière extensible. Pour les truffes de chocolat, couvrir et réfrigérer pendant au moins 4 heures jusqu'à ce qu'elles soient écorcables. La ganache reste à température ambiante pendant 48 heures ou réfrigérée pendant deux semaines.",
      "visualCue": {
        "primaryTarget": "La ganache s'approfondit en brillant après l'incorporation du beurre — elle devrait être laquée, presque humide, et s'écouler lentement hors de la spatule dans un large rideau brillant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre n'a pas été entièrement incorporé — la ganache semble pâle ou légèrement tachetée là où il reste des poches de beurre.",
            "action": "Continuez à remuer doucement. Ajouter les cubes de beurre un à la fois, pas tous à la fois."
          },
          {
            "state": "Perfect",
            "description": "Deep, miroir-comme brillant. La ganache tombe de la spatule dans un seul rideau, lent et intact. Quand une goutte atterrit, elle se répand et se lisse.",
            "action": "Verser immédiatement sous forme de glaçure, ou couvrir et laisser régler pour votre utilisation prévue."
          },
          {
            "state": "Overdone",
            "description": "La ganache a été agitée trop vigoureusement et a refroidi et épaissi inégalement. La surface est terne et la texture est bosselée.",
            "action": "Réchauffez doucement sur une double chaudière, en remuant lentement, jusqu'à ce que le liquide et le brillant à nouveau. Ne pas surchauffer."
          }
        ]
      },
      "feelCue": "À la température chaude parfaite, une goutte à l'intérieur de votre poignet devrait se sentir neutre — ni froid ni chaud — et il devrait s'asseoir sur votre peau pendant 3 secondes avant qu'il commence à se répandre, ce qui vous indique l'émulsion est stable et la graisse est correctement distribuée."
    }
  ]
};
