export default {
  "repoId": "master_mexican_tamales_de_pollo_001",
  "parentRepoId": null,
  "slug": "tamales-de-pollo",
  "author": "ForkRecipe Kitchen",
  "title": "Tamales de Pollo con Salsa Verde",
  "description": "Le museau de maïs est l'enveloppe la plus ancienne du cuisinier, étalée avec de la pâte de masa fouettée de saindoux jusqu'à ce qu'il flotte sur un bol d'eau, remplie de poulet tomatillo braisé, puis pliée et vapeur jusqu'à ce que la masa tire proprement du museau comme du papier d'un cadeau, révélant un emballage doux et parfumé qui sent le maïs et la vapeur et fête.",
  "cuisine": "Mexicain",
  "culture": "Mexicain central",
  "category": "grains",
  "tags": [
    "Mexique",
    "Tamale",
    "Masa",
    "maïs",
    "poulet",
    "salsa-verde",
    "célébration",
    "Cuisson lente"
  ],
  "difficulty": 4,
  "activeTime": "2 hr",
  "totalTime": "3 hr 30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Masa harina (farine de maïs, marque Maseca)",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "masa frais (supprimer le mélange avec l'étape du bouillon)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Lard (température ambiante, doux)",
      "ratioValue": 160,
      "defaultUnit": "g",
      "substitutions": [
        "shortening végétal (vegan)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "bouillon de poulet chaud (pour masa)",
      "ratioValue": 480,
      "defaultUnit": "g",
      "substitutions": [
        "bouillon de légumes"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "Poudre de cuisson (pour texture masa légère)",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 12,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "cuisses de poulet (en os, avec peau)",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "poitrine de poulet",
        "porc sorti"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Tomatillos (coiffés, coupés en deux)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "tomatillos en conserve"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Heat",
      "name": "Serrano ou piments jalapeño (2–3, grossièrement hachés)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Chipotles en conserve en adobo (arôme plus fumé)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Allium",
      "name": "Oignon blanc (la moitié pour le braise, la moitié pour la salsa verde)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Allium",
      "name": "Girofles à l'ail (4 girofles)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Binder",
      "name": "Housses de maïs séché (30–35, trempées dans de l'eau chaude 1 heure)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "Feuilles de banane (humides, différents profils de saveur)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Braiser",
      "inputs": [
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "salsa_verde_chicken",
      "instructions": "Mélanger les cuisses de poulet, les tomatillos à moitié, les chiles hachés, la moitié de l'oignon (en tranches approximatives) et l'ail dans un pot avec suffisamment d'eau pour couvrir (environ 400g). Porter à ébullition et laisser mijoter 35 à 40 minutes jusqu'à ce que le poulet soit complètement cuit et tire de l'os. Retirer les morceaux de poulet et laisser refroidir assez pour manipuler. Écraser la viande, jeter les os et la peau. Retournez le liquide de cuisson et les légumes cuits dans un mélangeur et mélangez jusqu'à ce qu'ils soient lisses. Retourner le poulet déchiqueté dans la sauce et assaisonner avec assertion de sel. Le remplissage doit être assaisonné avec hardiesse — il se calmera à l'intérieur de la masa.",
      "visualCue": {
        "primaryTarget": "Poulet éparpillé enrobé d'une salsa de tomatillo vert moyen qui s'accroche à toutes les fibres sans mise en commun au fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poulet a des taches résistantes à l'os et les tomatillos ne sont pas complètement décomposés.",
            "action": "Laisser mijoter 10 minutes de plus — le remplissage doit être tendre à déchiqueter proprement."
          },
          {
            "state": "Perfect",
            "description": "Le poulet tombe de l'os dans de longues fibres juteuses. Salsa verde est vert vif et parfumé avec du tomatillo carbonisé et du chile.",
            "action": "Mouiller et mélanger avec de la sauce. Laisser refroidir à la température ambiante avant de remplir les tamales."
          },
          {
            "state": "Overdone",
            "description": "Le poulet s'est cassé en très petits fragments et la sauce est profondément réduite et concentrée.",
            "action": "Ajouter une touche d'eau pour se détendre et goûter au sel. Le poulet très fin déchiqueté est encore excellent comme remplissage."
          }
        ]
      },
      "feelCue": "Le remplissage doit se sentir humide et collant — pas assez humide pour rendre le masa soggy, mais pas si sec qu'il s'effondre quand vous mordez dans le tamale fini."
    },
    {
      "nodeId": "step_2",
      "action": "Crémer",
      "inputs": [
        "ing_02",
        "ing_01",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "masa_dough",
      "instructions": "Battre le saindoux doux dans un mélangeur de stand avec la pagaie haut pendant 3-4 minutes jusqu'à ce qu'il soit très pâle, moelleux, et a environ doublé en volume. Avec le mélangeur sur support, ajouter la masa harina et la poudre de cuisson alternant avec le bouillon de poulet chaud en 4 ajouts, grattant entre chaque ajout. Battez le sel à la fin. La masa finie doit être légère, extensible et très lisse, comme un hummus épais ou une crème fouettée légèrement raide. Tester en faisant tomber une petite boule dans un verre d'eau froide : si elle flotte, le saindoux est suffisamment aéré et la masa sera légère. Si ça coule, battez 2 minutes de plus.",
      "visualCue": {
        "primaryTarget": "Une masa pâle, de couleur crème d'ivoire qui tient un pic doux quand la pagaie est levée et retombe lentement — beaucoup plus léger dans la couleur et la texture que la masa harina sèche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Masa est dense, lourde et de couleur grise. L'essai du flotteur échoue — la boule coule immédiatement.",
            "action": "Battre le saindoux plus longtemps avant d'ajouter masa — l'aération se produit au stade saindoux, pas après."
          },
          {
            "state": "Perfect",
            "description": "Pale, oreiller, extensible. Le test de flotteur passe. Goûts de maïs et de bouillon de poulet, bien salés.",
            "action": "Couvrir avec une serviette humide et commencer à assembler les tamales."
          },
          {
            "state": "Overdone",
            "description": "Masa est très humide et ne tient pas sa forme sur le museau.",
            "action": "Battre dans un autre 30g de masa harina pour le raffermir légèrement."
          }
        ]
      },
      "feelCue": "La masa devrait se sentir comme du beurre fouetté frais — elle devrait s'étendre avec une spatule sans déchirer, tenir sa forme dans une fine couche, et se sentir nettement plus légère que la masa harina crue."
    },
    {
      "nodeId": "step_3",
      "action": "Assembler",
      "inputs": [
        "masa_dough",
        "salsa_verde_chicken",
        "ing_11"
      ],
      "outputState": "assembled_tamales",
      "instructions": "Pose une coque de maïs adoucie avec l'extrémité plus large face à toi. Étaler environ 60g de masa dans un mince rectangle (15x10 cm) sur les deux tiers supérieurs du museau, laissant nu le tiers inférieur et une bordure de 2cm sur les côtés. Placez 2 cuillerées à soupe de remplir une ligne en bas du centre de la masa. Pliez un côté de la coque sur le remplissage de sorte que la masa se rencontre et enferme le remplissage, puis pliez l'autre côté sur, et pliez le fond nu de la coque jusqu'à sceller. Tenez les tamales debout dans un panier à vapeur, ouvrez-vous. Au besoin, utilisez des bandes de défense déchirées supplémentaires pour les attacher.",
      "visualCue": {
        "primaryTarget": "Un emballage bien plié avec la masa enveloppant complètement le remplissage — pas de remplissage visible à la couture, la coque enveloppée assez étroitement pour tenir sa forme quand debout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Masa est déchirée ou inégale, le remplissage fuit des côtés.",
            "action": "Larmes de patch avec un petit morceau de masa supplémentaire pressé doucement sur l'écart."
          },
          {
            "state": "Perfect",
            "description": "Propre, ferme. La masa est une couche uniforme, le remplissage est centré. Le museau replié tient sans déroulement.",
            "action": "Tenez-vous debout dans le vapeur et continuez à monter."
          },
          {
            "state": "Overdone",
            "description": "Le tamale est surrempli et la coque ne peut pas se plier pour se rencontrer.",
            "action": "Enlever un peu de remplissage et replier. Trop de remplissage empêche la masa de sceller."
          }
        ]
      },
      "feelCue": "Un tamale bien assemblé devrait se sentir compact et même si vous le pressez doucement entre vos paumes — pas de taches molles indiquant des espaces, pas de bosses durs indiquant un surremplissage."
    },
    {
      "nodeId": "step_4",
      "action": "vapeur",
      "inputs": [
        "assembled_tamales"
      ],
      "outputState": "tamales_de_pollo",
      "instructions": "Placez les tamales assemblées à la verticale et emballées étroitement dans une casserole à vapeur — elles se soutiennent mutuellement. Ajouter de l'eau juste sous le panier de vapeur. Porter à ébullition à feu vif, puis réduire pour maintenir une vapeur vigoureuse. Couvrir soigneusement et faire chauffer 75 à 90 minutes, vérifier le niveau de l'eau toutes les 30 minutes et ajouter de l'eau bouillante au besoin. Les tamales sont faites quand la masa tire proprement et complètement loin du museau de maïs sans coller. Laisser reposer 10 minutes avant de servir — ils ferment et se mettent au repos.",
      "visualCue": {
        "primaryTarget": "La masa à l'intérieur du museau semble ferme et sertie, non brillante ou humide, et pele proprement de la surface du museau ne laissant aucun résidu.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La masa se colle à la coque et aux larmes quand vous essayez de l'éplucher. Il semble humide et translucide.",
            "action": "Reconditionner et retourner au vapeur pendant 15 à 20 minutes de plus. Underdone tamales sont l'erreur la plus courante."
          },
          {
            "state": "Perfect",
            "description": "Le museau s'éloigne de façon propre et facile. La surface de la masa est ferme, légèrement brillante, et s'éloigne en une seule feuille propre. Le remplissage intérieur est chaud.",
            "action": "Reposez-vous 10 minutes. Servir dans le museau et laisser les invités se peler."
          },
          {
            "state": "Overdone",
            "description": "La masa est devenue très ferme et légèrement sèche, s'éloignant du museau en morceaux.",
            "action": "Servir avec de la salsa verde ou du crème pour réhydrater. Toujours parfaitement comestible."
          }
        ]
      },
      "feelCue": "Lorsque vous pressez l'extérieur d'un tamale fini à travers le museau, il doit se sentir ferme, mais pas dur — comme presser un bâton ferme de beurre — sans taches humides douces."
    }
  ]
};
