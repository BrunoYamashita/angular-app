# Store

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3. This project was zero configured on http://168.62.165.65/.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deploying

You can configure a [Nginx](https://www.digitalocean.com/community/tutorials/como-instalar-o-nginx-no-ubuntu-16-04-pt) to [serve](https://hub.docker.com/_/nginx/) your /dist/store copying the files insed /store to /var/www/store in a linux.

```
cd angular-app
ng build --prod
mv dist /var/www/
```

On /etc/nginx/sites-available/default

```
root /var/www/store or /var/www/dist/store
```

Run or restart
```
sudo systemctl restart nginx 

sudo service nginx restart 

sudo systemctl start nginx 

sudo service nginx start 
```

You can use IIS, Apache and etc. too, ng build --prod generate static files for serving.

## Observations

Basically used every best practice that i could learn in a couple days of angular 6. The only two packages I used that is not in the original package its bootstrap and fonts awesome.
I diveded every page, Book and Clients in sub components to better data management, this way we can reuse if needed.
Components that can be used on every module or component were difined with @Injectable({ providedIn: 'root' });