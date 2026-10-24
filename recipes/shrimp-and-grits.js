export default {
  "repoId": "master_american_shrimp-and-grits_001",
  "parentRepoId": null,
  "slug": "shrimp-and-grits",
  "author": "ForkRecipe Kitchen",
  "title": "Crevettes et grits",
  "description": "Des grits en pierre cuits à un porridge soyeux et riche en beurre, couronnés de crevettes prunes dans une sauce fumée, tasso-épicée, le dimanche matin de Lowcountry définitif dans un bol.",
  "cuisine": "Américain",
  "culture": "Pays bas",
  "category": "seafood",
  "tags": [
    "crevettes",
    "Céréales",
    "cajun",
    "sud",
    "Produits de la mer"
  ],
  "difficulty": 2,
  "activeTime": "35 min",
  "totalTime": "55 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 7,
    "sour": 2,
    "bitter": 1,
    "umami": 7,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Grises grossières en pierre",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "polenta (mouture des oreilles, augmentation du temps de cuisson)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Lait entier",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "moitié-moitié pour des grains plus riches"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Bouillon de poulet ou de palourde",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "eau (l'arôme sera plus mince)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Beurre non salé",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "saindoux (plus authentique)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Cheddar pointu, râpé",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "gruyère",
        "Parmesan"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Grandes crevettes (21/25), pelées, dépeintes",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Protein",
      "name": "Jambon ou andouille Tasso, petits dés",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "lard fumé (2 bandes en dés)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Allium",
      "name": "Échalons, tranchés finement",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Échalotes"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Acid",
      "name": "Jus de citron, fraîchement pressé",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": [
        "vin blanc sec"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Spice",
      "name": "Assaisonnement créole (Zatarain ou maison)",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika fumé + Cayenne + poudre d'ail"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_11"
      ],
      "outputState": "cooked_grits",
      "instructions": "Porter le lait et le bouillon à mijoter dans une casserole à fond lourd à feu moyen. Assaisonner de sel. Whisk constamment pendant que vous versez les grains dans un cours d'eau mince et stable — verser tout à la fois crée des grumeaux qui ne se dissolvent jamais. Réduire la chaleur à son réglage absolu le plus bas. Cuire en remuant vigoureusement avec une cuillère en bois toutes les 3 à 4 minutes, pendant 30 à 40 minutes jusqu'à ce que les grains soient complètement tendres. Ils devraient tomber de la cuillère dans des rubans lents, semblables à de la lave, et ne pas tâter dans des touffes.",
      "visualCue": {
        "primaryTarget": "Un porridge brillant et coulant qui tient un court sentier quand la cuillère est traînée à travers elle, puis s'installe lentement à plat. Pas de granules blancs d'amidon brut visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grits se sentent encore mal entre les dents. La masse est raide et maladroite plutôt que fluide.",
            "action": "Ajouter une touche de bouillon chaud, remuer agressivement et cuire encore 10 minutes couvertes."
          },
          {
            "state": "Perfect",
            "description": "Soyeux, épais de lave et uniformément crémeux. Une cuillère retombée dans le pot laisse un monticule qui fond lentement.",
            "action": "Retirer du feu et mélanger le beurre et le fromage à chaud."
          },
          {
            "state": "Overdone",
            "description": "Les grits ont saisi une masse solide et raide et s'éloignent des côtés du pot.",
            "action": "Faire fouetter le lait chaud ou la cuillère à soupe par la cuillère à soupe jusqu'à ce qu'elle coule à nouveau."
          }
        ]
      },
      "feelCue": "Faites glisser la cuillère sur le fond de la casserole — elle doit avoir l'impression de remuer un pudding chaud et épais avec une légère résistance sans grain. Vous devriez entendre une faible pente rythmique comme la bulle de grains."
    },
    {
      "nodeId": "step_2",
      "action": "Monter",
      "inputs": [
        "cooked_grits",
        "ing_04",
        "ing_05"
      ],
      "outputState": "finished_grits",
      "instructions": "Alors que les grains sont encore très chauds, mélanger le beurre froid en deux additions, laissant fondre chacune complètement avant d'ajouter la suivante. Puis plier dans le cheddar râpé jusqu'à ce que complètement fondu. Goûtez et ajustez le sel. Couvrez la casserole et maintenez - la au - dessus de la flamme la plus basse ou déplacez - vous vers un brûleur chaud: les grains s'emboîtent à mesure qu'ils refroidissent.",
      "visualCue": {
        "primaryTarget": "Les grains prennent un éclat brillant du beurre émulsifiant dedans. Le fromage disparaît entièrement dans la masse, ne laissant aucune corde visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les piscines de beurre visibles à la surface, non encore incorporées. Le fromage a fondu en croûtes caoutchouteuses.",
            "action": "Mélanger plus vigoureusement hors de la chaleur — les grains doivent être assez chauds pour que la graisse émulsifie."
          },
          {
            "state": "Perfect",
            "description": "Un porridge uniformément brillant, richement doré. Spoon laisse un canal propre et lent.",
            "action": "Goûtez au sel, couvrez et maintenez pendant que vous faites les crevettes."
          },
          {
            "state": "Overdone",
            "description": "La graisse s'est cassée et mise dans un anneau jaune autour du bord du pot.",
            "action": "fouetter dans une cuillère à soupe de lait chaud pour ramener l'émulsion. Ajouter le fromage plus lentement la prochaine fois."
          }
        ]
      },
      "feelCue": "Une cuillerée retenue devrait couler de la cuillère en un seul ruban non brisé qui s'empile sur elle - même — si elle s'étire dans un brin qui se brise, il lui faut un autre jet de liquide."
    },
    {
      "nodeId": "step_3",
      "action": "Sear",
      "inputs": [
        "ing_07"
      ],
      "outputState": "rendered_tasso",
      "instructions": "Chauffer une poêle large et lourde (le fer fondu est idéal) sur une poêle moyenne-élevée jusqu'à ce qu'elle fume. Ajouter le tasso ou l'andouille en une seule couche et faire cuire pendant 2 à 3 minutes jusqu'à ce qu'il soit profondément doré et croustillé d'un côté. Remuer et cuire encore une minute. La graisse rendue dans la poêle est saveur — ne la jetez pas.",
      "visualCue": {
        "primaryTarget": "Les morceaux de viande ont une croûte acajou profonde sur au moins un côté. Le fond de poêle est noir ambre avec des sucres caramélisés, pas noir.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande est grise et vapeur, non dorée. La graisse a rendu mais la croûte ne s'est pas formée.",
            "action": "Attendez — la casserole était trop bondée ou trop froide. Étendre la viande et élever la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Crisp, bords brun foncé. La poêle est riche en ambre. La cuisine sent le porc fumé et le caramel.",
            "action": "Poussez le tasso sur le bord de la poêle et ajoutez les aromatiques au centre."
          },
          {
            "state": "Overdone",
            "description": "Les bords de la viande sont noirs. Le Fonds est passé de l'ambre au noir de carbone.",
            "action": "Déglacer immédiatement avec un jet de stock pour soulever le fond avant qu'il ne brûle davantage. Jetez tous les morceaux vraiment carbonisés."
          }
        ]
      },
      "feelCue": "Les morceaux doivent résister au déplacement lorsque vous essayez de les déplacer — cette résistance signifie que la croûte se forme. Attendez qu'ils se libèrent naturellement."
    },
    {
      "nodeId": "step_4",
      "action": "Saucisse",
      "inputs": [
        "rendered_tasso",
        "ing_08",
        "ing_09"
      ],
      "outputState": "aromatic_base",
      "instructions": "Ajouter les blancs de pétoncle et l'ail directement à la graisse de tasso dans la poêle à feu moyen. Cuire 60 à 90 secondes, en remuant constamment, jusqu'à ce que l'ail soit parfumé et que les pétoncles soient flétris. Ne laissez pas l'ail brunir — il devient amer dans une poêle si chaude.",
      "visualCue": {
        "primaryTarget": "L'ail est doré et translucide. Les blancs d'échalote sont limpides et vert-jaune vif. L'arôme de la poêle est passé de porc seulement à couche et complexe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est encore blanc et frais. Les pétoncles sont encore rigides.",
            "action": "Cuire encore 30 secondes en remuant. Chauffer légèrement."
          },
          {
            "state": "Perfect",
            "description": "L'ail est en or translucide et intensément parfumé. Pas de crue sur le nez.",
            "action": "Ajouter les crevettes immédiatement."
          },
          {
            "state": "Overdone",
            "description": "L'ail est brun et sent la noisette plutôt que douce. Certaines pièces sont sombres.",
            "action": "Enlevez les morceaux les plus sombres. La poêle sera toujours bonne — ajoutez les crevettes maintenant pour arrêter la cuisson."
          }
        ]
      },
      "feelCue": "Au moment où vous ajoutez l'ail, vous devriez entendre un étourdissement immédiat et vigoureux qui s'installe à un sifflement régulier dans les 10 secondes — tout plus calme signifie que la poêle est trop froide."
    },
    {
      "nodeId": "step_5",
      "action": "Sear",
      "inputs": [
        "aromatic_base",
        "ing_06",
        "ing_12"
      ],
      "outputState": "cooked_shrimp",
      "instructions": "Assaisonner les crevettes avec l'assaisonnement créole et jeter pour enrober. Ajoutez-les à la casserole en une seule couche. Faire cuire 90 secondes du premier côté sans bouger — laisser former la croûte. Flip chaque crevette et cuire 60 secondes de plus. Faire cuire les crevettes rapidement; tout le reste est prêt avant qu'ils n'entrent dans la casserole.",
      "visualCue": {
        "primaryTarget": "Les crevettes sont roses et opaques avec un bord légèrement caramélisé sur le côté plat. Ils se sont enroulés dans une forme C lâche, pas un O serré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crevettes sont translucides et grises au centre. La queue est rose, mais l'extrémité épaisse est vitreuse.",
            "action": "Cuire 30 secondes de plus par côté. Ne pas couper — regarder la couleur changer à la partie épaisse."
          },
          {
            "state": "Perfect",
            "description": "Entièrement blanc rose et opaque de la tête à la queue. Courbé à un C détendu. Ils ressortent doucement lorsqu'ils sont pressés.",
            "action": "Ajouter le jus de citron et déglacer immédiatement la poêle."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes se sont enroulées dans des joints O serrés et se sentent caoutchouteuses lorsqu'elles sont pressées. La texture est dense et généreuse.",
            "action": "Retirer immédiatement du feu. Servir rapidement — ils continueront à cuisiner dans la sauce s'ils restent trop longtemps."
          }
        ]
      },
      "feelCue": "Une crevette parfaitement cuite pressée légèrement entre deux doigts a une résistance douce et induisante, comme le pressage d'un raisin ferme. Le snap caoutchouteux signifie surdosage; aucune résistance signifie brut."
    },
    {
      "nodeId": "step_6",
      "action": "Déglacement",
      "inputs": [
        "cooked_shrimp",
        "ing_10"
      ],
      "outputState": "shrimp_pan_sauce",
      "instructions": "À feu moyen-élevé, verser le jus de citron. Il sifflera et crachera — utilisez une cuillère à manches longues pour gratter tout le fond de la poêle. Faites pivoter la poêle de 15 à 20 secondes jusqu'à ce que la sauce se serre légèrement et enrobe les crevettes. Éparpillement des verts de pétoncle sur le dessus.",
      "visualCue": {
        "primaryTarget": "Une sauce teintée d'ambre brillante qui s'accroche à chaque crevette. Le fond de poêle s'est complètement dissous dans le liquide, ne laissant aucun morceau brun collé à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse, avec de l'affection toujours collée au fond de la poêle.",
            "action": "Grattez plus fort et réduisez encore 30 secondes à feu vif."
          },
          {
            "state": "Perfect",
            "description": "La sauce est émulsifiée et enrobe une cuillère avec un film mince et brillant. Sens lumineux et fumé simultanément.",
            "action": "Déposer immédiatement sur des bols de grains chauds."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite à un glaçage collant et commence à caraméliser à nouveau sur le fond de la poêle.",
            "action": "Ajouter une cuillère à soupe de stock pour se détendre et retirer immédiatement de la chaleur."
          }
        ]
      },
      "feelCue": "Inclinez la poêle et regardez la sauce couler — elle doit couler comme de la crème légère, pas de l'eau. Si elle retire la poêle dans un film mince, c'est parfait."
    }
  ]
};
