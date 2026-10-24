export default {
  "repoId": "master_ancient-roman_moretum_001",
  "parentRepoId": null,
  "slug": "moretum",
  "author": "ForkRecipe Kitchen",
  "title": "Moretum",
  "description": "Le petit déjeuner du paysan de l'Annexe Vergiliana — l'ail vert piquant et les herbes pointues pilonnés dans un mortier avec du fromage salé jusqu'à ce qu'ils se lient dans une seule boule parfumée, se relâchent avec de l'huile et une éclaboussure de vinaigre dans un dur, mordant pour le pain de campagne grossier.",
  "cuisine": "Ancien romain",
  "culture": "Latin",
  "category": "condiments",
  "tags": [
    "romaine",
    "anciens",
    "mortum",
    "Ail",
    "fromage",
    "pesto",
    "mortier",
    "végétarien"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 2,
    "bitter": 2,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Allium",
      "name": "Girofles d'ail (les quatre têtes du poème — frais, piquants)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "jeune ail vert pour une bouchée plus douce, plus herbacée"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sels de mer grossiers",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Feuille de céleri frais (apium)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "Feuilles de lièvre",
        "Persil à feuilles plates"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Feuille de coriandre fraîche",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "plus de persil"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Heat",
      "name": "Rue fraîche, feuilles seulement (utiliser parcimonieusement)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "une pincée de roquette pour un bord poivré si rue n'est pas disponible"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Fromage du mouton dur, râpé (pécorino)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "caciocavallo âgé",
        "Caciotta bien vieilli"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Vinaigre",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin rouge",
        "versus"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 18,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Piler",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "garlic_paste",
      "instructions": "Peler l'ail et le déposer dans un mortier lourd avec le sel grossier. Le sel est assaisonné et abrasif : ses cristaux déchirent les cellules d'ail et empêchent les girofles de déraper sous le pestle. Pound avec une mouture circulaire ferme — pas un timbre — jusqu'à ce que l'ail se décompose en pâte d'ivoire humide, lisse et sans morceaux visibles. Simylus du poème pleure aux fumées; attendez-vous à une piqûre pointue dans le nez.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, scintillante, pâle qui s'accumule au fond du mortier, le sel y étant complètement dissous et aucun morceau de girofle reconnaissable.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est massé mais encore grumelé, avec des morceaux pâles qui s'éloignent du pestle et dérapent sur la pierre.",
            "action": "Maintenez le broyage dans les cercles lents et appuyez sur le poids du pestle. S'il continue à glisser, ajouter quelques grains de sel pour l'adhérence."
          },
          {
            "state": "Perfect",
            "description": "Une pâte uniforme et lisse qui enveloppe les murs de mortier et sent agressivement l'ail cru. Il s'affaiblit sans résistance.",
            "action": "Arrêtez ici et ajoutez les herbes — le surmenage ne fait qu'affiner la brûlure."
          },
          {
            "state": "Overdone",
            "description": "La pâte est devenue mince, presque aqueuse, et sent acride et chaud plutôt que piquante.",
            "action": "Avancez tout droit; le fromage et les herbes absorberont l'excès d'humidité et dompteront la dureté."
          }
        ]
      },
      "feelCue": "Le peste doit glisser une fois que les gousses cèdent, la pâte est collante et refroidie contre la pierre. Vos yeux vont arroser — c'est le signe que les huiles d'ail ont été complètement libérées."
    },
    {
      "nodeId": "step_2",
      "action": "Piler",
      "inputs": [
        "garlic_paste",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "green_paste",
      "instructions": "Ajouter la feuille de céleri et la coriandre, puis quelques feuilles de rue — il est intensément amer et le poème avertit de retenir son « pouvoir bitissant ». Pound eux dans l'ail, broyant les feuilles contre le grain jusqu'à ce qu'ils contusent, s'assombrissent, et relâchent leurs huiles, striant la pâte un vert tacheté profond. Travaillez-les pleinement pour qu'aucune feuille entière ne survive. Une note de sécurité: la rue est puissante — utiliser seulement quelques feuilles, et l'éviter entièrement si enceinte ou essayer de concevoir, car il peut agir comme un stimulant utérin; le contact de la peau avec la plante fraîche au soleil peut également causer la photosensibilité.",
      "visualCue": {
        "primaryTarget": "Une pâte dense, vert foncé, pétrie d'ail plus pâle, parfumée et légèrement amère, les feuilles étant entièrement broyées dans la masse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les feuilles entières et demi sont encore visibles, assises sur l'ail plutôt que mélangées, et le vert est patchy et lumineux.",
            "action": "Continuez à frapper et à gratter les côtés. Les feuilles doivent être meurtries, pas simplement hachées, pour renoncer à leur arôme."
          },
          {
            "state": "Perfect",
            "description": "Une pâte cohésive de couleur vert profond avec une plante salée, un parfum légèrement amer et aucune feuille intacte.",
            "action": "Continuer à plier dans le fromage."
          },
          {
            "state": "Overdone",
            "description": "La pâte sent l'amertume et le goût médicinal — trop de rue a été travaillé.",
            "action": "Ajouter une cuillère supplémentaire de fromage râpé dans l'étape suivante pour réduire l'amertume; à l'avenir utiliser encore moins rue."
          }
        ]
      },
      "feelCue": "L'arôme passe de l'ail pur à une amertume verte et herbacée au moment où les feuilles se brisent. La pâte devrait se sentir légèrement plus lâche et plus humide à partir des jus d'herbes."
    },
    {
      "nodeId": "step_3",
      "action": "Incorporer délicatement",
      "inputs": [
        "green_paste",
        "ing_06"
      ],
      "outputState": "cohesive_ball",
      "instructions": "Ajouter le fromage vieilli râpé une grande poignée à la fois, le frapper et le plier dans la pâte verte. Comme le décrit le poème de Virgil, la masse résistera et s'écroulera d'abord, puis s'emparera et se ressaisira soudainement — la graisse et les protéines du fromage liant les herbes et l'ail dans un seul corps. Continuez à travailler jusqu'à ce qu'il forme une seule balle rugueuse qui se soulève proprement du mortier en une seule pièce.",
      "visualCue": {
        "primaryTarget": "Une seule boule de couleur verte et crème marbrée, qui s'accroche dans le mortier, ne se détache plus ou ne s'émiette plus, tenant sa forme lorsqu'elle est bouchée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est sec et émietté, se cassant en touffes qui ne se rassemblent pas, avec des poches sèches de fromage non hydraté.",
            "action": "Continuez à frapper et presser; la friction réchauffe la graisse du fromage et l'aide à se lier. Quelques gouttes d'huile vont maintenant l'aider à se réunir."
          },
          {
            "state": "Perfect",
            "description": "Une boule lisse et marbrée qui tient ensemble et tire proprement du pestle, sentant du fromage aigu, de l'ail et des herbes à la fois.",
            "action": "Éliminez-le avec du vinaigre et de l'huile à la consistance de propagation que vous voulez."
          },
          {
            "state": "Overdone",
            "description": "La boule est devenue grasse et lissée, en pleurant l'huile du fromage où elle était trop travaillée et trop chaude.",
            "action": "Arrêtez de frapper immédiatement et ajoutez le vinaigre pour le serrer et l'éclaircir; servez à température ambiante fraîche."
          }
        ]
      },
      "feelCue": "Surveillez le moment de la fixation: les décombres lâches s'attrapent soudainement et se roulent dans une boule sous le pestle. Il devrait se sentir ferme, collant et unifié, comme une pâte raide."
    },
    {
      "nodeId": "step_4",
      "action": "Monter au beurre",
      "inputs": [
        "cohesive_ball",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_moretum",
      "instructions": "Saupoudrer le vinaigre de vin et verser dans l'huile d'olive, puis moudre et remuer jusqu'à ce que la boule raide se détache dans une pâte épaisse et extensible. Goût et équilibre: il doit être fort et affirmé — fortement ailky, salé du fromage, aigre du vinaigre, avec un sous-ton vert amer. Déchirez-le et roulez dans un monticule rugueux. Servir à la température de la pièce abondamment sur du pain de campagne grossier et chaud.",
      "visualCue": {
        "primaryTarget": "Une propagation épaisse, brillante, vert tacheté qui retient les pics doux et les rubans lentement sur une cuillère, avec de l'huile juste visible aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours raide et comme une boule, trop dense pour s'étendre et déguster à plat sans l'acide brillant.",
            "action": "Ajouter un peu plus de vinaigre et d'huile et le travailler jusqu'à ce qu'il se propage facilement et la saveur aiguise."
          },
          {
            "state": "Perfect",
            "description": "Une pâte cohésive et tartinable avec un éclat satiné qui attrape le pain sans le déchirer, en dégustant équilibré: piquant, salé, aigre et vert.",
            "action": "Monter et servir à la fois avec du pain chaud; il est meilleur frais, tandis que l'ail est à son plus brillant."
          },
          {
            "state": "Overdone",
            "description": "La tartinade est devenue molle et grasse, avec un bain d'huile libre et une sensation de bouche plate et grasse.",
            "action": "Pound dans un peu plus de fromage râpé pour réabsorber l'huile et reconstruire le corps, puis rééquilibrer avec une touche de sel."
          }
        ]
      },
      "feelCue": "La tartinade doit tirer sur un couteau avec un léger tack, puis relâcher doucement sur le pain. Sur la langue il frappe chaud et tranchant de l'ail d'abord, puis se dépose dans le fromage salé et un tang de vinaigre propre."
    }
  ]
};
