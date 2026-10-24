export default {
  "repoId": "master_italian_american_shrimp_scampi_001",
  "parentRepoId": null,
  "slug": "shrimp-scampi",
  "author": "ForkRecipe Kitchen",
  "title": "Crevettes Scampi",
  "description": "Les crevettes prunes sautées dans le vin blanc, le beurre, l'ail et le citron — le classique italo-américain qui parfume toute la cuisine en moins de quinze minutes.",
  "cuisine": "Italien-Américain",
  "culture": "Italien-Américain",
  "category": "seafood",
  "tags": [
    "crevettes",
    "pâtes",
    "Italienne-américaine",
    "beurre",
    "Ail",
    "citron",
    "Vite"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 0,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Grandes crevettes (16 à 20), pelées et dépeintes",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "queues langoustines",
        "pétoncles"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé, divisé (la moitié pour le merling, la moitié pour la sauce)",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 0.4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Solvent",
      "name": "Vin blanc sec (Pinot Grigio ou Vermentino)",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Vermouth sec",
        "Poulet léger"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 0.4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Citrus",
      "name": "Zeste de citron, râpé finement",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Flacons de poivre rouge",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "piment frais tranché finement"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Persil à feuilles plates, haché finement",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": [
        "ciboulette fraîche"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Starch",
      "name": "Linguine ou spaghetti, cuite al dente (facultatif)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "pain croustillant, grillé"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Assaisonner",
      "inputs": [
        "ing_01",
        "ing_09"
      ],
      "outputState": "seasoned_shrimp",
      "instructions": "Les crevettes sont complètement sèches avec des serviettes en papier — toute humidité superficielle les vaporisera au lieu de les saisir. Assaisonner généreusement avec du sel des deux côtés. Laissez-les reposer à découvert pendant 5 minutes. Crevettes sèches; ragoût de crevette humide — cette étape détermine si vous obtenez des bords dorés caramélisés ou de la chair grise et caoutchouteuse.",
      "visualCue": {
        "primaryTarget": "Les crevettes sont sèches au toucher, légèrement pulvérisées avec du sel, pas d'humidité sur le plateau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crevettes sont encore visiblement humides, scintillent avec de la saumure ou de l'eau. Le sel s'est dissous dans des bassins de liquide.",
            "action": "Pat sèche avec plus de serviettes en papier. La crevette mouillée refroidira la poêle et refusera de la saisir."
          },
          {
            "state": "Perfect",
            "description": "Les surfaces sont mates et sèches. Le sel est uniformément distribué. Les crevettes sont rose-gris et fermes, prêtes pour la poêle chaude.",
            "action": "Chauffer la poêle immédiatement avant que le sel ne dégage plus d'humidité."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes ont été salées trop longtemps (plus de 15 min) et ont commencé à pleurer liquide et à se raffermir de la cure salée.",
            "action": "Sécher à nouveau et cuire à la fois — le salage prolongé modifie la texture des crevettes crues avant même qu'elles n'atteignent la poêle."
          }
        ]
      },
      "feelCue": "Les crevettes sèches se sentent presque crayeuses contre le bout des doigts — un léger collant sans glissant. Si vos doigts glissent, tapez encore."
    },
    {
      "nodeId": "step_2",
      "action": "Saisir",
      "inputs": [
        "seasoned_shrimp",
        "ing_02"
      ],
      "outputState": "seared_shrimp",
      "instructions": "Réglez une grande poêle à feu vif jusqu'à ce qu'elle commence à fumer. Ajouter la moitié du beurre et remuer pour enrober. Ajouter les crevettes en une seule couche — travailler en lots si nécessaire; la foule les vaporisera. Sear non perturbé pendant 60 à 90 secondes jusqu'à ce qu'une croûte de corail profonde se forme sur le dessous. Flip une fois et cuire de 30 à 45 secondes de plus. Au moment où la dernière bande grise translucide disparaît de la partie la plus épaisse, retirer dans une plaque. Ils finiront la cuisson dans la sauce.",
      "visualCue": {
        "primaryTarget": "Crevettes incurvées en forme de C avec un haut corallien vif et un dessous doré, légèrement caramélisé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le dessous est rose pâle, sans couleur de mer. Gris translucide encore visible dans la partie la plus épaisse.",
            "action": "Ne bougez pas ou ne retournez pas encore — laissez la réaction de Maillard se développer. Le retournement prématuré empêche la formation de croûtes."
          },
          {
            "state": "Perfect",
            "description": "Extérieur corallien profond sur toutes les surfaces avec une faible croûte dorée sur le côté marin. Centre encore à peine opaque — ils finiront dans la sauce. Curl est un C serré, pas un O serré (O signifie trop cuit).",
            "action": "Retirez immédiatement dans une assiette chaude. Ils transportent de la chaleur résiduelle — chaque seconde sur la plaque les cuit plus loin."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes se sont enroulées dans des formes d'O serrées. La chair est entièrement blanche opaque et commence à avoir l'air sèche et fibreuse. L'odeur est de crustacés cuits plutôt que frais.",
            "action": "Supprimer immédiatement. Réduire le temps de sauce afin qu'ils passent le moins de temps possible à revenir à la poêle."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur la partie la plus épaisse d'une crevette avec un bout de doigt — parfait est ferme mais avec un léger donner, comme presser le tampon de votre doigt. Springy-hard signifie trop cuit."
    },
    {
      "nodeId": "step_3",
      "action": "Faire revenir",
      "inputs": [
        "seared_shrimp",
        "ing_03",
        "ing_07"
      ],
      "outputState": "garlic_base",
      "instructions": "Sans essuyer la poêle, réduire la chaleur à moyen. La poêle devrait encore être chaude et parfumée avec des crevettes. Ajouter l'ail tranché et les flocons de poivre rouge dans la casserole. Mélanger constamment pendant 30 à 45 secondes. L'ail doit porter un toast à l'or pâle et relâcher sa douceur sans se croiser en brun.",
      "visualCue": {
        "primaryTarget": "Les tranches d'ail sont pâles, d'or paille, translucides, et gonflent doucement dans les jus de casserole ambre. Les flocons de poivre sont rouge vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est encore blanc et opaque, sentant vif et cru.",
            "action": "Continuer encore 15 à 20 secondes, en remuant constamment. L'ail brut domine la sauce finie avec un bord dur."
          },
          {
            "state": "Perfect",
            "description": "Les bords d'ail sont en or pâle, les centres sont encore crémeux. La poêle sent la douceur et la noix. Les flocons de poivre commencent juste à fleurir.",
            "action": "Verser le vin immédiatement — l'ail va de parfait à brûlé en quelques secondes."
          },
          {
            "state": "Overdone",
            "description": "Les bords d'ail se sont croisés en brun et la poêle sent amer et tranchant.",
            "action": "Jeter l'ail et la poêle et commencer la sauce à l'état frais avec du beurre nouveau et de l'ail — l'ail amer ne peut pas être fixé, seulement dilué."
          }
        ]
      },
      "feelCue": "La cuisine doit sentir comme une trattoria napolitaine: ail doux, beurre grillé et saumure faible. Si ça sent l'acre, l'ail est allé trop loin."
    },
    {
      "nodeId": "step_4",
      "action": "Déglacer",
      "inputs": [
        "garlic_base",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_02"
      ],
      "outputState": "scampi_sauce",
      "instructions": "Verser le vin blanc dans la poêle — il sifflera et s'évaporera de façon spectaculaire. Augmenter la chaleur à haute et laisser le vin réduire de moitié, environ 2 minutes, en grattant tout fond brun du fond de la poêle. Une fois réduit, ajouter le jus de citron et le zeste de citron. Retirer la poêle du feu et ajouter le reste du beurre froid en une seule pièce. Tourner constamment la poêle jusqu'à ce que le beurre fond dans la sauce sans casser — vous voulez un revêtement brillant, émulsifié, velouté, pas liquide gras.",
      "visualCue": {
        "primaryTarget": "Une sauce dorée lustrée et légèrement épaissie qui enveloppe l'arrière d'une cuillère et qui tient ensemble plutôt que de s'emboîter dans de l'huile et du liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse. Le vin n'a pas suffisamment diminué et le beurre n'a pas été complètement émulsifié — il est assis dans des flaques jaunes.",
            "action": "Retourner à feu moyen brièvement et continuer à réduire, puis retirer du feu avant d'ajouter plus de beurre."
          },
          {
            "state": "Perfect",
            "description": "La sauce est brillante et collante, or pâle avec du beurre suspendu. Sensation intense de citron et de vin. Faire pivoter la poêle laisse une fine couche sur les côtés.",
            "action": "Retournez les crevettes immédiatement avant que l'émulsion ne se brise de la chaleur continue."
          },
          {
            "state": "Overdone",
            "description": "La sauce est cassée — séparée en graisse dorée flottant sur du vin de citron. L'émulsion a été bouillie ou le beurre a été ajouté à une poêle encore à feu plein.",
            "action": "Retirer complètement du feu. fouetter dans une cuillère à soupe d'eau froide pour aider à réémulsionner, ou accepter la sauce plus mince et servir rapidement."
          }
        ]
      },
      "feelCue": "Plongez une cuillère et maintenez-la horizontalement — la sauce doit couler dans un ruban lent et opaque, et non pas couler comme de l'eau."
    },
    {
      "nodeId": "step_5",
      "action": "Mélanger",
      "inputs": [
        "seared_shrimp",
        "scampi_sauce",
        "ing_08",
        "ing_10"
      ],
      "outputState": "shrimp_scampi",
      "instructions": "Remettre les crevettes dans la poêle. Ajouter les pâtes (si elles sont utilisées) et tout mélanger jusqu'à ce que les crevettes soient brillantes avec de la sauce et que les pâtes soient uniformément enrobées. Dispersez le persil sur le dessus. Servir immédiatement dans des bols chauds — la sauce commencera à absorber dans les pâtes en quelques minutes.",
      "visualCue": {
        "primaryTarget": "Crevettes entièrement lustrées de sauce au beurre doré, chaque brin de pâtes enrobées sans mise en commun. Persil vert vif contre les crevettes de corail.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crevettes ne sont pas encore enrobées — la sauce est mise en commun au fond de la poêle. Persil non ajouté.",
            "action": "Retirez plus vigoureusement la chaleur. Ajouter une éclaboussure d'eau de cuisson de pâtes pour se détendre et réémulsionner la sauce autour des pâtes."
          },
          {
            "state": "Perfect",
            "description": "Chaque crevette brille avec de la sauce. Filons de pâtes enduits séparément. Le persil est brillant. Le fond de la poêle est presque propre.",
            "action": "Assortir et servir dans les 60 secondes."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes ont été trop longtemps dans la poêle chaude pendant le lancer — elles se resserrent et se froncent davantage. La sauce commence à sécher et les pâtes absorbent tout.",
            "action": "Servir immédiatement sans jeter davantage. Une pression de citron et une bruine d'huile d'olive à la table peuvent raviver une sauce trop serrée."
          }
        ]
      },
      "feelCue": "Ramassez une crevette — elle devrait être légère et abondante dans la cuillère, vêtue de sauce collante, et non nager dans du liquide."
    }
  ]
};
