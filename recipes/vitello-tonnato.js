export default {
  "repoId": "master_italian_vitello_tonnato_001",
  "parentRepoId": null,
  "slug": "vitello-tonnato",
  "author": "ForkRecipe Kitchen",
  "title": "Vitello Tonnato",
  "description": "Des tranches de veau poché, froides et fines, drapées dans une crème soyeuse de thon, de câpres et de mayonnaise, une collision de terre et de mer qui semble absurde jusqu'à ce que la première morsure rende son sens complet et inévitable. Un classique d'été piémontais, mieux servi assez froid que la sauce tremble à peine.",
  "cuisine": "Italien",
  "culture": "Piémontais",
  "category": "proteins",
  "tags": [
    "Italien",
    "piémontais",
    "Viande bovine",
    "thon",
    "froid",
    "Sans gluten",
    "été"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "3 hr",
  "ratioSystem": "weight",
  "stars": 1180,
  "forks": 72,
  "contributors": 19,
  "license": "CC-BY-SA",
  "createdAt": "2026-02-15",
  "updatedAt": "2026-02-15",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 3,
    "bitter": 0,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Oeil de veau rond ou supérieur",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "filet de porc",
        "poitrine de dinde"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Vin blanc sec",
      "ratioValue": 250,
      "defaultUnit": "ml",
      "substitutions": [
        "Vermouth"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 2,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Grains de poivre entiers",
      "ratioValue": 8,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Thon dans l'huile d'olive, égoutté",
      "ratioValue": 160,
      "defaultUnit": "g",
      "substitutions": [
        "thon ventresca (richisseur)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Capeurs en saumure, égouttés",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Binder",
      "name": "Jaunes d'œuf",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Câpres et tranches de citron pour garnir",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pocher",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "poached_veal",
      "instructions": "Attachez le veau avec la ficelle de cuisine dans un cylindre compact si nécessaire. Placez dans un pot juste assez grand pour le tenir. Ajouter le vin blanc, les feuilles de laurier, les grains de poivre et l'eau froide pour couvrir de 3 cm. Portez-vous très lentement à un ébullition nu — 80-85 C, quand de minuscules bulles s'élèvent paresseusement et la surface tremble à peine. Poché pendant 45 à 60 minutes, en maintenant cette température. Ne la laissez pas bouillir; l'ébullition va resserrer et durcir le veau. Sonde avec thermomètre à lecture instantanée: tirer à 62-63 C interne. Laisser refroidir complètement dans le liquide de pochage.",
      "visualCue": {
        "primaryTarget": "Poché surface liquide et couleur veau",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface du veau est encore rose pâle et le liquide est inférieur à 75°C. Le thermomètre se lit en dessous de 55°C à l'intérieur.",
            "action": "Maintenez le doux mijot. La patience est essentielle: se précipiter avec une chaleur plus élevée saisira les protéines."
          },
          {
            "state": "Perfect",
            "description": "Le liquide tremble doucement à 80 °C. La surface du veau est passée de rose à mat, gris-blanc très pâle. La température interne est de 62–63 °C.",
            "action": "Éteins la chaleur. Laisser refroidir complètement le veau dans le liquide — ce pochage de report ajoute de la jutosité."
          },
          {
            "state": "Overdone",
            "description": "Le liquide bouillait. Le veau est très ferme et s'est contracté visiblement. La température interne est supérieure à 72 °C.",
            "action": "Le veau est trop cuit mais récupérable. La richesse de la sauce tonnato aidera à compenser la texture plus sèche."
          }
        ]
      },
      "feelCue": "Appuyez sur le veau à travers l'eau — il devrait produire avec une résistance modérée à 62 °C, plus ferme que cru mais pas raide. A température ambiante, une pièce parfaitement pochée tranche sans résistance, les fibres se séparant proprement."
    },
    {
      "nodeId": "step_2",
      "action": "Mixer",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "tonnato_sauce",
      "instructions": "Mélanger le thon drainé, les câpres et les jaunes d'œufs dans un mélangeur ou un robot culinaire. Mélanger jusqu'à douceur. Lorsque le moteur tourne, ajouter l'huile d'olive dans un cours d'eau mince et stable, exactement comme vous construiriez une mayonnaise, jusqu'à ce que la sauce soit épaisse, crémeuse et pâle. Ajouter le jus de citron et mélanger à nouveau. Bouche : il devrait être très salé, brillant avec du citron, et assez riche pour enrober une cuillère épaisse. Finissez avec une cuillère à soupe de liquide de pochage si nécessaire pour une consistance plus draguée.",
      "visualCue": {
        "primaryTarget": "Consistance de la sauce Tonnato dans le mélangeur",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est mince et versable, clairement non émulsifiée. Le pétrole n'a pas été incorporé.",
            "action": "Continuer à ajouter de l'huile très lentement tout en mélangeant à grande vitesse. L'émulsion a besoin de temps et les jaunes ont besoin d'huile en petites tranches."
          },
          {
            "state": "Perfect",
            "description": "sauce beige-crème pâle, assez épaisse pour tomber d'une cuillère dans un ruban lent et tenir sa forme. Silence lisse sans fibres de thon visibles.",
            "action": "Assaisonner de sel et plus de jus de citron au goût. Réfrigérer jusqu'à ce que l'assiette soit prête."
          },
          {
            "state": "Overdone",
            "description": "La sauce est très raide, presque pâteuse. Trop d'huile pour les jaunes.",
            "action": "Teinture avec pochage liquide ou eau, 1 cuillère à soupe à la fois, mélange entre les ajouts."
          }
        ]
      },
      "feelCue": "Plongez un doigt dans le tonnato — il devrait être entièrement enrobé d'une couche soyeuse et uniforme qui nécessite une essuie-glaces délibérée à enlever. S'il coule librement, il faut plus d'émulsion."
    },
    {
      "nodeId": "step_3",
      "action": "Trancher",
      "inputs": [
        "poached_veal"
      ],
      "outputState": "sliced_veal",
      "instructions": "Retirer le veau complètement froid du liquide de pochage. À l'aide du couteau le plus tranchant disponible, couper le veau le plus fin possible – idéalement 2–3 mm, presque translucide. Une trancheuse de viande est idéale, mais un couteau long et mince fonctionne si le veau est assez froid (réfrigérer pendant 1 heure avant de trancher). Chaque tranche doit être presque transparente aux bords et presque blanche dans l'ensemble.",
      "visualCue": {
        "primaryTarget": "Épaisseur de la tranche de veau fixée à la lumière",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tranches sont épaisses — 7 mm ou plus. Ils ressemblent à des tranches de bœuf rôti plutôt qu'à des coupes froides.",
            "action": "Les tranches plus épaisses sont essentielles au plat. Refroidir le veau plus soigneusement et utiliser un couteau plus long et plus mince."
          },
          {
            "state": "Perfect",
            "description": "Les tranches sont de 2 à 3 mm, semi-translucides aux bords et de couleur rose-blanc très pâle. Ils drapent le couteau comme de la soie.",
            "action": "Arrangez-vous sur un plateau, qui se chevauche légèrement, avant de faire sauter."
          },
          {
            "state": "Overdone",
            "description": "Les tranches s'effondrent — trop fines pour la texture de la viande après le pochage.",
            "action": "Disposer les pièces déchirées du mieux que vous pouvez. La sauce couvrira les imperfections."
          }
        ]
      },
      "feelCue": "Un morceau de veau poché froid bien tranché devrait se sentir comme de la soie fraîche et ferme entre les doigts — il devrait plier sans casser et n'avoir aucun grain visible lorsqu'il est tenu à la lumière."
    },
    {
      "nodeId": "step_4",
      "action": "Assembler",
      "inputs": [
        "sliced_veal",
        "tonnato_sauce",
        "ing_10"
      ],
      "outputState": "finished_vitello_tonnato",
      "instructions": "Déposer une piscine de sauce tonnato sur un grand plateau plat. Coucher les tranches de veau sur la sauce. Éjaculer plus de tonnato généreusement sur le dessus, en s'assurant que chaque tranche est couverte. Les câpres et les tranches de citron sont décoratives. Réfrigérer au moins 1 heure avant de servir — la sauce doit être très froide et le veau doit absorber son goût.",
      "visualCue": {
        "primaryTarget": "Plat plaqué après 1 heure de réfrigération",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a l'air mouillée et runny, pooling sur l'assiette plutôt que de draper le veau. Le veau et la sauce n'ont pas fondu.",
            "action": "Réfrigérer plus longtemps. La sauce se serre et se lie au veau pendant qu'il refroidit."
          },
          {
            "state": "Perfect",
            "description": "La sauce est mise dans un voile crémeux et pâle sur le veau. Les câpres ponctuent la surface. Le plat entier est froid et unifié — le veau et la sauce semblent être une seule entité.",
            "action": "Servir à froid, immédiatement à partir du réfrigérateur, avec du pain croustillant."
          },
          {
            "state": "Overdone",
            "description": "La sauce a séché à la surface et fissuré. Le citron a oxydé la couche supérieure.",
            "action": "Déposer une fine couche de tonnato frais sur le dessus pour rafraîchir. Couvrir et réfrigérer jusqu'à servir."
          }
        ]
      },
      "feelCue": "Le plat fini doit se sentir frais et uniforme lorsque vous faites glisser un doigt sur la surface — la sauce doit produire légèrement mais ne pas bouger, collé au veau en dessous."
    }
  ]
};
