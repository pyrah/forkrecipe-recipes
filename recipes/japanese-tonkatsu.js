export default {
  "repoId": "master_japanese_japanesetonkatsu_001",
  "parentRepoId": null,
  "slug": "japanese-tonkatsu",
  "author": "ForkRecipe Kitchen",
  "title": "Tonkatsu japonais",
  "description": "Une découpe épaisse de longe de porc, enrobée d'une coquille de panko qui se brise au couteau, le contraste entre la croûte crépitante et l'intérieur juteux, à peine rose, est toute la philosophie de tonkatsu.",
  "cuisine": "Japonais",
  "culture": "Yoshoku",
  "category": "proteins",
  "tags": [
    "protéine",
    "porc",
    "Japonais",
    "Panko",
    "frits",
    "croustillant"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "45 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Côtes de longe de porc, désossées ou désossées, d'une épaisseur de 2 cm",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "Médaillons de filet de porc",
        "cuisse de poulet"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Pâte à pain Panko",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "chapelure fraîche (texture différente)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Farine à usage général",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "Farine de riz pour croûte plus légère"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Oeufs battus",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": [
        "oeuf battu avec 1 c. à thé de lait"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile neutre pour friture profonde (végétable/canola)",
      "ratioValue": 800,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel et poivre blanc",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "sauce Tonkatsu (à base de worcestershire)",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": [
        "Mélange: 2 c. à thé Worcestershire + 1 c. à thé ketchup + 1 c. à thé sauce soja"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation",
      "inputs": [
        "ing_01",
        "ing_06"
      ],
      "outputState": "prepared_cutlets",
      "instructions": "À l'aide d'un couteau tranchant, marquer le bouchon de graisse de chaque découpe à des intervalles de 1cm, ce qui empêche la découpe de friser dans l'huile. Si vous utilisez des côtelettes de longe épaisses, utilisez un maillet de viande ou une broche de laminage pour battre une épaisseur de 1,5 à 2 cm entre deux feuilles d'enveloppe plastique. Assaisonner généreusement les deux côtés de sel et de poivre blanc. Laisser reposer les cutlets à température ambiante pendant 15 minutes — une cutlet froide fera baisser la température de l'huile et se traduira par un pain gras et non croquant.",
      "visualCue": {
        "primaryTarget": "Coupettes d'épaisseur uniforme avec bonnets gras marqués. La surface est sèche et assaisonnée uniformément.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La découpe est inégale — épaisse au centre, fine aux bords. Le bouchon de graisse n'est pas coloré.",
            "action": "Pound encore pour sortir. Noter le bouchon de graisse tous les 1cm."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur uniforme. Le gras est marqué. La surface est sèche au toucher et assaisonnée uniformément.",
            "action": "Installez la station de panification et continuez."
          },
          {
            "state": "Overdone",
            "description": "La découpe est trop fine — moins de 1 cm.",
            "action": "Réduire le temps de cuisson à 2 minutes de chaque côté. Le risque de surcuisson est plus élevé."
          }
        ]
      },
      "feelCue": "La découpe doit se sentir ferme et dense. S'il se sent spongieux ou humide, tapez - le à nouveau à sec — l'humidité de surface est l'ennemi d'une croûte de panko croustillante."
    },
    {
      "nodeId": "step_2",
      "action": "Pain",
      "inputs": [
        "prepared_cutlets",
        "ing_03",
        "ing_04",
        "ing_02"
      ],
      "outputState": "breaded_cutlets",
      "instructions": "Installez une station de panification en trois étapes : farine dans un plat peu profond, oeuf battu en seconde, panko en troisième. Draguer chaque découpe dans la farine, secouer chaque trace d'excès — trop de farine fait une pâte collante sous l'œuf. Plonger dans l'œuf, laisser couler l'excès, puis presser fermement dans le panko des deux côtés, presser doucement les miettes avec votre paume pour assurer l'adhésion. Le revêtement doit être épais et même, pas patchy.",
      "visualCue": {
        "primaryTarget": "Une couche épaisse et uniforme de panko couvrant chaque surface. Pas de taches nues de porc visibles. Les miettes se tiennent debout, non pressées à plat.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pain mince ou patchy. Des taches de viande minces visibles. Les miettes tombent.",
            "action": "Reprendre l'oeuf et presser à nouveau dans le panko. Réfrigérer pendant 10 minutes — cela aide l'ensemble de pain."
          },
          {
            "state": "Perfect",
            "description": "Une couverture panko épaisse, uniforme. On dirait qu'il a été emballé dans la neige. Les miettes sont molles et fières.",
            "action": "Faire frire immédiatement ou réfrigérer à découvert pendant 30 minutes."
          },
          {
            "state": "Overdone",
            "description": "Le pain est écrasé plat et compacté, sans texture.",
            "action": "Flaquez doucement la surface avec le bout des doigts. Les miettes qui se lèvent sont celles qui souffleront et croustillant."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur la coupe panquée — le panko devrait se sentir comme un oreiller ferme et sec. S'il est mouillé ou s'il glisse, l'œuf n'est pas suffisamment drainé avant le panage."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "breaded_cutlets",
        "ing_05"
      ],
      "outputState": "fried_tonkatsu",
      "instructions": "Chauffer l'huile dans un pot ou un wok lourd à 170°C (350°F). Testez avec une miette de panko – elle devrait couler, étourdir immédiatement et monter à la surface dans les 3 secondes. Abaissez la découpe lentement, loin de vous, et faites frire pendant 3 minutes de chaque côté sans toucher. À 170°C, la croûte se met avant que les cuissons intérieures ne surgissent. Augmenter la température à 180°C (355°F) pendant les 30 dernières secondes afin de mettre l'extérieur à une couleur dorée profonde. Égoutter sur un porte-fils — pas des serviettes en papier, qui piègent la vapeur et adoucissent la croûte.",
      "visualCue": {
        "primaryTarget": "Deep ambre-or, même couleur sur toute la découpe. La croûte de panko est rigide et très croustillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Une croûte blonde pâle. Les miettes de panko sont encore en or blanc ou très léger. L'intérieur peut encore être brut.",
            "action": "Retournez à l'huile. La croûte n'est pas faite avant qu'elle soit dorée, pas blonde."
          },
          {
            "state": "Perfect",
            "description": "Riche, même ambre-or partout. La croûte est rigide, elle ne fléchit pas. Lors de la coupe, l'intérieur est blanc crémeux avec une faible bouffée rose au centre.",
            "action": "Égoutter sur une grille pendant 2 minutes. Couper et servir avec la sauce tonkatsu et le chou déchiqueté."
          },
          {
            "state": "Overdone",
            "description": "Croûte brun foncé avec des taches qui s'approchent brûlées. La cuisine sent l'huile surchauffée.",
            "action": "L'intérieur est probablement encore bien. Servir immédiatement — la croûte aura un goût amer si elle reste assise."
          }
        ]
      },
      "feelCue": "Tapotez la découpe finie avec votre pinceau — elle devrait sonner avec un coup creux et boisé. Si ça sonne terne et doux, il lui faut 60 secondes de plus dans l'huile."
    },
    {
      "nodeId": "step_4",
      "action": "Trancher",
      "inputs": [
        "fried_tonkatsu",
        "ing_07"
      ],
      "outputState": "finished_tonkatsu",
      "instructions": "À l'aide d'un couteau tranchant, couper le tonkatsu dans le sens transversal en bandes de 2 cm – le but est de préserver la croûte tout en révélant l'intérieur. Servir immédiatement avec de la sauce tonkatsu sur ou à côté, du chou frais finement déchiqueté et du riz japonais à grains courts à la vapeur. La croûte commencera à s'assouplir en 10 minutes, donc le timing est essentiel.",
      "visualCue": {
        "primaryTarget": "Des tranches diagonales propres révélant un intérieur juteux, blanc à pâle, encadré par la croûte ambre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'intérieur est nettement rose ou translucide. La viande est froide quand elle est touchée.",
            "action": "Le porc est mal cuit. Retourner la découpe (sans slice) à 180°C d'huile pendant 90 secondes de plus par côté."
          },
          {
            "state": "Perfect",
            "description": "L'intérieur est blanc avec le plus faible blush rose au point le plus épais — 65-68°C interne. Les jus sont dégagés. La croûte est très croustillante.",
            "action": "Servir dans les 5 minutes."
          },
          {
            "state": "Overdone",
            "description": "L'intérieur est entièrement blanc et sec. Aucune humidité visible sur la surface de coupe.",
            "action": "Servir avec de la sauce supplémentaire pour l'humidité. Encore délicieux — tonkatsu tolère mieux la cuisson que la plupart des préparations de porc."
          }
        ]
      },
      "feelCue": "La tranche devrait avoir l'impression de couper à travers un cracker croustillant pour atteindre quelque chose de productif — le contraste tactile d'une croûte brisée puis le porc tendre est le point entier."
    }
  ]
};
