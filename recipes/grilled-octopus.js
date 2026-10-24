export default {
  "repoId": "master_mediterranean_grilledoctopus_001",
  "parentRepoId": null,
  "slug": "grilled-octopus",
  "author": "ForkRecipe Kitchen",
  "title": "Octopus grillés méditerranéens",
  "description": "Une pieuvre entière s'empoisonne dans une cour de vin et d'herbe jusqu'à ce que les tentacules produisent comme du boeuf braisé, puis s'échauffe sur une grille hurlante jusqu'à ce que les suceurs soient blister et ombrage — fini avec du citron vif, des câpres, du persil à feuilles plates et un flot d'huile d'olive herbacée.",
  "cuisine": "Italien",
  "culture": "Sud de l ' Italie",
  "category": "seafood",
  "tags": [
    "octopus",
    "grillé",
    "méditerranéen",
    "Italien",
    "Produits de la mer",
    "été"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "2 hours 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Poulpe entière, nettoyée (manteau et bec enlevés)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "pieuvres congelées à l'époque dégelées"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Vin blanc sec",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "Vermouth sec"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Eau froide, assez pour submerger",
      "ratioValue": 200,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Pâte de céleri",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Girofles d'ail brisées",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Maïs de poivre noir",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin rouge"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Câpres salines, rincées",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "baies de câpres, coupées en deux"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Herb",
      "name": "Persil à feuilles plates, feuilles seulement",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Origan frais"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel de mer blanc",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Maldon"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Citrus",
      "name": "Citron, coupé en deux (pour griller à côté)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pocher",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "poached_octopus",
      "instructions": "Placez la pieuvre nettoyée dans un pot assez grand pour la tenir confortablement. Ajouter le vin blanc, les feuilles de laurier, le céleri, l'ail et les grains de poivre. Couvrir d'eau froide — à partir du froid; cela permet aux protéines de se détendre progressivement plutôt que de saisir dans l'eau bouillante. Porter lentement à mijoter à feu moyen, puis réduire au plus bas niveau possible : une surface à peine tremblante, pas un ébullition. Couvrir avec un couvercle serré. Cuire pendant 1 heure 30 minutes à 2 heures selon la taille. Le collagène dans le manteau a besoin d'un long et doux pochage pour se convertir en gélatine ; un ébullition va resserrer et durcir la chair de façon irréversible. Commencez à vérifier à 1 heure 30 minutes en perçant la partie la plus épaisse d'un tentacule avec un couteau mince.",
      "visualCue": {
        "primaryTarget": "Les tentacules sont enroulés et la peau est uniforme pourpre profond; un couteau mince glisse dans le tentacule le plus épais sans résistance, comme le beurre chaud.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le couteau rencontre une résistance caoutchouteuse au centre du tentacule. La peau peut être patchée entre le violet et le blanc translucide.",
            "action": "Remplacer le couvercle et continuer le pochage, en vérifiant toutes les 15 minutes."
          },
          {
            "state": "Perfect",
            "description": "Le couteau entre avec une résistance zéro. Le tentacule se produit lorsqu'il est légèrement tiré du corps. La chair est uniformément violet-mauve sans centre blanc brut.",
            "action": "Retirer du feu et laisser refroidir la pieuvre dans son liquide de pochage à température ambiante, ce qui la maintient humide."
          },
          {
            "state": "Overdone",
            "description": "La chair du tentacule s'est retirée des anneaux qui tombent, et la chair est musquée ou déchiquetée.",
            "action": "Supprimer immédiatement. Refroidir et griller rapidement — la texture sera douce mais la saveur excellente. Servir avec plus de citron pour éclaircir."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur un tentacule entre le pouce et l'index — un poulpe parfaitement poché donne comme un panna cotta set: légère résistance à la surface, douce et donnant à l'intérieur, jamais caoutchouteux ou printanier."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser reposer",
      "inputs": [
        "poached_octopus"
      ],
      "outputState": "cooled_octopus",
      "instructions": "Laisser refroidir complètement la pieuvre dans son liquide de pochage. Cette période de repos n'est pas facultative: la poulpe réabsorbe l'humidité et les protéines se détendent complètement à mesure que la température diminue. Une fois à température ambiante (environ 45 minutes), transférer sur un plateau et sécher les tentacules avec des serviettes en papier. Vous pouvez réfrigérer jusqu'à 24 heures à ce point ; le repos de nuit améliore la texture du grillage, car la surface sèche légèrement et forme une meilleure croûte. Si vous le souhaitez, coupez la tête des tentacules et divisez l'amas en morceaux individuels ou en paires pour faciliter le grillage.",
      "visualCue": {
        "primaryTarget": "La surface de la pieuvre est sèche mat, non mouillée, et les tentacules tiennent leur forme enroulée sans flappage.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'octopus est encore chaud et humide — vapeur de surface, peau lissée de liquide.",
            "action": "Laisser plus de temps de refroidissement sur le plateau. Pat sèche encore juste avant de griller."
          },
          {
            "state": "Perfect",
            "description": "Température ambiante, sec au toucher, tentacules fermes et tenant leur boucle. La peau est intacte, uniforme pourpre profond.",
            "action": "Badigeonner d'huile d'olive et griller immédiatement ou réfrigérer pendant la nuit."
          },
          {
            "state": "Overdone",
            "description": "Sur-reposé et séché au réfrigérateur ouvert pendant plus de 24 heures — la peau a commencé à se serrer et à craquer, à la surface crayeuse.",
            "action": "Réhydratez très brièvement en plongeant dans un liquide de pochage chaud pendant 30 secondes, puis faites sécher et grillez immédiatement."
          }
        ]
      },
      "feelCue": "Les tentacules refroidis doivent se sentir fermes et légèrement collants sous vos doigts — pas mouillés et glissants, pas à sec. Comme du cuir frais et légèrement huilé."
    },
    {
      "nodeId": "step_3",
      "action": "Griller",
      "inputs": [
        "cooled_octopus",
        "ing_08",
        "ing_12",
        "ing_13"
      ],
      "outputState": "charred_octopus",
      "instructions": "Chauffer une grille de charbon ou une grille de gaz à son maximum absolu, idéalement 270 C (520 F) et au-dessus — grilles en fonte sont préférés pour une rétention maximale de chaleur. Badigeonner généreusement les pieuvres d'huile d'olive et assaisonner de sel flocé. Placez sur la partie la plus chaude du grill. Ne les déplacez pas pendant les 2 premières minutes. Vous entendrez des étourdissements agressifs et quelques éclats de graisse — c'est exact. Après 2 minutes, les tentacules en contact avec la grille doivent être carbonisées avec des marques définies de la grille; retourner et répéter sur le deuxième côté. Ajouter les moitiés de citron sur le grill à côté. Durée totale du grill : 4-6 minutes. Vous ne cuisinez pas la pieuvre — elle est déjà cuite. Vous créez de l'omble, de la croûte et de la fumée.",
      "visualCue": {
        "primaryTarget": "Des marques d'omble profond sur deux côtés, des anneaux de suceur légèrement noircis, une boucle de fumée légère, et les moitiés de citron sont caramélisées et dorées sur le visage coupé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tentacules sont toujours violet pâle sans omble, les marques de grill sont faibles ou absentes. Sensations vapeur, pas grillées.",
            "action": "Laissez-les tranquilles et augmentez la chaleur. Ne déplacez pas les pièces — le temps de contact crée de la croûte."
          },
          {
            "state": "Perfect",
            "description": "Char de croisement dramatique sur deux côtés, bouts de suceur noircis, peau cloquée et tirant dans les endroits. Arôme de fumée caramel.",
            "action": "Retirer du gril et reposer 1 minute avant la vinaigrette."
          },
          {
            "state": "Overdone",
            "description": "Plus de la moitié de la surface du tentacule est noircie, la chair en dessous commence à sécher et à rétrécir.",
            "action": "Supprimer immédiatement. Trim les bouts les plus carbonisés avec des ciseaux — la saveur en dessous est encore excellente."
          }
        ]
      },
      "feelCue": "Lorsque vous ramassez un tentacule grillé, il doit se sentir ferme et légèrement résistant à la croûte carbonisée, mais chaud et donnant quand vous pressez le corps plus épais — comme mordre à travers un steak bien saigné."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer",
      "inputs": [
        "charred_octopus",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_13"
      ],
      "outputState": "finished_grilled_octopus",
      "instructions": "Transférer la poulpe grillée dans un plateau chaud. Habillez immédiatement tout en étourdissant : arrosez généreusement avec de l'huile d'olive extra vierge, pressez les moitiés de citron grillées sur tout (concentrations de gril et édulcore le jus), dispersez les câpres rincées et déchirez ou coupez grossièrement les feuilles de persil à feuilles plates sur le dessus. Donnez une dernière pincée de sel. Mangez à la fois — le contraste de la croûte fumée-charrée contre l'intérieur tendre et brillant n'existe que pendant environ 5 minutes avant que la croûte s'adoucisse.",
      "visualCue": {
        "primaryTarget": "Collants, tentacules à l'huile à l'omble visible, persil vert vif et câpres éparpillés dans une piscine d'huile d'olive et de citron.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Octopus est habillé mais froid — l'huile n'est pas absorbée et le citron ne s'intègre pas.",
            "action": "Retourner à la grille pendant 1 minute de chaque côté pour réchauffer avant de réhabiller."
          },
          {
            "state": "Perfect",
            "description": "L'huile d'olive est légèrement étourdie contre la chair chaude, le jus de citron sifflant, les câpres et le persil vif et vif. Aroma est fumé, bri, herbacé.",
            "action": "Servir immédiatement sur des assiettes chaudes."
          },
          {
            "state": "Overdone",
            "description": "Octopus s'est habillé pendant plus de 5 minutes — la croûte s'est adoucie, la saumure de câpres a dilué le citron, et tout semble cuit à la vapeur.",
            "action": "Servir indépendamment — revenir à la grille la prochaine fois et s'habiller au dernier moment absolu."
          }
        ]
      },
      "feelCue": "Plongez à travers un tentacule: l'extérieur doit se casser et ombrager contre vos dents, puis laisser place à tendre, donnant chair qui goûte de la mer, fumée, et citron brillant tout à la fois."
    }
  ]
};
