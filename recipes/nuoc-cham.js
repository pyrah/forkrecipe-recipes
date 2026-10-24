export default {
  "repoId": "master_vietnamese_nuoc_cham_001",
  "parentRepoId": null,
  "slug": "nuoc-cham",
  "author": "ForkRecipe Kitchen",
  "title": "Nuoc Cham",
  "description": "La sauce à tremper essentielle du Vietnam — un équilibre de sauce de poisson, de citron vert, de sucre, d'ail et de chiles qui est simultanément salé, aigre, doux et piquant, le condiment qui apparaît à presque toutes les tables vietnamiennes.",
  "cuisine": "Vietnamiens",
  "culture": "Vietnamiens",
  "category": "condiments",
  "tags": [
    "vietnamese",
    "trempage-sauce",
    "poisson-sauce",
    "condiment",
    "Sans gluten"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "10 min",
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
    "sour": 3,
    "bitter": 0,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Eau chaude",
      "ratioValue": 90,
      "defaultUnit": "ml",
      "substitutions": [
        "eau de coco pour une note tropicale"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "sucre de palme (ajoute une note de caramel plus profonde)",
        "miel (2 c. à soupe)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "sauce de poisson (bonne qualité, 40+ protéines)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce soja légère + 1/4 c. à thé poudre de nori (vegan)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Jus de citron vert frais",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de riz (moins brillant)",
        "jus de citron"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Giroves d'ail hachées à une pâte fine",
      "ratioValue": 2,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Heat",
      "name": "Chiles oculaires d'oiseau, tranchés finement",
      "ratioValue": 2,
      "defaultUnit": "chiles",
      "substitutions": [
        "1/4 c. à thé de piments rouges",
        "Serrano chile"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Carotte finement julienne (facultatif)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "papaye verte, déchiquetée",
        "radis daikon"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Dissoudre",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "sugar_syrup",
      "instructions": "Mélanger l'eau chaude et le sucre dans un bol ou un mortier. Incorporer vigoureusement 1 à 2 minutes jusqu'à ce que chaque granule de sucre soit dissous et que l'eau soit complètement claire. L'eau doit être chaude — environ 50-60 °C — non chaude, ce qui entraînerait un arôme, et non froid, ce qui laisse le sucre non dissous et la sauce granuleuse.",
      "visualCue": {
        "primaryTarget": "Liquide complètement limpide sans cristaux de sucre visibles sur le fond ou les parois du bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des granules blancs encore visibles sur le fond. Le liquide semble légèrement nuageux.",
            "action": "Mélanger encore une minute et mettre le bol pour vérifier la présence de sédiments — le sucre non dissous signifie que la sauce sera inconsciemment sucrée."
          },
          {
            "state": "Perfect",
            "description": "Liquide cristallin. Aucune particule ne capte la lumière. Légèrement visqueux lorsqu'il est agité — le sucre dissous ajoute du corps.",
            "action": "Ajouter la sauce de poisson et le jus de lime."
          },
          {
            "state": "Overdone",
            "description": "Vous avez utilisé de l'eau bouillante et le liquide est en vapeur. Le sirop dissous sent plat.",
            "action": "Laisser refroidir jusqu'à la température du corps avant de procéder — liquide chaud va muter la sauce de poisson et les aromatiques de citron vert."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt et frottez-le contre votre pouce — vous devriez vous sentir lisse, liquide glissant avec zéro graisse. Tout grain signifie plus de brassage."
    },
    {
      "nodeId": "step_2",
      "action": "Assaisonner",
      "inputs": [
        "sugar_syrup",
        "ing_03",
        "ing_04"
      ],
      "outputState": "base_sauce",
      "instructions": "Ajouter la sauce de poisson, puis le jus de lime à l'eau sucrée. Mélanger doucement. Goûtez immédiatement et évaluez l'équilibre en utilisant le ratio vietnamien classique: parties égales sel, aigre, et doux en bouche, dans cet ordre d'arrivée, finissant propre. La sauce de poisson ne doit pas sentir cru ou agressif — elle doit être océanique, salée et arrondie. Ajuster à ce stade : plus de sauce de poisson pour le sel et l'umami, plus de citron vert pour l'acidité, plus de sirop de sucre pour la douceur.",
      "visualCue": {
        "primaryTarget": "Un liquide pâle, doré-ambre — le brun de la sauce de poisson dilué par le citron vert et l'eau dans une couleur comme le thé noir faible. Clair, pas nuageux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide sent la sauce crue. Le goût est fortement salé sans ascenseur.",
            "action": "Ajouter une autre cuillère à café de jus de lime et une pincée de sucre — l'acide et la douceur sont ce qui apprivoisent la sauce de poisson."
          },
          {
            "state": "Perfect",
            "description": "L'arôme est lumineux, agrumes et salé tout à la fois. Aucun élément ne domine. Le goût frappe salé, puis aigre, puis doux en succession rapide.",
            "action": "Ajouter l'ail et les chiles."
          },
          {
            "state": "Overdone",
            "description": "La sauce a un goût amer ou trop sucré: le citron vert a été ajoutée avant d'évaluer l'équilibre.",
            "action": "Corriger avec de petits ajouts de l'élément manquant : sauce de poisson pour le sel, sucre pour le sucre, citron vert pour l'aur. Ajouter dans les gouttes et régaler."
          }
        ]
      },
      "feelCue": "Tenez une petite cuillère sur le dos de votre langue pendant trois secondes — une cham nuoc parfaitement équilibrée se sentira comme si elle se dissout proprement, ne laissant aucune saveur persistante qui domine."
    },
    {
      "nodeId": "step_3",
      "action": "Hacher finement",
      "inputs": [
        "ing_05",
        "ing_06"
      ],
      "outputState": "aromatics_prepped",
      "instructions": "Miser l'ail à une pâte très fine — presque une purée — en faisant basculer le couteau sur les gousses, puis en utilisant le plat de la lame pour les écraser et les frotter contre la planche à découper avec du sel. Pour les chiles, coupez-les en rondelles minces; laissez les graines en pleine chaleur. Si vous préférez moins de chaleur, tranchez d'abord les piments sur la longueur et raclez les graines avant de les couper en rondelles.",
      "visualCue": {
        "primaryTarget": "L'ail réduit à une pâte fine presque translucide. Les rondelles du Chili sont uniformes et minces — environ 1-2 mm.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est toujours en morceaux. De grands morceaux écraseront les gorgées individuelles de la sauce.",
            "action": "Continuer à miner et à écraser — l'objectif est de coller, pas des bits. Un bon gratteur ou un microplan fonctionne ici aussi."
          },
          {
            "state": "Perfect",
            "description": "L'ail est une pâte lisse et piquante qui frotte uniformément. Les rondelles du Chili sont uniformes et minces, les graines sont toujours attachées.",
            "action": "Ajouter directement à la sauce de base."
          },
          {
            "state": "Overdone",
            "description": "L'ail a été broyé avec tellement de sel qu'il est humide et oxydé, devenant légèrement gris.",
            "action": "Procéder — la saveur est légèrement plus muette mais acceptable. La prochaine fois, écraser sans sel ajouté."
          }
        ]
      },
      "feelCue": "Frottez une pincée de la pâte d'ail entre vos doigts – elle doit se sentir parfaitement lisse sans résistance, et l'arôme vif et brut doit frapper immédiatement et avec force."
    },
    {
      "nodeId": "step_4",
      "action": "Infuser",
      "inputs": [
        "base_sauce",
        "aromatics_prepped"
      ],
      "outputState": "seasoned_sauce",
      "instructions": "Incorporer la pâte d'ail et les rondelles de piment directement dans la sauce de base. Laissez le mélange reposer au moins 5 minutes avant de déguster à nouveau — l'ail a besoin de temps pour perdre son bord brut le plus vif et infuser sa douceur dans le liquide. Ne sautez pas ce repos ; l'ail cru immédiatement ajouté et immédiatement goûté vous semblera trop agressif et vous fera sous-ailler la sauce.",
      "visualCue": {
        "primaryTarget": "Un liquide doré-ambre avec des rondelles de chile rouge vif suspendues à l'ensemble et de faibles brins de pâte d'ail visibles dans les 60 premières secondes avant la dissolution.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Reposé moins de 2 minutes. L'ail goûte cru et dur, dominant la sauce.",
            "action": "Attendez les 5 minutes complètes — la perfusion d'ail dans un milieu acide est sensible au temps."
          },
          {
            "state": "Perfect",
            "description": "Après 5 minutes, l'ail s'est mélangé en une note savore arrondie. Les chiles ont commencé à saigner une faible teinte rouge dans la sauce. Le goût est en couches.",
            "action": "Ajouter la carotte si elle est utilisée, puis servir ou conserver."
          },
          {
            "state": "Overdone",
            "description": "Laisser plus d'une heure à température ambiante — l'ail commence à avoir un goût fermenté et l'arôme de citron vert fraîche s'estompe.",
            "action": "Une pression de jus de lime fraîche restaurera la luminosité. Pour la conservation, réfrigérer immédiatement après la perfusion de 5 minutes."
          }
        ]
      },
      "feelCue": "La sauce devrait sentir comme une cuisine vietnamienne — cette combinaison spécifique de sel, d'agrumes et d'allium cru qui est immédiatement reconnaissable et unique ouverture d'appétit."
    },
    {
      "nodeId": "step_5",
      "action": "Dresser",
      "inputs": [
        "seasoned_sauce",
        "ing_07"
      ],
      "outputState": "finished_nuoc_cham",
      "instructions": "Ajouter la carotte julienne à la sauce si vous l'utilisez — c'est la version do chua commune dans le centre du Vietnam, et il ajoute croquant et de couleur, pas seulement garnir. La carotte ne doit pas être coupée en fils plus épais qu'un bâtonnet. Servir immédiatement ou refroidir jusqu'à 3 jours (la carotte s'assouplira au fil du temps; ajouter la carotte fraîche sur commande si elle sert plusieurs jours). Fait environ 200 ml de sauce finie.",
      "visualCue": {
        "primaryTarget": "Sauce d'ambre dorée avec rondelles de chile rouge vif, flocons d'ail blanc vert pâle, et (si vous utilisez) minces fils de carotte orange suspendus tout au long.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les fils de carottes sont trop épais — ils seront distrayants et ne s'intégreront pas visuellement ou texturalement à la sauce.",
            "action": "Recoupez la largeur de l'allumette (2mm ou moins). Une mandoline sur son cadre julienne est idéale."
          },
          {
            "state": "Perfect",
            "description": "Chaque élément est visible. La sauce est claire et ambre entre les solides. La carotte flotte et glisse lorsque le bol est incliné. La sauce est lumineuse et accueillante.",
            "action": "Servir dans de petits bols individuels à côté de rouleaux de printemps, de viandes grillées ou de rouleaux de papier de riz."
          },
          {
            "state": "Overdone",
            "description": "Trop de solides — carotte et chile ont encombré le liquide et la sauce est essentiellement une salade.",
            "action": "Retirez la moitié des solides. La sauce est d'abord un liquide de trempe; les solides sont accent, pas de remplissage."
          }
        ]
      },
      "feelCue": "La sauce finie devrait être assez légère pour être versée librement d'une cuillère dans un ruisseau mince — si elle verse comme du sirop d'érable, le taux de sucre est trop élevé et elle enrobera plutôt que de s'habiller quoi qu'elle touche."
    }
  ]
};
