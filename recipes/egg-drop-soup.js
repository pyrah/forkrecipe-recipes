export default {
  "repoId": "master_chinese_egg-drop-soup_001",
  "parentRepoId": null,
  "slug": "egg-drop-soup",
  "author": "ForkRecipe Kitchen",
  "title": "Soupe aux oeufs",
  "description": "Les rubans d'oeufs soyeux fleurissent à travers un bouillon doré parfumé de gingembre épaississant juste assez pour les porter — un bol qui se réunit en 10 minutes et goûte comme quelque chose que votre grand - mère a pris toute la journée pour faire.",
  "cuisine": "Chinois",
  "culture": "Cantonais",
  "category": "stocks",
  "tags": [
    "œuf",
    "Soupe",
    "Chinois",
    "Vite",
    "végétarien"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 6,
    "sour": 0,
    "bitter": 0,
    "umami": 7,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Bon bouillon de poulet ou de légumes",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Dashi",
        "bouillon de champignons"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Oeufs battus",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Starch",
      "name": "Farine de maïs",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "fécule de pomme de terre",
        "fléchée"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Gingembre frais, tranché",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": [
        "1/4 c. à thé de gingembre moulu"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "sauce soja ou tamari léger",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "sel au goût"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Échalons coupés",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": [
        "ruches"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Poivre blanc, moulu",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre noir"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_01",
        "ing_04",
        "ing_05",
        "ing_08"
      ],
      "outputState": "seasoned_broth",
      "instructions": "Mélanger le bouillon, le gingembre tranché, la sauce soja et le poivre blanc dans une casserole moyenne. Porter à feu doux à feu moyen. Bouche: le bouillon doit être assaisonné avec assurance — c'est l'âme de la soupe. Un bouillon maladroit produit une soupe maladroite qu'aucune quantité de rubans d'oeuf ne peut sauver. Laisser mijoter 5 minutes pour laisser infuser le gingembre. Retirer et jeter les tranches de gingembre.",
      "visualCue": {
        "primaryTarget": "Un bouillon clair, doré-ambre, à une mijoter douce et régulière — de petites bulles s'élevant constamment du fond, et non pas un ébullition.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Broth est plat et aqueux. Ginger n'a pas eu le temps de libérer ses aromatiques.",
            "action": "Laisser mijoter encore 3 à 5 minutes. Goûtez — il devrait y avoir une note de gingembre chaude et épicée."
          },
          {
            "state": "Perfect",
            "description": "D'or profond, à la vapeur, avec une nette chaleur de gingembre en bouche. Bien assaisonné sans être salé.",
            "action": "Retirer les tranches de gingembre et faire le lisier."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon est rapidement bouillant et a nettement diminué. Le gingembre rend le bouillon légèrement amer.",
            "action": "Ajouter un peu de bouillon frais ou d'eau. Retirer immédiatement le gingembre. Abaissez jusqu'à une mijotée nue."
          }
        ]
      },
      "feelCue": "La cuisine doit sentir de la vapeur de poulet propre et gingembre — brillante et réchauffante, pas charnue ou lourde. Si vous ne sentez rien, le bouillon a besoin de plus de temps ou besoin d'un stock de meilleure qualité."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_03"
      ],
      "outputState": "cornstarch_slurry",
      "instructions": "Dans un petit bol, mélanger la fécule de maïs avec un volume égal d'eau froide (environ 2 cuillères à soupe de fécule de maïs à 3 cuillères à soupe d'eau froide). fouetter jusqu'à ce qu'il soit complètement lisse sans grumeaux blancs. Le lisier doit être fait avec de l'eau froide — de l'eau chaude ou chaude provoque immédiatement l'amidon. Ce lisier épaissit le bouillon juste assez pour donner aux rubans d'oeufs quelque chose à accrocher — sans lui, les œufs coulent au fond.",
      "visualCue": {
        "primaryTarget": "Un lisier blanc laiteux parfaitement lisse qui coule facilement du fouet sans grumeaux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Petits morceaux blancs d'amidon de maïs non dissous visibles lorsque le bol est incliné.",
            "action": "Continuez à fouetter. Les lumps d'amidon créeront des taches gélatineuses dans la soupe finie."
          },
          {
            "state": "Perfect",
            "description": "Liquide laiteux complètement homogène qui coule comme de la crème fine.",
            "action": "Mélanger de nouveau juste avant d'ajouter à la soupe — l'amidon se dépose rapidement."
          },
          {
            "state": "Overdone",
            "description": "La boue a été faite avec de l'eau chaude et a déjà commencé à geler.",
            "action": "Jeter et faire un lisier frais avec de l'eau froide."
          }
        ]
      },
      "feelCue": "Le lisier doit se sentir glissant et léger entre les doigts, comme de l'eau à peine perceptible. Si vous ressentez des particules grinçantes, continuez à fouetter."
    },
    {
      "nodeId": "step_3",
      "action": "Thicken",
      "inputs": [
        "seasoned_broth",
        "cornstarch_slurry"
      ],
      "outputState": "thickened_broth",
      "instructions": "Mélanger la fécule de maïs une dernière fois (elle s'installe rapidement), puis la verser dans un flux lent et régulier dans le bouillon mijotant tout en remuant constamment. Comme les granules d'amidon chauffent à 65°C (149°F), ils gonflent et éclatent, épaississant le bouillon presque instantanément. Incorporer constamment pendant 1 minute après l'ajout. Le bouillon fini devrait enrober légèrement l'arrière d'une cuillère — assez épais pour tenir les rubans d'oeuf suspendus, mais pas gloussés ou pâteux.",
      "visualCue": {
        "primaryTarget": "Le bouillon est passé de clair-eau à légèrement voilé et soyeux, avec un léger reflet. Une cuillère traînée sur la surface laisse une brève séparation avant que le bouillon ne retombe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Broth encore aqueux et court immédiatement hors d'une cuillère. Les rubans d'oeufs couleront et s'écraseront.",
            "action": "Ajouter un petit lisier supplémentaire (1 c. à thé d'amidon dissous dans 2 c. à thé d'eau froide)."
          },
          {
            "state": "Perfect",
            "description": "Enveloppe l'arrière d'une cuillère. Un doigt tiré à travers la cuillère enduite laisse une ligne propre qui tient pendant 2 secondes.",
            "action": "Commencez immédiatement l'oeuf verser."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon est épais et gélatineux — se déplace lentement, a une texture collante désagréable.",
            "action": "Ajouter 2-3 c. à soupe de bouillon supplémentaire et remuer vigoureusement à mince. Évitez cela en ajoutant le lisier lentement."
          }
        ]
      },
      "feelCue": "Le bouillon épaissé doit se sentir soyeux lorsqu'un doigt est trempé dans — un peu plus substantiel que l'eau, comme le sirop très mince. Le moment où il enveloppe votre bout de doigt plutôt que de s'enfuir instantanément, il est prêt."
    },
    {
      "nodeId": "step_4",
      "action": "Fouetter",
      "inputs": [
        "ing_02"
      ],
      "outputState": "beaten_eggs",
      "instructions": "Battre soigneusement les oeufs jusqu'à ce qu'ils soient complètement uniformes — pas de stries blanches, pas de jaune non incorporé. Une fourchette est fine; fouetter jusqu'à ce que les œufs soient lisses et juste légèrement mousseux donne la meilleure structure de ruban. Certains cuisiniers ajoutent une pincée de sel et 1 c. à thé d'eau pour mincer les œufs pour des rubans plus longs et plus spectaculaires. Les œufs battus devraient couler comme une fine crème.",
      "visualCue": {
        "primaryTarget": "Un liquide or pâle uniforme avec une faible couche de mousse sur le dessus. Il ne reste pas de stries d'albumine blanche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des traces visibles de blanc d'œuf qui n'ont pas été battues dans les jaunes.",
            "action": "Battre plus soigneusement — les blancs imbattables créent des rubans caoutchouteux et inégaux."
          },
          {
            "state": "Perfect",
            "description": "Liquide doré lisse et uniforme. Il coule du fouet dans un cours d'eau stable et ininterrompu.",
            "action": "Verser immédiatement — les œufs battus se détériorent s'ils sont trop longs."
          },
          {
            "state": "Overdone",
            "description": "Les oeufs sont très mousseux et aérés à cause d'un excès de battement.",
            "action": "Laisser reposer la mousse pendant 30 secondes avant de verser. L'excès d'air rend les rubans gonflés et fragiles."
          }
        ]
      },
      "feelCue": "Plongez un doigt — les œufs battus doivent se sentir glissants et uniformes, légèrement plus lourds que l'eau. Tu ne devrais pas ressentir de ficelles d'albumine."
    },
    {
      "nodeId": "step_5",
      "action": "Verser",
      "inputs": [
        "thickened_broth",
        "beaten_eggs",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_egg_drop_soup",
      "instructions": "Porter le bouillon épaissé à une mijotation régulière. D'une main, remuer le bouillon dans un mouvement lent et circulaire pour créer un vortex doux. D'autre part, versez l'œuf battu dans un cours d'eau lent, stable et mince d'environ 12 pouces au - dessus du pot — la hauteur et le mouvement en remuant sont ce qui créent de longs rubans soyeux plutôt que des griffes d'oeuf brouillés. Une fois l'œuf ajouté, remuer une fois doucement et retirer immédiatement du feu. Terminer avec quelques gouttes d'huile de sésame. Déposer dans des bols et garnir d'échalons tranchés.",
      "visualCue": {
        "primaryTarget": "Des rubans d'ivoire gossamer et d'or d'oeuf cuit suspendus dans tout le bouillon, coulants et intacts. Le bouillon les tient doucement — ils ne coulent ni ne s'agrippent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les rubans d'oeufs sont encore translucides et légèrement bruts, s'accrochent ensemble.",
            "action": "Agiter doucement une fois de plus et laisser la chaleur résiduelle finir de les cuire — 30 secondes après la chaleur suffit."
          },
          {
            "state": "Perfect",
            "description": "Rubans blancs et dorés entièrement opaques et plumeux dans un bouillon doré clair. Échalons vert vif sur le dessus.",
            "action": "Servir immédiatement — la soupe aux oeufs ne tient pas bien."
          },
          {
            "state": "Overdone",
            "description": "L'oeuf est devenu caoutchouteux et jaune plutôt que des rubans. Le temps est nuageux.",
            "action": "Cela s'est produit en bouillant trop fort ou en remuant après avoir ajouté des œufs. Salvageable — la saveur est bonne, seule la texture est imparfaite."
          }
        ]
      },
      "feelCue": "La surface de la soupe finie devrait mijoter avec l'éclat d'huile de sésame et apparaître presque miroitement entre les rubans. Au moment où l'œuf frappe le bouillon chaud, un doux sizzle-hiss annonce chaque ruban formant."
    }
  ]
};
