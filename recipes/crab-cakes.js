export default {
  "repoId": "master_american_crab_cakes_001",
  "parentRepoId": null,
  "slug": "crab-cakes",
  "author": "ForkRecipe Kitchen",
  "title": "Cakes de crabe du Maryland",
  "description": "Le crabe grumeau de jumbo se lie au minimum à l'œuf et à la baie Old, formé en galettes épaisses, et serré dans le beurre jusqu'à ce que l'extérieur soit doré et que l'intérieur reste à peine lié — presque tous les crabes, pas de remplissage.",
  "cuisine": "Américain",
  "culture": "Baie de Chesapeake",
  "category": "seafood",
  "tags": [
    "crabe",
    "Produits de la mer",
    "américains",
    "Marryland",
    "frites"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "1 hr 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Mousse de crabe bleu Jumbo (épicé pour coquille)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "viande de crabe",
        "Crabe de duvet"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Grand œuf (battue)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Mayonnaise",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Yogourt grec"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Assaisonnement dans la vieille baie",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Mélange d'épices Chesapeake"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Moutarde de Dijon",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "poudre de moutarde sèche"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Persil frais à feuilles plates, haché finement",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "ruches"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Starch",
      "name": "Pince à pain fine ou craquelins concassés",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "Panko",
        "Farine d'amande pour GF"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre clarifié",
        "ghee"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile neutre (canola ou légumes)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "huile raffinée d'avocat"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Citrus",
      "name": "Coins de citron (pour servir)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Chaux"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "binding_mixture",
      "instructions": "Dans un grand bol, fouetter ensemble l'œuf battu, la mayonnaise, la vieille baie, la moutarde de Dijon et le persil haché jusqu'à ce qu'il soit lisse et uniforme. C'est l'ensemble de la base de fixation et d'assaisonnement — goûtez-le sur un craquelin pour calibrer le sel et l'épice avant qu'il touche le crabe. Le mélange doit avoir un goût vif, légèrement aiguisé de la moutarde, et chaud épicé.",
      "visualCue": {
        "primaryTarget": "Une émulsion lisse et jaune pâle avec des taches vertes de persil réparties uniformément. Pas de morceaux de moutarde non dissoute, pas de stries d'oeufs non mélangés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Yolk et blanc encore visibles comme des stries séparées; piscines de moutarde au centre.",
            "action": "fouetter plus vigoureusement jusqu'à ce que le mélange soit entièrement homogène."
          },
          {
            "state": "Perfect",
            "description": "Uniforme or pâle, parfumé avec Old Bay. Une ligne tracée à travers elle avec un fouet tient une seconde.",
            "action": "Plier doucement dans le crabe et la chapelure."
          },
          {
            "state": "Overdone",
            "description": "Surgissant en mousse rigide — bulles d'air visibles. Ce n'est pas une préoccupation ici; toute quantité de sifflement est bien à ce stade.",
            "action": "Procéder; surgrisser le liant seul n'endommage pas le gâteau final."
          }
        ]
      },
      "feelCue": "Le liant doit se sentir soyeux et un peu glissant entre deux doigts — le mayo et l'œuf formant une émulsion unifiée avant l'introduction du crabe."
    },
    {
      "nodeId": "step_2",
      "action": "Plier",
      "inputs": [
        "ing_01",
        "ing_07",
        "binding_mixture"
      ],
      "outputState": "crab_mixture",
      "instructions": "Ajouter la viande de crabe et la chapelure au liant. À l'aide d'une grande spatule ou de mains propres, plier très doucement — cinq à huit plis lents et balayants maximum. Le but est d'enrober le crabe dans le liant tout en laissant les morceaux aussi intacts que possible. Chaque fois que tu remues, tu casses le crabe. Arrêtez le moment où le mélange tient à peine ensemble. Il devrait avoir l'air lâche et louche, pas lisse et pâte-comme.",
      "visualCue": {
        "primaryTarget": "Gros morceaux de crabe blanc intact et nacré à peine recouverts d'un mince film de liant. Le mélange tient une touffe lorsqu'il est pressé mais s'effondre si il n'est pas compacté. Vous pouvez voir des morceaux individuels clairement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange s'écroule même lorsqu'il est serré fermement — pas assez de liant, ou le liant n'est pas encore distribué.",
            "action": "Plier deux ou trois fois de plus, cibler les patchs secs, mais arrêter dès qu'il tient."
          },
          {
            "state": "Perfect",
            "description": "Juste à peine cohésive — une poignée pressée tiendra une forme patty, mais la surface semble texturée et chunky, pas lisse. Les morceaux sont encore largement intacts.",
            "action": "Réfrigérer le mélange pendant 30 minutes avant de façonner pour l'aider à se raffermir."
          },
          {
            "state": "Overdone",
            "description": "Le crabe a été décomposé en une vison lisse, semblable à une pâte, sans grumeaux visibles, trop mélangés.",
            "action": "Les gâteaux auront encore bon goût mais perdre l'âme texturale du plat. Formez immédiatement et faites cuire; la manipulation ultérieure le rend pire."
          }
        ]
      },
      "feelCue": "Le mélange devrait se sentir comme de la neige lâchement emballée — il tient quand vous le pressez mais n'a pas de ressort ou de collant propre. Si c'est comme un mastic lisse, vous avez trop plié."
    },
    {
      "nodeId": "step_3",
      "action": "Refroidissement",
      "inputs": [
        "crab_mixture"
      ],
      "outputState": "chilled_patties",
      "instructions": "Divisez le mélange en six parties égales (environ 100 à 120 g chacune). Appuyez doucement chacun sur un disque épais d'environ 4 cm de haut — ne comprimez pas trop fermement. Placer sur un plateau parcheminé et réfrigérer à découvert pendant 30 minutes au minimum, jusqu'à 4 heures. Le froid ferme le liant et rend les galettes considérablement plus faciles à retourner sans tomber dans la poêle.",
      "visualCue": {
        "primaryTarget": "Disques pâles et volumineux avec une surface légèrement collante et mate après refroidissement. Ils tiennent leur forme lorsque le plateau est incliné mais semblent encore fragiles et texturés plutôt que lisses.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les patties se sentent encore douces et squishy; elles s'effondrent quand elles sont inclinées. Pas assez froid.",
            "action": "Retourner au réfrigérateur pendant 15 à 20 minutes. Cette étape est la cause la plus courante de désintégration des gâteaux dans la poêle."
          },
          {
            "state": "Perfect",
            "description": "Assez ferme pour être propre sans déformer. Froid au toucher, surface légèrement séchée de l'air du réfrigérateur. Ils ont l'impression d'être une crème juste-set quand ils sont pressés.",
            "action": "Cuire en lots immédiatement, en gardant les paties non cuites réfrigérées pendant que les autres cuisinent."
          },
          {
            "state": "Overdone",
            "description": "La nuit tombée à découvert : la surface a séché à une croûte et l'intérieur est froid. Pas un échec: ils cuisineront bien, juste un peu plus lentement.",
            "action": "Cuire comme d'habitude; la croûte qui s'est formée les aidera à tenir ensemble dans la casserole."
          }
        ]
      },
      "feelCue": "Prenez une patty : elle devrait s'asseoir à plat et tenir son bord sans couler sur vos doigts. Si la chaleur de votre main le rend immédiatement adouci et sag, retour dans le frigo il va."
    },
    {
      "nodeId": "step_4",
      "action": "Sear",
      "inputs": [
        "chilled_patties",
        "ing_08",
        "ing_09"
      ],
      "outputState": "seared_crab_cakes",
      "instructions": "Chauffer une poêle lourde (fer ou acier inoxydable) à feu moyen. Ajouter le beurre et l'huile ensemble — l'huile élève le point de fumée, le beurre apporte la couleur et la saveur. Lorsque la mousse de beurre s'abaisse et que la graisse mijote, abaisser soigneusement les galettes, laissant de l'espace entre elles. Ne les déplacez pas. Cuire 3-4 minutes de chaque côté. Résistez à basculer tôt — ils relâcheront proprement une fois qu'une croûte dorée s'est formée. Utilisez une spatule de poisson mince et retourner une seule fois.",
      "visualCue": {
        "primaryTarget": "Un disque brun doré profond, uniformément croûté des deux côtés. La croûte est croustillante et sèche, pas humide ou grasse. Les côtés restent légèrement sous la forme d'une tête — c'est exact; le centre doit être à peine fixé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est blonde pâle, le crabe semble encore cru et humide. Lorsque vous essayez de le soulever, la croûte ne s'est pas formée.",
            "action": "Laisse tomber. Le gâteau se libérera naturellement quand la croûte se mettra. Essayer de le lever maintenant va le déchirer."
          },
          {
            "state": "Perfect",
            "description": "De couleur dorée profonde, libérant proprement de la poêle. Un robinet sur la surface semble creux et croquant. L'intérieur semble céder mais pas cru quand sonde doucement.",
            "action": "Flip une fois et faire cuire le deuxième côté. Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La croûte est devenue brun foncé ou noir; le beurre fume et sent l'acride. L'extérieur brûle avant que l'intérieur puisse se réchauffer.",
            "action": "Baissez immédiatement la chaleur. Le prochain lot devrait aller dans une casserole."
          }
        ]
      },
      "feelCue": "Appuyez légèrement sur le centre d'un pâté cuit: il devrait donner un peu — en donnant comme une crème juste-set, pas de printemps comme du caoutchouc ou de la mastic. Ce don doux et à peine fixé est l'intérieur que vous visez."
    },
    {
      "nodeId": "step_5",
      "action": "Garnir",
      "inputs": [
        "seared_crab_cakes",
        "ing_10"
      ],
      "outputState": "finished_crab_cakes",
      "instructions": "Transférer immédiatement dans des assiettes chaudes — ne pas les reposer sur un support ou ils vont vapeur et adoucir la croûte. Servir avec des quartiers de citron et une sauce remoulade ou tartare simple à côté. Les gâteaux sont mieux mangés dans les deux minutes qui suivent la sortie de la poêle, tandis que le contraste entre l'extérieur croustillant et l'intérieur à peine lié est à son sommet.",
      "visualCue": {
        "primaryTarget": "Deux disques d'or profond par plaque, croûtes intactes et sèches, le bord brisé révélant de grandes bosses de crabe d'ivoire à peine maintenues dans un liant fin. La vapeur s'élève de la coupe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'intérieur est froid et brut, le liant est encore liquide et le crabe est pâle.",
            "action": "Retournez dans la poêle ou dans un four 180 C / 350 F pendant 4 à 5 minutes pour terminer."
          },
          {
            "state": "Perfect",
            "description": "La croûte se brise au bord de la fourche; à l'intérieur, elle est chaude, humide, crabée et à peine cohésive.",
            "action": "Pressez le citron sur le dessus et mangez immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le gâteau entier est sec et émietté; il ne reste pas d'humidité au centre, les morceaux se sont décomposés en une masse ferme et uniforme.",
            "action": "Servir avec une sauce supplémentaire et un morceau de citron pressé sur — rien ne restaurera la texture perdue, mais la saveur est encore bonne."
          }
        ]
      },
      "feelCue": "Un gâteau de crabe bien fait du Maryland devrait se sentir fragile et presque inapproprié, comme s'il pouvait s'effondrer à tout moment. Cette précarité est le but. S'il se sent solide et sûr à manger, il a trop de remplissage."
    }
  ]
};
