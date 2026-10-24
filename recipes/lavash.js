export default {
  "repoId": "master_armenian_lavash_001",
  "parentRepoId": null,
  "slug": "lavash",
  "author": "ForkRecipe Kitchen",
  "title": "Lavasch arménien",
  "description": "Le pain plat à la fine feuille a été cuit en quelques secondes sur une pierre ou une grille brûlante jusqu'à ce qu'il soit blister et carbonisé dans des taches — il craque comme il refroidit, mais reste souple s'il est maintenu enveloppé, et devient à nouveau souple avec un souffle d'humidité.",
  "cuisine": "Arménien",
  "culture": "Hauts plateaux arméniens",
  "category": "breads",
  "tags": [
    "laves",
    "Arménien",
    "Pain plat",
    "pain mince",
    "sans levain",
    "pain à bille"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "farine de pain (légèrement mâcher)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude (40 C)",
      "ratioValue": 55,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Garnish",
      "name": "Graines de sésame",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "Graines de nigella",
        "graines de pavot"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile végétale neutre",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "Huile d'olive"
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
        "ing_05"
      ],
      "outputState": "lavash_dough",
      "instructions": "Mélanger la farine et le sel dans un bol. Ajouter l'eau chaude et l'huile. Mélangez avec votre main jusqu'à ce qu'une pâte cohésive et ferme forme — la lave est une pâte maigre, sans levain, et elle doit être nettement plus rigide que la pâte à pain. Il devrait nettoyer les côtés du bol et ne pas coller à vos mains lorsqu'il est manipulé avec une pression quelconque. Agenouiller brièvement dans le bol pendant 2 à 3 minutes pour le rassembler. La pâte se sentira dure et résistante — c'est exact. Le développement à haute teneur en gluten lui permet d'étirer le papier-mince sans déchirer.",
      "visualCue": {
        "primaryTarget": "Une balle lisse et ferme qui tient sa forme complètement sans s'étendre. Plus forte que la pâte à pizza, plus proche de la pâte aux pâtes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mouiller et relâcher; coller aux mains; ne pas tenir une forme de boule; farine pas entièrement incorporée.",
            "action": "Ajouter la farine 1 cuillère à soupe à la fois. La pâte de lavah doit être ferme, pas molle."
          },
          {
            "state": "Perfect",
            "description": "Ferme, lisse, légèrement collant mais pas collant. Il tient sa forme. Résiste à la bosse lorsqu'il est pressé. Sens propre de la farine.",
            "action": "Couvrir et reposer 1 heure pour développer le gluten et détendre la pâte."
          },
          {
            "state": "Overdone",
            "description": "Très raide et friable — la pâte se fissure ou s'écroule lorsqu'elle est repliée.",
            "action": "Ajouter l'eau chaude 1 cuillère à café à la fois jusqu'à ce qu'elle soit souple et cohésive."
          }
        ]
      },
      "feelCue": "La pâte de lavasch devrait se sentir comme de la pâte de pâtes bien faite — assez ferme pour tenir sa forme, suffisamment lisse pour qu'elle ne déchire pas quand vous appuyez sur votre pouce, et résolument plus raide que n'importe quelle pâte à pain."
    },
    {
      "nodeId": "step_2",
      "action": "Repos",
      "inputs": [
        "lavash_dough"
      ],
      "outputState": "rested_dough",
      "instructions": "Enveloppez fermement la pâte dans un emballage en plastique ou recouvrez le bol d'une serviette humide. Reposez à température ambiante pendant 60 minutes. Ce repos est essentiel: sans lui, le gluten est trop tendu et élastique pour rouler finement — il va retomber et résister à chaque passage de l'épingle. Au bout d'une heure, le gluten se détend complètement et la pâte s'étire sans effort au papier-mince sans déchirer.",
      "visualCue": {
        "primaryTarget": "Dough a visiblement détendu — il est légèrement flatteur, moins printanier. Lorsque vous appuyez sur un doigt, le tiret ne ressort pas immédiatement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après seulement 20 minutes, la pâte est toujours printanière et ferme — elle résiste lorsque vous essayez d'étirer une petite pièce.",
            "action": "Attendez 60 minutes. La relaxation au gluten est tout le point de ce repos."
          },
          {
            "state": "Perfect",
            "description": "Poke laisse un tiret qui retourne lentement. Une petite pièce tirée à la main peut être étirée 10 cm sans déchirer. La surface est lisse et mate.",
            "action": "Divisez en 6–8 pièces et commencez à rouler."
          },
          {
            "state": "Overdone",
            "description": "Après 3 heures et plus à température ambiante, la pâte est très molle et molle, presque impossible à ramasser sans déchirer.",
            "action": "Refroidir brièvement au réfrigérateur pendant 10 minutes. Il roulera fin une fois légèrement frais."
          }
        ]
      },
      "feelCue": "La pâte de lave reposée doit se sentir comme de l'argile de modélisation à température ambiante, ferme mais non plus résistante. Tirez une petite pièce et elle s'étire dans un ruban avant de déchirer, plutôt que de se casser en arrière."
    },
    {
      "nodeId": "step_3",
      "action": "Forme",
      "inputs": [
        "rested_dough",
        "ing_04"
      ],
      "outputState": "rolled_lavash",
      "instructions": "Divisez la pâte en 6–8 morceaux égaux. Sur une surface légèrement farinée, utilisez une fine goupille de laminage pour rouler chaque pièce aussi fin que possible humainement — vous visez 1–2 mm ou moins, à peu près l'épaisseur d'une carte à jouer. Roulez depuis le centre, en tournant à 90 degrés après chaque passage. La lave est assez mince quand vous pouvez voir le contour de votre main à travers elle lorsqu'il est tenu à la lumière. Éparpiller les graines de sésame uniformément sur la surface et les rouler une fois légèrement pour les presser. Si laminage en lots, garder les pièces non laminées recouvertes pour éviter le séchage.",
      "visualCue": {
        "primaryTarget": "Feuilles presque translucides — Vous pouvez voir les ombres de vos doigts à travers la pâte lorsqu'ils sont tenus à la lumière. Semences de sésame pressées dans la surface sans déchirer la pâte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Feuille de 4 à 5 mm d'épaisseur, opaque et pâteuse. Il ne fera pas de blister et de char correctement dans le four — il fera cuire comme un pain plat doux, pas une lave croustillante.",
            "action": "Continuer à rouler avec une pression ferme et uniforme. Utilisez un laminoir long et fin pour le levier."
          },
          {
            "state": "Perfect",
            "description": "Presque translucide, plus mince que 2 mm. Se tient ensemble sans larmes. Graines de sésame intégrées à la surface. La feuille est presque délicate au toucher.",
            "action": "Cuire immédiatement sur une pierre ou une grille préchauffée — ne la laissez pas sécher."
          },
          {
            "state": "Overdone",
            "description": "La feuille a été déchirée en plusieurs endroits; des trous visibles du laminage agressif.",
            "action": "Repliez les zones déchirées et roulez légèrement. Les taches pliées seront juste plus épaisses."
          }
        ]
      },
      "feelCue": "Une feuille de lave bien roulée devrait se sentir comme du papier de tissu lourd — presque sans poids dans vos mains, incroyablement mince mais toujours en tenant ensemble. Il saigne sur les bords quand vous le soulevez."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "rolled_lavash"
      ],
      "outputState": "finished_lavash",
      "instructions": "Préchauffer une pierre cuite, une grille en fonte ou une poêle lourde à feu vif pendant au moins 10 minutes — ou chauffer un four à son maximum avec une pierre à l'intérieur. La surface de cuisson doit être très chaude. Drapez une feuille de lave directement sur la surface chaude. Il va blister et buller en moins de 60 secondes. Lorsque le fond montre des taches carbonisées et que les bords se recroquevillent légèrement, retourner avec des pinces et cuire de 20 à 30 secondes de plus sur le deuxième côté. Supprimer immédiatement. Piquer les laves cuites et couvrir d'une serviette — elles seront souvent vapeur dans des draps souples. Pour les laves croustillantes, laisser à découvert à sec à l'air.",
      "visualCue": {
        "primaryTarget": "Blister et carbonisé dans des taches irrégulières des deux côtés, bronzage pâle entre les taches plus foncées. Les bords peuvent se courber légèrement. Le pain est très mince et léger.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pale tout au long, pas de cloques, pâteux et épais. Il a fallu plus de 90 secondes — la surface n'était pas assez chaude.",
            "action": "Flip et cuire plus longtemps. Augmenter la chaleur pour la feuille suivante. Une surface froide ne peut pas faire de lave."
          },
          {
            "state": "Perfect",
            "description": "Les taches d'omble sont pâles et foncées, réparties à la surface, légères et croustillantes ou pliables selon la façon dont elles sont conservées. Des odeurs de grain grillé et de sésame.",
            "action": "Empiler sous une serviette pour laves souples ou étaler sur un rack pour laves croustillantes."
          },
          {
            "state": "Overdone",
            "description": "Plus de la moitié de la surface est noire et amère; le pain est acride.",
            "action": "Réduire légèrement la chaleur pour les feuilles suivantes. Un peu d'omble est souhaitable — la différence entre «charre» et «brûlure» est la saveur dominante."
          }
        ]
      },
      "feelCue": "Une lave fraîchement cuite devrait se sentir incroyablement légère — presque comme tenir une grande feuille. La lave de Crisp craque quand elle est pliée. La lave couverte et à vapeur est douce et drape sur votre main comme un mouchoir."
    }
  ]
};
