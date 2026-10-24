export default {
  "repoId": "master_chinese_chili-crisp_001",
  "parentRepoId": null,
  "slug": "chili-crisp",
  "author": "ForkRecipe Kitchen",
  "title": "Chili Crisp",
  "description": "L'huile de chili croquante, salée et addictive de Guizhou et Sichuan — huile chaude versée sur du flocon de chili grossier, puis chargée d'échalote et d'ail frisottis, de poivre de Sichuan engourdissant et de soja fermenté à la terre. Allez-y jusqu'à ce que le pot soit vide.",
  "cuisine": "Chinois",
  "culture": "Guizhou",
  "category": "condiments",
  "tags": [
    "huile de chili",
    "Chinois",
    "Sichuan",
    "épicé",
    "umami",
    "marque à l'avance"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hour",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Huile neutre (cacahuète ou canola)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "huile de raisin",
        "Huile de son de riz"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Échalotes, tranchées finement",
      "ratioValue": 40,
      "defaultUnit": "%",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 25,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Heat",
      "name": "Flacons coréens grossiers ou chili sichuan (gochugaru / cu la jiao)",
      "ratioValue": 20,
      "defaultUnit": "%",
      "substitutions": [
        "Poivre d'Alep",
        "piments séchés concassés"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Maïs poivré sichuan, grillé et fissuré",
      "ratioValue": 4,
      "defaultUnit": "%",
      "substitutions": [
        "maïs poivré rouge Sichuan"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "Soya noir fermenté (douchi), grossièrement haché",
      "ratioValue": 12,
      "defaultUnit": "%",
      "substitutions": [
        "pâte de soja fermentée"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Anis étoilé",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": [
        "écorce de cassie"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": [
        "MSG (utiliser moins)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 4,
      "defaultUnit": "%",
      "substitutions": [
        "sucre de roche, concassé"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Aromates frits",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_07"
      ],
      "outputState": "infused_oil_and_crisps",
      "instructions": "Mélanger l'huile, les échalotes tranchées, l'ail tranché et l'anis étoilé dans un pot à fond lourd froid. Réglez sur feu moyen-doux et laissez la température monter lentement. Le début du froid rend les aromatiques uniformément et infuse l'huile avant que rien ne brunisse. Remuer fréquemment. Plus de 15 à 20 minutes, les échalotes et l'ail passeront de crus, à bouillonnant furieusement, à calmer lentement quand leur humidité se consume. Tirez - les dès qu'ils deviennent de l'or pâle — la chaleur de report les aggravera pour les ambrir de la chaleur. Retirez les solides avec une araignée, les drainant sur une serviette en papier, et réservez à la fois l'huile parfumée (toujours dans le pot) et les aromatiques croustillants séparément.",
      "visualCue": {
        "primaryTarget": "Les échalotes et l'ail sont un or pailleux pâle uniforme, le bouillonnement autour d'eux a ralenti à un fizz paresseux, et l'huile est brillante et sent douxment de l'allium frit avec un fouet d'anis.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'aromatisme est encore blanc ou boiteux, entouré de bouillons vigoureux et bruyants, que le bouillonnement est l'ébullition de l'eau. L'huile sent cru et vif.",
            "action": "Continuez à frire. Les croustillants ne peuvent pas brunir jusqu'à ce que l'eau soit partie, alors soyez patient; ne levez pas la chaleur pour la précipiter."
          },
          {
            "state": "Perfect",
            "description": "Or pâle avec l'ambre le plus faible aux bords, bouillonnant presque arrêté, huile profondément parfumée. Ils sont légèrement doux maintenant mais seront croquants comme ils refroidissent.",
            "action": "Empêchez immédiatement les solides de s'extirper — ils se transportent rapidement. Égoutter sur une serviette en papier et réserver l'huile dans le pot."
          },
          {
            "state": "Overdone",
            "description": "Marron foncé ou tacheté de noir, odeur d'huile acride et amère, fumée montante.",
            "action": "Jeter — l'allium brûlé devient amer tout le lot. Recommencer les frites avec de l'échalote fraîche, de l'ail et de l'huile."
          }
        ]
      },
      "feelCue": "Ecoutez, ne regardez pas : le fort craquement de la cuisson de l'eau devrait s'estomper à un doux murmure tout comme la couleur tourne. Ce silence est votre véritable repère. Les croustilles réservées devraient se briser, pas plier, une fois cool."
    },
    {
      "nodeId": "step_2",
      "action": "Toast et combiner le chili",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_08",
        "ing_09"
      ],
      "outputState": "chili_spice_base",
      "instructions": "Dans un grand bol résistant à la chaleur (métal ou céramique, jamais de verre), combiner le flocon de chili grossier, les grains de poivre de Sichuan fissurés, le soja noir fermenté haché, le sel et le sucre. Lancer à distribuer. Cette base sèche est ce que l'huile chaude va fleurir — avoir du sel et du sucre déjà dans le bol les laisse dissoudre et assaisonner l'huile dans le même instant les chilis frits. Placez le bol sur une serviette pliée près du poêle afin qu'il ne glisse pas lorsque vous versez.",
      "visualCue": {
        "primaryTarget": "Un mélange homogène et lâche de flocons rouges en briques flocés de soja foncé et de poivre rose gris, sans croûtes de sel ou de sucre se cachant au fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les ingrédients sont assis dans des pieux séparés; le soja est en gros morceaux; le flocon de chili est emballé et dense.",
            "action": "Mélanger soigneusement et briser n'importe quelle touffe afin que l'huile puisse pénétrer tous les flocons uniformément lorsqu'elle est versée."
          },
          {
            "state": "Perfect",
            "description": "Un mélange homogène et moelleux; le soja haché à une grosseur de flocons de chili; tout est libre et prêt à fleurir.",
            "action": "Placer le bol sur une serviette et avoir une longue cuillère prête avant de chauffer l'huile."
          },
          {
            "state": "Overdone",
            "description": "Un sol de flocons de Chili trop fin pour une poudre proche.",
            "action": "Le flocon de poudre fin brûle l'huile instantanée. Si possible, mélanger dans une cuillerée de flocons plus grossiers pour tamponner; autrement, prévoir de verser le refroidisseur d'huile."
          }
        ]
      },
      "feelCue": "Frottez une pincée du mélange entre vos doigts — vous voulez de la texture, comme du sable grossier avec de petites pépites de soja, pas de poussière. Ça doit sentir sec, fumé et légèrement fermenté."
    },
    {
      "nodeId": "step_3",
      "action": "Bloom",
      "inputs": [
        "infused_oil_and_crisps",
        "chili_spice_base"
      ],
      "outputState": "bloomed_chili_oil",
      "instructions": "Réchauffer l'huile infusée réservée jusqu'à ce qu'elle atteigne 200-220C / 390-430F — elle devrait mijoter dur et un seul flocon d'essai devrait tordre et danser immédiatement sans noircissement. Verser environ un tiers de l'huile chaude sur la base de chili-spice; il va éclater, mousser et rugir. Mélanger, puis verser le reste en deux autres ajouts, en remuant entre chacun. Verser par étapes maintient la température contrôlée de sorte que le chili fleurit un rouge profond plutôt que de brûler. Le mélange doit buller vigoureusement, puis se déposer.",
      "visualCue": {
        "primaryTarget": "Une éruption violente, moussante et parfumée qui s'installe dans une huile rouge brique brillante et profonde avec le flocon de chili suspendu tout au long et un arôme grillé, non brûlé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile flaire à peine lorsqu'elle est versée, le rouge reste terne et orange, et le mélange sent cru plutôt que grillé.",
            "action": "L'huile était trop cool. Réglez le bol sur une casserole d'eau chaude ou de micro-ondes le lot en courtes rafales, ou réchauffez plus d'huile et ajoutez-le pour fleurir le chili correctement."
          },
          {
            "state": "Perfect",
            "description": "Un fort étourdissement et de la mousse sur le contact qui s'abaisse en une minute, chili tournant un rouge vif profond, cuisine remplie d'un parfum grillé, épicé, fermenté.",
            "action": "Bien mélanger pour s'assurer qu'il n'y ait pas de flocons au fond, puis laisser reposer et refroidir."
          },
          {
            "state": "Overdone",
            "description": "L'huile fume au contact, le chili s'assombrit instantanément en brun-noir, et l'odeur devient vive et acride.",
            "action": "L'huile était trop chaude ou versée en même temps. Le lot aura le goût brûlé et amer — mieux vaut recommencer la floraison avec une nouvelle base de chili et une huile légèrement plus fraîche."
          }
        ]
      },
      "feelCue": "Le pourboire devrait sonner comme des applaudissements qui meurent en 30 secondes. S'il se tait immédiatement, l'huile était trop froide; s'il crie et fume, trop chaude. Visez un rugissement confiant qui s'adoucit."
    },
    {
      "nodeId": "step_4",
      "action": "Plier et se reposer",
      "inputs": [
        "bloomed_chili_oil"
      ],
      "outputState": "finished_chili_crisp",
      "instructions": "Laisser l'huile fleurie refroidir à simplement chauffer, environ 20 minutes, puis plier l'échalote croustillante et l'ail réservés à nouveau dans — les ajouter maintenant les garde croquants au lieu de se dissoudre dans l'huile chaude. Mélanger, goûter et ajuster le sel ou le sucre. Transférer dans un pot propre, en veillant à ce que le niveau d'huile soit au-dessus des solides pour les préserver. Reposez au moins quelques heures (la nuit est meilleure) donc les saveurs se marient, puis réfrigérer. Ça dure un mois ou plus.",
      "visualCue": {
        "primaryTarget": "Un pot d'huile rouge brillant avec un généreux sédiment croquant de chili, de soja, de maïs poivré et de croustillants dorés échalote-ail s'est installé sous une couche claire d'huile teintée rouge.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Crisps agité tandis que l'huile est encore chaude; ils sont devenus doux et l'huile goûte plat et non marié.",
            "action": "Il n'y a rien à défaire maintenant, qu'il reste du jour au lendemain; le mariage des saveurs s'améliorera encore sensiblement d'ici le lendemain."
          },
          {
            "state": "Perfect",
            "description": "Croustillants croustillants suspendus dans une huile en couches rouge foncé qui a un goût salé, salé, doux, avec un picotement au poivre sichuan et une chaleur à la construction lente.",
            "action": "Garnir avec de l'huile couvrant les solides et réfrigérer. Utilisez une cuillère sèche propre à chaque fois pour éviter la détérioration."
          },
          {
            "state": "Overdone",
            "description": "Sursalé ou assis à la température ambiante pendant des jours; l'huile a un goût sévère ou une odeur rancune.",
            "action": "Si simplement trop salé, mélanger un peu d'huile fraîche neutre et de sucre pour rééquilibrer. Si ça sent la rancidité ou la fermentation, jetez-la."
          }
        ]
      },
      "feelCue": "Spoon un peu sur le riz uni: vous devriez sentir la croûte d'abord, puis le sel-savori frappé, puis une chaleur basse qui monte et un léger engourdissement de la lèvre du poivre Sichuan. Si c'est de la chaleur et pas de saveur, il lui faut plus de sel et de soja."
    }
  ]
};
