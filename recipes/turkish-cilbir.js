export default {
  "repoId": "master_turkish_turkishcilbir_001",
  "parentRepoId": null,
  "slug": "turkish-cilbir",
  "author": "ForkRecipe Kitchen",
  "title": "Turquie",
  "description": "Des œufs pochés drapés sur du yaourt ailé froid et noyés dans du beurre rouge d'Alep — un plat ottoman du XVe siècle qui transforme le petit déjeuner en théâtre avec sa collision de froid, chaud, brillant et fumé.",
  "cuisine": "Turquie",
  "culture": "Ottoman",
  "category": "eggs",
  "tags": [
    "œufs",
    "végétarien",
    "Sans gluten",
    "turc",
    "braconniers",
    "yaourt",
    "beurre"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 3,
    "bitter": 0,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Yogourt grec plein gras (température ambiante)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "labneh éclairci avec un peu d'eau"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Gousse d'ail hachée à la pâte",
      "ratioValue": 1,
      "defaultUnit": "clove",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Protein",
      "name": "Gros œufs (très frais)",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Vin blanc (pour l'eau de braconnage)",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre blanc distillé"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "bonne huile d'olive pour une version lighter"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poivre d'Alep",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": [
        "Mélange : 2 parties paprika douce + 1 partie cayenne"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Frondes fraîches d'aneth",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "menthe fraîche",
        "menthe séchée frottée entre les palmiers"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saison",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "garlic_yogurt",
      "instructions": "Couper l'ail en pâte lisse avec le couteau plat et une pincée de sel — hacher, puis frotter et faire glisser la lame à plusieurs reprises jusqu'à ce qu'il ne reste plus de morceaux. Incorporer le yogourt avec le sel restant. Battre jusqu'à ce que complètement lisse. Le yogourt doit être à température ambiante avant de servir — le yogourt froid sur les œufs chauds crée un choc thermique désagréable et mute l'ail. Étalez-la sur l'assiette maintenant et laissez-la tempérer pendant que vous braconnez les œufs.",
      "visualCue": {
        "primaryTarget": "Un yogourt uniformément lisse, blanc vif, tartiné sans grumeaux, légèrement piquant avec de l'ail cru.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les morceaux d'ail sont visibles dans le yogourt. La pâte n'a pas été assez bien travaillée.",
            "action": "Appuyez sur l'ail à la place dans un fin grat et re-stirez."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, blanc ivoire, avec un arôme d'ail propre qui est piquant mais pas acride. Tenir un tourbillon lorsqu'il est étalé.",
            "action": "Étaler sur les assiettes de service et laisser venir à la température ambiante."
          },
          {
            "state": "Overdone",
            "description": "Le yogourt a été surstiré et est devenu mince et écoulement, ou l'ail est oxydant et sent dur.",
            "action": "Ajouter une cuillère de yaourt frais à épaissir. La saveur sera bonne."
          }
        ]
      },
      "feelCue": "Le yogourt devrait être assez épais pour tenir la trace d'un couteau qui s'étend — une résistance douce et oreiller qui tient forme sans être raide."
    },
    {
      "nodeId": "step_2",
      "action": "Pochette",
      "inputs": [
        "ing_04",
        "ing_05"
      ],
      "outputState": "poached_eggs",
      "instructions": "Remplissez une grande casserole d'au moins 8 cm d'eau. Ajouter le vinaigre de vin blanc — l'acide resserre le blanc d'œuf autour du jaune. Porter à un peu en dessous d'une mijot : de petites bulles montant du fond, la surface tremblant à peine à 80-85°C. Casser chaque oeuf individuellement dans une petite tasse. Créez un tourbillon doux dans l'eau avec une cuillère. Faites glisser un œuf au centre du tourbillon; la rotation enveloppe le blanc autour du jaune. Faire cuire 3-3.5 minutes pour un jaune d'écoulement. Retirez avec une cuillère à fente, épluchez le dessous sur un chiffon plié et placez-le directement sur le yaourt.",
      "visualCue": {
        "primaryTarget": "Un ovale de blanc set, soigneusement rassemblé autour d'un jaune bombé et agité — pas de vrilles râpées de blanc, pas de teinte grise.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le blanc est translucide ou gelée autour du jaune, qui est encore complètement liquide sous une membrane mince.",
            "action": "Retourner à l'eau pendant 60 à 90 secondes. Le blanc doit être complètement opaque et tenir ensemble."
          },
          {
            "state": "Perfect",
            "description": "Le blanc est entièrement réglé et tendre, pas caoutchouteux. Le dôme de jaune grince doucement quand la cuillère est déplacée. Forme compacte, arrondie.",
            "action": "Bloquez doucement avec du papier de cuisine et placez immédiatement sur le yaourt."
          },
          {
            "state": "Overdone",
            "description": "Yolk est pâle, mat et ferme. Le blanc est dur et criant. L'œuf a été entièrement cuit.",
            "action": "Servir de toute façon — le beurre d'Alep masque une multitude de péchés — mais la prochaine fois baisser la chaleur et réduire le temps."
          }
        ]
      },
      "feelCue": "Soulevez l'œuf à l'aide d'une cuillère à fentes et moudre délicatement le jaune avec un bout de doigt — il devrait trembler comme un ballon d'eau douce. Le blanc devrait tenir sa forme sans déchirer."
    },
    {
      "nodeId": "step_3",
      "action": "Sear",
      "inputs": [
        "ing_06",
        "ing_07"
      ],
      "outputState": "aleppo_butter",
      "instructions": "Dans une petite casserole ou plus chaude au beurre, faire fondre le beurre à feu moyen jusqu'à ce qu'il mousse. Au moment où la mousse s'abaisse et que le beurre devient une ambre d'or profond, retirez du feu et ajoutez immédiatement le poivre d'Alep – il crèvera et fleurira dans la graisse chaude. Tourne la poêle. Travail rapide : la chaleur résiduelle continue à cuire le beurre et Alep brûle rapidement. Le beurre devrait tourner un orange rouge vif et sentir fumée, sucrée et parfumée.",
      "visualCue": {
        "primaryTarget": "Un beurre rouge brique vif à orange foncé tourbillonnant dans la poêle, libérant des panaches de parfum d'Alep fumé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est jaune pâle et l'Alep flotte sur le dessus, pas fleuri — semble huileux et non intégré.",
            "action": "Revenez au feu pendant 20 secondes jusqu'à ce que le beurre devienne doré avant d'ajouter le poivre."
          },
          {
            "state": "Perfect",
            "description": "Un beurre riche et orange brique avec le poivre complètement dissous. Sensation profonde de chile rôti et de solides de lait brun.",
            "action": "Verser immédiatement sur les œufs — il doit continuer pendant qu'il fait très chaud pour étourdir considérablement au contact."
          },
          {
            "state": "Overdone",
            "description": "Le beurre est brun foncé et l'Alep est devenu noir et acride. Des odeurs brûlées.",
            "action": "Jeter et recommencer: le beurre brûlé est irréversible et ruinera le plat."
          }
        ]
      },
      "feelCue": "Quand Alep frappe le beurre, le grésil doit être aiguisé et dramatique, c'est - à - dire un bref craquage aromatique qui remplit la cuisine d'une chaleur de poivre rouge."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "garlic_yogurt",
        "poached_eggs",
        "aleppo_butter",
        "ing_08"
      ],
      "outputState": "finished_cilbir",
      "instructions": "Les œufs sont déjà sur le yaourt. Verser le beurre d'Alep directement sur les œufs et le yogourt — il s'infiltrera dans le yogourt blanc, créant des rivières de rouge profond. Scatter frondes d'aneth frais sur tout. Servir immédiatement avec du pain plat chaud ou du pain blanc croustillant sur le côté pour scooping. Le contraste de température est tout le point: yaourt froid sous, oeuf chaud au-dessus, beurre grésillant en cascade.",
      "visualCue": {
        "primaryTarget": "Le yogourt blanc strié de beurre rouge brillant, un œuf poché pâle au centre, des frondes d'aneth vives dispersées à travers — un plat graphique de contraste élevé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre s'est déjà refroidi et légèrement congelé sur le yogourt avant de verser. Pas de vertige au contact.",
            "action": "Réchauffer le beurre jusqu'à ce qu'il soit liquide et chaud, puis verser. Le drame thermique est essentiel au plat."
          },
          {
            "state": "Perfect",
            "description": "Le beurre chaud étourdit audiblement car il frappe le yaourt frais. Le contraste rouge et blanc est vif. L'aneth est vert vif et frais. La vapeur s'élève de l'œuf.",
            "action": "Servir dans les 30 secondes."
          },
          {
            "state": "Overdone",
            "description": "Dish s'est assis trop longtemps. Le yogourt s'est réchauffé et éclairci, le beurre s'est trempé et a disparu dans le yogourt.",
            "action": "Servir immédiatement — ce plat n'attend pas."
          }
        ]
      },
      "feelCue": "La première cuillère devrait livrer du yogourt froid, de l'œuf chaud et une lécher de beurre épicé simultanément — trois températures en une seule bouche est la signature."
    }
  ]
};
