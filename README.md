# Task App

## Installation

Requires the latest version of :

- docker-ce
- docker-compose

Just clone this repository and install its dependencies:

```bash
git clone git@github.com:qroques/knp-react-app.git todoApp
cd todoApp
make .env install-deps
```

Then, run it with

```bash
make start
```

and browse [http://localhost:3000/](http://localhost:3000/).

## Features

- [ ] As a regular user, when I click on "Add another card", then a new empty card should be created and focused so I can enter the title of the card
- [ ] As a regular user, given I've clicked on "Add another card" and written some text in it, when I press "return", then the new card should be created
- [ ] As a regular user, given I've clicked on "Add another card" and I pressed the "escape" key, then the new card should be removed
- [ ] As a regular user, when I click on the little remove button over an existing card, then I should see a confirmation message
- [ ] As a regular user, given I've clicked on the remove button over an existing card and I clicked on "ok", then the card should be removed
