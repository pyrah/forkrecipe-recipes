export default {
  "repoId": "master_british_sticky_toffee_pudding_001",
  "parentRepoId": null,
  "slug": "sticky-toffee-pudding",
  "author": "ForkRecipe Kitchen",
  "title": "Poudre de caramel collant",
  "description": "Une éponge dense de Medjool dattes mélangée dans la pâte, cuite jusqu'à peine mise et sombre, puis trempée dans une sauce tiède au caramel et finie avec une goutte de crème froide – intensément humide et caramel-sweet.",
  "cuisine": "Anglais",
  "culture": "Anglais",
  "category": "desserts",
  "tags": [
    "Toffe collante",
    "britanniques",
    "pudding",
    "Dates",
    "Caramel",
    "dessert"
  ],
  "difficulty": 3,
  "activeTime": "35 min",
  "totalTime": "1 hr 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 5,
    "salty": 1,
    "sour": 0,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Sweetener",
      "name": "Dates Medjool",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "dates de déglacement, trempées"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau bouillante",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "Thé noir chaud"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de muscovado foncé (pour éponge)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun foncé"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Oeufs entiers",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé (pour éponge)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Leavener",
      "name": "Bicarbonate de soude",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "bicarbonate de soude"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Double crème (pour sauce au caramel)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "crème lourde"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Sucre de muscovado foncé (pour sauce au caramel)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun foncé"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Beurre non salé (pour sauce au caramel)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrater",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_07"
      ],
      "outputState": "date_puree",
      "instructions": "Placez les dattes piquées dans un bol thermofuge et versez l'eau bouillante sur eux. Incorporer le bicarbonate de soude — il fêlera et moussera, et les dates commenceront à s'assouplir et à s'assombrir. Laisser tremper pendant 10 minutes, puis masser ou mélanger à une purée lisse, foncée et brillante. Le bicarbe réagit avec les acides naturels dans les dates pour produire du dioxyde de carbone et aussi pour décomposer la chair de la date, créant une texture plus douce et plus intégrée dans l'éponge finale.",
      "visualCue": {
        "primaryTarget": "Une purée marron lisse et très foncée avec la consistance de la confiture molle – brillante et juste versable, sentant intensément le caramel et le caramel.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les dates ont encore des morceaux visibles et le mélange est grumeux. La mousse de bicarbe a diminué, mais les dates n'ont pas complètement ramolli.",
            "action": "Laisser 5 minutes de plus dans l'eau chaude, puis mélanger plus soigneusement — il faut une purée lisse pour que la pâte s'intègre proprement."
          },
          {
            "state": "Perfect",
            "description": "Purée lisse, foncée, de couleur acajou. Il coule lentement. Sens de caramel doux et de fruits secs. Il ne reste pas de morceaux fibreux.",
            "action": "Réserver pour refroidir légèrement avant de plier dans la pâte — vous ne voulez pas brouiller les œufs lors du mélange."
          },
          {
            "state": "Overdone",
            "description": "Le mélange de date est impossible à surproduire en termes de texture, mais s'il reste trop longtemps dans l'eau, il peut refroidir trop pour activer correctement le bicarbe.",
            "action": "S'il fait très froid, réchauffez la purée en douceur et ajoutez une pincée de bicarbe fraîche avant de la plier dans la pâte."
          }
        ]
      },
      "feelCue": "La purée doit se sentir chaude et lisse entre vos doigts, soyeux plutôt que granuleux ou fibreux. Tous les morceaux créeront des taches denses inégales dans l'éponge."
    },
    {
      "nodeId": "step_2",
      "action": "Crémer",
      "inputs": [
        "ing_06",
        "ing_04",
        "ing_05",
        "ing_12",
        "ing_11"
      ],
      "outputState": "creamed_base",
      "instructions": "Battre le beurre ramolli avec le sucre muscovado jusqu'à ce que le mélange soit pâle, moelleux et augmenté en volume — 3-4 minutes à la main ou 2 minutes avec un mélangeur. Battre dans les œufs un à la fois, grattant le bol entre les ajouts. Ajouter la vanille et le sel. Le mélange peut sembler légèrement caillé après l'entrée des œufs — c'est normal avec du sucre muscovado et se rassemblera lorsque la farine et la purée de date seront ajoutées. Ne pas trop battre une fois les œufs entrés.",
      "visualCue": {
        "primaryTarget": "Une crème pâle, moelleuse, de couleur sable avec un bon volume, parsemée de grains fins de muscovado. Quand les œufs sont ajoutés, il devient une pâte lâche, légèrement caillé, encore pâle et aérée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre et le sucre ont toujours l'air lourd et granuleux — le sucre n'a pas été dispersé dans la graisse. Pas d'air incorporé.",
            "action": "Battre plus vigoureusement — le mélange devrait s'éclaircir significativement et augmenter le volume avant que les œufs entrent."
          },
          {
            "state": "Perfect",
            "description": "Notamment aéré, brun doré pâle et moelleux. Après les œufs, il peut sembler légèrement séparé, mais devrait encore sentir doux et riche.",
            "action": "Plier doucement dans la farine tamisée, puis la purée de la date."
          },
          {
            "state": "Overdone",
            "description": "Battre excessivement après les œufs — possible seulement avec un mélangeur à haute. Le mélange peut être mousseux et mince.",
            "action": "Pliez immédiatement dans la farine — la structure corrigera la texture."
          }
        ]
      },
      "feelCue": "Le mélange beurre-sucre doit se sentir léger et griny-smooth sous une spatule — le muscovado dispersé mais sa profondeur minérale encore audible comme un très léger grain."
    },
    {
      "nodeId": "step_3",
      "action": "Incorporer délicatement",
      "inputs": [
        "creamed_base",
        "ing_03",
        "date_puree"
      ],
      "outputState": "sponge_batter",
      "instructions": "Siroter la farine sur la base crémeuse et la plier avec une spatule en larges coups jusqu'à ce qu'elle soit simplement combinée — ne pas battre. Versez ensuite la purée chaude de la date et pliez encore jusqu'à ce que la pâte soit uniforme. Il sera plus lâche qu'une pâte à gâteau typique — presque versable — et un brun très foncé. Verser dans un moule beurré de 20 cm carré ou dariole individuel. Faire cuire à 180 C / 355 F pendant 25-30 minutes (ou 15-18 minutes pour les moules individuels) jusqu'à ce qu'une brochette sorte avec des miettes humides.",
      "visualCue": {
        "primaryTarget": "Une pâte au chocolat brun très sombre et versable sans stries de farine. Il remplit l'étain juste sous la jante et se gratifie d'un doux tremblement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Streaks de farine pâle visibles à travers la pâte foncée. Purée et base crème pas entièrement intégrée.",
            "action": "Plier encore quelques fois — la cible est une pâte brun foncé uniforme, sans stries pâles."
          },
          {
            "state": "Perfect",
            "description": "Uniforme brun foncé, lisse, versable pâte. Des odeurs de dattes, de cassonade et de vanille. Remplir l'étain dans une coulée.",
            "action": "Cuire immédiatement — le bicarbe est activé et le repos le fera perdre la puissance de levain."
          },
          {
            "state": "Overdone",
            "description": "Surplié, gluten développé — pâte a l'air collante et élastique, comme pâte à pain agitée plutôt qu'une pâte à gâteau fluide.",
            "action": "Faites cuire immédiatement, peu importe. La texture sera plus dense, mais l'humidité de la date et la sauce au caramel compenseront."
          }
        ]
      },
      "feelCue": "Versez-le du bol et écoutez: il doit couler dans un ruisseau lisse et continu comme une grosse pâte à crêpes — pas goutter à contrecœur, pas éclabousser."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "sponge_batter"
      ],
      "outputState": "baked_sponge",
      "instructions": "Cuire à 180 C / 355 F pendant 25-30 minutes. Le pudding est prêt quand une brochette insérée dans le centre sort avec des miettes humides et collantes — pas de pâte humide, pas de nettoyage à sec. La partie supérieure doit être sombre et légèrement printanière, s'éloignant des bords de l'étain. Ne pas trop cuire — le pudding sera trempé dans la sauce au caramel et continuer à cuire brièvement à partir de la chaleur de la sauce, donc errez sur le côté humide.",
      "visualCue": {
        "primaryTarget": "Top sombre, presque noir avec une surface sèche et juste-set qui ressort quand elle est touchée. Les côtés s'éloignent complètement de l'étain.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre est humide et s'effondre lorsqu'il est pressé. La brochette sort avec de la pâte liquide crue qui s'accroche à elle.",
            "action": "Retourner au four 5 minutes de plus et tester à nouveau. La couleur foncée fait qu'il est difficile de juger par la seule vue — comptez sur la brochette."
          },
          {
            "state": "Perfect",
            "description": "C'est brun foncé. La brochette sort avec quelques miettes humides et collantes — rien d'humidifié. Une légère pression sur le centre rebondit lentement.",
            "action": "Laisser refroidir dans l'étain pendant 5 minutes, puis sortir ou servir directement de l'étain avec la sauce chaude au caramel versé sur."
          },
          {
            "state": "Overdone",
            "description": "Le dessus a craqué et durci, tirant loin des bords. La brochette sort propre et sèche. L'éponge est ferme et sèche au toucher.",
            "action": "Servir rapidement avec de la sauce au caramel extra-générique – la sauce trempera et sauvera une certaine humidité pendant quelques minutes."
          }
        ]
      },
      "feelCue": "Appuyez sur le centre à l'aide de deux doigts : il devrait céder avec un dos de ressort lent et doux — pas le rebond dur du gâteau surcuit, pas le don humide de la pâte cassée. C'est à peine réglé."
    },
    {
      "nodeId": "step_5",
      "action": "Faire réduire",
      "inputs": [
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "toffee_sauce",
      "instructions": "Mélanger la crème, le sucre muscovado foncé, le beurre et une pincée de sel dans une casserole lourde. Chauffer à feu moyen, en remuant jusqu'à ce que le beurre fond et que le sucre se dissout. Porter à ébullition douce et cuire, en remuant, pendant 3-4 minutes jusqu'à ce que la sauce épaississe suffisamment pour enrober l'arrière d'une cuillère et s'est foncée à une couleur caramel profonde. Il s'épaissira encore plus en refroidissant. Verser directement sur l'éponge ou garder au chaud dans la poêle. Pour servir, verser la sauce chaude sur le pudding et la regarder tremper.",
      "visualCue": {
        "primaryTarget": "Une sauce brun-ambre foncé et brillant qui enveloppe l'arrière d'une cuillère dans une épaisse feuille à écoulement lent. Un doigt tiré à travers la cuillère enduite laisse une ligne propre qui tient un moment.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et pâle, elle sort immédiatement d'une cuillère. Le sucre est dissous mais la sauce n'a pas de corps.",
            "action": "Continuer la cuisson et remuer à feu constant. La sauce doit diminuer d'environ un quart pour atteindre la bonne consistance."
          },
          {
            "state": "Perfect",
            "description": "Ambre profond, brillant et assez épais pour enrober une cuillère et s'écouler lentement. Des odeurs de beurre, de cassonade et de caramel — complexes et profondes.",
            "action": "Verser immédiatement sur l'éponge ou garder au chaud au feu le plus bas, en remuant occasionnellement."
          },
          {
            "state": "Overdone",
            "description": "La sauce est devenue très sombre, sent brûlée et amère, et a commencé à grainer: le sucre est cristallisant ou brûlant.",
            "action": "Retirer immédiatement du feu. Ajouter une touche de crème et remuer pour sauver si seulement légèrement surdosé. S'il est amer, jeter et faire un lot frais — il ne faut que 5 minutes."
          }
        ]
      },
      "feelCue": "Plongez un doigt propre et laissez refroidir une seconde — la sauce doit se sentir collante et tirer dans un court fil entre le bout du doigt et le pouce, comme le sirop d'or chaud, plutôt que de s'enfuir propre."
    }
  ]
};
