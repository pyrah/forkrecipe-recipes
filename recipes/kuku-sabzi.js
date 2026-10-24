export default {
  "repoId": "master_persian_kuku_sabzi_001",
  "parentRepoId": null,
  "slug": "kuku-sabzi",
  "author": "ForkRecipe Kitchen",
  "title": "Kuku Sabzi",
  "description": "La frittata persane de Nowruz — plus d'herbe que d'oeuf, si dense avec de l'aneth, du persil, de la coriandre et du fénugrek qu'elle tranche vert foncé, avec des moitiés de noix et des fraises séchées à la tarte étalant chaque pièce comme des grenats en jade.",
  "cuisine": "Perse",
  "culture": "Perse",
  "category": "eggs",
  "tags": [
    "végétarien",
    "Sans gluten",
    "herbes",
    "frittata",
    "persienne",
    "maintenantruz"
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
    "sour": 2,
    "bitter": 2,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Binder",
      "name": "Gros œufs",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Herb",
      "name": "Persil frais à feuilles plates, haché finement",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Diluant frais, haché finement",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Coriandre fraîche (cilantro), finement hachée",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Feuilles de fénugreek, fraîches ou séchées, hachées finement",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "d'aneth supplémentaire"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Structure",
      "name": "moitiés de noix, grossièrement cassées",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "pécans"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Mûres séchées (zéréshk)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "canneberges séchées, approximativement hachées"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Oignons de printemps (épitons), tranchés finement",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "petite échalote, finement coupée"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin et poivre noir",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Fat",
      "name": "Huile neutre ou beurre clarifié (ghée)",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whisk",
      "inputs": [
        "ing_01",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "seasoned_eggs",
      "instructions": "Couper les œufs dans un grand bol. Ajouter le sel, le poivre, le curcuma et la poudre à pâte. fouetter vigoureusement pendant 2 minutes jusqu'à ce que le mélange soit jaune pâle, légèrement aéré, et que tous les jaunes et les blancs soient bien combinés. La poudre à pâte donnera au kuku une texture légèrement plus légère, plus soufflée.",
      "visualCue": {
        "primaryTarget": "Mélange d'oeufs fouettés",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le blanc d'oeuf est encore en train de s'étirer. Jaune et blanc pas complètement combinés. Plat sans mousse.",
            "action": "Whisk plus vigoureusement pour une autre minute — les oeufs striés créeront des taches inégales dans le kuku cuit."
          },
          {
            "state": "Perfect",
            "description": "Uniforme jaune doré pâle avec une mince mousse de surface. La couleur est légèrement allégée par le curcuma. Le mélange tombe du fouet dans un ruban épais et stable.",
            "action": "Ajouter toutes les herbes, les verts, les noix et les fraises."
          },
          {
            "state": "Overdone",
            "description": "S.O. — les œufs ne peuvent pas être surconsommés à cette fin.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "Exécutez votre doigt le long du fouet — le mélange d'oeufs devrait le mettre dans un film lisse, légèrement épais, non mince et aqueux comme un œuf cru."
    },
    {
      "nodeId": "step_2",
      "action": "Plier",
      "inputs": [
        "seasoned_eggs",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "kuku_batter",
      "instructions": "Ajouter toutes les herbes hachées, les oignons de printemps, les noix cassées et les fraises au mélange d'oeufs. Pliez tout ensemble avec une grande cuillère jusqu'à ce que les herbes soient uniformément distribuées et que l'œuf enveloppe chaque brin d'herbe. Le mélange sera presque entièrement vert avec juste un petit oeuf jaune visible.",
      "visualCue": {
        "primaryTarget": "Pâte combinée",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les herbes et les oeufs ne sont pas entièrement combinés — les herbes sèches s'assoient sur le dessus de l'œuf liquide au fond.",
            "action": "Plier plus soigneusement, en atteignant le fond du bol à chaque fois."
          },
          {
            "state": "Perfect",
            "description": "Une pâte dense et vert foncé où chaque composant est enrobé d'œuf. Le rapport semble alarmant — beaucoup plus d'herbe que d'œuf — et c'est exactement exact. Les canneberges sont rouges.",
            "action": "Cuire immédiatement — les herbes commenceront à pleurer si elles s'assoient."
          },
          {
            "state": "Overdone",
            "description": "Les herbes se sont assises dans l'œuf trop longtemps et ont commencé à pleurer liquide, rendant la pâte mince et aqueuse.",
            "action": "Cuire immédiatement. Le kuku fonctionnera encore mais pourrait être plus fragile."
          }
        ]
      },
      "feelCue": "Soulevez une grande cuillère de la pâte — elle devrait tenir ensemble comme une masse cohésive et dense d'herbes plutôt que de sortir de la cuillère dans un flux liquide. Les herbes portent l'œuf, pas l'inverse."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "ing_12"
      ],
      "outputState": "oiled_pan",
      "instructions": "Chauffer l'huile ou le ghee dans une poêle antiadhésive de 24 à 26 cm ou en fonte bien assaisonnée à feu moyen. Lorsque l'huile mijote et qu'une goutte d'eau étourdit immédiatement, la poêle est prête. Tourner pour enrober les côtés ainsi que la base.",
      "visualCue": {
        "primaryTarget": "Huile dans la poêle",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile est fraîche et calme. Une goutte d'eau ne crève pas.",
            "action": "Attendez — une casserole fraîche fera en sorte que le kuku se colle et se déchire lorsqu'il est retourné."
          },
          {
            "state": "Perfect",
            "description": "L'huile mijote avec de faibles ondulations à travers la surface. Une petite goutte d'eau s'évapore instantanément. Sensation de graisse neutre dans l'air.",
            "action": "Verser la pâte immédiatement."
          },
          {
            "state": "Overdone",
            "description": "L'huile fume et très sombre.",
            "action": "Retirer du feu, laisser refroidir brièvement et recommencer avec moins de chaleur."
          }
        ]
      },
      "feelCue": "Maintenez votre paume à 5 cm au - dessus de la poêle — vous devriez sentir une chaleur radiante régulière et sèche, mais pas une sensation de brûlure agressive."
    },
    {
      "nodeId": "step_4",
      "action": "Fry",
      "inputs": [
        "oiled_pan",
        "kuku_batter"
      ],
      "outputState": "finished_kuku_sabzi",
      "instructions": "Verser la pâte d'herbe dans la poêle chaude et la presser doucement dans une couche uniforme avec l'arrière d'une cuillère. Couvrir d'un couvercle et cuire à feu moyen-doux pendant 10-12 minutes jusqu'à ce que le dessus soit réglé, mais encore très légèrement brillant au centre et le fond est profondément doré. Faites glisser le kuku sur une grande plaque plate, puis retournez la poêle sur la plaque et retournez le kuku dans la poêle non cuite. Cuire à découvert pendant 5 à 7 minutes. Alternativement, terminer sous une grille moyenne pendant 4 à 5 minutes.",
      "visualCue": {
        "primaryTarget": "Kuku dans la casserole",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface supérieure est encore humide et liquide. Le kuku n'est pas suffisamment réglé pour retourner — essayer de retourner maintenant va le briser.",
            "action": "Remplacez le couvercle et donnez-lui 3-4 minutes de plus. Le couvercle crée de la vapeur qui met le dessus d'en haut."
          },
          {
            "state": "Perfect",
            "description": "La surface supérieure n'a que l'humidité la plus faible au centre. Le fond (vérifier en levant le bord avec une spatule) est une croûte riche et dorée. Le kuku tient sa forme lorsque la poêle est légèrement secouée.",
            "action": "Flipez avec confiance et faites cuire le deuxième côté. Le kuku fini est vert foncé avec une croûte dorée des deux côtés, suffisamment ferme pour être découpé en quartiers propres."
          },
          {
            "state": "Overdone",
            "description": "Les bords s'éloignent de la poêle et commencent à craquer. Le haut est complètement sec. Les deux côtés sont brun très foncé.",
            "action": "Retirer immédiatement du feu. Le kuku surcuit est sec et légèrement caoutchouteux, mais encore comestible."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur le centre du kuku — il doit se sentir posé et printanier, rebondissant de votre doigt immédiatement. Si elle donne à une dépression et ne ressort pas, elle a besoin de plus de temps sous le couvercle."
    }
  ]
};
