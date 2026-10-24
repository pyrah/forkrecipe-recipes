export default {
  "repoId": "master_italian_pasta_fresca_001",
  "parentRepoId": null,
  "slug": "pasta-fresca",
  "author": "ForkRecipe Kitchen",
  "title": "Pâtes d'oeufs frais",
  "description": "La fondation dorée de chaque table italienne — la farine de tipo doux 00 et les œufs entiers travaillés à la main dans une seule pâte souple, reposé jusqu'à ce qu'il se détende, puis roulé en feuilles assez minces pour lire un journal. La base des tagliatelles, des pappardelles et des raviolis tendres.",
  "cuisine": "Italien",
  "culture": "Émilien",
  "category": "grains",
  "tags": [
    "pâtes",
    "Italien",
    "frais",
    "œuf",
    "Fait à la main",
    "Tagliatelle"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 1,
    "sour": 0,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Tipo 00 farine (plus supplément pour la poussière)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "Farine polyvalente",
        "moitié 00 / moitié sémola"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Oeufs entiers (large, température ambiante)",
      "ratioValue": 55,
      "defaultUnit": "g",
      "substitutions": [
        "1 œuf entier pour 100 g de farine"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Jaune d'oeuf (pour une pâte plus riche et plus dorée)",
      "ratioValue": 9,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Starch",
      "name": "Semola rimacinata (pour la poussière et le dragage)",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "Sémoline fine"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_05",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "shaggy_dough",
      "instructions": "Enfoncer la farine sur une surface de travail propre et fouetter le sel à travers elle, puis balayer un grand puits au centre. Casser les œufs entiers et le jaune supplémentaire dans le puits, ajouter l'huile d'olive et les battre avec une fourchette. Travailler la fourchette en ronds lents, puiser la farine de la paroi intérieure du puits dans les œufs un peu à la fois. Lorsque le centre est trop épais pour remuer, passer à un gratteur de banc et hacher la masse mouillée, raclée avec le reste de la farine jusqu'à ce qu'il forme une pâte rugueuse et chaotique sans fosse sèche.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte enroulée et cohésive — humide mais non humide, tenant ensemble lorsqu'elle est pressée, la farine environnante étant surtout absorbée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est humide et collant, frottant sur vos doigts, les murs du puits se sont effondrés dans une soupe avant que la farine n'ait été travaillée.",
            "action": "Dispersez la farine d'une cuillère à soupe à la fois, en coupant avec la raclette, jusqu'à ce que la masse s'entremêle en une boule effilée utilisable."
          },
          {
            "state": "Perfect",
            "description": "Une pâte rugueuse et légèrement collante qui s'agrippe en une seule masse et tire proprement de la planche, avec seulement une légère poussière de farine laissée derrière.",
            "action": "Commencez à pétrir pour développer le gluten."
          },
          {
            "state": "Overdone",
            "description": "La pâte est sèche et émiettée, se fissure et refuse de se rassembler, avec de la farine molle qui n'absorbe pas.",
            "action": "Mouiller les mains et travailler l'humidité dans, ou ajouter quelques gouttes d'eau, jusqu'à ce que les miettes se rassemblent."
          }
        ]
      },
      "feelCue": "La fourchette devrait répondre à une résistance croissante car plus de farine est tirée. La masse shaggy finie se sent fraîche, légèrement collante, et s'accroche à elle-même plus qu'à vos mains."
    },
    {
      "nodeId": "step_2",
      "action": "Pétrir",
      "inputs": [
        "shaggy_dough"
      ],
      "outputState": "smooth_dough",
      "instructions": "Agenouillez la pâte sur une surface légèrement farinée avec le talon de votre main: repoussez la pâte loin de vous, repliez-la sur elle-même, donnez-lui un quart de tour, et répétez. Gardez un rythme stable pendant 8-10 minutes. Au début, il se déchirera et se sentira raide ; au fur et à mesure que le gluten se développe, il se serre, lisse et ressort. Ajouter la farine seulement une pincée à la fois si elle reste obstinément collante.",
      "visualCue": {
        "primaryTarget": "Une boule lisse et satinée avec un léger reflet — uniforme de couleur, sans coutures sèches, qui ressort lentement lorsqu'elle est pressée d'un doigt.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est encore grumelée et déchirée, la pâte est molle, et un doigt-poke laisse une bosse qui ne se rétablit pas.",
            "action": "Continuez à pétrir — le gluten a besoin de plus de temps. La transformation à la douceur se produit soudainement près de la fin."
          },
          {
            "state": "Perfect",
            "description": "Soyeux et élastique, la surface est tendue et lisse comme un lobe d'oreille, ressortant lentement et uniformément lorsqu'elle est pressée.",
            "action": "Enveloppez et reposez la pâte pour détendre le gluten."
          },
          {
            "state": "Overdone",
            "description": "La pâte se bat fort, la surface commence à sécher et résiste à tout remodelage; elle a été travaillée trop longtemps et trop sèche.",
            "action": "Arrêtez de pétrir, enveloppez bien et reposez-vous plus longtemps que d'habitude afin que le gluten serré puisse se détendre."
          }
        ]
      },
      "feelCue": "La pâte passe de rugueux et collant à ferme et rebondissante sous votre paume. Quand il repousse doucement et que la surface se sent comme le lobe de votre oreille, le pétrissage est fait."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser reposer",
      "inputs": [
        "smooth_dough"
      ],
      "outputState": "rested_dough",
      "instructions": "Enveloppez fermement la pâte dans un film de collage ou scellez-la sous un bol inversé afin qu'elle ne puisse pas sécher. Laisser reposer à température ambiante pendant au moins 30 minutes, jusqu'à une heure. Cela hydrate la farine uniformément et détend le gluten de sorte que la pâte roulera mince sans se retourner. Ne sautez pas cela — une pâte reposée roule sans effort où un nouveau vous combat.",
      "visualCue": {
        "primaryTarget": "Une pâte souple et détendue qui produit facilement et s'étire sans recoiller immédiatement lorsque vous appuyez sur un coin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte pressée revient instantanément et se sent serrée et printanière; elle n'a pas reposé assez longtemps pour se détendre.",
            "action": "Remplacez-le et donnez-lui encore 15-20 minutes — le gluten est encore trop tendu pour rouler finement."
          },
          {
            "state": "Perfect",
            "description": "La pâte est douce et souple, tenant une légère bosselure et s'étirant facilement sans déchirer ni retirer.",
            "action": "Faites rouler la pâte dans des draps."
          },
          {
            "state": "Overdone",
            "description": "La surface a séché et croûté parce qu'elle a été laissée exposée, avec une peau cuir qui va craquer lorsqu'elle est roulée.",
            "action": "Trim ou pétrir n'importe quelle peau sèche, puis envelopper correctement et reposer quelques minutes de plus pour épancher l'humidité."
          }
        ]
      },
      "feelCue": "Après le repos, la pâte devrait se sentir plus douce et plus lâche que lorsque vous l'avez enveloppée — une presse douce laisse une fossette de remplissage lentement, un signe que le gluten s'est rendu."
    },
    {
      "nodeId": "step_4",
      "action": "Stratifié",
      "inputs": [
        "rested_dough",
        "ing_01"
      ],
      "outputState": "thin_sheet",
      "instructions": "Couper la pâte en quartiers, en gardant les morceaux inutilisés enveloppés. Aplatissez une pièce dans un disque et passez-la dans le cadre le plus large d'une machine à pâtes (ou roulez à la main avec une longue broche). Plier en troisièmes comme une lettre, lui donner un quart de tour, et le passer à travers le cadre le plus large deux ou trois fois de plus pour la stratifier et le carrér. Puis roulez-le à travers des réglages progressivement plus étroits, en poussant légèrement avec de la farine pour éviter de coller, jusqu'à ce que la feuille soit assez mince pour voir votre main à travers.",
      "visualCue": {
        "primaryTarget": "Une longue, même, feuille satinée de pâtes — assez mince pour que vous puissiez voir l'ombre de vos doigts à travers elle, lisse et intacte aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La feuille est épaisse et opaque, avec des bords rayés ou craqués, et se sent lourde et raide à soulever.",
            "action": "Continuer à rouler à travers les réglages; si les bords craquent, plier et stratifié une fois de plus avant de s'éclaircir."
          },
          {
            "state": "Perfect",
            "description": "Un ruban lisse et translucide d'épaisseur uniforme, souple et soyeux, tenant ensemble pendant que vous le soulevez.",
            "action": "Couper, remplir ou façonner les pâtes comme désiré."
          },
          {
            "state": "Overdone",
            "description": "Le drap est allé si mince qu'il déchire sous son propre poids ou des bâtons et des rides, devenant impossible à manipuler.",
            "action": "S'arrêter au réglage précédent la prochaine fois; patch déchire en pressant la pâte ensemble et en la repoussant, ou poussière plus de farine pour arrêter de coller."
          }
        ]
      },
      "feelCue": "Chaque passe doit glisser plus facilement lorsque la pâte se détend et s'allonge. La feuille finie se sent fraîche, lisse et légèrement élastique, drapant sur votre main comme un tissu fin."
    },
    {
      "nodeId": "step_5",
      "action": "Couper la & poussière",
      "inputs": [
        "thin_sheet",
        "ing_06"
      ],
      "outputState": "fresh_pasta",
      "instructions": "Laisser sécher les feuilles sur un chiffon fariné pendant 5-10 minutes jusqu'à ce que la surface soit sèche mais encore souple, ce qui empêche les rubans coupés de coller ensemble. Passer les feuilles à travers la coupe ou les rouler lâchement et les trancher à la main en tagliatelle ou pappardelle. Mélanger généreusement les rubans avec la semola rimacinata, les soulever et les mettre dans des nids lâches, et soit faire cuire dans l'heure dans de l'eau bouillante fortement salée (2-3 minutes) soit laisser sécher plus tard.",
      "visualCue": {
        "primaryTarget": "Des nids séparés de rubans d'or ensemencés de sémola, chaque brin distinct et ne s'agrippant pas à ses voisins.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les brins coupés se collent dans une masse humide, fondue parce que la feuille était trop humide quand coupée.",
            "action": "Mélanger plus agressivement avec la sémola et taquiner délicatement les brins; laisser les feuilles futures sécher un peu plus longtemps avant de couper."
          },
          {
            "state": "Perfect",
            "description": "Des rubans soyeux, même qui s'écroulent dans des nids lâches avec une légère couche de sémola, souples mais non collants.",
            "action": "Cuire dans de l'eau bouillante bien salée pendant 2-3 minutes, ou sécher pour conserver."
          },
          {
            "state": "Overdone",
            "description": "Les brins sont sur-séchés et deviennent cassants, se cassent en petits morceaux lorsqu'ils sont manipulés.",
            "action": "Manipulation délicate et acceptation d'une certaine rupture; si la cuisson est rapide, le court ébullition les ramollira à nouveau."
          }
        ]
      },
      "feelCue": "Les rubans doivent se sentir frais, doux et juste assez sec pour ne pas s'accrocher. Une poignée s'élève et tombe en cascade dans des nids aérés, des brins poussiéreux murmurant l'un contre l'autre."
    }
  ]
};
