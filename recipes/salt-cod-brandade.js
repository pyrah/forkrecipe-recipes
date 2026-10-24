export default {
  "repoId": "master_french_salt_cod_brandade_001",
  "parentRepoId": null,
  "slug": "salt-cod-brandade",
  "author": "ForkRecipe Kitchen",
  "title": "Brandade de Morue",
  "description": "La morue salée provençale pilonnée ou mélangée à l'huile d'olive et au lait chaud jusqu'à ce qu'elle devienne une émulsion d'ivoire lisse – dense, luxueuse, peu poissonneuse de la meilleure façon possible. Étaler sur le crostini ou gratiné dans un plat de cuisson, c'est le goût de la côte du Languedoc en hiver.",
  "cuisine": "Français",
  "culture": "Provençal",
  "category": "seafood",
  "tags": [
    "français",
    "d ' origine",
    "morue salée",
    "Produits de la mer",
    "Sans gluten"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "26 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Cabillaud salé (bacalà), avec peau désossée",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "morue salée désossée (réduire jusqu'à 18h)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Giroves d'ail, pelées",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile d'olive extra vierge, légèrement chauffée",
      "ratioValue": 150,
      "defaultUnit": "ml",
      "substitutions": [
        "Mélange d'huile d'olive et d'huile d'olive légère pour une saveur plus douce"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Lait entier, chauffé à la température de la main",
      "ratioValue": 100,
      "defaultUnit": "ml",
      "substitutions": [
        "crème chaude pour une version plus riche",
        "Lait d'avoine sans lait"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de vin blanc, quelques gouttes"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Poivre blanc, fraîchement moulu",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "poivre noir"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Thym frais, feuilles seulement",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "Thym séché (la moitié de la quantité)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Désalte la morue",
      "inputs": [
        "ing_01"
      ],
      "outputState": "desalted_cod",
      "instructions": "Placer la peau de morue salée dans un grand bol ou un plat de cuisson profond et couvrir d'eau froide. Réfrigérer pendant 24 heures, changer l'eau au moins 3 fois — toutes les 6 à 8 heures est idéal. L'eau deviendra blanche et nuageuse à chaque fois, emportant le sel de curage. Après le trempage final, goûtez un mince flocon de la partie la plus épaisse : il devrait goûter agréablement salé, comme un poisson bien assaisonné, pas bri ou dur. Si c'est encore dur, trempez 2 heures de plus.",
      "visualCue": {
        "primaryTarget": "Après le changement final de l'eau, la chair a visiblement plumé et s'est allégée de son état rigide et salin à un filet d'ivoire plus doux et pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La morue a encore un goût fortement salé, presque non comestible. La chair est encore raide et légèrement translucide.",
            "action": "Changez l'eau et trempez encore 4 à 6 heures. La morue sous-désalée ne peut pas être corrigée une fois cuite."
          },
          {
            "state": "Perfect",
            "description": "Un mince flocon a le goût d'un poisson assaisonné, suffisamment salé pour savoir qu'il s'agit de morue salée, mais pas de morue dure ou de cocu. La chair est molle et légèrement molle.",
            "action": "Allez au braconnage."
          },
          {
            "state": "Overdone",
            "description": "La morue s'est trempée trop longtemps — elle a un goût plat et poissonneux sans caractère salin. La chair est très douce et commence à s'effondrer.",
            "action": "Continuez immédiatement. Assaisonner la marque finale généreusement avec du sel pour compenser."
          }
        ]
      },
      "feelCue": "Au bout de 24 heures, la morue doit fléchir lorsque vous la pliez, et non plus rigide comme une planche — la texture va de sec à souple et légèrement productive, comme le saumon cru."
    },
    {
      "nodeId": "step_2",
      "action": "Pochette de la morue",
      "inputs": [
        "desalted_cod",
        "ing_07"
      ],
      "outputState": "poached_cod",
      "instructions": "Placer la morue désaltée dans une grande casserole et couvrir d'eau froide fraîche. Ajoutez le thym. Portez - vous lentement à une mijotée nue — de minuscules bulles montant aux bords, l'eau tremblant mais ne bouillant pas. Poché pendant 10-12 minutes. Ne pas faire bouillir : faire bouillir à ce stade pousse la protéine dans une dalle dure et caoutchouteuse et brise les fines paillettes. La morue est faite lorsqu'elle se flocait facilement le long de ses coutures naturelles lorsqu'elle est enrobée d'une fourchette. Soulevez, jetez l'eau de braconnage et laissez-la refroidir.",
      "visualCue": {
        "primaryTarget": "La morue est uniformément blanc ivoire et opaque, les flocons s'ouvrent visiblement aux coutures lorsqu'ils sont pressés. La peau et les os sont facilement identifiables pour l'enlèvement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La partie la plus épaisse de la morue est encore translucide au centre et les flocons résistent à la séparation. La chair est printanière et pas encore tendre.",
            "action": "Retourner à l'eau de braconnage (hors ébullition) et laisser reposer 3 minutes de plus dans la chaleur résiduelle."
          },
          {
            "state": "Perfect",
            "description": "Complètement opaques et ivoire, les flocons se séparent naturellement le long de leurs coutures. La peau s'éteint et les os se détachent sans déchirer la chair.",
            "action": "Retirer la peau et les os, puis procéder à l'émulsion."
          },
          {
            "state": "Overdone",
            "description": "La chair est ferme et sèche, les flocons sont très petits et serrés. Le poisson sent fortement — des notes sulfureuses émergent.",
            "action": "Continuer, mais ajouter du lait chaud supplémentaire pour compenser la perte d'humidité. L'émulsion sera plus dense et pourrait nécessiter plus d'huile."
          }
        ]
      },
      "feelCue": "Soulevez un flocon de cabillaud poché — il devrait se sentir comme la poitrine de poulet cuite: tendre et donnant, mais tenant encore forme, se séparant proprement plutôt que de déchiqueter en mousse."
    },
    {
      "nodeId": "step_3",
      "action": "Pound ou mélanger la morue",
      "inputs": [
        "poached_cod",
        "ing_02"
      ],
      "outputState": "broken_cod",
      "instructions": "Enlevez toute la peau et tous les os de la morue — passez soigneusement vos doigts à travers les flocons pour trouver chaque épine osseuse. Placer la morue et l'ail cru dans un mortier et la livre à une pâte, ou pouls dans un robot alimentaire. Le but est de décomposer le poisson en une masse fine et cohésive qui absorbera l'huile et le lait. Ne pas encore traiter à une pâte complètement lisse — une base légèrement granuleuse et texturée est correcte à ce stade. L'ail doit être entièrement incorporé et invisible.",
      "visualCue": {
        "primaryTarget": "Une pâte pâle et légèrement fibreuse de poisson cassé, les flocons individuels ne sont plus distincts mais ne sont pas encore une crème lisse. De minuscules taches blanches d'ail sont invisibles dans le poisson.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La morue est encore en morceaux distincts — de grands flocons qui ne se sont pas brisés. L'ail est une pile visible séparée.",
            "action": "Pound ou pouls plus agressif. La morue doit être une pâte cohésive pour émulsifier avec l'huile."
          },
          {
            "state": "Perfect",
            "description": "Une pâte dense, légèrement grainée, presque comme une purée raide. L'ail est entièrement incorporé. La couleur est l'ivoire pâle.",
            "action": "Commencez à ajouter l'huile et le lait alternativement."
          },
          {
            "state": "Overdone",
            "description": "Le surtraitement dans un robot alimentaire a rendu la morue collante et légèrement gommée, perdant toute texture.",
            "action": "Procéder — l'étape de l'émulsion avec l'huile et le lait va desserrer la pâte. Réduire légèrement la quantité de lait."
          }
        ]
      },
      "feelCue": "Appuyez sur une pincée de la pâte entre votre pouce et l'index — il devrait se sentir comme du sable humide qui tient sa forme brièvement quand pressé, ni collant ni s'écroulant."
    },
    {
      "nodeId": "step_4",
      "action": "Emulsion avec huile et lait",
      "inputs": [
        "broken_cod",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_brandade",
      "instructions": "Avec la pâte de morue dans le mortier ou un bol mis à feu doux (ou dans un mélangeur de stand avec pagaie), commencer à ajouter l'huile d'olive chaude dans un flux mince et lent, le travailler constamment — exactement comme faire une mayonnaise. Lorsque la moitié de l'huile est incorporée, ajouter une cuillère à soupe de lait chaud. Autres huiles et lait jusqu'à ce que les deux soient entièrement incorporés. La brandade se transformera d'une pâte dense à une émulsion lisse, moelleuse et blanche d'ivoire qui est assez légère pour scoop mais assez riche pour buter. Assaisonner de poivre blanc et de jus de citron. Bouche : il doit être salé, riche, peu poissonneux et très satisfaisant.",
      "visualCue": {
        "primaryTarget": "Une émulsion d'ivoire lisse et pâle, plus légère et plus volumineuse que la pâte de départ, blanche opaque, brillante et assez épaisse pour tenir un pic lorsqu'on l'a écopé d'une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile est mise en commun et le mélange a l'air cassé — les piscines grasses flottant sur la pâte de morue. Pas émulsifié.",
            "action": "Ralentissez l'addition d'huile et travaillez plus vigoureusement. Ajouter une cuillère à soupe de lait chaud pour aider à lier l'émulsion."
          },
          {
            "state": "Perfect",
            "description": "La brandade est blanche, lisse, légère et moelleuse; elle rubane la cuillère dans un écoulement lent et crémeux. Goûts équilibrés entre sel et richesse, avec une saveur de morue propre.",
            "action": "Transférer dans un plat de service et servir au chaud avec du crostini, ou tartiner dans un plat de gratin et brunir sous un poulet chaud."
          },
          {
            "state": "Overdone",
            "description": "Trop d'huile ou de lait a été ajouté — la marque est très lâche et verse plutôt que des monticules. La saveur est diluée.",
            "action": "Plier dans un peu plus de morue pochée (finement cassée) pour la serrer. Ou servir de sauce plutôt que de tartiner."
          }
        ]
      },
      "feelCue": "Visser une cuillère et la regarder tomber — il devrait tomber dans un ruban lent et lourd qui culbute sur lui-même, pas éclaboussure comme de la soupe. La chaleur du mélange doit être agréablement chaude à la main, jamais trop froide pour émulsifier."
    }
  ]
};
