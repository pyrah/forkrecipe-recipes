export default {
  "repoId": "master_french_creme_anglaise_001",
  "parentRepoId": null,
  "slug": "creme-anglaise",
  "author": "ForkRecipe Kitchen",
  "title": "Crème Anglaise",
  "description": "La mère de toutes les sauces au dessert — un ruban de jaunes d'œufs, de lait, de crème et de vanille cuit lentement qui verse sur un pudding chaud comme de la crème liquide et enveloppe chaque surface d'un mince voile tremblant. Il existe dans le couloir étroit entre la crème crue et l'œuf brouillé, et la cuisson est bien la marque d'une main entraînée.",
  "cuisine": "Français",
  "culture": "Pâtisserie Française Classique",
  "category": "sauces",
  "tags": [
    "Coutard",
    "français",
    "vanille",
    "sauce",
    "pâtisserie",
    "œuf-jaune",
    "dessert-sauce"
  ],
  "difficulty": 3,
  "activeTime": "25 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 0,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Lait d'avoine (résultat mince)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Crème lourde (36% de matières grasses)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Grand jaune d'œuf",
      "ratioValue": 6,
      "defaultUnit": "yolks per 500ml liquid",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 0.4,
      "defaultUnit": "parts",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Fèves de vanille, fendues et raclées (ou extrait pur de 2 c. à thé)",
      "ratioValue": 1,
      "defaultUnit": "bean per 500ml",
      "substitutions": [
        "pâte de vanille",
        "haricot tonka"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel de mer fin, une petite pincée",
      "ratioValue": 0.005,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuse",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_05"
      ],
      "outputState": "infused_milk",
      "instructions": "Mélanger le lait entier et la crème lourde dans une casserole moyennement à fond lourd. Répartir le haricot vanillé dans le sens de la longueur avec un couteau à assaisonner aiguisé et racler les graines. Ajouter les graines et le gout vide au lait. Chauffer à feu moyen jusqu'à ce que le mélange atteigne une mijotée complète — vous verrez les graines de vanille se disperser dans de minuscules points noirs dans tout le lait. Éteignez le feu, couvrez la casserole et laissez infuser la vanille pendant 15 minutes. Cette infusion hors-chauffe extrait toute la complexité aromatique de la vanille sans faire cuire les notes de dessus volatiles qui la rendent florale plutôt que simplement sucrée. Si vous utilisez de l'extrait, ajoutez-le après la cuisson de l'anglaise et refroidissez à 60°C — la chaleur détruit les délicates notes supérieures de bon extrait.",
      "visualCue": {
        "primaryTarget": "Lait pâle, de couleur crème, avec de fines graines de vanille noire. Un anneau de petites bulles au bord de la casserole indique qu'il a atteint la température droite.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait est chaud, mais aucune bulle n'est apparue. L'arôme de vanille est faible.",
            "action": "Retournez à la chaleur brièvement jusqu'à ce que vous voyez des bulles, puis couvrez et infusez."
          },
          {
            "state": "Perfect",
            "description": "Le lait mijoté, les graines de vanille sont uniformément dispersées, et le pot sent fortement la vanille chaude et la crème fraîche.",
            "action": "Faites fouetter les jaunes pendant que le lait infuse."
          },
          {
            "state": "Overdone",
            "description": "Le lait a bouilli dur et a formé une peau épaisse à la surface. La crème sent légèrement cuit.",
            "action": "Retirer la peau avec une cuillère. L'anglaise fonctionnera toujours, la saveur sera légèrement plus cuite."
          }
        ]
      },
      "feelCue": "Enlevez le couvercle et maintenez votre visage au-dessus de la casserole — la vapeur doit être parfumée avec de la vanille et de la crème, pas des œufs ou des brûlés. Ce contrôle d'arôme vous dit que le lait est prêt."
    },
    {
      "nodeId": "step_2",
      "action": "Whisk",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_06"
      ],
      "outputState": "ribbon_yolks",
      "instructions": "Pendant que le lait infuse, placez les jaunes d'œufs, le sucre de castre et une pincée de sel dans un grand bol résistant à la chaleur. Frottez vigoureusement pendant 2 à 3 minutes jusqu'à ce que le mélange atteigne le stade ruban (ribbon) — une mousse épaisse, pâle et moelleuse qui tombe du fouet dans un ruban large et lent qui se tient sur lui-même pendant deux secondes avant de se dissoudre. Cette étape dissout partiellement le sucre et enrobe les protéines de jaune d'une barrière de sucre qui augmente leur température de coagulation, vous donnant une fenêtre plus large avant les brouillages d'anglaise sur la chaleur. Le mélange passera d'un jaune orangé profond à un jaune pâle et crémeux lorsque vous incorporerez l'air. Ne pas éjaculer sur le fouet — les jaunes sous-développés sont la principale cause de l'anglise granuleuse.",
      "visualCue": {
        "primaryTarget": "Un mélange mousseux pâle et épais qui tombe du fouet levé dans un ruban lent et continu reposant sur la surface pendant 2 secondes avant de couler.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est encore jaune-orange et mince. Il tombe du fouet dans de fines gouttes, pas un ruban.",
            "action": "Continuez à fouetter. Votre bras se fatiguera — c'est normal. La transformation est abrupte; poussez."
          },
          {
            "state": "Perfect",
            "description": "Mousse de couleur citron-crème pâle. Lorsque le fouet est levé, la pâte tombe dans un ruban épais et lent qui est assis sur la surface brièvement. Le mélange a triplé en volume.",
            "action": "Tempérer avec le lait chaud immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Vous avez incorporé trop d'air — le mélange semble raide et meringué. Ceci n'est pas possible à la main mais peut se produire avec un mélangeur électrique à grande vitesse.",
            "action": "Continuez — un peu d'air supplémentaire sera cuit à la chaleur."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité entre le pouce et l'index — vous ne devriez pas ressentir de grain de sucre. Une légère résistance, mais lisse. Cela vous dit assez de sucre s'est dissous dans la graisse de jaune."
    },
    {
      "nodeId": "step_3",
      "action": "Température",
      "inputs": [
        "ribbon_yolks",
        "infused_milk"
      ],
      "outputState": "tempered_custard",
      "instructions": "C'est l'étape critique qui sépare l'anglaise réussie des œufs brouillés sucrés. Retirer la gousse de vanille du lait. D'une main fouettant constamment le mélange de jaune, utilisez l'autre pour lisser lentement ou verser le lait chaud dans les jaunes — commencer par une petite éclaboussure (environ 60ml / 1⁄4 tasse) et fouetter complètement avant d'ajouter plus. Cet ajout progressif augmente lentement la température des jaunes, les empêchant de cuisiner au contact du lait chaud. Ajouter le lait en trois additions sur 30 secondes de fouettage. Une fois que vous avez incorporé environ la moitié du lait, vous pouvez verser le lait restant dans un ruisseau mince et stable tout en fouettant. Versez tout dans la casserole. Le mélange sera chaud, mince et légèrement mousseux sur le dessus — cette mousse se dissipe pendant que vous cuisinez.",
      "visualCue": {
        "primaryTarget": "Un liquide uniforme de couleur crème pâle, légèrement plus épais que le lait seul, sans traces blanches d'œuf cuit et d'une faible mousse à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Vous avez ajouté le lait trop lentement et le mélange est encore froid. La mousse est épaisse sur le dessus.",
            "action": "C'est très bien, vous avez simplement été prudent. Passez à la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Une base de crème douce, chaude et uniforme. Consistance versable, pas de grumeaux, arôme de vanille doux.",
            "action": "Verser dans la casserole et cuire à feu moyen-doux."
          },
          {
            "state": "Overdone",
            "description": "Cords blancs flottant dans le mélange — vous avez ajouté le lait chaud trop vite et cuit la couche extérieure des jaunes.",
            "action": "Plongez immédiatement dans un tamis. Les cords peuvent être enlevés ; l'anglaise est généralement épargnante."
          }
        ]
      },
      "feelCue": "Tenez votre main sur la casserole avec le mélange combiné — il doit se sentir chaud, pas chaud. Si la casserole est inconfortable à tenir, il était trop chaud et vous avez besoin d'ajouter le lait plus lentement."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "tempered_custard"
      ],
      "outputState": "finished_creme_anglaise",
      "instructions": "Cuire la crème à feu moyen-doux, en remuant constamment avec une cuillère en bois ou une spatule de silicone, jusqu'à chaque coin et bord de la poêle. Ce n'est pas un pas que vous pouvez franchir. L'anglaise est faite lorsqu'elle atteint 77–82°C (170–180°F) et qu'elle recouvre l'arrière de la cuillère — un doigt tiré par le revêtement laisse une ligne propre et distincte qui ne coule pas ou ne se remplit pas. À 83°C, les protéines de l'œuf commencent à se brouiller rapidement. Utilisez un thermomètre si vous êtes nouveau dans cette technique. Une fois terminé, passer immédiatement un tamis à mailles fines dans un bol propre assis sur un bain de glace. Mélanger pour refroidir rapidement — l'anglaise doit tomber sous 60°C dans les 10 minutes. Servir au chaud le long de puddings chauds ou de gâteaux, ou refroidir complètement pour verser froidement sur la crème glacée comme crème glacée.",
      "visualCue": {
        "primaryTarget": "La cuillère sort enduite d'une couche épaisse, même crémeuse d'anglise. Un doigt tiré à travers le revêtement sur la cuillère laisse une ligne nette avec des bords propres.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La cuillère sort avec un revêtement mince et inégal. La ligne tracée se remplit immédiatement. La surface est encore assez mousseuse.",
            "action": "Continuez à cuisiner et à remuer. L'épaississement se produit progressivement puis soudainement. Augmenter légèrement la chaleur si elle prend plus de 10 minutes."
          },
          {
            "state": "Perfect",
            "description": "Un épais, même revêtement sur la cuillère. Ligne propre. La mousse de surface a pour la plupart baissé. Un léger ruban de vapeur monte mais aucune bulle ne brise la surface.",
            "action": "Plongez immédiatement dans le bain de glace. La vitesse est importante ici."
          },
          {
            "state": "Overdone",
            "description": "Des petites bosses apparaissent dans le mélange. La glaise sent l'oeuf. La température dépasse 83°C.",
            "action": "Plongez immédiatement dans un tamis fin — le tamis capture les touffes de protéines cuites. Mélanger brièvement avec un mélangeur d'immersion si nécessaire. Il sera encore utilisable."
          }
        ]
      },
      "feelCue": "Plongez un doigt propre dans l'ange tendue — il devrait sentir comme de la soie chaude, enrober votre doigt dans un voile mince et tremblant qui s'accroche sans dégoutter. Ce poids de revêtement est la texture que vous servez."
    }
  ]
};
