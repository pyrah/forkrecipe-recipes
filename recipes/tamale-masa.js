export default {
  "repoId": "master_mexican_tamale-masa_001",
  "parentRepoId": null,
  "slug": "tamale-masa",
  "author": "ForkRecipe Kitchen",
  "title": "Tamale Masa",
  "description": "La fondation de chaque grand tamale — masa harina nixtamalisée battue avec du saindoux et du bouillon de poulet jusqu'à ce que la pâte soit assez légère pour flotter dans l'eau, prête à être étalée, remplie et vapeur.",
  "cuisine": "Mexicain",
  "culture": "Mexicain central",
  "category": "grains",
  "tags": [
    "Mexique",
    "Masa",
    "maïs",
    "Tamale",
    "végétarien",
    "Fête"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "3 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Masa harina (Maseca ou farine de maïs nixtamal fin)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "masa fraîche d'une tortilleria (skiper l'étape d'hydratation)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Lard, température ambiante",
      "ratioValue": 40,
      "defaultUnit": "%",
      "substitutions": [
        "raccourcissement des légumes (moins de saveur)",
        "huile de coco raffinée"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Stock de poulet chaud (ou stock de légumes)",
      "ratioValue": 90,
      "defaultUnit": "%",
      "substitutions": [
        "eau chaude avec sel ajouté"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Poudre de bouillon de poulet (facultatif, pour la profondeur)",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": [
        "MSG (utiliser la moitié du montant)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrate",
      "inputs": [
        "ing_01",
        "ing_03"
      ],
      "outputState": "hydrated_masa",
      "instructions": "Dans un grand bol, combiner la masa harina avec le stock chaud. Mélanger avec une cuillère en bois ou vos mains jusqu'à ce qu'il ne reste plus de farine sèche et qu'une pâte rugueuse et légèrement raide se forme. La masa devrait se sentir comme une épaisse argile de modélisation, cohésive mais pas encore lisse. Couvrir le bol d'une pellicule plastique ou d'un chiffon humide et laisser reposer la masa pendant 20 minutes. Ce reste permet à la farine de maïs nixtamalisée d'absorber complètement le liquide, de gonfler les amidons et de perdre la texture brute et poudreuse que la masa mélangée droite peut avoir.",
      "visualCue": {
        "primaryTarget": "Une pâte pâle et lisse de la couleur du maïs séché au soleil, sans poches sèches ni taches miettes, uniformément hydratée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Plaques sèches, émiettées ou pulvérulentes visibles; la pâte s'écroule lorsqu'elle est pressée.",
            "action": "Ajouter le stock chaud une cuillère à soupe à la fois et le travailler dans — la masa a besoin d'hydratation complète avant que la graisse est ajoutée."
          },
          {
            "state": "Perfect",
            "description": "Une pâte rigide, souple et uniformément humide qui tient ensemble lorsqu'elle est pressée mais n'est pas collante. Des odeurs de maïs nixtamal, terreux et faiblement alcalin.",
            "action": "Couvrir et reposer pendant 20 minutes pour finir d'absorber le liquide."
          },
          {
            "state": "Overdone",
            "description": "La toux est humide et molle, presque pâteuse — trop de liquide ajouté.",
            "action": "Saupoudrer de masa harina supplémentaire une cuillère à soupe à la fois et travailler à l'intérieur; le stade de battement de saindoux émulsifier une partie de l'humidité supplémentaire."
          }
        ]
      },
      "feelCue": "Appuyez sur une boule de golf de masa plat dans votre paume — il devrait tenir sa forme avec des bords propres, ne pas s'écrouler aux fissures ou coller agressivement à votre paume. L'odeur doit être chaudement terreuse, comme les tortillas de maïs, pas crue ou chimique."
    },
    {
      "nodeId": "step_2",
      "action": "Crème",
      "inputs": [
        "ing_02",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "whipped_lard",
      "instructions": "Dans un mélangeur de support muni de la fixation de la palette (ou à l'aide d'un mélangeur à main), battre le saindoux à température ambiante sur une hauteur moyenne de 3 à 4 minutes jusqu'à ce qu'il devienne blanc, moelleux et presque double en volume. Ajouter la poudre à pâte, le sel et le bouillon en option et battre une autre minute pour incorporer. Le saindoux doit avoir l'air d'une épaisse crème fouettée, légère, aérée et pâle. Cette étape d'aération est critique: l'air battu dans la graisse est ce qui finalement rend tamale masa léger et tendre, pas lourd et dense.",
      "visualCue": {
        "primaryTarget": "Le saindoux est devenu blanc et moelleux, presque doublé en volume, et tient des pics doux — on dirait de la crème fouettée ou un givre épais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Laard est encore translucide, l'air gras, et n'a pas pris de volume — il fera un tamale dense et gras.",
            "action": "Continuez à battre à grande vitesse; l'aération peut prendre de 4 à 5 minutes avec un mélangeur."
          },
          {
            "state": "Perfect",
            "description": "Blanc, comme un nuage, tient des pics doux, et se sent presque sans poids quand vous le scoop. L'augmentation du volume est visible et spectaculaire.",
            "action": "Commencez à ajouter la masa hydratée progressivement."
          },
          {
            "state": "Overdone",
            "description": "Le saindoux a surchauffé et a commencé à se séparer ou à redevenir huileux — cela arrive rarement mais peut se produire si le saindoux est trop froid et surchauffé par friction.",
            "action": "Laisser reposer à température ambiante pendant 5 minutes et battre brièvement à nouveau — il reviendra généralement ensemble."
          }
        ]
      },
      "feelCue": "Soulevez une cuillerée de saindoux fouettés et secouez la cuiller — il devrait gigoter comme de la mousse et se sentir presque plus léger que l'air. Le contraste avec le saindoux froid du bloc devrait être dramatique. C'est la transformation qui rend les tamales dignes d'être faites."
    },
    {
      "nodeId": "step_3",
      "action": "Plier",
      "inputs": [
        "hydrated_masa",
        "whipped_lard"
      ],
      "outputState": "beaten_tamale_masa",
      "instructions": "Avec le mélangeur fonctionnant sur support, ajouter la masa hydratée au saindoux fouetté en quatre ajouts, battant pendant 2 minutes entre chaque ajout. Le mélange aura l'air brut et cassé au début — continuez. Après toute la masa est ajoutée, battre la pâte combinée sur moyenne-élevée pendant 5–8 minutes, ajoutant le stock restant une cuillère à soupe à la fois si la pâte semble trop raide. La masa finie doit être lisse, souple et légère. Effectuez l'essai de flotteur : pincez une petite boule et déposez-la dans une tasse d'eau froide. Si elle flotte, la masa est prête. Si ça coule, continuez à battre et à aérer.",
      "visualCue": {
        "primaryTarget": "Une pâte pâle et moelleuse qui ressemble presque à une épaisse purée de pommes de terre — légère, aérée, sans grain, et un léger reflet de graisse émulsifiée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est rigide, granuleuse et lourde. L'essai du flotteur échoue: la boule coule immédiatement.",
            "action": "Continuez à battre; ajoutez aussi une cuillère à soupe à la fois — la pâte a besoin de plus d'aération et d'hydratation."
          },
          {
            "state": "Perfect",
            "description": "Doux, moelleux et léger. Une balle flotte avec confiance dans l'eau froide. Goûte agréablement de maïs et de sel, avec une richesse grasse qui ne se sent pas lourde.",
            "action": "Utiliser immédiatement ou couvrir et réfrigérer jusqu'à 2 jours; ramener à la température ambiante avant de s'étendre."
          },
          {
            "state": "Overdone",
            "description": "La masa a cassé et est grasse et brillante, la graisse se séparant visiblement du maïs.",
            "action": "Ajouter une cuillère à soupe de bouillon froid et battre à haute — souvent l'émulsion peut être sauvée; sinon, les tamales cuireont encore mais seront légèrement plus greasier."
          }
        ]
      },
      "feelCue": "Étendre une cuillère à soupe de masa sur un museau de maïs et le tenir jusqu'à la lumière — il devrait regarder presque translucide aux bords, aéré et mince. La texture de votre main devrait avoir l'impression d'étaler une légère crème au beurre sur un gâteau, et non de l'emballer."
    },
    {
      "nodeId": "step_4",
      "action": "Repos",
      "inputs": [
        "beaten_tamale_masa"
      ],
      "outputState": "rested_tamale_masa",
      "instructions": "Couvrez bien la masa battue avec un enveloppement plastique pressé directement contre sa surface pour éviter le séchage. Reposez-vous à température ambiante pendant 30 minutes avant de s'étendre sur des mulets de maïs trempés. Cette période de repos permet à la masa de se détendre, aux amidons de s'hydrater complètement et aux saveurs de se moeller. Pendant que la masa se repose, trempez vos défenses de maïs dans de l'eau chaude pendant au moins 30 minutes jusqu'à ce qu'elles soient entièrement pliables. Lorsqu'il est prêt à l'emploi, essuyer chaque tache et étendre la masa dans un mince rectangle d'environ 3 mm d'épaisseur, laissant une bordure au sommet et aux côtés. Remplir, plier et laisser la vapeur verticalement pendant 60 à 75 minutes jusqu'à ce que la masa s'éloigne proprement de la coque.",
      "visualCue": {
        "primaryTarget": "Masa est lisse, uniforme et opaque, sans écoulement ni fissure aux bords, avec une épaisseur constante sur tout le rectangle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Masa est encore trop chaud et raide du mélangeur de stand ; il déchire lorsqu'il se répand et ne adhère pas à la coque.",
            "action": "Repos plus long — 30 minutes est le minimum; jusqu'à 1 heure est très bien."
          },
          {
            "state": "Perfect",
            "description": "Masa s'étend doucement et uniformément avec l'arrière d'une cuillère, tient sa forme, et a une légère tackness qui saisit la coque.",
            "action": "Remplir et plier immédiatement; ne laissez pas la masa s'étendre exposée pendant plus de 10 minutes ou elle séchera aux bords."
          },
          {
            "state": "Overdone",
            "description": "Masa a été laissé à découvert et séché — fissuré à la surface, raide aux bords.",
            "action": "Agenouillez-vous dans une cuillère à soupe de bouillon chaud à réhydrater et lisser."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur le bout du doigt dans la masa à dispersion — il devrait revenir très légèrement, laissant seulement l'impression la plus faible. S'il ne ressort pas du tout, il peut être surhydraté; si l'impression reste nette et profonde, reposez-vous un peu plus longtemps. Un tamale fini, déballé du museau, devrait se détacher proprement — la pâte tirant du museau comme une lettre de son enveloppe."
    }
  ]
};
