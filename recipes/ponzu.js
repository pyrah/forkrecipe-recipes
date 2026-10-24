export default {
  "repoId": "master_japanese_ponzu_001",
  "parentRepoId": null,
  "slug": "ponzu",
  "author": "ForkRecipe Kitchen",
  "title": "Ponzu",
  "description": "L'épine dorsale brillante et salée de la table japonaise — jus d'agrumes aigres marié au soja et trempé sur kombu et katsuobushi jusqu'à ce qu'il approfondisse dans une tarte, acajou pansement qui réveille tout du froid tofu au poisson marin et shabu-shabu chaud pot.",
  "cuisine": "Japonais",
  "culture": "Kansai",
  "category": "condiments",
  "tags": [
    "ponzu",
    "Japonais",
    "agrumes",
    "soja",
    "umami",
    "option végétalienne",
    "Shabu-shabu"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "24 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 4,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Citrus",
      "name": "Jus de Yuzu (fraîchement pressé)",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "Jus de sudachi",
        "un mélange de jus de citron et de lime",
        "Jus de kabosu"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Vinaigre de riz",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de sushi (réduire légèrement le mirin)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "sauce soja (koikuchi)",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "usukuchi pour un ponzu plus pâle et salé",
        "tamari pour sans gluten"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Mirin (Hon-mirin)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "mirine mijotée 1 min pour brûler l'alcool",
        "une pincée de sucre dissous dans l'eau"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Glutamate",
      "name": "Kombu (poule séchée, carré de 5 cm)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "rishiri ou ma-kombu"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Inosinate",
      "name": "Katsuobushi (flacons de bonito séchés)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "shiitake dashi poudre pour un ponzu végétalien (omit bonito)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "ponzu_base",
      "instructions": "Dans un pot en verre propre ou un bol non réactif, mélanger le jus de yuzu, le vinaigre de riz, la sauce de soja et le mirin. Ne chauffez pas les agrumes — le jus cru garde sa note supérieure haute et parfumée, et la cuisson assombrirait l'aurore en quelque chose de plat et de ragoût. Mélanger doucement. Le liquide doit être un ambre profond qui sent également les agrumes vifs et le soja salé, ni l'un ne noyant l'autre.",
      "visualCue": {
        "primaryTarget": "Liquide limpide et foncé, sans reflet d'huile ni nuageux, sentant les agrumes sur une base de soja salée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange sent massivement le soja cru avec peu de lifting d'agrumes, ou goûte durement alcoolique du mirin.",
            "action": "Ajouter le jus de yuzu une cuillère à café à la fois jusqu'à ce que les agrumes lisent clairement sur le nez. Si vous avez une forte bouffée, utilisez du mirin qui a été mijoté une minute pour faire cuire l'alcool."
          },
          {
            "state": "Perfect",
            "description": "Équilibré sur le nez — les agrumes et le soja dans une mesure égale — en goûtant avec amer et salé avec un léger bord doux du mirin.",
            "action": "Ajouter le kombu et le katsuobushi et le déplacer à raide."
          },
          {
            "state": "Overdone",
            "description": "La base a le goût de cloître et plat, la douceur ou le vinaigre dominant et les agrumes perdus.",
            "action": "Retirez-le avec plus de jus de yuzu frais et un éclaboussure de soja pour restaurer l'épine dorsale aigre-sel."
          }
        ]
      },
      "feelCue": "À ce stade brut, il doit avoir un goût acidulé agressive et salé, presque trop vif pour siroter. L'umami penchant à venir le tournera et l'approfondira, alors résistez à l'envie de l'adoucir maintenant."
    },
    {
      "nodeId": "step_2",
      "action": "Infuser",
      "inputs": [
        "ponzu_base",
        "ing_05",
        "ing_06"
      ],
      "outputState": "steeped_ponzu",
      "instructions": "Essuyer légèrement le kombu avec un chiffon humide (ne jamais rincer le mannitol poudreux blanc — c'est-à-dire l'umami pur) et le submerger dans la base avec le katsuobushi. Couvrir et réfrigérer pendant au moins 24 heures, idéalement 2 à 3 jours. Cette infusion froide puise le glutamate de la varech et l'inosinate du bonito dans le liquide acide, en construisant le sous-ton savore profond qui définit le vrai ponzu. Les flocons gonflent et coulent lentement en saturant.",
      "visualCue": {
        "primaryTarget": "Le kombu s'est adouci et s'est élargi, les flocons de bonito sont obscurcis et la plupart du temps coulés, et le liquide s'est approfondi jusqu'à une acajou plus riche et plus ronde.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les flocons flottent encore à sec sur le dessus et le liquide a un goût mince et unidimensionnel, sans profondeur savoureuse.",
            "action": "Continuez à vous piéger. La perfusion froide est lente — donnez-lui la journée entière ou plus, et pressez doucement les flocons sous la surface."
          },
          {
            "state": "Perfect",
            "description": "Une rondeur savoureuse prononcée se trouve maintenant sous le tang des agrumes, et le bonito et le varech ont renoncé à leur saveur. L'arôme est stratifié : tarte, sel et profondément océanique.",
            "action": "Souchez immédiatement pour arrêter la perfusion avant qu'elle ne devienne boueuse ou poissonneuse."
          },
          {
            "state": "Overdone",
            "description": "Trop long, le ponzu a un goût trop poissonneux, amer ou moussant, avec un aspect lissé et légèrement nuageux.",
            "action": "La souche à la fois et illuminer avec un peu de yuzu frais et un jet de soja. À l'avenir, la tension à la marque de 2 à 3 jours."
          }
        ]
      },
      "feelCue": "Soulevez le couvercle chaque jour et l'odeur — vous voulez que la note marine et salée grandisse régulièrement sans jamais traverser dans la pêche aiguë. Le kombu se sentira souple et glissant, plus fragile."
    },
    {
      "nodeId": "step_3",
      "action": "Filtrer",
      "inputs": [
        "steeped_ponzu"
      ],
      "outputState": "finished_ponzu",
      "instructions": "Placez un tamis à mailles fines doublé d'une serviette en papier ou d'une nappe de fromage sur un pot propre et versez le ponzu à travers, le laissant couler sans presser - en pressant les solides force à travers des fines amères et nuageuses. Jetez le kombu et le bonito. Bouteillez le ponzu tendu et laissez-le reposer au réfrigérateur au moins quelques heures afin que les saveurs s'installent et se marient. Il se conserve réfrigéré pendant plusieurs semaines et ne s'améliore que pendant la première semaine.",
      "visualCue": {
        "primaryTarget": "Un liquide acajou propre, brillant et translucide sans particules flottantes, versé dans un flux lumineux clair.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide tendu est nuageux et recouvert de sédiments fins qui ne se déposent pas.",
            "action": "Plongez à nouveau à travers un tamis frais, doublé de papier, sans presser, et laissez-le reposer sans gêne, de sorte que les fines restantes tombent au fond."
          },
          {
            "state": "Perfect",
            "description": "Ponzu ambré-mahogany profond, clair de cristal qui enrobe une cuillère finement et goûte vivement aigre, salé et salé tout à la fois avec une longue finale umami.",
            "action": "Bouteille et réfrigérer. Utiliser en quelques semaines, agiter doucement avant chaque utilisation."
          },
          {
            "state": "Overdone",
            "description": "Pressé trop fort, le ponzu est agité et porte un bord amer et poussiéreux des flocons écrasés.",
            "action": "Qu'il se dépose toute la nuit dans le frigo et décante soigneusement le liquide clair du sédiment, laissant le mureau derrière."
          }
        ]
      },
      "feelCue": "Le ponzu fini doit se sentir léger et aqueux sur la langue, jamais épais ou sirupeux, puis fleurir en couche d'auresse et de profondeur savoureuse. Une seule goutte sur le dos de la main devrait avoir un goût complet: brillant, salé et profondément salé, n'ayant besoin de rien de plus."
    }
  ]
};
