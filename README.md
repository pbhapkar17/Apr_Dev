To create Project : ng new projectName
routing : y
css

To Run Angular project >> Open Terminal at ur project Folder : ng s -o
ng serve / ng serve --open / ng s / ng s --open
https://drive.google.com/drive/folders/1xv0AEUNOjeVkG9eOnATUB3lvm090A_u3

recorded session link:
https://drive.google.com/drive/folders/1TdwQqJ3chuHNultX_-va45MgvvLLqllb?usp=share_link

If u r cloning project then u have to generate node_module folder locally: npm i / npm i -f then only do ng s -o
simple routing :
1. add  <router-outlet></router-outlet> directive into app.compo.html
2. create path and component into routing.module.ts file
3. add routerLink attribute to the button or achor tag to link component/screen

command to create new module :ng g m admin --routing
 to create module and update app.routing .ts :
 ng g m student --route student --module app.module

Angular Artchitecture
 compo: building blocks of angular application
 compo.. + compo... + pipes + directives + services = module
 module.. + module ... = project

 Eagrely loaded module: appModule : will loads initially.
-landing screen related components only we load here.

Lazy loading:  As per the need/requirement/action gets loaded.
(pros: initially unneccessorly modules will not gets loaded,
network traffic reduce, smooth light waith application ,
application will not freez/crash bcz we are loading compo from module as per the requirment )
multiple modules :
-multi compo , services etc...


global/open component routing:
1.create open/global compo
2.add path and component object into app.routing.ts file
3.redirect from .html or .ts file
4 .html file : routerLink ="/path" on action it will redirect.

to fetch component inside's module:
1.command to create new module :ng g m admin --routing
.routing.ts
module.ts

2.open terminel at module folder to create cmponent inside it: ng g c adminLogin
3.import custom (created by u) module app.routing.ts(global routing file) 
e.g { path : 'admin', loadChildren:()=> import('./admin/admin.module').then(mod => mod.AdminModule)}
4.create button to home screen to redirect into modules compo
routerLink : '/moduleName/component inside module' 
e.g. routerLink:'/admin/admin-signup'

update angular 14 :
 to create new module and update app.routing.ts file autmatically command :
 ng g m student --route student --module app.module

to redirect on compo from .ts file:
open compo:
1.button, bind function on click event
2.define function into .ts file
3.import router class to .ts file
4.add router  class to constructor
5.take reference property using this keyword and redirect to compo using navagateByUrl method

what are different Data transsmission techniques we have in Angular:
1.By using Services 2.parent Child 3. child parent 4. subject 5.viewchild

1.To create Service: ng genrate service serviceName/ ng g s serviceName
2.create property or function into service
3.import service int component(where we want to set or get data to/from service)

parent to child data transfer:
parent.html >> 1. add selector of child component 
2.declare property in child component with @Input() decorator,import Input class
( @Input():property we can use beyond component)
3.create one local property in parent.ts file bind it to ngModel if we want data to be transfered from parent's input box to the child component.
or create one local property with some harcoded value which u want to pass to the child component.
4.bind child component's property to the selector using proprty binding symbol and bind local property to it which data we need to pass to the child compo.


child to parent:
1.add property in child component having prefix @Output Decorator.which is of eventEmmiter type.
2.trigger function on every keyup from DOM and trigger event from function using emit method.
3.pass value of input box as parameter/argument to the parent component.
4.In parent component's .html file add event coming from child and bind function to it
5.every time whenever event is emitting from child automatic event is triggering in parent component and hence function will get called by taking value from child.
  

How to install bootstrap:
(https://www.freecodecamp.org/news/how-to-add-bootstrap-css-framework-to-an-angular-application/)

1. npm install @ng-bootstrap/ng-bootstrap@next
2.angular.json:
 "styles": [
  "node_modules/bootstrap/scss/bootstrap.scss",
  "node_modules/bootstrap-icons/font/bootstrap-icons.css",
  "src/styles.scss"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]

material install: ng add @angular/material

To make API call steps:
1. import HttpClientModule to the module.ts file
2. import HttpClient into service and inject its dependency into the constructor
(using reference property we need to call API methods)
3.import apiicall service, inject dependancy into the component where we need to call API.
4.create function having API method into the service

5.on submit button write code to make API call from service using function which we have created in the service


get API CALL
1.create button in any compo bind one fuction on click event check function is getting called on click on button
2.go to the any service from where u want to make API call, check wheather HttpClient class is imported and DI in constructor or not,if not then have to import and DI it.
3.go to module.ts file or shared module.ts file check HttpClientModule is imported to the module or not.if not then have to import it,update import section..



When making API calls in Angular 10, you typically follow these steps:

Import the required dependencies: In your component or service file, import the necessary dependencies from Angular's HTTP module. This includes HttpClient for sending HTTP requests and HttpHeaders for setting request headers.
typescript
import { HttpClient, HttpHeaders } from '@angular/common/http';
Inject the HttpClient dependency: In the constructor of your component or service, inject the HttpClient dependency.
typescript
constructor(private http: HttpClient) { }
Define the API endpoint: Set the URL of the API endpoint you want to call.
typescript
const apiUrl = 'https://api.example.com/users';
Make the API call: Use the HttpClient instance to make the API call. You can choose between different HTTP methods such as GET, POST, PUT, DELETE, etc. Here's an example of making a GET request:
typescript
this.http.get(apiUrl).subscribe(
  (response) => {
    // Handle the response data
  },
  (error) => {
    // Handle any errors
  }
);
Handle the response: In the success callback of the subscribe() method, you can handle the response returned by the API. This may include parsing and processing the data received from the server.

Handle errors: In the error callback of the subscribe() method, you can handle any errors that occur during the API call. This can involve displaying error messages to the user or taking appropriate action based on the error.

Optional: Add request headers or parameters: If required, you can set additional request headers or parameters using the HttpHeaders class.

typescript
const headers = new HttpHeaders().set('Authorization', 'Bearer your_token');
this.http.get(apiUrl, { headers }).subscribe(/* ... */);
These steps provide a basic outline for making API calls in Angular 10. Depending on your requirements, you may need to include additional logic for handling authentication, handling response transformations, or working with observables and operators to manage asynchronous data flow.

To install angular material:
ng add @angular/material