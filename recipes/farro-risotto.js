export default {
  "repoId": "master_italian_farro_risotto_001",
  "parentRepoId": null,
  "slug": "farro-risotto",
  "author": "ForkRecipe Kitchen",
  "title": "Farro Risotto aux herbes et au parmesan",
  "description": "Farro perlé cuit risotto-style — louche par louche — jusqu'à ce que le grain ancien soit tendre mais agréablement mâché, lié dans une crème savoureuse Parmigiano parfumé de thym et fini avec un bon mantecatura de beurre froid.",
  "cuisine": "Italien",
  "culture": "Toscane",
  "category": "grains",
  "tags": [
    "Farro",
    "Risotto",
    "Italien",
    "Tuscan",
    "parmesan",
    "grains",
    "végétarien"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Farro perlé",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "baies d'épeautre (longueur du temps de cuisson de 10 min)",
        "Farro semi-pair"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Échalotes finement hachées",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon blanc, en dés"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Solvent",
      "name": "Vin blanc sec",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Vermouth sec",
        "stock supplémentaire avec une pression de citron"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Stocks de légumes ou de poulet, chauds",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé, froid, cubes",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Parmigiano-Reggiano, finement râpé",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Grana Padano"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Thym frais, feuilles dépouillées",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "Marjoram frais"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saucisse",
      "inputs": [
        "ing_09",
        "ing_02",
        "ing_03",
        "ing_08"
      ],
      "outputState": "sweated_shallots",
      "instructions": "Chauffer l'huile d'olive dans une grande casserole à fond lourd ou faire sauter à feu moyen-doux. Ajouter les échalotes hachées et cuire doucement, en remuant souvent, pendant 5 à 7 minutes jusqu'à ce qu'elles soient complètement douces, translucides et sucrées — elles ne doivent pas du tout colorer. Ajouter l'ail et les feuilles de thym; faire cuire encore 1 minute jusqu'à parfumer. Conserver le bouillon dans une petite casserole séparée à feu doux — il doit rester chaud. Le stock froid choque l'amidon et brise l'émulsion crémeuse que vous construisez.",
      "visualCue": {
        "primaryTarget": "Des échalotes complètement translucides, scintillantes et effondrées. Pas de brunissement, pas de caramélisation — doux et pâle comme du verre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les échalotes sont encore partiellement opaques et fermes. Une odeur piquante d'oignon cru persiste.",
            "action": "Abaissez le feu et faites cuire avec un couvercle pendant 2 minutes à la vapeur et adoucissez sans brunir."
          },
          {
            "state": "Perfect",
            "description": "Les échalotes sont entièrement translucides, fondues et parfumées de thym. La poêle sent l'oignon doux et les herbes, pas l'allium cru.",
            "action": "Ajouter le farro et procéder immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les échalotes sont devenues dorées aux bords. La poêle commence à développer la couleur.",
            "action": "Ajouter une touche d'eau pour arrêter le brunissement et remuer constamment pendant 30 secondes. Le risotto de farro aura une base légèrement plus sucrée, plus caramélisée — encore délicieux."
          }
        ]
      },
      "feelCue": "Les échalotes doivent se sentir comme de la soie chaude et douce contre le dos de la cuillère — pas de résistance, pas de croûte, juste une douceur odorante."
    },
    {
      "nodeId": "step_2",
      "action": "Déglacement",
      "inputs": [
        "sweated_shallots",
        "ing_01",
        "ing_04"
      ],
      "outputState": "deglazed_farro",
      "instructions": "Ajouter le farro sec dans la poêle et mélanger pour enrober chaque grain avec l'huile et le mélange d'échalote. Faire cuire pendant 60 à 90 secondes, en remuant constamment, jusqu'à ce que les grains sentent la noix et légèrement grillés et que les bords de la poêle commencent à sécher. Verser le vin blanc tout d'un coup — il fera un étourdissement et de la vapeur dramatiquement. Incorporer constamment jusqu'à ce que le vin soit complètement absorbé, ce qui prend 1 à 2 minutes. La poêle doit être presque sèche avant d'ajouter la première louche de stock.",
      "visualCue": {
        "primaryTarget": "Le vin est entièrement absorbé et le fond de la poêle est presque sec. Le farro a l'air brillant et grillé, pas mouillé ou à la vapeur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le vin est encore dans la casserole. Le farro nage dans le liquide plutôt que de l'absorber. L'odeur d'alcool brut est toujours présente.",
            "action": "Continuer à remuer à feu moyen. Le vin doit réduire complètement — son bord d'alcool cru doit cuire ou le plat final aura un goût sévère."
          },
          {
            "state": "Perfect",
            "description": "La poêle est presque sèche, le farro brille avec du vin absorbé. Une faible odeur de noix. Pas d'alcool cru.",
            "action": "Commencez à ajouter du bouillon chaud une louche à la fois."
          },
          {
            "state": "Overdone",
            "description": "La poêle est complètement sèche et le farro commence à coller et à serrer contre le fond.",
            "action": "Ajouter la première louche de stock immédiatement avant toute brûlure de grains."
          }
        ]
      },
      "feelCue": "Après la réduction du vin, vous devriez être capable de faire glisser une cuillère en bois à travers le centre de la poêle et le chemin devrait tenir pendant 2–3 secondes avant que le farro ne retombe. C'est le moment d'ajouter du stock."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "deglazed_farro",
        "ing_05",
        "ing_10"
      ],
      "outputState": "cooked_farro",
      "instructions": "Ajouter une louche de bouillon chaud (environ 120 ml) au farro. Mélanger régulièrement et laisser absorber presque complètement avant d'ajouter la prochaine louche. Assaisonner légèrement avec du sel. Continuer ce processus — louche, remuer, absorber, louche — pendant 25 à 30 minutes au total. Ne pas se précipiter avec plus d'une louche à la fois; chaque addition extrait l'amidon du grain et construit la sauce crémeuse. Farro est prêt quand le grain est tendre tout au long, mais conserve une mâche douce et satisfaisante — al dente est correct. Le risotto doit couler lentement lorsque vous inclinez la poêle, ne pas tenir sa forme comme un monticule.",
      "visualCue": {
        "primaryTarget": "Farro qui coule paresseusement quand la poêle est inclinée — ce que les Italiens appellent all'onda (dans une vague). La sauce est crémeuse et opaque, enrobant chaque grain.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore croustillants et féculents au centre. La sauce est fine et granuleuse plutôt que crémeuse. Le farro ne coule pas, il est assis.",
            "action": "Continuer d'ajouter du stock et de remuer. Farro prend plus de temps que le riz; ne soyez pas impatient à la marque de 20 minutes."
          },
          {
            "state": "Perfect",
            "description": "Les grains sont entièrement tendres avec une agréable mâche. La sauce est crémeuse, brillante et enrobe les grains. Le risotto coule lentement quand la poêle est inclinée, comme la lave épaisse.",
            "action": "Retirer immédiatement du feu et passer à la mantecatura."
          },
          {
            "state": "Overdone",
            "description": "Les grains ont explosé et dissous. La texture est collante et pâteuse. Le risotto s'est raidi et tient sa forme lorsqu'il est cuillé.",
            "action": "Ajouter un jet de bouillon chaud et remuer vigoureusement la chaleur pour se détendre. Servir immédiatement — le risotto trop cuit ne fait qu'empirer à mesure qu'il est assis."
          }
        ]
      },
      "feelCue": "Goûtez un grain de farro à la moitié de la cuisson: il devrait se sentir comme mordre à travers la couche extérieure dans un centre crayeux — non fait. Une fois fait, le grain doit se sentir lisse et cohérent tout au long du chemin avec juste un murmure de mâcher."
    },
    {
      "nodeId": "step_4",
      "action": "Monter",
      "inputs": [
        "cooked_farro",
        "ing_06",
        "ing_07",
        "ing_11"
      ],
      "outputState": "finished_farro_risotto",
      "instructions": "Retirer complètement la poêle du feu. Ajouter les cubes de beurre froid et le Parmigiano-Reggiano en même temps. Mélanger vigoureusement dans un mouvement circulaire — certains cuisiniers utilisent une cuillère en bois, d'autres secouent la poêle dans un mouvement de basculement rapide. L'objectif est mantecatura : un brassage violent qui émulsionne le beurre froid et le fromage dans l'amidon chaud, créant une sauce serrée, brillante et crémeuse. Le risotto s'épaissira nettement. Ajouter quelques morceaux de poivre noir. Couvrez la casserole et reposez-vous pendant exactement 2 minutes — ce reste est essentiel et non négociable. Servir immédiatement dans des bols chauds.",
      "visualCue": {
        "primaryTarget": "Une sauce brillante, serrée, de couleur crème qui s'accroche à chaque grain de farro. La surface doit briller comme de la soie, pas avoir l'air granuleuse ou huileuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre a fondu, mais n'est pas émulsifié — vous pouvez voir des réserves distinctes de graisse flottant sur le dessus. La sauce semble grasse et cassée plutôt que crémeuse.",
            "action": "Retourner à la chaleur très basse et remuer encore plus vigoureusement. Ajouter une cuillère à café de bouillon chaud et remuer dur — l'émulsion a besoin d'énergie et de chaleur douce pour se réunir."
          },
          {
            "state": "Perfect",
            "description": "La sauce est une émulsion serrée et brillante – complètement uniforme, de couleur crème, brillante. Le risotto coule comme une vague quand la poêle est inclinée. Pas de graisse, pas de grain.",
            "action": "Couvrir, reposer 2 minutes et servir dans des bols chauds à la fois."
          },
          {
            "state": "Overdone",
            "description": "Le risotto s'est raidi et empilé dans une masse solide. La mantecatura est devenue trop longue ou trop chaude.",
            "action": "Ajouter une petite louche de bouillon chaud, remuer vigoureusement et servir immédiatement. La fenêtre est étroite — cette étape est faite hors de la chaleur et rapidement."
          }
        ]
      },
      "feelCue": "Le risotto mantecato farro doit être soyeux et uniforme lorsqu'il est cuillé sur le toit de votre bouche — pas de grain, pas de poches de graisse séparées, juste un grain doux, riche et crémeux."
    }
  ]
};
