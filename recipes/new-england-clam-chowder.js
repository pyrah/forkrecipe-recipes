export default {
  "repoId": "master_american_new_england_clam_chowder_001",
  "parentRepoId": null,
  "slug": "new-england-clam-chowder",
  "author": "ForkRecipe Kitchen",
  "title": "Nouvelle-Angleterre Clam Chowder",
  "description": "Un bol de crème d'ivoire épaissie de pommes de terre tendres et de porc salé, truffée de l'alcool de palourde sucrée, chaque cuillère porte l'Atlantique froid à l'intérieur.",
  "cuisine": "Américain",
  "culture": "Nouvelle-Angleterre",
  "category": "seafood",
  "tags": [
    "américains",
    "palourdes",
    "Chowder",
    "Crémeux",
    "Soupe"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 1834,
  "forks": 143,
  "contributors": 19,
  "license": "CC-BY-SA",
  "createdAt": "2024-06-20",
  "updatedAt": "2025-05-11",
  "flavorRadar": {
    "sweet": 1,
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
      "name": "Palourdes en conserve ou fraîches (avec liqueur réservée)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "palourdes fraîches à petit cou, cuites à la vapeur et farcies",
        "Palourdes de rasoir"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Porc salé ou bacon épais coupé en dés",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Pancetta",
        "lard fumé"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon jaune en dés",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "Échalote",
        "Blancs poireaux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Starch",
      "name": "Yukon Pommes de terre d'or, pelées et dés 1cm",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "Pommes de terre russes",
        "Pommes de terre à peau rouge"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "moitié et moitié",
        "lait entier (minceur)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "amidon de maïs (utiliser la moitié de la quantité)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel casher, poivre blanc et thym frais",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre noir",
        "Thym séché"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Porc salé tendre",
      "inputs": [
        "ing_02"
      ],
      "outputState": "rendered_fat_and_pork",
      "instructions": "Placer le porc en dés de sel dans une casserole froide à fond lourd ou un four hollandais et le mettre à feu moyen-doux. Cuire lentement, en remuant de temps en temps, de 8 à 10 minutes jusqu'à ce que la graisse soit complètement fondue et que les morceaux de porc soient dorés et croustillants. Le démarrage à froid assure une extraction maximale des graisses. Retirer les morceaux de porc croustillants avec une cuillère à fentes et réserver.",
      "visualCue": {
        "primaryTarget": "Une généreuse piscine de limpide, blanc doré rendu gras dans le pot. Les morceaux de porc sont éparpillés, dorés et croustillants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les morceaux de porc sont encore doux et pâles. Le gras n'a pas été complètement libéré — les pièces semblent floues et translucides.",
            "action": "Continuer à feu moyen-doux. L'élévation de la chaleur fera brunir l'extérieur avant que la graisse intérieure rende — vous voulez un rendu lent et complet."
          },
          {
            "state": "Perfect",
            "description": "Les morceaux de porc sont petits, dorés et croquants. Une piscine de gras rend le fond du pot uniformément. La graisse sent le sucré et le porc.",
            "action": "Retirer les morceaux de porc avec une cuillère à fentes. Laisse toute la graisse dans le pot."
          },
          {
            "state": "Overdone",
            "description": "Les morceaux de porc sont brun foncé à noir et sentent l'acride. La graisse a peut-être commencé à fumer.",
            "action": "Retirer et jeter les morceaux brûlés. La graisse dans le pot devrait toujours être utilisable si elle n'a pas fumé trop. Continuez avec prudence."
          }
        ]
      },
      "feelCue": "Les morceaux de porc, pressés entre les doigts, doivent se sentir fermes et croustillants, comme les petits croûtons, sans centre mou ou caoutchouteux."
    },
    {
      "nodeId": "step_2",
      "action": "Sueur l'oignon et construire le roux",
      "inputs": [
        "rendered_fat_and_pork",
        "ing_03",
        "ing_06",
        "ing_07"
      ],
      "outputState": "onion_roux_base",
      "instructions": "Ajouter l'oignon coupé en dés dans le gras rendu à feu moyen et cuire, en remuant occasionnellement, pendant 5 à 7 minutes jusqu'à ce qu'il soit doux et translucide mais non doré. Saupoudrer la farine sur les oignons et remuer en continu pendant 1 à 2 minutes, enrober chaque morceau d'oignon. Ce roux blond est le corps de la chowder — il doit cuisiner assez pour perdre son goût de farine crue mais ne doit pas prendre aucune couleur.",
      "visualCue": {
        "primaryTarget": "Les oignons sont doux, vitreux et translucides. La farine les a enduits dans une couche pâteuse qui sent peu les noix. Le mélange s'agrippe légèrement lorsqu'il est agité.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont encore partiellement opaques, avec une bouchée lorsqu'ils sont pressés. La farine est poudreuse et sent cru. La chowder goûtera de l'amidon si vous continuez maintenant.",
            "action": "Continuer la cuisson du roux en remuant constamment. La farine a besoin d'au moins 90 secondes de chaleur pour cuire sa saveur crue."
          },
          {
            "state": "Perfect",
            "description": "Les oignons sont complètement doux et translucides. La farine est cuite dans une pâte lisse — légèrement gommée, sent comme du pain chaud plutôt que de l'amidon cru.",
            "action": "Commencez à ajouter de la liqueur de palourde progressivement."
          },
          {
            "state": "Overdone",
            "description": "Les oignons sont brunis aux bords. Le roux a pris une couleur bronzée. La chowder goûtera plus comme une sauce brune et moins comme une chowder pure et crémeuse Nouvelle-Angleterre.",
            "action": "Continuez — la saveur sera toujours bonne, juste moins classique. Réduire la chaleur pour la prochaine étape."
          }
        ]
      },
      "feelCue": "Passez une cuillère à travers les oignons roux – elle devrait glisser légèrement et laisser un sentier qui se remplit lentement, comme de l'avoine très épaisse. L'odeur doit être le blé chaud et l'oignon doux."
    },
    {
      "nodeId": "step_3",
      "action": "Faire mijoter les pommes de terre",
      "inputs": [
        "onion_roux_base",
        "ing_04",
        "ing_01"
      ],
      "outputState": "chowder_base",
      "instructions": "Verser la liqueur de palourde réservée plus assez d'eau ou de jus de palourde pour couvrir les pommes de terre de 2 cm dans le pot tout en fouettant pour éviter les grumeaux. Ajouter les pommes de terre en dés. Porter à mijoter doucement et cuire de 12 à 15 minutes jusqu'à ce que les pommes de terre soient tendres, tout en tenant leur forme. Ne pas faire bouillir vigoureusement — l'ébullition agressive fera casser les pommes de terre et fera bouillir la chowder.",
      "visualCue": {
        "primaryTarget": "Le bouillon est crémeux et bouillonnant doucement. Les cubes de pommes de terre sont tendres lorsqu'ils sont percés avec un couteau mais tiennent leur forme de cube. Le liquide s'est légèrement épaissi de la fécule de pomme de terre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pommes de terre résistent au couteau et se sentent crayeuses quand mordues. Le bouillon est encore mince et aqueux. Les cubes sont blancs vifs.",
            "action": "Continuer à mijoter 3 à 5 minutes de plus. Testez à nouveau avec un couteau — il devrait glisser dans sans résistance."
          },
          {
            "state": "Perfect",
            "description": "Les pommes de terre donnent facilement à un couteau avec un faible pop. Ils tiennent leur forme mais ont un intérieur crémeux, qui donne. Le bouillon est légèrement épaissi et perlé.",
            "action": "Ajouter les palourdes et la crème."
          },
          {
            "state": "Overdone",
            "description": "Les cubes de pomme de terre ont commencé à s'effondrer, les bords se dissolvent dans le bouillon. Le bouillon est nuageux avec de la fécule de pomme de terre.",
            "action": "Continuez immédiatement à ajouter de la crème. Une pomme de terre cassée va en fait épaissir la bouche naturellement, et non pas un désastre."
          }
        ]
      },
      "feelCue": "Percez un cube de pomme de terre avec un couteau et levez - il devrait offrir une faible résistance avant que le couteau passe, puis sortez du couteau proprement. Si ça tombe en morceaux, ils sont surfaits."
    },
    {
      "nodeId": "step_4",
      "action": "Ajouter les palourdes et la crème",
      "inputs": [
        "chowder_base",
        "ing_01",
        "ing_05"
      ],
      "outputState": "finished_chowder",
      "instructions": "Réduire la chaleur à faible. Incorporer la crème lourde et les palourdes hachées. Chauffer doucement pendant 3 à 5 minutes jusqu'à ce qu'il soit chaud. Ne pas faire bouillir après l'ajout de la crème — elle se brisera et se cassera. Les palourdes n'ont qu'à être chaudes, jamais cuites; si elles étaient crues, elles se durciraient sévèrement à ce stade. Goûtez et ajustez le sel et le poivre blanc.",
      "visualCue": {
        "primaryTarget": "La poêle est blanche-ivoire et opaque, légèrement vapeur. Les morceaux de clam sont distribués uniformément. La surface a un léger reflet de la crème.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème vient d'être ajoutée et striée — des tourbillons blancs visibles dans le bouillon de pommes de terre qui n'ont pas été entièrement incorporés. Chowder est toujours cool.",
            "action": "Incorporer doucement et continuer à chauffer à feu doux pendant 2 minutes supplémentaires. Ne précipitez jamais cette étape avec une chaleur élevée."
          },
          {
            "state": "Perfect",
            "description": "Chowder est uniformément ivoire et chaud partout. Les clams sont tendres. Une cuillère traînée à la surface laisse un sentier qui se remplit lentement. La vapeur monte doucement.",
            "action": "Goûtez et assaisonnez. Déposer dans des bols chauds."
          },
          {
            "state": "Overdone",
            "description": "La crème a cassé — gouttelettes de graisse jaune flottant sur le dessus d'un liquide rose, caillé. Les clams sont visiblement serrés et caoutchouteux.",
            "action": "Baissez immédiatement la chaleur. L'apparence peut s'améliorer si vous fouettez doucement tout en refroidissant le pot — mais les palourdes caoutchouteuses ne peuvent pas être sauvées. Servir avec des excuses."
          }
        ]
      },
      "feelCue": "Plongez une cuillère dans la poêle finie — elle devrait enrober l'arrière de la cuillère dans un mince film d'ivoire uniforme qui reste mis quand vous l'entrez. Si elle s'éteint proprement, le corps a besoin d'un chauffage plus doux."
    },
    {
      "nodeId": "step_5",
      "action": "Garnir et servir",
      "inputs": [
        "finished_chowder",
        "rendered_fat_and_pork"
      ],
      "outputState": "plated_chowder",
      "instructions": "Déposer la poêle dans des bols chauds. Garnir des morceaux de porc croustillants réservés et d'une crique de poivre noir. En option, arrosez avec quelques gouttes de crème lourde en spirale. Servir avec des craquelins d'huîtres ou du pain croustillant sur le côté. La chowder s'épaissit considérablement à mesure qu'elle refroidit.",
      "visualCue": {
        "primaryTarget": "Un bol plein d'ivoire, cuillerée à la vapeur avec des morceaux de porc doré sur le dessus et des morceaux visibles de pommes de terre et de palourdes partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Chowder n'a pas été garni, les bols sont froids, et les morceaux de porc sont devenus doux à la vapeur.",
            "action": "Faire griller brièvement les morceaux de porc dans une poêle sèche pour les ré-endormir. Garnir toujours dans des bols chauds et préchauffés."
          },
          {
            "state": "Perfect",
            "description": "Chowder d'ivoire chaud dans un bol chaud. Les morceaux de porc sont toujours croustillants sur le dessus. La vapeur sent la palourde, la crème et le thym.",
            "action": "Mangez immédiatement, avant que la garniture coule."
          },
          {
            "state": "Overdone",
            "description": "Chowder a épaissi jusqu'à une pâte dans un bol froid. Les morceaux de porc ont absorbé l'humidité et sont devenus mou.",
            "action": "Réchauffer doucement avec une touche de crème pour se détendre, re-garnir avec des morceaux de porc frais."
          }
        ]
      },
      "feelCue": "Soulevez le bol avec les deux mains — il devrait réchauffer vos paumes à travers la céramique. L'arôme qui se lève lorsque vous baissez votre visage vers elle devrait être l'air de mer et rendu gras."
    }
  ]
};
