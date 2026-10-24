export default {
  "repoId": "master_american_key_lime_pie_001",
  "parentRepoId": null,
  "slug": "key-lime-pie",
  "author": "ForkRecipe Kitchen",
  "title": "Florida Key Lime Pie",
  "description": "Une crème frémissante, jaune pâle, faite à partir de minuscules citrons clés intensément parfumés des Keys de la Floride — tarte frénétique et sucrée uniquement par du lait condensé sucré, serti dans une croûte de cracker graham beurreux qui éclate à la première fourchette.",
  "cuisine": "Américain",
  "culture": "Floridienne",
  "category": "desserts",
  "tags": [
    "tarte",
    "agrumes",
    "Floride",
    "citron vert",
    "Coutard",
    "dessert",
    "tarte"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "3 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 5,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Graham craquelins (environ 11 craquelins pleins)",
      "ratioValue": 1.5,
      "defaultUnit": "cups",
      "substitutions": [
        "miettes de biscuits digestifs",
        "miettes de vanille"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "sucre brun clair (ajouter la profondeur de mélasse)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé fondu",
      "ratioValue": 5,
      "defaultUnit": "tbsp",
      "substitutions": [
        "huile de coco fondue"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Lait condensé sucré (14 oz de canette)",
      "ratioValue": 1,
      "defaultUnit": "can",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Jus de citron vert frais (environ 20 à 25 citron vert)",
      "ratioValue": 0.5,
      "defaultUnit": "cup",
      "substitutions": [
        "Jus de lime perse + 1 c. à thé zeste (moins floral, plus de tarte)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Citrus",
      "name": "Zeste de citron vert clé",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "Zeste de citron vert perse"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Binder",
      "name": "Jaunes d'œufs (grandes)",
      "ratioValue": 4,
      "defaultUnit": "yolks",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Dairy",
      "name": "Crème lourde, réfrigérée, pour garniture fouettée",
      "ratioValue": 1,
      "defaultUnit": "cup",
      "substitutions": [
        "crème de coco pleine graisse, réfrigérée"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Sweetener",
      "name": "Sucre en poudre, pour crème fouettée",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "sucre granulé"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Cuire au four",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "baked_crust",
      "instructions": "Préchauffer votre four à 350°F (175°C). Dans un bol moyen, mélanger les miettes de graham, le sucre granulé et le sel. Arroser le beurre fondu sur les miettes et remuer à l'aide d'une fourchette jusqu'à ce que chaque miettes soit uniformément humidifiées — le mélange devrait ressembler à du sable humide et tenir sa forme lorsqu'il est pressé dans le poing, mais s'effondrer lorsqu'il est relâché. Appuyez fermement et uniformément sur le mélange dans une poêle à tarte de 9 pouces : commencez au centre et travaillez vers l'extérieur le long du fond, puis appuyez sur les côtés jusqu'à une hauteur uniforme d'environ 1,5 pouces. Utilisez le fond d'une tasse de mesure pour compacter la base; utilisez le talon de votre main sur les côtés. La croûte doit être uniformément dense, sans taches fines. Cuire au four de 8 à 10 minutes jusqu'à ce que la croûte sente le graham grillé et que les bords montrent un léger soupçon de brun doré. Retirer et refroidir sur un support de fil pendant au moins 15 minutes avant le remplissage — une croûte chaude précuira les bords du remplissage de façon inégale.",
      "visualCue": {
        "primaryTarget": "Croûte dorée, uniforme et ferme. Les bords montrent un très léger assombrissement. La croûte tient sa forme proprement lorsque vous appuyez sur le côté de la casserole.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte semble pâle et sablonneuse. Crumble quand vous appuyez sur la jante. Des odeurs de beurre cru.",
            "action": "Retourner au four à 350°F pendant encore 3 minutes. Une croûte bien cuite sert à fixer les miettes par le beurre."
          },
          {
            "state": "Perfect",
            "description": "Uniformement doré, aromatique de miel caramélisé et de blé grillé. Ferme au toucher, ne s'écroule pas aux bords. La croûte est fixée et rigide.",
            "action": "Laisser refroidir complètement avant le remplissage — au minimum 15 minutes à température ambiante."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brun foncé ou noir. Une odeur amère. La croûte s'est retirée des côtés de la casserole.",
            "action": "Trim les bords les plus sombres avec les cisailles de cuisine avant le remplissage. La saveur de remplissage est assez forte pour masquer le surbassement doux."
          }
        ]
      },
      "feelCue": "Appuyez sur votre bout de doigt dans le fond de la croûte refroidie — il devrait sentir solide et sec, comme du bois dur comprimé, pas spongieux ou friable. Courez votre doigt le long de la paroi latérale : il devrait être lisse et même, pas épais dans certains endroits et papier-mince dans d'autres."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "lime_custard",
      "instructions": "Dans un bol moyen, mélanger les jaunes d'œufs et le zeste de lime. fouetter vigoureusement pendant 2 minutes jusqu'à ce que les jaunes s'éclaircissent légèrement de couleur et que le zeste libère ses huiles dans le jaune, en tournant le mélange un jaune-vert vif. Ajouter le lait condensé sucré et fouetter pour le combiner — il sera épais et collant. Enfin, ajouter le jus de lime clé et fouetter jusqu'à ce que le remplissage soit complètement lisse et uniforme. Attention: l'acide citrique dans le jus de citron vert clé commencera à fixer chimiquement (denature) les protéines du lait condensé immédiatement au contact, épaississant sensiblement le mélange. C'est exact — c'est le mécanisme qui permet à la tarte au citron vert clé de se fixer sans gélatine. Ne pas ajouter de jus de citron, ne pas substituer de jus en bouteille — les aromatiques volatils du citron vert à clé fraîche sont l'âme de ce dessert. La garniture doit avoir un goût acidulé agressive avec un parfum floral et tropical. Ça va refroidir dans le four.",
      "visualCue": {
        "primaryTarget": "Une crème jaune-vert craie pâle. Assez épais pour tomber du fouet dans un ruban lent et continu. Specques de zeste vert visibles dans l'ensemble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le remplissage est encore lâche et aqueux — le lait condensé et le jus de lime ne sont pas entièrement intégrés. Yolques visibles sous forme de stries jaunes séparées.",
            "action": "Frottez plus vigoureusement pendant 90 secondes. L'acide doit entrer en contact avec toutes les protéines du lait condensé pour commencer à épaissir."
          },
          {
            "state": "Perfect",
            "description": "Jaune pâle-vert, lisse, et tombe du fouet dans un ruban épais qui tient un sentier sur la surface pendant 2 secondes. Intensément parfumé de citron vert clé.",
            "action": "Verser immédiatement dans la croûte refroidie."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage est devenu très épais et gélatineux à cause de l'excès d'air, ou a été trop longtemps assis et l'acide l'a mis en trop.",
            "action": "Verser immédiatement — le remplissage sur-ensemble reste fin, bien que la texture puisse être très dense."
          }
        ]
      },
      "feelCue": "Plongez votre bout de doigt dans le remplissage — la tarte doit être extrêmement tranchante, presque abreuvante. C'est correct et intentionnel. L'odeur florale musky-tart du citron vert clé doit être nettement différente d'un citron vert perse : plus complexe, légèrement amère aux bords, avec une douceur tropicale derrière."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "lime_custard",
        "baked_crust"
      ],
      "outputState": "baked_pie",
      "instructions": "Verser la crème au citron vert dans la croûte refroidie de graham. Le remplissage doit se situer presque au bord de la croûte — pas plus de 1/4 pouce en dessous. Basculez doucement la poêle pour mettre le remplissage à niveau sans perturber la croûte. Cuire à 325°F (163°C) — en dessous de la croûte — pendant 15–17 minutes. Le remplissage est fait lorsque le pouce extérieur est complètement réglé et que le centre de 3 à 4 pouces oscille encore doucement lorsque vous sautez la poêle, comme un Jell-O à peine fixé. C'est important : un centre complet signifie que les œufs ont trop cuit. Le remplissage continue d'être réglé par la chaleur de report lorsqu'il refroidit. Ne pas surprendre — la texture d'une tarte au citron vert parfaite est à peine tringlante, presque panna-cotta-like, pas ferme et cheesecake-like.",
      "visualCue": {
        "primaryTarget": "La surface de la tarte est uniformément mate et jaune-vert pâle. L'anneau extérieur est complètement immobile; le centre oscille comme de l'eau quand la poêle est bouchée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toute la surface de remplissage oscille, y compris les bords. Le remplissage semble liquide et brillant.",
            "action": "Continuer la cuisson par paliers de 2 minutes jusqu'à ce que le pouce extérieur soit réglé. Le wobble central est correct — seuls les bords doivent être immobiles."
          },
          {
            "state": "Perfect",
            "description": "Anneau extérieur de 1 pouce est complètement immobile et mat. Le cercle central de 3 pouces oscille doucement mais ne s'enlise pas. La surface est jaune-vert pâle et sertie.",
            "action": "Retirer du four. Laisser refroidir à température ambiante (1 heure), puis réfrigérer au moins 2 heures avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Aucun doute. La surface peut présenter de petites fissures ou une teinte légèrement gris verdâtre. Ça sent l'oeuf.",
            "action": "La tarte sera comestible mais dense et légèrement caoutchouteuse plutôt que tremblante. Réfrigérer et servir avec de la crème fouettée supplémentaire pour compenser."
          }
        ]
      },
      "feelCue": "La surface d'une tarte bien cuite doit se sentir comme une panna cotta à peine posée sous un toucher très léger de bout de doigt — il y a une résistance mais elle donne immédiatement, et une légère empreinte digitale restera. Si elle se sent complètement ferme et rebondit, elle est trop cuite."
    },
    {
      "nodeId": "step_4",
      "action": "Fouetter",
      "inputs": [
        "baked_pie",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_key_lime_pie",
      "instructions": "Réfrigérer la tarte refroidie pendant au moins 2 heures ou jusqu'à la nuit. Le remplissage sera considérablement ferme dans le froid — c'est là qu'il atteint son dernier ensemble tremblant. Juste avant de servir, fouetter la crème lourde réfrigérée avec le sucre en poudre dans un bol froid à l'aide d'un mélangeur à main ou d'un mélangeur de support. Commencez à basse vitesse et augmentez à moyen-élevé. Des pics à pointes moyennes — la crème devrait tenir une boucle douce lorsque les batteurs sont levés, mais l'extrémité du pic devrait tomber doucement d'un côté plutôt que de rester rigide. La crème trop fouettée semble granuleuse et borde le beurre. Spoon ou pipe la crème fouettée sur la tarte: vous pouvez couvrir toute la surface pour une présentation traditionnelle, ou pipe rosettes décoratives autour du périmètre. Terminer avec quelques fines rondelles de citron vert clé ou une saupoudrée de zeste. Couper avec un couteau trempé dans de l'eau chaude et essuyer entre les coupes pour des bords propres.",
      "visualCue": {
        "primaryTarget": "Crème fouettée blanche glissée avec des pics mous et saillants assis au sommet de la garniture jaune-vert pâle. Une tranche de citron vert ou une boucle de zeste comme accent final.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème est encore lâche et versable, coule de la tarte plutôt que de s'asseoir. La crème ne forme pas de pic.",
            "action": "Retourner au mélangeur et continuer à fouetter à moyenne-élevée. fouets à la crème refroidis plus rapidement — assurez-vous que le bol et la crème sont froids."
          },
          {
            "state": "Perfect",
            "description": "Des pics glacés, doux et moyennement raides. La crème tient une forme mais le bout se plie doucement. Blanc vif, pas de grain.",
            "action": "Déposer ou piper sur la tarte fraîche et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La crème a l'air terne, épaisse et légèrement jaune. Liquide aqueux se séparant au fond du bol.",
            "action": "Plier dans une cuillère à soupe de crème fraîche froide pour la rapporter. Si trop loin, fouetter dans le beurre et commencer un lot frais — cela ne prend que 3 minutes."
          }
        ]
      },
      "feelCue": "La tarte finie, tranchée et plaquée, doit se sentir comme une étude miniature en contrastes : la douceur croquante et douce de la croûte craquelante sous la fourchette, le fraicheur frais et sucrée du remplissage donnant immédiatement, et le nuage aéré de crème se dissolvant avant même que la crémosité du citron vert ne s'enregistre. Le parfum est très floral et agrumes-électrique."
    }
  ]
};
