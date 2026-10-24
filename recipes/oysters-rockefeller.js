export default {
  "repoId": "master_american_oysters_rockefeller_001",
  "parentRepoId": null,
  "slug": "oysters-rockefeller",
  "author": "ForkRecipe Kitchen",
  "title": "Huîtres Rockefeller",
  "description": "Des huîtres crues ont été cuites sur leur demi-coquille sous une couverture d'épinards crémeux, de Pernod et de chapelures dorées, le grand apéritif de la Nouvelle-Orléans de 1899, aussi riche que son nom.",
  "cuisine": "Américain",
  "culture": "Nouvelle-Orléans",
  "category": "seafood",
  "tags": [
    "Huîtres",
    "nouveaux-orléens",
    "américains",
    "cuits",
    "épinards",
    "Apéritif",
    "classique"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 1,
    "bitter": 2,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Huîtres fraîches sur la demi-coquille, farcies (côté tasse vers le haut)",
      "ratioValue": 12,
      "defaultUnit": "oysters",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Bébés épinards, lavés et séchés",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "cresson d'eau",
        "jeunes feuilles de persil à feuilles plates"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Échalotes et ail, hachées finement",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Solvent",
      "name": "Pernod ou Ricard liqueur d'anis",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "Vermouth sec",
        "vin blanc sec"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Estragon frais, feuilles seulement, hachées finement",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "cervil frais"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Starch",
      "name": "Panko chapelures et parmesan finement râpé, mélangé 2:1",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "chapelures simples et Pecorino"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saucisse",
      "inputs": [
        "ing_03",
        "ing_04"
      ],
      "outputState": "softened_shallots",
      "instructions": "Faire fondre le beurre dans une casserole à feu moyen. Ajouter l'échalote hachée et l'ail. Plongez doucement pendant 4 à 5 minutes, en remuant souvent, jusqu'à ce qu'il soit complètement translucide, doux et sucré. Les alliums doivent se dissoudre complètement dans le beurre — toute croûte résiduelle sera désagréable dans la garniture finale sur la chair délicate des huîtres. Assaisonner légèrement avec du sel.",
      "visualCue": {
        "primaryTarget": "Une piscine d'or au beurre avec une échalote et de l'ail complètement effondrés, clair de verre, sans morceaux blancs opaques.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les morceaux d'échalote sont encore opaques et fermes. L'odeur d'ail brut est importante.",
            "action": "Continuez à transpirer à feu doux. La garniture sera croustillante et gritty si les alliums ne sont pas complètement adoucis en premier."
          },
          {
            "state": "Perfect",
            "description": "Chaque morceau d'échalote et d'ail est translucide et tendre. Le beurre est d'or pâle et parfumé. Pas de brunissement sur la base de la poêle.",
            "action": "Ajouter les épinards dans de grandes poignées."
          },
          {
            "state": "Overdone",
            "description": "Les échalotes et l'ail ont la couleur de l'or aux bords. La poêle sent le toast et légèrement sucré.",
            "action": "Baissez immédiatement le feu et ajoutez les épinards — le brunissement se fondra dans la garniture finie, qui peut manipuler une petite quantité de couleur."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère dans la poêle — les échalotes doivent bouger comme du beurre ramolli, sans aucune résistance."
    },
    {
      "nodeId": "step_2",
      "action": "Réduire",
      "inputs": [
        "softened_shallots",
        "ing_02",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "rockefeller_topping",
      "instructions": "Ajouter le bébé épinard dans la casserole en grands lots, en jetant avec des pinces à flétrir chaque lot avant d'ajouter le prochain — il réduira à un quart de son volume brut. Une fois que tous les épinards sont flétris et que toute eau mise en commun s'est évaporée, versez dans le Pernod et laissez-le étourdir et réduire pendant 30 secondes. Ajouter la crème et augmenter à feu moyen-élevé. Incorporer et réduire jusqu'à ce que le mélange soit suffisamment épais pour qu'une cuillère en bois laisse un canal clair le long de la base de la casserole. Retirer du feu, remuer dans l'estragon et assaisonner soigneusement de sel et de cayenne.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse, vert foncé, brillante qui tient sa forme sur une cuillère plutôt que de couler comme une sauce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est encore aqueux et mince, courant librement hors de la cuillère. La crème n'a pas diminué. Le liquide en réserve est dans la casserole.",
            "action": "Continuer à feu moyen-vif, en remuant fréquemment jusqu'à ce que presque tout le liquide soit cuit. Une garniture humide diluera la liqueur d'huître et fera bouillir la chapelure immédiatement."
          },
          {
            "state": "Perfect",
            "description": "Pâte verte épaisse, cohésive et riche. Il tient une forme bombée sur une cuillère. Un canal clair dans la casserole quand traîné reste propre pendant 3 secondes. Sens d'anis, de crème et de légumes verts.",
            "action": "Retirer du feu — il continue à épaissir en refroidissant, alors arrêtez légèrement avant de penser que c'est fait."
          },
          {
            "state": "Overdone",
            "description": "La pâte a séché et commence à coller à la poêle en patchs. Les épinards sont presque noirs et sent la crème cuite.",
            "action": "Ajouter une petite touche de crème pour se détendre. La saveur sera plus intense mais toujours utilisable."
          }
        ]
      },
      "feelCue": "Déposer une cuillère sur une assiette froide — elle devrait tenir un dôme et ne pas s'étendre plus de 1 cm. Si elle circule, elle doit être réduite."
    },
    {
      "nodeId": "step_3",
      "action": "Assemblage",
      "inputs": [
        "ing_01",
        "rockefeller_topping",
        "ing_08"
      ],
      "outputState": "topped_oysters",
      "instructions": "Préchauffer le four à 220°C (425°F), ou préchauffer un gril/broiler à son réglage le plus élevé. Disposer les huîtres sur leurs demi-coquilles sur un plateau de cuisson rempli de sel de roche ou de papier cassé pour les maintenir à niveau — une huître inclinée perd toute sa liqueur précieuse. Spoon une généreuse cuillère à café du Rockefeller sur chaque huître, laissant une mince bordure de coquille exposée. La garniture doit être légèrement au-dessus du bord de la coque. Mélanger le panko-parmesan et disperser uniformément sur chaque huître.",
      "visualCue": {
        "primaryTarget": "Coquilles d'huîtres parfaitement planes sur le sel, chacune couronnée d'un dôme de remplissage vert foncé et d'une chute de neige de chapelure dorée pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Certaines huîtres sont inclinées et leur liqueur est épuisée. Fil d'Ariane pas encore appliqué. La garniture est inégalement répartie.",
            "action": "Niveler soigneusement chaque coquille — la liqueur qui se mêle à la garniture pendant qu'elle fait cuire est une saveur irremplaçable."
          },
          {
            "state": "Perfect",
            "description": "Tous les obus sont à niveau. Chacun est couronné d'un généreux dôme de remplissage qui recouvre l'huître entièrement. Fil d'Ariane- croûte parmesan appliquée uniformément sur le dessus.",
            "action": "Dans le four ou sous la grille immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Fil d'Ariane empilé trop épais, enterrant complètement la garniture et remplissant une croûte lourde. L'alcool d'huître a déjà commencé à se regrouper en coquilles inclinées.",
            "action": "Balayer l'excès de chapelure du haut, mettre les coquilles à niveau et cuire immédiatement."
          }
        ]
      },
      "feelCue": "Mordez chaque coquille avec un bout de doigt — il doit s'asseoir complètement à plat et non à la roche. Une coquille à bascule déversera sa liqueur à l'instant où la garniture fondra."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "topped_oysters"
      ],
      "outputState": "oysters_rockefeller",
      "instructions": "Cuire à 220°C (425°F) pendant 8-10 minutes, ou faire griller 3-4 minutes, jusqu'à ce que la garniture de la chapelure soit profondément dorée et que les bords de la chair d'huître commencent à peine à se friser. L'huître elle-même devrait encore être juteuse et juteuse — elle cuit presque entièrement à partir de la chaleur de la garniture au-dessus. Si vous utilisez un grilleur, observez constamment : il va de l'or à l'incendie en moins d'une minute.",
      "visualCue": {
        "primaryTarget": "Croûte de chapelure boursouflante, d'or profond, aux bords plus foncés. Un fil de vapeur qui monte de chaque coque. Les bords de l'huître sont très faiblement enroulés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les fils d'Ariane sont beige pâle et pas encore croquants. Le parmesan n'a pas fondu ni coloré. La chair d'huître est inchangée.",
            "action": "Retourner au four ou lever la grille près de la grille pendant 2 à 3 minutes. Les miettes de pain non cuites sont gommées, pas croquantes."
          },
          {
            "state": "Perfect",
            "description": "Croûte d'or profond avec bulle visible aux bords. Le Parmesan a formé une dentelle croustillante et caramélisée. Les bords de l'huître sont à peine enroulés — à peine. La chair à l'intérieur devrait encore être ramollie et tremblante.",
            "action": "Servir immédiatement sur le plateau rempli de sel — les coquilles sont extrêmement chaudes."
          },
          {
            "state": "Overdone",
            "description": "Les fils d'Ariane sont brun foncé à brûlé. La chair d'huître s'est considérablement contractée, s'éloignant de la coquille, elle semble sèche et caoutchouteuse.",
            "action": "Le goût de la croûte sera amer. Servir immédiatement — il n'y a pas de rétablissement pour une huître trop cuite."
          }
        ]
      },
      "feelCue": "Apportez une coquille près de votre oreille — vous devriez entendre faiblement le remplissage encore étourdissant. Ce étourdissement signifie que le centre est encore chaud et que l'huître est au bord de la perfection."
    }
  ]
};
