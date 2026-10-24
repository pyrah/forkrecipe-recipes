export default {
  "repoId": "master_italian_peperonata_001",
  "parentRepoId": null,
  "slug": "peperonata",
  "author": "ForkRecipe Kitchen",
  "title": "Peperonata",
  "description": "Les poivrons doux, l'oignon et la tomate saignés lentement dans une généreuse piscine d'huile d'olive jusqu'à ce que chaque bande s'est complètement effondrée dans une compote soyeuse et jammy qui goûte plus concentré et sucré que tout ce qu'un poivre cru jamais promis.",
  "cuisine": "Italien",
  "culture": "Sud de l ' Italie",
  "category": "vegetables",
  "tags": [
    "peperonata",
    "Italien",
    "poivrons",
    "végétalien",
    "braisés",
    "antipasto",
    "marque à l'avance"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 2,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Poivrons doux mélangés (rouge, jaune, orange — coupés en deux, ensemencés, coupés en bandes de 1 cm)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "de longs poivrons doux (friggitelli)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Oignon jaune (chaudé, tranché finement)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Tomates à la prune (approximativement hachées)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates entières en conserve, égouttées"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Girofles d'ail (finement tranchés)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Vin rouge (finition facultative)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Feuilles de basilic fraîches",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire revenir",
      "inputs": [
        "ing_05",
        "ing_02",
        "ing_04"
      ],
      "outputState": "softened_onion",
      "instructions": "Chauffer l'huile d'olive dans un grand pot ou une poêle profonde à feu moyen-doux. Ajouter l'oignon tranché et l'ail. Assaisonner avec une pincée de sel. Cuire très doucement, en remuant de temps en temps, pendant 15 minutes jusqu'à ce que l'oignon soit complètement doux, doux et doré — non doré, simplement cuit profondément. Peperonata est une recette lente; ne précipitez pas cette étape.",
      "visualCue": {
        "primaryTarget": "Les brins d'oignon sont complètement limpides, translucides et jaune doré. L'ail est doux et parfumé. L'huile dans la poêle est parfumée et légèrement dorée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore en partie croquant et blanc. La netteté de l'allium brut est présente dans l'odeur.",
            "action": "Abaissez la chaleur et continuez la cuisson. La douceur de l'oignon doit se développer pleinement avant que les poivrons entrent."
          },
          {
            "state": "Perfect",
            "description": "Complètement doux, doré et sucré. L'ail est devenu or pâle et parfumé. Aucune netteté ne subsiste.",
            "action": "Ajouter les poivrons."
          },
          {
            "state": "Overdone",
            "description": "L'oignon a bruni de façon significative et sent le caramélisé. L'ail s'assombrit.",
            "action": "Ajouter immédiatement les poivrons et une éclaboussure d'eau — l'oignon doré apportera une saveur légèrement plus robuste et sucrée qui est acceptable."
          }
        ]
      },
      "feelCue": "Goûtez un brin d'oignon à ce stade - il devrait goûter doux, presque jammy, avec aucun de l'abreuvoir apaisant aigu d'un oignon cru. Cette transformation est le feu vert."
    },
    {
      "nodeId": "step_2",
      "action": "Braiser",
      "inputs": [
        "softened_onion",
        "ing_01",
        "ing_06"
      ],
      "outputState": "braising_peppers",
      "instructions": "Ajouter toutes les bandes de poivre dans la casserole. Assaisonner de sel. Incorporer l'huile et l'oignon. Couvrir d'un couvercle et cuire à feu moyen-doux pendant 20 minutes, lever le couvercle et remuer toutes les 5 minutes. Les poivrons libéreront beaucoup de liquide — c'est exact. La vapeur et le jus de poivre créent le liquide de cuisson.",
      "visualCue": {
        "primaryTarget": "Les poivrons ont considérablement flétri et réduit leur volume d'environ la moitié. Une généreuse piscine de liquide aux couleurs vives et sucré s'est accumulée dans le pot.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les poivrons sont encore fermes, tenant leur forme de bande, et le pot est relativement sec.",
            "action": "Continuez à faire l'éloge. Les poivrons libèrent lentement leur liquide — donnez - leur du temps."
          },
          {
            "state": "Perfect",
            "description": "Les poivrons sont nettement mou, les couleurs sont encore vives (rouge, orange, jaune), et un bassin important de liquide de poivre sucré remplit le pot. Ils sont tendres mais ont encore une certaine structure.",
            "action": "Ajouter les tomates et le braise à découvert."
          },
          {
            "state": "Overdone",
            "description": "Les poivrons sont complètement effondrés et le liquide a commencé à diminuer. Certains poivrons collent.",
            "action": "Ajouter un jet d'eau et réduire la chaleur avant d'ajouter des tomates."
          }
        ]
      },
      "feelCue": "Soulevez le couvercle et inhalez - la vapeur concentrée doit sentir fortement le poivre doux, presque comme un jus frais pressé. C'est le sucre naturel des poivrons qui se concentrent pendant leur cuisson."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "braising_peppers",
        "ing_03"
      ],
      "outputState": "finished_peperonata",
      "instructions": "Ajouter les tomates hachées. Mélanger. Retirer le couvercle et faire cuire à feu moyen-doux pendant 20 à 25 minutes, en remuant toutes les 5 minutes, jusqu'à ce que les tomates se soient complètement effondrées, le liquide a réduit à une sauce épaisse, jammy, brillante qui n'enrobe que les poivrons, et l'ensemble de la casserole est un compote unifié et brillant. Les poivrons doivent être complètement tendres et soyeux.",
      "visualCue": {
        "primaryTarget": "Le pot contient une masse scintillante de lanières de poivre effondrées et de tomates, à peine distinguables les unes des autres, dans une sauce épaisse rouge-ambre. L'huile d'olive mijote à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tomates sont toujours en pièces distinctes. Le liquide est aqueux et n'a pas diminué. Les poivrons ont encore une bouchée.",
            "action": "Continuez à mijoter à découvert. Mélanger plus fréquemment pour éviter de coller car il réduit."
          },
          {
            "state": "Perfect",
            "description": "La compote est épaisse et brillante, avec la consistance de la confiture douce. Lorsque vous tirez une cuillère, le sentier se ferme lentement. Les poivrons sont complètement soyeux. La couleur est une belle ambre-rouge-orange profonde.",
            "action": "Terminer avec du vinaigre et du basilic."
          },
          {
            "state": "Overdone",
            "description": "Peperonata a réduit trop loin et s'en tient au pot. La douceur s'est transformée en un caramel concentré, légèrement brûlé.",
            "action": "Ajouter une cuillère à soupe d'eau et bien remuer. La saveur peut avoir une certaine amertume de la caramélisation — une touche de vinaigre l'équilibrera."
          }
        ]
      },
      "feelCue": "Spoon un peu de peperonata sur le dos de votre main — il doit couler lentement et enrober la peau dans un film brillant et épais. S'il s'écoule comme de l'eau, continuez à réduire. S'il tient fermement dans un monticule, ajouter une éclaboussure d'eau."
    },
    {
      "nodeId": "step_4",
      "action": "Assaisonner",
      "inputs": [
        "finished_peperonata",
        "ing_07",
        "ing_08"
      ],
      "outputState": "peperonata",
      "instructions": "Hors du feu, ajoutez une petite éclaboussure de vinaigre de vin rouge si vous l'utilisez — il soulève et illumine la douceur. Goûtez et ajustez le sel. Déchirer le basilic frais et remuer. Servir chaud, à température ambiante, ou froid. Peperonata est extraordinairement polyvalent: utilisez-le comme plat d'appoint, garniture de bruschetta, sauce aux pâtes, base de pizza, ou accompagnement aux viandes grillées et au poisson.",
      "visualCue": {
        "primaryTarget": "Une belle compote rubis-ambre brillante, avec un basilic frais. La surface mijote d'huile d'olive. Toute la casserole sent doux, herbacé, et profondément de l'été.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Goûte plat et unidimensionnellement doux, manque de luminosité.",
            "action": "Le vinaigre est le pont — ajoutez-le en gouttes, goûtez après chacun, jusqu'à ce que la douceur ait un contrepoint lifting."
          },
          {
            "state": "Perfect",
            "description": "La douceur des poivrons est la note primaire, relevée par l'acide, approfondie par la tomate, arrondie par l'huile d'olive. Chaque cuillère est un succès concentré de l'été.",
            "action": "Servir à température ambiante — peperonata est toujours mieux ainsi."
          },
          {
            "state": "Overdone",
            "description": "Trop de tarte au vinaigre ou trop sucrée à cause d'une réduction excessive.",
            "action": "Équilibrez avec une pincée de sucre si trop de tarte, ou un jet d'eau et une pression de citron si trop sucré et concentré."
          }
        ]
      },
      "feelCue": "Une cuillère de peperonata finie doit se sentir veloutée et dense sur la langue — pas aqueuse, pas sèche, mais ce registre intermédiaire parfait où la douceur végétale concentrée enveloppe tous les récepteurs de goût à la fois."
    }
  ]
};
