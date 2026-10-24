export default {
  "repoId": "master_thai_pad_see_ew_001",
  "parentRepoId": null,
  "slug": "pad-see-ew",
  "author": "ForkRecipe Kitchen",
  "title": "Pad Voir Ew",
  "description": "Larges nouilles plates de riz sautées à la chaleur féroce wok avec l'oeuf, le brocoli chinois, et la sauce de soja sucrée jusqu'à ce que légèrement carbonisé — un plat qui vit ou meurt par le souffle fumant 'wok hei' du feu.",
  "cuisine": "Thaï",
  "culture": "Thai-Chinois",
  "category": "grains",
  "tags": [
    "nouilles",
    "Thaï",
    "sautés",
    "sauce de soja",
    "œuf"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Nouilles de riz (en yai, 2-3 cm de large)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Nouilles de riz larges séchées (poêlées et bouillies)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Poitrine ou cuisse de poulet (mince tranchée) ou tofu ferme",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "porc, bœuf ou crevette"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Œufs (gros)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Gai lan (brocoli chinois, coupé en longueurs de 5 cm)",
      "ratioValue": 35,
      "defaultUnit": "parts",
      "substitutions": [
        "fleurs de brocoli + tiges",
        "broccolini"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail (mincées)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Manis de kécap ou sauce de soja sucré foncé",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce soja foncé + 1 c. à thé sucre"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "sauce à l'huître",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce végétarienne aux huîtres"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "sauce de soja légère",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce de poisson"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile neutre (haute fumée — canola ou graines de raisin)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Sweetener",
      "name": "Sucre (pouce pour équilibrer la sauce)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Assaisonner",
      "inputs": [
        "ing_02",
        "ing_07",
        "ing_08"
      ],
      "outputState": "marinated_protein",
      "instructions": "Couper le poulet en morceaux minces, même de 5 mm d'épaisseur. Ajouter la moitié de la sauce huître et la moitié de la sauce soja légère. Reposez-vous à température ambiante pendant 10 minutes. Mélanger séparément la sauce à l'huître restante, la sauce au soja léger, le soja doux foncé (kecap manis) et le sucre dans un petit bol pour créer la sauce à sauté. Si l'on utilise des nouilles fraîches de riz qui sont froides au réfrigérateur, les séparer doucement à la main et les amener à la température ambiante, les nouilles froides chuteront la température du wok de façon spectaculaire et se traduiront par la vapeur plutôt que par l'épuisement.",
      "visualCue": {
        "primaryTarget": "Les tranches de poulet sont uniformément recouvertes d'un glaçage mince et foncé. Le bol de sauce est un liquide lisse et brun foncé. Les nouilles sont séparées en larges feuilles individuelles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poulet est encore sec et non couché. Les nouilles sont une masse froide et coincée du réfrigérateur.",
            "action": "Jetez le poulet plus soigneusement. Tirez les nouilles à la main doucement — ne déchirez pas — et laissez à température ambiante 15 minutes."
          },
          {
            "state": "Perfect",
            "description": "Le poulet est enduit et le bol de sauce sent profondément salé et sucré. Les nouilles sont souples et séparées par une manipulation douce.",
            "action": "Configurez votre mise en place : tout doit être à portée de main avant que le wok ne se met en chaleur."
          },
          {
            "state": "Overdone",
            "description": "Le poulet a mariné trop longtemps (plus de 30 minutes) et la sauce soja a commencé à raffermir la surface.",
            "action": "Procéder — la texture sera légèrement plus ferme mais la saveur est améliorée."
          }
        ]
      },
      "feelCue": "Les nouilles à température ambiante devraient se sentir soyeuses et légèrement collantes; elles devraient se séparer avec une légère persuasion et non avec force. Ils sont encore trop froids."
    },
    {
      "nodeId": "step_2",
      "action": "Saisir",
      "inputs": [
        "marinated_protein",
        "ing_05",
        "ing_09"
      ],
      "outputState": "seared_protein",
      "instructions": "Chauffer le wok sur la chaleur la plus élevée que votre poêle produit jusqu'à ce qu'il fume visiblement. Ajouter la moitié de l'huile et l'ail haché — il doit faire un tour de tour et d'or en 15 secondes. Ajouter immédiatement le poulet et le répartir en une seule couche. Laissez-le reposer pendant 60 secondes pour développer une couture, puis lancez. Cuire jusqu'à ce qu'il soit cuit, environ 2 à 3 minutes au total. Retirer le poulet du wok et réserver. Le wok doit être de retour à la chaleur maximale avant d'ajouter des nouilles.",
      "visualCue": {
        "primaryTarget": "Les morceaux de poulet ont des marques dorées sur au moins un côté. Pas de rose visible. L'ail est doré mais pas brun foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poulet est gris et à la vapeur, sans brunissement. Wok n'était pas assez chaud.",
            "action": "Enlevez le poulet. Réchauffer le wok au tabac avant de continuer. Travaillez en petits lots."
          },
          {
            "state": "Perfect",
            "description": "Le poulet a des bords caramélisés et une croûte dorée où il a contacté le wok. L'ail est parfumé et doré.",
            "action": "Retirer du wok. Retournez le wok à la chaleur maximale avant d'ajouter des nouilles."
          },
          {
            "state": "Overdone",
            "description": "Le poulet est dur et sec. L'ail est brun foncé et acride.",
            "action": "Jeter l'ail et utiliser le poulet tel qu'il est — le poulet surcuit dans le tampon voir ew est une imperfection commune et largement pardonné par la sauce aux nouilles."
          }
        ]
      },
      "feelCue": "Au moment où le poulet frappe le wok, il devrait y avoir un rugissement de grésillement et une bouffée de fumée parfumée. Toute réponse tiède signifie que le wok est trop froid pour ce plat."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "ing_01",
        "ing_04",
        "ing_09"
      ],
      "outputState": "charred_noodles",
      "instructions": "Retourner le wok à la chaleur maximale et ajouter le reste d'huile. Ajouter les nouilles de riz séparées dans une seule couche autant que possible. NE PAS remuer pendant 60 à 90 secondes — laissez-les s'asseoir directement contre le wok à l'omble et blister légèrement. Ajoutez ensuite les morceaux de gai lan. Mélangez tout 3 à 4 fois avec de longues baguettes ou une spatule wok. Poussez tout d'un côté du wok.",
      "visualCue": {
        "primaryTarget": "Les nouilles ont de légères taches d'omble foncé et des zones cloquées où elles ont contacté le wok. Gai lan est vert vif et légèrement flétri aux extrémités des feuilles, les tiges sont encore croquantes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les nouilles sont blanches pâles sans omble. Gai lan est brut-brillant et rigide. Pas d'arôme de fumée de wok hei.",
            "action": "Laisser les nouilles s'asseoir sans remuer encore 30 à 60 secondes sur la chaleur maximale."
          },
          {
            "state": "Perfect",
            "description": "Les nouilles ont des cloques sombres et caramélisées où elles ont touché le métal. Les tiges de Gai lan sont lumineuses et juste tendres. La cuisine sent ce doux et fumé hei distinctif.",
            "action": "Poussez sur les côtés et ajoutez l'œuf."
          },
          {
            "state": "Overdone",
            "description": "Les nouilles sont brûlées dans l'ensemble, et non tachetées — un goût d'omble amer omniprésent.",
            "action": "Ajouter immédiatement la sauce et l'oeuf pour absorber et équilibrer l'amertume."
          }
        ]
      },
      "feelCue": "À cette chaleur, le wok devrait se sentir près d'un feu de camp. Le son est un rugissement continu. Quand les nouilles collent momentanément et se libèrent avec la spatule, ce court collage est l'omble formant — ne le combattez pas."
    },
    {
      "nodeId": "step_4",
      "action": "Incorporer délicatement",
      "inputs": [
        "charred_noodles",
        "ing_03"
      ],
      "outputState": "noodles_with_egg",
      "instructions": "Videz un espace au centre du wok et crevez les œufs directement dans celui-ci. Laissez les régler pendant 10 à 15 secondes jusqu'à ce que les blancs soient juste opaques aux bords, puis brouillez-les légèrement avec la spatule. Avant qu'ils ne soient entièrement réglés, plier les nouilles sur l'oeuf et mélanger pour que les cords doux distribuent à travers les nouilles. L'oeuf doit être cuit mais encore doux — pas des morceaux d'oeuf brouillés secs.",
      "visualCue": {
        "primaryTarget": "Larges caillés d'oeufs jaune doux tissés visiblement à travers les nouilles foncées. L'œuf est serti mais encore brillant — pas séché ni émietté.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oeuf est encore humide et translucide, glissant autour plutôt que d'être intégré.",
            "action": "Laisser 15 secondes de plus de cuisson avant le pliage – l'oeuf doit être légèrement réglé pour s'intégrer."
          },
          {
            "state": "Perfect",
            "description": "Cords d'oeufs d'or tendres distribués dans l'ensemble, simplement sertis. Les nouilles ont absorbé un peu d'oeuf et semblent soyeuses.",
            "action": "Ajouter la sauce et retourner le poulet."
          },
          {
            "state": "Overdone",
            "description": "L'oeuf est sec, petit, brun émietté, dans les nouilles. Caoutchouc et désagréable.",
            "action": "Continuer — ajouter la sauce rapidement pour rajouter l'humidité."
          }
        ]
      },
      "feelCue": "L'œuf dans le wok doit être fixé avec une résistance douce et induisante, et non le rebond caoutchouteux d'un œuf surcuit. Les caillés doivent tenir leur forme lorsqu'ils sont jetés mais se sentent encore soyeux."
    },
    {
      "nodeId": "step_5",
      "action": "Mélanger",
      "inputs": [
        "noodles_with_egg",
        "seared_protein",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_pad_see_ew",
      "instructions": "Verser la sauce préparée sur les nouilles et les œufs. Retournez le poulet au wok. Mélangez tout vigoureusement pendant 60 secondes jusqu'à ce que la sauce ait enrobé chaque composant et que les nouilles soient uniformément sombres et brillantes. Goûtez et ajustez-vous – le paillasson voit que l'oe doit être surtout sucré du soja foncé avec une colonne vertébrale savorieuse. Assortiment immédiat; les nouilles s'agrippent en refroidissant.",
      "visualCue": {
        "primaryTarget": "Nouilles uniformément sombres et brillantes avec taches d'omble visible. Gai lan est vert émeraude et tendre. Les œufs et le poulet sont intégrés dans l'ensemble. La surface brille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il reste des zones pâles de nouilles — sauce non entièrement distribuée. Le poulet et les nouilles sont en grappes distinctes.",
            "action": "Verser plus vigoureusement et ajouter 1 cuillerée à soupe d'eau si les nouilles collent et s'agrippent."
          },
          {
            "state": "Perfect",
            "description": "Chaque élément est uniformément enduit dans la sauce douce et foncée. Le plat sent la fumée de wok, le soya sucré et les nouilles légèrement carbonisées. La couleur est une acajou profonde et mate.",
            "action": "Assortir immédiatement et servir avec du poivre blanc et des flocons de chili séchés sur le côté."
          },
          {
            "state": "Overdone",
            "description": "Les nouilles se sont cassées en petits morceaux à la suite d'un trop-tout. Frappé et collant.",
            "action": "Servir immédiatement — le jeter encore plus tard l'aggrave. Aucun sauvetage disponible."
          }
        ]
      },
      "feelCue": "Soulevez un paquet de nouilles avec des baguettes — elles devraient draper et tomber dans de larges feuilles séparées plutôt que d'empiler. Les surfaces se sentiront légèrement collantes à partir de la glaçure douce de soja, pas collante."
    }
  ]
};
