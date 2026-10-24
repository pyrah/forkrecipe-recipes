export default {
  "repoId": "master_vietnamese_banh_mi_pork_001",
  "parentRepoId": null,
  "slug": "banh-mi-pork",
  "author": "ForkRecipe Kitchen",
  "title": "Bánh Mì Porc caramélisé",
  "description": "Le ventre fin de porc laqué dans du caramel au poisson-sauce jusqu'à ce que les bords noircissent et croustillants, perfumant la cuisine avec du sucre brûlé et du soja — le genre de remplissage qui rend une baguette humble goût comme une destination.",
  "cuisine": "Vietnamiens",
  "culture": "Saigon",
  "category": "proteins",
  "tags": [
    "vietnamese",
    "porc",
    "sandwich",
    "Caramel",
    "BANH-MI"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 1842,
  "forks": 203,
  "contributors": 18,
  "license": "CC-BY-SA",
  "createdAt": "2024-03-15",
  "updatedAt": "2025-11-02",
  "flavorRadar": {
    "sweet": 3,
    "salty": 4,
    "sour": 2,
    "bitter": 0,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Porc ventre ou épaule de porc, tranché finement (5mm)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "cuisse de poulet",
        "tofu"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre granulé (pour caramel)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre de palme",
        "Sucre de coco"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "sauce de poisson (Phu Quoc ou Tiparos)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce soja + pincer MSG"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Échalotes, tranchées finement",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Lémon, meurtris et hachés (pâte interne seulement)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poivre noir, grossièrement craqué",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre blanc"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile neutre (légume ou tournesol)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Saindoux"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "marinated_pork",
      "instructions": "Mélanger le porc tranché avec la sauce au poisson, les échalotes, la citronnelle et le poivre noir. Jeter pour enrober toutes les surfaces. Faire mariner à température ambiante pendant 30 minutes ou réfrigérer jusqu'à 4 heures. La sauce de poisson commence à extraire l'humidité de la viande, en concentrant la saumure.",
      "visualCue": {
        "primaryTarget": "Les tranches de porc sont uniformément enrobées d'une marinade ambrée brillante; l'échalote et la citronnelle s'accrochent à chaque morceau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Piscines de marinade au fond du bol; les surfaces de porc semblent encore sèches et crues.",
            "action": "Jetez encore et laissez reposer encore 10 minutes."
          },
          {
            "state": "Perfect",
            "description": "Chaque tranche est uniformément enduite et légèrement raffermie à partir de la prise de sel. Le liquide s'est épaissi autour des bords.",
            "action": "Passez à l'étape caramel."
          },
          {
            "state": "Overdone",
            "description": "Le porc est assis dans la sauce de poisson depuis plus de 6 heures; la protéine commence à dénaturation et sera musquée lorsqu'elle sera cuite.",
            "action": "Cuire immédiatement — la texture sera légèrement plus douce mais la saveur est intacte."
          }
        ]
      },
      "feelCue": "Le porc devrait se sentir légèrement collant quand vous ramassez une tranche — la sauce de poisson crée un léger remède pour saumure à la surface qui aidera le caramel à adhérer."
    },
    {
      "nodeId": "step_2",
      "action": "Faire cuire le caramel",
      "inputs": [
        "ing_02",
        "ing_07"
      ],
      "outputState": "amber_caramel",
      "instructions": "Dans une grande poêle lourde ou wok à feu moyen, ajouter l'huile puis le sucre dans une couche uniforme. Ne remuez pas — laissez-le fondre et colorer. Lorsque les bords deviennent ambres, tourner doucement la poêle. Tirez de la chaleur à un ambre profond qui sent le beurre de coco, pas le café brûlé. Travaillez vite; caramel passe par ses étapes en quelques secondes.",
      "visualCue": {
        "primaryTarget": "Le sucre liquide est un ambre-mahogany profond sans sucre blanc cru restant; le parfum est riche en beurrescotch avec une légère fumée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sucre est d'or pâle et sent encore doux; il produira un revêtement insipide et trop doux sur le porc.",
            "action": "Continuer la cuisson en faisant tourner doucement la poêle — 30 à 60 secondes de plus."
          },
          {
            "state": "Perfect",
            "description": "Ambre profonde, juste après la couleur du whisky vieilli. L'odeur passe de bonbons à beurrescotch avec un léger bord amer. Une fumée mince peut apparaître.",
            "action": "Ajouter immédiatement le porc."
          },
          {
            "state": "Overdone",
            "description": "Presque noir avec de la fumée acride et dure. L'odeur est brûlée et rendra le plat amer.",
            "action": "Jetez et recommencez. Le caramel brûlé ne peut pas être sauvé."
          }
        ]
      },
      "feelCue": "Le moment où le caramel sent comme il pourrait devenir amer, il est parfait — cette tension entre le sucre et la fumée est tout le point du caramel vietnamien."
    },
    {
      "nodeId": "step_3",
      "action": "Sear",
      "inputs": [
        "marinated_pork",
        "amber_caramel"
      ],
      "outputState": "caramelized_pork",
      "instructions": "Ajouter le porc mariné au caramel en une seule couche, en travaillant rapidement. Le mélange crachera et bullera violemment — reculez. Ne pas remuer pendant les 90 premières secondes afin qu'une croûte puisse se former. Puis jetez et faites cuire à feu moyen-élevé pendant 4-5 minutes au total, jusqu'à ce que les bords de l'omble et de la sauce s'accrochent comme de la laque.",
      "visualCue": {
        "primaryTarget": "Les bords de porc sont carbonisés aux extrémités, les corps sont en acajou profond, la sauce a réduit à un épais revêtement de glaçure chaque surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le porc est encore bronzé, la sauce est molle et aqueuse — les sucres n'ont pas caramélisé sur la viande.",
            "action": "Augmenter la chaleur à haute et cuire à découvert 2 minutes de plus, en remuant moins fréquemment."
          },
          {
            "state": "Perfect",
            "description": "Bords noir, chair acajou foncé. La sauce est presque sèche, collée à chaque tranche dans une laque épaisse et brillante. Fumeurs de la poêle.",
            "action": "Retirer immédiatement du feu."
          },
          {
            "state": "Overdone",
            "description": "Tout est noir de charbon et la poêle a une épaisse couche brûlée. Le porc est sec et amer partout.",
            "action": "Sauver les pièces intérieures; gratter les morceaux fortement brûlés. Ajouter un jet d'eau et racler la poêle avant de servir."
          }
        ]
      },
      "feelCue": "Le bruit devrait passer d'un bouillonnement violent à un craquage serré et rapide — ce craquage signifie que l'eau a cuit et que les sucres sont frits directement sur le porc."
    },
    {
      "nodeId": "step_4",
      "action": "Déglacer et se reposer",
      "inputs": [
        "caramelized_pork"
      ],
      "outputState": "finished_banh_mi_pork",
      "instructions": "Retirer du feu. Ajouter 2 cuillerées à soupe d'eau pour déglacer tout caramel collé de la casserole et jeter le porc à enrober dans la sauce molle. Laisser reposer dans la poêle pendant 2 minutes — la chaleur résiduelle mélange la glaçure et le repos réduit le risque de brûler votre bouche sur les bords caramélisés.",
      "visualCue": {
        "primaryTarget": "Chaque tranche de porc est enduite d'une laque brillante et serrée; la poêle a une fine couche de jus sirupeux, pas d'omble sec.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore très aqueuse après le déglacement — le caramel n'a pas respecté correctement la viande.",
            "action": "Retourner au feu pendant 1 minute, en remuant constamment jusqu'à ce que la sauce se resserre à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Le porc est laqué, brillant et sent le caramel et la sauce de poisson. La sauce est assez épaisse pour enrober une cuillère.",
            "action": "Pile sur la baguette tranchée avec daikon mariné, concombre, coriandre et chilis."
          },
          {
            "state": "Overdone",
            "description": "Déglacer ajouté trop d'eau; le porc nage dans la sauce diluée et la laque s'est desserrée.",
            "action": "Retourner à feu vif pendant 2-3 minutes à découvert pour re-réduire la sauce."
          }
        ]
      },
      "feelCue": "Ramassez une pièce — elle doit se sentir lourde et dense avec de la glaçure, les bords légèrement rigides de la croûte de caramel tandis que le centre reste productif."
    }
  ]
};
