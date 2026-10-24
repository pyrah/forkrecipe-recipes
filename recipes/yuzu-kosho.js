export default {
  "repoId": "master_japanese_yuzu_kosho_001",
  "parentRepoId": null,
  "slug": "yuzu-kosho",
  "author": "ForkRecipe Kitchen",
  "title": "Yuzu Kosho",
  "description": "Yuzu zeste et chili vert moulu avec du sel et laissé pour guérir — un condiment Kyushu de presque impossible parfum, parties égales floral, feu et saline, qui transforme un bol simple de nouilles ou un morceau de poisson grillé avec une seule petite cuillère.",
  "cuisine": "Japonais",
  "culture": "Kyushu Japonais",
  "category": "condiments",
  "tags": [
    "Yuzu",
    "Japonais",
    "condiment",
    "Chili",
    "fermenté",
    "kyushu",
    "agrumes"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "7 days 30 min",
  "ratioSystem": "parts",
  "stars": 980,
  "forks": 72,
  "contributors": 19,
  "license": "CC-BY-SA",
  "createdAt": "2024-11-25",
  "updatedAt": "2025-06-10",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 3,
    "bitter": 2,
    "umami": 1,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Citrus",
      "name": "Zeste de yuzu frais (de 6 à 8 yuzu)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "zeste de citron + Zeste de citron Meyer (combiné, moins floral)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Vert Thai ou serrano chilis (pilosité)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "chilis rouge (pour yuzu kosho rouge)",
        "jalapeño (meilleur)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel de mer fin (non iodé)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Jus de yuzu frais",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron frais"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Prélever le zeste",
      "inputs": [
        "ing_01"
      ],
      "outputState": "yuzu_zest",
      "instructions": "Zestez le fruit yuzu à l'aide d'une fine grille microplane, en travaillant soigneusement pour recueillir seulement la couche extérieure colorée et éviter la pointe blanche amère sous. Un seul yuzu produit une quantité relativement faible de zeste — environ 1 à 2 cuillères à café. Les huiles de zeste de yuzu frais sont extraordinairement volatiles et parfumées; travailler rapidement et couvrir le zeste dès qu'il est recueilli pour préserver ces aromatiques. Si yuzu n'est pas disponible, une combinaison de citron Meyer et de zeste de pamplemousse l'avoisine peu, bien que la complexité florale soit très différente.",
      "visualCue": {
        "primaryTarget": "Zeste fin, vert-jaune vif avec une apparence distinctement humide et huileuse des huiles naturelles libérées par grille. Intensément parfumé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les morceaux de zeste sont trop grands et la pointe est visible dans le mélange — fragments blancs mélangés au jaune.",
            "action": "Râper plus finement, appliquer moins de pression sur le fruit afin que vous ne prenez que la surface même."
          },
          {
            "state": "Perfect",
            "description": "Zeste fin, uniformément jaune-vert avec un reflet humide, huileux et un parfum d'agrumes intensément floral. Aucune tache blanche visible.",
            "action": "Couvrir immédiatement et passer au traitement."
          },
          {
            "state": "Overdone",
            "description": "Vous avez pressé le fruit à plusieurs reprises au-dessus de la même section et des fragments de poils blancs apparaissent dans le zeste.",
            "action": "Choisissez des fragments de menthe avec un cure-dent, ou faites pivoter vers une section fraîche de fruits. Pith rendra le yuzu kosho fini amer."
          }
        ]
      },
      "feelCue": "Le zeste devrait enrober vos doigts dans un film faiblement gras qui fait sentir votre peau comme aucun autre agrumes — floral, presque à base de plantes, avec une note supérieure complexe qui s'estompe quelques secondes après avoir quitté la peau."
    },
    {
      "nodeId": "step_2",
      "action": "Hacher finement",
      "inputs": [
        "ing_02"
      ],
      "outputState": "minced_chili",
      "instructions": "Pour un yuzu kosho traditionnel, utilisez un suribachi (mortier japonais) ou, s'il n'est pas disponible, un petit robot culinaire. Le chilis doit être finement haché, en conservant la plupart de leurs graines pour la chaleur. Retirer la tige mais laisser les graines. Plus la menthe est fine, plus la chaleur se distribue à travers la pâte finie. Si l'on utilise un couteau, il faut s'affiner à une consistance extrêmement fine, presque en pâte, des fragments minuscules, pas des morceaux visibles.",
      "visualCue": {
        "primaryTarget": "Une menthe verte très fine et humide, presque une pâte, avec des graines distribuées uniformément. Il ne reste plus de gros morceaux de chili.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le Chili est toujours en morceaux visibles. Uneven mince signifie une chaleur inégale dans le produit final.",
            "action": "Continuer à mictionner avec un couteau à bascule, en ramassant et en remuant jusqu'à ce que la texture soit uniformément fine."
          },
          {
            "state": "Perfect",
            "description": "Fine, humide, presque pâteuse avec des graines. La couleur est un vert vif et lumineux.",
            "action": "Combiner avec le zeste et le sel."
          },
          {
            "state": "Overdone",
            "description": "Le Chili est une pâte lisse avec des graines complètement cassées — une certaine chaleur peut avoir été perdue du fait de la volatilisation de la capsaïcine.",
            "action": "Procéder — la texture est lisse plutôt que légèrement granulaire, mais parfaitement utilisable."
          }
        ]
      },
      "feelCue": "Émincer le chili avec des gants — à cette fine coupe, la capsaïcine est dans l'air et piquera les yeux et la peau. L'odeur doit être un parfum vert-chili vif et propre."
    },
    {
      "nodeId": "step_3",
      "action": "Piler",
      "inputs": [
        "yuzu_zest",
        "minced_chili",
        "ing_03",
        "ing_04"
      ],
      "outputState": "yuzu_kosho_paste",
      "instructions": "Mélanger le zeste de yuzu, le chili haché et le sel dans un suribachi ou un petit robot alimentaire. Ajouter le jus de yuzu. Graissage ou traitement jusqu'à ce que le mélange forme une pâte cohésive légèrement rugueuse — le sel tire l'humidité du zeste et du chili, liant la pâte ensemble. Bouche : il doit être intensément salé, farouchement chaud et dynamiquement agrumes-avant. Transférer dans un petit pot stérilisé.",
      "visualCue": {
        "primaryTarget": "Une pâte verte et cohésive, lisse mais légèrement texturée, qui tient sa forme lorsqu'elle est écopée sur une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est encore lâche et les éléments n'ont pas été fusionnés — les fragments de zeste et de chili sont visibles séparément.",
            "action": "Continuer le broyage ou le traitement. Le sel a besoin de plus de temps pour attirer l'humidité et lier la pâte."
          },
          {
            "state": "Perfect",
            "description": "Une pâte uniforme vert vif avec une texture légèrement granulaire. Prend une cuillère, sent intensément le yuzu et le chili.",
            "action": "Transférer dans un pot et guérir."
          },
          {
            "state": "Overdone",
            "description": "Pâte complètement lisse avec toute texture perdue et couleur verte commençant à s'oxyder en olive-drabe.",
            "action": "Continuez — il aura encore un excellent goût. La prochaine fois, utilisez un mortier plutôt qu'un processeur pour mieux contrôler la texture."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir humide et légèrement collante à partir des huiles d'agrumes et du jus de chili — comme une confiture d'agrumes très finement texturée et très salée qui fait fourmiller votre langue avant même de la goûter."
    },
    {
      "nodeId": "step_4",
      "action": "Saler et laisser reposer",
      "inputs": [
        "yuzu_kosho_paste"
      ],
      "outputState": "finished_yuzu_kosho",
      "instructions": "Scellez le pot et réfrigérez pendant au moins 3 jours, idéalement 7. Pendant ce temps, le sel continue à attirer l'humidité, les saveurs se mélangent et s'approfondissent, et la netteté du chili brut s'adoucit à quelque chose de plus complexe. La couleur passera d'un vert vif à un vert olive plus muté — c'est naturel et désirable. Utilisation en petites quantités : une seule cuillère à café sur poulet grillé, ramen, sashimi ou huîtres. A conserver jusqu'à 3 mois au réfrigérateur.",
      "visualCue": {
        "primaryTarget": "Après le durcissement, la pâte est un or vert plus profond, plus muet. La texture est uniforme et légèrement plus humide qu'en emballage. L'arôme est profondément complexe — les agrumes floraux et le chili intégrés dans une seule note.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après seulement 1 jour, la pâte a encore le goût de chili cru et zeste séparés. Les saveurs ne sont pas intégrées.",
            "action": "Reservoir et retourner au réfrigérateur. L'intégration se produit entre les jours 3 et 7."
          },
          {
            "state": "Perfect",
            "description": "Après 5-7 jours, les saveurs sont unifiées : une note complexe, de fleur de feu. La couleur est vert olive. La chaleur s'est accrue de vive à lente.",
            "action": "Commencez à utiliser en très petites quantités."
          },
          {
            "state": "Overdone",
            "description": "Après 3 mois et plus, la couleur est devenue brun olive et le parfum d'agrumes s'estompe. La chaleur et le sel restent, mais la note florale est partie.",
            "action": "Toujours utilisable comme pâte de chili-sel. Ajouter le zeste de yuzu frais pour raviver le parfum."
          }
        ]
      },
      "feelCue": "Un yuzu kosho complètement guéri doit sentir comme des agrumes distillés et du chili — presque comme du parfum dans son intensité quand vous détachez le pot dans une cuisine fraîche."
    }
  ]
};
