export default {
  "repoId": "master_british_eton_mess_001",
  "parentRepoId": null,
  "slug": "eton-mess",
  "author": "ForkRecipe Kitchen",
  "title": "Eton Mess",
  "description": "La meringue masquée, les fraises légèrement broyées et la crème fouettée qui bouffait se repliaient au dernier moment, délibérément imparfaite et totalement irrésistible, un dessert dont le nom célèbre son propre désordre.",
  "cuisine": "Anglais",
  "culture": "changements climatiques",
  "category": "desserts",
  "tags": [
    "eton-mess",
    "britanniques",
    "meringue",
    "fraises",
    "crème",
    "été",
    "anglais"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "1 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 4,
    "salty": 0,
    "sour": 2,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Blancs d'oeufs (large, température ambiante)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "aquafaba (eau de pois chiches) pour meringue végétalienne"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de canne (pour meringue)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "sucre granulé superfin"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Base",
      "name": "Fraises fraîches, décortiquées",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "framboises",
        "un mélange de baies d'été"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre-circulation (pour macération)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "sucre de ricin",
        "Chérie"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Crème lourde (35%+ gras)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "crème fraîche pour un gâchis légèrement acidulé"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "pâte de haricots vanille"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Jus de citron (fraîchement pressé)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre de vin blanc (1 c. à thé) ajouté aux blancs de meringue"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whip",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "meringue",
      "instructions": "Assurez - vous que le bol et le fouet sont complètement propres et sans graisse; une seule goutte de graisse ou de jaune empêchera les blancs de fouetter. fouetter les blancs d'oeufs à vitesse moyenne jusqu'à ce qu'ils atteignent le stade de la pointe molle (moussant, blanc, et tenant un pic d'affaissement). Puis commencer à ajouter le sucre de caster une cuillère à soupe à la fois, augmentant à grande vitesse, jusqu'à ce que tout le sucre soit incorporé. Continuez à fouetter jusqu'à ce que la meringue soit très raide, épaisse et brillante, et qu'aucune graine ne puisse être ressentie lorsqu'une petite quantité est frottée entre les doigts.",
      "visualCue": {
        "primaryTarget": "Une meringue brillamment blanche, densément brillante, debout dans des pics fermes et droits qui ne se bouclent pas ou ne s'enfoncent pas. Lorsque le bol est inversé, il ne bouge pas.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La meringue est encore douce et souple — les pics s'enroulent et ne tiennent pas leur forme. Le mélange semble brillant mais se sent liquide et léger quand vous lancez une spatule à travers elle.",
            "action": "Continuez à fouetter à grande vitesse. Testez toutes les 30 secondes. Sous-vêtements meringués fourrer sur une dalle plate et mâcheuse plutôt qu'une coquille croustillante et aérée."
          },
          {
            "state": "Perfect",
            "description": "Ferme, dense, blanc brillant. Se tient dans des sommets raides et droits. Frotter un peu entre les doigts : complètement lisse, sans grain de sucre. Une odeur de guimauve.",
            "action": "Pipe ou cuillère sur les plaques de cuisson et cuire immédiatement. Cette quantité fait environ 8 nids ou une grande meringue rompue plus tard."
          },
          {
            "state": "Overdone",
            "description": "La meringue est devenue grosse, granuleuse et sèche. Il a l'air mat plutôt que brillant et sillonne le côté du bol plutôt que de former des pics.",
            "action": "Les Blancs trop battus ne peuvent être sauvés par plus de coups. Utilisez-les de toute façon — la meringue cuite au four sera légèrement dense mais toujours délicieuse lorsqu'elle sera écrasée dans le désordre."
          }
        ]
      },
      "feelCue": "Frottez une pincée de meringue entre le pouce et l'index — elle devrait se sentir complètement lisse et soyeuse, comme du satin humide, sans grain de sucre. Tout grain signifie que le sucre n'a pas dissout et la meringue a besoin de plus de coups."
    },
    {
      "nodeId": "step_2",
      "action": "Cuire",
      "inputs": [
        "meringue"
      ],
      "outputState": "baked_meringue",
      "instructions": "Préchauffer le four à 120°C (250°F). Lignez deux plaques de cuisson avec parchemin. Spoon ou pipe la meringue en 8 rondelles ou nids rugueux, ou deux grandes formes libres - l'imperfection est la bienvenue ici. Cuire pendant 1 heure à 1 heure 15 minutes jusqu'à ce que les méringues soient secs à l'extérieur, lever proprement du parchemin, et sonner creux quand tapoté sur la base. Éteignez le four et laissez les meringues à l'intérieur avec la porte ajar jusqu'à ce qu'il soit complètement frais. Ils peuvent être faits jusqu'à 3 jours à l'avance et entreposés dans un contenant hermétique.",
      "visualCue": {
        "primaryTarget": "L'ivoire pâle aux méringues de couleur crème très légère — pas blanc, pas doré — qui se lèvent du parchemin proprement et sont secs et mates sur toutes les surfaces.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'extérieur semble sec, mais la base reste collée au parchemin et la meringue se sent douce et céder lorsqu'elle est pressée. Une cassée montre un centre humide et mâcheux.",
            "action": "Retourner au four à la même température pendant 15 minutes. L'intérieur doit être entièrement sec — un centre humide fait s'effondrer immédiatement la meringue lorsqu'elle est écrasée dans le désordre."
          },
          {
            "state": "Perfect",
            "description": "Soulève du parchemin avec un son creux. L'ivoire est coloré, sec et mat. Lorsqu'il est cassé, le centre est croquant, sec et ressemble à du polystyrène blanc, léger et crépitant.",
            "action": "Laisser refroidir complètement dans le four. Conserver dans une boîte scellée jusqu'au montage."
          },
          {
            "state": "Overdone",
            "description": "Les méringues ont trop coloré — beige crémeux à brun pâle — et sentent légèrement caramélisé. Ils ont peut-être craqué par trop de chaleur.",
            "action": "Baisser la température du four à 100°C la prochaine fois. La meringue légèrement surchauffée est encore bonne dans le désordre de l'éton — elle se brisera de la même manière."
          }
        ]
      },
      "feelCue": "Tapez sur la base d'une meringue refroidie — elle devrait sembler vraiment creuse, comme tapoter une mince coquille de porcelaine. S'il semble solide ou se sent lourd pour sa taille, il n'a pas séché et se transformera en une mâche collante dans la crème."
    },
    {
      "nodeId": "step_3",
      "action": "Repos",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_07"
      ],
      "outputState": "macerated_strawberries",
      "instructions": "Jette les fraises. Quarter les plus grands, moitié les moyens, et laisser les petits entiers ou moitié les. Mettre dans un bol et saupoudrer le sucre glace sur eux, puis ajouter le jus de citron. Mélanger doucement avec une cuillère et laisser à température ambiante pendant 15 à 20 minutes. Le sucre et l'acide puiseront du liquide dans les fraises, créant un sirop léger, rose, naturellement sucré et intensifiant le goût des baies. Ne pas réfrigérer pendant la macération — le froid empêche le liquide de se libérer.",
      "visualCue": {
        "primaryTarget": "Les fraises brillent, s'adoucissent légèrement et s'assoient dans une piscine de jus de rose vif, naturellement sucré. Le citron éclaire la couleur du rouge terne au rose aux baies vibrantes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Seules quelques gouttes de jus se sont formées. Les fraises semblent toujours crues et sèches. Le sucre est à peine dissous à la surface.",
            "action": "Laissez macérer plus longtemps. 15 minutes est le minimum — à ce stade le sirop doit être clairement visible, pas une trace. Incorporer une fois à mi-chemin pour aider le sucre à se dissoudre."
          },
          {
            "state": "Perfect",
            "description": "Les baies sont assises dans au moins 2 à 3 cuillères à soupe de sirop rose vif et à la tarte sucrée. Ils se sont légèrement adoucis mais tiennent toujours leur forme. L'odeur est intense de fraises d'été mûres.",
            "action": "Réservez quelques jolies pièces pour garnir, puis écrasez légèrement environ la moitié des baies avec le dos d'une fourchette pour casser en morceaux bruts, ce qui crée des textures variées dans le désordre final."
          },
          {
            "state": "Overdone",
            "description": "Les fraises ont macéré trop longtemps (plus d'une heure), deviennent très molles, et le sirop est légèrement terne et aqueux de sur-dilution.",
            "action": "Égoutter de l'excès de liquide si nécessaire. La saveur est toujours bonne — ce n'est pas critique dans une recette aussi indulgente que le gâchis."
          }
        ]
      },
      "feelCue": "Ramassez un morceau de fraise macérée — il devrait être légèrement plus doux que cru, mais tenir entre les doigts. Le jus doit être mis dans votre main en tasse à une seconde de la mise en bouteille du bol."
    },
    {
      "nodeId": "step_4",
      "action": "Plier",
      "inputs": [
        "ing_05",
        "ing_06",
        "baked_meringue",
        "macerated_strawberries"
      ],
      "outputState": "eton_mess",
      "instructions": "Frottez la crème lourde froide avec l'extrait de vanille pour obtenir des pics mous et enflammés — il devrait se poser généreusement mais pas être raide. Écraser les méringues en morceaux irréguliers et en morceaux de différentes tailles — quelques morceaux de la taille d'un pouce, quelques miettes, tous mélangés. Ajouter la moitié des fraises macérées et toute la meringue à la crème fouettée et plier ensemble avec trois ou quatre grands coups, laissant délibérément des stries de crème et de sirop de baies sans mélange. Déposer dans des verres ou des bols individuels, disperser les fraises restantes sur le dessus et servir immédiatement. Chaque minute qui passe adoucit encore la meringue — c'est un dessert assemblé pour une consommation immédiate.",
      "visualCue": {
        "primaryTarget": "Un bel enchevêtrement chaotique de crème blanche, de fils de meringue pâle et de fraise rose vif — stries plutôt que uniformément mélangés. Le sirop rose saigne dans des rubans visibles à travers le blanc.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les composants sont à peine mélangés — les morceaux de meringue sont assis sur le dessus de la crème plutôt que repliés dans, et la fraise est dans une couche séparée au fond.",
            "action": "Plier 2 à 3 coups de plus. Vous voulez la distribution, pas l'homogénéité — le but est l'imperfection délibérée, pas la séparation complète."
          },
          {
            "state": "Perfect",
            "description": "Chaque cuillère contient les trois éléments. Le sirop de fraise rose rubans à travers la crème en stries visibles. Des fils de meringue de différentes tailles sont distribués partout. Magnifique et chaotique.",
            "action": "Servir dans les 10 minutes — la meringue commencera à ramollir une fois en contact avec la crème et le jus de fraise. Un certain ramollissement est agréable; la dissolution ne l'est pas."
          },
          {
            "state": "Overdone",
            "description": "Le gâchis a été bien mélangé et le sirop rose est entièrement incorporé — la crème a tourné un rose-bébé même sans contraste visuel. La meringue se dissout en une mâche collante.",
            "action": "Servir immédiatement — la texture est au-delà de son pic mais la saveur est la même. La prochaine fois, plier moins et servir plus rapidement."
          }
        ]
      },
      "feelCue": "La crème doit encore se sentir aérée et légère lorsqu'elle est pliée — pas pondue avec du sirop de fraise, pas rigide par sur-bourrage. Les durs de meringue devraient encore craquer légèrement contre la cuillère quand vous la servez. Ce son s'estompe rapidement."
    }
  ]
};
