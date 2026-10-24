export default {
  "repoId": "master_italian_torta-caprese_001",
  "parentRepoId": null,
  "slug": "torta-caprese",
  "author": "ForkRecipe Kitchen",
  "title": "Torta Caprese",
  "description": "Le légendaire gâteau de Capri qui ne contient pas un grain de farine — juste du chocolat noir, des amandes entières, des œufs, du beurre et du sucre s'est effondré dans un disque dense et flou qui est simultanément un brownie, un gâteau au chocolat sans farine, et quelque chose de tout à fait propre: fissuré sur le dessus, tremblant à l'intérieur, blanc pulvérisé avec du sucre en poudre.",
  "cuisine": "Italien",
  "culture": "Napolitaine",
  "category": "desserts",
  "tags": [
    "chocolat",
    "Amandes",
    "Sans gluten",
    "Italien",
    "gâteau"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "1 hour 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 7,
    "salty": 2,
    "sour": 1,
    "bitter": 5,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Amandes entières blanchies (ou farine d'amande)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Farine d'amande — pas de broyage"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Chocolat noir (60-70% cacao), approximativement haché",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Chips de chocolat doux amer"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé, coupé en cubes",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre cultivé"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de canne (superfine)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun léger"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Gros œufs séparés",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Extrait de vanille pure",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "graines de haricots vanille"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Sucre de ciboulette (sucre pulvérisé), destiné à la dépoussiérage",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Grind",
      "inputs": [
        "ing_01"
      ],
      "outputState": "almond_flour",
      "instructions": "Si vous utilisez des amandes blanchies entières, faites - les pousser dans un robot alimentaire jusqu'à ce qu'elles atteignent une consistance fine et sablonneuse — la texture de la farine de maïs grossière. Ne pas trop traiter : si les amandes se réchauffent et s'agrippent, elles libèrent leurs huiles et se transforment en pâte d'amande plutôt qu'en farine. Travailler en courtes impulsions de 3 secondes, en grattant les côtés entre chaque. Le but est un repas de noix sec et libre. Si vous utilisez de la farine d'amande achetée au magasin, sautez cette étape.",
      "visualCue": {
        "primaryTarget": "Un repas d'amande sec, pâle et libre, avec une consistance entre la chapelure fine et la semoule grossière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours granuleux avec de grands fragments d'amande visibles qui ne s'intégreront pas uniformément.",
            "action": "Continuer à pulser en petits éclats jusqu'à ce que les plus grandes pièces soient parties."
          },
          {
            "state": "Perfect",
            "description": "Farine d'amande blanche et sèche. Pas de gros fragments. Ça sent la noix et le frais. Elle tombe d'une cuillère proprement.",
            "action": "Réserver et faire fondre le chocolat."
          },
          {
            "state": "Overdone",
            "description": "La graisse a été complètement libérée. Aspect huileux.",
            "action": "Cette pâte d'amande fonctionnera toujours dans la recette mais produira une texture légèrement plus dense et plus floue. Continuez."
          }
        ]
      },
      "feelCue": "Pincez l'amande moulue entre vos doigts – elle devrait être sèche et légèrement sèche, comme du sable fin, ne pas libérer d'huile sur votre peau."
    },
    {
      "nodeId": "step_2",
      "action": "Faire fondre",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "chocolate_butter_mixture",
      "instructions": "Mélanger le chocolat noir haché et les cubes de beurre dans un bol thermofuge. Faire fondre ensemble sur un bain-marie doux (une casserole d'eau à peine mijotante, un bol assis au-dessus mais ne touchant pas l'eau) ou dans un micro-ondes en 30 secondes éclats, en remuant entre chacun. Le mélange doit être complètement lisse et brillant — pas de stries de chocolat non fondu. Laisser refroidir à température ambiante, environ 10 minutes. Ne pas utiliser le mélange de chocolat alors qu'il est encore chaud, car il fera cuire les jaunes d'œufs dans la prochaine étape.",
      "visualCue": {
        "primaryTarget": "Un liquide doux, brillant, uniformément brun chocolat, sans morceaux visibles de chocolat non fondu ou de stries de beurre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux de chocolat encore visibles ou des stries de beurre non incorporé. Le mélange a l'air bosseux.",
            "action": "Mélanger vigoureusement — la chaleur résiduelle complète généralement la fusion. Revenez brièvement à Bain-marie si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Parfaitement lisse, uniformément sombre, liquide brillant. Elle coule librement d'une cuillère. Des odeurs de chocolat torréfié profond.",
            "action": "Laisser refroidir à température ambiante avant d'utiliser — le chocolat chaud fera cuire les œufs à l'étape suivante."
          },
          {
            "state": "Overdone",
            "description": "Le chocolat s'est emparé d'une pâte épaisse et granuleuse — surchauffée ou entrée dans l'eau.",
            "action": "Ajouter une cuillère à café d'huile neutre et remuer vigoureusement — cela peut parfois sauver le chocolat saisi. Sinon, recommencer."
          }
        ]
      },
      "feelCue": "Touchez une goutte à l'intérieur de votre poignet — il devrait sentir la température du corps ou refroidir avant d'entrer dans la pâte. Le chocolat chaud va brouiller les œufs."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "chocolate_butter_mixture",
        "ing_04",
        "ing_05",
        "almond_flour",
        "ing_06",
        "ing_07"
      ],
      "outputState": "chocolate_batter",
      "instructions": "Séparer les œufs, placer les jaunes dans un grand bol et les blancs dans un autre bol propre. Ajouter le sucre de castre et fouetter jusqu'à ce qu'il soit pâle, légèrement épaissi, et que le sucre soit principalement dissous, environ 2 minutes. Ajouter le mélange de beurre de chocolat refroidi et fouetter pour le combiner. Ajouter l'extrait de vanille et le sel. Pliez dans la farine d'amande avec une spatule jusqu'à ce qu'elle soit entièrement incorporée. La pâte sera épaisse, brillante et dense. Mettez de côté. Dans le bol propre séparé, fouetter les blancs d'œufs avec une pincée de sel jusqu'à ce qu'ils atteignent des pics mous — ils devraient tenir un pic qui s'enfonce doucement à l'extrémité. Repliez doucement un tiers des blancs dans la pâte au chocolat pour le desserrer, puis repliez dans les blancs restants en deux ajouts, en utilisant des traits lents et balayants pour conserver autant d'air que possible.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse, brillante, foncée, sans stries de blanc d'œuf restant. Un peu plus léger que le mélange de chocolat pur dû aux blancs pliés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Blancs d'oeufs visibles comme des stries blanches ou des taches non mélangées dans toute la pâte foncée.",
            "action": "Continuer le pliage avec une grande spatule en utilisant des coups lents. Ne remuez pas — le pliage préserve l'air."
          },
          {
            "state": "Perfect",
            "description": "Battre uniforme foncé et brillant sans stries blanches. Légèrement aéré et mousseux par rapport à la base initiale de chocolat dense.",
            "action": "Verser immédiatement dans la casserole préparée."
          },
          {
            "state": "Overdone",
            "description": "Surplié : les blancs d'œufs ont complètement dégonflé et la pâte semble complètement plate et dense à nouveau.",
            "action": "Procéder — le gâteau sera plus dense mais toujours délicieux. La torte caprese est naturellement floue."
          }
        ]
      },
      "feelCue": "Soulevez la spatule et laissez tomber la pâte, elle doit s'écouler lentement et tenir un léger pli sur la surface avant de couler, comme la lave épaisse."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "chocolate_batter"
      ],
      "outputState": "baked_torta",
      "instructions": "Beurre et ligne d'une poêle à ressort de 22 cm (9 pouces) avec parchemin. Verser la pâte et lisser doucement le dessus avec une spatule. Cuire au four à 170 C (340 F) pendant 30 à 35 minutes. Le gâteau est fait quand le dessus est fixé et fissuré, les bords sont fermes, mais le centre a encore un très léger frottement quand la poêle est légèrement secouée — comme une gelée à peine sertie. Un cure-dent inséré dans le centre devrait sortir avec quelques miettes humides, pas de pâte humide et pas propre. La torte caprese est destinée à être légèrement sous-cuite par les standards classiques — le centre dense et flou est une caractéristique, pas une erreur.",
      "visualCue": {
        "primaryTarget": "Une surface foncée fissurée et mate avec des bords fermes et un centre qui oscille légèrement — comme une ganache set plutôt qu'un liquide. Les bords se sont éloignés de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre oscille considérablement, comme du liquide. Le pic-dent sort complètement mouillé. Les bords ne sont pas fixés.",
            "action": "Retourner au four pendant 5 minutes et tester à nouveau. Le centre devrait gigoter, pas agiter."
          },
          {
            "state": "Perfect",
            "description": "Le dessus est fissuré et mat. Les bords sont fermes et légèrement tirés de la poêle. Le centre a un doux wobble — comme de la gelée, pas du liquide. Le pick-dent a des miettes humides, pas de la pâte humide.",
            "action": "Retirer du four. Laisser refroidir complètement dans la poêle sur un support — au moins 1 heure."
          },
          {
            "state": "Overdone",
            "description": "Centre est complètement ferme sans mouvement. Le dessus peut être uniformément gonflé plutôt que fissuré. Le pick-dent sort propre et sec.",
            "action": "Le gâteau peut être légèrement plus sec que l'idéal, mais reste excellent. Servir avec de la crème fouettée ou du gelato pour compenser."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur le centre du gâteau cuit — à travers la poêle — il devrait produire doucement, comme presser une ganache ferme, plutôt que de rebondir comme une éponge."
    },
    {
      "nodeId": "step_5",
      "action": "Finition",
      "inputs": [
        "baked_torta",
        "ing_08"
      ],
      "outputState": "finished_torta_caprese",
      "instructions": "Laissez le gâteau refroidir complètement dans la poêle sur un support de fil — au moins 1 heure, idéalement 2. Elle se raffermira considérablement au fur et à mesure qu'elle refroidira. N'essayez pas de le démolder au chaud. Une fois complètement frais, démoudre de la forme du ressort. Le gâteau est délibérément plat, dense et fissuré sur le dessus — c'est exact et beau. Juste avant de servir, poussièrez généreusement avec du sucre glaçant à travers un tamis à mailles fines pour l'effet de chute de neige classique. Servir à la température ambiante coupée en quartiers — un couteau chaud (courant sous l'eau chaude et essuyé à sec) rend les coupes les plus propres.",
      "visualCue": {
        "primaryTarget": "Un disque de chocolat plat, dense et noir avec un dessus naturellement fissuré recouvert d'une neige blanche de sucre glace.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Cake trop chaud — il s'effondre quand il n'est pas moulé ou est trop doux pour tenir un coin propre.",
            "action": "Retourner dans la casserole et refroidir pendant au moins une heure. La patience est le seul outil ici."
          },
          {
            "state": "Perfect",
            "description": "Disque ferme, dense et plat. Le dessus est magnifiquement cassé. Sucre écrémé uniformément. Coupe en quartiers propres et flous avec un couteau chaud.",
            "action": "Servir immédiatement ou réfrigérer jusqu'à 3 jours."
          },
          {
            "state": "Overdone",
            "description": "S.O. — le sucre glace poussiéreux ne peut pas être surdosé pour une torte caprese.",
            "action": "Servez."
          }
        ]
      },
      "feelCue": "Le coin fini doit se sentir lourd et dense dans la main — presque comme une tranche de caramel. Lorsque vous prenez la première bouchée, l'extérieur donne une croûte à peine perceptible, puis l'intérieur est lisse, productif, intensément chocolaté."
    }
  ]
};
