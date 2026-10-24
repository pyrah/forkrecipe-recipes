export default {
  "repoId": "master_vietnamese_pho-broth_001",
  "parentRepoId": null,
  "slug": "pho-broth",
  "author": "ForkRecipe Kitchen",
  "title": "Pho Broth",
  "description": "L'âme du pho bo — des os de bœuf mijotés pendant des heures dans un bouillon ambre cristallin, parfumé d'oignon carbonisé et de gingembre et un poing d'épices grillées, puis équilibré sur le bord d'un couteau de sauce de poisson. Propre, aromatique, et trompeur profondément.",
  "cuisine": "Vietnamiens",
  "culture": "Hanoï",
  "category": "stocks",
  "tags": [
    "pho",
    "vietnamese",
    "boeuf",
    "bouillon",
    "stock",
    "aromatiques"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "6 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "moelle de boeuf et os de mèche",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "queue d'ox",
        "os des jambes de boeuf"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Poitrine de boeuf ou rondelle (pièce entière)",
      "ratioValue": 30,
      "defaultUnit": "%",
      "substitutions": [
        "Jarret de bœuf"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignons jaunes (chaudés, carbonisés)",
      "ratioValue": 12,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Gingembre frais (entièrement carbonisé)",
      "ratioValue": 6,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Epices entières (anis étoilé, bâton de cannelle, girofles, graines de coriandre, graines de fenouil)",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "mélange d'épices"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "sauce de poisson (nuoc mam)",
      "ratioValue": 4,
      "defaultUnit": "%",
      "substitutions": [
        "sauce soja légère"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Sucre de roche jaune",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "sucre de palme",
        "sucre granulé"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Solvent",
      "name": "Eau froide",
      "ratioValue": 600,
      "defaultUnit": "%",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Feuilles",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_09"
      ],
      "outputState": "blanched_bones",
      "instructions": "Couvrir les os et la viande d'eau froide dans une grande casserole et porter à un ébullition à feu vif. Faire bouillir pendant 5 à 7 minutes — une écume grise et mousseuse éclatera à la surface. Déposer tout dans une calandre, jeter l'eau trouble, et frotter chaque os sous l'eau courante pour enlever toute trace de sang coagulé et de grain. Ce premier lavage brutal est l'étape la plus importante pour un bouillon clair.",
      "visualCue": {
        "primaryTarget": "Les os sont propres et pâles, exempts de toute matière brune ou grise. La casserole frottée est rincée de toutes les ordures avant que la vraie mijot commence.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les os ont encore des poches de sang rouge foncé dans les canaux médullaires et un film brun accroché aux articulations.",
            "action": "Revenez à l'ébullition et continuez à blanchir — la racaille continue de se former activement. Frottez plus vigoureusement."
          },
          {
            "state": "Perfect",
            "description": "Les os sont uniformément pâles et propres. L'eau de rinçage les libère. Pas de mousse qui s'accroche.",
            "action": "Retournez les os et la viande propres dans une casserole propre à l'eau froide fraîche."
          },
          {
            "state": "Overdone",
            "description": "Tu as fait bouillir si longtemps la viande est grise et saupoudrée, mais les os sont propres.",
            "action": "Pas de mal pour le bouillon; les os sont le point ici. Continuez."
          }
        ]
      },
      "feelCue": "L'eau doit sentir cru et métallique que le sang libère — c'est exactement la note que vous retirez maintenant, de sorte que le bouillon final sent seulement du boeuf et des épices."
    },
    {
      "nodeId": "step_2",
      "action": "Objet",
      "inputs": [
        "ing_03",
        "ing_04"
      ],
      "outputState": "charred_aromatics",
      "instructions": "Maintenez les demi-oignons et le gingembre entier directement sur une flamme ouverte, ou placez le côté coupé dans une poêle en fonte sèche à feu vif. Char jusqu'à ce que les surfaces soient noircies et cloquées, 8-10 minutes, tournant ainsi chaque visage prend de la couleur. Ne soyez pas timide, vous voulez du char noir authentique, pas seulement de l'or. Rincer toute cendre libre sous le robinet et laisser le reste.",
      "visualCue": {
        "primaryTarget": "Les moitiés de l'oignon et le gingembre sont profondément noircis sur chaque surface, doux et s'effondrent légèrement, libérant un arôme doux, fumé, presque barbecue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les surfaces sont dorées ou légèrement dorées sans véritable noir. L'arôme est brut et vif plutôt que fumé-douce.",
            "action": "Maintenez-les sur la chaleur — la profondeur fumée de pho provient entièrement de l'omble véritable. Poussez l'or passé dans le noir."
          },
          {
            "state": "Perfect",
            "description": "Peau noire grillée, odeur caramélisée sucrée, gingembre parfumé et adouci. Quelques couches translucides montrant à travers l'omble.",
            "action": "Rincer les cendres et ajouter au bouillon."
          },
          {
            "state": "Overdone",
            "description": "Entièrement incinérée à la cendre grise tout au long de la traversée, avec une odeur amère et amère.",
            "action": "Jeter les morceaux d'asphalte et re-char oignon frais et gingembre — les aromatiques brûlés feront tourner le bouillon amer."
          }
        ]
      },
      "feelCue": "La cuisine doit sentir comme un grill, pas un feu de camp. La fumée douce signifie que vous êtes là; la fumée dure et accrocheuse de la gorge signifie qu'elle se jette dans le feu."
    },
    {
      "nodeId": "step_3",
      "action": "Faire griller",
      "inputs": [
        "ing_05"
      ],
      "outputState": "toasted_spice",
      "instructions": "Faire cuire l'anis étoile, la cannelle, les girofles, la coriandre et le fenouil dans une poêle sèche à feu moyen, en tremblant constamment pendant 3-4 minutes jusqu'à ce que les graines commencent à s'odorer et que les graines commencent à éclater. Ne les laissez pas fumer. Attachez les épices dans un petit sac de mousseline ou un paquet de fromage afin qu'elles puissent être levées proprement plus tard.",
      "visualCue": {
        "primaryTarget": "Les épices sont chaudes, brillantes avec leurs propres huiles libérées, et intensément parfumées — cannelle douce et anis de réglisse remplissant la pièce. La coriandre et le fenouil ont obscurci une ombre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épices sentent plat et poussiéreux; les graines sont encore pâles et silencieuses dans la poêle.",
            "action": "Continuez à griller et à trembler — vous attendez le premier crépitement et la floraison de l'arôme."
          },
          {
            "state": "Perfect",
            "description": "Parfum loud, quelques graines éclatantes, épices une ombre plus foncée et huileuse.",
            "action": "Astuce dans un sac d'épices et attache-le fermé."
          },
          {
            "state": "Overdone",
            "description": "Wisps de fumée, un bord acride coupant à travers la douceur, girofles devenant noir.",
            "action": "Jeter et re-toast frais — épice brûlée fait un bouillon dur et médicinal."
          }
        ]
      },
      "feelCue": "Toasting réveille les huiles volatiles — vous devriez pouvoir sentir le sac d'épices de l'autre côté de la pièce avant qu'il ne touche jamais l'eau."
    },
    {
      "nodeId": "step_4",
      "action": "Mijoter",
      "inputs": [
        "blanched_bones",
        "charred_aromatics",
        "toasted_spice",
        "ing_09"
      ],
      "outputState": "infused_broth",
      "instructions": "Couvrez les os et la viande propres avec de l'eau froide fraîche et faites mijoter à nu — jamais ébullition. Ajouter l'oignon carbonisé et le gingembre et le sac d'épices. Maintenez à la plus douce mijoter, surface à peine frissonnante, pendant 4-6 heures. Mousse d'écrèmege et graisse de surface toutes les 20-30 minutes pendant la première heure. Tirez la poitrine à 90 minutes une fois qu'elle est tendre (sauvez-la pour la trancher dans les bols); laissez les os continuer. Garnir d'eau chaude si le niveau tombe sous les os.",
      "visualCue": {
        "primaryTarget": "Un bouillon ambré clair et brillant avec seulement une bulle paresseuse ou deux brisant la surface toutes les quelques secondes. Un mince éclat de graisse dorée, le reste s'enfuit. Arôme profond et épicé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est pâle, mince et aqueux; il sent l'épice, mais n'a pas encore de corps ou de colonne vertébrale.",
            "action": "Continuez à mijoter. Collagène et goût ont besoin d'heures — il n'y a pas de raccourci. Assurez-vous que le sac d'épices est toujours dedans."
          },
          {
            "state": "Perfect",
            "description": "Gloire, ambre clair. Les lèvres se sentent légèrement collantes de la gélatine. Le bouillon goûte profondément de bœuf enveloppé d'épices chaudes et d'omble doux.",
            "action": "Retirer le sac d'épices, l'oignon, le gingembre et les os. Plongez dans un bon tamis."
          },
          {
            "state": "Overdone",
            "description": "Broth est devenu nuageux et l'épice est devenue trop puissante et amère, dominant le boeuf.",
            "action": "Un ébullition dur a émulsifié la graisse — le trouble ne peut pas être défait, mais tirer le sac d'épices maintenant et diluer avec de l'eau chaude pour apprivoiser l'épice."
          }
        ]
      },
      "feelCue": "Touchez une cuillère refroidie à vos lèvres — quand elle se sent légèrement collante et que vos lèvres veulent rester ensemble, les os ont abandonné leur gélatine et le bouillon a le corps."
    },
    {
      "nodeId": "step_5",
      "action": "Assaisonner",
      "inputs": [
        "infused_broth",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_broth",
      "instructions": "Retourner le bouillon tendu dans le pot à feu doux. Assaisonner avec de la sauce de poisson, du sucre de roche et du sel, en ajoutant par étapes et en dégustant au fur et à mesure. Le but est un bouillon salé avec un murmure de douceur et un umami profond hum — il devrait goûter un peu plus fort que vous siroter sur son propre, parce que les nouilles de riz et le boeuf cru le diluera dans le bol. Régler jusqu'à équilibrer.",
      "visualCue": {
        "primaryTarget": "Un bouillon d'ambre clair et profondément salé qui sent le bœuf, l'anis et l'omble, avec un funk propre au poisson qui reste sous et le sucre arrondi à chaque bord.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le broth a un goût plat, aqueux ou unidimensionnel : la profondeur et la rondeur savoureuses ne sont pas là.",
            "action": "Ajouter la sauce de poisson une cuillère à soupe à la fois pour l'umami et le sel; ajouter le sucre de roche en petits morceaux pour le arrondir. Goûtez entre chacun."
          },
          {
            "state": "Perfect",
            "description": "Savory-avant avec une colonne vertébrale équilibrée, une douceur faible, et une longue finale umami. Goûte affirmée dans la cuillère, sachant que les nouilles vont la fondre.",
            "action": "Déposer sur les nouilles de riz, le boeuf haché cru et les herbes. Servez les cris chauds."
          },
          {
            "state": "Overdone",
            "description": "Agressivement salé ou fortement poissonneux, la sauce de poisson criant sur le boeuf.",
            "action": "Ajouter l'eau chaude (ou le bouillon réservé non salé) pour diluer, puis rééquilibrer avec une touche de sucre. Le sel ne peut pas être enlevé, seulement dilué."
          }
        ]
      },
      "feelCue": "Assaisonner pour le bol, pas la cuillère — le bouillon devrait goûter un encoche trop gras sur lui-même, parce que les nouilles froides et le boeuf cru que vous versez dessus le tirera droit dans l'équilibre."
    }
  ]
};
