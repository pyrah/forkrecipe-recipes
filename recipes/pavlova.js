export default {
  "repoId": "master_australian_pavlova_001",
  "parentRepoId": null,
  "slug": "pavlova",
  "author": "ForkRecipe Kitchen",
  "title": "Pavlova",
  "description": "Une coquille de meringue croustillante et enneigée qui laisse place à un intérieur mou en guimauve, surmontée de crème bouillante et de fruits frais vifs — l'équilibre de la croûte, de la douceur et de la tarte est l'art tout entier de ce dessert qui définit le continent.",
  "cuisine": "Australien",
  "culture": "Australie/Nouvelle-Zélande",
  "category": "desserts",
  "tags": [
    "Sans gluten",
    "végétarien",
    "australien",
    "meringue",
    "fruits",
    "Cuisson"
  ],
  "difficulty": 3,
  "activeTime": "25 min",
  "totalTime": "4 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 5,
    "salty": 0,
    "sour": 1,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Blancs d'oeufs (température ambiante, aucune trace de jaune)",
      "ratioValue": 6,
      "defaultUnit": "large",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de canne (superfine)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Starch",
      "name": "Farine de maïs",
      "ratioValue": 2,
      "defaultUnit": "tsp",
      "substitutions": [
        "fléchée"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Vin blanc ou jus de citron",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "crème de tartre (1/4 c. à thé)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Crème fouettée lourde (froid)",
      "ratioValue": 400,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Extrait de vanille (pour crème)",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Fruits de passion frais (poupées)",
      "ratioValue": 4,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Fraises (chaudées, coupées en deux)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "framboises",
        "Mango tranché"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Fruits kiwis (peautés, tranchés)",
      "ratioValue": 3,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Bleuets",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "mûres"
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
      "outputState": "stiff_meringue",
      "instructions": "S'assurer que le bol de mélange, le fouet et tous les ustensiles sont complètement propres, secs et exempts de toute trace de graisse — même une goutte de jaune d'œuf ou un frottis de beurre empêchera les blancs de fouetter. Essuyer tout avec une moitié de citron coupée et bien sécher. Battre les blancs d'oeufs à température ambiante à vitesse moyenne jusqu'à ce qu'ils forment des pics mous qui s'enfoncent à l'extrémité lorsque le fouet est levé. Commencez à ajouter le sucre de roulette une cuillère à soupe à la fois — cet ajout lent n'est pas négociable. Après chaque ajout, battre pendant 30 secondes avant d'ajouter plus. Le processus prend 10-12 minutes au total, et la patience est ce qui crée une meringue stable et dense plutôt qu'une coquille fragile.",
      "visualCue": {
        "primaryTarget": "Une meringue rigide, brillamment blanche et brillante qui tient des pics aigus et droits sans aucune embrouille. Lorsque le bol est inversé, la meringue ne bouge pas. La surface ressemble à de la crème à raser — satinée, pas terne.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des pics doux et brillants qui se courbent à l'extrémité. La meringue glisse quand le bol est incliné. Le sucre n'est toujours pas dissout — la meringue est granuleuse lorsqu'elle est frottée entre les doigts.",
            "action": "Continuer à battre, en ajoutant plus de sucre. Testez en frottant une petite quantité entre l'index et le pouce — battez jusqu'à ce qu'il ne reste pas de graisse."
          },
          {
            "state": "Perfect",
            "description": "Les pics raides support boulon debout. Lorsqu'il est frotté entre les doigts : soyeux-smooth, pas de grain. Quand le bol est inversé : la meringue reste immobile. Brillant blanc et satiné. Il faut de la force pour libérer le fouet.",
            "action": "Plier la fécule de maïs, le vinaigre et la vanille, puis former."
          },
          {
            "state": "Overdone",
            "description": "La meringue a l'air sèche, bosselée et caillé, comme du fromage cottage. Il ne coule pas lorsque le bol est incliné mais se brise en morceaux. Les protéines ont été exagérées et la mousse s'est effondrée.",
            "action": "Cela ne peut pas être récupéré. Recommencer avec un équipement propre et des blancs d'oeuf frais."
          }
        ]
      },
      "feelCue": "Pincez la meringue entre le pouce et l'index et tirez - la lentement — il devrait former un pic ferme et propre qui se tient sur son propre, sans s'effondrer, comme le beurre fouetté raide."
    },
    {
      "nodeId": "step_2",
      "action": "Plier",
      "inputs": [
        "stiff_meringue",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "pavlova_meringue",
      "instructions": "Saupoudrer la fécule de maïs et l'extrait de vanille sur la meringue et verser dans le vinaigre. Plier avec une grande cuillère en métal ou une spatule en caoutchouc en utilisant exactement trois ou quatre grands mouvements balayants du bas du bol en haut et en haut. Ne pas remuer ou battre. Cette technique est intentionnellement sous-mixée — quelques stries non incorporées sont parfaitement fines. La fécule de maïs et le vinaigre travaillent ensemble avec les protéines d'œufs pour créer l'intérieur de la guimauve : l'amidon gélatinise et l'acide maintient les protéines tendres, empêchant la meringue de se fixer entièrement solide.",
      "visualCue": {
        "primaryTarget": "La meringue avec quelques petites stries de fécule de maïs visible mais principalement incorporée. La texture est inchangée par rapport à avant le pliage — toujours rigide et brillant, non dégonflé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Grandes touffes blanches de fécule de maïs sèche encore visibles et vinaigre visiblement mis en commun dans le bol. La meringue est marbrée.",
            "action": "Un ou deux plis plus doux — juste assez pour incorporer les taches sèches et le vinaigre en commun."
          },
          {
            "state": "Perfect",
            "description": "Meringue est toujours raide et brillant. La fécule de maïs et le vinaigre sont principalement incorporés avec peut-être une faible stries ou deux restants. La meringue tient sa forme quand une cuillère est traînée.",
            "action": "Déposer immédiatement sur la plaque de cuisson préparée."
          },
          {
            "state": "Overdone",
            "description": "La meringue s'est dégonflée du surpliage. Il semble plus doux et moins volumineux. Les pics ne tiennent plus forme.",
            "action": "Former et cuire rapidement — la meringue dégonflée s'étendra davantage et pourrait craquer, mais aura encore un bon goût."
          }
        ]
      },
      "feelCue": "Soulevez une grande cuillère — la meringue devrait tenir sa forme sur la cuillère pendant plusieurs secondes avant de sombrer lentement, dense et oreiller comme un nuage fait solide."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "pavlova_meringue"
      ],
      "outputState": "baked_pavlova_shell",
      "instructions": "Dessinez un cercle de 22 cm sur une feuille de papier parchemin (tracez une assiette de dîner), retournez le parchemin de sorte que le crayon soit vers le bas et placez-le sur une plaque de cuisson. Spotez la meringue sur le cercle dans une pile bombée. À l'aide de l'arrière d'une cuillère, formez-la en un disque avec des côtés légèrement surélevés et un creux peu profond au centre. Cuire au four à 140°C (285°F) pendant 1 heure et 15 minutes. Éteignez complètement le four et laissez la pavlova à l'intérieur avec la porte fermée pendant au moins 2 heures — la nuit est idéale. Ne pas ouvrir le four pendant cette période.",
      "visualCue": {
        "primaryTarget": "Après le repos du four: une coquille de meringue blanc ivoire qui a séché à un extérieur croustillant et légèrement crayeux. La surface peut avoir des fissures fines — c'est traditionnel et beau. La base est sèche et sonne creuse lorsqu'elle est tapée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La meringue est encore douce et collante au toucher. L'extérieur n'a pas une coquille croustillante. Il s'en tiendra au parchemin et s'effondrera lorsqu'il sera déplacé.",
            "action": "Fermez le four et partez pendant une heure. Le temps de repos est aussi important que le temps de cuisson — ne précipitez jamais cette étape."
          },
          {
            "state": "Perfect",
            "description": "L'extérieur est sec, croustillant et blanc ivoire. Des fissures fines peuvent apparaître à la surface — c'est caractéristique, pas une défaillance. La pavlova se lève proprement du parchemin. L'intérieur, quand le puits est sondé avec une cuillère, est doux et de type guimauve.",
            "action": "Laisser à température ambiante jusqu'à ce qu'il soit prêt à monter. Ne pas réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "La pavlova a pris une teinte jaune ou brun et l'extérieur est très dur tout au long sans guimauve intérieure restant. Le four était trop chaud ou trop long.",
            "action": "Top et servir de toute façon — la saveur est toujours meringue, juste sans le contraste intérieur qui donne."
          }
        ]
      },
      "feelCue": "Appuyez sur la surface avec un ongle — vous devriez entendre un clic sec et croustillant, et l'extérieur devrait produire légèrement sous pression, mais pas couler dans, comme taper sur une coquille creuse."
    },
    {
      "nodeId": "step_4",
      "action": "Whip",
      "inputs": [
        "ing_06",
        "ing_07"
      ],
      "outputState": "whipped_cream",
      "instructions": "Juste avant de servir — pas les heures avant — battre la crème fouettée lourde froide et l'extrait de vanille dans un bol réfrigéré jusqu'à ce que la crème atteigne des pics de moyenne fermeté. La crème devrait tenir sa forme lorsque le bol est incliné, mais avoir encore un léger glissade au sommet des pics. Arrêtez avant que la crème devienne raide ou granuleuse. La cible est une crème qui gonfle généreusement plutôt que de se tenir dans des blocs rigides — elle s'installera légèrement sur la meringue, qui est l'aspect correct.",
      "visualCue": {
        "primaryTarget": "Crème douce, bouffante, blanc ivoire avec des pics qui se bouclent doucement à l'extrémité. Lorsque cuilleré sur le pavlova, il se dépose dans des monticules doux plutôt que des pics rigides.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème est toujours versable et ne tient pas les pics. Il glissera de la meringue et de la piscine autour de la base.",
            "action": "Continuer à battre pendant 30 secondes jusqu'à ce que des pics moyens se forment — pics qui tiennent quand le fouet est maintenu debout mais bouclent à l'extrémité."
          },
          {
            "state": "Perfect",
            "description": "La crème tient un pic doux et courbé qui s'enfonce légèrement à l'extrémité. Billowy et volumineux. Blanc pur avec un éclat satiné.",
            "action": "Déposer immédiatement sur le pavlova et garnir de fruits."
          },
          {
            "state": "Overdone",
            "description": "La crème est raide, granuleuse, et commence à paraître jaune. Il a commencé à se transformer en beurre.",
            "action": "Plier dans 2 cuillères à soupe de crème fraîche froide pour adoucir. Utilisez vite."
          }
        ]
      },
      "feelCue": "Passez une cuillère à travers la crème — elle devrait laisser une piste propre et lisse qui s'assouplit progressivement aux bords, comme en tirant à travers la crème caillot très froide."
    },
    {
      "nodeId": "step_5",
      "action": "Garnir",
      "inputs": [
        "baked_pavlova_shell",
        "whipped_cream",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "finished_pavlova",
      "instructions": "Transférer la coquille de pavlova refroidie dans une assiette de service. Pile la crème fouettée dans le centre bien dans des monticules généreuses et bondissantes, lui permettant de se propager naturellement vers les bords élevés sans déborder. Disposer les moitiés de fraises et les tranches de kiwi d'abord, puis disperser les bleuets et enfin cuiller la pulpe de fruit passion sur tout — la pulpe dorée et sourcie qui coule sur la crème et le fruit est la finale signature. Servir immédiatement ou dans les 30 minutes — le pavlova s'assouplit rapidement une fois surmonté.",
      "visualCue": {
        "primaryTarget": "Un arrangement étonnant: coquille de meringue blanc neige, nuage de crème, et une cascade de fruits brillants - rouge, vert, bleu, et or passionfruit - créant un contraste vif de textures et de couleurs.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème a été appliquée trop parcimonieusement et le fruit est assis directement sur la meringue. Les couches visuelles de crème entre la coquille et le fruit sont perdues.",
            "action": "Ajouter plus de crème généreusement — le pavlova doit être abondant, non retenu."
          },
          {
            "state": "Perfect",
            "description": "La coquille de meringue est visible autour du bord, la crème souffle généreusement au centre, et le fruit est empilé avec l'abandon sur le dessus. La pulpe de fruits de la passion coule dans des rivaux dorés sur tout. Servir dans les 30 minutes.",
            "action": "Apportez à la table immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le pavlova était couvert d'heures d'avance et s'est assis au réfrigérateur. La meringue a absorbé l'humidité de la crème et des fruits et la coquille croustillante est devenue douce et mâcheuse partout.",
            "action": "Il a encore bon goût mais perd le contraste textural. Servir immédiatement les portions restantes et ne pas réfrigérer une fois surmontées."
          }
        ]
      },
      "feelCue": "La première cuillère à travers un pavlova parfait vous donne trois résistances en séquence: la croûte légère de la coquille, la douceur de production de l'intérieur de guimauve, et le glissade frais de la crème."
    }
  ]
};
