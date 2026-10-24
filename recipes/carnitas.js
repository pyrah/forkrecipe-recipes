export default {
  "repoId": "master_mexican_carnitas_001",
  "parentRepoId": null,
  "slug": "carnitas",
  "author": "ForkRecipe Kitchen",
  "title": "Carnitas",
  "description": "Le cadeau de Michoacán au taco : l'épaule de porc braisée lentement dans son propre rendu gras avec l'orange, la baie, et un murmure de cannelle, puis frit dans cette même graisse jusqu'à ce que les bords se brisent et le centre reste fondant tendre. Crispy dehors, juteux à l'intérieur — la contradiction éternelle des carnitas.",
  "cuisine": "Mexicain",
  "culture": "Michoacán",
  "category": "proteins",
  "tags": [
    "Carnites",
    "Mexique",
    "porc",
    "confit",
    "Taco",
    "Michoacan"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "3 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Épaule de porc (botton, coupée en morceaux de 5 cm)",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "épaule de pique-nique de porc"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Lard (manteca)",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "gras de porc fondu",
        "huile neutre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Citrus",
      "name": "Orange (chute, jus et coquilles épuisées)",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "1⁄2 orange + 1 citron vert"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon blanc (quartier)",
      "ratioValue": 0.5,
      "defaultUnit": "whole",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Ail (Girofles entiers, cassés)",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 2,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Stick de cannelle mexicaine (canelle)",
      "ratioValue": 1,
      "defaultUnit": "small piece",
      "substitutions": [
        "Ceylon cannelle"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 18,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Lait condensé sucré (facultatif, style Michoacán)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "1 c. à thé lait entier",
        "omit"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Assaisonner",
      "inputs": [
        "ing_01",
        "ing_08"
      ],
      "outputState": "salted_pork",
      "instructions": "Mâcher les morceaux de porc bien sécher et mélanger avec le sel jusqu'à ce que chaque surface soit enrobée. Laissez-les s'asseoir à température ambiante pendant 15-20 minutes pendant que vous assemblez les aromatiques. La viande sèche, bien salée, est le fondement: l'humidité de surface s'écoule au lieu de brunir et de diluer le gras de rendu.",
      "visualCue": {
        "primaryTarget": "Les morceaux de porc semblent mats et secs à la surface, avec un léger éclat d'humidité salée qui commence à être perlée. Chaque pièce est à peu près de la même taille afin qu'ils cuisinent uniformément.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les surfaces sont visiblement humides, lisses avec purge. Le sel glisse plutôt que de s'accrocher.",
            "action": "Bloquez encore avec des serviettes en papier et donnez-lui quelques minutes de plus. Le porc mouillé ne sera jamais croquant."
          },
          {
            "state": "Perfect",
            "description": "Tacky mais pas humide, sel uniformément distribué et dissolution dans la surface. Des pièces de taille uniforme.",
            "action": "Déplacez-vous dans le pot et commencez le brasage."
          },
          {
            "state": "Overdone",
            "description": "Les morceaux se sont assis pendant plus d'une heure et ont l'air gris et déshydraté; liquide mis en réserve dans le bol.",
            "action": "Égoutter le liquide, faire sécher et procéder — le remède est allé légèrement loin, mais le résultat est bon."
          }
        ]
      },
      "feelCue": "La viande doit se sentir collante et grippante entre vos doigts, pas glissante. Une faible odeur de pork propre, rien d'amer."
    },
    {
      "nodeId": "step_2",
      "action": "Confit",
      "inputs": [
        "salted_pork",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "braised_pork",
      "instructions": "Nettoyez le porc en une seule couche dans une grande casserole ou un four hollandais. Ajouter le saindoux, presser le jus d'orange et déposer dans les coquilles épuisées, puis ajouter l'oignon, l'ail, la baie et la cannelle. Ajouter juste assez d'eau pour atteindre à peine le sommet de la viande. Portez à un doux mijoter, puis déposez à la chaleur la plus basse qui garde les bulles paresseuses montant. Cuire à découvert de 1,5 à 2 heures, sans gêne, jusqu'à ce que l'eau ait cuit et que le porc soit fourche-tendre, maintenant submergé dans la graisse rendue claire.",
      "visualCue": {
        "primaryTarget": "Les bulles sont passées du laminage et de l'eau à des bulles lentes, paresseuses et limpides autour de la viande. Le liquide est maintenant de la graisse translucide, pas du bouillon nuageux, et une fourchette coule dans un morceau sans résistance.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est encore nuageux et aqueux, bouillonnant vigoureusement. Une fourche rencontre une résistance printanière et la viande tient bien sa forme.",
            "action": "Continuez à mijoter. L'eau doit entièrement cuire avant que le porc puisse frire — ne vous précipitez à feu vif ou elle va durcir."
          },
          {
            "state": "Perfect",
            "description": "Graisse dorée claire, bulles huileuses douces, la cuisine sent l'orange et le porc. Une fourche glisse dans et le morceau donne, mais tient toujours ensemble.",
            "action": "Passez à l'ail — mettez la chaleur."
          },
          {
            "state": "Overdone",
            "description": "La viande s'est effondrée en morceaux dans la graisse et commence à brunir inégalement tout en restant humide à l'intérieur de la pile.",
            "action": "Soulevez les morceaux doucement et déplacez-vous droit à la friture en lots; ils vont se raffermir et croquant."
          }
        ]
      },
      "feelCue": "Dès le début, vous entendez une mijotée aqueuse active; tandis que l'eau s'en va, le son se déplace vers la popule de graisse de friture plus calme et plus profonde. Ce changement de son est votre minuterie."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "braised_pork",
        "ing_09"
      ],
      "outputState": "crisped_carnitas",
      "instructions": "Une fois que l'eau est partie et que le porc est dans la graisse claire, augmenter le feu à moyen-élevé. Si on l'utilise, on s'abreuve maintenant dans le lait condensé sucré — la trace de sucre et de lait augmente le brunissement de la façon de Michoacán. Laissez les morceaux frire dans leur graisse, en les tournant seulement toutes les quelques minutes, jusqu'à ce que profondément doré et croquant aux bords, 8-12 minutes. Résistez au surmenage; le temps de contact avec le pot chaud est ce qui construit la croûte.",
      "visualCue": {
        "primaryTarget": "Les bords et les points élevés de chaque morceau sont brun acajou profond et visiblement croustillants, tandis que la viande brille encore avec la graisse. Certaines pièces se sont brisées en morceaux de croustilles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande est bronzée, molle et molle, sans croûte. Il a l'air bouilli plutôt que frit.",
            "action": "Levez la chaleur et arrêtez de remuer — laissez reposer les morceaux contre le métal chaud à la couleur avant de tourner."
          },
          {
            "state": "Perfect",
            "description": "Croûte brune brûlée sur les bords exposés, tendre et juteuse à l'intérieur. Craquant sonore, arôme torréfié irrésistible.",
            "action": "Soulevez avec une cuillère à fente, égouttant la graisse dans le pot."
          },
          {
            "state": "Overdone",
            "description": "Les morceaux sont uniformément sombres, durs tout au long du chemin, et l'arôme de baie/cinnamon est devenu acride et amer.",
            "action": "Tirer immédiatement et hacher fin — mélangés en morceaux juteux, même les carnitas foncés gagnent leur place dans un taco."
          }
        ]
      },
      "feelCue": "Une pièce finie doit sembler croustillante lorsqu'elle est tapée avec la cuillère, mais donner facilement en appuyant. La graisse doit sentir la noix et le caramel doux, jamais brûlé ou fumé."
    },
    {
      "nodeId": "step_4",
      "action": "Repos & déchiqueté",
      "inputs": [
        "crisped_carnitas"
      ],
      "outputState": "finished_carnitas",
      "instructions": "Transférer les carnitas dans une planche et les laisser reposer 5 minutes pour que les jus s'installent. Hacher ou tirer à peu près dans un mélange d'ardoises croustillantes et de lambeaux tendres, cuillerer sur un peu de gras chaud rendu pour les garder brillants. Goûtez et ajoutez une pincée plus de sel et une pression de citron vert fraîche si elle a besoin d'éclaircir. Servir chaud sur les tortillas de maïs chaudes avec l'oignon, la coriandre et la salsa.",
      "visualCue": {
        "primaryTarget": "Un enchevêtrement de textures scintillantes — bords brunis crépités tissés à travers des lambeaux doux juteux, liquéqués mais pas gras, tenant ensemble lorsqu'ils sont écorcés sur une tortilla.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La plupart des lambeaux doux avec peu de morceaux croustillants; semble pâle et un peu humide, goût plat.",
            "action": "Retour à la graisse chaude pendant 2-3 minutes pour croquer plus loin, et vérifier le sel."
          },
          {
            "state": "Perfect",
            "description": "Mélange craquant équilibré, brillant avec de la graisse rendue, salé avec une note de retour de citrus doux et une douce chaleur de la cannela.",
            "action": "Piler sur des tortillas chaudes et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Sécher et dur dans l'ensemble, le gras absorbé, s'écroulant à la poussière plutôt que de déchiqueter.",
            "action": "Mélanger avec une cuillère de gras chaud et un jet de jus d'orange pour raviver un peu d'humidité avant de servir."
          }
        ]
      },
      "feelCue": "Il doit se sentir riche mais propre en bouche, la graisse fond au lieu de la couvrir. Chaque morsure donne à la fois l'éclat d'un bord croustillant et le don d'un centre juteux — ce contraste est tout le point."
    }
  ]
};
