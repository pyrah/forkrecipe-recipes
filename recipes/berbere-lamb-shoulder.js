export default {
  "repoId": "master_ethiopian_berbere_lamb_shoulder_001",
  "parentRepoId": null,
  "slug": "berbere-lamb-shoulder",
  "author": "ForkRecipe Kitchen",
  "title": "Épaule d'agneau braisée Berbere",
  "description": "Epaule d'agneau en os peinte dans le mélange d'épices de berbère, profondément aromatique, cousue dans le niter kibbeh jusqu'à ce que ruddy-dark, puis braisée pendant des heures avec des oignons transpirés jusqu'à ce que la viande tombe de l'os en morceaux tendres et saturés d'épices.",
  "cuisine": "Éthiopien",
  "culture": "Habesha",
  "category": "proteins",
  "tags": [
    "agneau",
    "ethiopienne",
    "berbère",
    "braise",
    "épicé",
    "habésha",
    "niter-kibbeh"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "5 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 1,
    "bitter": 1,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Épaule d'agneau désossée, coupée en gros morceaux",
      "ratioValue": 1400,
      "defaultUnit": "g",
      "substitutions": [
        "cou d'agneau osseux",
        "épaule de chèvre"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Mélange d'épices berbères",
      "ratioValue": 45,
      "defaultUnit": "g",
      "substitutions": [
        "berbère maison: chile, fenugrec, coriandre, cardamome, toutspice, gingembre, girofle, cannelle"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Niter kibbeh (beurre épicé éthiopien) ou ghee",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "beurre clarifié + 1 c. à thé par curcuma et garam masala"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignons blancs, coupés en dés",
      "ratioValue": 350,
      "defaultUnit": "g",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 5,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Tomates en dés en conserve",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "3 grandes tomates mûres en dés"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Viande bovine",
      "ratioValue": 400,
      "defaultUnit": "ml",
      "substitutions": [
        "eau avec 1 c. à soupe de pâte de tomate"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Solvent",
      "name": "Tej (vin de miel éthiopien) ou vin blanc sec",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": [
        "vin rouge sec"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Assaisonner",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_10"
      ],
      "outputState": "seasoned_lamb",
      "instructions": "Patientez les morceaux d'agneau complètement secs avec des serviettes en papier — l'humidité est l'ennemi d'une bonne couture. Dans un petit bol, mélanger 2 cuillères à soupe du bergère avec le sel et frotter ce mélange soigneusement sur chaque surface de l'agneau. Travaillez-le dans toutes les coutures et poches naturelles. Laisser reposer à température ambiante pendant 30 minutes avant la mise en mer — un morceau de viande froid refroidit la poêle et empêche le brunissement correct de Maillard.",
      "visualCue": {
        "primaryTarget": "Morceaux d'agneau enrobés d'une croûte rouge-orange profonde. Le mélange d'épices s'est légèrement humidifié à partir de la surface naturelle de la viande et commence à adhérer plutôt qu'à la poussière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Berbere est à peine dépoussiéré à la surface. Grandes zones d'agneau gris visibles.",
            "action": "Ajouter plus de mélange berbere-sel et presser fermement dans chaque surface."
          },
          {
            "state": "Perfect",
            "description": "Chaque surface est uniformément recouverte d'une couche orange rouge vif. L'épice s'accroche plutôt que s'éteint lorsque la pièce est levée.",
            "action": "Laisser reposer à température ambiante pendant 30 minutes avant la mise en mer."
          },
          {
            "state": "Overdone",
            "description": "L'agneau est assis à la température de la pièce depuis plus d'une heure. La surface est légèrement collante.",
            "action": "Passez immédiatement à la mer, c'est bien."
          }
        ]
      },
      "feelCue": "L'agneau à croûtes d'épices devrait se sentir sec et gritté sous votre paume — toute humidité à ce stade va vapeur plutôt que de semer dans la poêle."
    },
    {
      "nodeId": "step_2",
      "action": "Saisir",
      "inputs": [
        "seasoned_lamb",
        "ing_03"
      ],
      "outputState": "seared_lamb",
      "instructions": "Chauffer le niter kibbeh dans une grande casserole lourde (four hollandais) à feu vif jusqu'à ce qu'il mijote et commence à fumer légèrement. Travailler en lots — ne jamais fouler le pot — saisir les morceaux d'agneau pendant 3-4 minutes de chaque côté jusqu'à ce qu'ils soient profondément dorés, presque acajous. Les épices berbères s'assombriront et fleuriront dans le beurre épicé, libérant un arôme enivrant et complexe. Appuyez fermement sur chaque pièce contre le fond du pot avec une spatule. Entre les lots, ne grattez pas le fond — il se dissoudra dans le braise plus tard.",
      "visualCue": {
        "primaryTarget": "Les surfaces d'agneau sont rouge acajou profond avec une croûte clairement caramélisée. Le fond du pot a un goût sombre et salé de berbère et de jus de viande.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'agneau est gris et à la vapeur plutôt que bruni. Je suis coincé dans la marmite. La surface est humide.",
            "action": "Le pot était trop frais ou surpeuplé. Retirez le lot, laissez le pot revenir à feu vif, et essayez à nouveau avec moins de pièces."
          },
          {
            "state": "Perfect",
            "description": "Croûte acajou profonde avec un peu d'ombrage plus foncé (pas noir) où se concentraient les épices berbères. Rejets propres de la casserole après avoir pressé. Le Fonds est ambre foncé.",
            "action": "Réserver les morceaux de mer et continuer avec les lots restants."
          },
          {
            "state": "Overdone",
            "description": "Les épices berbères ont brûlé noir et le fond devient acride. Une odeur amère.",
            "action": "Retirer la casserole du feu. Déglacer avec un jet de vin pour arrêter la combustion, puis réduire la chaleur avant de continuer."
          }
        ]
      },
      "feelCue": "Lorsque la croûte est prête, la pièce d'agneau se libère proprement du pot avec un lifting ferme — si elle colle, elle n'est pas prête; la croûte se forme encore."
    },
    {
      "nodeId": "step_3",
      "action": "Braiser",
      "inputs": [
        "seared_lamb",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_02"
      ],
      "outputState": "braised_lamb",
      "instructions": "Dans la même casserole, à feu moyen, ajouter l'oignon coupé en dés et cuire dans le reste du kibbéh de nitre et adoucir pendant 20-25 minutes jusqu'à ce qu'il soit bien doré — presque caramélisé. Cette longue et lente cuisson à l'oignon est fondamentale pour la cuisine éthiopienne. Ajouter l'ail et le gingembre, cuire 2 minutes. Ajouter le reste du berbère et remuer 1 minute pour faire frire la graisse. Verser dans le tej et gratter chaque peu d'affection du fond du pot — c'est une saveur pure. Ajouter les tomates et le bouillon, remuer pour les combiner, puis renicher les morceaux d'agneau. Le liquide devrait atteindre la moitié de la viande. Porter à la mijoter, couvrir soigneusement et brasser à 150°C dans le four ou sur la flamme de la plaque de cuisson la plus basse pendant 3-4 heures.",
      "visualCue": {
        "primaryTarget": "L'agneau est presque submergé dans un liquide de culture rouge brique de couleur profonde. Le couvercle est allumé et le pot tremble légèrement avec une mijotée douce — pas un ébullition.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 2 heures, la viande résiste encore à une fourchette insérée au point le plus épais. Le collagène n'a pas encore été décomposé — pas encore de gélatine dans le liquide de cuisson.",
            "action": "Continuez à faire des larmes. Certaines coupes d'épaule prennent 4 heures, surtout en altitude ou avec de l'agneau moins gras. Ne vous pressez pas."
          },
          {
            "state": "Perfect",
            "description": "Après 3-4 heures, la viande s'éloigne de l'os avec une légère pression du doigt. Une fourchette glisse et se tord facilement. Le liquide de culture s'est réduit et épaissi, et la graisse s'est séparée de la surface.",
            "action": "Retirer le couvercle et procéder à la réduction de la sauce."
          },
          {
            "state": "Overdone",
            "description": "La viande est tombée complètement de l'os et commence à se désintégrer dans la sauce. Le liquide de braisage est très épais et sombre.",
            "action": "Continuez immédiatement à servir. L'agneau sera extraordinairement tendre, plus d'une texture tirée. Régler l'assaisonnement et servir."
          }
        ]
      },
      "feelCue": "Testez la finesse en appuyant deux fourchettes sur la plus grande pièce — des pièces parfaites d'agneau berbère-brasé doucement le long de ses fibres musculaires avec très peu de force, comme tirer au pain chaud."
    },
    {
      "nodeId": "step_4",
      "action": "Faire réduire",
      "inputs": [
        "braised_lamb"
      ],
      "outputState": "finished_berbere_lamb",
      "instructions": "Retirer les morceaux d'agneau dans une assiette chaude. Augmenter la chaleur sous le liquide de cuisson et faire bouillir à découvert pendant 10-15 minutes, en remuant occasionnellement, jusqu'à ce que la sauce diminue à une consistance épaisse et brillante qui enrobe fortement une cuillère. Écraser tout excès de graisse de la surface si désiré — mais une certaine graisse est traditionnelle et porte la saveur du berbère. Retournez l'agneau dans le pot et bastez avec la sauce réduite. Goûtez et ajustez le sel. Servir au-dessus de l'injera (pain plat Ethiopien) ou du riz, avec une sauce supplémentaire cuillerée généreusement.",
      "visualCue": {
        "primaryTarget": "Une sauce berbère épaisse et de couleur profonde qui tombe d'une cuillère dans un rideau lent et lourd. Il devrait être à peine versable plutôt que soupe-fin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore fine et aqueuse. Il tombe d'une cuillère dans un ruisseau rapide. Goûte à l'eau et diffuse.",
            "action": "Continuer à bouillir à découvert. Veillez bien — il réduira rapidement une fois qu'il aura atteint la concentration."
          },
          {
            "state": "Perfect",
            "description": "La sauce est épaisse, brillante et profondément aromatisée. Des chutes d'une cuillère dans des plis lents et lourds. Couleur rouge-brun très profond. L'arôme de berbère est riche et omniprésent.",
            "action": "Retournez l'agneau et servez immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite à une pâte et est collée et brûlée aux bords du pot. Très salé.",
            "action": "Ajouter 50-100 ml d'eau ou de bouillon, remuer vigoureusement et retirer du feu. Affiner et ajuster l'assaisonnement."
          }
        ]
      },
      "feelCue": "Plongez un doigt dans la sauce tiède — il devrait enrober votre peau d'un film épais et rouge-orange qui ne coule pas immédiatement, s'accrochant comme un glaçure."
    }
  ]
};
