export default {
  "repoId": "master_french_pot_au_feu_001",
  "parentRepoId": null,
  "slug": "pot-au-feu",
  "author": "ForkRecipe Kitchen",
  "title": "Pot-au-feu",
  "description": "Les plats les plus français – le shin de bœuf et les os de moelle mijotés lentement avec des légumes-racines jusqu'à ce que le bouillon soit doré et clair, servi en deux plats : le bouillon d'abord, puis la viande et les légumes.",
  "cuisine": "Français",
  "culture": "Province française",
  "category": "proteins",
  "tags": [
    "boeuf",
    "bouillie",
    "français",
    "légumes",
    "bouillon",
    "classique"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "4 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Shin de boeuf (en os, attaché en 2 morceaux)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "queue d'ox",
        "poitrine de boeuf"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Inosinate",
      "name": "Ossements étroits (sections de 5 à 6 cm, attachées en mousseline)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Grand oignon jaune (chaudé, carbonisé à la face coupée sec dans une poêle)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Bouquet garni (thyme, feuille de laurier, tiges de persil, grains de poivre noir)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Carottes (peautées, demi-longueur)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Structure",
      "name": "Naveaux (peautés, triés)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "panais"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Structure",
      "name": "Levures (blanc et vert pâle, liées)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Structure",
      "name": "Racine de céleri (peautée, coupée en quartiers)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "Pâtes de céleri"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sels de mer grossiers",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Moutarde de Dijon, cornichons, fleur de sel et baguette grillée (à servir)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanchir",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "blanched_meat",
      "instructions": "Placer le shin et les os de moelle dans une grande casserole, couvrir d'eau froide et porter à ébullition à feu vif. Faire bouillir pendant 5 minutes — une ordure grise s'élèvera agressivement. Égoutter, rincer la viande et les os sous l'eau courante froide pour éliminer toutes les impuretés et nettoyer le pot. Cette étape de blanchiment n'est pas facultative — c'est ce qui permet au bouillon final d'être clair plutôt que gris.",
      "visualCue": {
        "primaryTarget": "La viande et les os ont été rincés propres, sans traces d'ordures grises, et le pot de cuisson a été nettoyé de tous les résidus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Seul un écureuil léger s'est levé et l'eau est encore assez claire — toutes les impuretés n'ont pas été purgées.",
            "action": "Continuer à bouillir encore 2–3 minutes jusqu'à ce que la racaille cesse de monter agressivement."
          },
          {
            "state": "Perfect",
            "description": "L'eau est épaisse avec de la mousse gris foncé. Lorsqu'elle est drainée et rincée, la viande a l'air brun gris mais propre. La casserole est libre de résidus.",
            "action": "Retournez la viande nettoyée dans le pot propre et couvrez-la d'eau froide fraîche."
          },
          {
            "state": "Overdone",
            "description": "La viande a été bouillie bien trop longtemps au stade de blanchiment et commence à avoir l'air terne et fibreuse.",
            "action": "Passez rapidement à l'étape d'immersion — ne répétez pas le blanch."
          }
        ]
      },
      "feelCue": "La viande après le blanchage et le rinçage doit sentir froid et légèrement collant du collagène qui commence à se relâcher."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "blanched_meat",
        "ing_03",
        "ing_04",
        "ing_09"
      ],
      "outputState": "simmering_broth",
      "instructions": "Retournez la viande blanchie et les os dans le pot propre. Ajouter les moitiés d'oignon carbonisé (les laisser couper dans une poêle sèche à feu vif pendant 3 à 4 minutes jusqu'à ce qu'elles soient noircies, ce qui donne au bouillon sa couleur dorée). Ajoutez le bouquet garni et suffisamment d'eau froide pour couvrir tout par 5 cm. Porter lentement à feu moyen, ce qui devrait prendre 20 minutes. Éjaculez soigneusement toute autre ordure à mesure qu'elle monte. Réduisez à la plus basse mijoter possible — la surface devrait à peine trembler, juste une bulle paresseuse occasionnelle se briser. Cuire 2 heures avant d'ajouter les légumes.",
      "visualCue": {
        "primaryTarget": "Un bouillon d'ambre doré, légèrement tremblant, sans ébullition visible, et une surface propre avec seulement une bulle lente occasionnelle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est à peine chaude et les ordures continuent de monter fortement. Le bouillon n'a pas encore de couleur ou de corps.",
            "action": "Continuer à feu moyen, écrémer régulièrement. Le bouillon a besoin de patience — un réchauffement lent et complet est essentiel pour la clarté."
          },
          {
            "state": "Perfect",
            "description": "Une mijotée tranquille et tremblante. La surface est presque immobile. Broth est déjà en train de s'amplifier à partir de l'oignon carbonisé. Ça sent le boeuf et les herbes.",
            "action": "Maintenir cette mijoter pendant 2 heures avant d'ajouter des légumes."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon est à ébullition, il deviendra nuageux et gras, car la graisse est émulsifiée dans le liquide.",
            "action": "Réduire immédiatement la chaleur. Ajoutez une éclaboussure d'eau froide pour réduire la température. Écraser complètement la surface."
          }
        ]
      },
      "feelCue": "Plongez une cuillère propre dans le bouillon à la marque de 2 heures et le goût — il devrait déjà avoir une saveur de boeuf clair et doré qui enveloppe l'arrière de la cuillère avec une viscosité à peine perceptible."
    },
    {
      "nodeId": "step_3",
      "action": "Pocher",
      "inputs": [
        "simmering_broth",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "cooked_pot_au_feu",
      "instructions": "Ajouter les légumes au bouillon mijotant par étapes par leur temps de cuisson : ajouter les navets d'abord (30 minutes pour cuire), puis les carottes et les racines de céleri (20 minutes), et enfin les poireaux (15 minutes). L'objectif est que tous les légumes soient parfaitement tendres en même temps. Ne les ajoutez pas tous à la fois. Le bouillon doit rester à mijoter doucement tout au long — jamais un ébullition.",
      "visualCue": {
        "primaryTarget": "Légumes complètement tendres mais toujours en forme: un couteau passe à travers une carotte sans résistance, la surface coupée est propre, pas fibreuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les carottes ou les navets résistent à une fine brochette. Les centres se sentent frais au toucher lorsqu'ils sont pressés.",
            "action": "Continuez à mijoter. Testez chaque légume individuellement à l'aide d'une brochette fine ou d'un couteau."
          },
          {
            "state": "Perfect",
            "description": "Tous les légumes donnent à un couteau sans résistance. Les poireaux sont complètement mou mais ne se désintègrent pas. Les carottes ont une légère lueur dorée du bouillon.",
            "action": "Soulevez tout du bouillon. Servir le bouillon tendu d'abord, puis la viande et les légumes."
          },
          {
            "state": "Overdone",
            "description": "Les poireaux se sont effondrés en brins, les navets s'effondrent, et le bouillon a absorbé leur saveur au point de bouillir.",
            "action": "Servir immédiatement. Égoutter les légumes rapidement et les présenter sur un plateau; ils ne sont pas irréparablement perdus."
          }
        ]
      },
      "feelCue": "Appuyez sur une carotte avec le pouce contre le côté de la casserole — elle devrait produire complètement avec à peine n'importe quelle pression, comme presser dans le beurre doux."
    },
    {
      "nodeId": "step_4",
      "action": "Filtrer",
      "inputs": [
        "cooked_pot_au_feu"
      ],
      "outputState": "finished_pot_au_feu",
      "instructions": "Soulevez soigneusement la viande et les légumes du bouillon avec une cuillère à fente sur un plateau chaud. Détachez et retirez la mousseline des os de la moelle. Placer le bouillon dans un tamis fin doublé de mousseline mouillée ou d'un chiffon propre. Goûter et corriger le sel. Servir le bouillon clair d'abord dans des bols de soupe chauds avec quelques petites pâtes ou pain grillé. Suivez la viande, coupée en tranches d'épaisseur, et les légumes, accompagnés de moutarde de Dijon, cornichons, sel grossier, et raifort si désiré.",
      "visualCue": {
        "primaryTarget": "Un bouillon d'ambre clair, comme un bijou, sans globules gras visibles ni nuages, et un plateau de viande tendre et de légumes vifs aux couleurs profondes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est gris et nuageux avec de la graisse et des particules flottantes. Il était bouilli trop dur à un moment donné.",
            "action": "Plongez une seconde fois dans le muslin. Le goût peut encore être excellent même si l'apparence est compromise."
          },
          {
            "state": "Perfect",
            "description": "Le bouillon est un ambre clair, presque comme le thé noir, sans nuage. La lumière brille à travers elle. Il a une profondeur douce, riche, propre.",
            "action": "Servir immédiatement dans le format traditionnel à deux services."
          },
          {
            "state": "Overdone",
            "description": "Broth a trop réduit de la cuisson prolongée et goûte salé et intensément concentré.",
            "action": "Ajouter une petite quantité d'eau chaude pour équilibrer. Goûtez encore avant de servir."
          }
        ]
      },
      "feelCue": "Déposer lentement le bouillon tendu — il devrait avoir la résistance la plus faible car il coule de la louche, le premier soupçon de gélatine, preuve que le collagène s'est donné au pot."
    }
  ]
};
