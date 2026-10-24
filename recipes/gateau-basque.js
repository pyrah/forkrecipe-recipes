export default {
  "repoId": "master_basque_gateaubasque_001",
  "parentRepoId": null,
  "slug": "gateau-basque",
  "author": "ForkRecipe Kitchen",
  "title": "Gâteau Basque",
  "description": "Une pâtisserie à la bouche encaissant une crème à la vanille — humble, fortement émiettée, riche sans être agitée. Le gâteau de la côte basque française.",
  "cuisine": "Français",
  "culture": "Basque",
  "category": "desserts",
  "tags": [
    "Basque",
    "français",
    "pâtisserie",
    "gâteau",
    "Coutard",
    "tarte",
    "classique",
    "dessert"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "3 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 0,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général — pâtisserie",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "T55 Farine française"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé, température ambiante",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de canne à sucre — pâtisserie",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "sucre glace (gives plus fines miettes)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Oeufs entiers — pâtisserie (3 grands)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Jaune d'œuf — glaçure (1 jaune)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Dairy",
      "name": "Lait entier — crème de pâtisserie",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Pousse de vanille, divisée et grattée",
      "ratioValue": 1,
      "defaultUnit": "pod",
      "substitutions": [
        "1 c. à thé extrait de vanille ou pâte de vanille"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Starch",
      "name": "Farine de maïs",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": [
        "fécule de pomme de terre"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Sweetener",
      "name": "Sucre de canne à sucre — crème de pâtisserie",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Binder",
      "name": "Jaunes d'œufs — crèmes de pâtisserie (3 jaunes)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "hot_pastry_cream",
      "instructions": "Portez le lait à mijoter dans une casserole lourde avec la goutte de vanille et les graines. Pendant ce temps, fouetter les jaunes d'œufs, le sucre de castre et la fécule de maïs ensemble jusqu'à ce qu'ils soient pâles et épais. Lorsque le lait s'évapore, versez-le lentement dans le mélange d'oeufs tout en fouettant constamment. Retourner tout dans la casserole à feu moyen et fouetter continuellement jusqu'à ce que la crème épaississe, bulles, et tient un sentier pendant 2 minutes complètes.",
      "visualCue": {
        "primaryTarget": "Une crème épaisse et brillante qui fond sur le fouet lorsqu'elle est levée et tient sa forme brièvement avant de sombrer lentement. La surface devrait avoir un léger reflet.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème est runny et versable, enrobe le fouet finement. Aucune bulle n'est apparue.",
            "action": "Continuer à fouetter à feu moyen. L'amidon doit atteindre le point d'ébullition pour s'activer — la crème de pâtisserie sous-cuite goûte de la fécule de maïs crue et se fend à froid."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, brillant, et tenant sa forme sur le fouet. Des bulles éclatent paresseusement de la surface. Il agit activement depuis au moins 1 minute.",
            "action": "Retirer du feu, fouetter dans un bouton de beurre si désiré, et transférer dans un plat plat."
          },
          {
            "state": "Overdone",
            "description": "La crème est très épaisse, tirant de la poêle dans les touffes. Des odeurs d'œuf brûlé.",
            "action": "Retirez immédiatement de la chaleur et tendez à travers un tamis. Si de grandes masses d'oeufs brouillés sont visibles, elles ne peuvent pas être sauvées."
          }
        ]
      },
      "feelCue": "Faites glisser un doigt sur l'arrière d'une cuillère enduite de crème de pâtisserie — la ligne doit rester propre et définie. Si elle se remplit immédiatement, cuire plus longtemps."
    },
    {
      "nodeId": "step_2",
      "action": "Refroidir",
      "inputs": [
        "hot_pastry_cream"
      ],
      "outputState": "chilled_pastry_cream",
      "instructions": "Verser la crème de pâtisserie chaude dans un récipient plat et large. Appuyez sur une feuille de film collant directement contre la surface pour empêcher une peau de se former. Réfrigérer jusqu'à ce qu'il soit complètement froid et régler au moins 1 heure. Avant d'utiliser, battre brièvement avec une spatule pour la desserrer à une consistance lisse et pipeable.",
      "visualCue": {
        "primaryTarget": "Crème ferme, lisse, jaune pâle qui tient sa forme lorsqu'elle est écorcée mais peut être étalée avec une spatule. Pas de peau, pas de liquide aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours chaud au toucher. Plongée et versable. La pellicule de cling-cling a levé la surface.",
            "action": "Pressez le film de fixation en arrière contre la surface et réfrigérez pendant au moins 30 minutes."
          },
          {
            "state": "Perfect",
            "description": "Froid, ferme, doux. Tient un tiret propre lorsqu'il est pressé. Éplucher le film dans une feuille propre.",
            "action": "Loyer avec une spatule et utiliser immédiatement pour remplir le gateau."
          },
          {
            "state": "Overdone",
            "description": "Très froid et presque rigide. Difficile à se propager. Peut-être arroser de la condensation si elle n'est pas bien couverte.",
            "action": "Battre fermement avec une spatule pendant 1 minute jusqu'à ce que lisse et extensible à nouveau."
          }
        ]
      },
      "feelCue": "Appuyez sur un bout de doigt dans la crème fraîche — il devrait laisser une impression propre, définie et se sentir frais et réglé, comme un yaourt très ferme."
    },
    {
      "nodeId": "step_3",
      "action": "Crémer",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "creamed_base",
      "instructions": "Battre le beurre à température ambiante et le sucre de roulette ensemble dans un mélangeur de stand avec l'attache de la pagaie (ou à la main) jusqu'à ce que le volume soit pâle, léger et nettement augmenté — environ 4 minutes à vitesse moyenne. Le mélange devrait paraître presque blanc et se sentir aéré.",
      "visualCue": {
        "primaryTarget": "Mélange pâle, presque blanc qui a doublé en volume par rapport au beurre et au sucre d'origine. Flou et léger, sans grains visibles de sucre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours jaune, dense et granuleux. Les granules de sucre sont visibles et audibles lorsque le bol est tapé.",
            "action": "Continuer la crème à vitesse moyenne. L'aération adéquate est ce qui donne au gateau sa texture courte et crumble — cette étape ne peut pas être précipitée."
          },
          {
            "state": "Perfect",
            "description": "ivoire pâle, doublé en volume et moelleux. Frotte les doigts sans grain.",
            "action": "Ajouter les œufs un à la fois avec le mélangeur."
          },
          {
            "state": "Overdone",
            "description": "Surbattre et commencer à regarder séparé ou caillé, avec du beurre striant le bol.",
            "action": "Ajouter immédiatement un œuf — il aidera à réémulsionner le mélange."
          }
        ]
      },
      "feelCue": "Une pincée de beurre bien crémeux et de sucre frotté entre le pouce et l'index doit se sentir lisse et complètement exempt de granules, presque comme la crème du visage."
    },
    {
      "nodeId": "step_4",
      "action": "Mélange",
      "inputs": [
        "creamed_base",
        "ing_04"
      ],
      "outputState": "egg_butter_mixture",
      "instructions": "Lorsque le mélangeur tourne sur le milieu, ajouter les œufs entiers un à la fois, en attendant que chacun soit complètement incorporé avant le suivant. Si le mélange commence à paraître caillé, ajoutez une cuillère de farine pour la stabiliser. Le résultat doit être une émulsion lisse, pâle et brillante.",
      "visualCue": {
        "primaryTarget": "Un mélange doux, pâle, crémeux qui tient ensemble et a un éclat léger et brillant. Versable mais épais — semblable à une pâte à gâteau épaisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Oeufs non entièrement incorporés — stries de jaune visibles, mélange inégal.",
            "action": "Continuer à battre à vitesse moyenne jusqu'à ce que le mélange soit uniforme et brillant."
          },
          {
            "state": "Perfect",
            "description": "Doux, émulsifié, léger. La pagaie laisse des sentiers propres lorsqu'elle est levée.",
            "action": "Pliez dans la farine, la poudre à pâte et le sel."
          },
          {
            "state": "Overdone",
            "description": "Le mélange s'est fendu: il a l'air granuleux et humide, avec du beurre. Des œufs froids ajoutés trop rapidement.",
            "action": "Chauffer le bol doucement avec une torche de cuisine ou un chiffon chaud, et battre vigoureusement. Une cuillère de farine aidera."
          }
        ]
      },
      "feelCue": "Le mélange de beurre d'oeufs devrait être soyeux et léger dans le bol — vous devriez être en mesure de le voir trembler légèrement lorsque le bol est tapé, pas s'asseoir lourd."
    },
    {
      "nodeId": "step_5",
      "action": "Incorporer délicatement",
      "inputs": [
        "egg_butter_mixture",
        "ing_01",
        "ing_06",
        "ing_07"
      ],
      "outputState": "basque_shortcrust",
      "instructions": "Mélanger la farine, la poudre à pâte et le sel directement sur le mélange de beurre d'oeufs. Plier doucement avec une spatule – couper à travers le centre, plier à partir du bas, tourner le bol et répéter. Arrêtez le moment où aucune farine sèche n'est visible. Ne pas trop mélanger — il s'agit d'une pâte courte, miettes, pas d'une pâte développée.",
      "visualCue": {
        "primaryTarget": "Une pâte douce et légèrement collante qui tient à peine ensemble. Pas de stries de farine visibles. Couleur pâle uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Échelles de farine sèche visibles au fond ou aux bords du bol.",
            "action": "Continuez à plier avec une main légère — juste assez pour incorporer les dernières traces de farine."
          },
          {
            "state": "Perfect",
            "description": "Uniforme, pâte douce qui tient juste ensemble. Pas brillant, pas dur. Légèrement collant.",
            "action": "Divisez en deux tiers et un tiers des portions, aplatissez-les en disques, enveloppez-les dans un film de collage et refroidissez 1 heure."
          },
          {
            "state": "Overdone",
            "description": "Dough s'est durci et est devenu brillant par le surmenage du gluten. Élastique quand étiré.",
            "action": "Refroidir au moins 2 heures avant de rouler — se reposer relaxe le gluten sur-développé."
          }
        ]
      },
      "feelCue": "La pâte à pâtisserie basque doit se sentir douce et légèrement collante — juste assez ferme pour appuyer sur la forme, mais elle s'effondrera si elle est manipulée trop agressivement quand elle est chaude."
    },
    {
      "nodeId": "step_6",
      "action": "Réfrigérer",
      "inputs": [
        "basque_shortcrust"
      ],
      "outputState": "chilled_shortcrust",
      "instructions": "Envelopper les deux portions de pâte dans un film de collage, presser dans des disques plats et réfrigérer pendant au moins 1 heure. Cette période de repos relaxe tout gluten, ferme le beurre, et rend la pâte utilisable sans s'effondrer. Préchauffer le four à 180°C (355°F) pendant que la pâte refroidit.",
      "visualCue": {
        "primaryTarget": "Des disques fermes et froids de pâte pâle qui tiennent leur forme complètement et ne collent pas au toucher.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est encore douce et collante, déformant sous pression des doigts.",
            "action": "Refroidir plus longtemps. Des larmes et des miettes chaudes à courte croûte lorsqu'on les travaille dans la poêle."
          },
          {
            "state": "Perfect",
            "description": "Disques froids et fermes qui craquent légèrement lorsqu'ils sont pliés mais qui ne sont pas cassants. Pas collant au toucher.",
            "action": "Travaillez rapidement — pressez ou roulez la grande partie dans la base et les côtés d'une boîte de tarte de 22 cm."
          },
          {
            "state": "Overdone",
            "description": "La toux est très dure et craque quand elle est courbée. Trop froid du frigo.",
            "action": "Laisser reposer à température ambiante pendant 5 minutes avant de travailler."
          }
        ]
      },
      "feelCue": "La pâte réfrigérée doit se sentir comme de l'argile froide, ferme, fraîche et utilisable, mais souple sans s'effondrer lorsqu'elle est pressée entre deux palmiers plats."
    },
    {
      "nodeId": "step_7",
      "action": "Assembler",
      "inputs": [
        "chilled_shortcrust",
        "chilled_pastry_cream",
        "ing_05"
      ],
      "outputState": "assembled_gateau",
      "instructions": "Appuyez sur la plus grande partie de la pâte dans la base et sur les côtés d'une boîte de tarte beurrée de 22 cm. Étendre la crème de pâtisserie fraîche uniformément sur la base, en laissant une bordure de 1 cm. Rouler ou presser la plus petite partie de pâte dans un disque pour couvrir. Scellez fermement les bords. Badigeonner le haut de jaune d'œuf battu et marquer un motif de croisement avec une fourchette.",
      "visualCue": {
        "primaryTarget": "Une tarte bien assemblée avec un couvercle plat, uniformément épais, serti scellé tout autour, et un lavage d'œuf doré avec un croisement visible marqué sur la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le couvercle de pâtisserie n'a pas été scellé sur les côtés — des trous visibles au bord. La crème peut être trop épaisse ou trop proche du bord.",
            "action": "Appuyez fermement sur les bords avec le bout des doigts mouillés. Le lavage des œufs aidera également à sceller pendant la cuisson."
          },
          {
            "state": "Perfect",
            "description": "Même couvercle de pâtisserie, scellé tout autour, croisé marqué. Le lavage des oeufs est uniforme et jaune doré.",
            "action": "Cuire immédiatement sur la grille du milieu."
          },
          {
            "state": "Overdone",
            "description": "Le couvercle de pâte a été pressé si fin qu'il est translucide. Crème visible à travers la pâtisserie.",
            "action": "Couper avec un morceau de pâte fraîche pressé sur la zone mince."
          }
        ]
      },
      "feelCue": "Exécutez un bout de doigt le long du bord serti — il doit se sentir uniformément ferme et froid, avec une épaisseur constante, vous donnant confiance que le sceau tiendra par la cuisson."
    },
    {
      "nodeId": "step_8",
      "action": "Cuire au four",
      "inputs": [
        "assembled_gateau"
      ],
      "outputState": "finished_gateau_basque",
      "instructions": "Cuire à 180°C (355°F) pendant 35 à 40 minutes jusqu'à ce qu'il soit bien doré partout, avec le motif d'intersection clairement visible et le bruit de pâtisserie creux lorsqu'il est tapé sur le dessus. Laisser refroidir dans l'étain pendant 15 minutes, puis déformer. Servir à température ambiante — jamais chaud, jamais froid.",
      "visualCue": {
        "primaryTarget": "Deep, même doré-brun sur toute la surface supérieure avec un motif de croisement clairement défini et des bords légèrement plus foncés. Le porteau s'est éloigné des côtés en étain.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle sur le dessus, doux au toucher. Le crosshatch a à peine développé la couleur. Une brochette sort avec de la crème dessus.",
            "action": "Retourner au four 5 minutes de plus. Le gateau Basque sous le feu a une couche crue et pâteuse directement sous le couvercle de la pâtisserie."
          },
          {
            "state": "Perfect",
            "description": "Riche, même brun doré aux bords croustillants. Des robinets creux. Une brochette sort propre ou avec des miettes sèches seulement.",
            "action": "Laisser refroidir 15 minutes dans l'étain avant de se démouler. Servir à température ambiante."
          },
          {
            "state": "Overdone",
            "description": "Très brun foncé sur le dessus, les bords presque brûlés. La cuisine sent le beurre caramélisé.",
            "action": "Cool et inaltérable — l'intérieur sera probablement parfait. Poussière avec du sucre glaçant pour cacher la croûte noire."
          }
        ]
      },
      "feelCue": "Un gateau Basque cuit au four doit se sentir solide et complètement réglé lorsqu'il est pressé doucement au centre — pas de friction, pas de donner. Le son en tapant le haut doit être propre et creux."
    }
  ]
};
