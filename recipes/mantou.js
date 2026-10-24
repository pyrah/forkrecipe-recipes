export default {
  "repoId": "master_chinese_mantou_001",
  "parentRepoId": null,
  "slug": "mantou",
  "author": "ForkRecipe Kitchen",
  "title": "Mantou (Buns à vapeur chinoise)",
  "description": "Des pains de blé blanc cuits à la vapeur avec une douceur subtile — le mantou uni qui est à la fois un agrafe du nord de la Chine et la toile blanche pour les garnitures, les curseurs et le trempage dans le lait condensé.",
  "cuisine": "Chinois",
  "culture": "Chinois du Nord",
  "category": "breads",
  "tags": [
    "pains à la vapeur",
    "Chinois",
    "Flou",
    "En clair",
    "Nord"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "2 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 1,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine universelle ou farine blanche chinoise à faible teneur en protéines ( gluten moyen)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "farine de gâteau mélangée 50/50 avec tout usage pour une miette plus douce"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "levure sèche active (proof d'abord dans un liquide chaud)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Lait entier (chaud, 38 C)",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "eau (résultat légèrement moins moelleux)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile ou saindoux neutres",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Écourtement des légumes"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pétrir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "smooth_mantou_dough",
      "instructions": "Dissoudre le sucre dans le lait chaud, puis ajouter la levure et laisser fleurir pendant 5 minutes jusqu'à mousser. Mélanger avec la farine et le sel dans un bol. Mélanger dans une pâte rugueuse, puis tourner et pétrir 10-12 minutes à la main, ou 6-8 minutes dans un mélangeur de stand avec un crochet de pâte, jusqu'à ce que parfaitement lisse et élastique. Ajouter l'huile dans les 2 dernières minutes de pétrissage. Contrairement à la pâte à pain, la pâte à mantoue doit être suffisamment sèche pour être manipulée sans coller — si elle colle, poussière avec de la farine, pas de l'eau.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, légèrement collante avec une surface mate — pas de taches rugueuses, pas de larmes et pas de collants. Une fois tiré, il s'étire sans déchirer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface dure est rugueuse, se déchire facilement et se sent dense et inélastique. Le test du panneau de fenêtre échoue.",
            "action": "Continuer à pétrir pendant 3-5 minutes de plus; le gluten a besoin de plus de développement."
          },
          {
            "state": "Perfect",
            "description": "La toux est lisse comme la joue d'un bébé, elle ressort quand elle est pochée et passe l'épreuve de la vitre — étirée mince, une membrane translucide tient sans déchirer.",
            "action": "Formez une balle, une couverture et une preuve."
          },
          {
            "state": "Overdone",
            "description": "La toux est très serrée, ressort agressivement, et est chaude au toucher de surmenage.",
            "action": "Couvrir et reposer pendant 15 minutes pour permettre au gluten de se détendre avant de façonner."
          }
        ]
      },
      "feelCue": "La pâte mantoue bien pétrie se sent vivante dans vos mains – lisse, résiliente et légèrement chaude par la friction du pétrissage, avec un léger parfum de levure propre."
    },
    {
      "nodeId": "step_2",
      "action": "Faire lever",
      "inputs": [
        "smooth_mantou_dough"
      ],
      "outputState": "proofed_mantou_dough",
      "instructions": "Placer la pâte dans un bol légèrement huilé, recouvrir d'un chiffon humide et la mettre à l'épreuve au chaud (28-30 C) pendant 60 minutes, ou jusqu'à ce qu'elle ait doublé. Ne précipitez pas cette preuve — une montée lente, même, développe une miette plus uniforme, finement bulleuse que rapide.",
      "visualCue": {
        "primaryTarget": "La toux a visiblement doublé sa taille; presser un doigt fariné dans le centre laisse un tiret qui se remplit lentement (pas immédiatement) vers la moitié.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux a à peine grandi; l'entonnoir d'essai de poke se remplit immédiatement et au printemps.",
            "action": "Retour à un endroit plus chaud et attendre; la levure a besoin d'une chaleur constante supérieure à 25°C."
          },
          {
            "state": "Perfect",
            "description": "Clairement doublé, la pâte est oreiller et léger, le poke laisse un léger tiret qui se rétablit lentement; l'intérieur, déchiré, montre une fine toile de petites bulles.",
            "action": "Frappe doucement et forme."
          },
          {
            "state": "Overdone",
            "description": "La toux a plus que doublé et sent fortement l'alcool de levure; l'entonnoir de poke ne se rétablit pas du tout.",
            "action": "Descendez et formez immédiatement; les petits pains peuvent être légèrement plus denses mais sont encore bons."
          }
        ]
      },
      "feelCue": "Une pâte mantoue bien éprouvée ressemble à un nuage, léger et aéré sous une légère pression, avec un léger parfum de levure."
    },
    {
      "nodeId": "step_3",
      "action": "Façonner",
      "inputs": [
        "proofed_mantou_dough"
      ],
      "outputState": "shaped_mantou",
      "instructions": "Étendre la pâte sur une surface propre. Rouler dans un rectangle plat d'environ 1 cm d'épaisseur. Roulez-le fermement d'une extrémité courte dans un log — cette lamination crée la structure interne stratifiée. Couper le log en 6-8 parties ovales égales. Placez chaque côté coupé sur un petit carré de papier parchemin. Couvrir avec un chiffon humide et laisser reposer 25-30 minutes pour la deuxième épreuve.",
      "visualCue": {
        "primaryTarget": "Buns en forme qui sont lisses sur le dessus, légèrement bombés, et visiblement plus gonflés que lors de la première coupe; le motif en spirale de la lamination est visible sur les extrémités de coupe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les buns ont l'air denses et plats; ils ne se sont pas détendus et se sont levés après la formation.",
            "action": "Donnez - leur plus de temps — 10 à 15 minutes de repos; la cuisine froide ralentit cette preuve."
          },
          {
            "state": "Perfect",
            "description": "Les buns sont rampants et légèrement bombés; ils se branlent doucement lorsque le plateau est déplacé; la surface est lisse et légèrement tendue.",
            "action": "Steam immédiatement sur l'eau déjà bouillante."
          },
          {
            "state": "Overdone",
            "description": "Les buns sont surproofés et très gonflés avec une peau de surface ridée et lâche.",
            "action": "Steam immédiatement; ne pas attendre plus longtemps ou ils peuvent s'effondrer pendant la vapeur."
          }
        ]
      },
      "feelCue": "Un bun mantou correctement éprouvé se sent comme un ballon mou — la pression douce le compresse et il ressort lentement, plein de gaz qui lui donnera sa texture d'oreiller-douce signature."
    },
    {
      "nodeId": "step_4",
      "action": "vapeur",
      "inputs": [
        "shaped_mantou"
      ],
      "outputState": "finished_mantou",
      "instructions": "Portez l'eau du vapeur à ébullition avant de placer les pains à l'intérieur. Laisser 3-4 cm d'espace entre chaque pain au fur et à mesure qu'ils s'étendent. Couvrir avec un couvercle serré et la vapeur à feu vif pendant 12-15 minutes selon la taille. Critique : ne pas soulever le couvercle pendant la vapeur. Lorsque le temps est écoulé, éteignez la chaleur et laissez le couvercle allumé pendant 5 minutes complètes avant l'ouverture — le reste empêche la chute soudaine de la température qui provoque une diminution de la surface et des rides.",
      "visualCue": {
        "primaryTarget": "Des petits pains parfaitement blancs, à surface lisse, qui ont augmenté d'environ 30 % et ont l'air uniformément plumés sans ride, ni piquant, ni jaunissant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les buns sont légèrement denses et la pâte se sent gommée au centre lorsqu'elle est étagée; la surface peut avoir de petites taches humides.",
            "action": "Récupérer et vapeur pendant 2-3 minutes."
          },
          {
            "state": "Perfect",
            "description": "Les buns sont blancs purs, brillants et parfaitement lisses; ils ressortent immédiatement lorsqu'ils sont pressés d'un doigt; l'intérieur est fin-brûlé, doux et légèrement doux.",
            "action": "Servir immédiatement ou laisser refroidir et réchauffer à la vapeur 3-5 minutes."
          },
          {
            "state": "Overdone",
            "description": "La surface est ridée et piquée; les pains ont légèrement rétréci — le couvercle a été levé trop tôt et l'air froid a frappé la surface chaude.",
            "action": "Ils ont un bon goût; les rides sont seulement cosmétiques — re-steam pendant 2 minutes pour lisser partiellement la surface."
          }
        ]
      },
      "feelCue": "Un mantou à la vapeur se sent incroyablement léger pour sa taille, comme tenir un nuage chaud, et le presser doucement laisse une impression de bout de doigt qui rebondit presque instantanément vers un dôme parfait."
    }
  ]
};
