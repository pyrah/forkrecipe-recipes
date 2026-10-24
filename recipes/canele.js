export default {
  "repoId": "master_french_canele_001",
  "parentRepoId": null,
  "slug": "canele",
  "author": "ForkRecipe Kitchen",
  "title": "Canélé de Bordeaux",
  "description": "Une pâte à crème à la vanille et aurum reposa 48 heures, versa dans des moules de cuivre recouverts de cire d'abeille, et cuit à deux températures — produisant une coquille presque brûlée et acajou qui se brise pour révéler un intérieur humide et crépuscule.",
  "cuisine": "Français",
  "culture": "Bordelais",
  "category": "desserts",
  "tags": [
    "canele",
    "français",
    "bordeaux",
    "Coutard",
    "cire d'abeille",
    "croûte noire",
    "pâtisserie"
  ],
  "difficulty": 4,
  "activeTime": "30 min",
  "totalTime": "50 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 0,
    "sour": 0,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Lait entier plein",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 2.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Oeufs entiers",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Binder",
      "name": "Jaunes d'œuf",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Haricots de vanille (découpés et raclés)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "2 c. à thé extrait de vanille"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Solvent",
      "name": "Rhum foncé",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "rhum ambré",
        "Cognac"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Cires d'abeilles de qualité alimentaire (pellets ou blocs)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre clarifié — produit une croûte moins dramatique"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Beurre non salé (mélangé avec cire d'abeille pour revêtement de mue)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuse",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_07"
      ],
      "outputState": "infused_milk",
      "instructions": "Mélanger le lait, le beurre et la fendue de vanille avec ses graines raclées dans une casserole. Chauffer à feu moyen jusqu'à ce que le mélange n'arrive qu'à mijoter — de petites bulles autour du bord et de la vapeur s'élevant, mais pas un ébullition complet. Retirer du feu et laisser infuser pendant 10 minutes, puis retirer la gousse de vanille. Le lait doit être chaud à chaud — il sera fouetté dans le mélange de farine d'oeufs et la chaleur aide à hydrater la farine et à tempérer les œufs simultanément.",
      "visualCue": {
        "primaryTarget": "Lait d'or pâle chaud avec de fines graines de vanille distribuées dans l'ensemble. Petite vapeur. Sensation profonde, presque excessive de vanille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait est à peine chaud: la vanille n'a pas eu le temps d'infuser et les graines se sont installées sans se disperser. La graisse n'a pas complètement fondu.",
            "action": "Retourner à feu doux et chauffer doucement jusqu'à ce que le beurre fond et que le lait s'échauffe. Infuser pendant 10 minutes."
          },
          {
            "state": "Perfect",
            "description": "Chaud, vapeur, parfumé à la vanille avec les graines entièrement dispersées. Le beurre a fondu et s'est intégré. Pas d'ébullition ou de brûlure.",
            "action": "Retirer le goupille et procéder — fouetter le mélange farine-sucre-œuf immédiatement pendant que le lait est encore chaud."
          },
          {
            "state": "Overdone",
            "description": "Le lait a bouilli dur — la peau s'est formée, il y a des brûlures à la base, et la vanille est devenue amère.",
            "action": "La souche et l'utilisation — un léger ébullition ruine rarement la pâte au canelé. Jeter s'il est brûlé. Baissez la chaleur la prochaine fois."
          }
        ]
      },
      "feelCue": "Le lait chaud doit se sentir chaud sur le poignet — environ 70-80 C / 160-175 F. Assez chaud pour que vous ne puissiez pas tenir votre poignet sous la vapeur plus d'une seconde, mais pas bouillant."
    },
    {
      "nodeId": "step_2",
      "action": "Whisk",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_09",
        "infused_milk",
        "ing_08"
      ],
      "outputState": "canele_batter",
      "instructions": "Dans un grand bol, fouetter ensemble la farine, le sucre et le sel. Ajouter les œufs entiers et les jaunes et fouetter à une pâte lisse et épaisse, sans grumeaux. Versez le lait chaud (sans bouillir) infusé dans le mélange de farine dans un cours d'eau mince et stable, fouettant constamment au fur et à mesure. La pâte se desserre d'une pâte à un liquide, liquide mince comme le lait est ajouté. Enfin, fouetter dans le rhum. La technique critique: ne pas incorporer l'air — remuer plutôt que fouetter agressivement. L'air crée un intérieur inégal et bubble plutôt que la crème dense pour laquelle le canélé est célèbre. Couvrir et réfrigérer pendant 48 heures minimum — 72 heures est mieux. La farine absorbe le liquide et la pâte se dépose.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, mince, pâle-ivrée — presque aussi fine que la pâte à crêpe. Des chutes du fouet dans un ruisseau rapide, même. Un revêtement très fin sur le dos d'une louche. Sens de vanille et de rhum.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait et la farine n'ont pas été complètement combinés. Des stries de farine visibles ou des morceaux d'oeuf.",
            "action": "fouetter plus lentement et soigneusement, ajouter le lait encore plus graduellement. Passer à travers un tamis à mailles fines si les bosses persistent."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, très mince, et même. Descendre du fouet dans un courant continu et rapide sans bosses. Sensation intense de vanille et de rhum.",
            "action": "Couvrir la surface d'un film de collage et réfrigérer pendant 48-72 heures avant la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Survolé et mousseux — bulles d'air incorporées dans la pâte. Ceux-ci créeront un intérieur inégal, pitté plutôt qu'une crème lisse.",
            "action": "Laisser reposer au réfrigérateur — les bulles se dissiperont pendant 48 heures de repos. Ne pas fouetter à nouveau avant de cuire; verser ou verser très doucement."
          }
        ]
      },
      "feelCue": "Une louche de la pâte doit se sentir incroyablement légère et liquide, comme de l'eau à peine bouillie. Il devrait verser la louche sans aucune hésitation, sans viscosité du tout."
    },
    {
      "nodeId": "step_3",
      "action": "Température",
      "inputs": [
        "ing_10",
        "ing_11"
      ],
      "outputState": "waxed_moulds",
      "instructions": "Faire fondre les pastilles de cire d'abeille et le beurre ensemble dans une petite casserole à feu très doux jusqu'à ce qu'il soit complètement liquide. Le mélange doit être d'environ 70 C / 160 F — liquide mais pas si chaud qu'il brûle la main au contact. À l'aide d'un petit pinceau ou en versant et en tourbillonnant, envelopper l'intérieur de chaque moule de canélé de cuivre avec le mélange cire-beurre — un film mince et uniforme. Placez les moules sur un plateau de cuisson et laissez la cire se fixer légèrement — 1-2 minutes au congélateur. La cire d'abeille crée la coquille spectaculairement sombre et croustillante qui définit le cannelé; le beurre seul donne une croûte plus douce. Préchauffer le four à 250 C / 480 F avec le plateau à l'intérieur.",
      "visualCue": {
        "primaryTarget": "Chaque intérieur de moule a un mince film blanc opaque de cire de set, complètement même sans mise en commun à la base. Lorsque vous basculez un moule, aucune cire liquide ne coule.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La cire est inégale — des fosses épaisses à la base et des plaques nues sur les parois supérieures. Le moule n'est pas entièrement enduit.",
            "action": "Re-fondre et re-coat, en faisant fonctionner la cire liquide jusqu'aux parois du moule immédiatement après le revêtement, avant qu'elle ne se met."
          },
          {
            "state": "Perfect",
            "description": "Film mince, même blanc de la base à la jante. Pas de cuivre nu visible. La cire est sertie, mais pas épaisse: une couche de peinture, pas un bouchon.",
            "action": "Placer au congélateur pendant 2 minutes pour mettre complètement, puis remplir immédiatement avec la pâte froide."
          },
          {
            "state": "Overdone",
            "description": "La cire appliquée trop épaissement — mise en commun à la base et égouttée à l'extérieur. Produira une croûte inégale, trop épaisse.",
            "action": "Réchauffer doucement le moule et verser l'excès de cire, puis tourner pour le redistribuer dans une couche plus mince."
          }
        ]
      },
      "feelCue": "Lorsque vous lancez un doigt à l'intérieur du moule ciré, la surface doit être lisse et à peine cireuse, comme l'intérieur d'une poêle en fonte bien assaisonnée plutôt qu'une bougie épaisse. Pas de billard, pas de métal nu."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "canele_batter",
        "waxed_moulds"
      ],
      "outputState": "finished_canele",
      "instructions": "Incorporer la pâte froide très doucement — sans fouet — et la déposer dans un tamis à mailles fines dans les moules cirés, en remplissant à 1 cm au-dessous de la jante. La pâte doit être froide depuis le réfrigérateur. Placez immédiatement dans le four préchauffé 250 C / 480 F. Cuire à cette température élevée pendant 10 minutes, puis réduire à 180 C / 355 F sans ouvrir la porte du four et cuire encore 50 à 60 minutes. La chaleur initiale élevée met la coquille instantanément et crée la croûte sombre; la température inférieure fait cuire l'intérieur de la crème à travers sans brûler. Les cannelés sont prêts lorsqu'ils sont une acajou profonde, presque noire, et se sont légèrement éloignés des bords du moule. Démouvoir immédiatement sur une grille.",
      "visualCue": {
        "primaryTarget": "Presque noir sur l'extérieur — acajou profond avec des crêtes sombres presque carbonisées du moule cannelé. Le canélé s'est légèrement éloigné des murs des moules. La base est le point le plus sombre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle ou brun moyen — la coquille n'a pas caramélisé jusqu'au presque noir requis. L'intérieur sera peu cuit et liquide au centre.",
            "action": "Retourner au four à 180 °C pendant 10-15 minutes. La couleur devrait être presque alarmante, beaucoup plus foncée que confortable."
          },
          {
            "state": "Perfect",
            "description": "Dark, profondément acajou — la couleur du chocolat très foncé ou l'espresso fort. Légèrement brillant de la cire. A visiblement contracté des murs de moisissure. Une brochette retirée du centre sort propre.",
            "action": "Tout de suite, ils se libèrent d'une seule tournure. Laisser refroidir sur un rack pendant au moins 15 minutes avant de manger. La coquille croustille plus loin qu'elle refroidit."
          },
          {
            "state": "Overdone",
            "description": "Toujours noir et amer. La coque a carbonisé et l'intérieur sera également trop cuit et sec.",
            "action": "Si ce n'est que légèrement trop sombre, encore non moulu et laisser refroidir — l'amertume peut être tolérable et fait partie du caractère du cannelé. Si vraiment brûlé, recommencez."
          }
        ]
      },
      "feelCue": "Un canélé parfait frais du moule devrait se sentir très chaud et solide quand vous le ramassez, dense et lourd pour sa taille. Tapez sur la base : elle doit sonner comme une coquille creuse, pas comme un gâteau dense. La coquille est le prix."
    }
  ]
};
