export default {
  "repoId": "master_french_tomato_confit_001",
  "parentRepoId": null,
  "slug": "tomato-confit",
  "author": "ForkRecipe Kitchen",
  "title": "Confit aux tomates",
  "description": "Tomates de prune coupées lentement, grillées avec de l'huile d'olive, de l'ail et du thym à basse température pendant des heures jusqu'à ce qu'elles s'effondrent à une pâte concentrée, jammée, intensément sucrée, qui ne ressemble pas à la tomate crue.",
  "cuisine": "Français",
  "culture": "Provençal",
  "category": "sauces",
  "tags": [
    "tomates",
    "confit",
    "français",
    "torréfié lentement",
    "végétalien",
    "Sans gluten",
    "préserver"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "3 hr 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 2,
    "sour": 2,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Base",
      "name": "Tomates à plumes (Roma), coupées en deux dans le sens de la longueur",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "San Marzano",
        "tomates cerises (chaudées)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail, non pelées",
      "ratioValue": 6,
      "defaultUnit": "count",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 6,
      "defaultUnit": "count",
      "substitutions": [
        "romarin frais",
        "Thym séché"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun léger",
        "Chérie"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin et poivre noir",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Sel de mer flocé"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "vinaigre balsamique vieilli (quelques gouttes en option)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de sherry"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "prepared_tomatoes",
      "instructions": "Préchauffer le four à 110 C / 230 F — faible, lent et patient. Couper les tomates à la prune dans le sens de la longueur et placer le côté coupé en une seule couche serrée dans un plat rôti ou sur une plaque de cuisson bordée. Ils doivent s'adapter de façon judicieuse — ils vont diminuer considérablement. Dispersez les gousses d'ail non pelées et le thym entre les tomates. Saupoudrer le sucre, le sel et le poivre uniformément sur les faces coupées. Arrosez généreusement l'huile d'olive sur tout — l'huile doit envelopper chaque visage de tomate et mettre légèrement dans le plat; elle agit comme milieu confit, enveloppant les tomates dans la graisse et les empêchant de sécher au lieu de se concentrer.",
      "visualCue": {
        "primaryTarget": "Gammes de moitiés de tomates rouge vif, coupées, scintillantes à l'huile d'olive, assaisonnées uniformément. Les gousses d'ail et le thym sont distribués entre elles. Le plat est plein, mais pas surpeuplé: chaque moitié de tomate a son visage coupé entièrement exposé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tomates sont empilées ou se chevauchent, elles se vaporisent et ne se caramélisent jamais. L'huile est insuffisante et certaines faces sont sèches.",
            "action": "Réorganiser en une seule couche, en ajoutant de l'huile si nécessaire. Une casserole bondée s'éteint; une seule couche rôtit."
          },
          {
            "state": "Perfect",
            "description": "Une seule couche, chaque visage brillant avec de l'huile, du sucre et du sel visible comme une fine croûte sur chaque surface coupée. On dirait un plateau de rubis.",
            "action": "Glissez dans le four. Ne pas déranger pendant les 2 premières heures."
          },
          {
            "state": "Overdone",
            "description": "Sans objet à la préparation — procéder.",
            "action": "Glissez dans le four."
          }
        ]
      },
      "feelCue": "Les tomates doivent se sentir fermes et refroidies en allant au four — elles sont crues. Quand ils sortiront, ils se sentiront comme des gencives de vin dégonflées, donnant au moindre contact : toute leur eau disparue, leur sucre et leur umami intensifiés à une concentration que la tomate brute ne pouvait pas laisser entendre."
    },
    {
      "nodeId": "step_2",
      "action": "Rôtis",
      "inputs": [
        "prepared_tomatoes"
      ],
      "outputState": "roasted_tomatoes",
      "instructions": "Faire cuire à 110 C/ 230 F pendant 2 heures 30 minutes à 3 heures, en vérifiant chaque heure. Les tomates perdront lentement leur eau, se rétréciront et s'intensifieront. Leur couleur passera de rouge vif à un rouge-burgundy plus profond, plus muet. Les faces coupées commenceront à rider et à caraméliser en une surface douce et collante tandis que l'huile d'olive dans le plat devient parfumée et dorée. Dans les 30 dernières minutes, les surfaces peuvent commencer à caraméliser légèrement aux bords. Ne précipitez pas cela avec une chaleur plus élevée — la concentration doit être progressive pour éviter de sécher au cuir avant que les sucres ne se développent.",
      "visualCue": {
        "primaryTarget": "Des moitiés de tomates mûries, ridés et fortement éparpillées, ont été réduites à environ la moitié de leur taille originale. Les surfaces coupées sont caramélisées et collantes, la chair translucide et jammy. L'huile d'olive dans le plat est dorée et parfumée de thym et d'ail.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tomates ont à peine rétréci; elles sont encore plumées, rouge vif, et la surface semble mouillée et crue plutôt que caramélisée et piquante. Moins d'une heure s'est écoulée.",
            "action": "Continuez à rôtir. La transformation est dramatique mais se produit lentement — soyez patient."
          },
          {
            "state": "Perfect",
            "description": "Fausses de 50 à 60 %, de couleur profonde, les surfaces coupées caramélisées à une finition collante et jammy. La chair est entièrement translucide. Lorsqu'elle est pressée à l'aide d'une cuillère, la tomate donne complètement — toute résistance disparue.",
            "action": "Retirer du four. Ajouter une goutte de balsamique vieillie sur chaque utilisation."
          },
          {
            "state": "Overdone",
            "description": "Les tomates ont séché jusqu'à ce qu'elles soient sinueuses et sinueuses. L'huile dans le plat a bruni et sent légèrement amer.",
            "action": "Si ce n'est que légèrement surdosé, les tomates sont encore utilisables comme pâte très concentrée brassée par les pâtes. S'ils sont entièrement séchés aux croustillants, ils sont sauvés."
          }
        ]
      },
      "feelCue": "Vérifiez une tomate à la marque de 2 heures en appuyant sur le bord avec l'extrémité d'une cuillère: la chair doit donner instantanément et complètement, comme en appuyant sur un gel mou — pas de résistance, pas de rebond, juste effondrement total. S'il y a un ressort dans la chair, il lui faut plus de temps."
    },
    {
      "nodeId": "step_3",
      "action": "Frais",
      "inputs": [
        "roasted_tomatoes",
        "ing_07"
      ],
      "outputState": "cooled_tomato_confit",
      "instructions": "Retirer du four et ajouter une goutte de vinaigre balsamique sur chaque tomate si elle est utilisée — la chaleur résiduelle va adoucir son bord et laisser fondre avec l'huile. Laisser refroidir dans le plat. À mesure qu'ils refroidissent, les tomates ferment très légèrement et l'huile s'épaissit avec leurs sucres et pectines libérés. Les gousses d'ail peuvent être pressées de leur peau et entreposées avec les tomates — elles seront douces, douces et complètement transformées.",
      "visualCue": {
        "primaryTarget": "Refroidie, la tomate jammy se sépare dans une huile rouge dorée qui s'épaissit légèrement à mesure qu'elle refroidit, avec le balsamique obscurcissant les bords de chaque tomate. L'huile ressemble à une sauce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours chaud du four — l'huile est très lâche et les tomates sont trop molles pour être manipulées.",
            "action": "Laisser refroidir au moins 20 minutes avant de servir ou de conserver."
          },
          {
            "state": "Perfect",
            "description": "Refroidie à température ambiante : l'huile s'est épaissie jusqu'à un sirop autour des tomates, qui sont maintenant assez fermes pour soulever intacts mais qui donnent instantanément à une fourchette. Ils goûtent intensément de tomates concentrées avec une profonde complexité sucrée-sour-umami.",
            "action": "Servir immédiatement ou conserver l'huile dans le réfrigérateur pendant 2 semaines."
          },
          {
            "state": "Overdone",
            "description": "Laissés pendant des heures; les tomates sont froides et l'huile s'est solidifiée.",
            "action": "Chauffer doucement dans un four bas ou dans un bain d'eau chaude avant de servir."
          }
        ]
      },
      "feelCue": "Soulevez une tomate confit avec une cuillère: elle devrait tenir ensemble mais se sentir comme un ballon d'eau doux et rempli — toute pression et elle s'effondre. L'huile en dessous doit couler lentement, plus épais que l'huile d'olive fraîche, portant les saveurs concentrées des heures de torréfaction lente."
    },
    {
      "nodeId": "step_4",
      "action": "A conserver",
      "inputs": [
        "cooled_tomato_confit"
      ],
      "outputState": "finished_tomato_confit",
      "instructions": "Transférer les tomates et toute l'huile parfumée dans un pot stérilisé, en veillant à ce que les tomates soient submergées. L'huile est aussi précieuse que les tomates — utilisez-la pour habiller les salades, arroser sur la burrata, finir les pâtes, ou brosser sur le pain grillé. Réfrigérer et utiliser dans les 2 semaines. Servir les tomates à température ambiante ou les réchauffer pour une expression de saveur complète.",
      "visualCue": {
        "primaryTarget": "Un pot de tomates de couleur profonde, comme des bijoux, est suspendu à l'huile d'ambre infusée de thym et d'ail. Ils sont presque trop beaux pour manger.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile ne couvre pas toutes les tomates — elles développeront des moisissures lorsqu'elles seront exposées à l'air.",
            "action": "Garnir d'huile d'olive fraîche jusqu'à ce que toutes les tomates soient submergées."
          },
          {
            "state": "Perfect",
            "description": "Tomates entièrement immergées dans de l'huile parfumée. Réfrigérés, ils gardent magnifiquement pendant 2 semaines. A la température ambiante avant de manger, ils goûtent beaucoup plus intensément de la tomate que n'importe quelle boîte ou tube pourrait suggérer.",
            "action": "Utiliser comme sauce, garniture, condiment ou ingrédient."
          },
          {
            "state": "Overdone",
            "description": "Conservé au-delà de 2 semaines : l'ail dans l'huile crée un risque de botulisme s'il n'est pas bien manipulé et stocké au froid. La saveur se fane aussi.",
            "action": "Jeter après 2 semaines ou congeler les portions d'huile pour un stockage plus long."
          }
        ]
      },
      "feelCue": "Une cuillerée d'huile confit seule devrait avoir un goût extraordinaire: la torréfaction lente a lixivié chaque composé de saveur des tomates, de l'ail et du thym. Si l'huile a un goût plat, le confit a besoin de plus longtemps dans le four."
    }
  ]
};
