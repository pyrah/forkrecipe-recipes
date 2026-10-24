export default {
  "repoId": "master_caribbean_pernil_001",
  "parentRepoId": null,
  "slug": "pernil",
  "author": "ForkRecipe Kitchen",
  "title": "Pernil (Épaule puertoricaine de porc roulée lentement)",
  "description": "Une épaule de porc désossée enterrée dans l'ail-sazón adobo et marinée pendant 24 heures, puis torréfié bas et lent jusqu'à ce que la viande soit tendre à l'automne - puis soufflée haut pour transformer la peau épaisse en la cuerito croquante et éclatante qui est la partie la plus convoitée de tout le plat.",
  "cuisine": "Caraïbes",
  "culture": "Portoricain",
  "category": "proteins",
  "tags": [
    "puerto-rican",
    "porc",
    "torréfié lentement",
    "Adobo",
    "cuerito",
    "Caribbean",
    "jour férié"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "10 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Epaule de porc désossée (pique ou butte de Boston), avec peau",
      "ratioValue": 3500,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Origan séché",
      "ratioValue": 12,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Poivre noir, grossièrement moulu",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 45,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre blanc distillé",
        "jus d'orange aigre"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Sazón (avec mélange achiote/culantro)",
      "ratioValue": 12,
      "defaultUnit": "g",
      "substitutions": [
        "paprika fumé + cumin"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Coriandre fraîche aux tiges, hachée approximativement",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel de mer grossier (pour la peau)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "adobo_paste",
      "instructions": "À l'aide d'un pilón (mortaire et peste) ou d'un robot culinaire, livrez l'ail, l'origan, le sel, le poivre et le cumin à une pâte brute. Ajouter le vinaigre et l'huile d'olive et mélanger à un adobo épais et piquant. Incorporer le sazón et la coriandre. La pâte doit être assez épaisse pour être enfoncée dans des incisions sans tomber.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse, jaune-orange rugueuse, tachetée d'origan et de coriandre. Ail fort et arôme d'herbe. Assez épais pour tenir sa forme sur une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est toujours chunky et n'est pas complètement incorporé dans une pâte.",
            "action": "Pound ou plus. Les morceaux d'ail brûlent au four et goûtent acrides."
          },
          {
            "state": "Perfect",
            "description": "Pâte lisse avec un peu de texture. Une orange vive de sazón. De l'ail et des herbes.",
            "action": "Appliquer immédiatement sur le porc."
          },
          {
            "state": "Overdone",
            "description": "S.O. — pâte brute.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "L'adobo doit se sentir assez épais pour se poser sur une cuillère — s'il glisse immédiatement, il est trop mince et va manquer des incisions plutôt que de rester en place."
    },
    {
      "nodeId": "step_2",
      "action": "Faire mariner",
      "inputs": [
        "ing_01",
        "adobo_paste",
        "ing_11"
      ],
      "outputState": "marinated_pernil",
      "instructions": "Noter la peau dans un motif de croisement, couper la peau et la graisse mais pas la viande. À l'aide d'un couteau fin et tranchant, faire 20 à 30 incisions profondes sur toute la viande (sous et autour du rabat de peau) et pousser une quantité généreuse d'adobo dans chacun avec votre doigt. Frotter le reste de l'adobo sur toute la viande. Frotter le sel grossier sur toute la peau. Placer dans une poêle, côté peau, à découvert, au réfrigérateur pendant 24 à 36 heures.",
      "visualCue": {
        "primaryTarget": "Après la marination, la peau est sèche et pâle, les coupes croisées sont clairement visibles. La viande visible autour des bords de la peau est obscurcie depuis l'adobo.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Marié moins de 8 heures. La saveur d'Adobo ne sera qu'en surface, pas profonde.",
            "action": "Le minimum de 24 heures est essentiel pour une épaule aussi grande. Planifiez-vous."
          },
          {
            "state": "Perfect",
            "description": "La peau est sèche et mate après 24 heures. Les coupes croisées sont sèches aux bords. La viande exposée est profondément teintée avec la pâte d'adobo.",
            "action": "Retirer du réfrigérateur 1 heure avant la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Marié au-delà de 48 heures.",
            "action": "Toujours excellent — le pernil est très indulgent sur le temps de la mariation."
          }
        ]
      },
      "feelCue": "Au bout de 24 heures, faites glisser un doigt sur la peau — il devrait se sentir complètement sec, comme du papier épais. Toute humidité signifie que la peau ne craquera pas correctement."
    },
    {
      "nodeId": "step_3",
      "action": "Rôtir",
      "inputs": [
        "marinated_pernil"
      ],
      "outputState": "slow_roasted_pernil",
      "instructions": "Placer le côté peau de porc sur un rack dans une poêle à rôtir profonde. Ajouter 2 tasses d'eau au fond de la casserole. Couvrir soigneusement avec du papier. Faire rôtir à 160 C (325 F) pendant 5 à 6 heures (environ 1,5 heure par kilogramme). Le porc se fait lorsqu'un thermomètre à lecture instantanée lit 90 C (195 F) à la partie la plus épaisse — cette température assure que tout le collagène a été transformé en gélatine.",
      "visualCue": {
        "primaryTarget": "Après 5 heures, le lever révèle une épaule qui s'est visiblement contractée et s'est effondrée. La peau a l'air pâle et vapeur. Les jus dans la casserole sont riches et parfumés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Température intérieure inférieure à 85 C. La viande conserve sa forme fermement et ne déchiquete pas facilement.",
            "action": "Continuez à rôtir. Ne vous précipitez pas — la conversion du collagène dépend de la température, et non du temps."
          },
          {
            "state": "Perfect",
            "description": "La viande tombe en gros morceaux lorsqu'elle est sonnée à l'aide d'une fourchette. L'os peut être wiggged librement. Les jus sont dégagés. Température interne 90-95 C.",
            "action": "Retirer le papier et faire sauter la peau à feu vif."
          },
          {
            "state": "Overdone",
            "description": "La viande a séché aux bords de la chaleur du four malgré la feuille. Il a perdu un peu de jutosité.",
            "action": "Badigeonner avec les gouttes d'eau de la casserole et procéder à un croustillant à haute chaleur immédiatement."
          }
        ]
      },
      "feelCue": "Au bout de 5 heures, pressez l'épaule à travers la feuille de votre main — il devrait se sentir comme un oreiller de graisse fondue et de viande tendre, donnant complètement. Aucune résistance ne signifie que le collagène a fait son travail."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "slow_roasted_pernil"
      ],
      "outputState": "finished_pernil",
      "instructions": "Retirer la feuille et augmenter le four à 230 C (450 F). Rôtir à découvert pendant 30 à 45 minutes, en observant constamment, jusqu'à ce que la peau bulle et se brise en cuerito doré. Faites tourner la poêle toutes les 10 minutes. La peau doit passer de pâle et vapeur à blister et dorée — écoutez le son crépitant et éclatant.",
      "visualCue": {
        "primaryTarget": "La peau est un uniforme mahogany doré, complètement cloquée et gonflée dans des bulles craquantes individuelles. Il ressemble à une vaste étendue croustillante de dômes dorés à travers l'épaule.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est encore pâle et mâcheuse. Les bulles ne se sont pas formées en sections.",
            "action": "Continuer à feu vif. En cas d'inégalité, faire tourner la poêle plus fréquemment."
          },
          {
            "state": "Perfect",
            "description": "Toute la surface de la peau est dorée et cloquée. Taper avec un noeud fait un craquement creux. La partie la plus convoitée du plat — distribuer équitablement.",
            "action": "Reposez-vous 15 minutes avant la sculpture."
          },
          {
            "state": "Overdone",
            "description": "La peau est brun très foncé et les bords brûlent. Une odeur amère.",
            "action": "Tente lâchement avec du papier et retirer immédiatement du four. Coupez les bords les plus sombres."
          }
        ]
      },
      "feelCue": "Tapez sur le cuerito — il devrait sonner comme frapper sur une coquille d'oeuf dur, sèche et résonante. Tout son doux et terne signifie qu'il y a des poches qui ne sont pas croquées."
    },
    {
      "nodeId": "step_5",
      "action": "Laisser reposer",
      "inputs": [
        "finished_pernil"
      ],
      "outputState": "rested_plated_pernil",
      "instructions": "Repos à découvert pendant 15 minutes. Couper en tirant la viande en gros morceaux avec deux fourchettes — le pernil ne doit pas être tranché, il doit être tiré. Garder la cuerito intacte et la casser séparément, en la distribuant équitablement. Servir avec arroz con gandoles et tostones.",
      "visualCue": {
        "primaryTarget": "Poulet de porc en gros morceaux juteux, foncé avec adobo. Les morceaux de cuerito brisés sont dorés-mahogany, éclatant quand pressé. Les gouttes de pan sont riches et teintées d'orange.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande est coupée au lieu d'être extraite — elle se tient en morceaux fermes plutôt que de céder à la fourchette.",
            "action": "Si la viande doit être coupée, retourner au four à 160 °C pendant 30 minutes supplémentaires."
          },
          {
            "state": "Perfect",
            "description": "La viande tire dans des lambeaux longs, humides, parfumés. Cuerito est doré et brisé. Les gouttes d'eau de la casserole, arrosées sur la viande, sont la meilleure sauce possible.",
            "action": "Servez."
          },
          {
            "state": "Overdone",
            "description": "Cuerito est devenu doux de la vapeur de repos.",
            "action": "Mettre le gril à l'eau pendant 2 minutes avant de recommencer à servir."
          }
        ]
      },
      "feelCue": "La viande reposée devrait se détacher en longs morceaux sans résistance de deux fourchettes, si vous devez tirer fort, l'épaule a besoin de 30 minutes au four."
    }
  ]
};
