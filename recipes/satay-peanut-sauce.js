export default {
  "repoId": "master_thai_satay_peanut_sauce_001",
  "parentRepoId": null,
  "slug": "satay-peanut-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce aux arachides satay",
  "description": "Une sauce d'arachides grillées dissoutes dans du lait de coco avec de la pâte de curry rouge et du sucre de palme — assez épaisse pour enrober une brochette et laisser une goutte tremblante à l'extrémité, avec une chaleur qui se construit lentement à partir des chilis séchés du curry rouge plutôt que de frapper tout à la fois. C'est la sauce qui rend satay digne d'attente.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "sauces",
  "tags": [
    "sauce",
    "Thaï",
    "arachide",
    "satay",
    "noix de coco",
    "curry",
    "trempage-sauce"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Lait de coco, plein gras",
      "ratioValue": 250,
      "defaultUnit": "ml",
      "substitutions": [
        "crème de coco (plus riche, sauce plus épaisse)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Beurre d'arachide grillé, naturel (sans sucre ajouté)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "cacahuètes grillées finement moulues"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Pâte de curry rouge thaïlandaise (achat en magasin ou maison)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "pâte de curry de massaman (doux, plus profonds)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de palme, râpé",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brun",
        "Sucre de coco"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Pâte de tamarin, concentrée",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": [
        "jus de lime (brillant, moins profond)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "Sauce de poisson",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce soja légère"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Cacahuètes grillées, grossièrement broyées, pour garnitures",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Flacons de chili séchés, pour garnitures (facultatif)",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_01",
        "ing_03"
      ],
      "outputState": "bloomed_curry_coconut",
      "instructions": "Verser le lait de coco dans une petite casserole à feu moyen. Quand il commence à vapeur et montre les premiers signes de mijotage aux bords, ajouter la pâte de curry rouge. fouetter constamment pour casser la pâte et la disperser uniformément dans le lait de coco. Continuer à cuire à feu moyen pendant 3 à 4 minutes, en remuant régulièrement. Vous ne vous contentez pas de dissoudre la pâte — vous faites cuire le bord brut de ses piments séchés et des épices, les fleurissant dans la graisse de noix de coco comme vous fleuririez des épices dans l'huile. Le mélange passera de rouge-orange vif (pâte brute) à une terre cuite-orange plus profonde et plus riche que la pâte cuit. L'arôme passera de vif et cru à torréfié et complexe. Cette étape de floraison est ce qui sépare une sauce satay cuite d'une sauce simplement mélangée.",
      "visualCue": {
        "primaryTarget": "Un liquide profond de terre cuite-orange qui commence à se séparer légèrement à la surface — des points d'huile de chili rouge apparaissent dans la graisse de noix de coco.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte s'est dissoute mais le mélange est encore brillant, presque fluorescent orange et sent cru et vif, comme la pâte de curry non cuite.",
            "action": "Continuer la cuisson et remuer à feu moyen pendant encore 2 minutes. L'approfondissement de la couleur est l'indicateur."
          },
          {
            "state": "Perfect",
            "description": "Le mélange est un terre cuite-orange profond, légèrement fumé. La surface montre de petits points d'huile de chili rouge flottant dans la graisse de coco — la pâte a libéré ses huiles. L'arôme est arrondi et aromatique, pas vif.",
            "action": "Ajouter le beurre d'arachide, le sucre de palme, le tamarin et la sauce de poisson."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est brun foncé et l'huile de chili se sépare fortement. Le lait de coco a diminué de façon significative et le fond de la poêle présente des résidus de pâte foncée.",
            "action": "Ajouter 50 ml d'eau et remuer vigoureusement pour réémulsionner. Continuez avec la recette."
          }
        ]
      },
      "feelCue": "Lorsque vous remuez la noix de coco de curry fleurie et que vous soulevez la cuillère, elle devrait s'éloigner dans un mince film, même orange, plus visqueux que le lait de coco uni, avec une surface brillante. La vapeur doit sentir le chili cuit et la citronnelle, pas la pâte crue."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "bloomed_curry_coconut",
        "ing_02",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_peanut_sauce",
      "instructions": "Ajouter le beurre d'arachide au mélange de noix de coco de curry. Whisk vigoureusement à incorporer — le beurre d'arachide résistera d'abord, puis se combinera soudainement dans une sauce épaisse et uniforme. Ajouter le sucre de palme, la pâte de tamarin, la sauce de poisson et le sel. Incorporer constamment à feu moyen-doux pendant 2 à 3 minutes jusqu'à ce que le sucre se dissout et que tous les éléments soient complètement intégrés. La sauce s'épaissira à mesure qu'elle se réchauffe — ajuster la consistance avec de petits ajouts d'eau chaude si elle devient trop épaisse pour se verser facilement. La sauce finie doit couler d'une cuillère dans un ruban lourd et lent. Bouche et équilibre : si trop épais et sucré, ajouter une cuillère à café plus tamarin ; si trop tranchant, ajouter une pincée plus de sucre de palme ; si plat, quelques gouttes de sauce de poisson. L'équilibre à viser est riche-doux-légère-sour-profond-savoureux.",
      "visualCue": {
        "primaryTarget": "Une sauce épaisse, douce et chaude en terre cuite-orange qui tombe d'une cuillère dans un ruban lent et lourd sans casser.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre d'arachide n'a pas été entièrement incorporé — des stries visibles de beurre d'arachide pâle restent dans la base orange et la sauce est grumelée.",
            "action": "Continuer à fouetter à feu doux. Le beurre d'arachide a besoin de chaleur pour se détendre et incorporer complètement."
          },
          {
            "state": "Perfect",
            "description": "Une sauce en terre cuite-orange complètement lisse, opaque et uniforme. Il enveloppe fortement l'arrière d'une cuillère et tombe dans un ruban lent et intact. L'arôme est simultanément d'arachide, de noix de coco et d'épices de curry chaudes.",
            "action": "Retirer du feu, disperser les arachides concassées et les flocons de chili sur le dessus, et servir au chaud."
          },
          {
            "state": "Overdone",
            "description": "La sauce est devenue très épaisse et raide — elle ne se verse plus facilement et commence à ressembler à de la pâte d'arachide plutôt qu'à une sauce. L'huile d'arachide peut se séparer à la surface.",
            "action": "Arroser d'eau chaude, ajouter une cuillère à soupe à la fois et fouetter jusqu'à ce que la consistance désirée revienne."
          }
        ]
      },
      "feelCue": "Plonger une brochette satay ou l'arrière d'une cuillère dans la sauce finie et la soulever droit vers le haut – la sauce doit s'accrocher au bois ou au métal et former une seule goutte lente à l'extrémité qui tient pendant 3 à 4 secondes avant de tomber. Ce délai est le test de cohérence."
    },
    {
      "nodeId": "step_3",
      "action": "Dresser",
      "inputs": [
        "finished_peanut_sauce",
        "ing_08",
        "ing_09"
      ],
      "outputState": "plated_satay_sauce",
      "instructions": "Transférer la sauce d'arachide chaude dans un bol de service ou la verser dans un petit pot d'argile pour la présentation de la table. Éparpiller les arachides grillées à peu près broyées sur la surface — elles devraient être suffisamment épaisses pour fournir de la texture, mais pas si grandes qu'elles tombent d'un objet trempé. Ajouter une petite pincée de flocons de chili séchés pour la couleur et un soupçon visuel de chaleur. Servir au chaud aux côtés des brochettes grillées de poulet ou de porc satay, des rondelles de concombres frais et de l'ajad thaïlandais traditionnel (relish de concombre piquant). La sauce peut être préparée jusqu'à 3 jours à l'avance et réfrigérée — elle s'épaissira sur le refroidissement, mais revient à la bonne consistance lorsqu'elle est réchauffée avec un jet d'eau ou de lait de coco.",
      "visualCue": {
        "primaryTarget": "Un bol de terre cuite profond de sauce orange-brun brillant avec des décombres d'arachide visibles et des taches de chili sur la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est trop fine et les garnitures s'enfoncent immédiatement plutôt qu'en surface.",
            "action": "Si vous servez, la saveur est toujours correcte. Alternativement, revenir au feu et laisser mijoter 2 minutes de plus pour épaissir."
          },
          {
            "state": "Perfect",
            "description": "La sauce a le corps et tient la garniture d'arachide à la surface pendant au moins 30 secondes avant qu'ils coulent lentement. La surface est brillante et légèrement grasse à partir des graisses d'arachide et de noix de coco.",
            "action": "Servir dans les 30 minutes suivant la fabrication de la meilleure texture et température."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été laissée trop longtemps et une peau s'est formée à la surface. La couche supérieure est sèche et mate.",
            "action": "Incorporer la peau, ajouter une cuillère à soupe d'eau chaude et remuer pour restaurer la surface brillante."
          }
        ]
      },
      "feelCue": "Lorsque vous plongez une brochette de satay dans la sauce et que vous la tirez à travers vos lèvres, la sauce doit se sentir épaisse et légèrement grasse, enrobant l'intérieur de votre bouche d'une richesse chaude en noix d'arachide qui est suivie une seconde plus tard par la chaleur lente du curry rouge."
    }
  ]
};
