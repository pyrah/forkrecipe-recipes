export default {
  "repoId": "master_british_scallops_with_pea_puree_001",
  "parentRepoId": null,
  "slug": "scallops-with-pea-puree",
  "author": "ForkRecipe Kitchen",
  "title": "Scallops Seared avec Pea Purée et Pancetta",
  "description": "Des pétoncles royaux à la sauce veloutée, au pois doux et à la pancetta croustillante, un restaurant classique en trois parties avec une marge d'erreur brutalement simple : doré d'un côté, translucide au centre.",
  "cuisine": "Anglais",
  "culture": "Britanniques modernes",
  "category": "seafood",
  "tags": [
    "Sans gluten"
  ],
  "difficulty": 3,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Stylos à tête grise, emballés à sec, désossés",
      "ratioValue": 12,
      "defaultUnit": "whole",
      "substitutions": [
        "grands pétoncles marins (U10)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Pois de jardin congelés",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "pois frais, écossés",
        "petits pois"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Pancetta, en dés (ou en lardons)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "guanciale",
        "lardons de bacon fumés"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Échalote, finement coupée",
      "ratioValue": 1,
      "defaultUnit": "large",
      "substitutions": [
        "petit oignon"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 1,
      "defaultUnit": "clove",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Double crème (crème lourde)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "Crème fraîche"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Feuilles fraîches de menthe",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "feuilles de basilic"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Huile neutre (fleur de soleil ou graines de raisin)",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Poivre blanc",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": [
        "poivre noir"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Garnish",
      "name": "pousses de pois ou cresson d'eau",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "microherbes",
        "bébé cress"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_02",
        "ing_07",
        "ing_08"
      ],
      "outputState": "pea_puree",
      "instructions": "Faire fondre 20 g de beurre dans une petite casserole à feu moyen. Ajouter l'échalote en dés et l'ail avec une pincée de sel et transpirer doucement pendant 3 à 4 minutes jusqu'à ce qu'il soit complètement doux et translucide — sans couleur du tout. Ajouter les pois congelés et la double crème, laisser mijoter et cuire 3 minutes jusqu'à ce que les pois soient tendres et brillants. Transférer tout dans un mélangeur, ajouter les feuilles de menthe, et mélanger à haute jusqu'à ce que complètement lisse. Passez à travers un tamis si vous voulez soyeux niveau restaurant. Assaisonner de sel, de poivre blanc et d'une petite pression de citron. Restez au chaud.",
      "visualCue": {
        "primaryTarget": "Une purée verte douce et vive avec le reflet d'une crème de légumes fine. Il tombe d'une cuillère dans un ruban lent et contrôlé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La purée est grumelée et pâle — les pois n'ont pas été cuits assez longtemps avant le mélange, et l'échalote est encore gritty.",
            "action": "Retourner au mélangeur et le traiter plus longtemps. Si elle est encore grumelée, poussez dans un tamis."
          },
          {
            "state": "Perfect",
            "description": "La purée est un vert de printemps vif et uniforme avec une surface en velours. Il tombe dans un ruban lent de la cuillère et tient sa forme sur l'assiette. La menthe est présente mais non dominante.",
            "action": "Conserver couvert dans un bain-marie chaud ou un four bas."
          },
          {
            "state": "Overdone",
            "description": "La purée a transformé un vert grisâtre — les pois ont été trop cuits et la chlorophylle s'est dégradée.",
            "action": "Continuez. La saveur est encore bonne, mais la couleur est perdue. La prochaine fois, faire cuire les pois seulement 3 minutes et mélanger immédiatement."
          }
        ]
      },
      "feelCue": "La purée doit couler d'une cuillère chaude comme de la peinture épaisse — ni si raide qu'elle soit rigide ni si mince qu'elle coule dans une flaque sur l'assiette."
    },
    {
      "nodeId": "step_2",
      "action": "Fry",
      "inputs": [
        "ing_03"
      ],
      "outputState": "crispy_pancetta",
      "instructions": "Placer la pancetta en dés dans une poêle sèche et froide et la mettre à feu moyen. Comme la graisse rend lentement, la pancetta sera croustillante uniformément sans brûler. Cuire de 5 à 7 minutes en remuant de temps en temps, jusqu'à ce que les dés soient profondément dorés et croustillants et que la graisse qui les entoure soit complètement extraite. Retirer avec une cuillère à fente et égoutter sur une serviette en papier. Réservez la graisse fondue dans la poêle, qui servira à saisir les pétoncles.",
      "visualCue": {
        "primaryTarget": "Les dés sont une acajou profonde. Crispy tout au long sans centres mous ou mâcheurs. La graisse a rendu clair.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pancetta est dorée mais encore douce et productive. Le gras n'est pas entièrement rendu — les dés seront croustillants plutôt que croustillants.",
            "action": "Continuer la cuisson à feu moyen pendant 2 à 3 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "Les dés sont uniformément d'or foncé à acajou clair, croustillant tout le long du chemin, et se brisent légèrement lorsqu'ils sont pressés. La graisse rendue est de l'or clair.",
            "action": "Retirer et égoutter immédiatement — ils continueront à colorier de la chaleur résiduelle."
          },
          {
            "state": "Overdone",
            "description": "Les dés sont brun foncé, et commencent à sentir l'acride. La graisse rendue est brune.",
            "action": "Retirer et égoutter. Trim tous les morceaux noircis. La saveur sera intensément fumée plutôt que équilibrée — utilisez une plus petite quantité."
          }
        ]
      },
      "feelCue": "Crispy pancetta devrait éclater avec un claquage propre entre vos doigts, pas plier ou se sentir cuir. Si ça se penche, il lui faut plus de temps."
    },
    {
      "nodeId": "step_3",
      "action": "Sear",
      "inputs": [
        "ing_01",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "seared_scallops",
      "instructions": "Les pétoncles sont complètement secs avec une serviette en papier — c'est l'étape la plus importante. N'importe quelle humidité de surface va vapeur plutôt que de semer. Assaisonner les deux faces plates avec du sel et du poivre blanc. Ajouter l'huile neutre dans la poêle à matières grasses de la pancetta et chauffer sur la chaleur la plus élevée possible jusqu'à ce que l'huile commence à fumer. Placez les pétoncles à plat dans la poêle, un par un, et ne les touchez pas pendant exactement 90 secondes à 2 minutes. La mer doit être ininterrompue. Ils sont prêts à basculer lorsqu'ils se libèrent facilement de la poêle — pas quand le minuteur le dit.",
      "visualCue": {
        "primaryTarget": "Une croûte d'acajou profonde sur la face inférieure. Les côtés du pétoncle sont blancs opaques et cuits environ les deux tiers du chemin vers le haut. Le haut reste translucide et brillant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La taille est en or pâle, patchy ou inexistante. Le pétoncle est resté dans la poêle quand vous avez essayé de le retourner.",
            "action": "Laisse tomber. Un pétoncle se libère d'une casserole chaude lorsque la croûte s'est formée — il ne se libérera pas avant."
          },
          {
            "state": "Perfect",
            "description": "Une croûte caramélisée en or foncé définie sur le visage mariné. Les côtés sont blancs jusqu'aux deux tiers. Le centre supérieur est encore translucide et légèrement brillant — le pétoncle est essentiellement cru à son cœur, ce qui est correct.",
            "action": "Flip, faire cuire 30 à 45 secondes, ajouter le beurre froid et faire baste."
          },
          {
            "state": "Overdone",
            "description": "Le pétoncle est entièrement blanc opaque tout au long du parcours. La mer est très sombre. Le pétoncle se sent ferme lorsqu'il est pressé.",
            "action": "Retirer immédiatement et plaquer. Un pétoncle surcuit est caoutchouteux — servez-le le plus rapidement possible, la sauce et la purée vous aideront."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur un pétoncle avec votre bout de doigt après avoir retourné — il devrait se sentir comme un oreiller doux et résistant avec un léger donner. La fermeté caoutchouteuse signifie qu'elle est trop cuite."
    },
    {
      "nodeId": "step_4",
      "action": "Monter",
      "inputs": [
        "seared_scallops",
        "ing_06",
        "ing_09"
      ],
      "outputState": "basted_scallops",
      "instructions": "Au moment où les pétoncles sont retournés, ajouter le beurre froid restant dans la poêle en deux morceaux. Il fondra et moussera immédiatement dans la chaleur résiduelle. Incliner la poêle et utiliser une cuillère pour assainir continuellement les pétoncles avec le beurre moussant pendant 30 à 45 secondes. Ajouter une petite pression de citron. Enlevez les pétoncles au moment où le deuxième côté montre un or pâle — le centre devrait encore se sentir céder. Reposez-vous sur une assiette chaude pendant 30 secondes pendant que vous arrangez les composants.",
      "visualCue": {
        "primaryTarget": "Les pétoncles sont dorés sur les deux faces plates aux côtés blancs. La mousse de beurre brun s'accroche à la surface. L'assiette sous eux brille de beurre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le deuxième visage est encore pâle et sans croûte. Le beurre n'est pas mousseux — la poêle a perdu trop de chaleur en ajoutant du beurre froid.",
            "action": "Augmenter brièvement la chaleur pour restaurer la mousse et continuer à se baser."
          },
          {
            "state": "Perfect",
            "description": "Les deux visages sont dorés. Le beurre a moulu et est devenu brun-noix pâle, donnant une note de noisette. Les pétoncles se sentent doux et productifs. Le centre est translucide en tranches.",
            "action": "Assiette immédiatement — les pétoncles n'attendent personne."
          },
          {
            "state": "Overdone",
            "description": "Le beurre a brûlé au-delà du brun jusqu'au noir. Une odeur d'acride. Les pétoncles se sentent fermes.",
            "action": "Tout de suite. Essuyer l'excès de beurre foncé des pétoncles avec une cuillère propre avant de servir."
          }
        ]
      },
      "feelCue": "Le beurre basting devrait mousser et siffler constamment — dès qu'il se calme, soit la chaleur est trop faible, soit les pétoncles doivent sortir."
    },
    {
      "nodeId": "step_5",
      "action": "Assemblage",
      "inputs": [
        "pea_puree",
        "basted_scallops",
        "crispy_pancetta",
        "ing_13"
      ],
      "outputState": "finished_scallops_plate",
      "instructions": "Travaillant rapidement, cuillerez un swoosh de purée de pois chauds sur chaque assiette en utilisant le dos d'une cuillère chaude. Disposer trois pétoncles par plaque sur et autour de la purée, côté mer face à la croûte. Dispersez les dés croustillants de la pancetta autour des pétoncles. Terminer avec un petit groupe de pousses de pois ou de cresson d'eau placé au centre, vêtu d'une petite bruine d'huile d'olive. Les trois éléments doivent arriver ensemble: n'importe lequel d'entre eux détruit froid le plat.",
      "visualCue": {
        "primaryTarget": "Purée verte vive, trois pétoncles dorés, une pancetta acajoue et des pousses vert vif – quatre couleurs et textures distinctes sur l'assiette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La purée est froide et a formé une peau. Pancetta s'est adouci par l'humidité. Les composants se sentent assemblés par étapes plutôt que simultanément.",
            "action": "Ce plat n'attend rien. Tout doit être chaud et assemblé en moins de 90 secondes."
          },
          {
            "state": "Perfect",
            "description": "La purée est chaude et vive. Les pétoncles sont chauds avec une croûte crépitante. Pancetta est croustillante. Les pousses de pois sont fraîches et droites. Les trois températures et textures sont présentes simultanément.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les pousses de pois se sont flétries au-dessus des pétoncles chauds. Purée s'est étendue à plat sur l'assiette. Les composants se sont fusionnés.",
            "action": "Plaque plus rapidement la prochaine fois. Une plaque chaude et préchauffée permet de maintenir les composants en place."
          }
        ]
      },
      "feelCue": "Lorsque vous coupez à travers un pétoncle parfait, il devrait donner avec presque aucune résistance aux bords, puis offrir une légère résistance crémeuse au centre translucide — comme couper à travers le beurre froid qui a été laissé dehors pendant dix minutes."
    }
  ]
};
