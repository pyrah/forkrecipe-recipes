export default {
  "repoId": "master_italian_amatriciana_001",
  "parentRepoId": null,
  "slug": "amatriciana",
  "author": "ForkRecipe Kitchen",
  "title": "Pasta all'Amatriciana",
  "description": "La sauce d'Amatrice — guanciale rendue jusqu'à ambre et crépitant dans sa propre graisse, déglacée avec du vin blanc, tomates San Marzano ajouté et réduit à un feu, lécher de porc qui s'accroche au bucatini dans des feuilles rouge rouille, couronné de Pecorino Romano assez tranchant pour couper toute cette richesse.",
  "cuisine": "Italien",
  "culture": "Roman-Amatrice",
  "category": "grains",
  "tags": [
    "Italien",
    "pâtes",
    "romaine",
    "tomates",
    "produits laitiers inadaptés"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 2,
    "bitter": 1,
    "umami": 5,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Bucatini",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "Rigatoni",
        "Spaghetti"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Guanciale (douleur de porc, coupée en lardons ou gros bâtons)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "pancetta — utiliser la même quantité et la même méthode"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Tomates de San Marzano (crues à la main à partir d'une boîte de 400 g)",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "tomates à plumes mûres de vigne, pelées et ensemencées"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Solvent",
      "name": "Vin blanc sec",
      "ratioValue": 100,
      "defaultUnit": "ml",
      "substitutions": [
        "Vermouth sec",
        "un jet d'eau de cuisson de pâtes pour déglacer à la place"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Pecorino Romano (finement râpé, pour la finition)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "Grana Padano pour une finition plus douce"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Flacons de piment rouge séché (ou 1 petit peperoncino séché, émietté)",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "frais petit piment rouge, finement tranché"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Poivre noir (grosement craqué)",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Eau de cuisson des pâtes (réservée, féculente)",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rendu",
      "inputs": [
        "ing_02"
      ],
      "outputState": "rendered_guanciale",
      "instructions": "Placez la guanciale dans une poêle froide, sèche et lourde, une grande casserole ou poêle fonctionne bien. Mettre à feu moyen-doux et cuire lentement, en remuant de temps en temps, pendant 8-10 minutes jusqu'à ce que la graisse s'éteigne complètement et que les morceaux soient dorés, ambres et légèrement croquants, mais qui donnent toujours au centre. La guanciale libère sa graisse lentement — en commençant par une poêle froide permet à la graisse de se liquéfier progressivement et d'enrober les morceaux uniformément au moment de la cuisson. Enlevez la guanciale avec une cuillère à fentes, laissant toute la graisse rendue dans la poêle.",
      "visualCue": {
        "primaryTarget": "Les guanciales dorées sont assises dans une généreuse piscine de graisse d'or clair et pâle, semi-translucide, scintillement, sentant sucrément le porc guéri.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La guanciale est encore pâle et floppée, la graisse est généralement non livrée et les morceaux sont assis dans une casserole presque sèche.",
            "action": "Continuer la cuisson à feu moyen-doux. Vous avez besoin de la graisse rendue pour construire la sauce et faire frire le piment — sous la guanciale vous laisse sans la graisse nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Batons à crampons avec un léger indice au centre, assis dans une généreuse piscine de graisse claire et ambre. L'arôme est doux, porcin et chaud.",
            "action": "Enlever la guanciale dans une assiette. Gardez toute la graisse dans la poêle."
          },
          {
            "state": "Overdone",
            "description": "Guanciale est sombre et dure, la graisse commence à brunir et à fumer, sentant vif et acride.",
            "action": "Retirer immédiatement la guanciale et verser la graisse dans un bol, laissant le fond brûlé derrière. Essuyer la casserole et utiliser la graisse versée pour continuer."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau de guanciale entre les doigts — il devrait se compresser légèrement et ressortir partiellement, comme des lardons bien cuits. Complètement rigide chips signifie qu'il a trop rendu et sera difficile dans le plat final."
    },
    {
      "nodeId": "step_2",
      "action": "Déglacer",
      "inputs": [
        "rendered_guanciale",
        "ing_06",
        "ing_04"
      ],
      "outputState": "wine_and_chilli_base",
      "instructions": "Ajouter les flocons de piment à la graisse guanciale dans la poêle à feu moyen et remuer pendant 30 secondes jusqu'à ce que le piment fleurisse dans la graisse — il s'étourdira doucement et la graisse deviendra légèrement rouge-orange. Verser immédiatement le vin blanc et remuer vigoureusement pour dissoudre tout fond et mélanger le piment dans le liquide. Laisser le vin réduire de moitié sur 2–3 minutes jusqu'à ce que l'odeur d'alcool cru se consume et est remplacée par un parfum moelleux et légèrement fruité.",
      "visualCue": {
        "primaryTarget": "Le vin a réduit à environ la moitié de son volume d'origine et a pris une faible teinte orange-rouge du piment. Il sent le fruit chaud, moelleux et la guanciale, avec une faible note d'épice.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le vin est encore à plein volume et sent fortement l'alcool. Le piment est encore cru et dur dans la vapeur.",
            "action": "Continuez à mijoter — l'alcool doit être cuit ou la sauce finie aura un goût dur et alcooleux."
          },
          {
            "state": "Perfect",
            "description": "Diminution de moitié, le liquide est un léger orange ambré et sent doux, fruité et légèrement épicé. Pas d'alcool dans la vapeur.",
            "action": "Ajouter les tomates de San Marzano écrasées et retourner la guanciale."
          },
          {
            "state": "Overdone",
            "description": "Le vin est réduit à presque rien, laissant un concentré de piment-graisse au fond de la poêle qui peut commencer à brûler.",
            "action": "Ajouter les tomates immédiatement avant les résidus."
          }
        ]
      },
      "feelCue": "Penchez-vous au-dessus de la poêle et respirez lentement après 2 minutes — au moment où la vapeur d'alcool ne pique plus vos sinus et est remplacée par un parfum doux et chaud de fruits, le vin est prêt pour les tomates."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "wine_and_chilli_base",
        "ing_03"
      ],
      "outputState": "amatriciana_sauce",
      "instructions": "Écraser les tomates San Marzano à travers les doigts dans la poêle, les garder en morceaux rugueux et irréguliers plutôt qu'en purée lisse. Remettez la guanciale dans la poêle. Mélangez bien, puis laissez la sauce mijoter à feu moyen pendant 12 à 15 minutes, en remuant occasionnellement, jusqu'à ce que les tomates se décomposent, que la sauce s'épaississe jusqu'à ce qu'elle soit riche et rouge rouille, et que la graisse de la guanciale commence à flotter en gouttelettes orange à la surface, signe de concentration adéquate.",
      "visualCue": {
        "primaryTarget": "Une sauce riche rouge rouille qui s'est épaissie à la consistance du revêtement, avec les morceaux de guanciale visibles et la surface montrant des taches de gras rouge orange qui ont séparé de la sauce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore fine et rouge vif, avec une texture aqueuse et une acidité de tomate brute et nette dominant le goût.",
            "action": "Continuez à mijoter à découvert. La sauce a besoin de temps pour l'eau dans les tomates pour s'évaporer et les arômes pour se concentrer et unifier."
          },
          {
            "state": "Perfect",
            "description": "Rouille-rouge, assez épaisse pour s'accrocher à l'arrière d'une cuillère, avec guanciale répartie à travers et les gouttelettes de graisse orange à la surface. Goûte profondément salé, porcin et légèrement épicé: la tomate est douce et douce, non pointue.",
            "action": "C'est prêt pour que les pâtes soient jetées directement."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite à une pâte très épaisse et concentrée qui colle à la poêle — trop épaisse pour enrober les pâtes de façon uniforme sans accroupir.",
            "action": "Ajouter une éclaboussure de l'eau de cuisson des pâtes pour la desserrer dans un fluide, consistance de revêtement."
          }
        ]
      },
      "feelCue": "Plonger une cuillère et la tenir inclinée — la sauce devrait tomber dans des gouttes lentes et épaisses plutôt que de couler comme de l'eau ou de s'accrocher complètement comme une pâte. Cette goutte lente est la bonne consistance pour le revêtement du bucatini."
    },
    {
      "nodeId": "step_4",
      "action": "Mélanger",
      "inputs": [
        "amatriciana_sauce",
        "ing_01",
        "ing_08",
        "ing_07"
      ],
      "outputState": "sauced_bucatini",
      "instructions": "Faire cuire le bucatini dans de l'eau bouillante fortement salée à l'écart de l'al dente (1–2 minutes de moins que le paquet dit). Réserver 120 ml d'eau de cuisson féculente avant l'égouttage. Transférer les pâtes directement dans la sauce à l'aide de pinces, en apportant de l'eau de cuisson naturellement. Ajouter une éclaboussure d'eau réservée et mélanger vigoureusement à feu moyen pendant 1 à 2 minutes jusqu'à ce que les pâtes terminent la cuisson dans la sauce et que la sauce s'accroche à chaque tube. Ajouter plus d'eau au besoin — la sauce doit être enrobée et non pas une piscine. Terminer par un broyage de poivre noir.",
      "visualCue": {
        "primaryTarget": "Bucatini enrobé d'une sauce rouge rouille brillante, avec des morceaux de guanciale distribués dans l'ensemble et la sauce ni mise en commun au fond de la poêle ni trop sèche et collante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pâtes sont encore trop fermes et la sauce n'est pas enrobée — elle glisse du bucatini dans une fine piscine.",
            "action": "Verser sur une chaleur plus élevée pendant une autre minute, en ajoutant une éclaboussure d'eau de pâtes. L'amidon de l'eau aidera la sauce à se lier aux pâtes."
          },
          {
            "state": "Perfect",
            "description": "Chaque tube de bucatini est laqué dans une sauce rouge rouille brillante. La guanciale est distribuée partout. La sauce s'accroche et les pâtes ont une bouchée agréable et ferme.",
            "action": "Retirer du feu et diviser immédiatement en bols chauds."
          },
          {
            "state": "Overdone",
            "description": "Les pâtes ont absorbé toute la sauce et le mélange est sec et collé à la poêle, sans revêtement brillant laissé.",
            "action": "Ajouter plus d'eau de pâtes immédiatement et mélanger pour réémulsionner. Une cuillère à soupe de la graisse guanciale peut également aider à restaurer le gloss."
          }
        ]
      },
      "feelCue": "Soulever un brin de bucatini avec des pinces et le regarder retomber dans la poêle — il devrait être enduit de sauce et tomber librement sans accroupir, traînant un fil de sauce rouge rouille qui casse proprement."
    },
    {
      "nodeId": "step_5",
      "action": "Dresser",
      "inputs": [
        "sauced_bucatini",
        "ing_05"
      ],
      "outputState": "finished_amatriciana",
      "instructions": "Divisez les pâtes en bols chauds. Éparpiller une quantité généreuse de Pecorino Romano finement râpé sur chaque portion — il devrait suffire de voir comme une couche visible et neigeuse sur la sauce. Le fromage s'assouplira et fondra en partie dans les pâtes chaudes, fournissant un contrepoint vif et salé à la sauce riche et grasse. Servir immédiatement. Pas d'huile, de crème ou de beurre. Le plat est complet.",
      "visualCue": {
        "primaryTarget": "Un enchevêtrement rouge rouille de bucatini dans des bols profonds, aspergé d'une couche visible de Pecorino blanc, les morceaux de guanciale visibles partout, et la sauce scintille entre les brins.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Trop peu de Pecorino — le fromage à peine visible et la sauce goûte plat et trop sucré sans la netteté pour couper à travers la richesse.",
            "action": "Ajouter encore du fromage. Amatriciana est généreuse avec le Pecorino — ce n'est pas une légère poussière mais un revêtement approprié qui fournit à la fois sel et saveur."
          },
          {
            "state": "Perfect",
            "description": "Une neige visible et généreuse de Pecorino sur la sauce rouge rouille et les pâtes. La première bouchée est une expérience de saveur complète : guanciale porcine, tomate vive, fromage salé vif, feu doux de piment.",
            "action": "Mangez immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le Pecorino a été brassé dans la sauce par le feu et s'est emparé dans des cordes caoutchouteuses plutôt que d'enrober les pâtes en douceur.",
            "action": "Ajouter le Pecorino hors du feu, ou le disperser à la table — ne jamais le remuer dans la sauce chaude sur une flamme."
          }
        ]
      },
      "feelCue": "Prenez la première bouchée et faites attention à la séquence: le bucatini creux capture la sauce à l'extérieur et à l'intérieur du tube — vous devriez goûter la sauce porcine d'abord, puis le coup aigu de Pecorino, puis la chaleur subtile du bâtiment de piment à l'arrière du palais."
    }
  ]
};
