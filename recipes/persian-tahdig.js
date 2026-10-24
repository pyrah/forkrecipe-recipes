export default {
  "repoId": "master_persian_persian_tahdig_001",
  "parentRepoId": null,
  "slug": "persian-tahdig",
  "author": "ForkRecipe Kitchen",
  "title": "Tahdig persan (riz crispy)",
  "description": "Le riz qui est autant au sujet de sa croûte dorée et éclatante que les grains moelleux au - dessus de celle - ci — bouillis, reposés, cuits à la vapeur sous un couvercle recouvert d'une serviette pendant une heure, jusqu'à ce que le fond se transforme en un disque carbonisé qui s'éloigne du pot dans une feuille dramatique et crépitante.",
  "cuisine": "Perse",
  "culture": "Iranien",
  "category": "grains",
  "tags": [
    "persienne",
    "riz",
    "croustillant",
    "végétarien",
    "technique"
  ],
  "difficulty": 3,
  "activeTime": "20 min",
  "totalTime": "1 hr 20 min",
  "ratioSystem": "parts",
  "stars": 4120,
  "forks": 388,
  "contributors": 42,
  "license": "CC-BY-SA",
  "createdAt": "2024-10-21",
  "updatedAt": "2026-02-14",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz basmati vieilli (grain extra-long)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Basmati régulier (soak extra 30 min)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel de mer fin (pour l'eau bouillante)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile neutre (fleur de soleil ou légumes)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre clarifié / ghee pour une saveur plus riche"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé, cube",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Eau (pour parboulage)",
      "ratioValue": 500,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Morceaux de riz",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_05"
      ],
      "outputState": "parboiled_rice",
      "instructions": "Rincer le riz dans de l'eau froide jusqu'à ce que l'eau soit claire, ce qui élimine l'excès d'amidon de surface qui, autrement, collerait les grains ensemble. Laisser tremper dans l'eau froide légèrement salée pendant 30 minutes minimum, 2 heures idéalement. Égoutter. Portez un grand pot d'eau fortement salée (il doit avoir un goût comme la mer) à ébullition vigoureuse. Ajouter le riz trempé, égoutté et le parboil pendant exactement 6 à 7 minutes, en remuant doucement une fois. Le riz est fait quand l'extérieur est entièrement cuit, mais le centre a encore un petit noyau crayeux — mordez un grain à vérifier. Égoutter immédiatement dans une calandre et rincer brièvement avec de l'eau tiède pour arrêter la cuisson.",
      "visualCue": {
        "primaryTarget": "Chaque grain est légèrement translucide aux bords, mais montre un noyau blanc crayeux distinct lorsqu'il est mordu. Le riz est al dente — cuit à l'extérieur, ferme au milieu.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La plupart du grain est encore dur et crayeux partout. L'extérieur est à peine ramolli. Le riz semble en grande partie inchangé par rapport au cru.",
            "action": "Continuer à bouillir encore 2 minutes et vérifier à nouveau. Le gazouillis est le fondement: le riz mal cuit n'aura pas de vapeur à la perfection dans la dernière étape."
          },
          {
            "state": "Perfect",
            "description": "Couche extérieure entièrement cuite, translucide-douce. Un point blanc visible au centre quand vous mordez un grain. Le grain est allongé — il a beaucoup augmenté.",
            "action": "Égoutter immédiatement et rincer à l'eau tiède. Travailler rapidement — la cuisson de report continue dans la calandre."
          },
          {
            "state": "Overdone",
            "description": "Le grain n'a pas de centre crayeux — il est entièrement mou. Le riz est déjà entièrement cuit et va devenir mousseux à la vapeur.",
            "action": "Égoutter et rincer à l'eau froide immédiatement pour arrêter la cuisson. Passez à l'étape vapeur, mais réduisez le temps de vapeur à 30 minutes. Le tahdig va encore se former."
          }
        ]
      },
      "feelCue": "Bite un grain parboulé en deux — l'extérieur devrait produire immédiatement pendant que l'intérieur repousse faiblement, comme une pâte al dente qui a encore une minute de cuisson devant elle."
    },
    {
      "nodeId": "step_2",
      "action": "Construire la croûte de tahdig",
      "inputs": [
        "parboiled_rice",
        "ing_03"
      ],
      "outputState": "layered_rice_pot",
      "instructions": "Dans un pot antiadhésif à fond lourd (24–26cm de diamètre), faire chauffer l'huile à feu moyen jusqu'à ce qu'elle mijote. Pour une croûte unie : ajouter 2 à 3 cuillerées à soupe d'eau à l'huile et la laisser cuillerer, puis empiler immédiatement dans tout le riz parboulé, le broyant légèrement au centre. Ne pas presser ou compacter — utilisez une poignée de cuillère pour faire passer 5-6 trous à travers le riz pour permettre à la vapeur de remonter. Pour un tahdig de pomme de terre (variation bien-aimée): placer les fines tranches de pomme de terre dans la poêle huilée dans une seule couche de chevauchement avant d'ajouter le riz. Dispersez le beurre cube sur le dessus du riz grillé.",
      "visualCue": {
        "primaryTarget": "Un grand monticule de riz avec des évents à vapeur poêlés, assis dans l'huile légèrement grésillante, beurre distribué sur le dessus — prêt à être couvert pour la phase de vapeur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz a été pressé à plat et compacté, sans évents à vapeur. La couche de riz est dense et uniforme.",
            "action": "Utilisez une baguette pour évents de haut en bas. Le riz compact s'évapore inégalement et produit une croûte épaisse et caoutchouteuse plutôt qu'une croûte croustillante."
          },
          {
            "state": "Perfect",
            "description": "Monticule souple avec trous de ventilation visibles. L'huile est étourdissante aux bords du pot. La couche inférieure de riz commence à cuire dans l'huile.",
            "action": "Enveloppez fermement le couvercle du pot dans une serviette de cuisine propre, puis placez fermement sur le pot."
          },
          {
            "state": "Overdone",
            "description": "L'huile est trop chaude — le riz ajouté est déjà grincant agressivement et brunissant immédiatement, avant le pas de vapeur.",
            "action": "Réduire immédiatement la chaleur. La croûte se forme plus de 45 minutes en bas, pas dans les 2 premières minutes."
          }
        ]
      },
      "feelCue": "Le tas de riz sur le dessus devrait se sentir aussi lâche que la neige fraîchement tombée — pas de compactage, pas de résistance quand vous poussez une baguette à travers elle. Cette aération permet à la vapeur de soulever chaque grain."
    },
    {
      "nodeId": "step_3",
      "action": "Couvercle à vapeur sous la serviette",
      "inputs": [
        "layered_rice_pot"
      ],
      "outputState": "steamed_tahdig",
      "instructions": "Enveloppez fermement le couvercle du pot dans une serviette de cuisine propre, en serrant les coins au sommet afin qu'ils ne s'accrochent pas près du brûleur. Placez le couvercle sur le pot — la serviette absorbe la condensation qui, autrement, s'égoutterait et rendrait le riz humide. Réglez le feu à moyen-élevé pendant 3 minutes pour commencer à construire la croûte, puis réduisez à la plus basse mijotez votre brûleur. Faire cuire pendant 40 à 45 minutes. Ne levez pas le couvercle. La croûte dorée se développe d'en bas à travers une chaleur régulière et douce, perturbant ce processus.",
      "visualCue": {
        "primaryTarget": "Au bout de 40 minutes : des spores de vapeur s'échappent autour du joint de la serviette. Le riz a gonflé et séparé au-dessus de la ligne de pot. Un léger arôme grillé, non brûlé, mais doré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 30 minutes : la vapeur s'échappe encore activement et le riz sent la vapeur plutôt que le grain grillé. Le fond du pot ne fait pas encore de bruit vertigineux lorsqu'il est secoué.",
            "action": "Continuez la vapeur. La croûte de tahdig prend du temps — vérifiez à nouveau à 40 minutes."
          },
          {
            "state": "Perfect",
            "description": "Après 40 à 45 minutes : l'odeur la plus légère d'or, de noix, grillée se lève du pot. Le riz est complètement moelleux. Lorsque vous placez votre main près du fond du pot, vous vous sentez concentré chaleur rayonnante.",
            "action": "Retirer du feu et laisser reposer 5 minutes avant de démoler."
          },
          {
            "state": "Overdone",
            "description": "Une odeur vive et acride brûlée, comme du popcorn brûlé plutôt que du pain grillé. L'étourdissement du fond du pot est passé d'un murmure silencieux à un sifflement fort.",
            "action": "Retirer immédiatement du feu. Le riz supérieur sera parfait; seule la couche inférieure de croûte est affectée. Remplissez l'évier de 3cm d'eau froide et placez le pot dedans pendant 30 secondes, ce qui libère la croûte de la casserole."
          }
        ]
      },
      "feelCue": "Maintenez votre paume 10cm sous le pot (sans toucher) pendant la phase de vapeur — vous devriez vous sentir stable, même la chaleur comme une lampe à faible chaleur. Une chaleur brûlante signifie que le brûleur est trop élevé."
    },
    {
      "nodeId": "step_4",
      "action": "Démoudre et servir",
      "inputs": [
        "steamed_tahdig"
      ],
      "outputState": "finished_tahdig",
      "instructions": "Le démolding est le théâtre de Tahdig. Déposer un grand plateau de service sur le dessus de la casserole. Avec un mouvement décisif et confiant, retournez tout le pot sur le plateau, comme démouler un gâteau. Si le tahdig se libère proprement, vous l'entendrez atterrir en un seul morceau. Si elle colle, placez le pot sur le fond de l'évier froid pendant 30 secondes, puis essayez à nouveau. D'autre part, servir de style familial en cuillerant le riz haut moelleux sur le plateau, puis en soulevant soigneusement la croûte en une seule pièce à placer sur le dessus, côté doré.",
      "visualCue": {
        "primaryTarget": "Un disque de croûte doré et brûlé — la couleur d'un caramel parfait ou d'un biscuit bien cuit — assis intact sur le plateau, avec du riz blanc moelleux qui l'entoure ou sous celui-ci.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "En l'état, le fond est une crème pâle, à peine dorée, pas encore caramélisée. La croûte est douce plutôt que croquante, presque spongieuse.",
            "action": "Retournez le riz dans la casserole, remplacez la serviette à couvercle et faites cuire 10 minutes de plus à feu moyen-doux. La croûte a besoin de plus de temps pour caraméliser."
          },
          {
            "state": "Perfect",
            "description": "Un seul disque d'or intact — caramélisé uniformément sur toute sa surface, de l'ambre profond au centre à l'or aux bords. Il fait un son creux quand tapoté. Le dessous sent le grain grillé et le beurre.",
            "action": "Apportez à la table tout et craquez avec une cuillère pour un service dramatique."
          },
          {
            "state": "Overdone",
            "description": "La croûte est brun très foncé — presque noire au centre — et agrippante. Il a peut-être craqué en morceaux pendant le démolage.",
            "action": "Dépliez-le en morceaux et servez-le comme une garniture émiettée sur le riz moelleux plutôt que comme un disque intact. Offrez du sel supplémentaire pour équilibrer les notes amères."
          }
        ]
      },
      "feelCue": "Tapez le fond de la croûte de tahdig fraîche avec votre mandrin — la croûte parfaite sonne en arrière avec un son creux, céramique et se sent rigide et vitreux, pas doux ou souple sous votre doigt."
    }
  ]
};
