export default {
  "repoId": "master_jamaican_ackee_saltfish_001",
  "parentRepoId": null,
  "slug": "ackee-saltfish",
  "author": "ForkRecipe Kitchen",
  "title": "Ackee et morue salée",
  "description": "Plat national jamaïcain : morue salée sautée avec l’ackee, fruit onctueux à la texture proche de l’œuf, des tomates et du piment Scotch bonnet. Servi au petit-déjeuner avec des beignets frits ou du fruit à pain.",
  "cuisine": "Jamaïcain",
  "culture": "Jamaïcain",
  "category": "proteins",
  "tags": [
    "ackee",
    "morue salée",
    "jamaican",
    "petit-déjeuner",
    "plat national"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Morue salée, désossée, avec ou sans peau",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "lieu noir salé",
        "maquereau salé"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Base",
      "name": "Ackee en conserve égoutté ou ackee frais mûr",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon jaune émincé",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Base",
      "name": "Tomates mûres coupées en dés",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates en dés en conserve"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Heat",
      "name": "Piment Scotch bonnet épépiné et finement émincé",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "habanero"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Gousses d’ail hachées",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile végétale neutre ou huile de coco",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "butter"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Cébette émincée, pour servir",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Poivre noir fraîchement moulu",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trempage",
      "inputs": [
        "ing_01"
      ],
      "outputState": "desalted_cod",
      "instructions": "Placez la morue dans un grand saladier et couvrez-la d’eau froide. Laissez-la dessaler 12 à 24 heures en changeant l’eau au moins deux fois. Pour accélérer le dessalage, portez le poisson à frémissement dans de l’eau fraîche, égouttez-le et recommencez deux fois. Goûtez un petit morceau après le dernier bain : il doit rester agréablement salé, sans excès. Effeuillez en gros morceaux en retirant les arêtes.",
      "visualCue": {
        "primaryTarget": "Gros flocons nacrés, sans dépôt de sel blanc en surface. Le poisson est souple, pas rigide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poisson est encore raide, blanchi par le sel, et goûte fortement la saumure.",
            "action": "Prolongez le trempage de quelques heures ou faites-le bouillir puis égouttez-le une fois de plus."
          },
          {
            "state": "Perfect",
            "description": "Les morceaux sont tendres, ivoire, avec une odeur fraîche et légèrement marine. Le sel est présent mais équilibré.",
            "action": "Égouttez soigneusement, effeuillez et réservez pour la cuisson à la poêle."
          },
          {
            "state": "Overdone",
            "description": "Le poisson a perdu tout son assaisonnement ; son goût est fade et sa texture gorgée d’eau.",
            "action": "Relevez généreusement de poivre noir et d’une pincée de sel pendant la cuisson."
          }
        ]
      },
      "feelCue": "Une morue bien dessalée doit avoir, sous la pression, la fermeté humide d’un blanc de poulet : ni dure et farineuse, ni pâteuse."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "sofrito_base",
      "instructions": "Faites chauffer l’huile dans une grande poêle à feu moyen jusqu’à ce qu’elle frémisse. Ajoutez l’oignon et faites cuire 4 à 5 minutes, jusqu’à ce qu’il soit tendre et translucide. Ajoutez l’ail et le Scotch bonnet, puis poursuivez la cuisson 1 minute. Incorporez les tomates et faites cuire en remuant environ 3 minutes, jusqu’à ce qu’elles ramollissent et rendent leur jus. Le mélange doit être fondant et parfumé.",
      "visualCue": {
        "primaryTarget": "Mélange brillant d’oignon et de tomate fondus, parsemé de morceaux de Scotch bonnet. La poêle dégage un parfum prononcé d’ail et de piment.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont encore blancs et croquants ; les tomates sont à peine chaudes et gardent leur forme.",
            "action": "Prolongez la cuisson à feu moyen jusqu’à ce que les oignons soient translucides et les tomates fondues."
          },
          {
            "state": "Perfect",
            "description": "Les bords des oignons sont dorés, les tomates forment une sauce fluide et l’huile a pris une teinte rouge orangé.",
            "action": "Ajoutez la morue effeuillée et mélangez."
          },
          {
            "state": "Overdone",
            "description": "Les tomates ont attaché et foncé ; l’ail dégage une odeur amère.",
            "action": "Versez un peu d’eau pour décoller les sucs et baissez le feu avant d’ajouter le poisson."
          }
        ]
      },
      "feelCue": "La poêle doit embaumer et grésiller doucement, sans projections violentes. Le parfum du Scotch bonnet doit être assez vif pour vous faire cligner des yeux."
    },
    {
      "nodeId": "step_3",
      "action": "Plier",
      "inputs": [
        "sofrito_base",
        "desalted_cod",
        "ing_02",
        "ing_09"
      ],
      "outputState": "finished_ackee_saltfish",
      "instructions": "Ajoutez la morue effeuillée à la base aromatique, mélangez et faites cuire 2 minutes. Incorporez ensuite l’ackee égoutté très délicatement à l’aide d’une large spatule : il s’écrase facilement et doit rester en morceaux dorés bien distincts. Poivrez. Goûtez avant d’ajouter du sel, car le poisson en apporte probablement assez. Réchauffez 2 minutes à feu moyen-doux.",
      "visualCue": {
        "primaryTarget": "Les morceaux d’ackee jaune doré restent bien visibles et ne sont pas écrasés. La morue est répartie uniformément, mêlée de tomate et de piment.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L’ackee est encore froid et mal réparti ; le mélange manque d’homogénéité.",
            "action": "Mélangez délicatement et poursuivez la cuisson une minute à feu doux."
          },
          {
            "state": "Perfect",
            "description": "Les morceaux d’ackee sont intacts, bien chauds et d’un jaune vif qui contraste avec la base de tomate rouge. Le tout est légèrement brillant.",
            "action": "Parsemez de cébette et servez immédiatement."
          },
          {
            "state": "Overdone",
            "description": "L’ackee s’est réduit en purée jaune ; le plat ressemble à des œufs brouillés au poisson.",
            "action": "Le goût reste bon : servez le plat en assumant son aspect rustique et mélangez plus doucement la prochaine fois."
          }
        ]
      },
      "feelCue": "En incorporant l’ackee, la spatule ne doit presque rencontrer aucune résistance : ses morceaux sont aussi délicats qu’une banane mûre et s’écrasent sous la moindre pression."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir",
      "inputs": [
        "finished_ackee_saltfish",
        "ing_08"
      ],
      "outputState": "plated_ackee_saltfish",
      "instructions": "Parsemez de cébette émincée et servez aussitôt dans la poêle. L’ackee à la morue ne se fait pas attendre : sa texture perd son contraste en refroidissant. Accompagnez de Johnny cakes frits, de pain dense, de fruit à pain ou de banane verte bouillie.",
      "visualCue": {
        "primaryTarget": "Le jaune vif, le rouge et le vert composent un joli tricolore dans l’assiette. Les morceaux d’ackee sont distincts et brillants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La cébette n’a pas encore été ajoutée ; elle est encore blanche et crue.",
            "action": "Ajoutez la cébette et servez."
          },
          {
            "state": "Perfect",
            "description": "Les rubans de cébette vert vif contrastent avec l’ackee jaune et la tomate rouge : le drapeau jamaïcain dans la poêle.",
            "action": "Servez immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le plat a trop attendu ; la chaleur résiduelle a continué à écraser l’ackee.",
            "action": "Servez malgré tout en mélangeant une dernière fois délicatement."
          }
        ]
      },
      "feelCue": "Servez tant que la vapeur s’élève encore. Le contraste entre l’ackee soyeux, la morue effeuillée et la tomate fondante fait tout le charme du plat."
    }
  ]
};
