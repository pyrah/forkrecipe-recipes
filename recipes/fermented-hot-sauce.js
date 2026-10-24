export default {
  "repoId": "master_american_fermented_hot_sauce_001",
  "parentRepoId": null,
  "slug": "fermented-hot-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce chaude fermentée",
  "description": "Une sauce chaude vivante — des chiles frais de cayenne et de fresno entier lacto-fermenté dans une saumure de sel pendant deux semaines, puis mélangé avec leur propre saumure d'acide lactique en quelque chose de lumineux, funky, et stratifié d'une manière que les sauces chaudes au vinaigre épicé ne peut jamais être. La fermentation ne se contente pas de préserver ; elle transforme, échangeant la netteté végétale brute pour une chaleur complexe et arrondie qui se construit lentement et s'attarde.",
  "cuisine": "Américain",
  "culture": "Louisiane",
  "category": "fermented",
  "tags": [
    "fermenté",
    "Sucre chaude",
    "condiment",
    "lactofermentés",
    "végétalien",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "14 day",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 4,
    "bitter": 1,
    "umami": 1,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Heat",
      "name": "Poivrons frais de Cayenne, tiges enlevées",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "Fresno rouge",
        "rouge jalapeño",
        "Chiles d'oiseaux thaïlandais pour plus de chaleur"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "Chiles fresno ou rouge jalapeño, tiges enlevées",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "poivron rouge pour une sauce plus douce",
        "habanero pour plus de chaleur"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Giroves d'ail, pelées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel non iodé (sel de mer ou casher, 3 % en poids de la masse végétale totale)",
      "ratioValue": 11,
      "defaultUnit": "g",
      "substitutions": [
        "sel de décapage — sel jamais iodé, qui inhibe la lactofermentation"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Solvent",
      "name": "Eau filtrée (sans chlore), suffisante pour submerger",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "eau de source"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparer et peser",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "measured_ingredients",
      "instructions": "Peser tous les chiles et l'ail ensemble — c'est votre masse végétale totale. Calculer 3 % de ce poids dans le sel non iodé (par exemple, 350 g de légumes totaux = 10,5 g de sel). Ce ratio sel de 3% est le principal contrôle: trop peu de sel invite les bactéries àrot mou à surcombattre le lactobacillus; trop supprime toute activité microbienne. Enlevez les tiges des chiles, mais gardez les graines — elles contiennent de la chaleur, de la saveur et des microorganismes de surface bénéfiques. Il n'est pas nécessaire de blanchir ou de faire cuire les chiles. Portez des gants lorsque vous manipulez plus d'une poignée de cayennes et évitez de toucher votre visage.",
      "visualCue": {
        "primaryTarget": "Un tas précis de chiles rouges vifs et d'ail à l'échelle, les tiges jetées, les graines intactes, prêtes pour le broyage. Les chiles doivent être fermes et frais avec une peau brillante, non molle ni ridée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tiges ne sont pas enlevées, le sel n'est pas encore pesé, ni les chiles mous/dégradés mélangés avec des chiles frais.",
            "action": "Enlever toutes les tiges (elles peuvent contenir des moisissures indésirables), peser avec précision et enlever les poivrons mous, décolorés ou moisis. Chaque poivre doit être ferme et sans défaut."
          },
          {
            "state": "Perfect",
            "description": "Tous les chiles sont brillants et fermes, les tiges sont coupées, l'ail pelé, le sel est précisément mesuré à 3%. Tout est prêt à être emballé dans le pot.",
            "action": "Procéder à la fabrication de la saumure et à l'emballage du bateau."
          },
          {
            "state": "Overdone",
            "description": "Les Chiliens sont coupés en deux ou coupés pour la vitesse — ce n'est pas mal, mais change la texture de la sauce finale.",
            "action": "Tout ou moitié, les deux travaux. Les poivrons entiers prennent un peu plus de temps à fermenter; la moitié est plus rapide mais peut produire une sauce légèrement plus rugueuse après mélange."
          }
        ]
      },
      "feelCue": "Une cayenne fraîche devrait se casser proprement quand elle est courbée double et se sentir turgité, sans donner. Tout chile qui se plie sans craquer ou qui se sent creux a perdu de l'humidité et peut contenir des moisissures de surface — jetez - le."
    },
    {
      "nodeId": "step_2",
      "action": "Saumure et emballage",
      "inputs": [
        "measured_ingredients",
        "ing_05"
      ],
      "outputState": "packed_ferment",
      "instructions": "Dissoudre complètement le sel pesé dans l'eau filtrée pour faire la saumure — remuer pendant une minute pour s'assurer que chaque grain est dissous. Emballez fermement les piments et l'ail dans un pot à large bouche propre, les poussant fermement pour laisser le moins d'espace possible. Verser la saumure sur les chiles jusqu'à ce qu'ils soient complètement submergés, laissant 3 à 4 cm d'espace de tête. Peser les chiles sous la surface de la saumure en utilisant un poids de fermentation, un petit sac à fermeture éclair rempli de saumure ou une feuille de chou pliée à plat. Tout chile exposé à l'air au-dessus de la surface de la saumure se moulera. Scellez avec un couvercle ou un sas.",
      "visualCue": {
        "primaryTarget": "Un pot serré de chiles rouges vifs entièrement immergés dans une saumure claire, légèrement salée, avec un poids les tenant sous la surface. La saumure devrait couvrir tout de 1 cm au moins.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Chilis flottant au-dessus de la saumure, exposés à l'air, sans poids les laissant submergés.",
            "action": "Ajoutez immédiatement un poids — un pot rempli d'eau, un sac scellé de saumure ou un coin de légumes parés. Les chiles exposés développeront la moisissure de surface dans les 2 jours."
          },
          {
            "state": "Perfect",
            "description": "Tous les chiles entièrement immergés, jarres bien emballés, espace tête approprié. La saumure est claire et sent le sel et le chile frais. Le pot est couvert mais non hermétiquement scellé.",
            "action": "Étiquette avec la date et conserver à température ambiante, de 18 à 24°C, hors du soleil direct."
          },
          {
            "state": "Overdone",
            "description": "La saumure ne peut pas circuler, ni être complètement étanche sans sa saumure.",
            "action": "Enlevez le couvercle pour que le gaz puisse s'échapper, ou ajoutez un sas. Un pot complètement scellé va augmenter la pression à mesure que la fermentation produit du CO2 — au minimum il va pulvériser la saumure; au pire un pot de verre peut craquer."
          }
        ]
      },
      "feelCue": "Après l'emballage, appuyez sur les piments à l'arrière d'une cuillère — la saumure devrait lever et couvrir les poivrons comprimés. Cette poussée hydraulique confirme un liquide adéquat pour le ferment complet."
    },
    {
      "nodeId": "step_3",
      "action": "Fermenter",
      "inputs": [
        "packed_ferment"
      ],
      "outputState": "fermented_peppers",
      "instructions": "Ferment à température ambiante, de 18 à 24°C, pendant 10 à 14 jours. Au cours des 2 à 3 premiers jours, la saumure deviendra nuageuse et pâle au fur et à mesure que les lactobactéries se multiplient. Vous pouvez voir de petites bulles s'accrocher aux chiles ou se lever à travers la saumure. Goûtez la saumure tous les jours à partir du jour 5 : elle devrait progressivement passer de salé à agréablement aigre et tannant. Les chiles vont se faner de rouge vif à un rouge brique plus terne que les pigments changent. Vérifiez chaque jour la levure de kahm de surface (un film blanc plat sur la surface de la saumure) – c'est inoffensif; écrasez-la avec une cuillère. Tout moule flou, relevé ou coloré signifie jeter tout le lot.",
      "visualCue": {
        "primaryTarget": "Saumure blanche nuageuse avec de petites bulles montant à travers elle, des chiles rouges briques qui ont légèrement adouci, et un arôme fermenté tanné remplaçant la chaleur vive crue de chiles frais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 5 jours, la saumure est encore claire, à peine nuageuse, et n'a qu'un goût salé avec peu d'aurore. Très peu de bulles visibles.",
            "action": "Déplacez le pot quelque part plus chaud (23 à 26°C). Les ferments refroidissants se situent au-dessous de 18°C. Donnez-lui 2 jours de plus et goûtez encore."
          },
          {
            "state": "Perfect",
            "description": "Brine blanc laiteux et aigre-tange, chiles rouge brique et donnant quand pressé, le pot entier sentant un ferment funky, aigre, à base de plantes. La saveur est complexe: chaleur à l'avant, aigre au milieu du palais, finition salée.",
            "action": "Retirez et réservez toute la saumure, puis mélangez les chiles fermentés."
          },
          {
            "state": "Overdone",
            "description": "Après 21 jours ou plus, les chiles sont très doux et la saumure est agressivement aigre avec une acidité plate d'une note qui a plus un goût de vinaigre bon marché qu'un ferment complexe.",
            "action": "Toujours comestible — mélange et goût. Couper la netteté dans l'étape de mélange avec une pincée de sucre ou une bruine d'huile d'olive."
          }
        ]
      },
      "feelCue": "Pressez un chile entièrement fermenté à travers le verre (si dans un bocal) ou à travers le couvercle — il devrait donner nettement, se sentir moins ferme que quand il est entré. Appuyez sur un chile avec un doigt propre: il doit donner doucement, comme un raisin très mûr, ne pas être musclé ou désintégré."
    },
    {
      "nodeId": "step_4",
      "action": "Mixer",
      "inputs": [
        "fermented_peppers"
      ],
      "outputState": "finished_hot_sauce",
      "instructions": "Égoutter les chiles fermentés et l'ail dans un bol, en réservant TOUS la saumure — c'est le cœur lactique de la sauce. Transférer les chiles et l'ail dans un mélangeur et ajouter suffisamment de la saumure réservée pour se fondre en douceur, en commençant par la moitié et en ajoutant plus jusqu'à ce que vous atteignez votre consistance préférée. Mélanger en haut pendant 2 minutes complètes jusqu'à ce qu'il soit complètement lisse. Goûtez et ajustez : ajoutez plus de saumure pour plus de tang et de sel, ou une éclaboussure d'eau douce pour la moeller. Pour une sauce lisse classique de style Louisiane, filtrez à travers un tamis fin, pressez les solides; pour une sauce plus épaisse, laissez sans entraînement. Bouteille dans des pots propres ou presser les bouteilles. La sauce se conserve au réfrigérateur pendant 6 mois et continue à se développer lentement.",
      "visualCue": {
        "primaryTarget": "Une sauce écarlate lisse, rouge brique à vif avec une consistance versable, sentant simultanément des chiles frais, de l'ail lactique et de l'ail – vif et vif, non plat.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est gritty et chunky, pas complètement mélangée, avec des graines de chile visibles et des fragments de peau flottant dans la saumure aqueuse.",
            "action": "Mélanger plus longtemps à haute vitesse. Ajouter un peu plus de saumure pour aider les lames à s'engager si le mélange est trop épais."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, profondément rouge, versable mais pas aqueuse. La chaleur frappe l'avant de la bouche, l'auresse suit dans le palate moyen, et une longueur salée et ailky porte à travers la finale. Il est vivant et stratifié.",
            "action": "Bouteille immédiatement. La sauce est prête à l'emploi; elle va se fondre et s'approfondir au cours des 2 premières semaines au réfrigérateur."
          },
          {
            "state": "Overdone",
            "description": "La sauce est si fine et aqueuse qu'elle coule comme de l'eau colorée de la cuillère, ou si épaisse et souillée qu'elle est plus pâteuse que la sauce.",
            "action": "S'il est trop mince : enfoncer et réduire brièvement dans une casserole à feu doux, fouetter, jusqu'à ce qu'il enrobe une cuillère. Si trop épais : mélanger plus de saumure ou d'eau 1 cuillère à soupe à la fois."
          }
        ]
      },
      "feelCue": "La sauce finie doit s'accrocher à l'arrière d'une cuillère et tomber dans une feuille lente et uniforme — ne pas couler dans les gouttes (trop minces) ou s'asseoir dans un monticule (trop épaisse). Goûtez-le : la chaleur devrait se construire plus de 30 secondes au lieu d'épiler et de s'estomper immédiatement, ce qui est la marque de la complexité dérivée de la fermentation."
    }
  ]
};
