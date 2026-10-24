export default {
  "repoId": "master_japanese_miso_tare_001",
  "parentRepoId": null,
  "slug": "miso-tare",
  "author": "ForkRecipe Kitchen",
  "title": "Miso Tare",
  "description": "Une pâte assaisonnée concentrée de miso blanc et rouge, de mirin et de saké mijoté ensemble et enrichi de sésame, utilisée pour assaisonner le bouillon de ramen, mariner les protéines ou finir les plats de légumes.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "condiments",
  "tags": [
    "tare",
    "Japonais",
    "miso",
    "assaisonnement",
    "umami",
    "Ramen"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Shiro miso (miso blanc, doux et doux)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "tout miso rouge pour une tare plus forte"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Aka miso (rouge miso, robuste et salé)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "riz brun miso"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Mirin (Hon-mirin)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "sherry sec + 1 c. à thé sucre"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Solvent",
      "name": "Mâcher",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "vin blanc sec"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Graines de sésame blanc grillé",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Gousse d'ail (facultatif, fine hachée)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Gingembre frais (grainé fin, facultatif)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Brûler l'alcool",
      "inputs": [
        "ing_03",
        "ing_04"
      ],
      "outputState": "reduced_sake_mirin",
      "instructions": "Mélanger le mirin et le saké dans une petite casserole. Faire mijoter à feu moyen et laisser mijoter 3-4 minutes pour faire cuire l'alcool cru. Si vous faites cuire au-dessus du gaz, vous pouvez mettre soigneusement la poêle en feu. La flamme sera brève et bleue. Si l'inflammation vous rend nerveux, laissez mijoter jusqu'à ce que la netteté de l'alcool disparaisse de la vapeur. Le liquide va réduire légèrement et l'arôme doit sentir doux et doucement caramélisé, pas boueux et cru. Cette étape n'est pas négociable — l'alcool brut donne à la tare un bord dur qui n'a pas sa place.",
      "visualCue": {
        "primaryTarget": "Le liquide mijotant a diminué d'environ 20 %, il a l'air brillant et doré, et ne libère plus de fumées d'alcool vives lorsque vous agitez votre main dessus — seulement une vapeur douce et salée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Encore une odeur forte de saké brut — tenez votre main au-dessus de la poêle et les fumées piquent légèrement les yeux. L'alcool n'a pas encore cuit.",
            "action": "Continuer à mijoter encore 1-2 minutes. La transition du cru au cuit est incomparable dans l'arôme."
          },
          {
            "state": "Perfect",
            "description": "Doucement fondu, légèrement réduit, or clair. Pas de fumées d'alcool. Goûte doux avec une chaleur propre et douce, pas bouillante.",
            "action": "Retirer du feu et laisser refroidir 2 minutes avant de fouetter dans le miso."
          },
          {
            "state": "Overdone",
            "description": "Réduit trop loin — les sucres commencent à caraméliser dans un sirop épais avec une couleur plus foncée et un bord légèrement amer.",
            "action": "Ajouter une petite éclaboussure d'eau pour ramener le volume et procéder."
          }
        ]
      },
      "feelCue": "Testez une goutte à l'intérieur de votre poignet — il devrait se sentir chaud et doux, et l'alcool fourmille que les feuilles de saké cru devraient être complètement absents. Si elle pique légèrement, elle a besoin de plus de temps sur la chaleur."
    },
    {
      "nodeId": "step_2",
      "action": "Whisk in miso",
      "inputs": [
        "reduced_sake_mirin",
        "ing_01",
        "ing_02",
        "ing_07",
        "ing_08"
      ],
      "outputState": "miso_base",
      "instructions": "Ajouter le miso blanc et le miso rouge au mélange de saké-mirin légèrement refroidi. fouetter vigoureusement jusqu'à ce qu'il soit complètement lisse sans grumeaux — le miso peut être têtu et se cacher des touffes si vous précipitez cette étape. Ajouter l'ail et le gingembre en utilisant et fouetter. Retourner au plus bas feu possible et remuer continuellement pendant 5-6 minutes — ne laissez pas bouillir le mélange. L'objectif est une cuisson douce et brève qui épouse le miso avec le mirin et le saké, assouplit le bord brut du miso et crée une pâte unifiée. Regardez attentivement : les brumes miso à très basses températures et ne devraient jamais buller.",
      "visualCue": {
        "primaryTarget": "Une pâte ambrée lisse, brillante et foncée — le miso blanc et rouge s'est fusionné en une seule couleur entre le miel et le caramel. Pas de grumeaux, pas de stries beiges de miso non incorporé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est striée — des zones claires et sombres visibles où le miso blanc et rouge n'ont pas été complètement combinés. Goûte légèrement discordant, le miso rouge arrivant comme une note amère séparée.",
            "action": "fouetter plus vigoureusement, ou presser n'importe quel morceau à travers un tamis fin. Le mélange doit être complet."
          },
          {
            "state": "Perfect",
            "description": "Uniforme, brillant, lisse. L'arôme est doux, profondément salé et fermenté dans le meilleur sens, comme une base de soupe miso très raffinée et concentrée. La couleur est même ambre-tan partout.",
            "action": "Retirer du feu et remuer dans l'huile de sésame et les graines de sésame."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a bouilli — il y a des bulles à la surface et les bords commencent à coller. Le miso surchauffé perd ses enzymes bénéfiques et développe un bord dur et métallique.",
            "action": "Retirer immédiatement du feu, refroidir pendant 2 minutes et poursuivre. Ne le jetez pas — l'impact sur la saveur d'un bref ébullition est mineur."
          }
        ]
      },
      "feelCue": "La pâte de miso fouettée doit se sentir dense et lisse enrobant le fouet — si vous pouvez vous sentir grainé lorsque vous appuyez sur le fouet contre le bol, il ya encore des morceaux non dissous et plus de fouet est nécessaire."
    },
    {
      "nodeId": "step_3",
      "action": "Finition et pot",
      "inputs": [
        "miso_base",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_miso_tare",
      "instructions": "Retirer du feu et mélanger l'huile de sésame grillée et les graines de sésame. L'huile de sésame doit entrer dans le feu — elle est intensément aromatique et son parfum se dissipe rapidement lorsqu'il est cuit. Incorporer complètement. Laisser refroidir complètement avant de passer dans un pot scellé. La tare restera réfrigérée jusqu'à un mois. À utiliser : remuer une cuillère à soupe chargée dans un bol de bouillon ramen chaud, fouetter dans une marinade avec de la sauce soja et de l'huile, ou utiliser comme glaçure pour rôtir les légumes-racines et le tofu.",
      "visualCue": {
        "primaryTarget": "Une pâte riche, sombre et brillante avec des graines de sésame visibles. L'huile de sésame donne à la surface un éclat subtil. Spooned dans un pot, il tient sa forme mais est assez doux pour scoop facilement avec une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Huile de sésame non encore brassée — la pâte manque de lifting aromatique final et la richesse de sésame torréfié qui définit miso tare.",
            "action": "Incorporer soigneusement l'huile de sésame et les graines du feu."
          },
          {
            "state": "Perfect",
            "description": "Sensé, parfumé, brillant. L'arôme de sésame est immédiatement présent, grillé et riche. Sur une cuillère, il tient un monticule lent et lourd. Une cuillère à soupe brassée en bouillon de dashi chaud le transforme complètement.",
            "action": "Refroidir et transférer dans un pot scellé. Réfrigérer jusqu'à 1 mois."
          },
          {
            "state": "Overdone",
            "description": "La tare a été stockée trop longtemps ou mal scellée — la surface a oxydé plus foncé et le goût est vif et astringent plutôt que moelleux et doux.",
            "action": "Jeter et faire un lot frais — miso tare passé sa prime rendra tout plat qu'il touche le goût dur."
          }
        ]
      },
      "feelCue": "Une cuillère à café de tare finie pressée sur le toit de la bouche devrait être intensément salée — presque écrasante comme une pâte pure — avec l'huile de sésame fournissant une chaleur ronde et adoucissante. Cette concentration est le point: vous n'utiliserez qu'une petite quantité pour assaisonner un bol entier de bouillon."
    }
  ]
};
