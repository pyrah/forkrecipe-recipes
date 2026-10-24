export default {
  "repoId": "master_american_pecan-pie-filling_001",
  "parentRepoId": null,
  "slug": "pecan-pie-filling",
  "author": "ForkRecipe Kitchen",
  "title": "Remplissage de la tarte aux pois",
  "description": "Une crème ambrée, parfumée au caramel, liée au sirop de maïs et aux œufs entiers, versé sur des noix de pécan grillées qui s'élèvent à la surface et laque sur une couronne brillante et recouverte de craquelin.",
  "cuisine": "Américain",
  "culture": "Sud",
  "category": "desserts",
  "tags": [
    "noix de pécan",
    "sirop de maïs",
    "sud",
    "tarte",
    "doux"
  ],
  "difficulty": 3,
  "activeTime": "20 min",
  "totalTime": "75 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 10,
    "salty": 3,
    "sour": 0,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Sweetener",
      "name": "Sirop de maïs foncé",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "sirop d'or (moins sucré, plus complexe)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre brun foncé, emballé",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun clair (moins de mélasse)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Gros œufs, température ambiante",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé fondu et refroidi",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre bruni pour une profondeur plus grande"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Protein",
      "name": "moitiés de noix de pécan",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Noix (plus amères, moins riches)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel casher fin",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Extrait de vanille pure",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": [
        "bourbon (même quantité, plus de saveur adulte)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire griller",
      "inputs": [
        "ing_05"
      ],
      "outputState": "toasted_pecans",
      "instructions": "Étendre les moitiés de noix de pécan sur une plaque sèche en une seule couche. Faire cuire à 175 C (350 F) pendant 8-10 minutes, en remuant une fois à mi-chemin. Vous ne faites pas que griller pour la couleur — vous chassez l'humidité pour que les noix restent croustillantes à travers un long four à l'intérieur d'une crème humide.",
      "visualCue": {
        "primaryTarget": "Les noix de noix de pécan sont uniformément une ombre plus profonde — un brun rougeâtre chaud plutôt que le bronzage pâle qu'ils ont commencé comme. La cuisine sent le beurre chaud et le caramel.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les noix sont encore pâles et sentent crus et verts. Pas de changement de couleur sur les faces plates.",
            "action": "Retourner au four 3 minutes de plus. Regardez de près — ils vont de sous - mort à surdosé rapidement."
          },
          {
            "state": "Perfect",
            "description": "Profondément parfumé, acajou et huileux à la surface. Une moitié cassée révèle un intérieur régulièrement grillé, pas seulement une peau grillée.",
            "action": "Retirer et refroidir complètement sur la casserole avant utilisation."
          },
          {
            "state": "Overdone",
            "description": "Les noix sont brun foncé à noir aux bords. L'odeur est amère et acride plutôt que caramel-sweet.",
            "action": "Jeter et recommencer — les noix de pécan brûlées ruineront la tarte finie avec une amertume persistante."
          }
        ]
      },
      "feelCue": "Une noix de noix de pécan parfaitement grillée s'éclate proprement lorsqu'elle est cassée et sèche entre les doigts, sans graisse brute cireuse. Frottez-en un entre vos paumes; l'huile libérée doit sentir immédiatement du caramel, pas des noix crues."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_04",
        "ing_06",
        "ing_07"
      ],
      "outputState": "syrup_base",
      "instructions": "Dans un grand bol, fouetter ensemble le sirop de maïs foncé, le sucre brun, le beurre fondu (pas chaud), le sel et la vanille jusqu'à ce que le sucre soit partiellement dissous et que le mélange soit de couleur uniforme. Le beurre doit être refroidi à moins de 50 °C ou il commencera à cuire les œufs lorsqu'ils seront ajoutés. Frottez une goutte entre vos doigts — vous ne devriez pas sentir des cristaux de sucre non dissous, bien que certains soient acceptables à ce stade.",
      "visualCue": {
        "primaryTarget": "Un liquide ambre profond et brillant sans séparation visible du beurre. Les stries de sucre brun ont été fouettées dans une couleur uniforme caramel foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sucre brun est encore dans les morceaux visibles ou les stries non mélangées. Le beurre flotte à la surface.",
            "action": "Frottez vigoureusement pendant 30 secondes. Chauffer légèrement le bol de dessous si le sucre est très froid et cristallin."
          },
          {
            "state": "Perfect",
            "description": "Gloire, uniformément foncé ambre sans stries visibles. Il tombe du fouet dans un ruban lisse et intact.",
            "action": "Ajouter les œufs un à la fois et continuer."
          },
          {
            "state": "Overdone",
            "description": "S/O — vous ne pouvez pas trop mélanger cette étape. Cependant, si le bol est encore très chaud à partir du beurre, attendez qu'il refroidisse avant d'ajouter des œufs.",
            "action": "Mettre le bol dans un bain d'eau froide pendant 3-4 minutes pour refroidir avant d'ajouter des œufs."
          }
        ]
      },
      "feelCue": "Le mélange doit se sentir comme du caramel liquide — légèrement collant au bout des doigts, avec la traînée dense et visqueuse d'un sirop plutôt que le mince glissement d'eau."
    },
    {
      "nodeId": "step_3",
      "action": "Fouetter",
      "inputs": [
        "syrup_base",
        "ing_03"
      ],
      "outputState": "filling_batter",
      "instructions": "Ajouter les œufs un à la fois, en fouettant chacun complètement avant d'ajouter le suivant. Ne battez pas agressivement — vous incorporez des œufs, pas de la mousse de construction. L'excès d'air crée un remplissage ressemblant à du soufflé qui souffle et craque de façon spectaculaire dans le four. fouetter doucement, juste jusqu'à ce que chaque oeuf soit complètement absorbé et que le mélange soit homogène.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, homogène, versable qui est un brun-ambre profond uniforme sans stries d'oeufs. Pas de mousse ou de bulles à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries jaunes visibles de jaune d'œuf qui traversent le sirop foncé. Le mélange a l'air marbré.",
            "action": "Continuez à fouetter doucement jusqu'à ce qu'il soit entièrement uniforme."
          },
          {
            "state": "Perfect",
            "description": "Ambre lisse, profond, avec une surface satinée et très peu de bulles. Verse uniformément une cuillère dans un ruisseau stable.",
            "action": "Verser sur les noix de pécan grillées dans la coquille de tarte non cuite."
          },
          {
            "state": "Overdone",
            "description": "La pâte est mousseuse et pleine de fines bulles de sursaut. La surface ressemble à de la mousse blanche d'œuf battue.",
            "action": "Laisser reposer 10 minutes pour que la mousse se dépose avant de cuire — les bulles cuites dans créeront une texture spongieuse et aérée au lieu de crème dense."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt dans — la pâte enveloppe votre doigt comme du miel chaud, ni trop mince (eau) ni trop épais (caramel-stide). Il devrait couler de votre doigt levé dans un fil lent et ininterrompu."
    },
    {
      "nodeId": "step_4",
      "action": "Assembler",
      "inputs": [
        "filling_batter",
        "toasted_pecans"
      ],
      "outputState": "unbaked_pie",
      "instructions": "Disposer les moitiés de noix de pécan grillées dans des cercles concentriques dans une coquille de tarte de 9 pouces non cuite, côté plat vers le bas, couvrant tout le fond. Versez la pâte de remplissage doucement sur eux — les noix de pécan flotteront et redistribueront. N'essayez pas de les tenir en place; ils s'arrangeront comme ils font cuire. Remplir à moins de 1 cm du bord de la croûte.",
      "visualCue": {
        "primaryTarget": "Les noix de noix de pécan flottent près de la surface dans une couche uniforme, partiellement submergée dans le remplissage ambre. La coque est remplie juste en dessous de la jante sans ouverture.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Shell est moins de 75% plein. Trop peu de noix de noix de pécan — le rapport noix-à-garde sera faux.",
            "action": "Ajouter plus de remplissage ou plus de noix de noix de pécan. Ne pas dépasser la jante."
          },
          {
            "state": "Perfect",
            "description": "Les noix de noix de pécan forment une couche presque continue qui se chevauche juste sous la surface du remplissage. Le remplissage atteint 5 à 8 mm du bord de la croûte.",
            "action": "Cuire immédiatement à 175 °C (350 °F)."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage est sur le bord de la coque. Risque de débordement dans le four.",
            "action": "Retirer soigneusement une petite quantité de remplissage avec une cuillère. Placez une plaque sur le support ci-dessous comme une prise."
          }
        ]
      },
      "feelCue": "Inclinez le plat doucement — le remplissage doit se déplacer lentement et se déposer avec un léger tremblement, comme le panna cotta avant qu'il ne soit réglé. S'il s'enroule librement, il n'a pas été mélangé assez épais."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire au four",
      "inputs": [
        "unbaked_pie"
      ],
      "outputState": "baked_pie",
      "instructions": "Faire cuire à 175 °C (350 °F) sur le support intermédiaire inférieur pendant 50 à 60 minutes. Bouclier le bord de la croûte avec du papier ou un bouclier à tarte après les 20 premières minutes. Les ensembles de crème de l'extérieur vers l'intérieur — les bords vont se raffermir tandis que le centre apparaît encore liquide. Ne pas trop cuire en attendant que le centre se ferme dans le four; il finira la cuisson hors-chauffage.",
      "visualCue": {
        "primaryTarget": "Le haut de noix de pécan est une acajou laquée profonde. Les bords du remplissage sont entièrement réglés. Le centre oscille comme de la gélatine — un tourbillon lent et unifié à travers toute la tarte, pas une éclaboussure liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre oscille de façon lâche et indépendante comme un œuf cru, et le remplissage semble opaque et bouillonnant.",
            "action": "Cuire encore 5 minutes et revérifier. Utilisez un thermomètre — le centre devrait atteindre 85 C (185 F)."
          },
          {
            "state": "Perfect",
            "description": "Les bords sont fermes et mats. Le centre a un vagabond lent qui déplace toute la tarte comme une masse. Les noix de noix de pécan sont laqués profondément et parfumés.",
            "action": "Laisser refroidir complètement sur une grille — au moins 2 heures — avant de trancher."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage a gonflé au-delà du bord de la croûte et s'est fendu à travers la surface. La crème a brouillé au lieu de se mettre en douceur.",
            "action": "Laisser refroidir — le remplissage se dégonfle et les fissures peuvent se refermer légèrement. La texture sera granuleuse, mais la saveur est généralement encore bonne."
          }
        ]
      },
      "feelCue": "Placez votre paume 5 cm au-dessus du centre de la tarte — vous devriez sentir une forte chaleur résiduelle rayonnant vers le haut. L'odeur doit être intensément caramel-sweet avec des noix grillées, pas oeufs ou sulfureux."
    }
  ]
};
