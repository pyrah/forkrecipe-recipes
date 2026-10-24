export default {
  "repoId": "master_greek_loukoumades_001",
  "parentRepoId": null,
  "slug": "loukoumades",
  "author": "ForkRecipe Kitchen",
  "title": "Loukoumades",
  "description": "Les anciennes beignets au miel de la Grèce — pâte à levure jetée par la cuillerée dans l'huile chaude où ils ont soufflé dans des sphères d'or irrégulières, tiré et immédiatement trempé dans du miel chaud et poussière de cannelle et de noix concassées.",
  "cuisine": "Grec",
  "culture": "Grec",
  "category": "desserts",
  "tags": [
    "grec",
    "frits",
    "Chérie",
    "cannelle",
    "beignet",
    "dessert",
    "Produits de la rue"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "1 hr 20 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
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
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "farine de pain pour plus de mâcher"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Leavener",
      "name": "levure sèche instantanée",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": [
        "levure sèche active (bloom d'abord dans l'eau chaude)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau chaude (38–40C / 100–104F)",
      "ratioValue": 90,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre (pour la pâte)",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre pour la friture (soleil ou son de riz)",
      "ratioValue": 200,
      "defaultUnit": "%",
      "substitutions": [
        "huile d'arachide"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Thym ou miel de fleurs sauvages, chauffé",
      "ratioValue": 40,
      "defaultUnit": "%",
      "substitutions": [
        "miel de fleur d'orange",
        "miel foncé"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Noix, légèrement grillées et broyées",
      "ratioValue": 15,
      "defaultUnit": "%",
      "substitutions": [
        "pistaches concassées",
        "Graines de sésame"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélanger et étaler la pâte",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "proofed_batter",
      "instructions": "Mélanger la farine, la levure instantanée, le sel et le sucre dans un grand bol. Faites un puits au centre et versez dans toute l'eau chaude à la fois. Mélanger vigoureusement avec une cuillère en bois ou votre main pendant 2 à 3 minutes jusqu'à ce qu'une pâte complètement lisse, épaisse, versable forme — il devrait ressembler à une pâte à crêpe très épaisse ou à un porridge doux, pas à une pâte pétrifiable. Il ne devrait pas y avoir de bosses. Couvrez bien le bol avec du film de collage et laissez-le au ferment chaud (28-30C) pendant 1 heure. La pâte est prête quand elle a doublé en volume, est visiblement bubble tout au long, et sent la levure-douce. Ne remuez pas la pâte éprouvée — vous voulez préserver les bulles d'air que la levure a travaillé à produire, car ce sont eux qui font souffler les loukoumades et deviennent légers à l'intérieur.",
      "visualCue": {
        "primaryTarget": "Une pâte aérée doublée avec un dôme de mousse sur le dessus et des bulles visibles à travers – la surface devrait regarder activement vivant, avec des bulles montant et surgissant lentement. Une cuillère tirée à travers elle devrait révéler une structure intérieure spongieuse et en toile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La batteuse a à peine grandi et présente peu de bulles — la levure n'a pas suffisamment activé, peut-être à cause d'eau trop froide, ou l'environnement de repos trop frais.",
            "action": "Passez à un endroit plus chaud et donnez-lui encore 30 minutes. Loukoumades à partir de pâte sous-fermentée sera dense et comme du pain plutôt que léger et creux."
          },
          {
            "state": "Perfect",
            "description": "Double dans le volume, bombé, activement bubble, avec une fragrance tange-yesty. Lorsque le bol est incliné doucement, la pâte se déplace comme une masse en forme de toile.",
            "action": "Faites frire immédiatement — ne laissez pas le surferment ou la pâte aura un goût trop aigre et le gluten va s'affaiblir."
          },
          {
            "state": "Overdone",
            "description": "La batteuse est surpropriété : elle peut s'être effondrée ou avoir une odeur forte, aigre, alcoolique. La surface est plane plutôt que bombée.",
            "action": "Utilisez immédiatement si cela vient de se produire — le premier lot peut encore être passable. Une pâte fortement surfermentée doit être jetée et redémarrée."
          }
        ]
      },
      "feelCue": "Plongez une cuillère dans le centre de la pâte éprouvée et tirez - la lentement — un long voile extensible de pâte devrait sortir de la cuillère avant de casser. Cette élasticité est l'air de piégeage du réseau de gluten fabriqué à la levure. Si la pâte tombe de la cuillère dans une infusion sans voile, elle n'a pas été prouvée assez longtemps."
    },
    {
      "nodeId": "step_2",
      "action": "Cuire le miel et préparer la garniture",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "prepared_honey_and_garnish",
      "instructions": "Chauffer délicatement le miel dans une petite casserole à feu très doux, ou dans un bol thermofuge sur de l'eau chaude, jusqu'à ce qu'il soit versable et fluide — environ 40–50C. Ne le faites pas bouillir. Le miel chaud s'imprégne presque instantanément dans des loukoumades fraichement frits, tandis que le miel froid s'assied à la surface et crée un revêtement épais et collant qui se sent bouillant. Mettre le miel chaud, la cannelle moulue et les noix grillées à peu près broyées dans de petits bols séparés à côté de la poêle. Les loukoumades doivent être habillés à l'instant où ils quittent l'huile, donc tout doit être en place avant que la première friteuse frappe la graisse. La vitesse est tout le jeu à ce stade.",
      "visualCue": {
        "primaryTarget": "Le miel qui est fluide et versable, qui coule librement d'une cuillère dans un cours d'eau mince et translucide — pas épais et lent comme le miel froid d'un pot.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le miel est encore visqueux et froid — il glissera des loukoumades chauds plutôt que de s'imprégner.",
            "action": "Chauffer à feu doux encore 2 minutes en remuant. Le miel devrait couler comme de l'eau à 50 °C."
          },
          {
            "state": "Perfect",
            "description": "Courbé, doré et aromatique, il coule librement d'une cuillère dans un cours d'eau mince et sent les fleurs et la chaleur.",
            "action": "Gardez au chaud le réglage thermique le plus bas pendant la friture. Habillez chaque lot immédiatement lorsqu'il sort de l'huile."
          },
          {
            "state": "Overdone",
            "description": "Le miel a été bouilli et a commencé à caraméliser — il durcira car il refroidit et peut sentir légèrement brûlé.",
            "action": "Retirer du feu. Un miel légèrement caramélisé est encore utilisable et peut ajouter une note sucrée amère intéressante, mais le refroidir à 50C avant d'utiliser."
          }
        ]
      },
      "feelCue": "Plongez un doigt dans le miel chaud (attention – il peut être chaud) et frottez-le entre le pouce et l'index. Il doit se sentir soyeux-mince et couler librement, enrobant la peau dans un film mince plutôt que de s'accumuler dans une couche collante. Cette minceur est ce qui lui permet de pénétrer le loukoumade plutôt que simplement assis sur le dessus."
    },
    {
      "nodeId": "step_3",
      "action": "Loukoumades à frire",
      "inputs": [
        "ing_06",
        "proofed_batter"
      ],
      "outputState": "fried_loukoumades",
      "instructions": "Chauffer l'huile de friture dans un grand pot profond à 175–180C / 350–360F. À l'aide de deux cuillères mouillées ou d'une petite boule de crème glacée trempée dans l'eau entre les lots, déposer des portions de pâte à soupe entaillées dans l'huile sans encombrer — 6–8 à la fois est typique. La pâte souffle immédiatement et commence à rouler dans l'huile. Ne les déplacez pas pendant les 30 premières secondes. Après qu'ils se sont mis sur le fond, ils commenceront à tourner sur leur propre que la vapeur à l'intérieur s'étend et déplace leur centre de gravité — cet auto-roulement est le signe de pâte correctement fermentée et d'huile correctement chauffée. Faire frire pendant 3 à 4 minutes au total, en tournant une ou deux fois avec une cuillère à fentes pour favoriser une couleur uniforme, jusqu'à ce qu'ils soient un or-ambre profond et uniforme. Retirer avec une cuillère à fentes, agiter l'excès d'huile.",
      "visualCue": {
        "primaryTarget": "Des sphères dorées irrégulières avec une surface légèrement craquante, d'ambre profond et uniformément colorées de tous les côtés, gonflées et visuellement lumineuses malgré leur petite taille — elles devraient paraître rondes et pleines, non plates ni crêpes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle et encore légèrement pâteux — lorsqu'ils sont pressés, ils se sentent doux et ne ressortent pas fermement. L'intérieur ne sera pas cuit.",
            "action": "Retourner à l'huile pendant 60 à 90 secondes. Le changement de couleur de l'or à l'ambre n'est pas seulement la surface — il est corrélé avec l'intérieur étant cuit à travers."
          },
          {
            "state": "Perfect",
            "description": "Ambre profonde de tous les côtés, gonflée et ronde, sentant la lumière quand levée avec une cuillère à fentes. Lorsque l'on est cassé ouvert, l'intérieur est creux au centre ou en toile avec de grandes poches d'air.",
            "action": "Enlevez immédiatement — ils s'assombrissent rapidement à partir de ce point. Transférer dans une assiette et s'habiller avec du miel, de la cannelle et du noyer dans les 30 secondes."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé avec une coquille dure et épaisse qui se fissure plutôt que donne quand pressé — la graisse intérieure a surchauffé la pâte et le sucre a commencé à brûler.",
            "action": "Ils sont encore comestibles (un peu amers) — le miel aidera à équilibrer. Réduire la température de l'huile de 10C pour le prochain lot."
          }
        ]
      },
      "feelCue": "Appuyez sur un loukou fait doucement à l'aide d'une cuillère — il devrait revenir immédiatement, comme une petite balle résiliente. Il devrait sentir la lumière pour sa taille et creux au centre. S'il se sent dense et riche en pain, la pâte était soit sous-fermentée, soit trop fraîche."
    },
    {
      "nodeId": "step_4",
      "action": "Habiller et servir",
      "inputs": [
        "fried_loukoumades",
        "prepared_honey_and_garnish"
      ],
      "outputState": "finished_loukoumades",
      "instructions": "Transférer les loukoumades chauds dans un bol ou une assiette peu profond. Immédiatement arrosez le miel chaud généreusement sur eux — utilisez plus que vous ne le pensez, parce que le miel est partiellement absorbé par la pâte chaude. Poussière libéralement avec de la cannelle moulue, puis disperser les noix légèrement broyées sur le dessus. L'ensemble du procédé de pansement ne doit pas prendre plus de 30 secondes par lot. Loukoumades doit être mangé chaud: le contraste entre l'extérieur croustillant et l'intérieur creux vapeur est la caractéristique caractéristique d'un grand loukoumade, et dans les 5 minutes l'extérieur s'adoucit de l'humidité du miel et de la vapeur à l'intérieur. Dans les festivals grecs et les stands de rue, les loukoumades sont servis dans des cônes en papier et mangés debout, immédiatement, sans cérémonie.",
      "visualCue": {
        "primaryTarget": "Un bol de sphères dorées scintillantes laquées en miel ambre, blanc-neige à la cannelle, et roussâtres avec des miettes de noix dorées — vapeur toujours montant du tas.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Miel appliqué avec parcimonie — les loukoumades semblent presque secs, avec seulement un mince éclat de miel plutôt qu'une laque appropriée. Ils auront un goût unidimensionnel.",
            "action": "Ajouter plus de miel immédiatement. Il n'y a pas trop de miel sur un loukoumade."
          },
          {
            "state": "Perfect",
            "description": "Collage, généreusement enduit, pulvérisé à la cannelle et collé à la noix – chaque pièce est un monde complet : croustillant, productif, doux, épicé chaud et noisette en une seule bouchée.",
            "action": "Mangez immédiatement. Ce plat n'attendra pas."
          },
          {
            "state": "Overdone",
            "description": "Loukoumades habillés puis laissés 10+ minutes — l'extérieur est devenu doux et le miel les a rendus lourds et humides.",
            "action": "Rien de récupérable. La prochaine fois, faire frire et s'habiller en petits lots pour servir continuellement plutôt que tous à la fois."
          }
        ]
      },
      "feelCue": "Mordre dans un loukoumade dans la première minute: l'extérieur doit donner avec un léger croûte avant de céder à un intérieur doux, légèrement creux qui libère une bouffée de vapeur. Le miel devrait ooze légèrement de l'intérieur où il a trempé à travers le mur. La cannelle doit frapper l'arrière du nez plutôt que la langue — aromatique, pas tranchante."
    }
  ]
};
