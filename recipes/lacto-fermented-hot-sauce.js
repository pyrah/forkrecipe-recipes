export default {
  "repoId": "master_american_lacto_hot_sauce_001",
  "parentRepoId": null,
  "slug": "lacto-fermented-hot-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce chaude fermentée au lacto",
  "description": "Les Chiliens et l'ail submergés dans une saumure de 2% et laissés au ferment à température ambiante pendant cinq à sept jours — une transformation calme et bouillonnante dans laquelle les bactéries lactiques consomment des sucres et construisent une sauce complexe, tannante et profondément aromatisée qu'aucun raccourci à base de vinaigre ne peut reproduire.",
  "cuisine": "Américain",
  "culture": "Fermentation artisanale",
  "category": "fermented",
  "tags": [
    "sauce chaude",
    "fermenté",
    "lactofermentés",
    "Chile",
    "probiotique",
    "embarcation",
    "condiment"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "7 days",
  "ratioSystem": "parts",
  "stars": 2187,
  "forks": 234,
  "contributors": 67,
  "license": "CC-BY-SA",
  "createdAt": "2024-07-04",
  "updatedAt": "2025-02-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 4,
    "bitter": 1,
    "umami": 2,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Chiles rouges frais (Fresno, Cayenne, ou oeil d'oiseau thaïlandais), tiges enlevées",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "jalapeños (milder)",
        "Habaneros (plus chaud)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Giroves d'ail, pelées",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sels non iodés (sels kosher ou de mer) — pour 2 % de saumure",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Eau filtrée ou déchlorée — pour 2 % de saumure",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme (ajouté après fermentation, au goût)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparer la saumure",
      "inputs": [
        "ing_03",
        "ing_04"
      ],
      "outputState": "salt_brine",
      "instructions": "Dissoudre le sel non iodé dans l'eau filtrée pour créer une saumure de 2 % en poids, soit 20 g de sel par 1 litre d'eau. Le sel iodé ne doit pas être utilisé car l'iode est antibactérien et inhibera ou tuera les bactéries lactiques essentielles à la fermentation. L'eau du robinet doit être filtrée ou laissée à découvert pendant la nuit pour éliminer le chlore, ce qui inhibe également la fermentation. Mélanger jusqu'à ce que chaque grain de sel soit complètement dissous — le sel non dissous peut créer des zones de salinité incohérente qui permettent aux bactéries nuisibles de prospérer.",
      "visualCue": {
        "primaryTarget": "Saumure cristalline sans cristaux de sel visibles non dissous. L'eau semble complètement limpide, indissociable de l'eau pure.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Cristaux de sel encore visibles sur le fond du récipient. La saumure semble légèrement trouble du sel non dissous.",
            "action": "Remuer plus vigoureusement. Le sel doit être complètement dissous avant d'ajouter les légumes."
          },
          {
            "state": "Perfect",
            "description": "Liquide cristallin sans sédiments. Lorsque vous regardez le fond du contenant, la surface est complètement propre.",
            "action": "Utilisez immédiatement pour emballer le pot."
          },
          {
            "state": "Overdone",
            "description": "Impossible au stade du mélange. Cependant, si trop de sel a été ajouté par le poids, la saumure peut inhiber la fermentation.",
            "action": "Goûtez la saumure — elle doit goûter agréablement saline, comme une eau de mer légèrement salée. Si elle a un goût extrêmement salé ou vous fait gagner, diluer avec de l'eau plus filtrée."
          }
        ]
      },
      "feelCue": "Une saumure bien salée doit avoir un goût parfaitement salé, mais pas écrasant, entre une eau de mer légère et une boisson sportive. S'il vous fait sucer ou grimace, il est sursauté et ralentira la fermentation."
    },
    {
      "nodeId": "step_2",
      "action": "Boîte",
      "inputs": [
        "ing_01",
        "ing_02",
        "salt_brine"
      ],
      "outputState": "packed_ferment_jar",
      "instructions": "Emballez les chiles et les gousses d'ail dans un bocal en verre propre, laissant de 4 à 5 cm d'espace de tête. Verser la saumure pour couvrir complètement tout — tous les légumes doivent rester immergés en tout temps sous la ligne de saumure. Utilisez un poids (un petit sac ziplock rempli de saumure, ou une pierre propre) pour garder tout immergé. Couvrez le pot avec un chiffon fixé avec une bande de caoutchouc, ou utilisez un couvercle de sabot. Ne pas utiliser un couvercle scellé — le CO2 produit pendant la fermentation doit pouvoir s'échapper.",
      "visualCue": {
        "primaryTarget": "Tous les chiles et l'ail sont immergés sous la ligne de saumure. La saumure est claire. Le pot a un espace de tête au-dessus de la saumure pour le CO2 à collecter.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les Chiliens et l'ail flottent au-dessus de la saumure. Les pièces sont exposées à l'air.",
            "action": "Peser tout — les légumes exposés moudront. Utiliser un sac rempli de saumure comme poids et assurer une submersion complète."
          },
          {
            "state": "Perfect",
            "description": "Tous les légumes sont complètement submergés, la saumure est claire et l'espace de tête adéquat reste au-dessus. La couverture en tissu est sécurisée.",
            "action": "Placez dans un endroit éloigné de la lumière directe du soleil, à température ambiante (18–24°C)."
          },
          {
            "state": "Overdone",
            "description": "Jar était trop serré et la saumure n'a pas de place pour circuler. Ou trop peu de saumure a été ajouté et les légumes sont à peine couverts.",
            "action": "Faire de la saumure supplémentaire et ajouter pour submerger complètement tous les légumes."
          }
        ]
      },
      "feelCue": "Appuyez sur les légumes à travers le poids — ils doivent se sentir fermes et frais. Au jour 3, ils se sentiront plus doux et commenceront à libérer leur arôme fermenté caractéristique chaque fois que le pot est ouvert."
    },
    {
      "nodeId": "step_3",
      "action": "Ferment",
      "inputs": [
        "packed_ferment_jar"
      ],
      "outputState": "fermented_chile_mash",
      "instructions": "Ferment à température ambiante (idéalement 20–22°C) pendant 5–7 jours. Vérifiez chaque jour: au jour 2-3, de petites bulles devraient se lever à travers la saumure — c'est du CO2 provenant de bactéries actives d'acide lactique. La saumure sera nuageuse à mesure que la population bactérienne grandira. Appuyez sur les légumes tous les jours pour assurer l'immersion. Si un film blanc (levure de kahm) apparaît à la surface, étouffez - il est inoffensif mais affecte la saveur. Si quelque chose de rose, noir, ou flou pousse, jeter et recommencer. Goûtez tous les jours à partir du jour 4 — le ferment est prêt quand il est agréablement aigre et complexe.",
      "visualCue": {
        "primaryTarget": "La saumure est visiblement trouble et légèrement effervescente. Les bulles se lèvent lorsque le pot est légèrement agité. Les Chiliens ont légèrement changé de couleur — de brillant à légèrement plus muette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La saumure est encore claire et aucune bulle n'est visible après 3 jours. Pas de mal au goût. La fermentation n'a pas commencé.",
            "action": "Vérifiez le pourcentage de sel et la qualité de l'eau. Ajouter une cuillère à soupe de lactosérum du yogourt ou de la saumure d'un bon ferment connu pour introduire des bactéries bénéfiques."
          },
          {
            "state": "Perfect",
            "description": "La saumure est trouble avec une effervescence visible. Sens agréablement aigre, funky, et profondément de chile fermenté. Le goût est lumineux, aigre et complexe sans notes.",
            "action": "Transférer au mélangeur et mélanger dans la sauce chaude. Réfrigérer pour arrêter la fermentation."
          },
          {
            "state": "Overdone",
            "description": "Le ferment fonctionne depuis plus de 10 jours. La saveur est très aigre — presque agressivement acide. La couleur du chile s'est considérablementompée.",
            "action": "Procéder — une sauce chaude surfermentée a un caractère très complexe, profondément aigre. Équilibrez avec le vinaigre ou le miel en mélangeant."
          }
        ]
      },
      "feelCue": "Au jour 5, le ferment doit sentir comme une version passionnante et complexe de ce que vous mettez dans — profondément savore, aigre, vivante, et sans aucun doute chili. Ouvrez le pot et respirez profondément : s'il sent intéressant et vivant, il fonctionne. Si ça sent mauvais, fais confiance à ton instinct."
    },
    {
      "nodeId": "step_4",
      "action": "Mélange",
      "inputs": [
        "fermented_chile_mash",
        "ing_05"
      ],
      "outputState": "finished_hot_sauce",
      "instructions": "Égoutter les légumes fermentés sur un bol, réserver la saumure. Transférer les chiles et l'ail dans un mélangeur. Mélanger en haut, en ajoutant la saumure réservée un peu à la fois jusqu'à ce que la sauce atteigne la consistance désirée — du chunky au versable. Ajouter du vinaigre de cidre de pomme au goût : il éclaircit la saveur et prolonge la durée de conservation. Plongez dans un tamis à mailles fines pour une sauce lisse, ou laissez-vous entraîner pour un résultat plus rustique. Bouteille et réfrigérer — le froid arrête la fermentation. La sauce s'améliore après encore 1 à 2 semaines au réfrigérateur car les saveurs continuent à se fondre.",
      "visualCue": {
        "primaryTarget": "Une sauce rouge-orange douce et vibrante avec une consistance versable. La couleur doit être vive — et non le rouge foncé de la sauce chaude cuite — reflétant le caractère fermenté vivant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore très épaisse avec de grandes pièces non entièrement mélangées. Il ressemble plus à une salsa qu'à une sauce chaude.",
            "action": "Mélanger plus longtemps, ajouter la saumure pour aider les lames à traiter les pièces. Pour une sauce finale lisse, mélanger 2 minutes à grande vitesse."
          },
          {
            "state": "Perfect",
            "description": "Doux, versable, sauce aux couleurs vives. Lorsqu'elle est étirée, elle coule dans un ruisseau continu, même. La saveur est simultanément aigre, salée, épicée et complexe.",
            "action": "Bouteille et réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été mélangée si longtemps qu'elle est très fine et complètement lisse, plus comme de l'eau de chile que de la sauce. Une partie de l'arôme a été perdue par la chaleur générée par le mélange étendu.",
            "action": "Ajouter une petite quantité de gomme xanthane (pince minuscule) pour restaurer la viscosité sans changer de saveur."
          }
        ]
      },
      "feelCue": "Une cuillerée de la sauce finie sur votre langue devrait donner une séquence claire: d'abord salée, puis aigre, puis la chaleur de construction des chiles, puis une longue finale complexe, légèrement funky que pas de sauce chaude au vinaigre seul peut produire."
    }
  ]
};
