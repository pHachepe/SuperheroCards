# SuperheroCards

## See it in: https://super-hero-cards.vercel.app

# Pendiente:

1. Test
2. Constantes y números mágicos
3. Mejorar responsividad
4. Terminar de componetizar filtro, etc.
5. Hacer README.md

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

# GitHub de la API:

https://github.com/pHachepe/API-SuperHeroes

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# SuperheroCards - Angular

npx @angular/cli@16 new SuperheroCards --routing=true --style=css

cd SuperheroCards/

ng generate module core
ng generate interceptor core/api

ng generate module shared
ng generate component shared/components/loader --export

ng generate module modules/superheroes --routing=true
ng generate component modules/superheroes/components/list-superheroes
ng generate component modules/superheroes/components/edit-superhero
ng generate component modules/superheroes/components/create-superhero
ng generate class modules/superheroes/models/superhero --type=model
ng generate service modules/superheroes/services/superhero

ng generate environments
