export default {
  "repoId": "master_japanese_dashi_beurre_blanc_001",
  "parentRepoId": null,
  "slug": "dashi-beurre-blanc",
  "author": "ForkRecipe Kitchen",
  "title": "Dashi Beurre Blanc — Sauce au beurre mirin",
  "description": "Une émulsion franco-japonaise qui commence comme une réduction de dashi laquée de saké et de mirin et se termine dans un montage rapide de beurre froid — tremblant, or pâle, vivant avec umami d'une manière qu'aucun beurre blanc classique ne peut égaler, accrochant au poisson et aux légumes avec un poids soyeux, à peine là.",
  "cuisine": "Japonais",
  "culture": "Washoku-fusion française / Nouvelle cuisine",
  "category": "sauces",
  "tags": [
    "Japonais",
    "beurre",
    "sauce",
    "Dashi",
    "beurre-blanc",
    "français-japonais",
    "émulsion",
    "Kaiseki"
  ],
  "difficulty": 4,
  "activeTime": "30 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 0,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Ichiban dashi (premier draw kombu et katsuobushi)",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": [
        "kombu dashi (vegan)",
        "stock de poulet léger dilué 50:50 avec de l'eau"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Solvent",
      "name": "Gâteau (sèche, qualité de boisson)",
      "ratioValue": 100,
      "defaultUnit": "ml",
      "substitutions": [
        "Vin blanc sec (Muscadet ou Chablis)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Mirin (Hon-mirin)",
      "ratioValue": 50,
      "defaultUnit": "ml",
      "substitutions": [
        "2 c. à thé de sucre dissous dans le saké"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Échalote, très finement hachée",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "oignon blanc doux"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Vinaigre de riz",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de vin blanc clair"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé, très froid, coupé en cubes de 1 cm",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Poêles, finement coupées, pour finition",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "mitsuba ( persil japonais)",
        "shiso, broyé"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire réduire",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "reduction_base",
      "instructions": "Combinez le dashi, le saké, le mirin, l'échalote hachée et le vinaigre de riz dans une petite casserole à fond lourd – l'acier inoxydable est idéal, car il vous permet de voir clairement la couleur de la réduction. Porter à ébullition sur une hauteur moyenne, puis laisser mijoter vigoureusement et cuire jusqu'à ce que le liquide soit réduit à un glaçage — environ 2 à 3 cuillères à soupe de liquide sirupeux hautement concentré. Cela prend 12-15 minutes. La réduction est le fondement de la sauce entière et doit être cuite soigneusement pour chasser tout l'alcool du saké et du mirin. Si vous pouvez encore sentir de l'alcool cru dans la vapeur, continuez à réduire. La réduction finie doit sentir intensément la mer (dashi), le caramel doux (mirin) et l'échalote. L'échalote sera devenue très douce et presque translucide, suspendue dans la glaçure. Ne pas extraire l'échalote — il fournit corps et saveur supplémentaires. La couleur s'approfondira de l'or pâle à un ambre plus foncé.",
      "visualCue": {
        "primaryTarget": "Une glaçure sombre et presque sirupeuse avec des morceaux d'échalote adoucis. Lorsque vous penchez la casserole, elle se déplace lentement et enrobe les côtés. Le volume doit être de 2 à 3 cuillères à soupe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Encore assez liquide — il reste plus de 5 cuillères à soupe. L'odeur d'alcool est toujours présente. Shallot a encore une bouchée.",
            "action": "Continuez à réduire. L'émulsion se brisera si trop d'eau reste dans la base."
          },
          {
            "state": "Perfect",
            "description": "2 à 3 cuillères à soupe d'ambre, glaçure sirupeuse. Pas d'odeur d'alcool. L'échalote est translucide et tendre. Ça sent le dashi caramélisé et le mirin sucré.",
            "action": "Réduire la chaleur au minimum absolu et commencer à monter avec du beurre."
          },
          {
            "state": "Overdone",
            "description": "Réduit à moins d'une cuillère à soupe. La glaçure est presque noire et l'échalote est sombre et légèrement amère.",
            "action": "Ajouter 30 ml de dashi frais et 15 ml de saké. Retournez à une mijoter brièvement, puis procédez."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère sur le fond de la casserole — la réduction devrait dessiner une ligne propre et lente de remplissage plutôt que de revenir instantanément. Si la ligne se remplit immédiatement, réduisez encore 2 minutes. La poêle doit être assez chaude pour qu'une goutte de beurre s'échauffe immédiatement lorsqu'elle touche la base."
    },
    {
      "nodeId": "step_2",
      "action": "Monter au beurre",
      "inputs": [
        "reduction_base",
        "ing_06",
        "ing_07"
      ],
      "outputState": "mounted_sauce",
      "instructions": "C'est l'étape techniquement exigeante. Retirer la poêle du feu direct et la laisser refroidir pendant 30 secondes — la base doit être chaude mais ne pas brûler. Placez la poêle sur la chaleur la plus basse possible ou utilisez une double chaudière. Commencez à ajouter le beurre froid, deux ou trois cubes à la fois, fouettant constamment dans un mouvement circulaire rapide. Attendez que chaque ajout soit entièrement incorporé avant d'ajouter le suivant. Le beurre froid remplit deux fonctions simultanément : il diminue la température de la base (prévenir la surchauffe et la rupture) tandis que ses émulsifiants (principalement la lécithine dans la graisse du beurre) lient la phase de l'eau et la phase de la graisse dans une émulsion stable. La sauce se transformera progressivement de la réduction foncée en une émulsion pâle, crémeuse, opaque que vous ajoutez plus de beurre. Si la sauce a l'air grasse et séparée, elle a surchauffé — retirez immédiatement de toute chaleur et ajoutez un cube de beurre froid tout en fouettant vigoureusement. Une fois que tout le beurre est incorporé, assaisonner de sel fin et de goût. La sauce doit être riche, lisse et intensément umami avec une finition lactique brillante.",
      "visualCue": {
        "primaryTarget": "Une émulsion dorée à l'ivoire pâle, opaque, légèrement épaissie et brillante, pas grasse, pas fine. Une fois versé d'une cuillère, il tombe dans un ruban lent et crémeux. La couleur doit être l'or pâle du beurre salé, et non l'ambre foncé de la réduction.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Seulement 3-4 cubes de beurre ajoutés. La sauce est encore la plupart du temps de réduction sombre. Le goût est trop vif et concentré sans la richesse du beurre.",
            "action": "Continuer à ajouter des cubes de beurre tout en fouettant. Ne vous précipitez pas: chaque ajout doit être émulsifié avant le suivant."
          },
          {
            "state": "Perfect",
            "description": "Tout beurre incorporé. La sauce est pâle, crémeuse, opaque et coule dans un ruban lent. Riche, rond, umami-avant avec une acidité vive. Se tient sur une assiette chaude sans casser.",
            "action": "Terminer avec la ciboulette et servir dans les 10 minutes. Gardez - vous au chaud au cours d'un bain d'eau chaude — jamais à feu direct."
          },
          {
            "state": "Overdone",
            "description": "La sauce s'est séparée — une piscine de graisse de beurre d'or clair flotte sur un liquide mince et plus foncé. L'émulsion est cassée par surchauffe.",
            "action": "Début de la récupération: prendre 2 c. à soupe de la sauce cassée dans une nouvelle casserole. À feu très doux, fouetter dans 2 cubes de beurre froid jusqu'à l'émulsion, puis fouetter très lentement dans le reste de la sauce cassée. Il peut ne pas se rétablir complètement, mais il s'améliorera."
          }
        ]
      },
      "feelCue": "Lorsque vous enrobez l'arrière d'une cuillère chaude et l'inclinez, la sauce doit s'accrocher pendant 3-4 secondes avant de courir lentement — elle doit se sentir substantielle, comme enrober la cuillère dans de la crème chaude plutôt que de l'eau. La température à l'arrière de la main, au-dessus de 10 cm, doit être chaude mais pas agressivement chaude, c'est la zone de température où l'émulsion est stable."
    },
    {
      "nodeId": "step_3",
      "action": "Terminer",
      "inputs": [
        "mounted_sauce",
        "ing_08"
      ],
      "outputState": "finished_dashi_beurre_blanc",
      "instructions": "Pliez la ciboulette tranchée (ou mitsuba ou shiso) dans la sauce montée avec quelques tournures douces du fouet — ne pas trop agiter ou vous briserez l'émulsion. Goûtez et assaisonnez. La sauce doit être servie immédiatement ou maintenue dans un bain d'eau chaude (50–55 °C) pendant au plus 20 minutes avant le service. Au-delà de 20 minutes, l'émulsion commence à s'affaiblir à mesure que la graisse de beurre se sépare lentement. Lorsque vous plaquez, cuillerez la sauce sous ou à côté de la protéine — poisson, pétoncles ou légumes — jamais sur la surface croustillante de quelque chose que vous avez dépensé l'effort croustillant. La sauce doit se mettre élégamment et former une peau fine et lumineuse où elle contacte la plaque chaude. Arrosez toute sauce restante de la cuillère en un seul mouvement délibéré : un beurre blanc n'attend personne.",
      "visualCue": {
        "primaryTarget": "Une sauce d'ivoire pâle, brillante, au cigogne. Lorsqu'il est cuit sur une assiette chaude, il s'étend lentement et forme une piscine légèrement épaissie. La surface est lisse avec un reflet doux — pas grasse, pas aqueuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Trop peu de sel. La sauce a un goût riche mais plat: l'umami et l'acidité sont enterrés. Pas encore ajouté.",
            "action": "Ajouter le sel dans de petites pincées et goûter entre chaque addition. Pliez dans la ciboulette."
          },
          {
            "state": "Perfect",
            "description": "Les chives sont distribuées uniformément. La sauce est équilibrée : riche, océanique, lumineuse et profondément salée. Enrobe chaque surface qu'elle touche avec un film fin et brillant.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été maintenue trop longtemps ou réchauffée. Il s'est cassé en piscines grasses. L'émulsion est perdue.",
            "action": "Un beurre blanc cassé ne peut pas être réellement récupéré à ce stade. Utilisez-le comme une bruine finale de beurre aromatisé plutôt qu'une sauce — il restera bon goût."
          }
        ]
      },
      "feelCue": "Une cuillère de dashi beurre blanc fini sur la langue devrait se sentir comme de la crème chaude qui enveloppe instantanément et puis se dissout — pas de lourdeur, aucun film de graisse laissé derrière. La note umami du dashi s'attarde après la disparition du beurre, qui est le point entier de cette sauce hybride. La ciboulette devrait craquer légèrement avec fraîcheur contre la richesse du beurre."
    }
  ]
};
