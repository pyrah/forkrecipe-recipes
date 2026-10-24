export default {
  "repoId": "master_georgian_tkemali_001",
  "parentRepoId": null,
  "slug": "tkemali",
  "author": "ForkRecipe Kitchen",
  "title": "Tkemali",
  "description": "L'indispensable sauce à la prune sauvage de Géorgie — des prunes tkemali vert ou rouge, frustrées, mijotées jusqu'à ce qu'elles s'effondrent, puis purées d'ail, de pennyroyal et de coriandre dans une sauce amère, herbacée et salée à la fois, l'âme-ami caucasienne aux viandes grillées et aux pommes de terre grillées.",
  "cuisine": "Géorgien",
  "culture": "Géorgien",
  "category": "condiments",
  "tags": [
    "Géorgie",
    "prune",
    "sauce",
    "acide",
    "herbe",
    "condiment",
    "Caucasien"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 4,
    "bitter": 1,
    "umami": 1,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Acid",
      "name": "Prunes aigres — prunes tkemali vertes ou prunes rouges foncées fermes",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "Prunes de cerise aigre",
        "prunes de damson cueillies vert"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Coriandre fraîche (feuilles et tiges tendres)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Frondes fraîches d'aneth",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Pennyroyal séché (ombalo) ou menthe fraîche",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "menthe poivrée fraîche, utilisée plus parcimonieusement"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Heat",
      "name": "flocons de poivre rouge séché",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "piment rouge frais, haché"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "softened_plums",
      "instructions": "Placer les prunes entières et arroser dans une grande casserole lourde à feu moyen. Porter à mijoter doucement, couvrir partiellement et cuire 20-25 minutes, en remuant occasionnellement, jusqu'à ce que chaque prune ait éclaté et que la chair se soit complètement effondrée de la fosse. L'eau deviendra rose profond ou vert selon votre variété de prunes et sentira intensément les fruits cuits et l'acide vif. Ne laissez pas bouillir la casserole; un mijot doux préserve la tarte propre; le bouillit agressif.",
      "visualCue": {
        "primaryTarget": "Toutes les prunes se sont complètement effondrées et massées, les fosses clairement visibles et nues, la chair s'est dissoute dans un lisier épais, semblable à une confiture. Le liquide est opaque et de couleur vive: rose-rouge vif ou vert doré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Certaines prunes sont encore entières ou partiellement intactes, et les fosses sont encore enfouies dans la chair qui résiste à une cuillère.",
            "action": "Couvrir et laisser mijoter encore 5-10 minutes. Chaque prune doit s'abandonner complètement — toute résistance signifie que la chair ne passera pas proprement par le tamis."
          },
          {
            "state": "Perfect",
            "description": "Toute chair s'est effondrée dans le liquide, formant un lisier lâche et de couleur vive avec des fosses nues flottant librement. L'odeur est intensement aigre-fruitée, propre et nette.",
            "action": "Retirer du feu et passer à travers un tamis immédiatement lorsqu'il fait chaud — il passe plus facilement au chaud."
          },
          {
            "state": "Overdone",
            "description": "Le liquide s'est considérablement réduit et le lisier de prune s'est obscurci et a commencé à caraméliser aux bords de la casserole, perdant sa tartness vive pour une douceur de jam cuite.",
            "action": "Ajouter un jet d'eau et passer au tamis. La sauce peut avoir un goût légèrement moins vif; compenser par une pression de citron à la fin."
          }
        ]
      },
      "feelCue": "Pressez une prune contre le côté de la casserole avec une cuillère en bois — elle doit se dissoudre instantanément dans le liquide environnant sans résistance aucune, comme presser les lentilles cuites."
    },
    {
      "nodeId": "step_2",
      "action": "Filtrer",
      "inputs": [
        "softened_plums"
      ],
      "outputState": "plum_puree",
      "instructions": "Placer un tamis à mailles moyennes sur une casserole propre. Verser le lisier de prune chaud en lots dans le tamis et presser fermement avec le dos d'une grande cuillère ou d'une spatule de silicone, en travaillant la chair à travers le filet en mouvements circulaires. Ce qui passe, c'est la sauce; ce qui reste dans le tamis — peaux et fosses — est jeté. Cette étape détermine la texture du tkemali fini: appuyez jusqu'à ce que le résidu dans le tamis soit presque sec et rien de valeur ne reste.",
      "visualCue": {
        "primaryTarget": "Une purée lisse, vive et effilée dans la poêle ci-dessous: pas de fragments de peau, pas de débris de fosse, uniformément soyeux. Le tamis ne doit contenir que des peaux sèches, épuisées et des fosses propres.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La purée ci-dessous contient des fragments de peau visibles et de petites attelles de fosse, et les résidus du tamis sont encore humides et lourds avec des fruits utilisables.",
            "action": "Continuer à appuyer — mouvement circulaire avec pression constante. Rotation du contenu du tamis avec une cuillère pour exposer la chair fraîche au filet."
          },
          {
            "state": "Perfect",
            "description": "La purée ci-dessous est complètement lisse et uniformément colorée. Le résidu dans le tamis est une masse sèche et ridée de peaux et de fosses nues sans chair collante.",
            "action": "Jeter les résidus du tamis. Remettre la purée dans la poêle à feu doux."
          },
          {
            "state": "Overdone",
            "description": "Vous avez pressé si longtemps et si fort que des composés amers des fosses ont commencé à saigner à travers le tamis.",
            "action": "Arrêtez immédiatement. Si vous pouvez goûter l'amertume, équilibrez - la avec une très petite quantité de miel, bien que le tkemali authentique ne porte pas de douceur."
          }
        ]
      },
      "feelCue": "La purée qui traverse le tamis doit se sentir comme de la peinture épaisse et humide, fluide mais riche en corps. Lorsque le matériau dans le tamis commence à traîner et à résister sans libérer plus de liquide, il est épuisé."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "plum_puree",
        "ing_03",
        "ing_07",
        "ing_08"
      ],
      "outputState": "seasoned_base",
      "instructions": "Retourner la purée à feu moyen-doux. Finement haché ou presser l'ail et le remuer dans la purée avec la coriandre moulue et les flocons de poivre rouge. Laisser mijoter doucement, en remuant fréquemment, pendant 10-12 minutes jusqu'à ce que la sauce s'épaississe légèrement — il faut qu'elle enrobe une cuillère plutôt que de l'arroser — et l'ail a cuit à travers sa netteté brute dans une présence moelleuse et salée. La sauce crachera et s'épaissira à mesure qu'elle s'épaissira; baissera la chaleur et continuera à remuer pour empêcher la capture.",
      "visualCue": {
        "primaryTarget": "Une purée légèrement épaissie et brillante qui enveloppe l'arrière d'une cuillère d'un film mince mais durable. L'odeur d'ail doit être salée et cuite, non crue et piquante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a encore un goût de vinaigre cru et s'écoule librement de la cuillère. Il sent plus l'ail cru que les fruits cuits.",
            "action": "Laisser mijoter plus longtemps, en remuant. L'ail doit cuire dans la sauce — l'ail cru dans un condiment fini est dur et désagréable."
          },
          {
            "state": "Perfect",
            "description": "La sauce se tient brièvement sur une cuillère avant de couler. Le goût d'ail est présent et salé mais doux. La coriandre a fleuri dans une note de fond chaude et agrumes.",
            "action": "Ajouter les herbes fraîches du feu. Continuez."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite à une pâte dense et l'ail a commencé à brunir aux bords du pot.",
            "action": "Ajouter un jet d'eau pour se détendre et remuer vigoureusement pour incorporer. La texture du tkemali doit être versable, non pas comme une pâte."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère dans la sauce mijotante — elle doit se séparer et se refermer lentement, comme un yogourt mince. Le son dans le pot passe des éclaboussures bouillonnantes aux flous paresseux et lourds."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer",
      "inputs": [
        "seasoned_base",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_09"
      ],
      "outputState": "finished_tkemali",
      "instructions": "Retirez la poêle du feu. Hacher finement la coriandre, l'aneth et le pennyroyal (ou la menthe) et les remuer dans la sauce chaude — la chaleur résiduelle se flétrit et les intègre sans faire cuire leurs arômes volatils brillants. Assaisonner généreusement de sel, remuer soigneusement et goûter : le tkemali doit d'abord toucher le palais avec une netteté, puis une complexité vert-herbe, avec une chaleur salée, ailée et chaude à l'arrière. Il doit goûter de la tarte agressive — c'est un condiment à couper à travers la nourriture riche, pas une confiture. Ajuster le sel et le poivre au besoin, puis refroidir complètement avant de servir ou de jarrer.",
      "visualCue": {
        "primaryTarget": "Une sauce vive, de couleur profonde — vert pomme si faite à partir de prunes vertes, bordeaux-pink de rouge — clouté uniformément avec des taches d'herbe vert vif partout. Il doit sentir intensément les herbes et l'amer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les herbes sont inégalement distribuées et toujours visiblement séparées de la sauce. Le sel est insuffisant et la sauce a un goût plat et amer.",
            "action": "Incorporer plus vigoureusement. Assaisonner le sel en petits incréments — le sel soulève la tartine du tkemali sans le rendre salé."
          },
          {
            "state": "Perfect",
            "description": "Couleur uniforme à travers, plante uniformément suspendue, l'odeur agressivement parfumée de coriandre et d'aneth et un sous-ton pennyroyal terreux. Sur la langue: tart-brillant, herbe-couche, salé, et le réchauffement.",
            "action": "Refroidir à la température ambiante. La sauce épaissit légèrement en refroidissant. Servir ou réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "Les herbes se sont assises dans la sauce chaude trop longtemps et ont tourné gris olive terne, avec une planéité d'herbe cuite remplaçant la luminosité fraîche.",
            "action": "La perte de couleur d'herbe est irréversible, mais la saveur peut être encore bonne. Incorporer une petite poignée de coriandre fraîchement hachée juste avant de servir pour restaurer l'arôme."
          }
        ]
      },
      "feelCue": "Le tkemali frais devrait verser comme un yogourt fin, légèrement texturé — trop mince et il n'a pas suffisamment réduit; trop épais et il a besoin d'un jet d'eau agité. Il devrait laisser une tache de couleur vert vif sur une plaque blanche, et non se mettre dans un anneau aqueux."
    }
  ]
};
