export default {
  "repoId": "master_scandinavian_swedish-meatball-sauce_001",
  "parentRepoId": null,
  "slug": "swedish-meatball-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce suédoise aux boulettes de viande",
  "description": "Une sauce à la poêle pâle et moelleuse à base de boulettes de viande brunes et de boeuf riche, finie avec de la crème et un murmure de soja — le genre de sauce qui transforme une assiette de boulettes de viande en quelque chose que vous voulez manger avec une cuillère.",
  "cuisine": "Scandinave",
  "culture": "Suédois",
  "category": "sauces",
  "tags": [
    "crème",
    "viande bovine",
    "suédois",
    "boule de viande",
    "sauce"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 5,
    "sour": 1,
    "bitter": 1,
    "umami": 6,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Farine pure",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Stock de boeuf (bonne qualité, faible teneur en sodium)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "bouillon de poulet"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Double crème (ou crème lourde)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "crème aigre pour tang"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce Worcestershire"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poivre blanc moulu",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre noir"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Moutarde de Dijon",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire fondre",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "pale_roux",
      "instructions": "Dans la même casserole utilisée pour faire frire les boulettes de viande (ne pas nettoyer — le fond est saveur), faire fondre le beurre à feu moyen. Une fois le beurre moussant, ajouter toute la farine à la fois et remuer constamment avec une cuillère en bois ou fouetter. Cuire le roux pendant 2 minutes exactement, en remuant continuellement, jusqu'à ce qu'il sente le biscuit cuit ou le pain court — pas la farine crue. Le roux devrait avoir l'air blond pâle et avoir la consistance du sable humide.",
      "visualCue": {
        "primaryTarget": "Rouge blond pâle enrobant uniformément le fond de la poêle, sentant le blé cuit et le beurre — un parfum propre et grillé sans note de farine crue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Roux est blanc et pâteux. L'odeur de farine brute est toujours dominante.",
            "action": "Cuire encore 60 secondes, en remuant constamment. Les protéines de farine doivent être cuites avant d'ajouter du liquide ou la sauce aura un goût crayeux."
          },
          {
            "state": "Perfect",
            "description": "blond pâle, la couleur du sable clair. Ça sent le toast et la noix. Le fond de la poêle est uniformément recouvert.",
            "action": "Commencez à ajouter du stock progressivement, en fouettant constamment."
          },
          {
            "state": "Overdone",
            "description": "Roux est devenu brun doré. Cela ajoutera une saveur de noix mais moins de puissance épaississante.",
            "action": "Continuez — la sauce sera toujours excellente, juste avec un profil légèrement plus noisette, plus foncé."
          }
        ]
      },
      "feelCue": "Le roux doit ressembler à du sable humide et sentir comme du pain court chaud — que l'odeur grillée et farineuse signale que les granules d'amidon ont été correctement enrobés de graisse et sont prêts à absorber le liquide."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "pale_roux",
        "ing_03"
      ],
      "outputState": "veloute_base",
      "instructions": "Ajouter le stock de boeuf progressivement — commencer par une simple éclaboussure (environ 50ml), fouetter vigoureusement pour l'incorporer complètement dans le roux avant d'ajouter davantage. Une fois le premier ajout lisse, ajouter le stock dans un cours d'eau mince et stable, fouettant constamment pour éviter les bosses. Porter à mijoter à feu moyen, en remuant fréquemment et cuire 5 minutes jusqu'à ce que la sauce s'épaississe à une consistance qui enveloppe l'arrière d'une cuillère. Il aura l'air mince — il s'épaissira encore plus quand la crème sera ajoutée.",
      "visualCue": {
        "primaryTarget": "Doux, brillant, brun pâle sans grumeaux, enrobant le dos d'une cuillère dans une couche mince mais visible. Une ligne tracée à travers elle avec un doigt tient brièvement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse. N'enfile pas une cuillère. Le goût de la farine est toujours présent.",
            "action": "Continuer à mijoter pendant 3 à 5 minutes, en remuant fréquemment, pour faire cuire l'amidon et réduire légèrement."
          },
          {
            "state": "Perfect",
            "description": "Sauce lisse qui enveloppe légèrement une cuillère. Pas de bosses. Une ligne tracée avec un doigt sur le dos de la cuillère tient pendant 2-3 secondes.",
            "action": "Ajouter la crème et les assaisonnements."
          },
          {
            "state": "Overdone",
            "description": "La sauce est devenue très épaisse et glacée. Il déboîte la cuillère en touffes.",
            "action": "Ajouter un éclaboussure plus de stock et fouetter pour se détendre. La crème l'amincira également légèrement."
          }
        ]
      },
      "feelCue": "Passez votre doigt sur l'arrière d'une cuillère enrobée de sauce — vous devriez sentir une légère résistance et la ligne doit tenir proprement. Une sauce aqueuse s'arrosera instantanément; une sauce trop épaisse se sentira comme de la colle."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "veloute_base",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_swedish_sauce",
      "instructions": "Réduire le feu à moyen-doux. Ajouter la double crème et mélanger – la sauce s'amincit légèrement, puis épaissit en mijotant. Ajouter la sauce soja, le poivre blanc et la moutarde de Dijon. Bien mélanger. Goûtez et ajustez le sel. Laisser mijoter doucement pendant 3-5 minutes jusqu'à ce que la sauce soit suffisamment épaisse pour enrober généreusement les boulettes de viande. Ne pas faire bouillir vigoureusement après avoir ajouté de la crème ou il peut se séparer. Conserver au chaud à feu très doux avec un couvercle enjar jusqu'à ce qu'il serve.",
      "visualCue": {
        "primaryTarget": "sauce crémeuse, brun ivoire pâle avec un éclat brillant. Elle tombe dans un ruban épais et lent d'une cuillère. Couleur uniforme sans stries crème.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et la crème n'a pas été entièrement incorporée. Il semble séparé ou strié.",
            "action": "Incorporer constamment à feu moyen-doux pendant 2 minutes jusqu'à ce que la sauce soit homogène et épaissie."
          },
          {
            "state": "Perfect",
            "description": "Doux, brillant et assez épais pour enrober les boulettes de viande sans s'enfuir immédiatement. Goûts équilibrés — riches, salés, légèrement sucrés. Chaleur de poivre blanc à la finale.",
            "action": "Ajouter les boulettes de viande et servir immédiatement, ou garder au chaud à feu très doux."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite trop loin et est très épaisse et givrée. La crème peut s'être séparée (texture de la graine, globules jaunes).",
            "action": "Si elle est trop épaisse, fouetter dans un éclat de bouillon. Si la crème a cassé, fouetter vigoureusement le feu tout en ajoutant une cuillère à soupe de crème froide."
          }
        ]
      },
      "feelCue": "Faites glisser une spatule de silicone dans la sauce — elle devrait laisser un canal propre qui se remplit lentement en plus de 3-4 secondes. La sauce doit sentir le stock de bœuf riche, la crème, et une note peu salée du soja."
    }
  ]
};
