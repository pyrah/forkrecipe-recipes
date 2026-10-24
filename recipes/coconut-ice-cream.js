export default {
  "repoId": "master_thai_coconut_ice_cream_001",
  "parentRepoId": null,
  "slug": "coconut-ice-cream",
  "author": "ForkRecipe Kitchen",
  "title": "Crème glacée aux noix de coco thaïlandaises",
  "description": "La crème glacée à la noix de coco à la noix de coco à la crème de noix de coco et au sucre de palme, congelée sans machine dans une masse dense et crémeuse qui fond sur la langue dans une vague de graisse tropicale, la profondeur caramel-molasse du sucre de palme filant à travers la noix de coco blanche propre comme un ruban foncé. Servi dans un petit cône de wafer ou sur le riz collant dans la rue, c'est la simplicité parfaite.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "desserts",
  "tags": [
    "dessert",
    "Thaï",
    "noix de coco",
    "glaces",
    "Sans objet",
    "sucre de palme",
    "congelés"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "6 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Crème de noix de coco, pleine matière grasse (pas de lait de coco)",
      "ratioValue": 400,
      "defaultUnit": "ml",
      "substitutions": [
        "lait de coco plein gras (résultat légèrement plus sec)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de palme, râpé ou cassé (non raffiné blanc)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "Sucre de coco",
        "sucre brun clair (arôme plus léger)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Jaunes d'œuf",
      "ratioValue": 3,
      "defaultUnit": "whole",
      "substitutions": [
        "omit pour végétalien (plus sec, moins riche)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Lait de coco condensé (ou lait condensé sucré régulier)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "Lait condensé sucré"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Feuille de pandan, attachée en noeud (facultatif)",
      "ratioValue": 1,
      "defaultUnit": "leaf",
      "substitutions": [
        "Extrait de pandan 1/4 c. à thé",
        "fève vanille (différente saveur)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Flacons de coco grillés (douces ou non sucrés)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Cacahuètes grillées, grossièrement broyées (facultatif)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Chauffer",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_06"
      ],
      "outputState": "warm_coconut_base",
      "instructions": "Mélanger la crème de coco, le sucre de palme râpé, le sel fin et la feuille de pandan attachée dans une casserole moyenne. Chauffer à feu moyen-doux, en remuant régulièrement, jusqu'à ce que le sucre de palme soit complètement dissous — environ 5 minutes. Le sucre de palme se dissout lentement et le liquide passe du blanc pur à un ivoire-ambre chaud à mesure que les composés caramel du sucre s'intègrent. Ne précipitez pas cela à feu vif — la crème de noix de coco grince facilement sur le fond de la poêle et peut développer un goût cuit et teinté. Une fois le sucre complètement dissous, goûtez à la base : il doit être nettement sucré, légèrement salé, et porter la note de mélasse douce caractéristique du sucre de palme sous la richesse en noix de coco. Retirer la feuille de pandan et retirer du feu.",
      "visualCue": {
        "primaryTarget": "Un liquide ivoire-ambre doux, chaud et sans granulés de sucre visible et la feuille de pandan flottant librement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sucre de palme est encore en morceaux ou granulés visibles. Le liquide est à deux tons — pâle où la crème de noix de coco non mélangée domine, plus sombre où le sucre a commencé à se dissoudre.",
            "action": "Continuer à remuer à feu moyen-doux. Le sucre de palme prend plus de temps que le sucre raffiné."
          },
          {
            "state": "Perfect",
            "description": "Un liquide uniforme ambré-ivré pâle avec une surface grasse brillante de la noix de coco. Complètement lisse sans résistance granuleuse lorsqu'il est frotté entre les doigts. Des odeurs de noix de coco chaudes et de caramel à sucre de palme.",
            "action": "Enlever la feuille de pandan et procéder à la tempérament des œufs."
          },
          {
            "state": "Overdone",
            "description": "Le mélange bouillonne agressivement et une peau de noix de coco légèrement brune s'est formée sur le fond de la poêle.",
            "action": "Retirer immédiatement du feu. Verser dans un bol propre pour arrêter la cuisson. Vérifiez le fond — s'il sent brûlé, la saveur de la crème glacée sera affectée."
          }
        ]
      },
      "feelCue": "Plongez un doigt propre dans la base chaude (proscieusement – il est chaud) et frottez-le entre votre pouce et l'index: il doit se sentir soyeux et légèrement huileux à partir de la graisse de noix de coco, sans texture granuleuse à partir de sucre non dissous."
    },
    {
      "nodeId": "step_2",
      "action": "Tempérer",
      "inputs": [
        "warm_coconut_base",
        "ing_04",
        "ing_05"
      ],
      "outputState": "tempered_custard_base",
      "instructions": "Dans un bol moyen, fouetter les jaunes d'œufs et le lait condensé jusqu'à ce que le mélange soit jaune pâle et lisse. Maintenant, tempérez la base de noix de coco chaude dans les jaunes: versez un flux mince et lent de la base de noix de coco chaude dans le mélange de jaunes, fouettant constamment et vigoureusement. Ajoutez les premières cuillères à soupe dans un cours d'eau très mince — les jaunes doivent progressivement égaliser la température avec le liquide chaud avant d'ajouter le gros. Une fois que vous avez ajouté environ un tiers de la base de noix de coco chaude, le mélange de jaunes sera chaud et sûr pour se combiner rapidement — versez dans le reste dans un courant régulier tout en continuant à fouetter. Cette technique empêche les jaunes de se brouiller. Retourner le mélange combiné dans la casserole et cuire à feu moyen-doux, en remuant constamment avec une spatule de silicone en figure-huit coups, jusqu'à ce que le mélange épaississe légèrement et enveloppe l'arrière de la spatule — environ 3 à 4 minutes.",
      "visualCue": {
        "primaryTarget": "Une crème légèrement épaissie qui tire une ligne propre lorsqu'un doigt est traîné à travers le revêtement sur le dos d'une spatule.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est encore mince et aqueux; il s'écoule immédiatement de la spatule sans laisser de revêtement. Les œufs n'ont pas encore contribué à l'épaississement.",
            "action": "Continuer à remuer à feu moyen-doux. L'épaississement se produit rapidement une fois que la crème atteint 80°C."
          },
          {
            "state": "Perfect",
            "description": "La crème couvre le dos de la spatule dans une couche mince mais uniforme. Lorsque vous dessinez un doigt à travers le revêtement, la ligne tient ses bords sans que la crème se retourne pour le remplir. Le mélange a une faible richesse en oeufs ajoutée à la base de noix de coco.",
            "action": "Retirer du feu et refroidir."
          },
          {
            "state": "Overdone",
            "description": "La coutarde a commencé à caresser: de minuscules particules d'oeufs jaunes sont visibles dans le mélange et la surface semble grineuse et grincheuse.",
            "action": "Retirer immédiatement du feu et filtrer dans un tamis fin. Mélanger si nécessaire. La texture sera légèrement moins lisse mais toujours utilisable."
          }
        ]
      },
      "feelCue": "Lorsque la crème est finie, lancez un doigt propre dans le dos de la spatule enduite — les deux bords doivent se tenir à l'écart sans que le liquide ne s'échappe. La crème doit se sentir légèrement plus épaisse que la crème lourde et laisser un mince film soyeux sur votre doigt."
    },
    {
      "nodeId": "step_3",
      "action": "Congeler",
      "inputs": [
        "tempered_custard_base"
      ],
      "outputState": "frozen_ice_cream",
      "instructions": "Laisser refroidir la base à la température ambiante, puis réfrigérer pendant au moins 1 heure jusqu'à ce qu'elle soit complètement froide, idéalement une nuit. Ce pré-refroidissement réduit considérablement le temps de congélation et améliore la texture finale. Verser la crème froide dans un récipient peu profond et sans danger pour le congélateur (un moule métallique fonctionne bien). Congeler pendant 2 heures jusqu'à ce que les bords soient solidement congelés, mais le centre est encore doux et lustré. Retirer du congélateur et battre vigoureusement avec une fourchette ou un mélangeur à main, briser les cristaux de glace et incorporer l'air dans l'ensemble. Retourner au congélateur pour encore 2 heures. Répétez ce cycle de battement et de congélation une fois de plus pour le résultat le plus lisse. Pour le gel final, laisser intact pendant au moins 2 heures jusqu'à ce qu'il soit complètement réglé. La méthode de la non-churn est plus lente qu'une machine, mais les cycles de battement décomposent les grands cristaux de glace en cristaux fins — la différence entre grainy et crémeux.",
      "visualCue": {
        "primaryTarget": "Une masse dense, lisse, jaune-ivoire pâle, sans cristaux de glace visibles, avec une finition mate plutôt que brillante lorsqu'elle est entièrement réglée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est encore liquide au centre et les bords sont slushy mais pas correctement congelés. Le mélange est encore versable.",
            "action": "Retournez au congélateur. Ne pas battre jusqu'à ce que les bords aient mis solide."
          },
          {
            "state": "Perfect",
            "description": "La crème glacée est entièrement sertie, écorcable avec une cuillère chaude, et produit des boucles douces et froides sans s'effondrer. La couleur est un ivoire-ambre chaud et la surface est dense et mat. Des odeurs de noix de coco et de caramel.",
            "action": "Tempérer à température ambiante pendant 5 minutes avant d'écoper."
          },
          {
            "state": "Overdone",
            "description": "La crème glacée est gelée et solide et se brise plutôt que d'écorcer. Les cristaux de glace sont visibles comme une texture légèrement granuleuse ou givrée à la surface.",
            "action": "Laisser reposer à température ambiante pendant 10 minutes. Si particulièrement glacé, envisager de traiter brièvement dans un robot alimentaire pour décomposer les cristaux."
          }
        ]
      },
      "feelCue": "Lors de l'écorcage, la crème glacée devrait donner avec une résistance modérée à une cuillère chaude — elle ne devrait pas s'effondrer ou se briser (trop congelée) ou s'effondrer et courir (sous-réglage). La cuillère doit se sentir dense et froide dans la cuillère, comme de l'argile fraîche."
    },
    {
      "nodeId": "step_4",
      "action": "Dresser",
      "inputs": [
        "frozen_ice_cream",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_coconut_ice_cream",
      "instructions": "Versez la crème glacée dans de petits bols, des cornets ou — authentiquement — dans une petite portion servie sur du riz collant à la vapeur. Dispersez les flocons de noix de coco grillés sur le dessus de la pelle et ajoutez les cacahuètes concassées si vous les utilisez. Le contraste de crème glacée froide et crémeuse avec du riz collant chaud ou à température ambiante est une combinaison de rue thaï classique. Servir immédiatement — la crème glacée va fondre rapidement dans des environnements chauds. La noix de coco grillée ajoute croquant et amplifie la saveur de la noix de coco, tandis que les arachides fournissent un contrepoint salé et rôti à la douceur. Dans les stands de rue, cette crème glacée est parfois servie avec du maïs sucré, des haricots rénaux ou du taro — ne soyez pas surpris par ces ajouts, qui sont traditionnels.",
      "visualCue": {
        "primaryTarget": "Une boule d'ivoire-ambre pâle avec une surface mate, surmontée de flocons de noix de coco grillés dorés et de morceaux d'arachide dorés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème glacée est trop douce à cause d'une congélation insuffisante et s'effondre plutôt que de tenir une forme de scoop.",
            "action": "Congelez-vous encore une heure avant de grignoter."
          },
          {
            "state": "Perfect",
            "description": "La pelle conserve sa forme à température ambiante pendant 3 à 5 minutes avant de se ramollir aux bords. La noix de coco grillée est visiblement brune et parfumée contre la crème d'ivoire pâle.",
            "action": "Servir et manger immédiatement tandis que le contraste entre crème froide et garniture croustillante est encore vif."
          },
          {
            "state": "Overdone",
            "description": "La crème glacée a fondu dans une piscine avant que les garnitures puissent être appliquées.",
            "action": "Servir comme une soupe de noix de coco — il a toujours un excellent goût, et c'est une préparation de dessert thaïlandaise légitime."
          }
        ]
      },
      "feelCue": "La première cuillère doit se sentir froide et dense contre le toit de votre bouche, fondant dans une vague lente et soyeuse qui enveloppe la langue dans la graisse de noix de coco et le sucre de palme caramel. La noix de coco grillée croquante arrivant un moment plus tard fournit le contraste textural qui garde chaque cuillère intéressante."
    }
  ]
};
