export default {
  "repoId": "master_scandinavian_gravlax_001",
  "parentRepoId": null,
  "slug": "gravlax",
  "author": "ForkRecipe Kitchen",
  "title": "Gravlax scandinave",
  "description": "Le saumon guérit cru en parts égales le sel et le sucre avec des masses d'aneth frais — pas de chaleur, pas de fumée, juste la chimie et le temps tournant la chair translucide et soyeuse sur deux jours.",
  "cuisine": "Scandinave",
  "culture": "Suédois/Norwegien",
  "category": "seafood",
  "tags": [
    "saumon",
    "guéri",
    "scandinave",
    "suédois",
    "norvégien",
    "lavlax",
    "pas de cuisson",
    "d'aneth"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "48 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filet de saumon, avec peau, coupe au centre, saupoudré",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "Filet de truite de mer",
        "Charbon arctique"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel de mer grossier (non pas sel de table, non iodé)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Roulette ou sucre blanc fin",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun clair (ajoute de la profondeur)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "L'aneth frais, gros tas, grossièrement déchiré",
      "ratioValue": 2,
      "defaultUnit": "large bunches",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poivre blanc, grossièrement craqué",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre noir"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Solvent",
      "name": "Aquavit ou vodka (facultatif — ajouter 2 c. à soupe)",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": [
        "gin (ajoute une note botanique)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_05"
      ],
      "outputState": "curing_mixture",
      "instructions": "Mélanger le sel grossier, le sucre et le poivre blanc cassé dans un petit bol. Mélanger jusqu'à ce qu'ils soient uniformément mélangés. Le rapport sel/sucre devrait être de 1:1 en poids, ce qui n'est pas négociable. Plus de sel produit une cure plus ferme et plus salée; plus de sucre maintient la chair plus douce, mais peut le faire cloître. Goûtez une pincée : elle doit être nettement salée avec une douceur de support.",
      "visualCue": {
        "primaryTarget": "Un mélange sablonneux uniforme de cristaux blancs égaux — aucune séparation visible des couches de sel et de sucre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sel et le sucre sont encore dans des piles ou des couches distinctes visibles dans le bol.",
            "action": "Mélanger plus soigneusement. Un traitement inégal créera des patchs plus salés et des patchs sous-currés à travers le poisson."
          },
          {
            "state": "Perfect",
            "description": "Mélange pâle uniformément mélangé — les deux sont indistinguables par les yeux. Senteur propre avec une légère netteté poivrée.",
            "action": "Continuez à guérir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Vous avez ajouté trop de poivre et le rapport est visiblement désactivé — le mélange semble gris plutôt que blanc.",
            "action": "Ajouter plus de sel et de sucre en mesure égale pour ramener le ratio poivre en équilibre."
          }
        ]
      },
      "feelCue": "Pincez le remède — il devrait se sentir comme du sable de mer grossier entre vos doigts, les deux cristaux reconnaissables seulement par la sensation, pas par la vue."
    },
    {
      "nodeId": "step_2",
      "action": "Assaisonner",
      "inputs": [
        "ing_01",
        "curing_mixture",
        "ing_04",
        "ing_06"
      ],
      "outputState": "raw_gravlax",
      "instructions": "Poser une double feuille de film collant sur un grand plateau. Dispersez la moitié du mélange de durcissement au centre en forme de filet. Pose la peau du saumon sur le remède. Arrosez l'aquavit ou la vodka sur la chair si vous l'utilisez. Appuyez fermement sur le remède restant sur chaque centimètre du côté de la chair — les rabats du ventre et l'extrémité fine de la queue guériront plus vite que le centre épais, donc utilisez moins de remède là. Pile l'aneth dans une masse épaisse et parfumée couvrant toute la surface de la chair. Enveloppez fermement l'ensemble dans le film de collage, puis de nouveau dans une deuxième couche.",
      "visualCue": {
        "primaryTarget": "Une parcelle fermement enveloppée avec le poisson complètement fermé, l'aneth verte visible à travers le film de collage, guérir visible contre la peau en dessous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La guérison n'est que d'un côté du poisson. L'aneth est clairsemé et couvre moins de la moitié de la chair. Le paquet est enroulé avec des poches d'air.",
            "action": "Déballez et redistribuez le remède pour enrober toutes les surfaces de chair. Emballez l'aneth plus généreusement et enveloppez - l'air dans l'emballage permet un durcissement inégal."
          },
          {
            "state": "Perfect",
            "description": "Saumon complètement scellé dans deux couches serrées de film de collage. Cure le revêtement visible à la fois de la peau et de la chair (à travers la couche inférieure). Dill densement emballé contre la chair, vert vif.",
            "action": "Transférer sur un plateau bordé, placer une poêle lourde ou des livres sur le dessus, et réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "La cicatrisation a été appliquée de manière si épaisse (plus de 5 mm de profondeur partout) que la surface sera sur-curcie et tourner désagréablement dur et salé.",
            "action": "Écraser l'excès, en laissant un mince, même enrober pas plus épais qu'un joint."
          }
        ]
      },
      "feelCue": "Le colis emballé doit être ferme et froid, aussi dense et compact qu'un fromage emballé. Pas de mouvement d'air ou de sloshing à l'intérieur."
    },
    {
      "nodeId": "step_3",
      "action": "Saler et laisser reposer",
      "inputs": [
        "raw_gravlax"
      ],
      "outputState": "cured_gravlax",
      "instructions": "Placer le saumon enveloppé sur un plateau bordé au réfrigérateur. Mettez un poids lourd directement sur le dessus — une poêle en fonte, des livres lourds ou une brique. Le poids presse le liquide de durcissement dans la chair plutôt que de le laisser s'accumuler en dessous. Après 24 heures, retourner le paquet entier. Après 48 heures au total, le gravix est prêt. Le remède peut s'étirer en toute sécurité jusqu'à 60 heures pour un résultat plus ferme et plus salé, ou être arrêté à 36 heures pour une texture plus délicate.",
      "visualCue": {
        "primaryTarget": "À 48 heures, la chair est passée de rose profonde translucide à un coral de saumon plus foncé, légèrement cireux, opaque à la surface. La peau est rigide et rétrécie.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "À 24 heures : la chair est encore rose vif et à l'aspect cru lorsqu'elle est déballée. La surface se sent productive et presque crue. Cure liquide est en pool, mais n'a pas été re-absorbé.",
            "action": "Remplacez, retournez, repoidsz et revenez pendant encore 24 heures. Le gravlax sous-vêtu est du saumon cru avec du sel, pas la même chose."
          },
          {
            "state": "Perfect",
            "description": "À 48 heures : la surface de la chair semble légèrement brillante et plus foncée, comme si elle était laquée. La texture, pressée par un doigt, est plus ferme que brute; elle résiste au doigt avant de retomber lentement. Sensation intense d'aneth et de saumure sucrée.",
            "action": "Enlever, racler le remède et l'aneth, sécher et couper immédiatement ou réfrigérer à découvert pendant 30 minutes pour sécher la surface plus loin avant de trancher."
          },
          {
            "state": "Overdone",
            "description": "À 72 heures et plus : la surface de la chair est assez ferme, presque dure. Le remède a attiré beaucoup d'humidité. La couleur est assez sombre et l'odeur est intensément salée.",
            "action": "Le gravlax est encore comestible mais se tranche très mince et goûte assez salé. Servir avec des blinis généreux, crème fraîche et quelque chose d'acide à équilibrer."
          }
        ]
      },
      "feelCue": "Appuyez sur la chair au point le plus épais d'un doigt — à 24 heures, elle se sent encore presque crue; à 48 heures, elle doit se sentir ferme, en caoutchouc froid, en ressortant lentement."
    },
    {
      "nodeId": "step_4",
      "action": "Trancher",
      "inputs": [
        "cured_gravlax"
      ],
      "outputState": "finished_gravlax",
      "instructions": "Écraser toute l'aneth et guérir avec le dos d'un couteau et jeter. La chair est complètement sèche avec des serviettes en papier. Déposer la peau vers le bas. À l'aide d'un couteau long, mince et tranchant (un couteau à tailler ou une trancheuse de saumon), anglez la lame à 45 degrés et coupez le plus fin possible — de 2 à 3 mm au plus — en de longs coups, en séparant chaque tranche de la peau. Travailler de la queue à la tête. Les tranches devraient être presque transparentes. Disposer sur une assiette froide et servir dans les 30 minutes suivant la coupe.",
      "visualCue": {
        "primaryTarget": "Des tranches de papier-fin presque translucides de saumon corallien profond, drapées légèrement pour montrer leur longueur et leur texture soyeuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tranches sont trop épaisses (5 mm ou plus) et ressemblent à des morceaux de saumon cru plutôt qu'à des feuilles translucides. Le remède n'a pas pénétré ces tranches épaisses uniformément.",
            "action": "Angler le couteau vers le bas du poisson (plus horizontal) et utiliser de longs coups lisses plutôt que courts."
          },
          {
            "state": "Perfect",
            "description": "Les tranches sont de 2 à 3 mm d'épaisseur, visiblement translucides aux bords, se tenant ensemble sans déchirer. corail profond avec des bords plus foncés où le remède concentré. La surface est soyeuse et brillante.",
            "action": "Disposer immédiatement — les tranches commencent à sécher dans les 20 minutes à température ambiante."
          },
          {
            "state": "Overdone",
            "description": "Les tranches sont si fines qu'elles se déchirent sur le couteau ou tombent en morceaux. Alternativement, le couteau traîne plutôt que de couper proprement et les tranches sont griffées.",
            "action": "Assurez-vous que votre couteau est très tranchant et faites des coups longs et confiants sans scier. Un couteau tranchant coupe; une larme terne."
          }
        ]
      },
      "feelCue": "Soulevez une tranche avec un couteau à palettes et il devrait draper sur la lame comme une feuille de soie fine — tenant ensemble mais clairement délicate pour fondre sur la langue."
    }
  ]
};
