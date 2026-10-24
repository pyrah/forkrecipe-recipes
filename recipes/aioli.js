export default {
  "repoId": "master_spanish_aioli_001",
  "parentRepoId": null,
  "slug": "aioli",
  "author": "ForkRecipe Kitchen",
  "title": "Aioli",
  "description": "Le vrai tout i oli — l'ail et l'huile et rien d'autre, pilonné dans un mortier jusqu'à ce que les girofles se rendent et tirent un jet d'huile d'olive dans une pâte rigide, mate, ivoire qui se tient dans le pestle et sonne le bol avec la chaleur verte crue de la Méditerranée.",
  "cuisine": "Espagnol",
  "culture": "Catalan",
  "category": "condiments",
  "tags": [
    "Aïoli",
    "Tous-i-oli",
    "Ail",
    "émulsion",
    "catalan",
    "végétalien",
    "mortier"
  ],
  "difficulty": 3,
  "activeTime": "20 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 1,
    "bitter": 1,
    "umami": 0,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Allium",
      "name": "Girofles d'ail frais (firmes, sans germe vert)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "Ail de printemps pour une sauce plus douce et plus verte"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Sel flocé, fin broyé"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile d'olive légère (ou partie extra-vierge)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "olive moitié douce, huile moitié neutre pour une finition plus douce"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Citrus",
      "name": "Jus de citron frais (facultatif, pour relâcher)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "quelques gouttes de vinaigre de vin blanc doux"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Jaune d'œuf (assurance facultative, durée de la chambre)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "omit entièrement pour un traditionnel sans oeuf tout i oli"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Livre",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "garlic_paste",
      "instructions": "Halte chaque girofle et efface tout germe vert au centre – il est amer et aiguise la sauce. Déposez l'ail dans un lourd mortier avec le sel et la livre, puis moudre en ronds, en travaillant le pilon contre la paroi du bol. Le sel est abrasif, qu'il déchiquete l'ail pour vous. Continuer à passer le point de regarder fait jusqu'à ce que vous avez une pâte complètement lisse, collante, légèrement translucide sans fibres visibles.",
      "visualCue": {
        "primaryTarget": "Une pâte glosseuse et dorée qui s'accroche au pilon et frotte à travers le mortier comme du plâtre humide, sans morceaux ni fibres à cordes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est toujours en croûtes et petits copeaux, mouillés mais grumelés, qui glissent autour du mortier.",
            "action": "Continuez à frapper et à broyer dans des cercles fermes. Le sel fait la coupe — donnez-lui le temps de briser complètement les parois cellulaires ou l'émulsion refusera de tenir."
          },
          {
            "state": "Perfect",
            "description": "Une pâte uniforme, collante, légèrement translucide qui tire dans un mince film vers le haut du côté du mortier et sent piquant et doux à la fois.",
            "action": "Vous avez votre base. Commencez à ajouter de l'huile littéralement goutte à goutte pendant le broyage."
          },
          {
            "state": "Overdone",
            "description": "La pâte sent acride et durement sulfureuse, presque chaude dans le nez, d'un concassage prolongé très agressif.",
            "action": "Il émulsionnera encore, mais s'attendra à une sauce féroce. Penchez-vous sur le citron en option à la fin pour arrondir la brûlure."
          }
        ]
      },
      "feelCue": "Sous le pilon, l'ail passe d'une résistance glissante à l'éboulement à une traînée lisse et collante qui accroche la pierre. Vos yeux vont arroser — c'est l'allicine qui tire, et exactement ce que vous voulez."
    },
    {
      "nodeId": "step_2",
      "action": "Émulsifier",
      "inputs": [
        "garlic_paste",
        "ing_05",
        "ing_03"
      ],
      "outputState": "loose_emulsion",
      "instructions": "Si vous utilisez le jaune en option pour l'assurance, travaillez-le en douceur dans la pâte d'ail maintenant. Alors commencez le pétrole — et c'est tout le jeu. Ajoutez-le une seule goutte, puis un mince filet à la fois, broyant le pestle dans des cercles stables toujours dans la même direction. Ne vous pressez pas. La pâte blanchit et épaissit avec chaque addition. Seulement une fois qu'il est visiblement épais et pâle et a accepté peut-être un tiers de l'huile peut vous verser dans un flux lent, crayon-fin, toujours broyage sans pause.",
      "visualCue": {
        "primaryTarget": "Une crème épaississante et pâle-ivorieuse qui devient plus raide et plus légère à chaque goutte, tenant les marques tourbillonnantes du pestle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est lâche, jaune et huileux, glissant plutôt que grippant, avec pooling d'huile séparément.",
            "action": "Arrêtez d'ajouter de l'huile immédiatement. Grind dur jusqu'à ce que ce qui est dans le mortier se retire et s'épaississe, puis reprendre la chute à la goutte. Tu as ajouté de l'huile plus vite que l'ail."
          },
          {
            "state": "Perfect",
            "description": "Une crème pâle, mate, mayonnaise-épaisseur grimpant le pestle, s'éclaircissant vers le blanc, qui tient un sentier clair quand le pestle se lève.",
            "action": "Continuez à diffuser du pétrole lentement. Regardez l'épaisseur — vous construisez vers une pâte qui se tiendra sur elle - même."
          },
          {
            "state": "Overdone",
            "description": "La crème s'affaiblit soudainement, semble grasse et caillé, et l'huile pleure à la surface — l'émulsion s'est brisée.",
            "action": "Encrassez-le dans une cruche. Commencer une cuillère à café fraîche de pâte d'ail (ou un jaune propre) dans le mortier et arroser la sauce cassée à nouveau lentement pour reconstruire."
          }
        ]
      },
      "feelCue": "Écouter le pestle : un aspirateur humide, gifler le son signifie que l'émulsion est serrée et heureuse. Un silence mince et étouffant signifie trop d'huile libre — arrêtez - le et rectifiez - le avant d'ajouter plus."
    },
    {
      "nodeId": "step_3",
      "action": "Monter",
      "inputs": [
        "loose_emulsion",
        "ing_03",
        "ing_04"
      ],
      "outputState": "finished_aioli",
      "instructions": "Continuer à couler dans le reste de l'huile, plus vite maintenant que l'émulsion est forte, jusqu'à ce qu'elle soit toute incorporée et que la sauce soit assez dense pour se tenir debout dans le mortier dans un pic doux. Goûte. Quelques gouttes de jus de citron relâcheront un aioli trop raide et illumineront l'ail; ajouter le sel seulement si elle en a besoin. Servir immédiatement, bombé dans le mortier, à côté de la viande grillée, du riz ou du pain — c'est à son plus parfumé le moment où il est fait.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse, blanc ivoire si rigide qu'elle tient un pic debout et un frottis tire nettoyer une cuillère, brillant où le pilon l'a lissé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'aioli est la texture de la mayonnaise lâche — versable, non debout — et a un goût d'huile.",
            "action": "Mouiller dans un peu plus d'huile pour construire le corps, et aiguiser avec quelques gouttes de citron et une pincée de sel pour réveiller la saveur."
          },
          {
            "state": "Perfect",
            "description": "Une pâte dense, mate, pâle qui se tient dans un pic, goûts d'ail pur et d'huile d'olive verte, féroce mais équilibrée, avec une longue finale chaude.",
            "action": "Arrête. Servir immédiatement à la température ambiante; couvrir la surface si elle doit attendre, mais il est préférable dans l'heure."
          },
          {
            "state": "Overdone",
            "description": "Il est si raide qu'il est presque cireux et s'écroule aux bords plutôt que de frotter, et l'ail se lit comme dur.",
            "action": "Allongez-vous avec une cuillère à café d'eau froide ou de jus de citron, en travaillant doucement jusqu'à ce qu'elle coule à nouveau."
          }
        ]
      },
      "feelCue": "Un tout fini i oli saisit la cuillère et résiste à la traction, avec un étirement élastique faible que vous le soulevez. Sur la langue il doit frapper chaud et piquant, puis se mouiller dans l'amertume fruitée de l'huile — une sauce qui mord d'abord et reste douce."
    }
  ]
};
