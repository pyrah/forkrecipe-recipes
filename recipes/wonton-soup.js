export default {
  "repoId": "master_chinese_wonton_soup_001",
  "parentRepoId": null,
  "slug": "wonton-soup",
  "author": "ForkRecipe Kitchen",
  "title": "Soupe de wonton",
  "description": "Les wontons de porc et de crevettes à peau fine flottent dans un bouillon de gingembre et de callion limpide et chatoyant si propre qu'il attrape la lumière comme du verre ambre pâle — chaque boulette d'une petite parcelle enrobée de soie qui fleurit sur la première bouchée, libérant un nuage de gras de porc assaisonné et de crustacés sucrés dans la soupe chaude. L'emballage lui-même, tendu à presque translucidité par l'ébullition, est la réalisation tranquille du plat.",
  "cuisine": "Chinois",
  "culture": "Cantonais",
  "category": "stocks",
  "tags": [
    "wontons",
    "Soupe",
    "cantonais",
    "porc",
    "crevettes",
    "bouillon",
    "boulettes",
    "confort"
  ],
  "difficulty": 3,
  "activeTime": "50 min",
  "totalTime": "1 hr 20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Porc haché (25 % de matières grasses)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "poulet haché"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Crevettes crues, pelées, dépeintes, hachées approximativement",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "viande de crabe"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Wonton wrappers (fin style Hong Kong, carré)",
      "ratioValue": 30,
      "defaultUnit": "pieces",
      "substitutions": [
        "enveloppes rondes de gyoza"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "sauce de soja légère",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Solvent",
      "name": "Vin de riz shaoxant",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": [
        "sherry sec"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile de sésame",
      "ratioValue": 8,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé finement",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Échalons, parties blanches et vert pâle hachées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Binder",
      "name": "Blanc d'œuf",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Poulet (léger, clair)",
      "ratioValue": 1200,
      "defaultUnit": "ml",
      "substitutions": [
        "de porc",
        "Dashi"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Aromatic",
      "name": "Gingembre frais, tranché 3 mm",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Allium",
      "name": "Échalons (pour le bouillon), attachés dans un noeud",
      "ratioValue": 2,
      "defaultUnit": "stalks",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Seasoning",
      "name": "Sel et poivre blanc",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Garnish",
      "name": "Verts d'échalote, tranchés finement",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "ruches"
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
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "wonton_filling",
      "instructions": "Mélanger le porc moulu, les crevettes hachées à peu près, la sauce soja, le vin Shaoxing, l'huile de sésame, le gingembre râpé, l'échalon haché et le blanc d'oeuf dans un bol. Mélangez vigoureusement avec votre main ou une paire de baguettes dans une direction unique et cohérente, toujours dans le sens des aiguilles d'une montre ou toujours dans le sens des aiguilles d'une montre. Ce mélange directionnel développe un réseau de myosine dans le porc qui donne à la garniture sa texture bouncy, springy caractéristique plutôt qu'une boule de viande friable. Mélanger pendant 2 à 3 minutes jusqu'à ce que le remplissage devienne cohérent et commence à s'éloigner légèrement des parois du bol. Il se sentira pâte et légèrement collant — c'est exact. Réfrigérer pendant 20 minutes avant le remplissage — un remplissage froid et ferme est beaucoup plus facile à emballer. Testez l'assaisonnement en cuisinant une petite cuillère à café de remplir une casserole ou un micro-ondes pendant 30 secondes et dégustez-la. Elle doit être assez salée et légèrement salée, car le bouillon est relativement délicat et dilue l'intensité du remplissage.",
      "visualCue": {
        "primaryTarget": "Une pâte cohésive, légèrement collante, rose-gris pâle, qui tient ensemble lorsqu'elle est pressée et ressort légèrement lorsqu'elle est pochée. Pas de liquide dans le bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est émietté et lâche: les morceaux de crevettes et de porc se séparent facilement. Le blanc d'œuf n'a pas été incorporé. Le mélange s'effondrera pendant l'emballage.",
            "action": "Mélanger plus vigoureusement dans une direction pendant 2 minutes jusqu'à ce que le mélange devienne pâteux."
          },
          {
            "state": "Perfect",
            "description": "Cohésif, légèrement élastique, tient sa forme lorsqu'il est écopé d'une cuillère. Quand vous appuyez dessus, il ressort faiblement. Sens de sésame et de gingembre. Une petite boule roulée entre les palmiers mouillés tient sans fissuration.",
            "action": "Réfrigérer pendant 20 minutes et préparer les emballages wonton."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage a été mélangé de façon si agressive qu'il se décompose — il semble gras et lâche, avec du gras visible se séparant.",
            "action": "Réfrigérer pendant 30 minutes pour solidifier la graisse. La texture peut être légèrement grasse, mais sera acceptable à la cuisson."
          }
        ]
      },
      "feelCue": "Faites une petite quantité de remplissage entre les doigts – il devrait se sentir légèrement collant et dense, comme de la viande de saucisse froide, et devrait tenir ensemble sans s'effondrer quand pressé. Si elle se sépare lorsque vous ouvrez votre main, continuez à mélanger."
    },
    {
      "nodeId": "step_2",
      "action": "Incorporer délicatement",
      "inputs": [
        "ing_03",
        "wonton_filling"
      ],
      "outputState": "folded_wontons",
      "instructions": "Mettre en place un poste de pliage : une serviette humide pour empêcher les emballages de sécher, un petit bol d'eau froide pour sceller et le remplissage réfrigéré. Placez un emballage dans la paume de votre main non dominante comme un diamant (corner face à vous). Placez une cuillère à café (environ 10 g) de remplissage au centre. Ne pas trop remplir — le remplissage se développera pendant la cuisson et les wontons surremplis éclateront. Pliez l'emballage en deux, tirant le coin le plus près de vous pour rencontrer le coin lointain, faisant un triangle. Appuyez fermement sur les bords pour sceller, en poussant l'air de tout autour du remplissage au fur et à mesure que vous allez. Mouiller les deux coins inférieurs du triangle avec de l'eau. Regroupez ces deux coins sous le remplissage et appuyez fermement — ils devraient se chevaucher légèrement. Le wonton fini ressemble à une mitre d'évêque ou à un bonnet ridé. Travailler rapidement et garder les wontons finis sur un plateau fariné, recouvert d'un chiffon humide pour éviter le séchage.",
      "visualCue": {
        "primaryTarget": "Un colis propre et compact — un triangle plissé avec les deux coins de base replié dos et collé sous le remplissage. La peau autour du remplissage doit être exempte de poches d'air et le joint doit être serré lignes blanches, non fraiées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sceau est incomplet — les bords ne sont pas fermement pressés et s'éloignent facilement. Les poches d'air sont visibles comme des bosses dans l'emballage loin du remplissage.",
            "action": "Appuyez fermement sur la couture avec le bout des doigts mouillés, en travaillant du remplissage vers l'extérieur pour pousser l'air dehors. Testez le sceau en pressant doucement le wonton — la couture ne doit pas s'ouvrir."
          },
          {
            "state": "Perfect",
            "description": "Un colis compact et serré, sans trous visibles dans le joint. Le remplissage forme un dôme visible à travers l'enveloppe. Les plis d'emballage sont soignés et les coins de base sont fermement liés.",
            "action": "Déposer sur un plateau légèrement fariné et couvrir. Répéter avec le remplissage restant."
          },
          {
            "state": "Overdone",
            "description": "Trop de remplissage: l'enveloppe est tendue et les bords ne s'atteignent pas proprement, ou le joint s'ouvre de la tension.",
            "action": "Retirez un peu de remplissage, respirez avec de l'eau supplémentaire et appuyez fermement. Régler le montant de remplissage pour les wontons suivants."
          }
        ]
      },
      "feelCue": "Maintenez un bouton fini entre le pouce et l'index et pressez très doucement — il ne devrait pas y avoir de donner aux coutures, et le remplissage à l'intérieur devrait appuyer fermement sur vos doigts. Il devrait se sentir comme un petit oreiller dense et uniforme."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "finished_broth",
      "instructions": "Verser le bouillon de poulet dans une casserole moyenne. Ajouter le gingembre tranché et le noeud de pétoncle attaché. Porter à feu moyen à mijoter à nu — de petites bulles qui brisent la surface, et non un ébullition. Laissez-le raide à cette température pendant 15 minutes pour extraire la saveur de gingembre et de pétoncle sans rendre le bouillon nuageux. Le but est un bouillon d'or clair et pâle avec un arôme propre et restreint de gingembre et d'oignon de printemps. Assaisonner de sel et de poivre blanc au goût. Le bouillon devrait goûter agréablement salé et légèrement assaisonné — il sera intensifié par l'eau de cuisson de wonton d'amidon qui pénètre inévitablement dans le bol, et par l'assaisonnement du remplissage comme le wonton cuisine. Enlever le noeud de gingembre et de pétoncle. Gardez le bouillon à mijoter doucement pendant que vous faites cuire les wontons.",
      "visualCue": {
        "primaryTarget": "Un bouillon d'or clair et pâle, sans particules flottantes, sans nuages, et de la vapeur visible montant de la surface. La couleur devrait ressembler à un bon consommé clair: l'or translucide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon a toujours le goût d'un stock ordinaire sans complexité de gingembre ou de pétoncle. Les aromatiques n'ont pas encore été infusés.",
            "action": "Continuer à mijoter avec les aromatiques pendant 5 à 10 minutes."
          },
          {
            "state": "Perfect",
            "description": "D'or clair et pâle, avec une chaleur de gingembre propre et un soupçon de douceur de l'échon. Ni la saveur ne domine. Bien assaisonné. Le bouillon ressemble à un ambre liquide.",
            "action": "Retirer les aromatiques et laisser mijoter doucement. Faites cuire les wontons."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon a mijoté trop vigoureusement et devient légèrement nuageux, ou le gingembre a été surextracté et domine avec une note épicée et nette.",
            "action": "Laisser reposer le feu pendant 5 minutes et évacuer toute mousse de la surface. Le trouble n'affectera pas la saveur, seulement l'apparence."
          }
        ]
      },
      "feelCue": "Coupez les deux mains autour de la casserole (sans la toucher) à la marque de 10 minutes et respirez dans la vapeur – vous devriez sentir clairement le gingembre et l'échon. Si vous ne sentez que du stock, la chaleur est trop faible. Si le gingembre brûle vos sinus, la perfusion est faite."
    },
    {
      "nodeId": "step_4",
      "action": "Faire bouillir",
      "inputs": [
        "folded_wontons",
        "finished_broth"
      ],
      "outputState": "cooked_wontons_in_broth",
      "instructions": "Dans un grand pot séparé, porter l'eau non salée à un ébullition vigoureux. Ajouter les wontons en lots de 8-10, jamais surpeuplement. Incorporer délicatement immédiatement après l'ajout afin d'éviter de coller au fond du pot. Les wontons couleront d'abord, puis monteront à la surface à mesure qu'ils se réchaufferont — cela prend environ 3 minutes. Une fois flottant, faire cuire 2 minutes de plus. L'emballage doit être entièrement translucide, légèrement gélatineux, et le remplissage doit être visible à travers la peau comme une masse dense de broches cuites. Retirer avec une cuillère à fente et placer directement dans les bols de service. Faire bouillir les wontons dans l'eau séparée, et non dans le bouillon, ce qui permet de garder le bouillon fini clair et exempt de la mousse protéinée d'amidon que les wontons libèrent pendant la cuisson. Placez le bouillon chaud et clair sur les wontons à table. Des greens d'écaillage sur le dessus.",
      "visualCue": {
        "primaryTarget": "Wontons entièrement translucides — vous pouvez clairement voir le remplissage à la cuisson rose à travers l'emballage presque clair. La peau est soyeuse et tendre, pas pâteuse. Ils montent à la surface avec un léger éclat.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'enveloppe a encore un noyau blanc et opaque, pas entièrement translucide. Le remplissage peut encore se sentir froid ou caoutchouteux au centre. Les wontons sont denses et lourds dans l'eau.",
            "action": "Cuire encore 90 secondes et tester à nouveau en appuyant sur un wonton — le remplissage doit se sentir uniformément ferme tout au long."
          },
          {
            "state": "Perfect",
            "description": "Emballage entièrement translucide avec remplissage rose visible. Wontons bob à la surface et sentir la lumière. Lorsqu'ils sont pressés avec une cuillère, ils ressortent légèrement et le remplissage repousse fermement. Pas d'opacité dans l'emballage.",
            "action": "Retirer avec une cuillère à fentes dans des bols et ajouter immédiatement le bouillon."
          },
          {
            "state": "Overdone",
            "description": "L'enrouleur est devenu épais et gonflé — il se sépare du remplissage et la texture est gommée et waterlogged. Certains ont peut-être éclaté, libérant le remplissage dans l'eau de cuisson.",
            "action": "Retirer immédiatement et utiliser. La texture sera pauvre mais la saveur survit."
          }
        ]
      },
      "feelCue": "Utilisez une cuillère pour presser doucement un wonton flottant contre le côté du pot — il devrait se sentir ferme et printanier tout au long, sans tache froide douce au centre. L'emballage doit se sentir glissant-tendre, comme de la soie humide, pas épais et pâteux."
    }
  ]
};
