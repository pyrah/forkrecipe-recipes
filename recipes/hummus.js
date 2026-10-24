export default {
  "repoId": "master_lebanese_hummus_001",
  "parentRepoId": null,
  "slug": "hummus",
  "author": "ForkRecipe Kitchen",
  "title": "Hummus",
  "description": "Le benchmark Beiruti — les pois chiches mijotés à s'effondrer, puis fouettés de tahini cru, de citron et d'ail dans une purée pâle et bouffante si lisse qu'il verse comme de la crème et des piscines dans des rubans sous une bruine d'huile d'olive verte.",
  "cuisine": "Libanais",
  "culture": "Levantine",
  "category": "condiments",
  "tags": [
    "hummus",
    "lébanèse",
    "pois chiches",
    "Tahini",
    "mezze",
    "végétalien"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "12 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 3,
    "bitter": 2,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Pois chiches séchés",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Pois chiches en conserve de bonne qualité (plongée/plongée)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Leavener",
      "name": "Soda au four (pour tremper et laisser mijoter)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Tahini brut (bien ciré, fluide)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "Tahini libanais ou palestinien léger"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Citrus",
      "name": "Jus de citron frais",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousse d'ail",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "confit ail pour une note plus douce"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Solvent",
      "name": "Eau glacée",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "liquide de cuisson de pois chiches réservé"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "une poussière de sumac ou de paprika"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trempage",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "soaked_chickpeas",
      "instructions": "Combiner les pois chiches secs avec la moitié de la bicarbonate de soude et couvrir d'eau froide d'au moins trois pouces — ils vont à peu près tripler en volume. Laisser à température ambiante toute la nuit, de 8 à 12 heures. La bicarbonate de soude augmente le pH de l'imprégnation, desserrant les peaux et adoucissant la pectine de sorte que les pois chiches cuireont suffisamment tendre pour se décomposer complètement.",
      "visualCue": {
        "primaryTarget": "Les pois chiches ont gonflé jusqu'à deux à trois fois leur taille sèche, sans rides et sans rides, les peaux commençant à se soulever et à flotter librement dans l'eau nuageuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pois chiches sont encore petits, durs et profondément ridés. L'eau de trempe est assez claire.",
            "action": "Continuez à tremper. Les cuisines froides et les vieux pois chiches ont besoin de plus de temps."
          },
          {
            "state": "Perfect",
            "description": "Les pois chiches sont lisses, arrondis et au moins doublés. Les peaux molles dérivent à la surface et un pois chiche pressé se dente sous un ongle.",
            "action": "Égoutter et bien rincer pour laver la bicarbonate de bicarbonate, puis passer à la mijotée."
          },
          {
            "state": "Overdone",
            "description": "Les pois chiches sentent l'aurore ou le fermenté et l'eau est mousseuse et désodorisante — ils sont trempés trop longtemps dans une pièce chaude.",
            "action": "Si seulement légèrement amer, rincer très soigneusement et procéder. S'il est clairement fermenté, jeter et recommencer: les pois chiches aigres ruinent l'hummus."
          }
        ]
      },
      "feelCue": "Un pois chiche trempé doit se diviser proprement en deux sous la pression du pouce avec un donner doux, féculent, pas un coup dur. L'eau se sentira légèrement liquéfiée par le bicarbonate de soude."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "soaked_chickpeas",
        "ing_02"
      ],
      "outputState": "cooked_chickpeas",
      "instructions": "Mettre les pois chiches égouttés dans une casserole avec le reste du bicarbonate de soude et couvrir généreusement d'eau douce. Porter à ébullition et écrémer la mousse grise et toutes les peaux qui s'élèvent. Réduire à mijoter doucement et cuire de 45 à 75 minutes, à découvert, garnir d'eau chaude au besoin. Vous voulez qu'ils soient bien cuits après al dente — au point de s'effondrer — pour une purée soyeuse. Réserver une tasse du liquide de cuisson avant l'égouttage.",
      "visualCue": {
        "primaryTarget": "Les pois chiches sont mous-doux et beaucoup ont versé leurs peaux, qui flottent comme des fantômes pâles sur une surface féculente et moussée. Un pois chiche écrase pour coller sans résistance.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pois chiches tiennent leur forme et ont un centre frais et ferme lorsqu'ils sont mordus. Peu de peaux se sont desserrées.",
            "action": "Continuer à mijoter et vérifier toutes les 10 minutes. Le bicarbonate de soude accélère cela, mais les pois chiches peu cuits donnent un hummus granuleux et pasty."
          },
          {
            "state": "Perfect",
            "description": "Un pois chiche se frotte à une pâte lisse entre deux doigts avec zéro grain. Ils s'effondrent visiblement et le bouillon est épais et nuageux.",
            "action": "Réserver le liquide de cuisson, puis égoutter. Éliminez les peaux lâches pour obtenir le résultat le plus doux."
          },
          {
            "state": "Overdone",
            "description": "Le pot est plus pur que les pois chiches et l'eau est presque bouillie sèche.",
            "action": "C'est bien pour l'hummus — il suffit de les purifier de toute façon. Ajouter de l'eau chaude si le pot est brûlé, et racler les morceaux brunis."
          }
        ]
      },
      "feelCue": "Écraser un pois chiche chaud contre le côté du pot — il devrait s'effondrer dans un frottis beurreux, sans grain. La cuisine sent la noisette et légèrement minérale du bicarbonate de soude."
    },
    {
      "nodeId": "step_3",
      "action": "Émulsifier",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "tahini_sauce",
      "instructions": "Pound ou râper l'ail à une pâte avec une pincée de sel, puis le tremper dans le jus de citron pendant 5 à 10 minutes pour assouplir sa morsure. Retirez les solides d'ail si vous voulez une saveur plus propre. Frottez le tahini dans le jus de citron, il saisira et s'emboîtera dans une pâte dure et pâle, qui est exactement droite. Maintenant, arrosez dans l'eau glacée un peu à la fois, fouettant fort. La pâte saisie se détache et devient brillante, moelleuse et blanche. Cette sauce tahini émulsifiée est le moteur d'un hummus lisse.",
      "visualCue": {
        "primaryTarget": "Une sauce blanche d'ivoire, souple et versable, avec un éclat de satin, enrobant le fouet et sentant fortement le citron et le sésame grillé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est épais, raide et grisâtre, s'accrochant au fouet dans une lourde masse.",
            "action": "Continuez à ajouter de l'eau glacée une cuillère à café à la fois et fouetter — elle se brisera et se desserrea. L'eau froide émulsifie la tahini mieux que la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Une sauce lisse, brillante et blanc cassé juste assez fine pour verser dans un ruban lent. Goûtez vif, lumineux et légèrement amer.",
            "action": "Goûtez et ajustez le sel et le citron, puis passez au fouet dans les pois chiches."
          },
          {
            "state": "Overdone",
            "description": "La sauce est aqueuse et fine, sans corps, et semble légèrement séparée.",
            "action": "fouetter dans un peu plus de tahini pour reconstruire le corps, ou l'accepter — les pois chiches épaissiront tout dans la prochaine étape."
          }
        ]
      },
      "feelCue": "Le moment de la magie est la saisie-alors-release: la pâte combat le fouet, devient raide, puis se détend soudainement dans la soie pendant que l'eau de glace frappe. Il devrait goûter une touche trop goudronneuse et salée à lui seul — les pois chiches borgnes la rééquilibreront."
    },
    {
      "nodeId": "step_4",
      "action": "Whip",
      "inputs": [
        "cooked_chickpeas",
        "tahini_sauce"
      ],
      "outputState": "finished_hummus",
      "instructions": "Tandis que les pois chiches sont encore chauds, les mélanger dans un robot alimentaire pendant 3 à 4 minutes, bien plus longtemps que nécessaire, en grattant les côtés, jusqu'à ce qu'ils forment une pâte raide et complètement lisse. Avec le moteur en marche, verser la sauce tahini et continuer à mélanger. Allongez-vous avec un liquide de cuisson chaud réservé ou un peu plus d'eau glacée jusqu'à ce que l'hummus soit pâle, aéré et versable. Laissez reposer 10 minutes; il entre en vigueur légèrement. Répartir dans un bol brouillé, mettre l'huile d'olive dans le puits et servir à température ambiante.",
      "visualCue": {
        "primaryTarget": "Une purée pâle et presque moelleuse qui tombe de la spatule dans un ruban doux et brillant et s'installe lentement à plat — pas de grain de pois chiche visible, pas de peau, juste une crème uniforme de la couleur du vieil ivoire.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La purée est raide, beige et granuleuse, tenant des pics pointus et goûtant du pâteux.",
            "action": "Continuer à mélanger et ajouter le liquide de cuisson chaud une cuillère à la fois. La douceur vient du TEMPS dans le processeur — donnez-lui toutes les minutes."
          },
          {
            "state": "Perfect",
            "description": "Léger, soyeux et sans morceaux, illuminé presque à blanc cassé et juste assez lâche pour verser et se mettre en niveau. Goûts équilibrés – noix, tannés, salés, avec une chaleur d'ail propre.",
            "action": "Reposez-vous 10 minutes, assiette avec une généreuse piscine d'huile d'olive et servez en douceur. Il se serre en refroidissant et en refroidissant."
          },
          {
            "state": "Overdone",
            "description": "L'hummus est soupeux et lâche, se répandant dans une flaque mince qui ne tiendra pas un coup.",
            "action": "Mélanger quelques cuillerées de pois chiches ou de tahini supplémentaires pour reconstruire le corps, puis re-saisonner."
          }
        ]
      },
      "feelCue": "Frottez une croûte entre vos doigts – parfaitement lisse, sans trace de grain. Sur la langue, elle doit se sentir sans poids et aérée plutôt que dense, puis finir longue et noisette. S'il a un goût plat, il veut du sel et du citron, pas plus de tahini."
    }
  ]
};
