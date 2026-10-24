export default {
  "repoId": "master_austrian_austriansachertorte_001",
  "parentRepoId": null,
  "slug": "austrian-sachertorte",
  "author": "ForkRecipe Kitchen",
  "title": "Sachertorte",
  "description": "Le légendaire gâteau au chocolat dense de Vienne — deux couches d'éponge sombre, à peine sucrée, scellées avec de la confiture d'abricot et drapées dans une glaçure de chocolat lisses et miroirs qui se sert d'une touche sonore.",
  "cuisine": "Autriche",
  "culture": "Viennese",
  "category": "desserts",
  "tags": [
    "dessert",
    "laitière",
    "œuf",
    "chocolat",
    "autrien",
    "gâteau",
    "glaçure"
  ],
  "difficulty": 4,
  "activeTime": "1 hour",
  "totalTime": "4 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 2,
    "bitter": 4,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Chocolat noir (70%), fondu",
      "ratioValue": 140,
      "defaultUnit": "g",
      "substitutions": [
        "65% chocolat noir"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé, ramolli",
      "ratioValue": 130,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre glacé",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "sucre en poudre"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Protein",
      "name": "Jaunes d'œuf",
      "ratioValue": 6,
      "defaultUnit": "pieces",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 140,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Blancs d'oeufs",
      "ratioValue": 6,
      "defaultUnit": "pieces",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Sucre de canne (pour meringue)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Sweetener",
      "name": "Confiture d'abricot",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "conserves d'abricot"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Umami",
      "name": "Chocolat noir (70 %) pour glaçure",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Sweetener",
      "name": "Sucre de ricin (pour glaçure)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Hydration",
      "name": "Eau (pour glaçure)",
      "ratioValue": 125,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Crémer",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_01",
        "ing_04"
      ],
      "outputState": "chocolate_yolk_base",
      "instructions": "Préchauffer le four à 170°C (350°F). Beurre et farine d'une poêle à ressort de 23cm, alignez la base de parchemin. Battre le beurre adouci et le sucre glace à vitesse moyenne jusqu'à ce qu'il soit clair et pâle — environ 5 minutes. Ajouter le chocolat fondu (mais refroidi) et battre jusqu'à incorporation complète. Ajouter les jaunes d'œufs un à la fois, battant bien après chacun. Le mélange sera légèrement caillé — c'est normal. Tremper la farine dans le mélange et la plier délicatement avec une spatule.",
      "visualCue": {
        "primaryTarget": "Une pâte de chocolat foncée et dense qui tient sa forme sur la spatule et a une texture mat légèrement rugueuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre et le sucre ne sont pas suffisamment aérés. Le mélange semble dense et gris, pas léger. Jaunes d'oeufs non entièrement incorporées — stries visibles.",
            "action": "Battre plus longtemps à vitesse moyenne. Le mélange beurre-sucre doit être visiblement allégé avant d'ajouter du chocolat."
          },
          {
            "state": "Perfect",
            "description": "Doux, foncé, pâte de chocolat dense. Chaque jaune d'œuf est entièrement incorporé. Farine repliée sans stries visibles. Le mélange est lourd mais tient une forme lorsqu'il est soulevé sur la spatule.",
            "action": "Battre les blancs d'oeufs aux pics raides et plier dans la base."
          },
          {
            "state": "Overdone",
            "description": "La farine a été battue au lieu de se replier — le mélange s'est serré et le gluten s'est développé. Sense springy et élastique.",
            "action": "Continuez. Le gâteau peut être légèrement plus dense et la hausse légèrement moins, mais la glaçure le sauvera visuellement."
          }
        ]
      },
      "feelCue": "La base de chocolat doit se sentir très lourde et dense sur la spatule — presque comme une pâte à brownie épaisse, pas de pâte à gâteau légère."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "ing_06",
        "ing_07"
      ],
      "outputState": "stiff_meringue",
      "instructions": "Dans un bol soigneusement propre, battre les blancs d'oeufs à vitesse moyenne jusqu'à mousser. Augmenter à grande vitesse et ajouter progressivement le sucre de la roulette dans un cours d'eau lent et stable. Battre à raides et brillants pics — la meringue devrait tenir un pic ferme qui tourne à peine à l'extrémité et ressemble à de la mousse de rasage. Le sucre doit être complètement dissous — frotter une petite quantité entre les doigts: il doit se sentir lisse, pas gritty.",
      "visualCue": {
        "primaryTarget": "Meringue brillante avec un éclat blanc vif et des pics qui se tiennent sans curling.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des pics moelleux qui s'effondrent rapidement. La meringue glisse dans le bol quand elle est inclinée. Toujours légèrement translucide.",
            "action": "Continuez à battre en haut. Des pics raides sont essentiels — les blancs sous-battus se dégonfleront pendant le pliage."
          },
          {
            "state": "Perfect",
            "description": "Des pics glacés, brillants et blancs qui tiennent sans tomber. Frottez une petite quantité entre les doigts: pas de graisse — le sucre est complètement dissous. Le bol peut être inversé sans que la meringue bouge.",
            "action": "Plier doucement dans la base de chocolat en trois ajouts."
          },
          {
            "state": "Overdone",
            "description": "Le meringue est sec, granuleux et grumeux. Je m'éloigne en morceaux. Les Blancs ont été battus jusqu'au point de rupture.",
            "action": "Les blancs trop battus aéreront encore le gâteau, mais moins efficacement. Plier très doucement."
          }
        ]
      },
      "feelCue": "Frotter une petite pincée entre le pouce et l'index — une meringue parfaitement prête devrait se sentir lisse comme de la soie, avec zéro grittiness de sucre non dissout."
    },
    {
      "nodeId": "step_3",
      "action": "Incorporer délicatement",
      "inputs": [
        "chocolate_yolk_base",
        "stiff_meringue"
      ],
      "outputState": "sachertorte_batter",
      "instructions": "Ajouter le quart de la meringue à la base de chocolat et remuer vigoureusement pour l'alléger. Puis ajoutez le reste de la meringue en deux ajouts, pliant avec une grande spatule de caoutchouc en utilisant des coups de J lents et délibérés — coupés au fond, balayer sous, plier sur. Faites tourner le bol entre chaque pli. Arrêtez dès qu'il ne reste plus de stries blanches. La pâte doit être aérée, mais elle doit être très lourde. Verser dans la poêle préparée, lisser le dessus et cuire immédiatement.",
      "visualCue": {
        "primaryTarget": "Une pâte uniformément sombre et lisse sans stries de meringue blanche. Légèrement aéré mais dense.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries de meringue blanches encore clairement visibles. Les calques ne sont pas entièrement incorporés.",
            "action": "Deux ou trois plis plus soignés, en vérifiant le fond du bol pour les poches de base non mélangée."
          },
          {
            "state": "Perfect",
            "description": "Une pâte au chocolat uniformément noire. Pas de stries blanches. La texture est plus légère que la base, légèrement aérée, mais encore nettement lourde et dense. La surface est lisse.",
            "action": "Verser immédiatement dans la poêle et cuire."
          },
          {
            "state": "Overdone",
            "description": "La batterie s'est dégonflée par surpliage. Il semble dense, compact, et la surface n'a aucun air.",
            "action": "Cuire immédiatement — il n'y a aucun moyen de restaurer la meringue dégonflée."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir lourde mais avec un ressort subtil à elle — vous pouvez voir de petites bulles si vous tenez la spatule contre une lumière."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "sachertorte_batter"
      ],
      "outputState": "baked_sachertorte_layers",
      "instructions": "Cuire à 170°C pendant 45-55 minutes. Le Sachertorte devrait cuire relativement à plat avec un dôme très léger. Il est fait quand une brochette insérée au centre sort propre et le dessus ressort quand légèrement pressé. Laisser refroidir dans la casserole pendant 15 minutes, puis relâcher et inverser sur un support de fil pour refroidir complètement. Quand il fait entièrement froid, couper horizontalement à travers le centre pour faire deux couches égales.",
      "visualCue": {
        "primaryTarget": "Un gâteau au chocolat noir plat à très légèrement bombé avec une surface supérieure sèche, à peine craquelée et des côtés propres.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Une brochette sort avec une pâte mouillée. Le dessus est doux et les tirets sont définitivement pressés. Le centre est visiblement déprimé.",
            "action": "Cuire encore 10 minutes. Un Sachertorte est très dense et prend plus de temps que prévu."
          },
          {
            "state": "Perfect",
            "description": "Nettoyez la brochette. Respire complètement lorsqu'il est pressé. Surface sombre et sèche avec à peine n'importe quel dôme. Les côtés ont légèrement tiré de la casserole. Des odeurs de chocolat noir.",
            "action": "Refroidir complètement avant de trancher. Un gâteau chaud s'effondrera quand il sera coupé."
          },
          {
            "state": "Overdone",
            "description": "Surface très dure et sèche. Le gâteau tire de façon spectaculaire des côtés. La brochette s'écrase presque quand elle est retirée.",
            "action": "La glace va ajouter de l'humidité. Appliquer la confiture supplémentaire pour compenser."
          }
        ]
      },
      "feelCue": "Le haut d'un Sachertorte refroidi et bien cuit doit se sentir ferme mais pas dur lorsqu'il est pressé — comme un brownie ferme, avec une légère résilience."
    },
    {
      "nodeId": "step_5",
      "action": "Glacer",
      "inputs": [
        "baked_sachertorte_layers",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "finished_sachertorte",
      "instructions": "Chauffer la confiture d'abricot avec 2 c. à soupe d'eau et passer à travers un tamis pour la rendre lisse. Brossez une couche très fine sur la surface coupée de la couche inférieure et assemblez les deux couches. Ensuite, brossez soigneusement l'extérieur entier du gâteau assemblé — haut et côtés — avec la confiture chaude. Laisser agir pendant 15 minutes. Pour la glaçure : mélanger le sucre et l'eau dans une casserole, porter à ébullition et cuire à exactement 103°C (217°F). Retirer du feu et ajouter le chocolat haché tout à la fois. Incorporer jusqu'à ce qu'il soit entièrement lisse et brillant. Verser immédiatement sur le gâteau enrobé de confiture sur un support de fil sur un plateau. Utilisez un couteau à palette en un seul balayage pour lisser le dessus — ne pas aller et venir. Laisser régler complètement à température ambiante.",
      "visualCue": {
        "primaryTarget": "Un glaçure chocolaté miroir-smooth, noir poix couvrant chaque surface du gâteau sans gouttes d'eau, bulles, ou marques palette-knife.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La glaçure est trop chaude et mince — en courant hors du gâteau avant qu'il ne puisse enrober uniformément. Les côtés ont des taches nues.",
            "action": "Laisser refroidir encore 3-5 minutes, en remuant, jusqu'à ce qu'il enrobe à peine une cuillère et s'est suffisamment épaissi pour rester sur une surface verticale."
          },
          {
            "state": "Perfect",
            "description": "La glaçure coule lentement et uniformément sur le gâteau, s'arrêtant à la base. La surface est vitreuse et miroir. N'importe quelle bulle d'air éclate dans une minute. Set ferme à température ambiante avec une touche sonore lorsqu'elle est tapée.",
            "action": "Laisser régler à température ambiante pendant 2 heures minimum. Ne pas réfrigérer, il perdra le gloss."
          },
          {
            "state": "Overdone",
            "description": "La glace a été trop cuite et saisie. Trop épaisse pour se verser en douceur, elle traîne et tire lorsqu'elle est versée, laissant des marques.",
            "action": "Chauffer doucement sur un bain d'eau et ajouter 1-2 c. à soupe d'eau chaude à mince. Mélanger lisse et appliquer rapidement."
          }
        ]
      },
      "feelCue": "Un glaçure Sachertorte parfaitement défini devrait donner un robinet croustillant et vitreux lorsque vous le frappez avec un ongle — le bruit de chocolat trempé, pas de ganache molle."
    }
  ]
};
