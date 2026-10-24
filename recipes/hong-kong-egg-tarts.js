export default {
  "repoId": "master_chinese_hong_kong_egg_tarts_001",
  "parentRepoId": null,
  "slug": "hong-kong-egg-tarts",
  "author": "ForkRecipe Kitchen",
  "title": "Tartes aux oeufs de Hong Kong (Dan Tat)",
  "description": "Une coque courte en croûte, faite de saindoux, éclate à la dent comme un cracker à la crème, crachant une crème d'oeufs de vanille lisse et à peine sertie qui tremble lorsque l'assiette est déplacée — la surface de la crème est complètement lisse, non pochée, et goûte propre, légèrement sucrée et profondément oeuvrée. C'est la raison pour laquelle le cantonais cha chaan teng (maisons de thé) existe.",
  "cuisine": "Chinois",
  "culture": "Hong Kong Cha Chaan Teng",
  "category": "desserts",
  "tags": [
    "Chinois",
    "hong-kong",
    "oeuf-tart",
    "pâtisserie",
    "Coutard",
    "dim-sum",
    "dessert"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 0,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 180,
      "defaultUnit": "g",
      "substitutions": [
        "farine de gâteau (plus tendre résultat)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Lard (refroidi)",
      "ratioValue": 90,
      "defaultUnit": "g",
      "substitutions": [
        "beurre non salé (moins de flocons)",
        "raccourcissement"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre écrémé (sucre pulvérisé)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Jaune d'œuf (pour la pâtisserie)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Hydration",
      "name": "Eau froide",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Oeufs entiers, gros",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "lait évaporé pour une saveur plus riche"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "haricot vanille (demi-pode)"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin (pinche)",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Crémer",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_01"
      ],
      "outputState": "shortcrust_dough",
      "instructions": "Dans un bol, frotter le saindoux réfrigéré dans le sucre glaçant jusqu'à ce qu'il ressemble à de fines chapelures de pain — ou le faire revenir brièvement dans un robot alimentaire. Ajouter le jaune d'œuf et l'eau froide et mélanger jusqu'à ce que la pâte se combine dans une boule lisse et souple. Ne pas surmener : arrêter le moment où il ne reste pas de farine sèche. Envelopper le film de collage et réfrigérer pendant 30 minutes. Le saindoux doit rester froid pour créer la texture caractéristique et effilée, la pâte à base de beurre sera plus douce et plus friable.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte lisse, pâle et cohésive qui tient sa forme lorsqu'elle est pressée, avec une surface légèrement grasse du saindoux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est toujours émiettée et ne tient pas debout lorsqu'elle est pressée.",
            "action": "Ajouter la moitié d'eau une cuillère à café à la fois et mélanger doucement jusqu'à ce que juste cohésif."
          },
          {
            "state": "Perfect",
            "description": "Pâte lisse et souple qui ne craque pas aux bords lorsqu'elle est courbée. Un peu frais au toucher.",
            "action": "Enrouler et réfrigérer pendant 30 minutes avant de rouler."
          },
          {
            "state": "Overdone",
            "description": "La toux est chaude, très douce et légèrement grasse — le saindoux a fondu par manipulation.",
            "action": "Réfrigérer pendant 45 minutes avant de rouler — la pâte tiède se rétrécira fortement pendant la cuisson."
          }
        ]
      },
      "feelCue": "La pâte doit avoir l'impression de modeler de l'argile — ferme, lisse et fraîche — et laisser un faible film gras sur la paume du saindoux."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "egg_custard_mixture",
      "instructions": "Dans un bol, fouetter les œufs, le lait, le sucre de castre, la vanille et le sel jusqu'à ce que le sucre soit complètement dissous. Retirez le mélange deux fois dans un tamis à mailles fines, ce qui élimine toute protéine d'oeuf coagulée et toute bulle d'air qui créerait une surface piquée et inégale sur la crème cuite. La crème tendue doit être parfaitement lisse et légèrement dorée. Laisser reposer pendant 10 minutes afin que les bulles de surface se dissipent.",
      "visualCue": {
        "primaryTarget": "Un liquide soyeux uniformément doré, sans bulles visibles à la surface et sans mousse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface a une couche de mousse et des bulles visibles — le sucre ne peut pas être complètement dissous.",
            "action": "Retendez et laissez reposer 10 minutes de plus. Exécutez brièvement une soufflette sur la surface pour faire sauter les bulles restantes."
          },
          {
            "state": "Perfect",
            "description": "Miroir, liquide doré pâle. Complètement libre. Pas de mousse superficielle.",
            "action": "Remplissez les coquilles immédiatement avant que d'autres bulles ne se forment."
          },
          {
            "state": "Overdone",
            "description": "Custard est assis trop longtemps et une peau s'est formée à la surface.",
            "action": "Retraction avant utilisation."
          }
        ]
      },
      "feelCue": "La crème tendue devrait s'écouler d'une cuillère dans une feuille propre et non cassée — toute masse ou corde d'oeuf coagulé signifie que vous devez à nouveau la forcer."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "shortcrust_dough",
        "egg_custard_mixture"
      ],
      "outputState": "finished_egg_tarts",
      "instructions": "Préchauffer le four à 200 C (390 F). Rouler la pâte réfrigérée à 3 mm d'épaisseur sur une surface légèrement farinée. Couper les rondelles et presser dans des moules à tarte de 8 cm, presser uniformément les côtés et parer tout surplomb. Piquez les bases légèrement avec une fourchette. Remplissez chaque coquille à 80% de capacité avec le mélange de crème – la crème se développe légèrement lorsqu'elle se met. Cuire sur la grille du milieu pendant 18 à 22 minutes. Pendant les 10 premières minutes, n'ouvrez pas la porte du four ou la crème coulera. Les tartes sont faites quand la pâtisserie est dorée et la crème est juste mise — il devrait encore y avoir un très léger oscillation au centre quand on la pousse.",
      "visualCue": {
        "primaryTarget": "Coquilles de pâtisserie dorées avec une surface de crème lisse, à peine tremblante, qui est uniformément réglée sans fissures, picking ou bulles. La surface de la crème est un or ivoire pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Custard est encore liquide au centre et slohes lorsque le plateau est déplacé.",
            "action": "Retourner au four 3 minutes de plus — vérifier toutes les 60 secondes à partir de ce point."
          },
          {
            "state": "Perfect",
            "description": "Le custard jongle doucement comme une gelée, avec une surface lisse et intacte. La pâtisserie est dorée sans taches brutes sur les côtés.",
            "action": "Laisser refroidir dans les moules pendant 10 minutes avant le démouillage. C'est chaud."
          },
          {
            "state": "Overdone",
            "description": "La surface du custard s'est fissurée, bublée ou gonflée — elle s'est asséchée par une chaleur excessive.",
            "action": "La saveur est fine mais la texture est granuleuse. Servir avec discrétion. La prochaine fois, réduisez la température du four de 10 °C."
          }
        ]
      },
      "feelCue": "Une tarte aux oeufs parfaitement cuite, levée du moule, devrait se sentir solide mais donner un léger et luxueux joggle — comme une panna cotta très ferme — pas rigide, pas rugueuse."
    }
  ]
};
