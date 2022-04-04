# AWN (API SIV) 

Grâce à notre service web, votre site web ou applications permettront d’identifier les véhicules par l’intermédiaire de la plaque d’immatriculation et qui remontée à des informations de plus de 50 champs concernant le véhicule. La plupart des boutiques en lignes de pièces détachées, cartes grises identifient les véhicules de leurs clients grâce au numéro de plaque d’immatriculation seulement, cela permet d’éviter les erreurs d’identification, l’insatisfaction client et les retours de marchandise.

## Les bonnes raisons d’adopter l'API SIV

- Identifiez et associez les informations techniques d’un véhicule en temps réel.
- Un outil « clé en main » pour faciliter et améliorez votre qualité de service et faciliter l’acte d’achat de vos clients.
- Augmentez votre productivité en fournissant les bonnes informations dans un délai immédiat.
- Avoir une plateforme dédiée pour consulter les véhicules sans avoir besoin d’une API.
- Disposez, si nécessaire, d’un service d’assistance du lundi au vendredi, pour vous guider dans l’utilisation du service SIV-API.
- Un gage de fiabilité pour assurer la véracité des informations délivrées sur un véhicule.
- Plus de 30 millions de véhicules à deux roues ont été recensés et directement identifiables.
- Plus de 50 champs de données sont disponibles à partir d’une plaque d’immatriculation française SIV.

## Paramètres API

 - **Plaque :** La plaque d’immatriculation du client en format, ‘FH-034-DD' ou 'FH034DD'.
 - **Token :** Votre clé token vous sera livrée par e-mail après l'inscription.

> Token de demo : **92cbc2ae3c8a30028d98b10872dd4c3a**

## Requête Javascript

    var plaque = 'FH-034-DD';
    var token = '92cbc2ae3c8a30028d98b10872dd4c3a';
    
    fetch (`https://app.auto-ways.net/autowayapi?plaque=${plaque}&token=${token}`)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));

## Requête sur  le navigateur :

[https://app.auto-ways.net/autowayapi?plaque=**FH-034-DD**&token=**92cbc2ae3c8a30028d98b10872dd4c3a**](https://app.auto-ways.net/autowayapi?plaque=FH-034-DD&token=92cbc2ae3c8a30028d98b10872dd4c3a)

> N'oubliez pas de changer votre **plaque d'immatriculation** et votre **token**

## Insomnia Requête exemple 

![API SIV insomnia ](https://i.ibb.co/TRsgVf2/insomnia-HTTP-Request.png)
## Réponse API pour la plaque FH-034-DD :

    {
    "data": {
        "AWN_immat": "fh034dd",
        "AWN_VIN": "VF1R9800962986572",
        "AWN_marque": "RENAULT",
        "AWN_modele": "CLIO",
        "AWN_modele_etude": "CLIO IV",
        "AWN_version": "DCI 90",
        "AWN_type": "M10RENVP603P733",
        "AWN_couleur": "GRIS",
        "AWN_Hauteur": "145",
        "AWN_largeur": "173",
        "AWN_longueur": "406",
        "AWN_marque_carrosserie": "RENAULT",
        "AWN_poids_vide": "1160",
        "AWN_puissance_chevaux": "90",
        "AWN_puissance_fiscale": "5",
        "AWN_carrosserie": "BERLINE",
        "AWN_carrosserie_carte_grise": "CI",
        "AWN_genre": "VP",
        "AWN_genre_carte_grise": "VP",
        "AWN_energie": "GAZOLE",
        "AWN_energie_code": "GAZOLE",
        "AWN_emission_co_2": "104",
        "AWN_date_mise_en_circulation": "20-06-2019",
        "AWN_numero_de_serie": "62986572",
        "AWN_nbr_cylindres": "4",
        "AWN_nbr_cylindre_energie": "1461",
        "AWN_genre_code": "VP",
        "AWN_collection": "non",
        "AWN_puissance_KW": "66",
        "AWN_code_moteur": "K9K_638",
        "AWN_nbr_de_places": "5",
        "AWN_nbr_soupapes": "0",
        "AWN_nbr_volume": "2",
        "AWN_nbr_portes": "5",
        "AWN_nbr_vitesses": "5",
        "AWN_Type_boite_vites": "MECANIQUE",
        "AWN_Turbo_Comprressor": "TURBO",
        "AWN_depollution": "OUI",
        "AWN_empattement": "259",
        "AWN_consommation_urbaine": "0.0",
        "AWN_consommation_ex_urbaine": "0.0",
        "AWN_consommation_mixte": "0.0",
        "AWN_mode_injection": "AUTR. CARBURATIONS",
        "AWN_poids_total_roulant": "1700",
        "AWN_prix": "20804",
        "AWN_propulsion": "20804"
	    }
    }
  
## Test Live sur la plateforme  

  
Vous pouvez tester notre API gratuitement sans avoir coder sur la plateforme AUTOWAYSNET en utilisant un compte démo, vous pouvez utiliser les identifiants ci-dessous.

- URL : **[www.app.auto-ways.net](https://app.auto-ways.net/)**
- E-mail : **test@auto-ways.net**
- Mot de passe : **pass@test**
- 
![autowaysnow login page](https://i.ibb.co/C29fY9y/autowaysnow-login-page.png) 

![autowaysnow request page](https://i.ibb.co/xXLSZ8k/Screen-Shot-2022-04-04-at-7-57-54-PM.png) 

> Parfois, nous désactivons ce compte pour des raisons de sécurité, si ce compte est désactivé, contactez-nous pour une démo.

## Abonnez-vous à l'API

Pour souscrire à notre API de nombreuses solutions et forfaits sont disponibles contactez nous par mail ou page contact pour plus d'informations.

## Contact

Pour plus d'informations, n'hésitez pas à nous contacter  sur :
 - [contact@auto-ways.net](mailto:contact.auto-ways.net)
 - [Auto-ways.net](Auto-ways.net)
