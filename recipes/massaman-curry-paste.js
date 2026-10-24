export default {
  "repoId": "master_thai_massaman-curry-paste_001",
  "parentRepoId": null,
  "slug": "massaman-curry-paste",
  "author": "ForkRecipe Kitchen",
  "title": "Massaman Pâte de curry",
  "description": "Une pâte sombre, complexe et enivrante du sud musulman de la Thaïlande — des chilis séchés, du galangal rôti et de la citronnelle fourrée dans une base parfumée chauffée à la cardamome, à la cannelle et à la girofle. Sa lignée Malay-Persienne la rend différente de toute autre pâte thaïlandaise : plus sucrée, plus aromatique et hantée par l'histoire du commerce des épices.",
  "cuisine": "Thaï",
  "culture": "Thaï du Sud",
  "category": "sauces",
  "tags": [
    "Thaï",
    "curry",
    "pâte",
    "Massaman",
    "sud",
    "épice",
    "Muslim-thai"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Heat",
      "name": "Guajillo séché ou piments thaïs rouges séchés, ensemencés et trempés 20 min",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "piments ancho séchés",
        "piments du Nouveau-Mexique séchés"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Pâtes de citronnelle, partie blanche seulement, coupées en tranches minces",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "citronnelle congelée"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Galangal, frais ou congelés, pelés et écossés",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "gingembre frais (résultat doux)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Échalotes, coupées en deux et grillées à sec dans une poêle jusqu'à carbonisation extérieure",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Girofles à l'ail, grillées à sec en coquille jusqu'à ce qu'elles soient douces",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Graines de coriandre grillées",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Graines de cumin grillées",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Mélange d'épices chaudes : gousses de cardamome (semences seulement), cannelle, gousses",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "mélange d'épices de massaman acheté en magasin"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Umami",
      "name": "Pâte de crevettes (kapi), grillée en feuilles",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "pâte de miso blanche (vegan)",
        "pâte de haricots fermentée"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire griller",
      "inputs": [
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "toasted_spices",
      "instructions": "Placer une poêle sèche à feu moyen. Ajouter les graines de coriandre et les toasts, en tremblant fréquemment, pendant 2 à 3 minutes jusqu'à ce qu'ils commencent à se former et à sentir les agrumes chauds et la terre. Ajouter les graines de cumin pendant les 60 dernières secondes – elles toastent plus rapidement et brûlent facilement. Dans les 30 dernières secondes, ajouter les graines de cardamome, un morceau de cannelle et 2 girofles. Conseillez tout immédiatement sur une plaque froide et laissez refroidir complètement avant de meuler. Un mortier et un pilon ou un broyeur d'épices fonctionnent; moudre à une poudre fine.",
      "visualCue": {
        "primaryTarget": "Les graines de coriandre sont dorées pâles-bruns, fêlées aux coutures, avec un approfondissement visible de la couleur. La cuisine sent très bien le curry chaud.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines sont encore pâles, sentent crus et féculentes sans chaleur. Coriandre a un goût peu savonneuse.",
            "action": "Revenez à la poêle à feu moyen en regardant constamment — 60 secondes de plus."
          },
          {
            "state": "Perfect",
            "description": "Les graines sont ambres à leurs équateurs, sombres aux extrémités. Ils sentent la peau d'orange chaude et les fleurs séchées. Une graine fissurée révèle un intérieur doré.",
            "action": "Astucez immédiatement sur une assiette froide pour arrêter la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Les graines sont brun foncé ou noir. La fumée s'élève. Une odeur amère et acride.",
            "action": "Jetez et recommencez — les épices brûlées rendront la pâte entière amère au-delà du secours."
          }
        ]
      },
      "feelCue": "Une graine de coriandre grillée devrait tomber entre votre vignette et l'index, pas rebondir. Si ça rebondit, il lui faut plus de chaleur."
    },
    {
      "nodeId": "step_2",
      "action": "Rôtir",
      "inputs": [
        "ing_04",
        "ing_05"
      ],
      "outputState": "charred_alliums",
      "instructions": "Placer les échalotes (aspirées, sur la peau) et les gousses entières d'ail non pelées dans une poêle sèche ou directement sur une flamme gazeuse. Cuire à feu moyen-vif, en tournant occasionnellement, jusqu'à ce que l'extérieur soit noirci dans des taches et que la chair à l'intérieur soit molle et caramélisée — 8-12 minutes. Peler et jeter les peaux carbonisées; la chair en dessous doit être jammy et douce avec des bords amers. Cet omble est essentiel : il construit la profondeur fumée caractéristique des pâtes de curry thaïlandais faites par les vendeurs de rue qui tiennent les aromatiques sur une flamme ouverte.",
      "visualCue": {
        "primaryTarget": "Les échalotes sont noires et cloquées sur le visage coupé, douces lorsqu'elles sont pressées. Les girofles d'ail donnent lorsqu'elles sont pressées et la peau s'éloigne pour révéler la chair dorée à l'ivoire.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les échalotes sont à peine colorées, la chair reste ferme et tranchante. La peau d'ail n'a pas ramolli.",
            "action": "Continuer à griller à sec, en appuyant avec une spatule pour augmenter le contact avec la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Extérieur noir et papier, intérieur doux, doux et confiture avec un arôme de caramel. Peel glisse facilement.",
            "action": "Laisser refroidir légèrement, peler et réserver pour le pilonnage."
          },
          {
            "state": "Overdone",
            "description": "La chair intérieure est également obscurcie et goûte purement amer, pas sucré.",
            "action": "Vous pouvez récupérer des alliums légèrement brûlés en s'imprégnant brièvement dans de l'eau fraîche — il ne s'agit pas de mauvais brûlés, alors utilisez le jugement."
          }
        ]
      },
      "feelCue": "Pressez une moitié d'échalote rôtie — elle devrait donner complètement, comme un raisin mûr, avec de la chair jammy donnant sous vos doigts."
    },
    {
      "nodeId": "step_3",
      "action": "Piler",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_10"
      ],
      "outputState": "fibrous_paste_base",
      "instructions": "Égoutter les piments trempés et retirer l'excès d'eau. Attacher en morceaux et placer dans le mortier avec la citronnelle tranchée, le galangal et le sel. Commencer à frapper avec un mouvement rythmique vers le bas — ne pas remuer, frapper. Rotation du pestle pour assurer une pulvérisation uniforme. Cela prendra 10 à 15 minutes de travail engagé. Ajouter d'abord les matériaux fibreux : le sel agit comme un abrasif, la citronnelle et le galangal doivent être complètement décomposés à la douceur sans fibres avant que rien d'autre n'entre. Si vous utilisez un robot alimentaire, faites des rafales, en grattant fréquemment.",
      "visualCue": {
        "primaryTarget": "Une pâte rouge brique profonde sans croûte de chili visible ni cordes de citronnelle. La pâte se maintient dans une masse cohésive lorsqu'elle est pressée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Fils visibles de fibre de citronnelle, morceaux de peau de chili et galangal. La pâte a l'air rigide et inégale.",
            "action": "Continuez à frapper — les aromatiques fibreux ont besoin d'une panne mécanique complète pour libérer leurs huiles."
          },
          {
            "state": "Perfect",
            "description": "Doux et cohésif, rouge brique avec une surface mate. Lorsqu'il est frotté sur le dos d'une cuillère, il ne reste plus de cordes. Intensément parfumé.",
            "action": "Commencez à ajouter les alliums grillés."
          },
          {
            "state": "Overdone",
            "description": "La pâte est aqueuse et surmenée, collée aux murs de mortier plutôt que d'empiler.",
            "action": "Ajouter une pincée de sel pour l'aider à cocher, et continuer brièvement."
          }
        ]
      },
      "feelCue": "Le mortier doit sonner d'un bruit, pas d'un clic — vous voulez que le pilon frappe la pâte, pas la pierre. Lorsque la résistance fibreuse disparaît et que chaque coup s'abaisse, la pâte est prête."
    },
    {
      "nodeId": "step_4",
      "action": "Piler",
      "inputs": [
        "fibrous_paste_base",
        "charred_alliums",
        "ing_09",
        "toasted_spices"
      ],
      "outputState": "massaman_curry_paste",
      "instructions": "Ajouter les échalotes grillées pelées et l'ail au mortier et les mettre en pâte jusqu'à ce qu'ils soient complètement incorporés. Ajouter la pâte de crevette grillée et moudre les épices chaudes. Continuer à frapper jusqu'à ce que tout soit unifié — la pâte s'approfondira de rouge brique à un brun rouge foncé, presque acajou, comme la pâte de crevettes et les épices s'intègrent. Goûtez et ajustez : il doit être complexe, parfumé, légèrement doux, terreux, avec une chaleur douce qui se construit lentement. Conserver dans un pot sous une fine couche d'huile au réfrigérateur jusqu'à 2 semaines ou congeler en portions de cuillère à soupe.",
      "visualCue": {
        "primaryTarget": "Une pâte d'acajou foncée unifiée, dense et aromatique, sans morceaux visibles d'allium ou d'épices. Il tient sa forme lorsqu'il est écopé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lumps d'échalote encore visibles, épices non intégrées, couleur inégale — rouge brique dans les patchs, sombre dans les autres.",
            "action": "Pound méthodiquement, rotation du pestle dans de larges arcs pour faire glisser tous les composants ensemble."
          },
          {
            "state": "Perfect",
            "description": "Acajou lisse, foncé et intensément aromatique. Une floraison complexe de cardamome, de galangal, de chili et d'ail rôti. Assez dense pour tenir une rainure du pestle.",
            "action": "La pâte est finie. Utiliser immédiatement ou conserver."
          },
          {
            "state": "Overdone",
            "description": "La pâte est devenue huileuse et séparée, libérant des huiles aromatiques dans une flaque autour de la masse.",
            "action": "Ceci est en fait acceptable — l'huile libérée est une saveur pure. Mélanger avant d'utiliser."
          }
        ]
      },
      "feelCue": "Frottez un peu de pâte entre vos doigts — elle doit se sentir dense et légèrement grasse, pas sèche ou humide. La chaleur frappe le bout des doigts quelques secondes après le contact."
    }
  ]
};
