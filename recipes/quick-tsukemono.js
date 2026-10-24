export default {
  "repoId": "master_japanese_quick-tsukemono_001",
  "parentRepoId": null,
  "slug": "quick-tsukemono",
  "author": "ForkRecipe Kitchen",
  "title": "Quick Shio-Koji Tsukemano",
  "description": "Crisp, légèrement salés japonais cornichons rapides guéris avec shio-koji — les enzymes dans le riz koji tendreisent et assaisonnent les légumes en heures, pas jours, avec une douce profondeur d'umami.",
  "cuisine": "Japonais",
  "culture": "Kyoto",
  "category": "fermented",
  "tags": [
    "Japonais",
    "cornichons",
    "fermenté",
    "légumes",
    "Vite",
    "végétalien"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "2 hr",
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
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Concombre japonais (ou concombre persan), tranché sur biais",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "radis daikon",
        "Feuilles de chou",
        "Batons de carottes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Radis Daikon, coupés en demi-lunes",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "navets",
        "KOHLRABI"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "Shio-koji (riz fermenté au sel koji)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "sel de mer fin (utiliser 8g total comme sel droit sous)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gingembre frais, julienne fine",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Vinaigre de riz",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "Jus de yuzu",
        "jus de citron"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Légumes frais et salés",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_04"
      ],
      "outputState": "salted_vegetables",
      "instructions": "Couper le concombre sur le biais en ovales de 5 mm d'épaisseur – la coupe en angle augmente la surface exposée au remède et semble élégante. Coupez le daikon en demi-lunes de 5mm. Mélanger tous les légumes préparés dans un bol à mélanger, saupoudrer de sel de mer fin et mélanger délicatement pour les distribuer. Laissez-les s'asseoir pendant 10 minutes. Le tirage initial du sel est rapide: vous verrez la saumure commencer à se mettre dans le bol en 5 minutes. Cette étape pré-souvent les parois cellulaires et enlève une certaine amertume du daikon, donnant au shio-koji une meilleure surface pour travailler avec. Après 10 minutes, rincer brièvement les légumes sous l'eau froide et les sécher avec un chiffon propre — vous voulez enlever le liquide dur tiré avant d'ajouter le shio-koji subtil.",
      "visualCue": {
        "primaryTarget": "Les légumes sont légèrement mou et brillants, avec une flaque visible de liquide pâle dans le bol. Le daikon a perdu sa blancheur crayeuse et devient légèrement translucide aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont encore rigides et raides après 5 minutes, avec à peine n'importe quel bassin liquide — le sel n'a pas eu le temps de tirer l'humidité.",
            "action": "Jetez à nouveau pour vous assurer que le sel recouvre chaque pièce et attendez les 10 minutes complètes. Les légumes froids du réfrigérateur prendront plus de temps à libérer l'humidité."
          },
          {
            "state": "Perfect",
            "description": "Un bassin visible de saumure pâle dans le bol, les légumes se sentent adoucis à la surface mais encore croustillants au cœur quand plié. Le daikon est translucide aux bords.",
            "action": "Rincez brièvement, tapez au sec, et passez à la scène shio-koji. La croûte centrale sera préservée ; la surface sera réceptive aux enzymes koji."
          },
          {
            "state": "Overdone",
            "description": "Les légumes sont en saumure depuis plus de 30 minutes et sont flippés et saupoudrés d'eau, la plupart de la croûte naturelle disparue.",
            "action": "Rincer soigneusement et presser doucement pour enlever l'excès d'eau. Procéder — le tsukemono sera plus doux dans la texture, mais la saveur sera encore bonne."
          }
        ]
      },
      "feelCue": "Flexez une tranche de concombre entre vos doigts : il doit plier environ 30 degrés sans casser, mais offre toujours une résistance. C'est l'état parfait pré-sauvage — assez doux pour absorber le remède, assez croustillant pour rester satisfaisant après la guérison."
    },
    {
      "nodeId": "step_2",
      "action": "Appliquer le traitement shio-koji",
      "inputs": [
        "salted_vegetables",
        "ing_03",
        "ing_05",
        "ing_06"
      ],
      "outputState": "curing_vegetables",
      "instructions": "Dans le bol, ajouter le shio-koji, le gingembre julienne et le vinaigre de riz. Mélanger les mains propres, en massant le shio-koji dans les légumes afin que chaque surface soit recouverte du blanc, comme une pâte koji. Le shio-koji ressemble à une pâte épaisse, céréalière, les particules de riz sont les koji, grouillant d'enzymes protéase et amylase qui décomposent les protéines et les amidons de surface des végétaux, créant de la profondeur et de l'umami que le sel droit ne peut produire. Massage pendant environ 1 minute jusqu'à ce que le shio-koji soit uniformément distribué et qu'il ne reste pas de touffes blanches. Transférer dans un sac scellable ou un contenant avec un poids sur le dessus.",
      "visualCue": {
        "primaryTarget": "Tous les légumes sont uniformément recouverts d'un mince film de shio-koji blanc translucide, les fils de gingembre distribués dans tout le pays, sentant le riz fermenté et les légumes frais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Shio-koji est empilé dans des patchs sur certains légumes et absent des autres — un traitement inégal signifiera que certaines pièces sont profondément assaisonnées et d'autres sont molles.",
            "action": "Massage plus approfondi. Travaillez le koji dans chaque crevasse et la surface courbée. Un sac facilite la tâche: pressez de l'extérieur."
          },
          {
            "state": "Perfect",
            "description": "Un fin, même blanc-translucide revêtement sur chaque pièce, les fils de gingembre capturent parmi les tranches de légumes. Sensations fermentées, délicatement salées et propres.",
            "action": "Sceller ou poids et réfrigérer. Vérifiez à 1 heure et le goût — continuer à guérir jusqu'à ce que l'assaisonnement et la texture soient à votre préférence."
          },
          {
            "state": "Overdone",
            "description": "Trop de shio-koji appliqués (plus de 15 % du poids des légumes) – les cornichons auront un goût fortement salé et l'activité enzymatique commencera à sursoudre les légumes.",
            "action": "Rincer sous l'eau froide pour enlever l'excès de koji et goûter à nouveau. Shio-koji est intensément salé par lui-même — un peu va loin."
          }
        ]
      },
      "feelCue": "Frotter un morceau de concombre enrobé de koji entre deux doigts : la pâte doit se sentir légèrement granuleuse et chaude du massage, s'accrocher à la peau du légume. Il ne devrait pas s'écouler — juste un manteau, comme un écran solaire."
    },
    {
      "nodeId": "step_3",
      "action": "Saler et laisser reposer",
      "inputs": [
        "curing_vegetables"
      ],
      "outputState": "cured_tsukemono",
      "instructions": "Scellez le sac ou couvrez le contenant et pressez les légumes à plat (utilisez une assiette et un pot lourd comme poids si vous utilisez un bol). Réfrigérer pendant au moins 1 heure, mais 2 heures est optimal pour ce style rapide. Après 1 heure, goûtez une pièce — l'assaisonnement doit être uniformément distribué de la surface au centre, et les légumes doivent goûter légèrement fermenté, salé et doucement sucré de l'activité amylase du koji. A 2 heures la saveur s'approfondit de façon notable; au-delà de 4 heures la texture commence à adoucir la croûte idéale passée, et à 24 heures vous avez un tsukemono plus plein, plus profondément guéri avec moins de croûte — encore délicieux mais un produit différent.",
      "visualCue": {
        "primaryTarget": "Légumes translucides avec une floraison blanche de pâte koji encore visible à la surface, assis dans une petite quantité de saumure dessinée au fond du sac.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après moins d'une heure, l'intérieur du daikon est encore complètement blanc et goûte cru et dur, avec la saveur koji seulement sur la surface.",
            "action": "Continuez à guérir. Les enzymes ont besoin de temps pour pénétrer. Le daikon en particulier a besoin de toutes les 2 heures pour assouplir sa netteté."
          },
          {
            "state": "Perfect",
            "description": "De 1,5 à 2 heures : légumes translucides, sucrés, assaisonnements umami doux tout au long, croûte satisfaisante au cœur, et la saumure sent le plus complexe et légèrement funky.",
            "action": "Égoutter la saumure, rincer légèrement si désiré (ou laisser la pâte koji sur pour une saveur plus forte), et servir."
          },
          {
            "state": "Overdone",
            "description": "Après 6+ heures à température ambiante (ou 24+ heures au réfrigérateur): les légumes ont perdu la plupart de leur croquant et la saveur est devenue très affirmée, presque musclée, avec un caractère fermenté prononcé.",
            "action": "Toujours comestible et délicieux, mais plus un cornichon rapide croquant — servent de condiment latéral avec le riz où la saveur plus forte est un atout, pas un inconvénient."
          }
        ]
      },
      "feelCue": "Mordre un morceau de daikon à la marque de 1,5 heure : vous devriez sentir une croûte décisive au centre avec une surface douce et productive. La texture devrait vous rappeler un légume cru croustillant qui a été assaisonné en quelque sorte simultanément tout au long du parcours — ce paradoxe est le koji faisant son travail."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer et servir",
      "inputs": [
        "cured_tsukemono"
      ],
      "outputState": "finished_tsukemono",
      "instructions": "Égoutter les légumes guéris et leur donner un rinçage bref et doux sous l'eau froide pour éliminer l'excès de pâte koji et de sel de surface — c'est une question de goût et de présentation. La convention japonaise pour le tsukemono est de les organiser dans un petit bol ou sur un plat avec du riz, de la soupe et d'autres plats, en les utilisant comme un accent de nettoyage du palais plutôt qu'un élément principal. Servir à température ambiante ou légèrement réfrigéré. Conserver le reste du tsukemono dans le réfrigérateur dans la saumure jusqu'à 3 jours – la saveur continuera à se développer et à s'approfondir chaque jour. Au jour 3, ils seront plus fermentés et moins croquants, ce qui est un plaisir différent.",
      "visualCue": {
        "primaryTarget": "Un petit plat de tranches de concombre et de daikon translucides, les fils de gingembre visibles, avec un léger éclat de résidus koji et une saumure claire et propre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes ont encore le goût cru et l'assaisonnement koji n'a pas pénétré — l'extérieur est salé mais l'intérieur est fade et rude.",
            "action": "Retournez dans le sac et guérissez encore une heure. Un tsukemono précipité n'est que des légumes salés, pas marinés."
          },
          {
            "state": "Perfect",
            "description": "Propre, croustillant, assaisonné uniformément de la surface au centre, avec une délicate douceur fermentée et une légère lueur d'umami. La crise est décisive et satisfaisante.",
            "action": "Servir immédiatement ou conserver dans un contenant couvert au réfrigérateur. C'est la fenêtre idéale, profitez-en."
          },
          {
            "state": "Overdone",
            "description": "Les légumes se sont adoucis à la texture des légumes en conserve — les parois cellulaires ont été décomposées trop loin par une activité enzymatique étendue.",
            "action": "Hacher finement et mélanger dans un bol de riz, ramener ou utiliser comme base pour une vinaigrette rapide. Même le tsukemono sur-curré a une saveur vibrante."
          }
        ]
      },
      "feelCue": "Mangez un morceau seul, sans riz ou autre chose. Il devrait frapper quatre notes en séquence: d'abord une croûte, puis du sel, puis une lueur d'umami douce-savoureuse persistante, puis une finition propre qui fait que vous voulez une autre. Si l'un de ces quatre est manquant, notez lequel pour la prochaine fois."
    }
  ]
};
