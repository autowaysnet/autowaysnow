# API

```php
$aPIController = $client->getAPIController();
```

## Class Name

`APIController`


# API SIV

recherche des plaques d’immatriculation française qui remontée des informations de plus de 50 champs concernant le véhicule, l’API est destinée pour les sites web, applications web de métier et applications mobile.

```php
function aPISIV(string $plaque, string $token): string
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `plaque` | `string` | Query, Required | Plaque d'immatriculation française |
| `token` | `string` | Query, Required | Votre clé token vous sera livrée par e-mail après l'inscription. |

## Response Type

`string`

## Example Usage

```php
$plaque = 'FH034DD';
$token = '92cbc2ae3c8a30028d98b10872dd4c3a';

$result = $aPIController->aPISIV($plaque, $token);
```

## Example Response

```
{
    "data": {
        "AWN_immat": "fh034dd",
        "AWN_VIN": "VF1R9800962986572",
        "AWN_marque": "RENAULT",
        "AWN_modele": "CLIO",
        "AWN_modele_etude": "CLIO IV",
        "AWN_version": "DCI 90",
        "AWN_type_mine": "M10RENVP603P733",
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
        "AWN_type_boite_vites": "MECANIQUE",
        "AWN_turbo_Comprressor": "TURBO",
        "AWN_depollution": "OUI",
        "AWN_empattement": "259",
        "AWN_consommation_urbaine": "0.0",
        "AWN_consommation_ex_urbaine": "0.0",
        "AWN_consommation_mixte": "0.0",
        "AWN_mode_injection": "AUTR. CARBURATIONS",
        "AWN_poids_total_roulant": "1700",
        "AWN_prix": "20804",
        "AWN_propulsion": "20804",
        "AWN_s": "0",
        "AWN_cached": "1"
    }
}

```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | quota expire | `ApiException` |
| 401 | token invalid | `ApiException` |

