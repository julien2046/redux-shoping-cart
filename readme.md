*** ENGLISH FOLLOWS ***


# Test Technique pour Développeur Frontend GOLO

## Prérequis

* Node 8.x
* Connaissances de React/Redux

## Critères d'acceptation

* En arrivant sur la page principale, l'utilisateur doit voir un panier d'achat avec des produits (voir `wireframe.png`).
* L'utilisateur peut supprimer ou changer la quantité des produits (doit utiliser l'API locale fournie).
* Le panier est utilisable sur appareils mobiles.

## Instructions

* N'ajoutez aucune librairie. Utilisez seulement ce qui est disponible dans `package.json`.
* Travailler seulement dans le dossier suivant: `src/app/project`

## Livraison

* SVP remplir le fichier `src/app/project/report.txt` puis zipper le dossier de travail (`src/app/project`).

## Aide

* Start project with `npm run dev`
* Les mises à jour au panier sont faites à travers une API locale servie par une application express (voir documentation des endpoints).
* Un client HTTP est disponible dans `src/app/io/http.js`. Pré-configuré pour la communication JSON.

## Documentation de l'API

**NOTE:** Tous les endpoints simulent une latence d'environ 1s.

### `GET /api/v1/cart`

Retourne un panier complet. Utiliser pour afficher le panier dans son état initial.

Structure:
```javascript
{
  items: [
    {
      id: 'bb2d9254c8c6b0be',
      name: 'Strawberries',
      image: 'strawberries.jpg',
      price: 199,
      quantity: 1,
    },
    ...
  ],
  total: 199,
}
```

### `POST /api/v1/cart`

Retourne un nouveau panier basé sur un payload minimal ("snapshot").
La structure de retour est la même que mentionné dans la documentation de GET.

Structure de "snapshot":
```javascript
[
  {
    id: 'bb2d9254c8c6b0be',
    quantity: 3,
  },
  ...
]
```


----------------


# GOLO Frontend Web Developer Technical Test

## Requirements

* Node 8.x
* Knowledge of React/Redux

## Acceptance criterias

* Upon loading main view, a user should able to see a pre-filled shopping cart (see `wireframe.png`).
* Each item in the cart can be either deleted or updated to change the quantity (must use the provided local API).
* The cart is mobile-friendly.

## Instructions

* Do not add any library, library or package. Only use what is provided in `package.json`.
* Only work in the following folder: `src/app/project`

## Delivery

* Please fill up the file `src/app/project/report.txt` and provide a zip of work folder (`src/app/project`).

## Help & Tips

* Start project with `npm run dev`
* Cart updates are performed using a local API served by a small express app (see endpoint documentation).
* HTTP client is found in `src/app/io/http.js`. Pre-configured to handle JSON communication.

## API documentation

**NOTE:** All endpoints simulate a latency time of around 1s.

### `GET /api/v1/cart`

Obtain a complete cart. Use this to display the initial cart state.

Payload structure:
```javascript
{
  items: [
    {
      id: 'bb2d9254c8c6b0be',
      name: 'Strawberries',
      image: 'strawberries.jpg',
      price: 199,
      quantity: 1,
    },
    ...
  ],
  total: 199,
}
```

### `POST /api/v1/cart`

Returns a new complete cart structure (see GET endpoint) based on a lightweight "snapshot" payload.

Snapshot structure:
```javascript
[
  {
    id: 'bb2d9254c8c6b0be',
    quantity: 3,
  },
  ...
]
```
