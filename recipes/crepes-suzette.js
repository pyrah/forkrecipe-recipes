export default {
  "repoId": "master_french_crepes_suzette_001",
  "parentRepoId": null,
  "slug": "crepes-suzette",
  "author": "ForkRecipe Kitchen",
  "title": "Crêpes Suzette",
  "description": "La grande finale de l'ancienne salle à manger française — les crêpes gossamer-fines pliées en quartiers et baignées d'un beurre brillant Suzette de sucre caramélisé, de jus d'orange frais et de beurre, puis mettent un léger côté table avec un sifflement de Grand Marnier jusqu'à ce que les flammes meurent à une laque d'agrumes chauds et de caramel.",
  "cuisine": "Français",
  "culture": "Parisien",
  "category": "desserts",
  "tags": [
    "dessert",
    "français",
    "Crêpes",
    "flamme",
    "orange",
    "grand-mère",
    "pâtisserie"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 2,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine ordinaire",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Farine de pâte de type 45"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Œufs (ensemble, température ambiante)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 250,
      "defaultUnit": "parts",
      "substitutions": [
        "moitié lait, moitié eau pour crêpes plus légères"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre bruni (pour la pâte, refroidi)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre fondu"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre de ricin (pour la pâte)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Sucre de castre (pour la sauce caramel)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Beurre non salé (pour la sauce, froid, cubed)",
      "ratioValue": 70,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Citrus",
      "name": "Oranges (zest + jus fraîchement pressé)",
      "ratioValue": 200,
      "defaultUnit": "parts",
      "substitutions": [
        "sang orange"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Solvent",
      "name": "Grand Marnier ( liqueur orange)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "Cointreau",
        "Curaçao"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "rested_batter",
      "instructions": "Dans un bol, fouetter la farine, le sucre et le sel, faire un puits et casser les œufs. fouetter du centre vers l'extérieur, en tirant dans la farine, puis verser dans le lait dans un ruisseau lent pour garder la pâte sans grumeaux. fouetter dans le beurre doré refroidi. La pâte doit être mince — la consistance de la crème unique. Plongez-le dans un tamis et reposez-vous, couvert, dans le réfrigérateur pendant au moins 30 minutes pour laisser le gluten se détendre et les bulles se déposer.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse et versable de la couleur de la crème pâle qui enveloppe l'arrière d'une cuillère dans un mince film et s'écoule dans un ruban non cassé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le battement est grumelé ou pâteux et épais, s'accrochant au fouet dans les touffes; des stries de farine restent.",
            "action": "fouetter plus fort ou blitz brièvement avec un mélangeur de bâton, puis mince avec un éclaboussure plus de lait et passer à nouveau à travers le tamis."
          },
          {
            "state": "Perfect",
            "description": "Silicieuse, sans grumeaux et juste assez mince pour déposer la cuillère dans un ruban lisse; bulles montant lentement à la surface.",
            "action": "Couvrir et reposer au réfrigérateur afin que les crêpes cuire tendre, non caoutchouteux."
          },
          {
            "state": "Overdone",
            "description": "Battre est aqueux et translucide et ne va pas enrober la cuillère du tout.",
            "action": "fouetter dans une cuillère de farine plus tamisée, se reposer à nouveau et faire cuire une crêpe avant de la lancer."
          }
        ]
      },
      "feelCue": "Le fouet devrait se déplacer à travers la pâte avec presque aucune traînée — il devrait se sentir comme de la crème mince, jamais comme un mélange de crêpes épais. Résistez à l'envie de le surmener une fois lisse; trop de battement fait du gluten et durcit les crêpes."
    },
    {
      "nodeId": "step_2",
      "action": "Cuire",
      "inputs": [
        "rested_batter"
      ],
      "outputState": "stack_of_crepes",
      "instructions": "Chauffer une crêpe de 22 cm ou une poêle antiadhésive à feu moyen et l'essuyer avec un film de beurre. Soulevez la poêle, louchez-la dans juste assez de pâte pour enrober la base, et tournez-la immédiatement dans un mince, même rond, versant tout excès de dos. Cuire 45-60 secondes jusqu'à ce que les bords se lèvent et le dessous est lacé et doré, puis retourner et cuire 20-30 secondes de plus. Empilez les crêpes finies sur une plaque au fur et à mesure; la première est toujours le test.",
      "visualCue": {
        "primaryTarget": "Crêpes minces en papier, dorées à la dentelle et roussâtres sur le premier côté, souples et pliables sans taches brutes et gommées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crêpe est pâle, humide et molle, collée à la poêle, sans couleur et sans odeur de pâte.",
            "action": "Levez la chaleur et donnez-la plus longtemps — attendez que les bords se lèvent visiblement et sèchent avant de retourner."
          },
          {
            "state": "Perfect",
            "description": "Fin et même avec des taches de rousseur dorées et des bords lacés; il libère proprement et se replie sans fissuration.",
            "action": "Flipez, faites cuire brièvement le deuxième côté, puis glissez sur la pile et continuez."
          },
          {
            "state": "Overdone",
            "description": "La crêpe est brun foncé, cassante et croustillante aux bords, craquent lorsqu'elle est pliée.",
            "action": "Abaissez la chaleur et versez le tour suivant plus rapidement; les crêpes cassantes peuvent encore être utilisées mais les plier doucement."
          }
        ]
      },
      "feelCue": "Écoutez un doux étourdissement à l'instant où la pâte frappe la casserole — qui vous dit qu'il est assez chaud pour se mettre immédiatement et rester mince. La crêpe est prête à basculer lorsqu'elle se relâche pendant que vous secouez la poêle."
    },
    {
      "nodeId": "step_3",
      "action": "Caraméliser",
      "inputs": [
        "ing_07",
        "ing_09"
      ],
      "outputState": "orange_caramel",
      "instructions": "Zestez les oranges et pressez le jus. Dans une grande poêle, faire fondre le sucre de sauce à feu moyen, sans remuer, en tourbillonnant la poêle au fur et à mesure qu'elle liquéfie, jusqu'à ce qu'il transforme un caramel ambre clair. Retirez-vous et versez soigneusement dans le jus d'orange — il crachera et saisira — puis ajoutez le zeste et laissez mijoter, en remuant, jusqu'à ce que le caramel durci se dissout dans une sauce douce et sirupeuse.",
      "visualCue": {
        "primaryTarget": "Un sirop d'ambre brillant et fluide, parfumé d'orange, qui enrobe une cuillère et sent le caramel et les agrumes sans bord acride.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sucre est de paille pâle ou encore grainé, la sauce est fine et uniquement sucrée sans aucune profondeur grillée.",
            "action": "Gardez le sucre un peu plus longtemps avant d'ajouter le jus — la couleur est la saveur."
          },
          {
            "state": "Perfect",
            "description": "Caramel ambré clair dissous dans un sirop d'orange lisse et brillant qui sied légèrement la cuillère.",
            "action": "Abaissez la chaleur et montez dans le beurre pour construire le beurre Suzette."
          },
          {
            "state": "Overdone",
            "description": "Le caramel est acajou foncé et sent aiguisé et brûlé; la sauce a un goût amer.",
            "action": "Jeter et recommencer le sucre — le caramel brûlé ne peut pas être sauvé, et l'amertume portera à travers tout le plat."
          }
        ]
      },
      "feelCue": "Regardez le sucre par la couleur et l'odeur, pas l'horloge — il va de l'ambre à brûlé en quelques secondes. Dès qu'il sent chaud le caramel, le jus s'entremêle, se vante du sifflement violent et garde la main libre de la vapeur."
    },
    {
      "nodeId": "step_4",
      "action": "Monter au beurre",
      "inputs": [
        "orange_caramel",
        "ing_08"
      ],
      "outputState": "beurre_suzette",
      "instructions": "Baissez la chaleur. fouetter le beurre glacé en cubes dans le caramel orange chaud quelques morceaux à la fois, laissant chaque ajout fondre et émulsifier avant d'ajouter plus. La sauce doit devenir satinée, opaque et légèrement épaissie — une vraie Suzette beurrée. Gardez-le juste au chaud; ne le laissez pas bouillir dur ou le beurre se fendra et la sauce deviendra grasse.",
      "visualCue": {
        "primaryTarget": "Une sauce d'or ambré brillant et opaque, épaissie et satinée, qui s'accroche à la cuillère et ne présente pas de piscine d'huile séparée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse; le beurre fond mais n'émulsionne pas dans le sirop.",
            "action": "Ajouter le beurre plus lentement hors feu direct et fouetter constamment pour coaxer l'émulsion ensemble."
          },
          {
            "state": "Perfect",
            "description": "Silicieuse, opaque et légèrement épaissie, uniformément brillante, enrobant la cuillère dans une feuille d'ambre lisse.",
            "action": "Conserver au chaud et plier les crêpes dans la sauce."
          },
          {
            "state": "Overdone",
            "description": "La sauce a cassé — le beurre fondu clair est posé sur le dessus dans les piscines grasses et le sirop s'est éclairci en dessous.",
            "action": "Retirer le feu, fouetter dans une cuillère à café d'eau froide ou un cube de beurre frais et froid pour réémulsionner."
          }
        ]
      },
      "feelCue": "Whisk régulièrement et sentir la sauce gagner le corps que chaque cube fond dans — il devrait épaissir sous le fouet comme une émulsion chaude, ne jamais sentir huileux ou sembler cassé. Maintenez la chaleur douce; le beurre monté fractionne l'instant où il ébullition."
    },
    {
      "nodeId": "step_5",
      "action": "Incorporer délicatement",
      "inputs": [
        "beurre_suzette",
        "stack_of_crepes"
      ],
      "outputState": "crepes_in_sauce",
      "instructions": "Un à la fois, déposer chaque crêpe dans la sauce tiède, tourner pour enrober les deux côtés, puis plier en deux et en deux à nouveau dans un triangle soigné, en la tenant sur le côté de la poêle. Répéter jusqu'à ce que toutes les crêpes soient pliées et se chevauchent dans la sauce, en les basant avec une cuillère afin que chacun absorbe le beurre d'orange et les paillettes.",
      "visualCue": {
        "primaryTarget": "Triangles plissés qui se chevauchent dans la poêle comme des pétales tombés, chacun trempé et laqué avec la sauce ambre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crêpes semblent sèches et pâles, assises sur la sauce plutôt que trempées, avec des taches chauves.",
            "action": "Spoon plus de sauce sur chaque pli et les laisser s'asseoir une minute dans la chaleur pour boire dedans."
          },
          {
            "state": "Perfect",
            "description": "Chaque triangle est souple, uniformément enduit et brillant, saturé de sauce, mais toujours tenant sa forme pliée soignée.",
            "action": "Apportez la poêle à la table pour la flamme, ou terminez au poêle."
          },
          {
            "state": "Overdone",
            "description": "Les crêpes ont mijoté trop longtemps et sont devenues molles et déchirées, se brisant en les tournant.",
            "action": "Arrêtez de vous enfoncer et de tourner; servez-les doucement avec une spatule même si les plis sont un peu enroulés."
          }
        ]
      },
      "feelCue": "Tourner les crêpes à l'aide d'une fourchette et d'une cuillère comme s'il s'agissait de lin pliant — elles sont délicates lorsqu'elles sont trempées. La poêle doit sentir intensément l'orange et le beurre chauds, et la sauce doit buller paresseusement, ne jamais faire bouillir."
    },
    {
      "nodeId": "step_6",
      "action": "Flambé",
      "inputs": [
        "crepes_in_sauce",
        "ing_10"
      ],
      "outputState": "finished_crepes_suzette",
      "instructions": "Hors de la chaleur, verser le Grand Marnier sur les crêpes. Retourner la poêle à la flamme et l'incliner légèrement vers le brûleur (ou toucher une longue correspondance au bord) de sorte que la vapeur d'alcool chaude capture et éclate en flamme bleue. Laissez-le brûler seul, en tourbillonnant la poêle, jusqu'à ce que les flammes meurent et que la sauce se réduise à une laque finale brillant. Associez les crêpes pliées à la fois et cuillerez le reste de la sauce sur le dessus.",
      "visualCue": {
        "primaryTarget": "Danser des flammes bleues qui s'évanouissent puis s'amenuisent, laissant les crêpes vitrées dans une sauce orangée épaisse et brillante sans morsure d'alcool cru.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La liqueur ne s'enflamme pas et la sauce a un goût vif avec de l'alcool cru.",
            "action": "Chauffer la poêle plus avant l'éclairage — l'alcool froid dégage trop peu de vapeur pour attraper; ou laisser mijoter brièvement pour cuire l'esprit à la place."
          },
          {
            "state": "Perfect",
            "description": "Une brève feuille théâtrale de flamme bleue qui se brûle en 20-30 secondes, laissant une saveur d'orange profonde et moelleuse et une sauce allégée.",
            "action": "Assortir immédiatement pendant que tout est chaud et servir."
          },
          {
            "state": "Overdone",
            "description": "Les flammes brûlent longtemps et la sauce réduit à un glaçage collant, surcaramélisé, légèrement amer.",
            "action": "Éteignez les flammes avec un couvercle, desserrez la sauce avec un jet de jus d'orange et servez avant qu'elle ne se resserre davantage."
          }
        ]
      },
      "feelCue": "Gardez votre visage et vos cheveux bien en arrière pendant que vous inclinez la poêle — les flammes sautent plus haut que vous ne vous attendez, puis disparaissent. Lorsque le feu est éteint, la cuisine sent l'orange caramélisée et le beurre grillé, le bord aigu de l'esprit étant devenu doux et rond."
    }
  ]
};
