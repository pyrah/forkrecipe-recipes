export default {
  "repoId": "master_french_shellfishstock_001",
  "parentRepoId": null,
  "slug": "shellfish-stock",
  "author": "ForkRecipe Kitchen",
  "title": "Stock de mollusques",
  "description": "Stock corallien intensement aromatique composé de coquilles de crevette grillées et d'un mirepoïx classique, base essentielle pour les bisques, les fruits de mer veloutés et la cowder. Briser brièvement pour préserver la luminosité.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "stocks",
  "tags": [
    "crustacés",
    "stock",
    "français",
    "crevettes",
    "bisque",
    "Produits de la mer",
    "classique"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Coquilles et têtes de crevettes",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "coquilles de homard",
        "Coquilles de crabe",
        "coquilles langoustines"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Carotte, coupée en dés",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Pâtes de céleri, coupées en tranches grossières",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon blanc, coupé en dés",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "Échalotes"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "tomates fraîches, concassées"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Solvent",
      "name": "Vin blanc sec",
      "ratioValue": 150,
      "defaultUnit": "ml",
      "substitutions": [
        "Vermouth sec"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Feuilles de baies",
      "ratioValue": 2,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 3,
      "defaultUnit": "sprigs",
      "substitutions": [
        "Thym séché"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Graines de poivre noires, légèrement broyées",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Hydration",
      "name": "Eau froide",
      "ratioValue": 1.5,
      "defaultUnit": "L",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Huile neutre (grape-semence ou tournesol)",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "beurre"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtir",
      "inputs": [
        "ing_01",
        "ing_11"
      ],
      "outputState": "roasted_shells",
      "instructions": "Chauffer l'huile dans une grande réserve lourde à feu vif jusqu'à ce qu'elle mijote et commence à fumer. Ajouter les coquilles et les têtes de crevettes en une seule couche — ne pas fouler. Faire rôtir, en remuant de temps en temps, pendant 5 à 7 minutes jusqu'à ce que les coquillages aient transformé le saumon-pink profond en corail-orange et les têtes ont caramélisé autour des bords. La cuisine doit sentir intensément la mer et les crustacés grillés. Ce brunissement Maillard est ce qui construit la couleur et la profondeur du stock.",
      "visualCue": {
        "primaryTarget": "Les coquilles sont uniformément orange corail à rouge brique profonde. Le fond de la poêle montre un fond léger — dépôts dorés-brun des coquilles caramélisées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coquilles sont encore rose pâle ou gris. Aucun amour ne s'est formé. La poêle sent les fruits de mer crus plutôt que rôtis.",
            "action": "Remonter la chaleur et étaler les coquilles dans une couche plus mince. Attendez un étourdissement actif avant de remuer."
          },
          {
            "state": "Perfect",
            "description": "Coquilles profondes de corail-orange, un peu croustillantes autour des bords. Un parfum léger et doré sur le fond de la poêle. Ça sent bon, brillant et grillé.",
            "action": "Ajouter les légumes de mirpoix directement dans la poêle."
          },
          {
            "state": "Overdone",
            "description": "Les coquilles sont brun foncé ou commencent à s'ombrager. Le fond est sombre et amer.",
            "action": "Retirez immédiatement les coquilles, réduisez le feu et ajoutez un jet de vin pour dissoudre le fond avant de procéder — goûtez à l'amertume avant d'ajouter de l'eau."
          }
        ]
      },
      "feelCue": "Les coquillages seront rétrécis et enroulés, et se sentiront cassants aux bords lorsqu'ils seront pressés avec une cuillère. Les têtes doivent s'effondrer légèrement lorsqu'elles sont poussées, c'est-à-dire caramélisée, qui est une saveur pure."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "roasted_shells",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "vegetable_base",
      "instructions": "Réduire le feu à moyen. Ajouter la carotte, le céleri et l'oignon directement dans le pot avec les coquilles. Cuire en remuant occasionnellement pendant 5 à 6 minutes jusqu'à ce que l'oignon soit translucide et que les carottes se ramollissent aux bords. Les légumes ne sont pas destinés à brunir — ils ajoutent douceur et corps, pas de couleur. S'ils commencent à caraméliser, ajoutez un jet d'eau.",
      "visualCue": {
        "primaryTarget": "L'oignon est doux et translucide. Les bords des carottes sont légèrement vitreux. Toute la casserole sent le mirepoïx doux et brillant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon reste brut et opaque. La carotte est dure. Tout sent vif et cru.",
            "action": "Continuer la cuisson à feu moyen – précipitez cette étape et le stock goûtera cru."
          },
          {
            "state": "Perfect",
            "description": "L'oignon est fondant et translucide sans brunissement. Carottes ramollies mais tenant leur forme. Le pot sent doux et océanique.",
            "action": "Ajouter la pâte de tomate et la mélanger."
          },
          {
            "state": "Overdone",
            "description": "Les légumes sont brunis et caramélisés. Le pot sent plus la confiture d'oignon que le mirpoix.",
            "action": "Continuez de toute façon — déglacez bien. Le stock aura plus de profondeur de caramel, qui peut fonctionner dans un bisque."
          }
        ]
      },
      "feelCue": "La pression d'une pièce de carotte sur le côté pot devrait donner une légère résistance — cuite à travers mais non musquée. Le mélange doit sentir l'oignon frais et caramélisé."
    },
    {
      "nodeId": "step_3",
      "action": "Déglacer",
      "inputs": [
        "vegetable_base",
        "ing_05",
        "ing_06"
      ],
      "outputState": "deglazed_base",
      "instructions": "Ajouter la pâte de tomate directement dans le pot et remuer pendant 1 à 2 minutes jusqu'à ce qu'elle enveloppe tout et devienne légèrement plus foncée, rouge confiture. Verser dans le vin blanc — il sifflera et s'évaporera violemment. Grattez chaque trace d'affection du fond du pot à l'aide d'une cuillère en bois. Laisser le vin réduire de moitié, environ 3 minutes, de sorte que l'alcool cuit et le liquide devient sirupeux et parfumé.",
      "visualCue": {
        "primaryTarget": "Le fond de la poêle est complètement propre — pas de dépôts bloqués. Le liquide est un sirop rouge brique brillant et réduit qui recouvre les coquilles et les légumes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le vin est encore cru et alcoolisé. Fonds non entièrement dissous. Liquide n'a pas diminué.",
            "action": "Continuer à feu moyen-élevé jusqu'à ce que le vin soit réduit de moitié et que l'odeur d'alcool se dissipe."
          },
          {
            "state": "Perfect",
            "description": "Jammy, liquide concentré, orange rouge profondément coloré. Nettoyer le fond de la poêle. Des odeurs de mollusques, de vin et de tomates douces.",
            "action": "Ajouter l'eau, les herbes et les grains de poivre. Faites frémir."
          },
          {
            "state": "Overdone",
            "description": "Le liquide s'est presque évaporé et la pâte de tomate brûle.",
            "action": "Ajouter immédiatement l'eau pour sauver le fond. Incorporer vigoureusement pour soulever les taches sombres."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère à travers le liquide sur le fond de la poêle — elle doit se séparer proprement et laisser un sentier qui se tient un moment avant de se remplir. C'est la concentration que tu veux."
    },
    {
      "nodeId": "step_4",
      "action": "Mijoter",
      "inputs": [
        "deglazed_base",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "raw_stock",
      "instructions": "Ajouter l'eau froide, les feuilles de laurier, le thym et les grains de poivre. Porter à feu doux à feu moyen — jamais un ébullition dur, ce qui rend le stock de mollusques amer et nuageux. Maintenez à un mijot paresseux avec seulement quelques bulles brisant la surface. Cuire exactement 20 à 25 minutes. Le stock de mollusques extrait rapidement et l'extraction excessive le rend amer; contrairement au stock de poulet, plus de temps n'est pas meilleur.",
      "visualCue": {
        "primaryTarget": "Un liquide rose corail à ambre pâle à mijoter paresseux. De petites bulles paresseuses. Une faible teinte orange à la surface des huiles de mollusques.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock est encore pâle et semblable à l'eau après 20 minutes à une chaleur trop basse. Peu de couleur ou d'arôme développé.",
            "action": "Levez la chaleur à une bonne mijoter et maintenez pendant 20 minutes."
          },
          {
            "state": "Perfect",
            "description": "Coral, parfumé, avec un arôme océanique propre. 20-25 minutes à une mijot paresseuse.",
            "action": "Retirer du feu et procéder à la déformation."
          },
          {
            "state": "Overdone",
            "description": "Le stock est passé au-delà de 30 minutes ou bouilli dur. Ça sent un peu amer ou iode.",
            "action": "Peau immédiatement et goût. Si elle est légèrement amère, équilibrez-vous avec un petit bouton de beurre froid fouetté après la déformation."
          }
        ]
      },
      "feelCue": "Le stock mijotant devrait remplir la cuisine d'une chaleur salée et brillance, quelque part entre une piscine rocheuse à marée basse et un bon restaurant de fruits de mer. Si ça sent l'acride ou le poisson, c'est allé trop loin."
    },
    {
      "nodeId": "step_5",
      "action": "Filtrer",
      "inputs": [
        "raw_stock"
      ],
      "outputState": "shellfish_stock",
      "instructions": "Retirer du feu et reposer pendant 5 minutes. Placez une passoire à mailles fines sur un grand bol et laissez passer le stock — ne pressez pas les solides, qui presseraient les composés amers des coquilles. Jetez tous les solides. Le stock fini doit être suffisamment clair pour voir le fond du bol, avec une teinte délicate de coraux-rose. Utiliser immédiatement pour le bisque ou la sauce, ou réfrigérer pendant 2 jours. Il ne sera pas gelé comme le stock de viande — il est mince et aromatique par nature.",
      "visualCue": {
        "primaryTarget": "Liquide corallien-orange clair et pâle. Parfumé, propre, légèrement irisé avec des huiles de mollusques. Pas de particules ou de nuages.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock est trouble ou laiteux avec des particules en suspension.",
            "action": "Passer à travers une passoire doublée d'une nappe de fromage. Si le stock est encore nuageux, il est bouilli trop dur — il est encore utilisable en sauce, mais ne produira pas de bisque cristalline."
          },
          {
            "state": "Perfect",
            "description": "Stock de corail clair avec un arôme océanique délicat. La couleur varie entre le rose-bleu et l'ambre pâle selon la quantité de coquille.",
            "action": "Utiliser comme indiqué. Réduire de moitié pour une glace de mollusques concentrée."
          },
          {
            "state": "Overdone",
            "description": "Le stock a été pressé à travers la souche — sombre, nuageux, légèrement amer.",
            "action": "Équilibrez avec une pression de citron et une petite quantité de crème pour adoucir l'amertume."
          }
        ]
      },
      "feelCue": "Une cuillère fraîche sur l'extrémité de votre langue : salée, propre et douce avec une finition brillance qui s'estompe rapidement. Des arrière-goûts longs et lourds d'iode indiquent une surextraction."
    }
  ]
};
