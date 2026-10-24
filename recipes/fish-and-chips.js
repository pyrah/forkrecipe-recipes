export default {
  "repoId": "master_british_fishandchips_001",
  "parentRepoId": null,
  "slug": "fish-and-chips",
  "author": "ForkRecipe Kitchen",
  "title": "Poissons et copeaux de bière",
  "description": "Des filets épais de morue fourrés dans une pâte à bière golden-crisp qui éclate et qui fait des ballons et des cloques dans la graisse chaude — alors qu'à l'intérieur, le poisson s'évapore à une fine et douce flocons — servis avec des croustilles de graisse malt-vine-douce qui sont molles à l'intérieur et bronzées sans.",
  "cuisine": "Anglais",
  "culture": "changements climatiques",
  "category": "seafood",
  "tags": [
    "poissons et copeaux",
    "britanniques",
    "pâte à bière",
    "morue",
    "frits",
    "puces",
    "pub"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "1 hour 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filets épais de morue (peau enlevée), 200 g chacun",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "l'aiglefin",
        "Pollock",
        "Merlu"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Farine pure (toute destination)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Lager glacé ou ale pâle",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "eau gazeuse glacée (sans alcool)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Structure",
      "name": "Farine pure (pour la poussière du poisson)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "farine de riz (rend un fini plus croquant)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Starch",
      "name": "Pommes de terre Maris Piper ou King Edward, pelées et coupées en bâtons de 1,5 cm",
      "ratioValue": 200,
      "defaultUnit": "parts",
      "substitutions": [
        "Pommes de terre roussettes",
        "Or du Yukon"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile de friture neutre (assez à friture profonde)",
      "ratioValue": 500,
      "defaultUnit": "parts",
      "substitutions": [
        "Saindoux",
        "huile de tournesol",
        "huile d'arachide"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "vinaigre de malt, pour servir",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel de mer, pour finition",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanch",
      "inputs": [
        "ing_07",
        "ing_08"
      ],
      "outputState": "par_fried_chips",
      "instructions": "Coupez les pommes de terre en bâtons épais et irréguliers — les croustilles ne sont jamais des rectangles parfaits. La variation de l'épaisseur vous donne une gamme de textures allant des pièces plus minces pures aux plus épaisses. Rincer les croustilles dans de l'eau froide pendant 5 minutes pour éliminer l'excès d'amidon de surface (ce qui provoque un collage et un brunissement inégal), puis bien sécher avec des serviettes de cuisine propres. Chauffer l'huile de friture ou dans un pot profond et lourd à exactement 140 C (285 F). Faire frire les copeaux par lots pendant 5 à 6 minutes — ils seront doux, pâles et commenceront à peine à colorier aux bords. Ils ne doivent pas brunir à ce stade. Soulevez avec une araignée ou une cuillère à fente et égouttez sur un rack. A ce stade, vous avez des frites par-cuites ; elles peuvent s'asseoir à température ambiante jusqu'à 1 heure avant la deuxième frite.",
      "visualCue": {
        "primaryTarget": "Des copeaux doux, légèrement translucides qui donnent à une pression douce, blond pâle sans couleur, qui commencent juste à former une peau à peine visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les croustilles sont toujours crues au centre — une bouchée révèle un intérieur dur, crayeux et non cuit.",
            "action": "Retournez à l'huile de 140 C pour 2 à 3 minutes de plus. Utilisez un thermomètre — la précision de la température est importante ici."
          },
          {
            "state": "Perfect",
            "description": "Complètement tendre quand percé avec un couteau mince. Peau d'or pâle qui se forme. Des odeurs de patate cuite sucrée.",
            "action": "Égoutter sur un rack et se reposer. Passez à la pâte pendant qu'ils refroidissent."
          },
          {
            "state": "Overdone",
            "description": "Les puces commencent à devenir dorées dans la première frite — elles brûleront dans la seconde frite avant que le centre ne se réchauffe.",
            "action": "Baisser la température de l'huile à 130 °C pour le prochain lot. Procédez d'abord avec les copeaux d'or et regardez soigneusement la deuxième cuisson."
          }
        ]
      },
      "feelCue": "Une puce par frite devrait s'aplatir lorsqu'elle est pressée entre vos paumes avec une pression modérée — en plein rendement, comme la purée de pommes de terre cuites — sans résistance au centre dur."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "beer_batter",
      "instructions": "Dans un grand bol froid (refroidir au congélateur pendant 10 minutes), mélanger la farine, la poudre à pâte et le sel. Faites un puits au centre et versez la bière glacée en un seul coup. fouetter modérément jusqu'à ce qu'il soit simplement combiné — la pâte doit être légèrement grumelée, comme la pâte à crêpes épaisse. Quelques stries de farine visibles sont fines et même désirables; le surmenage de la pâte développe du gluten, ce qui la rend dense et caoutchouteux plutôt que léger et éclatant. La bière fournit de la carbonation (les bulles s'étendent dans l'huile chaude, créant une croûte lacée et ouverte) et l'alcool abaisse le point d'ébullition de l'eau dans la pâte, ce qui l'aide à fixer plus rapidement et plus rapidement. Si la pâte est trop épaisse pour être versée dans un mince revêtement, ajoutez 1 à 2 cuillères à soupe de bière froide. Gardez la pâte froide jusqu'au moment de la friture.",
      "visualCue": {
        "primaryTarget": "Une pâte pâle versable la consistance de la double crème épaisse — pas de grosses boules sèches, mais avec de petites stries de farine encore visibles et de petites bulles douces à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La batterie est extrêmement épaisse et pâteuse, avec de grandes poches de farine sèche — elle sera recouverte de façon inégale et créera d'épais patchs de pâte.",
            "action": "Dans une bière froide, fouetter une cuillère à soupe à la fois jusqu'à ce qu'elle soit versable, mais enrober l'arrière d'une cuillère de façon épaisse."
          },
          {
            "state": "Perfect",
            "description": "Assez épais pour mettre un doigt dans un rideau mince, même sans s'enfuir instantanément. Petites bulles à la surface, quelques petites bosses. Très froid.",
            "action": "Utilisez immédiatement — ne reposez pas la pâte ou les bulles se dissiperont."
          },
          {
            "state": "Overdone",
            "description": "La batteuse est mince et aqueuse; elle sort du poisson en laissant une peau translucide qui produira une croûte plate et non puffe.",
            "action": "fouetter dans une cuillère à soupe de farine à la fois jusqu'à ce que la bonne consistance soit rétablie. Garder froid."
          }
        ]
      },
      "feelCue": "Plongez un doigt propre et laissez courir la pâte — elle devrait tomber dans un rideau mince et opaque qui prend environ 3 secondes pour courir jusqu'au bout des doigts, pas se déverser instantanément comme de l'eau."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "ing_01",
        "ing_06",
        "beer_batter",
        "ing_08"
      ],
      "outputState": "battered_fish",
      "instructions": "Augmenter la température de l'huile à 190 C (375 F). Patientez les filets de morue complètement secs — l'humidité empêche la pâte d'adhérer. Poussez chaque filet dans de la farine ordinaire, en agitant tout excès (ce qui donne à la pâte une surface à saisir). Déposer un filet dans la pâte à bière, laisser l'excès couler pendant 2 secondes, puis le baisser lentement dans l'huile chaude, le tenir juste sous la surface pendant 5 secondes avant de relâcher – ce qui établit une fine croûte extérieure qui empêche le filet de couler au fond de la poêle et de coller. Faire frire pendant 4 à 5 minutes (pour un filet de 200 g) jusqu'à ce que la pâte soit profonde, voire ambrée. Ne pas fouler le pot — faire frire au maximum deux filets à la fois ou la température de l'huile tombera et la pâte absorbera l'huile et deviendra grasse. Retirer avec une araignée et égoutter sur un support, jamais sur des serviettes en papier (qui créent de la vapeur et adoucissent la croûte).",
      "visualCue": {
        "primaryTarget": "Une croûte uniforme, blister, dorée, avec une surface laceuse et irrégulière — pas de taches pâles, pas de taches sombres, la pâte est entièrement gonflée et sertie.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La batte est d'or pâle et légèrement douce lorsqu'elle est tapée avec une cuillère. La croûte n'a pas été entièrement réglée et sera pâteuse à l'intérieur.",
            "action": "Retournez à l'huile. Le poisson n'est pas encore cuit — la pâte non cuite est pire que le poisson non cuit."
          },
          {
            "state": "Perfect",
            "description": "Deep ambre-or, éclatantement croustillant quand tapoté, blister et gonflé avec une surface légèrement irrégulière, lactée. Évacuation de vapeur depuis le haut du filet.",
            "action": "Égoutter sur une grille. Saler immédiatement avec du sel de mer flocé tout en blister encore chaud."
          },
          {
            "state": "Overdone",
            "description": "La batte est brun foncé bordant sur brûlé, avec une note amère et brûlée. Le poisson intérieur peut être sec.",
            "action": "Égoutter immédiatement. Coupez les parties les plus sombres. Le poisson à l'intérieur est probablement fin — essai avant le rejet."
          }
        ]
      },
      "feelCue": "Tapez le filet battu avec un ongle — au bon moment, il sonne comme de la poterie fine: dur et creux, pas doux et terne. Cette fissure est votre signal."
    },
    {
      "nodeId": "step_4",
      "action": "Fry",
      "inputs": [
        "par_fried_chips",
        "ing_08"
      ],
      "outputState": "finished_chips",
      "instructions": "Tandis que le poisson s'écoule, porter l'huile à 190 C (375 F) — la même température que le poisson, mais la deuxième friture est là où se produit la magie. Faire frire les copeaux par-cuits en lots pendant 3-4 minutes jusqu'à ce qu'ils soient un brun doré profond avec un extérieur croustillant et blister. La friture par friture déjà cuit l'intérieur complètement, donc cette deuxième friture est entièrement sur la formation de croûte — vous déshydratez la surface et conduisez la réaction Maillard. Ne partez pas : à 190°C, les copeaux vont de l'or au feu en 90 secondes. Retirez quand vous êtes profondément doré et égouttez sur un rack.",
      "visualCue": {
        "primaryTarget": "Copeaux dorés profonds avec une croûte mate et une petite quantité de vapeur provenant des faces coupées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les croustilles sont d'or pâle et encore légèrement douces à l'extérieur — elles seront boiteuses en quelques minutes.",
            "action": "Retourner à l'huile pendant 90 secondes et surveiller de près."
          },
          {
            "state": "Perfect",
            "description": "Or miel-ambre profond, mat plutôt que brillant, avec une croûte visible qui craque lorsque la puce est fléchie. La vapeur de l'intérieur signifie que l'intérieur est chaud et moelleux.",
            "action": "Égoutter, saler immédiatement, servir dans les 3 minutes."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé avec une note amère et acride. L'extérieur est peut-être passé de croquants à durs et de déchirures.",
            "action": "Égoutter et saler généreusement — le sel diminue l'amertume. Coupez les bâtons les plus brûlés."
          }
        ]
      },
      "feelCue": "Une puce parfaite se fléchit très légèrement sans se briser – la croûte craque mais l'intérieur reste doux. S'il est entièrement rigide, il a été frit à une croûte uniforme, ce qui signifie que l'intérieur est sec plutôt que moelleux."
    },
    {
      "nodeId": "step_5",
      "action": "Saison",
      "inputs": [
        "battered_fish",
        "finished_chips",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_fish_and_chips",
      "instructions": "Saler immédiatement les croustilles et les poissons pendant qu'elles sont chaudes; le sel n'adhère qu'à une surface chaude recouverte de graisse. Servir le poisson drapé sur une pile de copeaux sur une feuille du papier traditionnel de remplacement du journal ou sur des assiettes chaudes. Mettez le vinaigre de malt sur la table et laissez les gens appliquer leur propre: la bonne quantité de vinaigre pour les poissons et les chips est entièrement personnelle et farouchement débattue en Grande-Bretagne. Servir avec la sauce tartare, les pois musqués ou les deux. Mangez dans les 5 minutes — la croûte de pâte est à sa croûte maximale pour seulement une courte fenêtre avant que la vapeur du poisson à l'intérieur l'adoucisse de l'intérieur.",
      "visualCue": {
        "primaryTarget": "Poisson doré à côté de copeaux d'ambre profonds, cristaux de sel attrapant la lumière, le tout s'échauffant doucement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tout semble pâle et inappétissant. Pâte imbibée d'huile qui n'a pas bien croqué.",
            "action": "La température de l'huile de friture était trop basse — elle doit atteindre 190 °C pour la formation adéquate de la croûte."
          },
          {
            "state": "Perfect",
            "description": "Pâte d'or profond, craquelante audiblement quand tapotée, copeaux dorés et vapeur. La cuisine sent la graisse de boeuf chaud et la mer.",
            "action": "Appliquer immédiatement le sel et le vinaigre. Mangez sans tarder."
          },
          {
            "state": "Overdone",
            "description": "Tout est resté trop longtemps — la pâte s'est adoucie de la vapeur, les copeaux sont devenus boiteux et froids.",
            "action": "Retourner les jetons à la friteuse à 190 C pendant 90 secondes. Il n'y a pas de secours pour la pâte molle — évitez cette situation en servant immédiatement."
          }
        ]
      },
      "feelCue": "Bite à travers la pâte: la fissure initiale doit être audible — un éclat propre et vitreux — puis laisser place au poisson humide, délicat et doux à l'intérieur. Si la pâte déchire plutôt que se brise, l'huile n'était pas assez chaude."
    }
  ]
};
