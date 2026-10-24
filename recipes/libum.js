export default {
  "repoId": "master_ancient-roman_libum_001",
  "parentRepoId": null,
  "slug": "libum",
  "author": "ForkRecipe Kitchen",
  "title": "Libum",
  "description": "Gâteau sacrificiel de Cato, renaître pour la table — ricotta fraîche battue à une pâte à caillebotis, liée d'œuf et d'un peu de farine d'épeautre, broyée sur les feuilles de laurier et cuite sous un pot couvert jusqu'à ce que les bords s'endorment. Séparé chaud et noyé dans le miel noir, il mange comme le plus vieux gâteau au fromage du monde.",
  "cuisine": "Ancien romain",
  "culture": "Latial",
  "category": "desserts",
  "tags": [
    "libum",
    "Ancien-roman",
    "cato",
    "ricotta",
    "Chérie",
    "Cake au fromage",
    "historique"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 1,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Ricotta de lait entier frais (bien drainé)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "ricotta de lait de brebis frais",
        "ricotta de lactosérum maison"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Farine d'épeautre",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "Farine d'émmer",
        "farine de blé blanc tendre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Œuf",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Feuilles fraîches de laurier (pour le lit)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "feuilles de laurier séchées, trempées"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Miel foncé (pour finition)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "miel de châtaigne",
        "miel de thym"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Égoutter",
      "inputs": [
        "ing_01"
      ],
      "outputState": "drained_ricotta",
      "instructions": "Si votre ricotta est lâche et pleure, alignez un tamis avec de l'étoffe de fromage, cuillerez-le, et laissez-le égoutter au-dessus d'un bol pendant 20 à 30 minutes — ou plus au réfrigérateur — jusqu'à ce qu'il consolide à la texture d'un caillé doux et tranché. La ricotta humide fait une pâte qui s'écroule et s'évapore plutôt que de se faire cuire, donc cette étape décide si la libum tient un monticule. Jetez le lactosérum.",
      "visualCue": {
        "primaryTarget": "Un dôme de ricotta pâle et arqué, assis fièrement dans le tamis, la goutte d'eau ralentit jusqu'à la perle occasionnelle, le caillé tenant la forme de la dernière presse de la cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Whey coule toujours et la ricotta sags plat et brillant-humide, baignant contre le tissu.",
            "action": "Continue de drainer. Recueillir le cheesewet et tordre doucement pour en extraire plus, ou réfrigérer encore 20 minutes."
          },
          {
            "state": "Perfect",
            "description": "La ricotta est dense et mate, douce mais non plus soupeuse, et une cuillère tient ses bords sans pleurer.",
            "action": "Grattez-le dans un bol de mélange et continuez."
          },
          {
            "state": "Overdone",
            "description": "La ricotta est devenue sèche, émiettée et raide, presque comme une vitre fraîche.",
            "action": "Parfait pour la structure — il suffit de planifier pour bien battre et laisser l'oeuf réhydrater en pâte lisse."
          }
        ]
      },
      "feelCue": "Pressée entre deux doigts, la ricotta drainée devrait se sentir comme de l'argile douce et fraîche qui tient une empreinte digitale, pas comme de la peinture humide qui coule du bout des doigts."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "drained_ricotta",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "libum_batter",
      "instructions": "Battre la ricotta égouttée avec une cuillère en bois jusqu'à ce qu'elle se relâche et devienne crémeuse, puis travailler dans l'œuf jusqu'à ce que la pâte soit uniforme et brillante. Ajouter le sel, puis plier un peu à la fois dans la farine d'épeautre, jusqu'à ce qu'elle disparaisse dans une pâte molle, épaisse et écorcable. Cato dit de le mélanger 'bène' (bien); battre le fromage lisse est ce qui donne à la libum cuite sa tendre, même miettes. Arrêtez le moment où la farine est incorporée afin que le gluten reste lâche.",
      "visualCue": {
        "primaryTarget": "Une pâte douce et cohésive l'or pâle de la crème fraîche, assez épaisse pour marbrer sur une cuillère et se déposer lentement, flanqué du grain faible du caillé et du son de l'épeautre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des bouts de farine sèche ou des morceaux de ricotta imbattables montrent encore, et la pâte semble patchy et granuleuse.",
            "action": "Continuez à plier et appuyez sur le bol jusqu'à ce qu'il se réunisse en une seule masse lisse, même."
          },
          {
            "state": "Perfect",
            "description": "Une pâte-batterie homogène et pliable qui se fond et tient un pic doux, ni écoulement ni raide, sentant laiteux et peu de noix de l'épeautre.",
            "action": "Divisez et formez sur le lit à feuilles de laurier."
          },
          {
            "state": "Overdone",
            "description": "La pâte a été travaillée si longtemps qu'elle se sent serrée et élastique et recule lorsqu'elle est agitée.",
            "action": "Laisser reposer 10 minutes pour détendre le gluten avant de façonner, et cuire rapidement afin qu'il ne durcisse pas."
          }
        ]
      },
      "feelCue": "Faites glisser la cuillère à travers et la pâte doit se fermer lentement derrière elle comme une pâte à gâteau épaisse; elle doit se sentir cohésive et légèrement collante, non lâche ou collante-humide contre la cuillère."
    },
    {
      "nodeId": "step_3",
      "action": "Façonner",
      "inputs": [
        "libum_batter",
        "ing_05"
      ],
      "outputState": "raw_cakes",
      "instructions": "Disposer les feuilles de la baie sur une plaque de cuisson ou dans un plat peu profond et résistant au four, aventuré de sorte que les gâteaux reposeront directement sur les feuilles. Divisez la pâte en quatre et formez chacun en un monticule rond d'environ trois pouces de long et un pouce de haut, en plaçant un sur chaque feuille. Les huiles de la baie parfument le dessous du gâteau pendant qu'il fait cuire et de l'empêcher de coller — la feuille est saveur et parchemin dans un. Lisser légèrement les dessus afin qu'ils cuisent uniformément.",
      "visualCue": {
        "primaryTarget": "Quatre rondelles de pâte pâle soignées, en forme de dôme, chacune sur une feuille de laurier vert brillant, leurs surfaces lisses et leurs bords propres, les bouts de la feuille regardant en dessous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les monticules sont effondrés et plats, se répandent minces et menacent de s'échapper des feuilles.",
            "action": "La pâte est trop humide: travailler dans une farine d'épeautre, puis reformer plus grand et plus serré."
          },
          {
            "state": "Perfect",
            "description": "Dômes autoportants qui tiennent leur hauteur, chacun centré sur sa feuille avec les bords de la feuille montrant tout autour.",
            "action": "Passer directement à la cuisson avant que les feuilles se flétrissent et que la pâte se réchauffe."
          },
          {
            "state": "Overdone",
            "description": "Les monticules sont déjà fissurés et d'apparence sèche, ou en forme si grande et serrée qu'ils cuireont inégalement.",
            "action": "Dégringolez vos doigts et lissez la surface, aplatissant légèrement pour que les centres cuisent avant que les bords ne crèvent."
          }
        ]
      },
      "feelCue": "La pâte devrait se libérer des doigts mouillés de façon propre pendant que vous la formez; si elle colle et larmes, mouiller vos mains légèrement. Les feuilles de laurier devraient se casser avec un parfum tranchant, résineux, comme l'eucalyptus quand vous les arrangez."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "raw_cakes"
      ],
      "outputState": "baked_libum",
      "instructions": "Cuire à 375 F / 190 C. Cato fait cuire lentement le gâteau sous une couverture de faïence chaude — pour imiter le foyer 'sub testu', mettre un bol en métal inversé ou un pot couvert sur les gâteaux pendant les 15 premières minutes pour piéger douce, même la chaleur, puis le lever et cuire 5 à 10 minutes de plus pour colorer les dessus. Ils sont faits quand ils sont mis à travers, gonflés, et dorés aux bords, 20 à 25 minutes au total. Les feuilles de laurier auront bruni et croustillé en dessous.",
      "visualCue": {
        "primaryTarget": "Ronds rasés, légèrement fissurés, or pâle sur le dessus et ambre plus profond sur le bord, fermes et secs à un toucher léger, perfumant la cuisine avec du lait chaud et de la baie.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les sommets semblent encore humides et brillants, les centres oscillent quand le plateau est bouché, et un testeur sort mouillé.",
            "action": "Récupérer et cuire encore 5 minutes, puis découvrir et vérifier à nouveau — le centre doit se mettre avant qu'ils quittent le four."
          },
          {
            "state": "Perfect",
            "description": "Dôme et serti de quelques fines fissures de surface, bordées d'or, qui ressortent lorsqu'elles sont pressées au centre, la baie laisse des feuilles brunes grillées en dessous.",
            "action": "Tirez - les et laissez - les refroidir jusqu'à ce qu'ils puissent être manipulés — ils sont mieux mangés au chaud."
          },
          {
            "state": "Overdone",
            "description": "Les dessus sont brun foncé et les bords sont durs et secs, la miette se resserrant vers le caoutchouc.",
            "action": "Faites - les sortir immédiatement et soyez généreux avec le miel; son humidité et sa douceur sauveront une libum surcuite."
          }
        ]
      },
      "feelCue": "Un doigt pressé au centre devrait rencontrer une résistance douce et printanière qui repousse, pas un squuelch doux et non une croûte dure. Le gâteau doit sentir la lumière pour sa taille lorsqu'il est soulevé sur sa feuille."
    },
    {
      "nodeId": "step_5",
      "action": "Terminer",
      "inputs": [
        "baked_libum",
        "ing_06"
      ],
      "outputState": "finished_libum",
      "instructions": "Chauffer doucement le miel jusqu'à ce qu'il soit mince. Soulevez chaque libum de sa feuille de laurier sur une assiette de service tout en restant chaud, fendez ou piquez le dessus, et versez le miel chaud sur afin qu'il trempe dans les fissures et les piscines autour de la base. Cato a les gâteaux servis chaud et trempé dans le miel — les manger immédiatement, quand le caillé est encore doux et le miel coule dans. La feuille de laurier grillée peut rester cousue en dessous comme une garniture parfumée et comestible.",
      "visualCue": {
        "primaryTarget": "Un rond chaud, glacé de miel, brillant or foncé, le miel coulé dans chaque fissure et mis dans un anneau brillant à la base, vapeur transportant le lait, la baie, et le malt profond de miel foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le miel est assis dans une perle raide sur le dessus et ne s'étend ni ne s'imprégne, glissant dans une masse.",
            "action": "Il fait trop froid et le gâteau trop frais — réchauffez brièvement le miel et le gâteau, puis repourrez afin qu'il pénètre."
          },
          {
            "state": "Perfect",
            "description": "Le miel s'est trempé dans la miette et a recouvert la surface d'une brillance laquée, avec une petite piscine collectant à la plaque. La première bouchée est douce, douce et légèrement salée.",
            "action": "Servir immédiatement, au chaud, sur sa feuille de laurier."
          },
          {
            "state": "Overdone",
            "description": "Le gâteau nage dans le miel, le soggy et la cloie, sa structure se dissolvant dans la piscine.",
            "action": "Soulevez le libum sur une assiette fraîche pour égoutter l'excédent et servir le surplus de miel sur le côté."
          }
        ]
      },
      "feelCue": "Le miel devrait disparaître dans le gâteau chaud avec un sifflement doux d'absorption plutôt que de perler sur le dessus. Sur la langue il mange comme un cheesecake tendre et doux — laiteux et mou, levé à la baie et fini longtemps avec du miel foncé."
    }
  ]
};
