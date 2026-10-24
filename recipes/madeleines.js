export default {
  "repoId": "master_french_madeleines_001",
  "parentRepoId": null,
  "slug": "madeleines",
  "author": "ForkRecipe Kitchen",
  "title": "Madeleines classiques",
  "description": "Gâteaux d'éponge en forme de coquille, dorés au miel, avec une bosse distinctive: une chaleur fugace de beurre brun et de zeste de citron qui parfume la cuisine quelques minutes seulement après avoir quitté la poêle, mieux mangé tout en craquelant encore aux bords.",
  "cuisine": "Français",
  "culture": "Lorraine",
  "category": "desserts",
  "tags": [
    "madeleines",
    "français",
    "beurre",
    "citron",
    "Petite-quatre",
    "Cake à thé",
    "Cuisson"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "2 hr",
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
    "sour": 1,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "farine de gâteau pour une miette plus tendre"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 115,
      "defaultUnit": "g",
      "substitutions": [
        "Beurre de style européen pour plus de bruit"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "sucre granulé fin"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Oeufs (large, température ambiante)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Miel (floral, doux)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "sirop d'or",
        "sirop d'érable"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Citrus",
      "name": "Zeste de citron (finement râpé)",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "zeste orange pour une note plus douce et plus chaude"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "pâte de haricots vanille"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "fleur de sel"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire fondre",
      "inputs": [
        "ing_02"
      ],
      "outputState": "browned_butter",
      "instructions": "Placer le beurre dans une casserole de couleur claire à feu moyen. Il va fondre, mousser, s'abaisser, puis mousser une seconde fois. À la deuxième mousse, tourner constamment et regarder les solides de lait sur le fond : ils tourneront de blond à doré à noisette-brun (noisette). Au premier parfum de noisettes grillées, verser immédiatement le beurre dans un bol froid pour arrêter la cuisson. Refroidir à la température ambiante — il doit être liquide mais pas chaud.",
      "visualCue": {
        "primaryTarget": "Liquide doré-ambre avec une dispersion de solides de lait brun foncé sur le fond du bol récepteur. La cuisine sent les noisettes grillées et le caramel.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est complètement fondu et jaune clair, mais les solides de lait sont encore pâles et blonds. Petit arôme au-delà du beurre frais.",
            "action": "Retourner à la chaleur et continuer à tourner. La couleur de la noisette se produit rapidement — surveillez attentivement et ne partez pas."
          },
          {
            "state": "Perfect",
            "description": "Un liquide d'or ambré clair avec des taches brun foncé s'installe au fond. L'odeur est sans conteste la noix et le caramel sucré.",
            "action": "Verser immédiatement dans un bol froid. Ne la laissez pas dans la poêle chaude — elle continuera à s'assombrir de la chaleur résiduelle."
          },
          {
            "state": "Overdone",
            "description": "Le beurre a passé l'ambre au brun foncé et sent acride ou brûlé. Les solides de lait sont presque noirs.",
            "action": "Jetez et recommencez — le bruit de beurre brûlé rendra chaque madeleine amère. La fenêtre entre parfait et dépassé est d'environ 15 secondes."
          }
        ]
      },
      "feelCue": "La deuxième mousse est plus calme et plus dorée que la première — quand le grésillement s'adoucit et que vous sentez quelque chose comme des noix grillées, vous avez cinq secondes à agir."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "ing_04",
        "ing_03",
        "ing_05"
      ],
      "outputState": "ribbon_mixture",
      "instructions": "Dans un grand bol, fouetter ensemble les œufs, le sucre et le miel. fouetter vigoureusement — à la main pendant 3 à 4 minutes, ou avec un fouet électrique en haut pendant 2 minutes — jusqu'à ce que le mélange ait à peu près doublé en volume, soit devenu ivoire pâle, et tombe du fouet dans un ruban épais qui tient sa forme sur la surface pendant quelques secondes avant de se dissoudre.",
      "visualCue": {
        "primaryTarget": "Un mélange pâle, onctueux et enflammé qui tombe du fouet dans un ruban lent et épais et s'assied à la surface pendant 3-4 secondes avant de couler.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours jaune doré et liquide. Le fouet ne laisse aucune trace. Le mélange est mince et homogène.",
            "action": "Continuez à fouetter — vous devez dissoudre complètement le sucre et incorporer suffisamment d'air pour donner aux madeleines leur ascenseur. La pâte sous-aérée est plate."
          },
          {
            "state": "Perfect",
            "description": "Pale, épais, presque mousseux. Il tient un ruban clair. Le volume est à peu près le double de ce que vous avez commencé avec.",
            "action": "Arrête de siffler. Ajoutez maintenant les ingrédients secs et les aromatiques — le sursaut à partir de ce point s'effondre l'air que vous venez de construire."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est devenu rigide, semblable à la meringue, et les feuilles fouettent les pics rigides. Blanc vif et granuleux.",
            "action": "Vous avez trop aéré. Plier doucement dans les ingrédients secs pour dégonfler à une consistance raisonnable — les madeleines peuvent encore être fines, mais légèrement plus sèches."
          }
        ]
      },
      "feelCue": "Soulevez le fouet et dessinez une figure-huit dans la pâte avec le ruban tombant. Si la ligne tient un moment avant de fondre, vous êtes là."
    },
    {
      "nodeId": "step_3",
      "action": "Incorporer délicatement",
      "inputs": [
        "ribbon_mixture",
        "ing_01",
        "ing_08",
        "ing_09",
        "ing_06",
        "ing_07",
        "browned_butter"
      ],
      "outputState": "madeleine_batter",
      "instructions": "Passer la farine, la poudre à pâte et le sel directement sur le mélange de ruban. Ajouter le zeste de citron et l'extrait de vanille. À l'aide d'une grande spatule, plier délicatement avec de larges traits balayés, en dessous jusqu'à ce qu'ils soient simplement combinés — pas de stries sèches, mais ne pas trop mélanger. Enfin, verser le beurre doré refroidi autour du bord de la pâte et le plier de la même manière jusqu'à ce qu'il soit entièrement incorporé. La pâte sera lisse, brillante et nettement plus lourde.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, brillante, pâle, légèrement plus lourde que le plateau du ruban, avec un éclat subtil du beurre. Des odeurs de citron et de noisettes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des bouts de farine encore visibles, ou le beurre est mis en commun à la base plutôt que incorporé. Ça a l'air strié et inégal.",
            "action": "Plier encore quelques coups, en se concentrant sur le fond du bol où la farine se cache. Soyez délibéré mais pas vigoureux."
          },
          {
            "state": "Perfect",
            "description": "Uniforme, lisse et brillant. Il tombe de la spatule dans un ruban lent. Pas de stries de farine, pas de piscines de beurre.",
            "action": "Couvrir fermement le bol avec un film d'accrochage et réfrigérer pendant au moins 1 heure, ou jusqu'à 24 heures. Le repos froid est essentiel pour la bosse signature."
          },
          {
            "state": "Overdone",
            "description": "La batterie semble dégonflée, plate et dense. Agitation vigoureuse a fait jaillir toutes les bulles d'air et développé le gluten.",
            "action": "Continuez — le reste dans le réfrigérateur peut aider à récupérer une certaine structure, mais la bosse sera plus petite et la miette plus serrée."
          }
        ]
      },
      "feelCue": "La pâte doit verser lentement d'une cuillère dans un seul ruban non cassé — pas goutte à goutte, pas couler. S'il coule comme de l'eau, le beurre était trop chaud; s'il était assis dans des monticules raides, il était surmené."
    },
    {
      "nodeId": "step_4",
      "action": "Réfrigérer",
      "inputs": [
        "madeleine_batter"
      ],
      "outputState": "rested_batter",
      "instructions": "Appuyez sur le film de collage directement sur la surface de la pâte et réfrigérez pendant au moins 1 heure, ou jusqu'à 24 heures. Pendant ce temps, beurrer les moules de madeleine généreusement et la poussière avec la farine, en tapant l'excès; réfrigérer la poêle préparée aussi. Le choc froid lorsque la pâte froide rencontre un four chaud crée la bosse distinctive — ne sautez pas cette étape.",
      "visualCue": {
        "primaryTarget": "La pâte s'est légèrement raffermie et est nettement froide. Il tient sa forme lorsqu'il est conduit ou cuillé dans le moule sans s'étendre immédiatement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La batterie est encore chaude ou température ambiante. Il s'écoule trop facilement dans les moules et s'étend fin avant que le four puisse le régler.",
            "action": "Retournez au frigo. Une heure est le minimum — les pâtes au repos de nuit produisent souvent une bosse plus définie qu'un repos d'une heure."
          },
          {
            "state": "Perfect",
            "description": "Froid, ferme, épais. Il tient sa forme dans le moule pendant quelques secondes avant de se poser. Le beurre dans les moules est solide.",
            "action": "Remplir les moules à trois quarts et cuire immédiatement à partir du froid. Préchauffer le four à 200°C pendant au moins 20 minutes."
          },
          {
            "state": "Overdone",
            "description": "Vous avez reposé la pâte pendant plusieurs jours — elle a peut - être absorbé trop de liquide ou commencé à sentir de l'aigre des œufs.",
            "action": "La pâte est mieux utilisée en 24 heures. Au-delà de cela, il fait encore des ravages mais l'ascenseur est diminué."
          }
        ]
      },
      "feelCue": "Faites refroidir la pâte et il devrait tenir un petit dôme dans le moule pendant 2-3 secondes avant de se détendre lentement — un signe que la graisse a suffisamment solidifié pour créer un choc de température dans le four."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire au four",
      "inputs": [
        "rested_batter"
      ],
      "outputState": "finished_madeleines",
      "instructions": "Préchauffer le four à 200°C (390°F) pendant au moins 20 minutes. Remplir les moules frais et farinés à trois quarts. Cuire au four pendant 10 à 12 minutes jusqu'à ce que les bords soient en or profond et qu'ils s'éloignent de la coquille, la bosse s'est levée complètement et le pic est juste réglé. Retirer immédiatement et tourner sur un rack. Mangez dans les 30 minutes — ce sont des aliments différents après une heure.",
      "visualCue": {
        "primaryTarget": "La bosse classique s'est nettement relevée au-dessus de la jante. Les bords sont brun doré profond; le pic de bosse est d'or pâle et juste sec. Le côté coquillier est richement caramélisé et motif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La bosse semble crue et humide au pic. Le côté coquille est blond pâle. La madeleine ressort lâchement lorsqu'elle est pressée.",
            "action": "Ajoutez encore 1 à 2 minutes. La bosse doit être sèche au toucher à son point le plus élevé et les bords visiblement plus foncés que le centre."
          },
          {
            "state": "Perfect",
            "description": "Humpe haute et ferme, sèche au sommet. Les bords et la coquille sont en or profond. La cuisine sent le beurre chaud, le miel et le citron. Ils libèrent du moule proprement.",
            "action": "Il s'avère qu'il y a une coquille immédiatement sur un rack. Ils sont à leur apogée pendant les 20 prochaines minutes."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brun foncé à l'approche des brûlés, la bosse est fissurée, et l'arôme de pointe du caramel vers le biscuit amer.",
            "action": "Ils sont encore comestibles — tailler les bords les plus sombres et tremper dans le chocolat pour sauver. Baisser le four ou réduire le temps de 2 minutes la prochaine fois."
          }
        ]
      },
      "feelCue": "Fraisement non mélangée, la coquille en dessous doit se sentir chaude et légèrement collante avec du beurre caramélisé. La bosse devrait être printanière, pas molle. Appuyez doucement sur : il doit repousser immédiatement comme une éponge, pas s'effondrer."
    }
  ]
};
