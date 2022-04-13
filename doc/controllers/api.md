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
"{\n    \"data\": {\n        \"AWN_immat\": \"aa123bc\",\n        \"AWN_VIN\": \"VF1DZ0N0641118804\",\n        \"AWN_marque\": \"RENAULT\",\n        \"AWN_modele\": \"MEGANE\",\n        \"AWN_modele_etude\": \"MEGANEIII\",\n        \"AWN_version\": \"1.9 DCI\",\n        \"AWN_type_mine\": \"MRE5531A0421\",\n        \"AWN_k_type\": \"31164\",\n        \"AWN_couleur\": \"NOIR\",\n        \"AWN_Hauteur\": \"142\",\n        \"AWN_largeur\": \"180\",\n        \"AWN_longueur\": \"430\",\n        \"AWN_marque_carrosserie\": \"RENAULT\",\n        \"AWN_poids_vide\": \"1310\",\n        \"AWN_puissance_chevaux\": \"131\",\n        \"AWN_puissance_fiscale\": \"7\",\n        \"AWN_carrosserie\": \"COUPE\",\n        \"AWN_carrosserie_carte_grise\": \"CI\",\n        \"AWN_genre\": \"VP\",\n        \"AWN_genre_carte_grise\": \"VP\",\n        \"AWN_energie\": \"GAZOLE\",\n        \"AWN_energie_code\": \"GAZOLE\",\n        \"AWN_emission_co_2\": \"134\",\n        \"AWN_date_mise_en_circulation\": \"18-04-2009\",\n        \"AWN_numero_de_serie\": \"41118804\",\n        \"AWN_nbr_cylindres\": \"4\",\n        \"AWN_nbr_cylindre_energie\": \"1870\",\n        \"AWN_genre_code\": \"VP\",\n        \"AWN_collection\": \"non\",\n        \"AWN_puissance_KW\": \"96\",\n        \"AWN_code_moteur\": \"F9Q_872\",\n        \"AWN_nbr_de_places\": \"5\",\n        \"AWN_nbr_soupapes\": \"2\",\n        \"AWN_nbr_volume\": \"2\",\n        \"AWN_nbr_portes\": \"3\",\n        \"AWN_nbr_vitesses\": \"6\",\n        \"AWN_type_boite_vites\": \"MECANIQUE\",\n        \"AWN_turbo_Comprressor\": \"TURBO\",\n        \"AWN_depollution\": \"NON\",\n        \"AWN_empattement\": \"264\",\n        \"AWN_consommation_urbaine\": \"6.2\",\n        \"AWN_consommation_ex_urbaine\": \"4.4\",\n        \"AWN_consommation_mixte\": \"5.1\",\n        \"AWN_mode_injection\": \"COMMON RAIL\",\n        \"AWN_poids_total_roulant\": \"1807\",\n        \"AWN_prix\": \"26175\",\n        \"AWN_propulsion\": \"26175\",\n        \"AWN_s\": \"0\",\n        \"AWN_cached\": \"1\"\n    }\n}"
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | quota expire | `ApiException` |
| 401 | token invalid | `ApiException` |

