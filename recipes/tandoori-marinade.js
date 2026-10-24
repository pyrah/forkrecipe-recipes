export default {
  "repoId": "master_indian_tandoori-marinade_001",
  "parentRepoId": null,
  "slug": "tandoori-marinade",
  "author": "ForkRecipe Kitchen",
  "title": "Marinade Tandoori",
  "description": "La marinade de yogourt rouge vif qui va sur tout, du poulet au chou-fleur avant de frapper le gril — l'acide lactique tendre, les épices pénétrant, et la chaleur élevée carbonisant l'extérieur pendant que l'intérieur reste succulent.",
  "cuisine": "Indiens",
  "culture": "Punjabi",
  "category": "condiments",
  "tags": [
    "indienne",
    "marinade",
    "yaourt",
    "épicé",
    "grillé",
    "rouge"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 3,
    "bitter": 1,
    "umami": 2,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Yogourt plein de matière grasse, de type labneh",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Yogourt grec (ne pas pousser plus loin)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Ail, haché à une pâte fine",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Gingembre frais, haché à une pâte fine",
      "ratioValue": 0.4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Jus de citron, fraîchement pressé",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poudre de chili cachemiri (pour la couleur et la chaleur légère)",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika fumé mélangé avec une pincée de Cayenne"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Garam masala",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Huile neutre ou huile de moutarde",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "Ghee, fondu et refroidi"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Spice",
      "name": "Chaat masala",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "une pincée d'amchur et de kala namak"
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
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "spice_paste",
      "instructions": "Mélanger la pâte d'ail, la pâte de gingembre, le jus de citron, toutes les épices moulues (poudre de chili Kashmiri, garam masala, cumin, coriandre, curcuma, chaat masala), le sel et l'huile dans un petit bol. Incorporer vigoureusement jusqu'à ce que vous ayez une pâte uniforme et lisse. Le chili cachemiri est le principal moteur de la couleur orange rouge signature; si votre chili cachemiri est d'un vieux lot, ajoutez une pincée de poudre de betterave ou une touche plus de chili pour compenser. La pâte doit sentir vif et épicé, pas poussiéreux — l'huile aide à fleurir les pigments d'épices solubles dans la graisse et les composés arôme avant même que la chaleur soit appliquée.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse, rouge rouille à orange sans poches sèches d'épices; lisse et uniforme avec l'huile distribuée à travers; sent aiguisé avec l'ail et brillant avec le citron.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'épice sèche est encore visible; l'ail et le gingembre ne sont pas entièrement incorporés; la pâte est mijotée.",
            "action": "Mélanger plus vigoureusement; utiliser le dos de la cuillère pour écraser et presser la pâte contre la paroi du bol jusqu'à ce qu'elle soit homogène."
          },
          {
            "state": "Perfect",
            "description": "Pâte lisse, rouge-orange unifiée; reflet d'huile visible à travers; l'arôme est vif et complexe.",
            "action": "Plier dans le yaourt immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Pâte préparée et laissée exposée à l'air pendant plus d'une heure avant de se mélanger au yogourt; l'ail s'oxyde et devient amère.",
            "action": "Mélanger le yogourt sans tarder — le yogourt protège et préserve la fraîcheur de l'ail."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité de pâte entre vos doigts — elle doit être lisse et légèrement grasse, non pulvérisée ou pulvérisée. Le chili cachemiri devrait tacher vos doigts d'un rouge orange vif immédiat."
    },
    {
      "nodeId": "step_2",
      "action": "Plier",
      "inputs": [
        "ing_01",
        "spice_paste"
      ],
      "outputState": "tandoori_marinade",
      "instructions": "Ajouter le yogourt tendu à la pâte d'épices et plier ensemble jusqu'à ce qu'il soit parfaitement uniforme. La marinade doit tourner un rouge orange vif homogène. Utilisez une spatule pour plier du bas vers le haut; évitez le fouet, qui peut mincer le yogourt. Goûtez soigneusement: il doit être intensément aromatisé, salé, tanné et très épicé, car la marinade sera utilisée dans un mince revêtement sur une grande surface de protéines — ses saveurs doivent être suffisamment affirmées pour pénétrer.",
      "visualCue": {
        "primaryTarget": "Une marinade uniformément rouge-orange, épaisse, crémeuse sans stries blanches; il devrait ressembler à une crème très épaisse, vibrante et épicée qui tient sa forme sur une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries de yogourts blancs sont encore visibles; pâte d'épices assise dans des touffes à la base du yogourt.",
            "action": "Plier plus soigneusement — utiliser une figure-huit mouvement avec une large spatule jusqu'à ce que parfaitement uniforme."
          },
          {
            "state": "Perfect",
            "description": "Vivide, uniforme orange-rouge; assez épais pour enrober les protéines sans glisser; chaque élément incorporé.",
            "action": "Appliquer directement sur les protéines marquées et mariner."
          },
          {
            "state": "Overdone",
            "description": "La marinade a été fouettée plutôt que pliée; la texture est mince et aqueuse; elle glisse sur les protéines pendant le grillage.",
            "action": "Ne peut pas être épaissi une fois éclairci — appliquez - le de toute façon, mais attendez - vous à plus goutte à goutte pendant la cuisson."
          }
        ]
      },
      "feelCue": "Enrobez un doigt et maintenez-le. La marinade doit s'accrocher pendant au moins 5 secondes avant de dégoutter. S'il glisse immédiatement, le yogourt est trop mince (pas assez tendu). Une bonne marinade de revêtement a le corps."
    },
    {
      "nodeId": "step_3",
      "action": "Marinaté",
      "inputs": [
        "tandoori_marinade"
      ],
      "outputState": "marinated_protein",
      "instructions": "Score la protéine à mariner profondément ( cuisses de poulet, pilons ou fleurs de chou-fleur) — coupes tous les 2-3 cm permettent à la marinade de pénétrer dans l'os. Appliquer généreusement la marinade, la pousser dans chaque coupe et enrober toutes les surfaces, sous la peau, le cas échéant. Pour de meilleurs résultats, portez des gants pour protéger vos mains contre les taches. Réfrigérer, à découvert, pendant au moins 4 heures pour les morceaux de poulet; 8 à 24 heures pour les découpes osseuses ou grandes; 30 à 60 minutes pour le poisson ou la pane; 1 à 2 heures pour les légumes. L'acide lactique du yogourt est sensible tandis que les épices pénètrent. Cuire sur un gril chaud, dans un tandoor ou sous un gril très chaud jusqu'à ce qu'il soit carbonisé et cloqué.",
      "visualCue": {
        "primaryTarget": "Protéines entièrement recouvertes d'une couche épaisse et uniforme de marinade rouge-orange, avec marinade poussée dans toutes les marques et enrobant uniformément toutes les surfaces.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Protéines non marquées; marinade assise sur la surface sans pénétration; revêtement patchy.",
            "action": "Scorez plus profondément et massez la marinade dans — cette étape est physique, pas seulement le revêtement."
          },
          {
            "state": "Perfect",
            "description": "Revêtement épais, même vif orange-rouge avec marinade visible profondément dans les marques de score; la protéine sent l'odorat et la marinade n'a pas de goutte d'eau lorsqu'elle est levée.",
            "action": "Réfrigérer pour le temps minimum de marinage; cuire à feu très élevé."
          },
          {
            "state": "Overdone",
            "description": "Mariné pendant plus de 24 heures dans le yogourt; la couche externe du poulet est musquée et la marinade est devenue grise.",
            "action": "Gratter la vieille marinade, ajouter une fine couche fraîche et cuire immédiatement."
          }
        ]
      },
      "feelCue": "Après avoir mariné pendant 4 heures, pressez le poulet enduit avec votre doigt — la surface doit être collante et la chair en dessous doit produire un peu plus qu'elle ne l'était cru. Cet adoucissement est la sensibilité à l'acide lactique au travail."
    },
    {
      "nodeId": "step_4",
      "action": "Grille",
      "inputs": [
        "marinated_protein"
      ],
      "outputState": "finished_tandoori",
      "instructions": "Préchauffer un gril ou un gril à son maximum absolu — ou régler le gril à 260°C / 500°F avec le support à 10 cm de l'élément. Agiter tout excès de marinade de la protéine (brûlures épaisses de marinade avant que la protéine ne cuit). Placez directement sur la chaleur. Le but est l'ombrage violent de la marinade — les cloques noires à l'extérieur tandis que l'intérieur reste juteux. Cuire les cuisses de poulet de 8 à 10 minutes de chaque côté; faire cuire 10 minutes, puis retourner 5 minutes de plus. La marinade carbonisée n'est pas une erreur, c'est le plat. Ces taches noircies ont un goût d'épices grillées, de fumée et de lait caramélisé.",
      "visualCue": {
        "primaryTarget": "Blistettes noires et orange carbonées profondes à l'extérieur; la marinade a caramélisé et carbonisé d'une manière qui sent l'épice torréfié et la fumée, non la combustion acride; la chair visible dans les coupes est cuite et scintillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La marinade est orange pâle et à peine colorée; pas d'omble; la protéine n'a pas atteint une température suffisamment élevée pour déclencher la réaction de Maillard dans le revêtement de yaourt.",
            "action": "Augmentez considérablement la chaleur — le tandoori exige des températures extrêmement élevées pour fonctionner correctement."
          },
          {
            "state": "Perfect",
            "description": "L'omble vivide — blister noir, centré sur l'orange; la chair est cuite et tire proprement de l'os; le parfum est addictif — fumé, épicé et légèrement sucré.",
            "action": "Reposez-vous 5 minutes avant de servir; pressez le citron frais et servez avec de la raita."
          },
          {
            "state": "Overdone",
            "description": "Les protéines sont cuites au-delà et séchées à l'intérieur; l'omble de fontaine est uniformément noir plutôt que des blisters à motifs d'omble et de couleur.",
            "action": "Servir en tranches dans un enveloppement ou un curry pour compenser la sécheresse."
          }
        ]
      },
      "feelCue": "Appuyez sur la partie la plus épaisse d'une cuisse de poulet cuite avec un doigt — elle doit se sentir ferme mais donner légèrement, rebondissant en arrière sous pression. Si elle se sent très douce et donne sans résistance, elle a besoin de plus de temps; si elle se sent difficile et ne donne pas du tout, elle est trop cuite."
    }
  ]
};
