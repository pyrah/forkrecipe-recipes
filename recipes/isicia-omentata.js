export default {
  "repoId": "master_ancient_roman_isicia_omentata_001",
  "parentRepoId": null,
  "slug": "isicia-omentata",
  "author": "ForkRecipe Kitchen",
  "title": "Isicia Omentata",
  "description": "La réponse de Rome au hamburger, levé tout droit d'Apicius : boeuf haché poivré de poivre et de pignons de pin, assommé de garum salé et d'un jet de vin, puis enveloppé dans de la graisse de chou lacy qui abaisse le patty pendant qu'il fond dans une coquille croustillante et salée. Fumé, funky, et incontestablement ancien.",
  "cuisine": "Ancien romain",
  "culture": "Roman impérial",
  "category": "proteins",
  "tags": [
    "Ancien-roman",
    "apicius",
    "boeuf",
    "Garum",
    "Patty",
    "matières grasses",
    "historique"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Mine de boeuf (poulet, 20 % de gras, sol grossier)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "agneau haché",
        "porc haché"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Garum / liquamen (sauce de poisson fermentée)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "de colatura di alici",
        "Thaï nam pla"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Vin blanc sec (Passum romain si vous l'avez)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "Vin blanc doux",
        "Vermouth sec"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Maïs de poivre noir (fraîchir)",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre long"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Noix de pin grillées (légèrement broyées)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Pistaches",
        "amandes hachées"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Graines de cumin et de lièvre (sol)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "graines de céleri pour le love",
        "Caravane"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Binder",
      "name": "Pain de stale imbibé de vin (séché)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "miettes de pain fraîches"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Graisse de Caul (omentum, rincé)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "lard mince strié",
        "huile d'olive supplémentaire"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile d'olive (pour la poêle)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Saindoux"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_05",
        "ing_04",
        "ing_06"
      ],
      "outputState": "toasted_aromatics",
      "instructions": "Dans une poêle sèche à feu moyen, faire griller les pignons jusqu'à ce qu'ils deviennent d'or pâle et sentent la noix, 2-3 minutes, en tremblant constamment. Retirez-les, puis réchauffez brièvement le poivre fissuré, le cumin et la graine de love dans la chaleur résiduelle jusqu'à odorat, environ 30 secondes. Écraser grossièrement les pignons refroidis afin qu'ils gardent une bouchée.",
      "visualCue": {
        "primaryTarget": "Les noix de pin sont uniformément glandées avec quelques bords ambres; les épices sentent vifs et chaudes, sans fumée montant de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les noix de pin sont encore blanc crayeux et les épices sentent plat et cru.",
            "action": "Continuez à griller et à trembler — la noisette fleurit seulement une fois qu'elle prend de la couleur."
          },
          {
            "state": "Perfect",
            "description": "Même couleur or sur les noix, un arôme grillé, des épices parfumées et fleuries.",
            "action": "Laisser refroidir légèrement, puis écraser les noix et passer au mélange."
          },
          {
            "state": "Overdone",
            "description": "Les noix sont brun foncé et amer, les épices sont acrides et commencent à fumer.",
            "action": "Jeter les noix brûlées et remettre en état un lot frais; les noix de pin brûlées vont amer la patty entière."
          }
        ]
      },
      "feelCue": "Écoutez un léger craquement lorsque les pignons chauffent et respirent pour cette odeur beurreuse et résineuse — au moment où elle devient vive ou fumée, ils sont allés trop loin."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "toasted_aromatics",
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_07"
      ],
      "outputState": "seasoned_forcemeat",
      "instructions": "Dans un grand bol, mélanger la menthe de boeuf avec les noix de pin grillées et les épices, le pain trempé au vin, le garum et le vin. Travaillez le mélange avec vos mains pendant environ une minute jusqu'à ce que le garum soit uniformément distribué et que la viande commence juste à se sentir collante et cohésive. Ne le surmenez pas dans une pâte — vous voulez une miette tendre, ouverte, pas une saucisse dense.",
      "visualCue": {
        "primaryTarget": "Une viande de force brillante et uniformément mouchetée qui tient ensemble lorsqu'elle est pressée, mais qui montre toujours la texture de la vis et des vis de la noix de pin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est lâche et émietté, garum pooling au fond, et une pincée tombe instantanément.",
            "action": "Continuez à travailler doucement et ajoutez une touche de pain plus trempé jusqu'à ce qu'une pincée conserve sa forme."
          },
          {
            "state": "Perfect",
            "description": "Cohésif et légèrement collant, assaisonnement uniformément dispersé, la menthe encore visible et l'odeur profondément salée.",
            "action": "Divisez et formez les galettes."
          },
          {
            "state": "Overdone",
            "description": "La viande est devenue lisse et pâteuse, dense et caoutchouteuse, comme une saucisse sur-collée.",
            "action": "Arrêter de mélanger à la fois; plier dans un peu plus grossière menthe pour rouvrir la texture avant de façonner."
          }
        ]
      },
      "feelCue": "La viande de force doit se sentir fraîche, printanière et juste assez collante pour s'accrocher à vos doigts — quand elle commence à frotter au lieu de s'écraser, arrêtez de la travailler."
    },
    {
      "nodeId": "step_3",
      "action": "Enveloppe",
      "inputs": [
        "seasoned_forcemeat",
        "ing_08"
      ],
      "outputState": "wrapped_patties",
      "instructions": "Divisez la viande de force en 4-6 portions et formez chacune en une patte d'environ 2 cm d'épaisseur. Placez un morceau de gras de chou à plat, placez une patty au centre, et pliez la membrane lacy snobly autour d'elle, coupant tout excès de sorte qu'il se chevauche une fois sur le dessous. Le chou fondra alors qu'il fait cuire, basting et croustillant la surface.",
      "visualCue": {
        "primaryTarget": "Chaque patty est scellé dans une seule couche translucide de chou, les veines molles de graisse visibles sur une surface lisse et tendue avec la couture en dessous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le chou est enroulé dans des plis épais ou ouvert, laissant la viande nue exposée.",
            "action": "Déposez et recouchez le calvaire à plat afin qu'une seule couche mince embrasse toute la patty avec la couture en dessous."
          },
          {
            "state": "Perfect",
            "description": "Un voile de calvaire à couche unique sur l'ensemble de la patty, côté couture vers le bas, surface lisse et tendue.",
            "action": "Reposez les patties enveloppées côté couture vers le bas pendant que la poêle chauffe."
          },
          {
            "state": "Overdone",
            "description": "Caul se blesse dans de nombreuses couches lourdes; il va devenir gommant et refuser de rendre.",
            "action": "Retirez l'excédent jusqu'à une seule couche — les grosses coulisses restent caoutchouteuses et grasses."
          }
        ]
      },
      "feelCue": "Étendre doucement le chou entre les doigts; il devrait se sentir cobwebby et légèrement collant, s'accrocher à lui-même de sorte que la patty reste scellée sans aucune corde."
    },
    {
      "nodeId": "step_4",
      "action": "Sear",
      "inputs": [
        "wrapped_patties",
        "ing_09"
      ],
      "outputState": "finished_isicia",
      "instructions": "Chauffer l'huile d'olive dans une poêle lourde à feu moyen-vif jusqu'à ce qu'elle mijote. Déposer les patties sur le côté et les saisir pendant 3-4 minutes jusqu'à ce qu'une croûte profonde se forme, puis retourner et cuire le deuxième côté 3-4 minutes de plus, jusqu'à ce que le chou ait rendu et croustillé et que le centre atteigne un juteux 60-63°C / 140-145°F. Reposez-vous 5 minutes avant de servir avec un garum supplémentaire sur le côté.",
      "visualCue": {
        "primaryTarget": "Une croûte d'acajou brillante où le chou rendu est croustillant, des jus qui coulent à l'ambre clair, et la patty qui ressort fermement lorsqu'elle est pressée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est pâle et effilée, le chou est encore blanc et glissant, et le pâté est doux et squishy.",
            "action": "Continuez à saisir sans le déplacer — le chou doit être entièrement rendu et bruni avant de retourner."
          },
          {
            "state": "Perfect",
            "description": "Croûte croûte croustillante brun foncé, caul fondue dans une peau laquée, au centre juteuse et juste ferme au toucher.",
            "action": "Reposez les galettes 5 minutes pour que les jus se déposent, puis servez."
          },
          {
            "state": "Overdone",
            "description": "La croûte est noircie et la patty est dure et sèche, les jus ont disparu et l'odeur brûlée.",
            "action": "Retirez immédiatement la chaleur; servez avec une cuillère généreuse de garum et un peu de vin pour ramener l'humidité."
          }
        ]
      },
      "feelCue": "Appuyez sur le centre avec un bout de doigt — au point droit il ressort avec une résistance douce, comme le tampon de votre paume sous le pouce, et des odeurs de graisse grillée et de profondeur fermentée."
    }
  ]
};
