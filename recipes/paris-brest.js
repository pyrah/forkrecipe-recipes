export default {
  "repoId": "master_french_paris_brest_001",
  "parentRepoId": null,
  "slug": "paris-brest",
  "author": "ForkRecipe Kitchen",
  "title": "Paris-Brest",
  "description": "Une roue de pâte dorée à choux s'ouvre pour révéler un nuage de mousseline de praline de noisettes – légère et aérée où la pâtisserie est croquante, riche et sucrée de caramel où la crème se cache. Nommé pour une course à vélo, il a le goût de la ligne d'arrivée.",
  "cuisine": "Français",
  "culture": "Français",
  "category": "desserts",
  "tags": [
    "dessert",
    "français",
    "Choux",
    "pâtisserie",
    "praline",
    "pâtisserie",
    "noix"
  ],
  "difficulty": 4,
  "activeTime": "1 hr 30 min",
  "totalTime": "3 hr",
  "ratioSystem": "weight",
  "stars": 1620,
  "forks": 95,
  "contributors": 29,
  "license": "CC-BY-SA",
  "createdAt": "2026-02-15",
  "updatedAt": "2026-02-15",
  "flavorRadar": {
    "sweet": 5,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Hydration",
      "name": "Eau",
      "ratioValue": 125,
      "defaultUnit": "g",
      "substitutions": [
        "lait entier (choux plus riches)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé, cube",
      "ratioValue": 55,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Farine à usage général, ciselée",
      "ratioValue": 70,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Œufs entiers (environ 3 grands)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre de ricin (pour la praline)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Structure",
      "name": "Noix blanches grillées",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "amandes entières"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Dairy",
      "name": "Crème lourde (35% de graisse), froide",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Binder",
      "name": "Jaunes d'œuf",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Structure",
      "name": "Farine de maïs (pour la crème de pâtisserie)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "poudre de crème"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Fat",
      "name": "Beurre non salé, température ambiante (pour la crème de pâtisserie)",
      "ratioValue": 55,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Caramélisation",
      "inputs": [
        "ing_06",
        "ing_07"
      ],
      "outputState": "praline_paste",
      "instructions": "Étaler les noisettes grillées sur un tapis en silicone. Dans une casserole propre et sèche, faire chauffer le sucre à feu moyen sans remuer jusqu'à ce que les bords commencent à fondre. Tourner doucement la poêle et continuer jusqu'à ce que tout le sucre soit un caramel ambre profond — la couleur d'un penny de cuivre. Verser immédiatement sur les noisettes dans une mince feuille. Laisser agir à température ambiante, environ 20 minutes. Casser en morceaux et traiter dans un robot alimentaire pendant 4 à 6 minutes, en grattant souvent, jusqu'à ce qu'il se transforme en pâte. Les huiles dans les noix se libéreront et la pâte deviendra versable et brillante.",
      "visualCue": {
        "primaryTarget": "Couleur caramel avant de verser",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Caramel est d'or pâle, presque jaune. Ça sent tout simplement doux, pas de complexité.",
            "action": "Continuez à cuisiner. Le caramel pâle fera un praline borgne. Attendez la couleur cuivre-ambre."
          },
          {
            "state": "Perfect",
            "description": "Ambre profond, la couleur du miel foncé ou du bourbon vieilli. Ça sent le caramel et les noix. Une goutte sur une plaque froide se met immédiatement sur un disque dur et brillant.",
            "action": "Versez immédiatement sur les noisettes — le caramel va de parfait à brûlé en quelques secondes."
          },
          {
            "state": "Overdone",
            "description": "Brun rougeâtre foncé s'approchant noir aux bords. Une odeur amère et acride domine la douceur.",
            "action": "Jetez. La praline amère ne peut être sauvée et ruinera la mousseline."
          }
        ]
      },
      "feelCue": "La pâte de praline finie doit couler d'une spatule dans un ruban lent et épais, comme du beurre de cacahuète chaud — brillant et lisse sans morceaux de noisettes visibles."
    },
    {
      "nodeId": "step_2",
      "action": "Bouillir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_05",
        "ing_03"
      ],
      "outputState": "choux_panade",
      "instructions": "Mélanger l'eau, le beurre et le sel dans une casserole lourde. Porter à ébullition complète — chaque morceau du beurre doit être fondu avant l'ébullition, ou le rapport est jeté. Retirer du feu et ajouter toute la farine à la fois. Incorporer vigoureusement avec une cuillère en bois jusqu'à ce qu'une balle cohésive se forme et s'éloigne proprement des côtés. Retourner à feu moyen et cuire la panade en remuant constamment, pendant 2 minutes pour la sécher. La pâte laissera un mince film sur le fond de la poêle.",
      "visualCue": {
        "primaryTarget": "Boule de pâte à panade Choux dans une casserole",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est humide et brillante, se répand à plat dans la poêle. Le film en bas est absent.",
            "action": "Continuer la cuisson à feu moyen, en remuant constamment. L'humidité doit s'évaporer."
          },
          {
            "state": "Perfect",
            "description": "La pâte forme une balle lisse et non collante qui glisse autour de la casserole. Un film mince et sec enveloppe le fond de la poêle. La vapeur s'élève de la pâte.",
            "action": "Transférer dans un bol de mélangeur et battre brièvement pour refroidir avant d'ajouter des œufs."
          },
          {
            "state": "Overdone",
            "description": "La toux est très raide et se fissure à la surface. Le film a commencé à brunir.",
            "action": "Supprimer immédiatement. La pâte est trop sèche pour absorber tous les oeufs, ajouter soigneusement les œufs et surveiller étroitement leur consistance."
          }
        ]
      },
      "feelCue": "Appuyez sur un bout de doigt dans la panade — il devrait se sentir ferme, la purée sèche, laissant un tiret propre sans coller à votre peau."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "choux_panade",
        "ing_04"
      ],
      "outputState": "choux_paste",
      "instructions": "Battre la panade avec un support de palette à vitesse moyenne pendant 1 minute pour refroidir légèrement et relâcher la vapeur. Ajouter les œufs battus en quatre ajouts, ce qui permet à chacun d'intégrer complètement avant d'ajouter le suivant. La pâte aura l'air cassée et caillé après chaque addition — continuez à battre et elle se rassemblera. S'arrêter lorsque la pâte tombe de la palette dans une forme V lente et épaisse (le 'test de bec').",
      "visualCue": {
        "primaryTarget": "Pâte de chou qui tombe de la pagaie",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est très raide et tombe dans des touffes épaisses, pas un ruban. Il se précipiterait et craquerait au four.",
            "action": "Ajouter une autre cuillère à soupe d'oeuf battu et continuer à battre. Revérifier le test du bec."
          },
          {
            "state": "Perfect",
            "description": "La pâte tombe de la pagaie dans une forme V lente et brillante, un ruban épais et triangulaire qui conserve sa forme pendant 2-3 secondes avant de se replier. Soyeux et doux.",
            "action": "Transférer dans un sac de tuyauterie muni d'une grande pointe étoile."
          },
          {
            "state": "Overdone",
            "description": "La pâte est trop runny, tombant dans un ruisseau mince. Il ne tiendra pas sa forme lorsque piped.",
            "action": "Il n'y a pas de choux lâches de sauvetage. Faites cuire ce lot en profiteroles (faible attente) ou recommencez."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir comme une calandre épaisse et chaude, elle résiste à la pagaie mais coule à contrecœur. Il devrait laisser un sentier brillant sur les côtés du bol pendant qu'il bouge."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "choux_paste"
      ],
      "outputState": "baked_choux_ring",
      "instructions": "Préchauffer le four à 200 C (390 F). Tracer un cercle de 22 cm sur le parchemin. Pipe la pâte de choux dans un double anneau — un anneau sur la ligne tracée, un deuxième anneau juste à l'intérieur, puis un troisième anneau sur le dessus de la jointure. Cela crée une bague large et stable qui peut être divisée proprement. Badigeonner avec les œufs et saupoudrer d'amandes tranchées. Cuire 35 à 40 minutes sans ouvrir le four jusqu'à ce qu'il soit bien doré. Casser la porte du four avec une cuillère en bois et cuire 5 minutes de plus pour sécher l'intérieur.",
      "visualCue": {
        "primaryTarget": "Couleur et structure de la bague Choux au four",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'anneau est en or pâle et sent la lumière lorsqu'il est levé, mais sonne creux seulement au sommet. Une brochette insérée près de la base sort humide.",
            "action": "Retourner au four 5 minutes de plus avec la porte ajar. L'intérieur doit être sec ou il s'effondrera lors du refroidissement."
          },
          {
            "state": "Perfect",
            "description": "Deep, même doré-brun sur toute la surface. Ça a l'air creux. Sens très léger pour sa taille. Les amandes sont grillées et parfumées.",
            "action": "Retirez-vous sur une grille et refroidissez complètement avant de trancher — au minimum 45 minutes."
          },
          {
            "state": "Overdone",
            "description": "Anneau brun très foncé avec bouts d'amande noircis. La surface a de grandes fissures qui traversent le sommet.",
            "action": "Trim les taches les plus sombres lors du remplissage. L'intérieur est probablement beau — le coeur est pardonnant à l'intérieur."
          }
        ]
      },
      "feelCue": "Soulevez l'anneau — il devrait sentir presque impossible de la lumière, comme un support en carton. Tapez sur le dessous : un coup creux clair et résonant signifie que l'intérieur a bien séché."
    },
    {
      "nodeId": "step_5",
      "action": "Whip",
      "inputs": [
        "ing_08",
        "praline_paste",
        "ing_09",
        "ing_10"
      ],
      "outputState": "praline_mousseline",
      "instructions": "Faire une crème pâtissière : fouetter les jaunes avec 50g de sucre et 20g d'amidon de maïs jusqu'à ce qu'ils soient pâles. Faire mijoter le lait, verser sur les jaunes tout en fouettant, revenir à la poêle et cuire jusqu'à ce qu'il soit épais et bouillonnant. Ajouter 55 g de beurre à température ambiante et 80 g de pâte de praline. Refroidir complètement. Whip la crème froide aux pics doux. fouetter la crème de pâtisserie froide jusqu'à ce qu'elle soit lisse et soyeuse, puis plier la crème fouettée en tiers dans la crème de praline jusqu'à ce qu'elle soit simplement combinée.",
      "visualCue": {
        "primaryTarget": "texture mousseline en bol",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est lâche et versable. La mousseline s'effondrerait en quelques minutes.",
            "action": "Refroidir la crème pâtissière plus loin (il doit être complètement froid) et fouetter la crème pour raffermir les pics avant de plier."
          },
          {
            "state": "Perfect",
            "description": "Mousseline tient des pics rigides et définis et est lisse et brillant. Il a une teinte douce brun praliné et sent puissant de noisettes caramélisées.",
            "action": "Transférer dans un sac de tuyauterie muni d'une grande pointe étoile ouverte."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est granuleux et commence à avoir l'air légèrement caillé — la crème a été trop fouettée.",
            "action": "Plier dans une petite cuillère de crème non fouettée pour se détendre. Il ne sera pas tout à fait aussi léger mais sera toujours délicieux."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère à travers la mousseline — elle devrait laisser un creux propre et tranchant qui tient parfaitement ses murs. Si les murs s'effondrent, refroidissez le bol sur la glace tout en pliant."
    },
    {
      "nodeId": "step_6",
      "action": "Assemblage",
      "inputs": [
        "baked_choux_ring",
        "praline_mousseline"
      ],
      "outputState": "finished_paris_brest",
      "instructions": "Utilisez un couteau dentelé pour diviser horizontalement l'anneau de choux, en coupant à travers le point le plus large — visez pour une division 40/60, avec la plus grande pièce sur le fond. Tuez la mousseline dans de généreuses rosettes hautes le long de tout l'intérieur de l'anneau inférieur, la tondant plus haut que le bord de l'anneau. Réglez doucement l'anneau supérieur sur la crème. Poussière avec sucre en poudre et servir dans les 2 heures.",
      "visualCue": {
        "primaryTarget": "Profil paris-brest assemblé",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mousseline est trop plat, à peine regardant d'entre les deux moitiés. Le drame visuel est absent.",
            "action": "Pipe plus généreusement — la mousseline devrait déborder légèrement les côtés, visible de l'autre côté de la table."
          },
          {
            "state": "Perfect",
            "description": "L'anneau supérieur est assis à un angle légèrement plus haut, rosettes définies de la crème de couleur caramel qui se détache visiblement sur les côtés. Le sucre en poudre épousse le dessus dans un mince voile.",
            "action": "Réfrigérer jusqu'à 2 heures avant de servir. Couper avec un couteau mouillé."
          },
          {
            "state": "Overdone",
            "description": "Mousseline s'est effondrée et la bague supérieure s'enfonce dans la crème.",
            "action": "Réfrigérer immédiatement. Le froid ferme la crème. Servir au froid directement depuis le réfrigérateur."
          }
        ]
      },
      "feelCue": "Lorsque vous appuyez doucement sur le dessus de la pâtisserie assemblée, vous devez sentir à la fois la résistance croquante de la coquille de choux et le doux donner de la crème en dessous — deux textures en un seul coup."
    }
  ]
};
