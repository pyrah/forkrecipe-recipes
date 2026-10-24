export default {
  "repoId": "master_chinese_dan-dan-noodle-sauce_001",
  "parentRepoId": null,
  "slug": "dan-dan-noodle-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce Dan Dan Noodle",
  "description": "La sauce sésame-chili addictif qui définit les nouilles de rue Sichuan - riche tahini et chili croustillant tournoyé dans un bol de porc et-ya-cai surmonté avec un ma-la à bâtir lente.",
  "cuisine": "Chinois",
  "culture": "Sichuan",
  "category": "sauces",
  "tags": [
    "Chinois",
    "Sichuan",
    "nouilles",
    "épicé",
    "sésame",
    "engourdissement"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 2,
    "bitter": 1,
    "umami": 5,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Pâte de sésame chinois ou tahini bien ciré",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre d'arachide (moins complexe)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Chili croustillant (la jiao vous)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "huile de chili avec sédiments",
        "sambal oelek"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "sauce soja",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "vinaigre noir chinois (Chinkiang)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de riz (moins de complexité)",
        "balsamique (même profondeur, fruits différents)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Eau chaude de cuisson des nouilles",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "eau chaude"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Giroves d'ail hachées à la pâte",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Maïs poivré sichuan, grillé et finement moulu",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Protein",
      "name": "Porc haché",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "poulet haché",
        "tofu ferme émietté"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Umami",
      "name": "Yibin ya cai (Yibin vert de moutarde marinée), rincé et haché",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "légumes conservés à la tianjin",
        "Kimchi coréen, haché"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Doubanjiang (Pâte de chili de Pixian)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Gochujang"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Allium",
      "name": "Échalons, tranchés finement (pour servir)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whisk",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "sesame_sauce_base",
      "instructions": "Mélanger la pâte de sésame, le chili croustillant, la sauce soja, le vinaigre noir, l'ail haché et le maïs poivré Sichuan moulu dans un bol. Ajouter l'eau chaude de cuisson des nouilles (ou de l'eau chaude) un peu à la fois et fouetter vigoureusement — la pâte de sésame saisit d'abord quand le liquide est ajouté et peut sembler cassée et granuleuse avant qu'elle ne se réunisse. Continuez à fouetter et à ajouter de l'eau chaude jusqu'à ce que la sauce soit complètement lisse, brillante, et coule dans un ruban épais et versable du fouet. La sauce finie devrait être sur la consistance de la crème lourde — assez mince pour enrober les nouilles uniformément mais pas aqueuse. Le vinaigre noir donne de la luminosité et une faible complexité vin-obscurité que le vinaigre de riz seul ne peut fournir.",
      "visualCue": {
        "primaryTarget": "Une sauce lisse, brillante, brun rougeâtre profond — le beige de la pâte de sésame entièrement intégré à l'huile rouge du chili croustillant — qui coule d'une cuillère dans une feuille lente, même sans grumeaux ni séparation d'huile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte de sésame s'est emparée d'une grosse masse granuleuse au fond du bol, avec un chili rouge gras et croustillant assis sur le dessus, non émulsifié. Le mélange semble cassé et séparé.",
            "action": "Ajouter de l'eau chaude une cuillère à soupe à la fois tout en fouettant dur dans un mouvement circulaire — la pâte de sésame saisit toujours d'abord avant qu'elle libère et émulsifie. La patience et la chaleur sont les clés."
          },
          {
            "state": "Perfect",
            "description": "Une sauce unie, brillante, rougeâtre-tan qui coule uniformément, sent le sésame, le chili, l'ail et la note foncée, semblable au vin, du vinaigre noir. Il enveloppe l'arrière d'une cuillère dans une couche mince et uniforme.",
            "action": "Goûtez et ajustez : ajoutez plus de chili croustillant pour la chaleur, plus de vinaigre pour la luminosité, plus de soja pour le sel."
          },
          {
            "state": "Overdone",
            "description": "Trop d'eau chaude ajoutée — la sauce est fine et aqueuse, enrobant à peine un doigt, la saveur de sésame diluée et l'huile de chili flottant sur la surface plutôt que émulsifiée.",
            "action": "Ajouter plus de pâte de sésame et fouetter pour réémulsionner et épaissir."
          }
        ]
      },
      "feelCue": "Passez un doigt dans la sauce à l'arrière de la cuillère — il devrait laisser une bande propre qui se tient brièvement avant que la sauce ne retombe dessus. Si la bande se remplit immédiatement, la sauce est trop fine. S'il faut 5 secondes pour le remplir, il est assez épais pour les nouilles."
    },
    {
      "nodeId": "step_2",
      "action": "Sear",
      "inputs": [
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "pork_ya_cai_topping",
      "instructions": "Chauffer l'huile neutre dans un wok ou une poêle à feu vif jusqu'à ce qu'elle fume. Ajouter le porc moulu et cuire sans remuer pendant 60 à 90 secondes, le presser à plat, jusqu'à ce que le dessous soit profondément doré et caramélisé. Séparez la viande et continuez à cuisiner jusqu'à ce que tout le rose soit parti et le porc est en morceaux émiettés, bien connus avec quelques bords croustillants. Ajouter le doubanjiang et faire revenir 1 minute jusqu'à ce que la pâte de chili enrobe le porc et transforme tout en rouge vif. Ajouter le cai rincé et remuer pour le combiner — les verts décapés s'étourdiront dans la graisse chaude. Cuire ensemble pendant 1 à 2 minutes jusqu'à ce que le ya cai soit chauffé et parfumé. La garniture doit être intensément salée, légèrement grasse et parfumée.",
      "visualCue": {
        "primaryTarget": "Un mélange sec, intensément parfumé de morceaux de porc émietté, bien-brouillés, enrobés de pâte de chili rouge, entrecoupés de morceaux sombres et légèrement translucides de ya cai. Pas de mise en commun de liquide dans la casserole: la garniture doit être assez sèche pour faire du monticule.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le porc est encore dans une masse gris pâle, le doubanjiang est assis sur le dessus sans enrober la viande, et le ya cai est froid et frais.",
            "action": "Augmenter la chaleur et briser le porc plus agressivement. Le porc doit être véritablement bruni et émietté avant que les condiments ne soient ajoutés."
          },
          {
            "state": "Perfect",
            "description": "Morceaux de porc foncés, émiettés et secs enrobés de pâte rouge, entrecoupés de ya cai parfumé. Toute la poêle sent profondément le chili fermenté, la graisse de porc, et le bricolage, la moutarde-verte, du cornichon.",
            "action": "Retirer du feu et réserver comme garniture."
          },
          {
            "state": "Overdone",
            "description": "Ya cai a été trop cuit et a perdu sa texture distinctive, se transformant en un crumble presque sablonneux et amer.",
            "action": "Ajouter immédiatement la garniture de cai de porc-ya dans le bol; l'humidité résiduelle de la sauce ravivera la texture du cai de ya lorsque le bol est assemblé."
          }
        ]
      },
      "feelCue": "La garniture finie doit se sentir sèche et émiettée lorsqu'elle est jetée à l'aide d'une cuillère, comme une chapelure grossière et parfumée. S'il se sent humide ou pâteux, la poêle n'était pas assez chaude et le porc a cuit à la vapeur plutôt qu'à la mer."
    },
    {
      "nodeId": "step_3",
      "action": "Assemblage",
      "inputs": [
        "sesame_sauce_base",
        "pork_ya_cai_topping",
        "ing_12"
      ],
      "outputState": "assembled_dan_dan_bowl",
      "instructions": "Divisez la sauce de sésame uniformément entre les bols. Cuire les nouilles de blé frais ou séchées dans de l'eau bouillante bien salée jusqu'à ce qu'elles soient tendres, égoutter (réserver l'eau de cuisson si ce n'est déjà fait) et diviser entre les bols, les placer directement sur le dessus de la sauce sans remuer. Monter la garniture de porc-ya cai au centre de chaque bol de nouilles. Arrosez le chili supplémentaire croustillant sur le dessus, éparpillez l'échalote coupée et la poussière avec une pincée plus de maïs poivré Sichuan. Servir immédiatement — les nouilles devraient être placées sur la sauce plutôt que la sauce versée sur les nouilles, de sorte que le diner éprouve la composition visuelle avant de tout remuer ensemble à la table.",
      "visualCue": {
        "primaryTarget": "Un bol composé : des nouilles pâles empilées au-dessus d'une base profonde de sauce au tank rougeâtre, couronnées d'un monticule de porc rouge foncé et de ya cai, une bruine d'huile de chili écarlate à la surface, de l'échalon vert vif sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a été mélangée avec les nouilles avant de servir — le contraste de couleur dramatique des nouilles et de la sauce est perdu, et l'expérience de table de remuer votre propre bol est enlevée.",
            "action": "Pour les portions futures, couchez dans l'ordre : sauce d'abord, puis nouilles, puis garniture. Le mélange à table fait partie du théâtre du plat."
          },
          {
            "state": "Perfect",
            "description": "Un beau bol en couches qui semble dramatique et digne d'un restaurant avant d'être mélangé. La sauce est visible à la base, la garniture haute et sèche sur le dessus, l'huile de chili brille à travers la surface.",
            "action": "Servir avec des baguettes et une cuillère profonde. Demandez au diner de remuer du fond jusqu'à incorporer toute la sauce."
          },
          {
            "state": "Overdone",
            "description": "Le bol a été assemblé et laissé assis trop longtemps — les nouilles ont absorbé toute la sauce et gonflé, la garniture a coulé et est partie en losange, et l'huile de chili a été absorbée plutôt que de briller à la surface.",
            "action": "Dan dan nouilles doit être servi et mangé immédiatement. Assemblez seulement lorsque le dîner est assis et prêt."
          }
        ]
      },
      "feelCue": "Mélanger le bol du bas — vous devriez sentir la sauce lever et enrober les nouilles pendant que vous soulevez. La première morsure après mélange complet devrait fournir la richesse de sésame, la chaleur de chili, et le picotement électrique du poivre de Sichuan presque simultanément, avec la nouille mâcheuse fournissant la texture de base qui porte tout."
    },
    {
      "nodeId": "step_4",
      "action": "Saison",
      "inputs": [
        "assembled_dan_dan_bowl"
      ],
      "outputState": "finished_dan_dan_noodle_sauce",
      "instructions": "Après que le diner remue le bol, leur demander de goûter et d'auto-saison des condiments à la table: chili supplémentaire croquant pour plus de chaleur et de croquant, quelques gouttes de vinaigre noir pour la luminosité et l'acide, une pincée de sucre si la chaleur est écrasante, ou quelques gouttes d'huile de sésame si les nouilles se sentent sèches. Ce dernier assaisonnement ouvert est traditionnel: un bon bol de nouilles dan dan devrait être ajusté par le mangeur à sa propre préférence de chaleur et d'engourdissement. La sauce telle que construite est le point médian équilibré; les condiments de la table la poussent à l'individu. Le plat est fini lorsque chaque brin de nouilles est enrobé de sauce et que le diner peut sentir le m-la brillance de construction lente s'étendre du centre de la langue vers l'extérieur.",
      "visualCue": {
        "primaryTarget": "Un bol entièrement remué où chaque brin de nouilles est enrobé d'une sauce de trique rougeâtre foncée, le porc et le ya cai répartis dans l'ensemble, avec des flaques d'huile de chili sur la surface et le pétoncle dispersé à travers.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les nouilles ne sont pas encore entièrement enrobées — la sauce est encore mise en commun au fond du bol et les nouilles supérieures sont sèches et pâles.",
            "action": "Continuer à remuer à partir du fond du bol, lever et tourner les nouilles à travers la sauce jusqu'à ce que chaque brin soit coloré et enduit."
          },
          {
            "state": "Perfect",
            "description": "Chaque nouilles est rouge-tawny de la sauce, le porc et ya cai sont distribués uniformément, l'huile de chili brille à la surface, et la bouche du diner picote avec le feu lent et agréable de ma-la.",
            "action": "Mangez immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le bol a été trop longtemps assis après le trempage — les nouilles ont absorbé toute la sauce et sont devenues une seule masse entachée. L'effet ma-la a atteint son maximum et a commencé à s'estomper.",
            "action": "Ajouter une bruine d'huile de sésame et un jet d'eau ou de bouillon pour se détendre, remuer à nouveau et servir. Ne laissez pas un bol de Dan Dan attendre."
          }
        ]
      },
      "feelCue": "Le picotement du maïs poivré Sichuan devrait arriver nettement après les 3-4 premières bouchées, une sensation mieux décrite comme un bourdonnement électrique lent qui s'étend du centre de la langue aux lèvres et aux joues. S'il est absent, il n'y a pas assez de maïs poivré sichuan; s'il arrive trop vite et déborde, il y en a trop. L'idéal est une sauce qui continue à se révéler, mordre après mordre."
    }
  ]
};
