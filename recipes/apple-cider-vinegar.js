export default {
  "repoId": "master_american_apple_cider_vinegar_001",
  "parentRepoId": null,
  "slug": "apple-cider-vinegar",
  "author": "ForkRecipe Kitchen",
  "title": "Vinaigre à cidre de pomme cru",
  "description": "Une transformation biologique en deux étapes : d'abord, la levure sauvage convertit les sucres de pomme en cidre dur; puis les bactéries acétobactéries convertissent l'alcool en acide acétique sur quatre à six semaines. Il en résulte un vinaigre complexe et nuageux vivant avec la mère, un tapis de cellulose de bactéries bénéfiques que le vinaigre commercial pasteurise dans l'oubli.",
  "cuisine": "Américain",
  "culture": "Américain",
  "category": "fermented",
  "tags": [
    "vinaigre",
    "vinaigre de cidre de pomme",
    "fermenté",
    "cru",
    "probiotique",
    "mère",
    "deux étapes"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "8 weeks",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 0,
    "sour": 5,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Jus de pomme frais (non filtré, non pasteurisé) ou déchets de pomme pressés",
      "ratioValue": 2000,
      "defaultUnit": "g",
      "substitutions": [
        "cidre frais pressé",
        "jus de pomme non filtré (pasteurisé, prend plus de temps)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Miel brut ou sucre de canne (si le jus est à faible teneur en sucre)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "CVA cru avec mère (non pasteurisée, comme culture de départ)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre brut acheté en magasin avec la mère"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fermenter",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "hard_cider",
      "instructions": "Verser le jus de pomme frais non filtré dans un pot en verre à grande bouche. Si vous utilisez des déchets de pommes (noix et pelures), couvrir d'eau filtrée et ajouter le sucre. Incorporer une cuillère à soupe de vinaigre de cidre de pomme de terre cru avec la mère comme amorce bactérienne (facultatif – le ferment sauvage peut fonctionner seul). Couvrir d'un chiffon fixé avec une bande de caoutchouc — ne jamais sceller hermétiquement. La levure sauvage sur les peaux de pomme ou naturellement présente dans le jus cru commencera la fermentation alcoolique dans les 24-72 heures à 65-75°F. Mélanger une fois par jour. Cette étape dure de 2 à 4 semaines jusqu'à ce qu'il reste très peu de douceur et que les odeurs liquides du cidre dur sec ou du vin de pomme vif.",
      "visualCue": {
        "primaryTarget": "Dans les 2 à 3 jours : petites bulles stables montant du bas. Le liquide passe du jus de pomme clair à un peu trouble. La mousse blanche se rassemble à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas de bulles après 72 heures. Le liquide sent et goûte toujours comme le jus de pomme sucré.",
            "action": "Mélanger vigoureusement pour introduire l'oxygène. Passer à un endroit plus chaud (72-78°F). Si vous utilisez du jus pasteurisé, ajoutez une pincée de levure sèche active — le jus pasteurisé manque de levure sauvage."
          },
          {
            "state": "Perfect",
            "description": "Activité de bulles stationnaires. Le liquide est passé de doux à nettement sec. Sens de cidre dur, levure et pomme verte. Goûte sec et légèrement tanné mais pas encore vinaigre.",
            "action": "Laisser fermenter une autre semaine jusqu'à ce que toute douceur soit partie, puis passer à l'étape 2."
          },
          {
            "state": "Overdone",
            "description": "La fermentation s'est arrêtée complètement et les odeurs liquides fortement alcooliques — comme le cidre dur bon marché ou le vin de pomme dur. Très sec et tranchant.",
            "action": "C'est prêt pour l'étape 2. Un cidre très alcoolique rend un vinaigre plus fort et plus complexe."
          }
        ]
      },
      "feelCue": "Plongez un doigt propre: le liquide doit se sentir légèrement effervescent sur votre langue pendant la fermentation active — un timing doux. À mesure qu'il progresse vers le cidre dur, il devient calme et sec."
    },
    {
      "nodeId": "step_2",
      "action": "Infuser",
      "inputs": [
        "hard_cider",
        "ing_03"
      ],
      "outputState": "inoculated_cider",
      "instructions": "Une fois que le cidre n'est plus sucré (la fermentation alcoolique est terminée), ajoutez le vinaigre de cidre cru avec la mère, ce qui introduit l'acétobacter, la bactérie aérobie qui convertit l'alcool en acide acétique. Mélangez doucement. Cette étape nécessite de l'oxygène : garder couvert d'un chiffon seulement, jamais d'un couvercle. Plus le pot s'ouvre, plus l'acétification est rapide. L'acétobacter a besoin d'oxygène et formera la \"mère\" — un tapis gélatineux blanc-tan nuageux — à la surface.",
      "visualCue": {
        "primaryTarget": "En l'espace de 1 à 2 semaines : un mince film translucide se forme à travers la surface du liquide, allant d'à peine là-bas à un tapis caoutchouteux blanc-tan. C'est la mère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Aucun film ni mère visible après 10 jours. Le liquide sent toujours principalement l'alcool.",
            "action": "Ajouter une autre cuillère à soupe de vinaigre de cidre de pomme cru. S'assurer que la couverture en tissu permet le débit d'air — l'acétobacter est obligatoire pour les aérobes et ne fonctionnera pas sans oxygène."
          },
          {
            "state": "Perfect",
            "description": "Un tapis gélatineux caoutchouteux, crème-à-tan, flotte à la surface. Liquide en dessous, il passe de l'or à la pomme-ambre. Sentez progressivement plus de tarte et de vinaigre. Le goût est équilibré entre l'alcool et l'acidité.",
            "action": "Ne dérangez pas la mère. Continuer à vieillir encore 2 à 4 semaines, dégustation toutes les 2 semaines."
          },
          {
            "state": "Overdone",
            "description": "Mère a coulé, liquide sent fortement acide et fort. Très aigre — plus acide que la plupart du vinaigre commercial.",
            "action": "C'est fait. La souche et la bouteille. Diluer avec une petite quantité de jus de pomme si trop fort."
          }
        ]
      },
      "feelCue": "Touchez doucement le film de surface avec un bout de doigt propre — si une mère s'est formée, c'est comme du cuir chamois humide ou une mince feuille de silicone. Il va s'effondrer sous votre toucher mais pas se casser."
    },
    {
      "nodeId": "step_3",
      "action": "Saler et laisser reposer",
      "inputs": [
        "inoculated_cider"
      ],
      "outputState": "finished_vinegar",
      "instructions": "Age du vinaigre non perturbé pendant 4-8 semaines au total (à partir du début de l'étape 2), dégustation toutes les 2 semaines. La mère peut s'épaissir et couler, en formant une nouvelle à la surface — c'est normal. Lorsque le vinaigre goûte agréablement tarte et aigre avec une bonne saveur de pomme et aucun alcool restant, il est fait. Enfilez-la dans une nappe de fromage, en réservant la mère dans un petit pot de vinaigre fini pour votre prochain lot. Bouteillez le vinaigre. Entreposer à température ambiante : le vinaigre de cidre brut ne nécessite pas de réfrigération.",
      "visualCue": {
        "primaryTarget": "Liquide doré à l'ambre, légèrement nuageux avec des sédiments fins (le nuage 'mère'). Pas d'éclat arc-en-ciel ou d'aspect léché d'huile. Lorsqu'il est secoué, le nuage se disperse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide sent toujours partiellement alcoolique. Goûte légèrement aigre, mais vous pouvez détecter la douceur ou l'alcool en dessous.",
            "action": "Continuez à vieillir. Goûtez encore dans 2 semaines."
          },
          {
            "state": "Perfect",
            "description": "Couleur claire pomme-ambre avec un fin sédiment flottant. Sens comme du vinaigre de cidre de pomme cru – vif, fruité et tannant sans dureté. Goûte agréablement acide, complexe et fruité. Comparable au vinaigre de cidre brut commercial en concentration (4 à 5 % d'acidité).",
            "action": "La souche et la bouteille. Étiquette avec la date. Améliorer avec l'âge au cours des 6 à 12 prochains mois."
          },
          {
            "state": "Overdone",
            "description": "Liquide très pâle ou limpide – l'acétobacter a consommé entièrement tous les pigments de pomme et les composés de saveur avec l'alcool. Acide très vif, presque sans goût.",
            "action": "Toujours utilisable comme produit de nettoyage ou acide culinaire; moins intéressant comme condiment. Réserver la mère et commencer un nouveau lot avec de meilleures matières premières."
          }
        ]
      },
      "feelCue": "Versez une petite quantité dans votre paume et frottez: le vinaigre de cidre brut doit se sentir légèrement visqueux — plus soyeux que l'eau, presque gras — des protéines et enzymes dissoutes de la mère. Le vinaigre filtré commercial se sent aqueux par comparaison."
    }
  ]
};
