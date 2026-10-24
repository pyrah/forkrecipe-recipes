export default {
  "repoId": "master_thai_tom_yum_broth_001",
  "parentRepoId": null,
  "slug": "tom-yum-broth",
  "author": "ForkRecipe Kitchen",
  "title": "Tom Yum Broth",
  "description": "Un bouillon d'une telle clarté musculaire que chaque sirote la langue avec de la chaux, brûle avec du chili, puis se retire dans la chaleur océanique profonde des crevettes et de la sauce de poisson — la citronnelle et le galangal flottant dans le bol comme le bois de dérive aromatique, dépensé mais encore parfumé. C'est le bouillon qui définit la chaleur et la chaleur.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "stocks",
  "tags": [
    "Soupe",
    "Thaï",
    "bouillon",
    "crevettes",
    "citronnelle",
    "Chaud-sour",
    "épicé"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "40 min",
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
    "sour": 5,
    "bitter": 1,
    "umami": 4,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Eau (ou stock de crevettes légères)",
      "ratioValue": 1000,
      "defaultUnit": "ml",
      "substitutions": [
        "stock de poulet (moins de fruits de mer)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Pieds de citronnelle, meurtris et coupés en morceaux de 3 cm",
      "ratioValue": 3,
      "defaultUnit": "stalks",
      "substitutions": [
        "Pâte de citronnelle 2 c. à soupe"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Galangal, frais, tranché 3mm",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "galangal congelé"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Feuilles de chaux kaffir (makrut), déchirées",
      "ratioValue": 6,
      "defaultUnit": "leaves",
      "substitutions": [
        "Bandes de zeste de chaux (inférieures)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Protein",
      "name": "Crevettes, tête à tête si possible (coquilles réservées au stock)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "crevettes",
        "morceaux de poisson fermes"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "Sauce de poisson",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce de soja (moins complexe)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Jus de lime fraîchement pressé",
      "ratioValue": 50,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Chilies fraîches d'oiseaux thaïlandais, légèrement meurtris",
      "ratioValue": 5,
      "defaultUnit": "whole",
      "substitutions": [
        "pâte de chili (la variété grillée ajoute de la profondeur)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Umami",
      "name": "Nam prik pao (pâte de chili grillée)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "omit pour plus clair tom yum nam sai"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Protein",
      "name": "Champignons d'huître ou de paille déchirés",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "champignons bouton"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Herb",
      "name": "Feuilles de coriandre fraîches, pour servir",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Sweetener",
      "name": "Sucre (facultatif, pour équilibrer)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "sucre de palme"
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
        "ing_04"
      ],
      "outputState": "aromatic_stock",
      "instructions": "Mélanger le bouillon d'eau ou de crevettes avec la citronnelle meurtrie, le galangal tranché et les feuilles de lime kaffir déchirées dans une casserole moyenne. Porter à ébullition à feu vif, puis laisser mijoter vigoureusement. Laisser mijoter à découvert pendant 10 minutes, en pressant les aromatiques dans le liquide avec une cuillère toutes les quelques minutes. Le liquide diminuera légèrement et, plus important encore, il extrairea les huiles aromatiques volatiles de la citronnelle, du galangal et de la chaux kaffir. Après 10 minutes, le bouillon doit sentir fortement les trois aromatiques — le citron-citrus de citronnelle, le camphre-chaud du galangal, et le floral-citrus distinct de la chaux de kaffir. Si votre eau est très douce, les saveurs seront plus prononcées ; l'eau dure mute légèrement les aromatiques. Ne pas encore se fatiguer — les aromatiques continuent à aromatiser le bouillon à travers les étapes suivantes.",
      "visualCue": {
        "primaryTarget": "Un bouillon d'or pâle avec une surface vigoureuse mijoter et des morceaux aromatiques visibles flottant partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est encore clair à l'eau et les aromatiques n'ont pas libéré leurs huiles.",
            "action": "Continuez à mijoter. La citronnelle doit avoir le temps de libérer ses huiles dans le liquide — 10 minutes est le minimum."
          },
          {
            "state": "Perfect",
            "description": "Broth est une couleur dorée claire et l'arôme vous frappe à longueur de bras de la poêle — citronnelle, galangale et lime kaffir, clair et vif. La surface a un fin reflet huileux des huiles essentielles libérées.",
            "action": "Ajouter le nam prik pao, les piments et les champignons."
          },
          {
            "state": "Overdone",
            "description": "Le broth a diminué de plus de 25% et est concentré au point où l'amertume du galangal se manifeste et la citronnelle est dure.",
            "action": "Remplir d'eau de retour au volume original. Les aromatiques sont déjà bien extraits — ne continuez pas à diminuer."
          }
        ]
      },
      "feelCue": "Penchez-vous sur la marmite et coupez vos mains pour diriger la vapeur vers votre visage — le galangal et la citronnelle devraient ouvrir vos sinus et faire vos yeux arroser légèrement. Cette intensité sensorielle est ce que vous voulez dans le bol fini."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "aromatic_stock",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "seasoned_stock",
      "instructions": "Ajouter les piments d'oiseaux légèrement meurtris et le nam prik pao (pâte de chili grillé) au stock aromatique mijotant. Le nam prik pao est le différenciateur entre le tom yum nam sai (bouillon clair, pâle) et le tom yum nam khon (bouillon nuageux, plus riche, plus foncé) — cette recette l'utilise pour la profondeur et la couleur. Mélanger jusqu'à ce que la pâte se dissout dans le bouillon — il transformera le stock en ambre-orange chaud. Ajouter les champignons déchirés et laisser mijoter 3 minutes jusqu'à ramollir. Goûtez le bouillon maintenant — avant d'ajouter la crevette, la sauce de poisson ou la chaux — et vérifiez que la chaleur de chili est à votre niveau désiré. À ce stade, vous pouvez ajouter plus de chilies meurtries. Les champignons ajouteront une profondeur d'umami qui comble l'écart entre les aromatiques pointus et les fruits de mer.",
      "visualCue": {
        "primaryTarget": "Un bouillon ambré-orange légèrement nuageux avec des champignons ramollis et des morceaux de chili flottant à travers.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Nam prik pao n'a pas complètement dissout et flotte dans des touffes sombres. Les champignons sont encore crus et fermes.",
            "action": "Incorporer plus vigoureusement et laisser mijoter encore 2 minutes."
          },
          {
            "state": "Perfect",
            "description": "Broth est un orange ambré uniforme, opaque avec de la pâte de chili dissoute, parfumé avec du chili rôti et du galangal. Les champignons sont doux et légèrement translucides.",
            "action": "Ajouter les crevettes et assaisonner immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Broth a mijoté trop longtemps avec la pâte de chili et a développé une amertume aiguë, presque brûlée-chili.",
            "action": "Ajouter un jet d'eau et une pincée de sucre pour modérer l'amertume."
          }
        ]
      },
      "feelCue": "Mélanger le bouillon et tenir votre main près de la vapeur — vous devriez sentir le piquant de chili volatiles dans votre nez et sur la peau douce de votre poignet. Cette netteté dans l'air autour de la casserole reflète la chaleur que vous voulez à l'arrière de la gorge dans le bol fini."
    },
    {
      "nodeId": "step_3",
      "action": "Pochette",
      "inputs": [
        "seasoned_stock",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_12"
      ],
      "outputState": "finished_tom_yum_broth",
      "instructions": "Porter le bouillon à ébullition complète. Ajouter les crevettes et cuire pendant 2 à 3 minutes exactement, en observant de près — les crevettes dans un bouillon chaud cuire beaucoup plus vite que prévu. Retirer la casserole du feu au moment où les crevettes sont roses et enroulées dans un C détendu. La chaux surtout ne doit pas être cuite plus loin ou sa note supérieure lumineuse devient plate et amère. Ajoutez maintenant le sucre en option si le bouillon doit être arrondi. Goût pour l'équilibre : le tom yum doit être amer et chaud avec une colonne vertébrale salée profonde et une douceur légère à la fin. Corriger si nécessaire. Déposer dans des bols, laissant les morceaux aromatiques dans le bol (ils sont décoratifs et continuent à arôme, mais ne sont pas consommés), et disperser la coriandre sur la surface.",
      "visualCue": {
        "primaryTarget": "Crevettes roses-oranges vivides frisé à un C doux dans un bouillon ambre, avec des feuilles de coriandre verte à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crevettes sont toujours translucides gris-bleu et les corps sont droits, non recourbés. Le bouillon goûte des aromatiques sans la fondation des fruits de mer.",
            "action": "Retour à ébullition pendant 1 minute. Finition crevette très rapidement."
          },
          {
            "state": "Perfect",
            "description": "Les crevettes sont rose vif, frisé à un doux C avec un soupçon de translucidité au centre. Le bouillon est ambré et aromatique, assaisonné correctement — aigre, salé, chaud et légèrement sucré.",
            "action": "Servir immédiatement. Ne pas réchauffer."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes sont serrées en O, fermes et caoutchouteuses. Le corps a perdu son éclat brillant et semble mat et sec.",
            "action": "Servir immédiatement malgré la texture. Les crevettes surcuites dans un bouillon assaisonné sont toujours agréables: le bouillon porte le plat."
          }
        ]
      },
      "feelCue": "Le bol fini de tom yum devrait vous frapper avec chaleur avant même de le goûter — la vapeur de la surface transporte le chili volatiles qui piquent les yeux et le nez à partir de 20 centimètres. Cette piqûre est le plat qui tient sa promesse."
    }
  ]
};
