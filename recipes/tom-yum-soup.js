export default {
  "repoId": "master_thai_tom_yum_soup_001",
  "parentRepoId": null,
  "slug": "tom-yum-soup",
  "author": "ForkRecipe Kitchen",
  "title": "Tom Yum Goong",
  "description": "Un bouillon thaïlandais qui frappe tous les récepteurs à la fois - galangal et citronnelle raide dans une base translucide, profondément parfumée, crevettes cuisinent juste après translucide, et une floraison finale de jus de lime et de sauce de poisson bascule tout dans la chaleur féroce, propre et la luminosité aigre.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "stocks",
  "tags": [
    "Thaï",
    "Soupe",
    "crevettes",
    "citronnelle",
    "Chaud-sour"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 2876,
  "forks": 310,
  "contributors": 35,
  "license": "CC-BY-SA",
  "createdAt": "2024-04-08",
  "updatedAt": "2025-10-22",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 4,
    "bitter": 0,
    "umami": 4,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Eau ou bouillon de poulet léger",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "stock de coquilles de crevettes pour double intensité"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Patins de citronnelle, meurtris et coupés en segments de 5 cm",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Galangal (kha), tranché en pièces de monnaie (pas de gingembre)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "le gingembre est une saveur différente — utiliser uniquement en cas d'urgence"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Feuilles de citron vert de Kaffir, légèrement meurtries et déchirées",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Heat",
      "name": "Chilies oculaires thaïlandaises, écrasées",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "serrano chilies"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Grandes crevettes (en tête), décortiquées ou pelées",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "tranches de poitrine de poulet",
        "fruits de mer mélangés"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "Champignons de paille ou d'huîtres, coupés en deux",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "champignons bouton"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "sauce de poisson (Tiparos ou Megachef)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce soja légère pour végétarien"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Jus de lime frais (d'environ 2 limes)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "eau tamarine pour une aigre plus complexe"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Coriandre fraîche et oignon de printemps, haché",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "culantro / long coriandre pour l'authenticité"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Aromatiques profonds",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "aromatic_stock",
      "instructions": "Mélanger de l'eau (ou du bouillon), de la citronnelle, du galangal, des feuilles de lime kaffir et des chilis meurtris dans un pot. Porter à ébullition, puis laisser mijoter vigoureusement. Cuire 10-12 minutes pour extraire complètement les aromatiques. Ne pas encore se fatiguer — les solides aromatiques continuent à infuser pendant que vous faites cuire le reste de la soupe.",
      "visualCue": {
        "primaryTarget": "Le papillon a pris une teinte vert doré pâle; la surface est parfumée de citronnelle, de feuille de lime et d'une faible chaleur qui monte dans la vapeur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le broth sent toujours l'eau ordinaire; la citronnelle et le galangal n'ont pas complètement libéré leurs composés.",
            "action": "Continuer à mijoter pendant 5 minutes; les aromatiques ont besoin de temps et de chaleur."
          },
          {
            "state": "Perfect",
            "description": "Le bouillon est d'or pâle, parfumé de citronnelle, d'agrumes et de galangal terreux. Les chilies ont libéré la couleur orange-rouge visible dans le liquide.",
            "action": "Ajouter les champignons et poursuivre."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon a diminué de façon significative et peut avoir un goût légèrement amer à partir du citron vert de kaffir sur-extractée.",
            "action": "Retirer les feuilles de combava; ajouter un jet d'eau pour reconstituer le volume."
          }
        ]
      },
      "feelCue": "Penchez - vous sur le pot et inhalez — vous devriez sentir la citronnelle, les agrumes et quelque chose de presque médicinal du galangal. Si le parfum est faible, laisser mijoter plus longtemps avec le couvercle."
    },
    {
      "nodeId": "step_2",
      "action": "Champignons cuits",
      "inputs": [
        "ing_07",
        "aromatic_stock"
      ],
      "outputState": "mushroom_broth",
      "instructions": "Ajouter les champignons à moitié au stock aromatique mijotant. Cuire 3-4 minutes jusqu'à tendreté mais en tenant toujours leur forme. Les champignons libèrent leur propre umami dans le bouillon, approfondissant la base.",
      "visualCue": {
        "primaryTarget": "Les champignons sont tendres et ont absorbé la couleur du bouillon; le stock lui-même semble légèrement plus doré et opaque de la libération des champignons.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les champignons sont encore pâles et résistants lorsqu'ils sont pressés avec une cuillère.",
            "action": "Cuire encore 2-3 minutes."
          },
          {
            "state": "Perfect",
            "description": "Les champignons produisent légèrement lorsqu'ils sont pressés mais tiennent leur forme. Le bouillon est un plus profond doré avec une richesse visible en umami.",
            "action": "Ajouter les crevettes immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les champignons sont complètement mous et commencent à se désintégrer dans le bouillon — la texture est perdue.",
            "action": "Procéder rapidement; ils auront encore un bon goût."
          }
        ]
      },
      "feelCue": "Le bouillon à ce stade devrait sentir comme la mer et la forêt simultanément — les champignons ajoutent une profondeur terreuse qui ancre les aromatiques d'agrumes."
    },
    {
      "nodeId": "step_3",
      "action": "Crevettes cuites",
      "inputs": [
        "ing_06",
        "mushroom_broth"
      ],
      "outputState": "cooked_shrimp_broth",
      "instructions": "Ajouter les crevettes au bouillon mijotant. Cuire 1-2 minutes seulement — jusqu'à ce qu'il soit rose et frisé. Ne pas trop cuire. Si l'on utilise des crevettes tête-à-tête, les têtes libèrent un éclat d'essence de crevettes dans le bouillon : pressez-les doucement avec une cuillère pendant qu'elles cuisinent. Retirer du feu immédiatement lorsque la crevette se boucle.",
      "visualCue": {
        "primaryTarget": "Les crevettes sont uniformément orange-rose tout au long, enroulées en forme de C — et non en O, ce qui indique une cuisson excessive.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crevettes sont encore gris-translucides et boiteuses. Le changement de couleur n'est pas terminé.",
            "action": "Faites cuire encore 30-60 secondes. Ne laissez pas le pot."
          },
          {
            "state": "Perfect",
            "description": "Les crevettes sont rose-orange vif, frisé à un C lâche, et légèrement fermes lorsqu'elles sont pressées. Le bouillon sent fortement l'essence de la crevette douce.",
            "action": "Retirer du feu et assaisonner immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes sont serrées à une forme O, blanches opaques dans l'ensemble et caoutchouteuses lorsqu'elles sont pressées.",
            "action": "Assaisonner et servir immédiatement — rien d'autre n'aide les crevettes surcuites."
          }
        ]
      },
      "feelCue": "Touchez une crevette avec votre doigt – elle devrait se sentir ferme et revenir légèrement, comme une gomme à crayon. S'il se sent dur et ne ressort pas, il est déjà trop cuit."
    },
    {
      "nodeId": "step_4",
      "action": "Saison et fin",
      "inputs": [
        "cooked_shrimp_broth",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_tom_yum",
      "instructions": "Hors chaleur (critique — le jus de lime perd de la luminosité lorsqu'il mijote), ajouter la sauce de poisson et le jus de lime. Bouche et équilibre : sauce de poisson pour sel, citron vert pour aigrer et ajuster le niveau de chili au goût. La soupe doit être amère et chaude dans une mesure égale. Déposer dans des bols, garnir et servir immédiatement — cette soupe n'attend pas.",
      "visualCue": {
        "primaryTarget": "Bouillon clair et doré avec des crevettes roses vives, des herbes vertes flottantes et des taches de chili orange — une soupe qui semble aussi électrifiante qu'elle le goûte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La soupe a un goût plat, surtout de l'eau de citronnelle — la sauce de poisson et le citron vert n'ont pas encore été ajoutées.",
            "action": "Ajouter la sauce de poisson d'abord (saison), puis le jus de lime petit à petit, dégustation au fur et à mesure."
          },
          {
            "state": "Perfect",
            "description": "Les saveurs frappent en séquence : d'abord la chaleur des piments, puis la luminosité aigre du citron vert, puis la profondeur salée de la sauce de poisson et de crevettes. Chaque élément est distinct et fort.",
            "action": "Louche et garnir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Sur saison — soit trop salé (trop de sauce de poisson) ou trop acide (trop de citron vert). Les saveurs s'écrasent.",
            "action": "Ajouter une petite quantité d'eau et une pincée de sucre pour équilibrer. Le sucre doit être à peine perceptible."
          }
        ]
      },
      "feelCue": "La soupe finie devrait vous faire tirer un souffle vif de la chaleur, puis expirer avec la aigre — que un-deux coup est l'âme de tom yum."
    }
  ]
};
