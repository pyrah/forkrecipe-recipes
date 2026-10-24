export default {
  "repoId": "master_french_croissant_001",
  "parentRepoId": null,
  "slug": "croissant",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Beurre feuilleté français croissant",
  "description": "Trois jours de refroidissement et de pliage piègent le beurre froid entre des centaines de couches de pâte — lorsqu'il est cuit, le beurre les sépare en une miette en nid d'abeille avec une croûte de caramel qui parfume la cuisine pendant une heure.",
  "cuisine": "Français",
  "culture": "Parisien",
  "category": "breads",
  "tags": [
    "pain",
    "pâtisserie",
    "laminés",
    "français",
    "beurre",
    "croissant",
    "Viennoiserie"
  ],
  "difficulty": 5,
  "activeTime": "2 hours",
  "totalTime": "20 hours",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de pain forte (13–14% de protéines)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "T55 Farine française"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Lait entier froid",
      "ratioValue": 55,
      "defaultUnit": "%",
      "substitutions": [
        "eau (moins riche)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé (détempe — beurre à pâte)",
      "ratioValue": 8,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Beurre non salé de type européen 84%+ matières grasses (beurrage — beurre de laminage)",
      "ratioValue": 50,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Protein",
      "name": "Jaune d'œuf + œuf entier pour le lavage des œufs",
      "ratioValue": null,
      "defaultUnit": "wash",
      "substitutions": []
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
      "outputState": "detrempe_dough",
      "instructions": "Mélanger la farine, le sucre, le sel et la levure (conserver le sel et la levure sur les côtés opposés du bol avant de mélanger). Ajouter le lait froid et le beurre de pâte ramolli. Mélanger avec un crochet de pâte à feu doux pendant 3 minutes, puis de 4 à 5 minutes en moyenne — ne développer la pâte qu'à une résistance modérée au gluten. Contrairement à la pâte à pain, vous ne voulez PAS de gluten entièrement développé ici: une pâte serrée, sur-collée va se déchirer pendant la lamination. La détente doit être lisse, cohésive et à peine piquante. Former en rectangle plat, envelopper en plastique et réfrigérer pendant au moins 1 heure (la nuit préférée).",
      "visualCue": {
        "primaryTarget": "Un rectangle lisse, à peine tacky avec une surface mate. Ne ressort pas agressivement quand pressé. A une certaine élasticité mais les rendements.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Shaggy et dur. Des larmes quand vous l'étirez. Dough ne s'est pas réuni.",
            "action": "Mélanger encore 2 minutes. La pâte doit être cohésive avant de refroidir."
          },
          {
            "state": "Perfect",
            "description": "Doux, uniforme, légèrement élastique mais souple. Les ressorts reviennent lentement — ne se cassent pas. C'est à peine collant.",
            "action": "Aplatir jusqu'à un rectangle de 2 cm, envelopper soigneusement et réfrigérer au moins 1 heure."
          },
          {
            "state": "Overdone",
            "description": "Très élastique, se ressort immédiatement, la surface est très lisse et serrée.",
            "action": "Le gluten est trop développé. Reposez-vous au réfrigérateur pendant 2 heures au minimum avant de laminer."
          }
        ]
      },
      "feelCue": "Le détrempe devrait se sentir comme du cuir doux et froid — souple et lisse, avec juste assez de résistance que vous savez que le gluten est présent. Pas caoutchouteux, pas floppy."
    },
    {
      "nodeId": "step_2",
      "action": "Température",
      "inputs": [
        "ing_07"
      ],
      "outputState": "butter_block",
      "instructions": "Placez le beurre de lamination à froid entre deux feuilles de parchemin. À l'aide d'un rouleau, battre et rouler dans un carré plat d'environ 18 x 18 cm et exactement 1 cm d'épaisseur. Le beurre doit être froid mais souple, il doit fléchir sans craquer ni s'effondrer. C'est l'étape de préparation la plus critique. La température idéale du beurre est de 15–17 C. Si le beurre est trop chaud, il se frottera dans la pâte; trop froid et il se brisera et créera des trous pendant la laminage, détruisant les couches.",
      "visualCue": {
        "primaryTarget": "Un carré plat, même, de 18 x 18 cm de beurre qui plie légèrement sans craquelure. Les bords sont propres et le bloc conserve sa forme à température ambiante pendant au moins 60 secondes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est très froid et craque ou s'émiette lorsque vous fléchissez le parchemin.",
            "action": "Laisser à température ambiante 5-10 minutes. Tapez légèrement avec le rouleau pour le rendre souple sans le réchauffer."
          },
          {
            "state": "Perfect",
            "description": "Le beurre se fléchit comme de l'argile froide — plie 45 degrés sans craquer. Cool au toucher mais pas dur.",
            "action": "Travaillez vite. Commencer immédiatement la stratification avec le détrempe."
          },
          {
            "state": "Overdone",
            "description": "Le beurre s'est adouci et est gras, se répandant au-delà des bords du parchemin.",
            "action": "Retourner au réfrigérateur pendant 10 minutes. Ne jamais stratifié avec du beurre chaud."
          }
        ]
      },
      "feelCue": "Appuyez sur le bout du doigt contre le bloc de beurre — il doit laisser un tiret propre sans que le beurre se frotte ou colle. Comme presser dans de la cire froide."
    },
    {
      "nodeId": "step_3",
      "action": "Plier",
      "inputs": [
        "detrempe_dough",
        "butter_block"
      ],
      "outputState": "laminated_dough",
      "instructions": "Rouler le détéré réfrigéré sur une surface légèrement farinée dans un rectangle qui est exactement deux fois la largeur du bloc de beurre et la même hauteur. Placez le bloc de beurre sur la moitié de la pâte. Pliez l'autre moitié pour envelopper complètement le beurre. Appuyez sur les bords pour sceller. Vous avez maintenant créé le paquet initial de beurre. Roulez soigneusement le paquet, toujours loin de vous, dans un long rectangle de 8 à 10 mm d'épaisseur. Travaillez rapidement et en toute confiance. Compléter 3 plis de livre (double plis) avec 30 à 60 minutes de réfrigération entre chaque plis: après le premier plis, envelopper et refroidir pendant 45 minutes; après le second, refroidir 30 minutes; après le troisième, refroidir pendant 30 minutes avant de couper.",
      "visualCue": {
        "primaryTarget": "Après le laminage et le pliage, la pâte montre un modèle de marbre propre de couches de beurre vu du bord de coupe. Pas de frottis de beurre ou de saignement. Les bords restent propres et carrés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre s'est fracturé en morceaux. Vous pouvez voir de gros morceaux de beurre massif plutôt que de même les couches quand vous regardez au bord.",
            "action": "Le beurre était trop froid. Refroidissez la pâte et laissez reposer 30 minutes. Au pli suivant, rouler plus doucement pour casser progressivement les morceaux."
          },
          {
            "state": "Perfect",
            "description": "Fine, même couche visible au bord de la coupe. La toux est froide, ferme, roule bien. Pas de beurre qui traverse la surface.",
            "action": "Réfrigérer pour la période de repos requise avant le prochain pli."
          },
          {
            "state": "Overdone",
            "description": "Le beurre a fondu et a été frotté dans la pâte — aucune couche visible, surface grasse, pâte semble humide.",
            "action": "La pâte est trop chaude. Refroidir immédiatement pendant 1 heure. Si le beurre est complètement absorbé, la lamination est perdue — les croissants cuireont sans couches."
          }
        ]
      },
      "feelCue": "Après chaque pli, la pâte doit se sentir froide, ferme et légèrement résistante sous le rouleau — jamais chaude, jamais molle. Si votre main réchauffe la pâte à travers le parchemin en moins de 30 secondes, il est trop chaud pour travailler avec."
    },
    {
      "nodeId": "step_4",
      "action": "Forme",
      "inputs": [
        "laminated_dough"
      ],
      "outputState": "shaped_croissants",
      "instructions": "Rouler la pâte entièrement laminée à une épaisseur de 4 à 5 mm dans un long rectangle. Triangles coupés avec une base de 10 cm et des côtés de 20 cm. Étendez chaque triangle doucement jusqu'à 25 cm. En partant de la base large, roulez fermement en avant sans serrer — la pression doit être confiante mais jamais écrasante. 7–8 rouleaux devraient vous amener à la pointe. Courbez les deux bouts vers vous pour créer le croissant classique. Placer sur une poêle parcheminée avec l'extrémité en dessous (en touchant la poêle, on évite de dérouler pendant la mise à l'épreuve). Espace à 6 cm.",
      "visualCue": {
        "primaryTarget": "Un croissant serré avec l'extrémité fixée en dessous. Les brins de pâte enveloppent visiblement autour du corps, même en épaisseur de bout en bout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le croissant est légèrement blessé — les brins sont inégaux et le corps est épais au centre, mais mince aux extrémités.",
            "action": "Déroulez et recommencez. Appuyez sur la base et roulez avec une pression uniforme."
          },
          {
            "state": "Perfect",
            "description": "Compact, même croissant. Le tuyau est coincé. Les multiples couches de pâte sont à peine visibles aux extrémités de la coupe comme des anneaux fins.",
            "action": "Lavez légèrement les oeufs et laissez la preuve à 25–27 °C."
          },
          {
            "state": "Overdone",
            "description": "Rouleau si serré le croissant est dense et semblable à une saucisse. Calque compressée.",
            "action": "Permettre de prouver plus longtemps — un temps supplémentaire d'épreuve peut ouvrir les couches en arrière. Ils ne se briseront peut-être pas autant."
          }
        ]
      },
      "feelCue": "Un croissant de forme correcte est plus léger qu'il ne le devrait pour sa taille: les couches stratifiées ont de l'air entre elles. Lorsque vous le soulevez, il y a presque une qualité de papier à l'extérieur tandis que le corps se sent substantiel."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire",
      "inputs": [
        "shaped_croissants",
        "ing_08"
      ],
      "outputState": "finished_croissants",
      "instructions": "Des croissants en forme de preuve à 25–27 °C (pas plus chaud — au-dessus de 29 °C le beurre fond et les couches s'effondrent) pendant 2–3 heures jusqu'à ce que la poêle soit visiblement gonflée et gigotée lorsque la poêle est secouée. Ils ne doubleront pas en hauteur — ils s'étendent vers l'extérieur et les couches se détendent. Appliquer le lavage des œufs (1 jaune + 1 œuf entier, tendu) très doucement avec un pinceau, en évitant les bords coupés (sceller les couches empêche la montée). Laisser reposer 10 minutes, appliquer un deuxième lavage. Cuire à 190 C (375 F) pendant 18 à 22 minutes, en tournant une fois à 10 minutes. Le beurre doit vaporiser les couches, ce qui se produit dans les 5 premières minutes.",
      "visualCue": {
        "primaryTarget": "Deep ambre-brun avec un brillant laqué. Les couches individuelles sont visiblement séparées et debout aux extrémités de coupe. Le croissant s'est élargi et les points de queue sortent d'un corps gonflé et en couches.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle, aucune séparation de couche visible aux extrémités. Sensation de douceur et de rendement — le beurre n'a pas ouvert les couches de vapeur.",
            "action": "Cuire encore 3-5 minutes. Les croissants pâles sont sous-cuits ; leur intérieur sera cru et pâté."
          },
          {
            "state": "Perfect",
            "description": "Riche ambre-brun, brillant, claire séparation de la couche aux extrémités de la coupe montrant un motif en nid d'abeille. Les croûtes sont légèrement secouées, et le son est creux à l'intérieur. Ça tremble quand tu le casses.",
            "action": "Laisser refroidir 10 minutes sur la grille. Mangez dans les 2 heures pour une rupture maximale."
          },
          {
            "state": "Overdone",
            "description": "Très brun foncé, presque brûlé sur les extrémités du croissant. Une odeur de caramel amère. Les extrémités des couches sont croustillantes.",
            "action": "L'intérieur peut encore être excellent. Coupez les pointes les plus sombres. La rupture est maintenant maximale — profitez immédiatement."
          }
        ]
      },
      "feelCue": "Un croissant parfait se brise avec une croûte éclatante qui envoie des flocons de croûte feuilletée volant. L'intérieur est un nid d'abeilles de fines couches beurrées — en tirer un à part et compter 27 ou plus. L'odeur doit être le beurre sucré, le caramel et le pain tout à la fois."
    }
  ]
};
