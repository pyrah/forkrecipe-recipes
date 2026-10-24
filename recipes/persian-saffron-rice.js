export default {
  "repoId": "master_persian_saffron_rice_001",
  "parentRepoId": null,
  "slug": "persian-saffron-rice",
  "author": "ForkRecipe Kitchen",
  "title": "Riz de safran persan (Chelow)",
  "description": "Le joyau de la couronne de la cuisine iranienne - basmati à grains longs qui a été trempé, par huilé, puis cuit à la vapeur sur une flamme basse enveloppée dans un chiffon pour créer une croûte dorée, éclatante et croustillante appelée tahdig au fond de la casserole tandis que le riz ci-dessus reste séparé, allongé et parfumé de safran.",
  "cuisine": "Perse",
  "culture": "Iranien",
  "category": "grains",
  "tags": [
    "riz",
    "persienne",
    "safran",
    "Tahdig",
    "Chelow",
    "Iranien",
    "basmati"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "2 hr",
  "ratioSystem": "parts",
  "stars": 2456,
  "forks": 198,
  "contributors": 58,
  "license": "CC-BY-SA",
  "createdAt": "2024-10-05",
  "updatedAt": "2025-04-30",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz basmati extra-long (âge préféré)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel de mer",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "ghee (plus traditionnel)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile neutre (pour tahdig)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Fils de safran, fleuris dans 3 c. à soupe d'eau chaude",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Eau chaude (pour la floraison du safran)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Structure",
      "name": "Pain de lavah ou pain plat fin (base tahdig en option)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "tranches de pommes de terre",
        "couche de yaourt épaisse"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trempage",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "soaked_rice",
      "instructions": "Rincer le riz basmati dans plusieurs changements d'eau froide jusqu'à ce que l'eau soit claire, ce qui élimine l'amidon de surface qui rendrait les grains cuits empiler. Ajouter du sel à l'eau froide (environ 1 cuillerée à soupe par 2 tasses de riz) et tremper le riz rincé pendant 30 à 60 minutes, jusqu'à la nuit au réfrigérateur. L'assèchement permet au grain de commencer à absorber l'eau, ce qui assure qu'il cuit uniformément tout le long pendant le parboul rapide et empêche l'extérieur de trop cuire avant que le centre soit fait.",
      "visualCue": {
        "primaryTarget": "Les grains de riz sont visiblement gonflés et sont maintenant légèrement opaques et pluvieux que secs. L'eau de trempage est légèrement laiteuse de l'amidon de surface qui s'est libéré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz a trempé moins de 20 minutes. Les grains sont encore minces et fermes sans gonflement visible. L'eau de trempe est encore presque claire.",
            "action": "Continuer à tremper — le riz bien trempé est essentiel pour la texture séparée et allongée qui définit le riz persan."
          },
          {
            "state": "Perfect",
            "description": "Les grains sont visiblement enflés — nettement plumés et légèrement translucides. L'eau qui sème est laiteuse. Les grains se cassent proprement quand on est pressé.",
            "action": "Égoutter et procéder au parboulement."
          },
          {
            "state": "Overdone",
            "description": "Le riz trempe depuis de nombreuses heures dans de l'eau chaude. Les grains ont peut-être commencé à se casser lorsqu'ils sont pressés et ont l'air légèrement rasés.",
            "action": "Égoutter immédiatement et continuer. L'étape de débâcle doit être brève pour compenser."
          }
        ]
      },
      "feelCue": "Ramassez un grain et appuyez-le entre deux ongles — il devrait casser avec une légère résistance au centre (pas crayeux-dur, pas mushy-soft). Cela vous indique que l'hydratation a commencé correctement."
    },
    {
      "nodeId": "step_2",
      "action": "Feuilles",
      "inputs": [
        "soaked_rice"
      ],
      "outputState": "parboiled_rice",
      "instructions": "Portez une grande casserole d'eau bien salée à ébullition vigoureuse: l'eau doit goûter agréablement salée, comme l'eau de pâtes. Ajouter le riz trempé égoutté et cuire en remuant occasionnellement pendant 5 à 7 minutes. Le riz est prêt à être drainé lorsque chaque grain a augmenté de façon significative en longueur et est juste tendre à l'extérieur, mais a encore un noyau ferme, blanc, craie quand mordu. Le centre devrait encore avoir un coup. Égoutter immédiatement dans une fine calandre et rincer brièvement à l'eau fraîche pour arrêter la cuisson.",
      "visualCue": {
        "primaryTarget": "Chaque grain s'est allongé de façon significative et l'extérieur est cuit mais le centre montre encore une ligne blanche et crayeuse quand un grain est coupé en deux. Les grains sont longs, séparés et ne sont pas entassés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains n'ont pas beaucoup allongé et tout l'intérieur est crayeux et cru. Le grain résiste fortement quand il est mordu.",
            "action": "Continuer à bouillir 1-2 minutes de plus. Égoutter immédiatement lorsque le centre est à peine ferme — il a plus de cuisson avant dans la phase de vapeur."
          },
          {
            "state": "Perfect",
            "description": "Longs, grains séparés avec à peine visible blanc au centre quand mordu. La couche externe est cuite. Ils se sentent fermes, pas musclés, pas durs.",
            "action": "Égoutter et rincer immédiatement. Ne tardez pas — la chaleur résiduelle continuera à cuire."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont entièrement cuits sans centre ferme. Ils se sont peut-être séparés aux extrémités. Ils ont l'air gonflés et l'eau de cuisson est très féculente.",
            "action": "Égoutter immédiatement. La technique du tahdig fonctionnera encore, mais les grains peuvent se coller ensemble plus qu'idéal."
          }
        ]
      },
      "feelCue": "Agiter à travers un grain parboulé — il devrait avoir l'impression qu'il a une couche extérieure mince et cuite donnant place à un centre ferme et crayeux que vous pouvez sentir comme résistance sur vos molaires. Ce centre crayeux finira la cuisson pendant la phase vapeur."
    },
    {
      "nodeId": "step_3",
      "action": "Construire tahdig",
      "inputs": [
        "parboiled_rice",
        "ing_04",
        "ing_07"
      ],
      "outputState": "assembled_rice_pot",
      "instructions": "Dans un grand pot à fond lourd avec un couvercle serré, chauffer l'huile à feu moyen. Si vous utilisez de la lave, placez une seule couche sur le fond du pot huilé, appuyez sur les bords. Si vous utilisez de la pomme de terre, couchez de fines tranches sur la base. Ajouter 2 grosses cuillerées de riz et tartiner pour couvrir la lave. Découpez le reste du riz en forme de cône sur le dessus — ne le pressez pas ou ne l'emballez pas. Créer de 5 à 6 trous à travers le monticule de riz avec la poignée d'une cuillère en bois pour permettre à la vapeur de monter d'en bas. Enveloppez fermement le couvercle du pot dans un chiffon de cuisine propre (qui absorbe la vapeur et empêche la condensation de retomber sur le riz).",
      "visualCue": {
        "primaryTarget": "Une pyramide de grains de riz pâles, séparés, bombés dans le pot. La lave ou la couche de pomme de terre juste visible aux bords autour de la base de riz. Trous à vapeur visibles à travers le monticule.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz a été emballé à plat plutôt que bombé. Pas de trous de vapeur. Le tissu du couvercle a été omis.",
            "action": "La forme du cône et les trous de vapeur assurent une circulation uniforme de la vapeur et empêchent le dessus de sécher avant les croustilles du fond."
          },
          {
            "state": "Perfect",
            "description": "Un fier cône de riz avec 5 à 6 canaux à vapeur. Lavash visible aux bords. Couvercle enveloppé et serré.",
            "action": "Cuire à feu moyen-élevé pendant 5 minutes pour commencer le tahdig, puis réduire à feu minimum absolu pendant 45 minutes."
          },
          {
            "state": "Overdone",
            "description": "Trop de beurre a été ajouté au fond et le riz est assis dans une piscine d'huile plutôt qu'un mince, même revêtement.",
            "action": "Verser l'excès — trop de graisse rend le tahdig gras et dense plutôt que croquant."
          }
        ]
      },
      "feelCue": "Lorsque vous placez votre main près du côté de la casserole après 10 minutes de vapeur, vous devez vous sentir stable, même la chaleur — pas la chaleur intense. Si le pot est très chaud sur le côté, la chaleur est trop élevée et le tahdig peut être brûlant plutôt que croquant."
    },
    {
      "nodeId": "step_4",
      "action": "La vapeur et l'infusion",
      "inputs": [
        "assembled_rice_pot",
        "ing_03",
        "ing_05"
      ],
      "outputState": "finished_persian_rice",
      "instructions": "Après 5 minutes à feu moyen-élevé, réduire à un minimum absolu (utiliser un diffuseur de chaleur si disponible). Steam pendant 45 minutes. Pendant que le riz s'évapore, faire fleurir le safran dans l'eau chaude pendant 5 minutes, puis mélanger avec 2 cuillères à soupe de beurre fondu. À la marque de 45 minutes, retirer le couvercle et arroser le beurre de safran sur 3–4 cuillères de riz dans un bol séparé — mélanger pour enrober, puis remettre ce riz doré-orange au dessus de la casserole comme garniture. Remplacer le couvercle pendant 5 minutes. Pour servir : inverser le pot sur un grand plateau rond en un mouvement décisif. Le tahdig devrait se libérer avec un bruit satisfaisant.",
      "visualCue": {
        "primaryTarget": "Une fois inversée : une croûte dorée (tahdig) sur le dessus entourée du riz blanc. Le tahdig doit être uniformément doré-ambre et croustillant, pas pâle, pas brûlé. Le riz au teint safran offre des stries oranges profondes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le tahdig est d'or pâle ou même blanc. Il n'a pas complètement croqué et peut avoir collé à la casserole. Le riz a l'air cuit à la vapeur mais la base n'a pas développé de couleur.",
            "action": "Retournez le pot à droite et faites cuire sur le milieu pendant 10 minutes de plus. Vérifiez en soulevant le bord avec une spatule mince."
          },
          {
            "state": "Perfect",
            "description": "Une fois inversée : une belle croûte dorée qui libère proprement. Le riz blanc est moelleux et séparé. Le riz safran orange foncé offre un contraste de couleur. La cuisine sent le safran, le beurre et le riz grillé.",
            "action": "Servir immédiatement — le contraste du tahdig croustillant et du riz moelleux est préférable dans les 10 minutes suivant le démolage."
          },
          {
            "state": "Overdone",
            "description": "Le tahdig est très brun foncé ou noir au centre. Une odeur brûlée venait de la casserole pendant la vapeur.",
            "action": "Enlevez la couche brûlée — le riz au-dessus n'est habituellement pas affecté. Le reste du tahdig autour des bords peut encore être parfaitement doré et croquant."
          }
        ]
      },
      "feelCue": "Au moment où le pot frappe le plateau pendant l'inversion, vous devriez entendre un bruit creux et sentir le changement de poids lorsque le riz tombe loin du fond. Soulevez le pot lentement — si le tahdig se libère proprement, vous entendrez un son doux et croustillant comme la croûte se sépare du métal."
    }
  ]
};
