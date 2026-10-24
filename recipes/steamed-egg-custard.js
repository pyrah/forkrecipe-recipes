export default {
  "repoId": "master_chinese_steamed_egg_custard_001",
  "parentRepoId": null,
  "slug": "steamed-egg-custard",
  "author": "ForkRecipe Kitchen",
  "title": "Oeufs à vapeur chinois (Zheng Dan)",
  "description": "Un bol de crème d'oeufs soyeux s'est cuit à la vapeur jusqu'à une douceur presque impossible — la surface non marquée et plate, tremblant au moindre toucher comme la panna cotta réfrigérée, fini avec une cascade sombre d'huile de soja et de sésame qui se déverse dans les cratères faits à la cuillère et parfume chaque bouchée. C'est le plat le plus calme, le plus exigeant dans la cuisine maison chinoise, où l'ennemi est la chaleur et l'impatience.",
  "cuisine": "Chinois",
  "culture": "Chinois",
  "category": "eggs",
  "tags": [
    "œufs",
    "Coutard",
    "vapeur",
    "soyeux",
    "sain",
    "simple",
    "cantonais",
    "style maison"
  ],
  "difficulty": 2,
  "activeTime": "10 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Oeufs grands",
      "ratioValue": 3,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Stock chaud ou eau (40°C / 105°F)",
      "ratioValue": 360,
      "defaultUnit": "ml",
      "substitutions": [
        "dashi pour une version japonaise"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sauce de soja léger (pour la crème)",
      "ratioValue": 8,
      "defaultUnit": "ml",
      "substitutions": [
        "sel (0,5 c. à thé)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile de sésame (pour finition)",
      "ratioValue": 5,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sauce de soja légère (pour la finition)",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce de soja vieillie"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Échalote, finement hachée",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "ruches"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whisk",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "strained_egg_mixture",
      "instructions": "Casser les œufs dans un bol et les battre doucement avec des baguettes ou une fourchette — pas agressivement, comme vous le feriez brouillé des œufs. Vous voulez briser les jaunes et les combiner avec les blancs, mais vous ne voulez pas incorporer l'air. Les bulles d'air sont l'ennemi d'une crème lisse — elles s'élèvent à la surface pendant la vapeur et se jettent dans des fosses et des cratères qui détruisent la surface du miroir que vous travaillez vers. Une fois les œufs combinés, ajouter progressivement le bouillon chaud ou l'eau en remuant. Le liquide doit être chaud — environ 40°C — et non chaud ou froid. Le liquide froid abaissera la température du mélange et le réglage lent; le liquide chaud commencera à cuire les œufs avant qu'ils ne pénètrent dans le vapeur. Ajouter la sauce soja et le sel. Maintenant, filtrez le mélange entier à travers un tamis à mailles fines dans votre bol de service. Cela capture les chalazae (les cordons d'œufs blancs tordus), les brins blancs d'oeufs non brisés et toute mousse de surface. Verser lentement, puis tapoter fermement le bol sur le comptoir pour faire sauter les bulles de surface restantes. Utilisez une serviette en papier pour éponger doucement toute mousse tenace. Le rapport oeuf-liquide de 1 oeuf à 120 ml de liquide est la formule pour la texture soyeuse — ne l'altérez pas.",
      "visualCue": {
        "primaryTarget": "Un liquide pâle, uniforme, jaune pâle, sans bulles visibles à la surface et sans stries de jaune blanc ou foncé non mélangé. La surface doit être complètement plate et immobile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est recouverte de petites bulles de mousse provenant d'un battement excessif ou d'un déversement trop rapide. Des taches de blanc sont visibles — les œufs ne sont pas complètement combinés.",
            "action": "Plongez à nouveau dans le tamis et épluchez la surface avec une serviette en papier ou un tissu de cuisine posé à plat et épluché. Attendez 2 minutes avant la vapeur."
          },
          {
            "state": "Perfect",
            "description": "Jaune pâle clair, complètement en surface, pas de bulles, pas de stries. Lorsque le bol est légèrement incliné, le liquide se déplace en une seule feuille.",
            "action": "Couvrir d'un enveloppement en plastique ou d'une plaque avant la vapeur pour empêcher la condensation de l'eau de couler sur la surface."
          },
          {
            "state": "Overdone",
            "description": "Sans objet à ce stade — vous ne pouvez pas trop mélanger le liquide lui-même. Toutefois, si le stock est trop chaud (au-dessus de 60°C), les œufs auront commencé à coaguler — le mélange aura l'air légèrement grumeux ou pâle.",
            "action": "Laisser refroidir le stock avant de le combiner ou recommencer avec de l'eau à température ambiante."
          }
        ]
      },
      "feelCue": "Passez votre doigt à travers le mélange tendu — il devrait se sentir mince et complètement lisse, sans texture. Si vous ressentez des ficelles ou des grumeaux gélatineux, reformez. Le liquide doit être indistinguable dans la sensation de la soupe chaude et fine."
    },
    {
      "nodeId": "step_2",
      "action": "vapeur",
      "inputs": [
        "strained_egg_mixture"
      ],
      "outputState": "steamed_custard",
      "instructions": "Installez votre vapeur avec de l'eau déjà à un mijoter doux — pas un ébullition vigoureux. C'est la distinction la plus critique dans toute la recette. L'ébullition violente crée de la vapeur qui est trop chaude et trop turbulente, ce qui fait que les protéines d'oeufs se superposent rapidement dans une texture granuleuse, piquée, presque brouillée. Un mijot doux produit une vapeur régulière et modérée qui met la crème lentement de l'extérieur. Placez le bol couvert sur le porte-vapeur. Réduisez la chaleur de sorte que la mijoter est à peine audible — vous devriez entendre un murmure doux et constant plutôt que des bulles agressives. Steam pendant 10-12 minutes pour une crème 3 œufs dans un bol d'environ 15 cm de large. Vérifiez à la marque de 10 minutes en nouant doucement le bol — la crème doit être fixée aux bords et faire un tour au centre, comme une panna cotta. Si le centre est encore liquide, couvrir et vapeur pendant encore 2 minutes. Si vous n'avez pas de vapeur à chaleur réglable, placez une baguette sous le couvercle pour permettre à la vapeur de s'échapper et de réduire la température interne.",
      "visualCue": {
        "primaryTarget": "Une surface jaune ivoire pâle, complètement lisse, plane miroir sans piqûre, sans marques de bulles, sans trous. La surface devrait ressembler à un glaçage en porcelaine.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre est visiblement liquide — il slothes quand vous coupez le bol. Les bords sont fixés mais le centre est encore brut.",
            "action": "Couvrir et vapeur encore 2 minutes. La crème se met rapidement quand la température centrale atteint 70°C."
          },
          {
            "state": "Perfect",
            "description": "Toute la surface est réglée et mate — aucun mouvement liquide visible. Lorsqu'il est légèrement bouché, le bol entier se fige comme une unité cohésive, comme la gélatine. La surface est non marquée, lisse et ivoire pâle.",
            "action": "Retirer immédiatement du vapeur et laisser reposer 1 minute avant de terminer."
          },
          {
            "state": "Overdone",
            "description": "La surface montre de petits trous et des cratères de l'ébullition (l'œuf a cuit trop vite). La texture peut être granuleuse ou piquée plutôt que soyeuse. La surface ressemble à un paysage lunaire plutôt qu'à de l'eau morte.",
            "action": "La saveur est bonne mais la texture est perdue. Ajoutez encore la finale d'huile de soja et de sésame et servez - la prochaine fois utilisez une mijoter plus douce."
          }
        ]
      },
      "feelCue": "Le bol doit se sentir bien chaud quand vous le ramassez, et non pas scalper — que la chaleur modérée est la température de réglage douce qui produit de la soie plutôt que brouillé. Écoutez votre vapeur : si l'ébullition s'intensifie, fissurez le couvercle."
    },
    {
      "nodeId": "step_3",
      "action": "Finition",
      "inputs": [
        "steamed_custard",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_steamed_egg_custard",
      "instructions": "Découvrez la crème et travaillez vite, car c'est délicat et mieux mangé dans les 5 minutes suivant la fin. Arrosez la sauce de soja légère dans un ruisseau mince autour du périmètre de la crème d'abord, la laissant baignée autour des bords, puis passez au centre. Le soya frais se retrouvera dans un anneau sombre contre la surface de l'ivoire. Ajouter l'huile de sésame dans quelques petites gouttes — il faut la perler à la surface avant de s'étendre lentement. Dispersez les pétoncles hachés dans un petit monticule au centre. Le contraste des textures et des températures — crème soyeuse chaude, soja parfumé frais, pétoncle cru — est l'expérience alimentaire complète. Certains cuisiniers ajoutent quelques gouttes de soja vieilli ou un mince jet d'huile de chili si désiré. Servir immédiatement dans le bol, avec une petite cuillère. La bonne façon de la manger est de briser la surface doucement, de scoop de dessous, et de laisser la crème, le soja, et l'échon monter ensemble sur la cuillère.",
      "visualCue": {
        "primaryTarget": "Une surface de crème ivoire-pâle avec une couronne sombre de sauce de soja qui se mêle autour des bords et du centre, de minuscules perles d'huile de sésame dorée, et une touffe vert vif de pétoncle au centre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sauce de soja appliquée mais immédiatement absorbée – la surface semble uniformément brune sans le contraste bicolore de crème pâle et de soja foncé.",
            "action": "Cela signifie que la crème est légèrement sous-vêtue et que la surface est encore poreuse. Il aura un bon goût — servir immédiatement."
          },
          {
            "state": "Perfect",
            "description": "Le soja se trouve comme une piscine sombre distincte à la surface, non absorbée, perlée contre la crème lisse. L'huile de sésame forme de petites perles dorées. Le pétoncle est vert vif. Le bol sent le sésame, le soja et l'œuf cuit.",
            "action": "Servir en 5 minutes tandis que la crème est à sa plus soyeuse."
          },
          {
            "state": "Overdone",
            "description": "La surface a développé une peau assise trop longtemps après la vapeur avant l'application de la finition. Les piscines de soja sur la peau plutôt que la crème.",
            "action": "Percez doucement la peau à un seul bord pour la briser et appliquez les ingrédients de finition — la crème en dessous est toujours correcte."
          }
        ]
      },
      "feelCue": "Faites une cuillère dans une partie non cassée de la crème — elle devrait apparaître dans une feuille lisse et frémissante qui tient à peine sa forme sur la cuillère, tremblant comme du tofu réfrigéré. S'il se présente dans des cords fermes et caoutchouteux, il était trop chaud."
    }
  ]
};
