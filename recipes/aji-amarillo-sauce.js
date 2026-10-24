export default {
  "repoId": "master_peruvian_aji_amarillo_sauce_001",
  "parentRepoId": null,
  "slug": "aji-amarillo-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce Aji Amarillo",
  "description": "Le condiment doré, fruité et chaud du Pérou — des chiles aji amarillo brillants mélangés à l'ail et à l'huile dans une pâte orange vive qui brûle lentement et doux, le condiment le plus polyvalent du cellier péruvien.",
  "cuisine": "Pérou",
  "culture": "Pérou",
  "category": "condiments",
  "tags": [
    "périuvien",
    "Chile",
    "condiment",
    "végétalien",
    "Sans gluten",
    "sauce chaude"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 1,
    "sour": 2,
    "bitter": 0,
    "umami": 1,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Heat",
      "name": "Chiles aji amarillo frais (ou congelés, dégelés)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "aji amarillo pâte (jarred, saut char pas)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon blanc, grossièrement haché",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile végétale neutre",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "huile d'olive légère"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Jus de chaux frais",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "jus de citron"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Feuilles de menthe noire ou coriandre",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "coriandre",
        "menthe + basilic combiné"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtis",
      "inputs": [
        "ing_01"
      ],
      "outputState": "charred_chiles",
      "instructions": "Placez des chiles aji entiers amarillo directement sur une flamme à gaz ou sous une grille. Tourner avec des pinces toutes les 30 secondes jusqu'à ce que la peau soit cloquée et noircie dans les patchs, environ 3-4 minutes au total. Transférer immédiatement dans un bol et couvrir fermement avec un enveloppement en plastique ou une plaque pour piéger la vapeur. Laisser la vapeur pendant 10 minutes — la chaleur piégée relâche la peau de la chair.",
      "visualCue": {
        "primaryTarget": "Les Chiliens sont uniformément cloqués: la peau est noircie dans les taches et s'éloigne de la chair, qui reste orange vif sous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est encore lisse et brillante dans les patchs. Pas de cloques sur les côtés.",
            "action": "Retourner à la flamme pendant 60 secondes de plus par côté — vous avez besoin d'un contact ombilical complet pour libérer la peau."
          },
          {
            "state": "Perfect",
            "description": "Au moins 60% de la surface est obscurcie et cloquée. Les Chiliens sont doux mais tiennent toujours leur forme. La peau se soulève dans des feuilles de papier.",
            "action": "Transférer dans le bol, couvrir et vapeur pendant 10 minutes."
          },
          {
            "state": "Overdone",
            "description": "La chair s'est effondrée et s'est transformée en bouillie. La peau est entièrement noire et le chile fuit le jus.",
            "action": "Continuez — la sauce est pardonnante, bien qu'un bord légèrement fumé puisse passer."
          }
        ]
      },
      "feelCue": "Les chiles devraient se sentir dégonflés et doux lorsqu'ils sont pressés dans le sac — il ne devrait pas y avoir de résistance ferme et brute au cœur."
    },
    {
      "nodeId": "step_2",
      "action": "Peler",
      "inputs": [
        "charred_chiles"
      ],
      "outputState": "peeled_chiles",
      "instructions": "Peler les peaux carbonisées sous l'eau courante ou en frottant doucement vos doigts. Coupez l'extrémité de la tige. Découpez le piment dans le sens de la longueur et grattez la membrane de la graine à l'aide d'une cuillère. Enlevez toutes les graines à feu doux, laissez la valeur d'un piment de graines si vous voulez brûler la sauce. Avertissement : ne touchez pas les yeux ; la capsaïcine est concentrée dans la membrane.",
      "visualCue": {
        "primaryTarget": "Peau de chile, lisse et propre, sans peau noire attachée et sans membrane intérieure enlevée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Patches de peau carbonisée qui s'accrochent encore à la chair. Membrane pas complètement raclée.",
            "action": "Utilisez un tranchant de couteau pour gratter les taches de peau tenaces — ne soyez pas précieux sur les petits morceaux."
          },
          {
            "state": "Perfect",
            "description": "Doux, chair orange vive, légèrement brillante de ses propres huiles. Nettoyage intérieur des graines et de la membrane.",
            "action": "Transférer dans un pot de mélangeur."
          },
          {
            "state": "Overdone",
            "description": "Le sur-séchage sous l'eau a emporté trop d'huile naturelle enrobant la chair.",
            "action": "La saveur sera légèrement plus mince mais toujours excellent — procéder."
          }
        ]
      },
      "feelCue": "La chair pelée se sent soyeuse et légèrement glissante entre les doigts — la teneur en huile naturelle du chile est ce qui rend la sauce finie émulsifier si magnifiquement."
    },
    {
      "nodeId": "step_3",
      "action": "Saucisse",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "softened_alliums",
      "instructions": "Chauffer 1 cuillère à soupe d'huile dans une petite poêle à feu moyen. Ajouter l'oignon haché et cuire, en remuant occasionnellement, pendant 5-6 minutes jusqu'à translucide et commencer à prendre la couleur dorée aux bords. Ajouter les gousses d'ail et cuire encore 2 minutes jusqu'à ce qu'elles soient parfumées et douces. Ne brunissez pas — vous voulez de la douceur, pas de l'amertume caramel.",
      "visualCue": {
        "primaryTarget": "L'oignon est translucide et doux, avec seulement quelques bords dorés pâles. L'ail est de l'ivoire et donne, pas de couleur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore opaque et blanc au centre. Arôme brut et vif.",
            "action": "Continuez à cuisiner — l'allium cru donnera à la sauce une bouchée agressive qui ne se calmera pas au fil du temps."
          },
          {
            "state": "Perfect",
            "description": "L'oignon s'écroule et scintille, translucide à travers et à travers. L'ail est doux lorsqu'il est pressé avec une cuillère. La cuisine sent doux et légèrement floral.",
            "action": "Retirer du feu et refroidir 2 minutes avant de mélanger."
          },
          {
            "state": "Overdone",
            "description": "Les bords de l'oignon sont dorés et un peu d'ail est profondément ambré.",
            "action": "Un peu de profondeur de caramel n'est pas un désastre, mais tirez de la chaleur immédiatement — la douceur sera prononcée."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau d'oignon contre la poêle avec votre cuillère — il devrait donner sans résistance, comme presser les pâtes cuites, ne pas revenir comme de l'oignon cru."
    },
    {
      "nodeId": "step_4",
      "action": "Mélange",
      "inputs": [
        "peeled_chiles",
        "softened_alliums",
        "ing_05",
        "ing_07"
      ],
      "outputState": "rough_puree",
      "instructions": "Mélanger les piments pelés, l'oignon et l'ail cuits, le jus de lime et le huacatay dans un mélangeur. Mélanger en haut pendant 60 secondes jusqu'à ce qu'il soit complètement lisse. Grattez les côtés et mélangez à nouveau. La purée doit être une pâte orange vive et uniforme, sans taches vertes visibles de l'herbe.",
      "visualCue": {
        "primaryTarget": "Une purée d'or orange-or uniformément lisse et brillante avec un éclat brillant. Pas de stries fibreuses ou d'herbes visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Fibreuses stries de peau de chile ou de morceaux d'herbe visibles. La texture est brouillée.",
            "action": "Mélangez encore 30 secondes à la vitesse la plus élevée. Si le mélangeur lutte, ajoutez 1 cuillère à soupe d'eau pour l'aider à bouger."
          },
          {
            "state": "Perfect",
            "description": "Ruban-smooth, orange lumineux. Enrober une cuillère dans une couche mince et uniforme. Sens lumineux, fruité et floral avec une chaleur sous-jacente.",
            "action": "Commencez l'émulsion avec de l'huile."
          },
          {
            "state": "Overdone",
            "description": "La purée, mélangée si longtemps, s'est réchauffée par frottement et la couleur s'est légèrement ternie.",
            "action": "C'est bon. Continuez immédiatement. Réfrigérer rapidement la sauce finie pour arrêter toute oxydation."
          }
        ]
      },
      "feelCue": "Le couvercle du mélangeur devrait se sentir légèrement chaud à cause de la friction du mélange — que la chaleur aide à fusionner les saveurs d'une manière que le mélange à froid ne peut pas."
    },
    {
      "nodeId": "step_5",
      "action": "Émulsifier",
      "inputs": [
        "rough_puree",
        "ing_04"
      ],
      "outputState": "emulsified_sauce",
      "instructions": "Avec le mélangeur à vitesse moyenne, arrosez le reste de l'huile à travers le bouchon d'alimentation dans un cours d'eau très mince, lent et stable, ce qui devrait prendre au moins 60 secondes. La sauce s'épaissit et s'éclaircit visiblement lorsque l'huile s'émulsionne dans la purée. Si aucun bouchon d'alimentation, ajouter l'huile en quatre petits ajouts, en mélangeant 10 secondes entre chacun.",
      "visualCue": {
        "primaryTarget": "La sauce est visiblement plus épaisse et plus légère que la purée rugueuse, de l'orange foncée à l'abricot-or crémeux. Elle enveloppe une cuillère d'une couche veloutée et légèrement opaque.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est mince et l'huile est visiblement mise en commun sur la surface plutôt que d'être intégrée. La couleur est encore orange foncé avec un reflet huileux.",
            "action": "Gardez le mélangeur en marche et continuez à ajouter de l'huile plus lentement — vous pouvez l'ajouter trop rapidement."
          },
          {
            "state": "Perfect",
            "description": "Épais, crémeux et doux avec un fini mat à satiné. Il tient légèrement sa forme lorsqu'une cuillère est traînée à travers elle. La couleur est bien dorée.",
            "action": "Assaisonner de sel et de goût."
          },
          {
            "state": "Overdone",
            "description": "La sauce a cassé — l'huile est mise en commun sur le dessus et la base semble granuleuse et séparée.",
            "action": "Ajoutez 1 cuillerée à soupe d'eau chaude et mélangez-la à haute température – la lécithine dans la peau de chile peut généralement la rapporter."
          }
        ]
      },
      "feelCue": "Exécutez un doigt à travers une cuillère de sauce — il devrait se réassembler lentement, laissant un canal propre un moment avant de fermer, comme un bon aioli."
    },
    {
      "nodeId": "step_6",
      "action": "Saison",
      "inputs": [
        "emulsified_sauce",
        "ing_06"
      ],
      "outputState": "finished_aji_amarillo_sauce",
      "instructions": "Ajouter le sel en petits morceaux, goûter après chaque ajout. Le sel doit amplifier la chaleur fruitée et pimentée sans rendre la sauce salée. Une dernière pression de chaux (facultatif) peut éclaircir la sauce si les chiles étaient particulièrement sucrés. Ajuster le niveau de chaleur: si trop doux, ajouter une pincée de cayenne; si trop chaud, mélanger dans une moitié supplémentaire d'un poivron doux pelé et rôti.",
      "visualCue": {
        "primaryTarget": "Sauce vivante, brillante, dorée-orange qui tient un pic doux lorsqu'elle est tombée d'une cuillère. Goûte simultanément fruité, chaud et lumineux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a un goût plat et unidimensionnel: le piment n'a pas de lifting. La couleur peut sembler terne.",
            "action": "Ajouter une autre pincée de sel et une petite pression de chaux — l'acide est aussi important que le sel pour que cette sauce saute."
          },
          {
            "state": "Perfect",
            "description": "La fructification du piment frappe d'abord, suivie d'une chaleur qui brûle lentement et qui culmine à l'arrière de la gorge. La chaux traverse l'huile sans être perceptible.",
            "action": "Transférer dans un pot et réfrigérer. Garde 2 semaines."
          },
          {
            "state": "Overdone",
            "description": "La sauce a un goût salé avant d'avoir un goût de piment. La chaleur est vive et immédiate plutôt que lente et fruitée.",
            "action": "Mélanger dans un poivre sucré torréfié ou une cuillère à soupe d'eau pour diluer; ne pas fixer le sur-sel, ajouter lentement."
          }
        ]
      },
      "feelCue": "Touchez la sauce à votre lèvre inférieure et maintenez-la là pendant 3 secondes — la chaleur d'un amarillo aji approprié se construit lentement, commençant doux et fruité, arrivant comme chaleur à l'arrière de la gorge seulement après un battement."
    }
  ]
};
