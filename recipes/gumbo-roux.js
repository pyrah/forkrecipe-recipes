export default {
  "repoId": "master_american_gumbo-roux_001",
  "parentRepoId": null,
  "slug": "gumbo-roux",
  "author": "ForkRecipe Kitchen",
  "title": "Nouvelle-Orléans Roux noir",
  "description": "Des poids égaux de farine et d'huile ont été brassés sans interruption pendant 45 minutes jusqu'à ce que la pâte passe de la blonde au beurre d'arachide au chocolat de lait à l'amande foncée — un roux si sombre qu'il sent le café rôti et les noix, le fondement irremplaçable du gumbo.",
  "cuisine": "Américain",
  "culture": "Créole",
  "category": "sauces",
  "tags": [
    "rouge",
    "Gumbo",
    "nouveaux Orléans",
    "cajun",
    "végétalien"
  ],
  "difficulty": 3,
  "activeTime": "55 min",
  "totalTime": "55 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 5,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Huile végétale neutre (canola ou maïs)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "saindoux (plus traditionnel, ajoute de la saveur)",
        "gras de canard (richissant)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "farine de riz (sans gluten, corps légèrement plus mince)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Chaleur",
      "inputs": [
        "ing_01"
      ],
      "outputState": "hot_oil",
      "instructions": "Verser l'huile dans une poêle en fonte à fond lourd ou un four hollandais. Chauffer sur une hauteur moyenne à moyenne jusqu'à ce que l'huile mijote et qu'une pincée de farine tombe immédiatement et vigoureusement dans les étourdissements. L'huile doit être complètement chaude avant l'entrée de la farine — l'huile froide ou chaude provoque la farine à absorber inégalement la graisse et produit un roux grumelé qui ne se lisse jamais.",
      "visualCue": {
        "primaryTarget": "L'huile brille dans les vagues de chaleur visibles à travers la surface. Une pincée de farine est tombée vigoureusement dans les étourdissements au contact, et non pas au ralenti, une bulle agressive immédiate.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile est chaude mais pas chatoyante. Une farine pince à peine les étourdissements et coule au fond.",
            "action": "Augmenter le feu à moyen-élevé et attendre encore 2 minutes. Ne pas ajouter la farine jusqu'à ce que le vertige soit agressif."
          },
          {
            "state": "Perfect",
            "description": "L'huile brille avec une distorsion de chaleur visible. Le test de la farine produit un étourdissement immédiat, vigoureux et soutenu.",
            "action": "Ajouter toute la farine à la fois et commencer à fouetter immédiatement."
          },
          {
            "state": "Overdone",
            "description": "L'huile commence à fumer. Des spores sombres se lèvent de la surface.",
            "action": "Retirer du feu pendant 30 secondes pour refroidir. L'huile de tabac produit une saveur acride qui va porter dans le roux."
          }
        ]
      },
      "feelCue": "Tenez votre paume à 10 cm au-dessus de l'huile — vous devriez sentir une chaleur importante et constante poussant vers le haut. Si vous ne ressentez que de la chaleur légère, l'huile n'est pas prête."
    },
    {
      "nodeId": "step_2",
      "action": "Whisk",
      "inputs": [
        "hot_oil",
        "ing_02"
      ],
      "outputState": "blond_roux",
      "instructions": "Ajouter la farine tout à la fois à l'huile chaude et commencer immédiatement à fouetter en coups rapides et constants couvrant toute la surface de la poêle. Dans les 30 secondes, le mélange deviendra lisse et uniforme. C'est votre rouge blond, le point de départ. Continuer à fouetter constamment à feu moyen. À ce stade, il n'y a pas de chose comme \"stirer trop\". Si tu t'arrêtes, le fond grouille.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, dorée pâle, la consistance du sable humide. Complètement exempt de morceaux. La couleur est entre un beurre d'arachide blond et léger.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est encore grumelé et pâteux avec des poches de farine sèche visibles.",
            "action": "fouetter plus vigoureusement, en veillant à atteindre les bords et les coins de la poêle."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, pâte blonde uniforme. Glisse librement avec chaque coup de fouet. Pas d'odeur de farine crue: une faible odeur de pâte cuite.",
            "action": "Continuez à fouetter. La progression de la couleur commence maintenant."
          },
          {
            "state": "Overdone",
            "description": "À ce stade, l'overdone signifie des taches brun foncé sur le fond de la poêle et une odeur brûlée.",
            "action": "Si une odeur brûlée est présente, vous devez recommencer. Burnt roux ne peut être sauvé et rendra le gumbo entier goût amer et acride."
          }
        ]
      },
      "feelCue": "Le fouet doit glisser dans le roux avec une résistance constante et lisse, comme en remuant un pudding épais. Toute sensation collante de capture signifie que le roux commence à s'emparer du fond de la poêle; augmenter la vitesse et la portée du fouet."
    },
    {
      "nodeId": "step_3",
      "action": "Caramélisation",
      "inputs": [
        "blond_roux"
      ],
      "outputState": "dark_roux",
      "instructions": "Continuer à fouetter constamment à feu moyen à moyen-vif pendant les 35 à 45 minutes suivantes. Le roux progressera à travers un spectre de couleurs : blond (5 min) → beurre d'arachide (15 min) → chocolat au lait brun (25 min) → chocolat noir (35 min) → amer doux presque noir (45 min). La chaleur est l'ennemi ici — trop élevée et il brûle avant d'atteindre la couleur cible, trop faible et le processus prend plus d'une heure avec moins de développement de saveur. Si à un moment quelconque vous sentez quelque chose brûlé, glissez immédiatement le pot hors du feu et fouettez. Un roux brûlé ne peut être récupéré.",
      "visualCue": {
        "primaryTarget": "Un roux brun foncé, presque noir, de la couleur du chocolat doux amer (70% cacao). La surface doit être mate et dense, pas brillante. La cuisine devrait se remplir de l'odeur du café rôti, des noisettes et du blé profond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Roux est brun lait-chocolat — il produira un bon, gumbo moyen mais sans la pleine profondeur et la complexité d'un vrai créole rouge foncé.",
            "action": "Continuez la cuisson si vous avez le temps. Chaque 5 minutes supplémentaire approfondit significativement la saveur."
          },
          {
            "state": "Perfect",
            "description": "Chocolat noir à presque noir. Des odeurs de noix profondément grillées et de café sans aucune note brûlée. Le roux a diminué légèrement en volume et se sent dense et lourd sur le fouet.",
            "action": "Ajouter immédiatement la Sainte Trinité (oignon, céleri, poivron) pour arrêter la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Le roux est devenu entièrement noir et l'odeur est passée des noix grillées au carbone acride. Ce roux est brûlé.",
            "action": "Jetez toute la casserole. Ne tentez pas d'utiliser le roux brûlé — quelques taches noires dans le gumbo feront le goût entier du plat de l'omble. Recommence."
          }
        ]
      },
      "feelCue": "Un roux foncé agité avec une cuillère doit se sentir significativement plus lourd et plus dense qu'il ne l'a fait blond — l'amidon a été transformé et la masse a légèrement séché. Tenez une petite quantité dans la cuillère et sentez-la bien près : noix grillées et grains de café, avec zéro bord sulfureux ou brûlé."
    },
    {
      "nodeId": "step_4",
      "action": "Bloom",
      "inputs": [
        "dark_roux"
      ],
      "outputState": "finished_gumbo_roux",
      "instructions": "Ajouter immédiatement la Sainte Trinité (à peu près égale parties en dés d'oignon, de céleri et de poivron — généralement 2 tasses combinées pour cette quantité de roux) au roux foncé chaud. Les légumes sifflent de façon explosive et libèrent de la vapeur qui fait chuter la température du roux, arrêtant la cuisson. Incorporer vigoureusement — le roux s'emparera brièvement des légumes, puis se déliera lorsque les légumes libéreront de l'humidité. Cuire les aromatiques dans le roux pendant 5 à 7 minutes jusqu'à ce qu'ils soient adoucis. Ce roux fleuri est la base dans laquelle le stock est ajouté pour le gumbo.",
      "visualCue": {
        "primaryTarget": "Le roux s'est ramolli dans une pâte épaisse et foncée parsemée de légumes translucides adoucissants. La couleur est acajou-brun profond. La vapeur a baissé et le mélange se déplace librement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont encore crus et rigides à l'intérieur du roux. Le roux lui-même a saisi une masse raide autour d'eux.",
            "action": "Continuer à remuer à feu moyen. L'humidité végétale desserre le roux en 2 à 3 minutes."
          },
          {
            "state": "Perfect",
            "description": "Les légumes sont adoucis et translucides. Le roux est lâche, sombre et parfumé. Toute la vapeur a baissé. Le mélange sent le caramel à l'oignon et à l'oignon.",
            "action": "fouetter la louche chaude par la louche pour construire des gumbos, ou refroidir et réfrigérer jusqu'à 1 semaine."
          },
          {
            "state": "Overdone",
            "description": "Les légumes ont cuit trop longtemps et se décomposent en roux. Très bien: le roux sera encore plus doux.",
            "action": "Continuez. La saveur n'est pas affectée."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère à travers le roux fini — il devrait avoir envie de remuer de l'argile épaisse et chaude. Sensé, lourd et profondément parfumé. Soulevez la cuillère et le roux doit s'écouler lentement dans un ruban épais et fondu — pas tomber en morceaux, pas verser comme du liquide."
    }
  ]
};
