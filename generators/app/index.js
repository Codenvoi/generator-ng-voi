'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator{

    constructor(args, opts){
        super(args, opts);
    }

    prompting() {
        // Have Yeoman greet the user.
        this.log(yosay(
            'Greetings by ' + chalk.bold.yellow('ng-voi') + ', a simple and easy to use AngularJS scaffolding generator'
        ));

        this.log(chalk.bold.yellow('Make sure you are running this command with ADMIN rights to avoid any error with npm during installation'));

        var prompts = [
            {
                type: 'input',
                name: 'name',
                message: 'Give your project an awesome name?',
                default: this.appname
            },
            {
                type: 'input',
                name: 'description',
                message: 'Any description you would like to add?',
                default: ""
            }
        ];

        return this.prompt(prompts).then(function (props) {
            // To access props later use this.props.someAnswer;
            this.props = props;
            this.log(props.name);
            this.log(props.description);

        }.bind(this));
    }

    writing(){

        /*
         * CONFIGS FILES
         * */

        // Package.json
        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'), {
                name: this.props.name,
                description: this.props.description
            }
        );
        // Bower Files
        this.fs.copyTpl(
            this.templatePath('_bower.json'),
            this.destinationPath('bower.json'), {
                name: this.props.name
            }
        );
        this.fs.copy(
            this.templatePath('bowerrc'),
            this.destinationPath('.bowerrc')
        );
        // Gulp Files
        this.fs.copy(
            this.templatePath('_gulp.config.js'),
            this.destinationPath('gulp.config.js')
        );
        this.fs.copy(
            this.templatePath('_gulpfile.js'),
            this.destinationPath('gulpfile.js')
        );
        // Gitignore
        this.fs.copy(
            this.templatePath('_.gitignore'),
            this.destinationPath('.gitignore')
        );

        /*
         * APPLICATION FILES
         * */

        // index.html
        this.fs.copy(
            this.templatePath('_app/_index.html'),
            this.destinationPath('app/index.html')
        );

        // Styles
        this.fs.copy(
            this.templatePath('_app/_styles/_scss/_main.scss'),
            this.destinationPath('app/styles/scss/main.scss')
        );
        this.fs.copy(
            this.templatePath('_app/_styles/_scss/_partials/_globals.scss'),
            this.destinationPath('app/styles/scss/partials/globals.scss')
        );
        this.fs.copy(
            this.templatePath('_app/_styles/_scss/_partials/_home.scss'),
            this.destinationPath('app/styles/scss/partials/home.scss')
        );

        // Fonts
        this.fs.copy(
            this.templatePath('_app/_fonts/_OpenSans-Light.ttf'),
            this.destinationPath('app/fonts/OpenSans-Light.ttf')
        );
        this.fs.copy(
            this.templatePath('_app/_fonts/_OpenSans-Regular.ttf'),
            this.destinationPath('app/fonts/OpenSans-Regular.ttf')
        );
        this.fs.copy(
            this.templatePath('_app/_fonts/_OpenSans-Semibold.ttf'),
            this.destinationPath('app/fonts/OpenSans-Semibold.ttf')
        );

        // Src
        this.fs.copy(
            this.templatePath('_app/_src/_app.module.js'),
            this.destinationPath('app/src/app.module.js')
        );
        this.fs.copy(
            this.templatePath('_app/_src/_layouts/_layouts.module.js'),
            this.destinationPath('app/src/layouts/layouts.module.js')
        );
        this.fs.copy(
            this.templatePath('_app/_src/_layouts/_layouts.controller.js'),
            this.destinationPath('app/src/layouts/layouts.controller.js')
        );
        this.fs.copy(
            this.templatePath('_app/_src/_layouts/_layouts.html'),
            this.destinationPath('app/src/layouts/layouts.html')
        );
        this.fs.copy(
            this.templatePath('_app/_src/_layouts/_header.html'),
            this.destinationPath('app/src/layouts/header.html')
        );
        this.fs.copy(
            this.templatePath('_app/_src/_layouts/_home.html'),
            this.destinationPath('app/src/layouts/home.html')
        );
        this.fs.copy(
            this.templatePath('_app/_src/_core/_core.module.js'),
            this.destinationPath('app/src/core/core.module.js')
        );
        this.fs.copy(
            this.templatePath('_app/_src/_core/_core.constant.js'),
            this.destinationPath('app/src/core/core.constant.js')
        );
        this.fs.copy(
            this.templatePath('_app/_src/_core/_httpStatus.constant.js'),
            this.destinationPath('app/src/core/httpStatus.constant.js')
        );
        this.fs.copy(
            this.templatePath('_app/_src/_core/_restangular.config.js'),
            this.destinationPath('app/src/core/restangular.config.js')
        );
        this.fs.copy(
            this.templatePath('_app/_src/_core/_router.config.js'),
            this.destinationPath('app/src/core/router.config.js')
        );
        this.fs.copy(
            this.templatePath('_app/_src/_components/_components.module.js'),
            this.destinationPath('app/src/components/components.module.js')
        );
        this.fs.copy(
            this.templatePath('_app/_src/_common/_common.module.js'),
            this.destinationPath('app/src/common/common.module.js')
        );
        this.fs.copy(
            this.templatePath('_app/_src/_common/_exceptions/_exceptions.factory.js'),
            this.destinationPath('app/src/common/exceptions/exceptions.factory.js')
        );


    }

    install() {

        this.log("\n"+chalk.bold.cyan("Hold on tight!"));

        this.installDependencies();
    }

    end() {

        this.log("\n"+chalk.bold.cyan(this.props.name+" is ready to use :)"));

    }

};
