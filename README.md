# EmplojeeImmunizationFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.18.

## Development server

Run `npm install` for install all dependencies in this project. /

Run `ng serve --c=dev` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Install the Laravel project, you can find that in this link `https://github.com/elmer2210/employee-immunize-backend`, you have intall the composer 
dependency in your pc, then download the project, go to the project directory and run this  command: `composer install`, and for run the server write
this in your console `php artisan serve`

In the same laravel project do the database migration and seeder with `php artisan migrate:refresh --seed`

## Data Base Conecction
The settings are for a postgress data base, in the .env file, on the laravel project, you have to change the DB_USERNAME && 
DB_PASSWORD for your credential login postgress. 

## Rutes

Access to `/adminDashboard` route for that you can see the admin screen and you can do test of its functions.

## User
You can loguin whith this credentiales `username: admin11 and passWord: password`
