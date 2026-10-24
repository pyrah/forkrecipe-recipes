export default {
  "repoId": "master_cuban_black_bean_soup_001",
  "parentRepoId": null,
  "slug": "black-bean-soup",
  "author": "ForkRecipe Kitchen",
  "title": "Soupe de haricots noirs cubains",
  "description": "Soupe de fèves dense, noire de minuit parfumée de cumin, d'origan et d'un sofrito d'oignon, de poivre et d'ail – finie avec une touche de vinaigre qui fait chanter toute la casserole, servie sur du riz blanc avec une cuillère fraîche de crème aigre.",
  "cuisine": "Cubains",
  "culture": "Cubains",
  "category": "grains",
  "tags": [
    "Haricots noirs",
    "Soupe",
    "Cubains",
    "sofrito",
    "Caribbean",
    "option végétalienne",
    "un seul pot"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "3 hr",
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
    "sour": 2,
    "bitter": 0,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Haricots noirs séchés, trempés pendant la nuit",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "haricots noirs en conserve, égouttés (réduire le temps de cuisson à 30 min)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon blanc, coupé en dés",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Poivre vert, coupé en dés",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 0.08,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Origan séché",
      "ratioValue": 0.04,
      "defaultUnit": "parts",
      "substitutions": [
        "Origan frais, doublé"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Feuille de la baie",
      "ratioValue": 0.01,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": [
        "saindoux (traditionnel)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de sherry",
        "vinaigre de vin rouge"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 0.06,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Starch",
      "name": "Riz blanc, cuit, à servir",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "riz chou-fleur"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Dairy",
      "name": "Crème aigre, pour servir",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": [
        "Créma",
        "yogourt ordinaire"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_07"
      ],
      "outputState": "cooked_beans",
      "instructions": "Égoutter les haricots noirs trempés et les transférer dans un grand pot lourd. Ajouter la moitié de l'oignon en dés, la moitié du poivre vert en dés et la feuille de laurier. Couvrir d'eau froide de 7 cm. Porter à ébullition, écrémer toute mousse grise qui monte dans les 10 premières minutes. Réduire en mijotant régulièrement. Cuire de 1,5 à 2 heures jusqu'à ce que les haricots soient complètement tendres, presque en velours. Le liquide de pot aura tourné un profond, enky violet-noir. Ne pas ajouter de sel jusqu'à ce que les haricots soient complètement tendres (le sel précoce durcit les peaux). Réserver tout le liquide de cuisson.",
      "visualCue": {
        "primaryTarget": "Fèves noires complètement douces nageant dans un liquide de cuisson profond, pourpre-noir. Le liquide doit être visiblement épais et opaque avec de l'amidon de haricots dissous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Haricots encore fermes et légèrement crayeux au centre quand mordu. Le liquide de cuisson est encore rouge foncé plutôt que presque noir. Un goût amidon, plat.",
            "action": "Continuez à mijoter. Les haricots noirs sont impitoyables — même les haricots légèrement mal cuits resteront durs dans la soupe. Ajouter plus d'eau si le niveau tombe sous les haricots."
          },
          {
            "state": "Perfect",
            "description": "Un haricot pressé entre le pouce et l'index s'effondre à une pâte lisse et veloutée avec une résistance nulle. Le liquide de cuisson est presque noir et enveloppe la cuillère visiblement.",
            "action": "Faites le sofrito. Laisser les haricots dans leur liquide à feu très doux."
          },
          {
            "state": "Overdone",
            "description": "La plupart des haricots se sont dissous dans le liquide. Le pot est très épais et presque solide. Il reste très peu de haricots entiers.",
            "action": "La soupe sera très douce, presque pure, ce qui est vraiment délicieux. Continuez. Arroser d'eau si nécessaire."
          }
        ]
      },
      "feelCue": "Goûtez le liquide de cuisson à 90 minutes — il devrait envelopper votre langue comme un fin velours, avec une profondeur terreuse et minérale. S'il a un goût mince et aqueux, les haricots ont besoin de plus de temps et le niveau d'eau était trop élevé."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_08",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "sofrito",
      "instructions": "Dans une poêle séparée, chauffer l'huile d'olive à feu moyen. Ajouter le reste de l'oignon et le poivre vert. Cuire de 8 à 10 minutes en remuant occasionnellement, jusqu'à ce que l'oignon soit doux et translucide avec des bords dorés. Ajouter l'ail et cuire encore 1 minute. Ajouter le cumin moulu et l'origan séché, remuer pendant 30 secondes jusqu'à parfumer. C'est le sofrito, la base aromatique qui donnera à la soupe son identité cubaine. Il devrait sentir profondément salé et chaud, comme la meilleure cuisine cubaine imaginable.",
      "visualCue": {
        "primaryTarget": "L'oignon et le poivre assouplis et dorés avec de l'ail et des épices sont entièrement fleuris. L'huile dans la poêle doit être profondément colorée avec le cumin et l'origan.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont encore pâles et légèrement croquants. L'odeur d'oignon brut est dominante. Les épices n'ont pas eu le temps de fleurir dans la graisse.",
            "action": "Cuire plus longtemps à feu moyen. Le sofrito doit être entièrement cuit avant de rencontrer les haricots — l'oignon cru dans la soupe finie est un défaut."
          },
          {
            "state": "Perfect",
            "description": "Les oignons sont doux et dorés. L'ail est parfumé et vient de devenir doré aux bords. Le cumin et l'origan ont fleuri dans l'huile et la poêle sent complexe, salé et chaud.",
            "action": "Louche 3-4 cuillères des haricots noirs cuits et leur liquide dans le sofrito et les écraser avec une fourchette."
          },
          {
            "state": "Overdone",
            "description": "L'ail est devenu brun foncé. Une odeur amère des épices.",
            "action": "Retirer immédiatement du feu. Jetez tout ail vraiment brûlé. Le sofrito est encore utilisable si l'amertume n'est pas extrême."
          }
        ]
      },
      "feelCue": "Un sofrito bien cuit fait sentir toute la cuisine comme il a cuisiné quelque chose de merveilleux toute la journée — une odeur chaude et complexe de cumin, d'oignon doux et d'huile d'olive qui n'a pas de bord vif ou brut."
    },
    {
      "nodeId": "step_3",
      "action": "Mixer",
      "inputs": [
        "cooked_beans",
        "sofrito",
        "ing_10"
      ],
      "outputState": "thick_black_bean_soup",
      "instructions": "Déposer environ 3 à 4 grandes cuillères de haricots cuits et leur liquide dans la poêle à sofrito. À l'aide d'une purée de pommes de terre ou d'une fourchette, écrasez vigoureusement ces haricots dans la sofrito jusqu'à ce que vous ayez une pâte épaisse et foncée. C'est la technique d'épaississement cubaine classique : la pâte de haricots en purée épaissira naturellement toute la soupe. Verser la pâte de soja dans le pot de haricots principal. Ajouter le sel. Bien mélanger. Alternativement, utiliser un mélangeur d'immersion pour mélanger environ un quart de la soupe directement dans la casserole, laissant les trois quarts restants entiers pour la texture. Ramène-toi à la mijotée.",
      "visualCue": {
        "primaryTarget": "Une soupe épaisse, presque noire avec des haricots entiers visibles dans une base dense et crémeuse. La consistance doit être beaucoup plus épaisse qu'un bouillon mais suffisamment lâche pour verser.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La soupe est mince et aqueuse, plus comme un bouillon foncé qu'une soupe de haricots. Les haricots entiers flottent dans le liquide plutôt que d'être suspendus dans une base épaisse.",
            "action": "Mash plus de haricots dans le sofrito et les rendre dans le pot. Laisser mijoter à découvert 15 minutes de plus pour réduire et épaissir."
          },
          {
            "state": "Perfect",
            "description": "La soupe est dense, sombre, et enrobe une cuillère dans un film épais et même. Les haricots entiers sont distribués dans une base crémeuse et sombre. L'odeur est le cumin, l'origan et la terre.",
            "action": "Ajouter le vinaigre, le sucre et procéder à l'assaisonnement final."
          },
          {
            "state": "Overdone",
            "description": "La soupe a été réduite à une pâte très épaisse, presque solide. Il coule à peine de la louche.",
            "action": "Ajouter l'eau chaude ou le liquide de cuisson des haricots, remuer vigoureusement et laisser mijoter 5 minutes pour incorporer. Finir graduellement jusqu'à ce qu'il atteigne une consistance versable mais épaisse."
          }
        ]
      },
      "feelCue": "La base de soupe finie devrait se sentir comme du velours épais sur la cuillère — pas aqueux, pas pâte, mais densément liquide, enrobant le dos d'une cuillère dans une couche substantielle, même qui tient sa forme pendant 3-4 secondes avant de commencer à couler."
    },
    {
      "nodeId": "step_4",
      "action": "Assaisonner",
      "inputs": [
        "thick_black_bean_soup",
        "ing_09",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "finished_black_bean_soup",
      "instructions": "Ajouter le vinaigre de cidre de pomme et le sucre à la soupe mijotée. Le vinaigre n'est pas facultatif — il coupe à travers la densité et soulève tout le profil de saveur. Le sucre équilibre l'acide. Mélanger et goûter. Ajustez le sel, le vinaigre et le sucre en petites tranches jusqu'à ce que la soupe ait une profondeur arrondie, légèrement tannante, salée, terreuse, avec un fini acide brillant. Laisser mijoter 15 minutes de plus pour épouser les saveurs. Pour servir, placez un monticule de riz blanc dans chaque bol et louchez la soupe de haricots noirs autour et au-dessus. Finissez avec une généreuse cuillère de crème aigre froide et offrez de la sauce chaude à table.",
      "visualCue": {
        "primaryTarget": "Une soupe profonde, brillante, presque noire autour du riz blanc, avec un nuage blanc frais de crème aigre. Le contraste du blanc presque noir et pur est la signature visuelle du plat.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le vinaigre n'a pas encore été ajouté. La soupe a un goût plat, unidimensionnel et seulement terreux. Pas de luminosité.",
            "action": "Ajouter le vinaigre et le sucre. Goûte encore. La transformation lorsque le vinaigre frappe la soupe est immédiate et dramatique."
          },
          {
            "state": "Perfect",
            "description": "La soupe est richement savoureuse avec une finale brillante et tannante du vinaigre. La douceur arrondit l'acide. Le riz absorbe le bouillon noir aux bords. La crème aigre fond en tourbillons frais.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le vinaigre domine. La soupe a un goût aigu et aigre, non arrondi et complexe.",
            "action": "Ajouter une pincée de sucre, une pincée de sel et une louche d'eau chaude. Incorporer et laisser mijoter 5 minutes pour adoucir l'acide."
          }
        ]
      },
      "feelCue": "Au moment où vous ajoutez le vinaigre à la soupe chaude, penchez - vous au - dessus de la casserole et respirez - la note aiguë et fermentée du vinaigre qui se lève de la vapeur de haricots de terre est l'odeur de la cuisine cubaine qui reçoit son âme. Si cette odeur ne rend pas votre eau de bouche, les haricots ont besoin de plus de sel."
    }
  ]
};
