# Habitissimo front-end challenge

This is the front-end Habitissimo challenge budget landing page as part of the technical hiring process,
developed in VueJS + Typescript, using .vue components, enum, interfaces and more. 

## Project setup
You will need to install the following through your computer command line/terminal: <br>
1. Node + npm: https://nodejs.org/es/
2. Vue-cli tools: ```npm install -g @vue/cli```

Also, you can check if you have the right version with this command:
```
vue --version
```

Finally, execute the following command on the application root folder:
```
npm install
```
<strong>NOTE: </strong> You may need a 'sudo' installation in Linux and MacOS. 
In this case, type the following command:
```
sudo npm install
``` 

## How to run
On the application root folder execute the following command:
```
npm run serve
```
After the compilation, you will be able to open the website with the link below:
```
http://localhost:8080/
```
<strong>IMPORTANT NOTE: </strong> In case of not receiving data from the Habitissimo API, 
it is due to a browser conflict error with CORS. You may need to follow the instructions in this link (for Chrome only):
https://alfilatov.com/posts/run-chrome-without-cors/     

## Project structure
The application is composed of one root component that has several nested components. 
Vue components are single file components that contain the component template, Javascript (in this case, Typescript) and CSS. 
Vue-property-decorator package has been used to make these single file components more Angular-like. 

Actual project structure:
```
├─── public 
└─── src
    ├─── assets
    │   └─── img
    ├─── components
    │   └─── Form
    ├─── enum
    ├─── interfaces
    ├─── services
    └─── utils
│   .gitignore
│   babel.config.js
│   package.json
│   README.md
│   tsconfig.json
│   types.d.ts
```

<strong>Public: </strong> It contains the root html file where the "app" vue component is mounted. <br>
<strong>Assets: </strong> Here is the main folder that contains the project images. <br>
<strong>Components: </strong> Every Vue component related with the project. <br>
<strong>Enum: </strong> Project enumerates. <br>
<strong>Interfaces: </strong> Component data interfaces in order to control each component handling data.<br>
<strong>Services: </strong> Main service to get the server data through requests. <br>
<strong>Utils: </strong> It contains the main land page static texts. <br>
<strong>App.vue: </strong> Main root project component. <br>
<strong>Main.ts: </strong> Main app module. <br>
<strong>Babel.config.js: </strong> Babel config file. <br>
<strong>Package.json: </strong> File that contains each plugin/library package installed.  <br>
<strong>Tsconfig.json: </strong> Typescript config file. <br>
<strong>Types.d.ts: </strong> The "d.ts" file is used to provide typescript type information about an API that's written in JavaScript. <br>

## Testing
```
No available tests right now, if you need some examples, please, do not hesitate to contact me :).
```
