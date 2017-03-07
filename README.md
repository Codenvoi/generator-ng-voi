
# generator-ng-voi
> _**Let us worry about the application structure so that you can focus on development :)**_

<p align="center">
  <a href="#" alt="generator-ng-voi" title="ng-voi">
    <img src="https://cloud.githubusercontent.com/assets/20506431/23587497/5463f7aa-01cf-11e7-8e85-55f21acbf2e0.png">
  </a>
</p>


## About
ng-voi has been developed to give you some relaxation in maintaining the application structure, it creates structure which is pre-configured 
with the tools that you might need in developing your dream project.

<p align="center" >
  <a href="http://yeoman.io/" target="_blank" alt="yeoman" title="yeoman">
    <img height="100" src="https://cloud.githubusercontent.com/assets/20506431/23586072/96a84fe6-01af-11e7-8ee4-b7c0a758d706.png">
  </a>
  <a href="http://gulpjs.com/" target="_blank" alt="gulp" title="gulp">
    <img height="100" src="https://cloud.githubusercontent.com/assets/20506431/23586069/968ab364-01af-11e7-9c24-f6036e1f0a32.png">
  </a>
  <a href="http://bower.io/" target="_blank" alt="bower" title="bower">
    <img height="100" src="https://cloud.githubusercontent.com/assets/20506431/23586067/964c829c-01af-11e7-995c-dd0ac5c4fe5e.png">
  </a>
  <a href="https://angularjs.org/" target="_blank" alt="angular" title="angular">
    <img height="100" src="https://cloud.githubusercontent.com/assets/20506431/23586066/963a2142-01af-11e7-9eb1-5cd474f5d66e.png">
  </a>
  <br>
  <br>
  <a href="http://sass-lang.com/" target="_blank" alt="sass" title="sass">
    <img height="100" src="https://cloud.githubusercontent.com/assets/20506431/23586070/9699df24-01af-11e7-9e5e-203b1be2143a.png">
  </a>
  <a href="https://www.browsersync.io/" target="_blank" alt="browsersync" title="browsersync">
    <img height="100" src="https://cloud.githubusercontent.com/assets/20506431/23586068/96725b5c-01af-11e7-8e8a-02c2373fae0a.png">
  </a>
</p>

### Other Pre-configured Tools
* UI-Router
* Restangular
* Angular Messages
* Bootstrap
* Font Awesome
* Local Storage (ngStorage)
* SCSS

## Setup

### Prerequisites

**Node.js and npm** - Install node and npm from their [website](https://nodejs.org)
**Yeoman, Gulp and Bower** - Run this command with ADMIN rights to avoid any error during installation
```sh
npm install -g yo gulp bower
```
**Compass for SCSS** - Install ruby from [link](https://www.ruby-lang.org/en/documentation/installation/) and then install compass with this command
```sh
gem install compass
```

### Generator
```sh
npm install -g generator-ng-voi
```

## Development

### Generate your project
**Create an empty directory** - create and change directory
```sh
mkdir projectName && cd projectName
```
**Start the magic** - Initiate the generator
```sh
yo ng-voi
```

Answer the questions asked, once the setup is completed, you are ready to code! :)

**Run the project**
```sh
gulp
```
This will open the browser with your project hosted at http://localhost:3000

### Files Structure

**Application Files**
```sh
├──app/
|  ├──fonts/
|  |  └──...                                        # some font files
|  ├──src/                                          # source files
|  |  ├──common/                                    # common module folder, contains global factories/services/other components
|  |  |  ├──exceptions/                             # exceptions interceptor folder
|  |  |  |  └──exceptions.factory.js/               # http interceptor
|  |  |  └──common.module.js                        # common module file
|  |  ├──components/                                # components module folder, contains global directives
|  |  |  └──components.module.js                    # components module file
|  |  ├──core/                                      # core module folder, mostly contains third party components configs
|  |  |  ├──core.constant.js                        # a constant file
|  |  |  ├──core.module.js                          # core module file
|  |  |  ├──httpStatus.constant.js                  # some predefined http status codes
|  |  |  ├──restangular.config.js                   # restangular config file
|  |  |  └──router.config.js                        # router config file
|  |  ├──layouts/                                   # layouts module folder, a test module created by default
|  |  |  ├──header.html/                            # application header html
|  |  |  ├──home.html/                              # application home page html
|  |  |  ├──layouts.controller.js/                  # a controller
|  |  |  ├──layouts.html/                           # html page contains named UI views
|  |  |  └──layouts.module.js                       # layouts module file
|  |  ├──app.module.js/                             # main module file, contains all other app modules
|  ├──styles/                                       # styles
|  |  ├──css/                                       # this folder will contain the converted css
|  |  |  └──...                                     # converted css file and folder
|  |  ├──scss/                                      # this folder will contain the scss
|  |  |  ├──partials/                               # contains some individual scss files
|  |  |  |  ├──globals.scss                         # global scss
|  |  |  |  └──home.scss                            # home.html's scss
|  |  |  └──main.scss                               # contains imported scss statements
|  └──index.html                                    # main index.html file
└──...
```

**Configuration Files**
```sh
├──.bowerrc                                         # bower config file
├──.gitignore                                       # gitignore
├──bower.json                                       # bower components details
├──gulp.config.js                                   # gulp config file
├──gulpfile.js                                      # gulp tasks
└──package.json                                     # node packages details
```

### Sub-generators
We have added many sub-generators to ease you during development, just run any sub-generator and it will add the required component in the project.
```sh
yo ng-voi:module <moduleName>                       # creates a new module
yo ng-voi:controller <moduleName>.<controllerName>  # creates a controller in a module
yo ng-voi:factory <moduleName>.<factoryName>        # creates a factory in a module
yo ng-voi:directive <moduleName>.<directiveName>    # creates a directive in a module
yo ng-voi:filter <moduleName>.<filterName>          # creates a filter in a module
yo ng-voi:value <moduleName>.<valueName>            # creates a value in a module
yo ng-voi:constant <moduleName>.<constantName>      # creates a constant in a module
yo ng-voi:view <moduleName>.<viewName>              # creates a view in a module
```

The above commands can also be run without the arguments, and we will take care of that. e.g:

**Only component name** - if you run the controller sub-generator with only component name
```sh
yo ng-voi:controller <controllerName>
```
The generator will ask you the module name later during component creation

**No argument** - if you run the controller sub-generator with no argument
```sh
yo ng-voi:controller
```
The generator will ask you the module name and controller name later during component creation

### Multi-level Directory Support
Though we are following Module based approach for structuring, but in case you need to create multi level directories, it's also supported by modifying the command as follows
```sh
yo ng-voi:controller <moduleName>.<directoryPath>/<controllerName>
```
This will put the controller in a directory path specified in the command. e.g:
```sh
yo ng-voi:view moduleA.models/viewA
```
The output will be like this
```sh
src/
   ├──moduleA/
   |  ├──moduleA.module.js
   |  ├──moduleA.controller.js
   |  ├──moduleA.html
   |  └──models/                    # the directory, specified in the command
   |     └──viewA.html              # the new view, just added
   └──...
```


## Gulp Tasks & Production Build

### Development Tasks
You may only want to run this single command during development as it loads the project in browser and also watch for any change in the files and of course the scss to css conversion
```sh
gulp                                # or gulp serve
```
The other useful commands are
```sh
gulp watch                          # watch for changes
gulp sass                           # scss to css conversion
```

### Production Tasks
We have already covered the production build configurations
```sh
gulp build                          # prepares a production ready build of the project inside /build folder
gulp serve-build                    # open the production build in browser
```

## Upcoming Features
* Support for a linting tool (ESLint/JSLint/JSHint)
* Support for angular material
* Lots of test cases

## Question/Feedback/Issue?
We are still working on it to make it even better, any question/feedback/issue will be appreciated.

### Question/Feedback
You can directly email us at contact@codenvoi.com
<br>
Website: http://www.codenvoi.com
<br>
Facebook Page: https://web.facebook.com/codenvoi/

### Issues
Check [old issue](https://github.com/Codenvoi/generator-ng-voi/issues), if none of them is related to yours [create a new one](https://github.com/Codenvoi/generator-ng-voi/issues/new)

## License
Licensed under MIT
