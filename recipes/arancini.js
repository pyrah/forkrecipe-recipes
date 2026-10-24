export default {
  "repoId": "master_italian_arancini_001",
  "parentRepoId": null,
  "slug": "arancini",
  "author": "ForkRecipe Kitchen",
  "title": "Arancini al Ragù",
  "description": "Des sphères dorées de riz teinté de safran encaissant un noyau fondu de ragù de viande cuit lentement et de mozzarella extensible — la croûte éclate à la première bouchée, laissant place à un intérieur savoureux et savoureux que les vendeurs de rue de Palerme ont perfectionné pendant des siècles.",
  "cuisine": "Italien",
  "culture": "Sicilien",
  "category": "proteins",
  "tags": [
    "riz",
    "frits",
    "sicilienne",
    "Alimentation de rue",
    "Italien"
  ],
  "difficulty": 4,
  "activeTime": "90 min",
  "totalTime": "4 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 6,
    "sour": 1,
    "bitter": 1,
    "umami": 7,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz de Carnaroli ou Arborio",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "flaconone nano"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau chaude ou bouillon de poulet léger",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Fils de safran, trempés dans 2 c. à soupe d'eau chaude",
      "ratioValue": 0.01,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Protein",
      "name": "Boeuf haché ou porc (ou mélange)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "veau haché"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon blanc, finement coupé en dés",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates écrasées, réduites"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Mozzarella à faible odeur, coupée en cubes de 1 cm",
      "ratioValue": 0.75,
      "defaultUnit": "parts",
      "substitutions": [
        "caciocavallo"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Binder",
      "name": "Oeufs battus",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Structure",
      "name": "Petites chapelures séchées (pangrattato)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "panko, plus fine pulsée"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Huile de friture neutre (fleur de soleil ou arachide)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_11"
      ],
      "outputState": "saffron_rice",
      "instructions": "Mélanger le riz et le bouillon chaud ou l'eau dans une casserole moyenne. Ajouter l'eau de safran et une pincée généreuse de sel. Porter à ébullition, remuer une fois, puis laisser mijoter et couvrir. Cuire pendant 16-18 minutes jusqu'à ce que tout le liquide soit absorbé. Le riz devrait être un peu plus ferme que le riz-repas, il continuera à absorber et à compacter au moment où il refroidit. Étendre immédiatement le riz sur une grande plaque de cuisson bordée dans une couche mince et uniforme pour refroidir. Ne couvrez pas — vous voulez échapper à la vapeur. Laisser refroidir complètement à température ambiante, au moins 45 minutes, jusqu'à ce que le riz soit collant, compact et froid au toucher. Le riz froid n'est pas négociable pour la formation d'arancini.",
      "visualCue": {
        "primaryTarget": "Riz jaune d'or vif, uniformément cuit sans centres blancs crus ni grains soufflés. Lorsqu'elle est pressée, elle tient fermement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Certains grains sont encore blancs au centre. Le riz est lâche et ne colle pas lorsqu'il est pressé.",
            "action": "Ajouter 2 cuillères à soupe de plus d'eau, couvrir et cuire à feu très doux pendant 3-4 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "Riz uniformément doré, légèrement brillant. Chaque grain est cuit. Coller en appuyant entre les doigts. Cool et compact après le repos.",
            "action": "Continuez à faire le ragù pendant que le riz refroidit."
          },
          {
            "state": "Overdone",
            "description": "Le riz est musqué et s'agrippe dans des masses en pâte. Certains grains s'ouvrent.",
            "action": "Répartir très finement et laisser refroidir complètement — le riz musqué peut encore former arancini mais sera plus dense."
          }
        ]
      },
      "feelCue": "Le riz arancini froid et bien cuit doit se sentir comme de l'argile humide, souple et collante, tenant une empreinte de pouce propre sans s'effondrer."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "ragu_filling",
      "instructions": "Cuire l'oignon en dés dans un peu d'huile à feu moyen jusqu'à ce qu'il soit doux et translucide, environ 8 minutes. Ajouter la viande hachée et faire cuire, la casser avec une cuillère en bois, jusqu'à ce qu'il ne reste pas de rose et que la viande soit légèrement dorée dans les taches, environ 10 minutes. Ajouter la pâte de tomate et mélanger pour enrober. Cuire 3 minutes en remuant constamment, jusqu'à ce que la pâte s'assombrisse et sente sucrée et caramélisée. Ajouter un jet d'eau ou de vin pour déglacer. Assaisonner bien avec du sel et du poivre. Laisser mijoter à feu doux pendant 20 minutes jusqu'à ce que le mélange soit épais, cohésif et pas du tout humide. Refroidir complètement avant de remplir.",
      "visualCue": {
        "primaryTarget": "Un mélange de viande épaisse, sombre et confitureuse. Quand une cuillère est traînée à travers, le canal tient sa forme et ne inonde pas de liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le remplissage est lâche et humide. Des bassins liquides dans le canal à cuillers. La pâte de tomates a encore un goût cru.",
            "action": "Continuer la cuisson à découvert pour évaporer le liquide. Le remplissage doit être suffisamment sec pour tenir sa forme."
          },
          {
            "state": "Perfect",
            "description": "Sensé, cohésif et profondément salé. Il tient un monticule sur une cuillère. Riche couleur rouge brique aux bords caramélisés.",
            "action": "Refroidir complètement avant le remplissage — le remplissage chaud fera cuire le riz et le rendra impossible à façonner."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage est sec, émietté et collé à la poêle. A commencé à brûler.",
            "action": "Ajouter une cuillère à soupe d'eau et remuer vigoureusement. Le remplissage a besoin d'humidité mais pas de flaques."
          }
        ]
      },
      "feelCue": "Le ragù doit sentir la tomate profondément caramélisée — doucement ferreux, presque chocolatée. Goûtez-le: il devrait être assaisonné avec hardiesse puisque le riz uni diluera la saveur."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "saffron_rice",
        "ing_08"
      ],
      "outputState": "bound_rice",
      "instructions": "Transférer le riz froid dans un grand bol. Battre un œuf et l'ajouter au riz. Mélanger soigneusement vos mains jusqu'à ce que l'œuf soit entièrement distribué et que le riz soit encore plus cohésif et légèrement collant. Cette étape de fixation rend les arancini tenir leur forme pendant le panage et la friture. Testez en appuyant fermement sur une poignée — elle devrait tenir une balle ferme qui ne s'écroule pas.",
      "visualCue": {
        "primaryTarget": "Riz d'or uniforme qui tient une forme de boule quand fermement pressé dans la paume, libérant proprement de la main.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz s'écroule quand il est pressé dans une boule. L'œuf n'a pas été entièrement incorporé.",
            "action": "Mélanger plus soigneusement, en veillant à ce que l'œuf atteigne chaque grain. Ajouter la moitié d'un deuxième œuf battu si le riz est encore trop sec."
          },
          {
            "state": "Perfect",
            "description": "Le riz tient une boule ferme et dense lorsqu'il est pressé dans la paume. Rejets proprement de la main. Or et légèrement brillant de l'œuf.",
            "action": "Commencez à former les arancini."
          },
          {
            "state": "Overdone",
            "description": "Le riz est humide et collant, s'accrochant fortement aux mains. Trop d'oeufs ont été ajoutés.",
            "action": "Ajoutez une poignée de chapelure sèche au mélange de riz et mélangez - les miettes absorberont l'excès d'humidité."
          }
        ]
      },
      "feelCue": "Le riz bien lié formera une boule dans votre paume avec une pression modérée et s'éloignera de votre peau proprement — il devrait se sentir humide et compacté."
    },
    {
      "nodeId": "step_4",
      "action": "Formulaire",
      "inputs": [
        "bound_rice",
        "ragu_filling",
        "ing_07"
      ],
      "outputState": "formed_arancini",
      "instructions": "Les mains mouillées à la légère. Versez environ 100 g de riz dans un seul palmier et aplatissez-le dans un disque d'environ 10 cm. Placez une cuillère à café de ragù refroidie au centre et appuyez sur un cube de mozzarella à côté. Coupez soigneusement votre main et apportez les bords du disque de riz vers le haut et autour de la garniture, appuyez fermement pour l'enfermer complètement. Utilisez les deux mains pour rouler dans une sphère serrée. Appuyez fermement — toute poche d'air ou tache fine fera éclater l'arancini dans la friteuse. Je répète. Reposez les balles formées sur un plateau parcheminé.",
      "visualCue": {
        "primaryTarget": "Des sphères lisses et compactes sans fissures ni taches fines. Le remplissage est complètement invisible — entièrement scellé à l'intérieur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coutures sont visibles ou le remplissage est en train de regarder à travers une tache mince. Les boules se sentent lâches lorsqu'elles sont légèrement pressées.",
            "action": "Ajouter plus de riz pour combler les lacunes. Appuyez fermement et roulez à nouveau entre les deux palmiers."
          },
          {
            "state": "Perfect",
            "description": "Des sphères fermes et denses avec un extérieur parfaitement lisse. Aucun remplissage visible. Se sent solide et tient sa forme lorsqu'il est placé sur le plateau.",
            "action": "Réfrigérer les boules formées pendant 15 minutes avant de les panser."
          },
          {
            "state": "Overdone",
            "description": "Balles surmenées ou surchargées qui sont maintenant malmenées ou fissurées par un excès de manipulation.",
            "action": "Reformer doucement pendant le froid. Les coutures craquées peuvent être lissées en appuyant sur des doigts humides."
          }
        ]
      },
      "feelCue": "Chaque arancino formé devrait se sentir comme un base -ball dans la main — dense, lourd et parfaitement rond. Agiter doucement — vous ne devriez pas sentir le remplissage se déplacer à l'intérieur."
    },
    {
      "nodeId": "step_5",
      "action": "Pain",
      "inputs": [
        "formed_arancini",
        "ing_08",
        "ing_09"
      ],
      "outputState": "breaded_arancini",
      "instructions": "Installez un poste de panification : oeuf battu dans un bol, chapelure fine dans un autre. Rouler chaque arancino d'abord dans l'oeuf battu jusqu'à ce qu'il soit complètement enduit, laissant l'excès s'écouler. Puis rouler immédiatement dans la chapelure, en appuyant fermement sur tous les côtés pour créer une croûte complète, même sans taches nues. Roulez une deuxième fois à travers l'oeuf et la chapelure pour une double couche — cette double couche est le secret d'une coquille très croustillante qui ne craquera pas dans l'huile. Placer sur un plateau parcheminé et réfrigérer au moins 20 minutes avant de frire.",
      "visualCue": {
        "primaryTarget": "Complètement couvert, même la croûte sablonneuse sans trous ni riz nu. Le revêtement est sec au toucher et est fermement respecté.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mince, une seule couche de chapelure avec des taches nues montrant. Le riz est encore visible dans les endroits.",
            "action": "Reprendre l'oeuf et enrober la chapelure une deuxième fois. Appuyez fermement."
          },
          {
            "state": "Perfect",
            "description": "Une croûte double couche épaisse qui cache complètement le riz. Se sent sec et sablonneux au toucher. Pas de taches molles.",
            "action": "Réfrigérer pendant au moins 20 minutes pour régler le revêtement avant la friture."
          },
          {
            "state": "Overdone",
            "description": "Les miettes sont saturées d'oeufs et forment des touffes épaisses et inégales. Certaines taches sont gummy.",
            "action": "Enroulez doucement toutes les zones encombrées et pressez avec de la chapelure fraîche et sèche."
          }
        ]
      },
      "feelCue": "Exécutez votre paume fermement sur la surface panée — elle devrait être uniformément sablonneuse et sèche, comme du papier de sable fin. Des taches molles ou humides se briseront dans l'huile chaude."
    },
    {
      "nodeId": "step_6",
      "action": "Frire",
      "inputs": [
        "breaded_arancini",
        "ing_10"
      ],
      "outputState": "finished_arancini",
      "instructions": "Chauffer l'huile neutre dans un pot profond et lourd à 175 C (350 F) — utiliser un thermomètre. La profondeur de l'huile doit être d'au moins 8 cm pour permettre l'immersion de l'arancini. Baissez doucement 2-3 arancini dans l'huile à la fois — ne pas fouler le pot, qui baisse la température et provoque des résultats gras et pâles. Faites frire 4-5 minutes, en tournant doucement avec une araignée toutes les 90 secondes pour assurer une couleur uniforme de tous les côtés. Retirez-le quand il est profondément doré et transférez-le sur un support en fil doublé de serviettes en papier. Laisser revenir l'huile à 175 C entre les lots. Servir en 5 minutes pendant que le fromage est encore fondu.",
      "visualCue": {
        "primaryTarget": "Deep ambre-or partout, uniformément doré sans taches pâles. Un léger craquement lorsque tapoté avec un doigt.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Jaune doré pâle avec une croûte douce et légèrement grasse. Le revêtement n'est pas complètement croustillant.",
            "action": "Retourner à l'huile pendant 90 secondes. Assurez-vous que l'huile est à température."
          },
          {
            "state": "Perfect",
            "description": "Même l'or ambré de tous les côtés. La croûte semble creuse et croustillante lorsqu'elle est tapée. La vapeur intérieure s'ouvre lorsque la mozzarella est complètement fondue.",
            "action": "Égoutter brièvement sur un rack et servir dans les 5 minutes."
          },
          {
            "state": "Overdone",
            "description": "Marron foncé à noir dans les taches. Une odeur brûlée et amère. La croûte est très dure.",
            "action": "Supprimer immédiatement. L'intérieur peut encore être bon — coupé à vérifier. Servir rapidement avant que la croûte ne durcisse davantage."
          }
        ]
      },
      "feelCue": "Écoutez un étourdissement profond et constant lorsque l'arancini pénètre dans l'huile — un sifflement faible signifie que l'huile est trop froide et la croûte absorbera les graisses au lieu de croustillant. Le étourdissement doit sembler affirmé et continu."
    }
  ]
};
