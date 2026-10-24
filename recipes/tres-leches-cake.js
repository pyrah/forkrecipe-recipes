export default {
  "repoId": "master_mexican_tres-leches-cake_001",
  "parentRepoId": null,
  "slug": "tres-leches-cake",
  "author": "ForkRecipe Kitchen",
  "title": "Tres Leches Cake",
  "description": "Une éponge génoise légère et nuageuse, trempée jusqu'à ce qu'elle ne puisse plus contenir de liquide, se noyant dans un trio de lait condensé sucré, de lait évaporé et de crème lourde, servie froidement sous un couvert de crème fouettée légèrement sucrée.",
  "cuisine": "Mexicain",
  "culture": "Panlatine",
  "category": "desserts",
  "tags": [
    "gâteau",
    "trois laits",
    "Mexique",
    "dessert",
    "éponge"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "4 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 9,
    "salty": 1,
    "sour": 1,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "farine de gâteau (légère miettes)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Œufs séparés, température ambiante",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre blanc granulé",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Lait condensé sucré",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Lait évaporé",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "lait entier"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Extrait de vanille pure",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "pâte de haricots vanille"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Sucre en poudre (pour crème fouettée)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre granulé"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Cannelle au sol, pour la poussière",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "Sucre de cannelle"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whip",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "egg_foam",
      "instructions": "Séparez soigneusement les œufs — aucune trace de jaune dans les blancs. Battre les jaunes avec 2 parties de sucre en utilisant un mélangeur électrique à grande vitesse pendant 4-5 minutes jusqu'à ce que le mélange soit jaune pâle, épais, et tombe des batteurs dans un ruban large et lent. Dans un bol propre séparé, battre les blancs d'œufs aux pics doux, puis ajouter progressivement le sucre restant et battre aux pics raides et brillants. Les blancs doivent être battus dans un bol complètement exempt de graisse — toute graisse les empêchera d'atteindre le plein volume.",
      "visualCue": {
        "primaryTarget": "Mélange de jaune : pâle, épais, mousseux, presque blanc. Laisser un ruban qui tient sur la surface pendant 3 secondes avant de se replier. Blancs: blanc brillant, pics raides qui tiennent leur forme lorsque le bol est inversé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange de yolk est encore jaune et liquide. Les blancs sont mousseux avec de grandes bulles et flop vers le haut.",
            "action": "Continuez à battre. Les jaunes ont besoin d'une vitesse élevée soutenue; les blancs ont besoin de patience à travers trois étapes distinctes avant d'atteindre des pics raides."
          },
          {
            "state": "Perfect",
            "description": "Draps en ruban de jaune dans des plis lents et larges. Les blancs tiennent leur forme avec un léger virage à l'extrémité du pic (droit mais pas sec).",
            "action": "Pliez les blancs dans le mélange de jaune en trois ajouts."
          },
          {
            "state": "Overdone",
            "description": "Les blancs sont granuleux, d'aspect sec, et se séparent légèrement avec du liquide au fond. Les jaunes ont battu si longtemps qu'ils sont collants.",
            "action": "On ne peut pas récupérer les blancs surchargés. Commence à neuf. On peut encore utiliser des jaunes surchargés — procédez soigneusement."
          }
        ]
      },
      "feelCue": "Un pic de blanc battu devrait tenir sa forme lorsque les batteurs sont levés, courbant très légèrement à l'extrémité même — comme une vague de rupture. S'il fait plus d'un centimètre, continuez à battre."
    },
    {
      "nodeId": "step_2",
      "action": "Plier",
      "inputs": [
        "egg_foam",
        "ing_01",
        "ing_04"
      ],
      "outputState": "sponge_batter",
      "instructions": "Passer la farine et la poudre à pâte directement sur la mousse d'œuf. À l'aide d'une grande spatule en caoutchouc, plier en trois ajouts : couper le centre, balayer le bas et rouler la pâte en haut et en haut. Faites tourner le bol d'un quart de tour à chaque coup. Travaillez rapidement mais doucement — vous essayez de garder chaque bulle d'air que vous avez passé 5 minutes à créer. Trente coups maximum. Certaines stries non mélangées sont acceptables; le surmélange ne l'est pas.",
      "visualCue": {
        "primaryTarget": "Une pâte pâle, aérée, volumineuse sans stries de farine sèche. Verse lentement, comme une mousse épaisse. Plus léger et plus grand en volume que le mélange d'oeufs seul.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries blanches de farine visibles partout. Le fond du bol a des poches de farine sèche.",
            "action": "Plier encore 5 à 8 fois, en ciblant spécifiquement les taches sèches. Ne bougez pas en rond."
          },
          {
            "state": "Perfect",
            "description": "Un jaune pâle uniforme, aéré, tombe de la spatule dans des plis épais. Le volume est maintenu à partir du stade de la mousse d'œuf.",
            "action": "Verser immédiatement dans la casserole préparée et cuire au four sans tarder."
          },
          {
            "state": "Overdone",
            "description": "Batter s'est nettement dégonflé. Il a l'air dense et brillant plutôt qu'aéré. Le volume a chuté de façon significative.",
            "action": "Faire cuire de toute façon — le gâteau sera plus dense, mais il trempera encore. La prochaine fois, moins de plis décisifs."
          }
        ]
      },
      "feelCue": "La pâte doit sentir la lumière contre la spatule — presque sans poids pour une pâte de ce volume. Lorsque vous soulevez la spatule, elle devrait retomber dans un ruban paresseux et continu."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "sponge_batter"
      ],
      "outputState": "baked_sponge",
      "instructions": "Verser la pâte dans une poêle graissée et farinée de 9x13 pouces. Lisser doucement le haut. Cuire à 175 °C (350 °F) pendant 22 à 28 minutes jusqu'à ce que le dessus soit doré et qu'un cure-dent inséré au centre soit propre. Ne pas ouvrir le four dans les 20 premières minutes — la structure en mousse est fragile jusqu'à ce qu'elle soit fixée. Laisser refroidir dans la poêle pendant 10 minutes, puis utiliser une brochette ou une fourche en bois pour creuser des trous sur toute la surface — rangées espacées de 2 cm, allant jusqu'au fond de la poêle. Les trous sont l'autoroute pour le trempage du lait.",
      "visualCue": {
        "primaryTarget": "Top doré-brun qui ressort quand pressé doucement. Les bords ont légèrement tiré des côtés de la poêle. L'intérieur est jaune pâle et printanier, pas gommé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Top est pâle avec un centre brillant et humide. Le centre saute quand la poêle est bouchée. Le pick-dent sort avec la pâte mouillée.",
            "action": "Retourner au four pendant 4 minutes. Ne haussez pas la température — elle fera brunir l'extérieur avant les ensembles intérieurs."
          },
          {
            "state": "Perfect",
            "description": "Même le haut doré. Les bords se sont contractés des côtés. Le pick-dent est propre avec quelques miettes sèches.",
            "action": "Laisser refroidir 10 minutes, faire des trous, puis tremper."
          },
          {
            "state": "Overdone",
            "description": "Haut brun foncé avec surface sèche et fissurée. Les bords sont très sombres et s'éloignent fortement. Des odeurs de sucre surcuit.",
            "action": "L'imprégnation sauvera ce gâteau. Trim les bords brûlés avec un couteau dentelé et procéder à un trempage supplémentaire de lait."
          }
        ]
      },
      "feelCue": "Appuyez sur le centre du gâteau refroidi avec deux doigts — il devrait revenir complètement en 2 secondes. Si elle reste dentelée, elle est sous-vêtue. Si elle est caoutchouteuse et raide, elle est surchauffée mais encore imbibée."
    },
    {
      "nodeId": "step_4",
      "action": "Infuse",
      "inputs": [
        "baked_sponge",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "soaked_cake",
      "instructions": "Mélanger le lait condensé sucré, le lait évaporé, une partie de la crème lourde et l'extrait de vanille dans le mélange à trois laits. Alors que le gâteau est encore chaud dans la poêle, verser lentement tout le mélange sur la surface dans un ruisseau stable et uniforme. Commencez aux bords et travaillez vers le centre. Le gâteau sera saturé — continuez à verser. Certains se mettent sur les côtés; utilisez une cuillère pour la redistribuer. Réfrigérer pendant au moins 2 heures ou pendant la nuit. La température froide permet aux protéines du lait de se fixer et à l'éponge de devenir uniformément saturée plutôt que de soggy.",
      "visualCue": {
        "primaryTarget": "Immédiatement après le trempage : la surface scintille, les trous sont visibles sous forme de petites dépressions humides, et le mélange de lait se dépose légèrement aux bords. Après le refroidissement: le gâteau semble mat et unifié, pas humide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre du gâteau est encore pâle et sec après 30 minutes au réfrigérateur. Le mélange de lait n'a pas pénétré complètement.",
            "action": "Poke trous supplémentaires au centre et cuillère plus de mélange de lait sur ces taches. Le centre est toujours le dernier à absorber."
          },
          {
            "state": "Perfect",
            "description": "Après le refroidissement, une pièce levée de la casserole montre que la ligne d'imprégnation a pénétré jusqu'au fond. Le gâteau est humide tout au long mais ne s'effondre pas.",
            "action": "Garnir de crème fouettée et servir à froid."
          },
          {
            "state": "Overdone",
            "description": "Le gâteau est devenu structurellement fragile — il déchire plutôt que des tranches. La texture est plus de pudding de pain que de gâteau.",
            "action": "Servir dans la poêle avec une cuillère au lieu de la trancher. Il a un excellent goût quelle que soit sa structure."
          }
        ]
      },
      "feelCue": "Après avoir refroidi, appuyez doucement sur le dessus — il doit se sentir dense et céder, libérant une petite perle de lait lorsqu'elle est pressée fermement. C'est juste et souhaitable. Une sensation sèche et printanière signifie qu'il faut plus de temps d'imprégnation."
    },
    {
      "nodeId": "step_5",
      "action": "Whip",
      "inputs": [
        "ing_07",
        "ing_09"
      ],
      "outputState": "stabilized_whipped_cream",
      "instructions": "Dans un bol froid (refroidir au congélateur pendant 10 minutes), battre la crème lourde restante et le sucre en poudre avec un mélangeur électrique à vitesse moyenne-haute. Commencer sur la structure moyenne à construire, augmenter à haute quand la crème commence à épaissir. Battre à des pics moyennement fermes — la crème devrait tenir sa forme lorsque les batteurs sont levés, mais être lisse et extensible, pas granuleuse. Étaler uniformément sur le gâteau glacé et trempé dans une couche généreuse.",
      "visualCue": {
        "primaryTarget": "La crème tient un tourbillon doux et propre à la surface lorsque la spatule est levée. Blanc vif avec un léger éclat. La surface ressemble à de la crème glacée douce, pas de la meringue raide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème est toujours versable et ne tient pas un pic. Il saignera dans la surface du gâteau plutôt que de s'asseoir sur le dessus.",
            "action": "Continuez à battre — la crème s'épaissit rapidement une fois qu'elle commence; restez au mélangeur."
          },
          {
            "state": "Perfect",
            "description": "Suspend des pics qui se bouclent légèrement aux extrémités. Spatule laisse des tourbillons propres qui restent définis.",
            "action": "Répartir sur le gâteau trempé et la poussière avec de la cannelle."
          },
          {
            "state": "Overdone",
            "description": "La crème est granuleuse, maladroite et commence à jaunir. On ne peut pas s'étendre facilement.",
            "action": "Ajouter 2 cuillerées à soupe de crème liquide froide et plier doucement pour le lisser avant d'aller plus loin."
          }
        ]
      },
      "feelCue": "Un bol froid et de la crème froide sont essentiels — la crème chaude résiste au fouet et vous pouvez le battre trop avant de le remarquer. La crème finie devrait se sentir comme de la soie fraîche sur le dos de votre main, pas raide ou pâteuse."
    },
    {
      "nodeId": "step_6",
      "action": "Garnir",
      "inputs": [
        "soaked_cake",
        "stabilized_whipped_cream",
        "ing_10"
      ],
      "outputState": "finished_tres_leches",
      "instructions": "Poussez la surface de crème fouettée uniformément avec de la cannelle moulue en utilisant un tamis à mailles fines pour une couche uniforme. Couper avec un couteau propre essuyé entre chaque coupe. Servir à froid — ce gâteau est le meilleur entre 4 et 8 C (39–46 F). Chaque tranche doit être placée sur une assiette avec sa colonne pleine de gâteau trempé visible du côté, montrant les différentes couches de gâteau et de crème.",
      "visualCue": {
        "primaryTarget": "Couvercle blanc à la crème avec cannelle brun chaud. Le côté d'une tranche montre un intérieur jaune pâle humide sans bandes sèches. Le fond de la tranche brille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La cannelle est dans des taillis lourds plutôt qu'une fine poussière. Les tranches sont déchirées plutôt que propres.",
            "action": "Utilisez un tamis fin et tapez légèrement à partir de 30 cm au-dessus pour une distribution uniforme. Essuyer et réchauffer le couteau avant chaque coupe."
          },
          {
            "state": "Perfect",
            "description": "Poussière uniforme à pointe chaude. Chaque tranche tient sa forme, avec de la crème sur le dessus et une miette humide et cohésive.",
            "action": "Servir immédiatement du réfrigérateur. Ce gâteau devrait être très froid quand on le mange."
          },
          {
            "state": "Overdone",
            "description": "Tellement de cannelle que la crème est orange-brun plutôt que blanche. L'équilibre de l'arôme s'est révélé piquant.",
            "action": "Couper la couche de crème de cannelle-lourde d'une portion et la remplacer par une poupée fraîche de crème fouettée."
          }
        ]
      },
      "feelCue": "Une bonne tranche, levée de la poêle, devrait se tenir soigneusement — suffisamment humide pour que l'on puisse la voir imbibée, mais suffisamment structurée pour être transférée dans une assiette en une seule pièce sans s'effondrer."
    }
  ]
};
