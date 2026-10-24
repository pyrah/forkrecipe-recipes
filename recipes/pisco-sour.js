export default {
  "repoId": "master_peruvian_piscosour_001",
  "parentRepoId": null,
  "slug": "pisco-sour",
  "author": "ForkRecipe Kitchen",
  "title": "Pisco Sour",
  "description": "Le cocktail national du Pérou — un pisco sec, agrumes-brillant agité avec du jus de lime frais, du sirop simple et du blanc d'œuf cru jusqu'à ce qu'il gèle dans un nuage, servi dans un coupé réfrigéré avec trois gouttes d'Angostura amer saignant dans la mousse.",
  "cuisine": "Pérou",
  "culture": "Lima",
  "category": "beverages",
  "tags": [
    "boisson",
    "Sans gluten",
    "Pisco",
    "périuvien",
    "cocktail",
    "blanc-œuf",
    "agrumes"
  ],
  "difficulty": 2,
  "activeTime": "8 min",
  "totalTime": "10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 0,
    "sour": 4,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Solvent",
      "name": "Pisco péruvien (quebranta ou acholado)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "Pisco chilien (fruitier)",
        "brandy non vieilli en dernier recours"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Jus de citron vert frais (choix de citron vert clé)",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "jus de citron frais"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sirop simple (1:1 sucre: eau)",
      "ratioValue": 22,
      "defaultUnit": "ml",
      "substitutions": [
        "sirop de gomme pour corps supplémentaire"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Blanc d'œuf, frais (un œuf)",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "aquafaba (eau de pois chiche) pour végétalien"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Garnish",
      "name": "Agostura amers",
      "ratioValue": 3,
      "defaultUnit": "drops",
      "substitutions": [
        "Amargo Chuncho amers (plus authentique)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Glaçons (pour trembler)",
      "ratioValue": 1,
      "defaultUnit": "handful",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fouetter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "dry_shaken_base",
      "instructions": "Mélanger le pisco, le jus de lime, le sirop simple et le blanc d'œuf dans un shaker sans glace. C'est le « sec sec » — agiter sans glace pour construire une mousse préliminaire à partir de la protéine blanche d'oeuf avant dilution avec de la glace. Agiter aussi fort et aussi longtemps que possible pendant 30 à 45 secondes. Le shaker se sentira presque impossible à ouvrir du vide. Le blanc d'œuf nécessite la chaleur et la pleine force de ce tremblement sec pour dénaturation et mousse — un tremblement à demi-coeur produit un mince bouchon en mousse aqueuse qui s'effondre en quelques secondes.",
      "visualCue": {
        "primaryTarget": "Lorsque le shaker est brièvement ouvert, le contenu apparaît épais et mousseux — visiblement augmenté en volume et une couleur plus pâle que quand il est entré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est encore mince et sans odeur, sentant fortement l'oeuf cru. La secousse était trop courte ou trop douce.",
            "action": "Fermez et secouez plus fort pendant encore 20 secondes. La mousse a besoin de force soutenue pour se former."
          },
          {
            "state": "Perfect",
            "description": "Le mélange s'est épaissi sensiblement et une mousse persistante est visible lorsque le couvercle est brièvement desserré. Le volume a augmenté. Ça sent les agrumes et légèrement les œufs.",
            "action": "Ajouter la glace et agiter à nouveau."
          },
          {
            "state": "Overdone",
            "description": "Il n'est pas possible d'écraser. Continuez avec confiance.",
            "action": "Passez à la glace."
          }
        ]
      },
      "feelCue": "Le shaker devrait hocher très peu par rapport à un shake humide normal — le liquide épaissi en mousse ne s'enlise pas; il vomit. Vos bras devraient sentir l'effort."
    },
    {
      "nodeId": "step_2",
      "action": "Réfrigérer",
      "inputs": [
        "dry_shaken_base",
        "ing_06"
      ],
      "outputState": "chilled_cocktail",
      "instructions": "Ajouter une grosse boule de glaçons au shaker contenant la base sèche. Agiter vigoureusement pendant 15 à 20 secondes. Cette deuxième secousse refroidit, dilue et aérera davantage le cocktail. La température plus froide aide à placer la mousse dans une structure plus stable. Le shaker gèlera à l'extérieur — c'est votre signal que la boisson est assez froide.",
      "visualCue": {
        "primaryTarget": "L'extérieur du shaker est blanc givré avec condensation et se sent très froid — presque congelé au toucher.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le shaker est froid mais pas givré. La boisson à l'intérieur n'est pas assez froide et va fondre la glace trop vite dans le verre.",
            "action": "Agiter encore 10 secondes."
          },
          {
            "state": "Perfect",
            "description": "Le shaker est gelé et se sent presque congelé. Lorsque vous secouez près de votre oreille, la glace semble dense et compacte — peu de slosh.",
            "action": "Plongez immédiatement dans le coupé réfrigéré."
          },
          {
            "state": "Overdone",
            "description": "La sur-dilution due au tremblement trop long avec de la glace — la boisson a un goût aqueux et pâle.",
            "action": "Utilisez plus de glace la prochaine fois et plus courte seconde secousse. La secousse fait le levage lourd."
          }
        ]
      },
      "feelCue": "Le shaker devrait se sentir mal à l'aise à tenir à mains nues — le métal se contracte dans votre adhérence. C'est la bonne température."
    },
    {
      "nodeId": "step_3",
      "action": "Filtrer",
      "inputs": [
        "chilled_cocktail",
        "ing_05"
      ],
      "outputState": "finished_pisco_sour",
      "instructions": "Double-entraînez le cocktail à travers une passoire Hawthorne et un tamis à mailles fines dans un verre coupé réfrigéré — la passoire fine capture des durs de glace qui cratèreraient la mousse. Verser à partir d'une hauteur basse afin que la mousse atterrisse proprement sur le dessus plutôt que d'éclabousser sur les côtés. La mousse doit dômer légèrement au-dessus du bord du verre. Ajouter immédiatement trois gouttes d'Angostura amer au centre de la mousse. Utilisez un cueil à cocktail ou un cure-dent pour faire glisser les gouttes à travers la mousse en spirale ou en ligne — les amères fleurissent dans la mousse blanche comme l'encre dans l'eau, créant le motif classique pisco aigre.",
      "visualCue": {
        "primaryTarget": "Un cocktail en or pâle visible à travers le verre, surmonté d'une épaisse mousse blanche légèrement bombée avec trois gouttes d'ambre foncé disposées à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La mousse est mince, à peine 3 mm, et déjà dissolue. Des gouttes d'amers coulent à travers elle.",
            "action": "La secousse était insuffisante. Servir tel quel — la saveur est correcte, juste la texture est compromise."
          },
          {
            "state": "Perfect",
            "description": "Un dôme en mousse blanche ferme et dense d'au moins 1 cm d'épaisseur, tenant les amères gouttes sur sa surface comme l'encre sur le velours. La mousse ne se dissout pas pendant 3-4 minutes.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Trop de mousse s'est formée, débordant le verre. Le rapport cocktail/écume est éteint.",
            "action": "Relever doucement la couche de mousse avec une cuillère si nécessaire, ou servir dans un verre plus grand."
          }
        ]
      },
      "feelCue": "La mousse doit se sentir comme de la crème fouettée raide sur la langue — aérée et immédiate — suivie par le coup aigu du citron vert, la chaleur sèche du pisco, et un murmure d'amertume sur la finale."
    }
  ]
};
