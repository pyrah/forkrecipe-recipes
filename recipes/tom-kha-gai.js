export default {
  "repoId": "master_thai_tom_kha_gai_001",
  "parentRepoId": null,
  "slug": "tom-kha-gai",
  "author": "ForkRecipe Kitchen",
  "title": "Tom Kha Gai",
  "description": "Un bouillon de lait de coco soyeux et ivoire infusé de la chaleur florale du galangal et du parfum d'agrumes de la citronnelle, assez riche pour enrober une cuillère, mais brillant avec du citron vert et de la sauce de poisson. Torn champignons et poulet tendre braconner doucement dans la chaleur, en absorbant la chaleur en couches du bouillon.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "stocks",
  "tags": [
    "Soupe",
    "Thaï",
    "noix de coco",
    "Galangal",
    "poulet",
    "citronnelle",
    "Kaffir-lime"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "45 min",
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
    "bitter": 1,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Lait de coco, plein gras, non sucré",
      "ratioValue": 400,
      "defaultUnit": "ml",
      "substitutions": [
        "crème de coco diluée 1:1 avec de l'eau"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Stock de poulet, léger (ou eau)",
      "ratioValue": 300,
      "defaultUnit": "ml",
      "substitutions": [
        "stock de légumes"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "cuisse de poulet, désossée, sans peau, tranchée 5mm",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "poitrine de poulet",
        "tofu ferme"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Galangal, frais, tranché 3mm (pas gingembre)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "galangal congelé (acceptable)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Pâtes de citronnelle, meurtris et coupées en morceaux de 5 cm",
      "ratioValue": 2,
      "defaultUnit": "stalks",
      "substitutions": [
        "pâte de citronnelle 1 c. à soupe (arôme plus faible)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Feuilles de citron vert kaffir (citron vert makrut), déchirées",
      "ratioValue": 6,
      "defaultUnit": "leaves",
      "substitutions": [
        "Bandes de zeste de citron vert (inférieures)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "sauce de poisson (Tiparos ou Megachef)",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce soja légère + pincée sel"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "Jus de lime fraîchement pressé",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Protein",
      "name": "Champignons d'huître (ou champignons de paille), déchirés",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "champignons à bouton coupés"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Chilies d'oiseaux frais thaïlandais, légèrement meurtris (ne pas diviser)",
      "ratioValue": 3,
      "defaultUnit": "whole",
      "substitutions": [
        "1/2 c. à thé de piments ajoutés à la fin"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Herb",
      "name": "Coriandre fraîche, feuilles et tiges fines",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "Basilic thaïlandais"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Sweetener",
      "name": "Sucre de palme (ou sucre brun léger)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "Sucre de coco"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_10"
      ],
      "outputState": "infused_broth",
      "instructions": "Verser le lait de coco et le bouillon de poulet dans une casserole moyenne. Ajouter les tranches de galangal, les morceaux de citronnelle meurtris, les feuilles de lime kaffir déchirées et les piments d'oiseaux légèrement meurtris (mais entiers). Portez à feu doux à feu moyen — jamais un ébullition qui brisera le lait de coco et le rendra grainé et huileux. Laisser mijoter pendant 10 minutes, presser parfois les aromatiques avec une cuillère. Le bouillon doit porter une fragrance florale complexe : le soap-citrus du citron vert kaffir, le punch chaud du galangal, le vert citronné des tiges. N'enlevez pas encore les aromatiques — ils vont s'enfoncer tout au long de la cuisson et sont enlevés avant de servir, pas avant. Les piments sont laissés entiers de sorte qu'ils libèrent une légère chaleur de fond sans l'intensité perçante du chili fendu ou haché.",
      "visualCue": {
        "primaryTarget": "Un bouillon blanc ivoire avec un doux carquois de mouvement à la surface — de petites bulles dérivent aux bords, pas un ébullition central.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est encore froid et les aromatiques n'ont pas libéré leurs huiles. Il sent peu le lait de coco seulement — pas de chaleur galangale, pas de parfum de citronnelle.",
            "action": "Augmenter légèrement la chaleur et laisser 5 minutes de plus. Le parfum galangal doit être détectable avant d'ajouter la protéine."
          },
          {
            "state": "Perfect",
            "description": "Le bouillon est un ivoire doux et crémeux et sent intensément le citron vert galangale et kaffir. De petites gouttelettes de graisse peuvent être visibles à la surface. Les piments d'oiseau ont légèrement gonflé.",
            "action": "Ajouter les champignons et le poulet maintenant."
          },
          {
            "state": "Overdone",
            "description": "Le lait de coco s'est séparé — vous pouvez voir une léchée d'huile de coco jaunâtre à la surface et le bouillon semble caillé et grainé plutôt que soyeux.",
            "action": "Réduire la chaleur à faible et fouetter doucement pour réémulsionner. L'ajout d'un éclaboussure de lait de coco froid peut aider à le ramener, mais travailler rapidement — la chaleur continue le rendra pire."
          }
        ]
      },
      "feelCue": "Penchez-vous sur le pot et respirez : la vapeur doit porter un parfum floral, presque savonneuse, de citronnelle qui accroche l'arrière de votre gorge à la chaleur tranquille du galangal, comme l'inhalation par une fenêtre de cuisine thaïlandaise."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "infused_broth",
        "ing_03",
        "ing_09"
      ],
      "outputState": "cooked_soup",
      "instructions": "Ajouter les champignons d'huîtres déchirés au bouillon mijotant et remuer doucement. Après 1 minute, glissez dans les morceaux de cuisse de poulet tranchés, les étalant à travers le bouillon afin qu'ils cuisent uniformément. Maintenez une mijotée douce — à peine tremblant à la surface. Cuire le poulet pendant 5 à 7 minutes, en remuant une ou deux fois, jusqu'à ce que les tranches soient opaques jusqu'à ce qu'il ne reste plus de rose. La cuisse de poulet à cette épaisseur se termine dans le temps qu'il faut au bouillon pour revenir à la température après l'entrée de la protéine froide. Les champignons ramolliront et absorberont le bouillon de noix de coco. N'augmentez pas la chaleur pour précipiter cette étape — la chaleur agressive durcit le poulet et brise la base de la noix de coco.",
      "visualCue": {
        "primaryTarget": "Les tranches de poulet sont uniformément blanches-opaques partout. Les champignons sont soyeux et légèrement translucides, s'affaissent doucement dans le bouillon.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poulet a un blush rose au centre quand une grosse tranche est pressée ouverte avec une cuillère. La chair a un aspect brut et dense.",
            "action": "Continuer à mijoter pendant 2 minutes. La viande haute est pardonnante — elle ne s'asséchera pas rapidement."
          },
          {
            "state": "Perfect",
            "description": "Le poulet est complètement opaque, blanc à son centre. Il se sépare facilement lorsqu'il est pressé avec une cuillère. Les champignons ont absorbé le bouillon et semblent brillants et tendres.",
            "action": "Assaisonner avec de la sauce de poisson, du jus de lime et du sucre de palme immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les tranches de poulet se séparent en fibres à cordes et les champignons sont devenus complètement mous et arrosés.",
            "action": "Assaisonner et servir à la fois — la chaleur prolongée continuera de dégrader les protéines et les champignons."
          }
        ]
      },
      "feelCue": "Un morceau de cuisse de poulet bien cuite, relevé sur une cuillère, doit produire avec une pression douce — douce et juteuse, non ferme. Le bouillon environnant devrait enrober l'arrière de la cuillère dans un film mince et crémeux."
    },
    {
      "nodeId": "step_3",
      "action": "Assaisonner",
      "inputs": [
        "cooked_soup",
        "ing_07",
        "ing_08",
        "ing_12"
      ],
      "outputState": "seasoned_soup",
      "instructions": "Ajouter la sauce de poisson, le sucre de palme et le jus de lime hors feu ou au-dessus de la flamme la plus basse. Mélanger pour dissoudre le sucre. Goût et ajustez - Tom kha gai doit être simultanément riche (coconut), aigre (lime), salé (sauce de poisson), avec douceur de fond (sucre de palm) et chaleur lente (galangal et chili). Commencez par les quantités énumérées et ajustez en petits incréments. La citron vert va en dernier et ne doit pas bouillir après l'ajout — bouillir détruit sa note supérieure brillante et la rend amère. La saveur correcte est soyeuse-riche en bouche immédiatement, puis aigre et lumineux milieu-palais, puis une longue chaleur traînante du galangal. Si elle a un goût plat, elle a besoin de plus de citron vert; si elle a un goût dur, elle a besoin de plus de sucre de palme.",
      "visualCue": {
        "primaryTarget": "Broth est une crème d'ivoire lisse et uniforme avec une teinte dorée subtile du galangal et du chili. Pas de courbure visible ou de marées d'huile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon goûte le lait de coco et le stock mais manque de luminosité ou de complexité. La sauce de poisson et le citron vert n'ont pas été ajoutées.",
            "action": "Ajouter la sauce de poisson, le citron vert et le sucre de palme dans les proportions indiquées, puis goûter et ajuster."
          },
          {
            "state": "Perfect",
            "description": "Le bouillon offre une saveur de laminage en couches: crémeux et riche, puis aigre et lumineux, puis se réchauffe lentement du galangal. Il est impossible de goûter un ingrédient isolé.",
            "action": "Déposer dans des bols sur les aromatiques (qui restent mais ne sont pas mangés) et garnir."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon a un goût fortement aigre ou fortement salé: du citron vert ou de la sauce de poisson a été ajoutée trop fortement.",
            "action": "Équilibre avec un petit ajout de lait de coco et de sucre de palme pour arrondir les bords."
          }
        ]
      },
      "feelCue": "Le bouillon fini sur une cuillère à dégustation doit se sentir soyeux et enduit, comme de la crème fine — pas aqueuse, pas granuleuse. L'acide du citron vert devrait rendre les bords de votre langue légèrement teintés, tandis que la chaleur du galangal se calme chaudement à l'arrière de votre gorge."
    },
    {
      "nodeId": "step_4",
      "action": "Dresser",
      "inputs": [
        "seasoned_soup",
        "ing_11"
      ],
      "outputState": "finished_tom_kha_gai",
      "instructions": "Déposer la soupe dans des bols profonds, en veillant à ce que chaque bol reçoive des portions égales de poulet, de champignons et de bouillon. Les aromates — galangales, citronnelle, feuilles de combava et piments d'oiseaux — restent dans le bol pour la beauté visuelle et l'arôme continu mais sont poussés sur le côté et ne sont pas mangés. Scatter les feuilles de coriandre fraîche sur le dessus de chaque bol. Servir immédiatement pendant la cuisson du bouillon. Fournissez une petite cuillère pour le bouillon et les baguettes ou une fourchette pour les solides. À table, les diners peuvent presser du citron vert supplémentaire sur leur bol. La soupe ne s'améliore pas en position debout: le citron vert devient amère, le lait de coco peut se séparer et le poulet devient caoutchouteux.",
      "visualCue": {
        "primaryTarget": "Un beau bol d'ivoire avec un poulet blanc doré visible, des champignons d'or foncé et une coriandre verte éparpillée sur une surface crème soyeuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bol a l'air pâle et sans décor — pas de garniture, pas de contraste de couleur.",
            "action": "Ajouter la coriandre immédiatement. Le contraste visuel fait partie de l'expérience alimentaire."
          },
          {
            "state": "Perfect",
            "description": "Bouillon d'ivoire à la vapeur, poulet tendre et champignons doux visibles sous la surface, coriandre vert vif flottant sur le dessus. Les morceaux de galangal et de citronnelle reposent au bord du bol.",
            "action": "Servir dans les 2 minutes suivant l'enroulement."
          },
          {
            "state": "Overdone",
            "description": "La soupe a été maintenue trop longtemps et un anneau d'huile de noix de coco s'est formé au bord de la surface. Cilantro s'est flétri dans le bouillon.",
            "action": "Écraser l'huile avec une cuillère, ajouter la coriandre fraîche et servir."
          }
        ]
      },
      "feelCue": "Lorsque vous soulevez le bol sur vos lèvres, la vapeur doit porter le profil aromatique complet — citronnelle, citron vert, galangal — avant de goûter une seule goutte. Ce nuage parfumé est la soupe qui s'annonce."
    }
  ]
};
