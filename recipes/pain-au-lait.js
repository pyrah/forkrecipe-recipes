export default {
  "repoId": "master_french_pain_au_lait_001",
  "parentRepoId": null,
  "slug": "pain-au-lait",
  "author": "ForkRecipe Kitchen",
  "title": "Douleur au lait",
  "description": "Les rouleaux de pain au lait français sont tellement insaisissables qu'ils dégagent un nuage de vapeur beurrée, enrichi de lait entier, de beurre et juste assez de sucre pour rendre la croûte dorée, la miette blanche et tendre comme un nuage.",
  "cuisine": "Français",
  "culture": "Français",
  "category": "breads",
  "tags": [
    "Pain de lait",
    "français",
    "enrichi",
    "rouleaux",
    "doux"
  ],
  "difficulty": 2,
  "activeTime": "45 min",
  "totalTime": "3 hr 30 min",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
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
      "name": "Farine de pain (12-13% de protéines)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "Farine polyvalente pour une miettes légèrement plus molles"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Lait entier, chauffé à 38-40 C",
      "ratioValue": 55,
      "defaultUnit": "%",
      "substitutions": [
        "lait d'avoine plein gras pour les produits laitiers"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "levure sèche active",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": [
        "levure instantanée (1 %)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 8,
      "defaultUnit": "%",
      "substitutions": [
        "miel (réduire à 6 %)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.8,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé, adouci (18-20 C)",
      "ratioValue": 12,
      "defaultUnit": "%",
      "substitutions": [
        "Margarine de bonne qualité"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Binder",
      "name": "Œufs (pour la pâte et le lavage des œufs)",
      "ratioValue": 2,
      "defaultUnit": "large",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Dissoudre",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "yeast_milk",
      "instructions": "Chauffer doucement le lait à 38-40 C (température corporelle – chaude mais pas inconfortable lorsqu'il est trempé avec un poignet). fouetter le sucre et la levure sèche active et laisser reposer 8-10 minutes jusqu'à ce qu'une couche crémeuse et mousseuse se forme à travers la surface. Le lactose naturel et les graisses du lait accélèrent significativement l'activité de la levure par rapport à une activation à base d'eau. Battre un œuf et réserver pour le lavage de l'œuf; ajouter le deuxième œuf dans le lait mousseux et fouetter brièvement pour se combiner avant de procéder au mélange.",
      "visualCue": {
        "primaryTarget": "Une mousse crémeuse et riche à la surface du lait. Marronné par la levure. Ça sent le sucre et la levure.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mousse mince, bulles clairsemées après 10 minutes. La levure peut être lente ou morte.",
            "action": "Si aucune mousse à 12 minutes, jetez et utilisez de la levure fraîche. Le lait peut avoir été trop chaud ou la levure trop vieille."
          },
          {
            "state": "Perfect",
            "description": "Bonnet en mousse dense et crémeuse. Le liquide est légèrement nuageux. C'est remarquablement sucré.",
            "action": "Ajouter l'œuf et procéder au mélange."
          },
          {
            "state": "Overdone",
            "description": "La mousse s'effondre, l'odeur de levure est forte, le liquide devient bubble sous.",
            "action": "Mélanger immédiatement — la levure est maximale."
          }
        ]
      },
      "feelCue": "Le lait chaud doit se sentir neutre sur le poignet — pas assez chaud pour être évidemment chaud, la façon dont la bouteille d'un bébé correctement trempé sent. Trop chaud et tu as tué la levure, trop froid et elle ne fleurira pas."
    },
    {
      "nodeId": "step_2",
      "action": "Pétrir",
      "inputs": [
        "ing_01",
        "ing_05",
        "yeast_milk"
      ],
      "outputState": "base_dough",
      "instructions": "Mélanger la farine et le sel dans le bol d'un mélangeur de stand équipé du crochet de pâte (cette pâte enrichie bénéficie du pétrissage machine, bien que le pétrissage à la main soit possible). Ajouter le mélange levure-lait et mélanger à bas pendant 2 minutes jusqu'à ce qu'une pâte shaggy se forme, puis augmenter à moyen-doux et pétrir pendant 5-6 minutes jusqu'à ce que la pâte soit lisse mais encore légèrement collante. Ne pas ajouter encore de beurre — la graisse doit être incorporée après la mise en place du réseau de gluten. L'ajout de beurre trop tôt empêche le bon développement du gluten et produit un pain mijoté.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse et légèrement collante qui nettoie les côtés du bol mais colle au fond lorsque le mélangeur est en marche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours dur et louche. Des larmes au lieu de s'étirer. Ne s'est pas réuni dans une pâte cohésive.",
            "action": "Continuez à pétrir encore 2-3 minutes. A 55 % d'hydratation avec un œuf, cette pâte se réunit plus vite que les pâtes maigres."
          },
          {
            "state": "Perfect",
            "description": "Doux, légèrement collant, dégage les côtés du bol. Étriers 8-10 cm sans déchirement. La surface est satinée.",
            "action": "Commencez à ajouter du beurre ramolli."
          },
          {
            "state": "Overdone",
            "description": "Sécher et raide. Complètement lisse et tire proprement de toutes les surfaces du bol.",
            "action": "Ajouter le beurre — la graisse va adoucir la structure et restaurer la pliabilité."
          }
        ]
      },
      "feelCue": "La pâte pré-buée doit se sentir comme une pâte à pain standard – lisse et élastique, mais avec une légère richesse de l'œuf qui la rend plus douce et plus indulgente."
    },
    {
      "nodeId": "step_3",
      "action": "Incorporer délicatement",
      "inputs": [
        "base_dough",
        "ing_06"
      ],
      "outputState": "enriched_dough",
      "instructions": "Avec le mélangeur fonctionnant sur moyenne-doux, ajouter le beurre ramolli en 4-5 petits ajouts, permettant à chaque pièce d'intégrer complètement avant d'ajouter le suivant. La pâte semble s'effondrer à mesure que la graisse enveloppe les brins de gluten — c'est normal et temporaire. Après l'ajout final, augmenter à vitesse moyenne et pétrir pendant 6-8 minutes de plus jusqu'à ce que la pâte soit lisse, élastique et tire proprement du bol — c'est le test de fenêtre pour la pâte enrichie. La pâte finie sera nettement plus douce, plus brillante et plus extensible qu'une pâte maigre. Il ne devrait pas être collant à ce stade.",
      "visualCue": {
        "primaryTarget": "Une pâte brillante, lisse et très douce qui tire proprement de toutes les surfaces du bol et tient sa forme lorsqu'elle est formée en boule.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore légèrement grasse ou présente de petites stries de beurre visibles. Il s'effondre immédiatement lorsqu'il se forme en boule.",
            "action": "Continuer à pétrir jusqu'à ce que le beurre soit complètement absorbé et qu'il ne reste pas de stries. La transition du gras au brillant est claire."
          },
          {
            "state": "Perfect",
            "description": "Doux, brillant, tire proprement du bol et des mains. Forme une balle qui tient sa forme. La vitre est mince et presque translucide.",
            "action": "Mettre dans un bol beurré, couvrir et prouver jusqu'à doublé."
          },
          {
            "state": "Overdone",
            "description": "Très chaud du mélange prolongé. La pâte est molle et grasse: le beurre a fondu plutôt que d'être incorporé.",
            "action": "Réfrigérer 15-20 minutes pour rétablir le beurre, puis pétrir brièvement."
          }
        ]
      },
      "feelCue": "Entièrement enrichie, la pâte à pain au lait se sent comme du velours contre la paume — incroyablement douce, lisse comme de la peau, avec une chaleur et une richesse que les pâtes maigres manquent complètement."
    },
    {
      "nodeId": "step_4",
      "action": "Faire lever",
      "inputs": [
        "enriched_dough"
      ],
      "outputState": "proofed_dough",
      "instructions": "Formez la pâte en boule, placez-la dans un bol beurré et tournez une fois pour enrober. Couvrir de plastique et laisser monter à température ambiante chaude (24-26 C) pendant 60-90 minutes, jusqu'à ce que la pâte ait doublé. Les pâtes enrichies prouvent plus lentement que les pâtes maigres en raison de la graisse et du sucre inhibant l'activité de la levure — ne se précipitent pas. Une erreur courante est la cuisson d'un pain enrichi sous-proof et l'obtention d'une brique dense et brioche. Après la première montée, dégonflez doucement la pâte et divisez en 12 portions égales (environ 50-55g chacune si vous travaillez avec 500g de farine).",
      "visualCue": {
        "primaryTarget": "Double en volume. Dôme lisse et arrondi. Souffle doucement quand le bol est tapé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Grandie de 60 % ou moins. Sensé et lourd quand le bol est levé. Doigt ressort complètement en 1-2 secondes.",
            "action": "Couvrez et attendez. Les pâtes enrichies sont patientes — la graisse et le sucre ralentissent la levure; donnez-lui plus de temps."
          },
          {
            "state": "Perfect",
            "description": "Nettement doublé. Surface lisse, bombée. Doigt ressort à mi-chemin en 5-7 secondes — pas immédiatement, pas du tout.",
            "action": "Divisez et formez des rouleaux."
          },
          {
            "state": "Overdone",
            "description": "Plus que doublé, le dôme s'est légèrement effondré. Une forte odeur de bière à levure. Très doux.",
            "action": "Divisez immédiatement et formez rapidement. Les rouleaux seront un peu plus denses mais encore bons."
          }
        ]
      },
      "feelCue": "Appuyez sur un bout de doigt beurré dans la pâte enrichie à l'épreuve — il se sent comme la pâte à pain la plus douce possible, donnant immédiatement avec une tendresse qu'une pâte maigre ne réalise jamais tout à fait."
    },
    {
      "nodeId": "step_5",
      "action": "Façonner",
      "inputs": [
        "proofed_dough"
      ],
      "outputState": "shaped_rolls",
      "instructions": "Travailler sur une surface légèrement farinée, aplatir chaque portion doucement dans un petit disque, puis plier les bords dans le centre et retourner ainsi la couture est en dessous. Coupez votre main sur la pâte et faites pivoter la pâte avec un mouvement circulaire sur la partie non-flaurée de la surface — la friction construit la tension de surface et tire le rouleau dans une sphère serrée et lisse. Disposer les rouleaux dans un plat à cuisson légèrement beurré, les rouleaux se touchant mutuellement, ce qui produit la structure caractéristique de traction-apart qui rend la douleur au lait si réconfortante. Couvrir d'un chiffon humide et résister pendant 45-60 minutes à la température ambiante jusqu'à ce que les rouleaux soient visiblement gonflés et que les rouleaux se soient développés.",
      "visualCue": {
        "primaryTarget": "Des rouleaux serrés, lisses, se touchent dans la poêle, visiblement gonflés et légèrement bombés au-dessus du bord de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 45 minutes, les rouleaux sont clairement individuels avec des écarts entre eux. La surface n'a pas beaucoup lissé. Sensation lorsqu'il est pressé.",
            "action": "Attendez encore 15-20 minutes. Les pâtes enrichies sont fiables mais lentes."
          },
          {
            "state": "Perfect",
            "description": "Les rouleaux se sont développés et ont rempli la poêle. La surface est lisse et oreiller. Un doigt pressé dans le côté ressort lentement en 6-8 secondes.",
            "action": "Badigeonner avec les œufs et cuire."
          },
          {
            "state": "Overdone",
            "description": "Les rouleaux se sont considérablement développés au-dessus du bord de la poêle. La surface présente des fissures dues à la résistance rapide. Douce et fragile.",
            "action": "Cuire immédiatement, mais doucement — ne pas brosser l'oeuf se laver trop vigoureusement ou les rouleaux se dégonfler."
          }
        ]
      },
      "feelCue": "Un rouleau de douleur au lait bien éprouvé a l'impression d'appuyer sur un oreiller à plumes très doux — la résistance n'est presque rien, une douceur de production pure qui tient sa forme de dôme seulement parce que la structure du gluten est toujours intacte."
    },
    {
      "nodeId": "step_6",
      "action": "Cuire au four",
      "inputs": [
        "shaped_rolls",
        "ing_07"
      ],
      "outputState": "finished_pain_au_lait",
      "instructions": "Préchauffer le four à 180 C (360 F). Battez l'œuf réservé avec une pincée de sel et brossez doucement chaque rouleau avec une couche mince et uniforme — ne pressez pas durement ou les rouleaux dégonfleront. Cuire sur la grille centrale pendant 18-22 minutes jusqu'à ce que les rouleaux soient un riche doré-brun à travers les sommets et la température interne lit 88-90 C (190-195 F). Les pains enrichis sont faits à une température interne inférieure à celle des pains maigres en raison de la teneur en gras et en oeufs. Laisser refroidir dans la casserole pendant 5 minutes, puis transférer sur un support métallique. Pain au lait est mieux mangé chaud ou le même jour, bien qu'un petit micro-ondes de 10 secondes le deuxième jour restaure la plupart de la douceur originale.",
      "visualCue": {
        "primaryTarget": "Deep, laqué doré-brun sur tous les toits de rouleau. La glaçure aurait dû se mettre dans une finition brillante, même sans taches pâles et ternes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle, encore légèrement pâteux quand pressé au centre. Le lavage des oeufs semble terne plutôt que brillant. Intérieur inférieur à 85 C.",
            "action": "Retourner au four 5 minutes de plus. Couvrir lâchement avec du papier d'aluminium si déjà doré pour éviter le surgonflement pendant les finitions intérieures."
          },
          {
            "state": "Perfect",
            "description": "Riche brun doré, brillant du lavage des œufs. Sens de beurre et de lait caramélisé. Les côtés où les rouleaux touchent sont plus pâles et doux. Intérieur 88-90 C.",
            "action": "Laisser refroidir 5 minutes et servir. Débarrassez-vous à table."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé approchant rouge-ambre. Haut très sombre. L'intérieur a séché trop longtemps au four.",
            "action": "Enveloppez immédiatement un chiffon propre pour emprisonner la vapeur résiduelle, qui réhydratera légèrement l'extérieur."
          }
        ]
      },
      "feelCue": "Attachez une douleur au lait en roulant loin du plateau tout en restant chaud et l'intérieur devrait s'étirer en longs brins blancs tendres — une miette si douce qu'elle sent plus de textile que de pain, s'éloignant comme les pages d'un livre humide."
    }
  ]
};
