export default {
  "repoId": "master_mexican_red_enchilada_sauce_001",
  "parentRepoId": null,
  "slug": "red-enchilada-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce rouge d'enchilada",
  "description": "L'âme terreuse et rouge brique de la cuisine mexicaine – des anchos et des chiles de guajillos séchés grillés jusqu'à parfumé, puis mijotés d'ail, de cumin et de bouillon de poulet dans une sauce lisse et profondément aromatisée qui goûte de fruits secs, de fumée de bois, et la patience lente d'un comal en fonte.",
  "cuisine": "Mexicain",
  "culture": "Mexicain central",
  "category": "sauces",
  "tags": [
    "enchilada",
    "Mexique",
    "Chille sèche",
    "ancho",
    "Guajillo",
    "sauce",
    "Tolérance"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 2,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Spice",
      "name": "Chiles anchos (séchés, ensemencés)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "Mulato chile",
        "au Nouveau-Mexique"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Guajillo chiles (séchés, ensemencés)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "Chile de Californie séché",
        "le chile de cascabel"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail (non pelées)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "3 gousses d'ail grillées"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Graines de cumin entières, grillées et moulues"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Origan séché (Mexicaine, de préférence)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Origan méditerranéen"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Stocks de poulet (ou de légumes)",
      "ratioValue": 200,
      "defaultUnit": "parts",
      "substitutions": [
        "eau, avec une pincée supplémentaire de sel"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Lard ou huile neutre",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel de mer fin & poivre noir",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme (une éclaboussure, pour finir)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron vert"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "toasted_chiles",
      "instructions": "Chauffer une poêle sèche en fonte ou lourde à feu moyen-vif jusqu'à très chaud. Travaillant avec un ou deux chiles à la fois, pressez chaque chile ouvert, plat sur la surface sèche avec une spatule et maintenez-le enfoncé pendant 15 à 20 secondes jusqu'à ce qu'il blister, bouffe légèrement, et jette une gorgée de fumée qui sent les fruits secs et le chocolat. Flipez et appuyez sur l'autre côté pendant 10 secondes. Le chile aurait dû s'assombrir, devenir pliable, et sentir grillé, jamais acride. Lorsque vous terminez chacun, transférez-le dans un bol et couvrez-le d'eau simplement bouillie. Tremper de 20 à 25 minutes jusqu'à ce qu'il soit complètement doux. Égoutter, réserver le liquide absorbant.",
      "visualCue": {
        "primaryTarget": "Les Chiliens sont sombres, pliables et gonflés d'eau, non cassantes, et l'eau qui s'est trempée est devenue un rouge-vin profond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les Chiliens sont encore raides et cuireux après le trempage, l'eau à peine teintée, les chiles sentant crus et poussiéreux.",
            "action": "Faire tremper plus longtemps dans de l'eau plus chaude; les vieux chiles secs bénéficient de 30 à 40 minutes. La peau doit être complètement souple avant le mélange."
          },
          {
            "state": "Perfect",
            "description": "Chaque ciboulette se plie sans craquelure, la chair intérieure est soyeuse et sombre, et le liquide absorbant est un riche grenat rouge.",
            "action": "Égoutter et ajouter au mélangeur avec l'ail et le bouillon."
          },
          {
            "state": "Overdone",
            "description": "Les chiles ont été retenus trop longtemps sur le comal et sont brûlés noir, sentant amer et acride — ou l'eau qui s'est trempée s'est transformée en bouillie et en bouillie à cause de l'imprégnation excessive.",
            "action": "Jetez les chiles carbonisés-noirs. Pour les sursemets : égoutter, goûter au liquide de trempe et n'utiliser que s'il n'a pas le goût de moutarde."
          }
        ]
      },
      "feelCue": "Un chile bien grillé presse à plat contre la poêle avec une résistance sèche et papier, puis adoucit à mesure qu'il chauffe. La fumée qui s'élève doit sentir comme des raisins et du bois — à l'instant où elle sent agrippée ou amère, c'est fini; retournez immédiatement."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "toasted_chiles",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "blended_sauce",
      "instructions": "Rôtir à sec les gousses d'ail non pelées directement sur la poêle chaude jusqu'à ce que les peaux soient carbonisées en noir à l'extérieur et que les gousses soient douces dans les 6 à 8 minutes, en tournant occasionnellement. Éplucher les peaux carbonisées. Ajouter les chiles trempés, l'ail rôti, le cumin, l'origan et la moitié du bouillon dans un mélangeur. Mélanger en haut pendant 60 à 90 secondes jusqu'à ce qu'il soit complètement lisse. Commencez par une faible vitesse et augmentez progressivement pour éviter une explosion de liquide chaud. Ajouter plus de stock à travers le trou de couvercle si nécessaire pour garder le mélangeur fonctionner en douceur. La sauce sera presque rouge-violet à ce stade.",
      "visualCue": {
        "primaryTarget": "Une sauce lisse, rouge bourgogne profonde, sans peau ni pulpe de chile visible, qui coule librement dans le mélangeur sans attraper.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours volumineux, avec des fragments de peau visibles et une texture granuleuse; il file autour des lames sans se briser complètement.",
            "action": "Ajouter un peu plus de stock dans le couvercle et mélanger plus longtemps. Certains mélangeurs ont besoin de 2 minutes pour lisser les peaux de chile."
          },
          {
            "state": "Perfect",
            "description": "Une sauce rouge foncé soyeuse et versable, sans texture visible — lorsqu'elle est frottée entre les doigts, elle est parfaitement lisse.",
            "action": "Plongez dans un tamis moyen dans le pot, pressez avec une spatule."
          },
          {
            "state": "Overdone",
            "description": "La surchauffe à haute chaleur l'éclaircit en une orange pâle et mousseuse — l'air a été incorporé.",
            "action": "Laisser reposer une minute avec le couvercle; la mousse s'effondrera. La saveur n'est pas affectée."
          }
        ]
      },
      "feelCue": "Exécutez un doigt à l'intérieur du pot de mélange après avoir versé la sauce — si elle est malsaine, enfoncez la sauce. Si c'est soyeux, vous pouvez sauter la pression."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "blended_sauce",
        "ing_07"
      ],
      "outputState": "fried_sauce",
      "instructions": "Chauffer le saindoux ou l'huile dans une casserole moyenne à feu moyen-vif jusqu'à ce qu'il mijote. Versez soigneusement la sauce tendue dans la graisse chaude — elle éclaboussera considérablement, alors reculez et utilisez une cuillère ou un couvercle à main longue comme bouclier. Incorporer immédiatement et cuire la sauce dans la graisse chaude pendant 3 à 5 minutes, en remuant constamment. Cette étape de friture, appelée « frire la sauce » dans la cuisine traditionnelle mexicaine, la concentre, transforme le goût brut mélangé en quelque chose de plus profond et torréfié, et donne à la sauce un corps brillant. Ce n'est pas facultatif.",
      "visualCue": {
        "primaryTarget": "La sauce a approfondi en couleur à une brique rouge, est légèrement épaissie, et sent le chili grillé et le cumin terreux plutôt que le poivre brut mélangé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a l'air pâle et goûte cru et vif; aucun changement de couleur ou d'arôme de l'état mélangé.",
            "action": "Continuez à frire — pressez la sauce contre la surface de la poêle pendant que vous remuez pour maximiser le contact avec le métal chaud."
          },
          {
            "state": "Perfect",
            "description": "Une sauce rouge brique profonde, légèrement brillante de la graisse, avec un arôme concentré et complexe de fruits secs, de terre et d'épices.",
            "action": "Ajouter le reste du bouillon et laisser mijoter pour finir la sauce."
          },
          {
            "state": "Overdone",
            "description": "La sauce est collée dans des taches sombres et sent brûlé aux bords.",
            "action": "Ajouter immédiatement le stock pour déglacer et baisser la chaleur."
          }
        ]
      },
      "feelCue": "L'entrée de la sauce dans la graisse chaude est le moment le plus dramatique: garder la chaleur et remuer rapidement. En deux minutes, la violence se calme lorsque l'eau s'évapore et que la sauce s'installe dans un alevin aromatique régulier."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "fried_sauce",
        "ing_06",
        "ing_08",
        "ing_09"
      ],
      "outputState": "finished_red_enchilada_sauce",
      "instructions": "Ajouter le reste du bouillon dans la casserole, mélanger et laisser mijoter. Cuire 10 à 15 minutes jusqu'à ce que la sauce soit lisse, légèrement épaissie, enrober l'arrière d'une cuillère et verser dans un ruisseau lent et uniforme. Assaisonner de sel et de poivre. Ajoutez le vinaigre de cidre de pomme, goûtez et ajustez: il doit être terreux et profond avec une chaleur douce, de construction, légèrement sucré de l'ancho, et illuminé par un murmure d'acide. Fin avec plus de stock pour une sauce versable; laissez-la plus épaisse pour une couverture enchilada plus intense.",
      "visualCue": {
        "primaryTarget": "Une sauce lisse, rouge brique avec la consistance d'une soupe à la crème légère, laissant une couche propre sur le dos d'une cuillère et se fermant lentement quand un doigt est tiré à travers.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Eauux et pâle, avec un goût plat, poussiéreux et peu de profondeur.",
            "action": "Continuer à mijoter pour réduire et concentrer; le stock doit cuire et fusionner avec la base de chiles."
          },
          {
            "state": "Perfect",
            "description": "Rouge brique, brillant, légèrement épais — enveloppe une cuillère, coule dans un ruban lent, goût de terre et de fruits secs avec une chaleur douce.",
            "action": "Utiliser immédiatement pour assembler des enchiladas, ou réfrigérer jusqu'à une semaine."
          },
          {
            "state": "Overdone",
            "description": "La sauce est très épaisse et pâteuse, avec des arômes fortement concentrés et trop amers.",
            "action": "Finissez avec le bouillon chaud, une éclaboussure à la fois, jusqu'à ce qu'il soit versable; goûtez et équilibrez avec une pincée plus de sel."
          }
        ]
      },
      "feelCue": "Une sauce d'enchilada bien finie devrait couler d'une cuillère comme de la crème lourde — pas aqueuse, pas confiture. Sur la langue elle doit se réchauffer lentement, avec la douceur de fruits secs de l'ancho et le bord plus brillant du guajillo arrivant ensemble."
    }
  ]
};
