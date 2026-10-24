export default {
  "repoId": "master_french_duck_a_lorange_001",
  "parentRepoId": null,
  "slug": "duck-a-lorange",
  "author": "ForkRecipe Kitchen",
  "title": "Duck à l'Orange",
  "description": "Le grand rôti bourgeois — un canard entier rendu à la peau crépitante, laquée, servi sous une sauce bigarade construite sur un caramel gastrique de pain de cheveux serré avec de l'orange amère Séville. Douce, tranchante et juste timide de brûlée, c'est le plat qui a enseigné à une génération ce qu'elle pouvait être à la table haute.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "proteins",
  "tags": [
    "rôti",
    "français",
    "canard",
    "gaztrique",
    "orange",
    "sauce-bigarade"
  ],
  "difficulty": 4,
  "activeTime": "1 hr",
  "totalTime": "2 hr 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 4,
    "bitter": 3,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Canards entiers (2 à 2,5 kg, parés, désossés)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "jambes et seins de canard"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Citrus",
      "name": "Les oranges de Séville (amère) — zestes en lanières et jus",
      "ratioValue": 18,
      "defaultUnit": "parts",
      "substitutions": [
        "orange douce + une pression de citron"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre blanc (pour le caramel)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "vinaigre de vin rouge (pour la gaztrique)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Viande de canard ou de veau brun (réduite, chaude)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "stock de poulet fortifié avec un peu de gélatine"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Vin blanc sec (pour le déglacement)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "Vermouth sec"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Échalote (finement hachée)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "liqueur orange (Grand Marnier ou Cointreau)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "omit"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Beurre froid non salé (pour monter la sauce)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel de mer & poivre blanc",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saison & Prick",
      "inputs": [
        "ing_01",
        "ing_10"
      ],
      "outputState": "prepped_duck",
      "instructions": "Faites sécher le canard à l'intérieur et à l'extérieur. Piquez la peau sur toute la poitrine et les cuisses avec une fourchette maintenue à un angle peu profond, perçant la couche grasse mais pas la viande en dessous, de sorte que la graisse de rendu a une sortie. Assaisonner la cavité et la peau généreusement avec du sel et du poivre blanc et, idéalement, laisser découvert au réfrigérateur une heure ou plus pour sécher la peau. Attachez les jambes pour serrer l'oiseau.",
      "visualCue": {
        "primaryTarget": "La peau est tendue, sèche au toucher et parsemée de ponctions peu profondes; la surface semble mate plutôt que humide et légèrement tachée du sel.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est encore humide et lissée; les piqûres sont assez profondes que la viande rose montre à travers les trous.",
            "action": "Bloquez encore avec des serviettes en papier et re-prick à un angle plus plat — vous voulez ne piquer que la graisse, jamais la chair, ou les jus pleurent pendant la torréfaction."
          },
          {
            "state": "Perfect",
            "description": "Peau sèche, tendue, uniformément assaisonnée avec un champ fin de perforations peu profondes sur la poitrine et la cuisse; la cavité sent propre et assaisonnée.",
            "action": "Placez l'oiseau sur une grille pour commencer le rôti."
          },
          {
            "state": "Overdone",
            "description": "La peau est déchirée ou gâchée et la viande de poitrine est exposée et salée fortement, ce qui la séchera.",
            "action": "Éliminer l'excès de sel des zones déchirées et rôtir une touche plus courte; abaisser la viande exposée pour l'empêcher de sécher."
          }
        ]
      },
      "feelCue": "La fourchette devrait donner deux résistances distinctes — la légère pop de la peau, puis la graisse molle — et s'arrêter avant qu'elle n'atteigne la viande plus ferme. La peau sèche grince légèrement sous le bout des doigts."
    },
    {
      "nodeId": "step_2",
      "action": "Rôtis",
      "inputs": [
        "prepped_duck"
      ],
      "outputState": "roasted_duck",
      "instructions": "Allumer sur un rack à 200 °C / 400 °F. Après 25 minutes, chutez à 170°C / 340°F et continuez, en tirant le gras rendu du plateau toutes les 30 minutes (réservez-le – c'est de l'or). Faire cuire environ 75-90 minutes au total, jusqu'à ce que la peau soit profondément ambre et croustillante et que les jus de cuisse soient limpides. Reposez l'oiseau, lâchement tenté, au moins 15 minutes avant la sculpture.",
      "visualCue": {
        "primaryTarget": "La peau est acajou brûlé et crépitante-crisp, la poitrine plombée, et une brochette dans la cuisse la plus épaisse libère des jus clairs et légèrement dorés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est pâle et effilée avec de la graisse non rapportée sous elle; les jus de cuisses sont roses et la jambe est encore serrée à la pelle.",
            "action": "Retourner au four — relever la chaleur pour le dernier étirement pour croquer la peau, et continuer à vérifier les jus de cuisse jusqu'à ce qu'ils soient limpides."
          },
          {
            "state": "Perfect",
            "description": "Deep ambre, peau crépitante qui se brise lorsqu'il est tapoté; les jus de cuisses s'échappent; l'articulation de la jambe se détache et s'agite librement.",
            "action": "Reposez le canard et construisez le gastrique pendant que le plateau gras et les jus attendent le déglacement."
          },
          {
            "state": "Overdone",
            "description": "La peau s'obscurcit vers le noir aux bords et la poitrine se sent ferme et sèche; les jus ont complètement cessé de courir.",
            "action": "Tirez-le immédiatement et reposez-vous bien; carivez mince et sieste généreusement avec de la sauce pour compenser la perte d'humidité."
          }
        ]
      },
      "feelCue": "Tapotez la peau de la poitrine avec un ongle — quand il semble creux et croustillant plutôt que doux, la graisse ci-dessous a rendu. La jambe doit se balancer à l'articulation et ne pas tenir rigide."
    },
    {
      "nodeId": "step_3",
      "action": "Caramélise",
      "inputs": [
        "ing_03",
        "ing_04"
      ],
      "outputState": "gastrique",
      "instructions": "Dans une casserole lourde propre, faire fondre le sucre à feu moyen, sans remuer, en tourbillonnant la casserole pendant qu'elle liquéfie, jusqu'à ce qu'il transforme un caramel ambre profond au bord de l'amertume — ce caramel sombre est ce qui empêche la sauce d'être simplement sucrée. Hors de la chaleur, retenez-vous et versez dans le vinaigre; il va saper et saisir. Retourner à feu doux et remuer jusqu'à ce que le caramel durci fond lisse dans une gaztrique sirupeuse.",
      "visualCue": {
        "primaryTarget": "Un sirop d'ambre foncé et brillant qui sent le sucre grillé avec un lifting au vinaigre vif, assez sombre pour porter une amertume faible et agréable, pas de l'or pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le caramel est d'or paille pâle et le gaztrique goûte très doux, sans profondeur torréfié pour équilibrer l'orange.",
            "action": "Faites cuire le sucre plus loin la prochaine fois — pour l'instant, laissez mijoter le gaztrique un peu pour le concentrer, mais il manquera l'épine dorsale amère."
          },
          {
            "state": "Perfect",
            "description": "Ambre profonde, juste timide d'acajou, avec un arôme grillé et un bord acide propre une fois le vinaigre remué dans lisse.",
            "action": "Ajouter les agrumes pour commencer à construire la sauce bigarade."
          },
          {
            "state": "Overdone",
            "description": "Le caramel est brun foncé verglant sur le noir et dégage des fumées acrides et brûlées; le sirop a un goût dur et amer.",
            "action": "Jeter et recommencer le caramel — le sucre brûlé ne peut être sauvé et va arroser toute la sauce."
          }
        ]
      },
      "feelCue": "Regardez la couleur et faites confiance à votre nez sur l'horloge — caramel tourne de l'or à l'ambre à brûlé en quelques secondes. Le vinaigre frappe avec un sifflement violent et un nuage aigu; gardez votre visage en arrière et votre main stable."
    },
    {
      "nodeId": "step_4",
      "action": "Construire la sauce",
      "inputs": [
        "gastrique",
        "ing_02",
        "ing_07",
        "ing_06",
        "ing_05"
      ],
      "outputState": "sauce_base",
      "instructions": "Blanchir les zestes d'orange dans l'eau bouillante pendant une minute pour adoucir leur amerrissement, puis égoutter. Ajouter l'échalote hachée au gastrique et adoucir brièvement, déglacer avec le vin blanc et réduire de moitié, puis verser dans le bouillon brun chaud et le jus d'orange. Laisser mijoter et réduire jusqu'à ce que la sauce sirote légèrement une cuillère, 8-12 minutes, en écrémant au besoin. Incorporer le zeste blanchi.",
      "visualCue": {
        "primaryTarget": "Une sauce brillante, à roussissement profond, translucide aux bords, avec des rubans de zeste adoucis suspendus à l'intérieur; elle enveloppe le dos d'une cuillère et goûte vif, doux et salé à la fois.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse, qui coule tout droit de la cuillère; les arômes de bouillon, de caramel et d'orange sont séparés et non mariés.",
            "action": "Continuez à réduire à mijoter doucement jusqu'à ce qu'il épaississe suffisamment pour la sieste, puis goûtez à nouveau pour l'équilibre sucré et aigre."
          },
          {
            "state": "Perfect",
            "description": "Légèrement sirupeux, brillant et collant à la cuillère, équilibré entre l'acidité orange vive, le stock salé et l'amertume douce du caramel.",
            "action": "Finissez la sauce avec une liqueur et un tourbillon de beurre froid."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite à un glaçage épais, foncé, surdoué et l'orange a cuit à un bord terne et jammy.",
            "action": "Loosen avec un jet de bouillon ou un peu de jus d'orange frais pour récupérer la luminosité, et rééquilibrer l'assaisonnement."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère dans la sauce et soulevez - la — au bon endroit, elle la recouvre et s'accroche plutôt que de s'égoutter fin et rapide. Le zeste blanc devrait se plier doucement, ne jamais craquer."
    },
    {
      "nodeId": "step_5",
      "action": "Monter et terminer",
      "inputs": [
        "sauce_base",
        "ing_08",
        "ing_09",
        "ing_10",
        "roasted_duck"
      ],
      "outputState": "finished_duck_a_lorange",
      "instructions": "À feu vif direct, remuer la liqueur orange dans la sauce et laisser mijoter quelques secondes pour adoucir son alcool. fouetter dans le beurre froid un bouton à la fois, hors du feu, tourbillonner jusqu'à ce que la sauce devienne brillante et soyeuse — ne la laissez pas bouillir ou elle se fendra. Goûtez et corrigez le sel et l'équilibre sucré-sour. Découpez le canard reposé, éventez les tranches, et cuillerez la sauce chaude encore et encore. Servir immédiatement.",
      "visualCue": {
        "primaryTarget": "Une sauce satinée, miroir-brillante qui s'accroche à chaque tranche de canard dans une fine, même éclat, avec la peau croquante encore audible sous la cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a l'air maigre et mate, le beurre non encore émulsifié; elle a un goût vif et mince sans la richesse arrondie de la graisse.",
            "action": "Frottez le reste du beurre froid jusqu'à ce que la surface soit brillante et que les bords se terminent."
          },
          {
            "state": "Perfect",
            "description": "Gloire, émulsifiée et soyeuse, enrobant le canard dans une sauce claire et équilibrée — douce, aigre et salée dans une ligne propre, la peau encore croquante sous.",
            "action": "Assortir immédiatement et servir avant que la sauce se refroidisse et que la peau s'adoucisse."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été bouillie après l'entrée du beurre et a l'air cassée et grasse, avec une fine lèche huileuse se séparant.",
            "action": "Tirer de la chaleur, fouetter dans une éclaboussure de bouillon froid ou un bouton frais de beurre hors du feu pour réémulsionner, et servir immédiatement."
          }
        ]
      },
      "feelCue": "Faire pivoter la poêle au fur et à mesure que le beurre fond — la sauce doit épaissir et brillant sous le fouet, se sentir plus lourd et plus lisse. Au moment où il mijote dur, il menace de se briser, alors gardez-le juste hors de l'ébullition."
    }
  ]
};
