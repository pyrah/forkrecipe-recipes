export default {
  "repoId": "master_mexican_shrimp_aguachile_001",
  "parentRepoId": null,
  "slug": "shrimp-aguachile",
  "author": "ForkRecipe Kitchen",
  "title": "Crevettes Aguachile",
  "description": "La réponse de Sinaloa au ceviche — les crevettes crues au beurre frit et guéri pendant quelques minutes dans une explosion de serrano mélangé, de citron vert et d'eau de concombre si vive et verte et choquante qu'elle se qualifie à peine de cuisson, mais c'est inoubliable.",
  "cuisine": "Mexicain",
  "culture": "Sinaloan",
  "category": "seafood",
  "tags": [
    "crevettes",
    "cru",
    "aguachile",
    "citron vert",
    "Serrano",
    "Mexique",
    "Ceviche",
    "Sinaloan"
  ],
  "difficulty": 1,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "parts",
  "stars": 1430,
  "forks": 118,
  "contributors": 31,
  "license": "CC-BY-SA",
  "createdAt": "2025-01-18",
  "updatedAt": "2025-05-29",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 5,
    "bitter": 1,
    "umami": 3,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Grandes crevettes crues (peautées, dépeintes, beurrées)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "pétoncles, coupés en tranches"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Jus de citron vert frais (environ 8 citron vert)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Concombre anglais (la moitié pour l'aguachile, la moitié pour la garniture)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Chiles de serrano frais (tiges enlevées)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "jalapeño pour une chaleur plus légère"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon blanc (finement coupé en demi-lunes)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Coriandre fraîche (feuilles et tiges minces)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trancher",
      "inputs": [
        "ing_01"
      ],
      "outputState": "prepared_shrimp",
      "instructions": "À l'aide d'un couteau tranchant, papillonz chaque crevette en coupant le long du dos (où la veine a couru) presque tout le chemin à travers, puis appuyez dessus ouvrir plat. Cela double la surface exposée au remède et permet au jus de citron vert de pénétrer plus rapidement et uniformément. Disposer les crevettes au beurre en une seule couche dans un plat froid et peu profond. Réfrigérer pendant que vous préparez l'aguachile.",
      "visualCue": {
        "primaryTarget": "Les crevettes sont plates et symétriques, ouvertes comme un livre. La chair est pâle, semi-translucide et uniforme — pas de taches foncées ni de zones opaques.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crevettes sont entières ou seulement partiellement coupées. Le remède ne pénétrera pas uniformément et le temps de guérison double.",
            "action": "Continuez à papillonner. La coupe doit faire 80 % du chemin."
          },
          {
            "state": "Perfect",
            "description": "De façon uniforme plat, crevettes entièrement ouvertes d'une épaisseur identique. Ils sont à plat naturellement.",
            "action": "Réfrigérer tout en faisant l'aguachile."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes ont été coupées jusqu'au bout, se séparant en deux morceaux.",
            "action": "Procéder — deux pièces ne sont pas visuellement idéales, mais fonctionnent de façon identique pour guérir."
          }
        ]
      },
      "feelCue": "Les crevettes crues au beurre frit devraient se sentir froides et souples dans vos mains, fermes mais qui donnent, avec un don naturel, pas raides. Toute odeur d'ammoniaque signifie qu'ils sont dépassés leur prime; ne pas procéder."
    },
    {
      "nodeId": "step_2",
      "action": "Mixer",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_06"
      ],
      "outputState": "aguachile_verde",
      "instructions": "Mélanger la moitié du concombre (peeled et grossièrement haché), tout le jus de lime, le serranos et le sel dans un mélangeur pendant 60 secondes jusqu'à ce que le vert soit complètement lisse et vif. Plongez dans un tamis fin, pressez les solides pour extraire le maximum de liquide. Jetez les solides. L'aguachile doit être intensément vert, extrêmement acide et extrêmement chaud. Goûtez - le — il devrait se sentir agressif. Régler la chaleur en ajoutant ou en enlevant les graines de serrano.",
      "visualCue": {
        "primaryTarget": "Un liquide vert vif et translucide, mince mais non aqueux. La couleur doit être le vert vif d'un feu de circulation, pas boueux ou pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est vert pâle ou jaune verdâtre. L'arôme est surtout le jus de lime avec peu de chaleur de chile ou de fraîcheur de concombre.",
            "action": "Mélanger plus longtemps, ou ajouter plus de serrano et de concombre frais pour la couleur et la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Vivant, vert électrique, translucide et intensément aromatisé. Goûte comme le feu et le citron vert en mesure égale.",
            "action": "Verser sur les crevettes immédiatement."
          },
          {
            "state": "Overdone",
            "description": "L'aguachile est devenu sombre et oxydé par une chaleur de mélange prolongée. La couleur est olive terne.",
            "action": "Soucher et utiliser immédiatement. Garder le froid pour minimiser l'oxydation."
          }
        ]
      },
      "feelCue": "Lorsque vous goûtez l'aguachile, vous devez sentir la chaleur du serrano dans votre gorge en 3 secondes et une poussée de salivation du citron vert — les deux simultanément. Si une seule, ajustez."
    },
    {
      "nodeId": "step_3",
      "action": "Faire mariner",
      "inputs": [
        "prepared_shrimp",
        "aguachile_verde"
      ],
      "outputState": "cured_shrimp",
      "instructions": "Verser la verde aguachile sur les crevettes, en veillant à ce que chaque pièce soit entièrement submergée. La crevette devrait guérir pendant exactement 7-10 minutes — le jus de lime dénature les protéines de la même manière que la chaleur, faisant passer la chair de gris translucide à blanc-rose opaque. Ne pas trop guérir. A 10 minutes, les crevettes devraient être blanches-roses à l'extérieur, mais encore légèrement translucides au centre, c'est la texture parfaite. Un durcissement plus long produit des crevettes caoutchouteuses et surcuites.",
      "visualCue": {
        "primaryTarget": "Les crevettes sont devenues rose-blanches des bords vers l'intérieur. Les surfaces exposées sont entièrement opaques mais le centre conserve une faible translucidité.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crevettes sont encore généralement grises et translucides. La texture est trop brute et glissante.",
            "action": "Cure encore 3-4 minutes. L'acide de citron vert doit dénaturer la protéine extérieure."
          },
          {
            "state": "Perfect",
            "description": "Extérieur rose-blanc sortant vers un centre faible translucide. La chair est ferme, mais elle donne, comme une crevette à cuisson moyenne.",
            "action": "Retirer immédiatement de l'aguachile et arranger sur les plaques."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes sont uniformément blanches opaques et ont commencé à se contracter et à se boucler étroitement. La texture est caoutchouteuse.",
            "action": "Servir immédiatement. La texture ne s'améliorera pas, mais la saveur est encore bonne."
          }
        ]
      },
      "feelCue": "Une crevette aguachile bien guérie devrait se sentir ferme, mais pas généreuse quand vous la ramassez — le printemps est l'ennemi. Si c'est comme une gomme en caoutchouc, elle est surchargée."
    },
    {
      "nodeId": "step_4",
      "action": "Assembler",
      "inputs": [
        "cured_shrimp",
        "ing_05",
        "ing_07",
        "ing_03"
      ],
      "outputState": "finished_aguachile",
      "instructions": "Disposer les crevettes sur une assiette plate et froide. Drapez les demi-lunes d'oignon coupées finement sur les crevettes. Coucher les tranches de concombre autour de l'assiette. Spoon 2-3 cuillères à soupe de la verde aguachile sur tout. Des feuilles de coriandre. Servir immédiatement avec des tostadas ou des croustilles de tortilla épaisses sur le côté. Le plat doit être froid, lumineux et servi instantanément — l'aguachile n'attend personne.",
      "visualCue": {
        "primaryTarget": "Une assiette de bijou : crevettes roses, aguachile vert, oignon blanc, concombre vert, et coriandre vive contre un plat blanc froid. Tout brille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le revêtement est précipité et les éléments sont empilés plutôt que disposés. La piscine d'aguachile est trop profonde.",
            "action": "Étendre les crevettes en une seule couche. Le plat devrait être plat: l'aguachile est le théâtre."
          },
          {
            "state": "Perfect",
            "description": "Crevettes individuelles visibles, légumes habilement placés, aguachile baigné autour plutôt que sur. Les couleurs vives contrastent de façon spectaculaire.",
            "action": "Servir dans les 2 minutes."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes se sont assises dans l'aguachile sur l'assiette pendant plus de 5 minutes et ont continué à cuire à partir de l'acide.",
            "action": "Servir immédiatement. Instruisez les clients à manger sans délai."
          }
        ]
      },
      "feelCue": "L'assiette finie sent le citron vert humide, le chile vert frais et la douceur de l'océan des crevettes — propre, froide et dangereusement vivante."
    }
  ]
};
