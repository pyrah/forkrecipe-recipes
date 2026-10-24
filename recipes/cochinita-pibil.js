export default {
  "repoId": "master_mexican_cochinita_001",
  "parentRepoId": null,
  "slug": "cochinita-pibil",
  "author": "ForkRecipe Kitchen",
  "title": "Cochinita Pibil",
  "description": "Épaule de porc rouge achiote, acidulée à l'orange amère, enveloppée dans des feuilles de bananes et rôtie lentement jusqu'à ce qu'elle s'effondre en morceaux burnés et tendres.",
  "cuisine": "Mexicain",
  "culture": "Yucatécan",
  "category": "proteins",
  "tags": [
    "porc",
    "Mexique",
    "yucatan",
    "Raie lente",
    "Feuille de bananes",
    "Achiote",
    "braisés"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "6 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 3,
    "bitter": 1,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Épaule de porc désossée (bout), 1,5 à 2 kg",
      "ratioValue": 1500,
      "defaultUnit": "g",
      "substitutions": [
        "épaule de porc désossée",
        "cuisse de porc"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Achiote (annatto) pâte",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "achiote en poudre (40 g) + 1 c. à thé origan"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Jus d'orange amère (ou parties égales d'orange et de chaux)",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": [
        "1 partie jus d'orange + 1 partie pamplemousse blanc + 1 partie chaux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 8,
      "defaultUnit": "pcs",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Habanero chili, graines enlevées à feu modéré",
      "ratioValue": 1,
      "defaultUnit": "pcs",
      "substitutions": [
        "de scotch",
        "jalapeño (meilleur)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Origan mexicain séché",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "Marjoram séché"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Cannelle au sol (Ceylan préféré)",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Grains de poivre noirs entiers, grossièrement moulus",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Feuilles de banane, brièvement assouplies",
      "ratioValue": 3,
      "defaultUnit": "large sheets",
      "substitutions": [
        "feuille d'aluminium (fonctionnelle mais perd la fumée de terre)"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_11"
      ],
      "outputState": "achiote_recado",
      "instructions": "Mélanger la pâte d'achiote, le jus d'orange amer, l'ail, le habanero, le cumin, l'origan, la cannelle, le poivre et le sel dans un mélangeur. Blitz à un recado lisse, rouge brique (pâte de marinade). La couleur doit être un orange rouge profond et vif de l'annatto — presque la couleur de la poussière de brique. Bouche : il doit d'abord frapper la aigre des agrumes, puis terreux et légèrement amer de l'achiote, avec la chaleur de construction. Ajouter plus d'orange amère si elle a un goût plat.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, intensement rouge brique avec un arôme de terre d'agrumes. Pas de morceaux visibles. Enrober les parois du mélangeur dans une tache solide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pâte achiote non entièrement mélangée — morceaux visibles de pâte rouge dans une marinade liquide par ailleurs.",
            "action": "Encore 60 secondes. La pâte nécessite un traitement soutenu pour se décomposer complètement."
          },
          {
            "state": "Perfect",
            "description": "Uniquement rouge brique, lisse et assez épais pour enrober une cuillère. Aroma est agrumes-avant, terreux, chaud épicé.",
            "action": "Utiliser immédiatement comme revêtement — le recado commence à perdre son acidité lorsqu'il est assis."
          },
          {
            "state": "Overdone",
            "description": "Surtransformé et chaud à partir du mélangeur — l'arôme a terned et les notes supérieures d'agrumes ont volatilisé.",
            "action": "Utiliser comme-est. La plus faible acidité signifie que vous pouvez vouloir une pression supplémentaire de chaux après cuisson."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité entre vos doigts — les taches de couleur presque immédiatement et la pâte se sent dense, presque grasse de l'annatto. L'arôme doit être nettement terreux-citrus, pas seulement des épices génériques."
    },
    {
      "nodeId": "step_2",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "achiote_recado",
        "ing_10"
      ],
      "outputState": "wrapped_pork",
      "instructions": "Découpez profondément l'épaule de porc avec un couteau de 3 à 4 cm sur toute la surface, y compris à travers n'importe quel bouchon gras, pour permettre au recado de pénétrer dans le muscle. Enrober le porc complètement avec tout le recado d'achiote, le travailler vigoureusement dans chaque marque de score. Pendant ce temps, passez rapidement les feuilles de banane au-dessus d'une flamme à gaz ou d'un brûleur électrique pendant 3 à 5 secondes de chaque côté — elles se tourneront de mat à brillant et deviendront pliables. Étaler un plat de torréfaction profonde ou un four hollandais avec des feuilles de banane qui se chevauchent. Placer le porc au centre, verser sur toute marinade restante, et envelopper les feuilles vers le haut et sur le porc pour créer une parcelle scellée. Faire mariner au réfrigérateur toute la nuit (minimum), ou 4 heures minimum.",
      "visualCue": {
        "primaryTarget": "Une parcelle bien enveloppée de feuilles de bananes vert foncé brillant. Pas de viande visible. Les bords des feuilles sont pliés sous et l'emballage est bien assis dans le récipient de torréfaction.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les feuilles sont encore mates et cassantes, craquent en les repliant. La parcelle fuit le recado.",
            "action": "Passer les feuilles fissurées sur la flamme à nouveau brièvement. Couchez-vous plus généreusement pour sceller."
          },
          {
            "state": "Perfect",
            "description": "Les feuilles sont brillantes, souples et bien scellées autour du porc sans discontinuité. Le paquet ressemble à un cadeau soigné et vert foncé.",
            "action": "Couvrir le plat de cuisson d'un couvercle serré ou d'une double couche de papier. Réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "Les feuilles passent trop longtemps au-dessus de la flamme et ont partiellement brûlé, laissant des trous.",
            "action": "Couper avec des feuilles supplémentaires. La cuisson à la vapeur fonctionnera toujours, mais ajoutera 30 ml d'eau pour compenser la perte de vapeur."
          }
        ]
      },
      "feelCue": "Appuyez sur le colis emballé — il devrait se sentir dense et solide sans poches d'air à l'intérieur. Les feuilles doivent se sentir chaudes, lisses et légèrement cireuses du traitement de la flamme."
    },
    {
      "nodeId": "step_3",
      "action": "Brise",
      "inputs": [
        "wrapped_pork"
      ],
      "outputState": "braised_cochinita",
      "instructions": "Préchauffer le four à 150°C (300°F). Couvrez fermement le récipient de torréfaction avec un couvercle ou une feuille lourde — aucune vapeur ne doit s'échapper. Faire cuire pendant 4 à 5 heures jusqu'à ce que le porc soit complètement tendre et se détache sans résistance. À la marque de 3 heures, ouvrez soigneusement le colis et vérifiez : une fourche insérée à la partie la plus épaisse doit glisser avec une résistance zéro. S'il y a un retour en arrière, remballez et continuez. La température interne devrait atteindre 93°C (200°F) pour une ventilation complète du collagène.",
      "visualCue": {
        "primaryTarget": "Profondément brûlé, le porc à l'achiote qui s'est partiellement effondré sous son propre poids. Les feuilles de bananes ont obscurci à presque noir aux points de repli. Abondant liquide d'élevage rouge-orange vif dans la parcelle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La fourche rencontre une résistance significative. Fibres musculaires encore distinctes et intactes. Température intérieure inférieure à 88°C.",
            "action": "Récupérer soigneusement et retourner au four pendant 45 à 60 minutes."
          },
          {
            "state": "Perfect",
            "description": "La viande s'effondre au toucher d'une fourchette. L'os se libère sans effort. Le liquide de braisage est un rouge orange concentré profond. L'arôme d'Achiote remplit la pièce.",
            "action": "Retirer du four et laisser reposer, encore enveloppé, pendant 20 minutes."
          },
          {
            "state": "Overdone",
            "description": "Le porc s'est asséché; le liquide de cuisson s'est évaporé et la viande s'écroule plutôt que de se déchiqueter proprement.",
            "action": "Ajouter 100 ml d'eau ou de bouillon de poulet, recouvrir et retourner au four à 120°C pendant 20 minutes pour réhydrater."
          }
        ]
      },
      "feelCue": "Insérez une fourchette et une torsion — elle devrait tourner sans résistance, et la viande autour devrait s'effondrer dans des fils épais et soyeux sans mâcher. Le collagène s'est entièrement transformé en gélatine."
    },
    {
      "nodeId": "step_4",
      "action": "Tranche",
      "inputs": [
        "braised_cochinita"
      ],
      "outputState": "finished_cochinita",
      "instructions": "Ouvrir la feuille de banane à table si vous servez en entier, ou transférer le porc sur une large planche et le déchiqueter à l'aide de deux fourchettes — tirer avec le grain en longs coups pour les gros morceaux soyeux plutôt que les morceaux musqués. Verser tout le liquide de cuisson sur la viande déchiquetée et jeter pour enrober. Le liquide gras, riche en collagène, absorbera les morceaux et les gardera humides. Servir avec des tortillas de maïs chaudes, de l'oignon rouge mariné dans la saumure habanero et de la coriandre fraîche.",
      "visualCue": {
        "primaryTarget": "De longs morceaux de porc rouge-brûlé, scintillent avec du liquide de braisage à l'achiote. Pas de taches grises ou sèches. La pile devrait être presque lumineuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande se déchire en morceaux plutôt qu'en fils. Résistance en tirant.",
            "action": "Le collagène n'a pas été complètement transformé — retourner au four pendant 30 minutes supplémentaires."
          },
          {
            "state": "Perfect",
            "description": "Longs morceaux sans effort, chaque brin encore juteux et coloré rouge-orange brillant. L'absorption de liquide dans la viande donne un aspect brillant et laqué.",
            "action": "Servir immédiatement ou garder au chaud couvert — la graisse et la gélatine le garderont humide pendant des heures."
          },
          {
            "state": "Overdone",
            "description": "La viande tombe en bouillie, perdant complètement la définition du brin. Surchauffé.",
            "action": "Toujours délicieux — servir de garniture saucissante pour tacos plutôt que de lambeaux plaqués."
          }
        ]
      },
      "feelCue": "Prenez une pincée de la viande déchiquetée entre vos doigts — il devrait se sentir soyeux et presque glissant de la graisse rendue et de la gélatine, avec des fibres distinctes qui se séparent proprement. Pas musclé, pas sec."
    }
  ]
};
