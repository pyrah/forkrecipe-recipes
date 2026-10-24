export default {
  "repoId": "master_american_ham_hock_stock_001",
  "parentRepoId": null,
  "slug": "ham-hock-stock",
  "author": "ForkRecipe Kitchen",
  "title": "Ham Hock Stock",
  "description": "Les hamacs fumés mijotaient bas et lents avec des arômes jusqu'à ce que le liquide devienne ambre, porcin et légèrement sucré — l'épine dorsale des verts à collier, des soupes de haricots et des pots du Sud.",
  "cuisine": "Américain",
  "culture": "Amérique du Sud",
  "category": "stocks",
  "tags": [
    "stock",
    "américains",
    "porc",
    "fumé",
    "sud",
    "savoureux"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "3 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Jarrets de jambon fumé (2–3 entiers)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "os du cou de porc fumé",
        "cuisses de dinde fumée"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon jaune (quartier, non pelé)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Pâtes de céleri avec feuilles",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Gousses d'ail entières, non pelées",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Feuilles de baies séchées",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Maïs de poivre noir (ensemble)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "flocons de poivre rouge pour la chaleur"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Thym séché",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "des brins de thym frais"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 200,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme (facultatif, éclaboussure)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
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
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "simmering_hock_stock",
      "instructions": "Placer les jarrets dans un grand pot lourd et couvrir d'eau froide. Ajouter l'oignon coupé (peau sur laquelle la peau ajoute de la couleur et une douceur), le céleri, l'ail non pelé, les feuilles de laurier, les grains de poivre et le thym. Porter lentement à feu moyen à mijoter nue, en écrémant toute mousse brun-gris qui monte dans les 20 premières minutes. Réduisez à la chaleur la plus basse qui maintient une mijotée douce: de petites bulles paresseuses brisent la surface toutes les quelques secondes. Un ébullition dur rend le stock nuageux et peut durcir la peau des jarrets. Laisser mijoter pendant 2,5 à 3 heures.",
      "visualCue": {
        "primaryTarget": "Un liquide d'or ambré mijotant doucement avec des spores de vapeur parfumée à la fumée, les jarrets submergés et commençant à avoir l'air gonflés et adoucis. L'oignon s'est obscurci et le céleri est devenu translucide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est encore pâle, légèrement teinté, et la peau de jarret est encore ferme et serrée. Moins de 90 minutes ont passé.",
            "action": "Continuez à mijoter. La couleur et le corps construisent considérablement dans la seconde moitié de la cuisson que le collagène et les pigments de fumée continuent à extraire."
          },
          {
            "state": "Perfect",
            "description": "Un stock d'ambre clair, profondément aromatique de porc fumé. La peau des jarrets s'est complètement adoucie et commence à s'éloigner de l'os; un poke avec un doigt trouve la viande donnant plutôt que résistante.",
            "action": "Vérifiez si la viande peut être tirée facilement de l'os. Si oui, procéder à des pressions."
          },
          {
            "state": "Overdone",
            "description": "La viande est complètement tombée de l'os, la peau s'est dissoute en fils, et le stock a un goût très salé et un peu fumé.",
            "action": "Soucher rapidement et diluer avec une petite mesure d'eau non salée pour rétablir l'équilibre de la salinité."
          }
        ]
      },
      "feelCue": "Après 2 heures, appuyez sur le côté du jarret avec des pinces — la peau devrait donner facilement sous pression, comme une pêche très mûre, et la viande en dessous devrait à peine s'accrocher à l'os. Le stock doit sentir un fumoir de feu de camp: la fumée sucrée, rendu gras de porc, et la terre des aromatiques."
    },
    {
      "nodeId": "step_2",
      "action": "Repos",
      "inputs": [
        "simmering_hock_stock"
      ],
      "outputState": "rested_hock_stock",
      "instructions": "Retirer le pot du feu et laisser reposer, à découvert, pendant 30 minutes. Ce reste sert à deux fins : les jarrets refroidissent juste assez pour être manipulés en toute sécurité, et tout sédiment restant se dépose au fond du pot pour que les souches de stock soient plus claires. Pendant que le stock repose, retirer les jarrets avec des pinces et les placer sur une planche à découper. Tirez la viande des os avec vos doigts ou deux fourchettes — la viande devrait glisser en gros morceaux soyeux sans résistance. Réserver la viande déchiquetée séparément; c'est la base des verts à collier, des soupes de haricots ou de la soupe de pois.",
      "visualCue": {
        "primaryTarget": "Le stock de repos est ambre et relativement calme, avec un disque de graisse dorée qui flotte à la surface et tout sédiment fin se dépose tranquillement au fond. La viande de jarret tiré est douce, qui donne, et profondément bronzée de la fumée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande est toujours accrochée à l'os et est difficile à tirer: elle se déchire en morceaux courts et secs plutôt que de glisser en longues lambeaux.",
            "action": "Retournez les jarrets au bouillon mijotant pendant 30 à 45 minutes avant de vous reposer."
          },
          {
            "state": "Perfect",
            "description": "La viande s'éloigne de l'os en longues lambeaux soyeuses et soyeuses, encore humides et pleine de saveur fumée. La peau gélatine et la couche de collagène se détachent en rubans.",
            "action": "Réserver la viande, jeter les os et la peau, et procéder à la déformation du stock."
          },
          {
            "state": "Overdone",
            "description": "La viande s'est dissoute dans le stock ou est aqueuse et sans structure — elle tient à peine ensemble et a perdu la majeure partie de sa texture.",
            "action": "La texture est compromise mais la saveur est toujours là; utiliser la viande déchiquetée comme ingrédient aromatisant plutôt qu'un composant en vedette."
          }
        ]
      },
      "feelCue": "La viande tirée doit se sentir soyeuse et humide entre les doigts — légèrement collante du collagène dissous, et chaude avec la graisse rendue. S'il est sec ou granuleux, il lui faut plus de temps; s'il s'effondre au toucher le plus léger, il en a trop."
    },
    {
      "nodeId": "step_3",
      "action": "Poignée",
      "inputs": [
        "rested_hock_stock"
      ],
      "outputState": "strained_hock_stock",
      "instructions": "Placer une souche à mailles fines sur un grand pot ou un grand bol et faire glisser soigneusement le stock, laissant le dernier pouce de liquide dans le pot pour garder tout sédiment réglé derrière. Jeter l'oignon dépensé, le céleri, l'ail, les grains de poivre et les feuilles de laurier. Ne pressez pas les solides — il ne reste plus rien à extraire. Pour un stock particulièrement clair, alignez la passoire avec de l'étoffe de fromage. Le stock aura une couche flottante de gras de porc doré rendu — selon la recette, vous pouvez l'écumer (pour un stock plus léger) ou le remuer (pour la richesse).",
      "visualCue": {
        "primaryTarget": "Un liquide ambré clair, la couleur du miel foncé ou un thé noir fort avec une teinte dorée. Une couche de graisse dorée flotte à la surface. Pas de sédiments, pas de fragments d'os, pas de morceaux de légumes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock est toujours dans le pot avec des solides usés; il n'a pas encore été tendu.",
            "action": "Pente maintenant."
          },
          {
            "state": "Perfect",
            "description": "Stock clair, doré-ambre, profondément aromatique avec un disque flottant de graisse de porc rendu. La saveur est fumée, salée, légèrement sucrée et porcine avec une longue finale chaude.",
            "action": "Goûtez et vérifiez le sel — les jarrets de jambon sont généralement bien salés et le stock peut n'avoir besoin d'aucun assaisonnement supplémentaire."
          },
          {
            "state": "Overdone",
            "description": "Le stock est nuageux ou agité à partir de sédiments qui ont été perturbés en versant trop rapidement.",
            "action": "Laissez le stock étiré reposer pendant 10 minutes, puis éjaculez soigneusement du haut; les sédiments se déposeront de nouveau et le stock clarifiera."
          }
        ]
      },
      "feelCue": "Une goutte de la souche de votre lèvre doit se sentir chaude et légèrement collante de la gélatine dissoute. L'arôme doit être complexe: la douceur de la graisse de porc rendu, la note sombre et boisée de la fumée, et une légère douceur caramel de la peau d'oignon."
    },
    {
      "nodeId": "step_4",
      "action": "Saison",
      "inputs": [
        "strained_hock_stock",
        "ing_09"
      ],
      "outputState": "finished_ham_hock_stock",
      "instructions": "Goûtez soigneusement le stock. Il sera presque certainement bien assaisonné à partir du sel déjà présent dans les jarrets fumés — souvent pas besoin de sel supplémentaire. Si vous le souhaitez, ajoutez une petite éclaboussure de vinaigre de cidre de pomme pour aiguiser la douceur et couper à travers la richesse de la graisse; c'est une étape commune dans la cuisine du Sud et rend le stock plus lumineux et plus vivant sans aucune amerie apparente. A conserver réfrigéré jusqu'à 5 jours ou geler pendant 3 mois. Le stock se mettra à une gelée molle lorsqu'il sera réfrigéré, signe d'une excellente teneur en gélatine de la peau du jarret.",
      "visualCue": {
        "primaryTarget": "Le stock fini est un liquide clair, doré, entièrement assaisonné. Refroidi, il se met à une gelée d'ambre douce et moussante. Réchauffé, il coule librement et sent la fumée et le porc.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Goûte plat ou fade malgré la couleur profonde — la fumée et la saveur de porc est là, mais en quelque sorte étouffée et sans définition.",
            "action": "Ajoutez maintenant le vinaigre de cidre de pomme : même une cuillère à café éclaircit et soulève le profil entier remarquablement. Une pincée de sel aidera également à définir les saveurs."
          },
          {
            "state": "Perfect",
            "description": "Deep, fumé, légèrement sucré, avec un caractère savoureux arrondi et juste assez de sel pour le faire goûter vivant. Le vinaigre, s'il est utilisé, est imperceptible comme amer mais donne au stock un lifting et la luminosité.",
            "action": "Entreposer ou utiliser comme liquide pour les verts braisés, les soupes de haricots ou comme complément fortifiant à tout pot du Sud."
          },
          {
            "state": "Overdone",
            "description": "Le stock est fortement salé — plus qu'il ne peut être équilibré par la dilution seule. Cela se produit généralement lorsque les jarrets étaient très fortement guéris.",
            "action": "Diluer avec de l'eau non salée dans un rapport 1:1 et goûter à nouveau. Le stock très salé est encore utile comme aromatisation concentrée ajoutée en petites quantités à la saison d'autres plats."
          }
        ]
      },
      "feelCue": "Réfrigérer une petite louche pendant la nuit. Elle devrait être fixée à une gelée ambre ferme et trancheuse, c'est - à - dire à de la gélatine osseuse et de la peau confirmant une extraction réussie. Melé entre les doigts, il doit se sentir chaud, soyeux et légèrement collagène."
    }
  ]
};
