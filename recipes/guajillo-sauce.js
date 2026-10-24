export default {
  "repoId": "master_mexican_guajillo_sauce_001",
  "parentRepoId": null,
  "slug": "guajillo-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce Guajillo Enchilada",
  "description": "Des chiles de guajillo séchés trempés et mélangés avec de la tomate carbonisée et de l'ail dans une sauce lisse et rouge brique vive — le véhicule classique pour les enchiladas, laquage chaque tortilla roulée dans une couleur qui ressemble au coucher du soleil et goûts de cerises séchées, chaleur douce, et quelque chose de légèrement tannique et beau.",
  "cuisine": "Mexicain",
  "culture": "Mexicain central",
  "category": "sauces",
  "tags": [
    "enchilada",
    "Guajillo",
    "Mexique",
    "Chile",
    "sauce",
    "tomates"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 2,
    "bitter": 2,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Spice",
      "name": "Chiles de guajillo séchés, ensemencés",
      "ratioValue": 8,
      "defaultUnit": "whole",
      "substitutions": [
        "Nouveau-Mexique"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Chiles anchos séchés, ensemencés",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "Mulato chile"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Tomates roms, coupées en deux",
      "ratioValue": 3,
      "defaultUnit": "whole",
      "substitutions": [
        "400g de tomates entières en conserve"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon blanc, quartiers",
      "ratioValue": 0.5,
      "defaultUnit": "medium",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail, non pelées",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Stocks de poulet ou de légumes",
      "ratioValue": 500,
      "defaultUnit": "ml",
      "substitutions": [
        "eau"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Graines de cumin grillées",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "cumin au sol (1/4 c. à thé)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Origan mexicain séché",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "Marjoram"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "vinaigre de cidre",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "vinaigre blanc"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Lard ou huile neutre",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "Huile d'olive"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 1.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "sel de mer"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire griller",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "toasted_soaked_chiles",
      "instructions": "Chauffer une poêle en comal sec ou en fonte à feu moyen-vif jusqu'à très chaud. Travaillant un à la fois, pressez chaque guajillo et chaque chile ancho à plat sur la surface sèche avec une spatule pendant 10 à 15 secondes de chaque côté. Les Guajillos ont de la chair mince et toast rapidement — veillez à ce que la couleur passe d'un rouge brique plat à un brun rougeâtre plus profond avec quelques taches cloquées. Vous écoutez autant que regarder : un chile bien grillé fait un léger bruit de craquelures sur papier que l'humidité de la chair se volatilise. L'ancho est plus épais et plus indulgent — 15 secondes de chaque côté, jusqu'à ce qu'il soit obscurci et pliable. À l'instant où vous sentez un fruit sec propre et doux et un arôme de fumée doux, comme le réchauffement des raisins secs foncés sur un poêle, retirez les piments de la chaleur. Transférer immédiatement dans un bol thermofuge et verser plus de 2,5 tasses d'eau très chaude (pas bouillante). Peser les chiles avec une petite assiette pour qu'ils soient complètement submergés. Faire tremper 20 à 25 minutes. L'eau fera un brillant rouge brique. Égoutter et réserver le liquide absorbant.",
      "visualCue": {
        "primaryTarget": "Les Chiliens sont brun-rougeâtre et pliables, pas raides. L'eau qui sème est rouge brique vif, presque opaque. Un guajillo trempé plie en deux sans déchirer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les Chiliens sont encore raides et cassants, de couleur inchangée. L'eau de trempe est rose pâle plutôt que rouge brique. L'arôme est plat et poussiéreux.",
            "action": "Le comal n'était pas assez chaud. Réchauffer et presser les chiles plus longtemps — un véritable contact avec une surface sèche très chaude est essentiel au développement de la saveur."
          },
          {
            "state": "Perfect",
            "description": "Les Chiliens sont profondément brun rougeâtre, pliables, et émettent un arôme chaud de fruits secs et de fumée douce. Après tremper, complètement doux et l'eau est un rouge-brique profond qui tache facilement.",
            "action": "Égoutter les légumes et les mélanger."
          },
          {
            "state": "Overdone",
            "description": "Les Chiliens sont uniformément noirs et ont une odeur de cendres et de carbone. L'eau de trempe est très sombre et goûte intensément amer.",
            "action": "Jeter et recommencer. Les guajillos brûlés ruinent la sauce. Leur amertume ne peut être équilibrée — c'est le mauvais genre d'amertume."
          }
        ]
      },
      "feelCue": "Un guajillo trempé doit se sentir comme un morceau de tissu chamois doux et humide — souple, frais et substantiel. Pressez doucement un piment trempé: si il se sent encore raide ou a des taches dures, retournez-le à l'eau chaude pour plus de temps."
    },
    {
      "nodeId": "step_2",
      "action": "Rôtir",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "charred_vegetables",
      "instructions": "Sur le même comal sec à feu vif, l'omble de tomate est coupé en moitiés jusqu'à ce que la surface soit profondément cloquée et noire — ne les déplacez pas pendant qu'ils sont d'omble de 5 à 7 minutes. Flip et charrer le côté de la peau 2 à 3 minutes de plus. Les tomates s'effondreront et leurs jus caraméliseront sur la poêle. Char les quartiers d'oignon jusqu'à ce que leurs faces coupées soient profondément noircies, et char les gousses d'ail non pelées jusqu'à ce que leurs peaux soient noires et que la chair à l'intérieur soit douce et dorée. Tout cet omble est intentionnel — il fournit la couleur profonde et complexe, saveur arrondie qui distingue une sauce enchilada cuite d'une sauce crue. Retirer du feu. Peler l'ail de ses peaux carbonisées. Transférer tout, y compris tous les jus accumulés et tous les solides de tomates caramélisées, au mélangeur.",
      "visualCue": {
        "primaryTarget": "Les tomates sont effondrées avec des surfaces noires fortement carbonisées d'un côté ou des deux côtés, des confitures de chair et un orangé rouge profond. Les oignons ont des bords noircis. L'ail a la peau carbonisée mais doux, intérieur doré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tomates sont toujours intactes avec seulement un brunissement léger. Pas de charring. Les légumes semblent rôtis, pas carbonisés. La saveur sera unidimensionnelle.",
            "action": "Retour à la chaleur élevée et laisser non perturbé pour plus longtemps. L'omble nécessite un contact direct avec une surface très chaude — ne déplacez pas les légumes pendant qu'ils sont ombrageux."
          },
          {
            "state": "Perfect",
            "description": "Les tomates se sont effondrées, la peau est fortement noircie et cloquée, la chair est jammée et l'orange profonde. L'ail se presse de sa peau comme une pâte d'or douce. La cuisine sent la tomate caramélisée et l'omble propre.",
            "action": "Transférer au mélangeur avec les chiles trempés."
          },
          {
            "state": "Overdone",
            "description": "Les tomates sont complètement incinérées: toute chair est noire, il ne reste plus de chair rouge. L'ail s'est transformé en cendres dans sa peau.",
            "action": "Sauver les tomates avec la chair rouge restante. Ajouter une tomate crue fraîche au mélangeur pour compenser la saveur de tomate perdue."
          }
        ]
      },
      "feelCue": "Ramassez une moitié de tomate carbonisée: la peau doit se sentir papereuse et sèche, mais sous elle la chair doit se sentir douce et céder, comme un ballon d'eau chaude à peine tenu ensemble. Cette tension — l'extérieur sec et l'intérieur fondu — est ce que vous voulez."
    },
    {
      "nodeId": "step_3",
      "action": "Mixer",
      "inputs": [
        "toasted_soaked_chiles",
        "charred_vegetables",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_11"
      ],
      "outputState": "blended_sauce",
      "instructions": "Mélanger les chiles trempés égouttés (utiliser 3 cuillères à soupe du liquide de trempage réservé), les tomates carbonisées, l'oignon carbonisé et l'ail, le bouillon, le cumin grillé, l'origan séché, le vinaigre et le sel dans un mélangeur. Mélanger à la hauteur pendant 2 minutes complètes jusqu'à ce que complètement lisse. La sauce sera très épaisse et une brique-rouge-orange vive. Plongez dans un tamis à mailles moyennes dans un bol, pressez avec une cuillère pour extraire tout le liquide. Goûtez la sauce tendue : elle doit être lumineuse, fruitée, modérément épicée et légèrement tannique, les légumes carbonisés offrant un sous-ton rond et profond. Cette base mélangée et tendue est prête à frire dans l'huile pour approfondir sa saveur et compléter sa brutité.",
      "visualCue": {
        "primaryTarget": "Sauce lisse, rouge brique vive qui verse librement. Pas de fragments de peau visibles. Après la déformation, la sauce est soyeuse et uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est granuleuse avec une peau de chile visible et des fragments de graines. La couleur est inégale et inégale.",
            "action": "Mélanger plus longtemps à haute vitesse. Plongez dans un tamis plus fin si la texture reste granuleuse."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, brillante sauce rouge brique. Goûts de cerise séchée, feu doux de chile, et une profondeur fumée ronde. Pas de grain.",
            "action": "Faire frire dans le saindoux pour finir."
          },
          {
            "state": "Overdone",
            "description": "Surmené et aéré — plus pâle en couleur avec une surface mousseuse.",
            "action": "Laisser reposer et reposer 5 minutes avant de frire."
          }
        ]
      },
      "feelCue": "Frottez une goutte de la sauce mélangée entre vos doigts – elle devrait se sentir lisse et lisse, laissant une tache rouge brique vive qui ne se lave pas facilement. Tout grain que vous ressentez signifie plus de mélange est nécessaire."
    },
    {
      "nodeId": "step_4",
      "action": "Frire",
      "inputs": [
        "blended_sauce",
        "ing_10"
      ],
      "outputState": "finished_guajillo_sauce",
      "instructions": "Chauffer le saindoux ou l'huile dans une large casserole ou poêle à feu moyen-vif jusqu'à ce qu'il fume presque. Reculez et versez la sauce guajillo mélangée dans la graisse chaude tout à la fois — il éclaboussera agressivement et fera un bruit fort et soutenu sifflant que l'humidité frappe la graisse chaude. Mélanger immédiatement et cuire, en remuant fréquemment avec une cuillère à main longue, pendant 5 à 8 minutes. Pendant ce temps, la sauce s'assombrira de couleur, s'épaissit légèrement, et les notes brutes et nettes se transformeront en quelque chose de plus profond et plus arrondi. La graisse commencera à se séparer aux bords, un anneau d'huile rouge brillant apparaissant au périmètre de la sauce. C'est le moment de s'arrêter : la sauce est prête quand la graisse se sépare et l'arôme est passé du chile brut à une odeur torréfié plus profonde et plus complexe. La sauce finie est prête à être utilisée comme sauce enchilada : tremper les tortillas roulées brièvement, les verser sur les enchiladas assemblées, ou l'utiliser comme liquide de cuisson pour le poulet ou le porc.",
      "visualCue": {
        "primaryTarget": "Sauce légèrement foncée, épaissie avec séparation visible des graisses aux bords. La couleur s'est approfondie jusqu'à un riche rouge brique plus foncé. Verse une cuillère dans un ruban un peu épais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a l'air la même qu'avant la friture — pas d'assombrissement, pas de séparation des graisses, et la saveur a encore un bord vif et brut des chiles.",
            "action": "Continuer à frire à feu plus vif. Le bruit d'aspersion devrait se poursuivre tout au long de la journée — si elle s'arrête tôt, la sauce peut être trop froide ou la graisse trop peu."
          },
          {
            "state": "Perfect",
            "description": "La sauce est légèrement foncée et épaissie. Le gras s'est séparé aux bords, formant un anneau visible d'huile rouge brillant. L'arôme est profond, arrondi et complexe: le chile fruité, l'omble doux et une épice chaude et intégrée. Pas de brutalité.",
            "action": "Utiliser immédiatement ou refroidir et réfrigérer jusqu'à 5 jours. La sauce s'approfondit encore après le repos."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite trop loin et est très épaisse, presque pâteuse. La couleur est très sombre. Le fond de la poêle montre une brûlure.",
            "action": "Transférer immédiatement dans une casserole propre. Finissez avec du bouillon ou de l'eau, 2 cuillères à soupe à la fois, en remuant à feu doux jusqu'à ce que la consistance désirée revienne."
          }
        ]
      },
      "feelCue": "La sauce guajillo frite doit verser une cuillère en bois dans un ruban régulier et uniforme — pas une goutte d'eau, pas un gush, mais un flux lisse et contrôlé qui enveloppe la cuillère dans une couche uniforme et opaque de brique-rouge. Arrosez un morceau de tortilla : la sauce doit s'accrocher à chaque surface sans s'écouler immédiatement."
    }
  ]
};
