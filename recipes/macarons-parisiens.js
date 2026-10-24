export default {
  "repoId": "master_french_macarons_parisiens_001",
  "parentRepoId": null,
  "slug": "macarons-parisiens",
  "author": "ForkRecipe Kitchen",
  "title": "Macarons Parisiens",
  "description": "Delicate amand meringue coquillages sandwiched autour d'une ganache soyeuse ou crème au beurre — notoirement fastidieuse à faire, exigeant des blancs d'oeuf vieillis, macaronage précis, et contrôle strict du four pour la marque dôme lisse et pied lacy.",
  "cuisine": "Français",
  "culture": "Parisien",
  "category": "desserts",
  "tags": [
    "Macarons",
    "français",
    "Amandes",
    "meringue",
    "pâtisserie",
    "Sans gluten"
  ],
  "difficulty": 5,
  "activeTime": "1 hr 30 min",
  "totalTime": "3 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 5,
    "salty": 0,
    "sour": 0,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine d'amande (blanchie, super fine)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre écrémé (sucre pulvérisé, criblé)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Blancs d'œuf vieillis (température ambiante, 24 à 72 heures)",
      "ratioValue": 3.75,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de casting (superfine)",
      "ratioValue": 3.75,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Crème de tartre",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "quelques gouttes de jus de citron"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Chocolat noir (70%), finement haché",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "chocolat au lait"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Crème lourde (pour le remplissage de ganache)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "crème de coco"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Beurre non salé (pour ganache)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "tant_pour_tant",
      "instructions": "Peser précisément la farine d'amande et le sucre glace — les ratios macarons sont impitoyables. Poussez-les ensemble dans un robot alimentaire pendant 30 secondes pour briser les morceaux et créer un tant-pourtant uniforme ultra-fin. Passer le mélange dans un tamis à mailles fines, en jetant les morceaux d'amande grossiers qui restent. Si nécessaire, des morceaux d'amande visibles se détacheront mal et fendront la surface. L'objectif est une poudre aussi fine et uniforme que la farine de gâteau commerciale.",
      "visualCue": {
        "primaryTarget": "Une poudre d'ivoire pâle parfaitement lisse, sans grain visible ou avec des flecks d'amande — quand vous frottez une pincée entre le pouce et l'index, elle est plus soyeuse que la farine.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est grossier et tacheté de morceaux d'amande visibles — le tamis a pris des morceaux importants. La poudre frotte dur entre les doigts.",
            "action": "Retourne les morceaux grossiers au robot culinaire et repousse, puis refit. Ne procédez pas avec de la tant-pour-tant grossière."
          },
          {
            "state": "Perfect",
            "description": "Poudre d'ivoire ultra fine et homogène qui tombe à travers le tamis sans résistance. Zéro grumeaux; la surface, lorsqu'elle est lissée, est comme du sucre glace lui-même.",
            "action": "Mettez de côté et procédez à la meringue."
          },
          {
            "state": "Overdone",
            "description": "Le surtraitement a réchauffé les amandes et a commencé à libérer leur huile — la poudre s'enfonce dans une masse en pâte plutôt que de rester sèche et lâche.",
            "action": "Répartir le mélange sur un plateau et laisser refroidir et sécher avant de tamiser. Si elle est devenue huileuse, le lot est compromis."
          }
        ]
      },
      "feelCue": "Frottez une pincée entre les doigts — elle devrait se sentir presque sans friction, comme de la poudre de talc fine. S'il se sent mal ou collant, traiter plus longtemps et de nouveau."
    },
    {
      "nodeId": "step_2",
      "action": "Whip",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "stiff_peak_meringue",
      "instructions": "Dans un bol parfaitement propre et sans gras, commencez à fouetter les blancs d'œuf vieillis avec la crème de tartre à vitesse moyenne jusqu'à mousser. Ajouter le sucre de castre dans un cours d'eau mince et lent une fois que les pics mous se forment, et continuer à fouetter à moyenne-élevé jusqu'à ce que vous atteignez des pics raides et brillants. Les blancs vieillis (à gauche découverts au réfrigérateur pendant 24 à 72 heures) ont une humidité plus faible et un fouet plus stable. Surtout, ne pas trop fouetter: la meringue doit être lisse et brillante, non pas sèche et entachée. La meringue finie devrait tenir un pic raide et droit qui ne se boucle pas.",
      "visualCue": {
        "primaryTarget": "Une meringue blanche brillante, profondément brillante, qui tient debout des pics raides quand le fouet est retiré — le pic se tient droit sans s'enfoncer ni se friser.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pics sont doux et se replient à l'extrémité — la meringue est encore humide et trop lâche. Gloire mais pas structurellement ferme.",
            "action": "Continuer à fouetter à moyenne-élevée pendant 30 à 60 secondes, en regardant attentivement; la transition du doux au raide est rapide."
          },
          {
            "state": "Perfect",
            "description": "Des pics droites et raides qui sont lisses et profondément brillants — lorsque vous retournez le bol, la meringue tient en place. La surface semble satinée, pas mate.",
            "action": "Commencez immédiatement le macaronage (pliage)."
          },
          {
            "state": "Overdone",
            "description": "Meringue semble sèche et empilée — la surface est mate et granuleuse plutôt que lisse, et peut se séparer autour des bords en mousse et liquide. Les pics sont rigides mais rugueux.",
            "action": "La meringue sèche et surchargée ne peut être sauvée. Commencez un nouveau lot de blancs. Les macarons ne formeront pas les pieds d'une meringue brisée."
          }
        ]
      },
      "feelCue": "Frotter une petite quantité de meringue entre vos doigts — aucun grain de sucre non dissous ne doit être détectable. Si vous sentez les grains, le sucre n'est pas complètement dissous et les blancs ont besoin de plus de fouettage."
    },
    {
      "nodeId": "step_3",
      "action": "Plier",
      "inputs": [
        "tant_pour_tant",
        "stiff_peak_meringue"
      ],
      "outputState": "macaronage_batter",
      "instructions": "Ajouter tout le tant-pour-tant à la meringue raide à la fois. Commencez le macaronage: en utilisant une spatule flexible, plier et presser la pâte contre le côté du bol en coups de balai large, dégonflant la meringue délibérément. Le but est d'évacuer suffisamment d'air pour que la pâte s'écoule en douceur, mais conserve suffisamment de structure pour tenir les rounds sans s'étendre à plat. Testez fréquemment en soulevant la spatule et en laissant tomber la pâte — lorsqu'elle coule dans un ruban épais, lent et continu et que le ruban s'installe dans la pâte en 10 secondes, laissant une trace qui se lisse en 30 secondes, arrêtez de plier immédiatement. Le surpliage est l'échec le plus fréquent.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, épaisse et brillante qui coule de la spatule dans un ruban large et plat, comme la lave ou la pâte à gâteau épaisse. Lorsqu'il tombe sur la pâte ci-dessous, il coule et se mélange en 20 à 30 secondes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La patte est raide et tient des pics lorsque la spatule est levée — elle ne coule pas. Les rondelles à pipe auront des dessus bruts et pointus qui ne se lisseront pas dans le four.",
            "action": "Continuez à plier avec des coups prudents et délibérés. La pâte a besoin de plus de déflation."
          },
          {
            "state": "Perfect",
            "description": "Il coule dans un ruban épais, semblable à une lave, qui tombe et se replie sur lui-même. Le ruban s'enfonce parfaitement en 20 à 30 secondes, laissant une surface lisse. La pâte a un léger éclat.",
            "action": "Transférer immédiatement dans un sac de tuyauterie et le tuyau. Le retard permet à la pâte de continuer à se détendre."
          },
          {
            "state": "Overdone",
            "description": "La batterie est liquide et versable — elle s'écoule instantanément de la spatule comme de l'eau et s'étend complètement à plat lorsqu'elle est conduite, sans possibilité de développer les pieds dans le four.",
            "action": "La pâte surpliée n'est pas récupérable. Commencez un nouveau lot avec un pliage plus prudent."
          }
        ]
      },
      "feelCue": "Lorsque la spatule traverse le centre de la pâte, il devrait y avoir une légère résistance — comme remuer une crème épaisse — pas la facilité de remuer de l'eau. Cette résistance signifie que la structure reste."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "macaronage_batter"
      ],
      "outputState": "baked_macaron_shells",
      "instructions": "Piper la pâte sur des plaques de cuisson doublées de parchemin ou de silpat en rondelles d'environ 3,5 cm, en maintenant le sac de tuyauterie perpendiculaire au plateau et en libérant la pression avant de soulever. Bangez fermement le plateau sur le comptoir trois ou quatre fois pour faire sauter toutes les bulles de surface. Laisser reposer les coquilles à la température ambiante jusqu'à ce qu'elles soient sèches et mates au toucher. Cette formation de peau est essentielle au développement des pieds; dans des conditions humides, cela peut prendre 45 à 90 minutes. Cuire au four à 150 C/300 F pendant 13-15 minutes, en tournant le plateau à mi-chemin. Les coquilles sont faites lorsqu'elles peuvent être délicatement éjectées du parchemin sans coller — elles se sentiront encore légèrement douces au sommet mais fermes à la base.",
      "visualCue": {
        "primaryTarget": "Coquilles lisses, surmontées d'un dôme avec un « pied » à la base, le collier d'air caractéristique qui s'est levé entre la coque et le plateau. Surface mate, pas brillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pieds sont absents ou à peine formés — les coquilles sont molles et s'accrochent au parchemin, déchirant lorsqu'elles sont levées. La surface peut encore être brillante. L'intérieur est cru et humide.",
            "action": "Retourner au four pour 2 à 3 minutes de plus et vérifier. Les macarons sous-désonnés ne peuvent pas être assemblés."
          },
          {
            "state": "Perfect",
            "description": "Pieds pleins, hauts en forme de dôme lisse et surfaces mates. Les coquilles glissent du parchemin proprement quand elles sont fraîches et la base est ferme et sèche. L'intérieur a mis sur une coquille légèrement mâcheuse.",
            "action": "Laisser refroidir complètement sur le plateau avant de le remplir."
          },
          {
            "state": "Overdone",
            "description": "Les sommets se sont fendus et s'ouvrent; les pieds peuvent s'être effondrés ou s'être étendus. La couleur est beige plutôt que l'ivoire pâle du surpeuplement. Les coquilles sont fragiles et sèches.",
            "action": "Réduire la température du four de 10 °C pour le plateau suivant; les dessus fissurés indiquent que la peau n'était pas assez sèche ou que le four était trop chaud."
          }
        ]
      },
      "feelCue": "Après avoir refroidi, prendre une coquille et tapoter la base avec un ongle — il devrait donner un robinet propre et creux, comme un petit tambour, pas un bourbier étouffé. Ce son creux signifie que l'intérieur a bien séché."
    },
    {
      "nodeId": "step_5",
      "action": "Faire fondre",
      "inputs": [
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "chocolate_ganache",
      "instructions": "Portez la crème à mijoter et versez-la sur le chocolat finement haché. Attendez 60 secondes sans remuer, puis commencez à remuer du centre vers l'extérieur en petits cercles, en incorporant progressivement le chocolat jusqu'à ce qu'il soit complètement fondu et lisse. Ajouter le beurre ramolli et mélanger. La ganache doit être brillante et fluide à ce stade. Laisser refroidir à température ambiante jusqu'à atteindre une consistance pipeable — environ 1 à 2 heures, ou accélérer en refroidissant brièvement, en remuant toutes les 15 minutes.",
      "visualCue": {
        "primaryTarget": "Une ganache profondément brillante et uniformément foncée qui se déplace comme du miel épais lorsqu'elle est inclinée — entièrement émulsifiée, sans séparation visible des graisses ni chocolat non fondu.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le ganache est trop fluide — il s'écoule immédiatement d'une cuillère et sortira des coquilles une fois qu'il sera en sandwich.",
            "action": "Continuer le refroidissement à température ambiante, ou réfrigérer brièvement en tranches de 10 minutes, en remuant chaque fois."
          },
          {
            "state": "Perfect",
            "description": "Consistance pipeable : tient un monticule lorsqu'il est cuillé, tombe lentement de la cuillère et tient sa forme brièvement avant de se déposer. La température est d'environ 20–22 C / 68–72 F.",
            "action": "Transférer dans un sac de tuyauterie et remplir les coquilles de macaron."
          },
          {
            "state": "Overdone",
            "description": "Ganache s'est fixé trop ferme et froid — il résiste à la tuyauterie et peut craquer ou s'effondrer lorsqu'il est pressé entre les coquilles.",
            "action": "Brèvement chaud sur une double chaudière ou dans 5 secondes micro-ondes éclate, en remuant, jusqu'à ce qu'il adoucisse à la consistance pipeable."
          }
        ]
      },
      "feelCue": "Faites glisser un doigt dans la ganache sur le côté du bol — il devrait laisser un sentier net et net qui tient pendant quelques secondes avant que les côtés commencent à se refermer lentement. C'est la texture d'une ganache pipeable."
    },
    {
      "nodeId": "step_6",
      "action": "Assemblage",
      "inputs": [
        "baked_macaron_shells",
        "chocolate_ganache"
      ],
      "outputState": "finished_macarons",
      "instructions": "Faire correspondre les coquilles par paire par taille. Tuez un monticule de ganache sur le côté plat d'une coquille, d'environ 1 cm de haut, laissant une bordure de 3 mm. Appuyez sur la coquille correspondante sur le dessus avec un doux mouvement de torsion jusqu'à ce que la ganache atteigne le bord. Le remplissage doit être clairement visible à la couture en sandwich. Réfrigérer les macarons assemblés pendant au moins 24 heures avant de servir — cette période de maturation n'est pas négociable: l'humidité du remplissage migre dans la coquille, la transformant de croustillant à la texture de l'extérieur léger et doux.",
      "visualCue": {
        "primaryTarget": "Neat sandwiches avec remplissage visible à l'équateur — une couture uniforme de ganache autour de la circonférence. Les deux coquilles sont rincées et alignées, et non dentelées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Macarons assemblés et servis immédiatement: les coquilles sont encore sèches et croustillantes, fragiles et dépourvues d'intérieur doux. Le remplissage n'a pas eu le temps de se marier avec les coquillages.",
            "action": "Réfrigérer pendant 24 heures avant de servir. L'amélioration de la texture après le repos est dramatique."
          },
          {
            "state": "Perfect",
            "description": "Après 24 heures de repos: les coquilles ont un extérieur à peine croustillant qui laisse place à un intérieur doux et mâché sous la première bouchée. La ganache est entièrement réglée et lisse. Le pied est toujours visible et intact.",
            "action": "Servir à froid ou laisser venir à température ambiante pendant 15 minutes avant de manger."
          },
          {
            "state": "Overdone",
            "description": "Assemblé et réfrigéré pendant plus de 4 jours : les coquilles sont devenues trop molles et humides, perdant leur identité structurelle et fusionnant avec le remplissage en une masse de spongieuse unifiée.",
            "action": "Consommer les macarons dans les 3 jours suivant l'assemblage; congeler individuellement pendant un mois au besoin."
          }
        ]
      },
      "feelCue": "Ramassez un macaron fini et pressez doucement entre deux doigts: vous devriez sentir la légère résistance de la coquille extérieure, puis le donner immédiatement dans un intérieur doux et productif — que l'interaction est l'âme texturale du macaron."
    }
  ]
};
