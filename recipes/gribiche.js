export default {
  "repoId": "master_french_gribiche_001",
  "parentRepoId": null,
  "slug": "gribiche",
  "author": "ForkRecipe Kitchen",
  "title": "Gribiche de sauce",
  "description": "Une sauce française froide construite sur des jaunes d'œufs durs émulsifiés comme une mayonnaise, puis trempés de câpres, de cornichons et d'un enchevêtrement d'herbes fines — brillamment brillamment, brillants et texturés.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "sauces",
  "tags": [
    "français",
    "Sauce froide",
    "œufs",
    "Câpres",
    "herbes",
    "bistrot",
    "classique"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 3,
    "bitter": 1,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Oeufs durs (gros)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Moutarde de Dijon",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "moutarde à grains entiers"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "Vinaigre de Champagne"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile neutre (fleur de soleil ou graines de raisin)",
      "ratioValue": 75,
      "defaultUnit": "parts",
      "substitutions": [
        "huile d'olive légère"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Câpres, rincées et hachées approximativement",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "baies de câpres, coupées en tranches"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Cornichons, tranchés finement en rondelles",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "petits cornichons d'aneth"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Persil à feuilles plates, haché finement",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Estragon frais, haché finement",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Estragon séché (utiliser moitié)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Cerveau frais, finement haché",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "persil extra-plat"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Bouillir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "hard_boiled_eggs",
      "instructions": "Abaissez les œufs doucement dans l'eau bouillante et faites cuire exactement 11 minutes. Transférez immédiatement dans un bain de glace pendant 5 minutes, ce qui arrête la cuisson et facilite le pelage. Peler sous l'eau froide courante. Couper chaque œuf et lever soigneusement les jaunes entiers. Mettez les blancs de côté sur une planche à découper. Les jaunes doivent être entièrement fixés mais toujours cireux au centre, et non crayeux ou miettes.",
      "visualCue": {
        "primaryTarget": "Yolk est un or pâle uniforme dans l'ensemble, sans anneau gris-vert au bord et sans centre humide translucide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le jaune a un noyau orange translucide et jammy qui n'a pas été complètement réglé. Le blanc peut encore être légèrement doux près du jaune.",
            "action": "Retournez les oeufs à l'eau mijotante pendant 2 minutes, puis plongez dans le bain de glace."
          },
          {
            "state": "Perfect",
            "description": "Yolk est entièrement serti et cireux, jaune pâle-or dans l'ensemble, avec un extérieur légèrement poudreux, presque miettes lorsqu'il est pressé légèrement.",
            "action": "Procéder à la séparation et au tamisage des jaunes; couper les blancs en morceaux bruts de 5 mm et réserver."
          },
          {
            "state": "Overdone",
            "description": "Yolk est complètement sec et farineux avec un anneau sulfureux gris-vert à l'extrémité. Ça sent peu l'excès dur.",
            "action": "La sauce fonctionnera encore, mais l'émulsion sera légèrement plus granuleuse. Continuez et fouettez vigoureusement pour l'aplanir."
          }
        ]
      },
      "feelCue": "Appuyez fermement sur un œuf pelé entre le pouce et l'index — il doit céder sans éclater, dense et légèrement sprinté, pas spongieux ou humide à l'intérieur."
    },
    {
      "nodeId": "step_2",
      "action": "Émulsifier",
      "inputs": [
        "hard_boiled_eggs",
        "ing_02",
        "ing_03",
        "ing_10"
      ],
      "outputState": "yolk_emulsion",
      "instructions": "Appuyez sur les jaunes d'œufs à travers un tamis à mailles fines dans un bol, ou mâchez-les très soigneusement avec une fourchette jusqu'à ce qu'il ne reste absolument plus de grumeaux. Ajouter la moutarde de Dijon et le vinaigre blanc. Assaisonner de sel. fouetter vigoureusement jusqu'à ce que le mélange soit lisse, épais et complètement homogène — il ressemblera à une pâte très raide, jaune pâle.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse et cohésive jaune pâle sans grumeaux de jaune visible, assez épaisse pour se poser sur une cuillère sans relâcher.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les lumps de jaune sont encore visibles dans toute la pâte. Le mélange est inégal dans la couleur et la texture.",
            "action": "Passer à nouveau dans le tamis, ou continuer à battre et fouetter. Lumps créera des taches cassées dans l'émulsion finie."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, pâte d'or pâle uniforme. Il tient sa forme sur un fouet mais tombe lentement lorsque le fouet est inversé. Pas de grain.",
            "action": "Commencez à ajouter de l'huile goutte à goutte tout en fouettant constamment."
          },
          {
            "state": "Overdone",
            "description": "La pâte a l'air mince et humide, comme si elle avait déjà commencé à se séparer.",
            "action": "Ajouter une pincée plus de moutarde et quelques gouttes de vinaigre et continuer à fouetter pour re-resserrer avant d'ajouter de l'huile."
          }
        ]
      },
      "feelCue": "Exécutez un doigt dans la pâte — il devrait glisser proprement comme un hummus épais, laissant un sentier distinct avec des bords définis qui maintiennent leur forme pendant plusieurs secondes."
    },
    {
      "nodeId": "step_3",
      "action": "Whisk",
      "inputs": [
        "yolk_emulsion",
        "ing_04"
      ],
      "outputState": "gribiche_base",
      "instructions": "Travailler exactement comme pour une mayonnaise : commencer à ajouter l'huile neutre dans un filet mince et stable tout en fouettant constamment. Le premier 30 ml est critique — ajoutez-le goutte à goutte pour établir l'émulsion. Une fois que le mélange devient épais et opaque et que les feuilles de fouet marquent le sillon, vous pouvez ajouter le reste de l'huile dans un cours d'eau mince et stable. Le temps de sifflement total est de 3 à 4 minutes. Ne précipitez pas l'addition de pétrole.",
      "visualCue": {
        "primaryTarget": "Une émulsion épaisse, crémeuse, jaune ivoire qui tient des pics raides sur le fouet et ne coule pas lorsque le bol est incliné — identique dans le corps à une mayonnaise ferme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile est mise en commun à la surface ou la sauce a l'air cassée — une flaque jaune lisse et grasse avec des caillés blancs.",
            "action": "Arrêtez d'ajouter de l'huile immédiatement. fouetter un jaune d'oeuf frais avec une pincée de moutarde dans un bol propre, puis fouetter lentement la sauce cassée pour y sauver l'émulsion."
          },
          {
            "state": "Perfect",
            "description": "L'émulsion est opaque, crémeuse et raide. Lorsqu'une cuillère est tirée à travers elle, le sillon tient les bords propres et tranchants pendant plusieurs secondes.",
            "action": "La base est prête. Plier dans les garnitures dans la prochaine étape."
          },
          {
            "state": "Overdone",
            "description": "Trop d'huile ajoutée trop rapidement — l'émulsion est devenue cireuse et solide, ou elle a cassé sous le poids de l'excès de graisse.",
            "action": "fouetter dans une cuillère à café d'eau froide ou de vinaigre pour se détendre. Si elle est cassée, recommencer avec un jaune d'œuf frais comme ci-dessus."
          }
        ]
      },
      "feelCue": "La résistance sur le fouet doit se construire de façon remarquable, car l'émulsion se serre — à la fin, il faut un effort physique réel pour faire glisser le fouet dans la sauce."
    },
    {
      "nodeId": "step_4",
      "action": "Plier",
      "inputs": [
        "gribiche_base",
        "hard_boiled_eggs",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "sauce_gribiche",
      "instructions": "Hacher finement les blancs d'oeufs réservés à un dés de 5 mm rugueux — pas une fine menthe, vous voulez de la texture. À l'aide d'une spatule en caoutchouc, plier les blancs d'oeufs hachés, les câpres, les rondelles de cornichon, le persil, l'estragon et le cerveau dans la base de l'émulsion. Plier délicatement avec un mouvement d'écopage du fond du bol — vous voulez une distribution uniforme sans déflatter la sauce. Boucher et corriger: plus de vinaigre si elle a besoin de lever, plus de sel si elle a un goût plat. Servir à température ambiante dans l'heure qui suit la fabrication.",
      "visualCue": {
        "primaryTarget": "Une sauce ivoire-crème visiblement clouée avec des paillettes d'herbes vertes, des morceaux d'œufs blancs, des rondelles de câpres foncées et des disques de cornichon pâles – nettement texturés, non lisses.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est uniforme et crémeuse avec des garnitures à peine visibles, empilées à la surface plutôt que distribuées dans toute la base.",
            "action": "Continuez à plier — assurez-vous que la spatule atteint le fond du bol à chaque course. Faites tourner le bol comme vous piez."
          },
          {
            "state": "Perfect",
            "description": "Chaque cuillère montre une mosaïque d'herbes, de câpres, de cornichons et de morceaux blancs d'oeuf distribués uniformément à travers la base crémeuse et parfumée de moutarde.",
            "action": "Reposez-vous à température ambiante pendant 10 minutes pour laisser les saveurs se fondre avant de servir avec du poisson poché, des viandes froides ou des asperges."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été brassée plutôt que pliée — la texture est devenue homogène et pâteuse, les blancs d'œufs se sont désintégrés dans la base.",
            "action": "La saveur sera excellente. Servir comme-est, ou plier dans quelques blancs d'oeufs hachés supplémentaires pour restaurer le contraste textural."
          }
        ]
      },
      "feelCue": "La sauce finie devrait enrober fortement l'arrière d'une cuillère et tenir les morceaux d'herbe en suspension — pas aqueux, pas raide, quelque part entre une mayonnaise lâche et une épaisse ravigote."
    }
  ]
};
