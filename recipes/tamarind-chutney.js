export default {
  "repoId": "master_indian_tamarind-chutney_001",
  "parentRepoId": null,
  "slug": "tamarind-chutney",
  "author": "ForkRecipe Kitchen",
  "title": "Tamarin-Date Chutney",
  "description": "Le chutney noir et collant du chaat de l'Inde — la pulpe de tamarin mijotée de dattes, de jaggery et de cumin dans un plongeon brillant et concentré qui fait chanter les choses frites.",
  "cuisine": "Indiens",
  "culture": "Inde du Nord",
  "category": "condiments",
  "tags": [
    "indienne",
    "Tamarin",
    "doux",
    "acide",
    "Chutney",
    "végétalien"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 2,
    "sour": 5,
    "bitter": 1,
    "umami": 1,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Acid",
      "name": "Bloc tamarin (pâte pressée sans graines), grossièrement cassé",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "4 c. à soupe de tamarin concentré"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau chaude",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Dates Medjool piquées, hachées approximativement",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "figues séchées"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre muscovado jaggé ou foncé, râpé",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "sucre de palme foncé",
        "sucre brun"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Graines de cumin, cuites à sec et moulues",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "chaat masala au double de la quantité"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Gingembre moulu (séché)",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "1 c. à thé de gingembre frais, râpé"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Heat",
      "name": "Poudre de chili cachemiri",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "paprika mélangé avec une pincée de Cayenne"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Sel noir (kala namak)",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "sel fin supplémentaire — perd la profondeur sulfureuse"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "tamarind_water",
      "instructions": "Briser le bloc de tamarin en morceaux rugueux et plonger dans l'eau chaude mesurée dans un bol. Appuyez sur le bloc avec les doigts et laissez tremper pendant 15 minutes, presser et pétrir la pulpe toutes les quelques minutes pour l'aider à se dissoudre. Après 15 minutes, le bloc aurait dû se décomposer presque entièrement. Verser le mélange à l'aide d'un tamis grossier sur une casserole, presser fermement le dos d'une cuillère pour extraire chaque goutte du liquide brun aigre. Jeter les solides fibreux et les graines qui restent dans le tamis. L'eau de tamarin qui en résulte doit goûter intensément, amèrement aigre, presque suceuse.",
      "visualCue": {
        "primaryTarget": "Un liquide brun acajou sombre et nuageux derrière le tamis; les solides du tamis sont pâles, secs et fibreux — toutes les bonnes choses ont été pressées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bloc de tamarin n'a que partiellement dissous; le liquide est pâle et mince; beaucoup de pulpe utilisable encore dans les solides.",
            "action": "Ajouter encore 50 g d'eau chaude, pétrir plus vigoureusement, et raider encore 5 minutes avant de presser à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Liquide noir, opaque et brun rouille qui sent intensément le tamarin aigre; les solides du tamis sont pâles et bien pressés.",
            "action": "Placer la casserole avec l'eau de tamarin à feu moyen."
          },
          {
            "state": "Overdone",
            "description": "Tamarin trempé dans de l'eau qui a pu refroidir avant de presser; l'extraction est moins complète.",
            "action": "Réchauffer le mélange brièvement avant de presser — l'eau chaude extrait plus efficacement."
          }
        ]
      },
      "feelCue": "Appuyez fermement sur l'arrière de votre cuillère contre les solides dans le tamis — s'il y a une couleur brune qui relâche encore, appuyez toujours. Les solides laissés derrière doivent être fibreux et pâles, comme le foin comprimé."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "tamarind_water",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "reduced_chutney",
      "instructions": "Ajouter les dattes hachées, le jaggery râpé, le cumin moulu, le gingembre séché, la poudre de chili cachemiri, le sel fin et le namak kala à l'eau de tamarin dans la casserole. Faire mijoter à feu moyen, en remuant pour dissoudre le jaggery. Le mélange moussera d'abord à mesure que le jaggery fondra. Réduire en mijotant doucement et cuire de 15 à 20 minutes, en remuant toutes les quelques minutes, jusqu'à ce que les dattes se soient complètement dissoutes dans le liquide et que le chutney ait diminué et épaissi. Le volume devrait diminuer d'environ un tiers. À mesure qu'elle diminue, goûtez constamment — l'équilibre devrait passer de l'aurore à l'équilibre doux - épicé.",
      "visualCue": {
        "primaryTarget": "Un chutney épais, brillant, brun acajou foncé qui tombe d'une cuillère dans un ruban lent et lourd — pas une goutte, pas une masse solide; quelque part entre le sirop d'érable et le miel en consistance.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Chutney est encore mince et aqueux; les dattes sont encore visibles sous forme de grumeaux; goûts crus et agressivement aigre.",
            "action": "Continuer à mijoter; les dates doivent se dissoudre complètement et le chutney doit réduire davantage."
          },
          {
            "state": "Perfect",
            "description": "Dark, brillant et épais avec un équilibre doux-sour-smoky; dattes complètement dissoutes; chutney enrobe une cuillère froide et tient sa forme brièvement.",
            "action": "Retirer de la chaleur et de la déformation si une texture plus lisse est souhaitée, ou utiliser comme-est."
          },
          {
            "state": "Overdone",
            "description": "Chutney a réduit trop loin; il est très sombre, presque noir, et a mis presque solide dans la poêle.",
            "action": "Incorporer l'eau chaude par la cuillère à soupe jusqu'à ce que la consistance se détache dans un sirop versable."
          }
        ]
      },
      "feelCue": "Refroidissez une cuillère en métal dans de l'eau glacée, puis plongez-la dans le chutney et laissez-la couler; un chutney bien réduit forme une goutte lente et épaisse qui prend 3-4 secondes pour tomber. Si elle coule comme de l'eau, continuez à cuisiner; si elle se met comme des bonbons, ajoutez de l'eau."
    },
    {
      "nodeId": "step_3",
      "action": "Filtrer",
      "inputs": [
        "reduced_chutney"
      ],
      "outputState": "strained_chutney",
      "instructions": "Pour un chutney lisse et brillant (le style le plus souvent servi avec chaat), passez le mélange réduit chaud à travers un tamis moyen, appuyez fermement pour extraire chaque morceau de sauce brillante et laisser les peaux de dattes ou les morceaux fibreux derrière. Pour une texture plus rustique, sautez l'étape de déformation. Chaque version est authentique. Goûtez au chutney tendu: à ce stade, il doit goûter intensément aromatisé — doux, aigre, épicé, et légèrement sulfureux du namak de Kala — sachant qu'il sera utilisé comme condiment par la cuillère, pas mangé en grandes quantités.",
      "visualCue": {
        "primaryTarget": "Après la déformation, le chutney est complètement lisse, brillant à jet et acajou profond — il prend la lumière comme du caramel foncé. Avant la déformation, il est épais et légèrement texturé avec de la pâte à date.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Chutney est passé trop vite, encore grumeux et inégal dans la texture.",
            "action": "Appuyez plus fermement et plus longtemps à travers le tamis."
          },
          {
            "state": "Perfect",
            "description": "Silky-smooth, brillant, brun foncé uniforme; verse lentement comme un sirop mince; sent le tamarin, les épices chaudes, et un soupçon de soufre du kala namak.",
            "action": "Transférer dans un pot et refroidir."
          },
          {
            "state": "Overdone",
            "description": "Sur-entraînement, perdre le corps; trop de pression a poussé à travers des fragments de graines amères.",
            "action": "Jetez la dernière cuillère à soupe que vous avez pressée, qui porte les solides amers."
          }
        ]
      },
      "feelCue": "Frottez une goutte de chutney chaud entre vos doigts — il devrait se sentir légèrement collant et visqueux, comme un caramel léger. Si elle se sent aqueuse, elle a besoin d'une réduction plus importante. Si elle est collante et raide, mince avec un peu d'eau."
    },
    {
      "nodeId": "step_4",
      "action": "Réfrigérer",
      "inputs": [
        "strained_chutney"
      ],
      "outputState": "finished_tamarind_chutney",
      "instructions": "Transférer le chutney dans un pot en verre propre et laisser refroidir à la température ambiante à découvert. Comme il refroidit il s'épaissira davantage — une consistance qui semble légèrement lâche quand chaud est correct; il atteindra la consistance de bruissement que vous voulez une fois froid. Réfrigérer jusqu'à 3 semaines. Les saveurs s'approfondissent et se mélangent significativement après 24 heures au réfrigérateur. Servir sur des samosas, des pakoras, des papdi chaat ou des dahi puri, ou l'utiliser comme glaçure de viande en le réchauffant brièvement et en éclaircissant avec un peu d'eau.",
      "visualCue": {
        "primaryTarget": "Un pot froid d'acajou profond, brillant chutney qui verse lentement lorsqu'il est incliné — assez épais pour arroser les rubans sur le chaat, assez mince pour ne pas avoir besoin d'une cuillère pour le coincer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Chutney n'a pas été réfrigéré; encore plus chaud et plus mince qu'il ne devrait l'être.",
            "action": "Réfrigérer au moins 1 heure avant de servir."
          },
          {
            "state": "Perfect",
            "description": "Froid, épais, brillant, intensément aromatisé — équilibre sucré-sour-épicé avec une faible profondeur funky de kala namak. Tout ce qu'il touche a un goût plus vivant.",
            "action": "Arrosez les composants de la chaat, utilisez comme condiment, ou mince et utilisez comme glaçure."
          },
          {
            "state": "Overdone",
            "description": "Chutney est au réfrigérateur depuis des semaines et est devenu très sombre et presque solide; la note aigre s'estompe.",
            "action": "Chauffer doucement avec une cuillère à soupe d'eau et remuer pour reconstituer."
          }
        ]
      },
      "feelCue": "Le chutney de tamarin froid doit verser du pot dans un ruban lent et visqueux, non pas dans un ruisseau stable comme le sirop, mais dans des gouttes abondantes intermittentes. Si elle doit être coaxed avec une cuillère, elle est trop épaisse et a besoin d'une petite quantité d'eau chaude brassée."
    }
  ]
};
