export default {
  "repoId": "master_vietnamese_vietnamesedicedcoffee_001",
  "parentRepoId": null,
  "slug": "vietnamese-iced-coffee",
  "author": "ForkRecipe Kitchen",
  "title": "Cà Phê S.a.",
  "description": "Un café glacé vietnamien fait à l'aide d'un filtre à phin à goutte, un café Robusta rouillé sombre coulant lentement dans une épaisse couche de lait condensé sucré, puis versé sur un verre entaché de glace — riche, doux et intensément caféiné.",
  "cuisine": "Vietnamiens",
  "culture": "Sud du Vietnam",
  "category": "beverages",
  "tags": [
    "boisson",
    "végétarien",
    "laitière",
    "café",
    "vietnamese",
    "glacé",
    "doux"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "15 min",
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
    "sour": 1,
    "bitter": 3,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Café vietnamien à rôtis foncés (Trung Nguyên ou Café Du Monde)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "n'importe quel sol grossier cast sombre avec chicorée"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau chaude, juste hors ébullition (92-96°C)",
      "ratioValue": 90,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Lait condensé sucré",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "Lait condensé d'avoine pour les produits laitiers"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "cubes de glace, grands",
      "ratioValue": 6,
      "defaultUnit": "cubes",
      "substitutions": [
        "glace concassée pour une boisson slushier"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Assembler",
      "inputs": [
        "ing_03"
      ],
      "outputState": "prepped_glass",
      "instructions": "Verser le lait condensé sucré dans le fond d'un verre court résistant à la chaleur ou directement dans la tasse de réception du filtre à phine. Le lait condensé va d'abord — ce n'est pas négociable — donc le café chaud coule directement à travers lui, commençant à se dissoudre et à s'intégrer avant de remuer. Vous voulez cette couche visible de blanc dense sous le café ambre, à la fois pour des raisons esthétiques et pour vous permettre de calibrer la douceur par la façon dont vous remuez soigneusement avant le glaçage.",
      "visualCue": {
        "primaryTarget": "Une épaisse piscine blanc ivoire de lait condensé au fond du verre, non perturbée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Trop peu de lait condensé — un mince frottis au fond qui ne donnera pas la douceur caractéristique.",
            "action": "Ajouter plus. Le rapport classique est d'environ 1 partie de lait condensé à 3 parties de café brassé."
          },
          {
            "state": "Perfect",
            "description": "Une couche blanche visqueuse généreuse de 1 à 1,5 cm de profondeur qui s'accroche aux parois vitrées lorsqu'elle est inclinée.",
            "action": "Mettre le filtre à phin sur le dessus et ajouter le fond de café."
          },
          {
            "state": "Overdone",
            "description": "Trop de lait condensé — la boisson sera grasse et épaisse.",
            "action": "Épargnez l'excès. Ajuster au goût pour la prochaine fois."
          }
        ]
      },
      "feelCue": "Le lait condensé doit verser lentement, comme du miel épais, au lieu de se répandre instantanément dans le fond."
    },
    {
      "nodeId": "step_2",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "brewed_coffee",
      "instructions": "Assembler le filtre à phin: visser la plaque de presse intérieure de façon lâche sur la chambre du filtre, charger le fond de café, et donner à la plaque de presse un quart de tour pour compresser légèrement — pas serré, car l'eau doit couler, pas bouillir. Placez le filtre sur le verre. Verser juste assez d'eau chaude (environ 10 ml) pour pré-humidifier le terrain et laisser fleurir pendant 30 secondes. Puis remplissez la chambre avec l'eau restante. Le café doit couler à un rythme d'une goutte par seconde — 4 à 5 minutes pour le brassage complet. Trop rapide signifie que le terrain est trop grossier ou la presse trop lâche; trop lent signifie trop fin ou trop serré. Une goutte d'eau de 4 minutes dans le lait condensé produit un café concentré presque sirupeux.",
      "visualCue": {
        "primaryTarget": "Une goutte régulière de café ambre sombre tombant à travers le filtre à environ une goutte par seconde, avec un bassin croissant de liquide brun profond au sommet du lait condensé blanc.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le café coule rapidement dans un cours d'eau mince plutôt que dans des gouttes individuelles — il sera faible et sous-extractible.",
            "action": "Resserrer légèrement la plaque de presse. Si déjà brasser, terminer rapidement et noter pour la prochaine fois."
          },
          {
            "state": "Perfect",
            "description": "Les gouttes individuelles tombent à une cadence par seconde. Le café recueilli en dessous est un riche ambre sombre, presque opaque. L'arôme est chocolaté et légèrement fumé.",
            "action": "Laisser finir le dégouttage complètement avant de remuer."
          },
          {
            "state": "Overdone",
            "description": "Après quelques gouttes seulement, le café s'est arrêté de dégoutter complètement — les sols sont trop serrés.",
            "action": "Enlevez la plaque de presse d'un demi-tour. Si elle est irrémédiablement collée, verser une petite quantité d'eau chaude sur le dessus pour l'aider à bouger."
          }
        ]
      },
      "feelCue": "La vapeur qui s'élève du phin doit porter un arôme de chocorie rôti, foncé et légèrement terreux, non acide ou léger."
    },
    {
      "nodeId": "step_3",
      "action": "Réfrigérer",
      "inputs": [
        "brewed_coffee",
        "ing_04"
      ],
      "outputState": "finished_ca_phe_sua_da",
      "instructions": "Une fois que tout le café a coulé à travers, remuer vigoureusement le café chaud et le lait condensé jusqu'à ce que le lait condensé ait complètement dissous et que le mélange soit d'une seule couleur tane foncée. Ne sautez pas l'agitation — le lait condensé non dissous s'écrasera autour de la glace. Chargez un deuxième grand verre avec des glaçons, en le remplissant au bord. Verser le café sucré chaud sur la glace à la fois à partir d'une hauteur. Il sifflera et frethra de façon spectaculaire. Buvez immédiatement avec une paille, en remuant au fur et à mesure.",
      "visualCue": {
        "primaryTarget": "Un verre rempli de glace baignée de tourbillons de café tan foncé qui s'estompe jusqu'à l'or pâle où la glace fond en elle, à deux tons et qui s'évapore faiblement au - dessus de la glace.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le café n'a pas été complètement agité avec le lait condensé — des stries blanches pâles visibles au fond du verre glacé.",
            "action": "Incorporer la paille jusqu'à ce que la couleur soit uniforme. Le lait condensé non dissous coule et rend la dernière gorgée désagréablement sucrée."
          },
          {
            "state": "Perfect",
            "description": "Un café brun caramel uniforme en cascade sur la glace. La glace craque audiblement quand le café chaud frappe. Les brouillards de verre. La vapeur monte.",
            "action": "Buvez immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le café a été laissé refroidir avant de verser sur la glace — pas de sifflement dramatique, et la glace ne craque et ne nuage pas correctement.",
            "action": "La saveur est la même. Le théâtre est perdu. La prochaine fois, verser chaud."
          }
        ]
      },
      "feelCue": "La première gorgée à travers la paille devrait être intensément froide, presque choquante, avec la douceur du lait condensé coupant à travers le rôti amer — rafraîchissant et riche à la fois."
    }
  ]
};
