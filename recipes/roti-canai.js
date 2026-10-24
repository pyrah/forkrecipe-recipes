export default {
  "repoId": "master_malaysian_roticanai_001",
  "parentRepoId": null,
  "slug": "roti-canai",
  "author": "ForkRecipe Kitchen",
  "title": "Malaisien Roti Canai",
  "description": "Flacé, gossamer-fin pain plat giflé et filé sur le tawa jusqu'à translucide comme une vitre, puis enroulé et cassé plat avant de frire dans le ghee à un extérieur éclatant et croustillant avec un intérieur mielé, pull-apart d'une centaine de couches de papier.",
  "cuisine": "Malaisien",
  "culture": "Maman",
  "category": "breads",
  "tags": [
    "pourri-canai",
    "Pain plat",
    "Malaysian",
    "en couches",
    "ghee",
    "Maman",
    "Flacons"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "4 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "farine de pain (légèrement mâcher)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude (35 C)",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Grand œuf battu",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Ghee (beurre communiqué)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "huile neutre plus un bouton de beurre"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "lait condensé (variation mamak classique)"
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
      "outputState": "roti_dough",
      "instructions": "Mélanger la farine, le sel et le sucre dans un grand bol. Dans un pot de mesure, mélanger l'eau chaude, l'œuf battu et la moitié du ghee. Versez les ingrédients humides dans la farine et mélangez avec votre main en coups circulaires jusqu'à ce qu'une pâte chaotique se forme. La pâte sera douce, légèrement collante et plus riche qu'une pâte à pain standard grâce à l'œuf et au ghee. Ne pas ajouter de farine supplémentaire. Agenouillez brièvement dans le bol jusqu'à ce qu'il se réunisse — environ 2 minutes.",
      "visualCue": {
        "primaryTarget": "Une boule douce et légèrement collante qui tient sa forme. Plus léger et plus souple que la pâte à pain. Légèrement doré de l'œuf.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est mouillée, ne tient pas forme, coule entre les doigts comme une pâte épaisse.",
            "action": "Ajouter la farine 1 cuillère à soupe à la fois et mélanger jusqu'à ce qu'elle tienne ensemble. La pâte roti est molle — ne pas trop corriger."
          },
          {
            "state": "Perfect",
            "description": "Boule douce et lisse; légèrement collante mais ne colle pas aux mains sèches; une teinte dorée légère de l'œuf. Éloignez-vous du bol proprement.",
            "action": "Transférer sur une surface légèrement huilée et pétrir pour développer du gluten."
          },
          {
            "state": "Overdone",
            "description": "La toux est raide et ferme, presque comme du pain. Ne s'étire pas mince sans déchirer.",
            "action": "Ajouter l'eau tiède 1 cuillère à café à la fois et pétrir jusqu'à ce qu'elle soit douce et souple."
          }
        ]
      },
      "feelCue": "La pâte roti canai doit être luxueusement douce, comme la peau de bébé ou la plastine chaude. Il devrait s'étirer de quelques pouces entre vos doigts sans résistance."
    },
    {
      "nodeId": "step_2",
      "action": "Agenouillement",
      "inputs": [
        "roti_dough"
      ],
      "outputState": "developed_dough",
      "instructions": "Aplatissez la pâte sur une surface légèrement huilée (non farinée – l'huile la maintient extensible) pendant 10 minutes à la main. Utilisez un mouvement push-pull-fold. Le but est de développer juste assez de gluten pour la pâte pour étirer le papier-mince sans déchirer, tout en restant doux et souple — pas une pâte à pain serrée et élastique. Vers la fin du pétrissage, la pâte deviendra particulièrement lisse et presque soyeuse.",
      "visualCue": {
        "primaryTarget": "Une boule lisse et satinée avec un léger reflet du ghee. Lorsque vous étirez une petite pièce, elle s'amincit dans une membrane presque translucide avant de déchirer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Larmes dues immédiatement lorsqu'elles sont étirées même légèrement. La surface est rude. Le test du panneau de fenêtre échoue à une très courte distance.",
            "action": "Continuez à pétrir pendant encore 3-4 minutes. L'extensibilité du gluten prend du temps."
          },
          {
            "state": "Perfect",
            "description": "Soyeux, doux, légèrement chaud. Attache plusieurs centimètres dans un voile mince avant de déchirer. La surface est non marquée et presque brillante.",
            "action": "Divisez en boules, en manteaux, couvrez et reposez-vous."
          },
          {
            "state": "Overdone",
            "description": "La toux est devenue printanière et s'enclenche agressivement lorsqu'elle est étirée — trop d'élasticité.",
            "action": "Repos couvert pendant 30 minutes à découvert — le gluten surdéveloppé doit se détendre avant qu'il ne s'étire."
          }
        ]
      },
      "feelCue": "La pâte roti bien kneaded se sent vivante dans vos mains — elle donne immédiatement, s'étire sans sensation de claquement, et semble presque vouloir se propager."
    },
    {
      "nodeId": "step_3",
      "action": "Repos",
      "inputs": [
        "developed_dough",
        "ing_04"
      ],
      "outputState": "rested_dough",
      "instructions": "Divisez la pâte en 8 boules égales (environ 80 g chacune). Enrober généreusement chaque boule en ghee, la tourner jusqu'à ce qu'elle soit complètement lissée. Disposer en une seule couche sur un plateau huilé, en veillant à ce que les boules ne touchent pas. Couvrir lâchement d'enveloppe plastique et reposer à température ambiante pendant au moins 3 heures, ou réfrigérer pendant la nuit. Le gluten se détend complètement pendant ce repos, ce qui permet d'étirer chaque boule à une finesse presque visible sans déchirer. Ne sautez pas ou ne raccourcissez pas cette étape.",
      "visualCue": {
        "primaryTarget": "Chaque boule a détendu et s'est légèrement étendue dans un disque épais. La surface est lissée avec du ghee et la pâte ne rebondit plus lorsqu'elle est cuite — elle tient le tiret.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les boules ressortent immédiatement lorsqu'elles sont cuites. La toux est encore élastique. Essayer de s'étirer va le déchirer.",
            "action": "Reposez-vous plus longtemps — roti a besoin d'un minimum de 2 heures pour devenir suffisamment extensible. 3 heures est idéal."
          },
          {
            "state": "Perfect",
            "description": "Les boules se sont détendues en disques plus larges et plus flatteurs. Poke laisse une fossette permanente. La surface est soyeuse plutôt que printanière.",
            "action": "Commencez l'étape stretch-and-layer."
          },
          {
            "state": "Overdone",
            "description": "Dough a été assis si longtemps (12+ heures non réfrigéré) il sent fermenté et est très lâche.",
            "action": "Toujours utilisable — il suffit de manipuler très doucement. Continuez à façonner rapidement."
          }
        ]
      },
      "feelCue": "Après le long repos du ghee, ramasser une boule de pâte devrait sentir comme ramasser un ballon d'eau — il veut se répandre et saguer dans votre main, lourd avec son propre poids détendu."
    },
    {
      "nodeId": "step_4",
      "action": "Forme",
      "inputs": [
        "rested_dough",
        "ing_04"
      ],
      "outputState": "layered_flatbread",
      "instructions": "Huilez votre tawa ou votre surface de travail légèrement. Placez une balle et commencez à la presser à plat avec des doigts huilés. Ensuite, utilisez le dos de votre main et un mouvement giflant pour l'étirer vers l'extérieur — pivotez constamment, giflez de dessous, laissez la gravité l'amincir. Travaillez jusqu'à ce que la pâte soit presque fine-papier et vous pouvez voir la surface en dessous à travers elle (environ 45 à 50 cm de diamètre). Enlevez un mince film de ghee sur toute la surface. Plier de deux côtés opposés comme une lettre, puis plier à nouveau pour créer un paquet carré. Enroulez le carré dans un escargot serré. Laisser reposer les 8 bobines 5 minutes avant d'aplatir. Appuyez fermement sur chaque bobine avec votre paume dans un rond plat de 15 à 18 cm de diamètre.",
      "visualCue": {
        "primaryTarget": "Chaque feuille étirée est presque visible avant le pliage. Après pliage et pressage, un disque rond de 15 cm avec une couche visible aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La feuille est épaisse et inégale; vous ne pouvez pas voir à travers elle; les bords sont beaucoup plus épais que le centre.",
            "action": "Continuer à gifler et à s'étirer, en se concentrant sur les taches épaisses. Patience — la technique prend quelques tentatives pour apprendre."
          },
          {
            "state": "Perfect",
            "description": "Presque translucide sur la plus grande partie de sa surface; larmes seulement aux bords très minces. Après pliage et enroulement, le rond montre des lignes de couche distinctes au bord lorsqu'il est pressé.",
            "action": "Cuire immédiatement sur un tawa chaud pour obtenir les meilleurs résultats, ou réfrigérer les rondelles en forme jusqu'à 30 minutes."
          },
          {
            "state": "Overdone",
            "description": "La feuille a été déchirée en plusieurs endroits à partir de l'étirement excessif.",
            "action": "Pliez la feuille déchirée telle qu'elle est — les couches seront encore floues; seulement la forme sera imparfaite."
          }
        ]
      },
      "feelCue": "Une feuille de roti étirée devrait être plus légère que l'air — si mince qu'elle se déplace dans le jet de vos mains. Vous devriez sentir la chaleur de la surface de travail à travers elle que vous travaillez."
    },
    {
      "nodeId": "step_5",
      "action": "Fry",
      "inputs": [
        "layered_flatbread",
        "ing_04"
      ],
      "outputState": "finished_roti_canai",
      "instructions": "Chauffer un tawa ou un plat en fonte à feu moyen-vif jusqu'à très chaud. Ajoutez une cuillerée généreuse de ghee — elle devrait briller instantanément. Placer un roti rond en forme sur la poêle. Cuire de 1,5 à 2 minutes jusqu'à ce que le fond soit doré et que le roti ait gonflé par endroits. Flip, ajouter une autre dab de ghee et cuire encore 1 à 2 minutes. Retirer immédiatement de la chaleur et « scruter » le roti avec les deux mains (comme l'applaudir de style accordéon) pour séparer les couches et libérer la vapeur. C'est le mouvement de signature – il transforme un disque plat en un nuage d'oreiller et de flocons.",
      "visualCue": {
        "primaryTarget": "Doré brun et croustillant des deux côtés avec des taches plus foncées irrégulières. Après le brouillage, le roti souffle dans une masse plissée et ridiculisée, avec un extérieur effilé et effilé et un intérieur doux et miellé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pale et pâteux; l'intérieur est encore brut et dense quand on le déchire ouvert. Pas de couches floues visibles.",
            "action": "Retourner à la poêle à feu moyen pendant une minute de plus par côté. Assurez-vous que la poêle est bien préchauffée."
          },
          {
            "state": "Perfect",
            "description": "Golden-brun avec des taches ambres; la croûte se brise lorsqu'elle est déchirée; les couches se séparent en rubans; la vapeur s'élève de l'intérieur. Des odeurs de ghee grillé.",
            "action": "Scruter immédiatement pendant la chaleur et servir avec le dhal ou le curry."
          },
          {
            "state": "Overdone",
            "description": "Marron foncé ou noirci dans les taches; croquant mais non flocé; a une odeur amère et ghée brûlée.",
            "action": "Servir de toute façon — beaucoup de gens préfèrent les roti plus foncés. Chauffer légèrement pour le prochain lot."
          }
        ]
      },
      "feelCue": "Un canai roti parfaitement cuit se brise lorsque vous le tapez avec un doigt, puis cède la place à un intérieur doux, tirant-apart qui fond presque. Le contraste entre la croûte croustillante et l'intérieur stratifié est tout le point."
    }
  ]
};
