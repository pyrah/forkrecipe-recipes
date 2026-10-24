export default {
  "repoId": "master_continental_sourdough_starter_001",
  "parentRepoId": null,
  "slug": "sourdough-starter",
  "author": "ForkRecipe Kitchen",
  "title": "Sourdough Starter",
  "description": "Une culture vivante construite à partir de rien d'autre que de la farine et de l'eau — coaxiée sur une semaine d'un lisier plat et sans vie en un levain bondissant et doux qui double sur le calendrier et des odeurs de yaourt mûr et de pomme verte. Nourrir, regarder respirer, et il élèvera le pain pour la vie.",
  "cuisine": "Continental",
  "culture": "Europe centrale",
  "category": "fermented",
  "tags": [
    "Pâtes alimentaires",
    "démarreur",
    "lévaine",
    "levure sauvage",
    "fermentation",
    "pain",
    "végétalien"
  ],
  "difficulty": 3,
  "activeTime": "10 min",
  "totalTime": "7 days",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 1,
    "salty": 0,
    "sour": 4,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de seigle entière (pour la première construction — élevée en levure et enzymes sauvages)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "Farine de blé entier"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude (28-30 °C/non chlorée)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "eau de source embouteillée",
        "eau du robinet filtrée reposée 24h"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Pain non blanchi ou farine à usage complet (pour aliments quotidiens)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "50/50 pain et blé entier pour une culture plus vivante"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Hydration",
      "name": "Eau chaude pour aliments (28-30°C)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Base",
      "name": "Déchets de départ à maturité (portés vers l'avant à chaque alimentation)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "initial_slurry",
      "instructions": "Dans un pot en verre propre, remuer toute la farine de seigle et l'eau chaude dans une pâte épaisse et sans morceaux — la consistance de la pâte à crêpes. Grattez les côtés, marquez le niveau avec une bande ou un ruban en caoutchouc, et couvrez-le de façon à ce que le gaz puisse s'échapper, mais la surface reste protégée. Reposez-vous à température ambiante chaude, 24–26°C, pendant 24 heures. Le seigle porte une population dense de levures sauvages et de bactéries lactiques plus les enzymes qui les nourrissent, de sorte qu'il déclenche une culture plus rapidement que la farine blanche ne l'a jamais pu.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse et hydratée sans poches de farine sèche, assise à plat et même à la ligne marquée, qui commence juste à montrer quelques bulles de pinprick à la fin du premier jour.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est raide et shaggy avec des stries sèches, ou si lâche il verse comme de la soupe. Pas de bulles du tout et il sent uniquement de la farine crue.",
            "action": "Ajuster avec une cuillère à café de farine ou d'eau pour atteindre une pâte épaisse, remuer lisse et simplement attendre — le premier jour est souvent silencieux. Assurez-vous que la chambre est vraiment chaude."
          },
          {
            "state": "Perfect",
            "description": "Une pâte uniforme qui a levé très légèrement et est roussée avec de petites bulles. Il sent légèrement doux, herbacé, et un toucher de noix.",
            "action": "Laissez-le encore 12 à 24 heures si nécessaire, puis passez au premier flux une fois qu'un bouillonnement apparaît."
          },
          {
            "state": "Overdone",
            "description": "Après quelques jours, la surface a l'air grise, alcoolique, ou a un liquide mince (hooch) sur le dessus et sent fortement le solvant ou le vinaigre.",
            "action": "Il s'agit d'une faim précoce normale, et non d'un échec: versez tout ce qu'il faut, jetez - vous dans une cuillère et allez tout droit à l'alimentation. Les microbes sont éveillés et ont besoin de nourriture."
          }
        ]
      },
      "feelCue": "Le lisier doit se sentir frais et collant, glisser légèrement sur la cuillère comme de la crème épaisse. À la fin de la journée, il peut donner le sifflement le plus faible de gaz lorsqu'il est agité, votre premier signe de vie."
    },
    {
      "nodeId": "step_2",
      "action": "Aliments pour animaux",
      "inputs": [
        "initial_slurry",
        "ing_03",
        "ing_04"
      ],
      "outputState": "young_culture",
      "instructions": "Commencez les flux quotidiens. Jetez tout sauf environ 50 g de lisier, puis remuez-le dans un poids égal de farine fraîche et d'eau chaude — environ 50 g chacun. Passez maintenant au pain non blanchi ou à la farine à usage complet; il construit la force de gluten que vous voulez dans un levain. Remarquez le niveau, couvrez-le librement et gardez-le au chaud. Nourrir une fois toutes les 24 heures pendant les jours 3 et 4. Le rejet maintient la culture jeune et l'acide suffisamment bas pour que la levure se multiplie; sans elle, le mélange devient trop acide pour que la levure prospère.",
      "visualCue": {
        "primaryTarget": "En un jour d'alimentation, la culture grimpe nettement au-dessus de la marque, dôme légèrement, et est projetée à travers des bulles de taille variable — clairement fermentant, même si pas encore doubler.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Peu ou pas de montée et seulement des bulles clairsemées 24 heures après un repas. L'odeur est plate ou faiblement choux-comme — le faux départ arnaque commun autour des jours 3-4.",
            "action": "Restez le cours et continuez à vous nourrir selon les horaires. S'il s'arrête pendant plusieurs jours, déplacez-le quelque part plus chaud ou ajoutez une cuillère de seigle à l'aliment pour la ré-alimenter."
          },
          {
            "state": "Perfect",
            "description": "Une augmentation visible de 30 à 80 % avec un corps ouvert et bubble et un haut légèrement bombé. L'arôme est devenu agréablement aigre et levure, comme le yogourt acidulé ou la bière.",
            "action": "Continuer à nourrir une fois par jour. Au fur et à mesure que l'activité se renforce vers le cinquième jour, il faut se nourrir deux fois par jour, toutes les 12 heures."
          },
          {
            "state": "Overdone",
            "description": "La culture s'est levée, a culminé, et s'est effondrée bien avant le prochain repas, avec hoch pooling sur le dessus et une forte odeur de polish des ongles.",
            "action": "Il fermente plus vite qu'il ne l'alimente, raccourcit l'intervalle toutes les 12 heures et le garde légèrement plus frais. C'est un signe de force, pas d'échec."
          }
        ]
      },
      "feelCue": "Fraîchement nourrie, la pâte est molle et lisse; comme elle fermente, elle devient plus légère, plus printanière, et est couverte d'air. Une goutte sur le bout des doigts doit sentir légèrement aigre et propre, jamais pourri ou cheesy."
    },
    {
      "nodeId": "step_3",
      "action": "Rippen",
      "inputs": [
        "young_culture",
        "ing_03",
        "ing_04"
      ],
      "outputState": "active_starter",
      "instructions": "À partir du jour 5, nourrir deux fois par jour, toutes les 12 heures, jeter à ~50 g à chaque fois et rafraîchir avec égale farine et eau. La culture doit maintenant être fiable : elle doit s'élever et tomber sur un rythme prévisible. Regardez un cycle complet de l'alimentation au pic — quand il double constamment en 4–8 heures et sent la douceur et la maturité, il est mature. Confirmer l'état de préparation avec l'essai de flottaison : déposer une cuillère de démarrage à pic dans l'eau. S'il flotte, il est flottant avec du gaz et prêt à lever le pain.",
      "visualCue": {
        "primaryTarget": "Un démarreur qui se double de façon fiable à son sommet, plein d'un réseau serré, même de bulles, avec un haut légèrement bombé qui n'a pas encore commencé à reculer. Une cuillère flotte dans l'eau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il ne monte qu'à mi-chemin, prend plus de 8 heures pour atteindre le pic, ou une cuillère coule dans l'essai de flotteur. L'odeur est timide.",
            "action": "Donnez-lui plus de jours de repas deux fois par jour. Les jeunes cultures acquièrent progressivement le pouvoir — la chaleur et l'alimentation cohérente sont tout ce dont elles ont besoin."
          },
          {
            "state": "Perfect",
            "description": "Doubler ou plus en 4-8 heures, léger et aéré, bombé et brillant au pic, et il flotte. L'arôme est équilibré — tanné, doux, légèrement de fruits mûrs et de yaourt.",
            "action": "Il est prêt à cuire avec. Utilisez-le à ou juste avant le pic, quand il est à la flottabilité et l'activité maximale."
          },
          {
            "state": "Overdone",
            "description": "Au-delà de son pic : le dôme est tombé dans une surface engloutie, ridée, hoch s'est formé, et l'odeur est fortement acide et boueuse.",
            "action": "Encore utilisable, mais à son plus faible et à son plus aigre — le nourrir et attendre le prochain pic avant de cuire, ou utiliser immédiatement si vous voulez un pain plus aigre."
          }
        ]
      },
      "feelCue": "Au point culminant, le démarreur est léger et oreiller, jonglant comme une mousse épaisse et s'accrochant au pot dans des rubans aérés. Ça sent le yogourt de tarte avec un murmure de pomme verte — appétissant, jamais offensant."
    },
    {
      "nodeId": "step_4",
      "action": "Maintenir",
      "inputs": [
        "active_starter",
        "ing_05",
        "ing_03",
        "ing_04"
      ],
      "outputState": "finished_starter",
      "instructions": "Pour maintenir le démarreur en vie à long terme, se déposer dans un aliment d'entretien : transporter 50 g de démarreur mature, jeter le reste et rafraîchir avec 50 g de farine et 50 g d'eau (un rapport 1:1:1). Si la cuisson est fréquente, tenez-la à température ambiante et nourrissez-la une ou deux fois par jour. Si vous faites une cuisson occasionnelle, entreposez - la au réfrigérateur et nourrissez - la chaque semaine — laissez - la chauffer et monter une fois à température ambiante avant chaque cuisson. Un démarrage bien entretenu s'améliore pendant des années, approfondissant la saveur et la fiabilité.",
      "visualCue": {
        "primaryTarget": "Une culture stable et résiliente qui revient à un pic complet dans les heures qui suivent chaque repas, avec une odeur propre et douce — aussi heureuse, réfrigérée et dormante ou chaude et bouillonnante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sluggish après le stockage du réfrigérateur ou un aliment manqué — lente à monter, avec du liquide grisâtre sur le dessus et un arôme plat.",
            "action": "Revivez-le avec deux ou trois aliments frais à la température ambiante, à 12 heures d'intervalle, en jetant bien chaque fois. Il va rebondir à pleine force rapidement."
          },
          {
            "state": "Perfect",
            "description": "Prédictible et vigoureux : double le calendrier, sent propre et tannant, et flotte lorsqu'il atteint son maximum. Maintien avec un effort minimal.",
            "action": "Gardez votre rythme — tous les jours sur le comptoir ou chaque semaine au réfrigérateur — et faites cuire chaque fois qu'il est au pic. Passez un pot à un ami."
          },
          {
            "state": "Overdone",
            "description": "Négligé pendant des semaines : hoche foncée, teinte orange ou rose, ou moule flou à la surface.",
            "action": "Un moule rose, orange ou flou signifie contamination — jetez - le entièrement et recommencez. Seul un hoche sombre sans danger signifie qu'il est affamé; versez-le et recommencez à se nourrir."
          }
        ]
      },
      "feelCue": "Un démarreur sain et maintenu se sent vif et élastique, s'étirant en brins collés au gluten sur la cuillère et rebondissant en arrière au sommet. L'odeur reste étincelante et propre année après année — cette constance est la marque d'une culture mature."
    }
  ]
};
