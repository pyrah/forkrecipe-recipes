export default {
  "repoId": "master_american_coleslaw_001",
  "parentRepoId": null,
  "slug": "coleslaw",
  "author": "ForkRecipe Kitchen",
  "title": "Creamy Coleslaw",
  "description": "Choux éparpillés jetés dans une vinaigrette de mayonnaise légèrement sucrée qui a eu une heure pour extraire l'humidité du chou et le concentrer dans une griffe croustillante, brillante, profondément aromatisée — le plat d'accompagnement définitif du barbecue.",
  "cuisine": "Américain",
  "culture": "Américain",
  "category": "vegetables",
  "tags": [
    "américains",
    "Choux",
    "griffe",
    "côté bbq",
    "Crémeux"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "1 hr 15 min",
  "ratioSystem": "parts",
  "stars": 1142,
  "forks": 98,
  "contributors": 13,
  "license": "CC-BY-SA",
  "createdAt": "2024-07-04",
  "updatedAt": "2025-06-18",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 3,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Choux verts, décortiqués et finement broyés",
      "ratioValue": 70,
      "defaultUnit": "parts",
      "substitutions": [
        "Choux de napa",
        "chou rouge (utiliser la moitié)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Choux rouges, finement déchiquetés",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "chou vert extra"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Carottes, pelées et râpées",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "fenouil, tranché finement"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Mayonnaise pleine graisse",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "La mayo de Duke",
        "Mayo kewpie japonais"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc",
        "jus de citron"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Chérie",
        "sirop d'érable"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Graines de céleri, sel casher, poivre noir",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Sel de céleri"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sel et choux égouttés",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_07"
      ],
      "outputState": "salted_vegetables",
      "instructions": "Mélanger le chou vert déchiqueté, le chou rouge et les carottes râpées dans un grand calandre sur un bol. Mélanger avec 1 cuillère à café du sel casher de l'assaisonnement. Laisser reposer 30 minutes — le sel va extraire l'excès d'eau du chou par osmose. Rincer brièvement sous l'eau froide, puis serrer fermement avec vos mains ou presser entre deux serviettes de cuisine propres pour retirer le plus de liquide possible.",
      "visualCue": {
        "primaryTarget": "Après salage et repos, le chou s'est légèrement flétri et une importante réserve de liquide nuageux a été recueillie dans le bol sous la calandre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Très peu de liquide dans le bol — à peine une cuillère à soupe. Le chou semble toujours complètement rigide et n'a pas flétri du tout.",
            "action": "Encore un peu plus de sel et attendre plus longtemps. Le tirage du liquide prend 30 minutes au minimum. En précipitant cette étape, on crée une griffe aqueuse et diluée."
          },
          {
            "state": "Perfect",
            "description": "Plusieurs cuillerées à soupe de liquide nuageux et légèrement brillant dans le bol. Le chou s'est adouci et s'est flétri légèrement, mais il est toujours croquant. C'est bon, ça devrait céder sans perdre de vue.",
            "action": "Rincer, presser à sec et passer à la vinaigrette."
          },
          {
            "state": "Overdone",
            "description": "Le chou a été salé pendant plus de 2 heures et est très mou et translucide. Le liquide extrait est abondant.",
            "action": "Rincer très soigneusement sous l'eau froide pour éliminer l'excès de sel. Pressez très sec. La griffe sera plus douce mais toujours saveur."
          }
        ]
      },
      "feelCue": "Prenez une poignée de choux salés, reposés et pressez fermement — il devrait libérer une quantité surprenante d'eau, comme arroser une éponge humide. S'il libère à peine du liquide, il n'est pas resté assez longtemps."
    },
    {
      "nodeId": "step_2",
      "action": "Faire la vinaigrette",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "coleslaw_dressing",
      "instructions": "Dans un bol moyen, fouetter ensemble la mayonnaise, le vinaigre de cidre de pomme, le sucre, la graine de céleri, le sel restant et une généreuse fissure de poivre noir jusqu'à ce qu'elle soit lisse et complètement combinée. Goûtez la vinaigrette avant de l'ajouter au chou — il devrait goûter plus tangent et salé que vous voulez la griffe finale, parce que le chou va le diluer. Ajustez l'équilibre du vinaigre et du sucre selon vos préférences.",
      "visualCue": {
        "primaryTarget": "Une vinaigrette blanche douce et crémeuse qui coule lentement d'une cuillère. Pas de cristaux de sucre visibles. La couleur est ivoire uniforme avec des taches brun pâle de céleri.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sucre n'a pas complètement dissout — des cristaux blancs visibles quand vous tenez le pansement à la lumière. L'habillage est granuleux au goût.",
            "action": "fouetter vigoureusement pendant une autre minute, ou laisser reposer 5 minutes et fouetter à nouveau. Le vinaigre dissout le sucre si le temps lui est imparti."
          },
          {
            "state": "Perfect",
            "description": "Doux, crémeux et uniformément ivoire. Elle coule d'une cuillère dans un ruban épais et lent. Goûte audacieusement tanné avec une douceur arrondie.",
            "action": "Ajouter immédiatement au chou et mélanger."
          },
          {
            "state": "Overdone",
            "description": "Sans objet pour une vinaigrette froide — il n'y a pas d'état trop cuit. Cependant, si la vinaigrette a un goût trop sucré ou trop acide maintenant, ajuster avant d'ajouter au chou.",
            "action": "Goûter et rééquilibrer — ajouter plus de vinaigre pour le tang, plus de sucre pour la douceur, une pincée de sel à aiguiser."
          }
        ]
      },
      "feelCue": "Plongez votre doigt dans le pansement — il devrait envelopper votre doigt dans un film épais et lisse. La saveur devrait frapper votre langue dans cet ordre: la graisse et la richesse d'abord, puis le vinaigre vif, puis une douceur traînante."
    },
    {
      "nodeId": "step_3",
      "action": "Robe et frisson",
      "inputs": [
        "salted_vegetables",
        "coleslaw_dressing"
      ],
      "outputState": "dressed_coleslaw",
      "instructions": "Ajouter le chou pressé sec dans la vinaigrette et mélanger soigneusement jusqu'à ce que chaque brin soit enduit. Goûtez et assaisonnez. Couvrir et réfrigérer pendant au moins 1 heure avant de servir — idéalement 2 heures. Le temps de repos n'est pas facultatif : il permet à la vinaigrette de pénétrer le chou, les saveurs de la mélisse et la texture pour atteindre l'équilibre parfait entre croustillant et tendre.",
      "visualCue": {
        "primaryTarget": "Les fils de chou sont entièrement recouverts d'un pansement brillant et collant. Le chou rouge a saigné légèrement, teintant la vinaigrette d'un rose-violet pâle. La griffe est brillante et uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Dressing semble baigné au fond du bol. Les ficelles de chou sont inégalement revêtues, certaines semblent encore sèches. Les saveurs ont un goût séparé, pas mélangé.",
            "action": "Jeter plus soigneusement et réfrigérer. Ne pas servir immédiatement — un repos minimum d'une heure est essentiel."
          },
          {
            "state": "Perfect",
            "description": "Chaque brin est uniformément recouvert d'un pansement brillant. La couleur est uniforme lavande-vert pâle du chou rouge saigné. Les saveurs sont intégrées. Le chou est tendre à l'extérieur, mais il craque encore.",
            "action": "Goûtez et ajustez l'assaisonnement final. Servir froid."
          },
          {
            "state": "Overdone",
            "description": "Slaw est assis depuis plus de 8 heures. Le chou est plutôt mou, plus comme un cornichon qu'une salade. L'habillage s'est absorbé dans le chou et mis en commun au fond.",
            "action": "Égoutter le liquide excédentaire du fond. Encore. Toujours bon — La griffe de style sud est en fait ce style intentionnellement."
          }
        ]
      },
      "feelCue": "Après avoir refroidi, prenez un petit groupe de la griffe et maintenez - la, elle devrait s'accrocher légèrement de la vinaigrette, tombant lentement plutôt que de se disperser immédiatement comme une salade sèche."
    },
    {
      "nodeId": "step_4",
      "action": "Goût final et servir",
      "inputs": [
        "dressed_coleslaw"
      ],
      "outputState": "finished_coleslaw",
      "instructions": "Retirer la griffe du réfrigérateur 10 minutes avant de servir. Repensez et goûtez pour un ajustement final de l'assaisonnement — le froid supprime la saveur, donc il peut être nécessaire de pincer plus de sel ou de éclabousser plus de vinaigre après le refroidissement. Servir froid aux côtés du barbecue ou du poulet frit. Transférer dans un bol de service avec des pinces, permettant à l'excès de vinaigrette de s'égoutter dans le bol.",
      "visualCue": {
        "primaryTarget": "Un monticule lustré de chou déchiqueté légèrement pourpre dans le bol de service. Les brins individuels sont visibles et enduits mais ne se baignent pas dans la vinaigrette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La griffe est encore très froide et les saveurs sont muettes. Trop de pansements en bas.",
            "action": "Laisser reposer encore 10 minutes à température ambiante. Égoutter les excès de pansement."
          },
          {
            "state": "Perfect",
            "description": "Glossy, la griffe uniformément habillée est froide mais pas froide. Les saveurs sont vives — tannantes, légèrement douces, avec un chou propre croquant.",
            "action": "Servir immédiatement comme plat latéral."
          },
          {
            "state": "Overdone",
            "description": "Slaw a été laissé à température ambiante pendant plus de 2 heures. Dressing a complètement absorbé. La couleur est devenue uniformément violet-gris.",
            "action": "Réfrigérer et utiliser dans la journée. Ne servez pas de griffe qui s'est assise trop longtemps à la température ambiante — la mayonnaise est un problème de sécurité alimentaire."
          }
        ]
      },
      "feelCue": "La griffe finie, lorsqu'elle est mangée, devrait offrir deux textures simultanément : un extérieur tendre, donnant où la vinaigrette a ramolli le chou, et un éclat intérieur distinct quand vous mordez à travers — le centre de chaque lambure devrait encore croquer."
    }
  ]
};
