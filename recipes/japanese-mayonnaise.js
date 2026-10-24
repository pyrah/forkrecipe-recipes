export default {
  "repoId": "master_japanese_japanesemayonnaise_001",
  "parentRepoId": null,
  "slug": "japanese-mayonnaise",
  "author": "ForkRecipe Kitchen",
  "title": "Mayonnaise japonaise (Kewpie-Style)",
  "description": "Une mayonnaise plus soyeuse, plus riche, plus intensément umami que son cousin occidental — faite avec des jaunes d'oeufs seulement, vinaigre de riz au lieu de blanc, un murmure de MSG, et une touche de dashi — ivoire pâle, voluptueux, et profondément salé.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "condiments",
  "tags": [
    "mayonnaise",
    "Japonais",
    "kewpie",
    "condiment",
    "émulsion",
    "umami",
    "jaune"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 3,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Binder",
      "name": "Jaunes d'oeufs, grandes (à température ambiante)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile neutre (sapin de riz ou graines légères)",
      "ratioValue": 600,
      "defaultUnit": "parts",
      "substitutions": [
        "huile de tournesol",
        "huile d'avocat"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "vinaigre de riz (sans saison)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de cidre de pomme — utiliser légèrement moins"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Moutarde de Dijon",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "poudre sèche de moutarde anglaise (utiliser moitié)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Glutamate",
      "name": "MSG (glutamate de monosodium)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "1,5 partie sel de mer fin (moins de profondeur d'umami)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Dashi (facultatif – ajoute la profondeur subtile de l'umami)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fouetter",
      "inputs": [
        "ing_01",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "yolk_base",
      "instructions": "Assurez-vous que vos jaunes d'œufs sont à température ambiante — les jaunes froids résistent à l'émulsion et se brisent plus facilement lorsque l'huile est ajoutée. Placez les jaunes dans un bol moyen sur un chiffon humide pour éviter qu'il glisse. Ajouter le vinaigre de riz, la moutarde de Dijon, le MSG et le sel. fouetter vigoureusement pendant 60 secondes jusqu'à ce que le mélange soit pâle, légèrement épaissi et complètement homogène. La moutarde n'est pas seulement pour la saveur — elle contient de la lécithine, un émulsifiant naturel qui renforce la lécithine déjà dans les jaunes et vous donne plus de latitude lors de l'ajout de l'huile. Le sifflement préliminaire commence à former la matrice d'émulsion avant toute addition d'huile.",
      "visualCue": {
        "primaryTarget": "Un mélange jaune pâle, légèrement mousseux qui tombe du fouet dans un ruban épais et lent plutôt que de s'écouler comme du liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est mince, aqueux et se sépare quand le fouet est levé — les jaunes ne sont pas encore bien battus.",
            "action": "fouetter plus vigoureusement pendant 30 à 45 secondes jusqu'à ce que le mélange s'épaississe et devienne plus pâle."
          },
          {
            "state": "Perfect",
            "description": "Jaune pâle, légèrement épaissi. Des chutes du fouet dans un ruban épais et lent qui tient sa forme sur la surface pendant un moment avant de se replier.",
            "action": "Commencez à ajouter de l'huile dans un ruisseau très mince et lent."
          },
          {
            "state": "Overdone",
            "description": "Très épaisse et très mousseuse, trop battue. La matrice d'émulsion fonctionnera encore mais la mayo sera moins lisse.",
            "action": "Procéder — la mousse s'intégrera lors de l'ajout d'huile."
          }
        ]
      },
      "feelCue": "Frottez une goutte de la base du jaune entre vos doigts — il devrait se sentir légèrement lissé et envelopper votre peau dans un film mince et persistant, contrairement à la sensation liquide d'un jaune imbattable."
    },
    {
      "nodeId": "step_2",
      "action": "Émulsionner",
      "inputs": [
        "yolk_base",
        "ing_02"
      ],
      "outputState": "emulsified_mayo",
      "instructions": "L'addition d'huile est l'étape critique : le premier 25% de l'huile doit aller très lentement ou l'émulsion se brisera. Commencez par ajouter l'huile goutte à goutte — littéralement une goutte à la fois — tout en fouettant constamment. Continuer la chute par goutte pour les 50 à 75 premiers ml d'huile. Comme l'émulsion s'établit et que le mélange s'épaissit visiblement et devient plus pâle, vous pouvez augmenter jusqu'à un flux très mince et stable. Une fois que vous avez ajouté la moitié de l'huile et la mayonnaise semble épaisse et stable, vous pouvez ajouter le reste de l'huile dans un cours d'eau mince mais stable, fouettant continuellement. Si, à un moment donné, le mélange a l'air brillant, gras ou commence à se masturber avec de l'huile plutôt que de l'incorporer, arrêtez d'ajouter de l'huile et fouettez vigoureusement pendant 30 secondes avant de continuer. Si vous avez un mélangeur de stands ou un mélangeur d'immersion, vous pouvez ajouter l'huile dans un flux mince pendant que la machine tourne — l'agitation constante est équivalente au fouettage.",
      "visualCue": {
        "primaryTarget": "Un épais, ivoire pâle, mayo brillant qui s'accroche aux parois du bol et s'éloigne proprement du fouet en rubans épais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mayo est encore mince et légèrement transparent — pas assez d'huile incorporée encore, ou il est trop froid.",
            "action": "Continuez à ajouter de l'huile très lentement. L'émulsion s'épaissira avec plus d'huile."
          },
          {
            "state": "Perfect",
            "description": "Épais, ivoire pâle, voluptueux. Clings sur les côtés du bol. Des chutes du fouet dans des poupées épaisses et brillantes. Prend sa forme quand une cuillère est traînée à travers elle.",
            "action": "Ajoutez le dashi en option, goûtez et assaisonnez."
          },
          {
            "state": "Overdone",
            "description": "L'émulsion s'est brisée — le mélange semble gras, caillé, ou l'huile se mélange à la surface et se sépare.",
            "action": "Dans un bol propre, fouetter un jaune frais avec une cuillère à café de moutarde. Puis fouetter très lentement le mélange cassé dans le jaune frais, tomber à goutte, pour réémulsionner."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère à travers la mayo finie — elle devrait se déplacer avec une résistance douce, comme une crème ferme, et le canal laissé derrière devrait tenir sa forme plutôt que s'effondrer immédiatement en arrière."
    },
    {
      "nodeId": "step_3",
      "action": "Assaisonner",
      "inputs": [
        "emulsified_mayo",
        "ing_07"
      ],
      "outputState": "finished_japanese_mayo",
      "instructions": "Ajouter une cuillère à café à la fois, en dégustant après chaque ajout. Le dashi ajoute un umami de fond subtil qui arrondit et approfondit la saveur, caractéristique de la complexité qui rend le style kewpie mayo si convaincant. Goûtez soigneusement la mayo finie : elle doit être riche et profondément salée, avec une acidité vive et légère du vinaigre de riz (notamment plus douce que la mayonnaise occidentale), et une finale umami plus longue du MSG. Ajuster avec plus de sel, vinaigre de riz ou MSG au besoin. Transférer dans un pot propre et hermétique. La mayo de style japonais se conserve au réfrigérateur pendant 2 semaines. Il peut également être transféré dans une bouteille de pression pour le style distinctif de service Kewpie.",
      "visualCue": {
        "primaryTarget": "ivoire pâle à jaune tendre, très épais et brillant, avec un léger reflet. Des chutes d'une cuillère dans une poupée lente et ininterrompue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mayo goûte plat, seulement de l'huile — pas assez d'acide, de sel, ou de MSG pour élever la saveur.",
            "action": "Ajouter le vinaigre de riz quelques gouttes à la fois, jusqu'à ce que la saveur s'éclaircisse. Ajouter plus MSG pour la profondeur de l'umami."
          },
          {
            "state": "Perfect",
            "description": "Riche, voluptueux, légèrement goudronné, profondément salé, avec un fini umami propre et persistant. ivoire pâle, brillant et très épais.",
            "action": "Transférer dans un pot hermétique et réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "Trop aigre ou trop salé à cause de l'assaisonnement.",
            "action": "fouetter une petite quantité d'huile fraîche neutre pour diluer l'excès d'assaisonnement. Ajustez l'équilibre en conséquence."
          }
        ]
      },
      "feelCue": "Prenez un petit goût sur l'extrémité de votre doigt — la mayo devrait enrober votre langue dans un film riche qui fond lentement, laissant une longue finale salée plutôt que de disparaître immédiatement comme une sauce fine."
    }
  ]
};
