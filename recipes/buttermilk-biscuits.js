export default {
  "repoId": "master_american_buttermilk_biscuits_001",
  "parentRepoId": null,
  "slug": "buttermilk-biscuits",
  "author": "ForkRecipe Kitchen",
  "title": "Biscuits de lait de beurre",
  "description": "De grands biscuits à couche nuageuse, avec une croûte dorée éclatante et un intérieur doux et tannant, chaque poulie révèle un réseau de flocons délicats et laqués au beurre qu'aucun biscuit acheté en magasin n'a jamais atteint.",
  "cuisine": "Américain",
  "culture": "Sud",
  "category": "breads",
  "tags": [
    "sud",
    "biscuits",
    "beurre",
    "Flacons",
    "pains"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "40 min",
  "ratioSystem": "bakers_percentage",
  "stars": 1923,
  "forks": 201,
  "contributors": 22,
  "license": "CC-BY-SA",
  "createdAt": "2024-11-12",
  "updatedAt": "2025-09-05",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine tout usage (plus plus pour la poussière)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "Farine de lys blanc (protéines basses du Sud)",
        "farine de gâteau (extra tendre)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Leavener",
      "name": "Poudre de cuisson (sans aluminium)",
      "ratioValue": 3.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "Soda au four",
      "ratioValue": 0.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé, très froid, coupé en cubes de 1 cm",
      "ratioValue": 30,
      "defaultUnit": "%",
      "substitutions": [
        "saindoux (plus savoureux)",
        "raccourcissement (plus d'ascenseur)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Beurre plein gras, glacé",
      "ratioValue": 65,
      "defaultUnit": "%",
      "substitutions": [
        "lait entier + 1 c. à soupe de vinaigre blanc (rest 5 min)",
        "Kéfir"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélanger les ingrédients secs et les couper en beurre",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "shaggy_dry_mix",
      "instructions": "Dans un grand bol, fouetter la farine, la poudre à pâte, le bicarbonate de soude et le sel. Ajouter les cubes de beurre froid. À l'aide du bout des doigts, brisez rapidement le beurre dans la farine — frottez chaque cube entre les pouces et les doigts, en travaillant rapidement afin que la chaleur corporelle n'adoucisse pas le beurre. Arrêtez quand les plus grandes pièces sont la taille de petits pois et les plus petits sont sableux. Des morceaux de beurre froids et intacts créent des couches.",
      "visualCue": {
        "primaryTarget": "Le mélange de farine ressemble à du sable jaune pâle et rugueux avec des morceaux de beurre visibles allant de la taille des pois à des miettes sablonneuses.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les morceaux de beurre sont encore grands — des morceaux de pouce. Le mélange ne ressemble pas du tout au sable, plutôt à de la farine avec des morceaux.",
            "action": "Continuez à travailler le beurre. Chaque cube doit être frotté plat puis cassé — mais ne pas surmener. Travaillez une poignée à la fois."
          },
          {
            "state": "Perfect",
            "description": "Une texture sableuse avec des morceaux de beurre plus petits et de pois. La farine semble légèrement jaune de la graisse de beurre. Il ne reste pas de gros morceaux.",
            "action": "Déplacez - vous rapidement vers le babeurre: la chaleur est maintenant l'ennemi."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est uniformément sablonneux sans morceaux de beurre visible — le beurre a été complètement travaillé et enrobe maintenant la farine. Le mélange semble gras et jaune.",
            "action": "Allez-y, mais les biscuits seront plus gâtés et friables qu'éclabousseux. Réfrigérer le mélange pendant 15 minutes avant d'ajouter du babeurre pour raffermir le beurre."
          }
        ]
      },
      "feelCue": "Attrapez une poignée de mélange et pressez - le brièvement lorsqu'il est relâché, puis s'effondrez dans des touffes. Si elle se tient trop bien et se sent cireuse, le beurre est trop chaud."
    },
    {
      "nodeId": "step_2",
      "action": "Ajouter le babeurre et former la pâte",
      "inputs": [
        "shaggy_dry_mix",
        "ing_06"
      ],
      "outputState": "shaggy_biscuit_dough",
      "instructions": "Verser le beurre froid dans le mélange farine-beurre tout à la fois. À l'aide d'une fourchette ou de vos mains, remuez et pliez jusqu'à ce que la pâte se réunisse — elle aura l'air agitée et rugueuse, avec de la farine sèche encore visible. Ne knead pas. Le surmenage développe du gluten et crée des biscuits plats et durs. Déposer la masse shaggy sur une surface légèrement farinée.",
      "visualCue": {
        "primaryTarget": "Une masse rude et chaotique qui tient à peine ensemble. Des patchs de farine sèche sont encore visibles. La pâte est grumelée et inégale — c'est exactement exact.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Grandes touffes sèches qui refusent de cocher. La pâte tombe en morceaux quand vous essayez de la presser ensemble. Le lait de beurre n'était pas uniformément distribué.",
            "action": "Arrosez une cuillère à soupe plus de babeurre et pliez encore 2–3 fois. Ne remuez pas."
          },
          {
            "state": "Perfect",
            "description": "Pâte dure, louche, légèrement collante. Ce n'est pas cohésif, mais il tient bon lorsqu'il est pressé. Plaques de farine sèche visibles. La toux semble bosseuse et inégale.",
            "action": "Déposer sur une surface farinée et commencer le processus de pliage."
          },
          {
            "state": "Overdone",
            "description": "La toux est lisse et élastique — elle a été mélangée trop longtemps. Le gluten est développé. La surface ressemble à de la pâte à pain lisse, pas à une masse de biscuits shaggy.",
            "action": "Refroidir la pâte au réfrigérateur pendant 20 minutes avant de rouler. Le gluten développé se détendrea et les biscuits seront moins durs."
          }
        ]
      },
      "feelCue": "Appuyez sur la pâte shaggy avec votre paume — il devrait à peine tenir ensemble, comme une boule de neige lâche. Il ne doit pas se sentir lisse ou ressortre comme de la pâte à pain."
    },
    {
      "nodeId": "step_3",
      "action": "Pliez et stratifiés",
      "inputs": [
        "shaggy_biscuit_dough"
      ],
      "outputState": "laminated_dough",
      "instructions": "Placer la pâte shaggy dans un rectangle rugueux d'environ 2 cm d'épaisseur. Pliez-le en troisième comme une lettre — troisième gauche sur le centre, puis troisième droite sur cela. Rotation de 90 degrés, patte à nouveau à 2cm, et répéter le pli. Faites cela 4-5 fois au total. Ces plis créent les couches distinctes. Après le pli final, tapez doucement à environ 2,5cm d'épaisseur.",
      "visualCue": {
        "primaryTarget": "Après 4-5 plis, la pâte est lisse à l'extérieur mais vous pouvez voir des couches distinctes lorsque vous regardez le bord coupé. Plus de patchs de farine sèche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Seulement 1–2 plis faits. La pâte a toujours l'air rugueuse et louche, avec des taches sèches. Les couches ne se sont pas formées.",
            "action": "Continuez à plier. Quatre plis minimum créent au moins 27 couches distinctes — chaque plis triple les couches."
          },
          {
            "state": "Perfect",
            "description": "Après 4-5 plis, la pâte est cohésive à l'extérieur avec une légère douceur. Le bord coupé révèle des stries en couches. La toux est froide et ferme.",
            "action": "Couper les biscuits immédiatement sans se reposer."
          },
          {
            "state": "Overdone",
            "description": "La toux a été pliée 8+ fois et le beurre a frotté à plat — vous pouvez à peine voir n'importe quelle couche dans le bord de coupe. La toux est dense et lisse comme une pâte feuilletée surmenée.",
            "action": "Laisser refroidir 15 minutes pour fermer le beurre. Les plis supplémentaires feront des biscuits plus denses — compenser par la cuisson à chaleur plus élevée (250°C) pour moins de temps."
          }
        ]
      },
      "feelCue": "Après le pli final, appuyez sur la pâte avec deux doigts et regardez sur le côté — vous devriez voir de faibles stries horizontales, comme des couches de sédiments dans une falaise. C'est du beurre et de la pâte alternant."
    },
    {
      "nodeId": "step_4",
      "action": "Couper et cuire",
      "inputs": [
        "laminated_dough"
      ],
      "outputState": "finished_biscuits",
      "instructions": "Préchauffer le four à 220°C. À l'aide d'une coupe ronde et tranchante (ne jamais tourner — presser tout droit et tirer tout droit vers le haut), couper les biscuits. Placez-les se touchant l'un l'autre sur une plaque parcheminée, ce qui les force à monter vers le haut plutôt qu'à s'étendre vers l'extérieur. Badigeonner de beurre ou de beurre fondu. Cuire de 12 à 14 minutes jusqu'à ce qu'il soit bien doré.",
      "visualCue": {
        "primaryTarget": "Les biscuits ont augmenté de façon spectaculaire, s'éloignant de leurs voisins. Les sommets sont profondément dorés et les côtés sont pâles. Couches visibles sur les côtés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les biscuits sont dorés pâles ou encore blonds sur le dessus. Ils se sont peut-être levés, mais les sommets ont l'air collants. L'intérieur est encore dense et gommé.",
            "action": "Retourner au four 2–3 minutes de plus. Les matières de couleur supérieure — doré-brun signifie que la croûte a mis et l'intérieur est fait."
          },
          {
            "state": "Perfect",
            "description": "Très dorés, avec une croûte faible. Les Biscuits sont élevés et présentent des couches distinctes sur leurs côtés. Ils enlèvent la poêle proprement. L'intérieur est moelleux et stratifié.",
            "action": "Retirer et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les sommets sont brun foncé. Les biscuits ont une croûte dure qui ne donne pas à la pression douce. Les fonds ont peut-être brûlé.",
            "action": "Vérifiez les fonds — si vous êtes sombre, utilisez une plaque double la prochaine fois. Attachez le biscuit ouvert; si l'intérieur est encore moelleux, ils sont encore bons malgré l'extérieur sombre."
          }
        ]
      },
      "feelCue": "Prenez un biscuit juste cuit et tournez-le à l'envers — tapez sur le fond avec un joint. Il devrait sonner creux avec un léger bruit, pas un thwack dense. La vapeur qui s'échappe quand on la sépare doit sentir le beurre et le tang cultivé."
    }
  ]
};
