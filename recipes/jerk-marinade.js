export default {
  "repoId": "master_jamaican_jerk-marinade_001",
  "parentRepoId": null,
  "slug": "jerk-marinade",
  "author": "ForkRecipe Kitchen",
  "title": "Marinade de la cervelle",
  "description": "La marinade qui caractérise la Jamaïque: les poivrons de scotch, l'Allspice, le thym et le gingembre fourrés de pétoncle et de sauce de soja dans une pâte aromatique ardente qui pénètre profondément dans le poulet ou le porc avant qu'elle ne touche le grill ou la fosse.",
  "cuisine": "Jamaïquen",
  "culture": "Jamaïquen",
  "category": "condiments",
  "tags": [
    "Jamaïcain",
    "scotch-bonnet",
    "Toussages",
    "marinade",
    "épicé",
    "fumée",
    "grillé"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Heat",
      "name": "Poivrons de bonnet scotch (moussés; graines à feu complet, graines enlevées à feu moyen)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Poivrons",
        "rocoto"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Échalons (oignons de printemps), hachés approximativement",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Baies entières de tous les poissons, fraîchement moulues (ou tous les poissons moulus)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Thym frais, feuilles cueillies (ou 1 c. à thé séchée)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Thym séché"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gingembre frais, pelé et tranché approximativement",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "gingembre moulu (utiliser 1/4 de la quantité)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari",
        "aminos de coco"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile végétale neutre",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Huile d'olive"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Jus de citron vert frais",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Sweetener",
      "name": "Sucre brun foncé",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "mélasse",
        "Chérie"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": [
        "noix de muscade"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Seasoning",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation",
      "inputs": [
        "ing_01"
      ],
      "outputState": "prepped_scotch_bonnets",
      "instructions": "Mettre des gants — ce n'est pas facultatif avec des bonnets de scotch. Coupez chaque poivre. Si vous voulez la chaleur complète et traditionnelle, laissez les graines et la membrane blanche intacte; si vous voulez une marinade chaude mais tolérable, de moitié chaque poivre et racler les graines et la membrane avec une petite cuillère. Quoi qu'il en soit, la qualité unique du bonnet de scotch n'est pas simplement la chaleur — il porte un fruité tropical-floral distinctif (mango, abricot, un soupçon de tamarin) qu'aucun autre chili ne fournit. Les habaneros sont le substitut le plus proche, mais manquent de la profondeur florale spécifique. Hacher à peu près les poivrons préparés. Ne touchez pas votre visage.",
      "visualCue": {
        "primaryTarget": "Morceaux d'orange vif ou de poivron rouge d'une surface cireuse et lisse, leur forme ridée distinctive visible, les surfaces coupées montrant soit la cavité pleine des graines, soit la chair proprement raclée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Peppers laissés entiers et non agglomérés; la décision sur les graines n'a pas encore été prise.",
            "action": "Prendre la décision sur les graines avant de procéder — cela affecte fondamentalement le niveau de chaleur de toute la marinade et ne peut être défait plus tard."
          },
          {
            "state": "Perfect",
            "description": "Couper et couper en morceaux d'environ 1 à 2 cm, toujours préparés en fonction du niveau de chaleur souhaité. Gants toujours allumés.",
            "action": "Ajouter au mélangeur avec tous les autres ingrédients."
          },
          {
            "state": "Overdone",
            "description": "Les poivrons ont été hachés si finement que l'huile de capsaïcine est maintenant sur la planche à découper et tout à proximité; poivre aérosolisé dans l'air.",
            "action": "Reculez, aspirez la pièce et passez au mélangeur."
          }
        ]
      },
      "feelCue": "Même à travers des gants, vous pouvez sentir la légère huile de la peau de scotch, la capsaïcine est concentrée près de la surface. Résistez à toute envie d'odeur étroite; même les vapeurs sont puissantes."
    },
    {
      "nodeId": "step_2",
      "action": "Mixer",
      "inputs": [
        "prepped_scotch_bonnets",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "rough_jerk_paste",
      "instructions": "Ajouter tous les ingrédients préparés à un mélangeur ou à un robot culinaire : les bonnets de scotch hachés, les pétoncles, l'Allspice fraîchement moulu, le thym, le gingembre, l'ail, la sauce de soja, l'huile, le jus de lime, le sucre brun, la cannelle, le sel et le poivre noir. Mélanger en éclats de 30 secondes, en grattant les côtés entre les éclats, jusqu'à ce que le mélange forme une pâte cohésive - rugueuse et légèrement chunky est traditionnelle et préférable à entièrement lisse, car la texture aide la pâte à s'accrocher à la viande. Si le mélangeur lutte, ajoutez une cuillère à soupe d'eau pour l'aider à bouger. Si vous voulez un vrai branleur de style Maroon, tapez tout dans un gros mortier à la place — le mortier cisaille les cellules plutôt que de les couper, libérant des huiles plus volatiles de l'Allspice et du gingembre et créant une pâte plus complexe et plus profonde.",
      "visualCue": {
        "primaryTarget": "Une pâte rugueuse, vert-brun profond avec des taches visibles de thym et d'échon, un reflet huileux des huiles volatiles allspice, et un arôme qui est simultanément chaud-brillant et tropical-floral.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Visiblement chunky avec de grands morceaux de pétoncle, de gingembre ou de poivre; la pâte ne s'est pas encore réunie et sent des ingrédients crus et séparés.",
            "action": "Mélanger plus loin — le pétoncle et le gingembre sont les plus difficiles à décomposer; utiliser de courts éclats à grande vitesse."
          },
          {
            "state": "Perfect",
            "description": "Pâte cohésive légèrement rugueuse avec une couleur vert-brun mousseux et une surface brillante et grasse. Sentez intensément de toutspice et de scotch de chaleur de capot avec le thym tisser à travers. Goûts de feu, de fumée et de fruits tropicaux.",
            "action": "Goûtez soigneusement — il fera très chaud. Ajuster le sel et le sucre brun."
          },
          {
            "state": "Overdone",
            "description": "Surmené dans un liquide fin et lisse; le toutspice et le thym volatils ont été aérés; la pâte est trop aqueuse pour s'accrocher à la viande.",
            "action": "Ajouter plus de pétoncle et de gingembre et donner une impulsion brièvement pour reconstruire le corps; si elle est encore trop fine, transférer dans un bol et remuer dans une cuillère à soupe de toutspice moulu à épaissir."
          }
        ]
      },
      "feelCue": "Mettez une petite quantité au dos de votre main (pas encore votre langue) et laissez-la reposer pendant 10 secondes. La chaleur du capot de scotch devrait se construire lentement, atteignant un pic d'environ 30 secondes, avec une vague distincte de chaleur allspice en dessous et le fruité floral du poivre arrivant en dernier. Cette progression en trois parties est la signature d'une bonne pâte."
    },
    {
      "nodeId": "step_3",
      "action": "Assaisonner",
      "inputs": [
        "rough_jerk_paste"
      ],
      "outputState": "balanced_jerk_marinade",
      "instructions": "Goûtez soigneusement la pâte — utilisez une très petite quantité sur un cracker ou un morceau de pain pour tamponner la chaleur et vous permettre de goûter sous le feu. La pâte doit être extrêmement chaude, profondément salée à partir de la sauce soja, parfumée d'Allspice (l'âme de l'amande), et porter la dimension tropicale-fruitée spécifique du capot scotch sous la chaleur. Il ne doit pas avoir un goût de feu unidimensionnel. Ajuster: si elle a besoin de plus de profondeur, ajouter plus de toutspice du sol; si le soja est trop dominant, ajouter plus de citron vert; si la chaleur est écrasante au point d'être désagréable même pour le public prévu, ajouter plus de pétoncle et une seconde goutte d'huile pour la diluer; si elle a un goût plat, plus de sel. Le principe d'équilibre de l'arnaque est que tous les spices et le capot scotch sont des pistes co-égales — ni l'un ni l'autre ne devrait être complètement absent.",
      "visualCue": {
        "primaryTarget": "Une pâte brun-vert foncée, complexe et profonde qui n'est clairement pas unidimensionnelle; les taches de thym et d'échon visible à travers; la surface scintille légèrement avec l'huile essentielle allspice.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte ne goûte qu'à la chaleur de scotch, sans le toutspice, le thym, ou le soya.",
            "action": "Ajouter plus de toutspice moulu, une pincée plus de thym, et plus de sauce de soja; mélanger brièvement pour intégrer."
          },
          {
            "state": "Perfect",
            "description": "Chaud, complexe, parfumé et uniquement jamaïcain — la résine allspice est vers l'avant, le bont de scotch fruité est là sous la chaleur, le soja ajoute de la profondeur, le thym ajoute un lifting à base de plantes. Bien équilibré, il devrait faire sentir l'air comme une fosse à con.",
            "action": "Utiliser immédiatement ou transférer dans un bocal."
          },
          {
            "state": "Overdone",
            "description": "La cassonade a caramélisé légèrement à partir de la chaleur du mélangeur ou il y en a trop ; la pâte a un goût sucré et sucré plutôt que équilibré.",
            "action": "Ajouter plus de scotch, de pétoncle et de jus de lime pour réaffirmer le caractère chaud et salé."
          }
        ]
      },
      "feelCue": "Sentez la pâte en coupant votre main sur le bol et en agitant l'air vers votre nez plutôt que de sentir directement — les volatiles du capot de scotch peuvent brûler les passages nasaux. Ce que vous devez détecter est l'odeur résineuse-clove-pepper caractéristique de toutspice d'abord, puis l'onde tropicale du capot scotch, puis la fraîcheur végétale aiguë de l'échon. Cet ordre de couches aromatiques est l'architecture du crétin."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer",
      "inputs": [
        "balanced_jerk_marinade"
      ],
      "outputState": "finished_jerk_marinade",
      "instructions": "Transférez la marinade de con finie dans un pot ou un contenant en lis. À utiliser: frotter généreusement la marinade sur des morceaux de poulet (les coupes sur l'os sont traditionnelles — les jambes et les cuisses tiennent le mieux), les épaulettes de porc, ou le poisson entier. Tricoter la pâte sous la peau du poulet et dans toute coupe ou fente faite dans la viande. Pour de meilleurs résultats, faire mariner le poulet pendant au moins 4 heures et idéalement toute la nuit; le porc pendant au moins 8 à 12 heures. Le soja et le sel assaisonneront la protéine jusqu'au bout, l'acide se serrera et conditionnera la surface, et les volatiles de tous les spices pénétreront profondément dans la graisse. Cuire au-dessus du charbon de bois avec du piment (allspice) si disponible pour l'authenticité, ou tout autre charbon. La marinade reste réfrigérée pendant deux semaines.",
      "visualCue": {
        "primaryTarget": "Un pot de pâte rugueuse et parfumée aux couleurs profondes qui s'accroche visiblement au verre, avec un aspect complexe et en couches, sombre du soja et de l'aspice, flanqué de thym vert et d'échon, avec de l'huile visible montant à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pâte entreposée sans huile à la surface; l'oxydation va ternir la couleur et les aromatiques dans la journée.",
            "action": "Verser un mince film d'huile neutre sur la surface avant de sceller."
          },
          {
            "state": "Perfect",
            "description": "Scellé sous l'huile, de couleur vive, intensément parfumé à l'ouverture. Lorsque frotté sur le poulet, il s'accroche et commence à pénétrer immédiatement. Après avoir mariné pendant la nuit, la viande est visiblement teintée et la pâte a formé une croûte sèche sur la surface qui s'étalera parfaitement sur le grill.",
            "action": "Faites mariner votre protéine et faites cuire à feu vif."
          },
          {
            "state": "Overdone",
            "description": "La pâte a été stockée trop longtemps; les huiles volatiles de toutspice et le capot scotch se sont dissipées; la pâte sent plat et surtout de sauce soja.",
            "action": "Revivez avec du jus de lime frais, plus frais et moulu, et un bonnet de scotch frais ou habanero mélangé."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité de la marinade finie entre vos doigts et puis sentez vos doigts — le parfum devrait être presque écrasant, un mur de tous les fruits de résine et de scotch-bonnet que votre nez ne peut pas déposer sous une seule catégorie. Cette complexité est la marque d'une marinade qui en vaut la peine."
    }
  ]
};
