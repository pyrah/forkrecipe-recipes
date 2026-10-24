export default {
  "repoId": "master_austrian_porkschnitzel_001",
  "parentRepoId": null,
  "slug": "pork-schnitzel",
  "author": "ForkRecipe Kitchen",
  "title": "Légumes et légumes",
  "description": "La longe de porc pillée comme une page, enrobée de trois couches précises de farine, d'œuf et de chapelure, puis frite dans une vague profonde de beurre clarifié jusqu'à ce que la croûte s'éloigne de la viande dans une coquille de gossamer dorée qui craque sur la première coupe.",
  "cuisine": "Autriche",
  "culture": "Viennese",
  "category": "proteins",
  "tags": [
    "schnitzel",
    "autrien",
    "Viennese",
    "porc",
    "frits",
    "panées",
    "classique"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Coupettes de longes de porc (180 à 200g chacune)",
      "ratioValue": 4,
      "defaultUnit": "cutlets",
      "substitutions": [
        "coupées de cuisses de veau (l'original)",
        "poitrine de poulet, beurré"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Farine à usage général",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Oeufs légèrement battus avec une fourchette (non fouettés)",
      "ratioValue": 3,
      "defaultUnit": "large",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Petites chapelures blanches (pas panko)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "panko fin (produit une croûte plus grossière)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre ou saindoux clarifié",
      "ratioValue": 300,
      "defaultUnit": "ml",
      "substitutions": [
        "un mélange de beurre clarifié et d'huile neutre"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poivre blanc, fraîchement moulu",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "poivre noir"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Citrus",
      "name": "Coins de citron, pour servir",
      "ratioValue": 2,
      "defaultUnit": "wedges",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Livre",
      "inputs": [
        "ing_01",
        "ing_06",
        "ing_07"
      ],
      "outputState": "seasoned_cutlets",
      "instructions": "Placez une découpe entre deux feuilles d'enveloppe plastique ou à l'intérieur d'un sac à fermeture éclair. À l'aide d'un maillet de viande ou du fond d'une poêle lourde, livrez la viande à une épaisseur égale de 3 mm avec des traits fermes et extérieurs — en partant du centre et balayant vers les bords pour s'étirer plutôt que de déchirer la viande. Un schnitzel correctement piqué doit être uniformément mince sur toute sa surface, sans centre épais ni trous déchirés. Assaisonner les deux côtés avec du sel et du poivre blanc, puis laisser reposer 5 minutes à température ambiante afin que le sel commence à attirer l'humidité à la surface.",
      "visualCue": {
        "primaryTarget": "Un voile de porc très mince et presque transparent — la même épaisseur qu'une pièce de monnaie de livre sur toute sa largeur. Le grain de la viande aurait dû être visiblement allongé du pilonnage.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La découpe a encore un centre épais et des bords plus fins. Le porc ressort nettement lorsqu'il est pressé.",
            "action": "Pound les zones épaisses avec des coups directs et fermes. Travaillez le maillet vers l'extérieur du centre. Une découpe de 3 mm ne doit pas revenir du tout."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur uniforme sur toute la surface. Semi-translucide aux points les plus fins. Se couche complètement à plat sans boucle ni ressort.",
            "action": "Assaisonner les deux côtés et laisser reposer 5 minutes avant de panser."
          },
          {
            "state": "Overdone",
            "description": "Le cutlet a des trous ou des larmes de trop-livre. Les bords se sont séparés de la viande.",
            "action": "Patch larmes en pressant les bords à nouveau ensemble. La panure tiendra les petites larmes ensemble pendant la friture."
          }
        ]
      },
      "feelCue": "La découpe fourrée doit se sentir comme un tissu chamois humide lorsqu'elle est retenue — souple et souple, sans ressort ni épaisseur. Pliez un coin sur lui-même: il devrait draper, pas plier avec la résistance."
    },
    {
      "nodeId": "step_2",
      "action": "Drague",
      "inputs": [
        "seasoned_cutlets",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "breaded_cutlets",
      "instructions": "Mettre en place trois plats séparés : la farine dans le premier, les œufs battus dans le second, la chapelure dans le troisième. Travailler une coupe à la fois : première drague dans la farine, presser pour adhérer et secouer chaque grain d'excès — vous voulez un fantôme, poussière légère, pas une couche épaisse. Plongez immédiatement dans l'œuf, laissant l'excédent s'écouler pendant 3 secondes. Couchez - vous dans la chapelure et, de façon critique, n'enfoncez PAS la chapelure dans la viande; dispersez - la au - dessus, et secouez le plateau pour les mettre. Cette miettes lâches et non pressées permet à la croûte de souffler loin de la viande dans la graisse, créant ainsi l'effet de bouffée.",
      "visualCue": {
        "primaryTarget": "Une découpe légèrement, uniformément revêtue avec des miettes s'adhérant lâchement partout. La surface semble mate et irrégulière — pas lisse ou serrée. Les miettes ne doivent pas s'écraser.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des taches d'œuf à la nuque montrant que les miettes n'ont pas adhéré. Des parties de la viande sont visibles par le revêtement.",
            "action": "Saupoudrer les taches nues et agiter doucement le plateau. Ne pressez pas, ce qui annule le revêtement lâche."
          },
          {
            "state": "Perfect",
            "description": "Un manteau uniforme en miettes. Surface légèrement irrégulière. Pas de taches nues et pas de zones où la miette a été pressée dans une couche dense.",
            "action": "Faire frire dans 5 minutes. Ne pas réfrigérer — une croûte froide et comprimée ne sera pas soufflée."
          },
          {
            "state": "Overdone",
            "description": "Les miettes ont été pressées fermement dans l'oeuf — la surface semble lisse, dense et compacte.",
            "action": "Le schnitzel fera encore frire fin mais la croûte sera collée étroitement à la viande plutôt que de gonfler. Le goût n'est pas affecté."
          }
        ]
      },
      "feelCue": "Ramassez une découpe panée et maintenez-la horizontalement — les miettes doivent rester en place mais se sentir lâchement attachées, non ancrées. Un doux tremblement devrait faire dériver quelques miettes. Cette fragilité est ce qui produit la fameuse croûte."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "breaded_cutlets",
        "ing_05"
      ],
      "outputState": "fried_schnitzel",
      "instructions": "Verser le beurre clarifié dans une casserole large à une profondeur de 8 à 10 mm. Chauffer jusqu'à 160–180°C — tester avec une chapelure : il doit s'étourdir immédiatement et tourner en or en 30 secondes. Glissez dans la coupe panée. Commencez immédiatement à cuillerer du beurre chaud sur le dessus de la découpe dans un ruisseau continu tout en déplaçant doucement la poêle pour garder la graisse agitée. Ce basting constant et le mouvement est la façon dont la croûte gonfle. Faire frire 2–3 minutes de chaque côté jusqu'à ce que l'ambre d'or soit profond. Ne jamais fouler la poêle — faire frire une coupe à la fois si nécessaire. Retirez-vous sur un support de fil (jamais de papier) pour égoutter.",
      "visualCue": {
        "primaryTarget": "Un schnitzel doré-ambre avec une croûte visiblement gonflée et déchirée qui s'est détachée de la surface de la viande dans les endroits — il ressemble à une carte dorée frisée plutôt qu'à une plaque plate de pain.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle, croûte plate touchant toujours uniformément la viande. La graisse n'a peut-être pas été assez chaude. La croûte est douce plutôt qu'établie.",
            "action": "Augmenter la chaleur et continuer à frire avec un basting constant. La température était trop basse — 160°C minimum est essentiel."
          },
          {
            "state": "Perfect",
            "description": "Une croûte de couleur dorée profonde, ondulée et bondissante avec des poches d'air visibles entre la miette et la viande. Le schnitzel a considérablement gonflé. Ça a l'air creux.",
            "action": "Égoutter sur une grille et assaisonner immédiatement avec une pincée de sel. Servir dans les 2 minutes."
          },
          {
            "state": "Overdone",
            "description": "Croûte brun foncé avec quelques taches carbonisées. La croûte s'est rétractée contre la viande de la surfraction.",
            "action": "La coupe à l'intérieur est encore bonne — l'extérieur aura un goût un peu amer. Évitez cela en utilisant un thermomètre."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur la croûte avec le dos d'une spatule — elle devrait résister et revenir en arrière, comme appuyer sur une feuille d'automne croustillante. Toute douceur signifie plus de temps dans la graisse. Écoutez: le étourdissement doit être un sifflement constant et vigoureux, tout ce qui est plus faible signifie que la graisse a refroidi."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir",
      "inputs": [
        "fried_schnitzel",
        "ing_08"
      ],
      "outputState": "schnitzel",
      "instructions": "Transférer immédiatement dans des assiettes chaudes — schnitzel n'attend personne et s'assouplit en quelques minutes. Placer un coin de citron à côté, non pressé. Servir avec de la salade de pommes de terre, des pommes de terre à persil ou de la confiture de lingonberry. Le citron est pressé à la table par le diner, et seulement directement sur leur portion. Schnitzel a mangé 10 minutes après la friture est un plat différent, plus petit — le temps que les assiettes frappent la table.",
      "visualCue": {
        "primaryTarget": "Un schnitzel doré et crépitant sur une assiette chaude avec un coin citron jaune vif. La croûte doit être sèche et rincée, et non scintille avec de la graisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Schnitzel est assis dans une piscine de graisse sur l'assiette, et la croûte est déjà adoucie par la vapeur.",
            "action": "Égoutter sur un support de fil, pas sur du papier, pendant 30 secondes avant le placage. Le papier piège la vapeur et détruit la croûte."
          },
          {
            "state": "Perfect",
            "description": "Une croûte sèche et craquante. L'assiette ne montre pas de graisse. Une pression de citron provoque un étourdissement immédiat lorsque l'acide frappe la croûte chaude.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Schnitzel a été tenu trop longtemps — la croûte est devenue molle et la viande à l'intérieur a séché. La panure semble pâle et vapeuruse.",
            "action": "Servir immédiatement indépendamment — il n'y a pas de récupération d'un schnitzel retenu, seulement la vitesse allant de l'avant."
          }
        ]
      },
      "feelCue": "Couper le schnitzel avec un couteau: la croûte doit se briser avec une fissure propre avant que le couteau atteigne la viande en dessous. S'il compresse et s'écrase plutôt que de craquelures, la croûte n'a jamais été croustillante pour commencer."
    }
  ]
};
