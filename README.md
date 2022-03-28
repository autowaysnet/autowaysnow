# Autoways Now (API SIV) Documentation

Grâce à notre service Web, votre site Internet ou vos applications permettront d’identifier les véhicules deux roues par l’intermédiaire de la plaque d’immatriculation. La plupart des boutiques en lignes de pièces détachées identifient les véhicules de leurs clients grâce au numéro de plaque d’immatriculation, cela permet d’éviter les erreurs d’identification, l’insatisfaction client et les retours de marchandise.


# Paramètres API

 - **Plaque :** La plaque d’immatriculation du client en format, ‘FH-034-DD' ou 'FH034DD'.
-   **Token :** Votre clé token vous sera livrée par e-mail après l'inscription.

## Requête Javascript

 > var plaque = 'FH-034-DD';**
> var token = '3366fb9a97dc1aef3b094deea8dcda62';**
> 
> fetch (`https://app.auto-ways.net/autowayapi?plaque=${plaque}&token=${token}`)
> 
> .then((response) => response.json())
> .then((result) => console.log(result))
> .catch((error) => console.log('error', error));

## Requête sur  le navigateur :

[https://app.auto-ways.net/autowayapi?plaque=**FH-034-DD**&token=**92cbc2ae3c8a30028d98b10872dd4c3a**](https://app.auto-ways.net/autowayapi?plaque=FH-034-DD&token=92cbc2ae3c8a30028d98b10872dd4c3a)

> N'oubliez pas de changer votre **plaque d'immatriculation** et votre **token**

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
    

## Contact

Pour plus d'informations, n'hésitez pas à nous contacter  sur :

 - [contact@auto-ways.net](mailto:contact.auto-ways.net)
 - [Auto-ways.net](Auto-ways.net)
