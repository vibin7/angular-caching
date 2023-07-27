# AngularCaching

### Cache API calls in using Angular Interceptor


Creating web applications can pose challenges, and one of the worst offenders is the continuous API calls that occur when a component is initialized. This can prove to be a major source of pain and aggravation, as well as cause too many requests which slows down the application's performance.

An interceptor within an Angular application can be utilized to optimize your code and increase the competence of your web app by preserving a few API hits for an identical endpoint.

By implementing this strategy and specifying the endpoints to cache, the interceptor does the rest of the work. This will help make your application more efficient, quicker, and more pleasurable for users.

An ApiInterceptor, an Angular interceptor, has been implemented to cache HTTP responses from particular API endpoints. It is using the HttpInterceptor class, and its intercept() method is responsible for managing all HTTP requests and responses.

When a request is intercepted, the interceptor will investigate if the request endpoint is in a pre-defined list of endpoints to be cached. If it is, the interceptor looks to see if the response has been cached already. If it has been kept, the interceptor will return the cached response. If the response is not cached, the interceptor will submit the request to the server, store the response, and then give the response to the original requester.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

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
